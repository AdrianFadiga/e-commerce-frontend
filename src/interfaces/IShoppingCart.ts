import { IProduct } from './IProduct';

export interface IShoppingCart {
  id: string
  quantity: number
  shopping_cart_id: string
  product_id: string
  product: IProduct
}