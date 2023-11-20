#!/usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

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
    "husky",
    "eslint-plugin-import",
    "lint-staged",
    "msw",
    "ts-node",
    "react-native-dotenv",
  ];

  console.log("Installing dependencies...");
  execSync(`yarn add ${dependencies.join(" ")}`, { stdio: "inherit" });
  console.log("Dependencies installed successfully.");

  console.log("Installing dev dependencies...");
  execSync(`yarn add ${devDependencies.join(" ")} -D`, { stdio: "inherit" });
  console.log("Dev dependencies installed successfully.");

  console.log("Installing husky...");
  execSync(`yarn add husky -D`, { stdio: "inherit" });
  console.log("Husky installed successfully.");
};

const createTemplate = () => {
  const templateDir = path.join(__dirname, "template");

  if (!fs.existsSync(templateDir)) {
    fs.mkdirSync(templateDir);
  }

  console.log("Template created successfully.");
};

const main = () => {
  installDependencies();

  console.log("Running husky install...");
  execSync("yarn husky install", { stdio: "inherit" });
  console.log("Husky install completed.");

  createTemplate();
};

main();
