export interface CigaretteState {
  price: number
  count: number
  smoke: number
  duration: string
  created_at: string
  modified_at: string
}

export interface TimeState {
  year: number
  month: number
  day: number
  hour: number
  minute: number
  second: number
  setISOFormat(d: Date): void
  getISOFormat(): string
}
