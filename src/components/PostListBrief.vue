<template>
  <div class="post-list">
    <h1 class="title"><g-link :to="post.path" class="read">{{ post.title }}</g-link></h1>
    <p class="description">{{ post.tease }}</p>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style>
.post-list {
  font-size: 14px;
  line-height: 1;
}

.post-list a {
  text-decoration: none;
}
</style>
