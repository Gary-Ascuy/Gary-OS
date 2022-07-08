import WindowProps from '../Window/Window'
import { WindowOption } from '../Window/WindowOption'

export default function VSCode({ title, box }: WindowOption) {
  const titleCode = 'VS Code for macOS Web'
  const url = 'https://github.dev/Gary-Ascuy/Gary-OS'

  return (
    <WindowProps title={title}>
      {/* <iframe style={{ width: '100%', height: '100%', border: 'none' }} src={url}></iframe> */}
      <iframe style={{ flex: 'auto', border: 'none' }} src="https://stackblitz.com/edit/nextjs-qwobma?embed=1&file=README.md&theme=dark&view=editor"></iframe>
    </WindowProps>
  )
}
