import { Glyph } from "./glyph"

export type GlyphToken = {
  type: 'glyph',
  glyph: Glyph
}

export type StanceToken = {
  type: 'stance',
  text: string
}

export type CommentToken = {
  type: 'comment',
  text: string
}

export type Token = GlyphToken | StanceToken | CommentToken

export const glyph = (glyph: Glyph): GlyphToken => ({
  type: 'glyph',
  glyph,
})

export const stance = (stance: string): StanceToken => ({
  type: 'stance',
  text: stance
})

export const comment = (text: string): CommentToken => ({
  type: 'comment',
  text
})
