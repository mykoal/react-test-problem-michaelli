// Added "./src/App.stories.js"

module.exports = {
  "stories": [
    "../src/*.stories.mdx",
    "../src/*.stories.@(js|jsx|ts|tsx)"
    "./src/App.stories.js"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}
