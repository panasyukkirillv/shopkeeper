<template>
  <div class="sidebar">
    <div class="sidebar__head">
      <RouterLink class="sidebar__logo" to="/">
        Shop<span>Keeper</span>
      </RouterLink>
    </div>
    <div class="sidebar__body">
      <Nav class="sidebar__nav" />
    </div>
  </div>
</template>

<style lang="scss">

.sidebar {
  display: flex;
  flex-direction: column;
  border-right: 1px solid $color-greyscale-100;

  &__head {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100px;
    padding: 32px 16px;
    border-bottom: 1px solid $color-greyscale-100;
  }

  &__logo {
    @include heading-4;
    color: $color-greyscale-900;

    span {
      color: $color-primary-600;
    }
  }

  &__body {
    flex: 1 1 auto;
    position: relative;
    overflow: auto;
    display: flex;
    flex-direction: column;
    padding: 48px 16px 32px;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__nav {
    flex: 1 1 auto;
  }
}

</style>

<script>

import Nav from '@/components/Nav.vue'

export default {
  name: 'Sidebar',
  components: {
    Nav
  }
}

</script>
