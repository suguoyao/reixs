module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        codeFrame: true
    },
    env: {
        es6: true,
        browser: true,
        node: true
    },
    globals: {
        reixs: false,
        describe:false,
        it:false,
        expect:false
    },
    extends: 'eslint:recommended',
    plugins: ['html'],
    rules: {
        'no-console': 0,

        //Stylistic Issues
        'array-bracket-spacing': 2,     
        'block-spacing': 2,
        'brace-style': [2, '1tbs', {allowSingleLine: true}],
        'camelcase' : [2, {properties: 'never'}],
        'comma-dangle': [2],
        'comma-spacing': 2,
        'comma-style': 2,
        'computed-property-spacing': 2,
        'func-call-spacing': 2,
        'func-style': [2, 'declaration'],
        'function-paren-newline': 2,
        'id-blacklist': [2, 'err', 'e', 'cb', 'callback'],
        'id-length': [2, {max: 15, properties: 'never'}],
        'implicit-arrow-linebreak': 2,
        'indent': 2,
        'key-spacing': 2,
        'keyword-spacing': 2,
        'line-comment-position': 2,
        'linebreak-style': 2,
        'lines-around-comment': 2,
        'lines-between-class-members': 2,
        'max-depth': 2,
        'max-lines': [2, {max: 500}],
        'max-nested-callbacks': [2, {max: 3}],
        'max-params': [2,{ max: 5 }],
        'max-statements-per-line': 2,
        'multiline-comment-style': 2,
        'new-cap': 2,
        'new-parens': 2,
        'no-continue': 2,
        'no-inline-comments': 2,
        'no-lonely-if': 2,
        'no-mixed-operators': 2,
        'no-multi-assign': 2,
        'no-multiple-empty-lines': 2,
        'no-negated-condition': 2,
        'no-nested-ternary': 2,
        'no-plusplus': 2,
        'no-unneeded-ternary': 2,
        'no-whitespace-before-property': 2,
        'nonblock-statement-body-position': 2,
        'object-curly-spacing': 2,
        'object-property-newline': 2,
        'one-var': [2, 'never'],
        'operator-assignment': 2,
        'operator-linebreak': [2, 'before'],
        'padded-blocks': [2, 'never'],
        'quote-props': [2, 'as-needed'],
        'quotes': [2, 'single'],
        'semi':[2, 'never'],
        'semi-spacing': 2,
        'sort-vars': 2,
        'space-before-blocks': 2,
        'space-infix-ops': 2,
        'space-unary-ops': 2,
        'spaced-comment': 2,
        'switch-colon-spacing': 2,
        'template-tag-spacing': 2,
        'wrap-regex': 2,

        //ECMAScript 6
        'no-var': 2,
        'object-shorthand': 2,
        'prefer-destructuring': 2,
        'prefer-rest-params': 2,
        'prefer-spread': 2,
        'prefer-template': 2,
        'rest-spread-spacing': 2,
        'template-curly-spacing': 2
    }
};
