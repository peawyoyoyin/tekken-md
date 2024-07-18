import { parse } from "../parser/parser.pegjs"
import { Tekken } from "./ast"
import { Token } from "./token/token"
import { renderExpression } from "./render/expression"

export const parseMovesIntoTokens = (raw: string): Token[] => {
  try {
    const expression = parse(raw) as Tekken.Expression
    const glyphs = renderExpression(expression)
  
    // console.log({ raw, expression, glyphs })
  
    return glyphs
  } catch(e) {
    console.error(e)
    return []
  }
}
