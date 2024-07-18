import { Tekken } from "../ast"
import { stance, Token } from "../token/token"
import { renderButtonAbbreviation, renderChord, renderSweep } from "./buttons"

export const renderString = (str: Tekken.FullString): Token[] => {
  const stanceToken = str.stance ? [stance(str.stance)] : [] as Token[]

  const buttonTokens = str.buttons.flatMap(el => {
    switch (el.type) {
      case "sweep":
        return renderSweep(el)
      case "chord":
        return renderChord(el)
      case "button-abbreviation":
        return renderButtonAbbreviation(el)
    }
  })

  return stanceToken.concat(buttonTokens)
}

export const renderStringAbbreviation = (abr: Tekken.StringAbbreviation): Token[] => {
  switch (abr.abbreviation) {
    case "EWGF":
      return renderString(
        Tekken.string([
          Tekken.chord('f'),
          Tekken.chord('n'),
          Tekken.chord('d'),
          Tekken.chord('d', 'f'),
          Tekken.chord('2'),
        ])
      )
    case "KI":
      return renderString(
        Tekken.string([
          Tekken.chord('1', '2', '3', '4')
        ])
      )
    case "HEAT":
      return renderString(
        Tekken.string([
          Tekken.chord('2', '3')
        ])
      )
    case "RA":
      return renderString(
        Tekken.string([
          Tekken.chord('d', 'f', '1', '2')
        ])
      )
  }
}

