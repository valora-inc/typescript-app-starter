# typescript-app-starter

A starter template for Valora TypeScript projects with best practices.

## What's in the stack?

- [TypeScript](https://www.typescriptlang.org/)
- Unit testing with [Jest](https://jestjs.io)
- Linting with [ESLint](https://eslint.org/), configured with [@valora/eslint-config-typescript](https://github.com/valora-inc/eslint-config-typescript)
- Automatic code formating with [Prettier](https://prettier.io/), configured with [@valora/prettier-config](https://github.com/valora-inc/prettier-config)
- Scripts using [ShellJS](https://github.com/shelljs/shelljs)
  - Linted and statically checked with [TypeScript](https://www.typescriptlang.org/)
- CI/CD with [GitHub Actions](https://docs.github.com/en/actions)
  - Semantic PR title enforcement with [semantic-pull-request](https://github.com/amannn/action-semantic-pull-request)
- Automated dependency updates with [Renovate](https://renovatebot.com/), configured with [valora-inc/renovate-config](https://github.com/valora-inc/renovate-config)

## How to use this?

Above the file list, click the big green button: `Use this template`.

Or using [GitHub CLI](https://cli.github.com/):

```sh
gh repo create --template valora-inc/typescript-app-starter valora-inc/new-repo
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

## Test coverage checks

### For private repos

For private repos, Jest can be configured to terminate with an error status if there is less coverage than some configurable threshold.
This project applies coverage thresholds for `yarn test:ci`, so CI checks will fail if there is insufficient test coverage.

Make sure to add fixture data, mocks, or other files and file paths that you don't want to count towards your coverage thresholds
to `coveragePathIgnorePatterns` in [`jest.config.js`](jest.config.js).

### For public repos

For public repos, [Codecov](https://codecov.io) is free. The tool offers two nice features that Jest doesn't offer out of the box:

- "auto" coverage targets, which track the current coverage of the `main` branch. This lets you guarantee that test coverage increases over time.
- "patch" coverage, counting only the lines modified by the current PR

Here's how to set it up:

Uncomment the `Upload Coverage Report` and `Upload coverage to Codecov` steps in [`workflow.yaml`](.github/workflows/workflow.yaml). No token is needed for public repos uploading via GitHub Actions.

If you set up Codecov, you may consider turning off Jest coverage checks for simplicity. You can do this by removing the
`coverageThreshold` parameter from [`jest.config.js`](jest.config.js).

## Linting

This project uses [ESLint](https://eslint.org/) for linting. That is configured in [`.eslintrc.js`](.eslintrc.js).

## Formatting

We use [Prettier](https://prettier.io) for auto-formatting. It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save. There's also a `yarn format` script you can run to format all files in the project.

## Dependency / Unused Code Checking

This project uses [knip](https://github.com/webpro/knip) for checking both unused dependencies and code within the repo. This tool can catch a _lot_ of stuff, including unused dependencies, functions, types, unnecessary/duplicate exports, unused class/enum members, etc. It's configured in [`.knip.json`](.knip.json).

## Scripts

We use TypeScript instead of shell scripts. This is it to avoid the many pitfalls of shell scripts.

To run external commands we recommend using [ShellJS](https://github.com/shelljs/shelljs).

## GitHub Actions

We use [GitHub Actions](https://docs.github.com/en/actions) for continuous integration and deployment (CI/CD). Anything that gets into the `main` branch will be deployed using `yarn deploy` after running tests/build/etc.

Also, we use [semantic-pull-request](https://github.com/amannn/action-semantic-pull-request) to ensure PR titles match the [Conventional Commits spec](https://www.conventionalcommits.org/). It can be used in combination with [semantic-release](https://github.com/semantic-release/semantic-release) to automate releases and changelogs.

[`workflow.yaml`](.github/workflows/workflow.yaml) contains a step to send slack notifications on deploy failures. For this to work, your repo needs to have access to the [MAINNET_SERVICE_ACCOUNT_KEY](https://github.com/organizations/valora-inc/settings/secrets/actions/MAINNET_SERVICE_ACCOUNT_KEY) github secret.

## Renovate

[Renovate](https://renovatebot.com/) ensures our dependencies are kept up to date. It's configured with our shared config in [`renovate.json5`](renovate.json5).
