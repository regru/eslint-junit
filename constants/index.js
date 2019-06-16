/* global process */
const path = require('path'); // eslint-disable-line

module.exports = {
  'DEFAULT_OPTIONS': {
    'classNameTemplate': '{file}:{line}:{column} - {message} ({ruleId})',
    'output': path.join(process.cwd(), './junit_eslint.xml'),
    'suiteName': 'eslint tests',
    'titleTemplate': '{file}:{line}:{column} - {message} ({ruleId})'
  },
  'ENVIRONMENT_CONFIG_MAP': {
    'ESLINT_JUNIT_CLASSNAME': 'classNameTemplate',
    'ESLINT_JUNIT_OUTPUT': 'output',
    'ESLINT_JUNIT_TITLE': 'titleTemplate',
    'ESLINT_SUITE_NAME': 'suiteName'
  }
};
