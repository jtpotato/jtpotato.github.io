<script setup lang="ts">
import CurrentTime from "~/components/CurrentTime.vue";
</script>

<template>
  <SiteHeader />
  <div class="max-w-2xl m-auto mt-8 p-4">
    <h1 class="font-display text-lg">About</h1>
    <p>
      I sometimes make projects to solve problems. I play around with Rust,
      SwiftUI, React/Next, Vue, and PyTorch. Based in Melbourne, Australia.
    </p>
    <br />
    <h2 class="font-display text-lg">Recent Projects</h2>
    <div class="flex gap-2 *:grow">
      <ProjectPreview
        href="https://github.com/jtpotato/robocup-soccer-2024"
        title="Ferret"
        description="Program for a robot in Robocup Soccer, using Rust 🦀"
      />
    </div>

    <br />
    <h2 class="font-display text-lg">What have I done?</h2>
    <div class="flex flex-col gap-2">
      <LinkPreview
        href="https://www.asi.edu.au/australian-team-2024-international-earth-science-olympiad/"
        title="Introducing the team representing Australia at the 2024 International Earth Science Olympiad!"
      />
      <LinkPreview
        href="https://jmss.vic.edu.au/news/in-the-media/jmss-are-the-champions-at-simc-2024/"
        title="JMSS are the champions at SIMC 2024"
      />
      <LinkPreview
        href="https://github.com/jtpotato/firetrace"
        title="Firetrace: Continental scale bushfire modelling for Australia."
      />
    </div>
    <br />
    <div>
      <NuxtLink href="/blog">
        <div class="border p-4 rounded-lg bg-neutral-100 border-neutral-200">
          <p class="text-center">Blog</p>
        </div>
      </NuxtLink>
    </div>
    <br />
    <p>Made with 🧋 and ❤️</p>
  </div>
</template>
