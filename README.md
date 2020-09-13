<div align="center">
  <img src="https://p5js.org/assets/img/p5js.svg" alt="Logo project" height="80" />
  <br>
  <br>
  <p>
    <b>p5.js CLI</b>
  </p>
  <p>
     <i>A small CLI tool for creating new p5.js sketches.</i>
  </p>
  <p>

[![NPM version](https://img.shields.io/npm/v/p5js-cli)](https://img.shields.io/npm/v/p5js-cli)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
![downloads](https://img.shields.io/npm/dt/p5js-cli.svg)

[![NPM](https://nodei.co/npm/p5js-cli.png?compact=true)](https://nodei.co/npm/p5js-cli/)

  </p>
</div>

---

**Content**

* [Features](##features)
* [Install](##install)
* [Usage](##usage)
* [Commands](##commands)
* [Structure](##structure)
* [Contributing](##contributing)
* [Maintainers](##maintainers)

## Features ✨
* Easily bootstrap a fresh p5.js sketch template.
* Run a static server your project directory.

## Install 🐙
```
npm install -g p5js-cli
```

## Usage 💡
### p5 new
1. Open your favorite terminal of choice.
2. Navigate to a directory where you want to make your project folder.
3. Run `p5 new <project name>`. (If project name is not provided it will ask for it in a prompt)
4. Navigate into your newly created project directory. `cd <project name>`
5. Done! 🎉 Go crazy with your new p5.js sketch!

### p5 serve
1. Open your favorite terminal of choice.
2. Navigate to a directory with the files you want to serve.
3. Run `p5 serve <port>` (port is optional, defaults to 3000).
4. Go to `https://localhost:<port>/` and see your project in action!

## Commands 🖍
`p5 new <project name>` - Generates a new empty p5.js sketch template in a directory with the same name as the project name.

`p5 serve <port>` - Starts a server for static files in your current directory. Great for testing your p5.js sketches. (port is optional, defaults to 3000)

## Structure 🗃
```
<project name>
├───index.html
└───sketch.js
```

## Contributing 🍰
1. Fork the repo.
2. Run `npm install`.
3. Run `npm link`.
4. Apply your changes, they will be automatically available globally.
5. Once you test everything, commit your changes and push them to GitHub.
6. Open a pull request and wait for merge!

Please make sure to read the [Contributing Guide]() before making a pull request.

Thank you to all the people who already contributed to this project!

## Contributors 👷
<table>
  <tr>
    <td align="center"><a href="https://ejer.ga/"><img src="https://avatars3.githubusercontent.com/u/35652893?s=460&u=9d02cbe9af7f3ed3a8d585b835d2bb03c44c0635&v=4" width="100px;" alt="ejer"/><br /><sub><b>datejer</b></sub></a><br /><a href="#" title="Code">💻</a></td>
  </tr>
</table>

## License ⚖
MIT

---
<div align="center">
	<b>
		<a href="https://www.npmjs.com/package/get-good-readme">README.md based on get-good-readme module</a>
	</b>
</div>
