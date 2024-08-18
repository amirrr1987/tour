<template>
  <section class="py-12">
    <AContainer> با ما تماس بگیرید </AContainer>
  </section>

  <div class="container-fluid relative mt-20">
    <div class="grid grid-cols-1">
      <div class="w-full leading-[0] border-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
          style="border: 0"
          class="w-full h-[500px]"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>

  <section class="relative lg:py-24 py-16">
    <div class="container">
      <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
        <div class="lg:col-span-7 md:col-span-6">
          <img
            src="/images/travel-train-station.svg"
            class="w-full max-w-[500px] mx-auto"
            alt=""
          />
        </div>
        <UCard class="lg:col-span-5 md:col-span-6">
          <h3 class="mb-6 text-2xl leading-normal font-semibold">
            با ما در تماس باشید!
          </h3>
          <UForm>
            <div class="">
              <UFormGroup label="نام شما:" class="mb-4">
                <UInput placeholder="نام :" />
              </UFormGroup>
              <UFormGroup label="ایمیل شما" class="mb-4">
                <UInput />
              </UFormGroup>
              <UFormGroup label="نظر شما" class="col-span-2 mb-4">
                <UTextarea />
              </UFormGroup>
              <UButton>ارسال پیام</UButton>
            </div>
          </UForm>
        </UCard>
        <div>
          <div class="lg:ms-5">
            <div
              class="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="relative lg:py-24 py-16">
    <AContainer>
      <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        <div class="text-center px-6">
          <div class="relative text-transparent">
            <div
              class="size-20 bg-red-500/5 text-red-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800"
            >
              <Icon name="tabler:phone" />
            </div>
          </div>

          <div class="content mt-7">
            <h5 class="h5 text-lg font-semibold">تلفن</h5>
            <p class="text-slate-400 mt-3">
              توالی عبارتی از این اکنون به طوری که بسیاری از کمپین‌ها و مزایا
            </p>

            <div class="mt-5">
              <a href="tel:+152534-468-854" class="text-red-500 font-medium"
                >+152 534-468-854</a
              >
            </div>
          </div>
        </div>

        <div class="text-center px-6">
          <div class="relative text-transparent">
            <div
              class="size-20 bg-red-500/5 text-red-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800"
            >
              <Icon name="tabler:mail" />
            </div>
          </div>

          <div class="content mt-7">
            <h5 class="h5 text-lg font-semibold">ایمیل</h5>
            <p class="text-slate-400 mt-3">
              توالی عبارتی از این اکنون به طوری که بسیاری از کمپین‌ها و مزایا
            </p>

            <div class="mt-5">
              <a
                href="mailto:contact@example.com"
                class="text-red-500 font-medium"
                >contact@example.com</a
              >
            </div>
          </div>
        </div>

        <div class="text-center px-6">
          <div class="relative text-transparent">
            <div
              class="size-20 bg-red-500/5 text-red-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800"
            >
              <Icon name="tabler:map-pin" />
            </div>
          </div>

          <div class="content mt-7">
            <h5 class="h5 text-lg font-semibold">مکان</h5>
            <p class="text-slate-400 mt-3">
              خیابان شمال غربی شماره 54، طبقه 558، <br />
              هیوستون، ایالات متحده 485
            </p>

            <div class="mt-5">
              <a
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                data-type="iframe"
                class="video-play-icon read-more lightbox text-red-500 font-medium"
                >مشاهده در نقشه گوگل</a
              >
            </div>
          </div>
        </div>
      </div>
    </AContainer>
  </section>
</template>
