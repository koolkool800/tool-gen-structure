import inquirer from "inquirer";
import * as fs from "fs";
import { getFolderStructure } from "../utils/folder-structure.js";

export async function generateModule() {
  const { moduleName } = await inquirer.prompt({
    type: "input",
    name: "moduleName",
    message: "What is the name of the module?",
  });

  if (fs.existsSync("src/modules")) {
    fs.mkdirSync(`src/modules/${moduleName}`);
  } else {
    fs.mkdirSync(`src/modules/${moduleName}`, {
      recursive: true,
    });
  }

  const folderStructure = getFolderStructure(moduleName);

  const { directories, files } = folderStructure;

  createFiles(files);
  createDirectories(directories);
}

function createDirectories(directoriesPassed) {
  for (const directory in directoriesPassed) {
    const { path } = directoriesPassed[directory];
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
      if (directoriesPassed[directory].files) {
        createFiles(directoriesPassed[directory].files);
      }
      if (directoriesPassed[directory].directories) {
        createDirectories(directoriesPassed[directory].directories);
      }
    }
  }
}

function createFiles(filesPassed) {
  for (const file in filesPassed) {
    const { path } = filesPassed[file];
    if (!fs.existsSync(path)) {
      fs.writeFileSync(path, "");
    }
  }
}
