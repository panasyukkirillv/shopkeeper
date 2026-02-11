<template>
  <div class="products">
    <div class="products__box">
      <div class="products__header">
        <UIButton
          text="Создать продукт"
          size="medium"
          :isDisabled="isAllProductsLoading"
          @click="openModal('createProductModal')"
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
              class="products__loader"
            />
            <table
                v-else-if="pageProducts.length"
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
                    v-for="product in pageProducts"
                    :key="product.id"
                  >
                    <td class="products__td" style="width: 40px">
                      <div class="products__case">
                        <UIStatus
                          :status="product.status"
                          class="products__status"
                        />
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
                        @update:modelValue="updateProductStatus(product)"
                      />
                    </td>
                    <td class="products__td" style="width: 72px">
                      <div class="products__options">
                        <UIOption
                          class="products__option"
                          @click="openModal('updateProductModal', product)"
                        >
                          <EditIcon />
                        </UIOption>
                        <UIOption
                          class="products__option"
                          @click="openModal('deleteProductModal', product)"
                        >
                          <TrashIcon />
                        </UIOption>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            <UIMessage
              v-else
              text="Продуктов нет"
              class="products__message"
            />
          </div>
        </div>
      </div>
      <div
        v-if="products.length"
        class="products__footer"
      >
        <div class="products__choose">
          <div class="products__text">
            Кол-во на странице:
          </div>
          <UISelect
            class="products__select"
            :options="[
              { label: '5',  value: '5'  },
              { label: '10', value: '10' },
              { label: '15', value: '15' },
              { label: '20', value: '20' },
            ]"
            @selectOption="setPaginationItemsPerPage($event)"
          />
        </div>
        <UIPagination
          :itemsQuantity="products.length"
          :itemsPerPage="pagination.itemsPerPage"
          :currentPage="pagination.currentPage"
          @updateCurrentPage="setPaginationCurrentPage($event)"
          class="products__pagination"
        />
      </div>
    </div>
    <Teleport to="body">
      <CreateProductModal
        v-if="modalsVisibility.createProductModal"
        @closeModal="closeAllModals"
        v-model="product"
        @createProduct="createProduct"
      />
      <UpdateProductModal
        v-if="modalsVisibility.updateProductModal"
        @closeModal="closeAllModals"
        v-model="product"
        @updateProduct="updateProduct"
      />
      <DeleteProductModal
        v-if="modalsVisibility.deleteProductModal"
        @closeModal="closeAllModals"
        :product="product"
        @deleteProduct="deleteProduct"
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
import UISelect from '@/components/ui/UISelect.vue'
import UIPagination from '@/components/ui/UIPagination.vue'
import CreateProductModal from '@/components/products/CreateProductModal.vue'
import UpdateProductModal from '@/components/products/UpdateProductModal.vue'
import DeleteProductModal from '@/components/products/DeleteProductModal.vue'
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
    UISelect,
    UIPagination,
    CreateProductModal,
    UpdateProductModal,
    DeleteProductModal
  },
  data () {
    return {
      isAllProductsLoading: false,
      products: [],
      product: {},
      pagination: {
        itemsPerPage: 5,
        currentPage: 1
      },
      modalsVisibility: {
        createProductModal: false,
        updateProductModal: false,
        deleteProductModal: false
      }
    }
  },
  computed: {
    pageProducts () {
      return this.products.slice((this.pagination.currentPage * this.pagination.itemsPerPage - this.pagination.itemsPerPage), this.pagination.currentPage * this.pagination.itemsPerPage)
    },
    totalPaginationPages () {
      return Math.ceil(this.products.length / this.pagination.itemsPerPage)
    }
  },
  methods: {

    getProducts () {
      this.isAllProductsLoading = true
      axios.get('http://localhost:8800/products')
        .then(response => {
          this.products = response.data
        })
        .catch((error) => {
          alert('Произошла ошибка при загрузке продуктов \n' + error)
        })
        .finally(() => {
          this.isAllProductsLoading = false
        })
    },
    createProduct () {
      axios.post('http://localhost:8800/products', this.product)
        .then((response) => {
          this.products.push({
            ...this.product,
            id: response.data.insertId
          })
        })
        .catch((error) => {
          alert('Произошла ошибка при создании продукта \n' + error)
        })
        .finally(() => {
          this.closeAllModals()
        })
    },
    updateProduct () {
      axios.put(`http://localhost:8800/products/${this.product.id}`, this.product)
        .then(() => {
          const productIndex = this.products.findIndex((product) => product.id === this.product.id)
          this.products[productIndex] = this.product
        })
        .catch((error) => {
          alert('Произошла ошибка при обновлении продукта \n' + error)
        })
        .finally(() => {
          this.closeAllModals()
        })
    },
    updateProductStatus (product) {
      axios.patch(`http://localhost:8800/products/${product.id}`, { status: product.status })
        .then(() => {
          const productIndex = this.products.findIndex((currentProduct) => currentProduct.id === product.id)
          this.products[productIndex].status = product.status
        })
        .catch((error) => {
          const productIndex = this.products.findIndex((currentProduct) => currentProduct.id === product.id)
          this.products[productIndex].status = !product.status
          alert('Произошла ошибка при обновлении статуса продукта \n' + error)
        })
    },
    deleteProduct () {
      axios.delete('http://localhost:8800/products/' + this.product.id)
        .then(() => {
          const productIndex = this.products.findIndex((product) => product.id === this.product.id)
          this.products.splice(productIndex, 1)
        })
        .catch((error) => {
          alert('Произошла ошибка при удалении продукта \n' + error)
        })
        .finally(() => {
          this.closeAllModals()
        })
    },
    setDefaultProduct () {
      this.product = {
        id: '',
        name: '',
        stock: '',
        price: '',
        status: false
      }
    },

    openModal (modalName, product) {
      if (product) {
        this.product = product
      } else {
        this.setDefaultProduct()
      }
      this.modalsVisibility[modalName] = true
    },
    closeAllModals () {
      for (const key in this.modalsVisibility) {
        this.modalsVisibility[key] = false
      }
      this.setDefaultProduct()
    },

    setPaginationItemsPerPage (itemsPerPage) {
      this.pagination.itemsPerPage = itemsPerPage
      this.updatePaginationCurrentPage()
    },
    setPaginationCurrentPage (currentPage) {
      this.pagination.currentPage = currentPage
    },
    updatePaginationCurrentPage () {
      if (this.pagination.currentPage > this.totalPaginationPages) {
        this.pagination.currentPage = this.totalPaginationPages
      }
    }
  },
  emits: ['updatePageInformation'],
  beforeCreate () {
    this.$emit('updatePageInformation', 'BoxIcon', 'Продукты')
  },
  mounted () {
    this.getProducts()
    console.log(this.products)
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

  &__area {
    position: relative;
    height: 100%;

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
    text-align: left;
    border-collapse: collapse;
  }

  &__thead-tr {

    &::after {
      content: '';
      position: sticky;
      top: 0;
      z-index: 1;
      display: table-cell;
      border-radius: 0 12px 12px 0;
      background: $color-greyscale-50;
    }
  }

  &__th,
  &__td {
    padding: 20px 8px;
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

  &__case {
    position: relative;
  }

  &__status {
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translate(-10px, -50%);
  }

  &__options {
    display: flex;
    gap: 8px;
  }

  &__option {
    flex: 0 0 auto;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__choose {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__text {
    flex: 0 0 auto;
    @include text-large-semibold;
    color: $color-greyscale-900;
  }

  &__select {
    flex: 0 0 auto;
  }

  &__pagination {
    flex: 0 0 auto;
  }
}

</style>
