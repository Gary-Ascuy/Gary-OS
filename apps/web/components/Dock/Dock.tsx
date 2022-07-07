import { useRecoilState } from 'recoil'

import DockItem from './DockItem'
import { dock } from '../Desktop/core/dock'

import style from './Dock.module.css'

export default function Dock(): JSX.Element {
  const [main] = useRecoilState(dock);

  return (
    <section className={style.dock}>
      <section className={style.container}>
        {main.items.map((item) => <DockItem key={item.id} item={item} />)}
      </section>
    </section>
  )
}
