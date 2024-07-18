{{
	function string(...buttons) {
    	return {
        	type: 'string',
            buttons
        }
    }
    
    function chord(...buttons) {
    	return {
        	type: 'chord',
            buttons
        }
    }
    
    function sweep(...buttons) {
    	return {
        	type: 'sweep',
            buttons
        }
    }
    
    function comment(text) {
        return {
        	type: 'comment',
            text
        }
    }
    
    function buttonAbbreviation(id) {
    	return {
        	type: 'button-abbreviation',
            abbreviation: id
        }
    }
    
    function stringAbbreviation(id) {
    	return {
        	type: 'string-abbreviation',
            abbreviation: id
        }
    }
}}

Expression
  = head:StringWithStanceOrComment tail:(_ @StringWithStanceOrComment)* {
      return [head].concat(tail)
    }
    
StringWithStanceOrComment = Comment / StringWithStance / StringAbbreviation

Comment = "(" text: $([^\(\)]+) ")" {
	return comment(text)
}

StringAbbreviation = id: ("EWGF" / "KI" / "HEAT" / "RA") {
	return stringAbbreviation(id)
}

StringWithStance = stance: Stance ? string: String {
  return {
    ...string,
    stance
  }
}

Stance = "[" @$([a-zA-Z]+) "]"

String
	= ShorthandAttackString
    / StringUsingAbbreviatedDirectionalString
    / StringUsingShorthandDirectionalString
    / BasicString

StringUsingAbbreviatedDirectionalString
	= AbbreviatedDirectionalStringThenAttackString
    / AbbreviatedDirectionalStringThenAttackChordOrSweep
	/ AbbreviatedDirectionalString

AbbreviatedDirectionalStringThenAttackString = abr: AbbreviatedDirectionalString ","? tail: ShorthandAttackString {
	return string(buttonAbbreviation(abr), ...tail)
}

AbbreviatedDirectionalStringThenAttackChordOrSweep = abr: AbbreviatedDirectionalString ","? atk: AttackChordOrSweep {
	return string(...abr.buttons, atk)
}

AbbreviatedDirectionalString = abr: ("hcb" / "hcf" / "uhcb" / "uhcf" / "qcb" / "qcf" / "uqcb" / "uqcf" / "WR" / "iWR" / "wr" / "iwr") {
	return string(buttonAbbreviation(abr))
}

StringUsingShorthandDirectionalString
	= ShorthandDirectionalStringThenAttackString
    / ShorthandDirectionalStringThenAttackChordOrSweep
    / ShorthandDirectionalString

ShorthandDirectionalStringThenAttackString = dir: ShorthandDirectionalString tail: ShorthandAttackString {
	return string(...dir.buttons, ...tail.buttons)
}
ShorthandDirectionalStringThenAttackChordOrSweep = dir: ShorthandDirectionalString atk: AttackChordOrSweep {
	return string(...dir.buttons, atk)
}

ShorthandDirectionalString = ShorthandVerticalDirectionalString / ShorthandHorizontalDirectionalString

ShorthandVerticalDirectionalString
  = head: VerticalDirection tail: VerticalDirection+ {
    return string(chord(head), ...tail.map(t => chord(t)))
  }

ShorthandHorizontalDirectionalString  
  = head: HorizontalDirection tail: HorizontalDirection+ {
    return string(chord(head), ...tail.map(t => chord(t)))
  }

ShorthandAttackString
  = head: (AttackChordOrSweep / ShorthandDirectionWithAttackChord) tail: AttackChordOrSweep+ {
  	return string(head, ...tail)
  }

AttackChordOrSweep = AttackSweep / AttackChord 

BasicString
  = head: SweepOrChord tail:("," @SweepOrChord)* {
  	return string(head, ...tail)
  }

SweepOrChord = Sweep / Chord
Sweep = ShorthandAttackSweepWithDirection / BasicSweep
Chord = ShorthandDirectionWithAttackChord / ShorthandDirectionalChord / BasicChord

// e.g. b3~4
ShorthandAttackSweepWithDirection
  = direction: DirectionalChord attack: AttackSweep {
  	 return chord(direction, attack)
  }
  
AttackSweep
  = head: Attack tail:("~" @Attack)+ {
  	return sweep(head, ...tail)
  }

BasicSweep
  = head: Button tail:("~" @Button)+ {
  	return sweep(head, ...tail)
  }

ShorthandDirectionWithAttackChord
  = direction: DirectionalChord "+"? attack: AttackChord {
  	return chord(...direction.buttons, ...attack.buttons)
  }

BasicChord
  = head: Button tail: ("+" @Button)* {
  	return chord(head, ...tail)
  }

AttackChord
  = head: Attack tail:("+" @Attack)* {
  	return chord(head, ...tail)
  }


DirectionalChord = ShorthandDirectionalChord / BasicDirectionalChord

BasicDirectionalChord
  = head: Direction tail:("+" @Direction)* {
  	return chord(head, ...tail)
  }

ShorthandDirectionalChord
  = v: VerticalDirection h: HorizontalDirection {
  	return chord(v, h)
  }

Button = Attack / Direction
Direction = HorizontalDirection / VerticalDirection / Neutral
Neutral = "n"
HorizontalDirection = "f" / "b" / "F" / "B"
VerticalDirection = "u" / "d" / "U" / "D"
Attack = "1" / "2" / "3" / "4"
_ "whitespace" = [ \t\n\r]+
