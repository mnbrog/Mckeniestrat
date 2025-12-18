const path = require("path");
const fs = require("fs/promises");
const { promisify } = require("util");
const { execFile } = require("child_process");
const postcss = require("postcss");

const run = promisify(execFile);
const cliPackage = require.resolve("@tailwindcss/cli/package.json");
const cliPath = path.resolve(path.dirname(cliPackage), "dist/index.mjs");

const buildWithCli = async (cssSource, from) => {
  const workRoot = path.join(process.cwd(), ".cache");
  await fs.mkdir(workRoot, { recursive: true });
  const tmpDir = await fs.mkdtemp(path.join(workRoot, "tailwind-postcss-"));
  const inputPath = path.join(tmpDir, "input.css");
  const outputPath = path.join(tmpDir, "output.css");

  await fs.writeFile(inputPath, cssSource, "utf8");

  await run("node", [
    cliPath,
    "-i",
    inputPath,
    "-o",
    outputPath,
    "--content",
    "./src/**/*.{js,jsx}",
  ], {
    cwd: process.cwd(),
    env: { ...process.env, FROM: from || process.cwd() },
  });

  const compiled = await fs.readFile(outputPath, "utf8");
  await fs.rm(tmpDir, { recursive: true, force: true });
  return compiled;
};

module.exports = () => ({
  postcssPlugin: "tailwindcss",
  async Once(root, { result }) {
    const css = root.toString();
    const compiled = await buildWithCli(css, result.opts.from);
    const parsed = postcss.parse(compiled, { from: result.opts.from });
    root.removeAll();
    root.append(...parsed.nodes);
  },
});

module.exports.postcss = true;
