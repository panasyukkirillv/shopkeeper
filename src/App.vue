<template>
  <div class="page">
    <div class="page__container">
      <div class="page__content">
        <div class="page__header">
          HEADER
        </div>
        <div class="page__main">
          <RouterView />
        </div>
      </div>
      <Sidebar class="page__sidebar" />
    </div>
  </div>
</template>

<style lang="scss">

.page {
  height: 100%;

  &__container {
    display: flex;
    flex-direction: row-reverse;
    height: 100%;
  }

  &__sidebar {
    flex: 0 0 auto;
    width: 250px;
  }

  &__content {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__header {
    flex: 0 0 auto;
  }

  &__main {
    flex: 1 1 auto;
  }
}

</style>

<script>

import Sidebar from '@/components/Sidebar.vue'

export default {
  components: {
    Sidebar
  }
}

</script>
