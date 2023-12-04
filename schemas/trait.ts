
import { defineType, defineField } from "sanity";

export default defineType({
    name: 'trait',
    title: 'Trait',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Example: "STATUS" or "BEAUTY". Uppercase only!',
            validation: Rule => Rule.required().uppercase(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Example: "The apparent gender of the character; note that appearance is superficial and may be misleading".',
        }),
        defineField({
            name: 'NONE',
            title: 'No value',
            type: 'object',
            description: 'The value of the trait when it is not present.',
            fields: [
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                },
                {
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                },
            ]
        })
    ]
});