export interface TAparments {
  id: number;
  price: number;
  name: string;
  img: string[];
  isFavourite: boolean;
  address: string;
  rooms: number;
  bathroom: number;
  area: number;
  unit: string;
  balconi?: number;
  propertySumary: TPropertySummary[];
  fetures: string[];
  floorDetails: TFloorDetails[];
}

export interface TPropertySummary {
  lavel: string;
  value: string;
}
export interface TFloorDetails {
  numberOfRoom: number;
  label: string;
}
