<template>
  <label for="" class="input-block">
    <small v-if="$attrs.label" class="input-block__small text--scale--6">{{ $attrs.label }}</small>
    <div class="input-block__wrapper" tabindex="1">
      <svg  class="input__icon" v-svg="'email'" width="16" height="12"></svg>

    <input tabindex="0" v-bind="$attrs" class="input-block__input text--body">
      </div>

  </label>
</template>

<script setup>
const props = defineProps();
</script>

<style lang="scss">
.input-block {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: column;
  width: 320px;

  &__wrapper {

    height: 42px;
  }
  &__input{
    width:100%;
    height:100%;
    padding: 10px 20px;
    border-radius: $border-radius;
    background: $color-1-g;
    border: 1px solid $color-1-d;
    border-radius: $border-radius;
    &::placeholder {

      color: $color-1-c;
    }
  }
}
</style>