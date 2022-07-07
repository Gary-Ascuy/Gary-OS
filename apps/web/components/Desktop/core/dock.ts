import { atom } from 'recoil'

export interface IMainDock {
  items: IDockItem[]
}

export type IDockAction = () => void

export interface IDockItem {
  id: string
  name: string
  icon: string
  action: IDockAction

  items?: IDockItem[]
}

export const dock = atom<IMainDock>({
  key: 'garyos.core.dock',
  default: {
    items: [{
      id: 'finder',
      name: 'Finder',
      icon: '/assets/os/app-icons/finder/256.webp',
      action: () => alert('Finder'),
    }, {
      id: 'terminal',
      name: 'Terminal',
      icon: '/assets/os/app-icons/terminal/256.png',
      action: () => alert('Terminal'),
    }, {
      id: 'launchpad',
      name: 'Launchpad',
      icon: '/assets/os/app-icons/launchpad/256.png',
      action: () => alert('Launchpad'),
    }],
  },
})
