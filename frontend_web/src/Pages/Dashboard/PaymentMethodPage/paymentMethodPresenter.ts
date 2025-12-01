import PaymentMethodModel from "../../../models/paymentMethod";
import type { DeleteResponse, PaymentMethod, PaymentMethodRequest, PaymentMethodResponse, PaymentMethodsResponse } from "../../../types";

interface Props {
    view: View
}
interface View {
    setPaymentMethods: Function,
    setLoading: Function,
    setPaymentMethodId: Function,
    setPaymentMethodIds: Function,
    setIsUpdate: Function,
}
const paymentMethodModel = new PaymentMethodModel();
export default class PaymentMethodPresenter {
    #view;

    constructor({ view } : Props) {
        this.#view = view;
    }

    async getPaymentMethods() {
        try {
            const res : PaymentMethodsResponse = await paymentMethodModel.getPaymentMethods();
            const paymentMethods = res.data.map((val: PaymentMethod) => {
                val.cheched = false;
                return { ...val };
            })
            this.#view.setPaymentMethods(paymentMethods);
        } catch (err) {
            console.error(err);
        }
    }
    async createPaymentMethod(request: PaymentMethodRequest) {
        this.#view.setLoading(true);
        try {
            const formData = new FormData();
            Object.entries(request).forEach(([key, value]) => {
                formData.append(key, value);
            })
            const res: PaymentMethodResponse = await paymentMethodModel.createPaymentMethod(formData);
            console.log(res);
            this.#view.setPaymentMethods((prev: PaymentMethod[]) => [res.data, ...prev]);
        } catch (err) {
            console.error(err);
        } finally {
            this.#view.setLoading(false);
        }
    }
    async updatePaymentMethod(request: PaymentMethodRequest, id: string) {
        this.#view.setLoading(true);
        try {
            const formData = new FormData();
            Object.entries(request).forEach(([key, value]) => {
                formData.append(key, value);
            })
            const res: PaymentMethodResponse = await paymentMethodModel.updatePaymentMethod(formData, id);
            console.log(res);
            this.#view.setPaymentMethods((prev: PaymentMethod[]) => prev.map((val: PaymentMethod) => {
                if (val.id === id) {
                    val = res.data;
                }
                return { ...val };
            }));
        } catch (err) {
            console.error(err);
        } finally {
            this.#view.setLoading(false);
        }
    }
    async deletePaymentMethod(id: string) {
        if (!confirm("Apakah Anda yakin ingin menghapusnya?")) return;
        try {
            const res: DeleteResponse = await paymentMethodModel.deletePaymentMethod(id);
            console.log(res);
            this.#view.setPaymentMethods((prev: PaymentMethod[]) => prev.filter(val => val.id !== id));
        } catch (err) {
            console.error(err)
        }
    }
    async deletePaymentMethods(ids: string[]) {
        if (!confirm("Apakah Anda yakin ingin menghapusnya?")) return;
        try {
            const res: DeleteResponse = await paymentMethodModel.deletePaymentMethods(ids);
            console.log(res);
            this.#view.setPaymentMethods((prev: PaymentMethod[]) => prev.map(val => {
                const findId = ids.find((id: string) => id === val.id);
                if (!findId) {
                    console.log(val);
                    return { ...prev };
                }
            }))
        } catch (err) {
            console.error(err);
        }
    }
}