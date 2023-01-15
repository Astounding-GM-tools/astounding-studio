import { defineType, defineField } from "sanity"

export default defineType({
    name: 'act',
    title: 'Act',
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
            name: 'scenes',
            title: 'Scenes',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'scene'}]}]
        })
    ]
});