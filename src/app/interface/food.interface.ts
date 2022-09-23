export interface Imenu {
  id: number;
  name: string;
  icon: string;
}

export interface IFoodMenu {
  message: string;
  data: Imenu[];
}
