import type { AxiosResponse } from "axios";
import { ApiPrivate, ApiPublic } from ".";
import type { DeleteResponse, PaymentMethodResponse, PaymentMethodsResponse } from "../types";

export default class PaymentMethodModel {

    async getPaymentMethods(): Promise<PaymentMethodsResponse> {
        const res: AxiosResponse = await ApiPublic.get<PaymentMethodsResponse>("/payment-methods");
        return res.data;
    } 
    async updatePaymentMethod(request: FormData, id: string): Promise<PaymentMethodResponse> {
        const res: AxiosResponse = await ApiPrivate.post<PaymentMethodResponse>(`/payment-method/${id}`, request);
        return res.data;
    }
    async createPaymentMethod(request: FormData): Promise<PaymentMethodResponse> {
        const res: AxiosResponse = await ApiPrivate.post<PaymentMethodResponse>("/payment-method", request);
        return res.data;
    }
    async deletePaymentMethod(id: string): Promise<DeleteResponse> {
        const res: AxiosResponse = await ApiPrivate.delete<DeleteResponse>(`/payment-method/${id}`);
        return res.data;
    }
    async deletePaymentMethods(ids: string[]): Promise<DeleteResponse> {
        const res: AxiosResponse = await ApiPrivate.post<DeleteResponse>("/delete/payment-methods", { ids });
        return res.data;
    }
}