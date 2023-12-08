#!/usr/bin/env node

const { execSync } = require("child_process");
const chalk = require("chalk");

const installDependencies = () => {
  const dependencies = [
    "@hookform/resolvers",
    "@react-navigation/native",
    "@react-navigation/native-stack",
    "@shopify/restyle",
    "@tanstack/react-query",
    "axios",
    "date-fns",
    "react-hook-form",
    "react-native-mmkv",
    "react-native-safe-area-context",
    "react-native-screens",
    "react-native-svg",
    "zod",
    "zustand",
    "react-native-reanimated",
  ];

  const devDependencies = [
    "@tanstack/eslint-plugin-query",
    "@testing-library/jest-native",
    "@testing-library/react-native",
    "babel-plugin-module-resolver",
    "cz-conventional-changelog",
    "eslint-plugin-import",
    "lint-staged",
    "msw",
    "ts-node",
    "react-native-dotenv",
    "husky",
  ];

  console.log(
    chalk.green(
      "@gbrlcoelho/react-native-boilerplate initialized with success! 🚀\n"
    )
  );

  console.log(chalk.yellow("Installing dependencies... 🛠️\n"));
  execSync(`yarn add ${dependencies.join(" ")}`, { stdio: "inherit" });
  console.log(chalk.green("\nDependencies installed successfully. 🚀\n"));

  console.log(chalk.yellow("Installing dev dependencies... 🛠️\n"));
  execSync(`yarn add ${devDependencies.join(" ")} -D`, { stdio: "inherit" });
};

const main = () => {
  execSync("git init", { stdio: "inherit" });
  installDependencies();
};

new Promise((resolve) => {
  main();
  resolve();
})
  .then(() => {
    console.log(
      chalk.cyan(
        "- 🎉  Congrats! Your project is ready with @gbrlcoelho/react-native-boilerplate! 🎉\n"
      )
    );

    console.log(
      chalk.cyan(
        "- 📚 If you need to read more about this boilerplate : https://github.com/gbrlcoelho/rn-boilerplate/blob/master/README.md\n"
      )
    );
    console.log(
      chalk.cyan(
        "- 🤕 If you have some troubles : https://github.com/gbrlcoelho/rn-boilerplate/issues\n"
      )
    );
    console.log(
      chalk.cyan(
        "- ⭐ If you love this boilerplate, give us a star, you will be a ray of sunshine in our lives :) https://github.com/gbrlcoelho/rn-boilerplate\n"
      )
    );
  })
  .catch((error) => {
    console.error(`🚨 An error occurred with post init script: ${error}`);
    throw new Error();
  });
