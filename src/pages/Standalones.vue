<template>
  <Layout>
    <h1 id="page-title">Standalones</h1>
    <p>Standalone pages not part of any series (<a href="https://gridsome.org/docs/collections/">collection</a>).</p>
    <table class="table-striped">
      <tbody>
        <PostTable v-for="edge in $page.allStandalone.edges" :key="edge.node.id" :post="edge.node" />
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
    title: 'Standalones'
  }
}
</script>

<page-query>
query {
  metadata {
    siteName
  }
  allStandalone {
    totalCount
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>
