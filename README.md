# memory
A mini project to study react SSR.

## !Important

项目使用了antd-mobile与typescript，由于next对webpack做了上层封装，
导致项目不能直接配置.babelrc（如下配置）完成按需引入。antd-mobile官方给出了
[use-typescript](https://ant.design/docs/react/use-in-typescript)的方案,
但由于next使用的是next-babel-loader的loader机制，暂时无法使用以上方案，
因此项目里使用手动引入组件的方式。

```json
"plugins": [
    [
      "import",
      {
        "libraryName": "antd-mobile",
        "libraryDirectory": "es",
        "style": false
        // `style: true` 会加载 less 文件
      }
    ]
  ]
```

> 截止最新（2018-12-13）探索，目前还没有更优雅的解决办法。
