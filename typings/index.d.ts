declare class Laya {
  static name: string;
}

declare class Matrix {
  constructor(arg0: number | number[], arg1?: number | number[]);
  print: (str: string) => void;
  delete: Function;
}

// @ts-ignore
declare class eig {
  static ready: Promise<void>;
  static Matrix: typeof Matrix;
}