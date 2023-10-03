<template>
  <base-card class="container">
    <h2>Register as a coach now!</h2>
    <coach-form @save-data="saveData"></coach-form>
  </base-card>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
  components: { CoachForm },
  data() {
    return {
      firstName: '',
      lastName: '',
      description: '',
      rate: null,
      areas: [],
    };
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/addCoach', data);
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 50px auto;
}
</style>