<template>
  <Layout>
    <h1 id="page-title">Standalones</h1>
    <p>Standalone pages not part of any series (<a href="https://gridsome.org/docs/collections/">collection</a>).</p>
    <table class="table-striped">
      <tbody>
        <ArticleTable v-for="edge in $page.allArticle.edges" :key="edge.node.id" :article="edge.node" />
      </tbody>
    </table>
  </Layout>
</template>

<script>
import ArticleTable from '@/components/ArticleTable';
export default {
  components: {
    ArticleTable,
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
  allArticle(filter: {category: { eq: ""}}) {
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
