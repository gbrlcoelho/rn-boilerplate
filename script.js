#!/usr/bin/env node

const { execSync } = require("child_process");

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

  console.log("Installing dependencies...");
  execSync(`yarn add ${dependencies.join(" ")}`, { stdio: "inherit" });
  console.log("Dependencies installed successfully.");

  console.log("Installing dev dependencies...");
  execSync(`yarn add ${devDependencies.join(" ")} -D`, { stdio: "inherit" });
  console.log("Dev dependencies installed successfully.");
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
    console.log("Post init script executed successfully.");
  })
  .catch((error) => {
    throw new Error(
      `An error occurred while executing the post init script: ${error}`
    );
  });
