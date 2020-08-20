<template>
  <slices-block :slices="slices"/>
</template>

<script>
import SlicesBlock from '~/components/SlicesBlock.vue'
import readSEO from '~/helper/ReadSEO'

export default {
  name: 'Home',
  components: {
    SlicesBlock,
  },
  head(){
    return {
      title: this.$prismic.asText(this.titleHead),
      meta: readSEO(this.body)
    }
  },
  async asyncData({ $prismic, error }) {
    try{
      const document = (await $prismic.api.getByUID('page', 'homepage')).data;
      return {
        // Set slices as variable
        slices: document.page_content,
        title: document.page_title,
        titleHead: document.head_title,
        body: document.body
      }
    }
    catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
}
</script>
