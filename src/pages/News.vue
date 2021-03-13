<template>
  <Layout>
    <h1 class="page-title">{{ $page.main.title }}</h1>
    <div v-html="$page.main.content" />
    <table class="table table-striped">
      <tbody>
        <PostTable v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
      </tbody>
    </table>
    <footer class="page-footer" v-if="$page.footer" v-html="$page.footer.content" />
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
      title: this.$page.main.title
    }
  }
}
</script>

<page-query>
query {
  main: insert (path: "/insert:news/main/") {
    id
    title
    content
  }
  footer: insert (path: "/insert:news/footer/") {
    id
    title
    content
  }
  allPost(filter: { category: { eq: "news" }, date: { ne: "" }}) {
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
