<template>
  <div class="single-drag">
    <button ref="draggableButton" class="btn" @mousedown="startDrag">
      拖动我
    </button>
    <div ref="dropZone" class="drop-zone">拖拽到这里</div>
  </div>
</template>

<script lang="ts">
import { Ref, ref, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    // 定义按钮元素类型
    interface ButtonElement extends HTMLButtonElement {
      // 可以根据实际需求添加按钮元素的其他属性和方法
    }

    // ghostButton 类型
    const ghostButton: Ref<ButtonElement | null> = ref(null);

    const createGhostButton = (): ButtonElement => {
      const ghostButton = document.createElement("button");
      ghostButton.classList.add("btn");
      ghostButton.style.border = "1px solid black";
      ghostButton.style.borderRadius = "5px";
      ghostButton.textContent = "拖动我";
      return ghostButton;
    };

    const setGhostButtonPosition = (
      button: ButtonElement,
      left: number,
      top: number,
      width: number,
      height: number
    ) => {
      button.style.position = "absolute";
      button.style.left = left + "px";
      button.style.top = top + "px";
      button.style.width = width + "px";
      button.style.height = height + "px";
    };

    // draggableButton.value 类型
    // 假设 draggableButton 是一个 ref 对象，其值为一个按钮元素
    const draggableButton: Ref<ButtonElement | null> = ref(null);

    // dropZone.value 类型
    // 假设 dropZone 是一个 ref 对象，其值为一个 HTML 元素，例如 div
    const dropZone: Ref<HTMLElement | null> = ref(null);
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    const startDrag = (event: MouseEvent) => {
      if (!draggableButton.value) {
        console.error("draggableButton is null");
        return;
      }

      if (!isDragging) {
        isDragging = true;

        // 创建复制的按钮元素
        ghostButton.value = createGhostButton();

        // 设置复制按钮的样式
        const buttonRect = draggableButton.value?.getBoundingClientRect();
        if (buttonRect) {
          setGhostButtonPosition(
            ghostButton.value,
            buttonRect.left,
            buttonRect.top,
            buttonRect.width,
            buttonRect.height
          );
        }

        // 将复制按钮添加到页面中
        document.body.appendChild(ghostButton.value);

        // 设置原按钮的透明度
        draggableButton.value.style.opacity = "0.3";

        // 计算鼠标相对于按钮的初始偏移量
        offsetX = event.clientX - buttonRect?.left;
        offsetY = event.clientY - buttonRect?.top;

        document.addEventListener("mousemove", moveButton);
        document.addEventListener("mouseup", stopDrag);
      }
    };

    const moveButton = (event: MouseEvent) => {
      if (isDragging && ghostButton.value) {
        // 计算复制按钮的新位置
        let left = event.clientX - offsetX;
        let top = event.clientY - offsetY;

        // 更新复制按钮的位置
        ghostButton.value.style.left = left + "px";
        ghostButton.value.style.top = top + "px";
      }
    };

    const stopDrag = (event: MouseEvent) => {
      if (!draggableButton.value) return;

      isDragging = false;

      // 移除复制按钮
      if (ghostButton.value) {
        document.body.removeChild(ghostButton.value);
        ghostButton.value = null;
      }

      // 恢复原按钮的透明度
      draggableButton.value.style.opacity = "1";

      // 检查是否在目标区域内
      if (isInsideDropZone(event.clientX, event.clientY)) {
        console.log("拖拽成功！");
      }

      document.removeEventListener("mousemove", moveButton);
      document.removeEventListener("mouseup", stopDrag);
    };

    const isInsideDropZone = (x: number, y: number) => {
      const dropZoneRect = dropZone.value?.getBoundingClientRect();
      if (dropZoneRect)
        return (
          x > dropZoneRect.left &&
          x < dropZoneRect.right &&
          y > dropZoneRect.top &&
          y < dropZoneRect.bottom
        );
    };

    onMounted(() => {
      if (draggableButton.value)
        draggableButton.value.style.position = "absolute";
    });

    onUnmounted(() => {});

    return {
      draggableButton,
      dropZone,
      startDrag,
    };
  },
};
</script>

<style scoped lang="less">
.single-drag {
  position: relative;
  width: 100%;
  height: 500px;
}
.btn {
  width: 150px;
  height: 40px;
  border: 1px solid black;
  border-radius: 5px;
  transition: opacity 0.2s ease;
  z-index: 999;
  &:hover {
    cursor: pointer;
  }
}
.drop-zone {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 200px;
  border: 1px solid black;
  text-align: center;
  background-color: rgb(102, 232, 255);
  border-radius: 5px;
}
</style>
