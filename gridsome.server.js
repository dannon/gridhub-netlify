// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const LIST_METADATA = ['location', 'contact'];
function split_list_string(string) {
  return string.split(',').map(string => string.split("&")).flat().map(string => string.trim());
}

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
        index: Boolean
        category: String
      }
    `);
    actions.addSchemaTypes(`
      type Standalone implements Node @infer {
        index: Boolean
      }
    `);
  });

  // Populate the derived `category` field.
  api.onCreateNode(options => {
    let pathParts = options.path.split("/");
    if (options.internal.typeName === "Post") {
      // Split comma (and ampersand) delimited metadata fields into arrays.
      for (let key in options) {
        if (LIST_METADATA.includes(key) && options[key] !== null) {
          options[key] = split_list_string(options[key]);
        }
      }
      return {
        category: pathParts[1],
        index: pathParts.length === 4 && pathParts[2] === "__index__",
        ...options
      };
    } else if (options.internal.typeName === "Standalone") {
      return {
        index: pathParts.length === 3 && pathParts[1] === "__index__",
        ...options
      }
    }
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
