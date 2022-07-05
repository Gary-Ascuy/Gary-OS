import { useCallback, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Dock from '../Dock/Dock'
import { DockOption } from '../Dock/DockOption'

import Menu from '../Menu/Menu'
import { MenuOption } from '../Menu/MenuOption'

import Finder from './Finder/Finder'
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
  {
    id: 'finder',
    name: 'Finder',
    icon: '/assets/os/app-icons/finder/256.webp',
    action: async (open: (props: any) => void) => {
      open({ title: 'Finder', app: 'Finder', pid: uuidv4() })
    }
  }, {
    id: 'terminal',
    name: 'Terminal',
    icon: '/assets/os/app-icons/terminal/256.png',
    action: async (open: (props: any) => void) => {
      open({ title: 'Terminal', app: 'Terminal', pid: uuidv4() })
    }
  },
  { id: 'launchpad', name: 'Launchpad', icon: '/assets/os/app-icons/launchpad/256.png', action: async () => console.log('Launchpad') },
]

interface IWindowProps {
  title: string;
  app: string;

  pid: string;
}

const windows: IWindowProps[] = [
  { title: 'Terminal', app: 'Terminal', pid: uuidv4() },
  // { title: 'Finder', app: 'Terminal' },
  // { title: 'Gary Os', app: 'Terminal' },
]

const Apps: { [key: string]: (args: any) => JSX.Element } = {
  'Terminal': Terminal,
  'Finder': Finder,
}

const state = {
  process: 0
}

export default function Desktop() {
  const [apps, setApps] = useState<IWindowProps[]>(windows)
  const addApp = useCallback((app: any) => {
    setApps([...apps, app])
  }, [apps])

  const load = ({ app, title, pid }: IWindowProps) => {
    const App = Apps[app];
    return <App key={pid} title={title} />
  }

  return (
    <>
      <Menu items={menus}></Menu>
      {apps.map((props: IWindowProps) => load(props))}
      <Dock items={docks} addApp={addApp}></Dock>
    </>
  )
}
