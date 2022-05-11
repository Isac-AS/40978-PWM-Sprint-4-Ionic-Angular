/*
  #################### Database elements ####################
 */
  export interface Product {
    id: any
    name: string
    extendedName: string
    description: string
    price: number
    priceWithoutTax: number
    brand: string
    imageUrl: string
    category: 'headphones' | 'laptops' | 'furniture' | 'sports' | 'phones' | 'games' | 'clothing' | ''
    discount: number
  }
  
  export interface User {
    email: string
    password: string
    name: string
    surname: string
    bio: string
    id: string
    profile: 'admin' | 'regular'
    photoURL: string
    shoppingCart: Product[]
  }

    export interface Ticket {
    id: any
    name: string
    email: string
    subject: string
    messageText: string
  }
  
  export interface imgFile {
    name: string
    filepath: string
    size: number
  }
  
  
  /*
    #################### Auxiliary types ####################
   */
  export interface IdPair {
    id: string
    path: string
  }
  
  export interface HeaderDialogPair {
    login: boolean
    admin: boolean
  }
  
  export interface MessagePopupPair {
    message: string
    status: boolean
  }
    
  