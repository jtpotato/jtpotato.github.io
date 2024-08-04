<template>
  <ContentDoc>
    <template #default="{ doc }">
      <div class="grid grid-cols-5 md:gap-8 mt-8 p-4 w-full">
        <a href="/blog" class="col-span-5 md:col-span-1 text-sm mb-8 mt-8">
          <p>← Back to Blog</p>
        </a>
        <article class="col-span-5 md:col-span-3 prose max-w-3xl m-auto">
          <h1 class="text-4xl md:text-6xl font-display font-thin">
            {{ doc?.title }}
          </h1>
          <div class="md:hidden text-sm *:m-0">
            <p>Published: {{ new Date(doc?.date).toLocaleDateString() }}</p>
          </div>
          <ContentRenderer :value="doc" />
        </article>
        <div class="md:col-span-1 hidden text-sm md:block ml-8 mt-4">
          <p>Published:</p>
          <p>
            {{ new Date(doc?.date).toLocaleDateString() }}
          </p>
        </div>
      </div>
    </template>
  </ContentDoc>
</template>
