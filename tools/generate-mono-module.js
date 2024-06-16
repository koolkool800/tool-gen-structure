import inquirer from "inquirer";
import * as fs from "fs";
import { createDirectories, createFiles, getFolderStructure } from "../utils/index.js";

export async function generateMonoModule() {
  const { modulePath } = await inquirer.prompt({
    type: "input",
    name: "modulePath",
    message: "What is the path of the module?",
  });

  // modulePath : apps/auth
  const { moduleName } = await inquirer.prompt({
    type: "input",
    name: "moduleName",
    message: "What is the name of the module?",
  });

  if (fs.existsSync(modulePath)) {
    fs.mkdirSync(`${modulePath}/src/modules`, { recursive: true });

    // Bug
    // const folderStructure = getFolderStructure(moduleName);

    // const { directories, files } = folderStructure;

    // createFiles(files);
    // createDirectories(directories);
  }
}
