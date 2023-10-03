export default {
  addCoach(context, payload) {
    const coach = {
      id: context.rootGetters.userId,
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      areas: payload.areas,
      hourlyRate: payload.rate,
    };
    context.commit('addCoach', coach);
  },
};
