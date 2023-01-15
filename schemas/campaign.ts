import { defineType, defineField } from "sanity"

export default defineType({
    name: 'campaign',
    title: 'Campaign',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
        }),
        defineField({
            name: 'acts',
            title: 'Acts',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'act'}]}]
        })
    ]
});