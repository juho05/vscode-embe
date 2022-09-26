import { ExtensionContext } from 'vscode';

import {
	Executable,
	LanguageClient,
	LanguageClientOptions,
	TransportKind
} from 'vscode-languageclient/node';
import { openStdin } from 'process';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
	const serverOptions: Executable = {
		command: "embe-ls"
	};

	const clientOptions: LanguageClientOptions = {
		documentSelector: [{ scheme: 'file', language: 'embe' }]
	};

	if (process.platform != "win32") {
		if (!process.env["PATH"].includes("/usr/local/bin")) {
			process.env["PATH"] += ":/usr/local/bin";
		}
		if (!process.env["PATH"].includes(process.env["HOME"] + "/.local/bin")) {
			process.env["PATH"] += ":" + process.env["HOME"] + "/.local/bin";
		}
	}

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
