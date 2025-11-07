
export interface PaymentMethod {
    id: string,
    name: string, 
    type: string,
    provider: string,
    description: string,
    logo_url: string,
    is_active: boolean,
    cheched?: boolean
}

export interface PaymentMethodRequest {
    name: string, 
    type: string,
    provider: string,
    description: string,
    logo_url: File | null,
    is_active: string
}

export interface PaymentMethodsResponse {
    data: PaymentMethod[],
    message: string
}

export interface PaymentMethodResponse {
    data: PaymentMethod,
    message: string
}

export interface Status {
    id: number,
    name: string,
    active: string
}

