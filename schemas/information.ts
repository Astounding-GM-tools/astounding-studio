import { defineType, defineField } from "sanity"

export default defineType({
    name: 'information',
    title: 'Information',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name:'contentType',
            title: "Type",
            type: 'string',
            options: {
                list: [
                    {title: 'Book', value: 'book'},
                    {title: 'Knowledge', value: 'knowledge'},
                    {title: 'Secret', value: 'secret'},
                ]
            }
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
        })
    ]
});