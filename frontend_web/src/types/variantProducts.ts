import type { Product } from "./products";

export interface VariantProduct {
    id: string,
    product?: Product,
    variant_name: string,
    sku: string,
    price: number,
    stock: number,
    discount?: {
        id: string,
        type: string,
        value: number,
    },
    checked?: boolean
}

export interface VariantProductRequest {
    product_id: string,
    variant_name: string,
    price: number,
    stock: number,
    image: File | null
}

export interface VariantProductResponse {
    data: VariantProduct,
    message: string
}

export interface VariantsProductResponse {
    data: VariantProduct[],
    message: string
}

export interface PropsVariantProduct {
    view: View
}

interface View {
    setLoading: Function,
    setVariantsProduct: Function,
    setVariantProductId: Function,
    setVariantProductIds: Function,
    setShow: Function,
    setIsUpdate: Function,
    setPage: Function,
    setHasMore: Function,
    setVariantProduct: Function,
    setProducts: Function,
    setShowImage: Function
}