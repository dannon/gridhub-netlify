<template>
  <tr class="post-table">
    <td class="date">{{ post.date }}</td>
    <td class="title"><g-link :to="post.path" class="read">{{ post.title }}</g-link></td>
    <td class="tease">{{ post.tease }}</td>
  </tr>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style>
.post-table .tease {
  font-size: 80%;
}
</style>