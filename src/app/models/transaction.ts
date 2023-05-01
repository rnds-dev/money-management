export interface ITransaction {
  id?: number,
  type: string,
  category: string,
  account: string,
  to_account?: string,
  sum: number,
  fees?: number,
  date?: Date,
  description?: string
}

export interface ITransactionCategory { 
  id: number,
  name: string,
  type: string
  budget?: number,
}

export interface ITransactionType { 
  name: string 
}

export interface ICategoryStats { [category: string]: number }
export interface ITypeStats { [type: string]: number }


// enum ETransactionType {
//   Expense,
//   Income,
//   Transfer
// }