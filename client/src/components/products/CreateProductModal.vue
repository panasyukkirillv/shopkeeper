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
            :error="errors.name"
          />
          <UIField
            class="modal-main__field"
            placeholder="Количество"
            required
            type="number"
            :modelValue="modelValue.stock"
            @update:modelValue="updateModelValue('stock', $event)"
            :error="errors.stock"
            min="0"
          />
          <UIField
            class="modal-main__field"
            placeholder="Цена"
            required
            type="number"
            :modelValue="modelValue.price"
            @update:modelValue="updateModelValue('price', $event)"
            :error="errors.price"
            min="0"
          />
          <div class="modal-main__box">
            <div class="modal-main__text">
              Статус продукта
            </div>
            <UISwitch
              class="modal-main__switch"
              :modelValue="modelValue.status"
              @update:modelValue="updateModelValue('status', $event)"
            />
          </div>
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
            @click="createProduct"
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
import ProductValidation from '@/mixins/ProductValidation.vue'

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
  mixins: [ProductValidation],
  emits: ['closeModal', 'update:modelValue', 'createProduct'],
  methods: {
    createProduct () {
      this.validateForm()
      const hasErrors = Object.values(this.errors).some(v => v !== '')
      if (!hasErrors) {
        this.$emit('createProduct')
      }
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

  &__box {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &__text {
    @include text-medium-regular;
    color: $color-greyscale-900;
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
