import inquirer from 'inquirer';
import { generateMonoModule, generateNormalStructure } from './tools/index.js';

const main = async () => {
  const choices = await getChoices();
  switch (choices.Choice) {
    case 'add-module-artnprice':
      await generateNormalStructure();
      break;
    case 'add-module-monorepo':
      await generateMonoModule();
      break;
  }
};

const getChoices = async () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'Choice',
      message: 'What do you want to do?',
      choices: [
        {
          name: 'Generate Module for Artnprice',
          value: 'add-module-artnprice'
        },
        {
          name: 'Generate Module for monorepo',
          value: 'add-module-monorepo'
        }
      ]
    }
  ]);
};

main()
  .then(() => {})
  .catch((err) => console.log(err));
