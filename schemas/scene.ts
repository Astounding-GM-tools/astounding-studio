import { defineType, defineField } from "sanity"

export default defineType({
    name: 'scene',
    title: 'Scene',
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
            name: 'sceneLocation',
            title: 'Scene location',
            description: "The scene must take place in a location, even if it's just 'The Street' or 'A Tavern'. You can keep locations generic by not adding a location.",
            type: 'reference',
            to: [{ type: 'location' }]
        }),
        defineField({
            name: 'sceneCharacters',
            title: 'Scene Characters',
            description: "The scene must have some characters! Normally, these are the Non-Player Characters (NPCs) or enemies (monsters) that the players can interact with in the scene.",
            type: 'reference',
            to: [{type: 'character'}]
        })
    ]
});