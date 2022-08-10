<template>
  <LoaderComponent v-if="countriesStore.isLoading" />

  <div v-else :class="$style.wrapper">
    <div :class="$style.left">
      <button :class="$style.button" @click="handleNavigateBack">Back</button>

      <img :class="$style.image" :src="selectedCountry.flags.png" alt="flag" />
    </div>

    <div :class="$style.right">
      <h2>{{ selectedCountry.name.common }}</h2>

      <div :class="$style.info">
        <span>Capital: {{ selectedCountry.capital[0] }}</span>
        <span>Sub Region: {{ selectedCountry.subregion }}</span>
        <span>Region: {{ selectedCountry.region }}</span>
        <span>Official Name: {{ selectedCountry.name.official }}</span>
        <span>Top Level Domain: {{ selectedCountry.tld[0] }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useCountriesStore } from "@/store";

import LoaderComponent from "@/components/LoaderComponent.vue";

const route = useRoute();
const router = useRouter();
const countriesStore = useCountriesStore();

const selectedCountry = computed(() => countriesStore.selected);

onBeforeMount(() => {
  countriesStore.setCountry(route.params.name);
});

const handleNavigateBack = () => {
  router.back();
};
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  gap: 200px;
  margin: auto 0;
}

.left {
  display: grid;
  gap: 50px;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

.info {
  display: grid;
  gap: 20px;
}

.button {
  width: fit-content;
  padding: 12px 24px;
  border-radius: 12px;
  outline: none;
  border: none;
  color: white;
  background-color: hsl(208, 72%, 31%);
  cursor: pointer;
}

.image {
  width: 500px;
  height: 400px;
}
</style>
