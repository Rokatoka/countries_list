<template>
  <div :class="$style.wrapper">
    <input
      :class="$style.input"
      :value="modelValue"
      placeholder="Search for a country..."
      @input="handleUpdateInput"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["update:modelValue"]);

const handleUpdateInput = (e) => {
  emits("update:modelValue", e.target.value);
};
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  justify-content: space-between;
}

.input {
  padding: 16px;
  background-color: #21333dff;
  color: white;
  outline: none;
  border: 1px solid black;
}
</style>
