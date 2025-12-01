import type { AxiosResponse } from "axios";
import { ApiPrivate, ApiPublic } from ".";
import type { DeleteResponse, ProductRequest, ProductResponse, ProductsResponse } from "../types";

export default class ProductsModel {

    async getProducts(): Promise<ProductsResponse> {
        const res : AxiosResponse = await ApiPublic.get<ProductsResponse>("/products");
        return res.data;
    }

    async createProduct(data: FormData): Promise<ProductResponse> {
        const res : AxiosResponse = await ApiPrivate.post<ProductResponse>("/product", data);
        return res.data;
    }

    async updateProduct(data: FormData, id : string): Promise<ProductResponse> {
        const res : AxiosResponse = await ApiPrivate.post<ProductResponse>(`/product/${id}`, data);
        return res.data;
    }

    async deleteProduct(id: string): Promise<DeleteResponse> {
        const res : AxiosResponse = await ApiPrivate.delete<DeleteResponse>(`/product/${id}`);
        return res.data;
    }
    async deleteProducts(ids: string[]): Promise<DeleteResponse> {
        const res: AxiosResponse = await ApiPrivate.post<DeleteResponse>("/products/delete", ids);
        return res.data;
    }
}