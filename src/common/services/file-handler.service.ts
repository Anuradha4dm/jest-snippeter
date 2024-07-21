import { join } from 'path';
import { writeFileSync } from 'fs';
import { INIT_TEST_FILE_CONTEXT_COMPONENT } from '../../default-context/initial-file-context';

export class FileHandlerService {

    private filePath: string;

    private fullQualifiedFilePath: string = '';
    private unitTestFileName: string = '';


    constructor(filePath: string) {
        this.filePath = filePath;
    }


    public createNewFile(className: string): void {
        this.unitTestFileName = this.generateUnitTestFileName();
        this.fullQualifiedFilePath = this.getNewFileFileCreationLocation();

        try {
            writeFileSync(this.getFullQualifiedFilePath, this.getFinalizedTestFileContent('component', className));
        } catch (error) {
            console.log('error', error);
        }
    }

    public get getFullQualifiedFilePath(): string {
        return this.fullQualifiedFilePath;
    }

    public get getUnitTestFileName(): string {
        return this.unitTestFileName;
    }
    private getNewFileFileCreationLocation(): string {
        const newFileCreateLocation: string[] = this.filePath.split('\\').slice(0, -1);

        return join(...newFileCreateLocation, this.unitTestFileName);
    }

    private generateUnitTestFileName(): string {
        const contextFileName: string = this.filePath.split('\\').pop() ?? 'rename-file';
        const fileNameSplitted: string[] = contextFileName.split('.');

        switch (fileNameSplitted[1]) {
            case 'component': {
                return `${fileNameSplitted[0]}.component.spec.ts`;
            }
            case 'directive': {
                return `${fileNameSplitted[0]}.directive.spec.ts`;
            }
            case 'pipe': {
                return `${fileNameSplitted[0]}.pipe.spec.ts`;
            }
            case 'service': {
                return `${fileNameSplitted[0]}.service.spec.ts`;
            }
            default: {
                return 'rename-file.spec.ts';
            }

        }
    }

    private getFinalizedTestFileContent(type: string, className: string): string{
        let testFileContent: string='';

       if(type==='component'){
        const replacement: Array<{searchValue: string ,replacement: string}>=[
            {
                searchValue: '$COMPONENT$',
                replacement: className
            },
            {
                searchValue: '$COMPONENT_PATH$',
                replacement: `./${this.getFilePathForImport(this.unitTestFileName)}`
            }
        ];
        testFileContent= this.replacementInTemplated(INIT_TEST_FILE_CONTEXT_COMPONENT, replacement);
       }

       return testFileContent;

    }

    private replacementInTemplated(context: string, replacements: Array<{searchValue: string ,replacement: string}>): string{
        replacements.forEach((replace: {searchValue: string ,replacement: string})=>{
            context=context.replaceAll(replace.searchValue, replace.replacement);
        });

        return context;
    }

    private getFilePathForImport(fileName: string): string{
        return fileName.replace('.spec.ts', '');
    }


}