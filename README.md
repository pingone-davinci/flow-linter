# PingOne DaVinci Flow Linter javascript action

This action checks the validity of PingOne DaVinci flows and returns the warnings, errors and
raw results from the linting

## Inputs

### `flows`

**Required** List of flows to check.

### `ignore-warnings`

**Required** Will warnings be ignored to determine pass/fail of linting. Default `"false"`.

## Outputs

### `pass`

Does the linting pass?

### `warnings`

List of all the warnings

### `errors`

List of all the errors

### `raw-results`

All the raw results from the linting

## Example usage

```yaml
uses: pingone-davinci/flow-linter@v1
with:
  ignore-warnings: 'false'
```
