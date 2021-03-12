<template>
  <Layout>
    <h1 class="page-title">{{ $page.index.title }}</h1>
    <div v-html="$page.index.content" />
    <h2 id="upcoming-events">Upcoming Events</h2>
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
        <PostTableEvents v-for="edge in $page.upcoming.edges" :key="edge.node.id" :post="edge.node" />
      </tbody>
    </table>
    <h2 id="recent-events">Recent Events</h2>
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
        <PostTableEvents v-for="edge in $page.recent.edges" :key="edge.node.id" :post="edge.node" />
      </tbody>
    </table>
    <footer class="page-footer" v-if="$page.footer" v-html="$page.footer.content" />
  </Layout>
</template>

<script>
import PostTableEvents from '@/components/PostTableEvents';
export default {
  components: {
    PostTableEvents,
  },
  metaInfo() {
    return {
      title: this.$page.index.title
    }
  }
}
</script>

<page-query>
query ($today: Date!, $oneYearAgo: Date!) {
  index: insert (path: "/insert:events/index/") {
    id
    title
    content
  }
  footer: insert (path: "/insert:events/footer/") {
    id
    title
    content
  }
  upcoming: allPost(
      sortBy: "date", order: ASC, filter: {
        category: { eq: "events" }, date: { gte: $today }
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
  recent: allPost(
      sortBy: "date", order: DESC, filter: {
        category: { eq: "events" }, date: { between: [$oneYearAgo, $today] }
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
