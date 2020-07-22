<template>
  <v-container class="pa-0">
    <v-row justify="center" align="center" no-gutters>
      <template v-for="(item, index) in slice.items">
        <v-col :key="'word_' + index" cols="12" xs="12" sm="6" md="4">
          <p class="text-subtitle-1 text-center my-2">
            {{ item.word }}
          </p>
      </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['slice'],
  name: 'FocusList'
}
</script>

