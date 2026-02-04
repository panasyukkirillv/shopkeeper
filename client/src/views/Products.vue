<template>
  <div class="products">
    <div class="products__box">
      <div class="products__header">
        <UIButton
          text="Создать продукт"
          size="medium"
          :isDisabled="isAllProductsLoading"
          @click="modalsVisibility.createProductModalVisibility = true"
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
            <UILoader
              v-if="isAllProductsLoading"
              class="products__loader" />
            <table
              v-else-if="products.length"
              class="products__table"
            >
              <thead class="products__thead">
                <tr class="products__thead-tr">
                  <th class="products__th" style="width: 40px">
                    <UICheckbox
                      class="products__checkbox"
                    />
                  </th>
                  <th class="products__th">Название</th>
                  <th class="products__th">Количество</th>
                  <th class="products__th">Цена</th>
                  <th class="products__th">Статус</th>
                </tr>
              </thead>
              <tbody class="product__tbody">
                <tr class="products__tbody-tr"
                    v-for="product in products"
                    :key="product.id"
                >
                  <td class="products__td" style="width: 40px">
                    <div class="products__case">
                      <UIStatus class="products__status" :status="product.status" />
                      <UICheckbox
                        class="products__checkbox"
                      />
                    </div>
                  </td>
                  <td class="products__td">{{ product.name }}</td>
                  <td class="products__td">{{ product.stock }}</td>
                  <td class="products__td">{{ product.price }}</td>
                  <td class="products__td">
                    <UISwitch
                      v-model="product.status"
                    />
                  </td>
                  <td class="products__td" style="width: 72px">
                    <div class="products__options">
                      <UIOption
                        class="products__option"
                        @click="setProductToDelete(product), modalsVisibility.deleteProductModalVisibility = true"
                      >
                        <EditIcon />
                      </UIOption>
                      <UIOption
                        class="products__option"
                        @click="setProductToDelete(product), modalsVisibility.deleteProductModalVisibility = true"
                      >
                        <TrashIcon />
                      </UIOption>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <UIMessage
              v-else text="Продуктов нет"
              class="products__message"
            />
          </div>
        </div>
      </div>
      <div v-if="products.length" class="products__footer">
        FOOTER
      </div>
    </div>
    <Teleport to="body">
      <CreateProductModal
        v-if="modalsVisibility.createProductModalVisibility"
        @closeModal="modalsVisibility.createProductModalVisibility = false"
        v-model="product"
        @createProduct="createProduct"
      />
      <DeleteProductModal
        v-if="modalsVisibility.deleteProductModalVisibility"
        @closeModal="modalsVisibility.deleteProductModalVisibility = false"
        :product="product"
        @deleteProduct="deleteProduct"
      />
      <UINotification
        v-if="notification.visibility"
        :text="notification.text"
        class="products__notification"
      />
    </Teleport>
  </div>
</template>

<script>

import UIButton from '@/components/ui/UIButton.vue'
import PlusIcon from '@/components/icons/PlusIcon.vue'
import UILoader from '@/components/ui/UILoader.vue'
import UIStatus from '@/components/ui/UIStatus.vue'
import UICheckbox from '@/components/ui/UICheckbox.vue'
import UISwitch from '@/components/ui/UISwitch.vue'
import UIOption from '@/components/ui/UIOption.vue'
import TrashIcon from '@/components/icons/TrashIcon.vue'
import EditIcon from '@/components/icons/EditIcon.vue'
import UIMessage from '@/components/ui/UIMessage.vue'
import CreateProductModal from '@/components/products/CreateProductModal.vue'
import DeleteProductModal from '@/components/products/DeleteProductModal.vue'
import UINotification from '@/components/ui/UINotification.vue'
import axios from 'axios'

export default {
  name: 'Products',
  components: {
    UIButton,
    PlusIcon,
    UILoader,
    UIStatus,
    UICheckbox,
    UISwitch,
    UIOption,
    TrashIcon,
    EditIcon,
    UIMessage,
    CreateProductModal,
    DeleteProductModal,
    UINotification
  },
  emits: ['updatePageInformation'],
  data () {
    return {
      isAllProductsLoading: false,
      products: [],
      modalsVisibility: {
        createProductModalVisibility: false,
        deleteProductModalVisibility: false
      },
      product: null,
      notification: {
        visibility: false,
        text: ''
      }
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
    },
    async createProduct () {
      try {
        await axios.post('http://localhost:8800/products', this.product)
      } catch (error) {
        console.log(error)
      } finally {
        this.setDefaultProductValue()
        this.modalsVisibility.createProductModalVisibility = false
        await this.getProducts()
        this.showNotification('Продукт успешно добавлен!')
      }
    },
    async deleteProduct (id) {
      alert('ELFKTYJ')
    },
    setDefaultProductValue () {
      this.product = {
        id: '',
        name: '',
        stock: '',
        price: '',
        status: ''
      }
    },
    setProductToDelete (product) {
      this.product = product
    },
    showNotification (text) {
      this.notification.text = text
      this.notification.visibility = true
      setTimeout(() => {
        this.notification.visibility = false
        this.notification.text = ''
      }, 3000)
    }
  },
  beforeCreate () {
    this.$emit('updatePageInformation', 'BoxIcon', 'Продукты')
  },
  created () {
    this.getProducts()
  },
  mounted () {
    this.setDefaultProductValue()
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
    position: relative;
    flex: 1 1 auto;

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: -24px;
      z-index: 1;
      width: 100%;
      height: 20px;
      pointer-events: none;
    }

    &::before {
      top: 64px;
      background: linear-gradient(180deg, #FFF, transparent);
    }

    &::after {
      bottom: 0;
      background: linear-gradient(0deg, #FFF, transparent);
    }
  }

  &__area {
    position: relative;
    height: 100%;

    &::before {
      content: '';
      position: absolute;
      left: -24px;
      top: 0;
      z-index: 1;
      width: 24px;
      height: 64px;
      background: $color-white;
    }
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
    margin-left: -24px;
    padding-left: 24px;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
  }

  &__thead-tr {

    &::after {
      content: '';
      display: table-cell;
      padding: 20px 8px;
      vertical-align: middle;
      background: $color-greyscale-50;
      border-radius: 0 12px 12px 0;
      position: sticky;
      top: 0;
      z-index: 1;
    }
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
      //border-radius: 0 12px 12px 0;
    }
  }

  &__td {
    position: relative;
    @include text-large-semibold;
    color: $color-greyscale-900;
  }

  &__tbody {

    &-tr {
      border-bottom: 1px solid $color-greyscale-100;
    }
  }

  &__case {
    position: relative;
  }

  &__status {
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translate(-10px, -50%);
  }

  &__notification {
    position: fixed;
    right: 48px;
    bottom: 48px;
  }

  &__options {
    display: flex;
    gap: 8px;
  }

  &__option {
    flex: 0 0 auto;
  }
}

</style>
