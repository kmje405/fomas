import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { netlifyTool } from 'sanity-plugin-netlify'
import { netlify } from 'sanity-plugin-netlify'

import {schemaTypes} from '../frontend/src/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'fomas-backend',

  projectId: '1bs3a1kl',
  dataset: 'production',

  plugins: [structureTool(), netlifyTool()],

  schema: {
    types: schemaTypes,
  },
})
