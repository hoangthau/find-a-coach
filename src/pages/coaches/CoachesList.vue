<template>
  <section><coach-filter @change-filter="changeFilter"></coach-filter></section>
  <section>
    <base-card>
      <div class="controls">
        <base-button>Refresh</base-button>
        <base-button v-if="!isCoach" link to="/register"
          >Register a Coach</base-button
        >
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        ></coach-item>
      </ul>
      <h3 v-else>No coaches found</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import BaseButton from '../../components/ui/BaseButton.vue';
import BaseCard from '../../components/ui/BaseCard.vue';

export default {
  components: { CoachItem, BaseCard, BaseButton, CoachFilter },
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  // derived props from other props
  computed: {
    filteredCoaches() {
      const items = this.$store.getters['coaches/coaches'];
      return items.filter((item) => {
        if (this.filters.frontend && item.areas.includes('frontend')) {
          return true;
        }
        if (this.filters.backend && item.areas.includes('backend')) {
          return true;
        }
        if (this.filters.career && item.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
  },
  methods: {
    changeFilter(updatedFilters) {
      this.filters = updatedFilters;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>