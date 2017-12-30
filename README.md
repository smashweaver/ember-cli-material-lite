# ember-cli-material-lite

This ember-cli addon integrates google's [Material Design Lite](https://getmdl.io/components/index.html) components with ember-cli apps.

## Installation

```
ember install ember-cli-material-lite
```

## Usage

Specify the following option in your app's ember-cli-build.js:
```
var app = new EmberAddon(defaults, {
  sassOptions: {
    includePaths: [
      'node_modules/material-design-lite/src'
    ]
  }
});
```

Rename app/styles/app.css to app/styles/app.scss, then import the addon's sass like so:
```
@import "_color-definitions";

$color-primary: $palette-blue-grey-500;
$color-accent: $palette-red-500;

@import "material-design-lite";
```

Other color variables are available [here](https://github.com/google/material-design-lite/blob/3b749f1455f477927225723bd662ae9b51a8ca66/src/_variables.scss). Color palettes can be found [here](https://github.com/google/material-design-lite/blob/88872e672e41c56af0a78a35b34373b8c4a8c49d/src/_color-definitions.scss) and [here](https://material.io/guidelines/style/color.html).

## Demo site
Check out components at [https://smashweaver.github.io/ember-cli-material-lite/](https://smashweaver.github.io/ember-cli-material-lite/)
