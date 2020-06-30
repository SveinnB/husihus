<template>
  <div>
    <p class="my-3 text-h3">{{ $prismic.asText(title) }}</p>
    <slices-block :slices="slices"/>
  </div>
</template>


<script>
import SlicesBlock from '~/components/SlicesBlock.vue'

export default {
  name: 'page',
  components: {
    SlicesBlock
  },
  async asyncData({ $prismic, params, error }) {
    try{
      const document = (await $prismic.api.getByUID('page', params.uid)).data
      return {
        // Set slices as variable
        slices: document.page_content,
        title: document.page_title
      }
    }
    catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>
