import Dock from '../Dock/Dock'
import { Applications } from './Applications'
import Menu from '../Menu/Menu'

export default function Desktop() {
  return (
    <>
      <Menu />
      <Applications />
      <Dock />
    </>
  )
}
