import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'animal',
  title: 'Animal',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200
      }
    }),
    defineField({
      name: 'breed',
      title: 'Breed',
      type: 'string'
    }),
    defineField({
      name: 'age',
      title: 'Age',
      type: 'string'
    }),
    defineField({
      name: 'gender',
      title: 'Gender',
      type: 'string',
      options: {
        list: [
          { title: 'Male', value: 'male' },
          { title: 'Female', value: 'female' }
        ]
      }
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true // Enables hotspot selection
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'Brief description of the image'
            },
            {
              name: 'attribution',
              type: 'string',
              title: 'Attribution',
              description: 'Credit for the image'
            }
          ]
        }
      ],
      options: {
        layout: 'grid'
      }
    }),
    defineField({
      name: 'adoption_status',
      title: 'Adoption Status',
      type: 'string',
      options: {
        list: [
          { title: 'Available', value: 'available' },
          { title: 'Adopted', value: 'adopted' },
          { title: 'Fostered', value: 'fostered' }
        ]
      }
    })
  ],
  preview: {
    select: {
      title: 'name',
      media: 'images.0'
    }
  }
})
