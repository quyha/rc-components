## Properties

### Menu sidebar
| Name | Required | Type | Default | Description |
| --- | --- | --- | --- | --- |
| children | required | ReactNode | | Display children element |
| mini | optional | boolean | false | To mini sidebar when value is `true` |
| className | optional | string | | Additional class |

### Menu sidebar item
| Name | Required | Type | Default | Description |
| --- | --- | --- | --- | --- |
| children | required | ReactNode | | Display children element |
| active | optional | boolean | false | Whether menu is active |
| hasSubmenu | optional | boolean | | `true` when menu has sub menu |
| className | optional | string | | Additional class |

### Menu sidebar Sub menu (extend props of menu item)

| Name | Required | Type | Default | Description |
| --- | --- | --- | --- | --- |
| label | required | ReactNode | | Display label for submenu |
| id | required | string | | Display id for submenu (unique) |
| open | optional | boolean | false | `true` when default open submenu |