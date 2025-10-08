<template>
  <RouterLink class="nav-item" :to="to" active-class="nav-item--active" exact-active-class="nav-item--active">
    <slot></slot>
    <div class="nav-item__text">{{ text }}</div>
    <div v-if="counter" class="nav-item__counter">{{ counter }}</div>
  </RouterLink>
</template>

<style lang="scss">

.nav-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  border-radius: 12px;

  &:hover {

    @include hover {
      background: $color-greyscale-50;
      cursor: pointer;
    }
  }

  path {
    stroke: $color-greyscale-500;
  }

  &--active path,
  &:hover path {

    @include hover {
      stroke: $color-primary-600;
    }
  }

  &__text {
    @include text-large-medium;
    color: $color-greyscale-500;

    .nav-item--active &,
    .nav-item:hover & {

      @include hover {
        color: $color-primary-600;
      }
    }
  }

  &__counter {
    margin-left: auto;
    padding: 2px 8px;
    border-radius: 4px;
    background: $color-primary-50;
    @include text-small-medium;
    color: $color-primary-600;
  }
}

</style>

<script>

export default {
  name: 'NavItem',
  props: {
    text: {
      type: String,
      required: true
    },
    counter: {
      type: Number,
      required: false
    },
    to: {
      type: String,
      required: true
    }
  }
}

</script>
