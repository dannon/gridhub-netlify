<template>
  <div class="post-list">
    <hr class="line" />
    <p class="date">{{ post.date }}</p>
    <h1 class="title">{{ post.title }}</h1>
    <p class="description">{{ post.description }}</p>
    <b>{{ post.timeToRead }} min read </b> &nbsp;
    <g-link :to="post.path" class="read">Read More...</g-link>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>