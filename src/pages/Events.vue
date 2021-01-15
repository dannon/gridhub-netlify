<template>
  <Layout>
    <h1 id="page-title">Galaxy Event Horizon</h1>
    <p>Upcoming (and past) events with Galaxy-related content.</p>
    <p>The events listed here are also available in the <a href="http://bit.ly/gxycal">Galaxy Events Google Calendar</a>. The <a href="http://bit.ly/gxyothercal">Galaxy Other Events Google Calendar</a> lists additional events that are relevant to the Galaxy Community, but that are not known to feature significant Galaxy content.</p>
    <p>Some events are part of a series:</p>
    <ul>
      <li><g-link to="/community/devroundtable/">Galaxy Developer Round Table meetups</g-link></li>
      <li><g-link to="/events/webinars/">Galaxy Webinar Series</g-link></li>
    </ul>
    <p>If you know of any event that should be added to this page and/or to the Galaxy Event Calendar, please add it here or send it to <a href="mailto:outreach@galaxyproject.org">outreach@galaxyproject.org</a>. For events prior to this year, see the <g-link to="/events/archive/">Events Archive.</g-link></p>
    <h2 id="upcoming-events">Upcoming Events</h2>
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
  metaInfo: {
    title: 'Galaxy Event Horizon'
  }
}
</script>

<page-query>
query {
  metadata {
    siteName
  }
  allPost(filter: { path: { regex: "^/events/" }}) {
    totalCount
    edges {
      node {
        id
        title
        tease
        date (format: "D MMMM YYYY")
        path
      }
    }
  }
}
</page-query>
