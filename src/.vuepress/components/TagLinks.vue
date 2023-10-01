<template lang="html">
    <div>
      Tags:
      <router-link class="tag"
        v-for="tag in $page.frontmatter.tags"
        :key="tag"
        :to="{ path: `/tags.html#${tag}`}">
        {{tag}}
      </router-link>
    </div>
  </template>
  
  <style scoped>
  .tag {
    background-color: #D2B48C;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    color: white;
  }
  </style>