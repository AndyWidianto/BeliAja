import type { Category } from "./categories";
import type { VariantProduct } from "./variantProducts";


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
    category_id: string,
    image: File | null
}

export interface Product {
    id: string,
    name: string,
    image: string,
    description: string,
    category: Category,
    rating?: number,
    reviews?: number,
    product_variants?: VariantProduct[],
    checked?: boolean
}

export interface PropsProductPresenter {
    view: View
}
interface View {
    setProducts: Function,
    setLoading: Function,
    setShow: Function,
    setProduct: Function,
    setIsUpdate: Function,
    setProductIds: Function,
    setProductId: Function,
    setCategories: Function,
    setImage: Function
}