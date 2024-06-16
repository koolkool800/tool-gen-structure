import inquirer from "inquirer";
import * as fs from "fs";
import { createDirectories, createFiles, getFolderStructure } from "../utils/index.js";

export async function generateNormalStructure() {
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



