<template>
  <div>
    <v-container>
      <v-row justify="space-around">
        <v-img
          src="husihus_logo.png"
          lazy-src="husihus_logo.png"
          alt="Hús í hús ehf. logo"
          contain
          class="ma-3"
          width="100%"
          height="100%"
          :max-width="600"
          :max-height="300"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-row>
    </v-container>
    <slices-block :slices="slices" />
  </div>
</template>

<script>
import SlicesBlock from "~/components/SlicesBlock.vue";
import readSEO from "~/helper/ReadSEO";

export default {
  name: "Home",
  components: {
    SlicesBlock,
  },
  head() {
    return {
      title: this.$prismic.asText(this.titleHead),
      meta: readSEO(this.body),
    };
  },
  async asyncData({ $prismic, error }) {
    try {
      const document = (await $prismic.api.getByUID("page", "homepage")).data;
      return {
        // Set slices as variable
        slices: document.page_content,
        title: document.page_title,
        titleHead: document.head_title,
        body: document.body,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>
