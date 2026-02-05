<template>
  <Modal
    heading="Удалить продукт?"
    @closeModal="$emit('closeModal')"
  >
    <template #main>
      <div class="modal-main">
        <ul class="modal-main__list">
          <li class="modal-main__item"><b>Название:</b> {{product.name}}</li>
          <li class="modal-main__item"><b>Количество:</b> {{product.stock}}</li>
          <li class="modal-main__item"><b>Цена:</b> {{product.price}}</li>
        </ul>
      </div>
    </template>
    <template #footer>
      <div class="modal-footer">
        <div class="modal-footer__buttons">
          <UIButton
            class="modal-footer__button"
            text="Отмена"
            size="medium"
            variant="secondary"
            @click="$emit('closeModal')"
          />
          <UIButton
            class="modal-footer__button"
            text="Удалить"
            size="medium"
            variant="primary"
            @click="$emit('deleteProduct')"
          />
        </div>
      </div>
    </template>
  </Modal>
</template>

<script>

import Modal from '@/components/Modal.vue'
import UIButton from '@/components/ui/UIButton.vue'

export default {
  name: 'CreateProductModal',
  components: {
    Modal,
    UIButton
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  emits: ['closeModal', 'deleteProduct']
}

</script>

<style scoped lang="scss">

.modal-main {

  &__list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__item {
    flex: 0 0 auto;
    @include text-large-regular;
    color: $color-greyscale-500;

    b {
      @include text-large-bold;
      color: $color-greyscale-900;
    }
  }
}

.modal-footer {

  &__buttons {
    display: flex;
    gap: 16px;
  }

  &__button {
    flex: 0 0 auto;
    width: calc(50% - 8px);
  }
}

</style>
