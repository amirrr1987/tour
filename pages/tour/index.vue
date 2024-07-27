<template>
  <main >
    <TheContainer class="grid grid-cols-12 gap-4 py-">
      <UCard as="aside" class="span-4" :ui="asideUi">
        <TourFilter />
      </UCard>
      <UCard as="section" :ui="sectionUi">
        <template v-for="tour in tours" :key="tour.wpPostId">
          <RouterLink :to="`/tour/tour-details/${tour.wpPostId}`">
            <UCard as="figure" :ui="tourCardUi">

              <template #header>
                <a-badge color="blue" >
                  {{tour.rateCount}}
                </a-badge>
                <a-tag  color="white" class="absolute left-1 bottom-4">
                  <a-rate disabled  class="" dir="ltr" v-model:value="tour.rate" />
                </a-tag>
                <img class="aspect-[1.7] object-cover" :src="tour.imageUrl">
              </template>
              <h4>{{tour.title}}</h4>
              <div class="text-sm mb-2">نوع تور {{tour.tourType}}</div>
              <div class="text-sm mb-2">
                {{tour.duration}}
              </div>


            <div class="text-xs">
              {{ Number(tour.price).toLocaleString() }} تومان
            </div>
            </UCard>
          </RouterLink>
        </template>
      </UCard>
    </TheContainer>
  </main>
</template>
<script setup lang="ts">
const tours = reactive([
  {
    "wpPostId": 1066500,
    "objectId": "1066500",
    "title": "استانبول 20 تا 23 مرداد",
    "price": "18950000",
    "duration": "3 شب و 4 روز",
    "highlight": null,
    "url": "https://tours.youtopin.com/?page_id=1066500",
    "bookingOption": 5,
    "youtopinCapacity": 7,
    "operator": {
      "id": "5d9c4db8d7c7356e6365e045",
      "username": "youtopin",
      "name": "Youtopin Official",
      "profilePicture": "https://api.youtopin.com/media/v1/image/pathType/base/ae9afb2a-b864-44c5-a0ca-82dd75c10bc1",
      "publicProfile": false,
      "birthday": "1742428800000",
      "gender": "RATHER_NOT_SAY",
      "objectId": "5d9c4db8d7c7356e6365e045"
    },
    "capacity": 7,
    "imageUrl": "https://tours.youtopin.com/wp-content/uploads/2023/11/attractions-معرفی-زیبا-ترین-خیابان-های-استانبول-معرفی-زیباترین-خیابان-های-استانبول-7f0fd58c0052a8ad960d6dc1b9ae655c.webp",
    "featured": false,
    "rate": 4.7,
    "rateCount": 88,
    "beginDate": 1723248000000,
    "endDate": 0,
    "leaderId": "3333",
    "difficulty": "",
    "vehicle": "هواپیما",
    "termIds": [
      148,
      286,
      293,
      300,
      170,
      157,
      185
    ],
    "tourType": null,
    "departureDateDetails": [],
    "priceInfos": null,
    "durationDetail": null,
    "departureDatesDescription": null,
    "transportation": null,
    "classTour": null
  },
  {
    "wpPostId": 1066499,
    "objectId": "1066499",
    "title": "استانبول 23 تا 26 مرداد",
    "price": "19850000",
    "duration": "3 شب و 4 روز",
    "highlight": null,
    "url": "https://tours.youtopin.com/?page_id=1066499",
    "bookingOption": 5,
    "youtopinCapacity": 7,
    "operator": {
      "id": "5d9c4db8d7c7356e6365e045",
      "username": "youtopin",
      "name": "Youtopin Official",
      "profilePicture": "https://api.youtopin.com/media/v1/image/pathType/base/ae9afb2a-b864-44c5-a0ca-82dd75c10bc1",
      "publicProfile": false,
      "birthday": "1742428800000",
      "gender": "RATHER_NOT_SAY",
      "objectId": "5d9c4db8d7c7356e6365e045"
    },
    "capacity": 7,
    "imageUrl": "https://tours.youtopin.com/wp-content/uploads/2024/06/کاور-مگ.jpg",
    "featured": false,
    "rate": 4.7,
    "rateCount": 88,
    "beginDate": 1723507200000,
    "endDate": 0,
    "leaderId": "3333",
    "difficulty": "",
    "vehicle": "هواپیما",
    "termIds": [
      148,
      286,
      293,
      300,
      170,
      157,
      185
    ],
    "tourType": null,
    "departureDateDetails": [],
    "priceInfos": null,
    "durationDetail": null,
    "departureDatesDescription": null,
    "transportation": null,
    "classTour": null
  },
  {
    "wpPostId": 1066493,
    "objectId": "1066493",
    "title": "تفلیس مرداد ماه",
    "price": "14890000",
    "duration": "4 شب و 5 روز",
    "highlight": null,
    "url": "https://tours.youtopin.com/?page_id=1066493",
    "bookingOption": 5,
    "youtopinCapacity": 11,
    "operator": {
      "id": "5d9c4db8d7c7356e6365e045",
      "username": "youtopin",
      "name": "Youtopin Official",
      "profilePicture": "https://api.youtopin.com/media/v1/image/pathType/base/ae9afb2a-b864-44c5-a0ca-82dd75c10bc1",
      "publicProfile": false,
      "birthday": "1742428800000",
      "gender": "RATHER_NOT_SAY",
      "objectId": "5d9c4db8d7c7356e6365e045"
    },
    "capacity": 11,
    "imageUrl": "https://tours.youtopin.com/wp-content/uploads/2024/07/17bd5ac1f2757ff2067b883d0b64f064.jpg",
    "featured": false,
    "rate": 4.7,
    "rateCount": 88,
    "beginDate": 1721779200000,
    "endDate": 0,
    "leaderId": "3333",
    "difficulty": "1از5",
    "vehicle": "هواپیما",
    "termIds": [
      148,
      286,
      300,
      170,
      185
    ],
    "tourType": null,
    "departureDateDetails": [],
    "priceInfos": null,
    "durationDetail": null,
    "departureDatesDescription": null,
    "transportation": null,
    "classTour": null
  },
  {
    "wpPostId": 3003492,
    "objectId": "3003492",
    "title": "تور 10 روزه کوبا شهریور 1403",
    "price": "30000000",
    "duration": "9 شب و 10 روز",
    "highlight": null,
    "url": null,
    "bookingOption": 5,
    "youtopinCapacity": null,
    "operator": {
      "id": "5d9c4db8d7c7356e6365e045",
      "username": "youtopin",
      "name": "Youtopin Official",
      "profilePicture": "https://api.youtopin.com/media/v1/image/pathType/base/ae9afb2a-b864-44c5-a0ca-82dd75c10bc1",
      "publicProfile": false,
      "birthday": "1742428800000",
      "gender": "RATHER_NOT_SAY",
      "objectId": "5d9c4db8d7c7356e6365e045"
    },
    "capacity": 20,
    "imageUrl": "https://api.youtopin.com/media/v1/tour/image/28ef0383-a0cf-482b-90be-13342f8473ca",
    "featured": false,
    "rate": 0,
    "rateCount": 0,
    "beginDate": 1724544000000,
    "endDate": 1725321600000,
    "leaderId": "5445",
    "difficulty": "1 از ۵ ",
    "vehicle": "هواپیما",
    "termIds": [
      170,
      0,
      961,
      962,
      293,
      903,
      2280,
      1805,
      2416,
      2417,
      2418,
      2322,
      2419,
      179,
      725,
      2201,
      921,
      185,
      284,
      701
    ],
    "tourType": "FOREIGN_PACKAGE",
    "departureDateDetails": [
      {
        "departureDate": "2024-08-25",
        "departureId": "e3f5ef31-b0fa-4bec-9cf4-e96353a4f5c7",
        "bookingOption": 5,
        "youtopinCapacity": 20
      }
    ],
    "priceInfos": {
      "price": 2490,
      "paymentType": "FREE_REQUEST",
      "currencyTypeName": {
        "id": 903,
        "name": "دلار",
        "enName": "USD"
      },
      "currencyTransportationName": null,
      "transportationPrice": null,
      "transportationPriceType": "UNDETERMINED"
    },
    "durationDetail": {
      "daysCounter": 10,
      "nightCounter": 9
    },
    "departureDatesDescription": "",
    "transportation": {
      "id": 185,
      "name": "هواپیما",
      "enName": "Airplane"
    },
    "classTour": {
      "id": 284,
      "name": "استاندارد پلاس",
      "enName": "Standard plus"
    }
  },
  {
    "wpPostId": 1066488,
    "objectId": "1066488",
    "title": "آنتالیا 12 تا 20 مرداد پرواز آتا",
    "price": "26190000",
    "duration": "6 شب و 7 روز",
    "highlight": null,
    "url": "https://tours.youtopin.com/?page_id=1066488",
    "bookingOption": 5,
    "youtopinCapacity": 5,
    "operator": {
      "id": "5d9c4db8d7c7356e6365e045",
      "username": "youtopin",
      "name": "Youtopin Official",
      "profilePicture": "https://api.youtopin.com/media/v1/image/pathType/base/ae9afb2a-b864-44c5-a0ca-82dd75c10bc1",
      "publicProfile": false,
      "birthday": "1718236800000",
      "gender": "RATHER_NOT_SAY",
      "objectId": "5d9c4db8d7c7356e6365e045"
    },
    "capacity": 5,
    "imageUrl": "https://tours.youtopin.com/wp-content/uploads/2024/05/L1E3558A1W600H480.jpg",
    "featured": false,
    "rate": 4.6,
    "rateCount": 76,
    "beginDate": 1722556800000,
    "endDate": 0,
    "leaderId": "5555",
    "difficulty": "۱ از ۵ ",
    "vehicle": "هواپیما",
    "termIds": [
      293,
      300,
      170,
      157,
      185
    ],
    "tourType": null,
    "departureDateDetails": [],
    "priceInfos": null,
    "durationDetail": null,
    "departureDatesDescription": null,
    "transportation": null,
    "classTour": null
  },
  {
    "wpPostId": 3003488,
    "objectId": "3003488",
    "title": "مثلث طلایی هند هتل 4 ستاره مرداد 1403",
    "price": "37950000",
    "duration": "7 شب و 8 روز",
    "highlight": null,
    "url": null,
    "bookingOption": 5,
    "youtopinCapacity": null,
    "operator": {
      "id": "5d9c4db8d7c7356e6365e045",
      "username": "youtopin",
      "name": "Youtopin Official",
      "profilePicture": "https://api.youtopin.com/media/v1/image/pathType/base/ae9afb2a-b864-44c5-a0ca-82dd75c10bc1",
      "publicProfile": false,
      "birthday": "1718236800000",
      "gender": "RATHER_NOT_SAY",
      "objectId": "5d9c4db8d7c7356e6365e045"
    },
    "capacity": 20,
    "imageUrl": "https://api.youtopin.com/media/v1/tour/image/d3ee64ee-d95a-4686-979b-d32bfec06dcd",
    "featured": false,
    "rate": 0,
    "rateCount": 0,
    "beginDate": 1723507200000,
    "endDate": 1724198400000,
    "leaderId": "6583",
    "difficulty": "1 از ۵ ",
    "vehicle": "هواپیما",
    "termIds": [
      170,
      0,
      961,
      962,
      901,
      2155,
      148,
      2229,
      725,
      2230,
      2231,
      2201,
      921,
      185,
      701,
      158
    ],
    "tourType": "FOREIGN_PACKAGE",
    "departureDateDetails": [
      {
        "departureDate": "2024-08-13",
        "departureId": "4338cc46-c8ac-4622-af44-f81bd79bb9bd",
        "bookingOption": 5,
        "youtopinCapacity": 7
      },
      {
        "departureDate": "2024-08-16",
        "departureId": "0eb76d5b-4c28-45ea-8a97-76d0cfa819e2",
        "bookingOption": 5,
        "youtopinCapacity": 7
      },
      {
        "departureDate": "2024-08-20",
        "departureId": "78253346-71d7-4363-9fa9-206b40675aa9",
        "bookingOption": 5,
        "youtopinCapacity": 7
      },
      {
        "departureDate": "2024-08-09",
        "departureId": "f6489be7-e6b4-4a6b-b6e8-59a3026a80b3",
        "bookingOption": 0,
        "youtopinCapacity": 7
      }
    ],
    "priceInfos": {
      "price": 37950000,
      "paymentType": "FULL_PAYMENT",
      "currencyTypeName": {
        "id": 901,
        "name": "تومان",
        "enName": "Toman"
      },
      "currencyTransportationName": null,
      "transportationPrice": null,
      "transportationPriceType": "INCLUDED_IN_TOUR_PRICE"
    },
    "durationDetail": {
      "daysCounter": 8,
      "nightCounter": 7
    },
    "departureDatesDescription": "مرداد ماه",
    "transportation": {
      "id": 185,
      "name": "هواپیما",
      "enName": "Airplane"
    },
    "classTour": {
      "id": 158,
      "name": "اقتصادی",
      "enName": "Economical"
    }
  },
  {
    "wpPostId": 3003487,
    "objectId": "3003487",
    "title": "مثلث طلایی هند هتل 5 ستاره تاپ مرداد 1403",
    "price": "45995000",
    "duration": "7 شب و 8 روز",
    "highlight": null,
    "url": null,
    "bookingOption": 5,
    "youtopinCapacity": null,
    "operator": {
      "id": "5d9c4db8d7c7356e6365e045",
      "username": "youtopin",
      "name": "Youtopin Official",
      "profilePicture": "https://api.youtopin.com/media/v1/image/pathType/base/ae9afb2a-b864-44c5-a0ca-82dd75c10bc1",
      "publicProfile": false,
      "birthday": "1718236800000",
      "gender": "RATHER_NOT_SAY",
      "objectId": "5d9c4db8d7c7356e6365e045"
    },
    "capacity": 20,
    "imageUrl": "https://api.youtopin.com/media/v1/tour/image/c0b96895-78e2-4ac2-a390-9adfa6114d7b",
    "featured": false,
    "rate": 0,
    "rateCount": 0,
    "beginDate": 1723507200000,
    "endDate": 1726876800000,
    "leaderId": "6583",
    "difficulty": "1 از ۵ ",
    "vehicle": "هواپیما",
    "termIds": [
      170,
      0,
      961,
      962,
      901,
      999,
      2155,
      148,
      2229,
      725,
      2230,
      2231,
      2201,
      921,
      185,
      701
    ],
    "tourType": "FOREIGN_PACKAGE",
    "departureDateDetails": [
      {
        "departureDate": "2024-08-13",
        "departureId": "9c2fdd09-ce5e-4983-ac86-1df9b05d694e",
        "bookingOption": 5,
        "youtopinCapacity": 7
      },
      {
        "departureDate": "2024-08-16",
        "departureId": "881c59c9-85c0-4bb8-a123-dc5d06576a4a",
        "bookingOption": 5,
        "youtopinCapacity": 7
      },
      {
        "departureDate": "2024-09-20",
        "departureId": "4f5b86b1-7b8f-4204-8404-5988bc546298",
        "bookingOption": 5,
        "youtopinCapacity": 7
      },
      {
        "departureDate": "2024-08-09",
        "departureId": "9721a468-a21b-4237-8343-22ffdfea1bf2",
        "bookingOption": 0,
        "youtopinCapacity": 7
      }
    ],
    "priceInfos": {
      "price": 45995000,
      "paymentType": "FULL_PAYMENT",
      "currencyTypeName": {
        "id": 901,
        "name": "تومان",
        "enName": "Toman"
      },
      "currencyTransportationName": null,
      "transportationPrice": null,
      "transportationPriceType": "INCLUDED_IN_TOUR_PRICE"
    },
    "durationDetail": {
      "daysCounter": 8,
      "nightCounter": 7
    },
    "departureDatesDescription": "مرداد ماه",
    "transportation": {
      "id": 185,
      "name": "هواپیما",
      "enName": "Airplane"
    },
    "classTour": {
      "id": 999,
      "name": "لوکس",
      "enName": "Luxury"
    }
  },
  {
    "wpPostId": 1066486,
    "objectId": "1066486",
    "title": "آنتالیا 11 تا 18 مرداد پرواز معراج",
    "price": "26190000",
    "duration": "6 شب و 7 روز",
    "highlight": null,
    "url": "https://tours.youtopin.com/?page_id=1066486",
    "bookingOption": 5,
    "youtopinCapacity": 5,
    "operator": {
      "id": "5d9c4db8d7c7356e6365e045",
      "username": "youtopin",
      "name": "Youtopin Official",
      "profilePicture": "https://api.youtopin.com/media/v1/image/pathType/base/ae9afb2a-b864-44c5-a0ca-82dd75c10bc1",
      "publicProfile": false,
      "birthday": "1718236800000",
      "gender": "RATHER_NOT_SAY",
      "objectId": "5d9c4db8d7c7356e6365e045"
    },
    "capacity": 5,
    "imageUrl": "https://tours.youtopin.com/wp-content/uploads/2024/07/307475107.jpg",
    "featured": false,
    "rate": 4.6,
    "rateCount": 76,
    "beginDate": 1722470400000,
    "endDate": 0,
    "leaderId": "5555",
    "difficulty": "۱ از ۵ ",
    "vehicle": "هواپیما",
    "termIds": [
      293,
      300,
      170,
      157,
      185
    ],
    "tourType": null,
    "departureDateDetails": [],
    "priceInfos": null,
    "durationDetail": null,
    "departureDatesDescription": null,
    "transportation": null,
    "classTour": null
  },
  {
    "wpPostId": 3003486,
    "objectId": "3003486",
    "title": "فرانسه هلند 8 روزه آبان1403 ",
    "price": "30000000",
    "duration": "7 شب و 8 روز",
    "highlight": null,
    "url": null,
    "bookingOption": 5,
    "youtopinCapacity": null,
    "operator": {
      "id": "5d9c4db8d7c7356e6365e045",
      "username": "youtopin",
      "name": "Youtopin Official",
      "profilePicture": "https://api.youtopin.com/media/v1/image/pathType/base/ae9afb2a-b864-44c5-a0ca-82dd75c10bc1",
      "publicProfile": false,
      "birthday": "1718236800000",
      "gender": "RATHER_NOT_SAY",
      "objectId": "5d9c4db8d7c7356e6365e045"
    },
    "capacity": 20,
    "imageUrl": "https://api.youtopin.com/media/v1/tour/image/cac11527-3e90-4fd9-8554-b6c7d374cd6c",
    "featured": false,
    "rate": 4.6,
    "rateCount": 76,
    "beginDate": 1730332800000,
    "endDate": 1730937600000,
    "leaderId": "5555",
    "difficulty": "1 از ۵ ",
    "vehicle": "هواپیما",
    "termIds": [
      170,
      0,
      2208,
      2240,
      961,
      2241,
      962,
      292,
      2215,
      904,
      2216,
      179,
      725,
      2201,
      921,
      185,
      284,
      701
    ],
    "tourType": "FOREIGN_PACKAGE",
    "departureDateDetails": [
      {
        "departureDate": "2024-10-31",
        "departureId": "7688516c-b5a4-469a-8b7e-3d5003e33547",
        "bookingOption": 5,
        "youtopinCapacity": 20
      }
    ],
    "priceInfos": {
      "price": 2490,
      "paymentType": "FREE_REQUEST",
      "currencyTypeName": {
        "id": 904,
        "name": "یورو",
        "enName": "EUR"
      },
      "currencyTransportationName": null,
      "transportationPrice": null,
      "transportationPriceType": "UNDETERMINED"
    },
    "durationDetail": {
      "daysCounter": 8,
      "nightCounter": 7
    },
    "departureDatesDescription": "",
    "transportation": {
      "id": 185,
      "name": "هواپیما",
      "enName": "Airplane"
    },
    "classTour": {
      "id": 284,
      "name": "استاندارد پلاس",
      "enName": "Standard plus"
    }
  },
  {
    "wpPostId": 1066484,
    "objectId": "1066484",
    "title": "وان گروهی زمینی 22 تا 27 مرداد ماه",
    "price": "6700000",
    "duration": "3 شب و 4 روز",
    "highlight": null,
    "url": "https://tours.youtopin.com/?page_id=1066484",
    "bookingOption": 5,
    "youtopinCapacity": 25,
    "operator": {
      "id": "5d9c4db8d7c7356e6365e045",
      "username": "youtopin",
      "name": "Youtopin Official",
      "profilePicture": "https://api.youtopin.com/media/v1/image/pathType/base/ae9afb2a-b864-44c5-a0ca-82dd75c10bc1",
      "publicProfile": false,
      "birthday": "1718236800000",
      "gender": "RATHER_NOT_SAY",
      "objectId": "5d9c4db8d7c7356e6365e045"
    },
    "capacity": 25,
    "imageUrl": "https://tours.youtopin.com/wp-content/uploads/2024/07/واااان.jpg",
    "featured": false,
    "rate": 4.1,
    "rateCount": 55,
    "beginDate": 1723420800000,
    "endDate": 0,
    "leaderId": "6465",
    "difficulty": "2 از 5",
    "vehicle": "اتوبوس VIP ",
    "termIds": [
      293,
      170,
      186,
      154,
      164,
      285
    ],
    "tourType": null,
    "departureDateDetails": [],
    "priceInfos": null,
    "durationDetail": null,
    "departureDatesDescription": null,
    "transportation": null,
    "classTour": null
  },
  {
    "wpPostId": 1066482,
    "objectId": "1066482",
    "title": "وان گروهی قطاری 16 تا 21 مرداد ماه (هتل چهار ستاره)",
    "price": "8990000",
    "duration": "3 شب و 4 روز",
    "highlight": null,
    "url": "https://tours.youtopin.com/?page_id=1066482",
    "bookingOption": 5,
    "youtopinCapacity": 25,
    "operator": {
      "id": "5d9c4db8d7c7356e6365e045",
      "username": "youtopin",
      "name": "Youtopin Official",
      "profilePicture": "https://api.youtopin.com/media/v1/image/pathType/base/ae9afb2a-b864-44c5-a0ca-82dd75c10bc1",
      "publicProfile": false,
      "birthday": "1718236800000",
      "gender": "RATHER_NOT_SAY",
      "objectId": "5d9c4db8d7c7356e6365e045"
    },
    "capacity": 25,
    "imageUrl": "https://tours.youtopin.com/wp-content/uploads/2024/06/واااان-1.jpg",
    "featured": false,
    "rate": 0,
    "rateCount": 0,
    "beginDate": 1722902400000,
    "endDate": 0,
    "leaderId": "7453",
    "difficulty": "2 از 5",
    "vehicle": "قطار",
    "termIds": [
      148,
      293,
      300,
      170,
      183,
      154,
      164,
      184,
      285
    ],
    "tourType": null,
    "departureDateDetails": [],
    "priceInfos": null,
    "durationDetail": null,
    "departureDatesDescription": null,
    "transportation": null,
    "classTour": null
  },
  {
    "wpPostId": 1066418,
    "objectId": "1066418",
    "title": "وان گروهی زمینی 21 تا 26 مرداد ماه",
    "price": "7900000",
    "duration": "3 شب و 4 روز",
    "highlight": null,
    "url": "https://tours.youtopin.com/?page_id=1066418",
    "bookingOption": 5,
    "youtopinCapacity": 25,
    "operator": {
      "id": "5d9c4db8d7c7356e6365e045",
      "username": "youtopin",
      "name": "Youtopin Official",
      "profilePicture": "https://api.youtopin.com/media/v1/image/pathType/base/ae9afb2a-b864-44c5-a0ca-82dd75c10bc1",
      "publicProfile": false,
      "birthday": "1718236800000",
      "gender": "RATHER_NOT_SAY",
      "objectId": "5d9c4db8d7c7356e6365e045"
    },
    "capacity": 25,
    "imageUrl": "https://tours.youtopin.com/wp-content/uploads/2024/07/وان.jpg",
    "featured": false,
    "rate": 3.6,
    "rateCount": 282,
    "beginDate": 1723334400000,
    "endDate": 0,
    "leaderId": "2222",
    "difficulty": "2 از 5",
    "vehicle": "اتوبوس VIP ",
    "termIds": [
      293,
      170,
      186,
      157,
      154,
      164,
      285
    ],
    "tourType": null,
    "departureDateDetails": [],
    "priceInfos": null,
    "durationDetail": null,
    "departureDatesDescription": null,
    "transportation": null,
    "classTour": null
  },
  {
    "wpPostId": 1066441,
    "objectId": "1066441",
    "title": "وان گروهی زمینی 8 تا 13 مرداد ماه (هتل چهار ستاره)",
    "price": "6990000",
    "duration": "3 شب و 4 روز",
    "highlight": null,
    "url": "https://tours.youtopin.com/?page_id=1066441",
    "bookingOption": 5,
    "youtopinCapacity": 25,
    "operator": {
      "id": "5d9c4db8d7c7356e6365e045",
      "username": "youtopin",
      "name": "Youtopin Official",
      "profilePicture": "https://api.youtopin.com/media/v1/image/pathType/base/ae9afb2a-b864-44c5-a0ca-82dd75c10bc1",
      "publicProfile": false,
      "birthday": "1718236800000",
      "gender": "RATHER_NOT_SAY",
      "objectId": "5d9c4db8d7c7356e6365e045"
    },
    "capacity": 25,
    "imageUrl": "https://tours.youtopin.com/wp-content/uploads/2024/07/واان.jpg",
    "featured": false,
    "rate": 0,
    "rateCount": 0,
    "beginDate": 1722211200000,
    "endDate": 0,
    "leaderId": "7453",
    "difficulty": "2 از 5",
    "vehicle": "اتوبوس VIP ",
    "termIds": [
      293,
      170,
      186,
      157,
      154,
      285
    ],
    "tourType": null,
    "departureDateDetails": [],
    "priceInfos": null,
    "durationDetail": null,
    "departureDatesDescription": null,
    "transportation": null,
    "classTour": null
  },
  {
    "wpPostId": 3003462,
    "objectId": "3003462",
    "title": "سوچی هتل 5 ستاره",
    "price": "30000000",
    "duration": "7 شب و 8 روز",
    "highlight": null,
    "url": null,
    "bookingOption": 5,
    "youtopinCapacity": null,
    "operator": {
      "id": "5d9c4db8d7c7356e6365e045",
      "username": "youtopin",
      "name": "Youtopin Official",
      "profilePicture": "https://api.youtopin.com/media/v1/image/pathType/base/ae9afb2a-b864-44c5-a0ca-82dd75c10bc1",
      "publicProfile": false,
      "birthday": "1718236800000",
      "gender": "RATHER_NOT_SAY",
      "objectId": "5d9c4db8d7c7356e6365e045"
    },
    "capacity": 20,
    "imageUrl": "https://api.youtopin.com/media/v1/tour/image/696e40e9-2a0d-4eb5-af8a-d4526d11a3ba",
    "featured": false,
    "rate": 0,
    "rateCount": 0,
    "beginDate": 1722556800000,
    "endDate": 1723161600000,
    "leaderId": "1675",
    "difficulty": "1 از ۵ ",
    "vehicle": "هواپیما",
    "termIds": [
      170,
      0,
      961,
      2209,
      962,
      901,
      999,
      2386,
      148,
      726,
      2201,
      921,
      185,
      701
    ],
    "tourType": "FOREIGN_PACKAGE",
    "departureDateDetails": [
      {
        "departureDate": "2024-08-02",
        "departureId": "c9b1f5a4-b5d8-4fba-9579-90be4d0b24bb",
        "bookingOption": 5,
        "youtopinCapacity": 10
      },
      {
        "departureDate": "2024-08-09",
        "departureId": "723881a3-64ec-4be5-b98d-24763d77a43e",
        "bookingOption": 5,
        "youtopinCapacity": 10
      },
      {
        "departureDate": "2024-08-16",
        "departureId": "7ebc58b8-1b31-41f4-891c-6a3fa22fb4c3",
        "bookingOption": 5,
        "youtopinCapacity": 10
      }
    ],
    "priceInfos": {
      "price": 79000000,
      "paymentType": "FREE_REQUEST",
      "currencyTypeName": {
        "id": 901,
        "name": "تومان",
        "enName": "Toman"
      },
      "currencyTransportationName": null,
      "transportationPrice": null,
      "transportationPriceType": "INCLUDED_IN_TOUR_PRICE"
    },
    "durationDetail": {
      "daysCounter": 8,
      "nightCounter": 7
    },
    "departureDatesDescription": "شهریور",
    "transportation": {
      "id": 185,
      "name": "هواپیما",
      "enName": "Airplane"
    },
    "classTour": {
      "id": 999,
      "name": "لوکس",
      "enName": "Luxury"
    }
  },
  {
    "wpPostId": 3003461,
    "objectId": "3003461",
    "title": "روسیه هتل 4 ستاره تاپ ویژه شهریور 1403",
    "price": "30000000",
    "duration": "7 شب و 8 روز",
    "highlight": null,
    "url": null,
    "bookingOption": 5,
    "youtopinCapacity": null,
    "operator": {
      "id": "5d9c4db8d7c7356e6365e045",
      "username": "youtopin",
      "name": "Youtopin Official",
      "profilePicture": "https://api.youtopin.com/media/v1/image/pathType/base/ae9afb2a-b864-44c5-a0ca-82dd75c10bc1",
      "publicProfile": false,
      "birthday": "1718236800000",
      "gender": "RATHER_NOT_SAY",
      "objectId": "5d9c4db8d7c7356e6365e045"
    },
    "capacity": 20,
    "imageUrl": "https://api.youtopin.com/media/v1/tour/image/3e2c19dd-b9d6-49a6-9184-910095df6e9f",
    "featured": false,
    "rate": 4.6,
    "rateCount": 76,
    "beginDate": 1724284800000,
    "endDate": 1724889600000,
    "leaderId": "5555",
    "difficulty": "1 از ۵ ",
    "vehicle": "هواپیما",
    "termIds": [
      170,
      961,
      2209,
      962,
      2210,
      2211,
      901,
      903,
      148,
      184,
      2201,
      921,
      185,
      284,
      701
    ],
    "tourType": "FOREIGN_PACKAGE",
    "departureDateDetails": [
      {
        "departureDate": "2024-08-22",
        "departureId": "a084dcfc-359d-4374-a034-2367f6fe15cd",
        "bookingOption": 5,
        "youtopinCapacity": 10
      },
      {
        "departureDate": "2024-08-23",
        "departureId": "f27073e6-f8e1-49e7-962c-e2405809c49d",
        "bookingOption": 5,
        "youtopinCapacity": 10
      }
    ],
    "priceInfos": {
      "price": 690,
      "paymentType": "DOWN_PAYMENT",
      "currencyTypeName": {
        "id": 903,
        "name": "دلار",
        "enName": "USD"
      },
      "currencyTransportationName": {
        "id": 901,
        "name": "تومان",
        "enName": "Toman"
      },
      "transportationPrice": 22500000,
      "transportationPriceType": "DETERMINED"
    },
    "durationDetail": {
      "daysCounter": 8,
      "nightCounter": 7
    },
    "departureDatesDescription": "شهریور",
    "transportation": {
      "id": 185,
      "name": "هواپیما",
      "enName": "Airplane"
    },
    "classTour": {
      "id": 284,
      "name": "استاندارد پلاس",
      "enName": "Standard plus"
    }
  },
  {
    "wpPostId": 3003460,
    "objectId": "3003460",
    "title": "روسیه هتل 4 ستاره ویژه شهریور 1403",
    "price": "30000000",
    "duration": "7 شب و 8 روز",
    "highlight": null,
    "url": null,
    "bookingOption": 5,
    "youtopinCapacity": null,
    "operator": {
      "id": "5d9c4db8d7c7356e6365e045",
      "username": "youtopin",
      "name": "Youtopin Official",
      "profilePicture": "https://api.youtopin.com/media/v1/image/pathType/base/ae9afb2a-b864-44c5-a0ca-82dd75c10bc1",
      "publicProfile": false,
      "birthday": "1718236800000",
      "gender": "RATHER_NOT_SAY",
      "objectId": "5d9c4db8d7c7356e6365e045"
    },
    "capacity": 20,
    "imageUrl": "https://api.youtopin.com/media/v1/tour/image/f7a57020-adcd-4d45-91b3-7033ba24c4cb",
    "featured": false,
    "rate": 4.6,
    "rateCount": 76,
    "beginDate": 1724284800000,
    "endDate": 1724889600000,
    "leaderId": "5555",
    "difficulty": "1 از ۵ ",
    "vehicle": "هواپیما",
    "termIds": [
      170,
      961,
      2209,
      962,
      2210,
      2211,
      901,
      903,
      148,
      184,
      2201,
      921,
      185,
      701,
      158
    ],
    "tourType": "FOREIGN_PACKAGE",
    "departureDateDetails": [
      {
        "departureDate": "2024-08-22",
        "departureId": "3625dffe-f2b4-4c7c-bfe6-f8df8308747f",
        "bookingOption": 5,
        "youtopinCapacity": 10
      },
      {
        "departureDate": "2024-08-23",
        "departureId": "6de8d575-2eea-404b-8b5b-0d1aa33155ee",
        "bookingOption": 5,
        "youtopinCapacity": 10
      }
    ],
    "priceInfos": {
      "price": 590,
      "paymentType": "DOWN_PAYMENT",
      "currencyTypeName": {
        "id": 903,
        "name": "دلار",
        "enName": "USD"
      },
      "currencyTransportationName": {
        "id": 901,
        "name": "تومان",
        "enName": "Toman"
      },
      "transportationPrice": 22500000,
      "transportationPriceType": "DETERMINED"
    },
    "durationDetail": {
      "daysCounter": 8,
      "nightCounter": 7
    },
    "departureDatesDescription": "شهریور",
    "transportation": {
      "id": 185,
      "name": "هواپیما",
      "enName": "Airplane"
    },
    "classTour": {
      "id": 158,
      "name": "اقتصادی",
      "enName": "Economical"
    }
  },
  {
    "wpPostId": 1066478,
    "objectId": "1066478",
    "title": "تور پوکت کرابی بانکوک 13 تا 23 شهریور",
    "price": "53900000",
    "duration": "10 شب و 11 روز",
    "highlight": null,
    "url": "https://tours.youtopin.com/?page_id=1066478",
    "bookingOption": 5,
    "youtopinCapacity": 15,
    "operator": {
      "id": "5d9c4db8d7c7356e6365e045",
      "username": "youtopin",
      "name": "Youtopin Official",
      "profilePicture": "https://api.youtopin.com/media/v1/image/pathType/base/ae9afb2a-b864-44c5-a0ca-82dd75c10bc1",
      "publicProfile": false,
      "birthday": "1718236800000",
      "gender": "RATHER_NOT_SAY",
      "objectId": "5d9c4db8d7c7356e6365e045"
    },
    "capacity": 15,
    "imageUrl": "https://tours.youtopin.com/wp-content/uploads/2024/07/thai-railay-krabi-kopie.jpg",
    "featured": false,
    "rate": 3.6,
    "rateCount": 64,
    "beginDate": 1725321600000,
    "endDate": 0,
    "leaderId": "1111",
    "difficulty": "1 از 5",
    "vehicle": "هواپیما",
    "termIds": [
      148,
      286,
      300,
      170,
      157,
      164,
      189,
      185
    ],
    "tourType": null,
    "departureDateDetails": [],
    "priceInfos": null,
    "durationDetail": null,
    "departureDatesDescription": null,
    "transportation": null,
    "classTour": null
  },
  {
    "wpPostId": 1066475,
    "objectId": "1066475",
    "title": "پوکت 15 تا 23 شهریور پرواز امارات",
    "price": "49900000",
    "duration": "7شب و 8 روز ",
    "highlight": null,
    "url": "https://tours.youtopin.com/?page_id=1066475",
    "bookingOption": 5,
    "youtopinCapacity": 15,
    "operator": {
      "id": "5d9c4db8d7c7356e6365e045",
      "username": "youtopin",
      "name": "Youtopin Official",
      "profilePicture": "https://api.youtopin.com/media/v1/image/pathType/base/ae9afb2a-b864-44c5-a0ca-82dd75c10bc1",
      "publicProfile": false,
      "birthday": "1718236800000",
      "gender": "RATHER_NOT_SAY",
      "objectId": "5d9c4db8d7c7356e6365e045"
    },
    "capacity": 15,
    "imageUrl": "https://tours.youtopin.com/wp-content/uploads/2024/07/aerial-view-james-bond-island-phang-nga-thailand-freepik.jpg",
    "featured": false,
    "rate": 3.6,
    "rateCount": 64,
    "beginDate": 1725494400000,
    "endDate": 0,
    "leaderId": "1111",
    "difficulty": "1 از 5",
    "vehicle": "هواپیما",
    "termIds": [
      148,
      300,
      170,
      157,
      189,
      185
    ],
    "tourType": null,
    "departureDateDetails": [],
    "priceInfos": null,
    "durationDetail": null,
    "departureDatesDescription": null,
    "transportation": null,
    "classTour": null
  }
]);

const sectionUi = {
  base: "flex-1 col-span-7  xl:col-span-9",
  body: {
    base: "grid lg:grid-cols-2 xl:grid-cols-4  gap-4",
    padding: "px-0 py-0 sm:p-0",
  },

  ring: 'ring-0',
  shadow: 'shadow-none',
};
const asideUi = {
  base: "col-span-5 xl:col-span-3",
};
const tourCardUi = {
  base: 'relative',
  background: 'bg-white dark:bg-gray-900',
  divide: 'divide-y divide-gray-200 dark:divide-gray-800',
  ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
  rounded: 'rounded-lg',
  shadow: 'shadow',
  body: {
    base: '',
    background: '',
    padding: 'px-4 py-5 sm:p-6',
  },
  header: {
    base: 'overflow-hidden rounded-t relative',
    background: '',
    padding: 'px-0 py-0 sm:px-0',
  },
  footer: {
    base: '',
    background: '',
    padding: 'px-4 py-4 sm:px-6',
  },
}

</script>
<style lang="css"></style>
