<template>
  <tr class="postTableBlog-table">
    <td class="date">{{ post.date }}</td>
    <td class="title">
      {{ post.authors }}
      <p class="postTableBlog-from">
        from
        <a v-if="post.source_blog_url" :href="post.source_blog_url">{{ post.source_blog }}</a>
        <template v-else>
          the <strong>Galactic Blog</strong>
        </template>
      </p>
    </td>
    <td>
      <a v-if="post.external_url" :href="post.external_url">{{ post.title }}</a>
      <g-link v-else :to="post.path" class="read">{{ post.title }}</g-link>
      <p class="tease">
        {{ post.tease }}
      </p>
    </td>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style>
.postTableBlog-table .tease {
  font-size: 80%;
}
.postTableBlog-from {
  font-style: italic;
}
</style>