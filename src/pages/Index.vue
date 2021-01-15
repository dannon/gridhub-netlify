<template>
  <Layout>

    <header class="header">
      <h1 id="homepage-title">{{ $page.metadata.siteName }}</h1>
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
  metadata {
    siteName
  }
  #TODO: Filter directly on the `category` field.
  #      Currently not possible due to this bug: https://github.com/gridsome/gridsome/issues/1196
  #      Supposed to be fixed by Gridsome 1.0.
  news: allPost(filter: { path: { regex: "^/news/" }}) {
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
  events: allPost(filter: { path: { regex: "^/events/" }}) {
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
  blog: allPost(filter: { path: { regex: "^/blog/" }}) {
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