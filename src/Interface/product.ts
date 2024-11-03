export interface Product {
  id?: string; // UUID del producto
  name: string;
  description?: string;
  price: number;
  type:string;
  categoryId?: string; // UUID de la categoría a la que pertenece
  stock: number;
}

export interface Category {
  id?: string;
  name: string;
}

export interface Inventory {
  id?: string;
  productId?: string;
  quantity: number;
  type: "ENTRADA" | "SALIDA";
  date: Date;
}

export interface User {
  id?: string;
  name: string;
  email: string;
  rol: "ADMIN" | "EMPLEADO";
}

export interface AuditoryInventory {
  id?: string;
  productId?: string;
  userId?: string;
  change: string;
  date: Date;
}

export interface SeedData {
  products: Product[];
  category: Category[];
  inventory: Inventory[];
  user: User[];
}
