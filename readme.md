# Expo初体验  
简单试了试，感受了下expo框架的路由等，配环境配起来是真方便  
but发现想用的SDK包用不了，老老实实换react-native了  
# 用expo 创建项目
npx create-expo-app --template blank  
# 将src/设为@
npx expo customize babel.config.js  
npm i -D babel-plugin-module-resolver  
然后将babel.config.js里面的内容改为：
```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@': './src',
          }
        }
      ]
    ]
  };
};
```
但是此时，我们ctrl＋左键不能通过@/xxx/xxx跳转到对应的文件里面去  
创建jsconfig.json文件  
配置：  
```json
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@/*": ["./src/*"]
        }
    },
    "exclude": ["node_modules","**/node_modules/*"]
}
```

# 配置.prettierrc.json
首先npm i -D prettier下载 
创建.prettierrc.json  
写：  
```json
{
  "$schema": "https://json.schemastore.org/prettierrc",
  "semi": false,
  "singleQuote": true,
  "printWidth": 100
}
```
然后package.json的scripts里面可以加入：    "format": "prettier --write \"**/*.{js,json,md,ts,jsx,tsx}\""  
也可以编辑器设置保存时自动使用prettier  