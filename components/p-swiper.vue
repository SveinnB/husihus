<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="scale-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-carousel
          cycle
          contain
          :height="$vuetify.breakpoint.mobile ? 300 : 500"
          max-height="700"
          hide-delimiter-background
          hide-delimiters
        >
          <v-carousel-item v-for="(img, i) in images" :key="`frontImage_${i}`">
            <v-sheet height="100%">
              <v-img
                contain
                height="100%"
                :src="img.src"
                :lazy-src="img.src"
                :alt="img.alt"
                @click="open(i)"
              >
              </v-img>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </template>

      <v-card class="d-flex" color="black" rounded="0">
        <v-btn
          @click="dialog = !dialog"
          aria-label="close_nav_icon_button"
          fab
          text
          large
          class="dialog-close-button"
        >
          <v-icon size="40" color="white"> mdi-close </v-icon>
        </v-btn>
        <div class="d-flex ma-auto p-div">
          <v-container>
            <v-row>
              <v-carousel
                ref="caro"
                v-model="currentIndex"
                contain
                hide-delimiter-background
                hide-delimiters
              >
                <v-carousel-item
                  v-for="(img, i) in images"
                  :key="`InnerImage_${i}`"
                >
                  <v-img
                    contain
                    height="100%"
                    :src="img.src"
                    :lazy-src="img.src"
                    :alt="img.alt"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-carousel-item>
              </v-carousel>
            </v-row>
            <v-row justify="center" class="mt-6">
              <p class="ma-0 text-h6 white--text">{{ title }}</p>
            </v-row>
            <v-row justify="center" class="">
              <p class="ma-0 text-caption white--text">
                {{ currentIndex + 1 }} / {{ images.length }}
              </p>
            </v-row>
          </v-container>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "p-images",
  props: {
    images: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      dialog: false,
      currentIndex: 0,
    };
  },
  mounted() {
    document.addEventListener("keydown", this.onKeydown);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.onKeydown);
  },
  computed: {
    title() {
      var item = this.images[this.currentIndex];
      if (item && item.title) {
        return item.title;
      }
    },
  },
  methods: {
    open(index) {
      this.goTo(index);
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
    onKeydown(event) {
      if (event.key === "ArrowLeft") {
        this.goTo(this.currentIndex - 1);
      }
      if (event.key === "ArrowRight") {
        this.goTo(this.currentIndex + 1);
      }
    },
    goTo(i) {
      this.currentIndex = this.mod(i, this.images.length);
    },
    mod(n, m) {
      return ((n % m) + m) % m;
    },
  },
};
</script>

<style scoped>
.p-div {
  height: 100%;
  width: 100%;
}

.dialog-close-button {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
