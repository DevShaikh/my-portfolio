const { execSync } = require('node:child_process');
const { resolve } = require('node:path');

const projectRoot = resolve(__dirname, '..');
process.chdir(projectRoot);

const pkg = require('../package.json');
const now = new Date();

const date = [
  String(now.getFullYear()),
  String(now.getMonth() + 1).padStart(2, '0'),
  String(now.getDate()).padStart(2, '0'),
].join('.');

const version = date;

// Uncomment to include the current commit hash. This runs before an amend, so it is not final.
// const hash = execSync('git rev-parse --short HEAD').toString().trim();
// const version = `${date}_${hash}`;

if (pkg.version !== version) {
  execSync(`npm version ${version} --no-git-tag-version`, {
    cwd: projectRoot,
    stdio: 'inherit',
  });
}
