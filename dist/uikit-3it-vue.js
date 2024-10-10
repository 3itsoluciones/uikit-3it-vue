import { computed as S, resolveComponent as P, openBlock as e, createElementBlock as n, normalizeClass as C, Fragment as _, createTextVNode as b, toDisplayString as g, createCommentVNode as c, createBlock as R, createElementVNode as o, createVNode as f, withCtx as F, renderList as D, renderSlot as j, mergeProps as ne, createStaticVNode as le, resolveDirective as ae, withDirectives as z, ref as q, watch as T, watchEffect as E, withKeys as K, vModelText as X, onMounted as ie, unref as V, normalizeStyle as H, vModelDynamic as re } from "vue";
import { useRoute as ee } from "vue-router";
import { codeToHtml as ce } from "shiki";
import A from "dayjs";
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
  setup(t, { emit: i }) {
    const a = t, s = i, r = S(() => ["eit-btn", `${a.className}`]), l = (d) => {
      s("emitEvent", d);
    };
    return (d, u) => {
      const y = P("font-awesome-icon");
      return e(), n("button", {
        onClick: u[0] || (u[0] = (p) => l(p)),
        class: C([r.value, "d-flex align-items-center justify-content-center gap-1"]),
        disabled: a.isDisabled
      }, [
        a.loading ? (e(), n(_, { key: 0 }, [
          fe,
          b(" " + g(a.loadingText), 1)
        ], 64)) : c("", !0),
        a.loading ? c("", !0) : (e(), n(_, { key: 1 }, [
          a.icon ? (e(), R(y, {
            key: 0,
            icon: a.icon
          }, null, 8, ["icon"])) : c("", !0),
          b(" " + g(t.text), 1)
        ], 64))
      ], 10, ue);
    };
  }
}, pe = { "aria-label": "breadcrumb" }, me = { class: "eit-breadcrumb" }, _e = /* @__PURE__ */ o("span", { class: "px-2 eit-color--text-soft" }, "/", -1), he = {
  key: 1,
  class: "eit-color--text-soft"
}, ye = {
  __name: "BreadcrumbComponent",
  setup(t) {
    const i = ee(), a = S(() => {
      let s = [], r = "";
      return i.matched.forEach((l, d) => {
        r += "/" + l.path.split("/")[d + 1], s.push({
          name: l.name,
          title: l.meta.title || "Sin título",
          path: r,
          last: d === i.matched.length - 1
        });
      }), s;
    });
    return (s, r) => {
      const l = P("font-awesome-icon"), d = P("router-link");
      return e(), n("nav", pe, [
        o("ul", me, [
          o("li", null, [
            f(d, {
              to: "/",
              class: "eit-color--text-soft eit-color--text-soft--link"
            }, {
              default: F(() => [
                f(l, { icon: "fa-solid fa-house" })
              ]),
              _: 1
            }),
            _e
          ]),
          (e(!0), n(_, null, D(a.value, (u, y) => (e(), n("li", {
            key: y,
            class: "eit-breadcrumb__item"
          }, [
            j(s.$slots, u.name, ne({ ref_for: !0 }, u), () => [
              u.last ? (e(), n("span", he, g(u.title), 1)) : (e(), R(d, {
                key: 0,
                to: u.path,
                class: "eit-color--text eit-color--text--link eit-color--underline"
              }, {
                default: F(() => [
                  b(g(u.title), 1)
                ]),
                _: 2
              }, 1032, ["to"]))
            ])
          ]))), 128))
        ])
      ]);
    };
  }
}, ve = ["innerHTML"], L = {
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
    return (a, s) => {
      const r = P("font-awesome-icon");
      return e(), n("span", {
        key: `badge-${i.text}`,
        class: C(`eit-badge ${i.className}`)
      }, [
        i.icon ? (e(), R(r, {
          key: 0,
          icon: i.icon,
          class: "me-1"
        }, null, 8, ["icon"])) : c("", !0),
        o("span", {
          innerHTML: i.text
        }, null, 8, ve)
      ], 2);
    };
  }
}, ge = {
  key: 0,
  class: "table eit-table eit-table-responsive"
}, be = {
  key: 0,
  class: "eit-skeleton__table-first-td"
}, ke = /* @__PURE__ */ o("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "80%" }
}, null, -1), xe = [
  ke
], $e = { key: 1 }, we = /* @__PURE__ */ o("div", {
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
], qe = { key: 1 }, Pe = /* @__PURE__ */ o("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), De = [
  Pe
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
  setup(t) {
    const i = t;
    return (a, s) => (e(), n(_, null, [
      i.type === "table" ? (e(), n("table", ge, [
        o("thead", null, [
          o("tr", null, [
            (e(!0), n(_, null, D(i.table.column, (r) => (e(), n(_, { key: r }, [
              r === 1 ? (e(), n("th", be, xe)) : c("", !0),
              r > 1 ? (e(), n("th", $e, Ce)) : c("", !0)
            ], 64))), 128))
          ])
        ]),
        o("tbody", null, [
          (e(!0), n(_, null, D(i.table.row, (r) => (e(), n("tr", { key: r }, [
            (e(!0), n(_, null, D(i.table.column, (l) => (e(), n(_, { key: l }, [
              l === 1 ? (e(), n("td", Se, je)) : c("", !0),
              l > 1 ? (e(), n("td", qe, De)) : c("", !0)
            ], 64))), 128))
          ]))), 128))
        ])
      ])) : c("", !0),
      i.type === "detail" ? (e(), n(_, { key: 1 }, [
        Be
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
  setup(t) {
    const i = t;
    return (a, s) => {
      const r = P("font-awesome-icon");
      return e(), n("div", {
        class: C(`eit-alert eit-alert--${i.type} ${i.animation.active ? "eit-alert--animation" : "eit-alert--default"} ${i.animation.show ? "eit-alert--animation--show" : ""}`)
      }, [
        o("div", Te, [
          o("div", Ne, [
            f(r, {
              icon: i.icon,
              class: C(t.iconClass)
            }, null, 8, ["icon", "class"])
          ]),
          o("div", {
            class: "flex-grow-1 eit-alert__text",
            innerHTML: i.message
          }, null, 8, Le)
        ])
      ], 2);
    };
  }
}, Me = { class: "row" }, ze = { class: "col-12" }, Ae = { class: "table eit-table eit-table-responsive" }, Ee = ["onClick"], Oe = /* @__PURE__ */ o("th", {
  scope: "col",
  class: "text-center"
}, "Acciones", -1), Ve = { class: "pe-3 d-lg-none" }, Fe = ["onClick"], He = {
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
}, ot = /* @__PURE__ */ o("div", { class: "eit-border--bottom eit-border--color" }, null, -1), st = [
  ot
], nt = {
  key: 4,
  class: "mx-2"
}, lt = ["onClick"], at = {
  key: 5,
  class: "mx-2"
}, it = ["onClick"], rt = { class: "d-flex w-100 justify-content-between align-items-center d-lg-none text-end" }, ct = /* @__PURE__ */ o("strong", null, "Acciones:", -1), dt = { class: "d-flex flex-wrap gap-2 ms-3" }, ut = ["onClick"], ft = ["onClick"], pt = ["onClick"], mt = ["onClick"], _t = ["onClick"], ht = ["onClick"], yt = {
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
    const a = t, s = i, r = (v) => {
      s("viewRecord", v);
    }, l = (v) => {
      s("editRecord", v);
    }, d = (v) => {
      s("deleteRecord", v);
    }, u = (v) => {
      s("downloadRecord", v);
    }, y = (v) => {
      s("updateSort", { index: v, asc: !a.sort.asc });
    }, p = (v) => {
      s("enabledDisabledRecord", v);
    }, m = (v) => typeof v == "string", h = (v) => typeof v == "object" && !Array.isArray(v), k = (v) => Array.isArray(v);
    return (v, N) => {
      var G, Z, J, Q;
      const w = P("font-awesome-icon"), Y = ae("tippy");
      return e(), n("div", Me, [
        o("div", ze, [
          t.loading ? (e(), R(U, {
            key: 0,
            type: "table",
            table: { row: (G = t.skeleton) == null ? void 0 : G.row, column: (Z = t.skeleton) == null ? void 0 : Z.column }
          }, null, 8, ["table"])) : c("", !0),
          !t.loading && !((J = t.data) != null && J.length) ? (e(), R(te, {
            key: 1,
            ref: "alert",
            class: "mb-3",
            type: "info",
            icon: "fa-solid fa-info",
            message: "<strong>No hay resultados</strong> para tu búsqueda."
          }, null, 512)) : c("", !0),
          !t.loading && ((Q = t.data) != null && Q.length) ? (e(), n(_, { key: 2 }, [
            o("table", Ae, [
              o("thead", null, [
                o("tr", null, [
                  (e(!0), n(_, null, D(t.columns, (x, B) => (e(), n("th", {
                    key: `column-${B}`,
                    scope: "col"
                  }, [
                    o("a", {
                      onClick: ($) => y(B),
                      href: "javascript:",
                      class: "d-flex justify-content-between"
                    }, [
                      b(g(x) + " ", 1),
                      t.sort.index === B ? (e(), n("span", {
                        key: `icono-${x}`,
                        class: "d-flex ms-2 eit-color--text"
                      }, [
                        t.sort.asc ? c("", !0) : (e(), n("span", {
                          key: `down-${x}`
                        }, [
                          f(w, { icon: "fa-solid fa-sort-down align-baseline" })
                        ])),
                        t.sort.asc ? (e(), n("span", {
                          key: `up-${x}`
                        }, [
                          f(w, { icon: "fa-solid fa-sort-up align-baseline" })
                        ])) : c("", !0)
                      ])) : (e(), n("span", {
                        key: `key-${x}`
                      }, [
                        f(w, { icon: "fa-solid fa-sort" })
                      ]))
                    ], 8, Ee)
                  ]))), 128)),
                  Oe
                ])
              ]),
              o("tbody", null, [
                (e(!0), n(_, null, D(t.data, (x, B) => (e(), n("tr", {
                  key: `row-${B}`
                }, [
                  (e(!0), n(_, null, D(x, ($, M) => (e(), n("td", {
                    key: `value-${M}`
                  }, [
                    o("strong", Ve, g(t.columns[Object.keys(x).indexOf(M)]) + ":", 1),
                    Object.keys(x)[t.columnLink] === M ? (e(), n(_, { key: 0 }, [
                      t.viewRecord ? (e(), n("a", {
                        key: 0,
                        onClick: (O) => r(x),
                        href: "javascript:",
                        class: "eit-table__link"
                      }, g($), 9, Fe)) : c("", !0),
                      t.viewRecord ? c("", !0) : (e(), n(_, { key: 1 }, [
                        b(g($), 1)
                      ], 64))
                    ], 64)) : c("", !0),
                    Object.keys(x)[t.columnLink] !== M ? (e(), n(_, { key: 1 }, [
                      k($) ? (e(), n("div", He, [
                        (e(!0), n(_, null, D($, (O, se) => (e(), n("span", {
                          key: `value-array-${se}`,
                          class: "d-flex flex-wrap gap-1"
                        }, [
                          f(L, {
                            text: O.name,
                            className: O.className
                          }, null, 8, ["text", "className"])
                        ]))), 128))
                      ])) : c("", !0),
                      M === "status" ? (e(), n(_, { key: 1 }, [
                        $ ? (e(), R(L, {
                          key: 0,
                          text: "Activo",
                          className: "eit-badge__outline--secondary"
                        })) : c("", !0),
                        $ ? c("", !0) : (e(), R(L, {
                          key: 1,
                          text: "Inactivo",
                          className: "eit-badge__outline--gray"
                        }))
                      ], 64)) : c("", !0),
                      h($) ? (e(), R(L, {
                        key: 2,
                        text: $.name,
                        className: $.className
                      }, null, 8, ["text", "className"])) : c("", !0),
                      m($) ? (e(), n("span", Ie, g($), 1)) : c("", !0)
                    ], 64)) : c("", !0)
                  ]))), 128)),
                  o("td", Ke, [
                    o("div", Ue, [
                      o("a", Ye, [
                        f(w, { icon: "fa-solid fa-ellipsis" })
                      ]),
                      o("ul", Ge, [
                        t.viewRecord ? (e(), n("li", Ze, [
                          o("a", {
                            onClick: ($) => r(x),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            f(w, {
                              icon: "fa-regular fa-eye",
                              class: "eit-color--blue"
                            }),
                            b(" " + g(t.viewRecord), 1)
                          ], 8, Je)
                        ])) : c("", !0),
                        t.editRecord ? (e(), n("li", Qe, [
                          o("a", {
                            onClick: ($) => l(x),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            f(w, {
                              icon: "fa-solid fa-square-pen",
                              class: "eit-color--yellow"
                            }),
                            b(" " + g(t.editRecord), 1)
                          ], 8, We)
                        ])) : c("", !0),
                        t.downloadRecord ? (e(), n("li", Xe, [
                          o("a", {
                            onClick: ($) => u(x),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            f(w, {
                              icon: "fa-solid fa-download",
                              class: "eit-color--blue"
                            }),
                            b(" " + g(t.downloadRecord), 1)
                          ], 8, et)
                        ])) : c("", !0),
                        t.deleteRecord || t.enabledDisabledRecord ? (e(), n("li", tt, st)) : c("", !0),
                        t.enabledDisabledRecord ? (e(), n("li", nt, [
                          o("a", {
                            onClick: ($) => p(x),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            x.status ? c("", !0) : (e(), n(_, { key: 0 }, [
                              f(w, {
                                icon: "fa-regular fa-circle-check",
                                class: "eit-color--green"
                              }),
                              b(" Habilitar ")
                            ], 64)),
                            x.status ? (e(), n(_, { key: 1 }, [
                              f(w, {
                                icon: "fa-solid fa-ban",
                                class: "eit-color--red"
                              }),
                              b(" Deshabilitar ")
                            ], 64)) : c("", !0)
                          ], 8, lt)
                        ])) : c("", !0),
                        t.deleteRecord ? (e(), n("li", at, [
                          o("a", {
                            onClick: ($) => d(B),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            f(w, {
                              icon: "fa-solid fa-trash",
                              class: "eit-color--red"
                            }),
                            b(" " + g(t.deleteRecord), 1)
                          ], 8, it)
                        ])) : c("", !0)
                      ])
                    ]),
                    o("div", rt, [
                      ct,
                      o("div", dt, [
                        t.viewRecord ? (e(), n("a", {
                          key: 0,
                          onClick: ($) => r(x),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          f(w, {
                            icon: "fa-regular fa-eye",
                            class: "eit-color--blue"
                          })
                        ], 8, ut)) : c("", !0),
                        t.editRecord ? (e(), n("a", {
                          key: 1,
                          onClick: ($) => l(x),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          f(w, {
                            icon: "fa-solid fa-square-pen",
                            class: "eit-color--yellow"
                          })
                        ], 8, ft)) : c("", !0),
                        t.downloadRecord ? (e(), n("a", {
                          key: 2,
                          onClick: ($) => u(x),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          f(w, {
                            icon: "fa-solid fa-download",
                            class: "eit-color--blue"
                          })
                        ], 8, pt)) : c("", !0),
                        t.enabledDisabledRecord ? (e(), n(_, { key: 3 }, [
                          x.status ? c("", !0) : z((e(), n("a", {
                            key: 0,
                            onClick: ($) => p(x),
                            href: "javascript:",
                            class: "eit-btn eit-btn-outline--gray eit-btn--square"
                          }, [
                            f(w, {
                              icon: "fa-regular fa-circle-check",
                              class: "eit-color--green"
                            })
                          ], 8, mt)), [
                            [Y, { content: "Habilitar", theme: "main" }]
                          ]),
                          x.status ? z((e(), n("a", {
                            key: 1,
                            onClick: ($) => p(x),
                            href: "javascript:",
                            class: "eit-btn eit-btn-outline--gray eit-btn--square"
                          }, [
                            f(w, {
                              icon: "fa-solid fa-ban",
                              class: "eit-color--red"
                            })
                          ], 8, _t)), [
                            [Y, { content: "Deshabilitar", theme: "main" }]
                          ]) : c("", !0)
                        ], 64)) : c("", !0),
                        t.deleteRecord ? (e(), n("a", {
                          key: 4,
                          onClick: ($) => d(B),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          f(w, {
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
            j(v.$slots, "paginator")
          ], 64)) : c("", !0)
        ])
      ]);
    };
  }
}, vt = { class: "eit-paginator gap-2" }, gt = ["disabled"], bt = { class: "eit-color--text eit-font__size--x1" }, kt = ["disabled"], xt = {
  __name: "PaginationComponent",
  props: {
    data: {
      type: Object,
      required: !0
    }
  },
  emits: ["updatePaginator"],
  setup(t, { emit: i }) {
    const a = t, s = i, r = q(a.data.currentPage), l = () => r.value++, d = () => r.value--, u = () => {
      r.value <= 0 && (r.value = 1), r.value > a.data.finalPage && (r.value = a.data.finalPage);
    }, y = (p) => {
      p.target.select();
    };
    return T(r, () => {
      r.value > 0 && r.value <= a.data.finalPage && s("updatePaginator", r.value);
    }), E(() => {
      a.data && (r.value = a.data.currentPage);
    }), (p, m) => {
      const h = P("font-awesome-icon");
      return e(), n("div", vt, [
        o("button", {
          onClick: d,
          disabled: t.data.currentPage === 1,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          f(h, { icon: "fa-solid fa-chevron-left" })
        ], 8, gt),
        z(o("input", {
          type: "number",
          "onUpdate:modelValue": m[0] || (m[0] = (k) => r.value = k),
          onInput: u,
          onKeyup: K(u, ["enter"]),
          onBlur: u,
          onFocus: y,
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
        o("span", bt, [
          b(" de " + g(t.data.finalPage) + " ", 1),
          t.data.finalPage === 1 ? (e(), n(_, { key: 0 }, [
            b(" página ")
          ], 64)) : c("", !0),
          t.data.finalPage > 1 ? (e(), n(_, { key: 1 }, [
            b(" páginas ")
          ], 64)) : c("", !0)
        ]),
        o("button", {
          onClick: l,
          disabled: t.data.currentPage === t.data.finalPage,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          f(h, { icon: "fa-solid fa-chevron-right" })
        ], 8, kt)
      ]);
    };
  }
}, $t = { class: "row" }, wt = { class: "col-12" }, Ct = { class: "d-flex" }, St = { class: "flex-shrink-0" }, Rt = { class: "flex-grow-1" }, jt = { class: "d-flex" }, qt = { class: "flex-grow-1 d-flex flex-column ms-3" }, Pt = { class: "eit-font--primary mb-0" }, Dt = { class: "eit-color--text mb-0" }, Bt = { class: "flex-shrink-0" }, Tt = {
  key: 0,
  class: "dropdown eit-dropdown d-none d-lg-block"
}, Nt = {
  href: "javascript:",
  class: "eit-btn-action",
  "data-bs-toggle": "dropdown"
}, Lt = { class: "dropdown-menu dropdown-custom-menu" }, Mt = {
  key: 0,
  class: "mx-2"
}, zt = {
  key: 1,
  class: "mx-2"
}, At = {
  key: 2,
  class: "m-2"
}, Et = /* @__PURE__ */ o("div", { class: "eit-border--bottom eit-border--color" }, null, -1), Ot = [
  Et
], Vt = {
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
  setup(t, { emit: i }) {
    const a = t, s = i, r = () => {
      s("emitslide");
    }, l = (p) => {
      s("enabledDisabledRecord", p);
    }, d = (p) => {
      s("editRecord", p);
    }, u = (p) => {
      s("deleteRecord", p);
    }, y = (p) => {
      s("downloadRecord", p);
    };
    return (p, m) => {
      const h = P("font-awesome-icon");
      return e(), n("section", {
        class: C(["eit-slide d-flex flex-column", [t.slide && "eit-slide--right", t.slideSmall && "eit-slide--small"]])
      }, [
        a.loading ? (e(), R(U, {
          key: 0,
          type: "detail"
        })) : c("", !0),
        a.loading ? c("", !0) : (e(), n(_, { key: 1 }, [
          o("div", $t, [
            o("div", wt, [
              o("div", Ct, [
                o("div", St, [
                  o("button", {
                    class: "eit-btn eit-btn--gray eit-btn--square",
                    onClick: r
                  }, [
                    f(h, {
                      icon: "fa-solid fa-angle-right",
                      class: "eit-font__size--x5 d-none d-lg-block"
                    }),
                    f(h, {
                      icon: "fa-solid fa-angle-down",
                      class: "eit-font__size--x5 d-lg-none"
                    })
                  ])
                ]),
                o("div", Rt, [
                  o("div", jt, [
                    o("div", qt, [
                      o("h4", Pt, [
                        o("strong", null, [
                          j(p.$slots, "title")
                        ])
                      ]),
                      o("p", Dt, [
                        j(p.$slots, "subtitle")
                      ])
                    ]),
                    o("div", Bt, [
                      a.dropdown ? (e(), n("div", Tt, [
                        o("a", Nt, [
                          f(h, { icon: "fa-solid fa-ellipsis" })
                        ]),
                        o("ul", Lt, [
                          a.editRecord ? (e(), n("li", Mt, [
                            o("a", {
                              onClick: m[0] || (m[0] = (k) => d(a.record)),
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              f(h, {
                                icon: "fa-solid fa-square-pen",
                                class: "eit-color--yellow"
                              }),
                              b(" " + g(t.editRecord), 1)
                            ])
                          ])) : c("", !0),
                          a.downloadRecord ? (e(), n("li", zt, [
                            o("a", {
                              onClick: m[1] || (m[1] = (k) => y(a.record)),
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              f(h, {
                                icon: "fa-solid fa-download",
                                class: "eit-color--blue"
                              }),
                              b(" " + g(a.downloadRecord), 1)
                            ])
                          ])) : c("", !0),
                          t.deleteRecord || t.enabledDisabledRecord ? (e(), n("li", At, Ot)) : c("", !0),
                          a.enabledDisabledRecord ? (e(), n("li", Vt, [
                            o("a", {
                              onClick: m[2] || (m[2] = (k) => l(t.record)),
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              a.record.status ? c("", !0) : (e(), n(_, { key: 0 }, [
                                f(h, {
                                  icon: "fa-regular fa-circle-check",
                                  class: "eit-color--green"
                                }),
                                b(" Habilitar ")
                              ], 64)),
                              a.record.status ? (e(), n(_, { key: 1 }, [
                                f(h, {
                                  icon: "fa-solid fa-ban",
                                  class: "eit-color--red"
                                }),
                                b(" Deshabilitar ")
                              ], 64)) : c("", !0)
                            ])
                          ])) : c("", !0),
                          a.deleteRecord ? (e(), n("li", Ft, [
                            o("a", {
                              onClick: m[3] || (m[3] = (k) => u(a.record)),
                              class: "dropdown-item dropdown-custom-menu-item eit-color--red",
                              href: "javascript:"
                            }, [
                              f(h, {
                                icon: "fa-solid fa-trash",
                                class: "eit-color--red"
                              }),
                              b(" " + g(a.deleteRecord), 1)
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
          o("div", Ht, [
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
  setup(t) {
    const i = t, a = (l) => l < 99 ? l : "+99", s = q(0), r = (l) => {
      s.value = l;
    };
    return (l, d) => (e(), n(_, null, [
      o("div", Yt, [
        o("ul", {
          class: C(`eit-tabs ${i.className}`)
        }, [
          (e(!0), n(_, null, D(t.data, (u, y) => (e(), n("li", {
            key: y,
            class: "eit-tabs__item"
          }, [
            o("a", {
              href: "javascript:",
              onClick: (p) => r(y),
              class: C(["eit-tabs__item__link", s.value === y ? "active" : ""])
            }, [
              b(g(u.name) + " ", 1),
              u.number ? (e(), n("span", Zt, g(a(u.number)), 1)) : c("", !0)
            ], 10, Gt)
          ]))), 128))
        ], 2),
        j(l.$slots, "dropdown")
      ]),
      o("div", Jt, [
        o("div", Qt, [
          j(l.$slots, `tab-${s.value}`)
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
  setup(t) {
    const i = t, a = q("");
    return (async () => {
      const r = `${i.code}`;
      a.value = await ce(r, {
        lang: i.lang,
        theme: i.theme
      });
    })(), (r, l) => (e(), n("div", { innerHTML: a.value }, null, 8, Xt));
  }
}, to = { class: "eit-dialog__content" }, oo = { class: "d-flex justify-content-between align-items-center" }, so = { class: "d-flex gap-2 justify-content-end mt-3" }, no = {
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
  setup(t, { expose: i, emit: a }) {
    const s = t, r = a, l = q(null), d = () => {
      l.value.showModal(), l.value.classList.add("show");
    }, u = () => {
      l.value.close(), l.value.classList.remove("show"), r("emitCloseDialog");
    }, y = (m) => {
      m.key === "Escape" && u();
    }, p = () => {
      r("emitSubmit");
    };
    return ie(() => {
      document.addEventListener("keyup", y);
    }), i({ showDialog: d, closeDialog: u }), (m, h) => {
      const k = P("font-awesome-icon");
      return e(), n("dialog", {
        ref_key: "dialog",
        ref: l,
        class: C(["eit-dialog", s.className]),
        onKeyup: K(u, ["esc"])
      }, [
        o("div", to, [
          t.loading ? (e(), R(V(oe), {
            key: 0,
            size: "70"
          })) : c("", !0),
          t.loading ? c("", !0) : (e(), n(_, { key: 1 }, [
            o("div", oo, [
              j(m.$slots, "head"),
              o("button", {
                onClick: u,
                class: "eit-dialog__close"
              }, [
                f(k, { icon: ["fas", "xmark"] })
              ])
            ]),
            o("div", {
              class: C(`eit-dialog__body ${t.scrollable ? "eit-dialog__body--scroll" : ""}`)
            }, [
              j(m.$slots, "content")
            ], 2),
            o("div", so, [
              f(V(I), {
                onClick: u,
                className: "eit-btn-outline--gray",
                text: "Volver"
              }),
              s.btnSubmit ? (e(), R(V(I), {
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
  setup(t) {
    const i = t;
    return (a, s) => (e(), n("div", lo, [
      o("div", ao, [
        io,
        o("div", ro, [
          o("table", co, [
            uo,
            o("tbody", null, [
              (e(!0), n(_, null, D(i.data, (r) => (e(), n("tr", {
                key: r.name
              }, [
                o("td", null, [
                  f(L, {
                    text: r.name,
                    className: "eit-badge__outline--gray"
                  }, null, 8, ["text"])
                ]),
                o("td", null, [
                  o("code", null, g(r.type), 1)
                ]),
                o("td", null, [
                  o("code", null, g(r.default), 1)
                ])
              ]))), 128))
            ])
          ])
        ])
      ])
    ]));
  }
}, po = { class: "eit-progress eit-progress--30" }, mo = { key: 1 }, _o = /* @__PURE__ */ o("span", { class: "spinner-border spinner-border-sm" }, null, -1), ho = {
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
    const i = t, a = S(() => parseFloat(i.percentage)), s = S(() => a.value === 0 ? 0 : 100 - a.value);
    return (r, l) => (e(), n("div", po, [
      o("div", {
        class: C(["eit-progress__bar", `eit-progress__bar--${i.type}`]),
        style: H(`width: ${i.percentage}%`)
      }, [
        a.value !== 0 ? (e(), n(_, { key: 0 }, [
          i.percentage > 5 ? (e(), n(_, { key: 0 }, [
            b(g(i.percentage) + "% ", 1)
          ], 64)) : c("", !0)
        ], 64)) : c("", !0)
      ], 6),
      o("div", {
        class: "eit-progress__bar eit-progress__bar--transparent",
        style: H(`width: ${s.value === 0 ? 100 : s.value}%`)
      }, [
        i.loading ? c("", !0) : (e(), n(_, { key: 0 }, [
          s.value === 0 || s.value > 5 ? (e(), n(_, { key: 0 }, [
            b(g(s.value) + "% ", 1)
          ], 64)) : c("", !0)
        ], 64)),
        i.loading ? (e(), n("span", mo, [
          _o,
          b(" Cargando... ")
        ])) : c("", !0)
      ], 4)
    ]));
  }
}, yo = { class: "d-flex" }, vo = { class: "flex-shrink-0 eit-toast__left" }, go = {
  key: "success",
  class: "eit-toast__icon eit-font__size--x7"
}, bo = {
  key: "error",
  class: "eit-toast__icon eit-font__size--x7"
}, ko = {
  key: "warning",
  class: "eit-toast__icon eit-font__size--x7"
}, xo = {
  key: "info",
  class: "eit-toast__icon eit-font__size--x7"
}, $o = { class: "flex-grow-1 ms-3" }, wo = { class: "d-flex" }, Co = { class: "flex-grow-1 me-3" }, So = { class: "eit-toast__title" }, Ro = { class: "eit-toast__text" }, jo = { class: "flex-shrink-0" }, qo = {
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
    const a = t, s = q(!1), r = q("hidden"), l = q(""), d = S(() => ({
      show: s.value,
      hide: !s.value,
      [a.position]: a.position,
      hidden: r.value
    })), u = () => {
      clearTimeout(l.value), s.value = !0, r.value = "", l.value = setTimeout(() => {
        s.value = !1, setTimeout(() => r.value = "hidden", "300");
      }, a.visible);
    }, y = () => {
      s.value = !1, setTimeout(() => r.value = "hidden", "300"), clearTimeout(l.value);
    };
    return i({ handleShowToast: u, handleCloseToast: y }), (p, m) => {
      const h = P("font-awesome-icon");
      return e(), n("div", {
        class: C(["eit-toast__container", d.value])
      }, [
        o("div", {
          class: C(["eit-toast box-shadow", `eit-toast--${a.data.type}`])
        }, [
          o("div", yo, [
            o("div", vo, [
              a.type === "success" ? (e(), n("span", go, [
                f(h, { icon: "fa-solid fa-circle-check" })
              ])) : c("", !0),
              a.type === "error" ? (e(), n("span", bo, [
                f(h, { icon: "fa-solid fa-circle-xmark" })
              ])) : c("", !0),
              a.type === "warning" ? (e(), n("span", ko, [
                f(h, { icon: "fa-solid fa-triangle-exclamation" })
              ])) : c("", !0),
              a.type === "info" ? (e(), n("span", xo, [
                f(h, { icon: "fa-solid fa-circle-info" })
              ])) : c("", !0)
            ]),
            o("div", $o, [
              o("div", wo, [
                o("div", Co, [
                  o("p", So, [
                    a.data.code ? (e(), n(_, { key: 0 }, [
                      b(g(a.data.code), 1)
                    ], 64)) : c("", !0),
                    b(" " + g(a.data.title), 1)
                  ]),
                  o("p", Ro, g(a.data.message), 1)
                ]),
                o("div", jo, [
                  o("a", {
                    onClick: m[0] || (m[0] = (k) => y()),
                    href: "javascript:",
                    class: "eit-toast__close"
                  }, [
                    f(h, { icon: "fa-solid fa-xmark" })
                  ])
                ])
              ])
            ])
          ])
        ], 2)
      ], 2);
    };
  }
}, Po = { class: "d-flex" }, Do = { class: "flex-shrink-0 eit-popover__left" }, Bo = {
  key: "success",
  class: "eit-popover__icon eit-font__size--x7"
}, To = {
  key: "error",
  class: "eit-popover__icon eit-font__size--x7"
}, No = {
  key: "warning",
  class: "eit-popover__icon eit-font__size--x7"
}, Lo = {
  key: "info",
  class: "eit-popover__icon eit-font__size--x7"
}, Mo = { class: "flex-grow-1 ms-3" }, zo = { class: "d-flex" }, Ao = { class: "flex-grow-1 me-3" }, Eo = { class: "eit-popover__title" }, Oo = { class: "eit-popover__text" }, Vo = { class: "flex-shrink-0" }, Fo = {
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
  setup(t, { expose: i }) {
    const a = t, s = q(null), r = S(() => ({
      [a.position]: a.position
    })), l = () => {
      s.value.showPopover();
    }, d = () => {
      s.value.hidePopover();
    };
    return i({ handleShowPopover: l, handleClosePopover: d }), (u, y) => {
      const p = P("font-awesome-icon");
      return e(), n("div", {
        ref_key: "popover",
        ref: s,
        class: C(["eit-popover__container", r.value]),
        popover: "manual"
      }, [
        o("div", {
          class: C(["eit-popover box-shadow", `eit-popover--${a.data.type}`])
        }, [
          o("div", Po, [
            o("div", Do, [
              a.type === "success" ? (e(), n("span", Bo, [
                f(p, { icon: "fa-solid fa-circle-check" })
              ])) : c("", !0),
              a.type === "error" ? (e(), n("span", To, [
                f(p, { icon: "fa-solid fa-circle-xmark" })
              ])) : c("", !0),
              a.type === "warning" ? (e(), n("span", No, [
                f(p, { icon: "fa-solid fa-triangle-exclamation" })
              ])) : c("", !0),
              a.type === "info" ? (e(), n("span", Lo, [
                f(p, { icon: "fa-solid fa-circle-info" })
              ])) : c("", !0)
            ]),
            o("div", Mo, [
              o("div", zo, [
                o("div", Ao, [
                  o("p", Eo, [
                    a.data.code ? (e(), n(_, { key: 0 }, [
                      b(g(a.data.code), 1)
                    ], 64)) : c("", !0),
                    b(" " + g(a.data.title), 1)
                  ]),
                  o("p", Oo, g(a.data.message), 1)
                ]),
                o("div", Vo, [
                  o("a", {
                    onClick: y[0] || (y[0] = (m) => d()),
                    href: "javascript:",
                    class: "eit-popover__close"
                  }, [
                    f(p, { icon: "fa-solid fa-xmark" })
                  ])
                ])
              ])
            ])
          ])
        ], 2)
      ], 2);
    };
  }
}, Ho = ["type", "maxlength", "placeholder"], Io = {
  key: 0,
  class: "eit-label-float"
}, Ko = {
  key: 1,
  class: "eit-input__display__icon eit-input__display__float-left--icon"
}, Uo = {
  key: 2,
  class: "eit-input__display__icon eit-input__display__float-right--icon"
}, Yo = {
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
    const s = t, r = a, l = q(""), d = S(
      () => s.validation ? s.validation(l.value) : !0
    ), u = S(() => !d.value && s.requiredField && s.error ? "is-invalid" : ""), y = S(() => s.floatLabel ? "" : s.placeHolder), p = S(() => [
      s.floatLabel || s.floatLeft || s.floatRight ? "eit-input__display" : "",
      s.floatLeft ? "eit-input__display__float-left" : "",
      s.floatRight ? "eit-input__display__float-right" : ""
    ]), m = () => {
      r("emitPressEnter");
    }, h = () => {
      l.value = "";
    };
    return T(() => s.input, (k) => {
      k && (l.value = k);
    }), T(l, () => {
      r("emitValue", d.value ? l.value : "");
    }), E(() => {
      s.inputMask && (l.value = s.inputMask(l.value)), s.submitted && h();
    }), i({ clean: h }), (k, v) => (e(), n("div", {
      class: C(p.value)
    }, [
      z(o("input", {
        autocomplete: "off",
        class: C(["form-control eit-input", u.value]),
        type: t.inputType,
        "onUpdate:modelValue": v[0] || (v[0] = (N) => l.value = N),
        maxlength: s.maxLength,
        onKeypress: v[1] || (v[1] = (N) => s.keyPress && s.keyPress(N)),
        placeholder: y.value,
        onKeyup: K(m, ["enter"])
      }, null, 42, Ho), [
        [
          re,
          l.value,
          void 0,
          { trim: !0 }
        ]
      ]),
      s.floatLabel ? (e(), n("label", Io, g(s.floatLabel), 1)) : c("", !0),
      s.floatLeft ? (e(), n("span", Ko, [
        j(k.$slots, "float-left")
      ])) : c("", !0),
      s.floatRight ? (e(), n("span", Uo, [
        j(k.$slots, "float-right")
      ])) : c("", !0)
    ], 2));
  }
}, Go = {
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
    const s = t, r = a, l = q(null), d = S(
      () => s.validation ? s.validation(l.value) : !0
    ), u = S(() => !d.value && s.requiredField && s.error ? "is-invalid" : ""), y = () => Array.isArray(l.value) ? s.data.filter((k) => !l.value.some((v) => v.id === k.id)) : s.data, p = () => l.value ? s.data.filter((k) => k.id !== l.value.id) : s.data, m = S(() => s.multiple ? y() : p());
    T(
      () => s.selected,
      (k) => {
        k && (l.value = k);
      },
      { immediate: !0 }
    ), T(l, () => {
      r("emitValue", d.value ? l.value : null);
    }), E(() => {
      s.submitted && h();
    });
    const h = () => {
      l.value = s.multiple ? [] : null;
    };
    return i({ clean: h }), (k, v) => {
      const N = P("v-select");
      return e(), R(N, {
        options: m.value,
        modelValue: l.value,
        "onUpdate:modelValue": v[0] || (v[0] = (w) => l.value = w),
        label: t.labelCustom,
        multiple: t.multiple,
        placeholder: t.placeHolder,
        class: C(["eit-select-component", u.value]),
        clearable: t.clearable,
        disabled: s.isDisabled
      }, {
        "no-options": F(() => [
          b(" No hay más resultados. ")
        ]),
        _: 1
      }, 8, ["options", "modelValue", "label", "multiple", "placeholder", "class", "clearable", "disabled"]);
    };
  }
}, Zo = ["maxlength", "placeholder"], Jo = {
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
    const s = t, r = a, l = q(null), d = q(""), u = S(() => s.validation && s.validation(d.value)), y = S(() => !u.value && s.requiredField && s.error ? "is-invalid" : ""), p = () => {
      d.value = "";
    };
    return T(
      () => s.input,
      (m) => {
        m && (d.value = m);
      }
    ), T(d, () => {
      l.value.style.height = "50px", l.value.style.height = `${l.value.scrollHeight}px`, r("emitValue", u.value ? d.value : "");
    }), E(() => {
      s.submitted && p();
    }), i({ clean: p }), (m, h) => z((e(), n("textarea", {
      ref_key: "textarea",
      ref: l,
      "onUpdate:modelValue": h[0] || (h[0] = (k) => d.value = k),
      maxlength: t.maxLength,
      autocomplete: "off",
      class: C(["form-control eit-textarea eit-textarea-resize", y.value]),
      placeholder: t.placeHolder
    }, null, 10, Zo)), [
      [
        X,
        d.value,
        void 0,
        { trim: !0 }
      ]
    ]);
  }
}, Qo = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20style='margin:%20auto;%20display:%20block;%20shape-rendering:%20auto;'%20width='200px'%20height='200px'%20viewBox='0%200%20100%20100'%20preserveAspectRatio='xMidYMid'%3e%3crect%20x='17.5'%20y='30'%20width='15'%20height='40'%20fill='%23009da6'%3e%3canimate%20attributeName='y'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='18;30;30'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.2s'%3e%3c/animate%3e%3canimate%20attributeName='height'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='64;40;40'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.2s'%3e%3c/animate%3e%3c/rect%3e%3crect%20x='42.5'%20y='30'%20width='15'%20height='40'%20fill='%2379cace'%3e%3canimate%20attributeName='y'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='20.999999999999996;30;30'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.1s'%3e%3c/animate%3e%3canimate%20attributeName='height'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='58.00000000000001;40;40'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.1s'%3e%3c/animate%3e%3c/rect%3e%3crect%20x='67.5'%20y='30'%20width='15'%20height='40'%20fill='%23a9e4e7'%3e%3canimate%20attributeName='y'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='20.999999999999996;30;30'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%3e%3c/animate%3e%3canimate%20attributeName='height'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='58.00000000000001;40;40'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%3e%3c/animate%3e%3c/rect%3e%3c/svg%3e", Wo = { class: "p-3 eit-loading" }, oe = {
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
    return (a, s) => (e(), n("div", Wo, [
      o("img", {
        style: H(`width:${i.size}px`),
        src: Qo
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
  DialogComponent: no,
  HighlightComponent: eo,
  InputComponent: Yo,
  LoadingComponent: oe,
  PaginationComponent: xt,
  PopoverComponent: Fo,
  ProgressBarComponent: ho,
  PropsComponent: fo,
  SelectComponent: Go,
  SkeletonComponent: U,
  TabComponent: Wt,
  TableComponent: yt,
  TextareaResizeComponent: Jo,
  ToastComponent: qo
}, Symbol.toStringTag, { value: "Module" }));
function Xo(t, i) {
  const a = ee(), s = S(() => a.meta.requiresAuth ? t.config.darkTheme ? i.logotipo.logo_dark : i.logotipo.logo_light : i.platformDarkTheme ? i.logotipo.logo_dark : i.logotipo.logo_light), r = S(() => t.config.darkTheme ? i.logotipo.isotipo_dark : i.logotipo.isotipo_light);
  return { logotipo: s, isotipo: r };
}
const fs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useLogos: Xo
}, Symbol.toStringTag, { value: "Module" }));
function es() {
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
  function s(l) {
    const d = l.length >= 8, u = /[A-Z]/.test(l), y = /[a-z]/.test(l), p = /[0-9]/.test(l), m = /[!@#$%^&*(),.?":{}|<>]/.test(l);
    return d && u && y && p && m;
  }
  function r(l) {
    return /^\+\d{3} \d{4}-\d{4}$/.test(l);
  }
  return {
    validateDefault: t,
    validateEmail: i,
    validateRut: a,
    validatePassword: s,
    validatePhone: r
  };
}
function ts() {
  function t(s) {
    return s.replace(/[.-]/g, "").replace(/^(\d{1,2})(\d{3})(\d{3})(\w{1})$/, "$1.$2.$3-$4");
  }
  function i(s) {
    return s.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  function a(s) {
    return s.replace(/\D/g, "").replace(/^(\d{3})(\d{4})(\d{4})$/, "+$1 $2-$3");
  }
  return { inputMaskRut: t, inputMaskCurrency: i, inputMaskPhone: a };
}
function os() {
  function t(i) {
    let a = String.fromCharCode(i.keyCode);
    if (/^[0-9Kk.-]/.test(a)) return !0;
    i.preventDefault();
  }
  return { keyPressRut: t };
}
function ss() {
  function t(i) {
    const { sort: a, data: s } = i, { keys: r, index: l, asc: d } = a, u = r[l];
    return s.sort((y, p) => {
      let m = y[u], h = p[u];
      return typeof m == "object" && m !== null && (m = m.name, h = h.name), m === h ? 0 : (m > h ? 1 : -1) * (d ? 1 : -1);
    }), s;
  }
  return { sortTable: t };
}
A.extend(de);
A.locale("es");
function ns() {
  function t(r) {
    return A(r).format("DD/MM/YYYY");
  }
  function i(r) {
    return A(r).fromNow();
  }
  function a(r) {
    let l = r.replace(/[^0-9kK]/g, ""), d = l.slice(0, -1).replace(/\B(?=(\d{3})+(?!\d))/g, "."), u = l.slice(-1).toUpperCase();
    return `${d}-${u}`;
  }
  function s(r) {
    return r === null ? "" : r.charAt(0).toUpperCase() + r.slice(1).toLowerCase();
  }
  return { formatDate: t, formatDateAgo: i, formatRut: a, formatCapitalize: s };
}
function ls() {
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
const ps = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useFormat: ns,
  useInputMask: ts,
  useKeypress: os,
  useTable: ss,
  useTooltip: ls,
  useValidator: es
}, Symbol.toStringTag, { value: "Module" })), ms = {
  install(t) {
    Object.keys(W).forEach((i) => {
      t.component(i, W[i]);
    });
  }
};
export {
  fs as composables,
  ms as default,
  ps as utils
};
