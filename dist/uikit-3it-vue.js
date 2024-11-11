import { computed as M, resolveComponent as K, openBlock as d, createElementBlock as u, normalizeClass as j, Fragment as k, createTextVNode as A, toDisplayString as D, createCommentVNode as h, createBlock as J, createElementVNode as f, createVNode as $, withCtx as Fe, renderList as W, renderSlot as Y, mergeProps as zt, createStaticVNode as Ft, ref as z, watch as de, watchEffect as Me, withDirectives as Ue, withKeys as Xe, vModelText as kt, onMounted as Wt, unref as ze, normalizeStyle as We, vModelDynamic as Yt } from "vue";
import { useRoute as $t } from "vue-router";
import { codeToHtml as It } from "shiki";
import be from "dayjs";
import Kt from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";
const Ut = ["disabled"], Xt = /* @__PURE__ */ f("div", { class: "spinner-border spinner-border-sm me-1" }, null, -1), Ye = {
  __name: "ButtonComponent",
  props: {
    className: {
      type: String,
      required: !0
    },
    text: {
      type: String,
      required: !0
    },
    icon: {
      type: String,
      default: ""
    },
    iconClass: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean,
      default: !1
    },
    loadingText: {
      type: String,
      default: "Enviado..."
    },
    isDisabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["emitEvent"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = M(() => ["eit-btn", `${n.className}`]), i = (r) => {
      o("emitEvent", r);
    };
    return (r, s) => {
      const l = K("font-awesome-icon");
      return d(), u("button", {
        onClick: s[0] || (s[0] = (p) => i(p)),
        class: j([a.value, "d-flex align-items-center justify-content-center gap-1"]),
        disabled: n.isDisabled
      }, [
        n.loading ? (d(), u(k, { key: 0 }, [
          Xt,
          A(" " + D(n.loadingText), 1)
        ], 64)) : h("", !0),
        n.loading ? h("", !0) : (d(), u(k, { key: 1 }, [
          n.icon ? (d(), J(l, {
            key: 0,
            icon: n.icon,
            class: j(e.iconClass)
          }, null, 8, ["icon", "class"])) : h("", !0),
          A(" " + D(e.text), 1)
        ], 64))
      ], 10, Ut);
    };
  }
}, Gt = { "aria-label": "breadcrumb" }, Zt = { class: "eit-breadcrumb" }, Jt = /* @__PURE__ */ f("span", { class: "px-2 eit-color--text-soft" }, "/", -1), Qt = {
  key: 1,
  class: "eit-color--text-soft"
}, en = {
  __name: "BreadcrumbComponent",
  setup(e) {
    const t = $t(), n = M(() => {
      let o = [], a = "";
      return t.matched.forEach((i, r) => {
        i.redirect ? a = "/" + i.redirect.path : a += "/" + i.path.split("/")[r + 1], o.push({
          name: i.name,
          title: i.meta.title || "Sin título",
          path: a,
          last: r === t.matched.length - 1
        });
      }), o;
    });
    return (o, a) => {
      const i = K("font-awesome-icon"), r = K("router-link");
      return d(), u("nav", Gt, [
        f("ul", Zt, [
          f("li", null, [
            $(r, {
              to: "/",
              class: "eit-color--text-soft eit-color--text-soft--link"
            }, {
              default: Fe(() => [
                $(i, { icon: "fa-solid fa-house" })
              ]),
              _: 1
            }),
            Jt
          ]),
          (d(!0), u(k, null, W(n.value, (s, l) => (d(), u("li", {
            key: l,
            class: "eit-breadcrumb__item"
          }, [
            Y(o.$slots, s.name, zt({ ref_for: !0 }, s), () => [
              s.last ? (d(), u("span", Qt, D(s.name), 1)) : (d(), J(r, {
                key: 0,
                to: s.path,
                class: "eit-color--text eit-color--text--link eit-color--underline"
              }, {
                default: Fe(() => [
                  A(D(s.name), 1)
                ]),
                _: 2
              }, 1032, ["to"]))
            ])
          ]))), 128))
        ])
      ]);
    };
  }
}, tn = ["innerHTML"], Ee = {
  __name: "BadgeComponent",
  props: {
    className: {
      type: String,
      required: !0
    },
    text: {
      type: [String, Number],
      required: !0,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e;
    return (n, o) => {
      const a = K("font-awesome-icon");
      return d(), u("span", {
        key: `badge-${t.text}`,
        class: j(`eit-badge ${t.className}`)
      }, [
        t.icon ? (d(), J(a, {
          key: 0,
          icon: t.icon,
          class: "me-1"
        }, null, 8, ["icon"])) : h("", !0),
        f("span", {
          innerHTML: t.text
        }, null, 8, tn)
      ], 2);
    };
  }
}, nn = {
  key: 0,
  class: "table eit-table eit-table-responsive"
}, on = {
  key: 0,
  class: "eit-skeleton__table-first-td"
}, an = /* @__PURE__ */ f("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "80%" }
}, null, -1), sn = [
  an
], rn = { key: 1 }, ln = /* @__PURE__ */ f("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "60%" }
}, null, -1), cn = [
  ln
], dn = {
  key: 0,
  class: "eit-skeleton__table-first-td"
}, un = /* @__PURE__ */ f("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), fn = [
  un
], pn = { key: 1 }, mn = /* @__PURE__ */ f("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), vn = [
  mn
], hn = /* @__PURE__ */ Ft('<div class="row"><div class="col-12"><div class="d-flex"><div class="flex-shrink-0"><div class="eit-skeleton eit-skeleton__btn-square"></div></div><div class="flex-grow-1 ms-3"><div class="d-flex"><div class="flex-grow-1 ms-3"><div class="eit-skeleton eit-skeleton__title my-2" style="width:40%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div></div><div class="flex-shrink-0"><div class="eit-skeleton eit-skeleton__text my-2" style="width:30px;"></div></div></div></div></div></div></div><div class="row flex-grow-1"><div class="col-12 d-flex flex-column flex-grow-1"><div class="eit-slide__content flex-grow-1"><div class="mt-5"><div class="col-12"><h5 class="mb-3"><div class="eit-skeleton eit-skeleton__title my-2" style="width:20%;"></div></h5><ul class="list-unstyled"><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:40%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:20%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:20%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li></ul></div></div></div></div></div>', 2), Ge = {
  __name: "SkeletonComponent",
  props: {
    type: {
      type: String,
      required: !0
    },
    table: {
      type: Object,
      required: !1,
      default() {
        return { row: 3, column: 7 };
      }
    }
  },
  setup(e) {
    const t = e;
    return (n, o) => (d(), u(k, null, [
      t.type === "table" ? (d(), u("table", nn, [
        f("thead", null, [
          f("tr", null, [
            (d(!0), u(k, null, W(t.table.column, (a) => (d(), u(k, { key: a }, [
              a === 1 ? (d(), u("th", on, sn)) : h("", !0),
              a > 1 ? (d(), u("th", rn, cn)) : h("", !0)
            ], 64))), 128))
          ])
        ]),
        f("tbody", null, [
          (d(!0), u(k, null, W(t.table.row, (a) => (d(), u("tr", { key: a }, [
            (d(!0), u(k, null, W(t.table.column, (i) => (d(), u(k, { key: i }, [
              i === 1 ? (d(), u("td", dn, fn)) : h("", !0),
              i > 1 ? (d(), u("td", pn, vn)) : h("", !0)
            ], 64))), 128))
          ]))), 128))
        ])
      ])) : h("", !0),
      t.type === "detail" ? (d(), u(k, { key: 1 }, [
        hn
      ], 64)) : h("", !0)
    ], 64));
  }
}, yn = { class: "d-flex align-items-center" }, gn = { class: "flex-shrink-0 d-flex align-items-center eit-alert__icon me-2" }, _n = ["innerHTML"], Ct = {
  __name: "AlertComponent",
  props: {
    type: {
      type: String,
      default: "primary"
    },
    message: {
      type: String,
      required: !0,
      default: ""
    },
    icon: {
      type: String,
      default: "info"
    },
    iconClass: {
      type: String,
      default: ""
    },
    animation: {
      type: Object,
      default: () => ({ active: !1, show: !1 })
    }
  },
  setup(e) {
    const t = e;
    return (n, o) => {
      const a = K("font-awesome-icon");
      return d(), u("div", {
        class: j(`eit-alert eit-alert--${t.type} ${t.animation.active ? "eit-alert--animation" : "eit-alert--default"} ${t.animation.show ? "eit-alert--animation--show" : ""}`)
      }, [
        f("div", yn, [
          f("div", gn, [
            $(a, {
              icon: t.icon,
              class: j(e.iconClass)
            }, null, 8, ["icon", "class"])
          ]),
          f("div", {
            class: "flex-grow-1 eit-alert__text",
            innerHTML: t.message
          }, null, 8, _n)
        ])
      ], 2);
    };
  }
}, bn = { class: "row" }, xn = { class: "col-12" }, wn = { class: "table eit-table eit-table-responsive" }, kn = ["onClick"], $n = {
  key: 0,
  scope: "col",
  class: "text-center"
}, Cn = { class: "pe-3 d-lg-none" }, On = ["onClick"], Sn = {
  key: 0,
  class: "d-flex flex-wrap gap-1"
}, Pn = {
  key: 2,
  class: "eit-table__string"
}, Dn = {
  key: 3,
  class: "eit-table__string"
}, jn = {
  key: 0,
  class: "text-center"
}, An = { class: "dropdown eit-dropdown d-none d-lg-block" }, Bn = {
  href: "javascript:",
  class: "eit-btn-action",
  "data-bs-toggle": "dropdown"
}, Rn = { class: "dropdown-menu dropdown-custom-menu" }, En = ["onClick"], Tn = ["onClick"], Mn = { class: "d-flex w-100 justify-content-between align-items-center d-lg-none text-end" }, Ln = /* @__PURE__ */ f("strong", null, "Acciones:", -1), Nn = { class: "d-flex flex-wrap gap-2 ms-3" }, qn = ["onClick"], Vn = ["onClick"], Hn = ["onClick"], zn = {
  __name: "TableComponent",
  props: {
    //Data
    data: {
      type: Array,
      required: !0
    },
    //Configuration
    columns: {
      type: Array,
      required: !0
    },
    columnLink: {
      type: Number,
      required: !1,
      default: 1
    },
    sort: {
      type: Object,
      required: !1
    },
    //Loading
    loading: {
      type: Boolean,
      required: !1
    },
    skeleton: {
      type: Object,
      required: !1
    },
    //Actions
    actions: {
      type: Array,
      required: !1,
      default: () => []
    },
    enabledActions: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: [
    "viewRecord",
    "editRecord",
    "deleteRecord",
    "downloadRecord",
    "updateSort",
    "enabledDisabledRecord"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, a = (c) => {
      o("updateSort", { index: c, asc: !n.sort.asc });
    }, i = (c) => typeof c == "string", r = (c) => typeof c == "object" && c !== null && !Array.isArray(c), s = (c) => Array.isArray(c), l = (c) => {
      if (c == null) return !0;
    }, p = (c) => Object.keys(c).includes("status") ? !c.status.status && "disabled" : "";
    return (c, v) => {
      var _, O, b, x;
      const y = K("font-awesome-icon");
      return d(), u("div", bn, [
        f("div", xn, [
          e.loading ? (d(), J(Ge, {
            key: 0,
            type: "table",
            table: { row: (_ = e.skeleton) == null ? void 0 : _.row, column: (O = e.skeleton) == null ? void 0 : O.column }
          }, null, 8, ["table"])) : h("", !0),
          !e.loading && !((b = e.data) != null && b.length) ? (d(), J(Ct, {
            key: 1,
            ref: "alert",
            class: "mb-3",
            type: "info",
            icon: "fa-solid fa-info",
            message: "<strong>No hay resultados</strong> para tu búsqueda."
          }, null, 512)) : h("", !0),
          !e.loading && ((x = e.data) != null && x.length) ? (d(), u(k, { key: 2 }, [
            f("table", wn, [
              f("thead", null, [
                f("tr", null, [
                  (d(!0), u(k, null, W(e.columns, (g, P) => (d(), u("th", {
                    key: `column-${P}`,
                    scope: "col"
                  }, [
                    f("a", {
                      onClick: (m) => a(P),
                      href: "javascript:",
                      class: "d-flex justify-content-between"
                    }, [
                      A(D(g) + " ", 1),
                      e.sort.index === P ? (d(), u("span", {
                        key: `icono-${g}`,
                        class: "d-flex ms-2 eit-color--text"
                      }, [
                        e.sort.asc ? h("", !0) : (d(), u("span", {
                          key: `down-${g}`
                        }, [
                          $(y, { icon: "fa-solid fa-sort-down align-baseline" })
                        ])),
                        e.sort.asc ? (d(), u("span", {
                          key: `up-${g}`
                        }, [
                          $(y, { icon: "fa-solid fa-sort-up align-baseline" })
                        ])) : h("", !0)
                      ])) : (d(), u("span", {
                        key: `key-${g}`
                      }, [
                        $(y, { icon: "fa-solid fa-sort" })
                      ]))
                    ], 8, kn)
                  ]))), 128)),
                  e.enabledActions ? (d(), u("th", $n, " Acciones ")) : h("", !0)
                ])
              ]),
              f("tbody", null, [
                (d(!0), u(k, null, W(e.data, (g, P) => (d(), u("tr", {
                  key: `row-${P}`,
                  class: j(p(g))
                }, [
                  (d(!0), u(k, null, W(g, (m, w) => (d(), u("td", {
                    key: `value-${w}`
                  }, [
                    f("strong", Cn, D(e.columns[Object.keys(g).indexOf(w)]) + ":", 1),
                    Object.keys(g)[e.columnLink] === w ? (d(), u(k, { key: 0 }, [
                      e.actions.find((C) => C.name === "view") ? (d(), u("a", {
                        key: 0,
                        onClick: (C) => e.actions.find((S) => S.name === "view" && S.handler(g)),
                        href: "javascript:",
                        class: "eit-table__link"
                      }, D(m || "Sin datos"), 9, On)) : (d(), u(k, { key: 1 }, [
                        A(D(m || "Sin datos"), 1)
                      ], 64))
                    ], 64)) : h("", !0),
                    Object.keys(g)[e.columnLink] !== w ? (d(), u(k, { key: 1 }, [
                      s(m) ? (d(), u("div", Sn, [
                        (d(!0), u(k, null, W(m, (C, S) => (d(), u("span", {
                          key: `value-array-${S}`,
                          class: "d-flex flex-wrap gap-1"
                        }, [
                          $(Ee, {
                            text: C.name ? C.name : "Sin datos",
                            className: C.className
                          }, null, 8, ["text", "className"])
                        ]))), 128))
                      ])) : h("", !0),
                      r(m) ? (d(), J(Ee, {
                        key: 1,
                        text: m.name ? m.name : "Sin datos",
                        className: m.className
                      }, null, 8, ["text", "className"])) : h("", !0),
                      i(m) ? (d(), u("span", Pn, D(m || "Sin datos"), 1)) : h("", !0),
                      l(m) ? (d(), u("span", Dn, " Sin datos ")) : h("", !0)
                    ], 64)) : h("", !0)
                  ]))), 128)),
                  e.enabledActions ? (d(), u("td", jn, [
                    f("div", An, [
                      f("a", Bn, [
                        $(y, { icon: "fa-solid fa-ellipsis" })
                      ]),
                      f("ul", Rn, [
                        (d(!0), u(k, null, W(e.actions, (m) => (d(), u("li", {
                          key: m.name,
                          class: "mx-2"
                        }, [
                          m.booleanKey ? (d(), u("a", {
                            key: 0,
                            onClick: (w) => m.handler(g),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            g[m.booleanKey] ? h("", !0) : (d(), u(k, { key: 0 }, [
                              $(y, {
                                icon: m.true.icon,
                                class: j(m.true.iconClass)
                              }, null, 8, ["icon", "class"]),
                              A(" " + D(m.true.label), 1)
                            ], 64)),
                            g[m.booleanKey] ? (d(), u(k, { key: 1 }, [
                              $(y, {
                                icon: m.false.icon,
                                class: j(m.false.iconClass)
                              }, null, 8, ["icon", "class"]),
                              A(" " + D(m.false.label), 1)
                            ], 64)) : h("", !0)
                          ], 8, En)) : (d(), u("a", {
                            key: 1,
                            onClick: (w) => m.handler(g),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            $(y, {
                              icon: m.icon,
                              class: j(m.iconClass)
                            }, null, 8, ["icon", "class"]),
                            A(" " + D(m.label), 1)
                          ], 8, Tn))
                        ]))), 128))
                      ])
                    ]),
                    f("div", Mn, [
                      Ln,
                      f("div", Nn, [
                        (d(!0), u(k, null, W(e.actions, (m) => (d(), u(k, {
                          key: m.name
                        }, [
                          m.booleanKey ? (d(), u(k, { key: 0 }, [
                            g[m.booleanKey].status ? h("", !0) : (d(), u("a", {
                              key: 0,
                              onClick: (w) => m.handler(g),
                              href: "javascript:",
                              class: "eit-btn eit-btn-outline--gray eit-btn--square"
                            }, [
                              $(y, {
                                icon: m.true.icon,
                                class: j(m.true.iconClass)
                              }, null, 8, ["icon", "class"])
                            ], 8, qn)),
                            g[m.booleanKey].status ? (d(), u("a", {
                              key: 1,
                              onClick: (w) => m.handler(g),
                              href: "javascript:",
                              class: "eit-btn eit-btn-outline--gray eit-btn--square"
                            }, [
                              $(y, {
                                icon: m.false.icon,
                                class: j(m.false.iconClass)
                              }, null, 8, ["icon", "class"])
                            ], 8, Vn)) : h("", !0)
                          ], 64)) : (d(), u("a", {
                            key: 1,
                            onClick: (w) => m.handler(g),
                            href: "javascript:",
                            class: "eit-btn eit-btn-outline--gray eit-btn--square"
                          }, [
                            $(y, {
                              icon: m.icon,
                              class: j(m.iconClass)
                            }, null, 8, ["icon", "class"])
                          ], 8, Hn))
                        ], 64))), 128))
                      ])
                    ])
                  ])) : h("", !0)
                ], 2))), 128))
              ])
            ]),
            Y(c.$slots, "paginator")
          ], 64)) : h("", !0)
        ])
      ]);
    };
  }
}, Fn = { class: "eit-paginator gap-2" }, Wn = ["disabled"], Yn = { class: "eit-color--text eit-font__size--x1" }, In = ["disabled"], Kn = {
  __name: "PaginationComponent",
  props: {
    data: {
      type: Object,
      required: !0
    }
  },
  emits: ["updatePaginator"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = z(n.data.currentPage), i = () => a.value++, r = () => a.value--, s = () => {
      a.value <= 0 && (a.value = 1), a.value > n.data.finalPage && (a.value = n.data.finalPage);
    }, l = (p) => {
      p.target.select();
    };
    return de(a, () => {
      a.value > 0 && a.value <= n.data.finalPage && o("updatePaginator", a.value);
    }), Me(() => {
      n.data && (a.value = n.data.currentPage);
    }), (p, c) => {
      const v = K("font-awesome-icon");
      return d(), u("div", Fn, [
        f("button", {
          onClick: r,
          disabled: e.data.currentPage === 1,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          $(v, { icon: "fa-solid fa-chevron-left" })
        ], 8, Wn),
        Ue(f("input", {
          type: "number",
          "onUpdate:modelValue": c[0] || (c[0] = (y) => a.value = y),
          onInput: s,
          onKeyup: Xe(s, ["enter"]),
          onBlur: s,
          onFocus: l,
          class: "eit-input eit-paginator__input eit-font__size--x1 text-center",
          "aria-label": "Número de página"
        }, null, 544), [
          [
            kt,
            a.value,
            void 0,
            { number: !0 }
          ]
        ]),
        f("span", Yn, [
          A(" de " + D(e.data.finalPage) + " ", 1),
          e.data.finalPage === 1 ? (d(), u(k, { key: 0 }, [
            A(" página ")
          ], 64)) : h("", !0),
          e.data.finalPage > 1 ? (d(), u(k, { key: 1 }, [
            A(" páginas ")
          ], 64)) : h("", !0)
        ]),
        f("button", {
          onClick: i,
          disabled: e.data.currentPage === e.data.finalPage,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          $(v, { icon: "fa-solid fa-chevron-right" })
        ], 8, In)
      ]);
    };
  }
}, Un = { class: "row" }, Xn = { class: "col-12" }, Gn = { class: "d-flex" }, Zn = { class: "flex-shrink-0" }, Jn = { class: "flex-grow-1" }, Qn = { class: "d-flex" }, eo = { class: "flex-grow-1 d-flex flex-column ms-3" }, to = { class: "eit-font--primary mb-0" }, no = { class: "eit-color--text mb-0" }, oo = { class: "flex-shrink-0" }, ao = {
  key: 0,
  class: "dropdown eit-dropdown d-none d-lg-block"
}, io = {
  href: "javascript:",
  class: "eit-btn-action",
  "data-bs-toggle": "dropdown"
}, so = { class: "dropdown-menu dropdown-custom-menu" }, ro = {
  key: 0,
  class: "mx-2"
}, lo = {
  key: 1,
  class: "mx-2"
}, co = {
  key: 2,
  class: "m-2"
}, uo = /* @__PURE__ */ f("div", { class: "eit-border--bottom eit-border--color" }, null, -1), fo = [
  uo
], po = {
  key: 3,
  class: "mx-2"
}, mo = {
  key: 4,
  class: "mx-2"
}, vo = { class: "row flex-grow-1" }, ho = { class: "col-12 d-flex flex-column flex-grow-1" }, yo = { class: "eit-slide__content flex-grow-1" }, go = {
  __name: "DetailComponent",
  props: {
    //Data
    record: {
      type: Object,
      default: () => ({})
    },
    //Configuration
    slide: {
      type: Boolean,
      required: !0,
      default: !1
    },
    slideSmall: {
      type: Boolean,
      required: !1,
      default: !1
    },
    //Loading
    loading: {
      type: Boolean,
      required: !1,
      default: !0
    },
    //Actions
    dropdown: {
      type: Boolean,
      required: !1,
      default: !0
    },
    editRecord: {
      type: String,
      default: null
    },
    deleteRecord: {
      type: String,
      default: null
    },
    downloadRecord: {
      type: String,
      default: null
    },
    enabledDisabledRecord: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "emitslide",
    "enabledDisabledRecord",
    "editRecord",
    "deleteRecord",
    "downloadRecord"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, a = () => {
      o("emitslide");
    }, i = () => {
      o("enabledDisabledRecord", n.record);
    }, r = () => {
      o("editRecord", n.record);
    }, s = () => {
      o("deleteRecord", n.record);
    }, l = () => {
      o("downloadRecord", n.record);
    };
    return (p, c) => {
      const v = K("font-awesome-icon");
      return d(), u("section", {
        class: j(["eit-slide d-flex flex-column", [e.slide && "eit-slide--right", e.slideSmall && "eit-slide--small"]])
      }, [
        n.loading ? (d(), J(Ge, {
          key: 0,
          type: "detail"
        })) : h("", !0),
        n.loading ? h("", !0) : (d(), u(k, { key: 1 }, [
          f("div", Un, [
            f("div", Xn, [
              f("div", Gn, [
                f("div", Zn, [
                  f("button", {
                    class: "eit-btn eit-btn--gray eit-btn--square",
                    onClick: a
                  }, [
                    $(v, {
                      icon: "fa-solid fa-angle-right",
                      class: "eit-font__size--x5 d-none d-lg-block"
                    }),
                    $(v, {
                      icon: "fa-solid fa-angle-down",
                      class: "eit-font__size--x5 d-lg-none"
                    })
                  ])
                ]),
                f("div", Jn, [
                  f("div", Qn, [
                    f("div", eo, [
                      f("h4", to, [
                        f("strong", null, [
                          Y(p.$slots, "title")
                        ])
                      ]),
                      f("p", no, [
                        Y(p.$slots, "subtitle")
                      ])
                    ]),
                    f("div", oo, [
                      n.dropdown ? (d(), u("div", ao, [
                        f("a", io, [
                          $(v, { icon: "fa-solid fa-ellipsis" })
                        ]),
                        f("ul", so, [
                          n.editRecord ? (d(), u("li", ro, [
                            f("a", {
                              onClick: r,
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              $(v, {
                                icon: "fa-solid fa-square-pen",
                                class: "eit-color--yellow"
                              }),
                              A(" " + D(e.editRecord), 1)
                            ])
                          ])) : h("", !0),
                          n.downloadRecord ? (d(), u("li", lo, [
                            f("a", {
                              onClick: l,
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              $(v, {
                                icon: "fa-solid fa-download",
                                class: "eit-color--blue"
                              }),
                              A(" " + D(n.downloadRecord), 1)
                            ])
                          ])) : h("", !0),
                          e.deleteRecord || e.enabledDisabledRecord ? (d(), u("li", co, fo)) : h("", !0),
                          n.enabledDisabledRecord ? (d(), u("li", po, [
                            f("a", {
                              onClick: i,
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              n.record.status ? h("", !0) : (d(), u(k, { key: 0 }, [
                                $(v, {
                                  icon: "fa-regular fa-circle-check",
                                  class: "eit-color--green"
                                }),
                                A(" Habilitar ")
                              ], 64)),
                              n.record.status ? (d(), u(k, { key: 1 }, [
                                $(v, {
                                  icon: "fa-solid fa-ban",
                                  class: "eit-color--red"
                                }),
                                A(" Deshabilitar ")
                              ], 64)) : h("", !0)
                            ])
                          ])) : h("", !0),
                          n.deleteRecord ? (d(), u("li", mo, [
                            f("a", {
                              onClick: s,
                              class: "dropdown-item dropdown-custom-menu-item eit-color--red",
                              href: "javascript:"
                            }, [
                              $(v, {
                                icon: "fa-solid fa-trash",
                                class: "eit-color--red"
                              }),
                              A(" " + D(n.deleteRecord), 1)
                            ])
                          ])) : h("", !0)
                        ])
                      ])) : h("", !0)
                    ])
                  ])
                ])
              ])
            ])
          ]),
          f("div", vo, [
            f("div", ho, [
              f("div", yo, [
                Y(p.$slots, "component")
              ])
            ])
          ]),
          Y(p.$slots, "footer")
        ], 64))
      ], 2);
    };
  }
}, _o = { class: "d-flex justify-content-between align-items-center" }, bo = ["onClick"], xo = {
  key: 0,
  class: "eit-tabs__badge"
}, wo = { class: "d-flex flex-column" }, ko = {
  __name: "TabComponent",
  props: {
    //Data
    data: {
      type: Array,
      required: !0,
      default() {
        return [];
      }
    },
    className: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e, n = (i) => i < 99 ? i : "+99", o = z(0), a = (i) => {
      o.value = i;
    };
    return (i, r) => (d(), u(k, null, [
      f("div", _o, [
        f("ul", {
          class: j(`eit-tabs ${t.className}`)
        }, [
          (d(!0), u(k, null, W(e.data, (s, l) => (d(), u("li", {
            key: l,
            class: "eit-tabs__item"
          }, [
            f("a", {
              href: "javascript:",
              onClick: (p) => a(l),
              class: j(["eit-tabs__item__link", o.value === l ? "active" : ""])
            }, [
              A(D(s.name) + " ", 1),
              s.number ? (d(), u("span", xo, D(n(s.number)), 1)) : h("", !0)
            ], 10, bo)
          ]))), 128))
        ], 2),
        Y(i.$slots, "dropdown")
      ]),
      f("div", wo, [
        Y(i.$slots, `tab-${o.value}`)
      ])
    ], 64));
  }
}, $o = ["innerHTML"], Co = {
  __name: "HighlightComponent",
  props: {
    code: {
      type: String,
      required: !0,
      default: ""
    },
    lang: {
      type: String,
      default: "vue"
    },
    theme: {
      type: String,
      default: "github-dark"
    }
  },
  setup(e) {
    const t = e, n = z("");
    return (async () => {
      const a = `${t.code}`;
      n.value = await It(a, {
        lang: t.lang,
        theme: t.theme
      });
    })(), (a, i) => (d(), u("div", { innerHTML: n.value }, null, 8, $o));
  }
}, Oo = { class: "eit-dialog__content" }, So = { class: "d-flex justify-content-between align-items-center" }, Po = { class: "d-flex gap-2 justify-content-end mt-3" }, Do = {
  __name: "DialogComponent",
  props: {
    className: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean,
      default: !1
    },
    loadingSubmit: {
      type: Boolean,
      default: !1
    },
    btnSubmit: {
      type: Boolean,
      default: !1
    },
    disabledSubmit: {
      type: Boolean,
      default: !1
    },
    scrollable: {
      type: Boolean,
      default: !1
    },
    btnSubmitConfig: {
      type: Object,
      default: () => ({
        text: "Guardar",
        loadingText: "Guardando...",
        className: "eit-btn--primary"
      })
    }
  },
  emits: [
    "emitSubmit",
    "emitCloseDialog"
  ],
  setup(e, { expose: t, emit: n }) {
    const o = e, a = n, i = z(null), r = () => {
      i.value.showModal(), i.value.classList.add("show");
    }, s = () => {
      i.value.close(), i.value.classList.remove("show"), a("emitCloseDialog");
    }, l = (c) => {
      c.key === "Escape" && s();
    }, p = () => {
      a("emitSubmit");
    };
    return Wt(() => {
      document.addEventListener("keyup", l);
    }), t({ showDialog: r, closeDialog: s }), (c, v) => {
      const y = K("font-awesome-icon");
      return d(), u("dialog", {
        ref_key: "dialog",
        ref: i,
        class: j(["eit-dialog", o.className]),
        onKeyup: Xe(s, ["esc"])
      }, [
        f("div", Oo, [
          e.loading ? (d(), J(ze(Tt), {
            key: 0,
            size: "70"
          })) : h("", !0),
          e.loading ? h("", !0) : (d(), u(k, { key: 1 }, [
            f("div", So, [
              Y(c.$slots, "head"),
              f("button", {
                onClick: s,
                class: "eit-dialog__close"
              }, [
                $(y, { icon: ["fas", "xmark"] })
              ])
            ]),
            f("div", {
              class: j(`eit-dialog__body ${e.scrollable ? "eit-dialog__body--scroll" : ""}`)
            }, [
              Y(c.$slots, "content")
            ], 2),
            f("div", Po, [
              $(ze(Ye), {
                onClick: s,
                className: "eit-btn-outline--gray",
                text: "Volver"
              }),
              o.btnSubmit ? (d(), J(ze(Ye), {
                key: 0,
                className: o.btnSubmitConfig.className,
                text: o.btnSubmitConfig.text,
                loadingText: o.btnSubmitConfig.loadingText,
                loading: e.loadingSubmit,
                onEmitEvent: p,
                isDisabled: e.disabledSubmit
              }, null, 8, ["className", "text", "loadingText", "loading", "isDisabled"])) : h("", !0)
            ])
          ], 64))
        ])
      ], 34);
    };
  }
}, jo = { class: "row" }, Ao = { class: "col" }, Bo = /* @__PURE__ */ f("h2", { class: "eit-font__size--x4 eit-color--text eit-font__weight--300 eit-border--bottom eit-border--color mb-3" }, [
  /* @__PURE__ */ f("strong", { class: "eit-font__weight--900" }, "Props")
], -1), Ro = { class: "eit-table--overflow" }, Eo = { class: "table eit-table" }, To = /* @__PURE__ */ f("thead", null, [
  /* @__PURE__ */ f("tr", null, [
    /* @__PURE__ */ f("th", null, "Name"),
    /* @__PURE__ */ f("th", null, "Type"),
    /* @__PURE__ */ f("th", null, "Default")
  ])
], -1), Mo = {
  __name: "PropsComponent",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const t = e;
    return (n, o) => (d(), u("div", jo, [
      f("div", Ao, [
        Bo,
        f("div", Ro, [
          f("table", Eo, [
            To,
            f("tbody", null, [
              (d(!0), u(k, null, W(t.data, (a) => (d(), u("tr", {
                key: a.name
              }, [
                f("td", null, [
                  $(Ee, {
                    text: a.name,
                    className: "eit-badge__outline--gray"
                  }, null, 8, ["text"])
                ]),
                f("td", null, [
                  f("code", null, D(a.type), 1)
                ]),
                f("td", null, [
                  f("code", null, D(a.default), 1)
                ])
              ]))), 128))
            ])
          ])
        ])
      ])
    ]));
  }
}, Lo = { class: "eit-progress eit-progress--30" }, No = { key: 1 }, qo = /* @__PURE__ */ f("span", { class: "spinner-border spinner-border-sm" }, null, -1), Vo = {
  __name: "ProgressBarComponent",
  props: {
    percentage: {
      type: [Number, String],
      default: 0
    },
    type: {
      type: String,
      default: "primary"
    },
    loading: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const t = e, n = M(() => parseFloat(t.percentage)), o = M(() => n.value === 0 ? 0 : 100 - n.value);
    return (a, i) => (d(), u("div", Lo, [
      f("div", {
        class: j(["eit-progress__bar", `eit-progress__bar--${t.type}`]),
        style: We(`width: ${t.percentage}%`)
      }, [
        n.value !== 0 ? (d(), u(k, { key: 0 }, [
          t.percentage > 5 ? (d(), u(k, { key: 0 }, [
            A(D(t.percentage) + "% ", 1)
          ], 64)) : h("", !0)
        ], 64)) : h("", !0)
      ], 6),
      f("div", {
        class: "eit-progress__bar eit-progress__bar--transparent",
        style: We(`width: ${o.value === 0 ? 100 : o.value}%`)
      }, [
        t.loading ? h("", !0) : (d(), u(k, { key: 0 }, [
          o.value === 0 || o.value > 5 ? (d(), u(k, { key: 0 }, [
            A(D(o.value) + "% ", 1)
          ], 64)) : h("", !0)
        ], 64)),
        t.loading ? (d(), u("span", No, [
          qo,
          A(" Cargando... ")
        ])) : h("", !0)
      ], 4)
    ]));
  }
}, Ho = { class: "d-flex" }, zo = { class: "flex-shrink-0 eit-toast__left" }, Fo = {
  key: "success",
  class: "eit-toast__icon eit-font__size--x7"
}, Wo = {
  key: "error",
  class: "eit-toast__icon eit-font__size--x7"
}, Yo = {
  key: "warning",
  class: "eit-toast__icon eit-font__size--x7"
}, Io = {
  key: "info",
  class: "eit-toast__icon eit-font__size--x7"
}, Ko = { class: "flex-grow-1 ms-3" }, Uo = { class: "d-flex" }, Xo = { class: "flex-grow-1 me-3" }, Go = { class: "eit-toast__title" }, Zo = { class: "eit-toast__text" }, Jo = { class: "flex-shrink-0" }, Qo = {
  __name: "ToastComponent",
  props: {
    type: {
      type: String,
      required: !0,
      default: "info"
    },
    data: {
      type: Object,
      required: !0
    },
    position: {
      type: String,
      default: "bottom"
    },
    visible: {
      type: String,
      default: "5000"
    }
  },
  setup(e, { expose: t }) {
    const n = e, o = z(!1), a = z("hidden"), i = z(""), r = M(() => ({
      show: o.value,
      hide: !o.value,
      [n.position]: n.position,
      hidden: a.value
    })), s = () => {
      clearTimeout(i.value), o.value = !0, a.value = "", i.value = setTimeout(() => {
        o.value = !1, setTimeout(() => a.value = "hidden", "300");
      }, n.visible);
    }, l = () => {
      o.value = !1, setTimeout(() => a.value = "hidden", "300"), clearTimeout(i.value);
    };
    return t({ handleShowToast: s, handleCloseToast: l }), (p, c) => {
      const v = K("font-awesome-icon");
      return d(), u("div", {
        class: j(["eit-toast__container", r.value])
      }, [
        f("div", {
          class: j(["eit-toast box-shadow", `eit-toast--${n.data.type}`])
        }, [
          f("div", Ho, [
            f("div", zo, [
              n.type === "success" ? (d(), u("span", Fo, [
                $(v, { icon: "fa-solid fa-circle-check" })
              ])) : h("", !0),
              n.type === "error" ? (d(), u("span", Wo, [
                $(v, { icon: "fa-solid fa-circle-xmark" })
              ])) : h("", !0),
              n.type === "warning" ? (d(), u("span", Yo, [
                $(v, { icon: "fa-solid fa-triangle-exclamation" })
              ])) : h("", !0),
              n.type === "info" ? (d(), u("span", Io, [
                $(v, { icon: "fa-solid fa-circle-info" })
              ])) : h("", !0)
            ]),
            f("div", Ko, [
              f("div", Uo, [
                f("div", Xo, [
                  f("p", Go, [
                    n.data.code ? (d(), u(k, { key: 0 }, [
                      A(D(n.data.code), 1)
                    ], 64)) : h("", !0),
                    A(" " + D(n.data.title), 1)
                  ]),
                  f("p", Zo, D(n.data.message), 1)
                ]),
                f("div", Jo, [
                  f("a", {
                    onClick: c[0] || (c[0] = (y) => l()),
                    href: "javascript:",
                    class: "eit-toast__close"
                  }, [
                    $(v, { icon: "fa-solid fa-xmark" })
                  ])
                ])
              ])
            ])
          ])
        ], 2)
      ], 2);
    };
  }
}, ea = { class: "d-flex" }, ta = { class: "flex-shrink-0 eit-popover__left" }, na = {
  key: "success",
  class: "eit-popover__icon eit-font__size--x7"
}, oa = {
  key: "error",
  class: "eit-popover__icon eit-font__size--x7"
}, aa = {
  key: "warning",
  class: "eit-popover__icon eit-font__size--x7"
}, ia = {
  key: "info",
  class: "eit-popover__icon eit-font__size--x7"
}, sa = { class: "flex-grow-1 ms-3" }, ra = { class: "d-flex" }, la = { class: "flex-grow-1 me-3" }, ca = { class: "eit-popover__title" }, da = { class: "eit-popover__text" }, ua = { class: "flex-shrink-0" }, fa = {
  __name: "PopoverComponent",
  props: {
    type: {
      type: String,
      required: !0,
      default: "info"
    },
    data: {
      type: Object,
      required: !0
    },
    position: {
      type: String,
      default: "bottom"
    },
    visible: {
      type: String,
      default: "5000"
    }
  },
  setup(e, { expose: t }) {
    const n = e, o = z(null), a = M(() => ({
      [n.position]: n.position
    })), i = () => {
      o.value.showPopover();
    }, r = () => {
      o.value.hidePopover();
    };
    return t({ handleShowPopover: i, handleClosePopover: r }), (s, l) => {
      const p = K("font-awesome-icon");
      return d(), u("div", {
        ref_key: "popover",
        ref: o,
        class: j(["eit-popover__container", a.value]),
        popover: "manual"
      }, [
        f("div", {
          class: j(["eit-popover box-shadow", `eit-popover--${n.data.type}`])
        }, [
          f("div", ea, [
            f("div", ta, [
              n.type === "success" ? (d(), u("span", na, [
                $(p, { icon: "fa-solid fa-circle-check" })
              ])) : h("", !0),
              n.type === "error" ? (d(), u("span", oa, [
                $(p, { icon: "fa-solid fa-circle-xmark" })
              ])) : h("", !0),
              n.type === "warning" ? (d(), u("span", aa, [
                $(p, { icon: "fa-solid fa-triangle-exclamation" })
              ])) : h("", !0),
              n.type === "info" ? (d(), u("span", ia, [
                $(p, { icon: "fa-solid fa-circle-info" })
              ])) : h("", !0)
            ]),
            f("div", sa, [
              f("div", ra, [
                f("div", la, [
                  f("p", ca, [
                    n.data.code ? (d(), u(k, { key: 0 }, [
                      A(D(n.data.code), 1)
                    ], 64)) : h("", !0),
                    A(" " + D(n.data.title), 1)
                  ]),
                  f("p", da, D(n.data.message), 1)
                ]),
                f("div", ua, [
                  f("a", {
                    onClick: l[0] || (l[0] = (c) => r()),
                    href: "javascript:",
                    class: "eit-popover__close"
                  }, [
                    $(p, { icon: "fa-solid fa-xmark" })
                  ])
                ])
              ])
            ])
          ])
        ], 2)
      ], 2);
    };
  }
}, pa = ["type", "maxlength", "placeholder", "disabled"], ma = {
  key: 0,
  class: "eit-label-float"
}, va = {
  key: 1,
  class: "eit-input__display__icon eit-input__display__float-left--icon"
}, ha = {
  key: 2,
  class: "eit-input__display__icon eit-input__display__float-right--icon"
}, ya = {
  __name: "InputComponent",
  props: {
    inputType: {
      type: String,
      default: "text"
    },
    //Data
    input: {
      type: [String, Number],
      default: ""
    },
    //Composables
    validation: {
      type: Function,
      default: null
    },
    keyPress: {
      type: Function,
      default: null
    },
    inputMask: {
      type: Function,
      default: null
    },
    //Configuration
    requiredField: {
      type: Boolean,
      default: !1
    },
    error: {
      type: Boolean,
      default: !1
    },
    submitted: {
      type: Boolean,
      default: !1
    },
    //Others
    floatLeft: {
      type: Boolean,
      default: !1
    },
    floatRight: {
      type: Boolean,
      default: !1
    },
    floatLabel: {
      type: String,
      default: ""
    },
    placeHolder: {
      type: String,
      default: ""
    },
    maxLength: {
      type: [String, Number],
      default: "50"
    },
    isDisabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["emitValue", "emitPressEnter"],
  setup(e, { expose: t, emit: n }) {
    const o = e, a = n, i = z(""), r = M(
      () => o.validation ? o.validation(i.value) : !0
    ), s = M(() => !r.value && o.requiredField && o.error ? "is-invalid" : ""), l = M(() => o.floatLabel ? "" : o.placeHolder), p = M(() => [
      o.floatLabel || o.floatLeft || o.floatRight ? "eit-input__display" : "",
      o.floatLeft ? "eit-input__display__float-left" : "",
      o.floatRight ? "eit-input__display__float-right" : ""
    ]), c = () => {
      a("emitPressEnter");
    }, v = () => {
      i.value = "";
    };
    return de(() => o.input, (y) => {
      y && (i.value = y);
    }), de(i, () => {
      a("emitValue", r.value ? i.value : "");
    }), Me(() => {
      o.inputMask && (i.value = o.inputMask(i.value)), o.submitted && v();
    }), t({ clean: v }), (y, _) => (d(), u("div", {
      class: j(p.value)
    }, [
      Ue(f("input", {
        autocomplete: "off",
        class: j(["form-control eit-input", s.value]),
        type: o.inputType,
        "onUpdate:modelValue": _[0] || (_[0] = (O) => i.value = O),
        maxlength: o.maxLength,
        onKeypress: _[1] || (_[1] = (O) => o.keyPress && o.keyPress(O)),
        placeholder: l.value,
        onKeyup: Xe(c, ["enter"]),
        disabled: o.isDisabled
      }, null, 42, pa), [
        [
          Yt,
          i.value,
          void 0,
          { trim: !0 }
        ]
      ]),
      o.floatLabel ? (d(), u("label", ma, D(o.floatLabel), 1)) : h("", !0),
      o.floatLeft ? (d(), u("span", va, [
        Y(y.$slots, "float-left")
      ])) : h("", !0),
      o.floatRight ? (d(), u("span", ha, [
        Y(y.$slots, "float-right")
      ])) : h("", !0)
    ], 2));
  }
};
var q = "top", U = "bottom", X = "right", V = "left", Ze = "auto", Ce = [q, U, X, V], pe = "start", ke = "end", ga = "clippingParents", Ot = "viewport", _e = "popper", _a = "reference", pt = /* @__PURE__ */ Ce.reduce(function(e, t) {
  return e.concat([t + "-" + pe, t + "-" + ke]);
}, []), St = /* @__PURE__ */ [].concat(Ce, [Ze]).reduce(function(e, t) {
  return e.concat([t, t + "-" + pe, t + "-" + ke]);
}, []), ba = "beforeRead", xa = "read", wa = "afterRead", ka = "beforeMain", $a = "main", Ca = "afterMain", Oa = "beforeWrite", Sa = "write", Pa = "afterWrite", Da = [ba, xa, wa, ka, $a, Ca, Oa, Sa, Pa];
function ee(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function F(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function ue(e) {
  var t = F(e).Element;
  return e instanceof t || e instanceof Element;
}
function I(e) {
  var t = F(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Je(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = F(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function ja(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, a = t.attributes[n] || {}, i = t.elements[n];
    !I(i) || !ee(i) || (Object.assign(i.style, o), Object.keys(a).forEach(function(r) {
      var s = a[r];
      s === !1 ? i.removeAttribute(r) : i.setAttribute(r, s === !0 ? "" : s);
    }));
  });
}
function Aa(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var a = t.elements[o], i = t.attributes[o] || {}, r = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), s = r.reduce(function(l, p) {
        return l[p] = "", l;
      }, {});
      !I(a) || !ee(a) || (Object.assign(a.style, s), Object.keys(i).forEach(function(l) {
        a.removeAttribute(l);
      }));
    });
  };
}
const Ba = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ja,
  effect: Aa,
  requires: ["computeStyles"]
};
function Q(e) {
  return e.split("-")[0];
}
var ce = Math.max, Te = Math.min, me = Math.round;
function Ie() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Pt() {
  return !/^((?!chrome|android).)*safari/i.test(Ie());
}
function ve(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), a = 1, i = 1;
  t && I(e) && (a = e.offsetWidth > 0 && me(o.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && me(o.height) / e.offsetHeight || 1);
  var r = ue(e) ? F(e) : window, s = r.visualViewport, l = !Pt() && n, p = (o.left + (l && s ? s.offsetLeft : 0)) / a, c = (o.top + (l && s ? s.offsetTop : 0)) / i, v = o.width / a, y = o.height / i;
  return {
    width: v,
    height: y,
    top: c,
    right: p + v,
    bottom: c + y,
    left: p,
    x: p,
    y: c
  };
}
function Qe(e) {
  var t = ve(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function Dt(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Je(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function te(e) {
  return F(e).getComputedStyle(e);
}
function Ra(e) {
  return ["table", "td", "th"].indexOf(ee(e)) >= 0;
}
function oe(e) {
  return ((ue(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Le(e) {
  return ee(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Je(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    oe(e)
  );
}
function mt(e) {
  return !I(e) || // https://github.com/popperjs/popper-core/issues/837
  te(e).position === "fixed" ? null : e.offsetParent;
}
function Ea(e) {
  var t = /firefox/i.test(Ie()), n = /Trident/i.test(Ie());
  if (n && I(e)) {
    var o = te(e);
    if (o.position === "fixed")
      return null;
  }
  var a = Le(e);
  for (Je(a) && (a = a.host); I(a) && ["html", "body"].indexOf(ee(a)) < 0; ) {
    var i = te(a);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function Oe(e) {
  for (var t = F(e), n = mt(e); n && Ra(n) && te(n).position === "static"; )
    n = mt(n);
  return n && (ee(n) === "html" || ee(n) === "body" && te(n).position === "static") ? t : n || Ea(e) || t;
}
function et(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function xe(e, t, n) {
  return ce(e, Te(t, n));
}
function Ta(e, t, n) {
  var o = xe(e, t, n);
  return o > n ? n : o;
}
function jt() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function At(e) {
  return Object.assign({}, jt(), e);
}
function Bt(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Ma = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, At(typeof t != "number" ? t : Bt(t, Ce));
};
function La(e) {
  var t, n = e.state, o = e.name, a = e.options, i = n.elements.arrow, r = n.modifiersData.popperOffsets, s = Q(n.placement), l = et(s), p = [V, X].indexOf(s) >= 0, c = p ? "height" : "width";
  if (!(!i || !r)) {
    var v = Ma(a.padding, n), y = Qe(i), _ = l === "y" ? q : V, O = l === "y" ? U : X, b = n.rects.reference[c] + n.rects.reference[l] - r[l] - n.rects.popper[c], x = r[l] - n.rects.reference[l], g = Oe(i), P = g ? l === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, m = b / 2 - x / 2, w = v[_], C = P - y[c] - v[O], S = P / 2 - y[c] / 2 + m, B = xe(w, S, C), T = l;
    n.modifiersData[o] = (t = {}, t[T] = B, t.centerOffset = B - S, t);
  }
}
function Na(e) {
  var t = e.state, n = e.options, o = n.element, a = o === void 0 ? "[data-popper-arrow]" : o;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || Dt(t.elements.popper, a) && (t.elements.arrow = a));
}
const qa = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: La,
  effect: Na,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function he(e) {
  return e.split("-")[1];
}
var Va = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Ha(e, t) {
  var n = e.x, o = e.y, a = t.devicePixelRatio || 1;
  return {
    x: me(n * a) / a || 0,
    y: me(o * a) / a || 0
  };
}
function vt(e) {
  var t, n = e.popper, o = e.popperRect, a = e.placement, i = e.variation, r = e.offsets, s = e.position, l = e.gpuAcceleration, p = e.adaptive, c = e.roundOffsets, v = e.isFixed, y = r.x, _ = y === void 0 ? 0 : y, O = r.y, b = O === void 0 ? 0 : O, x = typeof c == "function" ? c({
    x: _,
    y: b
  }) : {
    x: _,
    y: b
  };
  _ = x.x, b = x.y;
  var g = r.hasOwnProperty("x"), P = r.hasOwnProperty("y"), m = V, w = q, C = window;
  if (p) {
    var S = Oe(n), B = "clientHeight", T = "clientWidth";
    if (S === F(n) && (S = oe(n), te(S).position !== "static" && s === "absolute" && (B = "scrollHeight", T = "scrollWidth")), S = S, a === q || (a === V || a === X) && i === ke) {
      w = U;
      var E = v && S === C && C.visualViewport ? C.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        S[B]
      );
      b -= E - o.height, b *= l ? 1 : -1;
    }
    if (a === V || (a === q || a === U) && i === ke) {
      m = X;
      var R = v && S === C && C.visualViewport ? C.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        S[T]
      );
      _ -= R - o.width, _ *= l ? 1 : -1;
    }
  }
  var L = Object.assign({
    position: s
  }, p && Va), G = c === !0 ? Ha({
    x: _,
    y: b
  }, F(n)) : {
    x: _,
    y: b
  };
  if (_ = G.x, b = G.y, l) {
    var N;
    return Object.assign({}, L, (N = {}, N[w] = P ? "0" : "", N[m] = g ? "0" : "", N.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + _ + "px, " + b + "px)" : "translate3d(" + _ + "px, " + b + "px, 0)", N));
  }
  return Object.assign({}, L, (t = {}, t[w] = P ? b + "px" : "", t[m] = g ? _ + "px" : "", t.transform = "", t));
}
function za(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, a = o === void 0 ? !0 : o, i = n.adaptive, r = i === void 0 ? !0 : i, s = n.roundOffsets, l = s === void 0 ? !0 : s, p = {
    placement: Q(t.placement),
    variation: he(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, vt(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: r,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, vt(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Fa = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: za,
  data: {}
};
var Be = {
  passive: !0
};
function Wa(e) {
  var t = e.state, n = e.instance, o = e.options, a = o.scroll, i = a === void 0 ? !0 : a, r = o.resize, s = r === void 0 ? !0 : r, l = F(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && p.forEach(function(c) {
    c.addEventListener("scroll", n.update, Be);
  }), s && l.addEventListener("resize", n.update, Be), function() {
    i && p.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Be);
    }), s && l.removeEventListener("resize", n.update, Be);
  };
}
const Ya = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Wa,
  data: {}
};
var Ia = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Re(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Ia[t];
  });
}
var Ka = {
  start: "end",
  end: "start"
};
function ht(e) {
  return e.replace(/start|end/g, function(t) {
    return Ka[t];
  });
}
function tt(e) {
  var t = F(e), n = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function nt(e) {
  return ve(oe(e)).left + tt(e).scrollLeft;
}
function Ua(e, t) {
  var n = F(e), o = oe(e), a = n.visualViewport, i = o.clientWidth, r = o.clientHeight, s = 0, l = 0;
  if (a) {
    i = a.width, r = a.height;
    var p = Pt();
    (p || !p && t === "fixed") && (s = a.offsetLeft, l = a.offsetTop);
  }
  return {
    width: i,
    height: r,
    x: s + nt(e),
    y: l
  };
}
function Xa(e) {
  var t, n = oe(e), o = tt(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, i = ce(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), r = ce(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), s = -o.scrollLeft + nt(e), l = -o.scrollTop;
  return te(a || n).direction === "rtl" && (s += ce(n.clientWidth, a ? a.clientWidth : 0) - i), {
    width: i,
    height: r,
    x: s,
    y: l
  };
}
function ot(e) {
  var t = te(e), n = t.overflow, o = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + o);
}
function Rt(e) {
  return ["html", "body", "#document"].indexOf(ee(e)) >= 0 ? e.ownerDocument.body : I(e) && ot(e) ? e : Rt(Le(e));
}
function we(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Rt(e), a = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = F(o), r = a ? [i].concat(i.visualViewport || [], ot(o) ? o : []) : o, s = t.concat(r);
  return a ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(we(Le(r)))
  );
}
function Ke(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Ga(e, t) {
  var n = ve(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function yt(e, t, n) {
  return t === Ot ? Ke(Ua(e, n)) : ue(t) ? Ga(t, n) : Ke(Xa(oe(e)));
}
function Za(e) {
  var t = we(Le(e)), n = ["absolute", "fixed"].indexOf(te(e).position) >= 0, o = n && I(e) ? Oe(e) : e;
  return ue(o) ? t.filter(function(a) {
    return ue(a) && Dt(a, o) && ee(a) !== "body";
  }) : [];
}
function Ja(e, t, n, o) {
  var a = t === "clippingParents" ? Za(e) : [].concat(t), i = [].concat(a, [n]), r = i[0], s = i.reduce(function(l, p) {
    var c = yt(e, p, o);
    return l.top = ce(c.top, l.top), l.right = Te(c.right, l.right), l.bottom = Te(c.bottom, l.bottom), l.left = ce(c.left, l.left), l;
  }, yt(e, r, o));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Et(e) {
  var t = e.reference, n = e.element, o = e.placement, a = o ? Q(o) : null, i = o ? he(o) : null, r = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (a) {
    case q:
      l = {
        x: r,
        y: t.y - n.height
      };
      break;
    case U:
      l = {
        x: r,
        y: t.y + t.height
      };
      break;
    case X:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case V:
      l = {
        x: t.x - n.width,
        y: s
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var p = a ? et(a) : null;
  if (p != null) {
    var c = p === "y" ? "height" : "width";
    switch (i) {
      case pe:
        l[p] = l[p] - (t[c] / 2 - n[c] / 2);
        break;
      case ke:
        l[p] = l[p] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function $e(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, a = o === void 0 ? e.placement : o, i = n.strategy, r = i === void 0 ? e.strategy : i, s = n.boundary, l = s === void 0 ? ga : s, p = n.rootBoundary, c = p === void 0 ? Ot : p, v = n.elementContext, y = v === void 0 ? _e : v, _ = n.altBoundary, O = _ === void 0 ? !1 : _, b = n.padding, x = b === void 0 ? 0 : b, g = At(typeof x != "number" ? x : Bt(x, Ce)), P = y === _e ? _a : _e, m = e.rects.popper, w = e.elements[O ? P : y], C = Ja(ue(w) ? w : w.contextElement || oe(e.elements.popper), l, c, r), S = ve(e.elements.reference), B = Et({
    reference: S,
    element: m,
    strategy: "absolute",
    placement: a
  }), T = Ke(Object.assign({}, m, B)), E = y === _e ? T : S, R = {
    top: C.top - E.top + g.top,
    bottom: E.bottom - C.bottom + g.bottom,
    left: C.left - E.left + g.left,
    right: E.right - C.right + g.right
  }, L = e.modifiersData.offset;
  if (y === _e && L) {
    var G = L[a];
    Object.keys(R).forEach(function(N) {
      var ae = [X, U].indexOf(N) >= 0 ? 1 : -1, ie = [q, U].indexOf(N) >= 0 ? "y" : "x";
      R[N] += G[ie] * ae;
    });
  }
  return R;
}
function Qa(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, a = n.boundary, i = n.rootBoundary, r = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, p = l === void 0 ? St : l, c = he(o), v = c ? s ? pt : pt.filter(function(O) {
    return he(O) === c;
  }) : Ce, y = v.filter(function(O) {
    return p.indexOf(O) >= 0;
  });
  y.length === 0 && (y = v);
  var _ = y.reduce(function(O, b) {
    return O[b] = $e(e, {
      placement: b,
      boundary: a,
      rootBoundary: i,
      padding: r
    })[Q(b)], O;
  }, {});
  return Object.keys(_).sort(function(O, b) {
    return _[O] - _[b];
  });
}
function ei(e) {
  if (Q(e) === Ze)
    return [];
  var t = Re(e);
  return [ht(e), t, ht(t)];
}
function ti(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var a = n.mainAxis, i = a === void 0 ? !0 : a, r = n.altAxis, s = r === void 0 ? !0 : r, l = n.fallbackPlacements, p = n.padding, c = n.boundary, v = n.rootBoundary, y = n.altBoundary, _ = n.flipVariations, O = _ === void 0 ? !0 : _, b = n.allowedAutoPlacements, x = t.options.placement, g = Q(x), P = g === x, m = l || (P || !O ? [Re(x)] : ei(x)), w = [x].concat(m).reduce(function(fe, ne) {
      return fe.concat(Q(ne) === Ze ? Qa(t, {
        placement: ne,
        boundary: c,
        rootBoundary: v,
        padding: p,
        flipVariations: O,
        allowedAutoPlacements: b
      }) : ne);
    }, []), C = t.rects.reference, S = t.rects.popper, B = /* @__PURE__ */ new Map(), T = !0, E = w[0], R = 0; R < w.length; R++) {
      var L = w[R], G = Q(L), N = he(L) === pe, ae = [q, U].indexOf(G) >= 0, ie = ae ? "width" : "height", H = $e(t, {
        placement: L,
        boundary: c,
        rootBoundary: v,
        altBoundary: y,
        padding: p
      }), Z = ae ? N ? X : V : N ? U : q;
      C[ie] > S[ie] && (Z = Re(Z));
      var Se = Re(Z), se = [];
      if (i && se.push(H[G] <= 0), s && se.push(H[Z] <= 0, H[Se] <= 0), se.every(function(fe) {
        return fe;
      })) {
        E = L, T = !1;
        break;
      }
      B.set(L, se);
    }
    if (T)
      for (var Pe = O ? 3 : 1, Ne = function(ne) {
        var ge = w.find(function(je) {
          var re = B.get(je);
          if (re)
            return re.slice(0, ne).every(function(qe) {
              return qe;
            });
        });
        if (ge)
          return E = ge, "break";
      }, ye = Pe; ye > 0; ye--) {
        var De = Ne(ye);
        if (De === "break") break;
      }
    t.placement !== E && (t.modifiersData[o]._skip = !0, t.placement = E, t.reset = !0);
  }
}
const ni = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: ti,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function gt(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function _t(e) {
  return [q, X, U, V].some(function(t) {
    return e[t] >= 0;
  });
}
function oi(e) {
  var t = e.state, n = e.name, o = t.rects.reference, a = t.rects.popper, i = t.modifiersData.preventOverflow, r = $e(t, {
    elementContext: "reference"
  }), s = $e(t, {
    altBoundary: !0
  }), l = gt(r, o), p = gt(s, a, i), c = _t(l), v = _t(p);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: p,
    isReferenceHidden: c,
    hasPopperEscaped: v
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": v
  });
}
const ai = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: oi
};
function ii(e, t, n) {
  var o = Q(e), a = [V, q].indexOf(o) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, r = i[0], s = i[1];
  return r = r || 0, s = (s || 0) * a, [V, X].indexOf(o) >= 0 ? {
    x: s,
    y: r
  } : {
    x: r,
    y: s
  };
}
function si(e) {
  var t = e.state, n = e.options, o = e.name, a = n.offset, i = a === void 0 ? [0, 0] : a, r = St.reduce(function(c, v) {
    return c[v] = ii(v, t.rects, i), c;
  }, {}), s = r[t.placement], l = s.x, p = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += p), t.modifiersData[o] = r;
}
const ri = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: si
};
function li(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Et({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const ci = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: li,
  data: {}
};
function di(e) {
  return e === "x" ? "y" : "x";
}
function ui(e) {
  var t = e.state, n = e.options, o = e.name, a = n.mainAxis, i = a === void 0 ? !0 : a, r = n.altAxis, s = r === void 0 ? !1 : r, l = n.boundary, p = n.rootBoundary, c = n.altBoundary, v = n.padding, y = n.tether, _ = y === void 0 ? !0 : y, O = n.tetherOffset, b = O === void 0 ? 0 : O, x = $e(t, {
    boundary: l,
    rootBoundary: p,
    padding: v,
    altBoundary: c
  }), g = Q(t.placement), P = he(t.placement), m = !P, w = et(g), C = di(w), S = t.modifiersData.popperOffsets, B = t.rects.reference, T = t.rects.popper, E = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, R = typeof E == "number" ? {
    mainAxis: E,
    altAxis: E
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, E), L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, G = {
    x: 0,
    y: 0
  };
  if (S) {
    if (i) {
      var N, ae = w === "y" ? q : V, ie = w === "y" ? U : X, H = w === "y" ? "height" : "width", Z = S[w], Se = Z + x[ae], se = Z - x[ie], Pe = _ ? -T[H] / 2 : 0, Ne = P === pe ? B[H] : T[H], ye = P === pe ? -T[H] : -B[H], De = t.elements.arrow, fe = _ && De ? Qe(De) : {
        width: 0,
        height: 0
      }, ne = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : jt(), ge = ne[ae], je = ne[ie], re = xe(0, B[H], fe[H]), qe = m ? B[H] / 2 - Pe - re - ge - R.mainAxis : Ne - re - ge - R.mainAxis, Mt = m ? -B[H] / 2 + Pe + re + je + R.mainAxis : ye + re + je + R.mainAxis, Ve = t.elements.arrow && Oe(t.elements.arrow), Lt = Ve ? w === "y" ? Ve.clientTop || 0 : Ve.clientLeft || 0 : 0, at = (N = L == null ? void 0 : L[w]) != null ? N : 0, Nt = Z + qe - at - Lt, qt = Z + Mt - at, it = xe(_ ? Te(Se, Nt) : Se, Z, _ ? ce(se, qt) : se);
      S[w] = it, G[w] = it - Z;
    }
    if (s) {
      var st, Vt = w === "x" ? q : V, Ht = w === "x" ? U : X, le = S[C], Ae = C === "y" ? "height" : "width", rt = le + x[Vt], lt = le - x[Ht], He = [q, V].indexOf(g) !== -1, ct = (st = L == null ? void 0 : L[C]) != null ? st : 0, dt = He ? rt : le - B[Ae] - T[Ae] - ct + R.altAxis, ut = He ? le + B[Ae] + T[Ae] - ct - R.altAxis : lt, ft = _ && He ? Ta(dt, le, ut) : xe(_ ? dt : rt, le, _ ? ut : lt);
      S[C] = ft, G[C] = ft - le;
    }
    t.modifiersData[o] = G;
  }
}
const fi = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: ui,
  requiresIfExists: ["offset"]
};
function pi(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function mi(e) {
  return e === F(e) || !I(e) ? tt(e) : pi(e);
}
function vi(e) {
  var t = e.getBoundingClientRect(), n = me(t.width) / e.offsetWidth || 1, o = me(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function hi(e, t, n) {
  n === void 0 && (n = !1);
  var o = I(t), a = I(t) && vi(t), i = oe(t), r = ve(e, a, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((ee(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ot(i)) && (s = mi(t)), I(t) ? (l = ve(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = nt(i))), {
    x: r.left + s.scrollLeft - l.x,
    y: r.top + s.scrollTop - l.y,
    width: r.width,
    height: r.height
  };
}
function yi(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function a(i) {
    n.add(i.name);
    var r = [].concat(i.requires || [], i.requiresIfExists || []);
    r.forEach(function(s) {
      if (!n.has(s)) {
        var l = t.get(s);
        l && a(l);
      }
    }), o.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || a(i);
  }), o;
}
function gi(e) {
  var t = yi(e);
  return Da.reduce(function(n, o) {
    return n.concat(t.filter(function(a) {
      return a.phase === o;
    }));
  }, []);
}
function _i(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function bi(e) {
  var t = e.reduce(function(n, o) {
    var a = n[o.name];
    return n[o.name] = a ? Object.assign({}, a, o, {
      options: Object.assign({}, a.options, o.options),
      data: Object.assign({}, a.data, o.data)
    }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var bt = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function xt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function xi(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, a = t.defaultOptions, i = a === void 0 ? bt : a;
  return function(s, l, p) {
    p === void 0 && (p = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, bt, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, v = [], y = !1, _ = {
      state: c,
      setOptions: function(g) {
        var P = typeof g == "function" ? g(c.options) : g;
        b(), c.options = Object.assign({}, i, c.options, P), c.scrollParents = {
          reference: ue(s) ? we(s) : s.contextElement ? we(s.contextElement) : [],
          popper: we(l)
        };
        var m = gi(bi([].concat(o, c.options.modifiers)));
        return c.orderedModifiers = m.filter(function(w) {
          return w.enabled;
        }), O(), _.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!y) {
          var g = c.elements, P = g.reference, m = g.popper;
          if (xt(P, m)) {
            c.rects = {
              reference: hi(P, Oe(m), c.options.strategy === "fixed"),
              popper: Qe(m)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(R) {
              return c.modifiersData[R.name] = Object.assign({}, R.data);
            });
            for (var w = 0; w < c.orderedModifiers.length; w++) {
              if (c.reset === !0) {
                c.reset = !1, w = -1;
                continue;
              }
              var C = c.orderedModifiers[w], S = C.fn, B = C.options, T = B === void 0 ? {} : B, E = C.name;
              typeof S == "function" && (c = S({
                state: c,
                options: T,
                name: E,
                instance: _
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: _i(function() {
        return new Promise(function(x) {
          _.forceUpdate(), x(c);
        });
      }),
      destroy: function() {
        b(), y = !0;
      }
    };
    if (!xt(s, l))
      return _;
    _.setOptions(p).then(function(x) {
      !y && p.onFirstUpdate && p.onFirstUpdate(x);
    });
    function O() {
      c.orderedModifiers.forEach(function(x) {
        var g = x.name, P = x.options, m = P === void 0 ? {} : P, w = x.effect;
        if (typeof w == "function") {
          var C = w({
            state: c,
            name: g,
            instance: _,
            options: m
          }), S = function() {
          };
          v.push(C || S);
        }
      });
    }
    function b() {
      v.forEach(function(x) {
        return x();
      }), v = [];
    }
    return _;
  };
}
var wi = [Ya, ci, Fa, Ba, ri, ni, fi, qa, ai], ki = /* @__PURE__ */ xi({
  defaultModifiers: wi
});
const $i = {
  __name: "SelectComponent",
  props: {
    //Data
    data: {
      type: Array,
      required: !0,
      default() {
        return [];
      }
    },
    selected: {
      type: [Array, Object],
      default() {
        return [];
      }
    },
    selectable: {
      type: Function,
      default: null
    },
    //Composables
    validation: {
      type: Function,
      default: null
    },
    //Configuration
    multiple: {
      type: Boolean,
      default: !1
    },
    labelCustom: {
      type: String,
      default: "name"
    },
    clearable: {
      type: Boolean,
      default: !1
    },
    requiredField: {
      type: Boolean,
      default: !1
    },
    error: {
      type: Boolean,
      default: !1
    },
    submitted: {
      type: Boolean,
      default: !1
    },
    //Others
    placeHolder: {
      type: String,
      default: ""
    },
    isDisabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["emitValue"],
  setup(e, { expose: t, emit: n }) {
    const o = e, a = n, i = z("bottom"), r = z(null), s = M(
      () => o.validation ? o.validation(r.value) : !0
    ), l = M(() => !s.value && o.requiredField && o.error ? "is-invalid" : ""), p = () => Array.isArray(r.value) ? o.data.filter((b) => !r.value.some((x) => x.id === b.id)) : o.data, c = () => r.value ? o.data.filter((b) => b.id !== r.value.id) : o.data, v = M(() => o.multiple ? p() : c()), y = (b) => o.selectable ? o.selectable(b) : (x) => x.includes(x);
    de(
      () => o.selected,
      (b) => {
        b && (r.value = b);
      },
      { immediate: !0 }
    ), de(r, () => {
      a("emitValue", s.value ? r.value : null);
    }), Me(() => {
      o.submitted && _();
    });
    const _ = () => {
      r.value = o.multiple ? [] : null;
    }, O = (b, x, { width: g }) => {
      b.style.width = g;
      const P = ki(x.$refs.toggle, b, {
        placement: i.value,
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, -1]
            }
          },
          {
            name: "toggleClass",
            enabled: !0,
            phase: "write",
            fn({ state: m }) {
              x.$el.classList.toggle(
                "drop-up",
                m.placement === "top"
              );
            }
          }
        ]
      });
      return () => P.destroy();
    };
    return t({ clean: _ }), (b, x) => {
      const g = K("v-select");
      return d(), J(g, {
        "calculate-position": O,
        options: v.value,
        modelValue: r.value,
        "onUpdate:modelValue": x[0] || (x[0] = (P) => r.value = P),
        label: e.labelCustom,
        multiple: e.multiple,
        placeholder: e.placeHolder,
        class: j(["eit-select-component", l.value]),
        clearable: e.clearable,
        disabled: o.isDisabled,
        selectable: y
      }, {
        "no-options": Fe(() => [
          A(" No hay más resultados. ")
        ]),
        _: 1
      }, 8, ["options", "modelValue", "label", "multiple", "placeholder", "class", "clearable", "disabled"]);
    };
  }
}, Ci = ["maxlength", "placeholder"], Oi = {
  __name: "TextareaResizeComponent",
  props: {
    //Data
    input: {
      type: String,
      default: ""
    },
    //Composables
    validation: {
      type: Function,
      default: null
    },
    //Configuration
    requiredField: {
      type: Boolean,
      default: !1
    },
    error: {
      type: Boolean,
      default: !1
    },
    submitted: {
      type: Boolean,
      default: !1
    },
    //Others
    maxLength: {
      type: String,
      default: "240"
    },
    placeHolder: {
      type: String,
      default: ""
    }
  },
  emits: ["emitValue"],
  setup(e, { expose: t, emit: n }) {
    const o = e, a = n, i = z(null), r = z(""), s = M(() => o.validation && o.validation(r.value)), l = M(() => !s.value && o.requiredField && o.error ? "is-invalid" : ""), p = () => {
      r.value = "";
    };
    return de(
      () => o.input,
      (c) => {
        c && (r.value = c);
      }
    ), de(r, () => {
      i.value.style.height = "50px", i.value.style.height = `${i.value.scrollHeight}px`, a("emitValue", s.value ? r.value : "");
    }), Me(() => {
      o.submitted && p();
    }), t({ clean: p }), (c, v) => Ue((d(), u("textarea", {
      ref_key: "textarea",
      ref: i,
      "onUpdate:modelValue": v[0] || (v[0] = (y) => r.value = y),
      maxlength: e.maxLength,
      autocomplete: "off",
      class: j(["form-control eit-textarea eit-textarea-resize", l.value]),
      placeholder: e.placeHolder
    }, null, 10, Ci)), [
      [
        kt,
        r.value,
        void 0,
        { trim: !0 }
      ]
    ]);
  }
}, Si = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20style='margin:%20auto;%20display:%20block;%20shape-rendering:%20auto;'%20width='200px'%20height='200px'%20viewBox='0%200%20100%20100'%20preserveAspectRatio='xMidYMid'%3e%3crect%20x='17.5'%20y='30'%20width='15'%20height='40'%20fill='%23009da6'%3e%3canimate%20attributeName='y'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='18;30;30'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.2s'%3e%3c/animate%3e%3canimate%20attributeName='height'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='64;40;40'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.2s'%3e%3c/animate%3e%3c/rect%3e%3crect%20x='42.5'%20y='30'%20width='15'%20height='40'%20fill='%2379cace'%3e%3canimate%20attributeName='y'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='20.999999999999996;30;30'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.1s'%3e%3c/animate%3e%3canimate%20attributeName='height'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='58.00000000000001;40;40'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.1s'%3e%3c/animate%3e%3c/rect%3e%3crect%20x='67.5'%20y='30'%20width='15'%20height='40'%20fill='%23a9e4e7'%3e%3canimate%20attributeName='y'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='20.999999999999996;30;30'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%3e%3c/animate%3e%3canimate%20attributeName='height'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='58.00000000000001;40;40'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%3e%3c/animate%3e%3c/rect%3e%3c/svg%3e", Pi = { class: "p-3 eit-loading" }, Tt = {
  __name: "LoadingComponent",
  props: {
    size: {
      type: String,
      required: !1,
      default: "100"
    }
  },
  setup(e) {
    const t = e;
    return (n, o) => (d(), u("div", Pi, [
      f("img", {
        style: We(`width:${t.size}px`),
        src: Si
      }, null, 4)
    ]));
  }
}, wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlertComponent: Ct,
  BadgeComponent: Ee,
  BreadcrumbComponent: en,
  ButtonComponent: Ye,
  DetailComponent: go,
  DialogComponent: Do,
  HighlightComponent: Co,
  InputComponent: ya,
  LoadingComponent: Tt,
  PaginationComponent: Kn,
  PopoverComponent: fa,
  ProgressBarComponent: Vo,
  PropsComponent: Mo,
  SelectComponent: $i,
  SkeletonComponent: Ge,
  TabComponent: ko,
  TableComponent: zn,
  TextareaResizeComponent: Oi,
  ToastComponent: Qo
}, Symbol.toStringTag, { value: "Module" }));
function Di(e, t) {
  const n = $t(), o = M(() => n.meta.requiresAuth ? e.config.darkTheme ? t.logotipo.logo_dark : t.logotipo.logo_light : t.platformDarkTheme ? t.logotipo.logo_dark : t.logotipo.logo_light), a = M(() => e.config.darkTheme ? t.logotipo.isotipo_dark : t.logotipo.isotipo_light);
  return { logotipo: o, isotipo: a };
}
const Fi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useLogos: Di
}, Symbol.toStringTag, { value: "Module" }));
function ji() {
  function e(i) {
    return !(i == null || typeof i == "string" && i.trim() === "" || typeof i == "object" && Object.keys(i).length === 0 || Array.isArray(i) && i.length === 0);
  }
  function t(i) {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(i);
  }
  function n(i) {
    if (i.length >= 11 && i.length <= 12 && /[.-]/.test(i)) return !0;
    if (i.length < 11) return !1;
  }
  function o(i) {
    const r = i.length >= 8, s = /[A-Z]/.test(i), l = /[a-z]/.test(i), p = /[0-9]/.test(i), c = /[!@#$%^&*(),.?":{}|<>]/.test(i);
    return r && s && l && p && c;
  }
  function a(i) {
    return /^\+\d{3} \d{4}-\d{4}$/.test(i);
  }
  return {
    validateDefault: e,
    validateEmail: t,
    validateRut: n,
    validatePassword: o,
    validatePhone: a
  };
}
function Ai() {
  function e(a) {
    return a.replace(/[.-]/g, "").replace(/^(\d{1,2})(\d{3})(\d{3})(\w{1})$/, "$1.$2.$3-$4");
  }
  function t(a) {
    return a.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  function n(a) {
    return a.replace(/\D/g, "").replace(/^(\d{3})(\d{4})(\d{4})$/, "+$1 $2-$3");
  }
  function o(a) {
    return a.replace(/[^a-zA-Z\s]/g, "");
  }
  return { inputMaskRut: e, inputMaskCurrency: t, inputMaskPhone: n, inputOnlyLetters: o };
}
function Bi() {
  function e(t) {
    let n = String.fromCharCode(t.keyCode);
    if (/^[0-9Kk.-]/.test(n)) return !0;
    t.preventDefault();
  }
  return { keyPressRut: e };
}
function Ri() {
  function e(t) {
    const { sort: n, data: o } = t, { keys: a, index: i, asc: r } = n, s = a[i];
    return o.sort((l, p) => {
      let c = l[s], v = p[s];
      return typeof c == "object" && c !== null && (c = c.name, v = v.name), c === v ? 0 : (c > v ? 1 : -1) * (r ? 1 : -1);
    }), o;
  }
  return { sortTable: e };
}
be.extend(Kt);
be.locale("es");
function Ei() {
  function e(s) {
    return be(s, "YYYY-MM-DD").format("DD/MM/YYYY");
  }
  function t(s) {
    return be(s).format("YYYY-MM-DD");
  }
  function n(s) {
    return be(s).fromNow();
  }
  function o(s) {
    let l = s.replace(/[^0-9kK]/g, ""), p = l.slice(0, -1).replace(/\B(?=(\d{3})+(?!\d))/g, "."), c = l.slice(-1).toUpperCase();
    return `${p}-${c}`;
  }
  function a(s) {
    return s === null ? "" : s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  }
  function i(s) {
    return new Intl.NumberFormat("es-CL").format(s);
  }
  function r(s) {
    const l = s.replace(/\./g, "");
    return Number(l);
  }
  return {
    formatDate: e,
    formatDateToBack: t,
    formatDateAgo: n,
    formatRut: o,
    formatCapitalize: a,
    formatCurrency: i,
    formatCurrencyToBack: r
  };
}
function Ti() {
  function e(t, n, o = "right") {
    return n ? {
      content: t,
      theme: "main",
      placement: o,
      appendTo: "parent"
    } : { content: t, theme: "main", placement: o };
  }
  return { handleTooltip: e };
}
function Mi() {
  function e(i, r = "Ver registro") {
    return {
      name: "view",
      label: r,
      icon: "fa-regular fa-eye",
      iconClass: "eit-color--blue",
      handler: i
    };
  }
  function t(i, r = "Editar registro") {
    return {
      name: "edit",
      label: r,
      icon: "fa-solid fa-square-pen",
      iconClass: "eit-color--yellow",
      handler: i
    };
  }
  function n(i, r = "Eliminar registro") {
    return {
      name: "delete",
      label: r,
      icon: "fa-solid fa-trash",
      iconClass: "eit-color--red",
      handler: i
    };
  }
  function o(i, r = "Descargar registro") {
    return {
      name: "download",
      label: r,
      icon: "fa-solid fa-download",
      iconClass: "eit-color--blue",
      handler: i
    };
  }
  function a(i) {
    return {
      name: "enabledDisabled",
      booleanKey: "status",
      handler: i,
      true: {
        label: "Habilitar",
        icon: "fa-regular fa-circle-check",
        iconClass: "eit-color--green"
      },
      false: {
        label: "Deshabilitar",
        icon: "fa-solid fa-ban",
        iconClass: "eit-color--red"
      }
    };
  }
  return {
    actionView: e,
    actionEdit: t,
    actionDelete: n,
    actionDownload: o,
    actionEnabledDisabled: a
  };
}
const Wi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useFormat: Ei,
  useInputMask: Ai,
  useKeypress: Bi,
  useTable: Ri,
  useTableAction: Mi,
  useTooltip: Ti,
  useValidator: ji
}, Symbol.toStringTag, { value: "Module" })), Yi = {
  install(e) {
    Object.keys(wt).forEach((t) => {
      e.component(t, wt[t]);
    });
  }
};
export {
  Fi as composables,
  Yi as default,
  Wi as utils
};
