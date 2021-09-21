<template>
  <v-container class="pa-0" width="100">
    <v-row
      v-if="slice.slice_label === 'image_right'"
      justify="space-between"
      no-gutters
    >
      <v-col cols="12" md="7" align-self="center">
        <v-row class="mx-auto">
          <prismic-rich-text :field="slice.primary.text" />
        </v-row>
      </v-col>

      <v-col cols="12" md="5" align-self="center">
        <v-row justify="center" class="ma-0">
          <v-img
            :src="slice.primary.image.url"
            :alt="slice.primary.image.alt"
            contain
            width="100%"
            height="100%"
            :max-width="slice.primary.image_max_width"
            :max-height="slice.primary.image_max_height"
          >
          </v-img>
        </v-row>
      </v-col>
    </v-row>

    <v-row v-else justify="space-between" no-gutters>
      <v-col cols="12" md="5" align-self="center">
        <v-row justify="center" class="ma-0">
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
  props: ["slice"],
  name: "TextAndImage",
};
</script>