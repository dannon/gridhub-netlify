<template>
  <Layout>
    <h1 id="page-title">Singlets</h1>
    <p>Standalone pages not part of any series (collection).</p>
    <table class="table-striped">
      <tbody>
        <PostTable v-for="edge in $page.allSinglet.edges" :key="edge.node.id" :post="edge.node" />
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
    title: 'Singlets'
  }
}
</script>

<page-query>
query {
  metadata {
    siteName
  }
  allSinglet {
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
