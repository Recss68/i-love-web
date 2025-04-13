// sanityClient.js
import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'rs9eahpg',     // jouw project ID
  dataset: 'production',     // jouw dataset
  apiVersion: '2023-01-01',  // kies een recente datum (YYYY-MM-DD)
  useCdn: true,              // true = snellere data via cache
})

export default client
