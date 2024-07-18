import { tekkenExtension } from './extension/tekkenExtension'
import './main.css'

import { marked } from 'marked'

marked.use(tekkenExtension())

function setupMarkdownEditor(input: HTMLTextAreaElement, output: HTMLElement) {
  const handleNewText = (e: any) => {
    output.innerHTML = marked.parse(e.currentTarget.value) as string
  }

  input.addEventListener('change', handleNewText)
  input.addEventListener('input', handleNewText)
}

setupMarkdownEditor(
  document.getElementById('md-input-textarea') as HTMLTextAreaElement,
  document.getElementById('md-output') as HTMLElement
)