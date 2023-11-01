export default interface IOrder {
    merchant?: string,
    external_referer?: string,
    buyer_id?: string,
    status?: string,
    _meta?: I_meta,
    orgUniqueId?: string, //checar tipo
    orgKunnr?: string, //checar tipo
    creation_date?: Date,
    last_update?: Date,
    partialOrder?: string, //checar tipo
    orgDistinguishedName?: string,
    organization?: string,
    amount?: number,
    billing_info?: IBilling_info,
    items?: string, //checar tipo
    orderExtendAttribute?: string, //checar tipo
    buyerDistinguishedName?: string
}

export interface I_meta {
    class?: string,
    version?: number
}

export interface IBilling_info {
    nickname?: string,
    external_reference?: string,
    first_name?: string,
    last_name?: string,
    city?: string,
    state_or_province_name?: string,
    country?: string,
    postal_code?: number,
    email_1?: string,
    email_2?: string,
    phone_1?: number,
    phone_2?: number,
    fax_1?: number,
    fax_2?: number,
    address_line_1?: string, //checar tipos
    address_line_2?: string, //checar tipos
    address_line_3?: string //checar tipos
}