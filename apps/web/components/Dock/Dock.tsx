import DockItem from './DockItem'
import { DockOption } from './DockOption'

import style from './Dock.module.css'

export interface DockProps {
  items: DockOption[]
  addApp: (props: any) => void
}

export default function Dock({ items, addApp }: DockProps): JSX.Element {
  return (
    <section className={style.dock}>
      <section className={style.container}>
        {items.map((item) => <DockItem key={item.id} {...item} onClick={() => item.action(addApp)} />)}
      </section>
    </section>
  )
}
