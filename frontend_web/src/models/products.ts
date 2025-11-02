import type { AxiosResponse } from "axios";
import { ApiPrivate, ApiPublic } from ".";
import type { ProductRequest, ProductResponse, ProductsResponse } from "../types";

export default class ProductsModel {

    async getProducts(): Promise<ProductsResponse> {
        const res : AxiosResponse = await ApiPublic.get<ProductsResponse>("/products");
        return res.data;
    }

    async createProduct(request : ProductRequest): Promise<ProductResponse> {
        const res : AxiosResponse = await ApiPrivate.post("/product", request);
        return res.data;
    }

    async updateProduct(request : ProductRequest, id : string): Promise<ProductResponse> {
        const res : AxiosResponse = await ApiPrivate.post(`/product/${id}`, request);
        return res.data;
    }

    async deleteProduct(deleteIds : string[]): Promise<ProductResponse> {
        const res : AxiosResponse = await ApiPrivate.post("/product/delete", deleteIds);
        return res.data;
    }
}