<template>
  <div 
    class="info-preview"
    :class="{ 'info-preview--selected': isSelected }"
  >
    <div class="info-preview__image">
      <img 
        class="info-preview__img-src"
        :src="info.thumbnail" 
        :alt="info.title"
      >
    </div>
    <div class="info-preview__content">
      <h2 
        class="info-preview__title"
        v-text="info.title" 
      />
      <p 
        class="info-preview__description"
        v-text="info.description" 
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoDisplay',
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    isSelected: Boolean
  }
}
</script>

<style>
.info-preview {
  display: grid;
  grid-template-columns: 1fr auto;
  width: 100%;
  max-width: var(--max-width-sm);
  margin: 0 auto;
  border: 1px solid var(--color-main);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  background-color: #ffffff;
}

@media (min-width: 1024px) {
  .info-preview {
    margin: 0 auto var(--size-base-x-2);
  }
}

.info-preview:hover {
  box-shadow: var(--box-shadow);
}

.info-preview--selected {
  background-color: var(--color-background-secondary);
  cursor: default;
}

.info-preview--selected:hover {
  box-shadow: none;
}

.info-preview__image {
  width: 150px;
  height: 150px;
}

.info-preview__img-src {
  display: block;
  width: 100%;
  height: auto;
}

.info-preview__content {
  padding: var(--size-base) var(--size-base-x-2);
}

.info-preview__title {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-size: var(--font-size-xl);
  margin: 0;
  color: var(--color-highlight);
  overflow: hidden;
}

.info-preview__description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>