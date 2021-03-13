// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const slugify = string => string.toLowerCase().replace(/[^\w\d -]/g, '').replace(/[ -]+/g,'-');
const ensurePrefix = (string, char) => string.startsWith(char) ? string : char+string;
function rmPathPrefix(path, depth, absolute=null) {
  let inputIsAbsolute = path.startsWith("/");
  if (inputIsAbsolute) {
    depth++;
  }
  if (absolute === null) {
    absolute = inputIsAbsolute;
  }
  let fields = path.split("/");
  let newPath = fields.slice(depth).join("/");
  if (absolute) {
    return "/"+newPath;
  } else {
    return newPath;
  }
}
function makeFilenamePath(prefix, node) {
  let directory = rmPathPrefix(node.fileInfo.directory, 2, absolute=false);
  let path;
  if (directory === "") {
    path = node.fileInfo.name;
  } else {
    path = [directory, node.fileInfo.name].join("/");
  }
  return `/${prefix}:${path}`;
}
function logAndReturn(...values) {
  // console.log(values.join("\t"));
  return values[values.length-1];
}

module.exports = {
  siteName: 'Galaxy Community Hub: The Squeakquel',
  siteDescription: 'All about Galaxy and its community',
  templates: {
    Post: node => logAndReturn("Post", rmPathPrefix(node.path, 2)),
    Standalone: node => logAndReturn("Standalone", rmPathPrefix(node.path, 2)),
    Insert: node => logAndReturn("Insert", makeFilenamePath("insert", node)),
  },
  // Path globbing rules: https://www.npmjs.com/package/globby#user-content-globbing-patterns
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/*/*/**/index.md',
        typeName: 'Post',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/standalone/*/**/index.md',
        typeName: 'Standalone',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/inserts/**/*.md',
        typeName: 'Insert',
      }
    },
  ],
  transformers: {
    // Add markdown support to all filesystem sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['noopener', 'noreferrer'],
      slug: true,
      autolinkHeadings: true,
      plugins: ['remark-attr'],
    }
  },
}
