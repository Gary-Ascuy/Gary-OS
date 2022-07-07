import format from 'date-fns/format'

import style from './MenuItem.module.css'
import { useTimer } from '../Desktop/core/time'

const TimeFormat = 'iii dd LLL hh:mm aa'

export default function Clock(): JSX.Element {
  const [time] = useTimer()

  return (
    <span className={style.item}>{format(time, TimeFormat)}</span>
  )
}
