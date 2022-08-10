import { computed, ref } from "vue";
import { defineStore } from "pinia";

import { getAllCountries, getCountryByName } from "@/services/countries";
import { Country } from "@/types/countries";

export const useCountriesStore = defineStore("countries", () => {
  const list = ref<Country[]>([]);
  const isLoading = ref<boolean>(false);
  const filterCountriesName = ref<Country["name"]["common"]>("");
  const selected = ref<Country | null>(null);

  const filteredCountries = computed(() =>
    list.value.filter((country) =>
      country.name.common.includes(filterCountriesName.value)
    )
  );

  const setCountry = (name: string) => {
    if (list.value.length) {
      selected.value =
        list.value.find((country) => country.name.common === name) || null;
    } else {
      loadItem(name);
    }
  };

  const loadList = async () => {
    if (!list.value.length) {
      isLoading.value = true;

      try {
        const data = await getAllCountries();
        list.value = data.data;
      } catch (e) {
        console.error(e);
      } finally {
        isLoading.value = false;
      }
    }
  };

  const loadItem = async (name: string) => {
    isLoading.value = true;

    try {
      const data = await getCountryByName(name);
      selected.value = data.data[0];
    } catch (e) {
      console.error(e);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    list,
    isLoading,
    filteredCountries,
    filterCountriesName,
    selected,

    setCountry,
    loadList,
  };
});
