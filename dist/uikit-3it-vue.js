import { computed as S, resolveComponent as P, openBlock as e, createElementBlock as n, normalizeClass as w, Fragment as _, createTextVNode as b, toDisplayString as v, createCommentVNode as c, createBlock as R, createElementVNode as t, createVNode as f, withCtx as F, renderList as D, renderSlot as j, mergeProps as ne, createStaticVNode as ae, resolveDirective as le, withDirectives as z, ref as q, watch as B, watchEffect as O, withKeys as K, vModelText as X, onMounted as ie, unref as V, normalizeStyle as H, vModelDynamic as re } from "vue";
import { useRoute as ee } from "vue-router";
import { codeToHtml as ce } from "shiki";
import A from "dayjs";
import de from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";
const ue = ["disabled"], fe = /* @__PURE__ */ t("div", { class: "spinner-border spinner-border-sm me-1" }, null, -1), I = {
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
  setup(o, { emit: r }) {
    const l = o, s = r, i = S(() => ["eit-btn", `${l.className}`]), a = (d) => {
      s("emitEvent", d);
    };
    return (d, u) => {
      const y = P("font-awesome-icon");
      return e(), n("button", {
        onClick: u[0] || (u[0] = (p) => a(p)),
        class: w([i.value, "d-flex align-items-center justify-content-center gap-1"]),
        disabled: l.isDisabled
      }, [
        l.loading ? (e(), n(_, { key: 0 }, [
          fe,
          b(" " + v(l.loadingText), 1)
        ], 64)) : c("", !0),
        l.loading ? c("", !0) : (e(), n(_, { key: 1 }, [
          l.icon ? (e(), R(y, {
            key: 0,
            icon: l.icon
          }, null, 8, ["icon"])) : c("", !0),
          b(" " + v(o.text), 1)
        ], 64))
      ], 10, ue);
    };
  }
}, pe = { "aria-label": "breadcrumb" }, me = { class: "eit-breadcrumb" }, _e = /* @__PURE__ */ t("span", { class: "px-2 eit-color--text-soft" }, "/", -1), he = {
  key: 1,
  class: "eit-color--text-soft"
}, ye = {
  __name: "BreadcrumbComponent",
  setup(o) {
    const r = ee(), l = S(() => {
      let s = [], i = "";
      return r.matched.forEach((a, d) => {
        i += "/" + a.path.split("/")[d + 1], s.push({
          name: a.name,
          title: a.meta.title || "Sin título",
          path: i,
          last: d === r.matched.length - 1
        });
      }), s;
    });
    return (s, i) => {
      const a = P("font-awesome-icon"), d = P("router-link");
      return e(), n("nav", pe, [
        t("ul", me, [
          t("li", null, [
            f(d, {
              to: "/",
              class: "eit-color--text-soft eit-color--text-soft--link"
            }, {
              default: F(() => [
                f(a, { icon: "fa-solid fa-house" })
              ]),
              _: 1
            }),
            _e
          ]),
          (e(!0), n(_, null, D(l.value, (u, y) => (e(), n("li", {
            key: y,
            class: "eit-breadcrumb__item"
          }, [
            j(s.$slots, u.name, ne({ ref_for: !0 }, u), () => [
              u.last ? (e(), n("span", he, v(u.name), 1)) : (e(), R(d, {
                key: 0,
                to: u.path,
                class: "eit-color--text eit-color--text--link eit-color--underline"
              }, {
                default: F(() => [
                  b(v(u.name), 1)
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
  setup(o) {
    const r = o;
    return (l, s) => {
      const i = P("font-awesome-icon");
      return e(), n("span", {
        key: `badge-${r.text}`,
        class: w(`eit-badge ${r.className}`)
      }, [
        r.icon ? (e(), R(i, {
          key: 0,
          icon: r.icon,
          class: "me-1"
        }, null, 8, ["icon"])) : c("", !0),
        t("span", {
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
}, ke = /* @__PURE__ */ t("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "80%" }
}, null, -1), xe = [
  ke
], $e = { key: 1 }, we = /* @__PURE__ */ t("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "60%" }
}, null, -1), Ce = [
  we
], Se = {
  key: 0,
  class: "eit-skeleton__table-first-td"
}, Re = /* @__PURE__ */ t("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), je = [
  Re
], qe = { key: 1 }, Pe = /* @__PURE__ */ t("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), De = [
  Pe
], Te = /* @__PURE__ */ ae('<div class="row"><div class="col-12"><div class="d-flex"><div class="flex-shrink-0"><div class="eit-skeleton eit-skeleton__btn-square"></div></div><div class="flex-grow-1 ms-3"><div class="d-flex"><div class="flex-grow-1 ms-3"><div class="eit-skeleton eit-skeleton__title my-2" style="width:40%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div></div><div class="flex-shrink-0"><div class="eit-skeleton eit-skeleton__text my-2" style="width:30px;"></div></div></div></div></div></div></div><div class="row flex-grow-1"><div class="col-12 d-flex flex-column flex-grow-1"><div class="eit-slide__content flex-grow-1"><div class="mt-5"><div class="col-12"><h5 class="mb-3"><div class="eit-skeleton eit-skeleton__title my-2" style="width:20%;"></div></h5><ul class="list-unstyled"><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:40%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:20%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:20%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li></ul></div></div></div></div></div>', 2), U = {
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
  setup(o) {
    const r = o;
    return (l, s) => (e(), n(_, null, [
      r.type === "table" ? (e(), n("table", ve, [
        t("thead", null, [
          t("tr", null, [
            (e(!0), n(_, null, D(r.table.column, (i) => (e(), n(_, { key: i }, [
              i === 1 ? (e(), n("th", be, xe)) : c("", !0),
              i > 1 ? (e(), n("th", $e, Ce)) : c("", !0)
            ], 64))), 128))
          ])
        ]),
        t("tbody", null, [
          (e(!0), n(_, null, D(r.table.row, (i) => (e(), n("tr", { key: i }, [
            (e(!0), n(_, null, D(r.table.column, (a) => (e(), n(_, { key: a }, [
              a === 1 ? (e(), n("td", Se, je)) : c("", !0),
              a > 1 ? (e(), n("td", qe, De)) : c("", !0)
            ], 64))), 128))
          ]))), 128))
        ])
      ])) : c("", !0),
      r.type === "detail" ? (e(), n(_, { key: 1 }, [
        Te
      ], 64)) : c("", !0)
    ], 64));
  }
}, Be = { class: "d-flex align-items-center" }, Ne = { class: "flex-shrink-0 d-flex align-items-center eit-alert__icon me-2" }, Le = ["innerHTML"], te = {
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
  setup(o) {
    const r = o;
    return (l, s) => {
      const i = P("font-awesome-icon");
      return e(), n("div", {
        class: w(`eit-alert eit-alert--${r.type} ${r.animation.active ? "eit-alert--animation" : "eit-alert--default"} ${r.animation.show ? "eit-alert--animation--show" : ""}`)
      }, [
        t("div", Be, [
          t("div", Ne, [
            f(i, {
              icon: r.icon,
              class: w(o.iconClass)
            }, null, 8, ["icon", "class"])
          ]),
          t("div", {
            class: "flex-grow-1 eit-alert__text",
            innerHTML: r.message
          }, null, 8, Le)
        ])
      ], 2);
    };
  }
}, Me = { class: "row" }, ze = { class: "col-12" }, Ae = { class: "table eit-table eit-table-responsive" }, Oe = ["onClick"], Ee = /* @__PURE__ */ t("th", {
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
}, ot = /* @__PURE__ */ t("div", { class: "eit-border--bottom eit-border--color" }, null, -1), st = [
  ot
], nt = {
  key: 4,
  class: "mx-2"
}, at = ["onClick"], lt = {
  key: 5,
  class: "mx-2"
}, it = ["onClick"], rt = { class: "d-flex w-100 justify-content-between align-items-center d-lg-none text-end" }, ct = /* @__PURE__ */ t("strong", null, "Acciones:", -1), dt = { class: "d-flex flex-wrap gap-2 ms-3" }, ut = ["onClick"], ft = ["onClick"], pt = ["onClick"], mt = ["onClick"], _t = ["onClick"], ht = ["onClick"], yt = {
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
  setup(o, { emit: r }) {
    const l = o, s = r, i = (g) => {
      s("viewRecord", g);
    }, a = (g) => {
      s("editRecord", g);
    }, d = (g) => {
      s("deleteRecord", g);
    }, u = (g) => {
      s("downloadRecord", g);
    }, y = (g) => {
      s("updateSort", { index: g, asc: !l.sort.asc });
    }, p = (g) => {
      s("enabledDisabledRecord", g);
    }, m = (g) => typeof g == "string", h = (g) => typeof g == "object" && !Array.isArray(g), x = (g) => Array.isArray(g);
    return (g, N) => {
      var G, Z, J, Q;
      const C = P("font-awesome-icon"), Y = le("tippy");
      return e(), n("div", Me, [
        t("div", ze, [
          o.loading ? (e(), R(U, {
            key: 0,
            type: "table",
            table: { row: (G = o.skeleton) == null ? void 0 : G.row, column: (Z = o.skeleton) == null ? void 0 : Z.column }
          }, null, 8, ["table"])) : c("", !0),
          !o.loading && !((J = o.data) != null && J.length) ? (e(), R(te, {
            key: 1,
            ref: "alert",
            class: "mb-3",
            type: "info",
            icon: "fa-solid fa-info",
            message: "<strong>No hay resultados</strong> para tu búsqueda."
          }, null, 512)) : c("", !0),
          !o.loading && ((Q = o.data) != null && Q.length) ? (e(), n(_, { key: 2 }, [
            t("table", Ae, [
              t("thead", null, [
                t("tr", null, [
                  (e(!0), n(_, null, D(o.columns, (k, T) => (e(), n("th", {
                    key: `column-${T}`,
                    scope: "col"
                  }, [
                    t("a", {
                      onClick: ($) => y(T),
                      href: "javascript:",
                      class: "d-flex justify-content-between"
                    }, [
                      b(v(k) + " ", 1),
                      o.sort.index === T ? (e(), n("span", {
                        key: `icono-${k}`,
                        class: "d-flex ms-2 eit-color--text"
                      }, [
                        o.sort.asc ? c("", !0) : (e(), n("span", {
                          key: `down-${k}`
                        }, [
                          f(C, { icon: "fa-solid fa-sort-down align-baseline" })
                        ])),
                        o.sort.asc ? (e(), n("span", {
                          key: `up-${k}`
                        }, [
                          f(C, { icon: "fa-solid fa-sort-up align-baseline" })
                        ])) : c("", !0)
                      ])) : (e(), n("span", {
                        key: `key-${k}`
                      }, [
                        f(C, { icon: "fa-solid fa-sort" })
                      ]))
                    ], 8, Oe)
                  ]))), 128)),
                  Ee
                ])
              ]),
              t("tbody", null, [
                (e(!0), n(_, null, D(o.data, (k, T) => (e(), n("tr", {
                  key: `row-${T}`,
                  class: w(k != null && k.status ? "" : "disabled")
                }, [
                  (e(!0), n(_, null, D(k, ($, M) => (e(), n("td", {
                    key: `value-${M}`
                  }, [
                    t("strong", Ve, v(o.columns[Object.keys(k).indexOf(M)]) + ":", 1),
                    Object.keys(k)[o.columnLink] === M ? (e(), n(_, { key: 0 }, [
                      o.viewRecord ? (e(), n("a", {
                        key: 0,
                        onClick: (E) => i(k),
                        href: "javascript:",
                        class: "eit-table__link"
                      }, v($), 9, Fe)) : c("", !0),
                      o.viewRecord ? c("", !0) : (e(), n(_, { key: 1 }, [
                        b(v($), 1)
                      ], 64))
                    ], 64)) : c("", !0),
                    Object.keys(k)[o.columnLink] !== M ? (e(), n(_, { key: 1 }, [
                      x($) ? (e(), n("div", He, [
                        (e(!0), n(_, null, D($, (E, se) => (e(), n("span", {
                          key: `value-array-${se}`,
                          class: "d-flex flex-wrap gap-1"
                        }, [
                          f(L, {
                            text: E.name,
                            className: E.className
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
                      m($) ? (e(), n("span", Ie, v($), 1)) : c("", !0)
                    ], 64)) : c("", !0)
                  ]))), 128)),
                  t("td", Ke, [
                    t("div", Ue, [
                      t("a", Ye, [
                        f(C, { icon: "fa-solid fa-ellipsis" })
                      ]),
                      t("ul", Ge, [
                        o.viewRecord ? (e(), n("li", Ze, [
                          t("a", {
                            onClick: ($) => i(k),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            f(C, {
                              icon: "fa-regular fa-eye",
                              class: "eit-color--blue"
                            }),
                            b(" " + v(o.viewRecord), 1)
                          ], 8, Je)
                        ])) : c("", !0),
                        o.editRecord ? (e(), n("li", Qe, [
                          t("a", {
                            onClick: ($) => a(k),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            f(C, {
                              icon: "fa-solid fa-square-pen",
                              class: "eit-color--yellow"
                            }),
                            b(" " + v(o.editRecord), 1)
                          ], 8, We)
                        ])) : c("", !0),
                        o.downloadRecord ? (e(), n("li", Xe, [
                          t("a", {
                            onClick: ($) => u(k),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            f(C, {
                              icon: "fa-solid fa-download",
                              class: "eit-color--blue"
                            }),
                            b(" " + v(o.downloadRecord), 1)
                          ], 8, et)
                        ])) : c("", !0),
                        o.deleteRecord || o.enabledDisabledRecord ? (e(), n("li", tt, st)) : c("", !0),
                        o.enabledDisabledRecord ? (e(), n("li", nt, [
                          t("a", {
                            onClick: ($) => p(k),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            k.status ? c("", !0) : (e(), n(_, { key: 0 }, [
                              f(C, {
                                icon: "fa-regular fa-circle-check",
                                class: "eit-color--green"
                              }),
                              b(" Habilitar ")
                            ], 64)),
                            k.status ? (e(), n(_, { key: 1 }, [
                              f(C, {
                                icon: "fa-solid fa-ban",
                                class: "eit-color--red"
                              }),
                              b(" Deshabilitar ")
                            ], 64)) : c("", !0)
                          ], 8, at)
                        ])) : c("", !0),
                        o.deleteRecord ? (e(), n("li", lt, [
                          t("a", {
                            onClick: ($) => d(T),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            f(C, {
                              icon: "fa-solid fa-trash",
                              class: "eit-color--red"
                            }),
                            b(" " + v(o.deleteRecord), 1)
                          ], 8, it)
                        ])) : c("", !0)
                      ])
                    ]),
                    t("div", rt, [
                      ct,
                      t("div", dt, [
                        o.viewRecord ? (e(), n("a", {
                          key: 0,
                          onClick: ($) => i(k),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          f(C, {
                            icon: "fa-regular fa-eye",
                            class: "eit-color--blue"
                          })
                        ], 8, ut)) : c("", !0),
                        o.editRecord ? (e(), n("a", {
                          key: 1,
                          onClick: ($) => a(k),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          f(C, {
                            icon: "fa-solid fa-square-pen",
                            class: "eit-color--yellow"
                          })
                        ], 8, ft)) : c("", !0),
                        o.downloadRecord ? (e(), n("a", {
                          key: 2,
                          onClick: ($) => u(k),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          f(C, {
                            icon: "fa-solid fa-download",
                            class: "eit-color--blue"
                          })
                        ], 8, pt)) : c("", !0),
                        o.enabledDisabledRecord ? (e(), n(_, { key: 3 }, [
                          k.status ? c("", !0) : z((e(), n("a", {
                            key: 0,
                            onClick: ($) => p(k),
                            href: "javascript:",
                            class: "eit-btn eit-btn-outline--gray eit-btn--square"
                          }, [
                            f(C, {
                              icon: "fa-regular fa-circle-check",
                              class: "eit-color--green"
                            })
                          ], 8, mt)), [
                            [Y, { content: "Habilitar", theme: "main" }]
                          ]),
                          k.status ? z((e(), n("a", {
                            key: 1,
                            onClick: ($) => p(k),
                            href: "javascript:",
                            class: "eit-btn eit-btn-outline--gray eit-btn--square"
                          }, [
                            f(C, {
                              icon: "fa-solid fa-ban",
                              class: "eit-color--red"
                            })
                          ], 8, _t)), [
                            [Y, { content: "Deshabilitar", theme: "main" }]
                          ]) : c("", !0)
                        ], 64)) : c("", !0),
                        o.deleteRecord ? (e(), n("a", {
                          key: 4,
                          onClick: ($) => d(T),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          f(C, {
                            icon: "fa-solid fa-trash",
                            class: "eit-color--red"
                          })
                        ], 8, ht)) : c("", !0)
                      ])
                    ])
                  ])
                ], 2))), 128))
              ])
            ]),
            j(g.$slots, "paginator")
          ], 64)) : c("", !0)
        ])
      ]);
    };
  }
}, gt = { class: "eit-paginator gap-2" }, vt = ["disabled"], bt = { class: "eit-color--text eit-font__size--x1" }, kt = ["disabled"], xt = {
  __name: "PaginationComponent",
  props: {
    data: {
      type: Object,
      required: !0
    }
  },
  emits: ["updatePaginator"],
  setup(o, { emit: r }) {
    const l = o, s = r, i = q(l.data.currentPage), a = () => i.value++, d = () => i.value--, u = () => {
      i.value <= 0 && (i.value = 1), i.value > l.data.finalPage && (i.value = l.data.finalPage);
    }, y = (p) => {
      p.target.select();
    };
    return B(i, () => {
      i.value > 0 && i.value <= l.data.finalPage && s("updatePaginator", i.value);
    }), O(() => {
      l.data && (i.value = l.data.currentPage);
    }), (p, m) => {
      const h = P("font-awesome-icon");
      return e(), n("div", gt, [
        t("button", {
          onClick: d,
          disabled: o.data.currentPage === 1,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          f(h, { icon: "fa-solid fa-chevron-left" })
        ], 8, vt),
        z(t("input", {
          type: "number",
          "onUpdate:modelValue": m[0] || (m[0] = (x) => i.value = x),
          onInput: u,
          onKeyup: K(u, ["enter"]),
          onBlur: u,
          onFocus: y,
          class: "eit-input eit-paginator__input eit-font__size--x1 text-center",
          "aria-label": "Número de página"
        }, null, 544), [
          [
            X,
            i.value,
            void 0,
            { number: !0 }
          ]
        ]),
        t("span", bt, [
          b(" de " + v(o.data.finalPage) + " ", 1),
          o.data.finalPage === 1 ? (e(), n(_, { key: 0 }, [
            b(" página ")
          ], 64)) : c("", !0),
          o.data.finalPage > 1 ? (e(), n(_, { key: 1 }, [
            b(" páginas ")
          ], 64)) : c("", !0)
        ]),
        t("button", {
          onClick: a,
          disabled: o.data.currentPage === o.data.finalPage,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          f(h, { icon: "fa-solid fa-chevron-right" })
        ], 8, kt)
      ]);
    };
  }
}, $t = { class: "row" }, wt = { class: "col-12" }, Ct = { class: "d-flex" }, St = { class: "flex-shrink-0" }, Rt = { class: "flex-grow-1" }, jt = { class: "d-flex" }, qt = { class: "flex-grow-1 d-flex flex-column ms-3" }, Pt = { class: "eit-font--primary mb-0" }, Dt = { class: "eit-color--text mb-0" }, Tt = { class: "flex-shrink-0" }, Bt = {
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
}, Ot = /* @__PURE__ */ t("div", { class: "eit-border--bottom eit-border--color" }, null, -1), Et = [
  Ot
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
  setup(o, { emit: r }) {
    const l = o, s = r, i = () => {
      s("emitslide");
    }, a = (p) => {
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
        class: w(["eit-slide d-flex flex-column", [o.slide && "eit-slide--right", o.slideSmall && "eit-slide--small"]])
      }, [
        l.loading ? (e(), R(U, {
          key: 0,
          type: "detail"
        })) : c("", !0),
        l.loading ? c("", !0) : (e(), n(_, { key: 1 }, [
          t("div", $t, [
            t("div", wt, [
              t("div", Ct, [
                t("div", St, [
                  t("button", {
                    class: "eit-btn eit-btn--gray eit-btn--square",
                    onClick: i
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
                t("div", Rt, [
                  t("div", jt, [
                    t("div", qt, [
                      t("h4", Pt, [
                        t("strong", null, [
                          j(p.$slots, "title")
                        ])
                      ]),
                      t("p", Dt, [
                        j(p.$slots, "subtitle")
                      ])
                    ]),
                    t("div", Tt, [
                      l.dropdown ? (e(), n("div", Bt, [
                        t("a", Nt, [
                          f(h, { icon: "fa-solid fa-ellipsis" })
                        ]),
                        t("ul", Lt, [
                          l.editRecord ? (e(), n("li", Mt, [
                            t("a", {
                              onClick: m[0] || (m[0] = (x) => d(l.record)),
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              f(h, {
                                icon: "fa-solid fa-square-pen",
                                class: "eit-color--yellow"
                              }),
                              b(" " + v(o.editRecord), 1)
                            ])
                          ])) : c("", !0),
                          l.downloadRecord ? (e(), n("li", zt, [
                            t("a", {
                              onClick: m[1] || (m[1] = (x) => y(l.record)),
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              f(h, {
                                icon: "fa-solid fa-download",
                                class: "eit-color--blue"
                              }),
                              b(" " + v(l.downloadRecord), 1)
                            ])
                          ])) : c("", !0),
                          o.deleteRecord || o.enabledDisabledRecord ? (e(), n("li", At, Et)) : c("", !0),
                          l.enabledDisabledRecord ? (e(), n("li", Vt, [
                            t("a", {
                              onClick: m[2] || (m[2] = (x) => a(o.record)),
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              l.record.status ? c("", !0) : (e(), n(_, { key: 0 }, [
                                f(h, {
                                  icon: "fa-regular fa-circle-check",
                                  class: "eit-color--green"
                                }),
                                b(" Habilitar ")
                              ], 64)),
                              l.record.status ? (e(), n(_, { key: 1 }, [
                                f(h, {
                                  icon: "fa-solid fa-ban",
                                  class: "eit-color--red"
                                }),
                                b(" Deshabilitar ")
                              ], 64)) : c("", !0)
                            ])
                          ])) : c("", !0),
                          l.deleteRecord ? (e(), n("li", Ft, [
                            t("a", {
                              onClick: m[3] || (m[3] = (x) => u(l.record)),
                              class: "dropdown-item dropdown-custom-menu-item eit-color--red",
                              href: "javascript:"
                            }, [
                              f(h, {
                                icon: "fa-solid fa-trash",
                                class: "eit-color--red"
                              }),
                              b(" " + v(l.deleteRecord), 1)
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
          t("div", Ht, [
            t("div", It, [
              t("div", Kt, [
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
  setup(o) {
    const r = o, l = (a) => a < 99 ? a : "+99", s = q(0), i = (a) => {
      s.value = a;
    };
    return (a, d) => (e(), n(_, null, [
      t("div", Yt, [
        t("ul", {
          class: w(`eit-tabs ${r.className}`)
        }, [
          (e(!0), n(_, null, D(o.data, (u, y) => (e(), n("li", {
            key: y,
            class: "eit-tabs__item"
          }, [
            t("a", {
              href: "javascript:",
              onClick: (p) => i(y),
              class: w(["eit-tabs__item__link", s.value === y ? "active" : ""])
            }, [
              b(v(u.name) + " ", 1),
              u.number ? (e(), n("span", Zt, v(l(u.number)), 1)) : c("", !0)
            ], 10, Gt)
          ]))), 128))
        ], 2),
        j(a.$slots, "dropdown")
      ]),
      t("div", Jt, [
        t("div", Qt, [
          j(a.$slots, `tab-${s.value}`)
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
  setup(o) {
    const r = o, l = q("");
    return (async () => {
      const i = `${r.code}`;
      l.value = await ce(i, {
        lang: r.lang,
        theme: r.theme
      });
    })(), (i, a) => (e(), n("div", { innerHTML: l.value }, null, 8, Xt));
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
  setup(o, { expose: r, emit: l }) {
    const s = o, i = l, a = q(null), d = () => {
      a.value.showModal(), a.value.classList.add("show");
    }, u = () => {
      a.value.close(), a.value.classList.remove("show"), i("emitCloseDialog");
    }, y = (m) => {
      m.key === "Escape" && u();
    }, p = () => {
      i("emitSubmit");
    };
    return ie(() => {
      document.addEventListener("keyup", y);
    }), r({ showDialog: d, closeDialog: u }), (m, h) => {
      const x = P("font-awesome-icon");
      return e(), n("dialog", {
        ref_key: "dialog",
        ref: a,
        class: w(["eit-dialog", s.className]),
        onKeyup: K(u, ["esc"])
      }, [
        t("div", to, [
          o.loading ? (e(), R(V(oe), {
            key: 0,
            size: "70"
          })) : c("", !0),
          o.loading ? c("", !0) : (e(), n(_, { key: 1 }, [
            t("div", oo, [
              j(m.$slots, "head"),
              t("button", {
                onClick: u,
                class: "eit-dialog__close"
              }, [
                f(x, { icon: ["fas", "xmark"] })
              ])
            ]),
            t("div", {
              class: w(`eit-dialog__body ${o.scrollable ? "eit-dialog__body--scroll" : ""}`)
            }, [
              j(m.$slots, "content")
            ], 2),
            t("div", so, [
              f(V(I), {
                onClick: u,
                className: "eit-btn-outline--gray",
                text: "Volver"
              }),
              s.btnSubmit ? (e(), R(V(I), {
                key: 0,
                className: s.btnSubmitConfig.className,
                text: s.btnSubmitConfig.text,
                loadingText: s.btnSubmitConfig.loadingText,
                loading: o.loadingSubmit,
                onEmitEvent: p,
                isDisabled: o.disabledSubmit
              }, null, 8, ["className", "text", "loadingText", "loading", "isDisabled"])) : c("", !0)
            ])
          ], 64))
        ])
      ], 34);
    };
  }
}, ao = { class: "row" }, lo = { class: "col" }, io = /* @__PURE__ */ t("h2", { class: "eit-font__size--x4 eit-color--text eit-font__weight--300 eit-border--bottom eit-border--color mb-3" }, [
  /* @__PURE__ */ t("strong", { class: "eit-font__weight--900" }, "Props")
], -1), ro = { class: "eit-table--overflow" }, co = { class: "table eit-table" }, uo = /* @__PURE__ */ t("thead", null, [
  /* @__PURE__ */ t("tr", null, [
    /* @__PURE__ */ t("th", null, "Name"),
    /* @__PURE__ */ t("th", null, "Type"),
    /* @__PURE__ */ t("th", null, "Default")
  ])
], -1), fo = {
  __name: "PropsComponent",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(o) {
    const r = o;
    return (l, s) => (e(), n("div", ao, [
      t("div", lo, [
        io,
        t("div", ro, [
          t("table", co, [
            uo,
            t("tbody", null, [
              (e(!0), n(_, null, D(r.data, (i) => (e(), n("tr", {
                key: i.name
              }, [
                t("td", null, [
                  f(L, {
                    text: i.name,
                    className: "eit-badge__outline--gray"
                  }, null, 8, ["text"])
                ]),
                t("td", null, [
                  t("code", null, v(i.type), 1)
                ]),
                t("td", null, [
                  t("code", null, v(i.default), 1)
                ])
              ]))), 128))
            ])
          ])
        ])
      ])
    ]));
  }
}, po = { class: "eit-progress eit-progress--30" }, mo = { key: 1 }, _o = /* @__PURE__ */ t("span", { class: "spinner-border spinner-border-sm" }, null, -1), ho = {
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
  setup(o) {
    const r = o, l = S(() => parseFloat(r.percentage)), s = S(() => l.value === 0 ? 0 : 100 - l.value);
    return (i, a) => (e(), n("div", po, [
      t("div", {
        class: w(["eit-progress__bar", `eit-progress__bar--${r.type}`]),
        style: H(`width: ${r.percentage}%`)
      }, [
        l.value !== 0 ? (e(), n(_, { key: 0 }, [
          r.percentage > 5 ? (e(), n(_, { key: 0 }, [
            b(v(r.percentage) + "% ", 1)
          ], 64)) : c("", !0)
        ], 64)) : c("", !0)
      ], 6),
      t("div", {
        class: "eit-progress__bar eit-progress__bar--transparent",
        style: H(`width: ${s.value === 0 ? 100 : s.value}%`)
      }, [
        r.loading ? c("", !0) : (e(), n(_, { key: 0 }, [
          s.value === 0 || s.value > 5 ? (e(), n(_, { key: 0 }, [
            b(v(s.value) + "% ", 1)
          ], 64)) : c("", !0)
        ], 64)),
        r.loading ? (e(), n("span", mo, [
          _o,
          b(" Cargando... ")
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
  setup(o, { expose: r }) {
    const l = o, s = q(!1), i = q("hidden"), a = q(""), d = S(() => ({
      show: s.value,
      hide: !s.value,
      [l.position]: l.position,
      hidden: i.value
    })), u = () => {
      clearTimeout(a.value), s.value = !0, i.value = "", a.value = setTimeout(() => {
        s.value = !1, setTimeout(() => i.value = "hidden", "300");
      }, l.visible);
    }, y = () => {
      s.value = !1, setTimeout(() => i.value = "hidden", "300"), clearTimeout(a.value);
    };
    return r({ handleShowToast: u, handleCloseToast: y }), (p, m) => {
      const h = P("font-awesome-icon");
      return e(), n("div", {
        class: w(["eit-toast__container", d.value])
      }, [
        t("div", {
          class: w(["eit-toast box-shadow", `eit-toast--${l.data.type}`])
        }, [
          t("div", yo, [
            t("div", go, [
              l.type === "success" ? (e(), n("span", vo, [
                f(h, { icon: "fa-solid fa-circle-check" })
              ])) : c("", !0),
              l.type === "error" ? (e(), n("span", bo, [
                f(h, { icon: "fa-solid fa-circle-xmark" })
              ])) : c("", !0),
              l.type === "warning" ? (e(), n("span", ko, [
                f(h, { icon: "fa-solid fa-triangle-exclamation" })
              ])) : c("", !0),
              l.type === "info" ? (e(), n("span", xo, [
                f(h, { icon: "fa-solid fa-circle-info" })
              ])) : c("", !0)
            ]),
            t("div", $o, [
              t("div", wo, [
                t("div", Co, [
                  t("p", So, [
                    l.data.code ? (e(), n(_, { key: 0 }, [
                      b(v(l.data.code), 1)
                    ], 64)) : c("", !0),
                    b(" " + v(l.data.title), 1)
                  ]),
                  t("p", Ro, v(l.data.message), 1)
                ]),
                t("div", jo, [
                  t("a", {
                    onClick: m[0] || (m[0] = (x) => y()),
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
}, Po = { class: "d-flex" }, Do = { class: "flex-shrink-0 eit-popover__left" }, To = {
  key: "success",
  class: "eit-popover__icon eit-font__size--x7"
}, Bo = {
  key: "error",
  class: "eit-popover__icon eit-font__size--x7"
}, No = {
  key: "warning",
  class: "eit-popover__icon eit-font__size--x7"
}, Lo = {
  key: "info",
  class: "eit-popover__icon eit-font__size--x7"
}, Mo = { class: "flex-grow-1 ms-3" }, zo = { class: "d-flex" }, Ao = { class: "flex-grow-1 me-3" }, Oo = { class: "eit-popover__title" }, Eo = { class: "eit-popover__text" }, Vo = { class: "flex-shrink-0" }, Fo = {
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
  setup(o, { expose: r }) {
    const l = o, s = q(null), i = S(() => ({
      [l.position]: l.position
    })), a = () => {
      s.value.showPopover();
    }, d = () => {
      s.value.hidePopover();
    };
    return r({ handleShowPopover: a, handleClosePopover: d }), (u, y) => {
      const p = P("font-awesome-icon");
      return e(), n("div", {
        ref_key: "popover",
        ref: s,
        class: w(["eit-popover__container", i.value]),
        popover: "manual"
      }, [
        t("div", {
          class: w(["eit-popover box-shadow", `eit-popover--${l.data.type}`])
        }, [
          t("div", Po, [
            t("div", Do, [
              l.type === "success" ? (e(), n("span", To, [
                f(p, { icon: "fa-solid fa-circle-check" })
              ])) : c("", !0),
              l.type === "error" ? (e(), n("span", Bo, [
                f(p, { icon: "fa-solid fa-circle-xmark" })
              ])) : c("", !0),
              l.type === "warning" ? (e(), n("span", No, [
                f(p, { icon: "fa-solid fa-triangle-exclamation" })
              ])) : c("", !0),
              l.type === "info" ? (e(), n("span", Lo, [
                f(p, { icon: "fa-solid fa-circle-info" })
              ])) : c("", !0)
            ]),
            t("div", Mo, [
              t("div", zo, [
                t("div", Ao, [
                  t("p", Oo, [
                    l.data.code ? (e(), n(_, { key: 0 }, [
                      b(v(l.data.code), 1)
                    ], 64)) : c("", !0),
                    b(" " + v(l.data.title), 1)
                  ]),
                  t("p", Eo, v(l.data.message), 1)
                ]),
                t("div", Vo, [
                  t("a", {
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
}, Ho = ["type", "maxlength", "placeholder", "disabled"], Io = {
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
  setup(o, { expose: r, emit: l }) {
    const s = o, i = l, a = q(""), d = S(
      () => s.validation ? s.validation(a.value) : !0
    ), u = S(() => !d.value && s.requiredField && s.error ? "is-invalid" : ""), y = S(() => s.floatLabel ? "" : s.placeHolder), p = S(() => [
      s.floatLabel || s.floatLeft || s.floatRight ? "eit-input__display" : "",
      s.floatLeft ? "eit-input__display__float-left" : "",
      s.floatRight ? "eit-input__display__float-right" : ""
    ]), m = () => {
      i("emitPressEnter");
    }, h = () => {
      a.value = "";
    };
    return B(() => s.input, (x) => {
      x && (a.value = x);
    }), B(a, () => {
      i("emitValue", d.value ? a.value : "");
    }), O(() => {
      s.inputMask && (a.value = s.inputMask(a.value)), s.submitted && h();
    }), r({ clean: h }), (x, g) => (e(), n("div", {
      class: w(p.value)
    }, [
      z(t("input", {
        autocomplete: "off",
        class: w(["form-control eit-input", u.value]),
        type: s.inputType,
        "onUpdate:modelValue": g[0] || (g[0] = (N) => a.value = N),
        maxlength: s.maxLength,
        onKeypress: g[1] || (g[1] = (N) => s.keyPress && s.keyPress(N)),
        placeholder: y.value,
        onKeyup: K(m, ["enter"]),
        disabled: s.isDisabled
      }, null, 42, Ho), [
        [
          re,
          a.value,
          void 0,
          { trim: !0 }
        ]
      ]),
      s.floatLabel ? (e(), n("label", Io, v(s.floatLabel), 1)) : c("", !0),
      s.floatLeft ? (e(), n("span", Ko, [
        j(x.$slots, "float-left")
      ])) : c("", !0),
      s.floatRight ? (e(), n("span", Uo, [
        j(x.$slots, "float-right")
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
  setup(o, { expose: r, emit: l }) {
    const s = o, i = l, a = q(null), d = S(
      () => s.validation ? s.validation(a.value) : !0
    ), u = S(() => !d.value && s.requiredField && s.error ? "is-invalid" : ""), y = () => Array.isArray(a.value) ? s.data.filter((x) => !a.value.some((g) => g.id === x.id)) : s.data, p = () => a.value ? s.data.filter((x) => x.id !== a.value.id) : s.data, m = S(() => s.multiple ? y() : p());
    B(
      () => s.selected,
      (x) => {
        x && (a.value = x);
      },
      { immediate: !0 }
    ), B(a, () => {
      i("emitValue", d.value ? a.value : null);
    }), O(() => {
      s.submitted && h();
    });
    const h = () => {
      a.value = s.multiple ? [] : null;
    };
    return r({ clean: h }), (x, g) => {
      const N = P("v-select");
      return e(), R(N, {
        options: m.value,
        modelValue: a.value,
        "onUpdate:modelValue": g[0] || (g[0] = (C) => a.value = C),
        label: o.labelCustom,
        multiple: o.multiple,
        placeholder: o.placeHolder,
        class: w(["eit-select-component", u.value]),
        clearable: o.clearable,
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
  setup(o, { expose: r, emit: l }) {
    const s = o, i = l, a = q(null), d = q(""), u = S(() => s.validation && s.validation(d.value)), y = S(() => !u.value && s.requiredField && s.error ? "is-invalid" : ""), p = () => {
      d.value = "";
    };
    return B(
      () => s.input,
      (m) => {
        m && (d.value = m);
      }
    ), B(d, () => {
      a.value.style.height = "50px", a.value.style.height = `${a.value.scrollHeight}px`, i("emitValue", u.value ? d.value : "");
    }), O(() => {
      s.submitted && p();
    }), r({ clean: p }), (m, h) => z((e(), n("textarea", {
      ref_key: "textarea",
      ref: a,
      "onUpdate:modelValue": h[0] || (h[0] = (x) => d.value = x),
      maxlength: o.maxLength,
      autocomplete: "off",
      class: w(["form-control eit-textarea eit-textarea-resize", y.value]),
      placeholder: o.placeHolder
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
  setup(o) {
    const r = o;
    return (l, s) => (e(), n("div", Wo, [
      t("img", {
        style: H(`width:${r.size}px`),
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
function Xo(o, r) {
  const l = ee(), s = S(() => l.meta.requiresAuth ? o.config.darkTheme ? r.logotipo.logo_dark : r.logotipo.logo_light : r.platformDarkTheme ? r.logotipo.logo_dark : r.logotipo.logo_light), i = S(() => o.config.darkTheme ? r.logotipo.isotipo_dark : r.logotipo.isotipo_light);
  return { logotipo: s, isotipo: i };
}
const fs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useLogos: Xo
}, Symbol.toStringTag, { value: "Module" }));
function es() {
  function o(a) {
    return !(a == null || typeof a == "string" && a.trim() === "" || typeof a == "object" && Object.keys(a).length === 0 || Array.isArray(a) && a.length === 0);
  }
  function r(a) {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(a);
  }
  function l(a) {
    if (a.length >= 11 && a.length <= 12 && /[.-]/.test(a)) return !0;
    if (a.length < 11) return !1;
  }
  function s(a) {
    const d = a.length >= 8, u = /[A-Z]/.test(a), y = /[a-z]/.test(a), p = /[0-9]/.test(a), m = /[!@#$%^&*(),.?":{}|<>]/.test(a);
    return d && u && y && p && m;
  }
  function i(a) {
    return /^\+\d{3} \d{4}-\d{4}$/.test(a);
  }
  return {
    validateDefault: o,
    validateEmail: r,
    validateRut: l,
    validatePassword: s,
    validatePhone: i
  };
}
function ts() {
  function o(i) {
    return i.replace(/[.-]/g, "").replace(/^(\d{1,2})(\d{3})(\d{3})(\w{1})$/, "$1.$2.$3-$4");
  }
  function r(i) {
    return i.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  function l(i) {
    return i.replace(/\D/g, "").replace(/^(\d{3})(\d{4})(\d{4})$/, "+$1 $2-$3");
  }
  function s(i) {
    return i.replace(/[^a-zA-Z]/g, "");
  }
  return { inputMaskRut: o, inputMaskCurrency: r, inputMaskPhone: l, inputOnlyLetters: s };
}
function os() {
  function o(r) {
    let l = String.fromCharCode(r.keyCode);
    if (/^[0-9Kk.-]/.test(l)) return !0;
    r.preventDefault();
  }
  return { keyPressRut: o };
}
function ss() {
  function o(r) {
    const { sort: l, data: s } = r, { keys: i, index: a, asc: d } = l, u = i[a];
    return s.sort((y, p) => {
      let m = y[u], h = p[u];
      return typeof m == "object" && m !== null && (m = m.name, h = h.name), m === h ? 0 : (m > h ? 1 : -1) * (d ? 1 : -1);
    }), s;
  }
  return { sortTable: o };
}
A.extend(de);
A.locale("es");
function ns() {
  function o(i) {
    return A(i).format("DD/MM/YYYY");
  }
  function r(i) {
    return A(i).fromNow();
  }
  function l(i) {
    let a = i.replace(/[^0-9kK]/g, ""), d = a.slice(0, -1).replace(/\B(?=(\d{3})+(?!\d))/g, "."), u = a.slice(-1).toUpperCase();
    return `${d}-${u}`;
  }
  function s(i) {
    return i === null ? "" : i.charAt(0).toUpperCase() + i.slice(1).toLowerCase();
  }
  return { formatDate: o, formatDateAgo: r, formatRut: l, formatCapitalize: s };
}
function as() {
  function o(r, l) {
    return l ? {
      content: r,
      theme: "main",
      placement: "right",
      appendTo: "parent"
    } : { content: r, theme: "main", placement: "right" };
  }
  return { handleTooltip: o };
}
const ps = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useFormat: ns,
  useInputMask: ts,
  useKeypress: os,
  useTable: ss,
  useTooltip: as,
  useValidator: es
}, Symbol.toStringTag, { value: "Module" })), ms = {
  install(o) {
    Object.keys(W).forEach((r) => {
      o.component(r, W[r]);
    });
  }
};
export {
  fs as composables,
  ms as default,
  ps as utils
};
