<template>
  <div>
    <h1 class="mt-6">{{ $prismic.asText(title) }}</h1>
    <slices-block :slices="slices"/>
  </div>
</template>


<script>
import SlicesBlock from '~/components/SlicesBlock.vue'
import readSEO from '~/helper/ReadSEO'

export default {
  name: 'verkefni',
  components: { 
    SlicesBlock
  },
  head(){
    return {
      title: this.$prismic.asText(this.titleHead),
      meta: readSEO(this.body)
    }
  },
  async asyncData({ $prismic, error }) {
    try{
      const document = (await $prismic.api.getByUID('page', 'verkefni')).data;
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
