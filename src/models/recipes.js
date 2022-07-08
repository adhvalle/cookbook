import { reactive } from 'vue'
import { recipesCategory, recipeDetail } from '../api/recipes'

const state = reactive({
  recipes: null
})

export const getRecipes = () => state.recipes
export const setRecipes = recipes => { state.recipes = recipes }
export const updateFavourite = (index, data) => { state.recipes[index].isFavourite = data }

export const retrieveRecipes = async () => {
  const category = await recipesCategory()

  const recipes = await Promise.all(
    category.slice(0, 5).map(({ idMeal }) => recipeDetail(idMeal))
  )

  setRecipes(_parseRecipes(recipes))
}

const _parseRecipes = recipes => recipes.map(recipe => ({
  description: recipe.strInstructions,
  details: {
    area: recipe.strArea,
    category: recipe.strCategory,
    video: recipe.strYoutube
  },
  image: recipe.strMealThumb,
  isFavourite: false,
  thumbnail: `${recipe.strMealThumb}/preview`,
  title: recipe.strMeal
}))
