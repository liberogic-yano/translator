import { CigaretteState } from '~/models/state'

export class CigaretteModel implements CigaretteState {
  price: number
  count: number
  smoke: number
  duration: string
  created_at: string
  modified_at: string

  constructor() {
    this.price = 0
    this.count = 0
    this.smoke = 0
    this.duration = ''
    this.created_at = ''
    this.modified_at = this.created_at
  }
}

export const cigarettemodel: CigaretteModel = new CigaretteModel()
