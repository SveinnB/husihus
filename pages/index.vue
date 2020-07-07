<template>
  <slices-block class="mt-5" :slices="slices"/>
</template>

<script>
import SlicesBlock from '~/components/SlicesBlock.vue'

export default {
  name: 'Home',
  components: {
    SlicesBlock,
  },
  async asyncData({ $prismic, error }) {
    try{
      // Query to get the home page content
      const homepage = (await $prismic.api.getSingle('home_page')).data
      return {
        slices: homepage.body
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style scoped>

</style>
