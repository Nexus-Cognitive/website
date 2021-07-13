<template>
  <div class="relative">
    <client-only>
      <!-- Google Tag Manager (noscript) -->
      <noscript
        ><iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-T7Q33L4"
          height="0"
          width="0"
          style="display: none; visibility: hidden"
        ></iframe
      ></noscript>
      <!-- End Google Tag Manager (noscript) -->
    </client-only>

    <header class="absolute px-3 sm:px-6 pt-6 sm:pt-9 text-white w-full z-20">
      <NavigationBase />
    </header>

    <main>
      <Nuxt />
    </main>

    <FooterBase />
  </div>
</template>
