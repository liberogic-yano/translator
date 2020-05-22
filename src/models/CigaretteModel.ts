export interface CigaretteState {
  price: number
  count: number
  smoke: number
}

export class CigaretteModel implements CigaretteState {
  price: number
  count: number
  smoke: number

  constructor() {
    this.price = 0
    this.count = 0
    this.smoke = 0
  }
}

export const cigarettemodel: CigaretteModel = new CigaretteModel()
