import { computed as S, resolveComponent as P, openBlock as e, createElementBlock as n, normalizeClass as $, Fragment as m, createTextVNode as b, toDisplayString as v, createCommentVNode as c, createBlock as j, createElementVNode as s, createVNode as f, withCtx as F, renderList as T, renderSlot as D, mergeProps as ae, createStaticVNode as le, resolveDirective as ie, withDirectives as A, ref as q, watch as N, watchEffect as O, withKeys as K, vModelText as ee, onMounted as re, unref as V, normalizeStyle as H, vModelDynamic as ce } from "vue";
import { useRoute as te } from "vue-router";
import { codeToHtml as de } from "shiki";
import z from "dayjs";
import ue from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";
const fe = ["disabled"], pe = /* @__PURE__ */ s("div", { class: "spinner-border spinner-border-sm me-1" }, null, -1), I = {
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
          pe,
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
      ], 10, fe);
    };
  }
}, me = { "aria-label": "breadcrumb" }, _e = { class: "eit-breadcrumb" }, he = /* @__PURE__ */ s("span", { class: "px-2 eit-color--text-soft" }, "/", -1), ye = {
  key: 1,
  class: "eit-color--text-soft"
}, ge = {
  __name: "BreadcrumbComponent",
  setup(t) {
    const i = te(), a = S(() => {
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
      return e(), n("nav", me, [
        s("ul", _e, [
          s("li", null, [
            f(u, {
              to: "/",
              class: "eit-color--text-soft eit-color--text-soft--link"
            }, {
              default: F(() => [
                f(l, { icon: "fa-solid fa-house" })
              ]),
              _: 1
            }),
            he
          ]),
          (e(!0), n(m, null, T(a.value, (d, p) => (e(), n("li", {
            key: p,
            class: "eit-breadcrumb__item"
          }, [
            D(o.$slots, d.name, ae({ ref_for: !0 }, d), () => [
              d.last ? (e(), n("span", ye, v(d.name), 1)) : (e(), j(u, {
                key: 0,
                to: d.path,
                class: "eit-color--text eit-color--text--link eit-color--underline"
              }, {
                default: F(() => [
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
        }, null, 8, ve)
      ], 2);
    };
  }
}, be = {
  key: 0,
  class: "table eit-table eit-table-responsive"
}, ke = {
  key: 0,
  class: "eit-skeleton__table-first-td"
}, xe = /* @__PURE__ */ s("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "80%" }
}, null, -1), $e = [
  xe
], we = { key: 1 }, Ce = /* @__PURE__ */ s("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "60%" }
}, null, -1), Se = [
  Ce
], Re = {
  key: 0,
  class: "eit-skeleton__table-first-td"
}, je = /* @__PURE__ */ s("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), De = [
  je
], qe = { key: 1 }, Pe = /* @__PURE__ */ s("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), Te = [
  Pe
], Be = /* @__PURE__ */ le('<div class="row"><div class="col-12"><div class="d-flex"><div class="flex-shrink-0"><div class="eit-skeleton eit-skeleton__btn-square"></div></div><div class="flex-grow-1 ms-3"><div class="d-flex"><div class="flex-grow-1 ms-3"><div class="eit-skeleton eit-skeleton__title my-2" style="width:40%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div></div><div class="flex-shrink-0"><div class="eit-skeleton eit-skeleton__text my-2" style="width:30px;"></div></div></div></div></div></div></div><div class="row flex-grow-1"><div class="col-12 d-flex flex-column flex-grow-1"><div class="eit-slide__content flex-grow-1"><div class="mt-5"><div class="col-12"><h5 class="mb-3"><div class="eit-skeleton eit-skeleton__title my-2" style="width:20%;"></div></h5><ul class="list-unstyled"><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:40%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:20%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:20%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li></ul></div></div></div></div></div>', 2), Y = {
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
      i.type === "table" ? (e(), n("table", be, [
        s("thead", null, [
          s("tr", null, [
            (e(!0), n(m, null, T(i.table.column, (r) => (e(), n(m, { key: r }, [
              r === 1 ? (e(), n("th", ke, $e)) : c("", !0),
              r > 1 ? (e(), n("th", we, Se)) : c("", !0)
            ], 64))), 128))
          ])
        ]),
        s("tbody", null, [
          (e(!0), n(m, null, T(i.table.row, (r) => (e(), n("tr", { key: r }, [
            (e(!0), n(m, null, T(i.table.column, (l) => (e(), n(m, { key: l }, [
              l === 1 ? (e(), n("td", Re, De)) : c("", !0),
              l > 1 ? (e(), n("td", qe, Te)) : c("", !0)
            ], 64))), 128))
          ]))), 128))
        ])
      ])) : c("", !0),
      i.type === "detail" ? (e(), n(m, { key: 1 }, [
        Be
      ], 64)) : c("", !0)
    ], 64));
  }
}, Ne = { class: "d-flex align-items-center" }, Le = { class: "flex-shrink-0 d-flex align-items-center eit-alert__icon me-2" }, Me = ["innerHTML"], oe = {
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
        s("div", Ne, [
          s("div", Le, [
            f(r, {
              icon: i.icon,
              class: $(t.iconClass)
            }, null, 8, ["icon", "class"])
          ]),
          s("div", {
            class: "flex-grow-1 eit-alert__text",
            innerHTML: i.message
          }, null, 8, Me)
        ])
      ], 2);
    };
  }
}, ze = { class: "row" }, Ae = { class: "col-12" }, Oe = { class: "table eit-table eit-table-responsive" }, Ee = ["onClick"], Ve = /* @__PURE__ */ s("th", {
  scope: "col",
  class: "text-center"
}, "Acciones", -1), Fe = { class: "pe-3 d-lg-none" }, He = ["onClick"], Ie = {
  key: 0,
  class: "d-flex flex-wrap gap-1"
}, Ke = {
  key: 3,
  class: "eit-table__string"
}, Ye = { class: "text-center" }, Ue = { class: "dropdown eit-dropdown d-none d-lg-block" }, Ge = {
  href: "javascript:",
  class: "eit-btn-action",
  "data-bs-toggle": "dropdown"
}, Ze = { class: "dropdown-menu dropdown-custom-menu" }, Je = {
  key: 0,
  class: "mx-2"
}, Qe = ["onClick"], We = {
  key: 1,
  class: "mx-2"
}, Xe = ["onClick"], et = {
  key: 2,
  class: "mx-2"
}, tt = ["onClick"], ot = {
  key: 3,
  class: "m-2"
}, st = /* @__PURE__ */ s("div", { class: "eit-border--bottom eit-border--color" }, null, -1), nt = [
  st
], at = {
  key: 4,
  class: "mx-2"
}, lt = ["onClick"], it = {
  key: 5,
  class: "mx-2"
}, rt = ["onClick"], ct = { class: "d-flex w-100 justify-content-between align-items-center d-lg-none text-end" }, dt = /* @__PURE__ */ s("strong", null, "Acciones:", -1), ut = { class: "d-flex flex-wrap gap-2 ms-3" }, ft = ["onClick"], pt = ["onClick"], mt = ["onClick"], _t = ["onClick"], ht = ["onClick"], yt = ["onClick"], gt = {
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
    }, y = (h) => typeof h == "string", g = (h) => typeof h == "object" && !Array.isArray(h), C = (h) => Array.isArray(h), R = (h) => Object.keys(h).includes("status") ? !h.status && "disabled" : "";
    return (h, U) => {
      var Z, J, Q, W;
      const w = P("font-awesome-icon"), G = ie("tippy");
      return e(), n("div", ze, [
        s("div", Ae, [
          t.loading ? (e(), j(Y, {
            key: 0,
            type: "table",
            table: { row: (Z = t.skeleton) == null ? void 0 : Z.row, column: (J = t.skeleton) == null ? void 0 : J.column }
          }, null, 8, ["table"])) : c("", !0),
          !t.loading && !((Q = t.data) != null && Q.length) ? (e(), j(oe, {
            key: 1,
            ref: "alert",
            class: "mb-3",
            type: "info",
            icon: "fa-solid fa-info",
            message: "<strong>No hay resultados</strong> para tu búsqueda."
          }, null, 512)) : c("", !0),
          !t.loading && ((W = t.data) != null && W.length) ? (e(), n(m, { key: 2 }, [
            s("table", Oe, [
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
                    ], 8, Ee)
                  ]))), 128)),
                  Ve
                ])
              ]),
              s("tbody", null, [
                (e(!0), n(m, null, T(t.data, (k, B) => (e(), n("tr", {
                  key: `row-${B}`,
                  class: $(R(k))
                }, [
                  (e(!0), n(m, null, T(k, (x, M) => (e(), n("td", {
                    key: `value-${M}`
                  }, [
                    s("strong", Fe, v(t.columns[Object.keys(k).indexOf(M)]) + ":", 1),
                    Object.keys(k)[t.columnLink] === M ? (e(), n(m, { key: 0 }, [
                      t.viewRecord ? (e(), n("a", {
                        key: 0,
                        onClick: (E) => r(k),
                        href: "javascript:",
                        class: "eit-table__link"
                      }, v(x), 9, He)) : c("", !0),
                      t.viewRecord ? c("", !0) : (e(), n(m, { key: 1 }, [
                        b(v(x), 1)
                      ], 64))
                    ], 64)) : c("", !0),
                    Object.keys(k)[t.columnLink] !== M ? (e(), n(m, { key: 1 }, [
                      C(x) ? (e(), n("div", Ie, [
                        (e(!0), n(m, null, T(x, (E, ne) => (e(), n("span", {
                          key: `value-array-${ne}`,
                          class: "d-flex flex-wrap gap-1"
                        }, [
                          f(L, {
                            text: E.name,
                            className: E.className
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
                      y(x) ? (e(), n("span", Ke, v(x), 1)) : c("", !0)
                    ], 64)) : c("", !0)
                  ]))), 128)),
                  s("td", Ye, [
                    s("div", Ue, [
                      s("a", Ge, [
                        f(w, { icon: "fa-solid fa-ellipsis" })
                      ]),
                      s("ul", Ze, [
                        t.viewRecord ? (e(), n("li", Je, [
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
                          ], 8, Qe)
                        ])) : c("", !0),
                        t.editRecord ? (e(), n("li", We, [
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
                          ], 8, Xe)
                        ])) : c("", !0),
                        t.downloadRecord ? (e(), n("li", et, [
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
                          ], 8, tt)
                        ])) : c("", !0),
                        t.deleteRecord || t.enabledDisabledRecord ? (e(), n("li", ot, nt)) : c("", !0),
                        t.enabledDisabledRecord ? (e(), n("li", at, [
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
                          ], 8, lt)
                        ])) : c("", !0),
                        t.deleteRecord ? (e(), n("li", it, [
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
                          ], 8, rt)
                        ])) : c("", !0)
                      ])
                    ]),
                    s("div", ct, [
                      dt,
                      s("div", ut, [
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
                        ], 8, ft)) : c("", !0),
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
                        ], 8, pt)) : c("", !0),
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
                        ], 8, mt)) : c("", !0),
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
                          ], 8, _t)), [
                            [G, { content: "Habilitar", theme: "main" }]
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
                          ], 8, ht)), [
                            [G, { content: "Deshabilitar", theme: "main" }]
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
                        ], 8, yt)) : c("", !0)
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
}, vt = { class: "eit-paginator gap-2" }, bt = ["disabled"], kt = { class: "eit-color--text eit-font__size--x1" }, xt = ["disabled"], $t = {
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
    }), O(() => {
      a.data && (r.value = a.data.currentPage);
    }), (_, y) => {
      const g = P("font-awesome-icon");
      return e(), n("div", vt, [
        s("button", {
          onClick: u,
          disabled: t.data.currentPage === 1,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          f(g, { icon: "fa-solid fa-chevron-left" })
        ], 8, bt),
        A(s("input", {
          type: "number",
          "onUpdate:modelValue": y[0] || (y[0] = (C) => r.value = C),
          onInput: d,
          onKeyup: K(d, ["enter"]),
          onBlur: d,
          onFocus: p,
          class: "eit-input eit-paginator__input eit-font__size--x1 text-center",
          "aria-label": "Número de página"
        }, null, 544), [
          [
            ee,
            r.value,
            void 0,
            { number: !0 }
          ]
        ]),
        s("span", kt, [
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
        ], 8, xt)
      ]);
    };
  }
}, wt = { class: "row" }, Ct = { class: "col-12" }, St = { class: "d-flex" }, Rt = { class: "flex-shrink-0" }, jt = { class: "flex-grow-1" }, Dt = { class: "d-flex" }, qt = { class: "flex-grow-1 d-flex flex-column ms-3" }, Pt = { class: "eit-font--primary mb-0" }, Tt = { class: "eit-color--text mb-0" }, Bt = { class: "flex-shrink-0" }, Nt = {
  key: 0,
  class: "dropdown eit-dropdown d-none d-lg-block"
}, Lt = {
  href: "javascript:",
  class: "eit-btn-action",
  "data-bs-toggle": "dropdown"
}, Mt = { class: "dropdown-menu dropdown-custom-menu" }, zt = {
  key: 0,
  class: "mx-2"
}, At = {
  key: 1,
  class: "mx-2"
}, Ot = {
  key: 2,
  class: "m-2"
}, Et = /* @__PURE__ */ s("div", { class: "eit-border--bottom eit-border--color" }, null, -1), Vt = [
  Et
], Ft = {
  key: 3,
  class: "mx-2"
}, Ht = {
  key: 4,
  class: "mx-2"
}, It = { class: "row flex-grow-1" }, Kt = { class: "col-12 d-flex flex-column flex-grow-1" }, Yt = { class: "eit-slide__content flex-grow-1" }, Ut = {
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
        a.loading ? (e(), j(Y, {
          key: 0,
          type: "detail"
        })) : c("", !0),
        a.loading ? c("", !0) : (e(), n(m, { key: 1 }, [
          s("div", wt, [
            s("div", Ct, [
              s("div", St, [
                s("div", Rt, [
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
                s("div", jt, [
                  s("div", Dt, [
                    s("div", qt, [
                      s("h4", Pt, [
                        s("strong", null, [
                          D(_.$slots, "title")
                        ])
                      ]),
                      s("p", Tt, [
                        D(_.$slots, "subtitle")
                      ])
                    ]),
                    s("div", Bt, [
                      a.dropdown ? (e(), n("div", Nt, [
                        s("a", Lt, [
                          f(g, { icon: "fa-solid fa-ellipsis" })
                        ]),
                        s("ul", Mt, [
                          a.editRecord ? (e(), n("li", zt, [
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
                          a.downloadRecord ? (e(), n("li", At, [
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
                          t.deleteRecord || t.enabledDisabledRecord ? (e(), n("li", Ot, Vt)) : c("", !0),
                          a.enabledDisabledRecord ? (e(), n("li", Ft, [
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
                          a.deleteRecord ? (e(), n("li", Ht, [
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
          s("div", It, [
            s("div", Kt, [
              s("div", Yt, [
                D(_.$slots, "component")
              ])
            ])
          ]),
          D(_.$slots, "footer")
        ], 64))
      ], 2);
    };
  }
}, Gt = { class: "d-flex justify-content-between align-items-center" }, Zt = ["onClick"], Jt = {
  key: 0,
  class: "eit-tabs__badge"
}, Qt = { class: "d-flex flex-column" }, Wt = {
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
      s("div", Gt, [
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
              d.number ? (e(), n("span", Jt, v(a(d.number)), 1)) : c("", !0)
            ], 10, Zt)
          ]))), 128))
        ], 2),
        D(l.$slots, "dropdown")
      ]),
      s("div", Qt, [
        D(l.$slots, `tab-${o.value}`)
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
      a.value = await de(r, {
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
    return re(() => {
      document.addEventListener("keyup", p);
    }), i({ showDialog: u, closeDialog: d }), (y, g) => {
      const C = P("font-awesome-icon");
      return e(), n("dialog", {
        ref_key: "dialog",
        ref: l,
        class: $(["eit-dialog", o.className]),
        onKeyup: K(d, ["esc"])
      }, [
        s("div", to, [
          t.loading ? (e(), j(V(se), {
            key: 0,
            size: "70"
          })) : c("", !0),
          t.loading ? c("", !0) : (e(), n(m, { key: 1 }, [
            s("div", oo, [
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
            s("div", so, [
              f(V(I), {
                onClick: d,
                className: "eit-btn-outline--gray",
                text: "Volver"
              }),
              o.btnSubmit ? (e(), j(V(I), {
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
}, ao = { class: "row" }, lo = { class: "col" }, io = /* @__PURE__ */ s("h2", { class: "eit-font__size--x4 eit-color--text eit-font__weight--300 eit-border--bottom eit-border--color mb-3" }, [
  /* @__PURE__ */ s("strong", { class: "eit-font__weight--900" }, "Props")
], -1), ro = { class: "eit-table--overflow" }, co = { class: "table eit-table" }, uo = /* @__PURE__ */ s("thead", null, [
  /* @__PURE__ */ s("tr", null, [
    /* @__PURE__ */ s("th", null, "Name"),
    /* @__PURE__ */ s("th", null, "Type"),
    /* @__PURE__ */ s("th", null, "Default")
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
    return (a, o) => (e(), n("div", ao, [
      s("div", lo, [
        io,
        s("div", ro, [
          s("table", co, [
            uo,
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
}, po = { class: "eit-progress eit-progress--30" }, mo = { key: 1 }, _o = /* @__PURE__ */ s("span", { class: "spinner-border spinner-border-sm" }, null, -1), ho = {
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
    return (r, l) => (e(), n("div", po, [
      s("div", {
        class: $(["eit-progress__bar", `eit-progress__bar--${i.type}`]),
        style: H(`width: ${i.percentage}%`)
      }, [
        a.value !== 0 ? (e(), n(m, { key: 0 }, [
          i.percentage > 5 ? (e(), n(m, { key: 0 }, [
            b(v(i.percentage) + "% ", 1)
          ], 64)) : c("", !0)
        ], 64)) : c("", !0)
      ], 6),
      s("div", {
        class: "eit-progress__bar eit-progress__bar--transparent",
        style: H(`width: ${o.value === 0 ? 100 : o.value}%`)
      }, [
        i.loading ? c("", !0) : (e(), n(m, { key: 0 }, [
          o.value === 0 || o.value > 5 ? (e(), n(m, { key: 0 }, [
            b(v(o.value) + "% ", 1)
          ], 64)) : c("", !0)
        ], 64)),
        i.loading ? (e(), n("span", mo, [
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
}, $o = { class: "flex-grow-1 ms-3" }, wo = { class: "d-flex" }, Co = { class: "flex-grow-1 me-3" }, So = { class: "eit-toast__title" }, Ro = { class: "eit-toast__text" }, jo = { class: "flex-shrink-0" }, Do = {
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
          s("div", yo, [
            s("div", go, [
              a.type === "success" ? (e(), n("span", vo, [
                f(g, { icon: "fa-solid fa-circle-check" })
              ])) : c("", !0),
              a.type === "error" ? (e(), n("span", bo, [
                f(g, { icon: "fa-solid fa-circle-xmark" })
              ])) : c("", !0),
              a.type === "warning" ? (e(), n("span", ko, [
                f(g, { icon: "fa-solid fa-triangle-exclamation" })
              ])) : c("", !0),
              a.type === "info" ? (e(), n("span", xo, [
                f(g, { icon: "fa-solid fa-circle-info" })
              ])) : c("", !0)
            ]),
            s("div", $o, [
              s("div", wo, [
                s("div", Co, [
                  s("p", So, [
                    a.data.code ? (e(), n(m, { key: 0 }, [
                      b(v(a.data.code), 1)
                    ], 64)) : c("", !0),
                    b(" " + v(a.data.title), 1)
                  ]),
                  s("p", Ro, v(a.data.message), 1)
                ]),
                s("div", jo, [
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
}, qo = { class: "d-flex" }, Po = { class: "flex-shrink-0 eit-popover__left" }, To = {
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
          s("div", qo, [
            s("div", Po, [
              a.type === "success" ? (e(), n("span", To, [
                f(_, { icon: "fa-solid fa-circle-check" })
              ])) : c("", !0),
              a.type === "error" ? (e(), n("span", Bo, [
                f(_, { icon: "fa-solid fa-circle-xmark" })
              ])) : c("", !0),
              a.type === "warning" ? (e(), n("span", No, [
                f(_, { icon: "fa-solid fa-triangle-exclamation" })
              ])) : c("", !0),
              a.type === "info" ? (e(), n("span", Lo, [
                f(_, { icon: "fa-solid fa-circle-info" })
              ])) : c("", !0)
            ]),
            s("div", Mo, [
              s("div", zo, [
                s("div", Ao, [
                  s("p", Oo, [
                    a.data.code ? (e(), n(m, { key: 0 }, [
                      b(v(a.data.code), 1)
                    ], 64)) : c("", !0),
                    b(" " + v(a.data.title), 1)
                  ]),
                  s("p", Eo, v(a.data.message), 1)
                ]),
                s("div", Vo, [
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
}, Ho = ["type", "maxlength", "placeholder", "disabled"], Io = {
  key: 0,
  class: "eit-label-float"
}, Ko = {
  key: 1,
  class: "eit-input__display__icon eit-input__display__float-left--icon"
}, Yo = {
  key: 2,
  class: "eit-input__display__icon eit-input__display__float-right--icon"
}, Uo = {
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
    }), O(() => {
      o.inputMask && (l.value = o.inputMask(l.value)), o.submitted && g();
    }), i({ clean: g }), (C, R) => (e(), n("div", {
      class: $(_.value)
    }, [
      A(s("input", {
        autocomplete: "off",
        class: $(["form-control eit-input", d.value]),
        type: o.inputType,
        "onUpdate:modelValue": R[0] || (R[0] = (h) => l.value = h),
        maxlength: o.maxLength,
        onKeypress: R[1] || (R[1] = (h) => o.keyPress && o.keyPress(h)),
        placeholder: p.value,
        onKeyup: K(y, ["enter"]),
        disabled: o.isDisabled
      }, null, 42, Ho), [
        [
          ce,
          l.value,
          void 0,
          { trim: !0 }
        ]
      ]),
      o.floatLabel ? (e(), n("label", Io, v(o.floatLabel), 1)) : c("", !0),
      o.floatLeft ? (e(), n("span", Ko, [
        D(C.$slots, "float-left")
      ])) : c("", !0),
      o.floatRight ? (e(), n("span", Yo, [
        D(C.$slots, "float-right")
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
    ), d = S(() => !u.value && o.requiredField && o.error ? "is-invalid" : ""), p = () => Array.isArray(l.value) ? o.data.filter((R) => !l.value.some((h) => h.id === R.id)) : o.data, _ = () => l.value ? o.data.filter((R) => R.id !== l.value.id) : o.data, y = S(() => o.multiple ? p() : _()), g = (R) => o.selectable ? o.selectable(R) : (h) => h.includes(h);
    N(
      () => o.selected,
      (R) => {
        R && (l.value = R);
      },
      { immediate: !0 }
    ), N(l, () => {
      r("emitValue", u.value ? l.value : null);
    }), O(() => {
      o.submitted && C();
    });
    const C = () => {
      l.value = o.multiple ? [] : null;
    };
    return i({ clean: C }), (R, h) => {
      const U = P("v-select");
      return e(), j(U, {
        options: y.value,
        modelValue: l.value,
        "onUpdate:modelValue": h[0] || (h[0] = (w) => l.value = w),
        label: t.labelCustom,
        multiple: t.multiple,
        placeholder: t.placeHolder,
        class: $(["eit-select-component", d.value]),
        clearable: t.clearable,
        disabled: o.isDisabled,
        selectable: g
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
    }), O(() => {
      o.submitted && _();
    }), i({ clean: _ }), (y, g) => A((e(), n("textarea", {
      ref_key: "textarea",
      ref: l,
      "onUpdate:modelValue": g[0] || (g[0] = (C) => u.value = C),
      maxlength: t.maxLength,
      autocomplete: "off",
      class: $(["form-control eit-textarea eit-textarea-resize", p.value]),
      placeholder: t.placeHolder
    }, null, 10, Zo)), [
      [
        ee,
        u.value,
        void 0,
        { trim: !0 }
      ]
    ]);
  }
}, Qo = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20style='margin:%20auto;%20display:%20block;%20shape-rendering:%20auto;'%20width='200px'%20height='200px'%20viewBox='0%200%20100%20100'%20preserveAspectRatio='xMidYMid'%3e%3crect%20x='17.5'%20y='30'%20width='15'%20height='40'%20fill='%23009da6'%3e%3canimate%20attributeName='y'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='18;30;30'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.2s'%3e%3c/animate%3e%3canimate%20attributeName='height'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='64;40;40'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.2s'%3e%3c/animate%3e%3c/rect%3e%3crect%20x='42.5'%20y='30'%20width='15'%20height='40'%20fill='%2379cace'%3e%3canimate%20attributeName='y'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='20.999999999999996;30;30'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.1s'%3e%3c/animate%3e%3canimate%20attributeName='height'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='58.00000000000001;40;40'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.1s'%3e%3c/animate%3e%3c/rect%3e%3crect%20x='67.5'%20y='30'%20width='15'%20height='40'%20fill='%23a9e4e7'%3e%3canimate%20attributeName='y'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='20.999999999999996;30;30'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%3e%3c/animate%3e%3canimate%20attributeName='height'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='58.00000000000001;40;40'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%3e%3c/animate%3e%3c/rect%3e%3c/svg%3e", Wo = { class: "p-3 eit-loading" }, se = {
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
    return (a, o) => (e(), n("div", Wo, [
      s("img", {
        style: H(`width:${i.size}px`),
        src: Qo
      }, null, 4)
    ]));
  }
}, X = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlertComponent: oe,
  BadgeComponent: L,
  BreadcrumbComponent: ge,
  ButtonComponent: I,
  DetailComponent: Ut,
  DialogComponent: no,
  HighlightComponent: eo,
  InputComponent: Uo,
  LoadingComponent: se,
  PaginationComponent: $t,
  PopoverComponent: Fo,
  ProgressBarComponent: ho,
  PropsComponent: fo,
  SelectComponent: Go,
  SkeletonComponent: Y,
  TabComponent: Wt,
  TableComponent: gt,
  TextareaResizeComponent: Jo,
  ToastComponent: Do
}, Symbol.toStringTag, { value: "Module" }));
function Xo(t, i) {
  const a = te(), o = S(() => a.meta.requiresAuth ? t.config.darkTheme ? i.logotipo.logo_dark : i.logotipo.logo_light : i.platformDarkTheme ? i.logotipo.logo_dark : i.logotipo.logo_light), r = S(() => t.config.darkTheme ? i.logotipo.isotipo_dark : i.logotipo.isotipo_light);
  return { logotipo: o, isotipo: r };
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
function ts() {
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
    const { sort: a, data: o } = i, { keys: r, index: l, asc: u } = a, d = r[l];
    return o.sort((p, _) => {
      let y = p[d], g = _[d];
      return typeof y == "object" && y !== null && (y = y.name, g = g.name), y === g ? 0 : (y > g ? 1 : -1) * (u ? 1 : -1);
    }), o;
  }
  return { sortTable: t };
}
z.extend(ue);
z.locale("es");
function ns() {
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
function as() {
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
  useTooltip: as,
  useValidator: es
}, Symbol.toStringTag, { value: "Module" })), ms = {
  install(t) {
    Object.keys(X).forEach((i) => {
      t.component(i, X[i]);
    });
  }
};
export {
  fs as composables,
  ms as default,
  ps as utils
};
