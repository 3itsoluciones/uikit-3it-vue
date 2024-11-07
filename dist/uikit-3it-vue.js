import { computed as N, resolveComponent as X, openBlock as l, createElementBlock as u, normalizeClass as q, Fragment as C, createTextVNode as j, toDisplayString as P, createCommentVNode as v, createBlock as Y, createElementVNode as d, createVNode as k, withCtx as We, renderList as J, renderSlot as I, mergeProps as zt, createStaticVNode as Ft, resolveDirective as Wt, withDirectives as $e, ref as F, watch as de, watchEffect as Ne, withKeys as Ke, vModelText as kt, onMounted as Yt, unref as Fe, normalizeStyle as Ye, vModelDynamic as It } from "vue";
import { useRoute as $t } from "vue-router";
import { codeToHtml as Ut } from "shiki";
import xe from "dayjs";
import Xt from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";
const Kt = ["disabled"], Gt = /* @__PURE__ */ d("div", { class: "spinner-border spinner-border-sm me-1" }, null, -1), Ie = {
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
    const o = e, n = t, a = N(() => ["eit-btn", `${o.className}`]), i = (c) => {
      n("emitEvent", c);
    };
    return (c, s) => {
      const r = X("font-awesome-icon");
      return l(), u("button", {
        onClick: s[0] || (s[0] = (p) => i(p)),
        class: q([a.value, "d-flex align-items-center justify-content-center gap-1"]),
        disabled: o.isDisabled
      }, [
        o.loading ? (l(), u(C, { key: 0 }, [
          Gt,
          j(" " + P(o.loadingText), 1)
        ], 64)) : v("", !0),
        o.loading ? v("", !0) : (l(), u(C, { key: 1 }, [
          o.icon ? (l(), Y(r, {
            key: 0,
            icon: o.icon,
            class: q(e.iconClass)
          }, null, 8, ["icon", "class"])) : v("", !0),
          j(" " + P(e.text), 1)
        ], 64))
      ], 10, Kt);
    };
  }
}, Zt = { "aria-label": "breadcrumb" }, Jt = { class: "eit-breadcrumb" }, Qt = /* @__PURE__ */ d("span", { class: "px-2 eit-color--text-soft" }, "/", -1), eo = {
  key: 1,
  class: "eit-color--text-soft"
}, to = {
  __name: "BreadcrumbComponent",
  setup(e) {
    const t = $t(), o = N(() => {
      let n = [], a = "";
      return t.matched.forEach((i, c) => {
        i.redirect ? a = "/" + i.path.split("/")[c + 1] + i.redirect : a += "/" + i.path.split("/")[c + 1], n.push({
          name: i.name,
          title: i.meta.title || "Sin título",
          path: a,
          last: c === t.matched.length - 1
        });
      }), n;
    });
    return (n, a) => {
      const i = X("font-awesome-icon"), c = X("router-link");
      return l(), u("nav", Zt, [
        d("ul", Jt, [
          d("li", null, [
            k(c, {
              to: "/",
              class: "eit-color--text-soft eit-color--text-soft--link"
            }, {
              default: We(() => [
                k(i, { icon: "fa-solid fa-house" })
              ]),
              _: 1
            }),
            Qt
          ]),
          (l(!0), u(C, null, J(o.value, (s, r) => (l(), u("li", {
            key: r,
            class: "eit-breadcrumb__item"
          }, [
            I(n.$slots, s.name, zt({ ref_for: !0 }, s), () => [
              s.last ? (l(), u("span", eo, P(s.name), 1)) : (l(), Y(c, {
                key: 0,
                to: s.path,
                class: "eit-color--text eit-color--text--link eit-color--underline"
              }, {
                default: We(() => [
                  j(P(s.name), 1)
                ]),
                _: 2
              }, 1032, ["to"]))
            ])
          ]))), 128))
        ])
      ]);
    };
  }
}, oo = ["innerHTML"], pe = {
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
    return (o, n) => {
      const a = X("font-awesome-icon");
      return l(), u("span", {
        key: `badge-${t.text}`,
        class: q(`eit-badge ${t.className}`)
      }, [
        t.icon ? (l(), Y(a, {
          key: 0,
          icon: t.icon,
          class: "me-1"
        }, null, 8, ["icon"])) : v("", !0),
        d("span", {
          innerHTML: t.text
        }, null, 8, oo)
      ], 2);
    };
  }
}, no = {
  key: 0,
  class: "table eit-table eit-table-responsive"
}, ao = {
  key: 0,
  class: "eit-skeleton__table-first-td"
}, io = /* @__PURE__ */ d("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "80%" }
}, null, -1), so = [
  io
], ro = { key: 1 }, lo = /* @__PURE__ */ d("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "60%" }
}, null, -1), co = [
  lo
], uo = {
  key: 0,
  class: "eit-skeleton__table-first-td"
}, fo = /* @__PURE__ */ d("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), po = [
  fo
], vo = { key: 1 }, mo = /* @__PURE__ */ d("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), ho = [
  mo
], yo = /* @__PURE__ */ Ft('<div class="row"><div class="col-12"><div class="d-flex"><div class="flex-shrink-0"><div class="eit-skeleton eit-skeleton__btn-square"></div></div><div class="flex-grow-1 ms-3"><div class="d-flex"><div class="flex-grow-1 ms-3"><div class="eit-skeleton eit-skeleton__title my-2" style="width:40%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div></div><div class="flex-shrink-0"><div class="eit-skeleton eit-skeleton__text my-2" style="width:30px;"></div></div></div></div></div></div></div><div class="row flex-grow-1"><div class="col-12 d-flex flex-column flex-grow-1"><div class="eit-slide__content flex-grow-1"><div class="mt-5"><div class="col-12"><h5 class="mb-3"><div class="eit-skeleton eit-skeleton__title my-2" style="width:20%;"></div></h5><ul class="list-unstyled"><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:40%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:20%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:20%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li></ul></div></div></div></div></div>', 2), Ge = {
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
    return (o, n) => (l(), u(C, null, [
      t.type === "table" ? (l(), u("table", no, [
        d("thead", null, [
          d("tr", null, [
            (l(!0), u(C, null, J(t.table.column, (a) => (l(), u(C, { key: a }, [
              a === 1 ? (l(), u("th", ao, so)) : v("", !0),
              a > 1 ? (l(), u("th", ro, co)) : v("", !0)
            ], 64))), 128))
          ])
        ]),
        d("tbody", null, [
          (l(!0), u(C, null, J(t.table.row, (a) => (l(), u("tr", { key: a }, [
            (l(!0), u(C, null, J(t.table.column, (i) => (l(), u(C, { key: i }, [
              i === 1 ? (l(), u("td", uo, po)) : v("", !0),
              i > 1 ? (l(), u("td", vo, ho)) : v("", !0)
            ], 64))), 128))
          ]))), 128))
        ])
      ])) : v("", !0),
      t.type === "detail" ? (l(), u(C, { key: 1 }, [
        yo
      ], 64)) : v("", !0)
    ], 64));
  }
}, go = { class: "d-flex align-items-center" }, _o = { class: "flex-shrink-0 d-flex align-items-center eit-alert__icon me-2" }, bo = ["innerHTML"], Ct = {
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
    return (o, n) => {
      const a = X("font-awesome-icon");
      return l(), u("div", {
        class: q(`eit-alert eit-alert--${t.type} ${t.animation.active ? "eit-alert--animation" : "eit-alert--default"} ${t.animation.show ? "eit-alert--animation--show" : ""}`)
      }, [
        d("div", go, [
          d("div", _o, [
            k(a, {
              icon: t.icon,
              class: q(e.iconClass)
            }, null, 8, ["icon", "class"])
          ]),
          d("div", {
            class: "flex-grow-1 eit-alert__text",
            innerHTML: t.message
          }, null, 8, bo)
        ])
      ], 2);
    };
  }
}, xo = { class: "row" }, wo = { class: "col-12" }, ko = { class: "table eit-table eit-table-responsive" }, $o = ["onClick"], Co = {
  key: 0,
  scope: "col",
  class: "text-center"
}, Oo = { class: "pe-3 d-lg-none" }, So = ["onClick"], Ro = {
  key: 0,
  class: "d-flex flex-wrap gap-1"
}, Po = {
  key: 3,
  class: "eit-table__string"
}, Do = {
  key: 4,
  class: "eit-table__string"
}, jo = {
  key: 0,
  class: "text-center"
}, Ao = { class: "dropdown eit-dropdown d-none d-lg-block" }, Bo = {
  href: "javascript:",
  class: "eit-btn-action",
  "data-bs-toggle": "dropdown"
}, To = { class: "dropdown-menu dropdown-custom-menu" }, Eo = {
  key: 0,
  class: "mx-2"
}, qo = ["onClick"], No = {
  key: 1,
  class: "mx-2"
}, Mo = ["onClick"], Lo = {
  key: 2,
  class: "mx-2"
}, Ho = ["onClick"], Vo = {
  key: 3,
  class: "m-2"
}, zo = /* @__PURE__ */ d("div", { class: "eit-border--bottom eit-border--color" }, null, -1), Fo = [
  zo
], Wo = {
  key: 4,
  class: "mx-2"
}, Yo = ["onClick"], Io = {
  key: 5,
  class: "mx-2"
}, Uo = ["onClick"], Xo = { class: "d-flex w-100 justify-content-between align-items-center d-lg-none text-end" }, Ko = /* @__PURE__ */ d("strong", null, "Acciones:", -1), Go = { class: "d-flex flex-wrap gap-2 ms-3" }, Zo = ["onClick"], Jo = ["onClick"], Qo = ["onClick"], en = ["onClick"], tn = ["onClick"], on = ["onClick"], nn = {
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
    viewRecord: {
      type: String,
      required: !1,
      default: null
    },
    editRecord: {
      type: String,
      required: !1,
      default: null
    },
    deleteRecord: {
      type: String,
      required: !1,
      default: null
    },
    downloadRecord: {
      type: String,
      required: !1,
      default: null
    },
    enabledDisabledRecord: {
      type: Boolean,
      required: !1,
      default: !1
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
    const o = e, n = t, a = (m) => {
      n("viewRecord", m);
    }, i = (m) => {
      n("editRecord", m);
    }, c = (m) => {
      n("deleteRecord", m);
    }, s = (m) => {
      n("downloadRecord", m);
    }, r = (m) => {
      n("updateSort", { index: m, asc: !o.sort.asc });
    }, p = (m) => {
      n("enabledDisabledRecord", m);
    }, f = (m) => typeof m == "string", h = (m) => typeof m == "object" && m !== null && !Array.isArray(m), w = (m) => Array.isArray(m), y = (m) => {
      if (m == null) return !0;
    }, O = (m) => Object.keys(m).includes("status") ? !m.status && "disabled" : "";
    return (m, x) => {
      var A, $, S, R;
      const b = X("font-awesome-icon"), D = Wt("tippy");
      return l(), u("div", xo, [
        d("div", wo, [
          e.loading ? (l(), Y(Ge, {
            key: 0,
            type: "table",
            table: { row: (A = e.skeleton) == null ? void 0 : A.row, column: ($ = e.skeleton) == null ? void 0 : $.column }
          }, null, 8, ["table"])) : v("", !0),
          !e.loading && !((S = e.data) != null && S.length) ? (l(), Y(Ct, {
            key: 1,
            ref: "alert",
            class: "mb-3",
            type: "info",
            icon: "fa-solid fa-info",
            message: "<strong>No hay resultados</strong> para tu búsqueda."
          }, null, 512)) : v("", !0),
          !e.loading && ((R = e.data) != null && R.length) ? (l(), u(C, { key: 2 }, [
            d("table", ko, [
              d("thead", null, [
                d("tr", null, [
                  (l(!0), u(C, null, J(e.columns, (g, B) => (l(), u("th", {
                    key: `column-${B}`,
                    scope: "col"
                  }, [
                    d("a", {
                      onClick: (_) => r(B),
                      href: "javascript:",
                      class: "d-flex justify-content-between"
                    }, [
                      j(P(g) + " ", 1),
                      e.sort.index === B ? (l(), u("span", {
                        key: `icono-${g}`,
                        class: "d-flex ms-2 eit-color--text"
                      }, [
                        e.sort.asc ? v("", !0) : (l(), u("span", {
                          key: `down-${g}`
                        }, [
                          k(b, { icon: "fa-solid fa-sort-down align-baseline" })
                        ])),
                        e.sort.asc ? (l(), u("span", {
                          key: `up-${g}`
                        }, [
                          k(b, { icon: "fa-solid fa-sort-up align-baseline" })
                        ])) : v("", !0)
                      ])) : (l(), u("span", {
                        key: `key-${g}`
                      }, [
                        k(b, { icon: "fa-solid fa-sort" })
                      ]))
                    ], 8, $o)
                  ]))), 128)),
                  e.enabledActions ? (l(), u("th", Co, " Acciones ")) : v("", !0)
                ])
              ]),
              d("tbody", null, [
                (l(!0), u(C, null, J(e.data, (g, B) => (l(), u("tr", {
                  key: `row-${B}`,
                  class: q(O(g))
                }, [
                  (l(!0), u(C, null, J(g, (_, T) => (l(), u("td", {
                    key: `value-${T}`
                  }, [
                    d("strong", Oo, P(e.columns[Object.keys(g).indexOf(T)]) + ":", 1),
                    Object.keys(g)[e.columnLink] === T ? (l(), u(C, { key: 0 }, [
                      e.viewRecord ? (l(), u("a", {
                        key: 0,
                        onClick: (E) => a(g),
                        href: "javascript:",
                        class: "eit-table__link"
                      }, P(_ || "Sin datos"), 9, So)) : v("", !0),
                      e.viewRecord ? v("", !0) : (l(), u(C, { key: 1 }, [
                        j(P(_ || "Sin datos"), 1)
                      ], 64))
                    ], 64)) : v("", !0),
                    Object.keys(g)[e.columnLink] !== T ? (l(), u(C, { key: 1 }, [
                      w(_) ? (l(), u("div", Ro, [
                        (l(!0), u(C, null, J(_, (E, V) => (l(), u("span", {
                          key: `value-array-${V}`,
                          class: "d-flex flex-wrap gap-1"
                        }, [
                          k(pe, {
                            text: E.name ? E.name : "Sin datos",
                            className: E.className
                          }, null, 8, ["text", "className"])
                        ]))), 128))
                      ])) : v("", !0),
                      T === "status" ? (l(), u(C, { key: 1 }, [
                        _ ? (l(), Y(pe, {
                          key: 0,
                          text: "Activo",
                          className: "eit-badge__outline--secondary"
                        })) : v("", !0),
                        _ ? v("", !0) : (l(), Y(pe, {
                          key: 1,
                          text: "Inactivo",
                          className: "eit-badge__outline--gray"
                        }))
                      ], 64)) : v("", !0),
                      h(_) ? (l(), Y(pe, {
                        key: 2,
                        text: _.name ? _.name : "Sin datos",
                        className: _.className
                      }, null, 8, ["text", "className"])) : v("", !0),
                      f(_) ? (l(), u("span", Po, P(_ || "Sin datos"), 1)) : v("", !0),
                      y(_) ? (l(), u("span", Do, " Sin datos ")) : v("", !0)
                    ], 64)) : v("", !0)
                  ]))), 128)),
                  e.enabledActions ? (l(), u("td", jo, [
                    d("div", Ao, [
                      d("a", Bo, [
                        k(b, { icon: "fa-solid fa-ellipsis" })
                      ]),
                      d("ul", To, [
                        e.viewRecord ? (l(), u("li", Eo, [
                          d("a", {
                            onClick: (_) => a(g),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            k(b, {
                              icon: "fa-regular fa-eye",
                              class: "eit-color--blue"
                            }),
                            j(" " + P(e.viewRecord), 1)
                          ], 8, qo)
                        ])) : v("", !0),
                        e.editRecord ? (l(), u("li", No, [
                          d("a", {
                            onClick: (_) => i(g),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            k(b, {
                              icon: "fa-solid fa-square-pen",
                              class: "eit-color--yellow"
                            }),
                            j(" " + P(e.editRecord), 1)
                          ], 8, Mo)
                        ])) : v("", !0),
                        e.downloadRecord ? (l(), u("li", Lo, [
                          d("a", {
                            onClick: (_) => s(g),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            k(b, {
                              icon: "fa-solid fa-download",
                              class: "eit-color--blue"
                            }),
                            j(" " + P(e.downloadRecord), 1)
                          ], 8, Ho)
                        ])) : v("", !0),
                        e.deleteRecord || e.enabledDisabledRecord ? (l(), u("li", Vo, Fo)) : v("", !0),
                        e.enabledDisabledRecord ? (l(), u("li", Wo, [
                          d("a", {
                            onClick: (_) => p(g),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            g.status ? v("", !0) : (l(), u(C, { key: 0 }, [
                              k(b, {
                                icon: "fa-regular fa-circle-check",
                                class: "eit-color--green"
                              }),
                              j(" Habilitar ")
                            ], 64)),
                            g.status ? (l(), u(C, { key: 1 }, [
                              k(b, {
                                icon: "fa-solid fa-ban",
                                class: "eit-color--red"
                              }),
                              j(" Deshabilitar ")
                            ], 64)) : v("", !0)
                          ], 8, Yo)
                        ])) : v("", !0),
                        e.deleteRecord ? (l(), u("li", Io, [
                          d("a", {
                            onClick: (_) => c(B),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            k(b, {
                              icon: "fa-solid fa-trash",
                              class: "eit-color--red"
                            }),
                            j(" " + P(e.deleteRecord), 1)
                          ], 8, Uo)
                        ])) : v("", !0)
                      ])
                    ]),
                    d("div", Xo, [
                      Ko,
                      d("div", Go, [
                        e.viewRecord ? (l(), u("a", {
                          key: 0,
                          onClick: (_) => a(g),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          k(b, {
                            icon: "fa-regular fa-eye",
                            class: "eit-color--blue"
                          })
                        ], 8, Zo)) : v("", !0),
                        e.editRecord ? (l(), u("a", {
                          key: 1,
                          onClick: (_) => i(g),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          k(b, {
                            icon: "fa-solid fa-square-pen",
                            class: "eit-color--yellow"
                          })
                        ], 8, Jo)) : v("", !0),
                        e.downloadRecord ? (l(), u("a", {
                          key: 2,
                          onClick: (_) => s(g),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          k(b, {
                            icon: "fa-solid fa-download",
                            class: "eit-color--blue"
                          })
                        ], 8, Qo)) : v("", !0),
                        e.enabledDisabledRecord ? (l(), u(C, { key: 3 }, [
                          g.status ? v("", !0) : $e((l(), u("a", {
                            key: 0,
                            onClick: (_) => p(g),
                            href: "javascript:",
                            class: "eit-btn eit-btn-outline--gray eit-btn--square"
                          }, [
                            k(b, {
                              icon: "fa-regular fa-circle-check",
                              class: "eit-color--green"
                            })
                          ], 8, en)), [
                            [D, { content: "Habilitar", theme: "main" }]
                          ]),
                          g.status ? $e((l(), u("a", {
                            key: 1,
                            onClick: (_) => p(g),
                            href: "javascript:",
                            class: "eit-btn eit-btn-outline--gray eit-btn--square"
                          }, [
                            k(b, {
                              icon: "fa-solid fa-ban",
                              class: "eit-color--red"
                            })
                          ], 8, tn)), [
                            [D, { content: "Deshabilitar", theme: "main" }]
                          ]) : v("", !0)
                        ], 64)) : v("", !0),
                        e.deleteRecord ? (l(), u("a", {
                          key: 4,
                          onClick: (_) => c(B),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          k(b, {
                            icon: "fa-solid fa-trash",
                            class: "eit-color--red"
                          })
                        ], 8, on)) : v("", !0)
                      ])
                    ])
                  ])) : v("", !0)
                ], 2))), 128))
              ])
            ]),
            I(m.$slots, "paginator")
          ], 64)) : v("", !0)
        ])
      ]);
    };
  }
}, an = { class: "eit-paginator gap-2" }, sn = ["disabled"], rn = { class: "eit-color--text eit-font__size--x1" }, ln = ["disabled"], cn = {
  __name: "PaginationComponent",
  props: {
    data: {
      type: Object,
      required: !0
    }
  },
  emits: ["updatePaginator"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = F(o.data.currentPage), i = () => a.value++, c = () => a.value--, s = () => {
      a.value <= 0 && (a.value = 1), a.value > o.data.finalPage && (a.value = o.data.finalPage);
    }, r = (p) => {
      p.target.select();
    };
    return de(a, () => {
      a.value > 0 && a.value <= o.data.finalPage && n("updatePaginator", a.value);
    }), Ne(() => {
      o.data && (a.value = o.data.currentPage);
    }), (p, f) => {
      const h = X("font-awesome-icon");
      return l(), u("div", an, [
        d("button", {
          onClick: c,
          disabled: e.data.currentPage === 1,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          k(h, { icon: "fa-solid fa-chevron-left" })
        ], 8, sn),
        $e(d("input", {
          type: "number",
          "onUpdate:modelValue": f[0] || (f[0] = (w) => a.value = w),
          onInput: s,
          onKeyup: Ke(s, ["enter"]),
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
        d("span", rn, [
          j(" de " + P(e.data.finalPage) + " ", 1),
          e.data.finalPage === 1 ? (l(), u(C, { key: 0 }, [
            j(" página ")
          ], 64)) : v("", !0),
          e.data.finalPage > 1 ? (l(), u(C, { key: 1 }, [
            j(" páginas ")
          ], 64)) : v("", !0)
        ]),
        d("button", {
          onClick: i,
          disabled: e.data.currentPage === e.data.finalPage,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          k(h, { icon: "fa-solid fa-chevron-right" })
        ], 8, ln)
      ]);
    };
  }
}, dn = { class: "row" }, un = { class: "col-12" }, fn = { class: "d-flex" }, pn = { class: "flex-shrink-0" }, vn = { class: "flex-grow-1" }, mn = { class: "d-flex" }, hn = { class: "flex-grow-1 d-flex flex-column ms-3" }, yn = { class: "eit-font--primary mb-0" }, gn = { class: "eit-color--text mb-0" }, _n = { class: "flex-shrink-0" }, bn = {
  key: 0,
  class: "dropdown eit-dropdown d-none d-lg-block"
}, xn = {
  href: "javascript:",
  class: "eit-btn-action",
  "data-bs-toggle": "dropdown"
}, wn = { class: "dropdown-menu dropdown-custom-menu" }, kn = {
  key: 0,
  class: "mx-2"
}, $n = {
  key: 1,
  class: "mx-2"
}, Cn = {
  key: 2,
  class: "m-2"
}, On = /* @__PURE__ */ d("div", { class: "eit-border--bottom eit-border--color" }, null, -1), Sn = [
  On
], Rn = {
  key: 3,
  class: "mx-2"
}, Pn = {
  key: 4,
  class: "mx-2"
}, Dn = { class: "row flex-grow-1" }, jn = { class: "col-12 d-flex flex-column flex-grow-1" }, An = { class: "eit-slide__content flex-grow-1" }, Bn = {
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
    const o = e, n = t, a = () => {
      n("emitslide");
    }, i = () => {
      n("enabledDisabledRecord", o.record);
    }, c = () => {
      n("editRecord", o.record);
    }, s = () => {
      n("deleteRecord", o.record);
    }, r = () => {
      n("downloadRecord", o.record);
    };
    return (p, f) => {
      const h = X("font-awesome-icon");
      return l(), u("section", {
        class: q(["eit-slide d-flex flex-column", [e.slide && "eit-slide--right", e.slideSmall && "eit-slide--small"]])
      }, [
        o.loading ? (l(), Y(Ge, {
          key: 0,
          type: "detail"
        })) : v("", !0),
        o.loading ? v("", !0) : (l(), u(C, { key: 1 }, [
          d("div", dn, [
            d("div", un, [
              d("div", fn, [
                d("div", pn, [
                  d("button", {
                    class: "eit-btn eit-btn--gray eit-btn--square",
                    onClick: a
                  }, [
                    k(h, {
                      icon: "fa-solid fa-angle-right",
                      class: "eit-font__size--x5 d-none d-lg-block"
                    }),
                    k(h, {
                      icon: "fa-solid fa-angle-down",
                      class: "eit-font__size--x5 d-lg-none"
                    })
                  ])
                ]),
                d("div", vn, [
                  d("div", mn, [
                    d("div", hn, [
                      d("h4", yn, [
                        d("strong", null, [
                          I(p.$slots, "title")
                        ])
                      ]),
                      d("p", gn, [
                        I(p.$slots, "subtitle")
                      ])
                    ]),
                    d("div", _n, [
                      o.dropdown ? (l(), u("div", bn, [
                        d("a", xn, [
                          k(h, { icon: "fa-solid fa-ellipsis" })
                        ]),
                        d("ul", wn, [
                          o.editRecord ? (l(), u("li", kn, [
                            d("a", {
                              onClick: c,
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              k(h, {
                                icon: "fa-solid fa-square-pen",
                                class: "eit-color--yellow"
                              }),
                              j(" " + P(e.editRecord), 1)
                            ])
                          ])) : v("", !0),
                          o.downloadRecord ? (l(), u("li", $n, [
                            d("a", {
                              onClick: r,
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              k(h, {
                                icon: "fa-solid fa-download",
                                class: "eit-color--blue"
                              }),
                              j(" " + P(o.downloadRecord), 1)
                            ])
                          ])) : v("", !0),
                          e.deleteRecord || e.enabledDisabledRecord ? (l(), u("li", Cn, Sn)) : v("", !0),
                          o.enabledDisabledRecord ? (l(), u("li", Rn, [
                            d("a", {
                              onClick: i,
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              o.record.status ? v("", !0) : (l(), u(C, { key: 0 }, [
                                k(h, {
                                  icon: "fa-regular fa-circle-check",
                                  class: "eit-color--green"
                                }),
                                j(" Habilitar ")
                              ], 64)),
                              o.record.status ? (l(), u(C, { key: 1 }, [
                                k(h, {
                                  icon: "fa-solid fa-ban",
                                  class: "eit-color--red"
                                }),
                                j(" Deshabilitar ")
                              ], 64)) : v("", !0)
                            ])
                          ])) : v("", !0),
                          o.deleteRecord ? (l(), u("li", Pn, [
                            d("a", {
                              onClick: s,
                              class: "dropdown-item dropdown-custom-menu-item eit-color--red",
                              href: "javascript:"
                            }, [
                              k(h, {
                                icon: "fa-solid fa-trash",
                                class: "eit-color--red"
                              }),
                              j(" " + P(o.deleteRecord), 1)
                            ])
                          ])) : v("", !0)
                        ])
                      ])) : v("", !0)
                    ])
                  ])
                ])
              ])
            ])
          ]),
          d("div", Dn, [
            d("div", jn, [
              d("div", An, [
                I(p.$slots, "component")
              ])
            ])
          ]),
          I(p.$slots, "footer")
        ], 64))
      ], 2);
    };
  }
}, Tn = { class: "d-flex justify-content-between align-items-center" }, En = ["onClick"], qn = {
  key: 0,
  class: "eit-tabs__badge"
}, Nn = { class: "d-flex flex-column" }, Mn = {
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
    const t = e, o = (i) => i < 99 ? i : "+99", n = F(0), a = (i) => {
      n.value = i;
    };
    return (i, c) => (l(), u(C, null, [
      d("div", Tn, [
        d("ul", {
          class: q(`eit-tabs ${t.className}`)
        }, [
          (l(!0), u(C, null, J(e.data, (s, r) => (l(), u("li", {
            key: r,
            class: "eit-tabs__item"
          }, [
            d("a", {
              href: "javascript:",
              onClick: (p) => a(r),
              class: q(["eit-tabs__item__link", n.value === r ? "active" : ""])
            }, [
              j(P(s.name) + " ", 1),
              s.number ? (l(), u("span", qn, P(o(s.number)), 1)) : v("", !0)
            ], 10, En)
          ]))), 128))
        ], 2),
        I(i.$slots, "dropdown")
      ]),
      d("div", Nn, [
        I(i.$slots, `tab-${n.value}`)
      ])
    ], 64));
  }
}, Ln = ["innerHTML"], Hn = {
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
    const t = e, o = F("");
    return (async () => {
      const a = `${t.code}`;
      o.value = await Ut(a, {
        lang: t.lang,
        theme: t.theme
      });
    })(), (a, i) => (l(), u("div", { innerHTML: o.value }, null, 8, Ln));
  }
}, Vn = { class: "eit-dialog__content" }, zn = { class: "d-flex justify-content-between align-items-center" }, Fn = { class: "d-flex gap-2 justify-content-end mt-3" }, Wn = {
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
  setup(e, { expose: t, emit: o }) {
    const n = e, a = o, i = F(null), c = () => {
      i.value.showModal(), i.value.classList.add("show");
    }, s = () => {
      i.value.close(), i.value.classList.remove("show"), a("emitCloseDialog");
    }, r = (f) => {
      f.key === "Escape" && s();
    }, p = () => {
      a("emitSubmit");
    };
    return Yt(() => {
      document.addEventListener("keyup", r);
    }), t({ showDialog: c, closeDialog: s }), (f, h) => {
      const w = X("font-awesome-icon");
      return l(), u("dialog", {
        ref_key: "dialog",
        ref: i,
        class: q(["eit-dialog", n.className]),
        onKeyup: Ke(s, ["esc"])
      }, [
        d("div", Vn, [
          e.loading ? (l(), Y(Fe(Et), {
            key: 0,
            size: "70"
          })) : v("", !0),
          e.loading ? v("", !0) : (l(), u(C, { key: 1 }, [
            d("div", zn, [
              I(f.$slots, "head"),
              d("button", {
                onClick: s,
                class: "eit-dialog__close"
              }, [
                k(w, { icon: ["fas", "xmark"] })
              ])
            ]),
            d("div", {
              class: q(`eit-dialog__body ${e.scrollable ? "eit-dialog__body--scroll" : ""}`)
            }, [
              I(f.$slots, "content")
            ], 2),
            d("div", Fn, [
              k(Fe(Ie), {
                onClick: s,
                className: "eit-btn-outline--gray",
                text: "Volver"
              }),
              n.btnSubmit ? (l(), Y(Fe(Ie), {
                key: 0,
                className: n.btnSubmitConfig.className,
                text: n.btnSubmitConfig.text,
                loadingText: n.btnSubmitConfig.loadingText,
                loading: e.loadingSubmit,
                onEmitEvent: p,
                isDisabled: e.disabledSubmit
              }, null, 8, ["className", "text", "loadingText", "loading", "isDisabled"])) : v("", !0)
            ])
          ], 64))
        ])
      ], 34);
    };
  }
}, Yn = { class: "row" }, In = { class: "col" }, Un = /* @__PURE__ */ d("h2", { class: "eit-font__size--x4 eit-color--text eit-font__weight--300 eit-border--bottom eit-border--color mb-3" }, [
  /* @__PURE__ */ d("strong", { class: "eit-font__weight--900" }, "Props")
], -1), Xn = { class: "eit-table--overflow" }, Kn = { class: "table eit-table" }, Gn = /* @__PURE__ */ d("thead", null, [
  /* @__PURE__ */ d("tr", null, [
    /* @__PURE__ */ d("th", null, "Name"),
    /* @__PURE__ */ d("th", null, "Type"),
    /* @__PURE__ */ d("th", null, "Default")
  ])
], -1), Zn = {
  __name: "PropsComponent",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const t = e;
    return (o, n) => (l(), u("div", Yn, [
      d("div", In, [
        Un,
        d("div", Xn, [
          d("table", Kn, [
            Gn,
            d("tbody", null, [
              (l(!0), u(C, null, J(t.data, (a) => (l(), u("tr", {
                key: a.name
              }, [
                d("td", null, [
                  k(pe, {
                    text: a.name,
                    className: "eit-badge__outline--gray"
                  }, null, 8, ["text"])
                ]),
                d("td", null, [
                  d("code", null, P(a.type), 1)
                ]),
                d("td", null, [
                  d("code", null, P(a.default), 1)
                ])
              ]))), 128))
            ])
          ])
        ])
      ])
    ]));
  }
}, Jn = { class: "eit-progress eit-progress--30" }, Qn = { key: 1 }, ea = /* @__PURE__ */ d("span", { class: "spinner-border spinner-border-sm" }, null, -1), ta = {
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
    const t = e, o = N(() => parseFloat(t.percentage)), n = N(() => o.value === 0 ? 0 : 100 - o.value);
    return (a, i) => (l(), u("div", Jn, [
      d("div", {
        class: q(["eit-progress__bar", `eit-progress__bar--${t.type}`]),
        style: Ye(`width: ${t.percentage}%`)
      }, [
        o.value !== 0 ? (l(), u(C, { key: 0 }, [
          t.percentage > 5 ? (l(), u(C, { key: 0 }, [
            j(P(t.percentage) + "% ", 1)
          ], 64)) : v("", !0)
        ], 64)) : v("", !0)
      ], 6),
      d("div", {
        class: "eit-progress__bar eit-progress__bar--transparent",
        style: Ye(`width: ${n.value === 0 ? 100 : n.value}%`)
      }, [
        t.loading ? v("", !0) : (l(), u(C, { key: 0 }, [
          n.value === 0 || n.value > 5 ? (l(), u(C, { key: 0 }, [
            j(P(n.value) + "% ", 1)
          ], 64)) : v("", !0)
        ], 64)),
        t.loading ? (l(), u("span", Qn, [
          ea,
          j(" Cargando... ")
        ])) : v("", !0)
      ], 4)
    ]));
  }
}, oa = { class: "d-flex" }, na = { class: "flex-shrink-0 eit-toast__left" }, aa = {
  key: "success",
  class: "eit-toast__icon eit-font__size--x7"
}, ia = {
  key: "error",
  class: "eit-toast__icon eit-font__size--x7"
}, sa = {
  key: "warning",
  class: "eit-toast__icon eit-font__size--x7"
}, ra = {
  key: "info",
  class: "eit-toast__icon eit-font__size--x7"
}, la = { class: "flex-grow-1 ms-3" }, ca = { class: "d-flex" }, da = { class: "flex-grow-1 me-3" }, ua = { class: "eit-toast__title" }, fa = { class: "eit-toast__text" }, pa = { class: "flex-shrink-0" }, va = {
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
    const o = e, n = F(!1), a = F("hidden"), i = F(""), c = N(() => ({
      show: n.value,
      hide: !n.value,
      [o.position]: o.position,
      hidden: a.value
    })), s = () => {
      clearTimeout(i.value), n.value = !0, a.value = "", i.value = setTimeout(() => {
        n.value = !1, setTimeout(() => a.value = "hidden", "300");
      }, o.visible);
    }, r = () => {
      n.value = !1, setTimeout(() => a.value = "hidden", "300"), clearTimeout(i.value);
    };
    return t({ handleShowToast: s, handleCloseToast: r }), (p, f) => {
      const h = X("font-awesome-icon");
      return l(), u("div", {
        class: q(["eit-toast__container", c.value])
      }, [
        d("div", {
          class: q(["eit-toast box-shadow", `eit-toast--${o.data.type}`])
        }, [
          d("div", oa, [
            d("div", na, [
              o.type === "success" ? (l(), u("span", aa, [
                k(h, { icon: "fa-solid fa-circle-check" })
              ])) : v("", !0),
              o.type === "error" ? (l(), u("span", ia, [
                k(h, { icon: "fa-solid fa-circle-xmark" })
              ])) : v("", !0),
              o.type === "warning" ? (l(), u("span", sa, [
                k(h, { icon: "fa-solid fa-triangle-exclamation" })
              ])) : v("", !0),
              o.type === "info" ? (l(), u("span", ra, [
                k(h, { icon: "fa-solid fa-circle-info" })
              ])) : v("", !0)
            ]),
            d("div", la, [
              d("div", ca, [
                d("div", da, [
                  d("p", ua, [
                    o.data.code ? (l(), u(C, { key: 0 }, [
                      j(P(o.data.code), 1)
                    ], 64)) : v("", !0),
                    j(" " + P(o.data.title), 1)
                  ]),
                  d("p", fa, P(o.data.message), 1)
                ]),
                d("div", pa, [
                  d("a", {
                    onClick: f[0] || (f[0] = (w) => r()),
                    href: "javascript:",
                    class: "eit-toast__close"
                  }, [
                    k(h, { icon: "fa-solid fa-xmark" })
                  ])
                ])
              ])
            ])
          ])
        ], 2)
      ], 2);
    };
  }
}, ma = { class: "d-flex" }, ha = { class: "flex-shrink-0 eit-popover__left" }, ya = {
  key: "success",
  class: "eit-popover__icon eit-font__size--x7"
}, ga = {
  key: "error",
  class: "eit-popover__icon eit-font__size--x7"
}, _a = {
  key: "warning",
  class: "eit-popover__icon eit-font__size--x7"
}, ba = {
  key: "info",
  class: "eit-popover__icon eit-font__size--x7"
}, xa = { class: "flex-grow-1 ms-3" }, wa = { class: "d-flex" }, ka = { class: "flex-grow-1 me-3" }, $a = { class: "eit-popover__title" }, Ca = { class: "eit-popover__text" }, Oa = { class: "flex-shrink-0" }, Sa = {
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
    const o = e, n = F(null), a = N(() => ({
      [o.position]: o.position
    })), i = () => {
      n.value.showPopover();
    }, c = () => {
      n.value.hidePopover();
    };
    return t({ handleShowPopover: i, handleClosePopover: c }), (s, r) => {
      const p = X("font-awesome-icon");
      return l(), u("div", {
        ref_key: "popover",
        ref: n,
        class: q(["eit-popover__container", a.value]),
        popover: "manual"
      }, [
        d("div", {
          class: q(["eit-popover box-shadow", `eit-popover--${o.data.type}`])
        }, [
          d("div", ma, [
            d("div", ha, [
              o.type === "success" ? (l(), u("span", ya, [
                k(p, { icon: "fa-solid fa-circle-check" })
              ])) : v("", !0),
              o.type === "error" ? (l(), u("span", ga, [
                k(p, { icon: "fa-solid fa-circle-xmark" })
              ])) : v("", !0),
              o.type === "warning" ? (l(), u("span", _a, [
                k(p, { icon: "fa-solid fa-triangle-exclamation" })
              ])) : v("", !0),
              o.type === "info" ? (l(), u("span", ba, [
                k(p, { icon: "fa-solid fa-circle-info" })
              ])) : v("", !0)
            ]),
            d("div", xa, [
              d("div", wa, [
                d("div", ka, [
                  d("p", $a, [
                    o.data.code ? (l(), u(C, { key: 0 }, [
                      j(P(o.data.code), 1)
                    ], 64)) : v("", !0),
                    j(" " + P(o.data.title), 1)
                  ]),
                  d("p", Ca, P(o.data.message), 1)
                ]),
                d("div", Oa, [
                  d("a", {
                    onClick: r[0] || (r[0] = (f) => c()),
                    href: "javascript:",
                    class: "eit-popover__close"
                  }, [
                    k(p, { icon: "fa-solid fa-xmark" })
                  ])
                ])
              ])
            ])
          ])
        ], 2)
      ], 2);
    };
  }
}, Ra = ["type", "maxlength", "placeholder", "disabled"], Pa = {
  key: 0,
  class: "eit-label-float"
}, Da = {
  key: 1,
  class: "eit-input__display__icon eit-input__display__float-left--icon"
}, ja = {
  key: 2,
  class: "eit-input__display__icon eit-input__display__float-right--icon"
}, Aa = {
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
  setup(e, { expose: t, emit: o }) {
    const n = e, a = o, i = F(""), c = N(
      () => n.validation ? n.validation(i.value) : !0
    ), s = N(() => !c.value && n.requiredField && n.error ? "is-invalid" : ""), r = N(() => n.floatLabel ? "" : n.placeHolder), p = N(() => [
      n.floatLabel || n.floatLeft || n.floatRight ? "eit-input__display" : "",
      n.floatLeft ? "eit-input__display__float-left" : "",
      n.floatRight ? "eit-input__display__float-right" : ""
    ]), f = () => {
      a("emitPressEnter");
    }, h = () => {
      i.value = "";
    };
    return de(() => n.input, (w) => {
      w && (i.value = w);
    }), de(i, () => {
      a("emitValue", c.value ? i.value : "");
    }), Ne(() => {
      n.inputMask && (i.value = n.inputMask(i.value)), n.submitted && h();
    }), t({ clean: h }), (w, y) => (l(), u("div", {
      class: q(p.value)
    }, [
      $e(d("input", {
        autocomplete: "off",
        class: q(["form-control eit-input", s.value]),
        type: n.inputType,
        "onUpdate:modelValue": y[0] || (y[0] = (O) => i.value = O),
        maxlength: n.maxLength,
        onKeypress: y[1] || (y[1] = (O) => n.keyPress && n.keyPress(O)),
        placeholder: r.value,
        onKeyup: Ke(f, ["enter"]),
        disabled: n.isDisabled
      }, null, 42, Ra), [
        [
          It,
          i.value,
          void 0,
          { trim: !0 }
        ]
      ]),
      n.floatLabel ? (l(), u("label", Pa, P(n.floatLabel), 1)) : v("", !0),
      n.floatLeft ? (l(), u("span", Da, [
        I(w.$slots, "float-left")
      ])) : v("", !0),
      n.floatRight ? (l(), u("span", ja, [
        I(w.$slots, "float-right")
      ])) : v("", !0)
    ], 2));
  }
};
var L = "top", K = "bottom", G = "right", H = "left", Ze = "auto", Se = [L, K, G, H], ve = "start", Ce = "end", Ba = "clippingParents", Ot = "viewport", be = "popper", Ta = "reference", pt = /* @__PURE__ */ Se.reduce(function(e, t) {
  return e.concat([t + "-" + ve, t + "-" + Ce]);
}, []), St = /* @__PURE__ */ [].concat(Se, [Ze]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ve, t + "-" + Ce]);
}, []), Ea = "beforeRead", qa = "read", Na = "afterRead", Ma = "beforeMain", La = "main", Ha = "afterMain", Va = "beforeWrite", za = "write", Fa = "afterWrite", Wa = [Ea, qa, Na, Ma, La, Ha, Va, za, Fa];
function ee(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function W(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function ue(e) {
  var t = W(e).Element;
  return e instanceof t || e instanceof Element;
}
function U(e) {
  var t = W(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Je(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = W(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Ya(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(o) {
    var n = t.styles[o] || {}, a = t.attributes[o] || {}, i = t.elements[o];
    !U(i) || !ee(i) || (Object.assign(i.style, n), Object.keys(a).forEach(function(c) {
      var s = a[c];
      s === !1 ? i.removeAttribute(c) : i.setAttribute(c, s === !0 ? "" : s);
    }));
  });
}
function Ia(e) {
  var t = e.state, o = {
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
  return Object.assign(t.elements.popper.style, o.popper), t.styles = o, t.elements.arrow && Object.assign(t.elements.arrow.style, o.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var a = t.elements[n], i = t.attributes[n] || {}, c = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : o[n]), s = c.reduce(function(r, p) {
        return r[p] = "", r;
      }, {});
      !U(a) || !ee(a) || (Object.assign(a.style, s), Object.keys(i).forEach(function(r) {
        a.removeAttribute(r);
      }));
    });
  };
}
const Ua = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ya,
  effect: Ia,
  requires: ["computeStyles"]
};
function Q(e) {
  return e.split("-")[0];
}
var ce = Math.max, qe = Math.min, me = Math.round;
function Ue() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Rt() {
  return !/^((?!chrome|android).)*safari/i.test(Ue());
}
function he(e, t, o) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  var n = e.getBoundingClientRect(), a = 1, i = 1;
  t && U(e) && (a = e.offsetWidth > 0 && me(n.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && me(n.height) / e.offsetHeight || 1);
  var c = ue(e) ? W(e) : window, s = c.visualViewport, r = !Rt() && o, p = (n.left + (r && s ? s.offsetLeft : 0)) / a, f = (n.top + (r && s ? s.offsetTop : 0)) / i, h = n.width / a, w = n.height / i;
  return {
    width: h,
    height: w,
    top: f,
    right: p + h,
    bottom: f + w,
    left: p,
    x: p,
    y: f
  };
}
function Qe(e) {
  var t = he(e), o = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - o) <= 1 && (o = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: n
  };
}
function Pt(e, t) {
  var o = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (o && Je(o)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function te(e) {
  return W(e).getComputedStyle(e);
}
function Xa(e) {
  return ["table", "td", "th"].indexOf(ee(e)) >= 0;
}
function ne(e) {
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
    ne(e)
  );
}
function vt(e) {
  return !U(e) || // https://github.com/popperjs/popper-core/issues/837
  te(e).position === "fixed" ? null : e.offsetParent;
}
function Ka(e) {
  var t = /firefox/i.test(Ue()), o = /Trident/i.test(Ue());
  if (o && U(e)) {
    var n = te(e);
    if (n.position === "fixed")
      return null;
  }
  var a = Me(e);
  for (Je(a) && (a = a.host); U(a) && ["html", "body"].indexOf(ee(a)) < 0; ) {
    var i = te(a);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function Re(e) {
  for (var t = W(e), o = vt(e); o && Xa(o) && te(o).position === "static"; )
    o = vt(o);
  return o && (ee(o) === "html" || ee(o) === "body" && te(o).position === "static") ? t : o || Ka(e) || t;
}
function et(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function we(e, t, o) {
  return ce(e, qe(t, o));
}
function Ga(e, t, o) {
  var n = we(e, t, o);
  return n > o ? o : n;
}
function Dt() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function jt(e) {
  return Object.assign({}, Dt(), e);
}
function At(e, t) {
  return t.reduce(function(o, n) {
    return o[n] = e, o;
  }, {});
}
var Za = function(t, o) {
  return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
    placement: o.placement
  })) : t, jt(typeof t != "number" ? t : At(t, Se));
};
function Ja(e) {
  var t, o = e.state, n = e.name, a = e.options, i = o.elements.arrow, c = o.modifiersData.popperOffsets, s = Q(o.placement), r = et(s), p = [H, G].indexOf(s) >= 0, f = p ? "height" : "width";
  if (!(!i || !c)) {
    var h = Za(a.padding, o), w = Qe(i), y = r === "y" ? L : H, O = r === "y" ? K : G, m = o.rects.reference[f] + o.rects.reference[r] - c[r] - o.rects.popper[f], x = c[r] - o.rects.reference[r], b = Re(i), D = b ? r === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, A = m / 2 - x / 2, $ = h[y], S = D - w[f] - h[O], R = D / 2 - w[f] / 2 + A, g = we($, R, S), B = r;
    o.modifiersData[n] = (t = {}, t[B] = g, t.centerOffset = g - R, t);
  }
}
function Qa(e) {
  var t = e.state, o = e.options, n = o.element, a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || Pt(t.elements.popper, a) && (t.elements.arrow = a));
}
const ei = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Ja,
  effect: Qa,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ye(e) {
  return e.split("-")[1];
}
var ti = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function oi(e, t) {
  var o = e.x, n = e.y, a = t.devicePixelRatio || 1;
  return {
    x: me(o * a) / a || 0,
    y: me(n * a) / a || 0
  };
}
function mt(e) {
  var t, o = e.popper, n = e.popperRect, a = e.placement, i = e.variation, c = e.offsets, s = e.position, r = e.gpuAcceleration, p = e.adaptive, f = e.roundOffsets, h = e.isFixed, w = c.x, y = w === void 0 ? 0 : w, O = c.y, m = O === void 0 ? 0 : O, x = typeof f == "function" ? f({
    x: y,
    y: m
  }) : {
    x: y,
    y: m
  };
  y = x.x, m = x.y;
  var b = c.hasOwnProperty("x"), D = c.hasOwnProperty("y"), A = H, $ = L, S = window;
  if (p) {
    var R = Re(o), g = "clientHeight", B = "clientWidth";
    if (R === W(o) && (R = ne(o), te(R).position !== "static" && s === "absolute" && (g = "scrollHeight", B = "scrollWidth")), R = R, a === L || (a === H || a === G) && i === Ce) {
      $ = K;
      var _ = h && R === S && S.visualViewport ? S.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        R[g]
      );
      m -= _ - n.height, m *= r ? 1 : -1;
    }
    if (a === H || (a === L || a === K) && i === Ce) {
      A = G;
      var T = h && R === S && S.visualViewport ? S.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        R[B]
      );
      y -= T - n.width, y *= r ? 1 : -1;
    }
  }
  var E = Object.assign({
    position: s
  }, p && ti), V = f === !0 ? oi({
    x: y,
    y: m
  }, W(o)) : {
    x: y,
    y: m
  };
  if (y = V.x, m = V.y, r) {
    var M;
    return Object.assign({}, E, (M = {}, M[$] = D ? "0" : "", M[A] = b ? "0" : "", M.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + m + "px)" : "translate3d(" + y + "px, " + m + "px, 0)", M));
  }
  return Object.assign({}, E, (t = {}, t[$] = D ? m + "px" : "", t[A] = b ? y + "px" : "", t.transform = "", t));
}
function ni(e) {
  var t = e.state, o = e.options, n = o.gpuAcceleration, a = n === void 0 ? !0 : n, i = o.adaptive, c = i === void 0 ? !0 : i, s = o.roundOffsets, r = s === void 0 ? !0 : s, p = {
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
const ai = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ni,
  data: {}
};
var Te = {
  passive: !0
};
function ii(e) {
  var t = e.state, o = e.instance, n = e.options, a = n.scroll, i = a === void 0 ? !0 : a, c = n.resize, s = c === void 0 ? !0 : c, r = W(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && p.forEach(function(f) {
    f.addEventListener("scroll", o.update, Te);
  }), s && r.addEventListener("resize", o.update, Te), function() {
    i && p.forEach(function(f) {
      f.removeEventListener("scroll", o.update, Te);
    }), s && r.removeEventListener("resize", o.update, Te);
  };
}
const si = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: ii,
  data: {}
};
var ri = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ee(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ri[t];
  });
}
var li = {
  start: "end",
  end: "start"
};
function ht(e) {
  return e.replace(/start|end/g, function(t) {
    return li[t];
  });
}
function tt(e) {
  var t = W(e), o = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: n
  };
}
function ot(e) {
  return he(ne(e)).left + tt(e).scrollLeft;
}
function ci(e, t) {
  var o = W(e), n = ne(e), a = o.visualViewport, i = n.clientWidth, c = n.clientHeight, s = 0, r = 0;
  if (a) {
    i = a.width, c = a.height;
    var p = Rt();
    (p || !p && t === "fixed") && (s = a.offsetLeft, r = a.offsetTop);
  }
  return {
    width: i,
    height: c,
    x: s + ot(e),
    y: r
  };
}
function di(e) {
  var t, o = ne(e), n = tt(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, i = ce(o.scrollWidth, o.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), c = ce(o.scrollHeight, o.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), s = -n.scrollLeft + ot(e), r = -n.scrollTop;
  return te(a || o).direction === "rtl" && (s += ce(o.clientWidth, a ? a.clientWidth : 0) - i), {
    width: i,
    height: c,
    x: s,
    y: r
  };
}
function nt(e) {
  var t = te(e), o = t.overflow, n = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + a + n);
}
function Bt(e) {
  return ["html", "body", "#document"].indexOf(ee(e)) >= 0 ? e.ownerDocument.body : U(e) && nt(e) ? e : Bt(Me(e));
}
function ke(e, t) {
  var o;
  t === void 0 && (t = []);
  var n = Bt(e), a = n === ((o = e.ownerDocument) == null ? void 0 : o.body), i = W(n), c = a ? [i].concat(i.visualViewport || [], nt(n) ? n : []) : n, s = t.concat(c);
  return a ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(ke(Me(c)))
  );
}
function Xe(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function ui(e, t) {
  var o = he(e, !1, t === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function yt(e, t, o) {
  return t === Ot ? Xe(ci(e, o)) : ue(t) ? ui(t, o) : Xe(di(ne(e)));
}
function fi(e) {
  var t = ke(Me(e)), o = ["absolute", "fixed"].indexOf(te(e).position) >= 0, n = o && U(e) ? Re(e) : e;
  return ue(n) ? t.filter(function(a) {
    return ue(a) && Pt(a, n) && ee(a) !== "body";
  }) : [];
}
function pi(e, t, o, n) {
  var a = t === "clippingParents" ? fi(e) : [].concat(t), i = [].concat(a, [o]), c = i[0], s = i.reduce(function(r, p) {
    var f = yt(e, p, n);
    return r.top = ce(f.top, r.top), r.right = qe(f.right, r.right), r.bottom = qe(f.bottom, r.bottom), r.left = ce(f.left, r.left), r;
  }, yt(e, c, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Tt(e) {
  var t = e.reference, o = e.element, n = e.placement, a = n ? Q(n) : null, i = n ? ye(n) : null, c = t.x + t.width / 2 - o.width / 2, s = t.y + t.height / 2 - o.height / 2, r;
  switch (a) {
    case L:
      r = {
        x: c,
        y: t.y - o.height
      };
      break;
    case K:
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
    case H:
      r = {
        x: t.x - o.width,
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
        r[p] = r[p] - (t[f] / 2 - o[f] / 2);
        break;
      case Ce:
        r[p] = r[p] + (t[f] / 2 - o[f] / 2);
        break;
    }
  }
  return r;
}
function Oe(e, t) {
  t === void 0 && (t = {});
  var o = t, n = o.placement, a = n === void 0 ? e.placement : n, i = o.strategy, c = i === void 0 ? e.strategy : i, s = o.boundary, r = s === void 0 ? Ba : s, p = o.rootBoundary, f = p === void 0 ? Ot : p, h = o.elementContext, w = h === void 0 ? be : h, y = o.altBoundary, O = y === void 0 ? !1 : y, m = o.padding, x = m === void 0 ? 0 : m, b = jt(typeof x != "number" ? x : At(x, Se)), D = w === be ? Ta : be, A = e.rects.popper, $ = e.elements[O ? D : w], S = pi(ue($) ? $ : $.contextElement || ne(e.elements.popper), r, f, c), R = he(e.elements.reference), g = Tt({
    reference: R,
    element: A,
    strategy: "absolute",
    placement: a
  }), B = Xe(Object.assign({}, A, g)), _ = w === be ? B : R, T = {
    top: S.top - _.top + b.top,
    bottom: _.bottom - S.bottom + b.bottom,
    left: S.left - _.left + b.left,
    right: _.right - S.right + b.right
  }, E = e.modifiersData.offset;
  if (w === be && E) {
    var V = E[a];
    Object.keys(T).forEach(function(M) {
      var ae = [G, K].indexOf(M) >= 0 ? 1 : -1, ie = [L, K].indexOf(M) >= 0 ? "y" : "x";
      T[M] += V[ie] * ae;
    });
  }
  return T;
}
function vi(e, t) {
  t === void 0 && (t = {});
  var o = t, n = o.placement, a = o.boundary, i = o.rootBoundary, c = o.padding, s = o.flipVariations, r = o.allowedAutoPlacements, p = r === void 0 ? St : r, f = ye(n), h = f ? s ? pt : pt.filter(function(O) {
    return ye(O) === f;
  }) : Se, w = h.filter(function(O) {
    return p.indexOf(O) >= 0;
  });
  w.length === 0 && (w = h);
  var y = w.reduce(function(O, m) {
    return O[m] = Oe(e, {
      placement: m,
      boundary: a,
      rootBoundary: i,
      padding: c
    })[Q(m)], O;
  }, {});
  return Object.keys(y).sort(function(O, m) {
    return y[O] - y[m];
  });
}
function mi(e) {
  if (Q(e) === Ze)
    return [];
  var t = Ee(e);
  return [ht(e), t, ht(t)];
}
function hi(e) {
  var t = e.state, o = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var a = o.mainAxis, i = a === void 0 ? !0 : a, c = o.altAxis, s = c === void 0 ? !0 : c, r = o.fallbackPlacements, p = o.padding, f = o.boundary, h = o.rootBoundary, w = o.altBoundary, y = o.flipVariations, O = y === void 0 ? !0 : y, m = o.allowedAutoPlacements, x = t.options.placement, b = Q(x), D = b === x, A = r || (D || !O ? [Ee(x)] : mi(x)), $ = [x].concat(A).reduce(function(fe, oe) {
      return fe.concat(Q(oe) === Ze ? vi(t, {
        placement: oe,
        boundary: f,
        rootBoundary: h,
        padding: p,
        flipVariations: O,
        allowedAutoPlacements: m
      }) : oe);
    }, []), S = t.rects.reference, R = t.rects.popper, g = /* @__PURE__ */ new Map(), B = !0, _ = $[0], T = 0; T < $.length; T++) {
      var E = $[T], V = Q(E), M = ye(E) === ve, ae = [L, K].indexOf(V) >= 0, ie = ae ? "width" : "height", z = Oe(t, {
        placement: E,
        boundary: f,
        rootBoundary: h,
        altBoundary: w,
        padding: p
      }), Z = ae ? M ? G : H : M ? K : L;
      S[ie] > R[ie] && (Z = Ee(Z));
      var Pe = Ee(Z), se = [];
      if (i && se.push(z[V] <= 0), s && se.push(z[Z] <= 0, z[Pe] <= 0), se.every(function(fe) {
        return fe;
      })) {
        _ = E, B = !1;
        break;
      }
      g.set(E, se);
    }
    if (B)
      for (var De = O ? 3 : 1, Le = function(oe) {
        var _e = $.find(function(Ae) {
          var re = g.get(Ae);
          if (re)
            return re.slice(0, oe).every(function(He) {
              return He;
            });
        });
        if (_e)
          return _ = _e, "break";
      }, ge = De; ge > 0; ge--) {
        var je = Le(ge);
        if (je === "break") break;
      }
    t.placement !== _ && (t.modifiersData[n]._skip = !0, t.placement = _, t.reset = !0);
  }
}
const yi = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: hi,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function gt(e, t, o) {
  return o === void 0 && (o = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - o.y,
    right: e.right - t.width + o.x,
    bottom: e.bottom - t.height + o.y,
    left: e.left - t.width - o.x
  };
}
function _t(e) {
  return [L, G, K, H].some(function(t) {
    return e[t] >= 0;
  });
}
function gi(e) {
  var t = e.state, o = e.name, n = t.rects.reference, a = t.rects.popper, i = t.modifiersData.preventOverflow, c = Oe(t, {
    elementContext: "reference"
  }), s = Oe(t, {
    altBoundary: !0
  }), r = gt(c, n), p = gt(s, a, i), f = _t(r), h = _t(p);
  t.modifiersData[o] = {
    referenceClippingOffsets: r,
    popperEscapeOffsets: p,
    isReferenceHidden: f,
    hasPopperEscaped: h
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": f,
    "data-popper-escaped": h
  });
}
const _i = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: gi
};
function bi(e, t, o) {
  var n = Q(e), a = [H, L].indexOf(n) >= 0 ? -1 : 1, i = typeof o == "function" ? o(Object.assign({}, t, {
    placement: e
  })) : o, c = i[0], s = i[1];
  return c = c || 0, s = (s || 0) * a, [H, G].indexOf(n) >= 0 ? {
    x: s,
    y: c
  } : {
    x: c,
    y: s
  };
}
function xi(e) {
  var t = e.state, o = e.options, n = e.name, a = o.offset, i = a === void 0 ? [0, 0] : a, c = St.reduce(function(f, h) {
    return f[h] = bi(h, t.rects, i), f;
  }, {}), s = c[t.placement], r = s.x, p = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += r, t.modifiersData.popperOffsets.y += p), t.modifiersData[n] = c;
}
const wi = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: xi
};
function ki(e) {
  var t = e.state, o = e.name;
  t.modifiersData[o] = Tt({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const $i = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ki,
  data: {}
};
function Ci(e) {
  return e === "x" ? "y" : "x";
}
function Oi(e) {
  var t = e.state, o = e.options, n = e.name, a = o.mainAxis, i = a === void 0 ? !0 : a, c = o.altAxis, s = c === void 0 ? !1 : c, r = o.boundary, p = o.rootBoundary, f = o.altBoundary, h = o.padding, w = o.tether, y = w === void 0 ? !0 : w, O = o.tetherOffset, m = O === void 0 ? 0 : O, x = Oe(t, {
    boundary: r,
    rootBoundary: p,
    padding: h,
    altBoundary: f
  }), b = Q(t.placement), D = ye(t.placement), A = !D, $ = et(b), S = Ci($), R = t.modifiersData.popperOffsets, g = t.rects.reference, B = t.rects.popper, _ = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, T = typeof _ == "number" ? {
    mainAxis: _,
    altAxis: _
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, _), E = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, V = {
    x: 0,
    y: 0
  };
  if (R) {
    if (i) {
      var M, ae = $ === "y" ? L : H, ie = $ === "y" ? K : G, z = $ === "y" ? "height" : "width", Z = R[$], Pe = Z + x[ae], se = Z - x[ie], De = y ? -B[z] / 2 : 0, Le = D === ve ? g[z] : B[z], ge = D === ve ? -B[z] : -g[z], je = t.elements.arrow, fe = y && je ? Qe(je) : {
        width: 0,
        height: 0
      }, oe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Dt(), _e = oe[ae], Ae = oe[ie], re = we(0, g[z], fe[z]), He = A ? g[z] / 2 - De - re - _e - T.mainAxis : Le - re - _e - T.mainAxis, qt = A ? -g[z] / 2 + De + re + Ae + T.mainAxis : ge + re + Ae + T.mainAxis, Ve = t.elements.arrow && Re(t.elements.arrow), Nt = Ve ? $ === "y" ? Ve.clientTop || 0 : Ve.clientLeft || 0 : 0, at = (M = E == null ? void 0 : E[$]) != null ? M : 0, Mt = Z + He - at - Nt, Lt = Z + qt - at, it = we(y ? qe(Pe, Mt) : Pe, Z, y ? ce(se, Lt) : se);
      R[$] = it, V[$] = it - Z;
    }
    if (s) {
      var st, Ht = $ === "x" ? L : H, Vt = $ === "x" ? K : G, le = R[S], Be = S === "y" ? "height" : "width", rt = le + x[Ht], lt = le - x[Vt], ze = [L, H].indexOf(b) !== -1, ct = (st = E == null ? void 0 : E[S]) != null ? st : 0, dt = ze ? rt : le - g[Be] - B[Be] - ct + T.altAxis, ut = ze ? le + g[Be] + B[Be] - ct - T.altAxis : lt, ft = y && ze ? Ga(dt, le, ut) : we(y ? dt : rt, le, y ? ut : lt);
      R[S] = ft, V[S] = ft - le;
    }
    t.modifiersData[n] = V;
  }
}
const Si = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Oi,
  requiresIfExists: ["offset"]
};
function Ri(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Pi(e) {
  return e === W(e) || !U(e) ? tt(e) : Ri(e);
}
function Di(e) {
  var t = e.getBoundingClientRect(), o = me(t.width) / e.offsetWidth || 1, n = me(t.height) / e.offsetHeight || 1;
  return o !== 1 || n !== 1;
}
function ji(e, t, o) {
  o === void 0 && (o = !1);
  var n = U(t), a = U(t) && Di(t), i = ne(t), c = he(e, a, o), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, r = {
    x: 0,
    y: 0
  };
  return (n || !n && !o) && ((ee(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  nt(i)) && (s = Pi(t)), U(t) ? (r = he(t, !0), r.x += t.clientLeft, r.y += t.clientTop) : i && (r.x = ot(i))), {
    x: c.left + s.scrollLeft - r.x,
    y: c.top + s.scrollTop - r.y,
    width: c.width,
    height: c.height
  };
}
function Ai(e) {
  var t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function a(i) {
    o.add(i.name);
    var c = [].concat(i.requires || [], i.requiresIfExists || []);
    c.forEach(function(s) {
      if (!o.has(s)) {
        var r = t.get(s);
        r && a(r);
      }
    }), n.push(i);
  }
  return e.forEach(function(i) {
    o.has(i.name) || a(i);
  }), n;
}
function Bi(e) {
  var t = Ai(e);
  return Wa.reduce(function(o, n) {
    return o.concat(t.filter(function(a) {
      return a.phase === n;
    }));
  }, []);
}
function Ti(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(o) {
      Promise.resolve().then(function() {
        t = void 0, o(e());
      });
    })), t;
  };
}
function Ei(e) {
  var t = e.reduce(function(o, n) {
    var a = o[n.name];
    return o[n.name] = a ? Object.assign({}, a, n, {
      options: Object.assign({}, a.options, n.options),
      data: Object.assign({}, a.data, n.data)
    }) : n, o;
  }, {});
  return Object.keys(t).map(function(o) {
    return t[o];
  });
}
var bt = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function xt() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function qi(e) {
  e === void 0 && (e = {});
  var t = e, o = t.defaultModifiers, n = o === void 0 ? [] : o, a = t.defaultOptions, i = a === void 0 ? bt : a;
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
    }, h = [], w = !1, y = {
      state: f,
      setOptions: function(b) {
        var D = typeof b == "function" ? b(f.options) : b;
        m(), f.options = Object.assign({}, i, f.options, D), f.scrollParents = {
          reference: ue(s) ? ke(s) : s.contextElement ? ke(s.contextElement) : [],
          popper: ke(r)
        };
        var A = Bi(Ei([].concat(n, f.options.modifiers)));
        return f.orderedModifiers = A.filter(function($) {
          return $.enabled;
        }), O(), y.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!w) {
          var b = f.elements, D = b.reference, A = b.popper;
          if (xt(D, A)) {
            f.rects = {
              reference: ji(D, Re(A), f.options.strategy === "fixed"),
              popper: Qe(A)
            }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(T) {
              return f.modifiersData[T.name] = Object.assign({}, T.data);
            });
            for (var $ = 0; $ < f.orderedModifiers.length; $++) {
              if (f.reset === !0) {
                f.reset = !1, $ = -1;
                continue;
              }
              var S = f.orderedModifiers[$], R = S.fn, g = S.options, B = g === void 0 ? {} : g, _ = S.name;
              typeof R == "function" && (f = R({
                state: f,
                options: B,
                name: _,
                instance: y
              }) || f);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Ti(function() {
        return new Promise(function(x) {
          y.forceUpdate(), x(f);
        });
      }),
      destroy: function() {
        m(), w = !0;
      }
    };
    if (!xt(s, r))
      return y;
    y.setOptions(p).then(function(x) {
      !w && p.onFirstUpdate && p.onFirstUpdate(x);
    });
    function O() {
      f.orderedModifiers.forEach(function(x) {
        var b = x.name, D = x.options, A = D === void 0 ? {} : D, $ = x.effect;
        if (typeof $ == "function") {
          var S = $({
            state: f,
            name: b,
            instance: y,
            options: A
          }), R = function() {
          };
          h.push(S || R);
        }
      });
    }
    function m() {
      h.forEach(function(x) {
        return x();
      }), h = [];
    }
    return y;
  };
}
var Ni = [si, $i, ai, Ua, wi, yi, Si, ei, _i], Mi = /* @__PURE__ */ qi({
  defaultModifiers: Ni
});
const Li = {
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
  setup(e, { expose: t, emit: o }) {
    const n = e, a = o, i = F("bottom"), c = F(null), s = N(
      () => n.validation ? n.validation(c.value) : !0
    ), r = N(() => !s.value && n.requiredField && n.error ? "is-invalid" : ""), p = () => Array.isArray(c.value) ? n.data.filter((m) => !c.value.some((x) => x.id === m.id)) : n.data, f = () => c.value ? n.data.filter((m) => m.id !== c.value.id) : n.data, h = N(() => n.multiple ? p() : f()), w = (m) => n.selectable ? n.selectable(m) : (x) => x.includes(x);
    de(
      () => n.selected,
      (m) => {
        m && (c.value = m);
      },
      { immediate: !0 }
    ), de(c, () => {
      a("emitValue", s.value ? c.value : null);
    }), Ne(() => {
      n.submitted && y();
    });
    const y = () => {
      c.value = n.multiple ? [] : null;
    }, O = (m, x, { width: b }) => {
      m.style.width = b;
      const D = Mi(x.$refs.toggle, m, {
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
            fn({ state: A }) {
              x.$el.classList.toggle(
                "drop-up",
                A.placement === "top"
              );
            }
          }
        ]
      });
      return () => D.destroy();
    };
    return t({ clean: y }), (m, x) => {
      const b = X("v-select");
      return l(), Y(b, {
        "calculate-position": O,
        options: h.value,
        modelValue: c.value,
        "onUpdate:modelValue": x[0] || (x[0] = (D) => c.value = D),
        label: e.labelCustom,
        multiple: e.multiple,
        placeholder: e.placeHolder,
        class: q(["eit-select-component", r.value]),
        clearable: e.clearable,
        disabled: n.isDisabled,
        selectable: w
      }, {
        "no-options": We(() => [
          j(" No hay más resultados. ")
        ]),
        _: 1
      }, 8, ["options", "modelValue", "label", "multiple", "placeholder", "class", "clearable", "disabled"]);
    };
  }
}, Hi = ["maxlength", "placeholder"], Vi = {
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
  setup(e, { expose: t, emit: o }) {
    const n = e, a = o, i = F(null), c = F(""), s = N(() => n.validation && n.validation(c.value)), r = N(() => !s.value && n.requiredField && n.error ? "is-invalid" : ""), p = () => {
      c.value = "";
    };
    return de(
      () => n.input,
      (f) => {
        f && (c.value = f);
      }
    ), de(c, () => {
      i.value.style.height = "50px", i.value.style.height = `${i.value.scrollHeight}px`, a("emitValue", s.value ? c.value : "");
    }), Ne(() => {
      n.submitted && p();
    }), t({ clean: p }), (f, h) => $e((l(), u("textarea", {
      ref_key: "textarea",
      ref: i,
      "onUpdate:modelValue": h[0] || (h[0] = (w) => c.value = w),
      maxlength: e.maxLength,
      autocomplete: "off",
      class: q(["form-control eit-textarea eit-textarea-resize", r.value]),
      placeholder: e.placeHolder
    }, null, 10, Hi)), [
      [
        kt,
        c.value,
        void 0,
        { trim: !0 }
      ]
    ]);
  }
}, zi = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20style='margin:%20auto;%20display:%20block;%20shape-rendering:%20auto;'%20width='200px'%20height='200px'%20viewBox='0%200%20100%20100'%20preserveAspectRatio='xMidYMid'%3e%3crect%20x='17.5'%20y='30'%20width='15'%20height='40'%20fill='%23009da6'%3e%3canimate%20attributeName='y'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='18;30;30'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.2s'%3e%3c/animate%3e%3canimate%20attributeName='height'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='64;40;40'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.2s'%3e%3c/animate%3e%3c/rect%3e%3crect%20x='42.5'%20y='30'%20width='15'%20height='40'%20fill='%2379cace'%3e%3canimate%20attributeName='y'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='20.999999999999996;30;30'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.1s'%3e%3c/animate%3e%3canimate%20attributeName='height'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='58.00000000000001;40;40'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.1s'%3e%3c/animate%3e%3c/rect%3e%3crect%20x='67.5'%20y='30'%20width='15'%20height='40'%20fill='%23a9e4e7'%3e%3canimate%20attributeName='y'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='20.999999999999996;30;30'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%3e%3c/animate%3e%3canimate%20attributeName='height'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='58.00000000000001;40;40'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%3e%3c/animate%3e%3c/rect%3e%3c/svg%3e", Fi = { class: "p-3 eit-loading" }, Et = {
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
    return (o, n) => (l(), u("div", Fi, [
      d("img", {
        style: Ye(`width:${t.size}px`),
        src: zi
      }, null, 4)
    ]));
  }
}, wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlertComponent: Ct,
  BadgeComponent: pe,
  BreadcrumbComponent: to,
  ButtonComponent: Ie,
  DetailComponent: Bn,
  DialogComponent: Wn,
  HighlightComponent: Hn,
  InputComponent: Aa,
  LoadingComponent: Et,
  PaginationComponent: cn,
  PopoverComponent: Sa,
  ProgressBarComponent: ta,
  PropsComponent: Zn,
  SelectComponent: Li,
  SkeletonComponent: Ge,
  TabComponent: Mn,
  TableComponent: nn,
  TextareaResizeComponent: Vi,
  ToastComponent: va
}, Symbol.toStringTag, { value: "Module" }));
function Wi(e, t) {
  const o = $t(), n = N(() => o.meta.requiresAuth ? e.config.darkTheme ? t.logotipo.logo_dark : t.logotipo.logo_light : t.platformDarkTheme ? t.logotipo.logo_dark : t.logotipo.logo_light), a = N(() => e.config.darkTheme ? t.logotipo.isotipo_dark : t.logotipo.isotipo_light);
  return { logotipo: n, isotipo: a };
}
const ns = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useLogos: Wi
}, Symbol.toStringTag, { value: "Module" }));
function Yi() {
  function e(i) {
    return !(i == null || typeof i == "string" && i.trim() === "" || typeof i == "object" && Object.keys(i).length === 0 || Array.isArray(i) && i.length === 0);
  }
  function t(i) {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(i);
  }
  function o(i) {
    if (i.length >= 11 && i.length <= 12 && /[.-]/.test(i)) return !0;
    if (i.length < 11) return !1;
  }
  function n(i) {
    const c = i.length >= 8, s = /[A-Z]/.test(i), r = /[a-z]/.test(i), p = /[0-9]/.test(i), f = /[!@#$%^&*(),.?":{}|<>]/.test(i);
    return c && s && r && p && f;
  }
  function a(i) {
    return /^\+\d{3} \d{4}-\d{4}$/.test(i);
  }
  return {
    validateDefault: e,
    validateEmail: t,
    validateRut: o,
    validatePassword: n,
    validatePhone: a
  };
}
function Ii() {
  function e(a) {
    return a.replace(/[.-]/g, "").replace(/^(\d{1,2})(\d{3})(\d{3})(\w{1})$/, "$1.$2.$3-$4");
  }
  function t(a) {
    return a.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  function o(a) {
    return a.replace(/\D/g, "").replace(/^(\d{3})(\d{4})(\d{4})$/, "+$1 $2-$3");
  }
  function n(a) {
    return a.replace(/[^a-zA-Z\s]/g, "");
  }
  return { inputMaskRut: e, inputMaskCurrency: t, inputMaskPhone: o, inputOnlyLetters: n };
}
function Ui() {
  function e(t) {
    let o = String.fromCharCode(t.keyCode);
    if (/^[0-9Kk.-]/.test(o)) return !0;
    t.preventDefault();
  }
  return { keyPressRut: e };
}
function Xi() {
  function e(t) {
    const { sort: o, data: n } = t, { keys: a, index: i, asc: c } = o, s = a[i];
    return n.sort((r, p) => {
      let f = r[s], h = p[s];
      return typeof f == "object" && f !== null && (f = f.name, h = h.name), f === h ? 0 : (f > h ? 1 : -1) * (c ? 1 : -1);
    }), n;
  }
  return { sortTable: e };
}
xe.extend(Xt);
xe.locale("es");
function Ki() {
  function e(s) {
    return xe(s, "YYYY-MM-DD").format("DD/MM/YYYY");
  }
  function t(s) {
    return xe(s).format("YYYY-MM-DD");
  }
  function o(s) {
    return xe(s).fromNow();
  }
  function n(s) {
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
    formatDateAgo: o,
    formatRut: n,
    formatCapitalize: a,
    formatCurrency: i,
    formatCurrencyToBack: c
  };
}
function Gi() {
  function e(t, o, n = "right") {
    return o ? {
      content: t,
      theme: "main",
      placement: n,
      appendTo: "parent"
    } : { content: t, theme: "main", placement: n };
  }
  return { handleTooltip: e };
}
const as = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useFormat: Ki,
  useInputMask: Ii,
  useKeypress: Ui,
  useTable: Xi,
  useTooltip: Gi,
  useValidator: Yi
}, Symbol.toStringTag, { value: "Module" })), is = {
  install(e) {
    Object.keys(wt).forEach((t) => {
      e.component(t, wt[t]);
    });
  }
};
export {
  ns as composables,
  is as default,
  as as utils
};
