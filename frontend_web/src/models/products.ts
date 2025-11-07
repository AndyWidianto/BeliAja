import type { AxiosResponse } from "axios";
import { ApiPrivate, ApiPublic } from ".";
import type { DeleteResponse, ProductRequest, ProductResponse, ProductsResponse } from "../types";

export default class ProductsModel {

    async getProducts(): Promise<ProductsResponse> {
        const res : AxiosResponse = await ApiPublic.get<ProductsResponse>("/products");
        return res.data;
    }

    async createProduct(request : ProductRequest): Promise<ProductResponse> {
        const res : AxiosResponse = await ApiPrivate.post<ProductResponse>("/product", request);
        return res.data;
    }

    async updateProduct(request : ProductRequest, id : string): Promise<ProductResponse> {
        const res : AxiosResponse = await ApiPrivate.post<ProductResponse>(`/product/${id}`, request);
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