## eslint-config
Askott/betrapp's eslint shared config

## Usage
Install:

```
npm i --save-dev @betrapp/eslint-config
```

In your project's `.eslintrc`

```
{
    "extends": "@betrapp/eslint-config"
}
```

If you need to override or turn off rules:
```
{
  "extends": "@betrapp/eslint-config",
  "rules": {
    "comma-dangle": 0, // disable trailing commas
    "jsx-quotes": "prefer-double" // change
  }
}
