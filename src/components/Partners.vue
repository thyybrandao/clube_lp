<template>
  <div class="flex lg:flex-row justify-center">
    <div class="lg:max-w-7xl">
      <Title class="lg:pl-20 font-bold"
        ><span class="text-red">C</span>onheça alguns parceiros</Title
      >
      <div
        id="partners"
        class="flex flex-col lg:flex-row lg:p-10 mt-4 mb-10"
        data-aos="lg:fade-up"
        data-aos-anchor-placement="lg:center-bottom"
      >
        <PartnersCard
          name="Nome do Parceiro"
          city="Cidade"
          phone="13 99999-9999"
        ></PartnersCard>
        <PartnersCard
          name="Nome do Parceiro"
          city="Cidade"
          phone="13 99999-9999"
        ></PartnersCard>
        <PartnersCard
          name="Nome do Parceiro"
          city="Cidade"
          phone="13 99999-9999"
        ></PartnersCard>
        <PartnersCard
          name="Nome do Parceiro"
          city="Cidade"
          phone="13 99999-9999"
        ></PartnersCard>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "./Title.vue";
import PartnersCard from "./PartnersCard.vue";
export default {
  components: {
    Title,
    PartnersCard,
  },
};
</script>
