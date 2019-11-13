const { spawn } = require('child_process');

/* Run codegen on base schema */

console.log('Running codegen...');

return run();

async function run() {
  let modelGen = spawn('amplify-dev', ['codegen', 'model'], { cwd: process.cwd(), env: process.env, stdio: 'inherit' });

  modelGen.on('exit', code => {
    if (code === 0) {
      process.exit(0);
    } else {
      process.exit(1);
    }
  });
}
