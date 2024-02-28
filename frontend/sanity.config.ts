import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { netlifyTool } from 'sanity-plugin-netlify'
import { dashboardTool } from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";

import { schemaTypes } from '../frontend/src/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'fomas-backend',
  projectId: '1bs3a1kl',
  dataset: 'production',

  plugins: [structureTool(), netlifyTool(), dashboardTool({
    widgets: [
      netlifyWidget({
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'FOMAS',
            apiId: 'e4557a8a-2b79-4b43-8d2a-6daf997c251e',
            buildHookId: '65dfbf229c4967863343b7be',
            name: 'main--fomas',
          }
        ]
      })
    ]
  })
  ],
  schema: {
    types: schemaTypes,
  },
})
