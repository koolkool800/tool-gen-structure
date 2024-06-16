import * as fs from 'fs';
import { createFiles } from './create-file.js';

export function createDirectories(directoriesPassed) {
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