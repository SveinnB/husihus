<template>
  <div>
    <v-divider></v-divider>
    <p v-if="$store.state.footer === 'Please create a footer document'">{{ footer }}</p>
    
    <v-row justify="center" align="center" class="my-3">
      <v-spacer></v-spacer>

      <template v-for="(item, index) in $store.state.footer.company_list">
        <v-col :key="index" cols="12" md="4">
          <v-row justify="center" align="center">
            <div>
              <v-row>
                <p class="ma-0 title  text_align_phone padding_top_phone">{{ item.name }}</p>
              </v-row>
              <v-row>
                <p class="ma-0 caption  text_align_phone">kt: {{ item.kt }}</p>
              </v-row>
              <v-row>
                <prismic-link :field="item.email_link" class="mt-2 black--text">
                  <v-icon>mdi-email</v-icon>
                  {{ item.email_label }}
                </prismic-link>
              </v-row>
              <v-row>
                <prismic-link :field="item.address_link" class="mt-2 black--text">
                  <v-icon>mdi-map-marker</v-icon>
                  {{ item.address_label }}
                </prismic-link>
              </v-row>
              <v-row>
                <prismic-link :field="item.phone_link" class="mt-2 black--text">
                  <v-icon>mdi-phone</v-icon>
                  {{ item.phone_label }}
                </prismic-link>
              </v-row>
            </div>
          </v-row>
        </v-col>
        <v-spacer :key="`spacer_${index}`"></v-spacer>
      </template>

    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>
