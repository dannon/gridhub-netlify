<template>
  <tr class="postTableEvents" v-if="post.date">
    <td class="date">{{ post.date }}</td>
    <td class="title">
      <a v-if="post.external_url" :href="post.external_url">{{ post.title }}</a>
      <g-link v-else :to="post.path" class="read">{{ post.title }}</g-link>
      <p class="tease">{{ post.tease }}</p>
    </td>
    <td class="location">
      <g-image v-if="post.continent" class="continent float-right" :src="`/images/icons/${post.continent}.png`"/>
      <a v-if="post.location_url" :href="post.location_url">{{ post.location }}</a>
      <template v-else>{{ post.location }}</template>
    </td>
    <td class="contact">
      <a v-if="post.gtn" href="https://training.galaxyproject.org/">
        <g-image class="gtn-icon" src="/images/galaxy-logos/GTN16.png" alt="Training offered by GTN Member" title="Training offered by GTN Member"/>
      </a>
      {{ post.contact }}
    </td>
  </tr>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style>
.postTableEvents .gtn-icon {
  float: right;
}
</style>
