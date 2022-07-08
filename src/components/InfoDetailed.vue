<template>
  <div class="info-detailed">
    <div class="info-detailed__header">
      <div class="info-detailed__image">
        <img 
          class="info-detailed__img-src"
          :src="info.image" 
          :alt="info.title"
        />
      </div>
      <div class="info-detailed__details">
        <div>
          <h2 
            class="info-detailed__title" 
            v-text="info.title"
          />
          <ul class="info-detailed__list">
            <li 
              v-for="(value, key) in info.details"
              :key="key"
              class="info-detailed__list-item"
            >
              <template v-if="key !== 'video'">
                <span class="info-detailed__label">{{ key.toUpperCase() }}:</span> {{ value }}
              </template>
              <a 
                v-else
                class="info-detailed__link"
                :href="info.video"
                target="_blank"
                rel="noopener"
              >
                  Watch recipe video
              </a>
            </li>
          </ul>
        </div>
        <a 
          v-if="showFavouritesButton"
          class="info-detailed__favourites"
          data-test="info-detailed__favourites"
          href="#"
          @click.prevent="$emit('on-toggle-favourite')"
        >{{ buttonFavouriteContent }}</a>
      </div>
    </div>
    <div 
      class="info-detailed__description"
      v-text="info.description"
    />
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'InfoDetailed',
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    showFavouritesButton: Boolean
  },
  emits: ['on-toggle-favourite'],
  setup (props) {
    const buttonFavouriteContent = computed(() => props.info.isFavourite ? 'Remove from favourites' : 'Add to favourites')

    return { buttonFavouriteContent }
  }
}
</script>

<style>
.info-detailed {
  max-width: var(--max-width-md);
  margin: 0 auto;
}

@media (min-width: 768px) {
  .info-detailed__header {
    display: grid;
    grid-template-columns: auto 1fr;
    padding: 0 var(--size-base-x-3);
  }
}

@media (min-width: 1024px) {
  .info-detailed__header {
    padding: 0;
  }
}

.info-detailed__image {
  display: flex;
  align-items: center;
  width: 100%;
  height: 220px;
  overflow: hidden;
}

@media (min-width: 768px) {
  .info-detailed__image {
    width: 320px;
    height: auto;
    border: 1px solid var(--color-main);
    border-radius: 10px;
  }
}

.info-detailed__img-src {
  display: block;
  width: 100%;
  height: auto;
}

.info-detailed__details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 var(--size-base-x-3);
  margin: var(--size-base-x-3) 0;
}

@media (min-width: 768px) {
  .info-detailed__details {
    padding: 0 0 0 var(--size-base-x-3);
    margin: 0;
  }
}

.info-detailed__title {
  color: var(--color-highlight);
  margin: 0;
}

@media (min-width: 1024px) {
  .info-detailed__title {
    display: none;
  }
}

.info-detailed__list {
  font-size: var(--font-size-m);
  list-style: none;
  padding: 0;
}

.info-detailed__list-item {
  margin-bottom: var(--size-base);
}

.info-detailed__favourites {
  max-width: 220px;
  padding: var(--size-base);
  color: var(--color-text-white);
  text-decoration: none;
  text-align: center;
  font-weight: 500;
  border-radius: var(--size-base);
  background-color: var(--color-highlight);
}

.info-detailed__label {
  color: var(--color-highlight);
  font-weight: 600;
}

.info-detailed__link {
  text-decoration: none;
  color: var(--color-link);
}

.info-detailed__description {
  margin-top: var(--size-base-x-3);
  padding: 0 var(--size-base-x-3);
}

@media (min-width: 1024px) {
  .info-detailed__description {
    padding: 0;
  }
}
</style>