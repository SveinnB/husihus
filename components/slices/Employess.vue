<template>
  <v-container>
    <v-row justify="center" class="">
      <v-card
        v-for="(item, index) in slice.items"
        :key="index"
        class="ma-3"
        width="380"
      >
        <v-card-title class="text-subtitle-2 text-sm-h5">{{
          item.name
        }}</v-card-title>
        <v-card-subtitle class="text-body-2 text-sm-subtitle-1">{{
          item.role
        }}</v-card-subtitle>
        <v-card-text>
          <div class="mb-2 text-body-2 text-sm-subtitle-1">
            <a :href="`mailto:${item.email}`" class="black--text">
              <v-icon class="mr-2" color="primary">mdi-email-outline</v-icon
              >{{ item.email }}
            </a>
          </div>
          <div>
            <a
              :href="`tel:+354 ${item.phone}`"
              class="black--text text-body-2 text-sm-subtitle-1"
            >
              <v-icon class="mr-2" color="primary">mdi-phone-outline</v-icon
              >{{ formatPhoneNumber(item.phone) }}
            </a>
          </div>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["slice"],
  name: "Employess",
  methods: {
    formatPhoneNumber(number) {
      const temp = number.replace(" ", "").replace("-", "");
      return temp.substring(0, 3) + " " + temp.substring(3);
    },
  },
};
</script>