<script setup lang="ts"></script>

<template>
  <!-- Footer Start -->
  <footer class="footer bg-gray-800 relative text-gray-200 dark:text-gray-200">
    <div class="container mx-auto px-4 relative">
      <div class="grid grid-cols-12">
        <div class="col-span-12">
          <div class="py-[60px] px-0">
            <div class="grid md:grid-cols-12 grid-cols-1 gap-6">
              <div class="lg:col-span-3 md:col-span-12">
                <UButton to="#" class="text-[22px] focus:outline-none">
                  <img src="/images/logo-light.png" alt="" />
                </UButton>
                <p class="mt-6 text-gray-300">
                  برنامه‌ریزی برای سفر؟ ما سفرتان را با بهترین مکان‌ها و بهترین
                  بودجه سازماندهی خواهیم کرد!
                </p>
                <ul class="list-none mt-6">
                  <li class="inline">
                    <UButton
                      to="https://1.envato.market/travosy"
                      target="_blank"
                      class="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:bg-red-500 hover:text-white text-slate-300"
                    >
                      <Icon
                        name="shopping-cart"
                        class="size-4 align-middle"
                        title="خرید اکنون"
                      />
                    </UButton>
                  </li>
                  <li class="inline">
                    <UButton
                      to="https://dribbble.com/shreethemes"
                      target="_blank"
                      class="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:bg-red-500 hover:text-white text-slate-300"
                    >
                      <Icon
                        name="dribbble"
                        class="size-4 align-middle"
                        title="درایبل"
                      />
                    </UButton>
                  </li>
                  <li class="inline">
                    <UButton
                      to="http://linkedin.com/company/shreethemes"
                      target="_blank"
                      class="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:bg-red-500 hover:text-white text-slate-300"
                    >
                      <Icon
                        name="linkedin"
                        class="size-4 align-middle"
                        title="لینکدین"
                      />
                    </UButton>
                  </li>
                  <li class="inline">
                    <UButton
                      to="https://www.facebook.com/shreethemes"
                      target="_blank"
                      class="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:bg-red-500 hover:text-white text-slate-300"
                    >
                      <Icon
                        name="facebook"
                        class="size-4 align-middle"
                        title="فیس‌بوک"
                      />
                    </UButton>
                  </li>
                  <li class="inline">
                    <UButton
                      to="https://www.instagram.com/shreethemes/"
                      target="_blank"
                      class="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:bg-red-500 hover:text-white text-slate-300"
                    >
                      <Icon
                        name="instagram"
                        class="size-4 align-middle"
                        title="اینستاگرام"
                      />
                    </UButton>
                  </li>
                  <li class="inline">
                    <UButton
                      to="https://x.com/shreethemes"
                      target="_blank"
                      class="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:bg-red-500 hover:text-white text-slate-300"
                    >
                      <Icon
                        name="twitter"
                        class="size-4 align-middle"
                        title="توییتر"
                      />
                    </UButton>
                  </li>
                  <li class="inline">
                    <UButton
                      to="mailto:support@shreethemes.in"
                      class="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:bg-red-500 hover:text-white text-slate-300"
                    >
                      <Icon
                        name="mail"
                        class="size-4 align-middle"
                        title="ایمیل"
                      />
                    </UButton>
                  </li>
                </ul>
                <!--end icon-->
              </div>
              <!--end col-->

              <div class="lg:col-span-3 md:col-span-4">
                <div class="lg:ms-8">
                  <h5 class="tracking-[1px] text-gray-100 font-semibold">
                    دفتر
                  </h5>
                  <h5 class="tracking-[1px] text-gray-100 mt-6">
                    تور و سفر تراوسی
                  </h5>

                  <div class="flex mt-4">
                    <Icon
                      name="tabler:map-pin"
                      class="size-4 text-red-500 me-2"
                    />
                    <h6 class="text-gray-300">
                      C/54 Northwest Freeway, Suite 558, Houston, USA 485
                    </h6>
                  </div>

                  <div class="flex text-white mt-4">
                    <Icon
                      name="tabler:phone"
                      class="size-4 text-red-500 me-2"
                    />
                    <UButton
                      to="mailto:contact@example.com"
                      color="white"
                      variant="link"
                      :padded="false"
                    >
                      contact@example.com
                    </UButton>
                  </div>

                  <div class="flex text-white mt-4">
                    <Icon
                      name="tabler:phone"
                      class="size-4 text-red-500 me-2"
                    />
                    <UButton
                      to="tel:+152534-468-854"
                      color="white"
                      variant="link"
                      :padded="false"
                    >
                      +152 534-468-854
                    </UButton>
                  </div>
                </div>
              </div>
              <!--end col-->

              <div class="lg:col-span-3 md:col-span-4">
                <div class="lg:ms-8">
                  <h5 class="font-semibold mb-4">شرکت</h5>
                  <ul class="list-none flex flex-col gap-y-2">
                    <li>
                      <UButton
                        to="/about-us"
                        variant="link"
                        color="white"
                        icon="tabler:chevron-left"
                        :padded="false"
                      >
                        درباره ما
                      </UButton>
                    </li>
                    <li>
                      <UButton
                        to="/services"
                        variant="link"
                        color="white"
                        icon="tabler:chevron-left"
                        :padded="false"
                      >
                        خدمات
                      </UButton>
                    </li>
                    <li>
                      <UButton
                        to="/team"
                        variant="link"
                        color="white"
                        icon="tabler:chevron-left"
                        :padded="false"
                      >
                        تیم
                      </UButton>
                    </li>
                    <li>
                      <UButton
                        to="/pricing"
                        variant="link"
                        color="white"
                        icon="tabler:chevron-left"
                        :padded="false"
                      >
                        قیمت‌گذاری
                      </UButton>
                    </li>
                    <li>
                      <UButton
                        to="/blogs"
                        variant="link"
                        color="white"
                        icon="tabler:chevron-left"
                        :padded="false"
                      >
                        بلاگ
                      </UButton>
                    </li>
                    <li>
                      <UButton
                        to="/auth/login"
                        variant="link"
                        color="white"
                        icon="tabler:chevron-left"
                        :padded="false"
                      >
                        ورود
                      </UButton>
                    </li>
                  </ul>
                </div>
              </div>
              <!--end col-->

              <div class="lg:col-span-3 md:col-span-4">
                <h5 class="tracking-[1px] text-gray-100 font-semibold">
                  خبرنامه
                </h5>
                <p class="my-6">
                  ثبت‌نام کنید و آخرین نکات را از طریق ایمیل دریافت کنید.
                </p>
                <UForm :state="{}">
                  <UFormGroup
                    label="ایمیل خود را وارد کنید"
                    class="mb-6"
                    :ui="{
                      label: {
                        base: 'text-white mb-2',
                      },
                    }"
                  >
                    <UInput
                      icon="tabler:mail"
                      type="email"
                      placeholder="ایمیل"
                      name="email"
                      required
                    />
                  </UFormGroup>
                  <UButton type="submit" name="send" color="rose" block>
                    ثبت‌نام
                  </UButton>
                </UForm>
              </div>
              <!--end col-->
            </div>
            <!--end grid-->
          </div>
          <!--end col-->
        </div>
      </div>
      <!--end grid-->
    </div>
    <!--end container-->

    <UDivider />
    <div class="flex justify-center py-2">
      <p class="mb-0">
        طراحی شده توسط
        <UButton to="https://amirmaghami.ir/" target="_blank" variant="link">
          امیر مقامی
        </UButton>
      </p>
    </div>
  </footer>
  <!--end footer-->
  <!-- Footer End -->
</template>

<style scoped></style>
