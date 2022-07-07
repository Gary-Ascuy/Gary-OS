import { useCallback, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Dock from '../Dock/Dock'
import { DockOption } from '../Dock/DockOption'

import Menu from '../Menu/Menu'
import { MenuOption } from '../Menu/MenuOption'

import Finder from './Finder/Finder'
import Terminal from './Terminal/Terminal'

interface IWindowProps {
  title: string;
  app: string;

  pid: string;
}

const windows: IWindowProps[] = [
  { title: 'Terminal', app: 'Terminal', pid: uuidv4() },
]

const Apps: { [key: string]: (args: any) => JSX.Element } = {
  'Terminal': Terminal,
  'Finder': Finder,
}

export default function Desktop() {
  const [apps, setApps] = useState<IWindowProps[]>(windows)

  const load = ({ app, title, pid }: IWindowProps) => {
    const App = Apps[app];
    return <App key={pid} title={title} />
  }

  return (
    <>
      <Menu></Menu>
      {apps.map((props: IWindowProps) => load(props))}
      <Dock></Dock>
    </>
  )
}
