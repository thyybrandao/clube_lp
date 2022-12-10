<template>
  <div class="flex justify-center">
    <div
      class="flex flex-col md:flex-row items-center bg-white lg:rounded-3xl lg:p-16 p-10 "
      data-aos="fade-up"
    >
      <div class="flex flex-col lg:ml-10">
        <Title class="mb-6 font-bold"
          ><span class="text-red">S</span>eja um parceiro do Clube!</Title
        >
        <Subtitle class="md:w-[505px]"
          >Ao se tornar um parceiro do Clube do Rei, sua empresa passa a fazer
          parte da nossa rede para oferecer desconto exclusivos no aplicativo.
        </Subtitle>
      </div>

      <div class="lg:ml-10 lg:w-96 shadow-auto m-4">
        <label
          for="registration"
          class="btn w-64 bg-red hover:bg-yellow rounded-3xl text-white hover:text-black border-0 animate-pulse"
        >
          Faça parte do clube
          <!-- <img class="m-2 w-4" src="../assets/chevrons-down.svg" alt="" /> -->
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
