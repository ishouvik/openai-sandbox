# OpenAI Moderation

A package for integrating OpenAI services like moderation using TypeScript.

## Description

This package allows you to easily integrate OpenAI's moderation services into your TypeScript project. With this package, you can easily filter text for profanity, hate speech, and more using OpenAI's advanced language models.

## Prerequisite

- [Nodejs 18 LTS](https://nodejs.org/en)
- [Typescript](https://www.typescriptlang.org)
- [Yarn (preferred)](https://yarnpkg.com) or stick to Npm

## How to run

- Clone the repository
- Run `yarn install` to install all the dependencies
- Create a .env file in the root directory and add your OpenAI API key as `OPENAI_API_KEY=YOUR_API_KEY`. Use `example.env` file as a reference

## Usage

- Build:
  - Production: `yarn build`
  - Build and watch: `yarn build:dev`
- Web
  - Without hot reloading (suitable for production): `yarn web:start`
  - With hot reloading (suitable for dev environment): `yarn web:start:dev`
- Exec
  - Moderation: `serverless invoke local --function openai_moderation --data "Your text"`

## Deployment

- Install [AWS CLI](https://aws.amazon.com/cli/)
- Install serverless:
  - yarn: `yarn global add serverless`
  - npm: `npm install serverless -g`
- Build app: `yarn build`
- Package (optional): `serverless package`
- Deploy: `serverless deploy`

## Note

This package requires an OpenAI API key to function properly. You can sign up for one on the OpenAI website.

## Author

- [@ishouvik](http://github.com/ishouvik)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)
