import { atom } from 'recoil'

export const directionState = atom({
  key: 'ani-direction',
  default: 'right',
})

export const pageIndexState = atom({
  key: 'page-index',
  default: -1,
})
