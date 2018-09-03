module.exports = {
  "parser": "babel-eslint",
  "extends": ["airbnb", "plugin:react/recommended", "plugin:jest/recommended"],
  "plugins": ["react", "jest"],
  "rules": {
    "arrow-body-style": "off",
    "max-len": ['error', 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    "react/jsx-filename-extension": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off"
},
  "env": {
      "jest/globals": true
  },
};
