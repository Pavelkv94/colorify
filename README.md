
----------

# Console Colors

A simple npm package for adding colors and styles to your console output. Easily customize the appearance of your text with background colors, text colors, and text decorations.

## Installation

Install the package using npm:

`npm install @pavelkv94/colorify` 

or

`yarn add @pavelkv94/colorify` 

## Usage

To use the package, require it in your Node.js script and apply colors to your text as needed.

### Example
```
const { applyColor, colors } = require('@pavelkv94/colorify');

// Apply text color
console.log(applyColor('This is red text!', colors.textColor.red));

// Apply background color
console.log(applyColor('This has a yellow background!', colors.bgColor.bgYellow + colors.textColor.black));

// Apply decoration
console.log(applyColor('This is underlined text.', colors.decoration.underline));` 
```

es6 

`import { applyColor, colors } from ('@pavelkv94/colorify');`


## API

### `applyColor(text, colorCode)`

Applies the given color code to the text and returns the formatted string.

-   **Parameters:**
    
    -   `text` (string): The text to be colored.
    -   `colorCode` (string): The ANSI escape code for the color or decoration.
-   **Returns:**
    
    -   (string): The text formatted with the specified color or decoration.

### Color Codes

#### Background Colors (`colors.bgColor`)

-   `bgBlack`: Black background
-   `bgRed`: Red background
-   `bgGreen`: Green background
-   `bgYellow`: Yellow background
-   `bgBlue`: Blue background
-   `bgMagenta`: Magenta background
-   `bgCyan`: Cyan background
-   `bgWhite`: White background

#### Text Colors (`colors.textColor`)

-   `black`: Black text
-   `red`: Red text
-   `green`: Green text
-   `yellow`: Yellow text
-   `blue`: Blue text
-   `magenta`: Magenta text
-   `cyan`: Cyan text
-   `white`: White text

#### Decorations (`colors.decoration`)

-   `reset`: Reset all styles
-   `bright`: Bright text
-   `dim`: Dim text
-   `italic`: Italic text (may not be supported in all terminals)
-   `underline`: Underlined text
-   `inverse`: Inverted text and background colors
-   `hidden`: Hidden text (not visible)
-   `strikethrough`: Strikethrough text (may not be supported in all terminals)

## License

This package is licensed under the Apache-2.0.