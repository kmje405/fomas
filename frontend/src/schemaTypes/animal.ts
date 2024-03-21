import type { defineType } from "sanity";

export default defineType({
    {
        name: 'dog',
        title: 'Dog',
        type: 'document',
        fields: [
          {
            name: 'name',
            title: 'Name',
            type: 'string'
          },
          {
            name: 'breed',
            title: 'Breed',
            type: 'string'
          },
          {
            name: 'age',
            title: 'Age',
            type: 'string'
          },
          {
            name: 'gender',
            title: 'Gender',
            type: 'string',
            options: {
              list: [
                { title: 'Male', value: 'male' },
                { title: 'Female', value: 'female' }
              ]
            }
          },
          {
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
          },
          {
            name: 'vaccinated',
            title: 'Vaccinated',
            type: 'boolean'
          },
          {
            name: 'spayed_neutered',
            title: 'Spayed/Neutered',
            type: 'boolean'
          },
          {
            name: 'special_needs',
            title: 'Special Needs',
            type: 'boolean'
          },
          {
            name: 'friendly_with',
            title: 'Friendly With',
            type: 'array',
            of: [{ type: 'string' }]
          },
          {
            name: 'not_friendly_with',
            title: 'Not Friendly With',
            type: 'array',
            of: [{ type: 'string' }]
          },
          {
            name: 'bio',
            title: 'Bio',
            type: 'text'
          },
          {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
              layout: 'grid'
            }
          },
          {
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
          }
        ]
      }
})