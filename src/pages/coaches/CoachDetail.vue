<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <h2>Interested? Reach out now!</h2>
      <base-button link :to="contactLink">Contact</base-button>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    description() {
      return this.selectedCoach.description;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    contactLink() {
      return '/coaches/' + this.id + '/contact';
    },
  },
  created() {
    const items = this.$store.getters['coaches/coaches'];
    this.selectedCoach = items.find((i) => i.id === this.id);
    console.log(this.selectedCoach);
  },
};
</script>

<style>
</style>