export namespace Tekken {
  export type Expression = (String | Comment)[]
  
  export type Comment = {
    type: 'comment',
    text: string
  }

  export type String = StringAbbreviation | FullString
  
  export type StringAbbreviationId = 'EWGF' | 'KI' | 'HEAT' | 'RA'
  export type StringAbbreviation = {
    type: 'string-abbreviation',
    abbreviation: StringAbbreviationId
  }
  
  export type FullString = {
    type: 'string'
    buttons: StringComponent[]
    stance: string | null
  }

  export type StringComponent = Sweep | Chord | ButtonAbbreviation

  export type ButtonAbbreviationId = "hcb" | "hcf" | "uhcb" | "uhcf" | "qcb" | "qcf" | "uqcb" | "uqcf" | "WR" | "iWR" | 'wr' | 'iwr'
  export type ButtonAbbreviation = {
    type: 'button-abbreviation',
    abbreviation: ButtonAbbreviationId
  }

  export type Sweep = {
    type: 'sweep'
    buttons: Button[]
  }

  export type Chord = {
    type: 'chord'
    buttons: Button[]
  }

  export type Button = AttackButton | DirectionalButton
  export type AttackButton = '1' | '2' | '3' | '4'
  export type DirectionalButton = 'f' | 'd' | 'u' | 'b' | 'n' | 'F' | 'D' | 'U' | 'B'

  export const string = (buttons: StringComponent[], stance: string | null = null): FullString => {
    return {
      type: 'string',
      buttons,
      stance
    }
  }

  export const sweep = (...buttons: Button[]): Sweep => {
    return {
      type: 'sweep',
      buttons
    }
  }

  export const chord = (...buttons: Button[]): Chord => {
    return {
      type: 'chord',
      buttons
    }
  }
}
