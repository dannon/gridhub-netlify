# Community site prototype

This repository contains the framework - the code that generates the site.

It contains no content. To add content, clone this, then create a `content` directory in the root. All your Markdown files go in there. For images and other static files, create a `static` directory in the root and put them there.

## Creating static pages

### File organization

To see an example of how the files are organized, see the [`src`](https://github.com/NickSto/galaxy-hub/tree/gridhub/src) directory of the [`gridhub`](https://github.com/NickSto/galaxy-hub/tree/gridhub) branch of [`galaxy-hub`](https://github.com/galaxyproject/galaxy-hub).

For static pages (normal, informational pages), you create a directory, whose name becomes the last part of the url. Then you create an `index.md` file inside it. The url will be everything *after* `content` and *before* `index.md`:

| Path to Markdown file                        | URL path                      |
|:---------------------------------------------|:----------------------------- |
| `content/events/2021-02-gtn/index.md`        | `/events/2021-02-gtn/`        |
| `content/galaxy-project/statistics/index.md` | `/galaxy-project/statistics/` |

### Writing the Markdown

You can use HTML in your `.md` files, but it's best to avoid it when possible. If you must use HTML, you'll have to keep the HTML on a separate line from the Markdown, and keep a blank line between them (on both sides). If you're struggling to get the layout you want, one trick is to surround a bit of Markdown with a `<div>` of a class that gives you the right layout, like:
```markdown
<div class="float-right">

![alt text](./image.jpg)

</div>
```

### Images

You can include images in your `.md` files with the Markdown syntax shown above. If the image is a general one that'd be useful in multiple pages, you should put it in a `static/images/` directory, then reference it with an absolute path: `![galaxy logo](/images/logos/galaxy.jpg)`.

If the image is a one-off that's only useful for this post, then you can just put it right in the same directory as the `index.md` file. Then reference it with a relative path: `![one-off](./oneoff.jpg)`. **Note** that the `./` is necessary!

You can resize the image right in Markdown by using [remark-attr](https://www.npmjs.com/package/remark-attr) syntax. Right now, however, there's only a very limited subset of that syntax available. Basically, only the `width` attribute will work on images: `![alt text](./image.jpg){width="50"}` (the width is in pixels).

## Creating dynamic pages

Dynamic pages are partially auto-generated. Usually they list a certain group of static pages.

These are created by making a `.vue` file in the `src/pages/` directory. In the future there will be a full explanation of how to create them, but for now here are some important details:

### Defining a category

The top of `gridsome.server.js` defines the `CATEGORIES` variable. It defines each category of pages by their url paths:
```javascript
const CATEGORIES = new Map([
  ["/blog",  "blog"],
  ["/events", "events"],
  ["/news", "news"],
  ["/careers", "careers"],
]);
```
In this example, all urls one level below `/events/` will be put in the `events` category. **Note** that the url must be exactly one level below, not deeper! So `/events/gcc2019/` will match, but not `/events/gcc2019/abstracts/`.

To define a new category, just add another entry to the list, with the parent url on the left (**without** an ending slash) and the category name on the right. Then you can query for pages in that category in your `.vue` file in the `src/pages/` directory.

### Writing static content for dynamic pages

Dynamic pages still usually have some expository static text or images above or below the dynamic content. Instead of keeping this content in the `.vue` framework files, you can keep it in its natural form: Markdown files.

Just make a file named `main.md` in the directory that corresponds to the url of your dynamic page. Then in the `.vue` file, you can query for it and then insert it into your template with a line like:
```vue
<div v-html="$page.main.content" />
```
To query for it, you need to add a clause to your `<page-query>` like this:
```graphql
  main: insert (path: "/insert:events/main/") {
    id
    title
    content
  }
```
..where `events/` is the url of the dynamic page and `main` is the base name of the Markdown file. You can actually name your Markdown file anything as long as you replace that part of the query. A common one is `footer.md` for content that goes below the dynamic content.

FYI, under the hood this is done by defining a Gridsome [collection](https://gridsome.org/docs/collections/) named `Insert`. Any `.md` file *not* named `index.md` automatically becomes an `Insert`.
