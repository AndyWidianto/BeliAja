import type { Product } from "./products";

export interface VariantProduct {
    id: number,
    product: Product,
    name_variant: string,
    sku: string,
    price: number,
    stock: number
}

export interface VariantProductRequest {
    product_id: number,
    name_variant: string,
    sku: string,
    price: number,
    stock: number
}

export interface VariantProductResponse {
    data: VariantProduct[],
    message: string
}