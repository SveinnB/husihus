<template>
  <v-app-bar app color="white" :height="70" :elevation="3">
    <nuxt-link to="/">
      <v-img
        src="/husihusLogo02.png"
        alt="logo"
        contain
        :max-height="40"
        :max-width="50"
      >
      </v-img>
    </nuxt-link>

    <v-spacer></v-spacer>

    <nav class="hidden-md-and-down">
      <v-tabs right>
        <v-tabs-slider color="transparent"></v-tabs-slider>
        <v-tab
          v-for="(item, index) in navList"
          :key="'tab_' + index"
          nuxt
          :to="item.to"
        >
          {{ item.name }}
        </v-tab>
      </v-tabs>
    </nav>

    <v-btn
      @click="dialog = !dialog"
      aria-label="hamburger_nav_icon_button"
      fab
      text
      class="transparent hidden-lg-and-up ma-3 pa-2"
    >
      <v-icon size="40" class=""> mdi-menu </v-icon>
    </v-btn>

    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <div
        style="height: 100%; background-color: white; overflow: auto"
        class="d-flex flex-column"
      >
        <v-btn
          @click="dialog = !dialog"
          aria-label="close_nav_icon_button"
          fab
          text
          class="transparent ma-3 pa-2 dialog_close"
        >
          <v-icon size="40"> mdi-close </v-icon>
        </v-btn>

        <div class="ma-auto yellow">
          <nav class="red">
            <v-tabs vertical>
              <v-tabs-slider color="transparent"></v-tabs-slider>
              <v-tab
                v-for="(item, index) in navList"
                :key="'tab_' + index"
                nuxt
                :to="item.to"
                class="ma-3 text-h5"
                @click="dialog = false"
              >
                {{ item.name }}
              </v-tab>
            </v-tabs>
          </nav>
        </div>
      </div>
    </v-dialog>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      dialog: false,
      navList: [
        {
          name: "Forsíða",
          to: "/",
        },
        {
          name: "Um okkur",
          to: "/um-okkur",
        },
        {
          name: "Verkefni",
          to: "/verkefni",
        },
        {
          name: "Hobbíhús",
          to: "/hobbihus",
        },
        {
          name: "Hafa samband",
          to: "/hafa-samband",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.dialog_close {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
