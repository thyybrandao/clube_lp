<template>
  <div class="md:flex justify-center">
    <div class="flex flex-col md:flex-row items-center max-w-7xl p-8">
      <div class="flex flex-col lg:ml-10 md:pl-8">
        <Title class="lg:mb-6 font-bold"
          ><span class="text-red">S</span>obre o Clube do Rei</Title
        >
        <Subtitle class="md:pr-24 xl:pr-60"
          >Antes de abrir o meu restaurante, o Rei do Churrasquinho, eu tive
          cerca de 20 negócios. Fui de cabeleireiro a dono de mercearia, mas
          acabei me encontrando como ambulante: tive carrinho de churros e milho
          verde até chegar aos churrasquinhos. Estamos desde 2010. <br>
          O melhor espetinho de Registro. </Subtitle
        >
      </div>
      <div class="md:w-full md:pr-12" data-aos="fade-left">
        <img  src="../assets/about.png" alt="Promoções e descontos" />
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import Subtitle from "../components/Subtitle.vue";

export default {
  components: {
    Title,
    Subtitle,
  },
};
</script>
