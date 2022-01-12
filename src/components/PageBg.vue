<template>
  <div
    class="bg-[#071C32] h-[100vh] w-[100vw] absolute top-0 left-0">
    <div
      class="h-[100vh] w-[100vw] page-bg"
      :style="{ backgroundImage: `url(/images/${device}/bg${pageNum}.png)` }">
    </div>
  </div>
</template>

<script>
export default {
  props: ['pageNum', 'device', 'isScrolling'],
  computed: {

  },
};
</script>

<style lang="scss" scoped>
.page-bg {
  background-repeat: no-repeat;
}
</style>
