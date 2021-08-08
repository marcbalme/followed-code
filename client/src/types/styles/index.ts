export interface DeviceSizeTypes {
  [deviceOption: string]: number;
  mobile: number;
  tablet: number;
  desktop: number;
}
export interface TextSizetypes {
  [sizeOption: string]: DeviceSizeTypes;
}
