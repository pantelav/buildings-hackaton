export type EventType = 'start' | 'end' | 'pending'

export interface IEvent {
  type: EventType,
  id: number,
  message: string,
  time: string
}
