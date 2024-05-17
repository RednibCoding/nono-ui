<template>
  <a :href="`/components/${component.slug}`" class="w-[300px] h-[300px] flex flex-col rounded border border-gray-100 bg-white overflow-hidden shadow-md hover:shadow-lg p-2">
    <div ref="previewContainer" class="w-full h-[85%] flex justify-center bg-[url('/grid.svg')] bg-repeat rounded border border-gray-300 items-center overflow-hidden relative bg-gray-100">
      <div ref="previewContent" v-html="sanitizedContent" class="absolute w-[1400px] h-[1400px] flex justify-center items-center p-4 overflow-hidden"></div>
    </div>
    <div class="w-full flex-grow flex items-center p-2">
      <div class="text-gray-500">
        {{ component.data.name }}
      </div>
    </div>
  </a>
</template>

<script setup>
import { ref, onMounted, computed, nextTick, onUnmounted } from 'vue';

const props = defineProps({
  component: {
    required: true
  },
});

// Replace all <a> and </a> tags with <span> and </span>
// Note: <a>-tags mess up the preview
const sanitizedContent = computed(() => {
  return props.component.body
    .replace(/<a\b/g, "<span")
    .replace(/<\/a/g, "</span>")
    .replace(/href\s*=\s*(['"])[^'"]*\1/g, "")
    .replace(/target\s*=\s*(['"])[^'"]*\1/g, "");
});

const previewContainer = ref(null);
const previewContent = ref(null);

const scaleContent = () => {
  const container = previewContainer.value;
  const content = previewContent.value;

  if (container && content) {
    // Measure the dimensions of the container and content
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const contentWidth = content.scrollWidth;
    const contentHeight = content.scrollHeight;

    // Check if scaling is necessary
    if (contentWidth > containerWidth || contentHeight > containerHeight) {
      const scaleWidth = containerWidth / contentWidth;
      const scaleHeight = containerHeight / contentHeight;
      const scale = Math.min(scaleWidth, scaleHeight)*2.4;

      content.style.transform = `scale(${scale})`;
      content.style.transformOrigin = 'top left';

      // Center the scaled content
      const scaledWidth = contentWidth * scale;
      const scaledHeight = contentHeight * scale;
      const offsetX = (containerWidth - scaledWidth) / 2;
      const offsetY = (containerHeight - scaledHeight) / 2;

      content.style.left = `${offsetX}px`;
      content.style.top = `${offsetY}px`;
      content.style.position = 'absolute';
    } else {
      // If no scaling is necessary, reset the transform and positioning
      content.style.transform = 'scale(1)';
      content.style.left = '0';
      content.style.top = '0';
      content.style.position = 'static';
    }
  }
};

onMounted(() => {
  nextTick(() => {
    scaleContent();
    window.addEventListener('resize', scaleContent);
  });
});

onUnmounted(() => {
  window.removeEventListener('resize', scaleContent);
});
</script>

<style scoped>
/* Add any additional styles here */
</style>
