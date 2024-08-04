<template>
  <article class="prose max-w-xl m-auto">
    <!-- ContentDoc returns content for `$route.path` by default or you can pass a `path` prop -->
    <ContentDoc>
      <template #default="{ doc }">
        <h1>{{ doc?.title }}</h1>
        <p>Published: {{ new Date(doc?.date).toLocaleDateString() }}</p>
      </template>
    </ContentDoc>
  </article>
</template>
