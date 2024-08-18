<template>
  <section class="pt-4 pb-12">
    <div class="mx-auto px-4 grid grid-cols-4 grid-rows-2 gap-4">
      <img
        class="rounded-lg col-span-2 row-span-2"
        src="/images/listing-1.jpg"
        alt=""
      />
      <img class="rounded-lg" src="/images/listing-1.jpg" alt="" />
      <img class="rounded-lg" src="/images/listing-2.jpg" alt="" />
      <img class="rounded-lg" src="/images/listing-3.jpg" alt="" />
      <img class="rounded-lg" src="/images/listing-4.jpg" alt="" />
    </div>
  </section>
  <section class="relative py-12">
    <div class="container mx-auto px-4 py-12">
      <div class="grid md:grid-cols-12 grid-cols-1 gap-6">
        <div class="lg:col-span-8 md:col-span-7">
          <h5 class="text-2xl font-semibold">
            جزیره جنوبی نیوزلند پر از شگفتی است
          </h5>
          <p class="flex items-center text-slate-400 font-medium mt-2">
            <i data-feather="map-pin" class="size-4 me-1"></i> نیوزلند
          </p>

          <ul class="list-none">
            <li class="inline-flex items-center me-5 mt-5">
              <i
                data-feather="clock"
                class="size-6 stroke-[1.5] text-red-500"
              ></i>

              <div class="ms-3">
                <p class="font-medium">مدت زمان</p>
                <span class="text-slate-400 font-medium text-sm">2 روز</span>
              </div>
            </li>

            <li class="inline-flex items-center me-5 mt-5">
              <i
                data-feather="activity"
                class="size-6 stroke-[1.5] text-red-500"
              ></i>

              <div class="ms-3">
                <p class="font-medium">نوع</p>
                <span class="text-slate-400 font-medium text-sm">ماجراجویی</span>
              </div>
            </li>

            <li class="inline-flex items-center me-5 mt-5">
              <i
                data-feather="users"
                class="size-6 stroke-[1.5] text-red-500"
              ></i>

              <div class="ms-3">
                <p class="font-medium">اندازه گروه:</p>
                <span class="text-slate-400 font-medium text-sm">50 نفر</span>
              </div>
            </li>

            <li class="inline-flex items-center me-5 mt-5">
              <i
                data-feather="globe"
                class="size-6 stroke-[1.5] text-red-500"
              ></i>

              <div class="ms-3">
                <p class="font-medium">زبان‌ها</p>
                <span class="text-slate-400 font-medium text-sm">انگلیسی</span>
              </div>
            </li>

            <li class="inline-flex items-center me-5 mt-5">
              <i
                data-feather="dollar-sign"
                class="size-6 stroke-[1.5] text-red-500"
              ></i>

              <div class="ms-3">
                <p class="font-medium">$50 / نفر</p>
                <span class="text-slate-400 font-medium text-sm">1 روز</span>
              </div>
            </li>
          </ul>

          <div class="mt-6">
            <h5 class="text-lg font-semibold">توضیحات تور:</h5>

            <p class="text-slate-400 mt-6">
              معروف‌ترین متن ساختگی 'Lorem Ipsum' است که گفته می‌شود در قرن 16
              ایجاد شده است. Lorem Ipsum به زبانی شبه لاتین نوشته شده است که
              بیشتر یا کمتر با لاتین 'صحیح' مطابقت دارد. این متن حاوی مجموعه‌ای
              از کلمات واقعی لاتین است. این متن ساختگی قدیمی نیز غیرقابل فهم است،
              اما ریتم بیشتر زبان‌های اروپایی در اسکریپت لاتین را تقلید می‌کند.
            </p>
            <p class="text-slate-400 mt-3">
              مزیت اصل لاتین و بی‌معنی نسبی Lorem Ipsum این است که متن توجه خود را
              به خود جلب نمی‌کند یا توجه بیننده را از طرح منحرف نمی‌کند.
            </p>
          </div>

          <div class="mt-6">
            <h5 class="text-lg font-semibold">سوالات و پاسخ‌ها:</h5>

            <UAccordion :items="items" />
          </div>

          <div class="mt-6">
            <h5 class="text-lg font-semibold">نظر خود را بگذارید:</h5>

            <UForm>
              <UFormGroup label="نام شما:" name="name" class="mb-4">
                <UInput type="text" placeholder="نام :" />
              </UFormGroup>
              <UFormGroup label="ایمیل شما:" name="email" class="mb-4">
                <UInput type="email" placeholder="ایمیل :" />
              </UFormGroup>
              <UFormGroup label="نظر شما:" name="message" class="mb-4">
                <UTextarea placeholder="پیام :" />
              </UFormGroup>
              <UButton block class="mt-4" size="xl">ارسال پیام</UButton>
            </UForm>
          </div>
        </div>

        <div class="lg:col-span-4 md:col-span-5">
          <UCard class="sticky top-20">
            <UForm>
              <UFormGroup label="تاریخ:" class="mb-4">
                <UInput type="date" />
              </UFormGroup>
              <UFormGroup label="تاریخ:" class="mb-4">
                <UInput type="date" />
              </UFormGroup>
              <UFormGroup label="تاریخ:" class="mb-8">
                <UInput type="date" />
              </UFormGroup>
              <UButton>جستجو اکنون</UButton>
            </UForm>
            <UDivider class="my-4" />
            <div class="mt-6">
              <h5 class="text-lg font-medium">نقشه تور</h5>

              <div class="mt-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                  class="w-full h-56"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  {
    label: "شروع کار",
    icon: "i-heroicons-information-circle",
    defaultOpen: true,
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
  },
  {
    label: "نصب",
    icon: "i-heroicons-arrow-down-tray",
    disabled: true,
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
  },
  {
    label: "تمینگ",
    icon: "i-heroicons-eye-dropper",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
  },
  {
    label: "چیدمان‌ها",
    icon: "i-heroicons-rectangle-group",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
  },
  {
    label: "کامپوننت‌ها",
    icon: "i-heroicons-square-3-stack-3d",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
  },
  {
    label: "ابزارها",
    icon: "i-heroicons-wrench-screwdriver",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
  },
];
</script>
