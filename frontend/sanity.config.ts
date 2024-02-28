import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from '../frontend/src/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'fomas-backend',

  projectId: '1bs3a1kl',
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
