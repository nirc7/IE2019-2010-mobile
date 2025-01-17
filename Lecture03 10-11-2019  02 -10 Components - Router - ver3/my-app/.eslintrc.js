module.exports = {
    "parser": "babel-eslint",
    // "extends": "airbnb",
    "extends": ["eslint:recommended", "plugin:react/recommended"],    
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        }
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ]
};

// module.exports = {
// 	/* See all the pre-defined configs here: https://www.npmjs.com/package/eslint-config-defaults */
// 	"extends": "defaults/configurations/eslint",
// 	"parser": "babel-eslint",
// 	"ecmaFeatures": {
// 		"jsx": true
// 	},
// 	"plugins": [
// 		"react"
// 	],
// 	"env": {
// 		"amd": true,
// 		"browser": true,
// 		"jquery": true,
// 		"node": true,
// 		"es6": true,
// 		"worker": true
// 	},
// 	"rules": {

// 		"eqeqeq": 2,
// 		"comma-dangle": 1,
// 		"no-console": 0,
// 		"no-debugger": 1,
// 		"no-extra-semi": 1,
// 		"no-extra-parens": 1,
// 		"no-irregular-whitespace": 0,
// 		"no-undef": 0,
// 		"no-unused-vars": 0,
// 		"semi": 1,
// 		"semi-spacing": 1,
// 		"valid-jsdoc": [
// 			2,
// 			{ "requireReturn": false }
// 		],

// 		"react/display-name": 2,
// 		"react/forbid-prop-types": 1,
// 		"react/jsx-boolean-value": 1,
// 		"react/jsx-closing-bracket-location": 1,
// 		"react/jsx-curly-spacing": 1,
// 		"react/jsx-indent-props": 1,
// 		"react/jsx-max-props-per-line": 0,
// 		"react/jsx-no-duplicate-props": 1,
// 		"react/jsx-no-literals": 0,
// 		"react/jsx-no-undef": 1,
// 		"react/jsx-sort-prop-types": 1,
// 		"react/jsx-sort-props": 0,
// 		"react/jsx-uses-react": 1,
// 		"react/jsx-uses-vars": 1,
// 		"react/no-danger": 1,
// 		"react/no-did-mount-set-state": 1,
// 		"react/no-did-update-set-state": 1,
// 		"react/no-direct-mutation-state": 1,
// 		"react/no-multi-comp": 1,
// 		"react/no-set-state": 0,
// 		"react/no-unknown-property": 1,
// 		"react/prop-types":0,
// 		"react/react-in-jsx-scope": 0,
// 		"react/require-extension": 1,
// 		"react/self-closing-comp": 1,
// 		"react/sort-comp": 1,
// 		"react/wrap-multilines": 1
// 	}
// }