import { useRecoilValue } from 'recoil'

import Finder from './Finder/Finder'
import Terminal from './Terminal/Terminal'
import VSCode from './VSCode/VSCode'

import { IWindow, windows } from './core/windows'

export type IApplicationComponent = (args: any) => JSX.Element

export const Apps: { [key: string]: IApplicationComponent } = {
  'Terminal': Terminal,
  'Finder': Finder,
  'VSCode': VSCode,
}

export function Applications() {
  const { apps } = useRecoilValue(windows)

  const load = ({ app, title, pid }: IWindow) => {
    const App = Apps[app];
    return <App key={pid} title={title} />
  }

  return (
    <>
      {apps.map((app) => load(app))}
    </>
  )
}
