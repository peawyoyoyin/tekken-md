import { describe, test, expect } from "vitest";
import { parse } from "./parser.pegjs";

import { Tekken as TK } from "../extension/ast";

describe('parser', () => {
  test('chords', () => {
    expect(parse('1+2')).toEqual(
      [
        TK.string([
          TK.chord('1', '2')
        ])
      ]
    )
  })

  test('shorthand strings', () => {
    expect(parse('b4231')).toEqual(
      [
        TK.string([
          TK.chord('b', '4'),
          TK.chord('2'),
          TK.chord('3'),
          TK.chord('1')
        ])
      ]
    )

    expect(parse('b+4231')).toEqual(
      [
        TK.string([
          TK.chord('b', '4'),
          TK.chord('2'),
          TK.chord('3'),
          TK.chord('1')
        ])
      ]
    )

    expect(parse('ff2')).toEqual(
      [
        TK.string([
          TK.chord('f'),
          TK.chord('f'),
          TK.chord('2')
        ])
      ]
    )
  })

  test('with stance', () => {
    expect(parse('[LIB]212')).toEqual(
      [
        TK.string([
          TK.chord('2'),
          TK.chord('1'),
          TK.chord('2')
        ], 'LIB')
      ]
    )
  })
})
