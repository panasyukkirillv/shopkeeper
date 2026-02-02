<template>
  <div class="page">
    <div class="page__container">
      <div class="page__content">
        <div class="page__header">
          <div class="page__box">
            <div class="page__figure">
              <component :is="icon" class="page__icon" />
            </div>
            <div class="page__title">
              {{ title }}
            </div>
          </div>
        </div>
        <RouterView
          @updatePageInformation="setPageInformation"
          class="page__main"
        />
      </div>
      <Sidebar class="page__sidebar" />
    </div>
  </div>
</template>

<script>

import Sidebar from '@/components/Sidebar.vue'
import UserIcon from '@/components/icons/UserIcon.vue'
import CoinIcon from '@/components/icons/CoinIcon.vue'
import BoxIcon from '@/components/icons/BoxIcon.vue'
import MailIcon from '@/components/icons/MailIcon.vue'
import SettingsIcon from '@/components/icons/SettingsIcon.vue'

export default {
  components: {
    UserIcon,
    CoinIcon,
    BoxIcon,
    MailIcon,
    SettingsIcon,
    Sidebar
  },
  data () {
    return {
      title: 'Профиль',
      icon: 'UserIcon'
    }
  },
  methods: {
    setPageInformation (icon, title) {
      this.icon = icon
      this.title = title
    }
  }
}

</script>

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
    padding: 32px;
    height: 100px;
    border-bottom: 1px solid #F1F5F9;
  }

  &__box {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__figure {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: $color-greyscale-900;
  }

  &__icon {

    path {
      stroke: $color-white;
    }
  }

  &__title {
    @include heading-4;
    color: $color-greyscale-900;
  }

  &__main {
    flex: 1 1 auto;
  }
}

</style>
