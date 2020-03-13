const latex = require('node-latex')
const fs = require('fs')
 
const input = fs.readFileSync('input.tex', 'utf-8');
const output = fs.createWriteStream('output.pdf')
const pdf = latex(input, { passes: 2 })
 
pdf.pipe(output)
pdf.on('error', err => console.error(err))
pdf.on('finish', () => console.log('PDF generated!'))
