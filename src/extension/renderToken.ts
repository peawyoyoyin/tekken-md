import { Token } from "./token/token"

export const renderToken = (symbol: Token): string => {
  switch(symbol.type) {
    case "glyph":
      switch (symbol.glyph) {
        case 'bracket-left':
          return '['
        case 'bracket-right':
          return ']'
        case 'divider':
          return ','
        default:
          return `<img src="./src/icons/${symbol.glyph}.svg" width="16px" height="16px">`
      }
    case "stance":
      return `[${symbol.text}]&nbsp;`
    case "comment":
      return `(${symbol.text})`
  }
}