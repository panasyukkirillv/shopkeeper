<template>
  <Modal
    heading="Создать продукт"
    @closeModal="$emit('closeModal')"
  >
    <template #main>
      <div class="modal-main">
        <div class="modal-main__fieldset">
          <UIField
            placeholder="Название продукта"
            required
            :modelValue="modelValue.name"
            @update:modelValue="updateModelValue('name', $event)"
          />
          <UIField
            placeholder="Количество"
            required
            :modelValue="modelValue.stock"
            @update:modelValue="updateModelValue('stock', $event)"
          />
          <UIField
            placeholder="Цена"
            required
            :modelValue="modelValue.price"
            @update:modelValue="updateModelValue('price', $event)"
          />
          <UISwitch
            :modelValue="modelValue.status"
            @update:modelValue="updateModelValue('status', $event)"
          />
        </div>
      </div>
    </template>
    <template #footer>
      <div class="modal-footer">
        <div class="modal-footer__buttons">
          <UIButton
            class="modal-footer__button"
            text="Отмена"
            size="medium"
            @click="$emit('closeModal')"
          />
          <UIButton
            class="modal-footer__button"
            text="Создать"
            size="medium"
            @click="$emit('createProduct')"
          />
        </div>
      </div>
    </template>
  </Modal>
</template>

<script>

import Modal from '@/components/Modal.vue'
import UIField from '@/components/ui/UIField.vue'
import UIButton from '@/components/ui/UIButton.vue'
import UISwitch from '@/components/ui/UISwitch.vue'

export default {
  name: 'CreateProductModal',
  components: {
    Modal,
    UIField,
    UIButton,
    UISwitch
  },
  props: {
    modelValue: {
      type: Object,
      required: true
    }
  },
  emits: ['closeModal', 'update:modelValue', 'createProduct'],
  methods: {
    updateModelValue (key, value) {
      this.$emit('update:modelValue', {
        ...this.modelValue,
        [key]: value
      })
    }
  }
}

</script>

<style scoped lang="scss">

.modal-main {

  &__fieldset {
    display: flex;
    flex-direction: column;
    gap: 16px;
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
