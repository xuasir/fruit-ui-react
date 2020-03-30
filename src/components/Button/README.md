## Fruit-Button 都拥有什么

---

按照按钮类型的分类：

-Primary 按钮：主要按钮
-Default 按钮：默认按钮
-Danger 按钮：警示按钮
-Dashed 按钮：虚线框按钮
-Link 按钮：链接型按钮

按照按钮形状的分类：

-Round 按钮：圆角按钮
-Circle 按钮：圆形按钮

按照按钮状态的分类：

-Loading 按钮：包含加载状态的按钮
-Disabled 按钮：禁用状态的按钮

<!-- 可以在按钮中添加上Icon，当然也可以将Icon放在Children中传入：

-Icon按钮 -->

还可以选择按钮的大小：

-Large 按钮
-Small 按钮

##API

| 属性       | 说明                       | 类型      | 可选值                                           | 默认值    |
| ---------- | -------------------------- | --------- | ------------------------------------------------ | --------- |
| buttonType | 指定按钮类型               | `String`  | `default`、`primary`、`danger`、`dashed`、`link` | `default` |
| shape      | 指定按钮形状               | `String`  | `round`、`circle`                                | `-`       |
| size       | 指定按钮大小               | `String`  | `large`、`small`                                 | `-`       |
| className  | 指定按钮自定义 class       | `String`  | `-`                                              | `-`       |
| disabled   | 指定按钮禁用状态           | `Boolean` | `true`、`false`                                  | `fasle`   |
| block      | 指定按钮是否为块级显示状态 | `Boolean` | `true`、`false`                                  | `fasle`   |
