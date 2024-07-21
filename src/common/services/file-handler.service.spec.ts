
import { INIT_TEST_FILE_CONTEXT_COMPONENT_EXPECTED } from "../../test-helpers/expected-templates";
import { FileHandlerService } from "./file-handler.service";
import { resolve } from 'path';

jest.mock('fs', () => ({
  writeFileSync: jest.fn(),
}));
describe('File Handler Service', () => {

  describe('createNewFile', () => {

    it('Should return new file create location by adding the file name for full qualifed path', () => {

      const fileHandler: FileHandlerService = new FileHandlerService('c:/Users/ALAIN/Documents/Project/landing.component.ts');
      fileHandler.createNewFile('TestComponent');
      
      const expectedPath: string=resolve('c:/Users/ALAIN/Documents/Project/landing.component.spec.ts');
      const actualPath: string= resolve(fileHandler.getFullQualifiedFilePath);


      expect(actualPath).toBe(expectedPath);
    });

  });

  describe('generateUnitTestFileName', () => {

    it('should return file name for component file', () => {
      const fileHandler: FileHandlerService = new FileHandlerService('c:\\Users\\ALAIN\\Documents\\Project\\landing.component.ts');
      fileHandler.createNewFile('TestComponent');

      expect(fileHandler.getUnitTestFileName).toBe('landing.component.spec.ts');
    });

    it('should return default file name as rename-file.spec.ts when file path is not given', () => {
      const fileHandler: FileHandlerService = new FileHandlerService('');
      fileHandler.createNewFile('TestComponent');

      expect(fileHandler.getUnitTestFileName).toBe('rename-file.spec.ts');
    });

    it('should generate service file name when the selected file is service file', () => {
      const fileHandler: FileHandlerService = new FileHandlerService('c:\\Users\\ALAIN\\Documents\\Project\\request.service.ts');
      fileHandler.createNewFile('TestComponent');

      expect(fileHandler.getUnitTestFileName).toBe('request.service.spec.ts');
    });

    it('should generate directive file name when the selected file is directive file', () => {
      const fileHandler: FileHandlerService = new FileHandlerService('c:\\Users\\ALAIN\\Documents\\Project\\metadata.directive.ts');
      fileHandler.createNewFile('TestComponent');

      expect(fileHandler.getUnitTestFileName).toBe('metadata.directive.spec.ts');
    });

    it('should generate pipe file name when the selected file is pipe file', () => {
      const fileHandler: FileHandlerService = new FileHandlerService('c:\\Users\\ALAIN\\Documents\\Project\\metadata.pipe.ts');
      fileHandler.createNewFile('TestComponent');

      expect(fileHandler.getUnitTestFileName).toBe('metadata.pipe.spec.ts');
    });

  });

  describe('getFinalizedTestFileContent', ()=>{

    it('should replace all the $COMPONENT$ placeholder with given class name',()=>{
      const fileHandler: FileHandlerService = new FileHandlerService('c:\\Users\\ALAIN\\Documents\\Project\\test.component.ts');
      fileHandler.createNewFile('TestComponent');

      expect(fileHandler['getFinalizedTestFileContent']('component','TestComponent')).toStrictEqual(INIT_TEST_FILE_CONTEXT_COMPONENT_EXPECTED);
    });

    it('should replace all the $COMPONENT_PATH$ placeholder with its file path of the import',()=>{
      const fileHandler: FileHandlerService = new FileHandlerService('c:\\Users\\ALAIN\\Documents\\Project\\test.component.ts');
      fileHandler.createNewFile('TestComponent');
      
      expect(fileHandler['getFinalizedTestFileContent']('component','TestComponent')).toStrictEqual(INIT_TEST_FILE_CONTEXT_COMPONENT_EXPECTED);
    });

    it('should return nothing when type is a valid value',()=>{
      const fileHandler: FileHandlerService = new FileHandlerService('c:\\Users\\ALAIN\\Documents\\Project\\test.component.ts');

      expect(fileHandler['getFinalizedTestFileContent']('test','TestComponent')).toStrictEqual('');
    });

  });


});