<template>
  <v-container class="">
    <h1>Hobbíhús</h1>

    <p class="text-subtitle-1">Fullsmíðuð og tilbúin til flutnings</p>

    <v-carousel
      class="my-3"
      cycle
      height="5%"
      contain
      hide-delimiter-background
      hide-delimiters
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(img, i) in images" :key="i">
        <v-sheet height="100%" class="preview-img-item">
          <v-img
            contain
            :max-height="400"
            :src="img.src"
            @click="$photoswipe.open(i, images)"
          >
          </v-img>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-row class="ma-0" justify="center">
      <p class="my-6 text-subtitle-1 font-weight-bold text-center">
        Golfbílahús – Garðhús – Gestahús eða eitthvað allt annað.
      </p>
    </v-row>

    <p>
      Við smíðum smáhýsi eftir pöntunum til ýmissa nota. Við getum afhent húsin
      á því byggingarstigi sem óskað er eftir. Stærð, lögun, klæðning, hurðar,
      gluggar og fleira fer eftir óskum kaupanda. Húsin eru rammgerð, byggð úr
      fyrsta flokks efni fyrir íslenskar aðstæður og munu endast um ókomna tíð.
      Húsin eru smíðuð í Reykjavík af reyndum smiðum.
    </p>

    <p>
      Við gerum þér tilboð í hús eins og þú vilt hafa það. Við getum aðstoða þig
      frá upphafi til enda og svarað spurningum sem kunna að vakna, eins og t.d.
      um byggingareglugerðir, teikningar, leyfi, efni, niðursetningu,
      verðsamanburð og fl.
    </p>

    <p>
      Að Viðarhöfða stendur fullbúið sýningarhús sem er 15m2 óskráningarskylt
      golfbílahús sem staðsetja má utan byggingarreits. Húsið er með rafmagni,
      inniljósum, útiljósum, ofni, golfdúk, hallandi þaki og álklæðningu. Það er
      fullsmíðað og tilbúið til niðursetningar.
    </p>

    <p>
      Húsið er klætt að utan með dökkgrárri álklæðningu frá Áltak. Hvít
      bílskúrshurð með gluggum að framan og inngangshurð með glugga á langvegg.
      Tvö útiljós. Að innan er húsið allt klætt með rakavörðum spónarplötum og
      veggir málaðir hvítir. Vatnsheldur dúkur er á gólfum. Rafmagn hefur verið
      lagt í húsið. Innandyra er ofn og tvö inniljós. Rafmagn er utanáliggjandi.
    </p>

    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header class="text-subtitle-1">
          Skilalýsing á sýningarhúsi
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <p class="ma-0 my-3 text-h6">Þak</p>
          <v-simple-table dense>
            <template v-slot:default>
              <tbody>
                <tr v-for="(item, i) in þak" :key="i">
                  <td>{{ i + 1 }} - {{ item.text }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>

          <p class="ma-0 my-3 text-h6">Útveggir</p>
          <v-simple-table dense>
            <template v-slot:default>
              <tbody>
                <tr v-for="(item, i) in utveggir" :key="i">
                  <td>{{ i + 1 }} - {{ item.text }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <p class="ma-0 my-3 text-h6">Gólf</p>
          <v-simple-table dense>
            <template v-slot:default>
              <tbody>
                <tr v-for="(item, i) in golf" :key="i">
                  <td>{{ i + 1 }} - {{ item.text }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <p class="ma-0 my-3 text-h6">Hurðir og gluggar</p>
          <v-simple-table dense>
            <template v-slot:default>
              <tbody>
                <tr v-for="(item, i) in hurdir" :key="i">
                  <td>{{ i + 1 }} - {{ item.text }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <p class="ma-0 my-3 text-h6">Lagnir (allar lagnir utanáliggjandi)</p>
          <v-simple-table dense>
            <template v-slot:default>
              <tbody>
                <tr v-for="(item, i) in lagnir" :key="i">
                  <td>{{ i + 1 }} - {{ item.text }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-row justify="end" class="ma-0 mt-3">
      <p class="ma-0">Verð 4.434.697 kr. með vsk</p>
    </v-row>
    <v-row justify="end" class="ma-0 mb-5">
      <p class="ma-0 text-caption">Verð á fermeter (m2) 295.646 kr. með vsk</p>
    </v-row>

    <p>
      Sýningarhúsið er klætt með áli sem er töluvert dýrara en tréklæðning.
      Einnig eru gluggar í bílskúrshurð og inngangshurð. Gólf eru fullbúin með
      vatnsheldum vínildúki en ef sambærilegt hús á að standa á steyptum grunni
      breytast forsendur.
    </p>

    <p>Hugmyndir að útfærslum</p>

    <v-card class="mb-6">
      <v-card-title>Hugmynd 1</v-card-title>
      <v-card-text>
        <p class="black--text">
          15 fm Hobbí hús frá Hús í hús með hallandi þaki og bandsagaðri
          furuklæðningu, málað að ósk kaupanda. Fokhelt að innan, óeinangrað með
          trégólfi, bílskúrshurð með gluggum og inngangshurð með gluggum.
        </p>
        <v-row justify="end" class="ma-0">
          <p class="ma-0">Verðhugmynd 3.119.728 kr. með vsk</p>
        </v-row>
        <v-row justify="end" class="ma-0">
          <p class="ma-0 text-caption">
            Verð á fermeter (m2) 207.982 kr. með vsk
          </p>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card class="mb-6">
      <v-card-title>Hugmynd 2</v-card-title>
      <v-card-text>
        <p class="black--text">
          15 fm Hobbí hús frá Hús í hús með hallandi þaki og bandsagaðri
          furuklæðningu, málað að ósk kaupanda. Einangrað loft, gólf og veggir.
          Rakavarðar spónaplötur í loftum á innveggjum og í gólfi. Veggir og
          loft grunnað og málað. Bílskúrshurð með gluggum og inngangshurð með
          gluggum.
        </p>
        <v-row justify="end" class="ma-0">
          <p class="ma-0">Verðhugmynd 3.797.679 kr. með vsk</p>
        </v-row>
        <v-row justify="end" class="ma-0">
          <p class="ma-0 text-caption">
            Verð á fermeter (m2) 253.179 kr. með vsk
          </p>
        </v-row>
      </v-card-text>
    </v-card>

    <p class="ma-0 font-italic">
      Verðhugmyndir byggja á skilalýsingu og efnisvali sýningarhúss en í þessum
      dæmum eru húsin klædd með bandsagaðri furu í stað álbáru. Rafmagn, ljós og
      gólfdúkur er ekki innifalið í þessum dæmum.
    </p>

    <v-row class="ma-0 mt-8 mb-3" justify="center">
      <p class="ma-0 text-h5 text-uppercase text-center">
        Það skal vanda sem lengi á að standa
      </p>
    </v-row>
  </v-container>
</template>

<script>
import readSEO from "~/helper/ReadSEO";

export default {
  name: "Hobbihus",
  head() {
    return {
      title: this.$prismic.asText(this.titleHead),
      meta: readSEO(this.body),
    };
  },
  async asyncData({ $prismic, error }) {
    try {
      const document = (await $prismic.api.getByUID("page", "hobbihus")).data;
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
  created() {
    const lightboxSlice = this.slices.find(
      (x) => x.slice_type === "lightbox_gallery"
    );

    if (lightboxSlice && lightboxSlice.items) {
      lightboxSlice.items.forEach((item) => {
        const img = {
          title: item.image_title,
          description: item.image_description,
          src: item.image.url,
          alt: item.image.alt,
          w: item.image.dimensions.width,
          h: item.image.dimensions.height,
        };
        if (lightboxSlice.use_alt_for_title) {
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
  },
  data() {
    return {
      images: [],
      þak: [
        {
          text: "Tvöfalt lag af þakpappa, undirlag skrúfað og brætt saman á samskeitum og yfirlag heilbrætt",
        },
        {
          text: "25x125mm þakklæðning",
        },
        {
          text: "25mm loftunarbil",
        },
        {
          text: "Sperrur 45x145mm",
        },
        {
          text: "Einangrun þéttull 120mm",
        },
        {
          text: "Rakasperruplast",
        },
        {
          text: "Nótaðar vatnsvarðar spónaplötur",
        },
        {
          text: "Málning",
        },
      ],
      utveggir: [
        {
          text: "Smábáruál",
        },
        {
          text: "21x45 lektur undir klæðningu",
        },
        {
          text: "Öndunardúkur",
        },
        {
          text: "Krossviður – 9mm",
        },
        {
          text: "Timburgrind - 45x125mm",
        },
        {
          text: "Einangrun – 120mm þéttull",
        },
        {
          text: "Rakasperruplast",
        },
        {
          text: "Rakavarðar nótaðar spónaplötur",
        },
        {
          text: "Málning",
        },
      ],
      golf: [
        {
          text: "Gólfefni, niðurlímdur vínildúkur",
        },
        {
          text: "Gólfplötur – 22mm vatnsvarðar spónaplötur",
        },
        {
          text: "Rakasperruplast",
        },
        {
          text: "Timburgrind 45x145mm",
        },
        {
          text: "Einangrun 145mm þéttull",
        },
        {
          text: "Músanet undir öllu húsinu",
        },
      ],
      hurdir: [
        {
          text: "Bílskúrshurð Hvít ljósmál 1800x2100mm / með gluggum",
        },
        {
          text: "Inngangshurð timbur ljósmál 750x2050mm / með glugga",
        },
      ],
      lagnir: [
        {
          text: "Rafmagnstafla með lekaliða og 3 öryggjum",
        },
        {
          text: "Útiljós yfir bílskúrshurð og inngang, LED",
        },
        {
          text: "Inniljós 1stk LED",
        },
        {
          text: "Tvöfaldur utanáliggjandi rofi 1stk",
        },
        {
          text: "Tvöfaldir utanáliggjandi tenglar 2stk",
        },
        {
          text: "Rafmagnsofn 600W",
        },
      ],
    };
  },
};
</script>
