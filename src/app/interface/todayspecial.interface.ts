export interface Ispecial {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

export interface Ispecialmenu {
  message: string;
  data: Ispecial[];
}
