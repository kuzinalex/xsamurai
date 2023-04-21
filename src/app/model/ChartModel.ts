import { ChartDataModel } from "./ChartDataModel";

export interface ChartModel{
    collection: string,
    chart_type: string,
    data: ChartDataModel 
}