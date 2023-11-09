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
};

const createTemplate = () => {
  const templateDir = path.join(__dirname, "template");

  // Create the template directory if it doesn't exist
  if (!fs.existsSync(templateDir)) {
    fs.mkdirSync(templateDir);
  }

  // You can add any additional setup for your template here

  console.log("Template created successfully.");
};

const runPodInstall = () => {
  const templateDir = path.join(__dirname, "template");

  console.log("Running pod install...");
  execSync("npx pod-install ios", { stdio: "inherit", cwd: templateDir });
  console.log("Pod install completed successfully.");
};

const main = () => {
  // Install dependencies
  installDependencies();

  // Create the template directory
  createTemplate();
};

main();
