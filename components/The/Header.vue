<template>
  <header class="bg-[url('assets/img/hero/hero_bg_1_1.jpg')] py-72">
    <div class="mx-auto max-w-4xl">
      <UCard>
        <UForm class="flex items-center gap-4">
          <UFormGroup label="جستجو" class="flex-1">
            <UInput />
          </UFormGroup>
          <UFormGroup label="تاریخ شروع">
            <UPopover :popper="{ placement: 'bottom-start' }">
              <UButton icon="i-heroicons-calendar-days-20-solid">
                {{ format(selected.start, "d MMM, yyy") }} -
                {{ format(selected.end, "d MMM, yyy") }}
              </UButton>

              <template #panel="{ close }">
                <DatePicker v-model="selected" @close="close" />
              </template>
            </UPopover>
          </UFormGroup>
          <UButton class="mt-4" icon="tabler-search">جستجو</UButton>
        </UForm>
      </UCard>
    </div>
  </header>
</template>
<script setup lang="ts">
import { sub, format, isSameDay, type Duration } from "date-fns";

const ranges = [
  { label: "Last 7 days", duration: { days: 7 } },
  { label: "Last 14 days", duration: { days: 14 } },
  { label: "Last 30 days", duration: { days: 30 } },
  { label: "Last 3 months", duration: { months: 3 } },
  { label: "Last 6 months", duration: { months: 6 } },
  { label: "Last year", duration: { years: 1 } },
];
const selected = ref({ start: sub(new Date(), { days: 14 }), end: new Date() });

function isRangeSelected(duration: Duration) {
  return (
    isSameDay(selected.value.start, sub(new Date(), duration)) &&
    isSameDay(selected.value.end, new Date())
  );
}

function selectRange(duration: Duration) {
  selected.value = { start: sub(new Date(), duration), end: new Date() };
}
</script>
