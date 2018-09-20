![geniem-github-banner](https://cloud.githubusercontent.com/assets/5691777/14319886/9ae46166-fc1b-11e5-9630-d60aa3dc4f9e.png)

# ACF Codifier

- Contributors: [devgeniem](https://github.com/devgeniem) / [Liblastic](https://github.com/Liblastic)
- Tags: wordpress, acf
- License: GPL-3.0 or later
- License URI: http://www.gnu.org/licenses/gpl-3.0.html

## Description
Adds button which toggle ACF flexible fields in WordPress admin side. If you have multiple layouts open admin may become messy to maintain.
This plugin makes admin side faster to use when user wants to order flexible fields.

## Installation
add to your composer.json

### Composer
Install by composer command
```
composer require devgeniem/wp-close-acf-flexible-layouts
```
OR add it in your `composer.json`:
```
{
  "require": {
    "devgeniem/wp-close-acf-flexible-layouts": "*"
  }
}
```

You can, however, install it also as an ordinary plugin.:

- Download the latest release [here](https://github.com/devgeniem/acf-toggle-flexible-layouts/releases/latest) and just extract the archive in your `plugins` directory.

## Filters

### Button texts.
You can filter button name with filter `geniem/toggle_flexible_layouts/localized_strings`.

### Button styles.
You can filter button texts and icons with filter `geniem/toggle_flexible_layouts/button_data`.

## Screenshot
![alt text](https://user-images.githubusercontent.com/8523479/27689526-200d6c66-5ce7-11e7-8288-dfcf369075da.png "Description goes here")
