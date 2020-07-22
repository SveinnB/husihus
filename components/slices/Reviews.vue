<template>
  <v-container>
    <v-row justify="center">
      <v-card v-for="(item, index) in slice.items" :key="'review_' + index" max-width="800" class="ma-2">
        <v-card-text class="text-sm-subtitle-1">
          <prismic-rich-text :field="item.text"/>
        </v-card-text>
        <v-card-title class="text-sm-h5">{{ item.name }}</v-card-title>
        <v-card-subtitle class="text-sm-subtitle-1">{{ item.role }}</v-card-subtitle>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['slice'],
  name: 'Reviews',
}
</script>