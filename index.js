const core = require('@actions/core');
const github = require('@actions/github');
const DaVinciLinter = require('pingone-davinci-linter');


try {
  // Get the inputs
  const flow = core.getInput('flow');

  // get linter
  const linter = new DaVinciLinter({ flow });

  // lint the flow
  const lintResults = linter.lintFlow();

  console.log("lintResults = ", lintResults);

  const lintResult = lintResults?.lintResults[0]

  core.setOutput("pass", lintResult.pass);
  core.setOutput("errorCount", lintResult.errorCount);
  core.setOutput("ruleResults", lintResult.ruleResults);

  // const context = JSON.stringify(github.context, undefined, 2)
  // console.log(`The event payload: ${context}`);
} catch (error) {
  core.setFailed(error.message);
}
