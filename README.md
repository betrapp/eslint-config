## eslint-config
Askott/FansUnite's eslint shared config

## Usage
Install:

```
npm i --save-dev @fansunite/eslint-config
```

In your project's `.eslintrc`

```
{
    "extends": "@fansunite/eslint-config"
}
```

If you need to override or turn off rules:
```
{
  "extends": "@fansunite/eslint-config",
  "rules": {
    "comma-dangle": 0, // disable trailing commas
    "jsx-quotes": "prefer-double" // change
  }
}
