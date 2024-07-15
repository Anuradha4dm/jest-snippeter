
import { FileHandlerService } from "./file-handler.service";

jest.mock('fs', () => ({
  writeFileSync: jest.fn(),
}));
describe('File Handler Service', () => {

  describe('createNewFile', () => {

    it('Should return new file create location by adding the file name for full qualifed path', () => {

      const fileHandler: FileHandlerService = new FileHandlerService('c:\\Users\\ALAIN\\Documents\\Project\\landing.component.ts');
      fileHandler.createNewFile();

      expect(fileHandler.getFullQualifiedFilePath).toBe('c:\\Users\\ALAIN\\Documents\\Project\\landing.component.spec.ts');
    });

  });

  describe('generateUnitTestFileName', () => {

    it('should return file name for component file', () => {
      const fileHandler: FileHandlerService = new FileHandlerService('c:\\Users\\ALAIN\\Documents\\Project\\landing.component.ts');
      fileHandler.createNewFile();

      expect(fileHandler.getUnitTestFileName).toBe('landing.component.spec.ts');
    });

    it('should return default file name as rename-file.spec.ts when file path is not given', () => {
      const fileHandler: FileHandlerService = new FileHandlerService('');
      fileHandler.createNewFile();

      expect(fileHandler.getUnitTestFileName).toBe('rename-file.spec.ts');
    });

    it('should generate service file name when the selected file is service file', () => {
      const fileHandler: FileHandlerService = new FileHandlerService('c:\\Users\\ALAIN\\Documents\\Project\\request.service.ts');
      fileHandler.createNewFile();

      expect(fileHandler.getUnitTestFileName).toBe('request.service.spec.ts');
    });

    it('should generate directive file name when the selected file is directive file', () => {
      const fileHandler: FileHandlerService = new FileHandlerService('c:\\Users\\ALAIN\\Documents\\Project\\metadata.directive.ts');
      fileHandler.createNewFile();

      expect(fileHandler.getUnitTestFileName).toBe('metadata.directive.spec.ts');
    });

    it('should generate pipe file name when the selected file is pipe file', () => {
      const fileHandler: FileHandlerService = new FileHandlerService('c:\\Users\\ALAIN\\Documents\\Project\\metadata.pipe.ts');
      fileHandler.createNewFile();

      expect(fileHandler.getUnitTestFileName).toBe('metadata.pipe.spec.ts');
    });

  });


});