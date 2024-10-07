import { computed as C, resolveComponent as D, openBlock as e, createElementBlock as s, normalizeClass as R, Fragment as _, createTextVNode as k, toDisplayString as v, createCommentVNode as c, createBlock as S, createElementVNode as n, createVNode as m, withCtx as O, renderList as P, renderSlot as j, mergeProps as ne, createStaticVNode as se, resolveDirective as le, withDirectives as E, ref as q, watch as T, watchEffect as V, withKeys as I, vModelText as W, normalizeStyle as F, onMounted as ae, vModelDynamic as ie } from "vue";
import { useRoute as X } from "vue-router";
import { codeToHtml as re } from "shiki";
import M from "dayjs";
import ce from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";
const de = ["disabled"], ue = /* @__PURE__ */ n("div", { class: "spinner-border spinner-border-sm me-1" }, null, -1), H = {
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
  setup(t, { emit: i }) {
    const a = t, o = i, r = C(() => ["eit-btn", `${a.className}`]), l = (u) => {
      o("emitEvent", u);
    };
    return (u, d) => {
      const g = D("font-awesome-icon");
      return e(), s("button", {
        onClick: d[0] || (d[0] = (p) => l(p)),
        class: R([r.value, "d-flex align-items-center justify-content-center gap-1"]),
        disabled: a.isDisabled
      }, [
        a.loading ? (e(), s(_, { key: 0 }, [
          ue,
          k(" " + v(a.loadingText), 1)
        ], 64)) : c("", !0),
        a.loading ? c("", !0) : (e(), s(_, { key: 1 }, [
          a.icon ? (e(), S(g, {
            key: 0,
            icon: a.icon
          }, null, 8, ["icon"])) : c("", !0),
          k(" " + v(t.text), 1)
        ], 64))
      ], 10, de);
    };
  }
}, fe = { "aria-label": "breadcrumb" }, me = { class: "eit-breadcrumb" }, pe = /* @__PURE__ */ n("span", { class: "px-2 eit-color--text-soft" }, "/", -1), _e = {
  key: 1,
  class: "eit-color--text-soft"
}, he = {
  __name: "BreadcrumbComponent",
  setup(t) {
    const i = X(), a = C(() => {
      let o = [], r = "";
      return i.matched.forEach((l, u) => {
        r += "/" + l.path.split("/")[u + 1], o.push({
          name: l.name,
          title: l.meta.title || "Sin título",
          path: r,
          last: u === i.matched.length - 1
        });
      }), o;
    });
    return (o, r) => {
      const l = D("font-awesome-icon"), u = D("router-link");
      return e(), s("nav", fe, [
        n("ul", me, [
          n("li", null, [
            m(u, {
              to: "/",
              class: "eit-color--text-soft eit-color--text-soft--link"
            }, {
              default: O(() => [
                m(l, { icon: "fa-solid fa-house" })
              ]),
              _: 1
            }),
            pe
          ]),
          (e(!0), s(_, null, P(a.value, (d, g) => (e(), s("li", {
            key: g,
            class: "eit-breadcrumb__item"
          }, [
            j(o.$slots, d.name, ne({ ref_for: !0 }, d), () => [
              d.last ? (e(), s("span", _e, v(d.title), 1)) : (e(), S(u, {
                key: 0,
                to: d.path,
                class: "eit-color--text eit-color--text--link eit-color--underline"
              }, {
                default: O(() => [
                  k(v(d.title), 1)
                ]),
                _: 2
              }, 1032, ["to"]))
            ])
          ]))), 128))
        ])
      ]);
    };
  }
}, ye = ["innerHTML"], L = {
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
  setup(t) {
    const i = t;
    return (a, o) => {
      const r = D("font-awesome-icon");
      return e(), s("span", {
        key: `badge-${i.text}`,
        class: R(`eit-badge ${i.className}`)
      }, [
        i.icon ? (e(), S(r, {
          key: 0,
          icon: i.icon,
          class: "me-1"
        }, null, 8, ["icon"])) : c("", !0),
        n("span", {
          innerHTML: i.text
        }, null, 8, ye)
      ], 2);
    };
  }
}, ge = {
  key: 0,
  class: "table eit-table eit-table-responsive"
}, ve = {
  key: 0,
  class: "eit-skeleton__table-first-td"
}, be = /* @__PURE__ */ n("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "80%" }
}, null, -1), ke = [
  be
], $e = { key: 1 }, xe = /* @__PURE__ */ n("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "60%" }
}, null, -1), we = [
  xe
], Ce = {
  key: 0,
  class: "eit-skeleton__table-first-td"
}, Re = /* @__PURE__ */ n("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), Se = [
  Re
], je = { key: 1 }, qe = /* @__PURE__ */ n("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), De = [
  qe
], Pe = /* @__PURE__ */ se('<div class="row"><div class="col-12"><div class="d-flex"><div class="flex-shrink-0"><div class="eit-skeleton eit-skeleton__btn-square"></div></div><div class="flex-grow-1 ms-3"><div class="d-flex"><div class="flex-grow-1 ms-3"><div class="eit-skeleton eit-skeleton__title my-2" style="width:40%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div></div><div class="flex-shrink-0"><div class="eit-skeleton eit-skeleton__text my-2" style="width:30px;"></div></div></div></div></div></div></div><div class="row flex-grow-1"><div class="col-12 d-flex flex-column flex-grow-1"><div class="eit-slide__content flex-grow-1"><div class="mt-5"><div class="col-12"><h5 class="mb-3"><div class="eit-skeleton eit-skeleton__title my-2" style="width:20%;"></div></h5><ul class="list-unstyled"><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:40%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:20%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:20%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li></ul></div></div></div></div></div>', 2), K = {
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
  setup(t) {
    const i = t;
    return (a, o) => (e(), s(_, null, [
      i.type === "table" ? (e(), s("table", ge, [
        n("thead", null, [
          n("tr", null, [
            (e(!0), s(_, null, P(i.table.column, (r) => (e(), s(_, { key: r }, [
              r === 1 ? (e(), s("th", ve, ke)) : c("", !0),
              r > 1 ? (e(), s("th", $e, we)) : c("", !0)
            ], 64))), 128))
          ])
        ]),
        n("tbody", null, [
          (e(!0), s(_, null, P(i.table.row, (r) => (e(), s("tr", { key: r }, [
            (e(!0), s(_, null, P(i.table.column, (l) => (e(), s(_, { key: l }, [
              l === 1 ? (e(), s("td", Ce, Se)) : c("", !0),
              l > 1 ? (e(), s("td", je, De)) : c("", !0)
            ], 64))), 128))
          ]))), 128))
        ])
      ])) : c("", !0),
      i.type === "detail" ? (e(), s(_, { key: 1 }, [
        Pe
      ], 64)) : c("", !0)
    ], 64));
  }
}, Be = { class: "d-flex align-items-center" }, Te = { class: "flex-shrink-0 d-flex align-items-center eit-alert__icon me-2" }, Ne = ["innerHTML"], ee = {
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
  setup(t) {
    const i = t;
    return (a, o) => {
      const r = D("font-awesome-icon");
      return e(), s("div", {
        class: R(`eit-alert eit-alert--${i.type} ${i.animation.active ? "eit-alert--animation" : "eit-alert--default"} ${i.animation.show ? "eit-alert--animation--show" : ""}`)
      }, [
        n("div", Be, [
          n("div", Te, [
            m(r, {
              icon: i.icon,
              class: R(t.iconClass)
            }, null, 8, ["icon", "class"])
          ]),
          n("div", {
            class: "flex-grow-1 eit-alert__text",
            innerHTML: i.message
          }, null, 8, Ne)
        ])
      ], 2);
    };
  }
}, Le = { class: "row" }, Ae = { class: "col-12" }, Ee = { class: "table eit-table eit-table-responsive" }, Me = ["onClick"], Ve = /* @__PURE__ */ n("th", {
  scope: "col",
  class: "text-center"
}, "Acciones", -1), ze = { class: "pe-3 d-lg-none" }, Oe = ["onClick"], Fe = {
  key: 0,
  class: "d-flex flex-wrap gap-1"
}, He = {
  key: 3,
  class: "eit-table__string"
}, Ie = { class: "text-center" }, Ke = { class: "dropdown eit-dropdown d-none d-lg-block" }, Ue = {
  href: "javascript:",
  class: "eit-btn-action",
  "data-bs-toggle": "dropdown"
}, Ye = { class: "dropdown-menu dropdown-custom-menu" }, Ge = {
  key: 0,
  class: "mx-2"
}, Ze = ["onClick"], Je = {
  key: 1,
  class: "mx-2"
}, Qe = ["onClick"], We = {
  key: 2,
  class: "mx-2"
}, Xe = ["onClick"], et = {
  key: 3,
  class: "m-2"
}, tt = /* @__PURE__ */ n("div", { class: "eit-border--bottom eit-border--color" }, null, -1), ot = [
  tt
], nt = {
  key: 4,
  class: "mx-2"
}, st = ["onClick"], lt = {
  key: 5,
  class: "mx-2"
}, at = ["onClick"], it = { class: "d-flex w-100 justify-content-between align-items-center d-lg-none text-end" }, rt = /* @__PURE__ */ n("strong", null, "Acciones:", -1), ct = { class: "d-flex flex-wrap gap-2 ms-3" }, dt = ["onClick"], ut = ["onClick"], ft = ["onClick"], mt = ["onClick"], pt = ["onClick"], _t = ["onClick"], ht = {
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
  setup(t, { emit: i }) {
    const a = t, o = i, r = (y) => {
      o("viewRecord", y);
    }, l = (y) => {
      o("editRecord", y);
    }, u = (y) => {
      o("deleteRecord", y);
    }, d = (y) => {
      o("downloadRecord", y);
    }, g = (y) => {
      o("updateSort", { index: y, asc: !a.sort.asc });
    }, p = (y) => {
      o("enabledDisabledRecord", y);
    }, f = (y) => typeof y == "string", h = (y) => typeof y == "object" && !Array.isArray(y), b = (y) => Array.isArray(y);
    return (y, N) => {
      var Y, G, Z, J;
      const w = D("font-awesome-icon"), U = le("tippy");
      return e(), s("div", Le, [
        n("div", Ae, [
          t.loading ? (e(), S(K, {
            key: 0,
            type: "table",
            table: { row: (Y = t.skeleton) == null ? void 0 : Y.row, column: (G = t.skeleton) == null ? void 0 : G.column }
          }, null, 8, ["table"])) : c("", !0),
          !t.loading && !((Z = t.data) != null && Z.length) ? (e(), S(ee, {
            key: 1,
            ref: "alert",
            class: "mb-3",
            type: "info",
            icon: "fa-solid fa-info",
            message: "<strong>No hay resultados</strong> para tu búsqueda."
          }, null, 512)) : c("", !0),
          !t.loading && ((J = t.data) != null && J.length) ? (e(), s(_, { key: 2 }, [
            n("table", Ee, [
              n("thead", null, [
                n("tr", null, [
                  (e(!0), s(_, null, P(t.columns, ($, B) => (e(), s("th", {
                    key: `column-${B}`,
                    scope: "col"
                  }, [
                    n("a", {
                      onClick: (x) => g(B),
                      href: "javascript:",
                      class: "d-flex justify-content-between"
                    }, [
                      k(v($) + " ", 1),
                      t.sort.index === B ? (e(), s("span", {
                        key: `icono-${$}`,
                        class: "d-flex ms-2 eit-color--text"
                      }, [
                        t.sort.asc ? c("", !0) : (e(), s("span", {
                          key: `down-${$}`
                        }, [
                          m(w, { icon: "fa-solid fa-sort-down align-baseline" })
                        ])),
                        t.sort.asc ? (e(), s("span", {
                          key: `up-${$}`
                        }, [
                          m(w, { icon: "fa-solid fa-sort-up align-baseline" })
                        ])) : c("", !0)
                      ])) : (e(), s("span", {
                        key: `key-${$}`
                      }, [
                        m(w, { icon: "fa-solid fa-sort" })
                      ]))
                    ], 8, Me)
                  ]))), 128)),
                  Ve
                ])
              ]),
              n("tbody", null, [
                (e(!0), s(_, null, P(t.data, ($, B) => (e(), s("tr", {
                  key: `row-${B}`
                }, [
                  (e(!0), s(_, null, P($, (x, A) => (e(), s("td", {
                    key: `value-${A}`
                  }, [
                    n("strong", ze, v(t.columns[Object.keys($).indexOf(A)]) + ":", 1),
                    Object.keys($)[t.columnLink] === A ? (e(), s(_, { key: 0 }, [
                      t.viewRecord ? (e(), s("a", {
                        key: 0,
                        onClick: (z) => r($),
                        href: "javascript:",
                        class: "eit-table__link"
                      }, v(x), 9, Oe)) : c("", !0),
                      t.viewRecord ? c("", !0) : (e(), s(_, { key: 1 }, [
                        k(v(x), 1)
                      ], 64))
                    ], 64)) : c("", !0),
                    Object.keys($)[t.columnLink] !== A ? (e(), s(_, { key: 1 }, [
                      b(x) ? (e(), s("div", Fe, [
                        (e(!0), s(_, null, P(x, (z, oe) => (e(), s("span", {
                          key: `value-array-${oe}`,
                          class: "d-flex flex-wrap gap-1"
                        }, [
                          m(L, {
                            text: z.name,
                            className: z.className
                          }, null, 8, ["text", "className"])
                        ]))), 128))
                      ])) : c("", !0),
                      A === "status" ? (e(), s(_, { key: 1 }, [
                        x ? (e(), S(L, {
                          key: 0,
                          text: "Activo",
                          className: "eit-badge__outline--secondary"
                        })) : c("", !0),
                        x ? c("", !0) : (e(), S(L, {
                          key: 1,
                          text: "Inactivo",
                          className: "eit-badge__outline--gray"
                        }))
                      ], 64)) : c("", !0),
                      h(x) ? (e(), S(L, {
                        key: 2,
                        text: x.name,
                        className: x.className
                      }, null, 8, ["text", "className"])) : c("", !0),
                      f(x) ? (e(), s("span", He, v(x), 1)) : c("", !0)
                    ], 64)) : c("", !0)
                  ]))), 128)),
                  n("td", Ie, [
                    n("div", Ke, [
                      n("a", Ue, [
                        m(w, { icon: "fa-solid fa-ellipsis" })
                      ]),
                      n("ul", Ye, [
                        t.viewRecord ? (e(), s("li", Ge, [
                          n("a", {
                            onClick: (x) => r($),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            m(w, {
                              icon: "fa-regular fa-eye",
                              class: "eit-color--blue"
                            }),
                            k(" " + v(t.viewRecord), 1)
                          ], 8, Ze)
                        ])) : c("", !0),
                        t.editRecord ? (e(), s("li", Je, [
                          n("a", {
                            onClick: (x) => l($),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            m(w, {
                              icon: "fa-solid fa-square-pen",
                              class: "eit-color--yellow"
                            }),
                            k(" " + v(t.editRecord), 1)
                          ], 8, Qe)
                        ])) : c("", !0),
                        t.downloadRecord ? (e(), s("li", We, [
                          n("a", {
                            onClick: (x) => d($),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            m(w, {
                              icon: "fa-solid fa-download",
                              class: "eit-color--blue"
                            }),
                            k(" " + v(t.downloadRecord), 1)
                          ], 8, Xe)
                        ])) : c("", !0),
                        t.deleteRecord || t.enabledDisabledRecord ? (e(), s("li", et, ot)) : c("", !0),
                        t.enabledDisabledRecord ? (e(), s("li", nt, [
                          n("a", {
                            onClick: (x) => p($),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            $.status ? c("", !0) : (e(), s(_, { key: 0 }, [
                              m(w, {
                                icon: "fa-regular fa-circle-check",
                                class: "eit-color--green"
                              }),
                              k(" Habilitar ")
                            ], 64)),
                            $.status ? (e(), s(_, { key: 1 }, [
                              m(w, {
                                icon: "fa-solid fa-ban",
                                class: "eit-color--red"
                              }),
                              k(" Deshabilitar ")
                            ], 64)) : c("", !0)
                          ], 8, st)
                        ])) : c("", !0),
                        t.deleteRecord ? (e(), s("li", lt, [
                          n("a", {
                            onClick: (x) => u(B),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            m(w, {
                              icon: "fa-solid fa-trash",
                              class: "eit-color--red"
                            }),
                            k(" " + v(t.deleteRecord), 1)
                          ], 8, at)
                        ])) : c("", !0)
                      ])
                    ]),
                    n("div", it, [
                      rt,
                      n("div", ct, [
                        t.viewRecord ? (e(), s("a", {
                          key: 0,
                          onClick: (x) => r($),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          m(w, {
                            icon: "fa-regular fa-eye",
                            class: "eit-color--blue"
                          })
                        ], 8, dt)) : c("", !0),
                        t.editRecord ? (e(), s("a", {
                          key: 1,
                          onClick: (x) => l($),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          m(w, {
                            icon: "fa-solid fa-square-pen",
                            class: "eit-color--yellow"
                          })
                        ], 8, ut)) : c("", !0),
                        t.downloadRecord ? (e(), s("a", {
                          key: 2,
                          onClick: (x) => d($),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          m(w, {
                            icon: "fa-solid fa-download",
                            class: "eit-color--blue"
                          })
                        ], 8, ft)) : c("", !0),
                        t.enabledDisabledRecord ? (e(), s(_, { key: 3 }, [
                          $.status ? c("", !0) : E((e(), s("a", {
                            key: 0,
                            onClick: (x) => p($),
                            href: "javascript:",
                            class: "eit-btn eit-btn-outline--gray eit-btn--square"
                          }, [
                            m(w, {
                              icon: "fa-regular fa-circle-check",
                              class: "eit-color--green"
                            })
                          ], 8, mt)), [
                            [U, { content: "Habilitar", theme: "main" }]
                          ]),
                          $.status ? E((e(), s("a", {
                            key: 1,
                            onClick: (x) => p($),
                            href: "javascript:",
                            class: "eit-btn eit-btn-outline--gray eit-btn--square"
                          }, [
                            m(w, {
                              icon: "fa-solid fa-ban",
                              class: "eit-color--red"
                            })
                          ], 8, pt)), [
                            [U, { content: "Deshabilitar", theme: "main" }]
                          ]) : c("", !0)
                        ], 64)) : c("", !0),
                        t.deleteRecord ? (e(), s("a", {
                          key: 4,
                          onClick: (x) => u(B),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          m(w, {
                            icon: "fa-solid fa-trash",
                            class: "eit-color--red"
                          })
                        ], 8, _t)) : c("", !0)
                      ])
                    ])
                  ])
                ]))), 128))
              ])
            ]),
            j(y.$slots, "paginator")
          ], 64)) : c("", !0)
        ])
      ]);
    };
  }
}, yt = { class: "eit-paginator gap-2" }, gt = ["disabled"], vt = { class: "eit-color--text eit-font__size--x1" }, bt = ["disabled"], kt = {
  __name: "PaginationComponent",
  props: {
    data: {
      type: Object,
      required: !0
    }
  },
  emits: ["updatePaginator"],
  setup(t, { emit: i }) {
    const a = t, o = i, r = q(a.data.currentPage), l = () => r.value++, u = () => r.value--, d = () => {
      r.value <= 0 && (r.value = 1), r.value > a.data.finalPage && (r.value = a.data.finalPage);
    }, g = (p) => {
      p.target.select();
    };
    return T(r, () => {
      r.value > 0 && r.value <= a.data.finalPage && o("updatePaginator", r.value);
    }), V(() => {
      a.data && (r.value = a.data.currentPage);
    }), (p, f) => {
      const h = D("font-awesome-icon");
      return e(), s("div", yt, [
        n("button", {
          onClick: u,
          disabled: t.data.currentPage === 1,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          m(h, { icon: "fa-solid fa-chevron-left" })
        ], 8, gt),
        E(n("input", {
          type: "number",
          "onUpdate:modelValue": f[0] || (f[0] = (b) => r.value = b),
          onInput: d,
          onKeyup: I(d, ["enter"]),
          onBlur: d,
          onFocus: g,
          class: "eit-input eit-paginator__input eit-font__size--x1 text-center",
          "aria-label": "Número de página"
        }, null, 544), [
          [
            W,
            r.value,
            void 0,
            { number: !0 }
          ]
        ]),
        n("span", vt, [
          k(" de " + v(t.data.finalPage) + " ", 1),
          t.data.finalPage === 1 ? (e(), s(_, { key: 0 }, [
            k(" página ")
          ], 64)) : c("", !0),
          t.data.finalPage > 1 ? (e(), s(_, { key: 1 }, [
            k(" páginas ")
          ], 64)) : c("", !0)
        ]),
        n("button", {
          onClick: l,
          disabled: t.data.currentPage === t.data.finalPage,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          m(h, { icon: "fa-solid fa-chevron-right" })
        ], 8, bt)
      ]);
    };
  }
}, $t = { class: "row" }, xt = { class: "col-12" }, wt = { class: "d-flex" }, Ct = { class: "flex-shrink-0" }, Rt = { class: "flex-grow-1" }, St = { class: "d-flex" }, jt = { class: "flex-grow-1 d-flex flex-column ms-3" }, qt = { class: "eit-font--primary mb-0" }, Dt = { class: "eit-color--text mb-0" }, Pt = { class: "flex-shrink-0" }, Bt = {
  key: 0,
  class: "dropdown eit-dropdown d-none d-lg-block"
}, Tt = {
  href: "javascript:",
  class: "eit-btn-action",
  "data-bs-toggle": "dropdown"
}, Nt = { class: "dropdown-menu dropdown-custom-menu" }, Lt = {
  key: 0,
  class: "mx-2"
}, At = {
  key: 1,
  class: "mx-2"
}, Et = {
  key: 2,
  class: "m-2"
}, Mt = /* @__PURE__ */ n("div", { class: "eit-border--bottom eit-border--color" }, null, -1), Vt = [
  Mt
], zt = {
  key: 3,
  class: "mx-2"
}, Ot = {
  key: 4,
  class: "mx-2"
}, Ft = { class: "row flex-grow-1" }, Ht = { class: "col-12 d-flex flex-column flex-grow-1" }, It = { class: "eit-slide__content flex-grow-1" }, Kt = {
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
  setup(t, { emit: i }) {
    const a = t, o = i, r = () => {
      o("emitslide");
    }, l = (p) => {
      o("enabledDisabledRecord", p);
    }, u = (p) => {
      o("editRecord", p);
    }, d = (p) => {
      o("deleteRecord", p);
    }, g = (p) => {
      o("downloadRecord", p);
    };
    return (p, f) => {
      const h = D("font-awesome-icon");
      return e(), s("section", {
        class: R(["eit-slide d-flex flex-column", [t.slide && "eit-slide--right", t.slideSmall && "eit-slide--small"]])
      }, [
        a.loading ? (e(), S(K, {
          key: 0,
          type: "detail"
        })) : c("", !0),
        a.loading ? c("", !0) : (e(), s(_, { key: 1 }, [
          n("div", $t, [
            n("div", xt, [
              n("div", wt, [
                n("div", Ct, [
                  n("button", {
                    class: "eit-btn eit-btn--gray eit-btn--square",
                    onClick: r
                  }, [
                    m(h, {
                      icon: "fa-solid fa-angle-right",
                      class: "eit-font__size--x5 d-none d-lg-block"
                    }),
                    m(h, {
                      icon: "fa-solid fa-angle-down",
                      class: "eit-font__size--x5 d-lg-none"
                    })
                  ])
                ]),
                n("div", Rt, [
                  n("div", St, [
                    n("div", jt, [
                      n("h4", qt, [
                        n("strong", null, [
                          j(p.$slots, "title")
                        ])
                      ]),
                      n("p", Dt, [
                        j(p.$slots, "subtitle")
                      ])
                    ]),
                    n("div", Pt, [
                      a.dropdown ? (e(), s("div", Bt, [
                        n("a", Tt, [
                          m(h, { icon: "fa-solid fa-ellipsis" })
                        ]),
                        n("ul", Nt, [
                          a.editRecord ? (e(), s("li", Lt, [
                            n("a", {
                              onClick: f[0] || (f[0] = (b) => u(a.record)),
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              m(h, {
                                icon: "fa-solid fa-square-pen",
                                class: "eit-color--yellow"
                              }),
                              k(" " + v(t.editRecord), 1)
                            ])
                          ])) : c("", !0),
                          a.downloadRecord ? (e(), s("li", At, [
                            n("a", {
                              onClick: f[1] || (f[1] = (b) => g(a.record)),
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              m(h, {
                                icon: "fa-solid fa-download",
                                class: "eit-color--blue"
                              }),
                              k(" " + v(a.downloadRecord), 1)
                            ])
                          ])) : c("", !0),
                          t.deleteRecord || t.enabledDisabledRecord ? (e(), s("li", Et, Vt)) : c("", !0),
                          a.enabledDisabledRecord ? (e(), s("li", zt, [
                            n("a", {
                              onClick: f[2] || (f[2] = (b) => l(t.record)),
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              a.record.status ? c("", !0) : (e(), s(_, { key: 0 }, [
                                m(h, {
                                  icon: "fa-regular fa-circle-check",
                                  class: "eit-color--green"
                                }),
                                k(" Habilitar ")
                              ], 64)),
                              a.record.status ? (e(), s(_, { key: 1 }, [
                                m(h, {
                                  icon: "fa-solid fa-ban",
                                  class: "eit-color--red"
                                }),
                                k(" Deshabilitar ")
                              ], 64)) : c("", !0)
                            ])
                          ])) : c("", !0),
                          a.deleteRecord ? (e(), s("li", Ot, [
                            n("a", {
                              onClick: f[3] || (f[3] = (b) => d(a.record)),
                              class: "dropdown-item dropdown-custom-menu-item eit-color--red",
                              href: "javascript:"
                            }, [
                              m(h, {
                                icon: "fa-solid fa-trash",
                                class: "eit-color--red"
                              }),
                              k(" " + v(a.deleteRecord), 1)
                            ])
                          ])) : c("", !0)
                        ])
                      ])) : c("", !0)
                    ])
                  ])
                ])
              ])
            ])
          ]),
          n("div", Ft, [
            n("div", Ht, [
              n("div", It, [
                j(p.$slots, "component")
              ])
            ])
          ]),
          j(p.$slots, "footer")
        ], 64))
      ], 2);
    };
  }
}, Ut = { class: "d-flex justify-content-between align-items-center" }, Yt = ["onClick"], Gt = {
  key: 0,
  class: "eit-tabs__badge"
}, Zt = { class: "row" }, Jt = { class: "col-12" }, Qt = {
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
  setup(t) {
    const i = t, a = (l) => l < 99 ? l : "+99", o = q(0), r = (l) => {
      o.value = l;
    };
    return (l, u) => (e(), s(_, null, [
      n("div", Ut, [
        n("ul", {
          class: R(`eit-tabs ${i.className}`)
        }, [
          (e(!0), s(_, null, P(t.data, (d, g) => (e(), s("li", {
            key: g,
            class: "eit-tabs__item"
          }, [
            n("a", {
              href: "javascript:",
              onClick: (p) => r(g),
              class: R(["eit-tabs__item__link", o.value === g ? "active" : ""])
            }, [
              k(v(d.name) + " ", 1),
              d.number ? (e(), s("span", Gt, v(a(d.number)), 1)) : c("", !0)
            ], 10, Yt)
          ]))), 128))
        ], 2),
        j(l.$slots, "dropdown")
      ]),
      n("div", Zt, [
        n("div", Jt, [
          j(l.$slots, `tab-${o.value}`)
        ])
      ])
    ], 64));
  }
}, Wt = ["innerHTML"], Xt = {
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
  setup(t) {
    const i = t, a = q("");
    return (async () => {
      const r = `${i.code}`;
      a.value = await re(r, {
        lang: i.lang,
        theme: i.theme
      });
    })(), (r, l) => (e(), s("div", { innerHTML: a.value }, null, 8, Wt));
  }
}, eo = "" + new URL("img/loading.svg", import.meta.url).href, to = { class: "p-3 eit-loading" }, te = {
  __name: "LoadingComponent",
  props: {
    size: {
      type: String,
      required: !1,
      default: "100"
    }
  },
  setup(t) {
    const i = t;
    return (a, o) => (e(), s("div", to, [
      n("img", {
        style: F(`width:${i.size}px`),
        src: eo
      }, null, 4)
    ]));
  }
}, oo = { class: "d-flex justify-content-between align-items-center" }, no = { class: "eit-dialog__body" }, so = { class: "d-flex gap-2 justify-content-end mt-3" }, lo = {
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
    }
  },
  emits: ["emitSubmit", "emitCloseDialog"],
  setup(t, { expose: i, emit: a }) {
    const o = t, r = a, l = q(null), u = () => {
      l.value.showModal(), l.value.classList.add("show");
    }, d = () => {
      l.value.close(), l.value.classList.remove("show"), r("emitCloseDialog");
    }, g = (f) => {
      f.key === "Escape" && d();
    }, p = () => {
      r("emitSubmit");
    };
    return ae(() => {
      document.addEventListener("keyup", g);
    }), i({ showDialog: u, closeDialog: d }), (f, h) => {
      const b = D("font-awesome-icon");
      return e(), s("dialog", {
        ref_key: "dialog",
        ref: l,
        class: R(["eit-dialog", o.className]),
        onKeyup: I(d, ["esc"])
      }, [
        t.loading ? (e(), S(te, {
          key: 0,
          size: "70"
        })) : c("", !0),
        t.loading ? c("", !0) : (e(), s(_, { key: 1 }, [
          n("div", oo, [
            j(f.$slots, "head"),
            n("button", {
              onClick: d,
              class: "eit-dialog__close"
            }, [
              m(b, { icon: ["fas", "xmark"] })
            ])
          ]),
          n("div", no, [
            j(f.$slots, "content")
          ]),
          n("div", so, [
            m(H, {
              onClick: d,
              className: "eit-btn-outline--gray",
              text: "Volver"
            }),
            o.btnSubmit ? (e(), S(H, {
              key: 0,
              className: "eit-btn--primary",
              text: "Guardar",
              loadingText: "Guardando...",
              loading: t.loadingSubmit,
              onEmitEvent: p,
              isDisabled: t.disabledSubmit
            }, null, 8, ["loading", "isDisabled"])) : c("", !0)
          ])
        ], 64))
      ], 34);
    };
  }
}, ao = { class: "row" }, io = { class: "col" }, ro = /* @__PURE__ */ n("h2", { class: "eit-font__size--x4 eit-color--text eit-font__weight--300 eit-border--bottom eit-border--color mb-3" }, [
  /* @__PURE__ */ n("strong", { class: "eit-font__weight--900" }, "Props")
], -1), co = { class: "eit-table--overflow" }, uo = { class: "table eit-table" }, fo = /* @__PURE__ */ n("thead", null, [
  /* @__PURE__ */ n("tr", null, [
    /* @__PURE__ */ n("th", null, "Name"),
    /* @__PURE__ */ n("th", null, "Type"),
    /* @__PURE__ */ n("th", null, "Default")
  ])
], -1), mo = {
  __name: "PropsComponent",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(t) {
    const i = t;
    return (a, o) => (e(), s("div", ao, [
      n("div", io, [
        ro,
        n("div", co, [
          n("table", uo, [
            fo,
            n("tbody", null, [
              (e(!0), s(_, null, P(i.data, (r) => (e(), s("tr", {
                key: r.name
              }, [
                n("td", null, [
                  m(L, {
                    text: r.name,
                    className: "eit-badge__outline--gray"
                  }, null, 8, ["text"])
                ]),
                n("td", null, [
                  n("code", null, v(r.type), 1)
                ]),
                n("td", null, [
                  n("code", null, v(r.default), 1)
                ])
              ]))), 128))
            ])
          ])
        ])
      ])
    ]));
  }
}, po = { class: "eit-progress eit-progress--30" }, _o = { key: 1 }, ho = /* @__PURE__ */ n("span", { class: "spinner-border spinner-border-sm" }, null, -1), yo = {
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
  setup(t) {
    const i = t, a = C(() => parseFloat(i.percentage)), o = C(() => a.value === 0 ? 0 : 100 - a.value);
    return (r, l) => (e(), s("div", po, [
      n("div", {
        class: R(["eit-progress__bar", `eit-progress__bar--${i.type}`]),
        style: F(`width: ${i.percentage}%`)
      }, [
        a.value !== 0 ? (e(), s(_, { key: 0 }, [
          i.percentage > 5 ? (e(), s(_, { key: 0 }, [
            k(v(i.percentage) + "% ", 1)
          ], 64)) : c("", !0)
        ], 64)) : c("", !0)
      ], 6),
      n("div", {
        class: "eit-progress__bar eit-progress__bar--transparent",
        style: F(`width: ${o.value === 0 ? 100 : o.value}%`)
      }, [
        i.loading ? c("", !0) : (e(), s(_, { key: 0 }, [
          o.value === 0 || o.value > 5 ? (e(), s(_, { key: 0 }, [
            k(v(o.value) + "% ", 1)
          ], 64)) : c("", !0)
        ], 64)),
        i.loading ? (e(), s("span", _o, [
          ho,
          k(" Cargando... ")
        ])) : c("", !0)
      ], 4)
    ]));
  }
}, go = { class: "d-flex" }, vo = { class: "flex-shrink-0 eit-toast__left" }, bo = {
  key: "success",
  class: "eit-toast__icon eit-font__size--x7"
}, ko = {
  key: "error",
  class: "eit-toast__icon eit-font__size--x7"
}, $o = {
  key: "warning",
  class: "eit-toast__icon eit-font__size--x7"
}, xo = {
  key: "info",
  class: "eit-toast__icon eit-font__size--x7"
}, wo = { class: "flex-grow-1 ms-3" }, Co = { class: "d-flex" }, Ro = { class: "flex-grow-1 me-3" }, So = { class: "eit-toast__title" }, jo = { class: "eit-toast__text" }, qo = { class: "flex-shrink-0" }, Do = {
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
  setup(t, { expose: i }) {
    const a = t, o = q(!1), r = q("hidden"), l = q(""), u = C(() => ({
      show: o.value,
      hide: !o.value,
      [a.position]: a.position,
      hidden: r.value
    })), d = () => {
      clearTimeout(l.value), o.value = !0, r.value = "", l.value = setTimeout(() => {
        o.value = !1, setTimeout(() => r.value = "hidden", "300");
      }, a.visible);
    }, g = () => {
      o.value = !1, setTimeout(() => r.value = "hidden", "300"), clearTimeout(l.value);
    };
    return i({ handleShowToast: d, handleCloseToast: g }), (p, f) => {
      const h = D("font-awesome-icon");
      return e(), s("div", {
        class: R(["eit-toast__container", u.value])
      }, [
        n("div", {
          class: R(["eit-toast box-shadow", `eit-toast--${a.data.type}`])
        }, [
          n("div", go, [
            n("div", vo, [
              a.type === "success" ? (e(), s("span", bo, [
                m(h, { icon: "fa-solid fa-circle-check" })
              ])) : c("", !0),
              a.type === "error" ? (e(), s("span", ko, [
                m(h, { icon: "fa-solid fa-circle-xmark" })
              ])) : c("", !0),
              a.type === "warning" ? (e(), s("span", $o, [
                m(h, { icon: "fa-solid fa-triangle-exclamation" })
              ])) : c("", !0),
              a.type === "info" ? (e(), s("span", xo, [
                m(h, { icon: "fa-solid fa-circle-info" })
              ])) : c("", !0)
            ]),
            n("div", wo, [
              n("div", Co, [
                n("div", Ro, [
                  n("p", So, [
                    a.data.code ? (e(), s(_, { key: 0 }, [
                      k(v(a.data.code), 1)
                    ], 64)) : c("", !0),
                    k(" " + v(a.data.title), 1)
                  ]),
                  n("p", jo, v(a.data.message), 1)
                ]),
                n("div", qo, [
                  n("a", {
                    onClick: f[0] || (f[0] = (b) => g()),
                    href: "javascript:",
                    class: "eit-toast__close"
                  }, [
                    m(h, { icon: "fa-solid fa-xmark" })
                  ])
                ])
              ])
            ])
          ])
        ], 2)
      ], 2);
    };
  }
}, Po = ["type", "maxlength", "placeholder"], Bo = {
  key: 0,
  class: "eit-label-float"
}, To = {
  key: 1,
  class: "eit-input__display__icon eit-input__display__float-left--icon"
}, No = {
  key: 2,
  class: "eit-input__display__icon eit-input__display__float-right--icon"
}, Lo = {
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
  setup(t, { expose: i, emit: a }) {
    const o = t, r = a, l = q(""), u = C(
      () => o.validation ? o.validation(l.value) : !0
    ), d = C(() => !u.value && o.requiredField && o.error ? "is-invalid" : ""), g = C(() => o.floatLabel ? "" : o.placeHolder), p = C(() => [
      o.floatLabel || o.floatLeft || o.floatRight ? "eit-input__display" : "",
      o.floatLeft ? "eit-input__display__float-left" : "",
      o.floatRight ? "eit-input__display__float-right" : ""
    ]), f = () => {
      r("emitPressEnter");
    }, h = () => {
      l.value = "";
    };
    return T(
      () => o.input,
      (b) => {
        b && (l.value = b);
      }
    ), T(l, () => {
      r("emitValue", u.value ? l.value : "");
    }), V(() => {
      o.inputMask && (l.value = o.inputMask(l.value)), o.submitted && h();
    }), i({ clean: h }), (b, y) => (e(), s("div", {
      class: R(p.value)
    }, [
      E(n("input", {
        autocomplete: "off",
        class: R(["form-control eit-input", d.value]),
        type: t.inputType,
        "onUpdate:modelValue": y[0] || (y[0] = (N) => l.value = N),
        maxlength: o.maxLength,
        onKeypress: y[1] || (y[1] = (N) => o.keyPress && o.keyPress(N)),
        placeholder: g.value,
        onKeyup: I(f, ["enter"])
      }, null, 42, Po), [
        [
          ie,
          l.value,
          void 0,
          { trim: !0 }
        ]
      ]),
      o.floatLabel ? (e(), s("label", Bo, v(o.floatLabel), 1)) : c("", !0),
      o.floatLeft ? (e(), s("span", To, [
        j(b.$slots, "float-left")
      ])) : c("", !0),
      o.floatRight ? (e(), s("span", No, [
        j(b.$slots, "float-right")
      ])) : c("", !0)
    ], 2));
  }
}, Ao = {
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
  setup(t, { expose: i, emit: a }) {
    const o = t, r = a, l = q(null), u = C(
      () => o.validation ? o.validation(l.value) : !0
    ), d = C(() => !u.value && o.requiredField && o.error ? "is-invalid" : ""), g = () => Array.isArray(l.value) ? o.data.filter((b) => !l.value.some((y) => y.id === b.id)) : o.data, p = () => l.value ? o.data.filter((b) => b.id !== l.value.id) : o.data, f = C(() => o.multiple ? g() : p());
    T(
      () => o.selected,
      (b) => {
        b && (l.value = b);
      },
      { immediate: !0 }
    ), T(l, () => {
      r("emitValue", u.value ? l.value : "");
    }), V(() => {
      o.submitted && h();
    });
    const h = () => {
      l.value = o.multiple ? [] : null;
    };
    return i({ clean: h }), (b, y) => {
      const N = D("v-select");
      return e(), S(N, {
        options: f.value,
        modelValue: l.value,
        "onUpdate:modelValue": y[0] || (y[0] = (w) => l.value = w),
        label: t.labelCustom,
        multiple: t.multiple,
        placeholder: t.placeHolder,
        class: R(["eit-select-component", d.value]),
        clearable: t.clearable,
        disabled: o.isDisabled
      }, {
        "no-options": O(() => [
          k(" No hay más resultados. ")
        ]),
        _: 1
      }, 8, ["options", "modelValue", "label", "multiple", "placeholder", "class", "clearable", "disabled"]);
    };
  }
}, Eo = ["maxlength", "placeholder"], Mo = {
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
  setup(t, { expose: i, emit: a }) {
    const o = t, r = a, l = q(null), u = q(""), d = C(() => o.validation && o.validation(u.value)), g = C(() => !d.value && o.requiredField && o.error ? "is-invalid" : ""), p = () => {
      u.value = "";
    };
    return T(
      () => o.input,
      (f) => {
        f && (u.value = f);
      }
    ), T(u, () => {
      l.value.style.height = "50px", l.value.style.height = `${l.value.scrollHeight}px`, r("emitValue", d.value ? u.value : "");
    }), V(() => {
      o.submitted && p();
    }), i({ clean: p }), (f, h) => E((e(), s("textarea", {
      ref_key: "textarea",
      ref: l,
      "onUpdate:modelValue": h[0] || (h[0] = (b) => u.value = b),
      maxlength: t.maxLength,
      autocomplete: "off",
      class: R(["form-control eit-textarea eit-textarea-resize", g.value]),
      placeholder: t.placeHolder
    }, null, 10, Eo)), [
      [
        W,
        u.value,
        void 0,
        { trim: !0 }
      ]
    ]);
  }
}, Q = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlertComponent: ee,
  BadgeComponent: L,
  BreadcrumbComponent: he,
  ButtonComponent: H,
  DetailComponent: Kt,
  DialogComponent: lo,
  HighlightComponent: Xt,
  InputComponent: Lo,
  LoadingComponent: te,
  PaginationComponent: kt,
  ProgressBarComponent: yo,
  PropsComponent: mo,
  SelectComponent: Ao,
  SkeletonComponent: K,
  TabComponent: Qt,
  TableComponent: ht,
  TextareaResizeComponent: Mo,
  ToastComponent: Do
}, Symbol.toStringTag, { value: "Module" }));
function Vo(t, i) {
  const a = X(), o = C(() => a.meta.requiresAuth ? t.config.darkTheme ? i.logotipo.logo_dark : i.logotipo.logo_light : i.platformDarkTheme ? i.logotipo.logo_dark : i.logotipo.logo_light), r = C(() => t.config.darkTheme ? i.logotipo.isotipo_dark : i.logotipo.isotipo_light);
  return { logotipo: o, isotipo: r };
}
const Wo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useLogos: Vo
}, Symbol.toStringTag, { value: "Module" }));
function zo() {
  function t(l) {
    return !(l == null || typeof l == "string" && l.trim() === "" || typeof l == "object" && Object.keys(l).length === 0 || Array.isArray(l) && l.length === 0);
  }
  function i(l) {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(l);
  }
  function a(l) {
    if (l.length >= 11 && l.length <= 12 && /[.-]/.test(l)) return !0;
    if (l.length < 11) return !1;
  }
  function o(l) {
    const u = l.length >= 8, d = /[A-Z]/.test(l), g = /[a-z]/.test(l), p = /[0-9]/.test(l), f = /[!@#$%^&*(),.?":{}|<>]/.test(l);
    return u && d && g && p && f;
  }
  function r(l) {
    return /^\+\d{3} \d{4}-\d{4}$/.test(l);
  }
  return {
    validateDefault: t,
    validateEmail: i,
    validateRut: a,
    validatePassword: o,
    validatePhone: r
  };
}
function Oo() {
  function t(o) {
    return o.replace(/[.-]/g, "").replace(/^(\d{1,2})(\d{3})(\d{3})(\w{1})$/, "$1.$2.$3-$4");
  }
  function i(o) {
    return o.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  function a(o) {
    return o.replace(/\D/g, "").replace(/^(\d{3})(\d{4})(\d{4})$/, "+$1 $2-$3");
  }
  return { inputMaskRut: t, inputMaskCurrency: i, inputMaskPhone: a };
}
function Fo() {
  function t(i) {
    let a = String.fromCharCode(i.keyCode);
    if (/^[0-9Kk.-]/.test(a)) return !0;
    i.preventDefault();
  }
  return { keyPressRut: t };
}
function Ho() {
  function t(i) {
    const { sort: a, data: o } = i, { keys: r, index: l, asc: u } = a, d = r[l];
    return o.sort((g, p) => {
      let f = g[d], h = p[d];
      return typeof f == "object" && f !== null && (f = f.name, h = h.name), f === h ? 0 : (f > h ? 1 : -1) * (u ? 1 : -1);
    }), o;
  }
  return { sortTable: t };
}
M.extend(ce);
M.locale("es");
function Io() {
  function t(r) {
    return M(r).format("DD/MM/YYYY");
  }
  function i(r) {
    return M(r).fromNow();
  }
  function a(r) {
    let l = r.replace(/[^0-9kK]/g, ""), u = l.slice(0, -1).replace(/\B(?=(\d{3})+(?!\d))/g, "."), d = l.slice(-1).toUpperCase();
    return `${u}-${d}`;
  }
  function o(r) {
    return r === null ? "" : r.charAt(0).toUpperCase() + r.slice(1).toLowerCase();
  }
  return { formatDate: t, formatDateAgo: i, formatRut: a, formatCapitalize: o };
}
function Ko() {
  function t(i, a) {
    return a ? {
      content: i,
      theme: "main",
      placement: "right",
      appendTo: "parent"
    } : { content: i, theme: "main", placement: "right" };
  }
  return { handleTooltip: t };
}
const Xo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useFormat: Io,
  useInputMask: Oo,
  useKeypress: Fo,
  useTable: Ho,
  useTooltip: Ko,
  useValidator: zo
}, Symbol.toStringTag, { value: "Module" })), en = {
  install(t) {
    Object.keys(Q).forEach((i) => {
      t.component(i, Q[i]);
    });
  }
};
export {
  Wo as composables,
  en as default,
  Xo as utils
};
