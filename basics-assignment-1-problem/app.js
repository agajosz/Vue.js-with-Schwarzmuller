const app = Vue.createApp({
  data() {
    return {
      name: "Adrian",
      age: 25,
      imageLink:
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg",
      value: "Adrian",
      random: Math.random(),
    };
  },
});

app.mount("#assignment");
