<template>
  <div class="info-slider">
    <div class="info-slider__wrapper">
      <InfoPreview
        v-for="(item, index) in itemsList"
        :key="index"
        :info="item"
        :is-selected="index === selectedIndex"
        class="info-slider__item"
        data-test="info-slider__item"
        @click="$emit('on-click', index)"
      />
    </div>
  </div>
</template>

<script>
import InfoPreview from '@/components/InfoPreview.vue';

export default {
  name: 'InfoSlider',
  components: { InfoPreview },
  props: {
    itemsList: {
      type: Array,
      default: () => []
    },
    selectedIndex: {
      type: Number,
      default: 0
    }
  },
  emits: ['on-click']
}
</script>

<style>
.info-slider {
  margin-bottom: var(--size-base-x-3);
  overflow: scroll;
  background-color: var(--color-background-secondary);
  padding: var(--size-base-x-3);
}

@media (min-width: 1024px) {
  .info-slider {
    background-color: transparent;
    padding: 0;
  }
}

.info-slider__wrapper {
  display: flex;
  width: 100%;
}

@media (min-width: 1024px) {
  .info-slider__wrapper {
    display: block;
  }
}

.info-slider__item {
  min-width: 280px;
  margin-right: 16px;
  margin-left: 0;
}
</style>