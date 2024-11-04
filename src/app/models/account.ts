export interface IAccount {
  id?: number,
  type: string,
  name: string,
  sum: number,
  description?: string,
} 

export interface IAccountType {
  id?: number,
  name: string
}