#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const main = () => {
    const gitDescribe = execSync('git describe --tags --always').toString().trim();

    const filePath = path.resolve('src', 'version.json');
    const fileContents = JSON.stringify({ version: gitDescribe }, null, 2);

    fs.writeFileSync(filePath, fileContents);
    process.stdout.write(`Version ${gitDescribe} written to ${filePath}\n`);
};

main();
