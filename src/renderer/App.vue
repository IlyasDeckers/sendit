<template>
  <div class="h-full font-mono">
    <router-view :key="$router.path"></router-view>
  </div>
</template>

<script>
export default {
  name: 'sendit'
}
</script>

<style lang="sass">
  
</style>
