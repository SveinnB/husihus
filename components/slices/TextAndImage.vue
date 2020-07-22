<template>
  <v-container>
    
    <v-row v-if="slice.slice_label === 'image_right'" justify="center">
      
      <v-col cols="12" md="7" align-self="center">
        <v-row justify="center" class="mx-auto">
          <prismic-rich-text :field="slice.primary.text" class="mr-5" />
        </v-row>
      </v-col>

      <v-col cols="12" md="5" align-self="center">
        <v-row justify="center">
          <v-img
          :src="slice.primary.image.url"
          :alt="slice.primary.image.alt"
          width="100%"
          height="100%"
          :max-width="slice.primary.image_max_width"
          :max-height="slice.primary.image_max_height"
          >
          </v-img>
        </v-row>
      </v-col>

    </v-row>
    <v-row v-else>

      <v-col cols="12" md="5" align-self="center">
        <v-row justify="center">
          <v-img
          contain
          :src="slice.primary.image.url"
          :alt="slice.primary.image.alt"
          width="100%"
          height="100%"
          :max-width="slice.primary.image_max_width"
          :max-height="slice.primary.image_max_height"
          >
          </v-img>
        </v-row>
      </v-col>

      <v-col cols="12" md="7" align-self="center">
        <v-row justify="center" class="mx-auto">
          <prismic-rich-text :field="slice.primary.text" />
        </v-row>
      </v-col>

    </v-row>

  </v-container>
</template>

<script>
export default {
  props: ['slice'],
  name: 'TextAndImage',
}
</script>