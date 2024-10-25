import { computed as C, resolveComponent as T, openBlock as e, createElementBlock as s, normalizeClass as $, Fragment as m, createTextVNode as k, toDisplayString as g, createCommentVNode as c, createBlock as D, createElementVNode as n, createVNode as f, withCtx as H, renderList as B, renderSlot as q, mergeProps as le, createStaticVNode as ie, resolveDirective as re, withDirectives as A, ref as P, watch as L, watchEffect as V, withKeys as Y, vModelText as te, onMounted as ce, unref as F, normalizeStyle as I, vModelDynamic as de } from "vue";
import { useRoute as oe } from "vue-router";
import { codeToHtml as ue } from "shiki";
import O from "dayjs";
import fe from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";
const pe = ["disabled"], me = /* @__PURE__ */ n("div", { class: "spinner-border spinner-border-sm me-1" }, null, -1), K = {
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
    const a = t, o = i, r = C(() => ["eit-btn", `${a.className}`]), l = (u) => {
      o("emitEvent", u);
    };
    return (u, d) => {
      const p = T("font-awesome-icon");
      return e(), s("button", {
        onClick: d[0] || (d[0] = (_) => l(_)),
        class: $([r.value, "d-flex align-items-center justify-content-center gap-1"]),
        disabled: a.isDisabled
      }, [
        a.loading ? (e(), s(m, { key: 0 }, [
          me,
          k(" " + g(a.loadingText), 1)
        ], 64)) : c("", !0),
        a.loading ? c("", !0) : (e(), s(m, { key: 1 }, [
          a.icon ? (e(), D(p, {
            key: 0,
            icon: a.icon,
            class: $(t.iconClass)
          }, null, 8, ["icon", "class"])) : c("", !0),
          k(" " + g(t.text), 1)
        ], 64))
      ], 10, pe);
    };
  }
}, _e = { "aria-label": "breadcrumb" }, he = { class: "eit-breadcrumb" }, ye = /* @__PURE__ */ n("span", { class: "px-2 eit-color--text-soft" }, "/", -1), ge = {
  key: 1,
  class: "eit-color--text-soft"
}, ve = {
  __name: "BreadcrumbComponent",
  setup(t) {
    const i = oe(), a = C(() => {
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
      const l = T("font-awesome-icon"), u = T("router-link");
      return e(), s("nav", _e, [
        n("ul", he, [
          n("li", null, [
            f(u, {
              to: "/",
              class: "eit-color--text-soft eit-color--text-soft--link"
            }, {
              default: H(() => [
                f(l, { icon: "fa-solid fa-house" })
              ]),
              _: 1
            }),
            ye
          ]),
          (e(!0), s(m, null, B(a.value, (d, p) => (e(), s("li", {
            key: p,
            class: "eit-breadcrumb__item"
          }, [
            q(o.$slots, d.name, le({ ref_for: !0 }, d), () => [
              d.last ? (e(), s("span", ge, g(d.name), 1)) : (e(), D(u, {
                key: 0,
                to: d.path,
                class: "eit-color--text eit-color--text--link eit-color--underline"
              }, {
                default: H(() => [
                  k(g(d.name), 1)
                ]),
                _: 2
              }, 1032, ["to"]))
            ])
          ]))), 128))
        ])
      ]);
    };
  }
}, be = ["innerHTML"], M = {
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
      const r = T("font-awesome-icon");
      return e(), s("span", {
        key: `badge-${i.text}`,
        class: $(`eit-badge ${i.className}`)
      }, [
        i.icon ? (e(), D(r, {
          key: 0,
          icon: i.icon,
          class: "me-1"
        }, null, 8, ["icon"])) : c("", !0),
        n("span", {
          innerHTML: i.text
        }, null, 8, be)
      ], 2);
    };
  }
}, ke = {
  key: 0,
  class: "table eit-table eit-table-responsive"
}, xe = {
  key: 0,
  class: "eit-skeleton__table-first-td"
}, $e = /* @__PURE__ */ n("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "80%" }
}, null, -1), we = [
  $e
], Ce = { key: 1 }, Se = /* @__PURE__ */ n("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "60%" }
}, null, -1), Re = [
  Se
], je = {
  key: 0,
  class: "eit-skeleton__table-first-td"
}, De = /* @__PURE__ */ n("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), qe = [
  De
], Pe = { key: 1 }, Te = /* @__PURE__ */ n("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), Be = [
  Te
], Ne = /* @__PURE__ */ ie('<div class="row"><div class="col-12"><div class="d-flex"><div class="flex-shrink-0"><div class="eit-skeleton eit-skeleton__btn-square"></div></div><div class="flex-grow-1 ms-3"><div class="d-flex"><div class="flex-grow-1 ms-3"><div class="eit-skeleton eit-skeleton__title my-2" style="width:40%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div></div><div class="flex-shrink-0"><div class="eit-skeleton eit-skeleton__text my-2" style="width:30px;"></div></div></div></div></div></div></div><div class="row flex-grow-1"><div class="col-12 d-flex flex-column flex-grow-1"><div class="eit-slide__content flex-grow-1"><div class="mt-5"><div class="col-12"><h5 class="mb-3"><div class="eit-skeleton eit-skeleton__title my-2" style="width:20%;"></div></h5><ul class="list-unstyled"><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:40%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:20%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:20%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li></ul></div></div></div></div></div>', 2), U = {
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
    return (a, o) => (e(), s(m, null, [
      i.type === "table" ? (e(), s("table", ke, [
        n("thead", null, [
          n("tr", null, [
            (e(!0), s(m, null, B(i.table.column, (r) => (e(), s(m, { key: r }, [
              r === 1 ? (e(), s("th", xe, we)) : c("", !0),
              r > 1 ? (e(), s("th", Ce, Re)) : c("", !0)
            ], 64))), 128))
          ])
        ]),
        n("tbody", null, [
          (e(!0), s(m, null, B(i.table.row, (r) => (e(), s("tr", { key: r }, [
            (e(!0), s(m, null, B(i.table.column, (l) => (e(), s(m, { key: l }, [
              l === 1 ? (e(), s("td", je, qe)) : c("", !0),
              l > 1 ? (e(), s("td", Pe, Be)) : c("", !0)
            ], 64))), 128))
          ]))), 128))
        ])
      ])) : c("", !0),
      i.type === "detail" ? (e(), s(m, { key: 1 }, [
        Ne
      ], 64)) : c("", !0)
    ], 64));
  }
}, Le = { class: "d-flex align-items-center" }, Me = { class: "flex-shrink-0 d-flex align-items-center eit-alert__icon me-2" }, ze = ["innerHTML"], ne = {
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
      const r = T("font-awesome-icon");
      return e(), s("div", {
        class: $(`eit-alert eit-alert--${i.type} ${i.animation.active ? "eit-alert--animation" : "eit-alert--default"} ${i.animation.show ? "eit-alert--animation--show" : ""}`)
      }, [
        n("div", Le, [
          n("div", Me, [
            f(r, {
              icon: i.icon,
              class: $(t.iconClass)
            }, null, 8, ["icon", "class"])
          ]),
          n("div", {
            class: "flex-grow-1 eit-alert__text",
            innerHTML: i.message
          }, null, 8, ze)
        ])
      ], 2);
    };
  }
}, Oe = { class: "row" }, Ae = { class: "col-12" }, Ee = { class: "table eit-table eit-table-responsive" }, Ve = ["onClick"], Fe = /* @__PURE__ */ n("th", {
  scope: "col",
  class: "text-center"
}, "Acciones", -1), He = { class: "pe-3 d-lg-none" }, Ie = ["onClick"], Ke = {
  key: 0,
  class: "d-flex flex-wrap gap-1"
}, Ye = {
  key: 3,
  class: "eit-table__string"
}, Ue = {
  key: 4,
  class: "eit-table__string"
}, Ge = { class: "text-center" }, Ze = { class: "dropdown eit-dropdown d-none d-lg-block" }, Je = {
  href: "javascript:",
  class: "eit-btn-action",
  "data-bs-toggle": "dropdown"
}, Qe = { class: "dropdown-menu dropdown-custom-menu" }, We = {
  key: 0,
  class: "mx-2"
}, Xe = ["onClick"], et = {
  key: 1,
  class: "mx-2"
}, tt = ["onClick"], ot = {
  key: 2,
  class: "mx-2"
}, nt = ["onClick"], st = {
  key: 3,
  class: "m-2"
}, at = /* @__PURE__ */ n("div", { class: "eit-border--bottom eit-border--color" }, null, -1), lt = [
  at
], it = {
  key: 4,
  class: "mx-2"
}, rt = ["onClick"], ct = {
  key: 5,
  class: "mx-2"
}, dt = ["onClick"], ut = { class: "d-flex w-100 justify-content-between align-items-center d-lg-none text-end" }, ft = /* @__PURE__ */ n("strong", null, "Acciones:", -1), pt = { class: "d-flex flex-wrap gap-2 ms-3" }, mt = ["onClick"], _t = ["onClick"], ht = ["onClick"], yt = ["onClick"], gt = ["onClick"], vt = ["onClick"], bt = {
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
    const a = t, o = i, r = (v) => {
      o("viewRecord", v);
    }, l = (v) => {
      o("editRecord", v);
    }, u = (v) => {
      o("deleteRecord", v);
    }, d = (v) => {
      o("downloadRecord", v);
    }, p = (v) => {
      o("updateSort", { index: v, asc: !a.sort.asc });
    }, _ = (v) => {
      o("enabledDisabledRecord", v);
    }, h = (v) => typeof v == "string", y = (v) => typeof v == "object" && v !== null && !Array.isArray(v), w = (v) => Array.isArray(v), S = (v) => {
      if (v == null) return !0;
    }, j = (v) => Object.keys(v).includes("status") ? !v.status && "disabled" : "";
    return (v, G) => {
      var J, Q, W, X;
      const R = T("font-awesome-icon"), Z = re("tippy");
      return e(), s("div", Oe, [
        n("div", Ae, [
          t.loading ? (e(), D(U, {
            key: 0,
            type: "table",
            table: { row: (J = t.skeleton) == null ? void 0 : J.row, column: (Q = t.skeleton) == null ? void 0 : Q.column }
          }, null, 8, ["table"])) : c("", !0),
          !t.loading && !((W = t.data) != null && W.length) ? (e(), D(ne, {
            key: 1,
            ref: "alert",
            class: "mb-3",
            type: "info",
            icon: "fa-solid fa-info",
            message: "<strong>No hay resultados</strong> para tu búsqueda."
          }, null, 512)) : c("", !0),
          !t.loading && ((X = t.data) != null && X.length) ? (e(), s(m, { key: 2 }, [
            n("table", Ee, [
              n("thead", null, [
                n("tr", null, [
                  (e(!0), s(m, null, B(t.columns, (x, N) => (e(), s("th", {
                    key: `column-${N}`,
                    scope: "col"
                  }, [
                    n("a", {
                      onClick: (b) => p(N),
                      href: "javascript:",
                      class: "d-flex justify-content-between"
                    }, [
                      k(g(x) + " ", 1),
                      t.sort.index === N ? (e(), s("span", {
                        key: `icono-${x}`,
                        class: "d-flex ms-2 eit-color--text"
                      }, [
                        t.sort.asc ? c("", !0) : (e(), s("span", {
                          key: `down-${x}`
                        }, [
                          f(R, { icon: "fa-solid fa-sort-down align-baseline" })
                        ])),
                        t.sort.asc ? (e(), s("span", {
                          key: `up-${x}`
                        }, [
                          f(R, { icon: "fa-solid fa-sort-up align-baseline" })
                        ])) : c("", !0)
                      ])) : (e(), s("span", {
                        key: `key-${x}`
                      }, [
                        f(R, { icon: "fa-solid fa-sort" })
                      ]))
                    ], 8, Ve)
                  ]))), 128)),
                  Fe
                ])
              ]),
              n("tbody", null, [
                (e(!0), s(m, null, B(t.data, (x, N) => (e(), s("tr", {
                  key: `row-${N}`,
                  class: $(j(x))
                }, [
                  (e(!0), s(m, null, B(x, (b, z) => (e(), s("td", {
                    key: `value-${z}`
                  }, [
                    n("strong", He, g(t.columns[Object.keys(x).indexOf(z)]) + ":", 1),
                    Object.keys(x)[t.columnLink] === z ? (e(), s(m, { key: 0 }, [
                      t.viewRecord ? (e(), s("a", {
                        key: 0,
                        onClick: (E) => r(x),
                        href: "javascript:",
                        class: "eit-table__link"
                      }, g(b || "Sin datos"), 9, Ie)) : c("", !0),
                      t.viewRecord ? c("", !0) : (e(), s(m, { key: 1 }, [
                        k(g(b || "Sin datos"), 1)
                      ], 64))
                    ], 64)) : c("", !0),
                    Object.keys(x)[t.columnLink] !== z ? (e(), s(m, { key: 1 }, [
                      w(b) ? (e(), s("div", Ke, [
                        (e(!0), s(m, null, B(b, (E, ae) => (e(), s("span", {
                          key: `value-array-${ae}`,
                          class: "d-flex flex-wrap gap-1"
                        }, [
                          f(M, {
                            text: E.name ? E.name : "Sin datos",
                            className: E.className
                          }, null, 8, ["text", "className"])
                        ]))), 128))
                      ])) : c("", !0),
                      z === "status" ? (e(), s(m, { key: 1 }, [
                        b ? (e(), D(M, {
                          key: 0,
                          text: "Activo",
                          className: "eit-badge__outline--secondary"
                        })) : c("", !0),
                        b ? c("", !0) : (e(), D(M, {
                          key: 1,
                          text: "Inactivo",
                          className: "eit-badge__outline--gray"
                        }))
                      ], 64)) : c("", !0),
                      y(b) ? (e(), D(M, {
                        key: 2,
                        text: b.name ? b.name : "Sin datos",
                        className: b.className
                      }, null, 8, ["text", "className"])) : c("", !0),
                      h(b) ? (e(), s("span", Ye, g(b || "Sin datos"), 1)) : c("", !0),
                      S(b) ? (e(), s("span", Ue, " Sin datos ")) : c("", !0)
                    ], 64)) : c("", !0)
                  ]))), 128)),
                  n("td", Ge, [
                    n("div", Ze, [
                      n("a", Je, [
                        f(R, { icon: "fa-solid fa-ellipsis" })
                      ]),
                      n("ul", Qe, [
                        t.viewRecord ? (e(), s("li", We, [
                          n("a", {
                            onClick: (b) => r(x),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            f(R, {
                              icon: "fa-regular fa-eye",
                              class: "eit-color--blue"
                            }),
                            k(" " + g(t.viewRecord), 1)
                          ], 8, Xe)
                        ])) : c("", !0),
                        t.editRecord ? (e(), s("li", et, [
                          n("a", {
                            onClick: (b) => l(x),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            f(R, {
                              icon: "fa-solid fa-square-pen",
                              class: "eit-color--yellow"
                            }),
                            k(" " + g(t.editRecord), 1)
                          ], 8, tt)
                        ])) : c("", !0),
                        t.downloadRecord ? (e(), s("li", ot, [
                          n("a", {
                            onClick: (b) => d(x),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            f(R, {
                              icon: "fa-solid fa-download",
                              class: "eit-color--blue"
                            }),
                            k(" " + g(t.downloadRecord), 1)
                          ], 8, nt)
                        ])) : c("", !0),
                        t.deleteRecord || t.enabledDisabledRecord ? (e(), s("li", st, lt)) : c("", !0),
                        t.enabledDisabledRecord ? (e(), s("li", it, [
                          n("a", {
                            onClick: (b) => _(x),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            x.status ? c("", !0) : (e(), s(m, { key: 0 }, [
                              f(R, {
                                icon: "fa-regular fa-circle-check",
                                class: "eit-color--green"
                              }),
                              k(" Habilitar ")
                            ], 64)),
                            x.status ? (e(), s(m, { key: 1 }, [
                              f(R, {
                                icon: "fa-solid fa-ban",
                                class: "eit-color--red"
                              }),
                              k(" Deshabilitar ")
                            ], 64)) : c("", !0)
                          ], 8, rt)
                        ])) : c("", !0),
                        t.deleteRecord ? (e(), s("li", ct, [
                          n("a", {
                            onClick: (b) => u(N),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            f(R, {
                              icon: "fa-solid fa-trash",
                              class: "eit-color--red"
                            }),
                            k(" " + g(t.deleteRecord), 1)
                          ], 8, dt)
                        ])) : c("", !0)
                      ])
                    ]),
                    n("div", ut, [
                      ft,
                      n("div", pt, [
                        t.viewRecord ? (e(), s("a", {
                          key: 0,
                          onClick: (b) => r(x),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          f(R, {
                            icon: "fa-regular fa-eye",
                            class: "eit-color--blue"
                          })
                        ], 8, mt)) : c("", !0),
                        t.editRecord ? (e(), s("a", {
                          key: 1,
                          onClick: (b) => l(x),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          f(R, {
                            icon: "fa-solid fa-square-pen",
                            class: "eit-color--yellow"
                          })
                        ], 8, _t)) : c("", !0),
                        t.downloadRecord ? (e(), s("a", {
                          key: 2,
                          onClick: (b) => d(x),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          f(R, {
                            icon: "fa-solid fa-download",
                            class: "eit-color--blue"
                          })
                        ], 8, ht)) : c("", !0),
                        t.enabledDisabledRecord ? (e(), s(m, { key: 3 }, [
                          x.status ? c("", !0) : A((e(), s("a", {
                            key: 0,
                            onClick: (b) => _(x),
                            href: "javascript:",
                            class: "eit-btn eit-btn-outline--gray eit-btn--square"
                          }, [
                            f(R, {
                              icon: "fa-regular fa-circle-check",
                              class: "eit-color--green"
                            })
                          ], 8, yt)), [
                            [Z, { content: "Habilitar", theme: "main" }]
                          ]),
                          x.status ? A((e(), s("a", {
                            key: 1,
                            onClick: (b) => _(x),
                            href: "javascript:",
                            class: "eit-btn eit-btn-outline--gray eit-btn--square"
                          }, [
                            f(R, {
                              icon: "fa-solid fa-ban",
                              class: "eit-color--red"
                            })
                          ], 8, gt)), [
                            [Z, { content: "Deshabilitar", theme: "main" }]
                          ]) : c("", !0)
                        ], 64)) : c("", !0),
                        t.deleteRecord ? (e(), s("a", {
                          key: 4,
                          onClick: (b) => u(N),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          f(R, {
                            icon: "fa-solid fa-trash",
                            class: "eit-color--red"
                          })
                        ], 8, vt)) : c("", !0)
                      ])
                    ])
                  ])
                ], 2))), 128))
              ])
            ]),
            q(v.$slots, "paginator")
          ], 64)) : c("", !0)
        ])
      ]);
    };
  }
}, kt = { class: "eit-paginator gap-2" }, xt = ["disabled"], $t = { class: "eit-color--text eit-font__size--x1" }, wt = ["disabled"], Ct = {
  __name: "PaginationComponent",
  props: {
    data: {
      type: Object,
      required: !0
    }
  },
  emits: ["updatePaginator"],
  setup(t, { emit: i }) {
    const a = t, o = i, r = P(a.data.currentPage), l = () => r.value++, u = () => r.value--, d = () => {
      r.value <= 0 && (r.value = 1), r.value > a.data.finalPage && (r.value = a.data.finalPage);
    }, p = (_) => {
      _.target.select();
    };
    return L(r, () => {
      r.value > 0 && r.value <= a.data.finalPage && o("updatePaginator", r.value);
    }), V(() => {
      a.data && (r.value = a.data.currentPage);
    }), (_, h) => {
      const y = T("font-awesome-icon");
      return e(), s("div", kt, [
        n("button", {
          onClick: u,
          disabled: t.data.currentPage === 1,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          f(y, { icon: "fa-solid fa-chevron-left" })
        ], 8, xt),
        A(n("input", {
          type: "number",
          "onUpdate:modelValue": h[0] || (h[0] = (w) => r.value = w),
          onInput: d,
          onKeyup: Y(d, ["enter"]),
          onBlur: d,
          onFocus: p,
          class: "eit-input eit-paginator__input eit-font__size--x1 text-center",
          "aria-label": "Número de página"
        }, null, 544), [
          [
            te,
            r.value,
            void 0,
            { number: !0 }
          ]
        ]),
        n("span", $t, [
          k(" de " + g(t.data.finalPage) + " ", 1),
          t.data.finalPage === 1 ? (e(), s(m, { key: 0 }, [
            k(" página ")
          ], 64)) : c("", !0),
          t.data.finalPage > 1 ? (e(), s(m, { key: 1 }, [
            k(" páginas ")
          ], 64)) : c("", !0)
        ]),
        n("button", {
          onClick: l,
          disabled: t.data.currentPage === t.data.finalPage,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          f(y, { icon: "fa-solid fa-chevron-right" })
        ], 8, wt)
      ]);
    };
  }
}, St = { class: "row" }, Rt = { class: "col-12" }, jt = { class: "d-flex" }, Dt = { class: "flex-shrink-0" }, qt = { class: "flex-grow-1" }, Pt = { class: "d-flex" }, Tt = { class: "flex-grow-1 d-flex flex-column ms-3" }, Bt = { class: "eit-font--primary mb-0" }, Nt = { class: "eit-color--text mb-0" }, Lt = { class: "flex-shrink-0" }, Mt = {
  key: 0,
  class: "dropdown eit-dropdown d-none d-lg-block"
}, zt = {
  href: "javascript:",
  class: "eit-btn-action",
  "data-bs-toggle": "dropdown"
}, Ot = { class: "dropdown-menu dropdown-custom-menu" }, At = {
  key: 0,
  class: "mx-2"
}, Et = {
  key: 1,
  class: "mx-2"
}, Vt = {
  key: 2,
  class: "m-2"
}, Ft = /* @__PURE__ */ n("div", { class: "eit-border--bottom eit-border--color" }, null, -1), Ht = [
  Ft
], It = {
  key: 3,
  class: "mx-2"
}, Kt = {
  key: 4,
  class: "mx-2"
}, Yt = { class: "row flex-grow-1" }, Ut = { class: "col-12 d-flex flex-column flex-grow-1" }, Gt = { class: "eit-slide__content flex-grow-1" }, Zt = {
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
    return (_, h) => {
      const y = T("font-awesome-icon");
      return e(), s("section", {
        class: $(["eit-slide d-flex flex-column", [t.slide && "eit-slide--right", t.slideSmall && "eit-slide--small"]])
      }, [
        a.loading ? (e(), D(U, {
          key: 0,
          type: "detail"
        })) : c("", !0),
        a.loading ? c("", !0) : (e(), s(m, { key: 1 }, [
          n("div", St, [
            n("div", Rt, [
              n("div", jt, [
                n("div", Dt, [
                  n("button", {
                    class: "eit-btn eit-btn--gray eit-btn--square",
                    onClick: r
                  }, [
                    f(y, {
                      icon: "fa-solid fa-angle-right",
                      class: "eit-font__size--x5 d-none d-lg-block"
                    }),
                    f(y, {
                      icon: "fa-solid fa-angle-down",
                      class: "eit-font__size--x5 d-lg-none"
                    })
                  ])
                ]),
                n("div", qt, [
                  n("div", Pt, [
                    n("div", Tt, [
                      n("h4", Bt, [
                        n("strong", null, [
                          q(_.$slots, "title")
                        ])
                      ]),
                      n("p", Nt, [
                        q(_.$slots, "subtitle")
                      ])
                    ]),
                    n("div", Lt, [
                      a.dropdown ? (e(), s("div", Mt, [
                        n("a", zt, [
                          f(y, { icon: "fa-solid fa-ellipsis" })
                        ]),
                        n("ul", Ot, [
                          a.editRecord ? (e(), s("li", At, [
                            n("a", {
                              onClick: u,
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              f(y, {
                                icon: "fa-solid fa-square-pen",
                                class: "eit-color--yellow"
                              }),
                              k(" " + g(t.editRecord), 1)
                            ])
                          ])) : c("", !0),
                          a.downloadRecord ? (e(), s("li", Et, [
                            n("a", {
                              onClick: p,
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              f(y, {
                                icon: "fa-solid fa-download",
                                class: "eit-color--blue"
                              }),
                              k(" " + g(a.downloadRecord), 1)
                            ])
                          ])) : c("", !0),
                          t.deleteRecord || t.enabledDisabledRecord ? (e(), s("li", Vt, Ht)) : c("", !0),
                          a.enabledDisabledRecord ? (e(), s("li", It, [
                            n("a", {
                              onClick: l,
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              a.record.status ? c("", !0) : (e(), s(m, { key: 0 }, [
                                f(y, {
                                  icon: "fa-regular fa-circle-check",
                                  class: "eit-color--green"
                                }),
                                k(" Habilitar ")
                              ], 64)),
                              a.record.status ? (e(), s(m, { key: 1 }, [
                                f(y, {
                                  icon: "fa-solid fa-ban",
                                  class: "eit-color--red"
                                }),
                                k(" Deshabilitar ")
                              ], 64)) : c("", !0)
                            ])
                          ])) : c("", !0),
                          a.deleteRecord ? (e(), s("li", Kt, [
                            n("a", {
                              onClick: d,
                              class: "dropdown-item dropdown-custom-menu-item eit-color--red",
                              href: "javascript:"
                            }, [
                              f(y, {
                                icon: "fa-solid fa-trash",
                                class: "eit-color--red"
                              }),
                              k(" " + g(a.deleteRecord), 1)
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
          n("div", Yt, [
            n("div", Ut, [
              n("div", Gt, [
                q(_.$slots, "component")
              ])
            ])
          ]),
          q(_.$slots, "footer")
        ], 64))
      ], 2);
    };
  }
}, Jt = { class: "d-flex justify-content-between align-items-center" }, Qt = ["onClick"], Wt = {
  key: 0,
  class: "eit-tabs__badge"
}, Xt = { class: "d-flex flex-column" }, eo = {
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
    const i = t, a = (l) => l < 99 ? l : "+99", o = P(0), r = (l) => {
      o.value = l;
    };
    return (l, u) => (e(), s(m, null, [
      n("div", Jt, [
        n("ul", {
          class: $(`eit-tabs ${i.className}`)
        }, [
          (e(!0), s(m, null, B(t.data, (d, p) => (e(), s("li", {
            key: p,
            class: "eit-tabs__item"
          }, [
            n("a", {
              href: "javascript:",
              onClick: (_) => r(p),
              class: $(["eit-tabs__item__link", o.value === p ? "active" : ""])
            }, [
              k(g(d.name) + " ", 1),
              d.number ? (e(), s("span", Wt, g(a(d.number)), 1)) : c("", !0)
            ], 10, Qt)
          ]))), 128))
        ], 2),
        q(l.$slots, "dropdown")
      ]),
      n("div", Xt, [
        q(l.$slots, `tab-${o.value}`)
      ])
    ], 64));
  }
}, to = ["innerHTML"], oo = {
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
    const i = t, a = P("");
    return (async () => {
      const r = `${i.code}`;
      a.value = await ue(r, {
        lang: i.lang,
        theme: i.theme
      });
    })(), (r, l) => (e(), s("div", { innerHTML: a.value }, null, 8, to));
  }
}, no = { class: "eit-dialog__content" }, so = { class: "d-flex justify-content-between align-items-center" }, ao = { class: "d-flex gap-2 justify-content-end mt-3" }, lo = {
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
    const o = t, r = a, l = P(null), u = () => {
      l.value.showModal(), l.value.classList.add("show");
    }, d = () => {
      l.value.close(), l.value.classList.remove("show"), r("emitCloseDialog");
    }, p = (h) => {
      h.key === "Escape" && d();
    }, _ = () => {
      r("emitSubmit");
    };
    return ce(() => {
      document.addEventListener("keyup", p);
    }), i({ showDialog: u, closeDialog: d }), (h, y) => {
      const w = T("font-awesome-icon");
      return e(), s("dialog", {
        ref_key: "dialog",
        ref: l,
        class: $(["eit-dialog", o.className]),
        onKeyup: Y(d, ["esc"])
      }, [
        n("div", no, [
          t.loading ? (e(), D(F(se), {
            key: 0,
            size: "70"
          })) : c("", !0),
          t.loading ? c("", !0) : (e(), s(m, { key: 1 }, [
            n("div", so, [
              q(h.$slots, "head"),
              n("button", {
                onClick: d,
                class: "eit-dialog__close"
              }, [
                f(w, { icon: ["fas", "xmark"] })
              ])
            ]),
            n("div", {
              class: $(`eit-dialog__body ${t.scrollable ? "eit-dialog__body--scroll" : ""}`)
            }, [
              q(h.$slots, "content")
            ], 2),
            n("div", ao, [
              f(F(K), {
                onClick: d,
                className: "eit-btn-outline--gray",
                text: "Volver"
              }),
              o.btnSubmit ? (e(), D(F(K), {
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
}, io = { class: "row" }, ro = { class: "col" }, co = /* @__PURE__ */ n("h2", { class: "eit-font__size--x4 eit-color--text eit-font__weight--300 eit-border--bottom eit-border--color mb-3" }, [
  /* @__PURE__ */ n("strong", { class: "eit-font__weight--900" }, "Props")
], -1), uo = { class: "eit-table--overflow" }, fo = { class: "table eit-table" }, po = /* @__PURE__ */ n("thead", null, [
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
    return (a, o) => (e(), s("div", io, [
      n("div", ro, [
        co,
        n("div", uo, [
          n("table", fo, [
            po,
            n("tbody", null, [
              (e(!0), s(m, null, B(i.data, (r) => (e(), s("tr", {
                key: r.name
              }, [
                n("td", null, [
                  f(M, {
                    text: r.name,
                    className: "eit-badge__outline--gray"
                  }, null, 8, ["text"])
                ]),
                n("td", null, [
                  n("code", null, g(r.type), 1)
                ]),
                n("td", null, [
                  n("code", null, g(r.default), 1)
                ])
              ]))), 128))
            ])
          ])
        ])
      ])
    ]));
  }
}, _o = { class: "eit-progress eit-progress--30" }, ho = { key: 1 }, yo = /* @__PURE__ */ n("span", { class: "spinner-border spinner-border-sm" }, null, -1), go = {
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
    return (r, l) => (e(), s("div", _o, [
      n("div", {
        class: $(["eit-progress__bar", `eit-progress__bar--${i.type}`]),
        style: I(`width: ${i.percentage}%`)
      }, [
        a.value !== 0 ? (e(), s(m, { key: 0 }, [
          i.percentage > 5 ? (e(), s(m, { key: 0 }, [
            k(g(i.percentage) + "% ", 1)
          ], 64)) : c("", !0)
        ], 64)) : c("", !0)
      ], 6),
      n("div", {
        class: "eit-progress__bar eit-progress__bar--transparent",
        style: I(`width: ${o.value === 0 ? 100 : o.value}%`)
      }, [
        i.loading ? c("", !0) : (e(), s(m, { key: 0 }, [
          o.value === 0 || o.value > 5 ? (e(), s(m, { key: 0 }, [
            k(g(o.value) + "% ", 1)
          ], 64)) : c("", !0)
        ], 64)),
        i.loading ? (e(), s("span", ho, [
          yo,
          k(" Cargando... ")
        ])) : c("", !0)
      ], 4)
    ]));
  }
}, vo = { class: "d-flex" }, bo = { class: "flex-shrink-0 eit-toast__left" }, ko = {
  key: "success",
  class: "eit-toast__icon eit-font__size--x7"
}, xo = {
  key: "error",
  class: "eit-toast__icon eit-font__size--x7"
}, $o = {
  key: "warning",
  class: "eit-toast__icon eit-font__size--x7"
}, wo = {
  key: "info",
  class: "eit-toast__icon eit-font__size--x7"
}, Co = { class: "flex-grow-1 ms-3" }, So = { class: "d-flex" }, Ro = { class: "flex-grow-1 me-3" }, jo = { class: "eit-toast__title" }, Do = { class: "eit-toast__text" }, qo = { class: "flex-shrink-0" }, Po = {
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
    const a = t, o = P(!1), r = P("hidden"), l = P(""), u = C(() => ({
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
    return i({ handleShowToast: d, handleCloseToast: p }), (_, h) => {
      const y = T("font-awesome-icon");
      return e(), s("div", {
        class: $(["eit-toast__container", u.value])
      }, [
        n("div", {
          class: $(["eit-toast box-shadow", `eit-toast--${a.data.type}`])
        }, [
          n("div", vo, [
            n("div", bo, [
              a.type === "success" ? (e(), s("span", ko, [
                f(y, { icon: "fa-solid fa-circle-check" })
              ])) : c("", !0),
              a.type === "error" ? (e(), s("span", xo, [
                f(y, { icon: "fa-solid fa-circle-xmark" })
              ])) : c("", !0),
              a.type === "warning" ? (e(), s("span", $o, [
                f(y, { icon: "fa-solid fa-triangle-exclamation" })
              ])) : c("", !0),
              a.type === "info" ? (e(), s("span", wo, [
                f(y, { icon: "fa-solid fa-circle-info" })
              ])) : c("", !0)
            ]),
            n("div", Co, [
              n("div", So, [
                n("div", Ro, [
                  n("p", jo, [
                    a.data.code ? (e(), s(m, { key: 0 }, [
                      k(g(a.data.code), 1)
                    ], 64)) : c("", !0),
                    k(" " + g(a.data.title), 1)
                  ]),
                  n("p", Do, g(a.data.message), 1)
                ]),
                n("div", qo, [
                  n("a", {
                    onClick: h[0] || (h[0] = (w) => p()),
                    href: "javascript:",
                    class: "eit-toast__close"
                  }, [
                    f(y, { icon: "fa-solid fa-xmark" })
                  ])
                ])
              ])
            ])
          ])
        ], 2)
      ], 2);
    };
  }
}, To = { class: "d-flex" }, Bo = { class: "flex-shrink-0 eit-popover__left" }, No = {
  key: "success",
  class: "eit-popover__icon eit-font__size--x7"
}, Lo = {
  key: "error",
  class: "eit-popover__icon eit-font__size--x7"
}, Mo = {
  key: "warning",
  class: "eit-popover__icon eit-font__size--x7"
}, zo = {
  key: "info",
  class: "eit-popover__icon eit-font__size--x7"
}, Oo = { class: "flex-grow-1 ms-3" }, Ao = { class: "d-flex" }, Eo = { class: "flex-grow-1 me-3" }, Vo = { class: "eit-popover__title" }, Fo = { class: "eit-popover__text" }, Ho = { class: "flex-shrink-0" }, Io = {
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
    const a = t, o = P(null), r = C(() => ({
      [a.position]: a.position
    })), l = () => {
      o.value.showPopover();
    }, u = () => {
      o.value.hidePopover();
    };
    return i({ handleShowPopover: l, handleClosePopover: u }), (d, p) => {
      const _ = T("font-awesome-icon");
      return e(), s("div", {
        ref_key: "popover",
        ref: o,
        class: $(["eit-popover__container", r.value]),
        popover: "manual"
      }, [
        n("div", {
          class: $(["eit-popover box-shadow", `eit-popover--${a.data.type}`])
        }, [
          n("div", To, [
            n("div", Bo, [
              a.type === "success" ? (e(), s("span", No, [
                f(_, { icon: "fa-solid fa-circle-check" })
              ])) : c("", !0),
              a.type === "error" ? (e(), s("span", Lo, [
                f(_, { icon: "fa-solid fa-circle-xmark" })
              ])) : c("", !0),
              a.type === "warning" ? (e(), s("span", Mo, [
                f(_, { icon: "fa-solid fa-triangle-exclamation" })
              ])) : c("", !0),
              a.type === "info" ? (e(), s("span", zo, [
                f(_, { icon: "fa-solid fa-circle-info" })
              ])) : c("", !0)
            ]),
            n("div", Oo, [
              n("div", Ao, [
                n("div", Eo, [
                  n("p", Vo, [
                    a.data.code ? (e(), s(m, { key: 0 }, [
                      k(g(a.data.code), 1)
                    ], 64)) : c("", !0),
                    k(" " + g(a.data.title), 1)
                  ]),
                  n("p", Fo, g(a.data.message), 1)
                ]),
                n("div", Ho, [
                  n("a", {
                    onClick: p[0] || (p[0] = (h) => u()),
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
}, Ko = ["type", "maxlength", "placeholder", "disabled"], Yo = {
  key: 0,
  class: "eit-label-float"
}, Uo = {
  key: 1,
  class: "eit-input__display__icon eit-input__display__float-left--icon"
}, Go = {
  key: 2,
  class: "eit-input__display__icon eit-input__display__float-right--icon"
}, Zo = {
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
    const o = t, r = a, l = P(""), u = C(
      () => o.validation ? o.validation(l.value) : !0
    ), d = C(() => !u.value && o.requiredField && o.error ? "is-invalid" : ""), p = C(() => o.floatLabel ? "" : o.placeHolder), _ = C(() => [
      o.floatLabel || o.floatLeft || o.floatRight ? "eit-input__display" : "",
      o.floatLeft ? "eit-input__display__float-left" : "",
      o.floatRight ? "eit-input__display__float-right" : ""
    ]), h = () => {
      r("emitPressEnter");
    }, y = () => {
      l.value = "";
    };
    return L(() => o.input, (w) => {
      w && (l.value = w);
    }), L(l, () => {
      r("emitValue", u.value ? l.value : "");
    }), V(() => {
      o.inputMask && (l.value = o.inputMask(l.value)), o.submitted && y();
    }), i({ clean: y }), (w, S) => (e(), s("div", {
      class: $(_.value)
    }, [
      A(n("input", {
        autocomplete: "off",
        class: $(["form-control eit-input", d.value]),
        type: o.inputType,
        "onUpdate:modelValue": S[0] || (S[0] = (j) => l.value = j),
        maxlength: o.maxLength,
        onKeypress: S[1] || (S[1] = (j) => o.keyPress && o.keyPress(j)),
        placeholder: p.value,
        onKeyup: Y(h, ["enter"]),
        disabled: o.isDisabled
      }, null, 42, Ko), [
        [
          de,
          l.value,
          void 0,
          { trim: !0 }
        ]
      ]),
      o.floatLabel ? (e(), s("label", Yo, g(o.floatLabel), 1)) : c("", !0),
      o.floatLeft ? (e(), s("span", Uo, [
        q(w.$slots, "float-left")
      ])) : c("", !0),
      o.floatRight ? (e(), s("span", Go, [
        q(w.$slots, "float-right")
      ])) : c("", !0)
    ], 2));
  }
}, Jo = {
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
    const o = t, r = a, l = P(null), u = C(
      () => o.validation ? o.validation(l.value) : !0
    ), d = C(() => !u.value && o.requiredField && o.error ? "is-invalid" : ""), p = () => Array.isArray(l.value) ? o.data.filter((S) => !l.value.some((j) => j.id === S.id)) : o.data, _ = () => l.value ? o.data.filter((S) => S.id !== l.value.id) : o.data, h = C(() => o.multiple ? p() : _()), y = (S) => o.selectable ? o.selectable(S) : (j) => j.includes(j);
    L(
      () => o.selected,
      (S) => {
        S && (l.value = S);
      },
      { immediate: !0 }
    ), L(l, () => {
      r("emitValue", u.value ? l.value : null);
    }), V(() => {
      o.submitted && w();
    });
    const w = () => {
      l.value = o.multiple ? [] : null;
    };
    return i({ clean: w }), (S, j) => {
      const v = T("v-select");
      return e(), D(v, {
        "append-to-body": "",
        options: h.value,
        modelValue: l.value,
        "onUpdate:modelValue": j[0] || (j[0] = (G) => l.value = G),
        label: t.labelCustom,
        multiple: t.multiple,
        placeholder: t.placeHolder,
        class: $(["eit-select-component", d.value]),
        clearable: t.clearable,
        disabled: o.isDisabled,
        selectable: y
      }, {
        "no-options": H(() => [
          k(" No hay más resultados. ")
        ]),
        _: 1
      }, 8, ["options", "modelValue", "label", "multiple", "placeholder", "class", "clearable", "disabled"]);
    };
  }
}, Qo = ["maxlength", "placeholder"], Wo = {
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
    const o = t, r = a, l = P(null), u = P(""), d = C(() => o.validation && o.validation(u.value)), p = C(() => !d.value && o.requiredField && o.error ? "is-invalid" : ""), _ = () => {
      u.value = "";
    };
    return L(
      () => o.input,
      (h) => {
        h && (u.value = h);
      }
    ), L(u, () => {
      l.value.style.height = "50px", l.value.style.height = `${l.value.scrollHeight}px`, r("emitValue", d.value ? u.value : "");
    }), V(() => {
      o.submitted && _();
    }), i({ clean: _ }), (h, y) => A((e(), s("textarea", {
      ref_key: "textarea",
      ref: l,
      "onUpdate:modelValue": y[0] || (y[0] = (w) => u.value = w),
      maxlength: t.maxLength,
      autocomplete: "off",
      class: $(["form-control eit-textarea eit-textarea-resize", p.value]),
      placeholder: t.placeHolder
    }, null, 10, Qo)), [
      [
        te,
        u.value,
        void 0,
        { trim: !0 }
      ]
    ]);
  }
}, Xo = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20style='margin:%20auto;%20display:%20block;%20shape-rendering:%20auto;'%20width='200px'%20height='200px'%20viewBox='0%200%20100%20100'%20preserveAspectRatio='xMidYMid'%3e%3crect%20x='17.5'%20y='30'%20width='15'%20height='40'%20fill='%23009da6'%3e%3canimate%20attributeName='y'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='18;30;30'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.2s'%3e%3c/animate%3e%3canimate%20attributeName='height'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='64;40;40'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.2s'%3e%3c/animate%3e%3c/rect%3e%3crect%20x='42.5'%20y='30'%20width='15'%20height='40'%20fill='%2379cace'%3e%3canimate%20attributeName='y'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='20.999999999999996;30;30'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.1s'%3e%3c/animate%3e%3canimate%20attributeName='height'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='58.00000000000001;40;40'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.1s'%3e%3c/animate%3e%3c/rect%3e%3crect%20x='67.5'%20y='30'%20width='15'%20height='40'%20fill='%23a9e4e7'%3e%3canimate%20attributeName='y'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='20.999999999999996;30;30'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%3e%3c/animate%3e%3canimate%20attributeName='height'%20repeatCount='indefinite'%20dur='1s'%20calcMode='spline'%20keyTimes='0;0.5;1'%20values='58.00000000000001;40;40'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201'%3e%3c/animate%3e%3c/rect%3e%3c/svg%3e", en = { class: "p-3 eit-loading" }, se = {
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
    return (a, o) => (e(), s("div", en, [
      n("img", {
        style: I(`width:${i.size}px`),
        src: Xo
      }, null, 4)
    ]));
  }
}, ee = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlertComponent: ne,
  BadgeComponent: M,
  BreadcrumbComponent: ve,
  ButtonComponent: K,
  DetailComponent: Zt,
  DialogComponent: lo,
  HighlightComponent: oo,
  InputComponent: Zo,
  LoadingComponent: se,
  PaginationComponent: Ct,
  PopoverComponent: Io,
  ProgressBarComponent: go,
  PropsComponent: mo,
  SelectComponent: Jo,
  SkeletonComponent: U,
  TabComponent: eo,
  TableComponent: bt,
  TextareaResizeComponent: Wo,
  ToastComponent: Po
}, Symbol.toStringTag, { value: "Module" }));
function tn(t, i) {
  const a = oe(), o = C(() => a.meta.requiresAuth ? t.config.darkTheme ? i.logotipo.logo_dark : i.logotipo.logo_light : i.platformDarkTheme ? i.logotipo.logo_dark : i.logotipo.logo_light), r = C(() => t.config.darkTheme ? i.logotipo.isotipo_dark : i.logotipo.isotipo_light);
  return { logotipo: o, isotipo: r };
}
const _n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useLogos: tn
}, Symbol.toStringTag, { value: "Module" }));
function on() {
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
    const u = l.length >= 8, d = /[A-Z]/.test(l), p = /[a-z]/.test(l), _ = /[0-9]/.test(l), h = /[!@#$%^&*(),.?":{}|<>]/.test(l);
    return u && d && p && _ && h;
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
function nn() {
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
function sn() {
  function t(i) {
    let a = String.fromCharCode(i.keyCode);
    if (/^[0-9Kk.-]/.test(a)) return !0;
    i.preventDefault();
  }
  return { keyPressRut: t };
}
function an() {
  function t(i) {
    const { sort: a, data: o } = i, { keys: r, index: l, asc: u } = a, d = r[l];
    return o.sort((p, _) => {
      let h = p[d], y = _[d];
      return typeof h == "object" && h !== null && (h = h.name, y = y.name), h === y ? 0 : (h > y ? 1 : -1) * (u ? 1 : -1);
    }), o;
  }
  return { sortTable: t };
}
O.extend(fe);
O.locale("es");
function ln() {
  function t(d) {
    return O(d).format("DD/MM/YYYY");
  }
  function i(d) {
    return O(d).format("YYYY-MM-DD");
  }
  function a(d) {
    return O(d).fromNow();
  }
  function o(d) {
    let p = d.replace(/[^0-9kK]/g, ""), _ = p.slice(0, -1).replace(/\B(?=(\d{3})+(?!\d))/g, "."), h = p.slice(-1).toUpperCase();
    return `${_}-${h}`;
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
function rn() {
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
const hn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useFormat: ln,
  useInputMask: nn,
  useKeypress: sn,
  useTable: an,
  useTooltip: rn,
  useValidator: on
}, Symbol.toStringTag, { value: "Module" })), yn = {
  install(t) {
    Object.keys(ee).forEach((i) => {
      t.component(i, ee[i]);
    });
  }
};
export {
  _n as composables,
  yn as default,
  hn as utils
};
