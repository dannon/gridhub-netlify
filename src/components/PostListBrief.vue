<template>
  <div class="postListBrief">
    <h3 class="title">
      <a v-if="post.external_url" :href="post.external_url">{{ post.title }}</a>
      <g-link v-else :to="post.path" class="read">{{ post.title }}</g-link></h3>
    <p class="description">{{ post.tease }}</p>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style>
.postListBrief {
  font-size: 14px;
  line-height: 1;
}
</style>
