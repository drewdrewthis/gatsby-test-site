const SiteClient = require('datocms-client').SiteClient;

const client = new SiteClient('');

const processItemTypes = (datum, idx) => ({
  apiKey: datum.apiKey || 'no_key',
  rawData: {
    ...datum
  },
  id: `${idx}`,
  parent: null,
  children: [],
  internal: {
    type: 'datoItemTypes',
    contentDigest: 'Dato'
  }
});

const processItems = (datum, idx) => ({
  apiKey: datum.apiKey || 'no_key',
  rawData: {
    ...datum
  },
  id: `${idx}`,
  parent: null,
  children: [],
  internal: {
    type: 'datoItems',
    contentDigest: 'Dato'
  }
});


exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode, createNodeField } = boundActionCreators
  // Create nodes here, generally by downloading data
  // from a remote API.
  // const data = await fetch(REMOTE_API)
  const itemTypes = await client.itemTypes.all();
  const items = await client.items.all();

  // Process data into nodes.
  itemTypes.forEach((datum, idx) => createNode(processItemTypes(datum, idx)))
  items.forEach((datum, idx) => createNode(processItems(datum, idx)))

  // We're done, return.
  return
}
