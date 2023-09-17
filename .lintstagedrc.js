const path = require("path");

const buildEslintCommand = filenames => {
  const files = filenames.map(f => path.relative(process.cwd(), f)).join(" --file ");
  return `next lint --fix --file ${files}`;
};

const buildPrettierCommand = filenames => {
  const files = filenames.map(f => path.relative(process.cwd(), f)).join(" ");
  return `prettier --write ${files}`;
};

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand, buildPrettierCommand],
};