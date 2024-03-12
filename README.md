# React Native Boilerplate

This project is a [React Native](https://facebook.github.io/react-native/) boilerplate that can be used to kickstart a mobile application.

The boilerplate provides **a solid foundation for building cross-platform mobile applications.** It emphasizes a clear separation of concerns between the UI and business logic, making it easier to maintain and scale your mobile app.

If you like the project, give us a star 🤩.

## Table of Contents

- [Requirements](#requirements)
- [Quick Start](#quick-start)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Folder Structure](#folder-structure)
- [License](#license)
- [About Us](#about-us)
- [Contributing](#contributing)

## Requirements

Node 18 or greater is required. Development for iOS requires a Mac and Xcode (please use the latest version).

You also need to install the dependencies required by React Native.  
Go to the [React Native environment setup](https://reactnative.dev/docs/environment-setup), then select `React Native CLI Quickstart` tab.  
Follow instructions for your given `development OS` and `target OS`.

## Quick Start

To initialize a new project using this boilerplate, run the following command:

```bash
npx react-native@latest init AwesomeProject --template @gbrlcoelho/react-native-boilerplate
```

## Dependencies

- [React Native](https://reactnative.dev/) - A framework for building native apps with React.
- [React Navigation](https://reactnavigation.org/) - Routing and navigation for your React Native apps.
- [react-hook-form](https://react-hook-form.com/) - Performant, flexible and extensible forms with easy-to-use validation.
- [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv) - MMKV is an efficient, small mobile key-value storage framework.
- [@tanstack/react-query](https://react-query.tanstack.com/) - Powerful asynchronous state management for React.
- [react-native-svg](https://github.com/software-mansion/react-native-svg) - SVG support to React Native on iOS, Android, macOS, Windows, and a compatibility layer for the web.
- [@shopify/restyle](https://shopify.github.io/restyle/) - A type-enforced system for building UI components with React Native.
- [axios](https://axios-http.com/) - Promise based HTTP client for the browser and node.js.
- [date-fns](https://date-fns.org/) - Modern JavaScript date utility library.
- [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers) - Resolvers for react-hook-form.
- [zod](https://zod.dev/) - TypeScript-first schema declaration with static type inference.
- [zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) - A small, fast and scalable bearbones state-management solution.

## Dev Dependencies

- [@tanstack/eslint-plugin-query](https://tanstack.com/query/v4/docs/react/eslint/eslint-plugin-query) - ESLint plugin for react-query.
- [jest](https://jestjs.io/) - A delightful JavaScript Testing Framework with a focus on simplicity.
- [testing-library/react-native](https://testing-library.com/docs/react-native-testing-library/intro/) - Simple and complete React Native testing utilities that encourage good testing practices.
- [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver) - A Babel plugin to add a new resolver for your modules when compiling your code using Babel.
- [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog) - Commitizen adapter following the conventional-changelog format.
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import/tree/main) - ESLint plugin with rules that help validate proper imports.
- [husky](https://typicode.github.io/husky/#/) - Git hooks made easy.
- [lint-staged](https://github.com/lint-staged/lint-staged) - Run linters against staged git files and don't let 💩 slip into your code base!
- [prettier](https://prettier.io/) - An opinionated code formatter.
- [msw](https://mswjs.io/) - Mock Service Worker is an API mocking library for browser and Node.
- [react-native-dotenv](https://www.npmjs.com/package/react-native-dotenv) - A Babel plugin that allows you to use environment variables in your React Native app.

## Folder Structure

The folder structure of this boilerplate is explained below:

```
.
├── src
│   ├── api
│   │   ├── apiConfig.ts
│   │   └── index.ts
│   ├── assets
│   │   ├── brand
│   │   ├── fonts
│   │   └── icons
│   ├── components
│   │   └── index.ts
│   ├── domain
│   │   ├── Auth
│   │   │   ├── adapter.ts
│   │   │   ├── api.ts
│   │   │   ├── service.ts
│   │   │   └── types.ts
│   │   └── index.ts
│   ├── hooks
│   │   └── index.ts
│   ├── infra
│   │   ├── hooks
│   │   ├── index.ts
│   │   └── types.ts
│   ├── routes
│   │   └── index.ts
│   ├── screens
│   │   └── index.ts
│   ├── services
│   │   └── index.ts
│   ├── test
│   │   ├── server
│   │   │   ├── handlers.ts
│   │   │   └── server.ts
│   │   ├── jestSetup.ts
│   │   ├── test-utils.tsx
│   │   └── index.ts
│   ├── theme
│   │   └── theme.ts
│   ├── types
│   │   └── index.ts
│   └── utils
│       └── index.ts
├── .env
.
```

### `src/`

This folder is the main container of all the code inside your application.

### `src/api/`

This folder contains all the api related stuff like apiConfig.

### `src/assets/`

This folder contains all the assets of your application like brand, fonts and icons.

### `src/components/`

This folder contains all the shared components of your application.

### `src/domain/`

This folder contains all the domain related stuff like use cases, services, adapters and types.

### `src/hooks/`

This folder contains all the custom hooks of your application.

### `src/infra/`

This folder contains all the infrastructure of react query like hooks and types.

### `src/routes/`

This folder contains all the routes of your application.

### `src/screens/`

This folder contains all the screens of your application.

### `src/services/`

This folder contains all the internal services of your application like MMKV, zustand and etc.

### `src/test/`

This folder contains all the test related stuff like server, jestSetup, test-utils and etc.

### `src/theme/`

This folder contains @shopify/restyle theme of your application.

### `src/types/`

This folder contains all global types of your application.

### `src/utils/`

This folder contains all the utility functions of your application.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## About Us

I am a mobile developer and I love to create beautiful and performant mobile applications, if you want to talk about it, please [contact me](https://www.linkedin.com/in/gabrielcoelhocano/).

## Contributing

If you find any problems, please [open an issue](https://github.com/gbrlcoelho/rn-boilerplate/issues/new/choose) or submit a fix as a pull request.
