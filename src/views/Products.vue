<template>
  <div class="products">
    <div class="products__main">
      <div class="products__area">
        <div class="products__area-scroll">
          <table class="products__table">
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
                  class="products__checkbox"
                />
              </td>
              <td class="products__td">{{ product.id }}</td>
              <td class="products__td">{{ product.name }}</td>
              <td class="products__td">{{ product.stock }}</td>
              <td class="products__td">{{ product.price }}</td>
              <td class="products__td">{{ product.status }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import UICheckbox from '@/components/ui/UICheckbox.vue'

export default {
  name: 'Products',
  components: {
    UICheckbox
  },
  data () {
    return {
      products: [
        {
          id: 0,
          name: 'Product #0',
          stock: 1,
          price: 1,
          status: true
        },
        {
          id: 1,
          name: 'Product #1',
          stock: 1,
          price: 1,
          status: true
        },
        {
          id: 2,
          name: 'Product #2',
          stock: 1,
          price: 1,
          status: true
        },
        {
          id: 3,
          name: 'Product #3',
          stock: 1,
          price: 1,
          status: true
        },
        {
          id: 4,
          name: 'Product #4',
          stock: 1,
          price: 1,
          status: true
        },
        {
          id: 5,
          name: 'Product #5',
          stock: 1,
          price: 1,
          status: true
        },
        {
          id: 6,
          name: 'Product #6',
          stock: 1,
          price: 1,
          status: true
        },
        {
          id: 7,
          name: 'Product #7',
          stock: 1,
          price: 1,
          status: true
        },
        {
          id: 8,
          name: 'Product #8',
          stock: 1,
          price: 1,
          status: true
        },
        {
          id: 9,
          name: 'Product #9',
          stock: 1,
          price: 1,
          status: true
        }
      ],
      selectedAllProducts: false,
      selectedProducts: []
    }
  }
}

</script>

<style scoped lang="scss">

.products {
  display: flex;
  flex-direction: column;
  padding: 32px;

  &__main {
    flex: 1 1 auto;
  }

  &__area {
    position: relative;
    height: 100%;
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
