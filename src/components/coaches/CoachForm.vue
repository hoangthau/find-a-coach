<template>
  <form @submit.prevent="submit">
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="firstName">Firstname</label>
      <input
        type="text"
        id="firstName"
        v-model.trim="firstName.val"
        @blur="clearVilidity('firstName')"
      />
      <p v-if="!firstName.isValid">This field must not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastName">Lastname</label>
      <input
        type="text"
        id="lastName"
        v-model.trim="lastName.val"
        @blur="clearVilidity('lastName')"
      />
      <p v-if="!lastName.isValid">This field must not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description.val"
        @blur="clearVilidity('description')"
      />
      <p v-if="!description.isValid">This field must not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !rate.isValid }">
      <label for="hourlyRate">Hourly Rate</label>
      <input
        type="number"
        id="hourlyRate"
        v-model.number="rate.val"
        @blur="clearVilidity('rate')"
      />
      <p v-if="!rate.isValid">This field must not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !areas.isValid }">
      <h3>Areas fo Expertise</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.val"
          @blur="clearVilidity('areas')"
        />
        <label for="frontend">Frontend</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.val"
          @blur="clearVilidity('areas')"
        />
        <label for="backend">Backend</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model="areas.val"
          @blur="clearVilidity('areas')"
        />
        <label for="career">Career</label>
      </div>
    </div>
    <base-button type="submit">Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      formIsValid: true,
      firstName: {
        val: '',
        isValid: true,
      },
      lastName: {
        val: '',
        isValid: true,
      },
      description: {
        val: '',
        isValid: true,
      },
      rate: {
        val: null,
        isValid: true,
      },
      areas: {
        val: [],
        isValid: true,
      },
    };
  },
  methods: {
    clearVilidity(input) {
      this[input].isValid = true;
    },
    validate() {
      this.formIsValid = true;
      if (this.firstName.val === '') {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.val === '') {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (Number(this.rate.val) <= 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
      if (!this.areas.val.length) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    submit() {
      const formData = {
        first: this.firstName.val,
        last: this.lastName.val,
        desc: this.description.val,
        rate: this.rate.val,
        areas: this.areas.val,
      };

      this.validate();

      if (!this.formIsValid) {
        return;
      }
      this.$emit('save-data', formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>