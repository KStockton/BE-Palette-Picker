module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "brace-style": "error",
        "comma-spacing": [
          "warn", {
            "before": false,
            "after": true
          }
        ],
        "curly": "error",
        "eqeqeq": ["error", "always"],
        "getter-return": ["error", { "allowImplicit": true }],
   
        "indent": ["warn", 2],
        "key-spacing": [
          "error", {
            "beforeColon": false,
            "afterColon": true
          }
        ],
        "keyword-spacing": [
          "error", {
            "before": true,
            "after": true
          }
        ],
        "linebreak-style": [
          "error",
          "unix"
        ],
        "max-len": [
          "error",
          80
        ],
        "new-cap": [
          "error", {
            "newIsCap": true
          }
        ],
        "newline-after-var": [
          "error",
          "always"
        ],
        "no-template-curly-in-string": "error",
        "object-shorthand": [
          "error",
          "always"
        ],
        "semi": ["error", "always"],
        "semi-spacing": [
          "error", {
            "before": false,
            "after": true
          }
        ],
        "space-before-blocks": [
          "error", {
            "functions": "always",
            "keywords": "always",
            "classes": "always"
          }
        ],
        "space-infix-ops": [
          "error", {
            "int32Hint": false
          }
        ]
      },
      "globals": {
        "expect": true
      }
    
};