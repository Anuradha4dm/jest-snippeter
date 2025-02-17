import { FileHandlerService } from '../common/services/file-handler.service';

export function createNewUnitTestFile(filePath: string, className: string): void {
    const fileHandler: FileHandlerService=new FileHandlerService(filePath);

    fileHandler.createNewFile(className);
}

