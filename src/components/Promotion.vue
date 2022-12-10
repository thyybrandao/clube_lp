<template>
  <div class="flex lg:flex-row justify-center">
    <div class="lg:max-w-7xl">
      <Title class="lg:pl-20 font-bold"
        ><span class="text-red">P</span>romoções da semana</Title
      >
      <div
        id="promotion"
        class="flex flex-col lg:flex-row lg:p-10 mt-4 mb-10"
        data-aos="lg:fade-up"
        data-aos-anchor-placement="lg:center-bottom"
      >
      <PromotionCard name="Nome do produto" real="R$10,00"></PromotionCard>
      <PromotionCard name="Nome do produto" real="R$10,00"></PromotionCard>
      <PromotionCard name="Nome do produto" real="R$10,00"></PromotionCard>
      <PromotionCard name="Nome do produto" real="R$10,00"></PromotionCard>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "./Title.vue";
import Subtitle from "./Subtitle.vue";
import PromotionCard from "./PromotionCard.vue";
import { onMounted } from "vue";

const getScroll = document.getElementById("promotion");

onMounted(() => {});
</script>
