<template>
  <Layout>
    <h1 class="page-title">{{ $page.index.title }}</h1>
    <div v-html="$page.index.content" />
    <h2 id="open-positions">Open Positions</h2>
    <div class="card-deck">
      <CardCareers v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
    </div>
    <footer class="page-footer" v-if="$page.footer" v-html="$page.footer.content" />
  </Layout>
</template>

<script>
import CardCareers from '@/components/CardCareers';
export default {
  components: {
    CardCareers,
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
  index: insert (path: "/insert:careers/index/") {
    id
    title
    content
  }
  footer: insert (path: "/insert:careers/footer/") {
    id
    title
    content
  }
  allPost(filter: { category: { eq: "careers" }, date: { ne: "" }}) {
    totalCount
    edges {
      node {
        id
        title
        date (format: "D MMM YYYY")
        closes (format: "D MMM YYYY")
        continent
        location
        location_url
        external_url
        contact
        summary
        image
        path
      }
    }
  }
}
</page-query>
