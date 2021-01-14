<template>
  <Layout>
    <br />
    <g-link to="/" class="link"> &larr; Home</g-link>
    <header class="post-header">
      <h1 class="post-title">{{ $page.post.title }}</h1>
      <h2 class="post-subtitle">{{ $page.post.tease }}</h2>
      <p class="post-date">{{ $page.post.date }}</p>
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
    date (format: "D MMMM YYYY")
    content
  }
}
</page-query>

<style>
.post-title {
  font-size: 28px;
  font-weight: 300;
  line-height: 1.4em;
  padding: 0.5em 0;
}
.post-subtitle {
  font-size: 14px;
  font-weight: 400;
  font-style: italic;
}
.post-date {
  font-size: 12px;
  font-weight: 400;
}
.post-content {
  font-size: 14px;
}
</style>
