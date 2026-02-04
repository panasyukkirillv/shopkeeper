<template>
  <button class="option" type="button">
    <span class="option__box">
      <slot class="option__icon"/>
    </span>
  </button>
</template>

<style scoped lang="scss">

.option {
  display: block;
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  box-shadow: none;
  cursor: pointer;

  :deep(path) {
    stroke: $color-greyscale-500;

  }

  &:hover :deep(path) {

    @include hover {
      stroke: $color-primary-600;
    }
  }

}

</style>
