<template>
  <button class="button text--button">
<slot>Выполнить</slot>
  </button>
</template>


<style lang="scss" scoped>
.button{
  background: white;
  border: 2px solid $color-2-c;
  padding: 0 16px;
  height: 48px;
  border-radius: 12px;

  &.size{
    &--big{
      padding: 0 48px;
      height: 56px;
    }
    &--small{
      height: 36px;
      padding: 0 12px;
    }
  }
}
</style>