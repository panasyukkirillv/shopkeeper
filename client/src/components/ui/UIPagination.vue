<template>
  <div class="pagination">
    <button
      :disabled="currentPage === 1"
      @click="prevPage"
      type="button"
      class="pagination__button"
    >
      <span class="pagination__box">
        <ChevronLeftIcon class="pagination__icon"/>
      </span>
    </button>
    <div class="pagination__buttons">
      <button
        v-for="page in pages"
        :key="page"
        @click="$emit('updateCurrentPage', page)"
        type="button"
        :class="[
          'pagination__button',
          {'pagination__button--active': page === currentPage},
        ]"
      >
        <span class="pagination__box">
          {{ page }}
        </span>
      </button>
    </div>
    <button
      :disabled="currentPage === pages"
      @click="nextPage"
      type="button"
      class="pagination__button"
    >
      <span class="pagination__box">
        <ChevronRightIcon class="pagination__icon"/>
      </span>
    </button>
  </div>
</template>

<script>

import ChevronLeftIcon from '@/components/icons/ChevronLeftIcon.vue'
import ChevronRightIcon from '@/components/icons/ChevronRightIcon.vue'

export default {
  name: 'UIPagination',
  components: {
    ChevronRightIcon,
    ChevronLeftIcon
  },
  props: {
    productsQuantity: {
      type: Number,
      required: true
    },
    productsPerPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  emits: ['updateCurrentPage'],
  computed: {
    pages () {
      return Math.ceil(this.productsQuantity / this.productsPerPage)
    }
  },
  methods: {
    prevPage () {
      if (this.currentPage === 1) return
      this.$emit('updateCurrentPage', this.currentPage - 1)
    },
    nextPage () {
      if (this.currentPage === this.pages) return
      this.$emit('updateCurrentPage', this.currentPage + 1)
    }
  }
}

</script>

<style scoped lang="scss">

.pagination {
  display: flex;
  justify-content: center;
  gap: 24px;

  &__button {
    flex: 0 0 auto;
    display: block;
    width: 48px;
    height: 48px;
    margin: 0;
    padding: 0;
    border: 1px solid $color-greyscale-200;
    border-radius: 12px;
    background: $color-white;
    box-shadow: none;
    cursor: pointer;
    @include heading-5;
    color: $color-greyscale-400;

    &--active {
      pointer-events: none;
      border-color: $color-primary-600;
      color: $color-primary-600;
    }

    &:hover {

      @include hover {
        border-color: $color-primary-600;
      }
    }

    &:disabled {
      pointer-events: none;
      opacity: .5;
    }
  }

  &__box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  &__icon {

    :deep(path) {
      stroke: $color-greyscale-500;
    }
  }

  &__buttons {
    display: flex;
    gap: 8px;
  }
}

</style>
