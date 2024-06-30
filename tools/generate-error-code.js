import fs from "fs";
import path from "path";

// generate error code
export function generateErrorCode() {
  const __dirname = path.resolve();
  const errorCodeFile = path.join(__dirname, "/src/common/enum/error-code.ts");
  const errorCode = generateCommonErrorCode(errorCodeFile);
  const moduleName = "Common Error Code"

  const htmlTable = `
    <table border="1">
        <tr>
            <th>Error Code</th>
            <th>HTTP Code</th>
            <th>Module Name</th>
        </tr>
        ${generateErrorTable(errorCode, moduleName)}
    </table>
    `;


  return htmlTable;
}


function generateErrorTable(enumValues, moduleName) {
    let tableRows = '';

    for (const key in enumValues) {
        if (Object.hasOwnProperty.call(enumValues, key)) {
            const value = enumValues[key] 
            const status = value.split("|")[0]
            const statusCode = value.split("|")[1]
            tableRows += `
            <tr>
                <td>${status}</td>
                <td>${statusCode}</td>
                <td>${moduleName}</td>
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
