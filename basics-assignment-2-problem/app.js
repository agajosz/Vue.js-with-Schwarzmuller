const app = Vue.createApp({
  data() {
    return {
      input: "INPUT",
      output: "OUTPUT",
      tempOutput: "OUTPUT"
    };
  },
  methods: {
      submit(){
          alert("Some alert!");
      },
      setInput(event){
        this.input = event.target.value;
      },
      setOutput(event){
          this.tempOutput = event.target.value;
      },
      confirmOutput(){
          this.output = this.tempOutput;
      }
  },
});

app.mount("#assignment");
