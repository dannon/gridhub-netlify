<template>
  <Layout>

    <header class="header">
      <h1>Gridsome Test</h1>
      <p>Let's test getting Gridsome to work.</p>
    </header>

    <section class="posts">
      <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
    </section>

  </Layout>
</template>

<script>
import PostList from '@/components/PostList';
export default {
  components: {
    PostList,
  },
  metaInfo: {
    title: 'A simple static site',
  },
};
</script>

<page-query>
query {
  allPost {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        description
        date (format: "D MMMM YYYY")
        path
      }
    }
  }
}
</page-query>