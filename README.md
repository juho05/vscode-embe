# vscode-embe

Language support for [embe](https://github.com/Bananenpro/embe).

## Features

- Syntax highlighting
- Indentation
- LSP via [embe-ls](https://github.com/Bananenpro/embe-ls)

## Installation

- [Download](https://github.com/Bananenpro/vscode-embe/releases/latest) the `*.vsix` file.
- Open the _Extensions_ tab in VS Code.
- Press the three dots in the top right corner of the _Extensions_ window.
- Choose _Install from VSIX…_.
- Select the downloaded file.
- Hit _Install_.

## Development

- Clone the repository:
```
git clone https://github.com/Bananenpro/vscode-embe
cd vscode-embe
```

- Install dependencies and open VS Code:
```
npm install
code .
```

- Press Ctrl+Shift+B to compile the extension in [watch mode](https://code.visualstudio.com/docs/editor/tasks#:~:text=The%20first%20entry%20executes,the%20HelloWorld.js%20file.).
- Hit F5 to launch a new VS Code window with the extension loaded.

## License

MIT License

Copyright (c) 2022 Julian Hofmann

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
