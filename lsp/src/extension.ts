import { ExtensionContext } from 'vscode';

import {
	Executable,
	LanguageClient,
	LanguageClientOptions,
	TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
	const serverOptions: Executable = {
		command: "embe-ls",
		transport: TransportKind.stdio,
		args: []
	};

	const clientOptions: LanguageClientOptions = {
		documentSelector: [{ scheme: 'file', language: 'embe' }]
	};

	client = new LanguageClient(
		'embe-ls',
		'Embe Language Server',
		serverOptions,
		clientOptions
	);

	client.start();
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
