const app = Vue.createApp({
  data() {
    return {
      currentClass: "",
      paragraphIsVisible: true,
      color: "",
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.currentClass === "user1",
        user2: this.currentClass === "user2",
        visible: this.paragraphIsVisible,
        hidden: !this.paragraphIsVisible,
      };
    },
  },
  methods: {
    toggleParagraphVisibility() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
  },
});

app.mount("#assignment");
