module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:flowtype/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react"
  ],
  plugins: ["react", "flowtype"],
  rules: {
    "prettier/prettier": {
      singleQuote: true,
      trailingComma: "all",
      bracketSpacing: true,
      semi: true,
      useTabs: false,
      jsxBracketSameLine: false
    }
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  globals: {
    document: true,
    window: true,
    alert: true,
    process: true
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
