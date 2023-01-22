<template>
  <button class="button text--button">

<slot>Выполнить</slot>
  </button>
</template>


<style lang="scss" scoped>
.button{
  background: white;
  height: 56px;
  border: 1px solid black;
  padding: 0 48px;
  border-radius: 12px;
}
</style>