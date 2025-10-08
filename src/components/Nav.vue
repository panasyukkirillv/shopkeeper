<template>
  <div class="nav">
    <div class="nav__list">
      <NavItem class="nav__item" text="Профиль" to="profile">
        <UserIcon />
      </NavItem>
      <NavItem class="nav__item" text="Заказы" to="orders">
        <CoinIcon />
      </NavItem>
      <NavItem class="nav__item" text="Продукты" to="products">
        <BoxIcon />
      </NavItem>
      <NavItem class="nav__item" text="Сообщения" to="messages" >
        <MailIcon />
      </NavItem>
      <NavItem class="nav__item" text="Настройки" to="settings">
        <SettingsIcon />
      </NavItem>
      <NavItem class="nav__item" text="Выход" to="exit" >
        <LogoutIcon />
      </NavItem>
    </div>
  </div>
</template>

<style lang="scss">

.nav {
  display: flex;
  flex-direction: column;

  &__list {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__item {
    flex: 0 0 auto;

    &:last-child {
      margin-top: auto;
    }
  }
}

</style>

<script>

import NavItem from '@/components/NavItem.vue'
import UserIcon from '@/components/icons/UserIcon.vue'
import CoinIcon from '@/components/icons/CoinIcon.vue'
import BoxIcon from '@/components/icons/BoxIcon.vue'
import MailIcon from '@/components/icons/MailIcon.vue'
import SettingsIcon from '@/components/icons/SettingsIcon.vue'
import LogoutIcon from '@/components/icons/LogoutIcon.vue'

export default {
  name: 'Nav',
  components: {
    LogoutIcon,
    SettingsIcon,
    MailIcon,
    CoinIcon,
    BoxIcon,
    UserIcon,
    NavItem
  }
}

</script>
