import { useMemo } from 'react'
import Draggable from 'react-draggable'

import WindowHeader from './WindowHeader'
import { WindowOption, Box } from './WindowOption'

import style from './Window.module.css'
import { Resizable } from 're-resizable'

export interface WindowProps extends WindowOption {
  children?: JSX.Element | JSX.Element[]
}

export function getDefafaultBox(): Box {
  const random = Math.ceil(Math.random() * 100)
  return { x: 100 + random, y: 100 + random, width: 750, height: 400 }
}

export default function WindowProps({ title, box, children }: WindowProps): JSX.Element {
  const { x, y, width, height } = useMemo(() => box || getDefafaultBox(), [box])

  return (
    <Draggable handle="section.title-dragable" defaultPosition={{ x, y }}>
      <Resizable defaultSize={{ width, height }} >
        <section style={{ left: 0, top: 0, width: '100%', height: '100%' }} className={style.window}>
          <WindowHeader title={title} />

          <section className={style.body}>
            {children}
          </section>
        </section>
      </Resizable>
    </Draggable>
  )
}
