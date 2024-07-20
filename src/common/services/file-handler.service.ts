import { join } from 'path';
import { writeFileSync } from 'fs';


export class FileHandlerService {

    private filePath: string;

    private fullQualifiedFilePath: string = '';
    private unitTestFileName: string = '';


    constructor(filePath: string) {
        this.filePath = filePath;
    }


    public createNewFile(): void {
        this.unitTestFileName = this.generateUnitTestFileName();
        this.fullQualifiedFilePath = this.getNewFileFileCreationLocation();

        try {
            writeFileSync(this.getFullQualifiedFilePath, 'TO DO');
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


}