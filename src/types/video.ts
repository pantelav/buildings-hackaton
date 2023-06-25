import { IClasses } from './../components/buildings/buildingModel';
import { ITechnique } from './technique';
export interface IVideo {
  id: string,
  title_image_path: string | null,
  filename: string,
  description: string,
  name: string,
  building_id: string,
  creation_datetime: number,
  is_ready: 0 | 1
}

export interface IVideoExact extends IVideo {
  techniques: ITechnique[],
  techniques_classes: IClasses[]
}
