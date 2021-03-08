<template>
  <Layout>
    <g-link to="/" class="link"> &larr; Home</g-link>
    <header>
      <h1 class="title">{{ $page.post.title }}</h1>
      <div class="metadata">
        <p class="subtitle">{{ $page.post.tease }}</p>
        <div class="contact" v-if="$page.post.contact.length > 0">Contact:
          <span v-for="(contact, index) in $page.post.contact" :key="contact">
            {{ contact }}<template v-if="index < $page.post.contact.length-1">,</template>
          </span>
        </div>
        <p class="date">{{ $page.post.date }}</p>
      </div>
    </header>
    <div class="content">
      <p v-html="$page.post.content" />
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    tease
    contact
    date (format: "D MMMM YYYY")
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 28px;
  font-weight: 300;
  line-height: 1.4em;
  padding: 0.5em 0;
}
.metadata {
  font-size: 14px;
}
.subtitle {
  font-weight: 400;
  font-style: italic;
}
.content {
  font-size: 14px;
}
</style>
