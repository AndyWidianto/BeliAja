import type { ChangeEvent } from "react";
import VariantProductModel from "../../../../models/variantProduct";
import type { DeleteResponse, VariantProduct, VariantProductRequest, VariantProductResponse, VariantsProductResponse } from "../../../../types";

interface Props {
    view: View
}
interface View {
    setLoading: Function,
    setVariantsProduct: Function,
    setVariantProductId: Function,
    setVariantProductIds: Function,
    setShow: Function,
    setIsUpdate: Function
}
const variantProductModel = new VariantProductModel();
export default class VariantProductPresenter {
    #view;

    constructor({ view }: Props) {
        this.#view = view;
    }
    async createVariantProduct(request: VariantProductRequest): Promise<void> {
        this.#view.setLoading(true);
        try {
            const res: VariantProductResponse = await variantProductModel.createVariantProduct(request);
            this.#view.setVariantsProduct(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            this.#view.setLoading(false);
        }
    }
    async updateVariantProduct(request: VariantProductRequest, id: string): Promise<void> {
        this.#view.setLoading(true);
        try {
            const res: VariantProductResponse = await variantProductModel.updateVariantProduct(request, id);
            console.log(res);
            this.#view.setVariantsProduct((prev: VariantProduct[]) => prev.map(val => {
                if (val.id === id) {
                    val = res.data;
                }
                return { ...prev };
            }));
        } catch (err) {
            console.error(err);
        } finally {
            this.#view.setLoading(false);
        }
    }
    async getVariantsProduct(): Promise<void> {
        try {
            const res: VariantsProductResponse = await variantProductModel.getVariantsProduct();
            console.log(res);
            this.#view.setVariantsProduct(res.data);
        } catch (err) {
            console.error(err);
        }
    }
    async deleteVariantProduct(id: string): Promise<void> {
        if (!confirm("Apakah anda yakin ingin menghapusnya?")) return;
        try {
            const res: DeleteResponse = await variantProductModel.deleteVariantProduct(id);
            console.log(res);
        } catch (err) {
            console.error(err);
        }
    }
    async deleteVariantsProduct(ids: string[]): Promise<void> {
        if (!confirm("Apakah anda yakin ingin menghapusnya?")) return;
        try {
            const res: DeleteResponse = await variantProductModel.deleteVariantsProduct(ids);
            console.log(res);
        } catch (err) {
            console.error(err);
        }
    }
    handleCreate() {
        this.#view.setVariantsProduct({
            product_id: "",
            name_variant: "",
            sku: "",
            price: 0,
            stock: 0
        });
        this.#view.setIsUpdate(false);
        this.#view.setShow(true);
    }
    handleClose() {
        this.#view.setShow(false);
    }
    handleUpdate(variantsProduct: VariantProduct[], ids: string[], id?: string) {
        if (!id) {
            id = ids[0];
        }
        const product = variantsProduct.find((val: VariantProduct) => val.id === id);
        if (!product) return alert("Click product dulu dong");
        this.#view.setVariantsProduct((prev: VariantProductRequest) => {
            prev.product_id = product.product.id;
            prev.name_variant = product.name_variant;
            prev.sku = product.sku;
            prev.price = product.price;
            prev.stock = product.stock;
            return prev;
        });
        this.#view.setVariantProductId(id);
        this.#view.setIsUpdate(false);
        this.#view.setShow(true);
    }
    handleChecked(e: ChangeEvent<HTMLInputElement>, id: string) {
        const checked = e.target.checked;
        if (checked) {
            this.#view.setVariantsProduct((prev: VariantProduct[]) => prev.map((val: VariantProduct) => {
                if (val.id === id) {
                    val.checked = true;
                }
                return { ...val };
            }))
            return this.#view.setVariantProductIds((prev: string[]) => [...prev, id]);
        }
        this.#view.setVariantProductIds((prev: string[]) => prev.filter((val: string) => val !== id));
        this.#view.setVariantsProduct((prev: VariantProduct[]) => prev.map((val: VariantProduct) => {
            if (val.id === id) {
                val.checked = false;
            }
            return { ...val };
        }))
    }
}