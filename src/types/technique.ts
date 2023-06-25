export interface ITechnique {
  id: string,
  building_id: string | null,
  name: string,
  description: string,
  clip_description: string,
  video_id: string | null,
  type: 0 | 1 | 2 | 3 | 4
}

export interface IClasses {
  id: string,
  building_id: string | null,
  name: string,
  description: string,
  clip_description: string,
  video_id: string | null,
  type: 0 | 1 | 2 | 3 | 4
}
