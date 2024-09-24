<template>
  <UCard>
    <UForm
      :schema="schema"
      :state="state"
      class="space-y-4"
      @submit.prevent="onSubmit"
    >
      <UFormGroup label="درجه سختی" name="tourLevelType" :ui="formGroupUi">
        <URadioGroup
          v-model="props.state.tourLevelType"
          :options="TourLevelTypeEnumList"
          class="radio-filed"
        />
      </UFormGroup>
      <UDivider />
      <UFormGroup label="نوع تور" name="tourType" :ui="formGroupUi">
        <URadioGroup
          v-model="props.state.tourType"
          :options="TourTypeEnumList"
          class="radio-filed"
        />
      </UFormGroup>

      <UDivider />
      <UFormGroup name="transferType" :ui="formGroupUi">
        <template #label>
          <UIcon name="tabler:car" />
          وسیله نقلیه
        </template>
        <URadioGroup
          v-model="props.state.transferType"
          :options="TransferTypeEnumList"
          class="radio-filed"
        />
      </UFormGroup>
      <UDivider />
      <UFormGroup label="محل اقامت" name="stayType" :ui="formGroupUi">
        <URadioGroup
          v-model="props.state.stayType"
          :options="StayTypeEnumList"
          class="radio-filed"
        />
      </UFormGroup>
      <UDivider />
      <div class="flex">
        <UButton size="xs" type="submit">اعمال فیلتر</UButton>
        <UButton size="xs" type="" variant="ghost" @click="onReset"
          >پاک کردن</UButton
        >
      </div>
    </UForm>
  </UCard>
</template>
<script setup lang="ts">
import {
  TourLevelTypeEnumList,
  TourTypeEnumList,
  TransferTypeEnumList,
  StayTypeEnumList,
} from "~/enums";
const props = withDefaults(defineProps(), {
  state: () => {
    return {
      tourLevelType: "",
      tourType: "",
      mealType: "",
      transferType: "",
      stayType: "",
    };
  },
});
const formGroupUi = {
  label: { base: "mb-2 text-gray-400 dark:text-gray-300" },
};
</script>
<style>
label {
  font-weight: 800;
}
.radio-filed fieldset {
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
}
</style>
