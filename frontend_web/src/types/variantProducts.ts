import type { Product } from "./products";

export interface VariantProduct {
    id: string,
    product: Product,
    name_variant: string,
    sku: string,
    price: number,
    stock: number,
    checked?: boolean
}

export interface VariantProductRequest {
    product_id: string,
    name_variant: string,
    sku: string,
    price: number,
    stock: number
}

export interface VariantProductResponse {
    data: VariantProduct,
    message: string
}

export interface VariantsProductResponse {
    data: VariantProduct[],
    message: string
}