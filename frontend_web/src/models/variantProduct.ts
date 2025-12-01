import type { AxiosResponse } from "axios";
import type { DeleteResponse, VariantProductResponse, VariantsProductResponse } from "../types";
import { ApiPrivate, ApiPublic } from ".";

export default class VariantProductModel {

    async createVariantProduct(formData: FormData): Promise<VariantProductResponse> {
        const res: AxiosResponse = await ApiPrivate.post<VariantProductResponse>("/variant-product", formData);
        return res.data;
    }
    async updateVariantProduct(formData: FormData, id: string): Promise<VariantProductResponse> {
        const res: AxiosResponse = await ApiPrivate.post<VariantProductResponse>(`/variant-product/${id}`, formData);
        return res.data;
    }
    async getVariantsProduct(limit: number, offset: number, search?: string): Promise<VariantsProductResponse> {
        const res: AxiosResponse = await ApiPublic.get<VariantsProductResponse>(`/variants-product?limit=${limit}&offset=${offset}&${search ? `search=${search}` : ''}`);
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