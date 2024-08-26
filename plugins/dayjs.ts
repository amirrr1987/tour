import dayjs from 'dayjs';
import jalaliday from 'jalaliday';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(jalaliday);

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('$dayjs', dayjs);
});
