module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "prettier/@typescript-eslint",
    "react-app",
    "plugin:prettier/recommended",
  ],
  plugins: [
    "@typescript-eslint",
    "react"
  ],
  env:{
    browser: true,
    node: true,
  },
  settings: {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  }, 
  parserOptions: {
    "ecmaVersion": 2019,
    "sourceType": "module",
    "ecmaFeatures":{
        jsx:true
    }
  }
}