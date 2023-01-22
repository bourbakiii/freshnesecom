<template>
  <button class="button text--button">
<slot>Выполнить</slot>
  </button>
</template>


<style lang="scss" scoped>
.button{
  background: white;
  height: 56px;
  border: 2px solid $color-2-c;
  padding: 0 48px;
  border-radius: 12px;
}
</style>