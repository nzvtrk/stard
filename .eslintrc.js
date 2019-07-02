module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest/globals": true,
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "parser": "babel-eslint",
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 9,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "jest",
    "import",
    "promise"
  ],
  "rules": {
    // MAIN
    "indent": ["error", 2, {"SwitchCase": 1}],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "strict": ["error", "global"],
    "max-len": ["error", {"code": 120}],

    // STRINGS
    "template-curly-spacing": ["error", "never"],
    "prefer-template": "error",

    // VARIABLES
    "one-var": ["error", "never"],
    "prefer-const": "error",

    // FUNCTIONS
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "no-param-reassign": "error",

    // ARROWS
    "prefer-arrow-callback": "error",
    "arrow-spacing": ["error", {"before": true, "after": true}],
    "implicit-arrow-linebreak": ["error", "beside"],
    "arrow-parens": ["error", "as-needed"],

    // OBJECT & ARRAYS
    "object-shorthand": "error",
    "quote-props": ["error", "as-needed"],
    "array-callback-return": "error",
    "dot-notation": "error",

    // CONDITIONS
    "eqeqeq": "error",
    "no-nested-ternary": "error",
    "no-unneeded-ternary": "error",
    "default-case": "error",

    // SPACING
    "keyword-spacing": ["error", {"before": true, "after": true}],
    "space-infix-ops": "error",
    "eol-last": ["error", "always"],
    "newline-per-chained-call": ["error", {"ignoreChainWithDepth": 2}],
    "no-whitespace-before-property": "error",
    "no-multiple-empty-lines": ["error", {"max": 2, "maxEOF": 1, "maxBOF": 1}],
    "space-in-parens": ["error", "never"],
    "array-bracket-spacing": ["error", "never"],
    "space-before-blocks": "error",
    "space-before-function-paren": ["error", "never"],
    "function-paren-newline": ["error", "multiline"],
    "object-curly-spacing": ["error", "never"],
    "block-spacing": "error",
    "comma-spacing": ["error", {"before": false, "after": true}],
    "computed-property-spacing": ["error", "never"],
    "func-call-spacing": ["error", "never"],
    "key-spacing": ["error", {"beforeColon": false, "afterColon": true}],
    "no-trailing-spaces": "error",
    "comma-style": ["error", "last"],

    // OTHERS
    "radix": ["error", "as-needed"],
    "max-classes-per-file": ["error", 1],
    "camelcase": ["error", {"properties": "always"}],
    "new-cap": ["error", {"newIsCap": true, "capIsNew": true}],
    "comma-dangle": ["error", "always-multiline"],
    // IMPORT
    // "import/no-unresolved": "error", bugg
    "import/default": "error",
    "import/export": "error",
    "import/first": "error",
    "import/exports-last": "error",
    "import/no-duplicates": "error",
    // "import/no-namespace": "error",
    "import/no-unassigned-import": ["error", {"allow": ["**/*.scss"]}],
    "import/newline-after-import": ["error",  { "count": 2 }],
    "import/group-exports": "error",
    "import/extensions": [
      "error", "never",
      {
        "png": "always",
        "svg": "always"
      },
    ],

    // PROMISE
    "promise/catch-or-return": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/always-return": "error",
    "promise/prefer-await-to-then": "error",
    "promise/valid-params": "error",

    // REACT
    "react/default-props-match-prop-types": ["error", {allowRequiredDefaults: true}],
    // "react/require-default-props": "error",
    "react/boolean-prop-naming": "error",
    "react/destructuring-assignment": ["error", "always"],
    "react/forbid-component-props": "error",
    "react/forbid-prop-types": "error",
    "react/no-access-state-in-setstate": "error",
    "react/no-array-index-key": "error",
    "react/no-deprecated": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-multi-comp": "error",
    "react/no-redundant-should-component-update": "error",
    "react/no-typos": "error",
    "react/no-this-in-sfc": "error",
    "react/no-unknown-property": "error",
    "react/no-unsafe": "error",
    "react/no-unused-prop-types": "error",
    "react/no-unused-state": "error",
    "react/prefer-es6-class": "error",
    "react/prefer-stateless-function": ["error", {ignorePureComponents: true}],
    "react/prop-types": "error",
    "react/react-in-jsx-scope": "error",
    "react/require-render-return": "error",
    "react/self-closing-comp": "error",
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error",
    "react/jsx-tag-spacing": ["error", {
      "closingSlash": "never",
      "beforeSelfClosing": "always",
      "afterOpening": "never",
      "beforeClosing": "never"
    }],
    // "react/state-in-constructor": "error",  not released now
    // "react/static-property-placement": "error", not released now

    // JSX
    "react/jsx-closing-bracket-location": "error",
    "react/jsx-closing-tag-location": "error",
    "react/jsx-curly-spacing": ["error", {"when": "never"}],
    "react/jsx-equals-spacing": ["error", "never"],
    "react/jsx-filename-extension": "error",
    "react/jsx-first-prop-new-line": ["error", "multiline"],
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-key": "error",
    "react/jsx-max-props-per-line": ["error", { "when": "multiline" }],
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-one-expression-per-line": ["error", { "allow": "literal" }],
    "react/jsx-fragments": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-props-no-multi-spaces": "error",
    "react/jsx-sort-props": ["error", {callbacksLast: true, shorthandFirst: true, noSortAlphabetically: true}],
    "react/jsx-wrap-multilines": ["error", {
      declaration: "parens-new-line",
      assignment: "parens-new-line",
      return: "parens-new-line",
      arrow: "parens-new-line",
      condition: "parens-new-line",
      logical: "parens-new-line",
      prop: "parens-new-line"
    }],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
  "overrides": [
    {
      "files": ["*.test.js"],
      "rules": {
        "no-unused-vars": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": "off",
      },
    }
  ]
};
