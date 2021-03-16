// Using the Server API: https://gridsome.org/docs/server-api/
const fs = require('fs');
const path = require('path');

const MEDIATED_DIR = "src/pages/_mediated";
const CATEGORIES = new Map([
  ["/blog",  "blog"],
  ["/events", "events"],
  ["/news", "news"],
  ["/careers", "careers"],
]);

function getFilesDeep(rootDir) {
  /**
   * Find all the children of `rootDir`.
   * Arguments:
   *   `rootDir` (`String`): An absolute or relative path of a directory.
   * Returns:
   *   `files` (`Array`): An array of paths relative to the same directory as the `rootDir`.
   *     Returns only the paths to files (tested by `isFile()`).
   */
  let files = [];
  let children = fs.readdirSync(rootDir, {withFileTypes: true});
  for (let child of children) {
    let childPath = path.join(rootDir,child.name)
    if (child.isDirectory()) {
      let descendents = getFilesDeep(childPath);
      files = files.concat(descendents);
    } else if (child.isFile()) {
      files.push(childPath);
    }
  }
  return files;
}

function fsPathToUrlPath(fsPath) {
  if (fsPath.indexOf(MEDIATED_DIR) !== 0) {
    throw `${fsPath} does not start with ${MEDIATED_DIR}`;
  }
  let relativePath = fsPath.slice(MEDIATED_DIR.length);
  let pathParts = path.parse(relativePath);
  if (pathParts.ext !== ".vue") {
    throw `${fsPath} does not end in '.vue'`;
  }
  let end = pathParts.name.toLowerCase()+"/";
  if (pathParts.name === 'Index') {
    end = "";
  }
  return path.join(pathParts.dir,end);
}

function categorize(pathParts) {
  /** Take a `pathParts` made by splitting the path on `"/"` and return a category:
   *  ```
   *  let path = "/events/2017-02-globus/"
   *  let pathParts = path.split("/")        // [ "", "events", "2017-02-globus", "" ]
   *  let category = categorize(pathParts)   // "events"
   *  ```
   */
  let keyParts = pathParts.slice(0, pathParts.length-2);
  let key = keyParts.join("/");
  let category = CATEGORIES.get(key);
  if (category === undefined) {
    return null;
  } else {
    return category;
  }
}

function dateToStr(date) {
  // Turn a `Date` object into a string like "2021-03-12".
  return date.toISOString().slice(0,10);
}

module.exports = function(api) {
  api.loadSource(actions => {
    // Using the Data Store API: https://gridsome.org/docs/data-store-api/
    // Add derived `category` field.
    /*TODO: Replace this and the later api.onCreateNode() call with this technique instead:
     *      https://gridsome.org/docs/schema-api/#add-a-new-field-with-a-custom-resolver
     *      This currently causes problems because a bug prevents you from filtering based on fields
     *      added this way: https://github.com/gridsome/gridsome/issues/1196
     *      This is supposed to be fixed by Gridsome 1.0.
     */
    actions.addSchemaTypes(`
      type Article implements Node @infer {
        category: String
        hasDate: Boolean
      }
    `);
  });

  // Populate the derived fields.
  api.onCreateNode(options => {
    let pathParts = options.path.split("/");
    options.filename = options.fileInfo.name;
    // Articles
    if (options.internal.typeName === "Article") {
      // Categorize by path.
      options.category = categorize(pathParts);
      // Label ones with dates.
      // This gets around the inability of the GraphQL schema to query on null/empty dates.
      if (options.date) {
        options.hasDate = true;
      } else {
        options.hasDate = false;
      }
    }
    return options;
  });

  api.createPages(({ createPage }) => {
    // Using the Pages API: https://gridsome.org/docs/pages-api/
    const now = new Date();
    const oneYearAgo = new Date(now.getFullYear()-1, now.getMonth(), now.getDate());
    const todayStr = dateToStr(now);
    const oneYearAgoStr = dateToStr(oneYearAgo);
    const context = {
      today: todayStr,
      oneYearAgo: oneYearAgoStr,
    };
    getFilesDeep(MEDIATED_DIR).forEach(filePath => {
      createPage({
        path: fsPathToUrlPath(filePath),
        component: filePath,
        context: context,
      });
    });
  })
}
