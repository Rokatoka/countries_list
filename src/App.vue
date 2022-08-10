<template>
  <header-component />

  <main :class="$style.wrapper">
    <router-view />
  </main>
</template>

<script lang="ts" setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 60px;
  min-height: calc(100vh - 158px);
  padding: 24px 42px;
  background-color: hsl(207, 26%, 17%);
}
</style>
