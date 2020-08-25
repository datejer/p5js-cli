#!/usr/bin/env node

const chalk = require("chalk");
const inquirer = require("inquirer");
const git = require("nodegit");
const fs = require("fs");
const fetch = require("node-fetch");

const package = require("./package.json");

const bootstrap = (name) => {
    console.log(chalk.green.bold("+ ") + chalk.white(`Creating new p5.js project in ${chalk.white.bold(name)}...`));
    git.Clone("https://github.com/datejer/p5-example", `./${name}`).then(() => {
        fs.rmdir(`./${name}/.git`, { recursive: true }, (err) => {
            if (err) throw err;
            console.log(chalk.green.bold("+ ") + chalk.white("Finished!"));
            console.log(chalk.green.bold(`\nSuccessfully created an empty p5.js sketch inside of the ${chalk.white.bold(name)} directory!`));
            console.log(chalk.white.bold(`Get started by going into the repository ${chalk.gray(`(cd ${name})`)} and writing your sketch.`));
            console.log(chalk.white.bold(`To run the sketch we recommend using the ${chalk.green.bold("serve")} package ${chalk.gray(`(npm i -g serve && serve)`)}\n`));
            checkVersion();
        });
    }).catch(e => console.log(e));
}

const checkVersion = () => {
    fetch('https://registry.npmjs.org/p5js-cli')
        .then(res => res.json())
        .then(json => {
            if (parseInt(package.version.replace(/\./gi, "")) < parseInt(json["dist-tags"].latest.replace(/\./gi, ""))) {
                console.log(chalk.red.bold("\n! ") + chalk.white("Update available: ") + chalk.green.bold(json["dist-tags"].latest));
                console.log(chalk.red.bold("! ") + chalk.white("Run ") + chalk.cyan("npm install -g p5js-cli") + chalk.white(" to update\n"));
            }
        });
}

if (process.argv.length <= 2 || process.argv[2] === "help") {
    console.log(chalk.white.bold(`\nWelcome to the unofficial p5.js command line tool!`));
    console.log(chalk.white("With it you can easily bootstrap new p5.js sketches using just your command line.\n"));
    console.log(chalk.white("You can get started by typing:\n    p5 new \<project name\>\n"));
} else if (process.argv.length > 2) {
    const command = process.argv[2];
    const args = process.argv.splice(3, process.argv.length - 1);

    if (command === "new") {
        let projectName;

        if (args === undefined || args.length === 0)
            inquirer
            .prompt({
                type: 'input',
                name: 'project_name',
                message: "How would you like to name your project?"
            })
            .then(answers => {
                projectName = answers.project_name.split(" ").join("-").toLowerCase();
                bootstrap(projectName);
            })
            .catch(error => {
                if(error.isTtyError) {
                    return console.log(chalk.red.bold("! ") + chalk.white("Your environment does not support prompts.\nPlease use: \`p5 new \<project name\>\` instead."));
                } else {
                    return console.log(chalk.red.bold("! ") + chalk.white("Could not render name prompt.\nPlease use: \`p5 new \<project name\>\` instead."));
                }
            });
        else {
            projectName = args.join("-").toLowerCase();
            bootstrap(projectName);
        }
    } else if (command === "-v" || command === "-version") {
        console.log(`p5.js CLI Version: ${package.version}`);
        checkVersion();
    }
}
