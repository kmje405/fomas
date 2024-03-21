import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'dog',
  title: 'Dog',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
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
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' }
        ]
      }
    }),
    defineField({
      name: 'vaccinated',
      title: 'Vaccinated',
      type: 'boolean'
    }),
    defineField({
      name: 'spayed_neutered',
      title: 'Spayed/Neutered',
      type: 'boolean'
    }),
    defineField({
      name: 'special_needs',
      title: 'Special Needs',
      type: 'boolean'
    }),
    defineField({
      name: 'friendly_with',
      title: 'Friendly With',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'not_friendly_with',
      title: 'Not Friendly With',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text'
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
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
