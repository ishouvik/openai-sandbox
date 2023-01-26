# OpenAI Moderation

A package for integrating OpenAI services like moderation using TypeScript.

## Description

This package allows you to easily integrate OpenAI's moderation services into your TypeScript project. With this package, you can easily filter text for profanity, hate speech, and more using OpenAI's advanced language models.

## Installation

```shell
yarn install
```

## How to run

- Clone the repository
- Run `yarn install` to install all the dependencies
- Create a .env file in the root directory and add your OpenAI API key as `OPENAI_API_KEY=YOUR_API_KEY`. Use `example.env` file as a reference

## Usage

- Build:
  - One tile build: `yarn build`
  - Build and watch: `yarn build -w`
- Web
  - Without hot reloading (suitable for production): `yarn "web:start`
  - With hot reloading (suitable for dev environment): `yarn web:start`
- Exec
  - Moderation: `yarn exec:moderation "Your text"`

## Note

This package requires an OpenAI API key to function properly. You can sign up for one on the OpenAI website.

## Author

- [@ishouvik](http://github.com/ishouvik)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)
