<script lang="ts" setup>
const isProd = process.env.NODE_ENV === "production";

const config = useRuntimeConfig();

if (isProd) {
  useHead({
    script: [
      {
        src: "https://connect.facebook.net/en_US/fbevents.js",
        async: true,
      },
      {
        children: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', ${config.app.META_PIXEL_ID});
fbq('track', 'PageView');`,
        type: "text/javascript",
      },
    ],
  });
}
</script>

<template>
  <TheHeader></TheHeader>
  <slot />

  <TheFooter />

  <BaseModal />

  <noscript v-if="isProd">
    <img
      height="1"
      width="1"
      style="display: none"
      :src="`https://www.facebook.com/tr?id=${$config.app.META_PIXEL_ID}&ev=PageView&noscript=1`"
    />
  </noscript>
</template>
