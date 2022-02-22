<template>
  <v-container>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="scale-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-row justify="center">
          <v-img
            v-for="(img, i) in images"
            :key="'p_swiper_img_' + i"
            :src="img.src"
            :lazy-src="img.src"
            :alt="img.alt"
            class="ma-3 elevation-7"
            width="100%"
            height="100%"
            :aspect-ratio="aspectRatio"
            :max-width="slice.primary.max_width"
            :max-height="slice.primary.max_height"
            @click="open(i)"
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
            <v-row justify="center" class="mt-6" height="30">
              <v-sheet color="transparent" height="40">
                <p class="ma-0 text-h6 white--text">{{ title }}</p>
              </v-sheet>
            </v-row>
            <v-row justify="center">
              <v-sheet color="transparent" height="30">
                <p class="ma-0 text-caption white--text">
                  {{ currentIndex + 1 }} / {{ images.length }}
                </p>
              </v-sheet>
            </v-row>
          </v-container>
        </div>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  props: ["slice"],
  name: "ImageGalleryPSwiper",
  data() {
    return {
      dialog: false,
      images: [],
      currentIndex: 0,
      aspectRatio: null,
    };
  },
  created() {
    if (this.slice && this.slice.items) {
      this.slice.items.forEach((item) => {
        const img = {
          title: item.image_title,
          description: item.image_description,
          src: item.image.url,
          alt: item.image.alt,
          w: item.image.dimensions.width,
          h: item.image.dimensions.height,
        };
        if (this.slice.primary.use_alt_for_title) {
          let altList = [];
          if (img.alt !== null) {
            altList = img.alt.split("\n");
          }
          if (img.title === null && img.alt !== null) {
            if (altList.length > 0) {
              img.title = altList[0];
            }
          }
          if (img.description === null && img.alt !== null) {
            if (altList.length > 1) {
              img.description = altList[1];
            }
          }
        }
        this.images.push(img);
      });
    }
    if (this.isNumber(this.slice.primary.aspect_ratio)) {
      const ar = Number.parseFloat(this.slice.primary.aspect_ratio).toFixed(4);
      if (ar > 0 && ar < 10) {
        this.aspectRatio = ar;
      }
    }
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
    isNumber(string) {
      try {
        Number.parseFloat(string).toFixed(4);
        return true;
      } catch (e) {
        return false;
      }
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
