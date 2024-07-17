import u from "axios";
import { openBlock as r, createElementBlock as n, createElementVNode as a, Fragment as l, renderList as p, toDisplayString as d, pushScopeId as _, popScopeId as m } from "vue";
const h = (t, s) => {
  const e = t.__vccOpts || t;
  for (const [c, o] of s)
    e[c] = o;
  return e;
}, f = {
  name: "CountryList",
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
        const t = await u.get("https://restcountries.com/v3.1/all");
        this.countries = t.data;
      } catch (t) {
        console.error("Error fetching countries:", t);
      }
    }
  }
}, y = (t) => (_("data-v-5b455779"), t = t(), m(), t), v = { class: "country-list" }, g = /* @__PURE__ */ y(() => /* @__PURE__ */ a("h2", null, "Countries", -1));
function x(t, s, e, c, o, k) {
  return r(), n("div", v, [
    g,
    a("ul", null, [
      (r(!0), n(l, null, p(o.countries, (i) => (r(), n("li", {
        key: i.cca3
      }, d(i.name.common), 1))), 128))
    ])
  ]);
}
const C = /* @__PURE__ */ h(f, [["render", x], ["__scopeId", "data-v-5b455779"]]), E = {
  CountryList: C
};
export {
  C as CountryList,
  E as default
};
