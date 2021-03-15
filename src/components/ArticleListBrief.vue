<template>
  <p class="title">
    <a v-if="article.external_url" :href="article.external_url">{{ article.title }}</a>
    <g-link v-else :to="article.path" class="read">{{ article.title }}</g-link>
    {{ article.tease }}
  </p>
</template>

<script>
export default {
  props: ["article"],
};
</script>
