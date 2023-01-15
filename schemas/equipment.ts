import { defineType, defineField } from "sanity"

export default defineType({
    name: 'equipment',
    title: 'Equipment',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name:'equipmentType',
            title: "Type",
            type: 'string',
            options: {
                list: [
                    {title: 'Weapon', value: 'weapon'},
                    {title: 'Armour', value: 'armour'},
                    {title: 'Fixture', value: 'fixture'},
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