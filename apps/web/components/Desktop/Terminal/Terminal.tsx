import WindowProps from '../Window/Window'
import { WindowOption } from '../Window/WindowOption'

export default function Terminal({ title, box }: WindowOption) {
  return (
    <WindowProps title={title}>
      <div>this is a terminal</div>
    </WindowProps>
  )
}
