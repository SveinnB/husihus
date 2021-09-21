<template>
  <v-container>
    <v-form
      ref="form"
      v-model="formValid"
      lazy-validation
      name="husihus"
      action="/takk"
      method="POST"
      enctype="multipart/form-data"
      data-netlify="true"
      netlify-honeypot="bot-field-sbb"
      @submit="Submit"
    >
      <input type="hidden" name="form-name" value="husihus" />

      <p class="d-none">
        <label
          >Don’t fill this out if you're human: <input name="bot-field-sbb"
        /></label>
      </p>

      <v-row class="mb-2">
        <v-text-field
          :rules="nameRules"
          label="Nafn"
          name="Nafn"
          type="text"
          required
        ></v-text-field>
      </v-row>

      <v-row class="my-2">
        <v-text-field
          :rules="emailRules"
          label="Netfang"
          type="email"
          name="Netfang"
          required
        >
        </v-text-field>
      </v-row>

      <v-row class="my-2">
        <v-text-field
          :rules="phoneRules"
          label="Símanúmer"
          type="tel"
          name="Símanúmer"
          required
        ></v-text-field>
      </v-row>

      <v-row class="my-2">
        <v-col cols="12" class="pa-0" no-gutters>
          <p class="ma-0 pa-0 subtitle-1">Hvaða þjónustu óskar þú eftir?</p>
        </v-col>
        <v-row no-gutters>
          <v-col
            v-for="(item, index) in serviceList"
            :key="'service_' + index"
            cols="12"
            sm="6"
            md="3"
            class="ma-0 mt-3"
          >
            <v-checkbox
              class="ma-0"
              :name="item.name"
              :label="item.name"
              :value="item.value"
            ></v-checkbox>
          </v-col>
        </v-row>
      </v-row>

      <v-row class="my-2">
        <v-text-field
          label="Verkstaður/Heimilisfang ef við á"
          type="text"
        ></v-text-field>
      </v-row>

      <v-row class="my-2">
        <v-text-field
          label="Kennitala greiðanda ef við á"
          type="text"
          name="Kennitala"
          required
        ></v-text-field>
      </v-row>

      <v-row class="my-2">
        <v-textarea
          name="Lýsing"
          label="Fyrirspurn/Lýsing"
          :rules="descriptionRules"
          required
        ></v-textarea>
      </v-row>

      <v-row class="my-2">
        <v-col cols="12" class="pa-0" no-gutters>
          <p class="ma-0 pa-0 subtitle-1">
            Þú getur sent okkur myndir og skjöl sem tengjast málinu
          </p>
        </v-col>

        <v-col
          cols="12"
          class="ma-0 pa-0"
          v-for="(item, index) in fileList"
          :key="'colfile_' + index"
        >
          <v-file-input
            :prepend-icon="item.icon"
            :name="`Skrá ${index + 1}`"
            show-size
            :class="item.class"
            :label="`Skrá ${index + 1}`"
            @change="selectFile(index, $event)"
            type="file"
          >
          </v-file-input>
        </v-col>
      </v-row>

      <v-row justify="end">
        <v-btn
          :disabled="!formValid"
          color="primary"
          outlined
          :loading="submitLoading"
          type="submit"
        >
          Senda
        </v-btn>
      </v-row>

      <v-snackbar v-model="snackbar" top color="error">
        <p class="ma-0 text-center">Ekki allir reitir rétt útfylltir 🤔</p>
      </v-snackbar>

      <v-dialog v-model="dialog" :max-width="600" persistent>
        <v-card>
          <v-card-title>
            <v-row justify="center"> 😎 Skilaboð farin af stað 🛫 </v-row>
          </v-card-title>
          <v-card-text class="text--primary">
            <v-progress-linear
              indeterminate
              color="primary"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-form>
  </v-container>
</template>

<script>
import mimelist from "~/assets/mimetype.json";

export default {
  name: "ContactForm",
  data() {
    return {
      serviceList: [
        {
          name: "Almenn fyrirspurn",
          value: "Já",
        },
        {
          name: "Fundarbeiðni",
          value: "Já",
        },
        {
          name: "Verkbeiðni",
          value: "Já",
        },
        {
          name: "Tilboðsgerð",
          value: "Já",
        },
        {
          name: "Hobbíhús",
          value: "Já",
        },
      ],
      dialog: false,
      snackbar: false,
      submitLoading: false,
      formValid: false,
      nameRules: [(v) => !!v || "Við þurfum að fá nafn"],
      emailRules: [
        (v) => !!v || "Við þurfum að fá netfang",
        (v) => /.+@.+\..+/.test(v) || "Þetta er ekki löglegt netfang",
      ],
      phoneRules: [
        (v) => !!v || "Við þurfum að fá símanúmer",
        (v) =>
          (v && v.replace(/ /g, "").replace(/-/g, "").length >= 7) ||
          "Símanúmer er að minnsta kosti 7 tölustafir",
        (v) =>
          /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(v) ||
          "Þetta er ekki símanúmer",
      ],
      descriptionRules: [(v) => !!v || "Segðu okkur um hvað málið snýst"],
      maxFiles: 3,
      fileList: [],
      fileObject: {
        class: "d-none",
        icon: "mdi-paperclip",
      },
    };
  },
  created() {
    for (let i = 0; i < this.maxFiles; i++) {
      // the fastest clone technique
      let item = JSON.parse(JSON.stringify(this.fileObject));
      if (i === 0) {
        item.class = "";
      }
      this.fileList.push(item);
    }
  },
  mounted() {},
  methods: {
    validate() {
      return this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    selectFile(index, file) {
      if (file) {
        if (index !== this.maxFiles - 1) {
          this.fileList[index + 1].class = "";
        }
        this.fileList[index].icon = this.getFileIcon(file.type);
      } else {
        this.fileList[index].icon = "mdi-paperclip";
      }
    },
    getFileIcon(type) {
      const defaultIcon = "mdi-file-outline";
      if (!type) return defaultIcon;

      const list = mimelist.mimelist;
      for (let i = 0; i < list.length; i++) {
        if (list[i].mimeTypes.includes(type)) {
          return list[i].icon;
        }
      }
      if (type.includes("image")) {
        return "mdi-image-outline";
      }
      return defaultIcon;
    },
    Submit(e) {
      if (!this.validate()) {
        this.snackbar = true;
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      this.submitLoading = true;
      this.dialog = true;
    },
  },
};
</script>
