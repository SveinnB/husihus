<template>
  <div>
    <!-- Slice section template -->
    <section
      v-for="(slice, index) in slices"
      :key="'slice-' + index"
      class="my-10 d-flex justify-center"
    >
      <!-- Text slice component -->
      <template v-if="slice.slice_type === 'text_section'">
        <text-slice :slice="slice" />
      </template>

      <template v-else-if="slice.slice_type === 'lightbox_gallery'">
        <ImageGalleryPSwiper :slice="slice" />
      </template>

      <template v-else-if="slice.slice_type === 'text_and_image'">
        <TextAndImage :slice="slice" />
      </template>

      <template v-else-if="slice.slice_type === 'employees'">
        <Employess :slice="slice" />
      </template>

      <template v-else-if="slice.slice_type === 'reviews'">
        <Reviews :slice="slice" />
      </template>

      <template v-else-if="slice.slice_type === 'images'">
        <Images :slice="slice" />
      </template>

      <template v-else-if="slice.slice_type === 'focus_list'">
        <FocusList :slice="slice" />
      </template>
    </section>
  </div>
</template>

<script>
// Imports for all slices
const TextSlice = () => import("./slices/TextSlice.vue");
const TextAndImage = () => import("./slices/TextAndImage.vue");
const Images = () => import("./slices/Images.vue");
const Reviews = () => import("./slices/Reviews.vue");
const Employess = () => import("./slices/Employess.vue");
const FocusList = () => import("./slices/FocusList.vue");
const ImageGalleryPSwiper = () => import("./slices/ImageGalleryPSwiper.vue");

export default {
  props: ["slices"],
  name: "slices-block",
  components: {
    TextSlice,
    TextAndImage,
    Images,
    Reviews,
    Employess,
    FocusList,
    ImageGalleryPSwiper,
  },
};
</script>
