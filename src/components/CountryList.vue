<template>
  <div class="country-list">
    <h2>Countries</h2>
    <ul>
      <li v-for="country in displayedCountries" :key="country.cca3">
        <img :src="country.flags.png" alt="Flag" class="flag" />
        {{ country.name.common }}
      </li>
    </ul>
    <div ref="loadMoreTrigger" class="load-more-trigger"></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CountryList',
  data() {
    return {
      countries: [],
      displayedCountries: [],
      itemsPerPage: 10,
      observer: null
    };
  },
  async mounted() {
    await this.fetchCountries();
    this.displayedCountries = this.countries.slice(0, this.itemsPerPage);
    this.initIntersectionObserver();
  },
  methods: {
    async fetchCountries() {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        this.countries = response.data;
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    },
    initIntersectionObserver() {
      this.observer = new IntersectionObserver(this.loadMore, {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
      });
      this.observer.observe(this.$refs.loadMoreTrigger);
    },
    loadMore(entries) {
      if (entries[0].isIntersecting) {
        const nextItems = this.countries.slice(
          this.displayedCountries.length,
          this.displayedCountries.length + this.itemsPerPage
        );
        this.displayedCountries = [...this.displayedCountries, ...nextItems];
      }
    }
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
};
</script>

<style scoped>
.country-list {
  padding: 20px;
  max-height: 400px; /* Adjust the height as needed */
  overflow-y: auto;
}

.flag {
  width: 20px;
  height: 15px;
  margin-right: 10px;
}

.load-more-trigger {
  height: 1px;
}
</style>
