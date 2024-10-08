<div align="center">
    <img src="logo-hq.png?raw=true" alt="TypeScriptToLua" width="256" />
    <h1>
        <p>TypeScriptToLua</p>
        <a href="https://github.com/TypeScriptToLua/TypeScriptToLua/actions"><img alt="CI status" src="https://github.com/TypeScriptToLua/TypeScriptToLua/workflows/CI/badge.svg" /></a>
        <a href="https://codecov.io/gh/TypeScriptToLua/TypeScriptToLua"><img alt="Coverage" src="https://img.shields.io/codecov/c/gh/TypeScriptToLua/TypeScriptToLua.svg?logo=codecov" /></a>
        <a href="https://discord.gg/BWAq58Y"><img alt="Chat with us!" src="https://img.shields.io/discord/515854149821267971.svg?colorB=7581dc&logo=discord&logoColor=white"></a>
    </h1>
    <a href="https://typescripttolua.github.io/" target="_blank">Documentation</a>
    |
    <a href="https://typescripttolua.github.io/play/" target="_blank">Try Online</a>
    |
    <a href="https://github.com/TypeScriptToLua/TypeScriptToLua/blob/master/CHANGELOG.md">Changelog</a>
    |
    <a href="https://github.com/TypeScriptToLua/TypeScriptToLua/blob/master/CONTRIBUTING.md">Contribution guidelines</a>
</div>

---

A generic TypeScript to Lua transpiler. Write your code in TypeScript and publish Lua!

*This fork changhes the way classes are constructed, going from metatables to functions inside the table*

Large projects written in Lua can become hard to maintain and make it easy to make mistakes. Writing code in TypeScript instead improves maintainability, readability and robustness, with the added bonus of good [tooling] support (including [ESLint], [Prettier], [Visual Studio Code] and [WebStorm]). This project is useful in any environment where Lua code is accepted, with the powerful option of simply declaring any existing API using TypeScript declaration files.

[tooling]: https://typescripttolua.github.io/docs/editor-support
[eslint]: https://eslint.org/
[prettier]: https://prettier.io/
[visual studio code]: https://code.visualstudio.com/
[webstorm]: https://www.jetbrains.com/webstorm/
