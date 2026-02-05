<template>
  <Modal
    heading="Создать продукт"
    @closeModal="$emit('closeModal')"
  >
    <template #main>
      <div class="modal-main">
        <div class="modal-main__fieldset">
          <UIField
            class="modal-main__field"
            placeholder="Название продукта"
            required
            :modelValue="modelValue.name"
            @update:modelValue="updateModelValue('name', $event)"
          />
          <UIField
            class="modal-main__field"
            placeholder="Количество"
            required
            :modelValue="modelValue.stock"
            @update:modelValue="updateModelValue('stock', $event)"
          />
          <UIField
            class="modal-main__field"
            placeholder="Цена"
            required
            :modelValue="modelValue.price"
            @update:modelValue="updateModelValue('price', $event)"
          />
          <UISwitch
            class="modal-main__switch"
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
            variant="secondary"
            @click="$emit('closeModal')"
          />
          <UIButton
            class="modal-footer__button"
            text="Создать"
            size="medium"
            variant="primary"
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
import UISwitch from '@/components/ui/UISwitch.vue'
import UIButton from '@/components/ui/UIButton.vue'

export default {
  name: 'CreateProductModal',
  components: {
    Modal,
    UIField,
    UISwitch,
    UIButton
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

  &__field,
  &__switch {
    flex: 0 0 auto;
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
