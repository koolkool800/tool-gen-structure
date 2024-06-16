import * as fs from 'fs';

export function createFiles(filesPassed) {
    for (const file in filesPassed) {
      const { path } = filesPassed[file];
      if (!fs.existsSync(path)) {
        fs.writeFileSync(path, "");
      }
    }
  }
  