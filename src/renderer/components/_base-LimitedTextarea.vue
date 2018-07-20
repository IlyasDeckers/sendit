<template>
  <textarea v-model="internalValue" @keydown="onKeyDown"></textarea>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    max: {
      type: Number,
      default: 250
    }
  },
  computed: {
    internalValue: {
      get () {
        return this.value
      },
      set (v) {
        this.$emit('input', v)
      }
    }
  },
  methods: {
    onKeyDown (evt) {
      if (this.value.length >= this.max) {
        if (evt.keyCode >= 48 && evt.keyCode <= 90) {
          evt.preventDefault()
        }
      }
    }
  }
}
</script>

<style scoped>

</style>