<template>
  <div class="card card-normal m-4 bg-white shadow-xl">
    <figure>
      <img class="w-full bg-silver" src="https://via.placeholder.com/240" />
    </figure>
    <div class="card-body">
      <div class="flex flex-col items-center">
        <h2 class="card-title mb-4">{{ name }}</h2>
        <div class="badge badge-outline h-10 mb-2">
          <img class="mr-2 mb-2" src="../assets/map-pin.svg" alt="" />{{ city }}
        </div>
        <div class="badge badge-outline h-10">
          <img class="mr-2" src="../assets/phone.svg" alt="" />{{ phone }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    city: String,
    phone: Number,
  },
};
</script>
