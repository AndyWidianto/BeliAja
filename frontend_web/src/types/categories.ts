
export interface Category {
    id: string,
    name: string,
    description: string,
    checked?: boolean
}

export interface CategoriesResponse {
    data: Category[],
    message: string
}

export interface CategoryRequest {
    name: string, 
    description: string
}

export interface CategoryResponse {
    data: Category,
    message: string
}
