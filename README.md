# Silverstripe CMS CopyField

This module provides a `CopyField` for Silverstripe CMS. The `CopyField` includes a copy button to make it easy to copy the value of the field to the clipboard.

![image](https://user-images.githubusercontent.com/1168676/136212260-a0aa9c61-09fb-4f09-994b-1dbe5a03b134.png)

## Installation

```
composer require maxime-rainville/silverstripe-copy-field
```

## Usage

The CopyField defaults to being read only. If you want to hide the value, you can use the `setObfuscate` method on the `CopyField` to get it to render as a password.

```php
use MaximeRainville\CopyField\CopyField;

...

$fields->addFieldsToTab(
    'Root.Main',
    [
        CopyField::create('APIKey', 'API Key', $this->Key),
        CopyField::create('APISecret', 'API Secret', $this->Secret)->setObfuscate(true)
    ]
);
```
