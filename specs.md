# Terminology

## Moves

A **move** is an instance of a tekken character performing a move, includes movements, attacks, grabs, or any other special techniques. A move is usually triggered by a **Move Input**.

A **move input** is a combination and/or sequence of button presses that result in a move. Move Input Notation aims to provide a way to communicate move inputs using keyboard-friendly letters and symbols.

A **move input** that requires only one combination of button press, e.g. df1+2 (Azucena), is called a **chord**.

A **move input** that requires multiple combination of inputs, e.g. b4231 (Asuka) is called a **string**, except for when the multiple combinations of inputs only contains multiple directional buttons and one attack button presses, e.g. EWGF (f,n,d,df2) **is not** a string, ff2 (Asuka) **is not** a string, ff21 (Asuka) **is** a string (because there are multiple attack button presses; 2,1)

## Inputs

**Inputs** indicates which button to press (or *not* press). Move Input Notation allows one to describe inputs using letters and symbols.

There are two different types of inputs in Tekken:

**Directional Input** consists of 5 different inputs:
- Forward (`f`)
- Back (`b`)
- Up (`u`)
- Down (`d`)
- Neutral (`n`) usually denoted by a star symbol in in-game movelists

**Horizontal Directions** includes Forward (f) and Back (b)
**Vertical Directions** includes Up (u) and Down (d)

It is possible to combine one horizontal direction and one vertical direction to form a new Directional Input, e.g. Down-Forward (df) requires pressing both Down and Forward at the same time. 

**Attack Input** consists of 4 different inputs:
- Left hand (`1`)
- Right hand (`2`)
- Left foot (`3`)
- Right foot (`4`)

It is possible to combine different attack inputs to form a new attack input, e.g. 1+2 requires pressing both left hand and right hand buttons at the same time.

One chord can require directional input and attack input, both of them are optional. e.g.:
- f,n,d,df (Kazuya's "wave dash") only requires directional inputs
- 4 (Asuka) only requires attack inputs
- df2 (Asuka) requires both attack input and directional inputs

## Stances
Stances are special states some characters can be in. Being in stances generally gives access to additional moves, thus it is important to denote stances as part of move input to clearly communicate which moves to execute.

Some stances are common among many characters e.g. Back Turn (BT) stance, while some are specific to each character e.g. Azucena's Libertador (LIB) stance, Hworangs Right Foot Forward (RFF) stance

# Move Input Notation Syntax

**Important Note:** Rules usually apply differently for directional and attack inputs, to optimize for convenience in writing them.

## Directional Hold
For directional inputs, lowercase versions of their representation (e.g. `f,u,d,b`) represents a tap of the button, uppercase versions (e.g. `F,U,D,B`) represent holding the button (usually depicted by dark-colored arrows in in-game movelists)

Neutral input (`n`) is only valid in lowercase version.

## Chords
use `+` to denote a chord. Multiple `+`s in a single chunk denote more than two buttons in one chord. Examples:
- `d+f` denotes a chord consisting of down and forward buttons
- `1+2` denotes a chord consisting of left hand and right hand buttons
- `d+f+1+2` denotes a chord consisting of down, forward, left hand, right hand buttons

## Sequences
use `,` to denote sequences of buttons. Multiple `,`s can be chained together to denote a sequence with more than two chords. Examples:
- `b+4,2,3,1` denotes a sequence of back+right foot, then right hand, then left foot, then left hand. 
- `f,n,d,d+f+2` denotes a sequence to execute Kazuya's EWGF.

## Sweeps

Sweep Input involves pressing the related inputs in a quick succession.

use `~` to denote sweep inputs. multiple `~` can be chained together to denote a single sweep with multiple buttons. Examples:
- `3~4` denotes a sweep input from left foot to right foot (e.g. Hworangs neutral stance powercrush) 

## Shorthands
1. Writing **directional inputs** or **a chord of directional inputs** next to **attack input** or **a chord of attack input** denote a chord combining the directional input with the attack input
	- for example
		- `b4` denotes a chord of back and right foot buttons. (equivalent to `b+4`)
		- `d+f2` denotes a chord of down, forward, and right punch buttons. (equivalent to `d+f+2`) 
2. For **directional inputs**, writing vertical direction next to horizontal direction without `,` or `+` denotes a chord of the two.
	- for example
		- `df` denotes a chord of down and forward buttons. (equivalent to `d+f`)
	- this can be use in conjunction with rule 1. for example
		- `df2` denotes a chord of down, forward, and right punch buttons. (equivalent to `d+f+2`)
3. For **direction inputs**, writing a horizontal direction next to another horizontal direction, or a vertical direction next to another vertical direction, always denote a string of those directions.
	- for example
	        - `ff` is equivalent to (`f,f`)
	        - `fF` is equivalent to (`f,F`) 	
5. For **attack inputs**, writing multiple attack inputs next to each other without `,` or `+` denotes a sequence of one attack input after another
	- for example
		- `43` denotes a sequence of right foot button, then left foot button (equivalent to `4,3`)
	- this can be used in conjunction with rule 1 and 2, for example
		- `df141` denotes a sequence equivalent to `d+f+1,4,1`
6. Writing a **directional input** directly after **attack input** always start a new chord
	- for example
		- `f2B` denotes a sequence equivalent to `f+2,B`

## Combos

Usually combos contain multiple moves and/or strings, ` ` (space) can be used to give clear separation between strings. For example: `df2 u4 db14 ff3 ff21+2`

## Stances

use `[<STANCE NAME>]` to denote stances. Stance notes can be omitted if the character is transitioned into said stance in the middle of a combo.

For example:
- `[BT]` in Azucena's `[BT]1+2 4 4 43 ff13` is **mandatory**.
- `[LIB]` in Azucena's `df2 d24 [LIB]212 ff13` is **optional** because `d24` causes Azucena to transition into LIB.

TODO List stance names

## Abbreviations

For commonly-used long strings/chords, abbreviations can be used instead. Abbreviations are always case sensitive.

### List of abbreviations

| term   | equivalent to | note                             |
| ------ | ------------- | -------------------------------- |
| `EWGF` | `f,n,d,df2`   | "Electric Wind God Fist"         |
| `hcb`  | `f,df,d,db,b` | "half-circle-back"               |
| `hcf`  | `b,db,d,df,f` | "half-circle-forward"            |
| `uhcb` | `f,uf,u,ub,b` | "upper half-circle-back"         |
| `uhcf` | `b,ub,u,uf,f` | "upper half-circle-forward"      |
| `qcb`  | `d,db,b`      | "quarter-circle-back"            |
| `qcf`  | `d,df,f`      | "quarter-circle-forward"         |
| `KI`   | `1+2+3+4`     | "Ki Charge"                      |
| `HEAT` | `2+3`         | "Heat Activation" / "Heat Smash" |
| `RA`   | `df1+2`       | "Rage Art"                       |
| `WR`   | `ffF`         | "While Running"                  |
| `iWR`  | `ffF`         | "Instant While Running"          |

## Comments
use `(<COMMENT>)` to denote additional comment on how to execute. Text inside parentheses never denote any inputs. nested parentheses are not allowed.
	for example:
		- `df2 ff23 ff3 ff21+2(delay second f)`

### Common Comments

| term            | meaning       |
| --------------- | ------------- |
| `(W!)`          | tornado state |
| `(CH)`          | counter hit   |
| `(CC)`          | crouch cancel |
| `(LP)`          | low parry     |
| `(Floor Break)` |               |
| `(Floor Blast)` |               |
| `(Wall Break)`  |               |
| `(Wall Bound)`  |               |
| `(Wall Blast)`  |               |
| `(Wall Splat)`  |               |
