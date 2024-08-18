<template>
  <Hero />
  <section class="relative py-12">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-12 grid-cols-1 gap-6">
        <UCard
          class=""
          :ui="{
            base: 'lg:col-span-8 md:col-span-6',
            header: { padding: 'px-0 py-0 sm:px-0' },
          }"
        >
          <template #header><img src="/images/blog-9.jpg" alt="" /></template>

          <div class="mb-4">
            <p class="text-slate-400">
              شناخته‌شده‌ترین متن ساختگی "لورم ایپسوم" است که گفته می‌شود در قرن
              شانزدهم ایجاد شده است. لورم ایپسوم به زبانی شبه لاتین نوشته شده که
              کم و بیش با زبان لاتین "درست" مطابقت دارد. این متن شامل مجموعه‌ای
              از واژه‌های واقعی لاتین است. این متن ساختگی قدیمی نیز قابل درک
              نیست، اما ریتم بیشتر زبان‌های اروپایی را در خط لاتین تقلید می‌کند.
            </p>
            <p
              class="text-slate-400 italic border-x-4 border-red-500 rounded-ss-xl rounded-ee-xl mt-3 p-3"
            >
              " بسیاری از نسخه‌های مختلف لورم ایپسوم در دسترس است، اما اکثریت
              آن‌ها دچار تغییراتی شده‌اند، با شوخ‌طبعی تزریق شده یا کلماتی که
              حتی به نظر نمی‌رسد کمی هم باورپذیر باشند."
            </p>
            <p class="text-slate-400 mt-3">
              مزیت منشأ لاتین و بی‌معنایی نسبی لورم ایپسوم این است که متن توجهی
              را به خود جلب نمی‌کند و یا تمرکز بیننده را از طرح منحرف نمی‌کند.
            </p>
          </div>

          <UForm>
            <UFormGroup label="نام شما:" :ui="{ wrapper: 'mb-4' }">
              <UInput />
            </UFormGroup>

            <UFormGroup label="ایمیل شما:" :ui="{ wrapper: 'mb-4' }">
              <UInput />
            </UFormGroup>

            <UFormGroup label="نظر شما:" :ui="{ wrapper: 'mb-4' }">
              <UTextarea />
            </UFormGroup>
            <UButton>ارسال پیام</UButton>
          </UForm>
        </UCard>

        <div class="lg:col-span-4 md:col-span-6">
          <div class="sticky top-20">
            <h5
              class="text-lg font-medium bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center"
            >
              نویسنده
            </h5>
            <div class="text-center mt-8">
              <img
                src="/images/client-05.jpg"
                class="h-20 w-20 mx-auto rounded-full shadow mb-4"
                alt=""
              />

              <a
                href="layouts.html"
                class="text-lg font-medium hover:text-red-500 transition-all duration-500 ease-in-out h5"
                >کریستینا رومزی</a
              >
              <p class="text-slate-400">نویسنده محتوا</p>
            </div>

            <h5
              class="text-lg font-medium bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8"
            >
              شبکه‌های اجتماعی
            </h5>
            <ul class="flex justify-center gap-x-2 mt-8">
              <li class="inline">
                <UButton
                  to="/"
                  color="rose"
                  variant="soft"
                  icon="bi:facebook"
                ></UButton>
              </li>
              <li class="inline">
                <UButton
                  to="/"
                  color="rose"
                  variant="soft"
                  icon="bi:instagram"
                ></UButton>
              </li>
              <li class="inline">
                <UButton
                  to="/"
                  color="rose"
                  variant="soft"
                  icon="bi:facebook"
                ></UButton>
              </li>
              <li class="inline">
                <UButton
                  to="/"
                  color="rose"
                  variant="soft"
                  icon="bi:twitter"
                ></UButton>
              </li>
              <li class="inline">
                <UButton
                  to="/"
                  color="rose"
                  variant="soft"
                  icon="bi:linkedin"
                ></UButton>
              </li>
              <li class="inline">
                <UButton
                  to="/"
                  color="rose"
                  variant="soft"
                  icon="bi:github"
                ></UButton>
              </li>
              <li class="inline">
                <UButton
                  to="/"
                  color="rose"
                  variant="soft"
                  icon="bi:youtube"
                ></UButton>
              </li>
              <li class="inline">
                <UButton
                  to="/"
                  color="rose"
                  variant="soft"
                  icon="bi:gitlab"
                ></UButton>
              </li>
            </ul>
            <!--end icon-->
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative py-12">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <h3
          class="col-span-full font-semibold text-3xl leading-normal text-center"
        >
          وبلاگ‌های مرتبط
        </h3>
        <UCard
          :ui="{ header: { padding: 'px-0 py-0 sm:px-0' } }"
          v-for="(item, index) in 4"
          :key="item"
        >
          <template #header>
              <img
                :src="`/images/blog-${index + 6}.jpg`"
                class="group-hover:scale-110 group-hover:rotate-3 duration-500"
                alt=""
              />
          </template>
          <div
            class="flex items-center gap-x-4 font-normal text-xs leading-5 text-gray-500"
          >
            <div><Icon name="tabler:clock" /> 5 دقیقه مطالعه</div>
            <div>توسط تراوسی</div>
          </div>
          <h4 class="text-base font-medium font-body mb-1 mt-2">
            سفری شیک در میان روندهای مد
          </h4>
          <p class="font-normal leading-5 text-gray-500 text-sm mb-4">
            این زمانی لازم است که، برای مثال، متن نهایی هنوز در دسترس نباشد.
          </p>
          <UButton>بیشتر بخوانید</UButton>
        </UCard>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>
