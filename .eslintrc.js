module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  // },
  // env: {
  //   browser: true,
  //   commonjs: true,
  //   es6: true,
  //   node: true,
  // },
  // parserOptions: {
  //   ecmaFeatures: {
  //     jsx: true,
  //   },
  //   sourceType: "module",
  // },
  }
};
