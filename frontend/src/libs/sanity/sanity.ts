import {createClient, type ClientConfig} from '@sanity/client'

const config: ClientConfig = {
  projectId: '1bs3a1kl',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-02-18', // use current date (YYYY-MM-DD) to target the latest API version
}
export const client = createClient(config)

const data = await client.fetch<number>(`count(*)`)
// data is typed as `number`
