/* eslint-disable @next/next/no-img-element */

import { IDockItem } from '../Desktop/core/dock'

import style from './DockItem.module.css'

export interface IDockItemProps {
  item: IDockItem
}

export default function DockItem({ item }: IDockItemProps): JSX.Element {
  const { id, name, icon, action } = item

  return (
    <button className={style.item} title={name} onClick={action}>
      <span>
        <p className={style.tooltip}>{name}</p>
        <img className={style.icon} src={icon} alt={name}></img>
      </span>
    </button>
  )
}
