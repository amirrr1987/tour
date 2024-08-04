<template>
  <footer>
    <UDivider class="my-8" />
    <FooterSubscribe />
    <UDivider class="my-8" />
    <AContainer>
      <div class="grid md:grid-cols-3 lg:grid-cols-6 gap-y-12 md:gap-x-4">
        <FooterLinks class="md:col-span-3 lg:col-span-2" />
        <FooterCertificates class="md:col-span-2" />
        <FooterSocials />
        <FooterSupport />
      </div>
    </AContainer>

    <AContainer>
      <UDivider class="mt-8 mb-4" />
      <FooterCopyright />
    </AContainer>
  </footer>
</template>
