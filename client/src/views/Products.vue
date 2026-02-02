<template>
  <div class="products">
    <div class="products__box">
      <div class="products__header">
        <UIButton
          text="Добавить продукт"
          size="medium"
          :isDisabled="isAllProductsLoading"
          class="products__button"
        >
          <template #before>
            <PlusIcon />
          </template>
        </UIButton>
      </div>
      <div class="products__main">
        <div class="products__area">
          <div class="products__area-scroll">
            <UILoader v-if="isAllProductsLoading" class="products__loader" />
            <table v-else-if="products.length" class="products__table">
              <thead class="products__thead">
              <tr class="products__thead-tr">
                <th class="products__th" style="width: 40px">
                  <UICheckbox
                    class="products__checkbox"
                  />
                </th>
                <th class="products__th">ID</th>
                <th class="products__th">Name</th>
                <th class="products__th">Stock</th>
                <th class="products__th">Price</th>
                <th class="products__th">Status</th>
              </tr>
              </thead>
              <tbody class="product__tbody">
              <tr class="products__tbody-tr" v-for="product in products" :key="product.id">
                <td class="products__td" style="width: 40px">
                  <UICheckbox
                    :isChecked="product.isChecked"
                    class="products__checkbox"
                  />
                </td>
                <td class="products__td">{{ product.id }}</td>
                <td class="products__td">{{ product.name }}</td>
                <td class="products__td">{{ product.stock }}</td>
                <td class="products__td">{{ product.price }}</td>
                <td class="products__td">
                  <UISwitch class="products__switch" :isOn="product.status" />
                </td>
              </tr>
              </tbody>
            </table>
            <UIMessage v-else text="Продуктов нет" class="products__message" />
          </div>
        </div>
      </div>
      <div v-if="products.length" class="products__footer">
        FOOTER
      </div>
    </div>
  </div>
</template>

<script>

import UIButton from '@/components/ui/UIButton.vue'
import PlusIcon from '@/components/icons/PlusIcon.vue'
import UILoader from '@/components/ui/UILoader.vue'
import UIMessage from '@/components/ui/UIMessage.vue'
import UICheckbox from '@/components/ui/UICheckbox.vue'
import UISwitch from '@/components/ui/UISwitch.vue'
import axios from 'axios'

export default {
  name: 'Products',
  components: {
    UIButton,
    PlusIcon,
    UILoader,
    UIMessage,
    UICheckbox,
    UISwitch
  },
  emits: ['updatePageInformation'],
  data () {
    return {
      isAllProductsLoading: false,
      products: []
    }
  },
  methods: {
    async getProducts () {
      this.isAllProductsLoading = true
      try {
        const response = await axios.get('http://localhost:8800/products')
        this.products = response.data.map(product => ({
          ...product,
          isChecked: false
        }))
      } catch (error) {
        console.log(error)
      } finally {
        this.isAllProductsLoading = false
      }
    }
  },
  beforeCreate () {
    this.$emit('updatePageInformation', 'BoxIcon', 'Продукты')
  },
  created () {
    this.getProducts()
  }
}

</script>

<style scoped lang="scss">

.products {
  display: flex;
  flex-direction: column;
  padding: 32px;
  background: $color-greyscale-50;

  &__box {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    border-radius: 16px;
    background: $color-white;
  }

  &__button {
    margin-left: auto;
  }

  &__main {
    flex: 1 1 auto;
  }

  &__area {
    position: relative;
    height: 100%;
  }

  &__loader,
  &__message {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &__area-scroll {
    position: absolute;
    overflow: auto;
    width: 100%;
    height: 100%;
  }

  &__table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
  }

  &__th,
  &__td {
    padding: 20px 8px;
    vertical-align: middle;
  }

  &__th {
    position: sticky;
    top: 0;
    z-index: 1;
    background: $color-greyscale-50;
    @include text-large-medium;
    color: $color-greyscale-400;

    &:first-child {
      border-radius: 12px 0 0 12px;
    }

    &:last-child {
      border-radius: 0 12px 12px 0;
    }
  }

  &__td {
    @include text-large-semibold;
    color: $color-greyscale-900;
  }

  &__tbody {

    &-tr {
      border-bottom: 1px solid $color-greyscale-100;
    }
  }
}

</style>
