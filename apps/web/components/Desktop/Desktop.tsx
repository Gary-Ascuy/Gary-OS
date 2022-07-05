import Dock from '../Dock/Dock'
import { DockOption } from '../Dock/DockOption'
import Menu from '../Menu/Menu'
import { MenuOption } from '../Menu/MenuOption'
import Terminal from './Terminal/Terminal'

const menus: MenuOption[] = [
  { id: 'home', name: 'gOS', items: [] },
  { id: 'file', name: 'File', items: [] },
  { id: 'edit', name: 'Edit', items: [] },
  { id: 'go', name: 'Go', items: [] },
  { id: 'run', name: 'Run', items: [] },
  { id: 'window', name: 'Window', items: [] },
  { id: 'Help', name: 'Help', items: [] },
]

const docks: DockOption[] = [
  { id: 'finder', name: 'Finder', icon: '/assets/os/app-icons/finder/256.webp', action: async () => console.log('Finder') },
  { id: 'launchpad', name: 'Launchpad', icon: '/assets/os/app-icons/launchpad/256.png', action: async () => console.log('Launchpad') },
  { id: 'terminal', name: 'Terminal', icon: '/assets/os/app-icons/terminal/256.png', action: async () => console.log('Terminal') },
]

interface IWindowProps {
  title: string;
}

const windows: IWindowProps[] = [
  { title: 'Gary Ascuy' },
  { title: 'Terminal' },
  { title: 'Finder' },
  { title: 'Gary Os' },
]

export default function Desktop() {
  return (
    <>
      <Menu items={menus}></Menu>
      {windows.map(({ title }: IWindowProps) => <Terminal title={title} />)}
      <Dock items={docks}></Dock>
    </>
  )
}
