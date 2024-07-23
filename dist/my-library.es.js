import l from "axios";
import { openBlock as n, createElementBlock as c, createElementVNode as s, Fragment as d, renderList as h, createTextVNode as u, toDisplayString as p, pushScopeId as g, popScopeId as m } from "vue";
const _ = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [a, o] of t)
    r[a] = o;
  return r;
}, f = {
  name: "CountryList",
  data() {
    return {
      countries: [],
      displayedCountries: [],
      itemsPerPage: 10,
      observer: null
    };
  },
  async mounted() {
    await this.fetchCountries(), this.displayedCountries = this.countries.slice(0, this.itemsPerPage), this.initIntersectionObserver();
  },
  methods: {
    async fetchCountries() {
      try {
        const e = await l.get("https://restcountries.com/v3.1/all");
        this.countries = e.data;
      } catch (e) {
        console.error("Error fetching countries:", e);
      }
    },
    initIntersectionObserver() {
      this.observer = new IntersectionObserver(this.loadMore, {
        root: null,
        rootMargin: "0px",
        threshold: 1
      }), this.observer.observe(this.$refs.loadMoreTrigger);
    },
    loadMore(e) {
      if (e[0].isIntersecting) {
        const t = this.countries.slice(
          this.displayedCountries.length,
          this.displayedCountries.length + this.itemsPerPage
        );
        this.displayedCountries = [...this.displayedCountries, ...t];
      }
    }
  },
  beforeDestroy() {
    this.observer && this.observer.disconnect();
  }
}, v = (e) => (g("data-v-25fd2888"), e = e(), m(), e), y = { class: "country-list" }, C = /* @__PURE__ */ v(() => /* @__PURE__ */ s("h2", null, "Countries", -1)), b = ["src"], I = {
  ref: "loadMoreTrigger",
  class: "load-more-trigger"
};
function x(e, t, r, a, o, M) {
  return n(), c("div", y, [
    C,
    s("ul", null, [
      (n(!0), c(d, null, h(o.displayedCountries, (i) => (n(), c("li", {
        key: i.cca3
      }, [
        s("img", {
          src: i.flags[0],
          alt: "Flag",
          class: "flag"
        }, null, 8, b),
        u(" " + p(i.name.common), 1)
      ]))), 128))
    ]),
    s("div", I, null, 512)
  ]);
}
const P = /* @__PURE__ */ _(f, [["render", x], ["__scopeId", "data-v-25fd2888"]]), O = {
  CountryList: P
};
export {
  P as CountryList,
  O as default
};
