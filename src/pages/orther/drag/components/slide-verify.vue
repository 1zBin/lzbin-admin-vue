<template>
  <div class="silde_box">
    <slide-verify
      class="silde_box"
      ref="block"
      :slider-text="text"
      :accuracy="accuracy"
      :imgs="images"
      @again="onAgain"
      @success="onSuccess"
      @fail="onFail"
      @refresh="onRefresh"
    ></slide-verify>
    <button class="btn" @click="handleClick">在父组件可以点我刷新哦</button>
    <div>{{ msg }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
// 局部注册组件，需要单独引用组件样式
// 只提供局部引用的方式，不再采用插件形式，方便按需加载，减少主包大小
import SlideVerify, { SlideVerifyInstance } from "vue3-slide-verify";
import "vue3-slide-verify/dist/style.css";

import slideImg1 from "@/assets/slideImgs/01.jpg";
import slideImg2 from "@/assets/slideImgs/02.jpg";
import slideImg3 from "@/assets/slideImgs/03.jpg";
import slideImg4 from "@/assets/slideImgs/04.jpg";
import slideImg5 from "@/assets/slideImgs/05.jpg";

export default defineComponent({
  components: { SlideVerify },

  setup() {
    //自定义图片
    const images = ref([slideImg1, slideImg2, slideImg3, slideImg4, slideImg5]);
    const msg = ref("");
    const block = ref<SlideVerifyInstance>();

    const onAgain = () => {
      msg.value = "检测到非人为操作的哦！ try again";
      // 刷新
      block.value?.refresh();
    };

    const onSuccess = (times: number) => {
      msg.value = `login success, 耗时${(times / 1000).toFixed(1)}s`;
    };

    const onFail = () => {
      msg.value = "验证不通过";
    };

    const onRefresh = () => {
      msg.value = "点击了刷新小图标";
    };

    const handleClick = () => {
      // 刷新
      block.value?.refresh();
      msg.value = "";
    };

    return {
      images,
      block,
      msg,
      text: "向右滑动->",
      accuracy: 1,
      onAgain,
      onSuccess,
      onFail,
      onRefresh,
      handleClick,
    };
  },
});
</script>
<style scoped>
.silde_box {
  margin: 0 auto;
}
</style>
