/* eslint-disable @next/next/no-img-element */

import { DockOption } from './DockOption'
import style from './DockItem.module.css'

export interface DockItemProps extends DockOption {
  onClick: () => void
}

export default function DockItem({ id, name, icon, onClick }: DockItemProps): JSX.Element {
  return (
    <button className={style.item} title={name} onClick={onClick}>
      <span>
        <p className={style.tooltip}>{name}</p>
        <img className={style.icon} src={icon} alt={name}></img>
      </span>
    </button>
  )
}
