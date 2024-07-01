import fs from "fs";
import path from "path";

// generate error code
export function generateErrorCode() {
  const __dirname = path.resolve();
  const commonErrorCodeFile = path.join(
    __dirname,
    "/src/common/enum/error-code.ts"
  );
  const modulesDir = path.join(__dirname, "src/modules");

  const htmlModulesTable = generateModuleErrorCode(modulesDir);
  const htmlCommonErrCode = generateCommonErrorCode(commonErrorCodeFile);
  const moduleName = "CommonErrorCode";

  const htmlCommonTable = generateErrorTable(htmlCommonErrCode, moduleName);

  const htmlTable = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <table border="1">
        <tr>
            <th>Error Code</th>
            <th>HTTP Code</th>
            <th>Module Name</th>
        </tr>
        ${htmlCommonTable}
        ${htmlModulesTable}
    </table>
  </body>
</html>

   
    `;

  return htmlTable;
}

/**
 *
 * @param {*} modulesDir
 * @returns a html table of error code in src/modules
 */
function generateModuleErrorCode(modulesDir) {
  const moduleFolders = getAllFoldersName(modulesDir);
  let errorHtml = ``;

  moduleFolders.forEach((folder) => {
    const errorCodeFile = path.join(
      modulesDir,
      folder,
      "domain/enum/error-code.ts"
    );
    if (fs.existsSync(errorCodeFile)) {
      const { enumName, enumValues } = getEnumValuesFromFile(errorCodeFile);
      const tableHtml = generateErrorTable(enumValues, enumName);
      errorHtml += tableHtml;
    }
  });

  return errorHtml;
}

/**
 *
 * @param {*} enumValues
 * @param {*} moduleName
 * @returns a html table row of error code
 */
function generateErrorTable(enumValues, moduleName) {
  let tableRows = "";

  for (const key in enumValues) {
    if (Object.hasOwnProperty.call(enumValues, key)) {
      const value = enumValues[key];
      const status = value.split("|")[0];
      const statusCode = value.split("|")[1];
      tableRows += `
            <tr>
            <td>${moduleName}</td>
                <td>${status}</td>
                <td>${statusCode}</td>
            </tr>`;
    }
  }

  return tableRows;
}

function generateCommonErrorCode(filePath) {
  const tsCode = fs.readFileSync(filePath, "utf8");
  const enumPattern = /export\s+enum\s+CommonErrorCode\s*{([^}]*)}/s;
  const match = tsCode.match(enumPattern);
  const enumBlock = match[1];
  const memberPattern = /\s*(\w+)\s*=\s*"([^"]+)"/g; // match KEY="VALUE"

  let enumValues = {};
  let memberMatch;

  while ((memberMatch = memberPattern.exec(enumBlock)) !== null) {
    const key = memberMatch[1];
    const value = memberMatch[2];
    enumValues[key] = value;
  }

  return enumValues;
}

/**
 *
 * @param {*} dirPath
 * @returns an array of folder name in src/modules
 */
function getAllFoldersName(dirPath) {
  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
}

/**
 *
 * @param {*} filePath
 * @returns enumName and enumValues of the error code file
 */
function getEnumValuesFromFile(filePath) {
  const tsCode = fs.readFileSync(filePath, "utf8");
  const enumPattern = /export\s+enum\s+(\w+)\s*{([^}]*)}/s;
  const match = tsCode.match(enumPattern);
  let enumValues = {};

  if (match) {
    const enumName = match[1];
    const enumBlock = match[2];
    const memberPattern = /\s*(\w+)\s*=\s*"([^"]+)"/g; // match KEY="VALUE"
    let memberMatch;

    while ((memberMatch = memberPattern.exec(enumBlock)) !== null) {
      const key = memberMatch[1];
      const value = memberMatch[2];
      enumValues[key] = value;
    }

    return { enumName, enumValues };
  }
}
