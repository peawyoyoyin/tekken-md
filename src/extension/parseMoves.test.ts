import { test, expect } from 'vitest'
import { parseMovesIntoTokens } from './parseMoves'
import { Glyph } from './token/glyph'

test('single move: simple cases', () => {
  expect(parseMovesIntoTokens('df2')).toEqual<Glyph[]>([
    'arrows/line/down-forward',
    'buttons/2'
  ])

  expect(parseMovesIntoTokens('uf3')).toEqual<Glyph[]>([
    'arrows/line/up-forward',
    'buttons/3'
  ])

  expect(parseMovesIntoTokens('2')).toEqual<Glyph[]>([
    'buttons/2'
  ])

  expect(parseMovesIntoTokens('1+2')).toEqual<Glyph[]>([
    'buttons/12'
  ])

  expect(parseMovesIntoTokens('d3+4')).toEqual<Glyph[]>([
    'arrows/line/down',
    'buttons/34'
  ])
})

test('single move: string', () => {
  expect(parseMovesIntoTokens('d24')).toEqual<Glyph[]>([
    'arrows/line/down',
    'buttons/2',
    'buttons/4'
  ])

  expect(parseMovesIntoTokens('f,n,d,df2')).toEqual<Glyph[]>([
    'arrows/line/forward',
    'star',
    'arrows/line/down',
    'arrows/line/down-forward',
    'buttons/2'
  ])

  expect(parseMovesIntoTokens('fF2')).toEqual<Glyph[]>([
    'arrows/line/forward',
    'arrows/filled/forward',
    'buttons/2'
  ])
})

test('multiple moves', () => {
  expect(parseMovesIntoTokens('df1 d24')).toEqual<Glyph[]>([
    'arrows/line/down-forward',
    'buttons/1',
    'divider',
    'arrows/line/down',
    'buttons/2',
    'buttons/4'
  ])
})
