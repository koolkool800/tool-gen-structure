import inquirer from 'inquirer';
import { generateModule, generateSwaggerError } from './tools/index.js';

const main = async () => {
  const choices = await getChoices();
  switch (choices.Choice) {
    case 'addModule':
      await generateModule();
      break;
    case 'addSwaggerError':
      generateSwaggerError();
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
          name: 'Generate Module',
          value: 'addModule'
        },
        {
          name: 'Generate Swagger Error',
          value: 'addSwaggerError'
        }
      ]
    }
  ]);
};

main()
  .then(() => {})
  .catch((err) => console.log(err));
