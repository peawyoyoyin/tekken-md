import { Tekken } from "../ast";
import { renderString, renderStringAbbreviation } from "./strings";
import { comment, glyph, Token } from "../token/token";

export const renderExpression = (expression: Tekken.Expression): Token[] => {
  return expression
    .map((str) => {
      switch (str.type) {
        case "string":
          return renderString(str)
        case "string-abbreviation":
          return renderStringAbbreviation(str)
        case "comment":
          return [comment(str.text)]
      }
    })
    .reduce<Token[][]>((acc, val) => [...acc, [glyph('divider')], val], [])
    .slice(1)
    .flat(Infinity) as Token[]
}
