<template>
  <div class="postListBrief">
    <p class="title">
      <a v-if="post.external_url" :href="post.external_url">{{ post.title }}</a>
      <g-link v-else :to="post.path" class="read">{{ post.title }}</g-link>
      {{ post.tease }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>
