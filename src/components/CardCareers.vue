<template>
  <div class="card border-info">
    <div class="card-header">
      <Continent :continent="post.continent" />
      <a :href="post.external_url">{{ post.title }}</a>
    </div>
    <p class="location">
      <a :href="post.location_url">{{ post.location }}</a>
    </p>
    <p class="posted">
      Posted: {{ post.date }}
      <br>
      <span v-if="post.closes" class="text-warning">
        Apply by: {{ post.closes }}
      </span>
    </p>
    <span v-html="summary" />
    <p v-if="post.contact" class="contact">
      Contact: {{ post.contact }}
    </p>
    <p v-if="post.image">
      <a :href="post.external_url">
        <g-image class="card-img-bottom" :src="post.image.replace('/src', '')" />
      </a>
    </p>
  </div>
</template>

<script>
import Continent from '@/components/Continent';
const remark = require('remark');
const remarkHtml = require('remark-html');
export default {
  components: {
    Continent,
  },
  props: ["post"],
  data() {
    let data = {};
    remark().use(remarkHtml).process(this.post.summary, (err, file) => {
      if (err) {
        console.error(err);
      } else {
        data.summary = String(file);
      }
    });
    return data;
  }
};
</script>

<style scoped>
.card {
  min-width: 14rem;
  max-width: 20rem;
}
.location, .posted {
  font-weight: bolder;
}
.contact {
  font-style: italic;
}
</style>