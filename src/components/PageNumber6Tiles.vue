<template>
  <div
    class="inline-grid grid-cols-2 gap-x-8 gap-y-[1.875rem] ml-[9rem] mob:ml-0
        mob:gap-y-5 mob:gap-x-[1.375rem]">
    <div
      v-for="(tile, i) in tiles"
      :key="i"
      class="w-[14.1rem] h-[8.9rem] rounded-2xl bg-[#2298FF26] flex flex-row items-center
        pl-6 mob:w-[9rem] mob:h-[5.7rem] mob:pl-4">
      <img src="@/assets/pic6.svg" alt="" :class="tile.w" v-if="!i">
      <img src="@/assets/pic7.svg" alt="" :class="tile.w" v-else-if="i === 1">
      <img src="@/assets/pic8.svg" alt="" :class="tile.w" v-else-if="i === 2">
      <img src="@/assets/pic9.svg" alt="" :class="tile.w" v-else>
      <div
        class="ml-[1.75rem] text-lg font-bold leading-[1.375rem] mob:ml-[1.25rem]
          mob:text-xs">
        <div class="text-[#BFDFFF]">{{ tile.title }}</div>
        <div class="text-[#BFDFFF80] mob:text-[0.625rem]">{{ tile.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tiles'],
};
</script>
