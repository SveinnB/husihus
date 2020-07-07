<template>
  <v-container>
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
        if(this.slice.primary.use_alt_for_title){
          let altList = [];
          if(img.alt !== null){
            altList = img.alt.split("\n");
          }
          if(img.title === null && img.alt !== null){
            if(altList.length > 0){
              img.title = altList[0];
            }
          }
          if(img.description === null && img.alt !== null){
            if(altList.length > 1){
              img.description = altList[1];
            }
          }
        }
        this.items.push(img);
      });
    }
    if(this.isNumber(this.slice.primary.aspect_ratio)){
      const ar = Number.parseFloat(this.slice.primary.aspect_ratio).toFixed(4);
      if(ar > 0 && ar < 10 ){
        this.aspectRatio = ar;
      }
    }
  },
  methods: {
    isNumber(string){
      try{
        const number = Number.parseFloat(string).toFixed(4);
        return true;
      }
      catch (e) {
        return false;
      }
    }
  }
}
</script>