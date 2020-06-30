<template>
  <v-container class="">
    <v-row justify="center">
       <v-img v-for="(item, imageIndex) in items" :key="'lightbox_img_' + imageIndex"
          :src="item.src"
          :alt="item.alt"
          class="ma-3 elevation-5"
          width="100%"
          height="100%"
          :aspect-ratio="aspectRatio"
          :max-width="slice.primary.max_width"
          :max-height="slice.primary.max_height"
          @click="index = imageIndex">
        </v-img>
    </v-row>

    <CoolLightBox 
      :items="items" 
      :index="index"
      @close="index = null">
    </CoolLightBox>

  </v-container>
</template>

<script>
export default {
  props: ['slice'],
  name: 'ImageGalleryCoolLightBox',
  data() {
    return {
      items: [],
      index: null,
      aspectRatio: null,
    };
  },
  created() {
    if(this.slice && this.slice.items){
      this.slice.items.forEach(item => {
        const img = {
          title: item.image_title,
          description: item.image_description,
          src: item.image.url,
          alt: item.image.alt
        }
        this.items.push(img);
      });
    }
    if(this.isNumber(this.slice.primary.aspect_ratio)){
      const ar = parseInt(this.slice.primary.aspect_ratio, 10);
      if(ar > 0 && ar < 10 ){
        this.aspectRatio = ar;
      }
    }
  },
  methods: {
    isNumber(string){
      try{
        const number = parseInt(string, 10);
        return true;
      }
      catch (e) {
        return false;
      }
    }
  }
}
</script>