import { computed as N, resolveComponent as U, openBlock as l, createElementBlock as d, normalizeClass as j, Fragment as w, createTextVNode as R, toDisplayString as D, createCommentVNode as h, createBlock as Y, createElementVNode as u, createVNode as $, withCtx as Fe, renderList as W, renderSlot as I, mergeProps as zt, createStaticVNode as Ft, ref as z, watch as de, watchEffect as Ne, withDirectives as Ue, withKeys as Xe, vModelText as kt, onMounted as Wt, unref as ze, normalizeStyle as We, vModelDynamic as Yt } from "vue";
import { useRoute as $t } from "vue-router";
import { codeToHtml as It } from "shiki";
import xe from "dayjs";
import Kt from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";
const Ut = ["disabled"], Xt = /* @__PURE__ */ u("div", { class: "spinner-border spinner-border-sm me-1" }, null, -1), Ye = {
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
    const n = e, o = t, a = N(() => ["eit-btn", `${n.className}`]), i = (c) => {
      o("emitEvent", c);
    };
    return (c, s) => {
      const r = U("font-awesome-icon");
      return l(), d("button", {
        onClick: s[0] || (s[0] = (p) => i(p)),
        class: j([a.value, "d-flex align-items-center justify-content-center gap-1"]),
        disabled: n.isDisabled
      }, [
        n.loading ? (l(), d(w, { key: 0 }, [
          Xt,
          R(" " + D(n.loadingText), 1)
        ], 64)) : h("", !0),
        n.loading ? h("", !0) : (l(), d(w, { key: 1 }, [
          n.icon ? (l(), Y(r, {
            key: 0,
            icon: n.icon,
            class: j(e.iconClass)
          }, null, 8, ["icon", "class"])) : h("", !0),
          R(" " + D(e.text), 1)
        ], 64))
      ], 10, Ut);
    };
  }
}, Gt = { "aria-label": "breadcrumb" }, Zt = { class: "eit-breadcrumb" }, Jt = /* @__PURE__ */ u("span", { class: "px-2 eit-color--text-soft" }, "/", -1), Qt = {
  key: 1,
  class: "eit-color--text-soft"
}, en = {
  __name: "BreadcrumbComponent",
  setup(e) {
    const t = $t(), n = N(() => {
      let o = [], a = "";
      return t.matched.forEach((i, c) => {
        i.redirect ? a = "/" + i.redirect.path : a += "/" + i.path.split("/")[c + 1], o.push({
          name: i.name,
          title: i.meta.title || "Sin título",
          path: a,
          last: c === t.matched.length - 1
        });
      }), o;
    });
    return (o, a) => {
      const i = U("font-awesome-icon"), c = U("router-link");
      return l(), d("nav", Gt, [
        u("ul", Zt, [
          u("li", null, [
            $(c, {
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
          (l(!0), d(w, null, W(n.value, (s, r) => (l(), d("li", {
            key: r,
            class: "eit-breadcrumb__item"
          }, [
            I(o.$slots, s.name, zt({ ref_for: !0 }, s), () => [
              s.last ? (l(), d("span", Qt, D(s.name), 1)) : (l(), Y(c, {
                key: 0,
                to: s.path,
                class: "eit-color--text eit-color--text--link eit-color--underline"
              }, {
                default: Fe(() => [
                  R(D(s.name), 1)
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
      return l(), d("span", {
        key: `badge-${t.text}`,
        class: j(`eit-badge ${t.className}`)
      }, [
        t.icon ? (l(), Y(a, {
          key: 0,
          icon: t.icon,
          class: "me-1"
        }, null, 8, ["icon"])) : h("", !0),
        u("span", {
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
}, an = /* @__PURE__ */ u("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "80%" }
}, null, -1), sn = [
  an
], rn = { key: 1 }, ln = /* @__PURE__ */ u("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "60%" }
}, null, -1), cn = [
  ln
], dn = {
  key: 0,
  class: "eit-skeleton__table-first-td"
}, un = /* @__PURE__ */ u("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), fn = [
  un
], pn = { key: 1 }, vn = /* @__PURE__ */ u("div", {
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
    return (n, o) => (l(), d(w, null, [
      t.type === "table" ? (l(), d("table", nn, [
        u("thead", null, [
          u("tr", null, [
            (l(!0), d(w, null, W(t.table.column, (a) => (l(), d(w, { key: a }, [
              a === 1 ? (l(), d("th", on, sn)) : h("", !0),
              a > 1 ? (l(), d("th", rn, cn)) : h("", !0)
            ], 64))), 128))
          ])
        ]),
        u("tbody", null, [
          (l(!0), d(w, null, W(t.table.row, (a) => (l(), d("tr", { key: a }, [
            (l(!0), d(w, null, W(t.table.column, (i) => (l(), d(w, { key: i }, [
              i === 1 ? (l(), d("td", dn, fn)) : h("", !0),
              i > 1 ? (l(), d("td", pn, mn)) : h("", !0)
            ], 64))), 128))
          ]))), 128))
        ])
      ])) : h("", !0),
      t.type === "detail" ? (l(), d(w, { key: 1 }, [
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
      const a = U("font-awesome-icon");
      return l(), d("div", {
        class: j(`eit-alert eit-alert--${t.type} ${t.animation.active ? "eit-alert--animation" : "eit-alert--default"} ${t.animation.show ? "eit-alert--animation--show" : ""}`)
      }, [
        u("div", yn, [
          u("div", gn, [
            $(a, {
              icon: t.icon,
              class: j(e.iconClass)
            }, null, 8, ["icon", "class"])
          ]),
          u("div", {
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
}, Dn = {
  key: 4,
  class: "eit-table__string"
}, jn = {
  key: 0,
  class: "text-center"
}, Rn = { class: "dropdown eit-dropdown d-none d-lg-block" }, An = {
  href: "javascript:",
  class: "eit-btn-action",
  "data-bs-toggle": "dropdown"
}, Bn = { class: "dropdown-menu dropdown-custom-menu" }, En = ["onClick"], Tn = ["onClick"], Nn = { class: "d-flex w-100 justify-content-between align-items-center d-lg-none text-end" }, Mn = /* @__PURE__ */ u("strong", null, "Acciones:", -1), Ln = { class: "d-flex flex-wrap gap-2 ms-3" }, qn = ["onClick"], Vn = ["onClick"], Hn = ["onClick"], zn = {
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
    const n = e, o = t, a = (m) => {
      o("viewRecord", m);
    }, i = (m) => {
      o("updateSort", { index: m, asc: !n.sort.asc });
    }, c = (m) => typeof m == "string", s = (m) => typeof m == "object" && m !== null && !Array.isArray(m), r = (m) => Array.isArray(m), p = (m) => {
      if (m == null) return !0;
    }, f = (m) => Object.keys(m).includes("status") ? !m.status && "disabled" : "";
    return (m, x) => {
      var C, g, b, S;
      const y = U("font-awesome-icon");
      return l(), d("div", bn, [
        u("div", xn, [
          e.loading ? (l(), Y(Ge, {
            key: 0,
            type: "table",
            table: { row: (C = e.skeleton) == null ? void 0 : C.row, column: (g = e.skeleton) == null ? void 0 : g.column }
          }, null, 8, ["table"])) : h("", !0),
          !e.loading && !((b = e.data) != null && b.length) ? (l(), Y(Ct, {
            key: 1,
            ref: "alert",
            class: "mb-3",
            type: "info",
            icon: "fa-solid fa-info",
            message: "<strong>No hay resultados</strong> para tu búsqueda."
          }, null, 512)) : h("", !0),
          !e.loading && ((S = e.data) != null && S.length) ? (l(), d(w, { key: 2 }, [
            u("table", wn, [
              u("thead", null, [
                u("tr", null, [
                  (l(!0), d(w, null, W(e.columns, (_, P) => (l(), d("th", {
                    key: `column-${P}`,
                    scope: "col"
                  }, [
                    u("a", {
                      onClick: (v) => i(P),
                      href: "javascript:",
                      class: "d-flex justify-content-between"
                    }, [
                      R(D(_) + " ", 1),
                      e.sort.index === P ? (l(), d("span", {
                        key: `icono-${_}`,
                        class: "d-flex ms-2 eit-color--text"
                      }, [
                        e.sort.asc ? h("", !0) : (l(), d("span", {
                          key: `down-${_}`
                        }, [
                          $(y, { icon: "fa-solid fa-sort-down align-baseline" })
                        ])),
                        e.sort.asc ? (l(), d("span", {
                          key: `up-${_}`
                        }, [
                          $(y, { icon: "fa-solid fa-sort-up align-baseline" })
                        ])) : h("", !0)
                      ])) : (l(), d("span", {
                        key: `key-${_}`
                      }, [
                        $(y, { icon: "fa-solid fa-sort" })
                      ]))
                    ], 8, kn)
                  ]))), 128)),
                  e.enabledActions ? (l(), d("th", $n, " Acciones ")) : h("", !0)
                ])
              ]),
              u("tbody", null, [
                (l(!0), d(w, null, W(e.data, (_, P) => (l(), d("tr", {
                  key: `row-${P}`,
                  class: j(f(_))
                }, [
                  (l(!0), d(w, null, W(_, (v, k) => (l(), d("td", {
                    key: `value-${k}`
                  }, [
                    u("strong", Cn, D(e.columns[Object.keys(_).indexOf(k)]) + ":", 1),
                    Object.keys(_)[e.columnLink] === k ? (l(), d(w, { key: 0 }, [
                      m.viewRecord ? (l(), d("a", {
                        key: 0,
                        onClick: (O) => a(_),
                        href: "javascript:",
                        class: "eit-table__link"
                      }, D(v || "Sin datos"), 9, On)) : h("", !0),
                      m.viewRecord ? h("", !0) : (l(), d(w, { key: 1 }, [
                        R(D(v || "Sin datos"), 1)
                      ], 64))
                    ], 64)) : h("", !0),
                    Object.keys(_)[e.columnLink] !== k ? (l(), d(w, { key: 1 }, [
                      r(v) ? (l(), d("div", Sn, [
                        (l(!0), d(w, null, W(v, (O, A) => (l(), d("span", {
                          key: `value-array-${A}`,
                          class: "d-flex flex-wrap gap-1"
                        }, [
                          $(pe, {
                            text: O.name ? O.name : "Sin datos",
                            className: O.className
                          }, null, 8, ["text", "className"])
                        ]))), 128))
                      ])) : h("", !0),
                      k === "status" ? (l(), d(w, { key: 1 }, [
                        v ? (l(), Y(pe, {
                          key: 0,
                          text: "Activo",
                          className: "eit-badge__outline--secondary"
                        })) : h("", !0),
                        v ? h("", !0) : (l(), Y(pe, {
                          key: 1,
                          text: "Inactivo",
                          className: "eit-badge__outline--gray"
                        }))
                      ], 64)) : h("", !0),
                      s(v) ? (l(), Y(pe, {
                        key: 2,
                        text: v.name ? v.name : "Sin datos",
                        className: v.className
                      }, null, 8, ["text", "className"])) : h("", !0),
                      c(v) ? (l(), d("span", Pn, D(v || "Sin datos"), 1)) : h("", !0),
                      p(v) ? (l(), d("span", Dn, " Sin datos ")) : h("", !0)
                    ], 64)) : h("", !0)
                  ]))), 128)),
                  e.enabledActions ? (l(), d("td", jn, [
                    u("div", Rn, [
                      u("a", An, [
                        $(y, { icon: "fa-solid fa-ellipsis" })
                      ]),
                      u("ul", Bn, [
                        (l(!0), d(w, null, W(e.actions, (v) => (l(), d("li", {
                          key: v.name,
                          class: "mx-2"
                        }, [
                          v.booleanKey ? (l(), d("a", {
                            key: 0,
                            onClick: (k) => v.handler(_),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            _[v.booleanKey] ? h("", !0) : (l(), d(w, { key: 0 }, [
                              $(y, {
                                icon: v.iconEnabled,
                                class: j(v.iconClassEnabled)
                              }, null, 8, ["icon", "class"]),
                              R(" " + D(v.labelEnabled), 1)
                            ], 64)),
                            _[v.booleanKey] ? (l(), d(w, { key: 1 }, [
                              $(y, {
                                icon: v.iconDisabled,
                                class: j(v.iconClassDisabled)
                              }, null, 8, ["icon", "class"]),
                              R(" " + D(v.labelDisabled), 1)
                            ], 64)) : h("", !0)
                          ], 8, En)) : (l(), d("a", {
                            key: 1,
                            onClick: (k) => v.handler(_),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            $(y, {
                              icon: v.icon,
                              class: j(v.iconClass)
                            }, null, 8, ["icon", "class"]),
                            R(" " + D(v.label), 1)
                          ], 8, Tn))
                        ]))), 128))
                      ])
                    ]),
                    u("div", Nn, [
                      Mn,
                      u("div", Ln, [
                        (l(!0), d(w, null, W(e.actions, (v) => (l(), d(w, {
                          key: v.name
                        }, [
                          v.booleanKey ? (l(), d(w, { key: 0 }, [
                            _[v.booleanKey] ? h("", !0) : (l(), d("a", {
                              key: 0,
                              onClick: (k) => v.handler(_),
                              href: "javascript:",
                              class: "eit-btn eit-btn-outline--gray eit-btn--square"
                            }, [
                              $(y, {
                                icon: v.iconEnabled,
                                class: j(v.iconClassEnabled)
                              }, null, 8, ["icon", "class"])
                            ], 8, qn)),
                            _[v.booleanKey] ? (l(), d("a", {
                              key: 1,
                              onClick: (k) => v.handler(_),
                              href: "javascript:",
                              class: "eit-btn eit-btn-outline--gray eit-btn--square"
                            }, [
                              $(y, {
                                icon: v.iconDisabled,
                                class: j(v.iconClassDisabled)
                              }, null, 8, ["icon", "class"])
                            ], 8, Vn)) : h("", !0)
                          ], 64)) : (l(), d("a", {
                            key: 1,
                            onClick: (k) => v.handler(_),
                            href: "javascript:",
                            class: "eit-btn eit-btn-outline--gray eit-btn--square"
                          }, [
                            $(y, {
                              icon: v.icon,
                              class: j(v.iconClass)
                            }, null, 8, ["icon", "class"])
                          ], 8, Hn))
                        ], 64))), 128))
                      ])
                    ])
                  ])) : h("", !0)
                ], 2))), 128))
              ])
            ]),
            I(m.$slots, "paginator")
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
    const n = e, o = t, a = z(n.data.currentPage), i = () => a.value++, c = () => a.value--, s = () => {
      a.value <= 0 && (a.value = 1), a.value > n.data.finalPage && (a.value = n.data.finalPage);
    }, r = (p) => {
      p.target.select();
    };
    return de(a, () => {
      a.value > 0 && a.value <= n.data.finalPage && o("updatePaginator", a.value);
    }), Ne(() => {
      n.data && (a.value = n.data.currentPage);
    }), (p, f) => {
      const m = U("font-awesome-icon");
      return l(), d("div", Fn, [
        u("button", {
          onClick: c,
          disabled: e.data.currentPage === 1,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          $(m, { icon: "fa-solid fa-chevron-left" })
        ], 8, Wn),
        Ue(u("input", {
          type: "number",
          "onUpdate:modelValue": f[0] || (f[0] = (x) => a.value = x),
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
        u("span", Yn, [
          R(" de " + D(e.data.finalPage) + " ", 1),
          e.data.finalPage === 1 ? (l(), d(w, { key: 0 }, [
            R(" página ")
          ], 64)) : h("", !0),
          e.data.finalPage > 1 ? (l(), d(w, { key: 1 }, [
            R(" páginas ")
          ], 64)) : h("", !0)
        ]),
        u("button", {
          onClick: i,
          disabled: e.data.currentPage === e.data.finalPage,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          $(m, { icon: "fa-solid fa-chevron-right" })
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
}, uo = /* @__PURE__ */ u("div", { class: "eit-border--bottom eit-border--color" }, null, -1), fo = [
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
    }, c = () => {
      o("editRecord", n.record);
    }, s = () => {
      o("deleteRecord", n.record);
    }, r = () => {
      o("downloadRecord", n.record);
    };
    return (p, f) => {
      const m = U("font-awesome-icon");
      return l(), d("section", {
        class: j(["eit-slide d-flex flex-column", [e.slide && "eit-slide--right", e.slideSmall && "eit-slide--small"]])
      }, [
        n.loading ? (l(), Y(Ge, {
          key: 0,
          type: "detail"
        })) : h("", !0),
        n.loading ? h("", !0) : (l(), d(w, { key: 1 }, [
          u("div", Un, [
            u("div", Xn, [
              u("div", Gn, [
                u("div", Zn, [
                  u("button", {
                    class: "eit-btn eit-btn--gray eit-btn--square",
                    onClick: a
                  }, [
                    $(m, {
                      icon: "fa-solid fa-angle-right",
                      class: "eit-font__size--x5 d-none d-lg-block"
                    }),
                    $(m, {
                      icon: "fa-solid fa-angle-down",
                      class: "eit-font__size--x5 d-lg-none"
                    })
                  ])
                ]),
                u("div", Jn, [
                  u("div", Qn, [
                    u("div", eo, [
                      u("h4", to, [
                        u("strong", null, [
                          I(p.$slots, "title")
                        ])
                      ]),
                      u("p", no, [
                        I(p.$slots, "subtitle")
                      ])
                    ]),
                    u("div", oo, [
                      n.dropdown ? (l(), d("div", ao, [
                        u("a", io, [
                          $(m, { icon: "fa-solid fa-ellipsis" })
                        ]),
                        u("ul", so, [
                          n.editRecord ? (l(), d("li", ro, [
                            u("a", {
                              onClick: c,
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              $(m, {
                                icon: "fa-solid fa-square-pen",
                                class: "eit-color--yellow"
                              }),
                              R(" " + D(e.editRecord), 1)
                            ])
                          ])) : h("", !0),
                          n.downloadRecord ? (l(), d("li", lo, [
                            u("a", {
                              onClick: r,
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              $(m, {
                                icon: "fa-solid fa-download",
                                class: "eit-color--blue"
                              }),
                              R(" " + D(n.downloadRecord), 1)
                            ])
                          ])) : h("", !0),
                          e.deleteRecord || e.enabledDisabledRecord ? (l(), d("li", co, fo)) : h("", !0),
                          n.enabledDisabledRecord ? (l(), d("li", po, [
                            u("a", {
                              onClick: i,
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              n.record.status ? h("", !0) : (l(), d(w, { key: 0 }, [
                                $(m, {
                                  icon: "fa-regular fa-circle-check",
                                  class: "eit-color--green"
                                }),
                                R(" Habilitar ")
                              ], 64)),
                              n.record.status ? (l(), d(w, { key: 1 }, [
                                $(m, {
                                  icon: "fa-solid fa-ban",
                                  class: "eit-color--red"
                                }),
                                R(" Deshabilitar ")
                              ], 64)) : h("", !0)
                            ])
                          ])) : h("", !0),
                          n.deleteRecord ? (l(), d("li", vo, [
                            u("a", {
                              onClick: s,
                              class: "dropdown-item dropdown-custom-menu-item eit-color--red",
                              href: "javascript:"
                            }, [
                              $(m, {
                                icon: "fa-solid fa-trash",
                                class: "eit-color--red"
                              }),
                              R(" " + D(n.deleteRecord), 1)
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
          u("div", mo, [
            u("div", ho, [
              u("div", yo, [
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
    return (i, c) => (l(), d(w, null, [
      u("div", _o, [
        u("ul", {
          class: j(`eit-tabs ${t.className}`)
        }, [
          (l(!0), d(w, null, W(e.data, (s, r) => (l(), d("li", {
            key: r,
            class: "eit-tabs__item"
          }, [
            u("a", {
              href: "javascript:",
              onClick: (p) => a(r),
              class: j(["eit-tabs__item__link", o.value === r ? "active" : ""])
            }, [
              R(D(s.name) + " ", 1),
              s.number ? (l(), d("span", xo, D(n(s.number)), 1)) : h("", !0)
            ], 10, bo)
          ]))), 128))
        ], 2),
        I(i.$slots, "dropdown")
      ]),
      u("div", wo, [
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
    })(), (a, i) => (l(), d("div", { innerHTML: n.value }, null, 8, $o));
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
    const o = e, a = n, i = z(null), c = () => {
      i.value.showModal(), i.value.classList.add("show");
    }, s = () => {
      i.value.close(), i.value.classList.remove("show"), a("emitCloseDialog");
    }, r = (f) => {
      f.key === "Escape" && s();
    }, p = () => {
      a("emitSubmit");
    };
    return Wt(() => {
      document.addEventListener("keyup", r);
    }), t({ showDialog: c, closeDialog: s }), (f, m) => {
      const x = U("font-awesome-icon");
      return l(), d("dialog", {
        ref_key: "dialog",
        ref: i,
        class: j(["eit-dialog", o.className]),
        onKeyup: Xe(s, ["esc"])
      }, [
        u("div", Oo, [
          e.loading ? (l(), Y(ze(Tt), {
            key: 0,
            size: "70"
          })) : h("", !0),
          e.loading ? h("", !0) : (l(), d(w, { key: 1 }, [
            u("div", So, [
              I(f.$slots, "head"),
              u("button", {
                onClick: s,
                class: "eit-dialog__close"
              }, [
                $(x, { icon: ["fas", "xmark"] })
              ])
            ]),
            u("div", {
              class: j(`eit-dialog__body ${e.scrollable ? "eit-dialog__body--scroll" : ""}`)
            }, [
              I(f.$slots, "content")
            ], 2),
            u("div", Po, [
              $(ze(Ye), {
                onClick: s,
                className: "eit-btn-outline--gray",
                text: "Volver"
              }),
              o.btnSubmit ? (l(), Y(ze(Ye), {
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
}, jo = { class: "row" }, Ro = { class: "col" }, Ao = /* @__PURE__ */ u("h2", { class: "eit-font__size--x4 eit-color--text eit-font__weight--300 eit-border--bottom eit-border--color mb-3" }, [
  /* @__PURE__ */ u("strong", { class: "eit-font__weight--900" }, "Props")
], -1), Bo = { class: "eit-table--overflow" }, Eo = { class: "table eit-table" }, To = /* @__PURE__ */ u("thead", null, [
  /* @__PURE__ */ u("tr", null, [
    /* @__PURE__ */ u("th", null, "Name"),
    /* @__PURE__ */ u("th", null, "Type"),
    /* @__PURE__ */ u("th", null, "Default")
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
    return (n, o) => (l(), d("div", jo, [
      u("div", Ro, [
        Ao,
        u("div", Bo, [
          u("table", Eo, [
            To,
            u("tbody", null, [
              (l(!0), d(w, null, W(t.data, (a) => (l(), d("tr", {
                key: a.name
              }, [
                u("td", null, [
                  $(pe, {
                    text: a.name,
                    className: "eit-badge__outline--gray"
                  }, null, 8, ["text"])
                ]),
                u("td", null, [
                  u("code", null, D(a.type), 1)
                ]),
                u("td", null, [
                  u("code", null, D(a.default), 1)
                ])
              ]))), 128))
            ])
          ])
        ])
      ])
    ]));
  }
}, Mo = { class: "eit-progress eit-progress--30" }, Lo = { key: 1 }, qo = /* @__PURE__ */ u("span", { class: "spinner-border spinner-border-sm" }, null, -1), Vo = {
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
    return (a, i) => (l(), d("div", Mo, [
      u("div", {
        class: j(["eit-progress__bar", `eit-progress__bar--${t.type}`]),
        style: We(`width: ${t.percentage}%`)
      }, [
        n.value !== 0 ? (l(), d(w, { key: 0 }, [
          t.percentage > 5 ? (l(), d(w, { key: 0 }, [
            R(D(t.percentage) + "% ", 1)
          ], 64)) : h("", !0)
        ], 64)) : h("", !0)
      ], 6),
      u("div", {
        class: "eit-progress__bar eit-progress__bar--transparent",
        style: We(`width: ${o.value === 0 ? 100 : o.value}%`)
      }, [
        t.loading ? h("", !0) : (l(), d(w, { key: 0 }, [
          o.value === 0 || o.value > 5 ? (l(), d(w, { key: 0 }, [
            R(D(o.value) + "% ", 1)
          ], 64)) : h("", !0)
        ], 64)),
        t.loading ? (l(), d("span", Lo, [
          qo,
          R(" Cargando... ")
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
    const n = e, o = z(!1), a = z("hidden"), i = z(""), c = N(() => ({
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
    return t({ handleShowToast: s, handleCloseToast: r }), (p, f) => {
      const m = U("font-awesome-icon");
      return l(), d("div", {
        class: j(["eit-toast__container", c.value])
      }, [
        u("div", {
          class: j(["eit-toast box-shadow", `eit-toast--${n.data.type}`])
        }, [
          u("div", Ho, [
            u("div", zo, [
              n.type === "success" ? (l(), d("span", Fo, [
                $(m, { icon: "fa-solid fa-circle-check" })
              ])) : h("", !0),
              n.type === "error" ? (l(), d("span", Wo, [
                $(m, { icon: "fa-solid fa-circle-xmark" })
              ])) : h("", !0),
              n.type === "warning" ? (l(), d("span", Yo, [
                $(m, { icon: "fa-solid fa-triangle-exclamation" })
              ])) : h("", !0),
              n.type === "info" ? (l(), d("span", Io, [
                $(m, { icon: "fa-solid fa-circle-info" })
              ])) : h("", !0)
            ]),
            u("div", Ko, [
              u("div", Uo, [
                u("div", Xo, [
                  u("p", Go, [
                    n.data.code ? (l(), d(w, { key: 0 }, [
                      R(D(n.data.code), 1)
                    ], 64)) : h("", !0),
                    R(" " + D(n.data.title), 1)
                  ]),
                  u("p", Zo, D(n.data.message), 1)
                ]),
                u("div", Jo, [
                  u("a", {
                    onClick: f[0] || (f[0] = (x) => r()),
                    href: "javascript:",
                    class: "eit-toast__close"
                  }, [
                    $(m, { icon: "fa-solid fa-xmark" })
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
    }, c = () => {
      o.value.hidePopover();
    };
    return t({ handleShowPopover: i, handleClosePopover: c }), (s, r) => {
      const p = U("font-awesome-icon");
      return l(), d("div", {
        ref_key: "popover",
        ref: o,
        class: j(["eit-popover__container", a.value]),
        popover: "manual"
      }, [
        u("div", {
          class: j(["eit-popover box-shadow", `eit-popover--${n.data.type}`])
        }, [
          u("div", ea, [
            u("div", ta, [
              n.type === "success" ? (l(), d("span", na, [
                $(p, { icon: "fa-solid fa-circle-check" })
              ])) : h("", !0),
              n.type === "error" ? (l(), d("span", oa, [
                $(p, { icon: "fa-solid fa-circle-xmark" })
              ])) : h("", !0),
              n.type === "warning" ? (l(), d("span", aa, [
                $(p, { icon: "fa-solid fa-triangle-exclamation" })
              ])) : h("", !0),
              n.type === "info" ? (l(), d("span", ia, [
                $(p, { icon: "fa-solid fa-circle-info" })
              ])) : h("", !0)
            ]),
            u("div", sa, [
              u("div", ra, [
                u("div", la, [
                  u("p", ca, [
                    n.data.code ? (l(), d(w, { key: 0 }, [
                      R(D(n.data.code), 1)
                    ], 64)) : h("", !0),
                    R(" " + D(n.data.title), 1)
                  ]),
                  u("p", da, D(n.data.message), 1)
                ]),
                u("div", ua, [
                  u("a", {
                    onClick: r[0] || (r[0] = (f) => c()),
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
    const o = e, a = n, i = z(""), c = N(
      () => o.validation ? o.validation(i.value) : !0
    ), s = N(() => !c.value && o.requiredField && o.error ? "is-invalid" : ""), r = N(() => o.floatLabel ? "" : o.placeHolder), p = N(() => [
      o.floatLabel || o.floatLeft || o.floatRight ? "eit-input__display" : "",
      o.floatLeft ? "eit-input__display__float-left" : "",
      o.floatRight ? "eit-input__display__float-right" : ""
    ]), f = () => {
      a("emitPressEnter");
    }, m = () => {
      i.value = "";
    };
    return de(() => o.input, (x) => {
      x && (i.value = x);
    }), de(i, () => {
      a("emitValue", c.value ? i.value : "");
    }), Ne(() => {
      o.inputMask && (i.value = o.inputMask(i.value)), o.submitted && m();
    }), t({ clean: m }), (x, y) => (l(), d("div", {
      class: j(p.value)
    }, [
      Ue(u("input", {
        autocomplete: "off",
        class: j(["form-control eit-input", s.value]),
        type: o.inputType,
        "onUpdate:modelValue": y[0] || (y[0] = (C) => i.value = C),
        maxlength: o.maxLength,
        onKeypress: y[1] || (y[1] = (C) => o.keyPress && o.keyPress(C)),
        placeholder: r.value,
        onKeyup: Xe(f, ["enter"]),
        disabled: o.isDisabled
      }, null, 42, pa), [
        [
          Yt,
          i.value,
          void 0,
          { trim: !0 }
        ]
      ]),
      o.floatLabel ? (l(), d("label", va, D(o.floatLabel), 1)) : h("", !0),
      o.floatLeft ? (l(), d("span", ma, [
        I(x.$slots, "float-left")
      ])) : h("", !0),
      o.floatRight ? (l(), d("span", ha, [
        I(x.$slots, "float-right")
      ])) : h("", !0)
    ], 2));
  }
};
var q = "top", X = "bottom", G = "right", V = "left", Ze = "auto", Oe = [q, X, G, V], ve = "start", $e = "end", ga = "clippingParents", Ot = "viewport", be = "popper", _a = "reference", pt = /* @__PURE__ */ Oe.reduce(function(e, t) {
  return e.concat([t + "-" + ve, t + "-" + $e]);
}, []), St = /* @__PURE__ */ [].concat(Oe, [Ze]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ve, t + "-" + $e]);
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
function ja(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, a = t.attributes[n] || {}, i = t.elements[n];
    !K(i) || !ee(i) || (Object.assign(i.style, o), Object.keys(a).forEach(function(c) {
      var s = a[c];
      s === !1 ? i.removeAttribute(c) : i.setAttribute(c, s === !0 ? "" : s);
    }));
  });
}
function Ra(e) {
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
      var a = t.elements[o], i = t.attributes[o] || {}, c = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), s = c.reduce(function(r, p) {
        return r[p] = "", r;
      }, {});
      !K(a) || !ee(a) || (Object.assign(a.style, s), Object.keys(i).forEach(function(r) {
        a.removeAttribute(r);
      }));
    });
  };
}
const Aa = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ja,
  effect: Ra,
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
function he(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), a = 1, i = 1;
  t && K(e) && (a = e.offsetWidth > 0 && me(o.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && me(o.height) / e.offsetHeight || 1);
  var c = ue(e) ? F(e) : window, s = c.visualViewport, r = !Pt() && n, p = (o.left + (r && s ? s.offsetLeft : 0)) / a, f = (o.top + (r && s ? s.offsetTop : 0)) / i, m = o.width / a, x = o.height / i;
  return {
    width: m,
    height: x,
    top: f,
    right: p + m,
    bottom: f + x,
    left: p,
    x: p,
    y: f
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
function Ba(e) {
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
function Ea(e) {
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
  for (var t = F(e), n = vt(e); n && Ba(n) && te(n).position === "static"; )
    n = vt(n);
  return n && (ee(n) === "html" || ee(n) === "body" && te(n).position === "static") ? t : n || Ea(e) || t;
}
function et(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function we(e, t, n) {
  return ce(e, Te(t, n));
}
function Ta(e, t, n) {
  var o = we(e, t, n);
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
function Rt(e) {
  return Object.assign({}, jt(), e);
}
function At(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Na = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Rt(typeof t != "number" ? t : At(t, Oe));
};
function Ma(e) {
  var t, n = e.state, o = e.name, a = e.options, i = n.elements.arrow, c = n.modifiersData.popperOffsets, s = Q(n.placement), r = et(s), p = [V, G].indexOf(s) >= 0, f = p ? "height" : "width";
  if (!(!i || !c)) {
    var m = Na(a.padding, n), x = Qe(i), y = r === "y" ? q : V, C = r === "y" ? X : G, g = n.rects.reference[f] + n.rects.reference[r] - c[r] - n.rects.popper[f], b = c[r] - n.rects.reference[r], S = Se(i), _ = S ? r === "y" ? S.clientHeight || 0 : S.clientWidth || 0 : 0, P = g / 2 - b / 2, v = m[y], k = _ - x[f] - m[C], O = _ / 2 - x[f] / 2 + P, A = we(v, O, k), T = r;
    n.modifiersData[o] = (t = {}, t[T] = A, t.centerOffset = A - O, t);
  }
}
function La(e) {
  var t = e.state, n = e.options, o = n.element, a = o === void 0 ? "[data-popper-arrow]" : o;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || Dt(t.elements.popper, a) && (t.elements.arrow = a));
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
  var t, n = e.popper, o = e.popperRect, a = e.placement, i = e.variation, c = e.offsets, s = e.position, r = e.gpuAcceleration, p = e.adaptive, f = e.roundOffsets, m = e.isFixed, x = c.x, y = x === void 0 ? 0 : x, C = c.y, g = C === void 0 ? 0 : C, b = typeof f == "function" ? f({
    x: y,
    y: g
  }) : {
    x: y,
    y: g
  };
  y = b.x, g = b.y;
  var S = c.hasOwnProperty("x"), _ = c.hasOwnProperty("y"), P = V, v = q, k = window;
  if (p) {
    var O = Se(n), A = "clientHeight", T = "clientWidth";
    if (O === F(n) && (O = oe(n), te(O).position !== "static" && s === "absolute" && (A = "scrollHeight", T = "scrollWidth")), O = O, a === q || (a === V || a === G) && i === $e) {
      v = X;
      var E = m && O === k && k.visualViewport ? k.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        O[A]
      );
      g -= E - o.height, g *= r ? 1 : -1;
    }
    if (a === V || (a === q || a === X) && i === $e) {
      P = G;
      var B = m && O === k && k.visualViewport ? k.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        O[T]
      );
      y -= B - o.width, y *= r ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: s
  }, p && Va), Z = f === !0 ? Ha({
    x: y,
    y: g
  }, F(n)) : {
    x: y,
    y: g
  };
  if (y = Z.x, g = Z.y, r) {
    var L;
    return Object.assign({}, M, (L = {}, L[v] = _ ? "0" : "", L[P] = S ? "0" : "", L.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + g + "px)" : "translate3d(" + y + "px, " + g + "px, 0)", L));
  }
  return Object.assign({}, M, (t = {}, t[v] = _ ? g + "px" : "", t[P] = S ? y + "px" : "", t.transform = "", t));
}
function za(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, a = o === void 0 ? !0 : o, i = n.adaptive, c = i === void 0 ? !0 : i, s = n.roundOffsets, r = s === void 0 ? !0 : s, p = {
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
    adaptive: c,
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
var Be = {
  passive: !0
};
function Wa(e) {
  var t = e.state, n = e.instance, o = e.options, a = o.scroll, i = a === void 0 ? !0 : a, c = o.resize, s = c === void 0 ? !0 : c, r = F(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && p.forEach(function(f) {
    f.addEventListener("scroll", n.update, Be);
  }), s && r.addEventListener("resize", n.update, Be), function() {
    i && p.forEach(function(f) {
      f.removeEventListener("scroll", n.update, Be);
    }), s && r.removeEventListener("resize", n.update, Be);
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
function Ee(e) {
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
  var n = F(e), o = oe(e), a = n.visualViewport, i = o.clientWidth, c = o.clientHeight, s = 0, r = 0;
  if (a) {
    i = a.width, c = a.height;
    var p = Pt();
    (p || !p && t === "fixed") && (s = a.offsetLeft, r = a.offsetTop);
  }
  return {
    width: i,
    height: c,
    x: s + nt(e),
    y: r
  };
}
function Xa(e) {
  var t, n = oe(e), o = tt(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, i = ce(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), c = ce(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), s = -o.scrollLeft + nt(e), r = -o.scrollTop;
  return te(a || n).direction === "rtl" && (s += ce(n.clientWidth, a ? a.clientWidth : 0) - i), {
    width: i,
    height: c,
    x: s,
    y: r
  };
}
function ot(e) {
  var t = te(e), n = t.overflow, o = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + o);
}
function Bt(e) {
  return ["html", "body", "#document"].indexOf(ee(e)) >= 0 ? e.ownerDocument.body : K(e) && ot(e) ? e : Bt(Me(e));
}
function ke(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Bt(e), a = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = F(o), c = a ? [i].concat(i.visualViewport || [], ot(o) ? o : []) : o, s = t.concat(c);
  return a ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(ke(Me(c)))
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
    return ue(a) && Dt(a, o) && ee(a) !== "body";
  }) : [];
}
function Ja(e, t, n, o) {
  var a = t === "clippingParents" ? Za(e) : [].concat(t), i = [].concat(a, [n]), c = i[0], s = i.reduce(function(r, p) {
    var f = yt(e, p, o);
    return r.top = ce(f.top, r.top), r.right = Te(f.right, r.right), r.bottom = Te(f.bottom, r.bottom), r.left = ce(f.left, r.left), r;
  }, yt(e, c, o));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Et(e) {
  var t = e.reference, n = e.element, o = e.placement, a = o ? Q(o) : null, i = o ? ye(o) : null, c = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, r;
  switch (a) {
    case q:
      r = {
        x: c,
        y: t.y - n.height
      };
      break;
    case X:
      r = {
        x: c,
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
    var f = p === "y" ? "height" : "width";
    switch (i) {
      case ve:
        r[p] = r[p] - (t[f] / 2 - n[f] / 2);
        break;
      case $e:
        r[p] = r[p] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return r;
}
function Ce(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, a = o === void 0 ? e.placement : o, i = n.strategy, c = i === void 0 ? e.strategy : i, s = n.boundary, r = s === void 0 ? ga : s, p = n.rootBoundary, f = p === void 0 ? Ot : p, m = n.elementContext, x = m === void 0 ? be : m, y = n.altBoundary, C = y === void 0 ? !1 : y, g = n.padding, b = g === void 0 ? 0 : g, S = Rt(typeof b != "number" ? b : At(b, Oe)), _ = x === be ? _a : be, P = e.rects.popper, v = e.elements[C ? _ : x], k = Ja(ue(v) ? v : v.contextElement || oe(e.elements.popper), r, f, c), O = he(e.elements.reference), A = Et({
    reference: O,
    element: P,
    strategy: "absolute",
    placement: a
  }), T = Ke(Object.assign({}, P, A)), E = x === be ? T : O, B = {
    top: k.top - E.top + S.top,
    bottom: E.bottom - k.bottom + S.bottom,
    left: k.left - E.left + S.left,
    right: E.right - k.right + S.right
  }, M = e.modifiersData.offset;
  if (x === be && M) {
    var Z = M[a];
    Object.keys(B).forEach(function(L) {
      var ae = [G, X].indexOf(L) >= 0 ? 1 : -1, ie = [q, X].indexOf(L) >= 0 ? "y" : "x";
      B[L] += Z[ie] * ae;
    });
  }
  return B;
}
function Qa(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, a = n.boundary, i = n.rootBoundary, c = n.padding, s = n.flipVariations, r = n.allowedAutoPlacements, p = r === void 0 ? St : r, f = ye(o), m = f ? s ? pt : pt.filter(function(C) {
    return ye(C) === f;
  }) : Oe, x = m.filter(function(C) {
    return p.indexOf(C) >= 0;
  });
  x.length === 0 && (x = m);
  var y = x.reduce(function(C, g) {
    return C[g] = Ce(e, {
      placement: g,
      boundary: a,
      rootBoundary: i,
      padding: c
    })[Q(g)], C;
  }, {});
  return Object.keys(y).sort(function(C, g) {
    return y[C] - y[g];
  });
}
function ei(e) {
  if (Q(e) === Ze)
    return [];
  var t = Ee(e);
  return [ht(e), t, ht(t)];
}
function ti(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var a = n.mainAxis, i = a === void 0 ? !0 : a, c = n.altAxis, s = c === void 0 ? !0 : c, r = n.fallbackPlacements, p = n.padding, f = n.boundary, m = n.rootBoundary, x = n.altBoundary, y = n.flipVariations, C = y === void 0 ? !0 : y, g = n.allowedAutoPlacements, b = t.options.placement, S = Q(b), _ = S === b, P = r || (_ || !C ? [Ee(b)] : ei(b)), v = [b].concat(P).reduce(function(fe, ne) {
      return fe.concat(Q(ne) === Ze ? Qa(t, {
        placement: ne,
        boundary: f,
        rootBoundary: m,
        padding: p,
        flipVariations: C,
        allowedAutoPlacements: g
      }) : ne);
    }, []), k = t.rects.reference, O = t.rects.popper, A = /* @__PURE__ */ new Map(), T = !0, E = v[0], B = 0; B < v.length; B++) {
      var M = v[B], Z = Q(M), L = ye(M) === ve, ae = [q, X].indexOf(Z) >= 0, ie = ae ? "width" : "height", H = Ce(t, {
        placement: M,
        boundary: f,
        rootBoundary: m,
        altBoundary: x,
        padding: p
      }), J = ae ? L ? G : V : L ? X : q;
      k[ie] > O[ie] && (J = Ee(J));
      var Pe = Ee(J), se = [];
      if (i && se.push(H[Z] <= 0), s && se.push(H[J] <= 0, H[Pe] <= 0), se.every(function(fe) {
        return fe;
      })) {
        E = M, T = !1;
        break;
      }
      A.set(M, se);
    }
    if (T)
      for (var De = C ? 3 : 1, Le = function(ne) {
        var _e = v.find(function(Re) {
          var re = A.get(Re);
          if (re)
            return re.slice(0, ne).every(function(qe) {
              return qe;
            });
        });
        if (_e)
          return E = _e, "break";
      }, ge = De; ge > 0; ge--) {
        var je = Le(ge);
        if (je === "break") break;
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
  return [q, G, X, V].some(function(t) {
    return e[t] >= 0;
  });
}
function oi(e) {
  var t = e.state, n = e.name, o = t.rects.reference, a = t.rects.popper, i = t.modifiersData.preventOverflow, c = Ce(t, {
    elementContext: "reference"
  }), s = Ce(t, {
    altBoundary: !0
  }), r = gt(c, o), p = gt(s, a, i), f = _t(r), m = _t(p);
  t.modifiersData[n] = {
    referenceClippingOffsets: r,
    popperEscapeOffsets: p,
    isReferenceHidden: f,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": f,
    "data-popper-escaped": m
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
  })) : n, c = i[0], s = i[1];
  return c = c || 0, s = (s || 0) * a, [V, G].indexOf(o) >= 0 ? {
    x: s,
    y: c
  } : {
    x: c,
    y: s
  };
}
function si(e) {
  var t = e.state, n = e.options, o = e.name, a = n.offset, i = a === void 0 ? [0, 0] : a, c = St.reduce(function(f, m) {
    return f[m] = ii(m, t.rects, i), f;
  }, {}), s = c[t.placement], r = s.x, p = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += r, t.modifiersData.popperOffsets.y += p), t.modifiersData[o] = c;
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
  var t = e.state, n = e.options, o = e.name, a = n.mainAxis, i = a === void 0 ? !0 : a, c = n.altAxis, s = c === void 0 ? !1 : c, r = n.boundary, p = n.rootBoundary, f = n.altBoundary, m = n.padding, x = n.tether, y = x === void 0 ? !0 : x, C = n.tetherOffset, g = C === void 0 ? 0 : C, b = Ce(t, {
    boundary: r,
    rootBoundary: p,
    padding: m,
    altBoundary: f
  }), S = Q(t.placement), _ = ye(t.placement), P = !_, v = et(S), k = di(v), O = t.modifiersData.popperOffsets, A = t.rects.reference, T = t.rects.popper, E = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, B = typeof E == "number" ? {
    mainAxis: E,
    altAxis: E
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, E), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Z = {
    x: 0,
    y: 0
  };
  if (O) {
    if (i) {
      var L, ae = v === "y" ? q : V, ie = v === "y" ? X : G, H = v === "y" ? "height" : "width", J = O[v], Pe = J + b[ae], se = J - b[ie], De = y ? -T[H] / 2 : 0, Le = _ === ve ? A[H] : T[H], ge = _ === ve ? -T[H] : -A[H], je = t.elements.arrow, fe = y && je ? Qe(je) : {
        width: 0,
        height: 0
      }, ne = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : jt(), _e = ne[ae], Re = ne[ie], re = we(0, A[H], fe[H]), qe = P ? A[H] / 2 - De - re - _e - B.mainAxis : Le - re - _e - B.mainAxis, Nt = P ? -A[H] / 2 + De + re + Re + B.mainAxis : ge + re + Re + B.mainAxis, Ve = t.elements.arrow && Se(t.elements.arrow), Mt = Ve ? v === "y" ? Ve.clientTop || 0 : Ve.clientLeft || 0 : 0, at = (L = M == null ? void 0 : M[v]) != null ? L : 0, Lt = J + qe - at - Mt, qt = J + Nt - at, it = we(y ? Te(Pe, Lt) : Pe, J, y ? ce(se, qt) : se);
      O[v] = it, Z[v] = it - J;
    }
    if (s) {
      var st, Vt = v === "x" ? q : V, Ht = v === "x" ? X : G, le = O[k], Ae = k === "y" ? "height" : "width", rt = le + b[Vt], lt = le - b[Ht], He = [q, V].indexOf(S) !== -1, ct = (st = M == null ? void 0 : M[k]) != null ? st : 0, dt = He ? rt : le - A[Ae] - T[Ae] - ct + B.altAxis, ut = He ? le + A[Ae] + T[Ae] - ct - B.altAxis : lt, ft = y && He ? Ta(dt, le, ut) : we(y ? dt : rt, le, y ? ut : lt);
      O[k] = ft, Z[k] = ft - le;
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
  var o = K(t), a = K(t) && mi(t), i = oe(t), c = he(e, a, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, r = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((ee(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ot(i)) && (s = vi(t)), K(t) ? (r = he(t, !0), r.x += t.clientLeft, r.y += t.clientTop) : i && (r.x = nt(i))), {
    x: c.left + s.scrollLeft - r.x,
    y: c.top + s.scrollTop - r.y,
    width: c.width,
    height: c.height
  };
}
function yi(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function a(i) {
    n.add(i.name);
    var c = [].concat(i.requires || [], i.requiresIfExists || []);
    c.forEach(function(s) {
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
  return function(s, r, p) {
    p === void 0 && (p = i);
    var f = {
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
    }, m = [], x = !1, y = {
      state: f,
      setOptions: function(S) {
        var _ = typeof S == "function" ? S(f.options) : S;
        g(), f.options = Object.assign({}, i, f.options, _), f.scrollParents = {
          reference: ue(s) ? ke(s) : s.contextElement ? ke(s.contextElement) : [],
          popper: ke(r)
        };
        var P = gi(bi([].concat(o, f.options.modifiers)));
        return f.orderedModifiers = P.filter(function(v) {
          return v.enabled;
        }), C(), y.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!x) {
          var S = f.elements, _ = S.reference, P = S.popper;
          if (xt(_, P)) {
            f.rects = {
              reference: hi(_, Se(P), f.options.strategy === "fixed"),
              popper: Qe(P)
            }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(B) {
              return f.modifiersData[B.name] = Object.assign({}, B.data);
            });
            for (var v = 0; v < f.orderedModifiers.length; v++) {
              if (f.reset === !0) {
                f.reset = !1, v = -1;
                continue;
              }
              var k = f.orderedModifiers[v], O = k.fn, A = k.options, T = A === void 0 ? {} : A, E = k.name;
              typeof O == "function" && (f = O({
                state: f,
                options: T,
                name: E,
                instance: y
              }) || f);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: _i(function() {
        return new Promise(function(b) {
          y.forceUpdate(), b(f);
        });
      }),
      destroy: function() {
        g(), x = !0;
      }
    };
    if (!xt(s, r))
      return y;
    y.setOptions(p).then(function(b) {
      !x && p.onFirstUpdate && p.onFirstUpdate(b);
    });
    function C() {
      f.orderedModifiers.forEach(function(b) {
        var S = b.name, _ = b.options, P = _ === void 0 ? {} : _, v = b.effect;
        if (typeof v == "function") {
          var k = v({
            state: f,
            name: S,
            instance: y,
            options: P
          }), O = function() {
          };
          m.push(k || O);
        }
      });
    }
    function g() {
      m.forEach(function(b) {
        return b();
      }), m = [];
    }
    return y;
  };
}
var wi = [Ya, ci, Fa, Aa, ri, ni, fi, qa, ai], ki = /* @__PURE__ */ xi({
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
    const o = e, a = n, i = z("bottom"), c = z(null), s = N(
      () => o.validation ? o.validation(c.value) : !0
    ), r = N(() => !s.value && o.requiredField && o.error ? "is-invalid" : ""), p = () => Array.isArray(c.value) ? o.data.filter((g) => !c.value.some((b) => b.id === g.id)) : o.data, f = () => c.value ? o.data.filter((g) => g.id !== c.value.id) : o.data, m = N(() => o.multiple ? p() : f()), x = (g) => o.selectable ? o.selectable(g) : (b) => b.includes(b);
    de(
      () => o.selected,
      (g) => {
        g && (c.value = g);
      },
      { immediate: !0 }
    ), de(c, () => {
      a("emitValue", s.value ? c.value : null);
    }), Ne(() => {
      o.submitted && y();
    });
    const y = () => {
      c.value = o.multiple ? [] : null;
    }, C = (g, b, { width: S }) => {
      g.style.width = S;
      const _ = ki(b.$refs.toggle, g, {
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
            fn({ state: P }) {
              b.$el.classList.toggle(
                "drop-up",
                P.placement === "top"
              );
            }
          }
        ]
      });
      return () => _.destroy();
    };
    return t({ clean: y }), (g, b) => {
      const S = U("v-select");
      return l(), Y(S, {
        "calculate-position": C,
        options: m.value,
        modelValue: c.value,
        "onUpdate:modelValue": b[0] || (b[0] = (_) => c.value = _),
        label: e.labelCustom,
        multiple: e.multiple,
        placeholder: e.placeHolder,
        class: j(["eit-select-component", r.value]),
        clearable: e.clearable,
        disabled: o.isDisabled,
        selectable: x
      }, {
        "no-options": Fe(() => [
          R(" No hay más resultados. ")
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
    const o = e, a = n, i = z(null), c = z(""), s = N(() => o.validation && o.validation(c.value)), r = N(() => !s.value && o.requiredField && o.error ? "is-invalid" : ""), p = () => {
      c.value = "";
    };
    return de(
      () => o.input,
      (f) => {
        f && (c.value = f);
      }
    ), de(c, () => {
      i.value.style.height = "50px", i.value.style.height = `${i.value.scrollHeight}px`, a("emitValue", s.value ? c.value : "");
    }), Ne(() => {
      o.submitted && p();
    }), t({ clean: p }), (f, m) => Ue((l(), d("textarea", {
      ref_key: "textarea",
      ref: i,
      "onUpdate:modelValue": m[0] || (m[0] = (x) => c.value = x),
      maxlength: e.maxLength,
      autocomplete: "off",
      class: j(["form-control eit-textarea eit-textarea-resize", r.value]),
      placeholder: e.placeHolder
    }, null, 10, Ci)), [
      [
        kt,
        c.value,
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
    return (n, o) => (l(), d("div", Pi, [
      u("img", {
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
  DialogComponent: Do,
  HighlightComponent: Co,
  InputComponent: ya,
  LoadingComponent: Tt,
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
function Di(e, t) {
  const n = $t(), o = N(() => n.meta.requiresAuth ? e.config.darkTheme ? t.logotipo.logo_dark : t.logotipo.logo_light : t.platformDarkTheme ? t.logotipo.logo_dark : t.logotipo.logo_light), a = N(() => e.config.darkTheme ? t.logotipo.isotipo_dark : t.logotipo.isotipo_light);
  return { logotipo: o, isotipo: a };
}
const zi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
    const c = i.length >= 8, s = /[A-Z]/.test(i), r = /[a-z]/.test(i), p = /[0-9]/.test(i), f = /[!@#$%^&*(),.?":{}|<>]/.test(i);
    return c && s && r && p && f;
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
function Ri() {
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
function Ai() {
  function e(t) {
    let n = String.fromCharCode(t.keyCode);
    if (/^[0-9Kk.-]/.test(n)) return !0;
    t.preventDefault();
  }
  return { keyPressRut: e };
}
function Bi() {
  function e(t) {
    const { sort: n, data: o } = t, { keys: a, index: i, asc: c } = n, s = a[i];
    return o.sort((r, p) => {
      let f = r[s], m = p[s];
      return typeof f == "object" && f !== null && (f = f.name, m = m.name), f === m ? 0 : (f > m ? 1 : -1) * (c ? 1 : -1);
    }), o;
  }
  return { sortTable: e };
}
xe.extend(Kt);
xe.locale("es");
function Ei() {
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
    let r = s.replace(/[^0-9kK]/g, ""), p = r.slice(0, -1).replace(/\B(?=(\d{3})+(?!\d))/g, "."), f = r.slice(-1).toUpperCase();
    return `${p}-${f}`;
  }
  function a(s) {
    return s === null ? "" : s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  }
  function i(s) {
    return new Intl.NumberFormat("es-CL").format(s);
  }
  function c(s) {
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
    formatCurrencyToBack: c
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
const Fi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useFormat: Ei,
  useInputMask: Ri,
  useKeypress: Ai,
  useTable: Bi,
  useTooltip: Ti,
  useValidator: ji
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
