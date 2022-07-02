export default {
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'img',
            title: 'Img',
            type: 'array',
            of: [{type: 'image'}]
        },
        {
            name: 'mrp',
            title: 'Mrp',
            type: 'number'
        },
        {
            name: 'discount',
            title: 'Discount',
            type: 'number'
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'number'
        },
        {
            name: 'prime',
            title: 'Prime',
            type: 'boolean'
        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'array',
            of: [{type: 'string'}]
        }
    ]
}