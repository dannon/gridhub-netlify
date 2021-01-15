<template>
  <Layout>
    <br />
    <g-link to="/" class="link"> &larr; Home</g-link>
    <header class="singlet-header">
      <h1 class="singlet-title">{{ $page.singlet.title }}</h1>
    </header>
    <div class="singlet-content">
      <p v-html="$page.singlet.content" />
    </div>
  </Layout>
</template>

<page-query>
query Singlet ($path: String!) {
   singlet: singlet (path: $path) {
    id
    title
    content
  }
}
</page-query>

<style>
.singlet-title {
  font-size: 28px;
  font-weight: 300;
  line-height: 1.4em;
  padding: 0.5em 0;
}
.singlet-content {
  font-size: 14px;
}
</style>
