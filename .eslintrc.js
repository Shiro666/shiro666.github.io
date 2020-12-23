module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "plugin:prettier/recommended",
        "plugin:react/recommended",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        // 结尾逗号
        "semi": ["warn", "always"],
        // 单引号
        "quotes": ["warn", "single"],
        // 4个空格
        "indent": ["warn", 4],
        // 变量声明未引用
        "no-unused-vars": [
            "error",
            {
                "args": "none",
                "ignoreRestSiblings": true
            }
        ],
        // 禁用console
        "no-console": "off",
        // 使用===或!==
        "eqeqeq": ["warn", "allow-null"]
    }
};
