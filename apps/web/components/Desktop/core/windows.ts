import { useCallback } from 'react'
import { atom, useRecoilState } from 'recoil'
import { v4 as uuidv4 } from 'uuid'

export interface IProcess {
  pid: string
}

export interface IWindow extends IProcess {
  title: string
  app: string
}

export interface IMainWindowManager {
  apps: IWindow[]
}

export const windows = atom<IMainWindowManager>({
  key: 'garyos.core.windows',
  default: {
    apps: [
      { title: 'Terminal', app: 'Terminal', pid: uuidv4() },
      { title: 'Code', app: 'VSCode', pid: uuidv4() },
    ],
  },
})

export function useWindow() {
  const [, setValue] = useRecoilState(windows)

  const install = useCallback((window: IWindow) => {
    setValue((value) => ({ apps: [...value.apps, window] }))
  }, [setValue])

  return install
}
