<script setup lang="ts">
import { cn } from "~/utils/cn";

type Image = {
  id: string;
  imageUrl: string;
  ratio?: string;
  alt: string;
};

type Category = {
  categorie: string;
  images: Image[];
};

const resolvedImages: Category[] = [
  {
    categorie: "Salon",
    images: [
      {
        id: "45f5374a-c00a-4f47-9cf2-aa5a2f4a3e39",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/int/V1/SALON_CUISINE_V1/V1_SC_4CF0506B-1AAF-4396-9EFA-88D5B057277C_1.jpg",
        ratio: "aspect-square",
        alt: "Vue du salon avec aménagement moderne",
      },
      {
        id: "f5e29385-b504-4b0f-91e5-3537798b1be8",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/int/V1/SALON_CUISINE_V1/V1_SC_3AD45F24-4162-4C58-B194-96E2A15C8377_7.jpg",
        ratio: "aspect-square",
        alt: "Salon spacieux avec mobilier minimaliste",
      },
      {
        id: "882d8f9f-5d94-495f-98c3-777a3797ec7a",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/int/V1/SALON_CUISINE_V1/V1_SC_55C37F30-616A-4C94-971E-B4CBD524B00E_13.jpg",
        alt: "Intérieur du salon avec lumière naturelle",
      },
      {
        id: "d4b1d639-c902-496e-a293-df267b06b5c0",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/int/V1/SALON_CUISINE_V1/V1_SC_0C27FCA2-55D8-41A0-ADBA-AF237AA69285_14.jpg",
        alt: "Vue sur le coin salon avec grandes fenêtres",
      },
      {
        id: "2f517aa8-6ce9-4972-aa61-a07e966f2a1a",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/int/V1/SALON_CUISINE_V1/V1_SC_90B43FA3-16EE-4B1C-B47A-4A615CD251BB_12.jpg",
        alt: "Aménagement intérieur du salon moderne",
      },
      {
        id: "a0305ff3-bce1-4074-ab50-7a616baff764",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/int/V1/SALON_CUISINE_V1/V1_SC_FB712E54-2C1C-4623-82E4-4C5B4AB4ABFF_11.jpg",
        alt: "Décoration du salon avec mobilier contemporain",
      },
    ],
  },
  {
    categorie: "Chambre",
    images: [
      {
        id: "8163cafd-7ee8-4bf2-b9db-b792864ed685",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/int/V1/CHAMBRE_PARENT_ET_ENFANT_V1/CHAMBRE_PARENT/V1_CHAMBRE_PARENT_V1_BF263C53-AE7F-4A91-95E8-58AE79EB5C97_3.jpg",
        ratio: "aspect-square",
        alt: "Chambre parentale avec grand lit et décor élégant",
      },
      {
        id: "7906f70f-57f3-47e3-b625-5d94096666a9",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/int/V1/CHAMBRE_PARENT_ET_ENFANT_V1/CHAMBRE_PARENT/V1_CHAMBRE_PARENT_V1_0309A0B8-365B-463A-9BE5-BF575FC95B0A_4.jpg",
        ratio: "aspect-square",
        alt: "Vue de la chambre parentale moderne",
      },
      {
        id: "cea4eca9-8f99-4e21-89ff-df85a36d5cb1",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/int/V1/CHAMBRE_PARENT_ET_ENFANT_V1/CHAMBRE_PARENT/V1_CHAMBRE_PARENT_V1_D542C1F9-C2E7-4A1E-BA53-5FDB1B1961E7_5.jpg",
        ratio: "aspect-square",
        alt: "Intérieur de la chambre parentale avec éclairage doux",
      },
      {
        id: "edf63bbc-773e-455c-a57e-3fd8a1919bc0",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/int/V1/CHAMBRE_PARENT_ET_ENFANT_V1/CHAMBRE_ENFANT/V1_CHAMBRE_ENFANT_61A3FB24-5122-41AF-B7D3-F95D0BA04AF7_3.jpg",
        ratio: "aspect-square",
        alt: "Chambre d'enfant avec lit simple et décor coloré",
      },
      {
        id: "d6cbe288-e904-485d-bef9-5151dcbf5da4",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/int/V1/CHAMBRE_PARENT_ET_ENFANT_V1/CHAMBRE_ENFANT/V1_CHAMBRE_ENFANT_8693C8A3-6476-4CD1-817C-E39D3EB0F530_1.jpg",
        ratio: "aspect-square",
        alt: "Intérieur de la chambre enfant avec bureau",
      },
    ],
  },
  {
    categorie: "SDB",
    images: [
      {
        id: "507d4b4c-795d-4cdf-a9f3-022a139c041c",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/int/V1/SDB_INVITE_ET_PARENT_V1/V1_SDB_DC316CCF-1BD6-4709-AA05-1A51BE632CA9_1.jpg",
        alt: "Salle de bain moderne avec douche à l'italienne",
      },
    ],
  },
  {
    categorie: "Cuisine",
    images: [
      {
        id: "e373cb5a-7aa7-433b-8037-47073b0a43b1",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/int/V1/SALON_CUISINE_V1/V1_SC_D7C3C12B-AD8F-4ED7-B102-7784EB143041_9.jpg",
        ratio: "aspect-square",
        alt: "Cuisine équipée avec îlot central",
      },
      {
        id: "0c9cc0ea-04ff-4dbd-b660-2ffbfa096983",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/int/V1/SALON_CUISINE_V1/V1_SC_E0275D31-A0C1-46E1-A867-45F7C8492628_6.jpg",
        ratio: "aspect-square",
        alt: "Cuisine moderne avec plan de travail spacieux",
      },
      {
        id: "242f7228-723a-4dd2-a303-db25a2b5af6b",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/int/V1/SALON_CUISINE_V1/V1_SC_83F5EA3B-8C23-498F-A955-C9D5A7A11B12_3.jpg",
        ratio: "aspect-square",
        alt: "Vue de la cuisine avec électroménager intégré",
      },
      {
        id: "035e2b9f-a6f7-4d34-80c6-fdfd71a20a2a",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/int/V1/SALON_CUISINE_V1/V1_SC_A725A51C-F4F8-4EF3-9084-E1EF001BE746_5.jpg",
        alt: "Intérieur de la cuisine avec espace de rangement moderne",
      },
    ],
  },
  {
    categorie: "Extérieur",
    images: [
      {
        id: "1ae96742-eb3c-45d2-97b0-03b8e1df8166",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/ext/EXT_77335AD3-C4F0-40BA-B7B1-2BBA421A78CA_10.jpg",
        alt: "Façade extérieure avec jardin",
      },
      {
        id: "a1ea7ef6-c5c1-4fbb-ac96-7b0f08387a70",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/ext/EXT_4C0DAFC6-6607-46AC-A681-C15B1CC94B87_4.jpg",
        alt: "Vue extérieure de la villa avec terrasse",
      },
      {
        id: "d131444b-d6a9-4d98-a0fc-6b63ebc2c987",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/ext/EXT_2913B2C3-23A8-48CA-B536-BE81E53071FA_5.jpg",
        alt: "Jardin extérieur avec mobilier de détente",
      },
      {
        id: "1a66dca4-1a2b-40c3-aa23-c69330474fbb",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/ext/EXT_748551CF-6E65-4D9C-82F5-FA3A2E6F491C_3.jpg",
        alt: "Transat en face de la piscine",
      },
    ],
  },
  {
    categorie: "Jardins",
    images: [
      {
        id: "34e1e302-5a26-41d2-9d4e-cb04e859950e",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/toumodi/5.jpg",
        alt: "Jardin paysager avec verdure",
      },
      {
        id: "58c7bf42-af24-4808-85fb-441d91af3f42",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/toumodi/8.jpg",
        alt: "Espace vert avec banc de jardin",
      },
    ],
  },
];
</script>

<template>
  <div class="space-y-8 sm:hidden">
    <div
      v-for="(columnGroup, columnGroupIdx) in resolvedImages"
      :key="columnGroupIdx"
      class="space-y-2 xl:contents"
    >
      <h6
        v-if="columnGroup.categorie"
        class="font-base font-light text-[10px] uppercase mx-4 mb-3"
      >
        <strong>{{ columnGroup.categorie }}</strong>
      </h6>
      <div v-for="(column, columnIdx) in columnGroup.images" :key="columnIdx">
        <NuxtLink :key="column.id" :to="{ name: '' }">
          <div
            :class="
              cn(
                'w-full overflow-hidden',
                column.ratio || 'aspect-h-3 aspect-w-2'
              )
            "
          >
            <img
              :src="column.imageUrl"
              :alt="column.alt"
              class="h-full w-full object-cover object-center"
            />
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
