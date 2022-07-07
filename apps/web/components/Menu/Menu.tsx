import { useRecoilState } from 'recoil'

import MenuItem from './MenuItem'
import Clock from './Clock'
import { menu } from '../Desktop/core/menu'

import style from './Menu.module.css'

export default function Menu(): JSX.Element {
  const [main] = useRecoilState(menu);

  return (
    <header className={style.menu}>
      <section className={style.section}>
        {main.items.map((item: any) => <MenuItem key={item.id} {...item}></MenuItem>)}
      </section>

      <section style={{ flex: 'auto' }}></section>

      <section className={style.section}>
        <Clock></Clock>
      </section>
    </header>
  )
}
