
export interface PaymentMethod {
    id: number,
    name: string, 
    type: string,
    provider: string,
    description: string,
    logo_url: string,
    is_active: boolean
}

export interface PaymentMethodRequest {
    name: string, 
    type: string,
    provider: string,
    description: string,
    logo_url: string,
    is_active: boolean
}

export interface PaymentMethodResponse {
    data: PaymentMethod[],
    message: string
}

