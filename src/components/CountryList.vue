<template>
  <div class="country-list">
    <h2>Countries</h2>
    <ul>
      <li v-for="country in countries" :key="country.cca3">
        <img :src="country.flags[0]" alt="Flag" class="flag" />
        {{ country.name.common }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CountryList',
  data() {
    return {
      countries: []
    };
  },
  mounted() {
    this.fetchCountries();
  },
  methods: {
    async fetchCountries() {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        this.countries = response.data;
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    }
  }
};
</script>

<style scoped>
.country-list {
  padding: 20px;
}

.flag {
  width: 20px;
  height: 15px;
  margin-right: 10px;
}
</style>
