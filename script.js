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

// const createTemplate = () => {
//   const templateDir = path.join(__dirname, "template");

//   if (!fs.existsSync(templateDir)) {
//     fs.mkdirSync(templateDir);
//   }

//   console.log("Template created successfully.");
// };

// const addPrepareScript = () => {
//   console.log("Adding prepare script...");
//   const packageJsonPath = path.join(process.cwd(), "package.json");
//   const packageJson = require(packageJsonPath);

//   packageJson.scripts = packageJson.scripts || {};
//   packageJson.scripts.prepare = "husky install";

//   fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
//   console.log("Prepare script added successfully.");
// };

const main = () => {
  installDependencies();

  // addPrepareScript();

  // execSync("yarn", { stdio: "inherit" });

  // createTemplate();
};

main();
