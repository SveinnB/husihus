<template>
  <v-container>
    <v-row justify="center">
      <v-card v-for="(item, index) in slice.items" :key="'review_' + index" class="ma-3">
        <v-card-text>
          <prismic-rich-text :field="item.text"/>
        </v-card-text>
        <v-card-title>{{ item.name }}</v-card-title>
        <v-card-subtitle>{{ item.role }}</v-card-subtitle>
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