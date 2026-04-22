
<script>

export default {
  data () {
    return {
      isValidation: false,
      errors: {
        name: '',
        stock: '',
        price: ''
      }
    }
  },
  methods: {
    updateModelValue (key, value) {
      this.$emit('update:modelValue', {
        ...this.modelValue,
        [key]: value
      })
    },
    validateNumberField (value) {
      return value === ''
        ? 'Поле обязательно для заполнения'
        : Number(value) < 0
          ? 'Только положительные значения'
          : ''
    },
    validateForm () {
      this.errors.name =
        !this.modelValue.name || !this.modelValue.name.trim()
          ? 'Поле обязательно для заполнения'
          : ''
      this.errors.stock = this.validateNumberField(this.modelValue.stock)
      this.errors.price = this.validateNumberField(this.modelValue.price)
      this.isValidation = true
    }
  },
  watch: {
    modelValue () {
      if (this.isValidation) {
        this.validateForm()
      }
    }
  }
}

</script>
