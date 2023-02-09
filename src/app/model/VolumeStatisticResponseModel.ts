import {VolumeStatisticModel} from "./VolumeStatisticModel";

export interface VolumeStatisticResponseModel {
  count:number;
  next:string;
  previous:string;
  results:VolumeStatisticModel[]
}
