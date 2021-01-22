<template>
  <Layout>
    <g-link to="/" class="link"> &larr; Home</g-link>
    <header class="standalone-header">
      <h1 class="standalone-title">{{ $page.standalone.title }}</h1>
    </header>
    <div class="standalone-content">
      <p v-html="$page.standalone.content" />
    </div>
  </Layout>
</template>

<page-query>
query Standalone ($path: String!) {
   standalone: standalone (path: $path) {
    id
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.standalone.title
    }
  }
}
</script>

<style>
.standalone-title {
  font-size: 28px;
  font-weight: 300;
  line-height: 1.4em;
  padding: 0.5em 0;
}
.standalone-content {
  font-size: 14px;
}
</style>
