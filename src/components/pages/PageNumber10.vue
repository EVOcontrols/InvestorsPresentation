<template>
  <div class="page" :style="{ backgroundImage: `url(${bg})` }">
    <div class="flex-1 flex flex-col pl-[6.3rem] mob:pl-[1.875rem]">
      <div class="">
        <div
          class=" font-bold text-[2.5rem] mob:text-[1.68rem] text-[#759CFF] text-opacity-30
            w-[33rem] border-b border-[#355188] pt-10">
          Market
        </div>
      </div>
      <div class="flex flex-row flex-1 items-center pb-[6rem]">
        <div class="w-[33rem] text-[#F9FAFF] text-[3.75rem] font-bold leading-[4.25rem]">
          EVO controls plans to capture market shares by 2027
        </div>
        <div class="ml-[4.9rem]">
          <table>
            <tr
              v-for="(text, i) in texts"
              :key="i"
              class="">
                <td class="text-[2.5rem] text-[#BFDFFF] font-bold text-right pr-2.5">
                  {{ text.big }}
                </td>
                <td class="text-[1.875rem] text-[#BFDFFF] font-bold whitespace-nowrap">
                  {{ text.small }}
                </td>
                <td
                  class="text-[1.375rem] text-[#BFDFFF] font-bold text-opacity-50 pl-7
                    w-[12.875rem] box-content leading-6 py-5">
                  {{ text.muted }}
                </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const bgd = require('../../assets/bg/desktop/bg10.png');
const bgm = require('../../assets/bg/mobile/bg10.png');

export default {
  props: ['device'],
  components: {
  },
  data: () => ({
    bg: null,
    texts: [
      {
        big: '0,2%',
        small: '= $244 mln',
        muted: 'Home&Building automation',
      },
      {
        big: '2%',
        small: '= $70 mln',
        muted: 'Indoor farming automation',
      },
      {
        big: '0,3%',
        small: '= $262 mln',
        muted: 'Public infrastructure automation',
      },
    ],
    widths: [3.43, 5.375, 3.125, 2.75, 3.56, 5, 2.75, 3.06, 7.625],
  }),
  created() {
    this.bg = this.device === 'desktop' ? bgd : bgm;
  },
  mounted() {

  },
};
</script>

<style scoped>
.page {
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
}
table td {
  vertical-align: middle;
}
</style>
