interface CustomFields {
    text: {
        value: string;
    }
}
export interface Donation {
    custom_fields?: CustomFields[];
    amount_total: number;
    customer_details: {
        email: String;
    }
}