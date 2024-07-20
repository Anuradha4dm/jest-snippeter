// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { createNewUnitTestFile } from './commands/create-new-unit-test-file';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "jest-snippeter" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('jest-snippeter.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from jest-snippeter!');
	});

	const createNewUnitTestFileFn=vscode.commands.registerCommand('jest-snippeter.createTestFile', (uri: vscode.Uri)=>{

		if(uri){
			const filePath: string=uri.fsPath;
			// const fileName: string =uri.path.split('/').pop() ?? 'rename-file';

			createNewUnitTestFile(filePath);
		}
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(createNewUnitTestFileFn);
}

// This method is called when your extension is deactivated
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function deactivate() {}
