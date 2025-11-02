import { ApiPrivate } from ".";
import type { CategoryRequest, CategoriesResponse, CategoryResponse } from "../types";

export default class CategoriesModel {
    
    async getCategories(): Promise<CategoriesResponse> {
        const res = await ApiPrivate.get<CategoriesResponse>("/categories");
        return res.data;
    }

    async createCategory(request : CategoryRequest): Promise<CategoryResponse> {
        const res = await ApiPrivate.post<CategoryResponse>("/category", request);
        return res.data;
    }

    async updateCategory(request : CategoryRequest, id : string): Promise<CategoryResponse> {
        const res = await ApiPrivate.post<CategoryResponse>(`/category/${id}`, request);
        return res.data;
    }
}