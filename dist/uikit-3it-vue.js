import { computed as N, resolveComponent as U, openBlock as c, createElementBlock as u, normalizeClass as D, Fragment as k, createTextVNode as A, toDisplayString as j, createCommentVNode as m, createBlock as Y, createElementVNode as f, createVNode as $, withCtx as Fe, renderList as W, renderSlot as I, mergeProps as zt, createStaticVNode as Ft, ref as z, watch as de, watchEffect as Ne, withDirectives as Ue, withKeys as Xe, vModelText as kt, onMounted as Wt, unref as ze, normalizeStyle as We, vModelDynamic as Yt } from "vue";
import { useRoute as $t } from "vue-router";
import { codeToHtml as It } from "shiki";
import xe from "dayjs";
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
    const n = e, o = t, a = N(() => ["eit-btn", `${n.className}`]), i = (d) => {
      o("emitEvent", d);
    };
    return (d, s) => {
      const r = U("font-awesome-icon");
      return c(), u("button", {
        onClick: s[0] || (s[0] = (p) => i(p)),
        class: D([a.value, "d-flex align-items-center justify-content-center gap-1"]),
        disabled: n.isDisabled
      }, [
        n.loading ? (c(), u(k, { key: 0 }, [
          Xt,
          A(" " + j(n.loadingText), 1)
        ], 64)) : m("", !0),
        n.loading ? m("", !0) : (c(), u(k, { key: 1 }, [
          n.icon ? (c(), Y(r, {
            key: 0,
            icon: n.icon,
            class: D(e.iconClass)
          }, null, 8, ["icon", "class"])) : m("", !0),
          A(" " + j(e.text), 1)
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
    const t = $t(), n = N(() => {
      let o = [], a = "";
      return t.matched.forEach((i, d) => {
        i.redirect ? a = "/" + i.redirect.path : a += "/" + i.path.split("/")[d + 1], o.push({
          name: i.name,
          title: i.meta.title || "Sin título",
          path: a,
          last: d === t.matched.length - 1
        });
      }), o;
    });
    return (o, a) => {
      const i = U("font-awesome-icon"), d = U("router-link");
      return c(), u("nav", Gt, [
        f("ul", Zt, [
          f("li", null, [
            $(d, {
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
          (c(!0), u(k, null, W(n.value, (s, r) => (c(), u("li", {
            key: r,
            class: "eit-breadcrumb__item"
          }, [
            I(o.$slots, s.name, zt({ ref_for: !0 }, s), () => [
              s.last ? (c(), u("span", Qt, j(s.name), 1)) : (c(), Y(d, {
                key: 0,
                to: s.path,
                class: "eit-color--text eit-color--text--link eit-color--underline"
              }, {
                default: Fe(() => [
                  A(j(s.name), 1)
                ]),
                _: 2
              }, 1032, ["to"]))
            ])
          ]))), 128))
        ])
      ]);
    };
  }
}, tn = ["innerHTML"], pe = {
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
      const a = U("font-awesome-icon");
      return c(), u("span", {
        key: `badge-${t.text}`,
        class: D(`eit-badge ${t.className}`)
      }, [
        t.icon ? (c(), Y(a, {
          key: 0,
          icon: t.icon,
          class: "me-1"
        }, null, 8, ["icon"])) : m("", !0),
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
], pn = { key: 1 }, vn = /* @__PURE__ */ f("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), mn = [
  vn
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
    return (n, o) => (c(), u(k, null, [
      t.type === "table" ? (c(), u("table", nn, [
        f("thead", null, [
          f("tr", null, [
            (c(!0), u(k, null, W(t.table.column, (a) => (c(), u(k, { key: a }, [
              a === 1 ? (c(), u("th", on, sn)) : m("", !0),
              a > 1 ? (c(), u("th", rn, cn)) : m("", !0)
            ], 64))), 128))
          ])
        ]),
        f("tbody", null, [
          (c(!0), u(k, null, W(t.table.row, (a) => (c(), u("tr", { key: a }, [
            (c(!0), u(k, null, W(t.table.column, (i) => (c(), u(k, { key: i }, [
              i === 1 ? (c(), u("td", dn, fn)) : m("", !0),
              i > 1 ? (c(), u("td", pn, mn)) : m("", !0)
            ], 64))), 128))
          ]))), 128))
        ])
      ])) : m("", !0),
      t.type === "detail" ? (c(), u(k, { key: 1 }, [
        hn
      ], 64)) : m("", !0)
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
      const a = U("font-awesome-icon");
      return c(), u("div", {
        class: D(`eit-alert eit-alert--${t.type} ${t.animation.active ? "eit-alert--animation" : "eit-alert--default"} ${t.animation.show ? "eit-alert--animation--show" : ""}`)
      }, [
        f("div", yn, [
          f("div", gn, [
            $(a, {
              icon: t.icon,
              class: D(e.iconClass)
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
  key: 3,
  class: "eit-table__string"
}, jn = {
  key: 4,
  class: "eit-table__string"
}, Dn = {
  key: 0,
  class: "text-center"
}, An = { class: "dropdown eit-dropdown d-none d-lg-block" }, Bn = {
  href: "javascript:",
  class: "eit-btn-action",
  "data-bs-toggle": "dropdown"
}, Rn = { class: "dropdown-menu dropdown-custom-menu" }, Tn = ["onClick"], En = ["onClick"], Nn = { class: "d-flex w-100 justify-content-between align-items-center d-lg-none text-end" }, Mn = /* @__PURE__ */ f("strong", null, "Acciones:", -1), Ln = { class: "d-flex flex-wrap gap-2 ms-3" }, qn = ["onClick"], Vn = ["onClick"], Hn = ["onClick"], zn = {
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
    const n = e, o = t, a = (l) => {
      o("updateSort", { index: l, asc: !n.sort.asc });
    }, i = (l) => typeof l == "string", d = (l) => typeof l == "object" && l !== null && !Array.isArray(l), s = (l) => Array.isArray(l), r = (l) => {
      if (l == null) return !0;
    }, p = (l) => Object.keys(l).includes("status") ? !l.status && "disabled" : "";
    return (l, h) => {
      var _, O, b, w;
      const y = U("font-awesome-icon");
      return c(), u("div", bn, [
        f("div", xn, [
          e.loading ? (c(), Y(Ge, {
            key: 0,
            type: "table",
            table: { row: (_ = e.skeleton) == null ? void 0 : _.row, column: (O = e.skeleton) == null ? void 0 : O.column }
          }, null, 8, ["table"])) : m("", !0),
          !e.loading && !((b = e.data) != null && b.length) ? (c(), Y(Ct, {
            key: 1,
            ref: "alert",
            class: "mb-3",
            type: "info",
            icon: "fa-solid fa-info",
            message: "<strong>No hay resultados</strong> para tu búsqueda."
          }, null, 512)) : m("", !0),
          !e.loading && ((w = e.data) != null && w.length) ? (c(), u(k, { key: 2 }, [
            f("table", wn, [
              f("thead", null, [
                f("tr", null, [
                  (c(!0), u(k, null, W(e.columns, (g, P) => (c(), u("th", {
                    key: `column-${P}`,
                    scope: "col"
                  }, [
                    f("a", {
                      onClick: (v) => a(P),
                      href: "javascript:",
                      class: "d-flex justify-content-between"
                    }, [
                      A(j(g) + " ", 1),
                      e.sort.index === P ? (c(), u("span", {
                        key: `icono-${g}`,
                        class: "d-flex ms-2 eit-color--text"
                      }, [
                        e.sort.asc ? m("", !0) : (c(), u("span", {
                          key: `down-${g}`
                        }, [
                          $(y, { icon: "fa-solid fa-sort-down align-baseline" })
                        ])),
                        e.sort.asc ? (c(), u("span", {
                          key: `up-${g}`
                        }, [
                          $(y, { icon: "fa-solid fa-sort-up align-baseline" })
                        ])) : m("", !0)
                      ])) : (c(), u("span", {
                        key: `key-${g}`
                      }, [
                        $(y, { icon: "fa-solid fa-sort" })
                      ]))
                    ], 8, kn)
                  ]))), 128)),
                  e.enabledActions ? (c(), u("th", $n, " Acciones ")) : m("", !0)
                ])
              ]),
              f("tbody", null, [
                (c(!0), u(k, null, W(e.data, (g, P) => (c(), u("tr", {
                  key: `row-${P}`,
                  class: D(p(g))
                }, [
                  (c(!0), u(k, null, W(g, (v, x) => (c(), u("td", {
                    key: `value-${x}`
                  }, [
                    f("strong", Cn, j(e.columns[Object.keys(g).indexOf(x)]) + ":", 1),
                    Object.keys(g)[e.columnLink] === x ? (c(), u(k, { key: 0 }, [
                      e.actions.find((C) => C.name === "view") ? (c(), u("a", {
                        key: 0,
                        onClick: (C) => e.actions.find((S) => S.name === "view" && S.handler(g)),
                        href: "javascript:",
                        class: "eit-table__link"
                      }, j(v || "Sin datos"), 9, On)) : (c(), u(k, { key: 1 }, [
                        A(j(v || "Sin datos"), 1)
                      ], 64))
                    ], 64)) : m("", !0),
                    Object.keys(g)[e.columnLink] !== x ? (c(), u(k, { key: 1 }, [
                      s(v) ? (c(), u("div", Sn, [
                        (c(!0), u(k, null, W(v, (C, S) => (c(), u("span", {
                          key: `value-array-${S}`,
                          class: "d-flex flex-wrap gap-1"
                        }, [
                          $(pe, {
                            text: C.name ? C.name : "Sin datos",
                            className: C.className
                          }, null, 8, ["text", "className"])
                        ]))), 128))
                      ])) : m("", !0),
                      x === "status" ? (c(), u(k, { key: 1 }, [
                        v ? (c(), Y(pe, {
                          key: 0,
                          text: "Activo",
                          className: "eit-badge__outline--secondary"
                        })) : m("", !0),
                        v ? m("", !0) : (c(), Y(pe, {
                          key: 1,
                          text: "Inactivo",
                          className: "eit-badge__outline--gray"
                        }))
                      ], 64)) : m("", !0),
                      d(v) ? (c(), Y(pe, {
                        key: 2,
                        text: v.name ? v.name : "Sin datos",
                        className: v.className
                      }, null, 8, ["text", "className"])) : m("", !0),
                      i(v) ? (c(), u("span", Pn, j(v || "Sin datos"), 1)) : m("", !0),
                      r(v) ? (c(), u("span", jn, " Sin datos ")) : m("", !0)
                    ], 64)) : m("", !0)
                  ]))), 128)),
                  e.enabledActions ? (c(), u("td", Dn, [
                    f("div", An, [
                      f("a", Bn, [
                        $(y, { icon: "fa-solid fa-ellipsis" })
                      ]),
                      f("ul", Rn, [
                        (c(!0), u(k, null, W(e.actions, (v) => (c(), u("li", {
                          key: v.name,
                          class: "mx-2"
                        }, [
                          v.booleanKey ? (c(), u("a", {
                            key: 0,
                            onClick: (x) => v.handler(g),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            g[v.booleanKey].status ? m("", !0) : (c(), u(k, { key: 0 }, [
                              $(y, {
                                icon: v.true.icon,
                                class: D(v.true.iconClass)
                              }, null, 8, ["icon", "class"]),
                              A(" " + j(v.true.label), 1)
                            ], 64)),
                            g[v.booleanKey].status ? (c(), u(k, { key: 1 }, [
                              $(y, {
                                icon: v.false.icon,
                                class: D(v.false.iconClass)
                              }, null, 8, ["icon", "class"]),
                              A(" " + j(v.false.label), 1)
                            ], 64)) : m("", !0)
                          ], 8, Tn)) : (c(), u("a", {
                            key: 1,
                            onClick: (x) => v.handler(g),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            $(y, {
                              icon: v.icon,
                              class: D(v.iconClass)
                            }, null, 8, ["icon", "class"]),
                            A(" " + j(v.label), 1)
                          ], 8, En))
                        ]))), 128))
                      ])
                    ]),
                    f("div", Nn, [
                      Mn,
                      f("div", Ln, [
                        (c(!0), u(k, null, W(e.actions, (v) => (c(), u(k, {
                          key: v.name
                        }, [
                          v.booleanKey ? (c(), u(k, { key: 0 }, [
                            g[v.booleanKey].status ? m("", !0) : (c(), u("a", {
                              key: 0,
                              onClick: (x) => v.handler(g),
                              href: "javascript:",
                              class: "eit-btn eit-btn-outline--gray eit-btn--square"
                            }, [
                              $(y, {
                                icon: v.true.icon,
                                class: D(v.true.iconClass)
                              }, null, 8, ["icon", "class"])
                            ], 8, qn)),
                            g[v.booleanKey].status ? (c(), u("a", {
                              key: 1,
                              onClick: (x) => v.handler(g),
                              href: "javascript:",
                              class: "eit-btn eit-btn-outline--gray eit-btn--square"
                            }, [
                              $(y, {
                                icon: v.false.icon,
                                class: D(v.faise.iconClass)
                              }, null, 8, ["icon", "class"])
                            ], 8, Vn)) : m("", !0)
                          ], 64)) : (c(), u("a", {
                            key: 1,
                            onClick: (x) => v.handler(g),
                            href: "javascript:",
                            class: "eit-btn eit-btn-outline--gray eit-btn--square"
                          }, [
                            $(y, {
                              icon: v.icon,
                              class: D(v.iconClass)
                            }, null, 8, ["icon", "class"])
                          ], 8, Hn))
                        ], 64))), 128))
                      ])
                    ])
                  ])) : m("", !0)
                ], 2))), 128))
              ])
            ]),
            I(l.$slots, "paginator")
          ], 64)) : m("", !0)
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
    const n = e, o = t, a = z(n.data.currentPage), i = () => a.value++, d = () => a.value--, s = () => {
      a.value <= 0 && (a.value = 1), a.value > n.data.finalPage && (a.value = n.data.finalPage);
    }, r = (p) => {
      p.target.select();
    };
    return de(a, () => {
      a.value > 0 && a.value <= n.data.finalPage && o("updatePaginator", a.value);
    }), Ne(() => {
      n.data && (a.value = n.data.currentPage);
    }), (p, l) => {
      const h = U("font-awesome-icon");
      return c(), u("div", Fn, [
        f("button", {
          onClick: d,
          disabled: e.data.currentPage === 1,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          $(h, { icon: "fa-solid fa-chevron-left" })
        ], 8, Wn),
        Ue(f("input", {
          type: "number",
          "onUpdate:modelValue": l[0] || (l[0] = (y) => a.value = y),
          onInput: s,
          onKeyup: Xe(s, ["enter"]),
          onBlur: s,
          onFocus: r,
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
          A(" de " + j(e.data.finalPage) + " ", 1),
          e.data.finalPage === 1 ? (c(), u(k, { key: 0 }, [
            A(" página ")
          ], 64)) : m("", !0),
          e.data.finalPage > 1 ? (c(), u(k, { key: 1 }, [
            A(" páginas ")
          ], 64)) : m("", !0)
        ]),
        f("button", {
          onClick: i,
          disabled: e.data.currentPage === e.data.finalPage,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          $(h, { icon: "fa-solid fa-chevron-right" })
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
}, vo = {
  key: 4,
  class: "mx-2"
}, mo = { class: "row flex-grow-1" }, ho = { class: "col-12 d-flex flex-column flex-grow-1" }, yo = { class: "eit-slide__content flex-grow-1" }, go = {
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
    }, d = () => {
      o("editRecord", n.record);
    }, s = () => {
      o("deleteRecord", n.record);
    }, r = () => {
      o("downloadRecord", n.record);
    };
    return (p, l) => {
      const h = U("font-awesome-icon");
      return c(), u("section", {
        class: D(["eit-slide d-flex flex-column", [e.slide && "eit-slide--right", e.slideSmall && "eit-slide--small"]])
      }, [
        n.loading ? (c(), Y(Ge, {
          key: 0,
          type: "detail"
        })) : m("", !0),
        n.loading ? m("", !0) : (c(), u(k, { key: 1 }, [
          f("div", Un, [
            f("div", Xn, [
              f("div", Gn, [
                f("div", Zn, [
                  f("button", {
                    class: "eit-btn eit-btn--gray eit-btn--square",
                    onClick: a
                  }, [
                    $(h, {
                      icon: "fa-solid fa-angle-right",
                      class: "eit-font__size--x5 d-none d-lg-block"
                    }),
                    $(h, {
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
                          I(p.$slots, "title")
                        ])
                      ]),
                      f("p", no, [
                        I(p.$slots, "subtitle")
                      ])
                    ]),
                    f("div", oo, [
                      n.dropdown ? (c(), u("div", ao, [
                        f("a", io, [
                          $(h, { icon: "fa-solid fa-ellipsis" })
                        ]),
                        f("ul", so, [
                          n.editRecord ? (c(), u("li", ro, [
                            f("a", {
                              onClick: d,
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              $(h, {
                                icon: "fa-solid fa-square-pen",
                                class: "eit-color--yellow"
                              }),
                              A(" " + j(e.editRecord), 1)
                            ])
                          ])) : m("", !0),
                          n.downloadRecord ? (c(), u("li", lo, [
                            f("a", {
                              onClick: r,
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              $(h, {
                                icon: "fa-solid fa-download",
                                class: "eit-color--blue"
                              }),
                              A(" " + j(n.downloadRecord), 1)
                            ])
                          ])) : m("", !0),
                          e.deleteRecord || e.enabledDisabledRecord ? (c(), u("li", co, fo)) : m("", !0),
                          n.enabledDisabledRecord ? (c(), u("li", po, [
                            f("a", {
                              onClick: i,
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              n.record.status ? m("", !0) : (c(), u(k, { key: 0 }, [
                                $(h, {
                                  icon: "fa-regular fa-circle-check",
                                  class: "eit-color--green"
                                }),
                                A(" Habilitar ")
                              ], 64)),
                              n.record.status ? (c(), u(k, { key: 1 }, [
                                $(h, {
                                  icon: "fa-solid fa-ban",
                                  class: "eit-color--red"
                                }),
                                A(" Deshabilitar ")
                              ], 64)) : m("", !0)
                            ])
                          ])) : m("", !0),
                          n.deleteRecord ? (c(), u("li", vo, [
                            f("a", {
                              onClick: s,
                              class: "dropdown-item dropdown-custom-menu-item eit-color--red",
                              href: "javascript:"
                            }, [
                              $(h, {
                                icon: "fa-solid fa-trash",
                                class: "eit-color--red"
                              }),
                              A(" " + j(n.deleteRecord), 1)
                            ])
                          ])) : m("", !0)
                        ])
                      ])) : m("", !0)
                    ])
                  ])
                ])
              ])
            ])
          ]),
          f("div", mo, [
            f("div", ho, [
              f("div", yo, [
                I(p.$slots, "component")
              ])
            ])
          ]),
          I(p.$slots, "footer")
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
    return (i, d) => (c(), u(k, null, [
      f("div", _o, [
        f("ul", {
          class: D(`eit-tabs ${t.className}`)
        }, [
          (c(!0), u(k, null, W(e.data, (s, r) => (c(), u("li", {
            key: r,
            class: "eit-tabs__item"
          }, [
            f("a", {
              href: "javascript:",
              onClick: (p) => a(r),
              class: D(["eit-tabs__item__link", o.value === r ? "active" : ""])
            }, [
              A(j(s.name) + " ", 1),
              s.number ? (c(), u("span", xo, j(n(s.number)), 1)) : m("", !0)
            ], 10, bo)
          ]))), 128))
        ], 2),
        I(i.$slots, "dropdown")
      ]),
      f("div", wo, [
        I(i.$slots, `tab-${o.value}`)
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
    })(), (a, i) => (c(), u("div", { innerHTML: n.value }, null, 8, $o));
  }
}, Oo = { class: "eit-dialog__content" }, So = { class: "d-flex justify-content-between align-items-center" }, Po = { class: "d-flex gap-2 justify-content-end mt-3" }, jo = {
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
    const o = e, a = n, i = z(null), d = () => {
      i.value.showModal(), i.value.classList.add("show");
    }, s = () => {
      i.value.close(), i.value.classList.remove("show"), a("emitCloseDialog");
    }, r = (l) => {
      l.key === "Escape" && s();
    }, p = () => {
      a("emitSubmit");
    };
    return Wt(() => {
      document.addEventListener("keyup", r);
    }), t({ showDialog: d, closeDialog: s }), (l, h) => {
      const y = U("font-awesome-icon");
      return c(), u("dialog", {
        ref_key: "dialog",
        ref: i,
        class: D(["eit-dialog", o.className]),
        onKeyup: Xe(s, ["esc"])
      }, [
        f("div", Oo, [
          e.loading ? (c(), Y(ze(Et), {
            key: 0,
            size: "70"
          })) : m("", !0),
          e.loading ? m("", !0) : (c(), u(k, { key: 1 }, [
            f("div", So, [
              I(l.$slots, "head"),
              f("button", {
                onClick: s,
                class: "eit-dialog__close"
              }, [
                $(y, { icon: ["fas", "xmark"] })
              ])
            ]),
            f("div", {
              class: D(`eit-dialog__body ${e.scrollable ? "eit-dialog__body--scroll" : ""}`)
            }, [
              I(l.$slots, "content")
            ], 2),
            f("div", Po, [
              $(ze(Ye), {
                onClick: s,
                className: "eit-btn-outline--gray",
                text: "Volver"
              }),
              o.btnSubmit ? (c(), Y(ze(Ye), {
                key: 0,
                className: o.btnSubmitConfig.className,
                text: o.btnSubmitConfig.text,
                loadingText: o.btnSubmitConfig.loadingText,
                loading: e.loadingSubmit,
                onEmitEvent: p,
                isDisabled: e.disabledSubmit
              }, null, 8, ["className", "text", "loadingText", "loading", "isDisabled"])) : m("", !0)
            ])
          ], 64))
        ])
      ], 34);
    };
  }
}, Do = { class: "row" }, Ao = { class: "col" }, Bo = /* @__PURE__ */ f("h2", { class: "eit-font__size--x4 eit-color--text eit-font__weight--300 eit-border--bottom eit-border--color mb-3" }, [
  /* @__PURE__ */ f("strong", { class: "eit-font__weight--900" }, "Props")
], -1), Ro = { class: "eit-table--overflow" }, To = { class: "table eit-table" }, Eo = /* @__PURE__ */ f("thead", null, [
  /* @__PURE__ */ f("tr", null, [
    /* @__PURE__ */ f("th", null, "Name"),
    /* @__PURE__ */ f("th", null, "Type"),
    /* @__PURE__ */ f("th", null, "Default")
  ])
], -1), No = {
  __name: "PropsComponent",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const t = e;
    return (n, o) => (c(), u("div", Do, [
      f("div", Ao, [
        Bo,
        f("div", Ro, [
          f("table", To, [
            Eo,
            f("tbody", null, [
              (c(!0), u(k, null, W(t.data, (a) => (c(), u("tr", {
                key: a.name
              }, [
                f("td", null, [
                  $(pe, {
                    text: a.name,
                    className: "eit-badge__outline--gray"
                  }, null, 8, ["text"])
                ]),
                f("td", null, [
                  f("code", null, j(a.type), 1)
                ]),
                f("td", null, [
                  f("code", null, j(a.default), 1)
                ])
              ]))), 128))
            ])
          ])
        ])
      ])
    ]));
  }
}, Mo = { class: "eit-progress eit-progress--30" }, Lo = { key: 1 }, qo = /* @__PURE__ */ f("span", { class: "spinner-border spinner-border-sm" }, null, -1), Vo = {
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
    const t = e, n = N(() => parseFloat(t.percentage)), o = N(() => n.value === 0 ? 0 : 100 - n.value);
    return (a, i) => (c(), u("div", Mo, [
      f("div", {
        class: D(["eit-progress__bar", `eit-progress__bar--${t.type}`]),
        style: We(`width: ${t.percentage}%`)
      }, [
        n.value !== 0 ? (c(), u(k, { key: 0 }, [
          t.percentage > 5 ? (c(), u(k, { key: 0 }, [
            A(j(t.percentage) + "% ", 1)
          ], 64)) : m("", !0)
        ], 64)) : m("", !0)
      ], 6),
      f("div", {
        class: "eit-progress__bar eit-progress__bar--transparent",
        style: We(`width: ${o.value === 0 ? 100 : o.value}%`)
      }, [
        t.loading ? m("", !0) : (c(), u(k, { key: 0 }, [
          o.value === 0 || o.value > 5 ? (c(), u(k, { key: 0 }, [
            A(j(o.value) + "% ", 1)
          ], 64)) : m("", !0)
        ], 64)),
        t.loading ? (c(), u("span", Lo, [
          qo,
          A(" Cargando... ")
        ])) : m("", !0)
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
    const n = e, o = z(!1), a = z("hidden"), i = z(""), d = N(() => ({
      show: o.value,
      hide: !o.value,
      [n.position]: n.position,
      hidden: a.value
    })), s = () => {
      clearTimeout(i.value), o.value = !0, a.value = "", i.value = setTimeout(() => {
        o.value = !1, setTimeout(() => a.value = "hidden", "300");
      }, n.visible);
    }, r = () => {
      o.value = !1, setTimeout(() => a.value = "hidden", "300"), clearTimeout(i.value);
    };
    return t({ handleShowToast: s, handleCloseToast: r }), (p, l) => {
      const h = U("font-awesome-icon");
      return c(), u("div", {
        class: D(["eit-toast__container", d.value])
      }, [
        f("div", {
          class: D(["eit-toast box-shadow", `eit-toast--${n.data.type}`])
        }, [
          f("div", Ho, [
            f("div", zo, [
              n.type === "success" ? (c(), u("span", Fo, [
                $(h, { icon: "fa-solid fa-circle-check" })
              ])) : m("", !0),
              n.type === "error" ? (c(), u("span", Wo, [
                $(h, { icon: "fa-solid fa-circle-xmark" })
              ])) : m("", !0),
              n.type === "warning" ? (c(), u("span", Yo, [
                $(h, { icon: "fa-solid fa-triangle-exclamation" })
              ])) : m("", !0),
              n.type === "info" ? (c(), u("span", Io, [
                $(h, { icon: "fa-solid fa-circle-info" })
              ])) : m("", !0)
            ]),
            f("div", Ko, [
              f("div", Uo, [
                f("div", Xo, [
                  f("p", Go, [
                    n.data.code ? (c(), u(k, { key: 0 }, [
                      A(j(n.data.code), 1)
                    ], 64)) : m("", !0),
                    A(" " + j(n.data.title), 1)
                  ]),
                  f("p", Zo, j(n.data.message), 1)
                ]),
                f("div", Jo, [
                  f("a", {
                    onClick: l[0] || (l[0] = (y) => r()),
                    href: "javascript:",
                    class: "eit-toast__close"
                  }, [
                    $(h, { icon: "fa-solid fa-xmark" })
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
    const n = e, o = z(null), a = N(() => ({
      [n.position]: n.position
    })), i = () => {
      o.value.showPopover();
    }, d = () => {
      o.value.hidePopover();
    };
    return t({ handleShowPopover: i, handleClosePopover: d }), (s, r) => {
      const p = U("font-awesome-icon");
      return c(), u("div", {
        ref_key: "popover",
        ref: o,
        class: D(["eit-popover__container", a.value]),
        popover: "manual"
      }, [
        f("div", {
          class: D(["eit-popover box-shadow", `eit-popover--${n.data.type}`])
        }, [
          f("div", ea, [
            f("div", ta, [
              n.type === "success" ? (c(), u("span", na, [
                $(p, { icon: "fa-solid fa-circle-check" })
              ])) : m("", !0),
              n.type === "error" ? (c(), u("span", oa, [
                $(p, { icon: "fa-solid fa-circle-xmark" })
              ])) : m("", !0),
              n.type === "warning" ? (c(), u("span", aa, [
                $(p, { icon: "fa-solid fa-triangle-exclamation" })
              ])) : m("", !0),
              n.type === "info" ? (c(), u("span", ia, [
                $(p, { icon: "fa-solid fa-circle-info" })
              ])) : m("", !0)
            ]),
            f("div", sa, [
              f("div", ra, [
                f("div", la, [
                  f("p", ca, [
                    n.data.code ? (c(), u(k, { key: 0 }, [
                      A(j(n.data.code), 1)
                    ], 64)) : m("", !0),
                    A(" " + j(n.data.title), 1)
                  ]),
                  f("p", da, j(n.data.message), 1)
                ]),
                f("div", ua, [
                  f("a", {
                    onClick: r[0] || (r[0] = (l) => d()),
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
}, pa = ["type", "maxlength", "placeholder", "disabled"], va = {
  key: 0,
  class: "eit-label-float"
}, ma = {
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
    const o = e, a = n, i = z(""), d = N(
      () => o.validation ? o.validation(i.value) : !0
    ), s = N(() => !d.value && o.requiredField && o.error ? "is-invalid" : ""), r = N(() => o.floatLabel ? "" : o.placeHolder), p = N(() => [
      o.floatLabel || o.floatLeft || o.floatRight ? "eit-input__display" : "",
      o.floatLeft ? "eit-input__display__float-left" : "",
      o.floatRight ? "eit-input__display__float-right" : ""
    ]), l = () => {
      a("emitPressEnter");
    }, h = () => {
      i.value = "";
    };
    return de(() => o.input, (y) => {
      y && (i.value = y);
    }), de(i, () => {
      a("emitValue", d.value ? i.value : "");
    }), Ne(() => {
      o.inputMask && (i.value = o.inputMask(i.value)), o.submitted && h();
    }), t({ clean: h }), (y, _) => (c(), u("div", {
      class: D(p.value)
    }, [
      Ue(f("input", {
        autocomplete: "off",
        class: D(["form-control eit-input", s.value]),
        type: o.inputType,
        "onUpdate:modelValue": _[0] || (_[0] = (O) => i.value = O),
        maxlength: o.maxLength,
        onKeypress: _[1] || (_[1] = (O) => o.keyPress && o.keyPress(O)),
        placeholder: r.value,
        onKeyup: Xe(l, ["enter"]),
        disabled: o.isDisabled
      }, null, 42, pa), [
        [
          Yt,
          i.value,
          void 0,
          { trim: !0 }
        ]
      ]),
      o.floatLabel ? (c(), u("label", va, j(o.floatLabel), 1)) : m("", !0),
      o.floatLeft ? (c(), u("span", ma, [
        I(y.$slots, "float-left")
      ])) : m("", !0),
      o.floatRight ? (c(), u("span", ha, [
        I(y.$slots, "float-right")
      ])) : m("", !0)
    ], 2));
  }
};
var q = "top", X = "bottom", G = "right", V = "left", Ze = "auto", Oe = [q, X, G, V], ve = "start", $e = "end", ga = "clippingParents", Ot = "viewport", be = "popper", _a = "reference", pt = /* @__PURE__ */ Oe.reduce(function(e, t) {
  return e.concat([t + "-" + ve, t + "-" + $e]);
}, []), St = /* @__PURE__ */ [].concat(Oe, [Ze]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ve, t + "-" + $e]);
}, []), ba = "beforeRead", xa = "read", wa = "afterRead", ka = "beforeMain", $a = "main", Ca = "afterMain", Oa = "beforeWrite", Sa = "write", Pa = "afterWrite", ja = [ba, xa, wa, ka, $a, Ca, Oa, Sa, Pa];
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
function K(e) {
  var t = F(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Je(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = F(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Da(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, a = t.attributes[n] || {}, i = t.elements[n];
    !K(i) || !ee(i) || (Object.assign(i.style, o), Object.keys(a).forEach(function(d) {
      var s = a[d];
      s === !1 ? i.removeAttribute(d) : i.setAttribute(d, s === !0 ? "" : s);
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
      var a = t.elements[o], i = t.attributes[o] || {}, d = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), s = d.reduce(function(r, p) {
        return r[p] = "", r;
      }, {});
      !K(a) || !ee(a) || (Object.assign(a.style, s), Object.keys(i).forEach(function(r) {
        a.removeAttribute(r);
      }));
    });
  };
}
const Ba = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Da,
  effect: Aa,
  requires: ["computeStyles"]
};
function Q(e) {
  return e.split("-")[0];
}
var ce = Math.max, Ee = Math.min, me = Math.round;
function Ie() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Pt() {
  return !/^((?!chrome|android).)*safari/i.test(Ie());
}
function he(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), a = 1, i = 1;
  t && K(e) && (a = e.offsetWidth > 0 && me(o.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && me(o.height) / e.offsetHeight || 1);
  var d = ue(e) ? F(e) : window, s = d.visualViewport, r = !Pt() && n, p = (o.left + (r && s ? s.offsetLeft : 0)) / a, l = (o.top + (r && s ? s.offsetTop : 0)) / i, h = o.width / a, y = o.height / i;
  return {
    width: h,
    height: y,
    top: l,
    right: p + h,
    bottom: l + y,
    left: p,
    x: p,
    y: l
  };
}
function Qe(e) {
  var t = he(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function jt(e, t) {
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
function Me(e) {
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
function vt(e) {
  return !K(e) || // https://github.com/popperjs/popper-core/issues/837
  te(e).position === "fixed" ? null : e.offsetParent;
}
function Ta(e) {
  var t = /firefox/i.test(Ie()), n = /Trident/i.test(Ie());
  if (n && K(e)) {
    var o = te(e);
    if (o.position === "fixed")
      return null;
  }
  var a = Me(e);
  for (Je(a) && (a = a.host); K(a) && ["html", "body"].indexOf(ee(a)) < 0; ) {
    var i = te(a);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function Se(e) {
  for (var t = F(e), n = vt(e); n && Ra(n) && te(n).position === "static"; )
    n = vt(n);
  return n && (ee(n) === "html" || ee(n) === "body" && te(n).position === "static") ? t : n || Ta(e) || t;
}
function et(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function we(e, t, n) {
  return ce(e, Ee(t, n));
}
function Ea(e, t, n) {
  var o = we(e, t, n);
  return o > n ? n : o;
}
function Dt() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function At(e) {
  return Object.assign({}, Dt(), e);
}
function Bt(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Na = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, At(typeof t != "number" ? t : Bt(t, Oe));
};
function Ma(e) {
  var t, n = e.state, o = e.name, a = e.options, i = n.elements.arrow, d = n.modifiersData.popperOffsets, s = Q(n.placement), r = et(s), p = [V, G].indexOf(s) >= 0, l = p ? "height" : "width";
  if (!(!i || !d)) {
    var h = Na(a.padding, n), y = Qe(i), _ = r === "y" ? q : V, O = r === "y" ? X : G, b = n.rects.reference[l] + n.rects.reference[r] - d[r] - n.rects.popper[l], w = d[r] - n.rects.reference[r], g = Se(i), P = g ? r === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = b / 2 - w / 2, x = h[_], C = P - y[l] - h[O], S = P / 2 - y[l] / 2 + v, B = we(x, S, C), E = r;
    n.modifiersData[o] = (t = {}, t[E] = B, t.centerOffset = B - S, t);
  }
}
function La(e) {
  var t = e.state, n = e.options, o = n.element, a = o === void 0 ? "[data-popper-arrow]" : o;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || jt(t.elements.popper, a) && (t.elements.arrow = a));
}
const qa = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Ma,
  effect: La,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ye(e) {
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
function mt(e) {
  var t, n = e.popper, o = e.popperRect, a = e.placement, i = e.variation, d = e.offsets, s = e.position, r = e.gpuAcceleration, p = e.adaptive, l = e.roundOffsets, h = e.isFixed, y = d.x, _ = y === void 0 ? 0 : y, O = d.y, b = O === void 0 ? 0 : O, w = typeof l == "function" ? l({
    x: _,
    y: b
  }) : {
    x: _,
    y: b
  };
  _ = w.x, b = w.y;
  var g = d.hasOwnProperty("x"), P = d.hasOwnProperty("y"), v = V, x = q, C = window;
  if (p) {
    var S = Se(n), B = "clientHeight", E = "clientWidth";
    if (S === F(n) && (S = oe(n), te(S).position !== "static" && s === "absolute" && (B = "scrollHeight", E = "scrollWidth")), S = S, a === q || (a === V || a === G) && i === $e) {
      x = X;
      var T = h && S === C && C.visualViewport ? C.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        S[B]
      );
      b -= T - o.height, b *= r ? 1 : -1;
    }
    if (a === V || (a === q || a === X) && i === $e) {
      v = G;
      var R = h && S === C && C.visualViewport ? C.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        S[E]
      );
      _ -= R - o.width, _ *= r ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: s
  }, p && Va), Z = l === !0 ? Ha({
    x: _,
    y: b
  }, F(n)) : {
    x: _,
    y: b
  };
  if (_ = Z.x, b = Z.y, r) {
    var L;
    return Object.assign({}, M, (L = {}, L[x] = P ? "0" : "", L[v] = g ? "0" : "", L.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + _ + "px, " + b + "px)" : "translate3d(" + _ + "px, " + b + "px, 0)", L));
  }
  return Object.assign({}, M, (t = {}, t[x] = P ? b + "px" : "", t[v] = g ? _ + "px" : "", t.transform = "", t));
}
function za(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, a = o === void 0 ? !0 : o, i = n.adaptive, d = i === void 0 ? !0 : i, s = n.roundOffsets, r = s === void 0 ? !0 : s, p = {
    placement: Q(t.placement),
    variation: ye(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, mt(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: d,
    roundOffsets: r
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, mt(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: r
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
var Re = {
  passive: !0
};
function Wa(e) {
  var t = e.state, n = e.instance, o = e.options, a = o.scroll, i = a === void 0 ? !0 : a, d = o.resize, s = d === void 0 ? !0 : d, r = F(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && p.forEach(function(l) {
    l.addEventListener("scroll", n.update, Re);
  }), s && r.addEventListener("resize", n.update, Re), function() {
    i && p.forEach(function(l) {
      l.removeEventListener("scroll", n.update, Re);
    }), s && r.removeEventListener("resize", n.update, Re);
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
function Te(e) {
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
  return he(oe(e)).left + tt(e).scrollLeft;
}
function Ua(e, t) {
  var n = F(e), o = oe(e), a = n.visualViewport, i = o.clientWidth, d = o.clientHeight, s = 0, r = 0;
  if (a) {
    i = a.width, d = a.height;
    var p = Pt();
    (p || !p && t === "fixed") && (s = a.offsetLeft, r = a.offsetTop);
  }
  return {
    width: i,
    height: d,
    x: s + nt(e),
    y: r
  };
}
function Xa(e) {
  var t, n = oe(e), o = tt(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, i = ce(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), d = ce(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), s = -o.scrollLeft + nt(e), r = -o.scrollTop;
  return te(a || n).direction === "rtl" && (s += ce(n.clientWidth, a ? a.clientWidth : 0) - i), {
    width: i,
    height: d,
    x: s,
    y: r
  };
}
function ot(e) {
  var t = te(e), n = t.overflow, o = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + o);
}
function Rt(e) {
  return ["html", "body", "#document"].indexOf(ee(e)) >= 0 ? e.ownerDocument.body : K(e) && ot(e) ? e : Rt(Me(e));
}
function ke(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Rt(e), a = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = F(o), d = a ? [i].concat(i.visualViewport || [], ot(o) ? o : []) : o, s = t.concat(d);
  return a ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(ke(Me(d)))
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
  var n = he(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function yt(e, t, n) {
  return t === Ot ? Ke(Ua(e, n)) : ue(t) ? Ga(t, n) : Ke(Xa(oe(e)));
}
function Za(e) {
  var t = ke(Me(e)), n = ["absolute", "fixed"].indexOf(te(e).position) >= 0, o = n && K(e) ? Se(e) : e;
  return ue(o) ? t.filter(function(a) {
    return ue(a) && jt(a, o) && ee(a) !== "body";
  }) : [];
}
function Ja(e, t, n, o) {
  var a = t === "clippingParents" ? Za(e) : [].concat(t), i = [].concat(a, [n]), d = i[0], s = i.reduce(function(r, p) {
    var l = yt(e, p, o);
    return r.top = ce(l.top, r.top), r.right = Ee(l.right, r.right), r.bottom = Ee(l.bottom, r.bottom), r.left = ce(l.left, r.left), r;
  }, yt(e, d, o));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Tt(e) {
  var t = e.reference, n = e.element, o = e.placement, a = o ? Q(o) : null, i = o ? ye(o) : null, d = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, r;
  switch (a) {
    case q:
      r = {
        x: d,
        y: t.y - n.height
      };
      break;
    case X:
      r = {
        x: d,
        y: t.y + t.height
      };
      break;
    case G:
      r = {
        x: t.x + t.width,
        y: s
      };
      break;
    case V:
      r = {
        x: t.x - n.width,
        y: s
      };
      break;
    default:
      r = {
        x: t.x,
        y: t.y
      };
  }
  var p = a ? et(a) : null;
  if (p != null) {
    var l = p === "y" ? "height" : "width";
    switch (i) {
      case ve:
        r[p] = r[p] - (t[l] / 2 - n[l] / 2);
        break;
      case $e:
        r[p] = r[p] + (t[l] / 2 - n[l] / 2);
        break;
    }
  }
  return r;
}
function Ce(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, a = o === void 0 ? e.placement : o, i = n.strategy, d = i === void 0 ? e.strategy : i, s = n.boundary, r = s === void 0 ? ga : s, p = n.rootBoundary, l = p === void 0 ? Ot : p, h = n.elementContext, y = h === void 0 ? be : h, _ = n.altBoundary, O = _ === void 0 ? !1 : _, b = n.padding, w = b === void 0 ? 0 : b, g = At(typeof w != "number" ? w : Bt(w, Oe)), P = y === be ? _a : be, v = e.rects.popper, x = e.elements[O ? P : y], C = Ja(ue(x) ? x : x.contextElement || oe(e.elements.popper), r, l, d), S = he(e.elements.reference), B = Tt({
    reference: S,
    element: v,
    strategy: "absolute",
    placement: a
  }), E = Ke(Object.assign({}, v, B)), T = y === be ? E : S, R = {
    top: C.top - T.top + g.top,
    bottom: T.bottom - C.bottom + g.bottom,
    left: C.left - T.left + g.left,
    right: T.right - C.right + g.right
  }, M = e.modifiersData.offset;
  if (y === be && M) {
    var Z = M[a];
    Object.keys(R).forEach(function(L) {
      var ae = [G, X].indexOf(L) >= 0 ? 1 : -1, ie = [q, X].indexOf(L) >= 0 ? "y" : "x";
      R[L] += Z[ie] * ae;
    });
  }
  return R;
}
function Qa(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, a = n.boundary, i = n.rootBoundary, d = n.padding, s = n.flipVariations, r = n.allowedAutoPlacements, p = r === void 0 ? St : r, l = ye(o), h = l ? s ? pt : pt.filter(function(O) {
    return ye(O) === l;
  }) : Oe, y = h.filter(function(O) {
    return p.indexOf(O) >= 0;
  });
  y.length === 0 && (y = h);
  var _ = y.reduce(function(O, b) {
    return O[b] = Ce(e, {
      placement: b,
      boundary: a,
      rootBoundary: i,
      padding: d
    })[Q(b)], O;
  }, {});
  return Object.keys(_).sort(function(O, b) {
    return _[O] - _[b];
  });
}
function ei(e) {
  if (Q(e) === Ze)
    return [];
  var t = Te(e);
  return [ht(e), t, ht(t)];
}
function ti(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var a = n.mainAxis, i = a === void 0 ? !0 : a, d = n.altAxis, s = d === void 0 ? !0 : d, r = n.fallbackPlacements, p = n.padding, l = n.boundary, h = n.rootBoundary, y = n.altBoundary, _ = n.flipVariations, O = _ === void 0 ? !0 : _, b = n.allowedAutoPlacements, w = t.options.placement, g = Q(w), P = g === w, v = r || (P || !O ? [Te(w)] : ei(w)), x = [w].concat(v).reduce(function(fe, ne) {
      return fe.concat(Q(ne) === Ze ? Qa(t, {
        placement: ne,
        boundary: l,
        rootBoundary: h,
        padding: p,
        flipVariations: O,
        allowedAutoPlacements: b
      }) : ne);
    }, []), C = t.rects.reference, S = t.rects.popper, B = /* @__PURE__ */ new Map(), E = !0, T = x[0], R = 0; R < x.length; R++) {
      var M = x[R], Z = Q(M), L = ye(M) === ve, ae = [q, X].indexOf(Z) >= 0, ie = ae ? "width" : "height", H = Ce(t, {
        placement: M,
        boundary: l,
        rootBoundary: h,
        altBoundary: y,
        padding: p
      }), J = ae ? L ? G : V : L ? X : q;
      C[ie] > S[ie] && (J = Te(J));
      var Pe = Te(J), se = [];
      if (i && se.push(H[Z] <= 0), s && se.push(H[J] <= 0, H[Pe] <= 0), se.every(function(fe) {
        return fe;
      })) {
        T = M, E = !1;
        break;
      }
      B.set(M, se);
    }
    if (E)
      for (var je = O ? 3 : 1, Le = function(ne) {
        var _e = x.find(function(Ae) {
          var re = B.get(Ae);
          if (re)
            return re.slice(0, ne).every(function(qe) {
              return qe;
            });
        });
        if (_e)
          return T = _e, "break";
      }, ge = je; ge > 0; ge--) {
        var De = Le(ge);
        if (De === "break") break;
      }
    t.placement !== T && (t.modifiersData[o]._skip = !0, t.placement = T, t.reset = !0);
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
  return [q, G, X, V].some(function(t) {
    return e[t] >= 0;
  });
}
function oi(e) {
  var t = e.state, n = e.name, o = t.rects.reference, a = t.rects.popper, i = t.modifiersData.preventOverflow, d = Ce(t, {
    elementContext: "reference"
  }), s = Ce(t, {
    altBoundary: !0
  }), r = gt(d, o), p = gt(s, a, i), l = _t(r), h = _t(p);
  t.modifiersData[n] = {
    referenceClippingOffsets: r,
    popperEscapeOffsets: p,
    isReferenceHidden: l,
    hasPopperEscaped: h
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": l,
    "data-popper-escaped": h
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
  })) : n, d = i[0], s = i[1];
  return d = d || 0, s = (s || 0) * a, [V, G].indexOf(o) >= 0 ? {
    x: s,
    y: d
  } : {
    x: d,
    y: s
  };
}
function si(e) {
  var t = e.state, n = e.options, o = e.name, a = n.offset, i = a === void 0 ? [0, 0] : a, d = St.reduce(function(l, h) {
    return l[h] = ii(h, t.rects, i), l;
  }, {}), s = d[t.placement], r = s.x, p = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += r, t.modifiersData.popperOffsets.y += p), t.modifiersData[o] = d;
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
  t.modifiersData[n] = Tt({
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
  var t = e.state, n = e.options, o = e.name, a = n.mainAxis, i = a === void 0 ? !0 : a, d = n.altAxis, s = d === void 0 ? !1 : d, r = n.boundary, p = n.rootBoundary, l = n.altBoundary, h = n.padding, y = n.tether, _ = y === void 0 ? !0 : y, O = n.tetherOffset, b = O === void 0 ? 0 : O, w = Ce(t, {
    boundary: r,
    rootBoundary: p,
    padding: h,
    altBoundary: l
  }), g = Q(t.placement), P = ye(t.placement), v = !P, x = et(g), C = di(x), S = t.modifiersData.popperOffsets, B = t.rects.reference, E = t.rects.popper, T = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, R = typeof T == "number" ? {
    mainAxis: T,
    altAxis: T
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, T), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Z = {
    x: 0,
    y: 0
  };
  if (S) {
    if (i) {
      var L, ae = x === "y" ? q : V, ie = x === "y" ? X : G, H = x === "y" ? "height" : "width", J = S[x], Pe = J + w[ae], se = J - w[ie], je = _ ? -E[H] / 2 : 0, Le = P === ve ? B[H] : E[H], ge = P === ve ? -E[H] : -B[H], De = t.elements.arrow, fe = _ && De ? Qe(De) : {
        width: 0,
        height: 0
      }, ne = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Dt(), _e = ne[ae], Ae = ne[ie], re = we(0, B[H], fe[H]), qe = v ? B[H] / 2 - je - re - _e - R.mainAxis : Le - re - _e - R.mainAxis, Nt = v ? -B[H] / 2 + je + re + Ae + R.mainAxis : ge + re + Ae + R.mainAxis, Ve = t.elements.arrow && Se(t.elements.arrow), Mt = Ve ? x === "y" ? Ve.clientTop || 0 : Ve.clientLeft || 0 : 0, at = (L = M == null ? void 0 : M[x]) != null ? L : 0, Lt = J + qe - at - Mt, qt = J + Nt - at, it = we(_ ? Ee(Pe, Lt) : Pe, J, _ ? ce(se, qt) : se);
      S[x] = it, Z[x] = it - J;
    }
    if (s) {
      var st, Vt = x === "x" ? q : V, Ht = x === "x" ? X : G, le = S[C], Be = C === "y" ? "height" : "width", rt = le + w[Vt], lt = le - w[Ht], He = [q, V].indexOf(g) !== -1, ct = (st = M == null ? void 0 : M[C]) != null ? st : 0, dt = He ? rt : le - B[Be] - E[Be] - ct + R.altAxis, ut = He ? le + B[Be] + E[Be] - ct - R.altAxis : lt, ft = _ && He ? Ea(dt, le, ut) : we(_ ? dt : rt, le, _ ? ut : lt);
      S[C] = ft, Z[C] = ft - le;
    }
    t.modifiersData[o] = Z;
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
function vi(e) {
  return e === F(e) || !K(e) ? tt(e) : pi(e);
}
function mi(e) {
  var t = e.getBoundingClientRect(), n = me(t.width) / e.offsetWidth || 1, o = me(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function hi(e, t, n) {
  n === void 0 && (n = !1);
  var o = K(t), a = K(t) && mi(t), i = oe(t), d = he(e, a, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, r = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((ee(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ot(i)) && (s = vi(t)), K(t) ? (r = he(t, !0), r.x += t.clientLeft, r.y += t.clientTop) : i && (r.x = nt(i))), {
    x: d.left + s.scrollLeft - r.x,
    y: d.top + s.scrollTop - r.y,
    width: d.width,
    height: d.height
  };
}
function yi(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function a(i) {
    n.add(i.name);
    var d = [].concat(i.requires || [], i.requiresIfExists || []);
    d.forEach(function(s) {
      if (!n.has(s)) {
        var r = t.get(s);
        r && a(r);
      }
    }), o.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || a(i);
  }), o;
}
function gi(e) {
  var t = yi(e);
  return ja.reduce(function(n, o) {
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
  return function(s, r, p) {
    p === void 0 && (p = i);
    var l = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, bt, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: r
      },
      attributes: {},
      styles: {}
    }, h = [], y = !1, _ = {
      state: l,
      setOptions: function(g) {
        var P = typeof g == "function" ? g(l.options) : g;
        b(), l.options = Object.assign({}, i, l.options, P), l.scrollParents = {
          reference: ue(s) ? ke(s) : s.contextElement ? ke(s.contextElement) : [],
          popper: ke(r)
        };
        var v = gi(bi([].concat(o, l.options.modifiers)));
        return l.orderedModifiers = v.filter(function(x) {
          return x.enabled;
        }), O(), _.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!y) {
          var g = l.elements, P = g.reference, v = g.popper;
          if (xt(P, v)) {
            l.rects = {
              reference: hi(P, Se(v), l.options.strategy === "fixed"),
              popper: Qe(v)
            }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach(function(R) {
              return l.modifiersData[R.name] = Object.assign({}, R.data);
            });
            for (var x = 0; x < l.orderedModifiers.length; x++) {
              if (l.reset === !0) {
                l.reset = !1, x = -1;
                continue;
              }
              var C = l.orderedModifiers[x], S = C.fn, B = C.options, E = B === void 0 ? {} : B, T = C.name;
              typeof S == "function" && (l = S({
                state: l,
                options: E,
                name: T,
                instance: _
              }) || l);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: _i(function() {
        return new Promise(function(w) {
          _.forceUpdate(), w(l);
        });
      }),
      destroy: function() {
        b(), y = !0;
      }
    };
    if (!xt(s, r))
      return _;
    _.setOptions(p).then(function(w) {
      !y && p.onFirstUpdate && p.onFirstUpdate(w);
    });
    function O() {
      l.orderedModifiers.forEach(function(w) {
        var g = w.name, P = w.options, v = P === void 0 ? {} : P, x = w.effect;
        if (typeof x == "function") {
          var C = x({
            state: l,
            name: g,
            instance: _,
            options: v
          }), S = function() {
          };
          h.push(C || S);
        }
      });
    }
    function b() {
      h.forEach(function(w) {
        return w();
      }), h = [];
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
    const o = e, a = n, i = z("bottom"), d = z(null), s = N(
      () => o.validation ? o.validation(d.value) : !0
    ), r = N(() => !s.value && o.requiredField && o.error ? "is-invalid" : ""), p = () => Array.isArray(d.value) ? o.data.filter((b) => !d.value.some((w) => w.id === b.id)) : o.data, l = () => d.value ? o.data.filter((b) => b.id !== d.value.id) : o.data, h = N(() => o.multiple ? p() : l()), y = (b) => o.selectable ? o.selectable(b) : (w) => w.includes(w);
    de(
      () => o.selected,
      (b) => {
        b && (d.value = b);
      },
      { immediate: !0 }
    ), de(d, () => {
      a("emitValue", s.value ? d.value : null);
    }), Ne(() => {
      o.submitted && _();
    });
    const _ = () => {
      d.value = o.multiple ? [] : null;
    }, O = (b, w, { width: g }) => {
      b.style.width = g;
      const P = ki(w.$refs.toggle, b, {
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
            fn({ state: v }) {
              w.$el.classList.toggle(
                "drop-up",
                v.placement === "top"
              );
            }
          }
        ]
      });
      return () => P.destroy();
    };
    return t({ clean: _ }), (b, w) => {
      const g = U("v-select");
      return c(), Y(g, {
        "calculate-position": O,
        options: h.value,
        modelValue: d.value,
        "onUpdate:modelValue": w[0] || (w[0] = (P) => d.value = P),
        label: e.labelCustom,
        multiple: e.multiple,
        placeholder: e.placeHolder,
        class: D(["eit-select-component", r.value]),
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
    const o = e, a = n, i = z(null), d = z(""), s = N(() => o.validation && o.validation(d.value)), r = N(() => !s.value && o.requiredField && o.error ? "is-invalid" : ""), p = () => {
      d.value = "";
    };
    return de(
      () => o.input,
      (l) => {
        l && (d.value = l);
      }
    ), de(d, () => {
      i.value.style.height = "50px", i.value.style.height = `${i.value.scrollHeight}px`, a("emitValue", s.value ? d.value : "");
    }), Ne(() => {
      o.submitted && p();
    }), t({ clean: p }), (l, h) => Ue((c(), u("textarea", {
      ref_key: "textarea",
      ref: i,
      "onUpdate:modelValue": h[0] || (h[0] = (y) => d.value = y),
      maxlength: e.maxLength,
      autocomplete: "off",
      class: D(["form-control eit-textarea eit-textarea-resize", r.value]),
      placeholder: e.placeHolder
    }, null, 10, Ci)), [
      [
        kt,
        d.value,
        void 0,
        { trim: !0 }
      ]
    ]);
  }
}, Si = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20style='margin:%20auto;%20display:%20block;%20shape-rendering:%20auto;'%20width='200px'%20height='200px'%20viewBox='0%200%20100%20100'%20preserveAspectRatio='xMidYMid'%3e%3crect%20x='17.5'%20y='30'%20width='15'%20height='40'%20fill='%23009da6'%3e%3canimate%20attributeName='y'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='18;30;30'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.2s'%3e%3c/animate%3e%3canimate%20attributeName='height'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='64;40;40'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.2s'%3e%3c/animate%3e%3c/rect%3e%3crect%20x='42.5'%20y='30'%20width='15'%20height='40'%20fill='%2379cace'%3e%3canimate%20attributeName='y'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='20.999999999999996;30;30'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.1s'%3e%3c/animate%3e%3canimate%20attributeName='height'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='58.00000000000001;40;40'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.1s'%3e%3c/animate%3e%3c/rect%3e%3crect%20x='67.5'%20y='30'%20width='15'%20height='40'%20fill='%23a9e4e7'%3e%3canimate%20attributeName='y'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='20.999999999999996;30;30'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%3e%3c/animate%3e%3canimate%20attributeName='height'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='58.00000000000001;40;40'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%3e%3c/animate%3e%3c/rect%3e%3c/svg%3e", Pi = { class: "p-3 eit-loading" }, Et = {
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
    return (n, o) => (c(), u("div", Pi, [
      f("img", {
        style: We(`width:${t.size}px`),
        src: Si
      }, null, 4)
    ]));
  }
}, wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlertComponent: Ct,
  BadgeComponent: pe,
  BreadcrumbComponent: en,
  ButtonComponent: Ye,
  DetailComponent: go,
  DialogComponent: jo,
  HighlightComponent: Co,
  InputComponent: ya,
  LoadingComponent: Et,
  PaginationComponent: Kn,
  PopoverComponent: fa,
  ProgressBarComponent: Vo,
  PropsComponent: No,
  SelectComponent: $i,
  SkeletonComponent: Ge,
  TabComponent: ko,
  TableComponent: zn,
  TextareaResizeComponent: Oi,
  ToastComponent: Qo
}, Symbol.toStringTag, { value: "Module" }));
function ji(e, t) {
  const n = $t(), o = N(() => n.meta.requiresAuth ? e.config.darkTheme ? t.logotipo.logo_dark : t.logotipo.logo_light : t.platformDarkTheme ? t.logotipo.logo_dark : t.logotipo.logo_light), a = N(() => e.config.darkTheme ? t.logotipo.isotipo_dark : t.logotipo.isotipo_light);
  return { logotipo: o, isotipo: a };
}
const zi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useLogos: ji
}, Symbol.toStringTag, { value: "Module" }));
function Di() {
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
    const d = i.length >= 8, s = /[A-Z]/.test(i), r = /[a-z]/.test(i), p = /[0-9]/.test(i), l = /[!@#$%^&*(),.?":{}|<>]/.test(i);
    return d && s && r && p && l;
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
    const { sort: n, data: o } = t, { keys: a, index: i, asc: d } = n, s = a[i];
    return o.sort((r, p) => {
      let l = r[s], h = p[s];
      return typeof l == "object" && l !== null && (l = l.name, h = h.name), l === h ? 0 : (l > h ? 1 : -1) * (d ? 1 : -1);
    }), o;
  }
  return { sortTable: e };
}
xe.extend(Kt);
xe.locale("es");
function Ti() {
  function e(s) {
    return xe(s, "YYYY-MM-DD").format("DD/MM/YYYY");
  }
  function t(s) {
    return xe(s).format("YYYY-MM-DD");
  }
  function n(s) {
    return xe(s).fromNow();
  }
  function o(s) {
    let r = s.replace(/[^0-9kK]/g, ""), p = r.slice(0, -1).replace(/\B(?=(\d{3})+(?!\d))/g, "."), l = r.slice(-1).toUpperCase();
    return `${p}-${l}`;
  }
  function a(s) {
    return s === null ? "" : s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  }
  function i(s) {
    return new Intl.NumberFormat("es-CL").format(s);
  }
  function d(s) {
    const r = s.replace(/\./g, "");
    return Number(r);
  }
  return {
    formatDate: e,
    formatDateToBack: t,
    formatDateAgo: n,
    formatRut: o,
    formatCapitalize: a,
    formatCurrency: i,
    formatCurrencyToBack: d
  };
}
function Ei() {
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
const Fi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useFormat: Ti,
  useInputMask: Ai,
  useKeypress: Bi,
  useTable: Ri,
  useTooltip: Ei,
  useValidator: Di
}, Symbol.toStringTag, { value: "Module" })), Wi = {
  install(e) {
    Object.keys(wt).forEach((t) => {
      e.component(t, wt[t]);
    });
  }
};
export {
  zi as composables,
  Wi as default,
  Fi as utils
};
