module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended"],
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
    document: true
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
