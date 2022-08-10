<template>
  <filter-component v-model="countriesStore.filterCountriesName" />

  <LoaderComponent v-if="countriesStore.isLoading" />

  <list-component v-else :data="countriesStore.filteredCountries" />
</template>

<script lang="ts" setup>
import { onBeforeMount } from "vue";

import { useCountriesStore } from "@/store";

import FilterComponent from "@/components/FilterComponent.vue";
import ListComponent from "@/components/ListComponent.vue";
import LoaderComponent from "@/components/LoaderComponent.vue";

const countriesStore = useCountriesStore();

onBeforeMount(() => {
  countriesStore.loadList();
});
</script>
