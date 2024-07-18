export type Direction = 'up' | 'down' | 'forward' | 'back' | 'up-forward' | 'down-forward' | 'up-back' | 'down-back'
export type DirectionStyle = 'line' | 'filled'
export type DirectionWithStyle = `arrows/${DirectionStyle}/${Direction}`

export type ButtonKey = '1'
 | '2'
 | '3'
 | '4'
 | '12'
 | '13'
 | '14'
 | '23'
 | '24'
 | '34'
 | '123'
 | '124'
 | '134'
 | '234'
 | '1234'

export type Button = `buttons/${ButtonKey}`

export type Glyph = DirectionWithStyle | Button | 'star' | 'bracket-left' | 'bracket-right' | 'divider'
