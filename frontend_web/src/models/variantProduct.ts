import type { AxiosResponse } from "axios";
import type { DeleteResponse, VariantProductRequest, VariantProductResponse, VariantsProductResponse } from "../types";
import { ApiPrivate, ApiPublic } from ".";

export default class VariantProductModel {

    async createVariantProduct(request: VariantProductRequest): Promise<VariantProductResponse> {
        const res: AxiosResponse = await ApiPrivate.post<VariantProductResponse>("/variant-product", request);
        return res.data;
    }
    async updateVariantProduct(request: VariantProductRequest, id: string): Promise<VariantProductResponse> {
        const res: AxiosResponse = await ApiPrivate.post<VariantProductResponse>(`/variant-product/${id}`, request);
        return res.data;
    }
    async getVariantsProduct(): Promise<VariantsProductResponse> {
        const res: AxiosResponse = await ApiPublic.get<VariantsProductResponse>("/variants-product");
        return res.data;
    }
    async deleteVariantProduct(id: string): Promise<DeleteResponse> {
        const res: AxiosResponse = await ApiPrivate.delete<DeleteResponse>(`/variant-product/${id}`);
        return res.data;
    }
    async deleteVariantsProduct(ids: string[]): Promise<DeleteResponse> {
        const res: AxiosResponse = await ApiPrivate.post<DeleteResponse>("delete/variants-product", { ids });
        return res.data;
    }
}