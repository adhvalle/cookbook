<template>
  <main class="home-view">
    <div 
      v-if="recipesList && recipesList.length"
      class="home-view__wrapper"
    >
      <InfoSlider 
        :items-list="recipesList"
        :selected-index="selectedIndex"
        @on-click="index => selectedIndex = index"
      />
      <InfoDetailed 
        :info="currentRecipe" 
        :show-favourites-button="!showFavourites"
        @on-toggle-favourite="onToggleFavourite"
      />
    </div>
    <p 
      v-else
      class="home-view__info"
    >
      Add recipes to your favourites list 
        <RouterLink 
          class="home-view__link"
          to="/"
        >
          here
        </RouterLink>
    </p>
  </main>
</template>

<script>
import { computed, onBeforeMount, reactive, toRefs, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { getRecipes, retrieveRecipes, updateFavourite } from '../models/recipes'
import InfoDetailed from '../components/InfoDetailed.vue'
import InfoSlider from '../widgets/InfoSlider.vue'

export default {
  name: 'HomeView',
  components: { InfoDetailed, InfoSlider, RouterLink },
  props: {
    showFavourites: Boolean
  },
  setup (props) {
    const state = reactive({
      recipesList: computed(() => props.showFavourites 
        ? getRecipes()?.filter(({ isFavourite }) => isFavourite)
        : getRecipes()
      ),
      selectedIndex: 0,
      currentRecipe: computed(() => state.recipesList ? state.recipesList[state.selectedIndex] : {})
    })

    onBeforeMount(() => retrieveRecipes()) 

    watch(() => props.showFavourites, () => { state.selectedIndex = 0 })

    const onToggleFavourite = () => {
      updateFavourite(state.selectedIndex, !state.currentRecipe.isFavourite)
    }

    return { ...toRefs(state), onToggleFavourite }
  }
}

</script>

<style>
.home-view {
  padding-bottom: var(--size-base-x-3);
}

@media (min-width: 1024px) {
  .home-view {
    padding: var(--size-base-x-3);
  }
}

.home-view__wrapper {
  max-width: var(--max-width);
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .home-view__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: var(--size-base-x-3);
  }
}

.home-view__info {
  text-align: center;
}

.home-view__link {
  text-decoration: none;
  color: var(--color-highlight);
}
</style>