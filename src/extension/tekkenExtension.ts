import { MarkedExtension } from "marked"
import { parseMovesIntoTokens } from "./parseMoves"
import { Token } from "./token/token"
import { renderToken } from "./renderToken"

const tekkenPattern = /\{tk:(.*)\}/
const tokenRule = /^\{tk:(.*)\}/ 

export const tekkenExtension = (): MarkedExtension => {
  return {
    extensions: [
      {
        name: 'tekken',
        level: 'inline',
        start(src) {
          return src.match(tekkenPattern)?.index
        },
        tokenizer(src, _tokens) {
          const match = tokenRule.exec(src)
          if (!match) {
            return
          }

          const tokens = parseMovesIntoTokens(match[1].trim())

          return {
            type: 'tekken',
            raw: match[0],
            tekkenTokens: tokens,
          }
        },
        renderer(token) {
          return token
            .tekkenTokens
            ?.map((token: Token) => renderToken(token))
            .join('')
        }
      }
    ]
  }
}