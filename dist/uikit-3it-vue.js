import { computed as C, resolveComponent as D, openBlock as t, createElementBlock as s, normalizeClass as S, Fragment as _, createTextVNode as k, toDisplayString as v, createCommentVNode as c, createBlock as R, createElementVNode as o, createVNode as m, withCtx as H, renderList as P, renderSlot as j, mergeProps as se, createStaticVNode as le, resolveDirective as ae, withDirectives as A, ref as q, watch as T, watchEffect as O, withKeys as K, vModelText as X, onMounted as ie, unref as z, normalizeStyle as F, vModelDynamic as re } from "vue";
import { useRoute as ee } from "vue-router";
import { codeToHtml as ce } from "shiki";
import E from "dayjs";
import de from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";
const ue = ["disabled"], fe = /* @__PURE__ */ o("div", { class: "spinner-border spinner-border-sm me-1" }, null, -1), I = {
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
  setup(e, { emit: r }) {
    const i = e, n = r, a = C(() => ["eit-btn", `${i.className}`]), l = (u) => {
      n("emitEvent", u);
    };
    return (u, d) => {
      const g = D("font-awesome-icon");
      return t(), s("button", {
        onClick: d[0] || (d[0] = (p) => l(p)),
        class: S([a.value, "d-flex align-items-center justify-content-center gap-1"]),
        disabled: i.isDisabled
      }, [
        i.loading ? (t(), s(_, { key: 0 }, [
          fe,
          k(" " + v(i.loadingText), 1)
        ], 64)) : c("", !0),
        i.loading ? c("", !0) : (t(), s(_, { key: 1 }, [
          i.icon ? (t(), R(g, {
            key: 0,
            icon: i.icon
          }, null, 8, ["icon"])) : c("", !0),
          k(" " + v(e.text), 1)
        ], 64))
      ], 10, ue);
    };
  }
}, me = { "aria-label": "breadcrumb" }, pe = { class: "eit-breadcrumb" }, _e = /* @__PURE__ */ o("span", { class: "px-2 eit-color--text-soft" }, "/", -1), he = {
  key: 1,
  class: "eit-color--text-soft"
}, ye = {
  __name: "BreadcrumbComponent",
  setup(e) {
    const r = ee(), i = C(() => {
      let n = [], a = "";
      return r.matched.forEach((l, u) => {
        a += "/" + l.path.split("/")[u + 1], n.push({
          name: l.name,
          title: l.meta.title || "Sin título",
          path: a,
          last: u === r.matched.length - 1
        });
      }), n;
    });
    return (n, a) => {
      const l = D("font-awesome-icon"), u = D("router-link");
      return t(), s("nav", me, [
        o("ul", pe, [
          o("li", null, [
            m(u, {
              to: "/",
              class: "eit-color--text-soft eit-color--text-soft--link"
            }, {
              default: H(() => [
                m(l, { icon: "fa-solid fa-house" })
              ]),
              _: 1
            }),
            _e
          ]),
          (t(!0), s(_, null, P(i.value, (d, g) => (t(), s("li", {
            key: g,
            class: "eit-breadcrumb__item"
          }, [
            j(n.$slots, d.name, se({ ref_for: !0 }, d), () => [
              d.last ? (t(), s("span", he, v(d.title), 1)) : (t(), R(u, {
                key: 0,
                to: d.path,
                class: "eit-color--text eit-color--text--link eit-color--underline"
              }, {
                default: H(() => [
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
}, ge = ["innerHTML"], M = {
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
    const r = e;
    return (i, n) => {
      const a = D("font-awesome-icon");
      return t(), s("span", {
        key: `badge-${r.text}`,
        class: S(`eit-badge ${r.className}`)
      }, [
        r.icon ? (t(), R(a, {
          key: 0,
          icon: r.icon,
          class: "me-1"
        }, null, 8, ["icon"])) : c("", !0),
        o("span", {
          innerHTML: r.text
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
}, ke = /* @__PURE__ */ o("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "80%" }
}, null, -1), $e = [
  ke
], xe = { key: 1 }, we = /* @__PURE__ */ o("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "60%" }
}, null, -1), Ce = [
  we
], Se = {
  key: 0,
  class: "eit-skeleton__table-first-td"
}, Re = /* @__PURE__ */ o("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), je = [
  Re
], qe = { key: 1 }, De = /* @__PURE__ */ o("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), Pe = [
  De
], Be = /* @__PURE__ */ le('<div class="row"><div class="col-12"><div class="d-flex"><div class="flex-shrink-0"><div class="eit-skeleton eit-skeleton__btn-square"></div></div><div class="flex-grow-1 ms-3"><div class="d-flex"><div class="flex-grow-1 ms-3"><div class="eit-skeleton eit-skeleton__title my-2" style="width:40%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div></div><div class="flex-shrink-0"><div class="eit-skeleton eit-skeleton__text my-2" style="width:30px;"></div></div></div></div></div></div></div><div class="row flex-grow-1"><div class="col-12 d-flex flex-column flex-grow-1"><div class="eit-slide__content flex-grow-1"><div class="mt-5"><div class="col-12"><h5 class="mb-3"><div class="eit-skeleton eit-skeleton__title my-2" style="width:20%;"></div></h5><ul class="list-unstyled"><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:40%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:20%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:20%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li></ul></div></div></div></div></div>', 2), U = {
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
    const r = e;
    return (i, n) => (t(), s(_, null, [
      r.type === "table" ? (t(), s("table", ve, [
        o("thead", null, [
          o("tr", null, [
            (t(!0), s(_, null, P(r.table.column, (a) => (t(), s(_, { key: a }, [
              a === 1 ? (t(), s("th", be, $e)) : c("", !0),
              a > 1 ? (t(), s("th", xe, Ce)) : c("", !0)
            ], 64))), 128))
          ])
        ]),
        o("tbody", null, [
          (t(!0), s(_, null, P(r.table.row, (a) => (t(), s("tr", { key: a }, [
            (t(!0), s(_, null, P(r.table.column, (l) => (t(), s(_, { key: l }, [
              l === 1 ? (t(), s("td", Se, je)) : c("", !0),
              l > 1 ? (t(), s("td", qe, Pe)) : c("", !0)
            ], 64))), 128))
          ]))), 128))
        ])
      ])) : c("", !0),
      r.type === "detail" ? (t(), s(_, { key: 1 }, [
        Be
      ], 64)) : c("", !0)
    ], 64));
  }
}, Te = { class: "d-flex align-items-center" }, Ne = { class: "flex-shrink-0 d-flex align-items-center eit-alert__icon me-2" }, Me = ["innerHTML"], te = {
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
    const r = e;
    return (i, n) => {
      const a = D("font-awesome-icon");
      return t(), s("div", {
        class: S(`eit-alert eit-alert--${r.type} ${r.animation.active ? "eit-alert--animation" : "eit-alert--default"} ${r.animation.show ? "eit-alert--animation--show" : ""}`)
      }, [
        o("div", Te, [
          o("div", Ne, [
            m(a, {
              icon: r.icon,
              class: S(e.iconClass)
            }, null, 8, ["icon", "class"])
          ]),
          o("div", {
            class: "flex-grow-1 eit-alert__text",
            innerHTML: r.message
          }, null, 8, Me)
        ])
      ], 2);
    };
  }
}, Le = { class: "row" }, Ae = { class: "col-12" }, Ee = { class: "table eit-table eit-table-responsive" }, Oe = ["onClick"], Ve = /* @__PURE__ */ o("th", {
  scope: "col",
  class: "text-center"
}, "Acciones", -1), ze = { class: "pe-3 d-lg-none" }, He = ["onClick"], Fe = {
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
}, ot = /* @__PURE__ */ o("div", { class: "eit-border--bottom eit-border--color" }, null, -1), nt = [
  ot
], st = {
  key: 4,
  class: "mx-2"
}, lt = ["onClick"], at = {
  key: 5,
  class: "mx-2"
}, it = ["onClick"], rt = { class: "d-flex w-100 justify-content-between align-items-center d-lg-none text-end" }, ct = /* @__PURE__ */ o("strong", null, "Acciones:", -1), dt = { class: "d-flex flex-wrap gap-2 ms-3" }, ut = ["onClick"], ft = ["onClick"], mt = ["onClick"], pt = ["onClick"], _t = ["onClick"], ht = ["onClick"], yt = {
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
  setup(e, { emit: r }) {
    const i = e, n = r, a = (y) => {
      n("viewRecord", y);
    }, l = (y) => {
      n("editRecord", y);
    }, u = (y) => {
      n("deleteRecord", y);
    }, d = (y) => {
      n("downloadRecord", y);
    }, g = (y) => {
      n("updateSort", { index: y, asc: !i.sort.asc });
    }, p = (y) => {
      n("enabledDisabledRecord", y);
    }, f = (y) => typeof y == "string", h = (y) => typeof y == "object" && !Array.isArray(y), b = (y) => Array.isArray(y);
    return (y, N) => {
      var G, Z, J, Q;
      const w = D("font-awesome-icon"), Y = ae("tippy");
      return t(), s("div", Le, [
        o("div", Ae, [
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
            o("table", Ee, [
              o("thead", null, [
                o("tr", null, [
                  (t(!0), s(_, null, P(e.columns, ($, B) => (t(), s("th", {
                    key: `column-${B}`,
                    scope: "col"
                  }, [
                    o("a", {
                      onClick: (x) => g(B),
                      href: "javascript:",
                      class: "d-flex justify-content-between"
                    }, [
                      k(v($) + " ", 1),
                      e.sort.index === B ? (t(), s("span", {
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
                    ], 8, Oe)
                  ]))), 128)),
                  Ve
                ])
              ]),
              o("tbody", null, [
                (t(!0), s(_, null, P(e.data, ($, B) => (t(), s("tr", {
                  key: `row-${B}`
                }, [
                  (t(!0), s(_, null, P($, (x, L) => (t(), s("td", {
                    key: `value-${L}`
                  }, [
                    o("strong", ze, v(e.columns[Object.keys($).indexOf(L)]) + ":", 1),
                    Object.keys($)[e.columnLink] === L ? (t(), s(_, { key: 0 }, [
                      e.viewRecord ? (t(), s("a", {
                        key: 0,
                        onClick: (V) => a($),
                        href: "javascript:",
                        class: "eit-table__link"
                      }, v(x), 9, He)) : c("", !0),
                      e.viewRecord ? c("", !0) : (t(), s(_, { key: 1 }, [
                        k(v(x), 1)
                      ], 64))
                    ], 64)) : c("", !0),
                    Object.keys($)[e.columnLink] !== L ? (t(), s(_, { key: 1 }, [
                      b(x) ? (t(), s("div", Fe, [
                        (t(!0), s(_, null, P(x, (V, ne) => (t(), s("span", {
                          key: `value-array-${ne}`,
                          class: "d-flex flex-wrap gap-1"
                        }, [
                          m(M, {
                            text: V.name,
                            className: V.className
                          }, null, 8, ["text", "className"])
                        ]))), 128))
                      ])) : c("", !0),
                      L === "status" ? (t(), s(_, { key: 1 }, [
                        x ? (t(), R(M, {
                          key: 0,
                          text: "Activo",
                          className: "eit-badge__outline--secondary"
                        })) : c("", !0),
                        x ? c("", !0) : (t(), R(M, {
                          key: 1,
                          text: "Inactivo",
                          className: "eit-badge__outline--gray"
                        }))
                      ], 64)) : c("", !0),
                      h(x) ? (t(), R(M, {
                        key: 2,
                        text: x.name,
                        className: x.className
                      }, null, 8, ["text", "className"])) : c("", !0),
                      f(x) ? (t(), s("span", Ie, v(x), 1)) : c("", !0)
                    ], 64)) : c("", !0)
                  ]))), 128)),
                  o("td", Ke, [
                    o("div", Ue, [
                      o("a", Ye, [
                        m(w, { icon: "fa-solid fa-ellipsis" })
                      ]),
                      o("ul", Ge, [
                        e.viewRecord ? (t(), s("li", Ze, [
                          o("a", {
                            onClick: (x) => a($),
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
                          o("a", {
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
                          o("a", {
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
                          o("a", {
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
                          o("a", {
                            onClick: (x) => u(B),
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
                    o("div", rt, [
                      ct,
                      o("div", dt, [
                        e.viewRecord ? (t(), s("a", {
                          key: 0,
                          onClick: (x) => a($),
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
                          onClick: (x) => u(B),
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
  setup(e, { emit: r }) {
    const i = e, n = r, a = q(i.data.currentPage), l = () => a.value++, u = () => a.value--, d = () => {
      a.value <= 0 && (a.value = 1), a.value > i.data.finalPage && (a.value = i.data.finalPage);
    }, g = (p) => {
      p.target.select();
    };
    return T(a, () => {
      a.value > 0 && a.value <= i.data.finalPage && n("updatePaginator", a.value);
    }), O(() => {
      i.data && (a.value = i.data.currentPage);
    }), (p, f) => {
      const h = D("font-awesome-icon");
      return t(), s("div", gt, [
        o("button", {
          onClick: u,
          disabled: e.data.currentPage === 1,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          m(h, { icon: "fa-solid fa-chevron-left" })
        ], 8, vt),
        A(o("input", {
          type: "number",
          "onUpdate:modelValue": f[0] || (f[0] = (b) => a.value = b),
          onInput: d,
          onKeyup: K(d, ["enter"]),
          onBlur: d,
          onFocus: g,
          class: "eit-input eit-paginator__input eit-font__size--x1 text-center",
          "aria-label": "Número de página"
        }, null, 544), [
          [
            X,
            a.value,
            void 0,
            { number: !0 }
          ]
        ]),
        o("span", bt, [
          k(" de " + v(e.data.finalPage) + " ", 1),
          e.data.finalPage === 1 ? (t(), s(_, { key: 0 }, [
            k(" página ")
          ], 64)) : c("", !0),
          e.data.finalPage > 1 ? (t(), s(_, { key: 1 }, [
            k(" páginas ")
          ], 64)) : c("", !0)
        ]),
        o("button", {
          onClick: l,
          disabled: e.data.currentPage === e.data.finalPage,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          m(h, { icon: "fa-solid fa-chevron-right" })
        ], 8, kt)
      ]);
    };
  }
}, xt = { class: "row" }, wt = { class: "col-12" }, Ct = { class: "d-flex" }, St = { class: "flex-shrink-0" }, Rt = { class: "flex-grow-1" }, jt = { class: "d-flex" }, qt = { class: "flex-grow-1 d-flex flex-column ms-3" }, Dt = { class: "eit-font--primary mb-0" }, Pt = { class: "eit-color--text mb-0" }, Bt = { class: "flex-shrink-0" }, Tt = {
  key: 0,
  class: "dropdown eit-dropdown d-none d-lg-block"
}, Nt = {
  href: "javascript:",
  class: "eit-btn-action",
  "data-bs-toggle": "dropdown"
}, Mt = { class: "dropdown-menu dropdown-custom-menu" }, Lt = {
  key: 0,
  class: "mx-2"
}, At = {
  key: 1,
  class: "mx-2"
}, Et = {
  key: 2,
  class: "m-2"
}, Ot = /* @__PURE__ */ o("div", { class: "eit-border--bottom eit-border--color" }, null, -1), Vt = [
  Ot
], zt = {
  key: 3,
  class: "mx-2"
}, Ht = {
  key: 4,
  class: "mx-2"
}, Ft = { class: "row flex-grow-1" }, It = { class: "col-12 d-flex flex-column flex-grow-1" }, Kt = { class: "eit-slide__content flex-grow-1" }, Ut = {
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
  setup(e, { emit: r }) {
    const i = e, n = r, a = () => {
      n("emitslide");
    }, l = (p) => {
      n("enabledDisabledRecord", p);
    }, u = (p) => {
      n("editRecord", p);
    }, d = (p) => {
      n("deleteRecord", p);
    }, g = (p) => {
      n("downloadRecord", p);
    };
    return (p, f) => {
      const h = D("font-awesome-icon");
      return t(), s("section", {
        class: S(["eit-slide d-flex flex-column", [e.slide && "eit-slide--right", e.slideSmall && "eit-slide--small"]])
      }, [
        i.loading ? (t(), R(U, {
          key: 0,
          type: "detail"
        })) : c("", !0),
        i.loading ? c("", !0) : (t(), s(_, { key: 1 }, [
          o("div", xt, [
            o("div", wt, [
              o("div", Ct, [
                o("div", St, [
                  o("button", {
                    class: "eit-btn eit-btn--gray eit-btn--square",
                    onClick: a
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
                o("div", Rt, [
                  o("div", jt, [
                    o("div", qt, [
                      o("h4", Dt, [
                        o("strong", null, [
                          j(p.$slots, "title")
                        ])
                      ]),
                      o("p", Pt, [
                        j(p.$slots, "subtitle")
                      ])
                    ]),
                    o("div", Bt, [
                      i.dropdown ? (t(), s("div", Tt, [
                        o("a", Nt, [
                          m(h, { icon: "fa-solid fa-ellipsis" })
                        ]),
                        o("ul", Mt, [
                          i.editRecord ? (t(), s("li", Lt, [
                            o("a", {
                              onClick: f[0] || (f[0] = (b) => u(i.record)),
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
                          i.downloadRecord ? (t(), s("li", At, [
                            o("a", {
                              onClick: f[1] || (f[1] = (b) => g(i.record)),
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              m(h, {
                                icon: "fa-solid fa-download",
                                class: "eit-color--blue"
                              }),
                              k(" " + v(i.downloadRecord), 1)
                            ])
                          ])) : c("", !0),
                          e.deleteRecord || e.enabledDisabledRecord ? (t(), s("li", Et, Vt)) : c("", !0),
                          i.enabledDisabledRecord ? (t(), s("li", zt, [
                            o("a", {
                              onClick: f[2] || (f[2] = (b) => l(e.record)),
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              i.record.status ? c("", !0) : (t(), s(_, { key: 0 }, [
                                m(h, {
                                  icon: "fa-regular fa-circle-check",
                                  class: "eit-color--green"
                                }),
                                k(" Habilitar ")
                              ], 64)),
                              i.record.status ? (t(), s(_, { key: 1 }, [
                                m(h, {
                                  icon: "fa-solid fa-ban",
                                  class: "eit-color--red"
                                }),
                                k(" Deshabilitar ")
                              ], 64)) : c("", !0)
                            ])
                          ])) : c("", !0),
                          i.deleteRecord ? (t(), s("li", Ht, [
                            o("a", {
                              onClick: f[3] || (f[3] = (b) => d(i.record)),
                              class: "dropdown-item dropdown-custom-menu-item eit-color--red",
                              href: "javascript:"
                            }, [
                              m(h, {
                                icon: "fa-solid fa-trash",
                                class: "eit-color--red"
                              }),
                              k(" " + v(i.deleteRecord), 1)
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
          o("div", Ft, [
            o("div", It, [
              o("div", Kt, [
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
    const r = e, i = (l) => l < 99 ? l : "+99", n = q(0), a = (l) => {
      n.value = l;
    };
    return (l, u) => (t(), s(_, null, [
      o("div", Yt, [
        o("ul", {
          class: S(`eit-tabs ${r.className}`)
        }, [
          (t(!0), s(_, null, P(e.data, (d, g) => (t(), s("li", {
            key: g,
            class: "eit-tabs__item"
          }, [
            o("a", {
              href: "javascript:",
              onClick: (p) => a(g),
              class: S(["eit-tabs__item__link", n.value === g ? "active" : ""])
            }, [
              k(v(d.name) + " ", 1),
              d.number ? (t(), s("span", Zt, v(i(d.number)), 1)) : c("", !0)
            ], 10, Gt)
          ]))), 128))
        ], 2),
        j(l.$slots, "dropdown")
      ]),
      o("div", Jt, [
        o("div", Qt, [
          j(l.$slots, `tab-${n.value}`)
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
    const r = e, i = q("");
    return (async () => {
      const a = `${r.code}`;
      i.value = await ce(a, {
        lang: r.lang,
        theme: r.theme
      });
    })(), (a, l) => (t(), s("div", { innerHTML: i.value }, null, 8, Xt));
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
  setup(e, { expose: r, emit: i }) {
    const n = e, a = i, l = q(null), u = () => {
      l.value.showModal(), l.value.classList.add("show");
    }, d = () => {
      l.value.close(), l.value.classList.remove("show"), a("emitCloseDialog");
    }, g = (f) => {
      f.key === "Escape" && d();
    }, p = () => {
      a("emitSubmit");
    };
    return ie(() => {
      document.addEventListener("keyup", g);
    }), r({ showDialog: u, closeDialog: d }), (f, h) => {
      const b = D("font-awesome-icon");
      return t(), s("dialog", {
        ref_key: "dialog",
        ref: l,
        class: S(["eit-dialog", n.className]),
        onKeyup: K(d, ["esc"])
      }, [
        o("div", to, [
          e.loading ? (t(), R(z(oe), {
            key: 0,
            size: "70"
          })) : c("", !0),
          e.loading ? c("", !0) : (t(), s(_, { key: 1 }, [
            o("div", oo, [
              j(f.$slots, "head"),
              o("button", {
                onClick: d,
                class: "eit-dialog__close"
              }, [
                m(b, { icon: ["fas", "xmark"] })
              ])
            ]),
            o("div", {
              class: S(`eit-dialog__body ${e.scrollable ? "eit-dialog__body--scroll" : ""}`)
            }, [
              j(f.$slots, "content")
            ], 2),
            o("div", no, [
              m(z(I), {
                onClick: d,
                className: "eit-btn-outline--gray",
                text: "Volver"
              }),
              n.btnSubmit ? (t(), R(z(I), {
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
}, lo = { class: "row" }, ao = { class: "col" }, io = /* @__PURE__ */ o("h2", { class: "eit-font__size--x4 eit-color--text eit-font__weight--300 eit-border--bottom eit-border--color mb-3" }, [
  /* @__PURE__ */ o("strong", { class: "eit-font__weight--900" }, "Props")
], -1), ro = { class: "eit-table--overflow" }, co = { class: "table eit-table" }, uo = /* @__PURE__ */ o("thead", null, [
  /* @__PURE__ */ o("tr", null, [
    /* @__PURE__ */ o("th", null, "Name"),
    /* @__PURE__ */ o("th", null, "Type"),
    /* @__PURE__ */ o("th", null, "Default")
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
    const r = e;
    return (i, n) => (t(), s("div", lo, [
      o("div", ao, [
        io,
        o("div", ro, [
          o("table", co, [
            uo,
            o("tbody", null, [
              (t(!0), s(_, null, P(r.data, (a) => (t(), s("tr", {
                key: a.name
              }, [
                o("td", null, [
                  m(M, {
                    text: a.name,
                    className: "eit-badge__outline--gray"
                  }, null, 8, ["text"])
                ]),
                o("td", null, [
                  o("code", null, v(a.type), 1)
                ]),
                o("td", null, [
                  o("code", null, v(a.default), 1)
                ])
              ]))), 128))
            ])
          ])
        ])
      ])
    ]));
  }
}, mo = { class: "eit-progress eit-progress--30" }, po = { key: 1 }, _o = /* @__PURE__ */ o("span", { class: "spinner-border spinner-border-sm" }, null, -1), ho = {
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
    const r = e, i = C(() => parseFloat(r.percentage)), n = C(() => i.value === 0 ? 0 : 100 - i.value);
    return (a, l) => (t(), s("div", mo, [
      o("div", {
        class: S(["eit-progress__bar", `eit-progress__bar--${r.type}`]),
        style: F(`width: ${r.percentage}%`)
      }, [
        i.value !== 0 ? (t(), s(_, { key: 0 }, [
          r.percentage > 5 ? (t(), s(_, { key: 0 }, [
            k(v(r.percentage) + "% ", 1)
          ], 64)) : c("", !0)
        ], 64)) : c("", !0)
      ], 6),
      o("div", {
        class: "eit-progress__bar eit-progress__bar--transparent",
        style: F(`width: ${n.value === 0 ? 100 : n.value}%`)
      }, [
        r.loading ? c("", !0) : (t(), s(_, { key: 0 }, [
          n.value === 0 || n.value > 5 ? (t(), s(_, { key: 0 }, [
            k(v(n.value) + "% ", 1)
          ], 64)) : c("", !0)
        ], 64)),
        r.loading ? (t(), s("span", po, [
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
  setup(e, { expose: r }) {
    const i = e, n = q(!1), a = q("hidden"), l = q(""), u = C(() => ({
      show: n.value,
      hide: !n.value,
      [i.position]: i.position,
      hidden: a.value
    })), d = () => {
      clearTimeout(l.value), n.value = !0, a.value = "", l.value = setTimeout(() => {
        n.value = !1, setTimeout(() => a.value = "hidden", "300");
      }, i.visible);
    }, g = () => {
      n.value = !1, setTimeout(() => a.value = "hidden", "300"), clearTimeout(l.value);
    };
    return r({ handleShowToast: d, handleCloseToast: g }), (p, f) => {
      const h = D("font-awesome-icon");
      return t(), s("div", {
        class: S(["eit-toast__container", u.value])
      }, [
        o("div", {
          class: S(["eit-toast box-shadow", `eit-toast--${i.data.type}`])
        }, [
          o("div", yo, [
            o("div", go, [
              i.type === "success" ? (t(), s("span", vo, [
                m(h, { icon: "fa-solid fa-circle-check" })
              ])) : c("", !0),
              i.type === "error" ? (t(), s("span", bo, [
                m(h, { icon: "fa-solid fa-circle-xmark" })
              ])) : c("", !0),
              i.type === "warning" ? (t(), s("span", ko, [
                m(h, { icon: "fa-solid fa-triangle-exclamation" })
              ])) : c("", !0),
              i.type === "info" ? (t(), s("span", $o, [
                m(h, { icon: "fa-solid fa-circle-info" })
              ])) : c("", !0)
            ]),
            o("div", xo, [
              o("div", wo, [
                o("div", Co, [
                  o("p", So, [
                    i.data.code ? (t(), s(_, { key: 0 }, [
                      k(v(i.data.code), 1)
                    ], 64)) : c("", !0),
                    k(" " + v(i.data.title), 1)
                  ]),
                  o("p", Ro, v(i.data.message), 1)
                ]),
                o("div", jo, [
                  o("a", {
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
}, Do = ["type", "maxlength", "placeholder"], Po = {
  key: 0,
  class: "eit-label-float"
}, Bo = {
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
  setup(e, { expose: r, emit: i }) {
    const n = e, a = i, l = q(""), u = C(
      () => n.validation ? n.validation(l.value) : !0
    ), d = C(() => !u.value && n.requiredField && n.error ? "is-invalid" : ""), g = C(() => n.floatLabel ? "" : n.placeHolder), p = C(() => [
      n.floatLabel || n.floatLeft || n.floatRight ? "eit-input__display" : "",
      n.floatLeft ? "eit-input__display__float-left" : "",
      n.floatRight ? "eit-input__display__float-right" : ""
    ]), f = () => {
      a("emitPressEnter");
    }, h = () => {
      l.value = "";
    };
    return T(
      () => n.input,
      (b) => {
        b && (l.value = b);
      }
    ), T(l, () => {
      a("emitValue", u.value ? l.value : "");
    }), O(() => {
      n.inputMask && (l.value = n.inputMask(l.value)), n.submitted && h();
    }), r({ clean: h }), (b, y) => (t(), s("div", {
      class: S(p.value)
    }, [
      A(o("input", {
        autocomplete: "off",
        class: S(["form-control eit-input", d.value]),
        type: e.inputType,
        "onUpdate:modelValue": y[0] || (y[0] = (N) => l.value = N),
        maxlength: n.maxLength,
        onKeypress: y[1] || (y[1] = (N) => n.keyPress && n.keyPress(N)),
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
      n.floatLabel ? (t(), s("label", Po, v(n.floatLabel), 1)) : c("", !0),
      n.floatLeft ? (t(), s("span", Bo, [
        j(b.$slots, "float-left")
      ])) : c("", !0),
      n.floatRight ? (t(), s("span", To, [
        j(b.$slots, "float-right")
      ])) : c("", !0)
    ], 2));
  }
}, Mo = {
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
  setup(e, { expose: r, emit: i }) {
    const n = e, a = i, l = q(null), u = C(
      () => n.validation ? n.validation(l.value) : !0
    ), d = C(() => !u.value && n.requiredField && n.error ? "is-invalid" : ""), g = () => Array.isArray(l.value) ? n.data.filter((b) => !l.value.some((y) => y.id === b.id)) : n.data, p = () => l.value ? n.data.filter((b) => b.id !== l.value.id) : n.data, f = C(() => n.multiple ? g() : p());
    T(
      () => n.selected,
      (b) => {
        b && (l.value = b);
      },
      { immediate: !0 }
    ), T(l, () => {
      a("emitValue", u.value ? l.value : null);
    }), O(() => {
      n.submitted && h();
    });
    const h = () => {
      l.value = n.multiple ? [] : null;
    };
    return r({ clean: h }), (b, y) => {
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
        disabled: n.isDisabled
      }, {
        "no-options": H(() => [
          k(" No hay más resultados. ")
        ]),
        _: 1
      }, 8, ["options", "modelValue", "label", "multiple", "placeholder", "class", "clearable", "disabled"]);
    };
  }
}, Lo = ["maxlength", "placeholder"], Ao = {
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
  setup(e, { expose: r, emit: i }) {
    const n = e, a = i, l = q(null), u = q(""), d = C(() => n.validation && n.validation(u.value)), g = C(() => !d.value && n.requiredField && n.error ? "is-invalid" : ""), p = () => {
      u.value = "";
    };
    return T(
      () => n.input,
      (f) => {
        f && (u.value = f);
      }
    ), T(u, () => {
      l.value.style.height = "50px", l.value.style.height = `${l.value.scrollHeight}px`, a("emitValue", d.value ? u.value : "");
    }), O(() => {
      n.submitted && p();
    }), r({ clean: p }), (f, h) => A((t(), s("textarea", {
      ref_key: "textarea",
      ref: l,
      "onUpdate:modelValue": h[0] || (h[0] = (b) => u.value = b),
      maxlength: e.maxLength,
      autocomplete: "off",
      class: S(["form-control eit-textarea eit-textarea-resize", g.value]),
      placeholder: e.placeHolder
    }, null, 10, Lo)), [
      [
        X,
        u.value,
        void 0,
        { trim: !0 }
      ]
    ]);
  }
}, Eo = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20style='margin:%20auto;%20display:%20block;%20shape-rendering:%20auto;'%20width='200px'%20height='200px'%20viewBox='0%200%20100%20100'%20preserveAspectRatio='xMidYMid'%3e%3crect%20x='17.5'%20y='30'%20width='15'%20height='40'%20fill='%23009da6'%3e%3canimate%20attributeName='y'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='18;30;30'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.2s'%3e%3c/animate%3e%3canimate%20attributeName='height'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='64;40;40'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.2s'%3e%3c/animate%3e%3c/rect%3e%3crect%20x='42.5'%20y='30'%20width='15'%20height='40'%20fill='%2379cace'%3e%3canimate%20attributeName='y'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='20.999999999999996;30;30'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.1s'%3e%3c/animate%3e%3canimate%20attributeName='height'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='58.00000000000001;40;40'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.1s'%3e%3c/animate%3e%3c/rect%3e%3crect%20x='67.5'%20y='30'%20width='15'%20height='40'%20fill='%23a9e4e7'%3e%3canimate%20attributeName='y'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='20.999999999999996;30;30'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%3e%3c/animate%3e%3canimate%20attributeName='height'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='58.00000000000001;40;40'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%3e%3c/animate%3e%3c/rect%3e%3c/svg%3e", Oo = { class: "p-3 eit-loading" }, oe = {
  __name: "LoadingComponent",
  props: {
    size: {
      type: String,
      required: !1,
      default: "100"
    }
  },
  setup(e) {
    const r = e;
    return (i, n) => (t(), s("div", Oo, [
      o("img", {
        style: F(`width:${r.size}px`),
        src: Eo
      }, null, 4)
    ]));
  }
}, W = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlertComponent: te,
  BadgeComponent: M,
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
  SelectComponent: Mo,
  SkeletonComponent: U,
  TabComponent: Wt,
  TableComponent: yt,
  TextareaResizeComponent: Ao,
  ToastComponent: qo
}, Symbol.toStringTag, { value: "Module" }));
function Vo(e, r) {
  const i = ee(), n = C(() => i.meta.requiresAuth ? e.config.darkTheme ? r.logotipo.logo_dark : r.logotipo.logo_light : r.platformDarkTheme ? r.logotipo.logo_dark : r.logotipo.logo_light), a = C(() => e.config.darkTheme ? r.logotipo.isotipo_dark : r.logotipo.isotipo_light);
  return { logotipo: n, isotipo: a };
}
const Xo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useLogos: Vo
}, Symbol.toStringTag, { value: "Module" }));
function zo() {
  function e(l) {
    return !(l == null || typeof l == "string" && l.trim() === "" || typeof l == "object" && Object.keys(l).length === 0 || Array.isArray(l) && l.length === 0);
  }
  function r(l) {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(l);
  }
  function i(l) {
    if (l.length >= 11 && l.length <= 12 && /[.-]/.test(l)) return !0;
    if (l.length < 11) return !1;
  }
  function n(l) {
    const u = l.length >= 8, d = /[A-Z]/.test(l), g = /[a-z]/.test(l), p = /[0-9]/.test(l), f = /[!@#$%^&*(),.?":{}|<>]/.test(l);
    return u && d && g && p && f;
  }
  function a(l) {
    return /^\+\d{3} \d{4}-\d{4}$/.test(l);
  }
  return {
    validateDefault: e,
    validateEmail: r,
    validateRut: i,
    validatePassword: n,
    validatePhone: a
  };
}
function Ho() {
  function e(a) {
    return a.replace(/[.-]/g, "").replace(/^(\d{1,2})(\d{3})(\d{3})(\w{1})$/, "$1.$2.$3-$4");
  }
  function r(a) {
    return a.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  function i(a) {
    return console.log("PHONE", a), a.replace(/\D/g, "").replace(/^(\d{3})(\d{4})(\d{4})$/, "+$1 $2-$3");
  }
  function n(a) {
    return a;
  }
  return { inputMaskRut: e, inputMaskCurrency: r, inputMaskPhone: i, inputMaskPrueba: n };
}
function Fo() {
  function e(r) {
    let i = String.fromCharCode(r.keyCode);
    if (/^[0-9Kk.-]/.test(i)) return !0;
    r.preventDefault();
  }
  return { keyPressRut: e };
}
function Io() {
  function e(r) {
    const { sort: i, data: n } = r, { keys: a, index: l, asc: u } = i, d = a[l];
    return n.sort((g, p) => {
      let f = g[d], h = p[d];
      return typeof f == "object" && f !== null && (f = f.name, h = h.name), f === h ? 0 : (f > h ? 1 : -1) * (u ? 1 : -1);
    }), n;
  }
  return { sortTable: e };
}
E.extend(de);
E.locale("es");
function Ko() {
  function e(a) {
    return E(a).format("DD/MM/YYYY");
  }
  function r(a) {
    return E(a).fromNow();
  }
  function i(a) {
    let l = a.replace(/[^0-9kK]/g, ""), u = l.slice(0, -1).replace(/\B(?=(\d{3})+(?!\d))/g, "."), d = l.slice(-1).toUpperCase();
    return `${u}-${d}`;
  }
  function n(a) {
    return a === null ? "" : a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
  }
  return { formatDate: e, formatDateAgo: r, formatRut: i, formatCapitalize: n };
}
function Uo() {
  function e(r, i) {
    return i ? {
      content: r,
      theme: "main",
      placement: "right",
      appendTo: "parent"
    } : { content: r, theme: "main", placement: "right" };
  }
  return { handleTooltip: e };
}
const en = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useFormat: Ko,
  useInputMask: Ho,
  useKeypress: Fo,
  useTable: Io,
  useTooltip: Uo,
  useValidator: zo
}, Symbol.toStringTag, { value: "Module" })), tn = {
  install(e) {
    Object.keys(W).forEach((r) => {
      e.component(r, W[r]);
    });
  }
};
export {
  Xo as composables,
  tn as default,
  en as utils
};
