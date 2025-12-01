import { ApiPrivate } from ".";
import type { CategoriesResponse, CategoryResponse } from "../types";

export default class CategoriesModel {
    
    async getCategories(): Promise<CategoriesResponse> {
        const res = await ApiPrivate.get<CategoriesResponse>("/categories");
        return res.data;
    }

    async createCategory(data: FormData): Promise<CategoryResponse> {
        const res = await ApiPrivate.post<CategoryResponse>("/category", data);
        return res.data;
    }

    async updateCategory(data: FormData, id : string): Promise<CategoryResponse> {
        const res = await ApiPrivate.post<CategoryResponse>(`/category/${id}`, data);
        return res.data;
    }
}