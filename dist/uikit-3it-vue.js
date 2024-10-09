import { computed as C, resolveComponent as D, openBlock as t, createElementBlock as s, normalizeClass as S, Fragment as _, createTextVNode as k, toDisplayString as v, createCommentVNode as c, createBlock as R, createElementVNode as n, createVNode as m, withCtx as F, renderList as B, renderSlot as j, mergeProps as se, createStaticVNode as le, resolveDirective as ae, withDirectives as A, ref as q, watch as T, watchEffect as V, withKeys as K, vModelText as X, onMounted as ie, unref as O, normalizeStyle as H, vModelDynamic as re } from "vue";
import { useRoute as ee } from "vue-router";
import { codeToHtml as ce } from "shiki";
import E from "dayjs";
import de from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";
const ue = ["disabled"], fe = /* @__PURE__ */ n("div", { class: "spinner-border spinner-border-sm me-1" }, null, -1), I = {
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
  setup(e, { emit: i }) {
    const a = e, o = i, r = C(() => ["eit-btn", `${a.className}`]), l = (u) => {
      o("emitEvent", u);
    };
    return (u, d) => {
      const g = D("font-awesome-icon");
      return t(), s("button", {
        onClick: d[0] || (d[0] = (p) => l(p)),
        class: S([r.value, "d-flex align-items-center justify-content-center gap-1"]),
        disabled: a.isDisabled
      }, [
        a.loading ? (t(), s(_, { key: 0 }, [
          fe,
          k(" " + v(a.loadingText), 1)
        ], 64)) : c("", !0),
        a.loading ? c("", !0) : (t(), s(_, { key: 1 }, [
          a.icon ? (t(), R(g, {
            key: 0,
            icon: a.icon
          }, null, 8, ["icon"])) : c("", !0),
          k(" " + v(e.text), 1)
        ], 64))
      ], 10, ue);
    };
  }
}, me = { "aria-label": "breadcrumb" }, pe = { class: "eit-breadcrumb" }, _e = /* @__PURE__ */ n("span", { class: "px-2 eit-color--text-soft" }, "/", -1), he = {
  key: 1,
  class: "eit-color--text-soft"
}, ye = {
  __name: "BreadcrumbComponent",
  setup(e) {
    const i = ee(), a = C(() => {
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
      return t(), s("nav", me, [
        n("ul", pe, [
          n("li", null, [
            m(u, {
              to: "/",
              class: "eit-color--text-soft eit-color--text-soft--link"
            }, {
              default: F(() => [
                m(l, { icon: "fa-solid fa-house" })
              ]),
              _: 1
            }),
            _e
          ]),
          (t(!0), s(_, null, B(a.value, (d, g) => (t(), s("li", {
            key: g,
            class: "eit-breadcrumb__item"
          }, [
            j(o.$slots, d.name, se({ ref_for: !0 }, d), () => [
              d.last ? (t(), s("span", he, v(d.title), 1)) : (t(), R(u, {
                key: 0,
                to: d.path,
                class: "eit-color--text eit-color--text--link eit-color--underline"
              }, {
                default: F(() => [
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
}, ge = ["innerHTML"], L = {
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
    const i = e;
    return (a, o) => {
      const r = D("font-awesome-icon");
      return t(), s("span", {
        key: `badge-${i.text}`,
        class: S(`eit-badge ${i.className}`)
      }, [
        i.icon ? (t(), R(r, {
          key: 0,
          icon: i.icon,
          class: "me-1"
        }, null, 8, ["icon"])) : c("", !0),
        n("span", {
          innerHTML: i.text
        }, null, 8, ge)
      ], 2);
    };
  }
}, ve = {
  key: 0,
  class: "table eit-table eit-table-responsive"
}, be = {
  key: 0,
  class: "eit-skeleton__table-first-td"
}, ke = /* @__PURE__ */ n("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "80%" }
}, null, -1), $e = [
  ke
], xe = { key: 1 }, we = /* @__PURE__ */ n("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "60%" }
}, null, -1), Ce = [
  we
], Se = {
  key: 0,
  class: "eit-skeleton__table-first-td"
}, Re = /* @__PURE__ */ n("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), je = [
  Re
], qe = { key: 1 }, De = /* @__PURE__ */ n("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), Be = [
  De
], Pe = /* @__PURE__ */ le('<div class="row"><div class="col-12"><div class="d-flex"><div class="flex-shrink-0"><div class="eit-skeleton eit-skeleton__btn-square"></div></div><div class="flex-grow-1 ms-3"><div class="d-flex"><div class="flex-grow-1 ms-3"><div class="eit-skeleton eit-skeleton__title my-2" style="width:40%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div></div><div class="flex-shrink-0"><div class="eit-skeleton eit-skeleton__text my-2" style="width:30px;"></div></div></div></div></div></div></div><div class="row flex-grow-1"><div class="col-12 d-flex flex-column flex-grow-1"><div class="eit-slide__content flex-grow-1"><div class="mt-5"><div class="col-12"><h5 class="mb-3"><div class="eit-skeleton eit-skeleton__title my-2" style="width:20%;"></div></h5><ul class="list-unstyled"><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:40%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:20%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:20%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li></ul></div></div></div></div></div>', 2), U = {
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
    const i = e;
    return (a, o) => (t(), s(_, null, [
      i.type === "table" ? (t(), s("table", ve, [
        n("thead", null, [
          n("tr", null, [
            (t(!0), s(_, null, B(i.table.column, (r) => (t(), s(_, { key: r }, [
              r === 1 ? (t(), s("th", be, $e)) : c("", !0),
              r > 1 ? (t(), s("th", xe, Ce)) : c("", !0)
            ], 64))), 128))
          ])
        ]),
        n("tbody", null, [
          (t(!0), s(_, null, B(i.table.row, (r) => (t(), s("tr", { key: r }, [
            (t(!0), s(_, null, B(i.table.column, (l) => (t(), s(_, { key: l }, [
              l === 1 ? (t(), s("td", Se, je)) : c("", !0),
              l > 1 ? (t(), s("td", qe, Be)) : c("", !0)
            ], 64))), 128))
          ]))), 128))
        ])
      ])) : c("", !0),
      i.type === "detail" ? (t(), s(_, { key: 1 }, [
        Pe
      ], 64)) : c("", !0)
    ], 64));
  }
}, Te = { class: "d-flex align-items-center" }, Ne = { class: "flex-shrink-0 d-flex align-items-center eit-alert__icon me-2" }, Le = ["innerHTML"], te = {
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
    const i = e;
    return (a, o) => {
      const r = D("font-awesome-icon");
      return t(), s("div", {
        class: S(`eit-alert eit-alert--${i.type} ${i.animation.active ? "eit-alert--animation" : "eit-alert--default"} ${i.animation.show ? "eit-alert--animation--show" : ""}`)
      }, [
        n("div", Te, [
          n("div", Ne, [
            m(r, {
              icon: i.icon,
              class: S(e.iconClass)
            }, null, 8, ["icon", "class"])
          ]),
          n("div", {
            class: "flex-grow-1 eit-alert__text",
            innerHTML: i.message
          }, null, 8, Le)
        ])
      ], 2);
    };
  }
}, Me = { class: "row" }, Ae = { class: "col-12" }, Ee = { class: "table eit-table eit-table-responsive" }, Ve = ["onClick"], ze = /* @__PURE__ */ n("th", {
  scope: "col",
  class: "text-center"
}, "Acciones", -1), Oe = { class: "pe-3 d-lg-none" }, Fe = ["onClick"], He = {
  key: 0,
  class: "d-flex flex-wrap gap-1"
}, Ie = {
  key: 3,
  class: "eit-table__string"
}, Ke = { class: "text-center" }, Ue = { class: "dropdown eit-dropdown d-none d-lg-block" }, Ye = {
  href: "javascript:",
  class: "eit-btn-action",
  "data-bs-toggle": "dropdown"
}, Ge = { class: "dropdown-menu dropdown-custom-menu" }, Ze = {
  key: 0,
  class: "mx-2"
}, Je = ["onClick"], Qe = {
  key: 1,
  class: "mx-2"
}, We = ["onClick"], Xe = {
  key: 2,
  class: "mx-2"
}, et = ["onClick"], tt = {
  key: 3,
  class: "m-2"
}, ot = /* @__PURE__ */ n("div", { class: "eit-border--bottom eit-border--color" }, null, -1), nt = [
  ot
], st = {
  key: 4,
  class: "mx-2"
}, lt = ["onClick"], at = {
  key: 5,
  class: "mx-2"
}, it = ["onClick"], rt = { class: "d-flex w-100 justify-content-between align-items-center d-lg-none text-end" }, ct = /* @__PURE__ */ n("strong", null, "Acciones:", -1), dt = { class: "d-flex flex-wrap gap-2 ms-3" }, ut = ["onClick"], ft = ["onClick"], mt = ["onClick"], pt = ["onClick"], _t = ["onClick"], ht = ["onClick"], yt = {
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
  setup(e, { emit: i }) {
    const a = e, o = i, r = (y) => {
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
      var G, Z, J, Q;
      const w = D("font-awesome-icon"), Y = ae("tippy");
      return t(), s("div", Me, [
        n("div", Ae, [
          e.loading ? (t(), R(U, {
            key: 0,
            type: "table",
            table: { row: (G = e.skeleton) == null ? void 0 : G.row, column: (Z = e.skeleton) == null ? void 0 : Z.column }
          }, null, 8, ["table"])) : c("", !0),
          !e.loading && !((J = e.data) != null && J.length) ? (t(), R(te, {
            key: 1,
            ref: "alert",
            class: "mb-3",
            type: "info",
            icon: "fa-solid fa-info",
            message: "<strong>No hay resultados</strong> para tu búsqueda."
          }, null, 512)) : c("", !0),
          !e.loading && ((Q = e.data) != null && Q.length) ? (t(), s(_, { key: 2 }, [
            n("table", Ee, [
              n("thead", null, [
                n("tr", null, [
                  (t(!0), s(_, null, B(e.columns, ($, P) => (t(), s("th", {
                    key: `column-${P}`,
                    scope: "col"
                  }, [
                    n("a", {
                      onClick: (x) => g(P),
                      href: "javascript:",
                      class: "d-flex justify-content-between"
                    }, [
                      k(v($) + " ", 1),
                      e.sort.index === P ? (t(), s("span", {
                        key: `icono-${$}`,
                        class: "d-flex ms-2 eit-color--text"
                      }, [
                        e.sort.asc ? c("", !0) : (t(), s("span", {
                          key: `down-${$}`
                        }, [
                          m(w, { icon: "fa-solid fa-sort-down align-baseline" })
                        ])),
                        e.sort.asc ? (t(), s("span", {
                          key: `up-${$}`
                        }, [
                          m(w, { icon: "fa-solid fa-sort-up align-baseline" })
                        ])) : c("", !0)
                      ])) : (t(), s("span", {
                        key: `key-${$}`
                      }, [
                        m(w, { icon: "fa-solid fa-sort" })
                      ]))
                    ], 8, Ve)
                  ]))), 128)),
                  ze
                ])
              ]),
              n("tbody", null, [
                (t(!0), s(_, null, B(e.data, ($, P) => (t(), s("tr", {
                  key: `row-${P}`
                }, [
                  (t(!0), s(_, null, B($, (x, M) => (t(), s("td", {
                    key: `value-${M}`
                  }, [
                    n("strong", Oe, v(e.columns[Object.keys($).indexOf(M)]) + ":", 1),
                    Object.keys($)[e.columnLink] === M ? (t(), s(_, { key: 0 }, [
                      e.viewRecord ? (t(), s("a", {
                        key: 0,
                        onClick: (z) => r($),
                        href: "javascript:",
                        class: "eit-table__link"
                      }, v(x), 9, Fe)) : c("", !0),
                      e.viewRecord ? c("", !0) : (t(), s(_, { key: 1 }, [
                        k(v(x), 1)
                      ], 64))
                    ], 64)) : c("", !0),
                    Object.keys($)[e.columnLink] !== M ? (t(), s(_, { key: 1 }, [
                      b(x) ? (t(), s("div", He, [
                        (t(!0), s(_, null, B(x, (z, ne) => (t(), s("span", {
                          key: `value-array-${ne}`,
                          class: "d-flex flex-wrap gap-1"
                        }, [
                          m(L, {
                            text: z.name,
                            className: z.className
                          }, null, 8, ["text", "className"])
                        ]))), 128))
                      ])) : c("", !0),
                      M === "status" ? (t(), s(_, { key: 1 }, [
                        x ? (t(), R(L, {
                          key: 0,
                          text: "Activo",
                          className: "eit-badge__outline--secondary"
                        })) : c("", !0),
                        x ? c("", !0) : (t(), R(L, {
                          key: 1,
                          text: "Inactivo",
                          className: "eit-badge__outline--gray"
                        }))
                      ], 64)) : c("", !0),
                      h(x) ? (t(), R(L, {
                        key: 2,
                        text: x.name,
                        className: x.className
                      }, null, 8, ["text", "className"])) : c("", !0),
                      f(x) ? (t(), s("span", Ie, v(x), 1)) : c("", !0)
                    ], 64)) : c("", !0)
                  ]))), 128)),
                  n("td", Ke, [
                    n("div", Ue, [
                      n("a", Ye, [
                        m(w, { icon: "fa-solid fa-ellipsis" })
                      ]),
                      n("ul", Ge, [
                        e.viewRecord ? (t(), s("li", Ze, [
                          n("a", {
                            onClick: (x) => r($),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            m(w, {
                              icon: "fa-regular fa-eye",
                              class: "eit-color--blue"
                            }),
                            k(" " + v(e.viewRecord), 1)
                          ], 8, Je)
                        ])) : c("", !0),
                        e.editRecord ? (t(), s("li", Qe, [
                          n("a", {
                            onClick: (x) => l($),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            m(w, {
                              icon: "fa-solid fa-square-pen",
                              class: "eit-color--yellow"
                            }),
                            k(" " + v(e.editRecord), 1)
                          ], 8, We)
                        ])) : c("", !0),
                        e.downloadRecord ? (t(), s("li", Xe, [
                          n("a", {
                            onClick: (x) => d($),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            m(w, {
                              icon: "fa-solid fa-download",
                              class: "eit-color--blue"
                            }),
                            k(" " + v(e.downloadRecord), 1)
                          ], 8, et)
                        ])) : c("", !0),
                        e.deleteRecord || e.enabledDisabledRecord ? (t(), s("li", tt, nt)) : c("", !0),
                        e.enabledDisabledRecord ? (t(), s("li", st, [
                          n("a", {
                            onClick: (x) => p($),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            $.status ? c("", !0) : (t(), s(_, { key: 0 }, [
                              m(w, {
                                icon: "fa-regular fa-circle-check",
                                class: "eit-color--green"
                              }),
                              k(" Habilitar ")
                            ], 64)),
                            $.status ? (t(), s(_, { key: 1 }, [
                              m(w, {
                                icon: "fa-solid fa-ban",
                                class: "eit-color--red"
                              }),
                              k(" Deshabilitar ")
                            ], 64)) : c("", !0)
                          ], 8, lt)
                        ])) : c("", !0),
                        e.deleteRecord ? (t(), s("li", at, [
                          n("a", {
                            onClick: (x) => u(P),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            m(w, {
                              icon: "fa-solid fa-trash",
                              class: "eit-color--red"
                            }),
                            k(" " + v(e.deleteRecord), 1)
                          ], 8, it)
                        ])) : c("", !0)
                      ])
                    ]),
                    n("div", rt, [
                      ct,
                      n("div", dt, [
                        e.viewRecord ? (t(), s("a", {
                          key: 0,
                          onClick: (x) => r($),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          m(w, {
                            icon: "fa-regular fa-eye",
                            class: "eit-color--blue"
                          })
                        ], 8, ut)) : c("", !0),
                        e.editRecord ? (t(), s("a", {
                          key: 1,
                          onClick: (x) => l($),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          m(w, {
                            icon: "fa-solid fa-square-pen",
                            class: "eit-color--yellow"
                          })
                        ], 8, ft)) : c("", !0),
                        e.downloadRecord ? (t(), s("a", {
                          key: 2,
                          onClick: (x) => d($),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          m(w, {
                            icon: "fa-solid fa-download",
                            class: "eit-color--blue"
                          })
                        ], 8, mt)) : c("", !0),
                        e.enabledDisabledRecord ? (t(), s(_, { key: 3 }, [
                          $.status ? c("", !0) : A((t(), s("a", {
                            key: 0,
                            onClick: (x) => p($),
                            href: "javascript:",
                            class: "eit-btn eit-btn-outline--gray eit-btn--square"
                          }, [
                            m(w, {
                              icon: "fa-regular fa-circle-check",
                              class: "eit-color--green"
                            })
                          ], 8, pt)), [
                            [Y, { content: "Habilitar", theme: "main" }]
                          ]),
                          $.status ? A((t(), s("a", {
                            key: 1,
                            onClick: (x) => p($),
                            href: "javascript:",
                            class: "eit-btn eit-btn-outline--gray eit-btn--square"
                          }, [
                            m(w, {
                              icon: "fa-solid fa-ban",
                              class: "eit-color--red"
                            })
                          ], 8, _t)), [
                            [Y, { content: "Deshabilitar", theme: "main" }]
                          ]) : c("", !0)
                        ], 64)) : c("", !0),
                        e.deleteRecord ? (t(), s("a", {
                          key: 4,
                          onClick: (x) => u(P),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          m(w, {
                            icon: "fa-solid fa-trash",
                            class: "eit-color--red"
                          })
                        ], 8, ht)) : c("", !0)
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
}, gt = { class: "eit-paginator gap-2" }, vt = ["disabled"], bt = { class: "eit-color--text eit-font__size--x1" }, kt = ["disabled"], $t = {
  __name: "PaginationComponent",
  props: {
    data: {
      type: Object,
      required: !0
    }
  },
  emits: ["updatePaginator"],
  setup(e, { emit: i }) {
    const a = e, o = i, r = q(a.data.currentPage), l = () => r.value++, u = () => r.value--, d = () => {
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
      return t(), s("div", gt, [
        n("button", {
          onClick: u,
          disabled: e.data.currentPage === 1,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          m(h, { icon: "fa-solid fa-chevron-left" })
        ], 8, vt),
        A(n("input", {
          type: "number",
          "onUpdate:modelValue": f[0] || (f[0] = (b) => r.value = b),
          onInput: d,
          onKeyup: K(d, ["enter"]),
          onBlur: d,
          onFocus: g,
          class: "eit-input eit-paginator__input eit-font__size--x1 text-center",
          "aria-label": "Número de página"
        }, null, 544), [
          [
            X,
            r.value,
            void 0,
            { number: !0 }
          ]
        ]),
        n("span", bt, [
          k(" de " + v(e.data.finalPage) + " ", 1),
          e.data.finalPage === 1 ? (t(), s(_, { key: 0 }, [
            k(" página ")
          ], 64)) : c("", !0),
          e.data.finalPage > 1 ? (t(), s(_, { key: 1 }, [
            k(" páginas ")
          ], 64)) : c("", !0)
        ]),
        n("button", {
          onClick: l,
          disabled: e.data.currentPage === e.data.finalPage,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          m(h, { icon: "fa-solid fa-chevron-right" })
        ], 8, kt)
      ]);
    };
  }
}, xt = { class: "row" }, wt = { class: "col-12" }, Ct = { class: "d-flex" }, St = { class: "flex-shrink-0" }, Rt = { class: "flex-grow-1" }, jt = { class: "d-flex" }, qt = { class: "flex-grow-1 d-flex flex-column ms-3" }, Dt = { class: "eit-font--primary mb-0" }, Bt = { class: "eit-color--text mb-0" }, Pt = { class: "flex-shrink-0" }, Tt = {
  key: 0,
  class: "dropdown eit-dropdown d-none d-lg-block"
}, Nt = {
  href: "javascript:",
  class: "eit-btn-action",
  "data-bs-toggle": "dropdown"
}, Lt = { class: "dropdown-menu dropdown-custom-menu" }, Mt = {
  key: 0,
  class: "mx-2"
}, At = {
  key: 1,
  class: "mx-2"
}, Et = {
  key: 2,
  class: "m-2"
}, Vt = /* @__PURE__ */ n("div", { class: "eit-border--bottom eit-border--color" }, null, -1), zt = [
  Vt
], Ot = {
  key: 3,
  class: "mx-2"
}, Ft = {
  key: 4,
  class: "mx-2"
}, Ht = { class: "row flex-grow-1" }, It = { class: "col-12 d-flex flex-column flex-grow-1" }, Kt = { class: "eit-slide__content flex-grow-1" }, Ut = {
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
  setup(e, { emit: i }) {
    const a = e, o = i, r = () => {
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
      return t(), s("section", {
        class: S(["eit-slide d-flex flex-column", [e.slide && "eit-slide--right", e.slideSmall && "eit-slide--small"]])
      }, [
        a.loading ? (t(), R(U, {
          key: 0,
          type: "detail"
        })) : c("", !0),
        a.loading ? c("", !0) : (t(), s(_, { key: 1 }, [
          n("div", xt, [
            n("div", wt, [
              n("div", Ct, [
                n("div", St, [
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
                  n("div", jt, [
                    n("div", qt, [
                      n("h4", Dt, [
                        n("strong", null, [
                          j(p.$slots, "title")
                        ])
                      ]),
                      n("p", Bt, [
                        j(p.$slots, "subtitle")
                      ])
                    ]),
                    n("div", Pt, [
                      a.dropdown ? (t(), s("div", Tt, [
                        n("a", Nt, [
                          m(h, { icon: "fa-solid fa-ellipsis" })
                        ]),
                        n("ul", Lt, [
                          a.editRecord ? (t(), s("li", Mt, [
                            n("a", {
                              onClick: f[0] || (f[0] = (b) => u(a.record)),
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              m(h, {
                                icon: "fa-solid fa-square-pen",
                                class: "eit-color--yellow"
                              }),
                              k(" " + v(e.editRecord), 1)
                            ])
                          ])) : c("", !0),
                          a.downloadRecord ? (t(), s("li", At, [
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
                          e.deleteRecord || e.enabledDisabledRecord ? (t(), s("li", Et, zt)) : c("", !0),
                          a.enabledDisabledRecord ? (t(), s("li", Ot, [
                            n("a", {
                              onClick: f[2] || (f[2] = (b) => l(e.record)),
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              a.record.status ? c("", !0) : (t(), s(_, { key: 0 }, [
                                m(h, {
                                  icon: "fa-regular fa-circle-check",
                                  class: "eit-color--green"
                                }),
                                k(" Habilitar ")
                              ], 64)),
                              a.record.status ? (t(), s(_, { key: 1 }, [
                                m(h, {
                                  icon: "fa-solid fa-ban",
                                  class: "eit-color--red"
                                }),
                                k(" Deshabilitar ")
                              ], 64)) : c("", !0)
                            ])
                          ])) : c("", !0),
                          a.deleteRecord ? (t(), s("li", Ft, [
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
          n("div", Ht, [
            n("div", It, [
              n("div", Kt, [
                j(p.$slots, "component")
              ])
            ])
          ]),
          j(p.$slots, "footer")
        ], 64))
      ], 2);
    };
  }
}, Yt = { class: "d-flex justify-content-between align-items-center" }, Gt = ["onClick"], Zt = {
  key: 0,
  class: "eit-tabs__badge"
}, Jt = { class: "row" }, Qt = { class: "col-12" }, Wt = {
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
    const i = e, a = (l) => l < 99 ? l : "+99", o = q(0), r = (l) => {
      o.value = l;
    };
    return (l, u) => (t(), s(_, null, [
      n("div", Yt, [
        n("ul", {
          class: S(`eit-tabs ${i.className}`)
        }, [
          (t(!0), s(_, null, B(e.data, (d, g) => (t(), s("li", {
            key: g,
            class: "eit-tabs__item"
          }, [
            n("a", {
              href: "javascript:",
              onClick: (p) => r(g),
              class: S(["eit-tabs__item__link", o.value === g ? "active" : ""])
            }, [
              k(v(d.name) + " ", 1),
              d.number ? (t(), s("span", Zt, v(a(d.number)), 1)) : c("", !0)
            ], 10, Gt)
          ]))), 128))
        ], 2),
        j(l.$slots, "dropdown")
      ]),
      n("div", Jt, [
        n("div", Qt, [
          j(l.$slots, `tab-${o.value}`)
        ])
      ])
    ], 64));
  }
}, Xt = ["innerHTML"], eo = {
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
    const i = e, a = q("");
    return (async () => {
      const r = `${i.code}`;
      a.value = await ce(r, {
        lang: i.lang,
        theme: i.theme
      });
    })(), (r, l) => (t(), s("div", { innerHTML: a.value }, null, 8, Xt));
  }
}, to = { class: "eit-dialog__content" }, oo = { class: "d-flex justify-content-between align-items-center" }, no = { class: "d-flex gap-2 justify-content-end mt-3" }, so = {
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
    }
  },
  emits: [
    "emitSubmit",
    "emitCloseDialog"
  ],
  setup(e, { expose: i, emit: a }) {
    const o = e, r = a, l = q(null), u = () => {
      l.value.showModal(), l.value.classList.add("show");
    }, d = () => {
      l.value.close(), l.value.classList.remove("show"), r("emitCloseDialog");
    }, g = (f) => {
      f.key === "Escape" && d();
    }, p = () => {
      r("emitSubmit");
    };
    return ie(() => {
      document.addEventListener("keyup", g);
    }), i({ showDialog: u, closeDialog: d }), (f, h) => {
      const b = D("font-awesome-icon");
      return t(), s("dialog", {
        ref_key: "dialog",
        ref: l,
        class: S(["eit-dialog", o.className]),
        onKeyup: K(d, ["esc"])
      }, [
        n("div", to, [
          e.loading ? (t(), R(O(oe), {
            key: 0,
            size: "70"
          })) : c("", !0),
          e.loading ? c("", !0) : (t(), s(_, { key: 1 }, [
            n("div", oo, [
              j(f.$slots, "head"),
              n("button", {
                onClick: d,
                class: "eit-dialog__close"
              }, [
                m(b, { icon: ["fas", "xmark"] })
              ])
            ]),
            n("div", {
              class: S(`eit-dialog__body ${e.scrollable ? "eit-dialog__body--scroll" : ""}`)
            }, [
              j(f.$slots, "content")
            ], 2),
            n("div", no, [
              m(O(I), {
                onClick: d,
                className: "eit-btn-outline--gray",
                text: "Volver"
              }),
              o.btnSubmit ? (t(), R(O(I), {
                key: 0,
                className: "eit-btn--primary",
                text: "Guardar",
                loadingText: "Guardando...",
                loading: e.loadingSubmit,
                onEmitEvent: p,
                isDisabled: e.disabledSubmit
              }, null, 8, ["loading", "isDisabled"])) : c("", !0)
            ])
          ], 64))
        ])
      ], 34);
    };
  }
}, lo = { class: "row" }, ao = { class: "col" }, io = /* @__PURE__ */ n("h2", { class: "eit-font__size--x4 eit-color--text eit-font__weight--300 eit-border--bottom eit-border--color mb-3" }, [
  /* @__PURE__ */ n("strong", { class: "eit-font__weight--900" }, "Props")
], -1), ro = { class: "eit-table--overflow" }, co = { class: "table eit-table" }, uo = /* @__PURE__ */ n("thead", null, [
  /* @__PURE__ */ n("tr", null, [
    /* @__PURE__ */ n("th", null, "Name"),
    /* @__PURE__ */ n("th", null, "Type"),
    /* @__PURE__ */ n("th", null, "Default")
  ])
], -1), fo = {
  __name: "PropsComponent",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const i = e;
    return (a, o) => (t(), s("div", lo, [
      n("div", ao, [
        io,
        n("div", ro, [
          n("table", co, [
            uo,
            n("tbody", null, [
              (t(!0), s(_, null, B(i.data, (r) => (t(), s("tr", {
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
}, mo = { class: "eit-progress eit-progress--30" }, po = { key: 1 }, _o = /* @__PURE__ */ n("span", { class: "spinner-border spinner-border-sm" }, null, -1), ho = {
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
    const i = e, a = C(() => parseFloat(i.percentage)), o = C(() => a.value === 0 ? 0 : 100 - a.value);
    return (r, l) => (t(), s("div", mo, [
      n("div", {
        class: S(["eit-progress__bar", `eit-progress__bar--${i.type}`]),
        style: H(`width: ${i.percentage}%`)
      }, [
        a.value !== 0 ? (t(), s(_, { key: 0 }, [
          i.percentage > 5 ? (t(), s(_, { key: 0 }, [
            k(v(i.percentage) + "% ", 1)
          ], 64)) : c("", !0)
        ], 64)) : c("", !0)
      ], 6),
      n("div", {
        class: "eit-progress__bar eit-progress__bar--transparent",
        style: H(`width: ${o.value === 0 ? 100 : o.value}%`)
      }, [
        i.loading ? c("", !0) : (t(), s(_, { key: 0 }, [
          o.value === 0 || o.value > 5 ? (t(), s(_, { key: 0 }, [
            k(v(o.value) + "% ", 1)
          ], 64)) : c("", !0)
        ], 64)),
        i.loading ? (t(), s("span", po, [
          _o,
          k(" Cargando... ")
        ])) : c("", !0)
      ], 4)
    ]));
  }
}, yo = { class: "d-flex" }, go = { class: "flex-shrink-0 eit-toast__left" }, vo = {
  key: "success",
  class: "eit-toast__icon eit-font__size--x7"
}, bo = {
  key: "error",
  class: "eit-toast__icon eit-font__size--x7"
}, ko = {
  key: "warning",
  class: "eit-toast__icon eit-font__size--x7"
}, $o = {
  key: "info",
  class: "eit-toast__icon eit-font__size--x7"
}, xo = { class: "flex-grow-1 ms-3" }, wo = { class: "d-flex" }, Co = { class: "flex-grow-1 me-3" }, So = { class: "eit-toast__title" }, Ro = { class: "eit-toast__text" }, jo = { class: "flex-shrink-0" }, qo = {
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
  setup(e, { expose: i }) {
    const a = e, o = q(!1), r = q("hidden"), l = q(""), u = C(() => ({
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
      return t(), s("div", {
        class: S(["eit-toast__container", u.value])
      }, [
        n("div", {
          class: S(["eit-toast box-shadow", `eit-toast--${a.data.type}`])
        }, [
          n("div", yo, [
            n("div", go, [
              a.type === "success" ? (t(), s("span", vo, [
                m(h, { icon: "fa-solid fa-circle-check" })
              ])) : c("", !0),
              a.type === "error" ? (t(), s("span", bo, [
                m(h, { icon: "fa-solid fa-circle-xmark" })
              ])) : c("", !0),
              a.type === "warning" ? (t(), s("span", ko, [
                m(h, { icon: "fa-solid fa-triangle-exclamation" })
              ])) : c("", !0),
              a.type === "info" ? (t(), s("span", $o, [
                m(h, { icon: "fa-solid fa-circle-info" })
              ])) : c("", !0)
            ]),
            n("div", xo, [
              n("div", wo, [
                n("div", Co, [
                  n("p", So, [
                    a.data.code ? (t(), s(_, { key: 0 }, [
                      k(v(a.data.code), 1)
                    ], 64)) : c("", !0),
                    k(" " + v(a.data.title), 1)
                  ]),
                  n("p", Ro, v(a.data.message), 1)
                ]),
                n("div", jo, [
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
}, Do = ["type", "maxlength", "placeholder"], Bo = {
  key: 0,
  class: "eit-label-float"
}, Po = {
  key: 1,
  class: "eit-input__display__icon eit-input__display__float-left--icon"
}, To = {
  key: 2,
  class: "eit-input__display__icon eit-input__display__float-right--icon"
}, No = {
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
  setup(e, { expose: i, emit: a }) {
    const o = e, r = a, l = q(""), u = C(
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
    return T(() => o.input, (b) => {
      b && (l.value = b);
    }), T(l, () => {
      r("emitValue", u.value ? l.value : "");
    }), V(() => {
      o.inputMask && (l.value = o.inputMask(l.value)), o.submitted && h();
    }), i({ clean: h }), (b, y) => (t(), s("div", {
      class: S(p.value)
    }, [
      A(n("input", {
        autocomplete: "off",
        class: S(["form-control eit-input", d.value]),
        type: e.inputType,
        "onUpdate:modelValue": y[0] || (y[0] = (N) => l.value = N),
        maxlength: o.maxLength,
        onKeypress: y[1] || (y[1] = (N) => o.keyPress && o.keyPress(N)),
        placeholder: g.value,
        onKeyup: K(f, ["enter"])
      }, null, 42, Do), [
        [
          re,
          l.value,
          void 0,
          { trim: !0 }
        ]
      ]),
      o.floatLabel ? (t(), s("label", Bo, v(o.floatLabel), 1)) : c("", !0),
      o.floatLeft ? (t(), s("span", Po, [
        j(b.$slots, "float-left")
      ])) : c("", !0),
      o.floatRight ? (t(), s("span", To, [
        j(b.$slots, "float-right")
      ])) : c("", !0)
    ], 2));
  }
}, Lo = {
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
  setup(e, { expose: i, emit: a }) {
    const o = e, r = a, l = q(null), u = C(
      () => o.validation ? o.validation(l.value) : !0
    ), d = C(() => !u.value && o.requiredField && o.error ? "is-invalid" : ""), g = () => Array.isArray(l.value) ? o.data.filter((b) => !l.value.some((y) => y.id === b.id)) : o.data, p = () => l.value ? o.data.filter((b) => b.id !== l.value.id) : o.data, f = C(() => o.multiple ? g() : p());
    T(
      () => o.selected,
      (b) => {
        b && (l.value = b);
      },
      { immediate: !0 }
    ), T(l, () => {
      r("emitValue", u.value ? l.value : null);
    }), V(() => {
      o.submitted && h();
    });
    const h = () => {
      l.value = o.multiple ? [] : null;
    };
    return i({ clean: h }), (b, y) => {
      const N = D("v-select");
      return t(), R(N, {
        options: f.value,
        modelValue: l.value,
        "onUpdate:modelValue": y[0] || (y[0] = (w) => l.value = w),
        label: e.labelCustom,
        multiple: e.multiple,
        placeholder: e.placeHolder,
        class: S(["eit-select-component", d.value]),
        clearable: e.clearable,
        disabled: o.isDisabled
      }, {
        "no-options": F(() => [
          k(" No hay más resultados. ")
        ]),
        _: 1
      }, 8, ["options", "modelValue", "label", "multiple", "placeholder", "class", "clearable", "disabled"]);
    };
  }
}, Mo = ["maxlength", "placeholder"], Ao = {
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
  setup(e, { expose: i, emit: a }) {
    const o = e, r = a, l = q(null), u = q(""), d = C(() => o.validation && o.validation(u.value)), g = C(() => !d.value && o.requiredField && o.error ? "is-invalid" : ""), p = () => {
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
    }), i({ clean: p }), (f, h) => A((t(), s("textarea", {
      ref_key: "textarea",
      ref: l,
      "onUpdate:modelValue": h[0] || (h[0] = (b) => u.value = b),
      maxlength: e.maxLength,
      autocomplete: "off",
      class: S(["form-control eit-textarea eit-textarea-resize", g.value]),
      placeholder: e.placeHolder
    }, null, 10, Mo)), [
      [
        X,
        u.value,
        void 0,
        { trim: !0 }
      ]
    ]);
  }
}, Eo = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20style='margin:%20auto;%20display:%20block;%20shape-rendering:%20auto;'%20width='200px'%20height='200px'%20viewBox='0%200%20100%20100'%20preserveAspectRatio='xMidYMid'%3e%3crect%20x='17.5'%20y='30'%20width='15'%20height='40'%20fill='%23009da6'%3e%3canimate%20attributeName='y'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='18;30;30'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.2s'%3e%3c/animate%3e%3canimate%20attributeName='height'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='64;40;40'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.2s'%3e%3c/animate%3e%3c/rect%3e%3crect%20x='42.5'%20y='30'%20width='15'%20height='40'%20fill='%2379cace'%3e%3canimate%20attributeName='y'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='20.999999999999996;30;30'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.1s'%3e%3c/animate%3e%3canimate%20attributeName='height'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='58.00000000000001;40;40'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.1s'%3e%3c/animate%3e%3c/rect%3e%3crect%20x='67.5'%20y='30'%20width='15'%20height='40'%20fill='%23a9e4e7'%3e%3canimate%20attributeName='y'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='20.999999999999996;30;30'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%3e%3c/animate%3e%3canimate%20attributeName='height'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='58.00000000000001;40;40'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%3e%3c/animate%3e%3c/rect%3e%3c/svg%3e", Vo = { class: "p-3 eit-loading" }, oe = {
  __name: "LoadingComponent",
  props: {
    size: {
      type: String,
      required: !1,
      default: "100"
    }
  },
  setup(e) {
    const i = e;
    return (a, o) => (t(), s("div", Vo, [
      n("img", {
        style: H(`width:${i.size}px`),
        src: Eo
      }, null, 4)
    ]));
  }
}, W = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlertComponent: te,
  BadgeComponent: L,
  BreadcrumbComponent: ye,
  ButtonComponent: I,
  DetailComponent: Ut,
  DialogComponent: so,
  HighlightComponent: eo,
  InputComponent: No,
  LoadingComponent: oe,
  PaginationComponent: $t,
  ProgressBarComponent: ho,
  PropsComponent: fo,
  SelectComponent: Lo,
  SkeletonComponent: U,
  TabComponent: Wt,
  TableComponent: yt,
  TextareaResizeComponent: Ao,
  ToastComponent: qo
}, Symbol.toStringTag, { value: "Module" }));
function zo(e, i) {
  const a = ee(), o = C(() => a.meta.requiresAuth ? e.config.darkTheme ? i.logotipo.logo_dark : i.logotipo.logo_light : i.platformDarkTheme ? i.logotipo.logo_dark : i.logotipo.logo_light), r = C(() => e.config.darkTheme ? i.logotipo.isotipo_dark : i.logotipo.isotipo_light);
  return { logotipo: o, isotipo: r };
}
const Xo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useLogos: zo
}, Symbol.toStringTag, { value: "Module" }));
function Oo() {
  function e(l) {
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
    validateDefault: e,
    validateEmail: i,
    validateRut: a,
    validatePassword: o,
    validatePhone: r
  };
}
function Fo() {
  function e(o) {
    return o.replace(/[.-]/g, "").replace(/^(\d{1,2})(\d{3})(\d{3})(\w{1})$/, "$1.$2.$3-$4");
  }
  function i(o) {
    return o.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  function a(o) {
    return o.replace(/\D/g, "").replace(/^(\d{3})(\d{4})(\d{4})$/, "+$1 $2-$3");
  }
  return { inputMaskRut: e, inputMaskCurrency: i, inputMaskPhone: a };
}
function Ho() {
  function e(i) {
    let a = String.fromCharCode(i.keyCode);
    if (/^[0-9Kk.-]/.test(a)) return !0;
    i.preventDefault();
  }
  return { keyPressRut: e };
}
function Io() {
  function e(i) {
    const { sort: a, data: o } = i, { keys: r, index: l, asc: u } = a, d = r[l];
    return o.sort((g, p) => {
      let f = g[d], h = p[d];
      return typeof f == "object" && f !== null && (f = f.name, h = h.name), f === h ? 0 : (f > h ? 1 : -1) * (u ? 1 : -1);
    }), o;
  }
  return { sortTable: e };
}
E.extend(de);
E.locale("es");
function Ko() {
  function e(r) {
    return E(r).format("DD/MM/YYYY");
  }
  function i(r) {
    return E(r).fromNow();
  }
  function a(r) {
    let l = r.replace(/[^0-9kK]/g, ""), u = l.slice(0, -1).replace(/\B(?=(\d{3})+(?!\d))/g, "."), d = l.slice(-1).toUpperCase();
    return `${u}-${d}`;
  }
  function o(r) {
    return r === null ? "" : r.charAt(0).toUpperCase() + r.slice(1).toLowerCase();
  }
  return { formatDate: e, formatDateAgo: i, formatRut: a, formatCapitalize: o };
}
function Uo() {
  function e(i, a) {
    return a ? {
      content: i,
      theme: "main",
      placement: "right",
      appendTo: "parent"
    } : { content: i, theme: "main", placement: "right" };
  }
  return { handleTooltip: e };
}
const en = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useFormat: Ko,
  useInputMask: Fo,
  useKeypress: Ho,
  useTable: Io,
  useTooltip: Uo,
  useValidator: Oo
}, Symbol.toStringTag, { value: "Module" })), tn = {
  install(e) {
    Object.keys(W).forEach((i) => {
      e.component(i, W[i]);
    });
  }
};
export {
  Xo as composables,
  tn as default,
  en as utils
};
