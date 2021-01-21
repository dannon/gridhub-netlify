<template>
  <Layout>
    <g-link to="/" class="link"> &larr; Home</g-link>
    <header class="post-header">
      <h1 class="post-title">{{ $page.post.title }}</h1>
      <div class="post-metadata">
        <p class="post-subtitle">{{ $page.post.tease }}</p>
        <div class="post-contact" v-if="$page.post.contact.length > 0">Contact:
          <span v-for="(contact, index) in $page.post.contact" :key="contact">
            {{ contact }}<template v-if="index < $page.post.contact.length-1">,</template>
          </span>
        </div>
        <p class="post-date">{{ $page.post.date }}</p>
      </div>
    </header>
    <div class="post-content">
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

<style>
.post-title {
  font-size: 28px;
  font-weight: 300;
  line-height: 1.4em;
  padding: 0.5em 0;
}
.post-metadata {
  font-size: 14px;
}
.post-subtitle {
  font-weight: 400;
  font-style: italic;
}
.post-content {
  font-size: 14px;
}
</style>
