<template>
  <button class="button text--button">
    <slot>Выполнить</slot>
    <svg class="button__arrow-icon" v-svg="'button-arrow'" width="9" height="6"></svg>
  </button>
</template>


<style lang="scss" scoped>
.button {
  background: white;
  border: 2px solid $color-2-c;
  padding: 0 16px;
  height: 48px;
  border-radius: $border-radius;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;


  &.color {
    &--white {
      color: white;
    }

    &--black {
      color: $color-1-a;
    }
  }

  &.bg {
    &--green {
      background-color: $color-2-c;
    }

    &--grey {
      background-color: $color-1-f;
    }
  }

  &.border {
    &--green {
      border: 2px solid $color-2-c;
    }

    &--darkgreen {
      border: 2px solid $color-2-b;
    }

    &--none {
      border: none;
    }
  }

  &.size {
    &--big {
      padding: 0 48px;
      height: 56px;
    }

    &--small {
      height: 36px;
      padding: 0 12px;
    }
  }

  &.direction {
    &--reverse {
      flex-direction: row-reverse;
    }
  }

  &__arrow-icon {
    transform: rotate(-90deg);

  }

  &.arrow {
    &--left .button__arrow-icon {
      transform: rotate(90deg);
    }

    &--green {
      fill: $color-2-c;
    }

    &--black {
      fill: $color-1-a;
    }

    &--white {
      fill: white;
    }
  }
}
</style>