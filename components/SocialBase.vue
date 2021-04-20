<template>
  <ol class="flex">
    <li
      v-for="(platform, index) in platforms"
      :key="platform.slug"
      :class="platformClassListGet(index)"
    >
      <a :href="platform.href">
        <ImageBase v-bind="platform.image" />
      </a>
    </li>
  </ol>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    platforms: {
      default: (): object[] => [
        {
          slug: 'twitter',
          href: 'https://twitter.com/nexuscognitive',
          image: {
            alt: 'Twitter Logo',
            height: 40,
            src: '/images/twitter.svg',
            title: 'Twitter Logo',
            width: 40
          },
          title: 'Twitter'
        },
        {
          slug: 'git-hub',
          href: 'https://github.com/Nexus-Cognitive',
          image: {
            alt: 'GitHub Logo',
            height: 40,
            src: '/images/git-hub.svg',
            title: 'GitHub Logo',
            width: 40
          },
          title: 'GitHub'
        },
        {
          slug: 'instagram',
          href: 'https://instagram.com/nexuscognitive',
          image: {
            alt: 'Instagram Logo',
            height: 40,
            src: '/images/instagram.svg',
            title: 'Instagram Logo',
            width: 40
          },
          title: 'Instagram'
        },
        {
          slug: 'linked-in',
          href:
            'https://www.linkedin.com/company/nexus-analytics-and-data-management-llc/mycompany/',
          image: {
            alt: 'LinkedIn Logo',
            height: 40,
            src: '/images/linked-in.svg',
            title: 'LinkedIn Logo',
            width: 40
          },
          title: 'LinkedIn'
        },
        {
          slug: 'medium',
          href: 'https://medium.com/pervasive-intelligence-now/',
          image: {
            alt: 'Medium Logo',
            height: 40,
            src: '/images/medium.svg',
            title: 'Medium Logo',
            width: 40
          },
          title: 'Medium'
        }
      ],
      type: Array
    }
  },

  methods: {
    platformClassListGet(index: number): object {
      return {
        'ml-3': index
      }
    }
  }
})
</script>
