<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const processedRoutes = computed(() => {
  let paths = []
  let currentPath = ''
  route.matched.forEach((r, index) => {
    if (r.redirect) currentPath = '/' + r.redirect.path
    else currentPath += '/' + r.path.split('/')[index + 1]
    paths.push({
      name: r.name,
      title: r.meta.title || 'Sin título',
      path: currentPath,
      last: index === route.matched.length - 1
    })
  })
  return paths
})
</script>

<template>
  <nav aria-label="breadcrumb">
    <ul class="eit-breadcrumb">
      <li>
        <router-link
          to="/"
          class="eit-color--text-soft eit-color--text-soft--link"
        >
          <font-awesome-icon icon="fa-solid fa-house" />
        </router-link>
        <span class="px-2 eit-color--text-soft">/</span>
      </li>
      <li
        v-for="(route, index) in processedRoutes"
        :key="index"
        class="eit-breadcrumb__item"
      >
        <slot :name="route.name" v-bind="route">
          <router-link
            v-if="!route.last"
            :to="route.path"
            class="eit-color--text eit-color--text--link eit-color--underline"
          >
            {{ route.name }}
          </router-link>
          <span v-else class="eit-color--text-soft">
            {{ route.name }}
          </span>
        </slot>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
  @use '@/assets/scss/core' as *;

  .eit-breadcrumb {
    padding-left: 0;
    display: flex;
    list-style: none;
    &__item + &__item::before {
      content: '/';
      padding: 0 0.5rem;
      color: var(--eit-color-text-soft);
    }
  }
  
</style>
