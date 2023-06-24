export interface IBuilding {
  id: string,
  name: string,
  desc: string,
  creation_datetime: number,
  city: string,
  street: string,
  title_image_path: string | null,
  videos: {
    id: string,
    title_image_path: string | null,
    filename: string,
    description: string,
    name: string,
    building_id: string,
    creation_datetime: number
  }[]
}

export interface IResponseBuilding {
  status: string,
  data: IBuilding[]
}
