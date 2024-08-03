<template>
  <footer>
    <UDivider class="my-8" />
    <FooterSubscribe />
    <UDivider class="my-8" />
    <AContainer>
      <div class="md:grid md: grid-cols-6 gap-4">
        <FooterCertificates class="col-span-2" />
        <FooterLinks class="col-span-2" />
        <FooterSocials />
        <FooterSupport />
        <FooterCompoentsDivider />
      </div>
    </AContainer>

    <AContainer>
      <UDivider class="mt-8 mb-4" />
      <FooterCopyright />
    </AContainer>
  </footer>
</template>
