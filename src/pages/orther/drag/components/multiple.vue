<template>
  <div class="container">
    <div class="btnBox">
      <button
        v-for="(item, index) in dynamicData"
        :key="index"
        :ref="
                  (el) => {
                      if (el) {
                          // 如果数组长度小于当前索引，则扩展数组
                          while (draggableButtons.length <= index) {
                              draggableButtons.push(null)
                          }
                          draggableButtons[index] = el as ButtonElement
                      }
                  }
              "
        class="btn"
        @mousedown="startDrag(index, $event)"
      >
        拖动我{{ item }}
      </button>
    </div>

    <div class="target-area">
      <div
        v-for="(_item, index) in dropZoneData"
        :key="index"
        :ref="
                  (el) => {
                      if (el) {
                          // 如果数组长度小于当前索引，则扩展数组
                          while (dropZones.length <= index) {
                              dropZones.push(null)
                          }
                          dropZones[index] = el as HTMLElement
                      }
                  }
              "
        class="drop-zone"
      >
        拖拽到这里 {{ index }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";

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
  //  重要！幽灵按钮需要脱离文档流，否则会影响其他元素布局
  button.style.pointerEvents = "none";
};

// 业务数据的数组，页面结构根据这个数组遍历生成按钮
const dynamicData = ref([1, 2, 3, 4, 5, 6, 7, 8]);
// draggableButtons 数组，存储每个按钮的 ref
const draggableButtons: Ref<(ButtonElement | null)[]> = ref([]);

// dropZone.value 类型
// 假设 dropZone 是一个 ref 对象，其值为一个 HTML 元素，例如 div
const dropZones: Ref<(HTMLElement | null)[]> = ref([]);
const dropZoneData = ref([1, 2, 3, 4]);
let isDragging = false;
let offsetX = 0;
let offsetY = 0;
let activeButtonIndex = -1; // 记录当前正在拖拽的按钮索引

const startDrag = (index: number, event: MouseEvent) => {
  const currentButton = draggableButtons.value[index];
  if (!currentButton) {
    console.error("draggableButton is null");
    return;
  }

  if (!isDragging) {
    isDragging = true;
    activeButtonIndex = index;

    // 创建幽灵按钮
    ghostButton.value = createGhostButton();

    // 设置幽灵按钮的样式
    const buttonRect = currentButton.getBoundingClientRect();
    if (buttonRect) {
      setGhostButtonPosition(
        ghostButton.value,
        buttonRect.left,
        buttonRect.top,
        buttonRect.width,
        buttonRect.height
      );
    }

    // 将幽灵按钮添加到页面中
    document.body.appendChild(ghostButton.value);

    // 设置原按钮的透明度
    currentButton.style.opacity = "0.3";

    // 计算鼠标相对于按钮的初始偏移量
    offsetX = event.clientX - buttonRect.left;
    offsetY = event.clientY - buttonRect.top;

    // 添加鼠标移动和释放事件监听器
    document.addEventListener("mousemove", moveButton);
    document.addEventListener("mouseup", stopDrag);
  }
};

const moveButton = (event: MouseEvent) => {
  if (isDragging && ghostButton.value) {
    // 计算幽灵按钮的新位置
    let left = event.clientX - offsetX;
    let top = event.clientY - offsetY;

    // 更新幽灵按钮的位置
    ghostButton.value.style.left = left + "px";
    ghostButton.value.style.top = top + "px";
  }
};

const stopDrag = (event: MouseEvent) => {
  if (activeButtonIndex === -1) return;

  const currentButton = draggableButtons.value[activeButtonIndex];
  if (!currentButton) return;

  isDragging = false;
  activeButtonIndex = -1;

  // 移除复制按钮
  if (ghostButton.value) {
    document.body.removeChild(ghostButton.value);
    ghostButton.value = null;
  }

  // 恢复原按钮的透明度
  currentButton.style.opacity = "1";

  // 检查是否在目标区域内
  for (let i = 0; i < dropZones.value.length; i++) {
    if (isInsideDropZone(event.clientX, event.clientY, i)) {
      console.log(`拖拽到第 ${i} 个 dropZone`);
      break; // 如果已经在某个 dropZone 内，则跳出循环
    }
  }

  document.removeEventListener("mousemove", moveButton);
  document.removeEventListener("mouseup", stopDrag);
};

const isInsideDropZone = (x: number, y: number, index: number) => {
  const dropZoneRect = dropZones.value[index]?.getBoundingClientRect();
  if (dropZoneRect)
    return (
      x > dropZoneRect.left &&
      x < dropZoneRect.right &&
      y > dropZoneRect.top &&
      y < dropZoneRect.bottom
    );
  return false;
};
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  position: relative;

  .btnBox {
    position: relative;
    width: 200px;
    height: 100%;
    display: flex; /* 使用 flex 布局 */
    flex-direction: column; /* 设置排列方向为垂直 */
    align-items: center; /* 设置子元素从顶部开始排列 */
    justify-content: center;

    .btn {
      display: block;
      width: 80px;
      height: 40px;
      border: 1px solid black;
      border-radius: 5px;
      transition: opacity 0.2s ease;
      margin: 5px 0; /* 添加按钮之间的间距 */
      &:hover {
        cursor: pointer;
      }
    }
  }

  .target-area {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 300px;
    border: 1px solid black;
    padding: 5px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;

    .drop-zone {
      border: 1px solid black;
      background-color: rgb(102, 232, 255);
      border-radius: 5px;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
