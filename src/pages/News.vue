<template>
  <Layout>
    <h1 class="page-title">{{ $page.index.title }}</h1>
    <div v-html="$page.index.content" />
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
  metaInfo() {
    return {
      title: this.$page.index.title
    }
  }
}
</script>

<page-query>
query {
  index: post (path: "/news/__index__/") {
    id
    title
    content
  }
  allPost(filter: { category: { eq: "news" }, index: { eq: false }, date: { ne: "" }}) {
    totalCount
    edges {
      node {
        id
        title
        tease
        external_url
        date (format: "D MMMM YYYY")
        path
      }
    }
  }
}
</page-query>
