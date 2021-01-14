<template>
  <Layout>
    <h1 id="page-title">Galaxy News</h1>
    <p>This page contains announcements of interest to the Galaxy Community. These include items from the Galaxy Team or the Galaxy community and address anything that is of wide interest to the community.</p>
    <p>Also see the <g-link to="/blog/">Galactic Blog</g-link> for more.</p>
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
    title: 'Galaxy News'
  }
}
</script>

<page-query>
query {
  metadata {
    siteName
  }
  allPost(filter: { category: { eq: "news" }}) {
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
