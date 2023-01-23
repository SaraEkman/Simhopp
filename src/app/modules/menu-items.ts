import { Injectable } from '@angular/core'
import { GlobalConstants } from '../shared/global-constants'

export interface Menu {
  state: string
  name: string
  icon: string
  role: number
}
const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', icon: 'dashboard', role: GlobalConstants.admin },
]

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS
  }
}
