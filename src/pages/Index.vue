<template>
  <Layout>

    <header class="header">
      <h1 id="homepage-title">{{ $page.index.title }}</h1>
    </header>

    <section class="description" v-html="$page.index.content" />

    <section class="posts">
      <h2><g-link to="/news/">News</g-link></h2>
      <PostListBrief v-for="edge in $page.news.edges" :key="edge.node.id" :post="edge.node" />
      <h2><g-link to="/events/">Events</g-link></h2>
      <PostListBrief v-for="edge in $page.events.edges" :key="edge.node.id" :post="edge.node" />
      <h2><g-link to="/blog/">Blog</g-link></h2>
      <PostListBrief v-for="edge in $page.blog.edges" :key="edge.node.id" :post="edge.node" />
    </section>

    <footer class="acknowledgment">
      The Galaxy Project is supported in part by NSF, NHGRI, The Huck Institutes of the Life Sciences, The Institute for CyberScience at Penn State, and Johns Hopkins University.
    </footer>
  </Layout>
</template>

<script>
import PostListBrief from '@/components/PostListBrief';
export default {
  components: {
    PostListBrief,
  },
  metaInfo: {
    title: 'Home',
  },
};
</script>

<page-query>
query {
  index: standalone (path: "/__index__/") {
    id
    title
    content
  }
  news: allPost(perPage: 3, filter: { category: { eq: "news" }}) {
    totalCount
    edges {
      node {
        id
        title
        tease
        path
      }
    }
  }
  events: allPost(perPage: 5, filter: { category: { eq: "events" }}) {
    totalCount
    edges {
      node {
        id
        title
        tease
        path
      }
    }
  }
  blog: allPost(perPage: 2, filter: { category: { eq: "blog" }}) {
    totalCount
    edges {
      node {
        id
        title
        tease
        path
      }
    }
  }
}
</page-query>

<style>
#homepage-title {
  font-size: 48px;
  font-weight: 300;
}
footer {
  margin-top: 20px;
  font-size: 85%;
}
</style>