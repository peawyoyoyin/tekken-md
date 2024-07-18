import path from 'path'
import fs from 'fs';

const folderPath = path.resolve(__dirname, '../public/icons/buttons/')

function generateIcons() {
  for (let i = 1; i < 16; i++) {
    const p1 = (i & 0b0001) > 0
    const p2 = (i & 0b0010) > 0
    const p3 = (i & 0b0100) > 0
    const p4 = (i & 0b1000) > 0

    const content = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
  <circle cx="5" cy="5.5" r="3" ${p1 ? '' : 'fill="none"'} stroke="black"/>
  <circle cx="11" cy="4.5" r="3" ${p2 ? '' : 'fill="none"'} stroke="black"/>
  <circle cx="5" cy="11.5" r="3" ${p3 ? '' : 'fill="none"'} stroke="black"/>
  <circle cx="11" cy="10.5" r="3" ${p4 ? '' : 'fill="none"'} stroke="black"/>
</svg>
`.trim()

    const pressed = []
    if (p1) pressed.push('1')
    if (p2) pressed.push('2')
    if (p3) pressed.push('3')
    if (p4) pressed.push('4')
    const filename = `${pressed.join('')}.svg`

    const outPath = path.join(folderPath, filename)
    fs.writeFileSync(outPath, content)
    console.log(`generated ${outPath}`)
  }
}

generateIcons()