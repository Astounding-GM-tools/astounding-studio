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
            name: 'occupation',
            title: 'Occupation',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description, background and motivation',
            type: 'text',
        }),
        defineField({
            name: 'portrait',
            title: 'Portrait',
            type: 'image',
            options: {
                hotspot: true,
            },
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