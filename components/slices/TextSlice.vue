<template>
  <v-row :justify="alignment.justify" no-gutters>
    <prismic-rich-text :field="slice.primary.rich_text" :class="alignment.class"/>
  </v-row>
</template>

<script>
export default {
  props: ['slice'],
  name: 'text-slice',
  computed: {
    alignment: function(){
      if(this.slice.slice_label === 'center_text'){
        return {
          justify: 'center',
          class: 'text-center'
        }
      }
      else{
        return {
          justify: 'start',
          class: 'text-left'
        }
      }
    }
  }
}
</script>


<style scoped>
.rich_text_style{
  max-width: 800px;
}
</style>

