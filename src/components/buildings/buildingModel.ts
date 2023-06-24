export interface IVideo {
  id: string,
  title_image_path: string | null,
  filename: string,
  description: string,
  name: string,
  building_id: string,
  creation_datetime: number
}

export interface IClasses {
  id: string,
  building_id: string,
  name: string,
  description: string,
  clip_description: string,
  video_id: string | null,
  type: 0 | 1 | 2 | 3 | 4
}

export interface IBuilding {
  id: string,
  name: string,
  desc: string,
  creation_datetime: number,
  city: string,
  street: string,
  title_image_path: string | null,
  videos: IVideo[],
  techniques_classes: IClasses[]
}

export interface IResponseBuilding {
  status: string,
  data: IBuilding[]
}
