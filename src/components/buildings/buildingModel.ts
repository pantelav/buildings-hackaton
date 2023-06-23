export interface IBuilding {
  id: string,
  name: string,
  desc: string,
  creation_datetime: number,
  city: string,
  street: string,
  title_image_path: string | null
}

export interface IResponseBuilding {
  status: string,
  data: IBuilding[]
}
