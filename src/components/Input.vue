<template>
  <label for="" class="input-block">

    <small v-if="$attrs.label" class="input-block__small text--scale--6">{{ $attrs.label }}</small>

    <div class="input-block__wrapper" :class="{'input-block__wrapper--reverse':$attrs.reverse}" tabindex="1">
      <svg v-if="$attrs.type=='email'" class="input__icon" v-svg="'email'" width="16" height="12"></svg>

      <input tabindex="0" v-bind="$attrs" class="input-block__input text--body">
      <div v-if="$attrs.type=='number'" class="input-block__buttons">
        <button @click="stepUp" class="input-block__buttons__item input-block__buttons__item--top">
          <svg class="input-block__buttons__item__icon" v-svg="'input-arrow'" width="8"
               height="5"></svg>
        </button>
        <button @click="stepDown"
                class="input-block__buttons__item  input-block__buttons__item--bottom">
          <svg class="input-block__buttons__item__icon" v-svg="'input-arrow'" width="8"
               height="5"></svg>
        </button>
      </div>
    </div>

  </label>
</template>

<script setup>
const stepUp = ({target}) => target.parentNode.closest('.input-block__wrapper').querySelector("input[type=number]").stepUp()
const stepDown = ({target}) => target.parentNode.closest('.input-block__wrapper').querySelector("input[type=number]").stepDown()

</script>

<style lang="scss">
.input-block {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: column;
  width: 320px;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 42px;
    background: $color-1-g;
    border: 1px solid $color-1-d;
    border-radius: $border-radius;
    overflow: hidden;
    transition: $base-transition-time;
    padding: 10px 15px;
    gap: 12px;

    &:focus-within {
      border: 1px solid $color-1-c;
    }

    &--reverse {
      flex-direction: row-reverse;
    }
  }

  &__input {
    background-color: transparent;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;

    &::placeholder {
      color: $color-1-c;
    }


    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type=number] {
      -moz-appearance: textfield;
    }

  }

  &__buttons {
    display: flex;
    align-items: baseline;
    justify-content: center;
    flex-direction: column;
    gap: 4.3px;

    &__item {
      background-color: transparent;
      border: none;
      fill: transparent;
      stroke: $color-1-a;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      margin: 0;

      &--bottom & {
        &__icon {
          transform: rotate(180deg);
        }
      }
    }
  }
}
</style>