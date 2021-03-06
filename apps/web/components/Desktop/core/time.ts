import { useEffect } from 'react'
import { atom, useRecoilState } from 'recoil'

export const TimeInterval = 25 * 1000

export const time = atom<Date>({
  key: 'garyos.core.time',
  default: new Date(),
})

export function useTimer(): [Date, Function] {
  const [value, setValue] = useRecoilState(time)

  useEffect(() => {
    const timer = setInterval(() => {
      setValue(new Date())
    }, TimeInterval)
    return () => clearInterval(timer)
  }, [setValue])

  return [value, setValue]
}
