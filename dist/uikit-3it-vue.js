import { computed as S, resolveComponent as P, openBlock as e, createElementBlock as n, normalizeClass as $, Fragment as m, createTextVNode as b, toDisplayString as v, createCommentVNode as c, createBlock as j, createElementVNode as s, createVNode as f, withCtx as H, renderList as T, renderSlot as D, mergeProps as ne, createStaticVNode as ae, resolveDirective as le, withDirectives as A, ref as q, watch as N, watchEffect as E, withKeys as Y, vModelText as X, onMounted as ie, unref as F, normalizeStyle as I, vModelDynamic as re } from "vue";
import { useRoute as ee } from "vue-router";
import { codeToHtml as ce } from "shiki";
import z from "dayjs";
import de from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";
const ue = ["disabled"], fe = /* @__PURE__ */ s("div", { class: "spinner-border spinner-border-sm me-1" }, null, -1), K = {
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
  setup(t, { emit: i }) {
    const a = t, o = i, r = S(() => ["eit-btn", `${a.className}`]), l = (u) => {
      o("emitEvent", u);
    };
    return (u, d) => {
      const p = P("font-awesome-icon");
      return e(), n("button", {
        onClick: d[0] || (d[0] = (_) => l(_)),
        class: $([r.value, "d-flex align-items-center justify-content-center gap-1"]),
        disabled: a.isDisabled
      }, [
        a.loading ? (e(), n(m, { key: 0 }, [
          fe,
          b(" " + v(a.loadingText), 1)
        ], 64)) : c("", !0),
        a.loading ? c("", !0) : (e(), n(m, { key: 1 }, [
          a.icon ? (e(), j(p, {
            key: 0,
            icon: a.icon,
            class: $(t.iconClass)
          }, null, 8, ["icon", "class"])) : c("", !0),
          b(" " + v(t.text), 1)
        ], 64))
      ], 10, ue);
    };
  }
}, pe = { "aria-label": "breadcrumb" }, me = { class: "eit-breadcrumb" }, _e = /* @__PURE__ */ s("span", { class: "px-2 eit-color--text-soft" }, "/", -1), he = {
  key: 1,
  class: "eit-color--text-soft"
}, ye = {
  __name: "BreadcrumbComponent",
  setup(t) {
    const i = ee(), a = S(() => {
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
      const l = P("font-awesome-icon"), u = P("router-link");
      return e(), n("nav", pe, [
        s("ul", me, [
          s("li", null, [
            f(u, {
              to: "/",
              class: "eit-color--text-soft eit-color--text-soft--link"
            }, {
              default: H(() => [
                f(l, { icon: "fa-solid fa-house" })
              ]),
              _: 1
            }),
            _e
          ]),
          (e(!0), n(m, null, T(a.value, (d, p) => (e(), n("li", {
            key: p,
            class: "eit-breadcrumb__item"
          }, [
            D(o.$slots, d.name, ne({ ref_for: !0 }, d), () => [
              d.last ? (e(), n("span", he, v(d.name), 1)) : (e(), j(u, {
                key: 0,
                to: d.path,
                class: "eit-color--text eit-color--text--link eit-color--underline"
              }, {
                default: H(() => [
                  b(v(d.name), 1)
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
  setup(t) {
    const i = t;
    return (a, o) => {
      const r = P("font-awesome-icon");
      return e(), n("span", {
        key: `badge-${i.text}`,
        class: $(`eit-badge ${i.className}`)
      }, [
        i.icon ? (e(), j(r, {
          key: 0,
          icon: i.icon,
          class: "me-1"
        }, null, 8, ["icon"])) : c("", !0),
        s("span", {
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
}, ke = /* @__PURE__ */ s("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "80%" }
}, null, -1), xe = [
  ke
], $e = { key: 1 }, we = /* @__PURE__ */ s("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "60%" }
}, null, -1), Ce = [
  we
], Se = {
  key: 0,
  class: "eit-skeleton__table-first-td"
}, Re = /* @__PURE__ */ s("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), je = [
  Re
], De = { key: 1 }, qe = /* @__PURE__ */ s("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), Pe = [
  qe
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
  setup(t) {
    const i = t;
    return (a, o) => (e(), n(m, null, [
      i.type === "table" ? (e(), n("table", ve, [
        s("thead", null, [
          s("tr", null, [
            (e(!0), n(m, null, T(i.table.column, (r) => (e(), n(m, { key: r }, [
              r === 1 ? (e(), n("th", be, xe)) : c("", !0),
              r > 1 ? (e(), n("th", $e, Ce)) : c("", !0)
            ], 64))), 128))
          ])
        ]),
        s("tbody", null, [
          (e(!0), n(m, null, T(i.table.row, (r) => (e(), n("tr", { key: r }, [
            (e(!0), n(m, null, T(i.table.column, (l) => (e(), n(m, { key: l }, [
              l === 1 ? (e(), n("td", Se, je)) : c("", !0),
              l > 1 ? (e(), n("td", De, Pe)) : c("", !0)
            ], 64))), 128))
          ]))), 128))
        ])
      ])) : c("", !0),
      i.type === "detail" ? (e(), n(m, { key: 1 }, [
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
  setup(t) {
    const i = t;
    return (a, o) => {
      const r = P("font-awesome-icon");
      return e(), n("div", {
        class: $(`eit-alert eit-alert--${i.type} ${i.animation.active ? "eit-alert--animation" : "eit-alert--default"} ${i.animation.show ? "eit-alert--animation--show" : ""}`)
      }, [
        s("div", Be, [
          s("div", Ne, [
            f(r, {
              icon: i.icon,
              class: $(t.iconClass)
            }, null, 8, ["icon", "class"])
          ]),
          s("div", {
            class: "flex-grow-1 eit-alert__text",
            innerHTML: i.message
          }, null, 8, Le)
        ])
      ], 2);
    };
  }
}, Me = { class: "row" }, ze = { class: "col-12" }, Ae = { class: "table eit-table eit-table-responsive" }, Oe = ["onClick"], Ee = /* @__PURE__ */ s("th", {
  scope: "col",
  class: "text-center"
}, "Acciones", -1), Ve = { class: "pe-3 d-lg-none" }, Fe = ["onClick"], He = {
  key: 0,
  class: "d-flex flex-wrap gap-1"
}, Ie = {
  key: 3,
  class: "eit-table__string"
}, Ke = { class: "text-center" }, Ye = { class: "dropdown eit-dropdown d-none d-lg-block" }, Ue = {
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
}, ot = /* @__PURE__ */ s("div", { class: "eit-border--bottom eit-border--color" }, null, -1), st = [
  ot
], nt = {
  key: 4,
  class: "mx-2"
}, at = ["onClick"], lt = {
  key: 5,
  class: "mx-2"
}, it = ["onClick"], rt = { class: "d-flex w-100 justify-content-between align-items-center d-lg-none text-end" }, ct = /* @__PURE__ */ s("strong", null, "Acciones:", -1), dt = { class: "d-flex flex-wrap gap-2 ms-3" }, ut = ["onClick"], ft = ["onClick"], pt = ["onClick"], mt = ["onClick"], _t = ["onClick"], ht = ["onClick"], yt = {
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
    const a = t, o = i, r = (h) => {
      o("viewRecord", h);
    }, l = (h) => {
      o("editRecord", h);
    }, u = (h) => {
      o("deleteRecord", h);
    }, d = (h) => {
      o("downloadRecord", h);
    }, p = (h) => {
      o("updateSort", { index: h, asc: !a.sort.asc });
    }, _ = (h) => {
      o("enabledDisabledRecord", h);
    }, y = (h) => typeof h == "string", g = (h) => typeof h == "object" && !Array.isArray(h), C = (h) => Array.isArray(h);
    return (h, R) => {
      var G, Z, J, Q;
      const w = P("font-awesome-icon"), O = le("tippy");
      return e(), n("div", Me, [
        s("div", ze, [
          t.loading ? (e(), j(U, {
            key: 0,
            type: "table",
            table: { row: (G = t.skeleton) == null ? void 0 : G.row, column: (Z = t.skeleton) == null ? void 0 : Z.column }
          }, null, 8, ["table"])) : c("", !0),
          !t.loading && !((J = t.data) != null && J.length) ? (e(), j(te, {
            key: 1,
            ref: "alert",
            class: "mb-3",
            type: "info",
            icon: "fa-solid fa-info",
            message: "<strong>No hay resultados</strong> para tu búsqueda."
          }, null, 512)) : c("", !0),
          !t.loading && ((Q = t.data) != null && Q.length) ? (e(), n(m, { key: 2 }, [
            s("table", Ae, [
              s("thead", null, [
                s("tr", null, [
                  (e(!0), n(m, null, T(t.columns, (k, B) => (e(), n("th", {
                    key: `column-${B}`,
                    scope: "col"
                  }, [
                    s("a", {
                      onClick: (x) => p(B),
                      href: "javascript:",
                      class: "d-flex justify-content-between"
                    }, [
                      b(v(k) + " ", 1),
                      t.sort.index === B ? (e(), n("span", {
                        key: `icono-${k}`,
                        class: "d-flex ms-2 eit-color--text"
                      }, [
                        t.sort.asc ? c("", !0) : (e(), n("span", {
                          key: `down-${k}`
                        }, [
                          f(w, { icon: "fa-solid fa-sort-down align-baseline" })
                        ])),
                        t.sort.asc ? (e(), n("span", {
                          key: `up-${k}`
                        }, [
                          f(w, { icon: "fa-solid fa-sort-up align-baseline" })
                        ])) : c("", !0)
                      ])) : (e(), n("span", {
                        key: `key-${k}`
                      }, [
                        f(w, { icon: "fa-solid fa-sort" })
                      ]))
                    ], 8, Oe)
                  ]))), 128)),
                  Ee
                ])
              ]),
              s("tbody", null, [
                (e(!0), n(m, null, T(t.data, (k, B) => (e(), n("tr", {
                  key: `row-${B}`,
                  class: $(!(k != null && k.status) && "disabled")
                }, [
                  (e(!0), n(m, null, T(k, (x, M) => (e(), n("td", {
                    key: `value-${M}`
                  }, [
                    s("strong", Ve, v(t.columns[Object.keys(k).indexOf(M)]) + ":", 1),
                    Object.keys(k)[t.columnLink] === M ? (e(), n(m, { key: 0 }, [
                      t.viewRecord ? (e(), n("a", {
                        key: 0,
                        onClick: (V) => r(k),
                        href: "javascript:",
                        class: "eit-table__link"
                      }, v(x), 9, Fe)) : c("", !0),
                      t.viewRecord ? c("", !0) : (e(), n(m, { key: 1 }, [
                        b(v(x), 1)
                      ], 64))
                    ], 64)) : c("", !0),
                    Object.keys(k)[t.columnLink] !== M ? (e(), n(m, { key: 1 }, [
                      C(x) ? (e(), n("div", He, [
                        (e(!0), n(m, null, T(x, (V, se) => (e(), n("span", {
                          key: `value-array-${se}`,
                          class: "d-flex flex-wrap gap-1"
                        }, [
                          f(L, {
                            text: V.name,
                            className: V.className
                          }, null, 8, ["text", "className"])
                        ]))), 128))
                      ])) : c("", !0),
                      M === "status" ? (e(), n(m, { key: 1 }, [
                        x ? (e(), j(L, {
                          key: 0,
                          text: "Activo",
                          className: "eit-badge__outline--secondary"
                        })) : c("", !0),
                        x ? c("", !0) : (e(), j(L, {
                          key: 1,
                          text: "Inactivo",
                          className: "eit-badge__outline--gray"
                        }))
                      ], 64)) : c("", !0),
                      g(x) ? (e(), j(L, {
                        key: 2,
                        text: x.name,
                        className: x.className
                      }, null, 8, ["text", "className"])) : c("", !0),
                      y(x) ? (e(), n("span", Ie, v(x), 1)) : c("", !0)
                    ], 64)) : c("", !0)
                  ]))), 128)),
                  s("td", Ke, [
                    s("div", Ye, [
                      s("a", Ue, [
                        f(w, { icon: "fa-solid fa-ellipsis" })
                      ]),
                      s("ul", Ge, [
                        t.viewRecord ? (e(), n("li", Ze, [
                          s("a", {
                            onClick: (x) => r(k),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            f(w, {
                              icon: "fa-regular fa-eye",
                              class: "eit-color--blue"
                            }),
                            b(" " + v(t.viewRecord), 1)
                          ], 8, Je)
                        ])) : c("", !0),
                        t.editRecord ? (e(), n("li", Qe, [
                          s("a", {
                            onClick: (x) => l(k),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            f(w, {
                              icon: "fa-solid fa-square-pen",
                              class: "eit-color--yellow"
                            }),
                            b(" " + v(t.editRecord), 1)
                          ], 8, We)
                        ])) : c("", !0),
                        t.downloadRecord ? (e(), n("li", Xe, [
                          s("a", {
                            onClick: (x) => d(k),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            f(w, {
                              icon: "fa-solid fa-download",
                              class: "eit-color--blue"
                            }),
                            b(" " + v(t.downloadRecord), 1)
                          ], 8, et)
                        ])) : c("", !0),
                        t.deleteRecord || t.enabledDisabledRecord ? (e(), n("li", tt, st)) : c("", !0),
                        t.enabledDisabledRecord ? (e(), n("li", nt, [
                          s("a", {
                            onClick: (x) => _(k),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            k.status ? c("", !0) : (e(), n(m, { key: 0 }, [
                              f(w, {
                                icon: "fa-regular fa-circle-check",
                                class: "eit-color--green"
                              }),
                              b(" Habilitar ")
                            ], 64)),
                            k.status ? (e(), n(m, { key: 1 }, [
                              f(w, {
                                icon: "fa-solid fa-ban",
                                class: "eit-color--red"
                              }),
                              b(" Deshabilitar ")
                            ], 64)) : c("", !0)
                          ], 8, at)
                        ])) : c("", !0),
                        t.deleteRecord ? (e(), n("li", lt, [
                          s("a", {
                            onClick: (x) => u(B),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            f(w, {
                              icon: "fa-solid fa-trash",
                              class: "eit-color--red"
                            }),
                            b(" " + v(t.deleteRecord), 1)
                          ], 8, it)
                        ])) : c("", !0)
                      ])
                    ]),
                    s("div", rt, [
                      ct,
                      s("div", dt, [
                        t.viewRecord ? (e(), n("a", {
                          key: 0,
                          onClick: (x) => r(k),
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
                          onClick: (x) => l(k),
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
                          onClick: (x) => d(k),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          f(w, {
                            icon: "fa-solid fa-download",
                            class: "eit-color--blue"
                          })
                        ], 8, pt)) : c("", !0),
                        t.enabledDisabledRecord ? (e(), n(m, { key: 3 }, [
                          k.status ? c("", !0) : A((e(), n("a", {
                            key: 0,
                            onClick: (x) => _(k),
                            href: "javascript:",
                            class: "eit-btn eit-btn-outline--gray eit-btn--square"
                          }, [
                            f(w, {
                              icon: "fa-regular fa-circle-check",
                              class: "eit-color--green"
                            })
                          ], 8, mt)), [
                            [O, { content: "Habilitar", theme: "main" }]
                          ]),
                          k.status ? A((e(), n("a", {
                            key: 1,
                            onClick: (x) => _(k),
                            href: "javascript:",
                            class: "eit-btn eit-btn-outline--gray eit-btn--square"
                          }, [
                            f(w, {
                              icon: "fa-solid fa-ban",
                              class: "eit-color--red"
                            })
                          ], 8, _t)), [
                            [O, { content: "Deshabilitar", theme: "main" }]
                          ]) : c("", !0)
                        ], 64)) : c("", !0),
                        t.deleteRecord ? (e(), n("a", {
                          key: 4,
                          onClick: (x) => u(B),
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
                ], 2))), 128))
              ])
            ]),
            D(h.$slots, "paginator")
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
  setup(t, { emit: i }) {
    const a = t, o = i, r = q(a.data.currentPage), l = () => r.value++, u = () => r.value--, d = () => {
      r.value <= 0 && (r.value = 1), r.value > a.data.finalPage && (r.value = a.data.finalPage);
    }, p = (_) => {
      _.target.select();
    };
    return N(r, () => {
      r.value > 0 && r.value <= a.data.finalPage && o("updatePaginator", r.value);
    }), E(() => {
      a.data && (r.value = a.data.currentPage);
    }), (_, y) => {
      const g = P("font-awesome-icon");
      return e(), n("div", gt, [
        s("button", {
          onClick: u,
          disabled: t.data.currentPage === 1,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          f(g, { icon: "fa-solid fa-chevron-left" })
        ], 8, vt),
        A(s("input", {
          type: "number",
          "onUpdate:modelValue": y[0] || (y[0] = (C) => r.value = C),
          onInput: d,
          onKeyup: Y(d, ["enter"]),
          onBlur: d,
          onFocus: p,
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
        s("span", bt, [
          b(" de " + v(t.data.finalPage) + " ", 1),
          t.data.finalPage === 1 ? (e(), n(m, { key: 0 }, [
            b(" página ")
          ], 64)) : c("", !0),
          t.data.finalPage > 1 ? (e(), n(m, { key: 1 }, [
            b(" páginas ")
          ], 64)) : c("", !0)
        ]),
        s("button", {
          onClick: l,
          disabled: t.data.currentPage === t.data.finalPage,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          f(g, { icon: "fa-solid fa-chevron-right" })
        ], 8, kt)
      ]);
    };
  }
}, $t = { class: "row" }, wt = { class: "col-12" }, Ct = { class: "d-flex" }, St = { class: "flex-shrink-0" }, Rt = { class: "flex-grow-1" }, jt = { class: "d-flex" }, Dt = { class: "flex-grow-1 d-flex flex-column ms-3" }, qt = { class: "eit-font--primary mb-0" }, Pt = { class: "eit-color--text mb-0" }, Tt = { class: "flex-shrink-0" }, Bt = {
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
}, Ot = /* @__PURE__ */ s("div", { class: "eit-border--bottom eit-border--color" }, null, -1), Et = [
  Ot
], Vt = {
  key: 3,
  class: "mx-2"
}, Ft = {
  key: 4,
  class: "mx-2"
}, Ht = { class: "row flex-grow-1" }, It = { class: "col-12 d-flex flex-column flex-grow-1" }, Kt = { class: "eit-slide__content flex-grow-1" }, Yt = {
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
    }, l = () => {
      o("enabledDisabledRecord", a.record);
    }, u = () => {
      o("editRecord", a.record);
    }, d = () => {
      o("deleteRecord", a.record);
    }, p = () => {
      o("downloadRecord", a.record);
    };
    return (_, y) => {
      const g = P("font-awesome-icon");
      return e(), n("section", {
        class: $(["eit-slide d-flex flex-column", [t.slide && "eit-slide--right", t.slideSmall && "eit-slide--small"]])
      }, [
        a.loading ? (e(), j(U, {
          key: 0,
          type: "detail"
        })) : c("", !0),
        a.loading ? c("", !0) : (e(), n(m, { key: 1 }, [
          s("div", $t, [
            s("div", wt, [
              s("div", Ct, [
                s("div", St, [
                  s("button", {
                    class: "eit-btn eit-btn--gray eit-btn--square",
                    onClick: r
                  }, [
                    f(g, {
                      icon: "fa-solid fa-angle-right",
                      class: "eit-font__size--x5 d-none d-lg-block"
                    }),
                    f(g, {
                      icon: "fa-solid fa-angle-down",
                      class: "eit-font__size--x5 d-lg-none"
                    })
                  ])
                ]),
                s("div", Rt, [
                  s("div", jt, [
                    s("div", Dt, [
                      s("h4", qt, [
                        s("strong", null, [
                          D(_.$slots, "title")
                        ])
                      ]),
                      s("p", Pt, [
                        D(_.$slots, "subtitle")
                      ])
                    ]),
                    s("div", Tt, [
                      a.dropdown ? (e(), n("div", Bt, [
                        s("a", Nt, [
                          f(g, { icon: "fa-solid fa-ellipsis" })
                        ]),
                        s("ul", Lt, [
                          a.editRecord ? (e(), n("li", Mt, [
                            s("a", {
                              onClick: u,
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              f(g, {
                                icon: "fa-solid fa-square-pen",
                                class: "eit-color--yellow"
                              }),
                              b(" " + v(t.editRecord), 1)
                            ])
                          ])) : c("", !0),
                          a.downloadRecord ? (e(), n("li", zt, [
                            s("a", {
                              onClick: p,
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              f(g, {
                                icon: "fa-solid fa-download",
                                class: "eit-color--blue"
                              }),
                              b(" " + v(a.downloadRecord), 1)
                            ])
                          ])) : c("", !0),
                          t.deleteRecord || t.enabledDisabledRecord ? (e(), n("li", At, Et)) : c("", !0),
                          a.enabledDisabledRecord ? (e(), n("li", Vt, [
                            s("a", {
                              onClick: l,
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              a.record.status ? c("", !0) : (e(), n(m, { key: 0 }, [
                                f(g, {
                                  icon: "fa-regular fa-circle-check",
                                  class: "eit-color--green"
                                }),
                                b(" Habilitar ")
                              ], 64)),
                              a.record.status ? (e(), n(m, { key: 1 }, [
                                f(g, {
                                  icon: "fa-solid fa-ban",
                                  class: "eit-color--red"
                                }),
                                b(" Deshabilitar ")
                              ], 64)) : c("", !0)
                            ])
                          ])) : c("", !0),
                          a.deleteRecord ? (e(), n("li", Ft, [
                            s("a", {
                              onClick: d,
                              class: "dropdown-item dropdown-custom-menu-item eit-color--red",
                              href: "javascript:"
                            }, [
                              f(g, {
                                icon: "fa-solid fa-trash",
                                class: "eit-color--red"
                              }),
                              b(" " + v(a.deleteRecord), 1)
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
          s("div", Ht, [
            s("div", It, [
              s("div", Kt, [
                D(_.$slots, "component")
              ])
            ])
          ]),
          D(_.$slots, "footer")
        ], 64))
      ], 2);
    };
  }
}, Ut = { class: "d-flex justify-content-between align-items-center" }, Gt = ["onClick"], Zt = {
  key: 0,
  class: "eit-tabs__badge"
}, Jt = { class: "d-flex flex-column" }, Qt = {
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
    return (l, u) => (e(), n(m, null, [
      s("div", Ut, [
        s("ul", {
          class: $(`eit-tabs ${i.className}`)
        }, [
          (e(!0), n(m, null, T(t.data, (d, p) => (e(), n("li", {
            key: p,
            class: "eit-tabs__item"
          }, [
            s("a", {
              href: "javascript:",
              onClick: (_) => r(p),
              class: $(["eit-tabs__item__link", o.value === p ? "active" : ""])
            }, [
              b(v(d.name) + " ", 1),
              d.number ? (e(), n("span", Zt, v(a(d.number)), 1)) : c("", !0)
            ], 10, Gt)
          ]))), 128))
        ], 2),
        D(l.$slots, "dropdown")
      ]),
      s("div", Jt, [
        D(l.$slots, `tab-${o.value}`)
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
      a.value = await ce(r, {
        lang: i.lang,
        theme: i.theme
      });
    })(), (r, l) => (e(), n("div", { innerHTML: a.value }, null, 8, Wt));
  }
}, eo = { class: "eit-dialog__content" }, to = { class: "d-flex justify-content-between align-items-center" }, oo = { class: "d-flex gap-2 justify-content-end mt-3" }, so = {
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
  setup(t, { expose: i, emit: a }) {
    const o = t, r = a, l = q(null), u = () => {
      l.value.showModal(), l.value.classList.add("show");
    }, d = () => {
      l.value.close(), l.value.classList.remove("show"), r("emitCloseDialog");
    }, p = (y) => {
      y.key === "Escape" && d();
    }, _ = () => {
      r("emitSubmit");
    };
    return ie(() => {
      document.addEventListener("keyup", p);
    }), i({ showDialog: u, closeDialog: d }), (y, g) => {
      const C = P("font-awesome-icon");
      return e(), n("dialog", {
        ref_key: "dialog",
        ref: l,
        class: $(["eit-dialog", o.className]),
        onKeyup: Y(d, ["esc"])
      }, [
        s("div", eo, [
          t.loading ? (e(), j(F(oe), {
            key: 0,
            size: "70"
          })) : c("", !0),
          t.loading ? c("", !0) : (e(), n(m, { key: 1 }, [
            s("div", to, [
              D(y.$slots, "head"),
              s("button", {
                onClick: d,
                class: "eit-dialog__close"
              }, [
                f(C, { icon: ["fas", "xmark"] })
              ])
            ]),
            s("div", {
              class: $(`eit-dialog__body ${t.scrollable ? "eit-dialog__body--scroll" : ""}`)
            }, [
              D(y.$slots, "content")
            ], 2),
            s("div", oo, [
              f(F(K), {
                onClick: d,
                className: "eit-btn-outline--gray",
                text: "Volver"
              }),
              o.btnSubmit ? (e(), j(F(K), {
                key: 0,
                className: o.btnSubmitConfig.className,
                text: o.btnSubmitConfig.text,
                loadingText: o.btnSubmitConfig.loadingText,
                loading: t.loadingSubmit,
                onEmitEvent: _,
                isDisabled: t.disabledSubmit
              }, null, 8, ["className", "text", "loadingText", "loading", "isDisabled"])) : c("", !0)
            ])
          ], 64))
        ])
      ], 34);
    };
  }
}, no = { class: "row" }, ao = { class: "col" }, lo = /* @__PURE__ */ s("h2", { class: "eit-font__size--x4 eit-color--text eit-font__weight--300 eit-border--bottom eit-border--color mb-3" }, [
  /* @__PURE__ */ s("strong", { class: "eit-font__weight--900" }, "Props")
], -1), io = { class: "eit-table--overflow" }, ro = { class: "table eit-table" }, co = /* @__PURE__ */ s("thead", null, [
  /* @__PURE__ */ s("tr", null, [
    /* @__PURE__ */ s("th", null, "Name"),
    /* @__PURE__ */ s("th", null, "Type"),
    /* @__PURE__ */ s("th", null, "Default")
  ])
], -1), uo = {
  __name: "PropsComponent",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(t) {
    const i = t;
    return (a, o) => (e(), n("div", no, [
      s("div", ao, [
        lo,
        s("div", io, [
          s("table", ro, [
            co,
            s("tbody", null, [
              (e(!0), n(m, null, T(i.data, (r) => (e(), n("tr", {
                key: r.name
              }, [
                s("td", null, [
                  f(L, {
                    text: r.name,
                    className: "eit-badge__outline--gray"
                  }, null, 8, ["text"])
                ]),
                s("td", null, [
                  s("code", null, v(r.type), 1)
                ]),
                s("td", null, [
                  s("code", null, v(r.default), 1)
                ])
              ]))), 128))
            ])
          ])
        ])
      ])
    ]));
  }
}, fo = { class: "eit-progress eit-progress--30" }, po = { key: 1 }, mo = /* @__PURE__ */ s("span", { class: "spinner-border spinner-border-sm" }, null, -1), _o = {
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
    const i = t, a = S(() => parseFloat(i.percentage)), o = S(() => a.value === 0 ? 0 : 100 - a.value);
    return (r, l) => (e(), n("div", fo, [
      s("div", {
        class: $(["eit-progress__bar", `eit-progress__bar--${i.type}`]),
        style: I(`width: ${i.percentage}%`)
      }, [
        a.value !== 0 ? (e(), n(m, { key: 0 }, [
          i.percentage > 5 ? (e(), n(m, { key: 0 }, [
            b(v(i.percentage) + "% ", 1)
          ], 64)) : c("", !0)
        ], 64)) : c("", !0)
      ], 6),
      s("div", {
        class: "eit-progress__bar eit-progress__bar--transparent",
        style: I(`width: ${o.value === 0 ? 100 : o.value}%`)
      }, [
        i.loading ? c("", !0) : (e(), n(m, { key: 0 }, [
          o.value === 0 || o.value > 5 ? (e(), n(m, { key: 0 }, [
            b(v(o.value) + "% ", 1)
          ], 64)) : c("", !0)
        ], 64)),
        i.loading ? (e(), n("span", po, [
          mo,
          b(" Cargando... ")
        ])) : c("", !0)
      ], 4)
    ]));
  }
}, ho = { class: "d-flex" }, yo = { class: "flex-shrink-0 eit-toast__left" }, go = {
  key: "success",
  class: "eit-toast__icon eit-font__size--x7"
}, vo = {
  key: "error",
  class: "eit-toast__icon eit-font__size--x7"
}, bo = {
  key: "warning",
  class: "eit-toast__icon eit-font__size--x7"
}, ko = {
  key: "info",
  class: "eit-toast__icon eit-font__size--x7"
}, xo = { class: "flex-grow-1 ms-3" }, $o = { class: "d-flex" }, wo = { class: "flex-grow-1 me-3" }, Co = { class: "eit-toast__title" }, So = { class: "eit-toast__text" }, Ro = { class: "flex-shrink-0" }, jo = {
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
    const a = t, o = q(!1), r = q("hidden"), l = q(""), u = S(() => ({
      show: o.value,
      hide: !o.value,
      [a.position]: a.position,
      hidden: r.value
    })), d = () => {
      clearTimeout(l.value), o.value = !0, r.value = "", l.value = setTimeout(() => {
        o.value = !1, setTimeout(() => r.value = "hidden", "300");
      }, a.visible);
    }, p = () => {
      o.value = !1, setTimeout(() => r.value = "hidden", "300"), clearTimeout(l.value);
    };
    return i({ handleShowToast: d, handleCloseToast: p }), (_, y) => {
      const g = P("font-awesome-icon");
      return e(), n("div", {
        class: $(["eit-toast__container", u.value])
      }, [
        s("div", {
          class: $(["eit-toast box-shadow", `eit-toast--${a.data.type}`])
        }, [
          s("div", ho, [
            s("div", yo, [
              a.type === "success" ? (e(), n("span", go, [
                f(g, { icon: "fa-solid fa-circle-check" })
              ])) : c("", !0),
              a.type === "error" ? (e(), n("span", vo, [
                f(g, { icon: "fa-solid fa-circle-xmark" })
              ])) : c("", !0),
              a.type === "warning" ? (e(), n("span", bo, [
                f(g, { icon: "fa-solid fa-triangle-exclamation" })
              ])) : c("", !0),
              a.type === "info" ? (e(), n("span", ko, [
                f(g, { icon: "fa-solid fa-circle-info" })
              ])) : c("", !0)
            ]),
            s("div", xo, [
              s("div", $o, [
                s("div", wo, [
                  s("p", Co, [
                    a.data.code ? (e(), n(m, { key: 0 }, [
                      b(v(a.data.code), 1)
                    ], 64)) : c("", !0),
                    b(" " + v(a.data.title), 1)
                  ]),
                  s("p", So, v(a.data.message), 1)
                ]),
                s("div", Ro, [
                  s("a", {
                    onClick: y[0] || (y[0] = (C) => p()),
                    href: "javascript:",
                    class: "eit-toast__close"
                  }, [
                    f(g, { icon: "fa-solid fa-xmark" })
                  ])
                ])
              ])
            ])
          ])
        ], 2)
      ], 2);
    };
  }
}, Do = { class: "d-flex" }, qo = { class: "flex-shrink-0 eit-popover__left" }, Po = {
  key: "success",
  class: "eit-popover__icon eit-font__size--x7"
}, To = {
  key: "error",
  class: "eit-popover__icon eit-font__size--x7"
}, Bo = {
  key: "warning",
  class: "eit-popover__icon eit-font__size--x7"
}, No = {
  key: "info",
  class: "eit-popover__icon eit-font__size--x7"
}, Lo = { class: "flex-grow-1 ms-3" }, Mo = { class: "d-flex" }, zo = { class: "flex-grow-1 me-3" }, Ao = { class: "eit-popover__title" }, Oo = { class: "eit-popover__text" }, Eo = { class: "flex-shrink-0" }, Vo = {
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
    const a = t, o = q(null), r = S(() => ({
      [a.position]: a.position
    })), l = () => {
      o.value.showPopover();
    }, u = () => {
      o.value.hidePopover();
    };
    return i({ handleShowPopover: l, handleClosePopover: u }), (d, p) => {
      const _ = P("font-awesome-icon");
      return e(), n("div", {
        ref_key: "popover",
        ref: o,
        class: $(["eit-popover__container", r.value]),
        popover: "manual"
      }, [
        s("div", {
          class: $(["eit-popover box-shadow", `eit-popover--${a.data.type}`])
        }, [
          s("div", Do, [
            s("div", qo, [
              a.type === "success" ? (e(), n("span", Po, [
                f(_, { icon: "fa-solid fa-circle-check" })
              ])) : c("", !0),
              a.type === "error" ? (e(), n("span", To, [
                f(_, { icon: "fa-solid fa-circle-xmark" })
              ])) : c("", !0),
              a.type === "warning" ? (e(), n("span", Bo, [
                f(_, { icon: "fa-solid fa-triangle-exclamation" })
              ])) : c("", !0),
              a.type === "info" ? (e(), n("span", No, [
                f(_, { icon: "fa-solid fa-circle-info" })
              ])) : c("", !0)
            ]),
            s("div", Lo, [
              s("div", Mo, [
                s("div", zo, [
                  s("p", Ao, [
                    a.data.code ? (e(), n(m, { key: 0 }, [
                      b(v(a.data.code), 1)
                    ], 64)) : c("", !0),
                    b(" " + v(a.data.title), 1)
                  ]),
                  s("p", Oo, v(a.data.message), 1)
                ]),
                s("div", Eo, [
                  s("a", {
                    onClick: p[0] || (p[0] = (y) => u()),
                    href: "javascript:",
                    class: "eit-popover__close"
                  }, [
                    f(_, { icon: "fa-solid fa-xmark" })
                  ])
                ])
              ])
            ])
          ])
        ], 2)
      ], 2);
    };
  }
}, Fo = ["type", "maxlength", "placeholder", "disabled"], Ho = {
  key: 0,
  class: "eit-label-float"
}, Io = {
  key: 1,
  class: "eit-input__display__icon eit-input__display__float-left--icon"
}, Ko = {
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
    const o = t, r = a, l = q(""), u = S(
      () => o.validation ? o.validation(l.value) : !0
    ), d = S(() => !u.value && o.requiredField && o.error ? "is-invalid" : ""), p = S(() => o.floatLabel ? "" : o.placeHolder), _ = S(() => [
      o.floatLabel || o.floatLeft || o.floatRight ? "eit-input__display" : "",
      o.floatLeft ? "eit-input__display__float-left" : "",
      o.floatRight ? "eit-input__display__float-right" : ""
    ]), y = () => {
      r("emitPressEnter");
    }, g = () => {
      l.value = "";
    };
    return N(() => o.input, (C) => {
      C && (l.value = C);
    }), N(l, () => {
      r("emitValue", u.value ? l.value : "");
    }), E(() => {
      o.inputMask && (l.value = o.inputMask(l.value)), o.submitted && g();
    }), i({ clean: g }), (C, h) => (e(), n("div", {
      class: $(_.value)
    }, [
      A(s("input", {
        autocomplete: "off",
        class: $(["form-control eit-input", d.value]),
        type: o.inputType,
        "onUpdate:modelValue": h[0] || (h[0] = (R) => l.value = R),
        maxlength: o.maxLength,
        onKeypress: h[1] || (h[1] = (R) => o.keyPress && o.keyPress(R)),
        placeholder: p.value,
        onKeyup: Y(y, ["enter"]),
        disabled: o.isDisabled
      }, null, 42, Fo), [
        [
          re,
          l.value,
          void 0,
          { trim: !0 }
        ]
      ]),
      o.floatLabel ? (e(), n("label", Ho, v(o.floatLabel), 1)) : c("", !0),
      o.floatLeft ? (e(), n("span", Io, [
        D(C.$slots, "float-left")
      ])) : c("", !0),
      o.floatRight ? (e(), n("span", Ko, [
        D(C.$slots, "float-right")
      ])) : c("", !0)
    ], 2));
  }
}, Uo = {
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
  setup(t, { expose: i, emit: a }) {
    const o = t, r = a, l = q(null), u = S(
      () => o.validation ? o.validation(l.value) : !0
    ), d = S(() => !u.value && o.requiredField && o.error ? "is-invalid" : ""), p = () => Array.isArray(l.value) ? o.data.filter((h) => !l.value.some((R) => R.id === h.id)) : o.data, _ = () => l.value ? o.data.filter((h) => h.id !== l.value.id) : o.data, y = S(() => o.multiple ? p() : _()), g = (h) => o.selectable ? o.selectable(h) : (R) => R.includes(R);
    N(
      () => o.selected,
      (h) => {
        h && (l.value = h);
      },
      { immediate: !0 }
    ), N(l, () => {
      r("emitValue", u.value ? l.value : null);
    }), E(() => {
      o.submitted && C();
    });
    const C = () => {
      l.value = o.multiple ? [] : null;
    };
    return i({ clean: C }), (h, R) => {
      const w = P("v-select");
      return e(), j(w, {
        options: y.value,
        modelValue: l.value,
        "onUpdate:modelValue": R[0] || (R[0] = (O) => l.value = O),
        label: t.labelCustom,
        multiple: t.multiple,
        placeholder: t.placeHolder,
        class: $(["eit-select-component", d.value]),
        clearable: t.clearable,
        disabled: o.isDisabled,
        selectable: g
      }, {
        "no-options": H(() => [
          b(" No hay más resultados. ")
        ]),
        _: 1
      }, 8, ["options", "modelValue", "label", "multiple", "placeholder", "class", "clearable", "disabled"]);
    };
  }
}, Go = ["maxlength", "placeholder"], Zo = {
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
    const o = t, r = a, l = q(null), u = q(""), d = S(() => o.validation && o.validation(u.value)), p = S(() => !d.value && o.requiredField && o.error ? "is-invalid" : ""), _ = () => {
      u.value = "";
    };
    return N(
      () => o.input,
      (y) => {
        y && (u.value = y);
      }
    ), N(u, () => {
      l.value.style.height = "50px", l.value.style.height = `${l.value.scrollHeight}px`, r("emitValue", d.value ? u.value : "");
    }), E(() => {
      o.submitted && _();
    }), i({ clean: _ }), (y, g) => A((e(), n("textarea", {
      ref_key: "textarea",
      ref: l,
      "onUpdate:modelValue": g[0] || (g[0] = (C) => u.value = C),
      maxlength: t.maxLength,
      autocomplete: "off",
      class: $(["form-control eit-textarea eit-textarea-resize", p.value]),
      placeholder: t.placeHolder
    }, null, 10, Go)), [
      [
        X,
        u.value,
        void 0,
        { trim: !0 }
      ]
    ]);
  }
}, Jo = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20style='margin:%20auto;%20display:%20block;%20shape-rendering:%20auto;'%20width='200px'%20height='200px'%20viewBox='0%200%20100%20100'%20preserveAspectRatio='xMidYMid'%3e%3crect%20x='17.5'%20y='30'%20width='15'%20height='40'%20fill='%23009da6'%3e%3canimate%20attributeName='y'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='18;30;30'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.2s'%3e%3c/animate%3e%3canimate%20attributeName='height'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='64;40;40'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.2s'%3e%3c/animate%3e%3c/rect%3e%3crect%20x='42.5'%20y='30'%20width='15'%20height='40'%20fill='%2379cace'%3e%3canimate%20attributeName='y'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='20.999999999999996;30;30'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.1s'%3e%3c/animate%3e%3canimate%20attributeName='height'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='58.00000000000001;40;40'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.1s'%3e%3c/animate%3e%3c/rect%3e%3crect%20x='67.5'%20y='30'%20width='15'%20height='40'%20fill='%23a9e4e7'%3e%3canimate%20attributeName='y'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='20.999999999999996;30;30'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%3e%3c/animate%3e%3canimate%20attributeName='height'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='58.00000000000001;40;40'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%3e%3c/animate%3e%3c/rect%3e%3c/svg%3e", Qo = { class: "p-3 eit-loading" }, oe = {
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
    return (a, o) => (e(), n("div", Qo, [
      s("img", {
        style: I(`width:${i.size}px`),
        src: Jo
      }, null, 4)
    ]));
  }
}, W = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlertComponent: te,
  BadgeComponent: L,
  BreadcrumbComponent: ye,
  ButtonComponent: K,
  DetailComponent: Yt,
  DialogComponent: so,
  HighlightComponent: Xt,
  InputComponent: Yo,
  LoadingComponent: oe,
  PaginationComponent: xt,
  PopoverComponent: Vo,
  ProgressBarComponent: _o,
  PropsComponent: uo,
  SelectComponent: Uo,
  SkeletonComponent: U,
  TabComponent: Qt,
  TableComponent: yt,
  TextareaResizeComponent: Zo,
  ToastComponent: jo
}, Symbol.toStringTag, { value: "Module" }));
function Wo(t, i) {
  const a = ee(), o = S(() => a.meta.requiresAuth ? t.config.darkTheme ? i.logotipo.logo_dark : i.logotipo.logo_light : i.platformDarkTheme ? i.logotipo.logo_dark : i.logotipo.logo_light), r = S(() => t.config.darkTheme ? i.logotipo.isotipo_dark : i.logotipo.isotipo_light);
  return { logotipo: o, isotipo: r };
}
const us = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useLogos: Wo
}, Symbol.toStringTag, { value: "Module" }));
function Xo() {
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
    const u = l.length >= 8, d = /[A-Z]/.test(l), p = /[a-z]/.test(l), _ = /[0-9]/.test(l), y = /[!@#$%^&*(),.?":{}|<>]/.test(l);
    return u && d && p && _ && y;
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
function es() {
  function t(r) {
    return r.replace(/[.-]/g, "").replace(/^(\d{1,2})(\d{3})(\d{3})(\w{1})$/, "$1.$2.$3-$4");
  }
  function i(r) {
    return r.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  function a(r) {
    return r.replace(/\D/g, "").replace(/^(\d{3})(\d{4})(\d{4})$/, "+$1 $2-$3");
  }
  function o(r) {
    return r.replace(/[^a-zA-Z\s]/g, "");
  }
  return { inputMaskRut: t, inputMaskCurrency: i, inputMaskPhone: a, inputOnlyLetters: o };
}
function ts() {
  function t(i) {
    let a = String.fromCharCode(i.keyCode);
    if (/^[0-9Kk.-]/.test(a)) return !0;
    i.preventDefault();
  }
  return { keyPressRut: t };
}
function os() {
  function t(i) {
    const { sort: a, data: o } = i, { keys: r, index: l, asc: u } = a, d = r[l];
    return o.sort((p, _) => {
      let y = p[d], g = _[d];
      return typeof y == "object" && y !== null && (y = y.name, g = g.name), y === g ? 0 : (y > g ? 1 : -1) * (u ? 1 : -1);
    }), o;
  }
  return { sortTable: t };
}
z.extend(de);
z.locale("es");
function ss() {
  function t(d) {
    return z(d).format("DD/MM/YYYY");
  }
  function i(d) {
    return z(d).format("YYYY-MM-DD");
  }
  function a(d) {
    return z(d).fromNow();
  }
  function o(d) {
    let p = d.replace(/[^0-9kK]/g, ""), _ = p.slice(0, -1).replace(/\B(?=(\d{3})+(?!\d))/g, "."), y = p.slice(-1).toUpperCase();
    return `${_}-${y}`;
  }
  function r(d) {
    return d === null ? "" : d.charAt(0).toUpperCase() + d.slice(1).toLowerCase();
  }
  function l(d) {
    return new Intl.NumberFormat("es-CL").format(d);
  }
  function u(d) {
    const p = d.replace(/\./g, "");
    return Number(p);
  }
  return {
    formatDate: t,
    formatDateToBack: i,
    formatDateAgo: a,
    formatRut: o,
    formatCapitalize: r,
    formatCurrency: l,
    formatCurrencyToBack: u
  };
}
function ns() {
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
const fs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useFormat: ss,
  useInputMask: es,
  useKeypress: ts,
  useTable: os,
  useTooltip: ns,
  useValidator: Xo
}, Symbol.toStringTag, { value: "Module" })), ps = {
  install(t) {
    Object.keys(W).forEach((i) => {
      t.component(i, W[i]);
    });
  }
};
export {
  us as composables,
  ps as default,
  fs as utils
};
