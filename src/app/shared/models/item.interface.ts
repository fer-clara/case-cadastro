export interface Item {
  id: string;
  nome: string;
  unidadeDeMedida: unidadeDeMedida;
  quantidade: number;
  preco: number;
  perecivel: boolean;
  dataDeValidade?: Date;
  dataDeFabricacao?: Date;
}

export enum unidadeDeMedida {
  'kg',
  'lt',
  'un'
}
