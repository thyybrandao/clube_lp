<template>
  <div
    class="md:flex items-center justify-center bg-gradient-to-r from-orange to-yellow w-full"
  >
    <div
      class="flex items-center bg-white lg:rounded-3xl lg:p-16 p-10 lg:m-20"
      data-aos="fade-up"
    >
      <div class="">
        <img src="../assets/group-promotion.png" alt="Promoções e descontos" />
      </div>
      <div class="flex flex-col lg:ml-10">
        <Title class="lg:mb-6 font-bold"
          ><span class="text-red">P</span>romoções e descontos</Title
        >
        <Subtitle class="md:w-[505px]"
          >No aplicativo você encontra promoção toda semana e com o clube você poderá ter desconto de até 20% no consumo.
          Baixe no seu celular o aplicativo Clube do Rei e tenha benefícios e vantagens na palma da sua mão. #ClubedoRei </Subtitle
        >
        <label
          for="registration"
          class="btn sm:w-64 bg-yellow hover:bg-red rounded-3xl text-black hover:text-white border-0 mt-6 animate-pulse"
        >
          Faça parte do clube
      
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "./Title.vue";
import Subtitle from "./Subtitle.vue";

export default {
  components: {
    Title,
    Subtitle,
  },
};
</script>
