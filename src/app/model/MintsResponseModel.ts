import {MintModel} from "./MintModel";

export interface MintsResponseModel{
  count:number;
  next:string;
  previous:string;
  results:MintModel[];
}
