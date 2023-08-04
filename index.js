const core = require('@actions/core');
const github = require('@actions/github');
const DaVinciLinter = require('pingone-davinci-linter');


try {
  // Get the inputs
  const flow = core.getInput('flow');

  // Debug
  console.log(`Running with flow = `, flow);

  // get linter
  const linter = new DaVinciLinter();

  // lint the flow
  const lintResults = linter.lintFlow(flow);

  console.log("lintResults = ", lintResults);

  core.setOutput("pass", true);
  core.setOutput("warnings", "Not Set");
  core.setOutput("errors", "Not Set");
  core.setOutput("raw-results", rawResults);

  const context = JSON.stringify(github.context, undefined, 2)
  console.log(`The event payload: ${context}`);
} catch (error) {
  core.setFailed(error.message);
}
