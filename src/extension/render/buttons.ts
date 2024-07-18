import { Tekken } from "../ast";
import { Glyph } from "../token/glyph";
import { glyph, Token } from "../token/token";

export const isDirectionalButton = (button: Tekken.Button): button is Tekken.DirectionalButton =>
  'fbudFBUDn'.includes(button)

const groupChordButtons = (buttons: Tekken.Button[]): [directions: Tekken.DirectionalButton[], attacks: Tekken.AttackButton[]] => {
  const directions: Tekken.DirectionalButton[] = []
  const attacks: Tekken.AttackButton[] = [] 

  for (const button of buttons) {
    if (isDirectionalButton(button)) {
      directions.push(button)
    } else {
      attacks.push(button)
    }
  }

  return [directions, attacks]
}


const renderAttacks = (buttons: Tekken.AttackButton[]): Token | undefined => {
  if (buttons.length === 0) {
    return undefined
  }

  return glyph(`buttons/${buttons.sort().join('')}` as Glyph)
}

const renderDirections = (directions: Tekken.DirectionalButton[]): Token | undefined => {
  if (directions.length === 0) {
    return undefined
  }

  if (directions.includes('n')) {
    return glyph('star')
  }

  const verticalButtons = directions.filter(b => 'udUD'.includes(b)) as ('u' | 'U' | 'd' | 'D')[]
  const horizontalButtons = directions.filter(b => 'fbFB'.includes(b)) as ('f' | 'F' | 'b' | 'B')[]
  
  if (verticalButtons.length > 1 || horizontalButtons.length > 1) {
    throw RangeError(`unexpected directions ${directions}`)
  }

  let direction = ''
  if (verticalButtons.length === 0) {
    switch (horizontalButtons[0]) {
      case "f":
      case "F":
        direction = 'forward'
        break
      case "b":
      case "B":
        direction = 'back'
        break
    }
  } else if (horizontalButtons.length === 0) {
    switch (verticalButtons[0]) {
      case "u":
      case "U":
        direction = 'up'
        break
      case "d":
      case "D":
        direction = 'down'
        break  
    }
  } else {
    const v = verticalButtons[0], h = horizontalButtons[0]
    const combined = `${v}${h}`.toLowerCase() as `${Lowercase<typeof verticalButtons[number]>}${Lowercase<typeof horizontalButtons[number]>}`
    switch (combined) {
      case "uf":
        direction = 'up-forward'
        break
      case "ub":
        direction = 'up-back'
        break
      case "df":
        direction = 'down-forward'
        break
      case "db":
        direction = 'down-back'
        break
    }
  }

  if (directions.some(dir => 'FBUD'.includes(dir))) {
    return glyph(`arrows/filled/${direction}` as Glyph)
  } else {
    return glyph(`arrows/line/${direction}` as Glyph)
  }
}

export const renderChord = (chord: Tekken.Chord): Token[] => {
  const [directions, attacks] = groupChordButtons(chord.buttons)

  const directionGlyphs = ([renderDirections(directions)].filter(Boolean)) as Token[]
  const attackGlyphs = ([renderAttacks(attacks)].filter(Boolean)) as Token[]

  return directionGlyphs.concat(attackGlyphs)
} 

export const renderSweep = (sweep: Tekken.Sweep): Token[] => {
  const [directions, attacks] = groupChordButtons(sweep.buttons)

  const directionGlyphs = ([renderDirections(directions)].filter(Boolean)) as Token[]
  const attackGlyphs = attacks.flatMap(atk => ([renderAttacks([atk])].filter(Boolean)) as Token[])

  return [
    ...directionGlyphs,
    glyph('bracket-left'),
    ...attackGlyphs,
    glyph('bracket-right')
  ]
}

export const renderButtonAbbreviation = (abr: Tekken.ButtonAbbreviation): Token[] => {
  switch (abr.abbreviation) {
    case "hcb":
      return [
        renderChord(Tekken.chord('f')),
        renderChord(Tekken.chord('d', 'f')),
        renderChord(Tekken.chord('d')),
        renderChord(Tekken.chord('d', 'b')),
        renderChord(Tekken.chord('b')),
      ].flat()
    case "hcf":
      return [
        renderChord(Tekken.chord('b')),
        renderChord(Tekken.chord('d', 'b')),
        renderChord(Tekken.chord('d')),
        renderChord(Tekken.chord('d', 'f')),
        renderChord(Tekken.chord('f')),
      ].flat()
    case "uhcb":
      return [
        renderChord(Tekken.chord('f')),
        renderChord(Tekken.chord('u', 'f')),
        renderChord(Tekken.chord('u')),
        renderChord(Tekken.chord('u', 'b')),
        renderChord(Tekken.chord('b')),
      ].flat()
    case "uhcf":
      return [
        renderChord(Tekken.chord('b')),
        renderChord(Tekken.chord('u', 'b')),
        renderChord(Tekken.chord('u')),
        renderChord(Tekken.chord('u', 'f')),
        renderChord(Tekken.chord('f')),
      ].flat()
    case "qcb":
      return [
        renderChord(Tekken.chord('d')),
        renderChord(Tekken.chord('d', 'b')),
        renderChord(Tekken.chord('b')),
      ].flat()
    case "qcf":
      return [
        renderChord(Tekken.chord('d')),
        renderChord(Tekken.chord('d', 'f')),
        renderChord(Tekken.chord('f')),
      ].flat()
    case "uqcb":
      return [
        renderChord(Tekken.chord('u')),
        renderChord(Tekken.chord('u', 'b')),
        renderChord(Tekken.chord('b')),
      ].flat()
    case "uqcf":
      return [
        renderChord(Tekken.chord('u')),
        renderChord(Tekken.chord('u', 'b')),
        renderChord(Tekken.chord('b')),
      ].flat()
    case "WR":
    case "iWR":
    case "wr":
    case "iwr":
      return [
        renderChord(Tekken.chord('f')),
        renderChord(Tekken.chord('f')),
        renderChord(Tekken.chord('F')),
      ].flat()
  }
}
