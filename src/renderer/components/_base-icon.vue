<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  components: {
    FontAwesomeIcon
  },
  props: {
    size: {
      type: String,
      default: '1x'
    },
    fontAwesomeIcon: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <FontAwesomeIcon :icon="fontAwesomeIcon" :size="size" />
</template>