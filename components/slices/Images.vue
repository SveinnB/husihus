<template>
  <v-container>
    <v-row justify="space-around">
       <v-img v-for="(item, imageIndex) in slice.items" :key="'img_' + imageIndex"
          :src="item.image.url"
          :alt="item.image.alt"
          contain
          class="ma-3"
          width="100%"
          height="100%"
          :max-width="slice.primary.max_width"
          :max-height="slice.primary.max_height">
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
    </v-row>

  </v-container>
</template>

<script>
export default {
  props: ['slice'],
  name: 'Images',
}
</script>