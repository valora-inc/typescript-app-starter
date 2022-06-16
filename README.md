# typescript-starter

A starter template for Valora TypeScript projects with best practices.

## What's in the stack?

- [TypeScript](https://www.typescriptlang.org/)
- Unit testing with [Jest](https://jestjs.io)
- Linting with [ESLint](https://eslint.org/), configured with [@valora/eslint-config-typescript](https://github.com/valora-inc/eslin[t-config-typescript)
- Automatic code formating with [Prettier](https://prettier.io/), configured with [@valora/prettier-config](https://github.com/valora-inc/prettier-config)
- Scripts using [ShellJS](https://github.com/shelljs/shelljs)
  - Linted and statically checked with [TypeScript](https://www.typescriptlang.org/)
- CI/CD with [GitHub Actions](https://docs.github.com/en/actions)
  - Code coverage uploaded to [Codecov](codecov.io)

## How to use this?

Above the file list, click the big green button: `Use this template`.

Or using [GitHub CLI](https://cli.github.com/):

```sh
gh repo create --template valora-inc/typescript-starter valora-inc/new-repo
```

## Structure

Here's the recommended structure:

- [`src`](src): source code
  - [`index.ts`](src/index.ts): example source file
  - [`index.test.ts`](src/index.test.ts): unit tests for `index.ts`
- [`scripts`](scripts): more complex scripts in TypeScript
  - [`example.ts`](scripts/example.ts): example script using [ShellJS](https://github.com/shelljs/shelljs)

## Type Checking

This project uses [TypeScript](https://www.typescriptlang.org/). It's recommended to get TypeScript set up for your editor to get a really great in-editor experience with type checking and auto-complete. To run type checking across the whole project, run `yarn typecheck`.

## Testing

For lower level tests of utilities and individual modules, we use [Jest](https://jestjs.io).

## Linting

This project uses [ESLint](https://eslint.org/) for linting. That is configured in [`.eslintrc.js`](.eslintrc.js).

## Formatting

We use [Prettier](https://prettier.io) for auto-formatting. It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save. There's also a `yarn format` script you can run to format all files in the project.

## Scripts

We use TypeScript instead of shell scripts. This is it to avoid the many pitfalls of shell scripts.

To run external commands we recommend using [ShellJS](https://github.com/shelljs/shelljs).

## GitHub Actions

We use GitHub Actions for continuous integration and deployment (CI/CD). Anything that gets into the `main` branch will be deployed using `yarn deploy` after running tests/build/etc.
