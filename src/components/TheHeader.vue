<template>
  <header class="the-header">
    <h1 class="the-header__title">
      <img  
        class="the-header__image"
        alt="Cookbook logo" 
        src="@/assets/logo.png" 
      />
    </h1>
    <div class="the-header__menu">
      <nav class="the-header__nav">
        <RouterLink 
          to="/"
          class="the-header__link"
        >
          Home
        </RouterLink>
        <RouterLink 
          to="/favourites"
          class="the-header__link"
        >
          My favourites
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'TheHeader',
  components: { RouterLink }  
}
</script>

<style>
.the-header {
  padding: var(--size-base-x-3) 0 0;
}

.the-header__title {
  display: flex;
  align-items: center;
  width: 180px;
  height: 180px;
  margin: 0 auto;
  border: solid 1px var(--color-main);
  border-radius: 100%;
  overflow: hidden;
}

.the-header__image {
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
}

.the-header__menu {
  color: var(--color-text-white);
  margin-top: var(--size-base-x-3);
  background-color: var(--color-main);
}

.the-header__nav {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--size-base-x-2);
  font-weight: 600;
}

.the-header__link {
  color: var(--color-text-white);
  text-decoration: none;
  margin-right: var(--size-base-x-2);
}

.router-link-active {
  color: var(--color-highlight);
}
</style>