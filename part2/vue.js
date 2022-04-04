Vue.component("password-helper", {
  data() {
    return {
      password: "",
      has_minimum_length: false,
      has_lowercase: false,
      has_uppercase: false,
      has_number: false,
      has_special: false,
    };
  },
  watch: {
    password() {
      this.has_minimum_length = this.password.length > 8;
      this.has_number = /\d/.test(this.password);
      this.has_lowercase = /[a-z]/.test(this.password);
      this.has_uppercase = /[A-Z]/.test(this.password);
      this.has_special = /[!@#\$%\^\&*\)\(+=._-]/.test(this.password);
    },
  },
});

var app = new Vue({
  el: "#app",
});
