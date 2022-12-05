// class Interface {
    
// }

export interface IBox {
  id: string;
  width: number;
  height: number;
  backgroundColor: string;
}

export interface IBoxProps extends IBox {
    remove: Function
}

export interface IFormData {
    height: string,
    width: string,
    backgroundColor: string,
}

