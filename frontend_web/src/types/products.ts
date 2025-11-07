import type { Category } from "./categories";


export interface ProductResponse {
    data: Product,
    message: string
}

export interface ProductsResponse {
    data: Product[],
    message: string
}

export interface ProductRequest {
    name: string,
    description: string,
    category_id: string
}

export interface Product {
    id: string,
    name: string,
    description: string,
    category: Category,
    checked?: boolean
}
