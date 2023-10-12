# Central Design System React Component Library

This repository contains the reusable React components for the Central Design System. Components are built using [React v18](https://react.dev/), [PrimeReact v10](https://primereact.org/), [Tailwind v3](https://tailwindcss.com/), [TypeScript v5](https://www.typescriptlang.org/).
[Vite v4](https://vitejs.dev/) is being used as bundler and [Vitest v0.34][https://vitest.dev/] as a test runner.
For documentation we use [Storybook v7](https://storybook.js.org/) and to demo/test purposes [Chromatic](https://www.chromatic.com/) being used for each PR and main branch updates.

## How to use this library in separate repo

`TODO: update this section with correct info`
You need to update (create if not exists) `.npmrc` file in your project root directory with following content:

```bash
@vpuchkov-nr:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=AUTH_TOKEN
```

where `AUTH_TOKEN` is a token from this repo (you can find it in `Settings -> Developer settings -> Personal access tokens`). Most likely you will need to pass this token as environment variable to your CI/CD pipeline and via `.env` file for local development.

`TODO: update this section with correct info`
Then you can install this library as any other npm package:

```bash
npm install @vpuchkov-nr/comp-demo@latest
```

## Getting Started

To develop this library, you will need to have [Node.js v16+](https://nodejs.org/en/) and run following command:

```bash
npm install
```

to install all the dependencies and basic project setup (via `prepare` script in `package.json`).

## Development Experience

For convinience we use additional tools:

- [ESLint](https://eslint.org/) for linting and code style
- [Prettier](https://prettier.io/) for code formatting
- [Husky](https://typicode.github.io/husky/) with [Lint-staged](https://github.com/okonet/lint-staged#readme) for git hooks (pre-commit and pre-push)
- [Commitizen](https://commitizen-tools.github.io/commitizen/) for commit message formatting
<!-- - [Commitlint](https://commitlint.js.org/) for commit message linting -->

For commit messages we follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

## Github Workflows

There are several workflows configured in this repo (those can be found in `.github/workflows` directory):

- `create-release-notes` - generates release notes on release commit (with help of [release-please](https://github.com/googleapis/release-please) `git commit --allow-empty -m "chore: release X.X.X" -m "Release-As: X.X.X"`)
- `deploy-to-chromatic` - build and deploy storybook to Chromatic on each PR and main branch update
- `publish-package` - build and publish package to Github Packages (For this one to work you need to add `GITHUB_TOKEN` secret to your repo) - release needs to be created manually via [Github](https://github.com/vpuchkov-nr/comp-demo/releases)

#### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
