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
  email: string,
  password: string,
  name: string,
  surname: string,
  bio: string,
  id: string,
  profile: 'admin' | 'regular',
  photoURL: string,
  wishlist: string[],
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

/*
  ################## SQLite ##################
*/

export const createSchema: string = `
  CREATE TABLE IF NOT EXISTS wishlist (
    id TEXT PRIMARY KEY NOT NULL,
  );
  `;

/*export const createSchema: string = `
  CREATE TABLE IF NOT EXISTS wishlist (
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT,
    extendedName TEXT,
    description TEXT,
    price REAL,
    priceWithoutTax REAL,
    brand TEXT,
    imageUrl TEXT,
    category TEXT,
    discount REAL
  );
  `;*/
