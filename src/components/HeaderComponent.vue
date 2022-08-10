<template>
  <header :class="$style.wrapper">
    <router-link to="/" :class="$style.link">
      <slot>
        <h1>Where in the world?</h1>
      </slot>
    </router-link>
  </header>
</template>

<style lang="scss" module>
.wrapper {
  padding: 16px 32px;
  background-color: hsl(209, 23%, 22%);
  color: white;
}

.link {
  text-decoration: none;
  color: white;
}
</style>
