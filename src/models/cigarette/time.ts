import { TimeState } from '~/models'

export class TimeModel implements TimeState {
  year: number
  month: number
  day: number
  hour: number
  minute: number
  second: number

  constructor() {
    const d: Date = new Date()
    this.year = d.getFullYear()
    this.month = d.getMonth() + 1
    this.day = d.getDate()
    this.hour = d.getHours()
    this.minute = d.getMinutes()
    this.second = d.getSeconds()
  }

  setISOFormat(d: Date): void {
    this.year = d.getFullYear()
    this.month = d.getMonth() + 1
    this.day = d.getDate()
    this.hour = d.getHours()
    this.minute = d.getMinutes()
    this.second = d.getSeconds()
  }

  getISOFormat(): string {
    let d: Date = new Date()
    d.setFullYear(this.year)
    d.setMonth(this.month - 1)
    d.setDate(this.day)
    d.setHours(this.hour)
    d.setMinutes(this.minute)
    d.setSeconds(this.second)
    return d.toISOString()
  }
}
