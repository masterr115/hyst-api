module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@config": "./src/infra/config",
          "@database": "./src/infra/database",
          "@controllers": "./src/app/controllers",
          "@utils": "./src/utils",
          "@dtos": "./src/app/Dtos",
          "@middlewares": "./src/infra/http/middlewares",
          "@services": "./src/services",
        },
      },
    ],
  ],
  ignore: ["**/*.spec.ts"],
};
