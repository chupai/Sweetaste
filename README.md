# 六角甜點電商 切版練習

## 位置

- 網頁：https://chupai.github.io/Sweetaste/
- Github：https://github.com/chupai/Sweetaste/blob/master
- 設計稿：https://xd.adobe.com/spec/934efdb7-a7e4-47d5-572e-efece0914f62-e57f/

## CSS 排序

- [Concentric-CSS](https://github.com/brandon-rhodes/Concentric-CSS/blob/master/style3.css)

## BEM 命名規範

### 前綴

- `h-` Helpers
- `p-` Pages
- `l-` Layout
- `m-` Modules
- `e-` Element，最小元件，不可堪入其他 Block
- `is-`/`has` States
- `js` JavaScript hooks
- 其餘為 Bootstrap 的 Grid System 與 Utilities

### 基本規則

`Block__Element_Modifier`

### 元素的子元素

`Block__Element` 的子元素以 `Block__Element-element` 表示。

```css
.m-list__link {
  /* ... */
}
}
.m-list__link-bg {
  /* ... */
}
```

### 頁面或模塊的特殊樣式，以 `_Modifier` 去修改樣式。

```
.m-list_p-index {}
.e-list_m-index {}
```

## Sass 結構

- Vendors
- Utils
  - functions
  - variables
  - mixins
- Config
  - reset
  - reboot
- Helpers
- Element
- Modules
- Layout
- Pages

## Bootstrap 4

載入的 Bootstrap 4

### Grid system

- breakpoints
- bootstrap-grid

### Utilities

- sizing
- spacing
- visibility
- visibility

## 其他

- 使用 `rem` 單位
- flex 排版
- Material Icons
