import WindowProps from '../Window/Window'
import { WindowOption } from '../Window/WindowOption'

export default function Finder({ title, box }: WindowOption) {
  return (
    <WindowProps title={title}>
      <div>this is a Finder</div>
    </WindowProps>
  )
}
