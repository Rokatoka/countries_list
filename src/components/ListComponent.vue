<template>
  <div :class="$style.wrapper">
    <country-component
      v-for="country in data"
      :key="country.name"
      :item="country"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from "vue";

import { Country } from "@/types/countries";
import CountryComponent from "@/components/CountryComponent.vue";

defineProps({
  data: {
    type: Array as PropType<Country[]>,
    default: () => [],
  },
});
</script>

<style lang="scss" module>
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 20px;
  justify-content: center;
}
</style>
