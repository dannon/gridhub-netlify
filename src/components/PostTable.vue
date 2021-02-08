<template>
  <tr class="postTable-table">
    <td class="date">{{ post.date }}</td>
    <td class="title">
      <a v-if="post.external_url" :href="post.external_url">{{ post.title }}</a>
      <g-link v-else :to="post.path" class="read">{{ post.title }}</g-link>
    </td>
    <td class="tease">{{ post.tease }}</td>
  </tr>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style>
.postTable-table .tease {
  font-size: 80%;
}
</style>