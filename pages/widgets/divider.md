# Divider

The Divider Widget facilitates the rendering of dividers, enabling visual separation and organization of content within your application for enhanced clarity and aesthetics.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/4a893a2e-5bde-400c-b974-b25b497d31a5)

## Properties

| Property | Type   | Description               |
| :------- | :----- | :------------------------ |
| styles   | object | [See properties](#styles) |

### styles

| Property                     | Type              | Description                                                                                                                                                                                                                                                                                                                        |
| :--------------------------- | :---------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| expanded                     | boolean           | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row)                                                                                                                                                                               |
| margin                       | string or integer | Margin with CSS-style notation e.g. margin: 5 20 5                                                                                                                                                                                                                                                                                 |
| direction                    | string            | Whether to display a horizontal divider (default) or vertical divider.                                                                                                                                                                                                                                                             |
| thickness                    | integer           | Determines the thickness or width of the divider line within the Divider.                                                                                                                                                                                                                                                          |
| color                        | integer or string | The color specification for divider, which can be represented in different formats. It can be specified as a number, a predefined color name, or a hexadecimal value starting with '0x'. `transparent` `black` `blue` `white` `red` `grey` `teal` `amber` `pink` `purple` `yellow` `green` `brown` `cyan` `indigo` `lime` `orange` |
| indent                       | integer           | The leading gap before the line starts                                                                                                                                                                                                                                                                                             |
| endIndent                    | integer           | The ending gap after the line ends                                                                                                                                                                                                                                                                                                 |
| visible                      | boolean           | Toggle a widget visibility on/off. Note that an invisible widget will not occupy UI space, unless the visibilityTransitionDuration is specified.                                                                                                                                                                                   |
| visibilityTransitionDuration | number            | Specify the duration in seconds when a widget animates between visible and not visible state. Note that setting this value will cause the widget to still occupy the UI space even when it is not visible.                                                                                                                         |
| elevation                    | integer           | The z-coordinate at which to place this material relative to its parent. A non-zero value will show a shadow, with its size relative to the elevation value. Minimum value: 0, Maximum value: 24                                                                                                                                   |
| elevationShadowColor         | integer or string | The shadow color for the elevation, which can be represented in different formats. It can be specified as a number, a predefined color name, or a hexadecimal value starting with '0x'. `transparent` `black` `blue` `white` `red` `grey` `teal` `amber` `pink` `purple` `yellow` `green` `brown` `cyan` `indigo` `lime` `orange`  |
| elevationBorderRadius        | string or integer | The border radius of the widget.This can be specified using CSS-like notation with 1 to 4 integers. Minimum value: 0.                                                                                                                                                                                                              |
| alignment                    | string            | The alignment of the widget relative to its parent. `topLeft`, `topCenter`, `topRight`, `centerLeft`, `center`, `centerRight`, `bottomLeft`, `bottomCenter`, `bottomRight`                                                                                                                                                         |
| stackPositionTop             | integer           | The distance of the child's top edge from the top of the stack. This is applicable only for Stack's children.                                                                                                                                                                                                                      |
| stackPositionBottom          | integer           | The distance that the child's bottom edge from the bottom of the stack. This is applicable only for Stack's children.                                                                                                                                                                                                              |
| stackPositionLeft            | integer           | The distance that the child's left edge from the left of the stack. This is applicable only for Stack's children.                                                                                                                                                                                                                  |
| stackPositionRight           | integer           | The distance that the child's right edge from the right of the stack. This is applicable only for Stack's children.                                                                                                                                                                                                                |
| captureWebPointer            | boolean           | Applicable for Web only. When overlaying widgets on top of certain HTML container (e.g. Maps), the mouse click is captured by the HTML container, causing issue interacting with the widget. Use this to capture and maintain the mouse pointer on your widget.                                                                    |
| margin                       | string or integer | Margin with CSS-style notation                                                                                                                                                                                                                                                                                                     |