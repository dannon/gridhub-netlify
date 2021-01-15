// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(actions => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    // Add derived `category` field.
    /*TODO: Replace this and the later api.onCreateNode() call with this technique instead:
     *      https://gridsome.org/docs/schema-api/#add-a-new-field-with-a-custom-resolver
     *      This currently causes problems because a bug prevents you from filtering based on fields
     *      added this way: https://github.com/gridsome/gridsome/issues/1196
     *      This is supposed to be fixed by Gridsome 1.0.
     */
    actions.addSchemaTypes(`
      type Post implements Node @infer {
        category: String
      }
    `);
  });

  // Populate the derived `category` field.
  api.onCreateNode(options => {
    if (options.internal.typeName === "Post") {
      return {
        ...options,
        category: options.path.split("/")[1],
      }
    }
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
