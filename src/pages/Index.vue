<template>
  <Layout>

    <header class="header">
      <h1 id="page-title">{{ $page.metadata.siteName }}</h1>
    </header>

    <section class="description">
      <p>
        Galaxy is an open, web-based platform for accessible, reproducible, and transparent
        computational research.
      </p>
      <ul>
        <li>
          <strong>Accessible:</strong> programming experience is not required to easily upload data, run complex tools and workflows, and visualize results.
        </li>
        <li>
          <strong>Reproducible:</strong> Galaxy captures information so that you don't have to; any user can repeat and
        understand a complete computational analysis, from tool parameters to the dependency tree.
        </li>
        <li>
          <strong>Transparent:</strong> Users share and publish their histories, workflows, and visualisations via the web.
        </li>
        <li>
          <strong>Community centered:</strong> Our inclusive and diverse users (developers, educators, researchers, clinicians, etc.) are empowered to share their findings.
        </li>
      </ul>
      <p>Welcome to the Galaxy Community Hub, where you'll find community curated documentation of all things Galaxy.</p>
    </section>

    <section class="posts">
      <h2><g-link to="/news/">News</g-link></h2>
      <PostListBrief v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
    </section>

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
  metadata {
    siteName
  }
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

<style>
#page-title {
  font-size: 48px;
  font-weight: 300;
}
</style>