export interface IUser {
  id: string
  provider: string
  uid: string
  allow_password_change: boolean
  name: string | null
  email: string
  role: 'admin' | 'customer'
}