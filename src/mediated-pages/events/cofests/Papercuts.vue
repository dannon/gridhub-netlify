<template>
  <Layout>
    <h1 class="page-title">{{ $page.main.title }}</h1>
    <div v-html="$page.main.content" />
    <h2 id="upcoming-events">Upcoming Papercuts CoFests</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Date</th>
          <th>Topic/Event</th>
          <th>Venue/Location</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
        <ArticleTableEvents v-for="edge in $page.upcoming.edges" :key="edge.node.id" :article="edge.node" />
      </tbody>
    </table>
    <h2 id="recent-events">Recent Papercuts CoFests</h2>
    <p>Events in the past 12 months:</p>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Date</th>
          <th>Topic/Event</th>
          <th>Venue/Location</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
        <ArticleTableEvents v-for="edge in $page.recent.edges" :key="edge.node.id" :article="edge.node" />
      </tbody>
    </table>
    <footer class="page-footer" v-if="$page.footer" v-html="$page.footer.content" />
  </Layout>
</template>

<script>
import ArticleTableEvents from '@/components/ArticleTableEvents';
export default {
  components: {
    ArticleTableEvents,
  },
  metaInfo() {
    return {
      title: this.$page.main.title
    }
  }
}
</script>

<page-query>
query ($today: Date!, $oneYearAgo: Date!) {
  main: insert (path: "/insert:events/cofests/papercuts/main/") {
    id
    title
    content
  }
  footer: insert (path: "/insert:events/cofests/papercuts/footer/") {
    id
    title
    content
  }
  upcoming: allArticle(
      sortBy: "date", order: ASC, filter: {
        category: { eq: "events" }, tags: { contains: "papercuts" }, date: { gte: $today }
      }
    ) {
    totalCount
    edges {
      node {
        id
        title
        tease
        location
        location_url
        continent
        contact
        external_url
        gtn
        date (format: "D MMMM YYYY")
        path
      }
    }
  }
  recent: allArticle(
      sortBy: "date", order: DESC, filter: {
        category: { eq: "events" }, tags: { contains: "papercuts" },
        date: { between: [$oneYearAgo, $today] }, hasDate: { eq: true }
      }
    ) {
    totalCount
    edges {
      node {
        id
        title
        tease
        location
        location_url
        continent
        contact
        external_url
        gtn
        date (format: "D MMMM YYYY")
        path
      }
    }
  }
}
</page-query>
