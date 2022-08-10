<template>
  <router-link
    :to="{ name: 'item', params: { name: item.name.common } }"
    :class="$style.wrapper"
  >
    <img :class="$style.image" :src="item.flags.png" alt="flag" />

    <div :class="$style.description">
      <h3>{{ item.name.common }}</h3>

      <div :class="$style.info">
        <span>Population: {{ formattedPopulation }}</span>

        <span>Region: {{ item.region }}</span>

        <span>Capital: {{ item.capital?.[0] }}</span>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts" setup>
import { defineProps, PropType, computed } from "vue";

import { Country } from "@/types/countries";

const props = defineProps({
  item: {
    type: Object as PropType<Country>,
    required: true,
  },
});

const formattedPopulation = computed(() =>
  props.item.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
);
</script>

<style lang="scss" module>
.wrapper {
  background-color: hsl(209, 23%, 22%);
  color: white;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  }
}

.image {
  width: 100%;
  height: 150px;
}

.description {
  display: grid;
  padding: 24px 16px;
}

.info {
  display: inherit;
}
</style>
