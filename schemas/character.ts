import { defineType, defineField } from "sanity"

export default defineType({
    name: 'character',
    title: 'Characters',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
        }),
        defineField({
            name: 'description',
            title: 'Description, background and motivation',
            type: 'text',
        }),
        defineField({
            name: 'image',
            title: 'Image URL',
            type: 'string',
        }),
        defineField({
            name: 'stats',
            title: 'Stats',
            type: 'string'
        }),
        defineField({
            name: 'mannerisms',
            title: 'Mannerisms',
            type: 'array',
            of: [{ type: 'string' }]
        }),
        defineField({
            name: 'traits',
            title: 'Traits',
            type: 'array',
            of: [{ type: 'string' }]
        }),
        defineField({
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [{ type: 'string' }]
        }),
    ]
});