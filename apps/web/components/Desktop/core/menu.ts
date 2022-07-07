import { atom } from 'recoil'

export interface IMainMenu {
  items: IMenuItem[]
}

export type IMenuAction = () => void

export interface IMenuItem {
  id: string
  name: string
  icon?: string
  action?: IMenuAction

  items?: IMenuItem[]
}

export const menu = atom<IMainMenu>({
  key: 'garyos.core.menu',
  default: {
    items: [
      { id: 'home', name: 'gOS', items: [] },
      { id: 'file', name: 'File', items: [] },
      { id: 'edit', name: 'Edit', items: [] },
      { id: 'go', name: 'Go', items: [] },
      { id: 'run', name: 'Run', items: [] },
      { id: 'window', name: 'Window', items: [] },
      { id: 'Help', name: 'Help', items: [] },
    ]
  },
})
