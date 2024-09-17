// @types/colorify/index.d.ts

declare module '@pavelkv94/colorify' {
    export const colors: {
      bgColor: {
        bgBlack: string;
        bgRed: string;
        bgGreen: string;
        bgYellow: string;
        bgBlue: string;
        bgMagenta: string;
        bgCyan: string;
        bgWhite: string;
      };
      textColor: {
        black: string;
        red: string;
        green: string;
        yellow: string;
        blue: string;
        magenta: string;
        cyan: string;
        white: string;
      };
      decoration: {
        reset: string;
        bright: string;
        dim: string;
        italic: string;
        underline: string;
        inverse: string;
        hidden: string;
        strikethrough: string;
      };
    };
  
    export function applyColor(text: string, colorCode: string): string;
  }
  