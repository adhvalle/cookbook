import axios from 'axios'

export const recipesCategory = (category = 'Miscellaneous') => axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
  .then(result => result.data.meals)

  export const recipeDetail = id => axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  .then(result => result.data.meals[0])
