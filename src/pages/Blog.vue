<template>
  <Layout>
    <h1 id="page-title">The Galactic Blog</h1>
    <p><img class="img-fluid float-right" src="/images/galaxy-logos/galactic-blog-400.png" alt="Galactic Blog"></p>
    <p>Welcome to the <em>Galactic Blog</em>, a list of Galaxy related blog posts from community members.  This blog contains longer form posts or pointers to longer form posts that are elsewhere on the web.</p>
    <p>The Galactic Blog complements the <g-link to="/news/">Galaxy News feed</g-link>.</p>
    <p> <strong>Add your voice!</strong></p>
    <p>See the hub <a href="https://github.com/galaxyproject/galaxy-hub/tree/master/CONTRIBUTING.md">CONTRIBUTING page</a> in general, and the <a href="https://github.com/galaxyproject/galaxy-hub/blob/master/CONTRIBUTING.md#blog-metadata">blog section</a> in particular for directions on how to add a blog entry.</p>
    <h2 id="heres-what-people-are-saying">Here's what people are saying</h2>
    <table class="table-striped">
      <tbody>
        <PostTable v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
      </tbody>
    </table>
  </Layout>
</template>

<script>
import PostTable from '@/components/PostTable';
export default {
  components: {
    PostTable,
  },
  metaInfo: {
    title: 'The Galactic Blog'
  }
}
</script>

<page-query>
query {
  metadata {
    siteName
  }
  allPost(filter: { path: { regex: "^/blog/" }}) {
    totalCount
    edges {
      node {
        id
        title
        tease
        date (format: "D MMMM YYYY")
        path
      }
    }
  }
}
</page-query>
