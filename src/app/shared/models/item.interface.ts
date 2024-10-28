export interface Item {
  nome: string;
  unidadeDeMedida: unidadeDeMedida;
  quantidade: number;
  preço: number;
  perecível: boolean;
  dataDeValidade: Date;
  dataDeFabricação: Date;
}

export enum unidadeDeMedida {
    'kg',
    'lt',
    'un'
}
