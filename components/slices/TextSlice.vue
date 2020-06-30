<template>
  <prismic-rich-text :field="slice.primary.rich_text" :class="alignment"/>
</template>

<script>
export default {
  props: ['slice'],
  name: 'text-slice',
  computed: {
    alignment: function(){
      if(this.slice.slice_label === 'center_text'){
        return 'text-center';
      }
      else{
        return 'text-left';
      }
    }
  }

}
</script>

