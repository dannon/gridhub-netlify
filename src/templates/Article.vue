<template>
  <Layout>
    <g-link to="/" class="link"> &larr; Home</g-link>
    <header>
      <h1 class="title">{{ $page.article.title }}</h1>
      <div class="metadata">
        <p class="subtitle" v-if="$page.article.tease">{{ $page.article.tease }}</p>
        <div class="contact" v-if="$page.article.contact">
          Contact: {{ $page.article.contact }}
        </div>
        <p class="date" v-if="$page.article.date">{{ $page.article.date }}</p>
      </div>
    </header>
    <div class="content" v-html="$page.article.content" />
  </Layout>
</template>

<page-query>
query Article ($path: String!) {
   article: article (path: $path) {
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
      title: this.$page.article.title
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
