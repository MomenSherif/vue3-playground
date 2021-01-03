<template>
  <form @submit.prevent="handleSubmit">
    <label for="email">Email</label>
    <input type="email" name="emal" id="email" required v-model="email" />

    <label for="password">Password</label>
    <input
      type="password"
      name="email"
      id="password"
      required
      v-model="password"
    />
    <div v-if="passwordErorr" class="error">{{ passwordErorr }}</div>

    <label for="role">Role</label>
    <select name="role" id="role" v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">UI/UX Designer</option>
    </select>

    <label for="skills">Skills</label>
    <input
      type="text"
      name="skills"
      id="skills"
      v-model="tempSkill"
      @keyup.enter="addSkill"
    />
    <div
      v-for="skill in skills"
      :key="skill"
      @click="deleteSkill(skill)"
      class="pill"
    >
      {{ skill }}
    </div>

    <div class="terms">
      <input type="checkbox" name="terms" id="terms" required v-model="terms" />
      <label for="terms">Accept terms and conditions</label>
    </div>

    <div class="submit">
      <button>Create an Account</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "",
      terms: false,
      tempSkill: "",
      skills: [],
      passwordErorr: "",
    };
  },
  methods: {
    addSkill() {
      if (!this.tempSkill) return;
      if (!this.skills.includes(this.tempSkill))
        this.skills.push(this.tempSkill);

      this.tempSkill = "";
    },
    deleteSkill(skillToDelete) {
      this.skills = this.skills.filter((skill) => skill !== skillToDelete);
    },
    handleSubmit() {
      this.passwordErorr =
        this.password.length > 5
          ? ""
          : "Password must be at least 6 characters long!";
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background-color: #fff;
  text-align-last: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin-right: 10px;
  position: relative;
  top: 2px;
}

.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background-color: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

button {
  background-color: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: #fff;
  border-radius: 20px;
}

.submit {
  display: flex;
  justify-content: center;
}

.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>