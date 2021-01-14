<template>
  <div class="post-list-brief">
    <h3 class="title"><g-link :to="post.path" class="read">{{ post.title }}</g-link></h3>
    <p class="description">{{ post.tease }}</p>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style>
.post-list-brief {
  font-size: 14px;
  line-height: 1;
}
</style>
