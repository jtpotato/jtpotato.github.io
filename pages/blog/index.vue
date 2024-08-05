<script setup lang="ts">
import SiteHeader from "~/components/SiteHeader.vue";
</script>

<template>
  <SiteHeader />
  <main>
    <div class="grid grid-cols-5 w-full p-4 gap-8 md:p-8">
      <div class="col-span-5 md:col-span-1">
        <!-- <NuxtLink href="/" class="text-sm">← Back to Home</NuxtLink> -->
      </div>
      <div class="col-span-5 md:col-span-4 md:mt-8">
        <ContentList path="/blog" v-slot="{ list }">
          <div v-for="article in list">
            <NuxtLink :href="article._path">
              <div class="flex justify-between">
                <h2 class="text-lg">{{ article.title }}</h2>
                <p class="text-sm">
                  {{ new Date(article.date).toLocaleDateString() }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </ContentList>
      </div>
    </div>
  </main>
</template>
