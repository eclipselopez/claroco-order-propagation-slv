import mongoose, {Schema} from 'mongoose'

const orderSchema: Schema = new Schema ({
    merchant: { type: String },
    external_referer: { type: String },
    buyer_id: { type: String },
    status: { type: String },
    _meta: {
        class: { type: String },
        version: { type: Number }
    },
    orgUniqueId: { type: String },
    orgKunnr: { type: String },
    creation_date: { type: String },
    last_update: { type: String },
    partialOrder: { type: String },
    orgDistinguishedName: { type: String },
    organization: { type: String },
    amount: { type: String },
    billing_info: {
        nickname: { type: String },
        external_reference: { type: String },
        first_name: { type: String },
        last_name: { type: String },
        city: { type: String },
        state_or_province_name: { type: String },
        country: { type: String },
        postal_code: { type: Number },
        email_1: { type: String },
        email_2: { type: String },
        phone_1: { type: Number },
        phone_2: { type: Number },
        fax_1: { type: Number },
        fax_2: { type: Number },
        address_line_1: { type: String },
        address_line_2: { type: String },
        address_line_3: { type: String }
    },
    items: { type: String },
    orderExtendAttribute: { type: String },
    buyerDistinguishedName: { type: String }
}, { collection: 'Orders' })

export default mongoose.model('Orders', orderSchema)