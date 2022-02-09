<template>
  <div>
    <v-divider></v-divider>

    <v-row justify="center" align="center" class="my-3">
      <v-spacer></v-spacer>

      <v-col cols="12" md="4">
        <v-row justify="center" align="center">
          <div>
            <v-row>
              <p class="ma-0 title text_align_phone padding_top_phone">
                Hús í hús ehf.
              </p>
            </v-row>
            <v-row>
              <p class="ma-0 caption text_align_phone">kt: 450612-1890</p>
            </v-row>
            <v-row>
              <a class="mt-2 black--text" href="mailto:husihus@husihus.is">
                <v-icon color="primary">mdi-email-outline</v-icon>
                husihus@husihus.is
              </a>
            </v-row>
            <v-row>
              <a
                class="mt-2 black--text"
                href="https://www.google.com/maps/place/Kr%C3%B3kh%C3%A1ls+6,+Reykjav%C3%ADk/@64.1212896,-21.7937461,488m/data=!3m2!1e3!4b1!4m5!3m4!1s0x48d67384975b1623:0xe54b7aada345b27!8m2!3d64.1212873!4d-21.7915574"
                target="_blank"
                rel="noopener noreferrer"
              >
                <v-icon color="primary">mdi-map-marker-outline</v-icon>
                Krókháls 6, 110 Reykjavík
              </a>
            </v-row>
            <v-row>
              <a class="mt-2 black--text" href="tel:+354 859 5900">
                <v-icon color="primary">mdi-phone-outline</v-icon>
                859-5900
              </a>
            </v-row>
          </div>
        </v-row>
      </v-col>

      <v-col cols="6" md="4">
        <a
          href="https://www.si.is/byggingar-og-mannvirki/mh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-img
            src="/mfh_logo.png"
            alt="Meistarafélag húsasmiða logo"
            contain
            :max-height="150"
          >
          </v-img>
        </a>
      </v-col>

      <v-col cols="6" md="4">
        <a href="https://www.si.is/" target="_blank" rel="noopener noreferrer">
          <v-img
            src="/si_logo.png"
            alt="Samtök iðnaðarins logo"
            contain
            :max-height="100"
          >
          </v-img>
        </a>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
