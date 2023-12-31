const vscode = require('vscode');
const {
   generateTemplate,
   triggerUserInput,
   setValueToEnv,
   copy_prompts,
} = require('../helper/helpers');

const setupWorkspaceAction = () =>
   vscode.commands.registerCommand(
      'CodeXpert.setupWorkspace',
      async function () {
         generateTemplate('', '.env');

         const PALM_API_KEY = await triggerUserInput('PALM_API_KEY');
         if (PALM_API_KEY != undefined) {
            setValueToEnv('PALM_API_KEY', PALM_API_KEY);
         }
         copy_prompts('prompt_for_json_conversion.txt');
         copy_prompts('prompt_for_json.txt');
         const GPT_API_KEY = await triggerUserInput('GPT_API_KEY');
         if (GPT_API_KEY != undefined) {
            setValueToEnv('GPT_API_KEY', GPT_API_KEY);
         }
      },
   );

module.exports = setupWorkspaceAction;
