<template>
  <Hero />

  <section class="py-12">
    <div class="container mx-auto px-4 relative">
      <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-6 relative">
        <div class="md:col-span-5">
          <div class="relative">
            <img
              src="/images/about.jpg"
              class="mx-auto rounded-3xl shadow dark:shadow-gray-700 w-full h-[500px] object-cover"
              alt=""
            />

            <div
              class="absolute flex items-center bottom-16 md:-start-10 -start-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-56 m-3"
            >
              <div
                class="flex items-center justify-center h-[65px] min-w-[65px] bg-red-500/5 text-red-500 text-center rounded-xl me-3"
              >
                <Icon name="heroicons:users" class="size-8" />
              </div>
              <div class="flex-1">
                <span class="text-slate-400">بازدیدکننده</span>
                <p class="text-xl font-bold">
                  <span class="counter-value" data-target="4589">2100</span>
                </p>
              </div>
            </div>

            <div
              class="absolute flex items-center top-16 md:-end-10 -end-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 m-3"
            >
              <div
                class="flex items-center justify-center h-[65px] min-w-[65px] bg-red-500/5 text-red-500 text-center rounded-xl me-3"
              >
                <Icon name="ant-design:global-outlined" class="size-8" />
              </div>
              <div class="flex-1">
                <span class="text-slate-400">پکیج‌های سفر</span>
                <p class="text-xl font-bold">
                  <span class="counter-value" data-target="50">1</span>+
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="md:col-span-7">
          <div class="lg:ms-8">
            <h3
              class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold"
            >
              بهترین آژانس مسافرتی در جهان: تراوسی
            </h3>

            <p class="text-slate-400 max-w-xl mb-6">
              دسترسی به منابع مفید در هر زمان، انتقال امن پول، افزایش کارایی
              روزانه، اتصال به دیگر کاربران و ایجاد شبکه تراوسی خود را با چند
              لمس ساده به راحتی انجام دهید.
            </p>
            <UButton to="/" icon="heroicons:arrow-right" color="rose">
              مطالعه بیشتر
            </UButton>
          </div>
        </div>

        <div class="absolute bottom-0 start-1/3 -z-1">
          <img
            src="/images/map-plane-big.png"
            class="lg:w-[600px] w-96"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Start -->
  <section class="py-12">
    <div class="container mx-auto px-4 relative md:mt-24 mt-16">
      <div class="grid grid-cols-1 pb-6 text-center">
        <h3
          class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold"
        >
          تیم ما
        </h3>

        <p class="text-slate-400 max-w-xl mx-auto">
          این یک متن ساده برای این قالب منحصربه‌فرد و عالی است، شما می‌توانید آن
          را با هر متنی جایگزین کنید.
        </p>
      </div>
      <!--end grid-->

      <div class="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
        <div class="lg:col-span-3 md:col-span-6">
          <div class="group text-center">
            <div
              class="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden"
            >
              <img src="/images/client/04.jpg" class="" alt="" />
              <div
                class="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500"
              ></div>

              <ul
                class="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-10 duration-500 flex gap-2 justify-center"
              >
                <li class="inline">
                  <UButton
                    icon="bi:telegram"
                    to="http://www.telegram.com/"
                    size="sm"
                    color="rose"
                    square
                    variant="solid"
                  />
                </li>
                <li class="inline">
                  <UButton
                    to="http://www.linkedin.com/"
                    target="_blank"
                    icon="bi:linkedin"
                    size="sm"
                    color="rose"
                    square
                    variant="solid"
                  />
                </li>
                <li class="inline">
                  <UButton
                    to="http://www.instagram.com/"
                    icon="bi:instagram"
                    target="_blank"
                    size="sm"
                    color="rose"
                    square
                    variant="solid"
                  />
                </li>
              </ul>
              <!--end icon-->
            </div>

            <div class="content mt-3">
              <NuxtLink
                to=""
                class="text-lg font-semibold hover:text-red-500 duration-500"
                >جک جان</NuxtLink
              >
              <p class="text-slate-400">نماینده</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-3 md:col-span-6">
          <div class="group text-center">
            <div
              class="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden"
            >
              <img src="/images/client/05.jpg" class="" alt="" />
              <div
                class="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500"
              ></div>

              <ul
                class="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-10 duration-500 flex gap-2 justify-center"
              >
                <li class="inline">
                  <UButton
                    icon="bi:telegram"
                    to="http://www.telegram.com/"
                    size="sm"
                    color="rose"
                    square
                    variant="solid"
                  />
                </li>
                <li class="inline">
                  <UButton
                    to="http://www.linkedin.com/"
                    target="_blank"
                    icon="bi:linkedin"
                    size="sm"
                    color="rose"
                    square
                    variant="solid"
                  />
                </li>
                <li class="inline">
                  <UButton
                    to="http://www.instagram.com/"
                    icon="bi:instagram"
                    target="_blank"
                    size="sm"
                    color="rose"
                    square
                    variant="solid"
                  />
                </li>
              </ul>
              <!--end icon-->
            </div>

            <div class="content mt-3">
              <NuxtLink
                to=""
                class="text-lg font-semibold hover:text-red-500 duration-500"
                >کریستا جان</NuxtLink
              >
              <p class="text-slate-400">نماینده</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-3 md:col-span-6">
          <div class="group text-center">
            <div
              class="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden"
            >
              <img src="/images/client/06.jpg" class="" alt="" />
              <div
                class="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500"
              ></div>

              <ul
                class="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-10 duration-500 flex gap-2 justify-center"
              >
                <li class="inline">
                  <UButton
                    icon="bi:telegram"
                    to="http://www.telegram.com/"
                    size="sm"
                    color="rose"
                    square
                    variant="solid"
                  />
                </li>
                <li class="inline">
                  <UButton
                    to="http://www.linkedin.com/"
                    target="_blank"
                    icon="bi:linkedin"
                    size="sm"
                    color="rose"
                    square
                    variant="solid"
                  />
                </li>
                <li class="inline">
                  <UButton
                    to="http://www.instagram.com/"
                    icon="bi:instagram"
                    target="_blank"
                    size="sm"
                    color="rose"
                    square
                    variant="solid"
                  />
                </li>
              </ul>
              <!--end icon-->
            </div>

            <div class="content mt-3">
              <NuxtLink
                to=""
                class="text-lg font-semibold hover:text-red-500 duration-500"
                >الکس دوان</NuxtLink
              >
              <p class="text-slate-400">نماینده</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-3 md:col-span-6">
          <div class="group text-center">
            <div
              class="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden"
            >
              <img src="/images/client/07.jpg" class="" alt="" />
              <div
                class="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500"
              ></div>

              <ul
                class="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-10 duration-500 flex gap-2 justify-center"
              >
                <li class="inline">
                  <UButton
                    icon="bi:telegram"
                    to="http://www.telegram.com/"
                    size="sm"
                    color="rose"
                    square
                    variant="solid"
                  />
                </li>
                <li class="inline">
                  <UButton
                    to="http://www.linkedin.com/"
                    target="_blank"
                    icon="bi:linkedin"
                    size="sm"
                    color="rose"
                    square
                    variant="solid"
                  />
                </li>
                <li class="inline">
                  <UButton
                    to="http://www.instagram.com/"
                    icon="bi:instagram"
                    target="_blank"
                    size="sm"
                    color="rose"
                    square
                    variant="solid"
                  />
                </li>
              </ul>
              <!--end icon-->
            </div>

            <div class="content mt-3">
              <NuxtLink
                to=""
                class="text-lg font-semibold hover:text-red-500 duration-500"
                >آنا می</NuxtLink
              >
              <p class="text-slate-400">نماینده</p>
            </div>
          </div>
        </div>
      </div>
      <!--end grid-->
    </div>
  </section>
</template>
<script setup lang="ts"></script>
