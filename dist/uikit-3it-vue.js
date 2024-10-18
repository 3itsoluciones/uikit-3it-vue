import { computed as S, resolveComponent as D, openBlock as e, createElementBlock as a, normalizeClass as $, Fragment as p, createTextVNode as b, toDisplayString as v, createCommentVNode as c, createBlock as j, createElementVNode as s, createVNode as f, withCtx as H, renderList as T, renderSlot as q, mergeProps as ne, createStaticVNode as ae, resolveDirective as le, withDirectives as z, ref as P, watch as B, watchEffect as E, withKeys as U, vModelText as X, onMounted as ie, unref as F, normalizeStyle as I, vModelDynamic as re } from "vue";
import { useRoute as ee } from "vue-router";
import { codeToHtml as ce } from "shiki";
import O from "dayjs";
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
    const l = t, o = i, r = S(() => ["eit-btn", `${l.className}`]), n = (d) => {
      o("emitEvent", d);
    };
    return (d, u) => {
      const h = D("font-awesome-icon");
      return e(), a("button", {
        onClick: u[0] || (u[0] = (_) => n(_)),
        class: $([r.value, "d-flex align-items-center justify-content-center gap-1"]),
        disabled: l.isDisabled
      }, [
        l.loading ? (e(), a(p, { key: 0 }, [
          fe,
          b(" " + v(l.loadingText), 1)
        ], 64)) : c("", !0),
        l.loading ? c("", !0) : (e(), a(p, { key: 1 }, [
          l.icon ? (e(), j(h, {
            key: 0,
            icon: l.icon,
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
    const i = ee(), l = S(() => {
      let o = [], r = "";
      return i.matched.forEach((n, d) => {
        r += "/" + n.path.split("/")[d + 1], o.push({
          name: n.name,
          title: n.meta.title || "Sin título",
          path: r,
          last: d === i.matched.length - 1
        });
      }), o;
    });
    return (o, r) => {
      const n = D("font-awesome-icon"), d = D("router-link");
      return e(), a("nav", pe, [
        s("ul", me, [
          s("li", null, [
            f(d, {
              to: "/",
              class: "eit-color--text-soft eit-color--text-soft--link"
            }, {
              default: H(() => [
                f(n, { icon: "fa-solid fa-house" })
              ]),
              _: 1
            }),
            _e
          ]),
          (e(!0), a(p, null, T(l.value, (u, h) => (e(), a("li", {
            key: h,
            class: "eit-breadcrumb__item"
          }, [
            q(o.$slots, u.name, ne({ ref_for: !0 }, u), () => [
              u.last ? (e(), a("span", he, v(u.name), 1)) : (e(), j(d, {
                key: 0,
                to: u.path,
                class: "eit-color--text eit-color--text--link eit-color--underline"
              }, {
                default: H(() => [
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
  setup(t) {
    const i = t;
    return (l, o) => {
      const r = D("font-awesome-icon");
      return e(), a("span", {
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
], qe = { key: 1 }, Pe = /* @__PURE__ */ s("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), De = [
  Pe
], Te = /* @__PURE__ */ ae('<div class="row"><div class="col-12"><div class="d-flex"><div class="flex-shrink-0"><div class="eit-skeleton eit-skeleton__btn-square"></div></div><div class="flex-grow-1 ms-3"><div class="d-flex"><div class="flex-grow-1 ms-3"><div class="eit-skeleton eit-skeleton__title my-2" style="width:40%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div></div><div class="flex-shrink-0"><div class="eit-skeleton eit-skeleton__text my-2" style="width:30px;"></div></div></div></div></div></div></div><div class="row flex-grow-1"><div class="col-12 d-flex flex-column flex-grow-1"><div class="eit-slide__content flex-grow-1"><div class="mt-5"><div class="col-12"><h5 class="mb-3"><div class="eit-skeleton eit-skeleton__title my-2" style="width:20%;"></div></h5><ul class="list-unstyled"><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:40%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:20%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:20%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li></ul></div></div></div></div></div>', 2), Y = {
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
    return (l, o) => (e(), a(p, null, [
      i.type === "table" ? (e(), a("table", ve, [
        s("thead", null, [
          s("tr", null, [
            (e(!0), a(p, null, T(i.table.column, (r) => (e(), a(p, { key: r }, [
              r === 1 ? (e(), a("th", be, xe)) : c("", !0),
              r > 1 ? (e(), a("th", $e, Ce)) : c("", !0)
            ], 64))), 128))
          ])
        ]),
        s("tbody", null, [
          (e(!0), a(p, null, T(i.table.row, (r) => (e(), a("tr", { key: r }, [
            (e(!0), a(p, null, T(i.table.column, (n) => (e(), a(p, { key: n }, [
              n === 1 ? (e(), a("td", Se, je)) : c("", !0),
              n > 1 ? (e(), a("td", qe, De)) : c("", !0)
            ], 64))), 128))
          ]))), 128))
        ])
      ])) : c("", !0),
      i.type === "detail" ? (e(), a(p, { key: 1 }, [
        Te
      ], 64)) : c("", !0)
    ], 64));
  }
}, Ne = { class: "d-flex align-items-center" }, Be = { class: "flex-shrink-0 d-flex align-items-center eit-alert__icon me-2" }, Le = ["innerHTML"], te = {
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
    return (l, o) => {
      const r = D("font-awesome-icon");
      return e(), a("div", {
        class: $(`eit-alert eit-alert--${i.type} ${i.animation.active ? "eit-alert--animation" : "eit-alert--default"} ${i.animation.show ? "eit-alert--animation--show" : ""}`)
      }, [
        s("div", Ne, [
          s("div", Be, [
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
    const l = t, o = i, r = (m) => {
      o("viewRecord", m);
    }, n = (m) => {
      o("editRecord", m);
    }, d = (m) => {
      o("deleteRecord", m);
    }, u = (m) => {
      o("downloadRecord", m);
    }, h = (m) => {
      o("updateSort", { index: m, asc: !l.sort.asc });
    }, _ = (m) => {
      o("enabledDisabledRecord", m);
    }, g = (m) => typeof m == "string", y = (m) => typeof m == "object" && !Array.isArray(m), C = (m) => Array.isArray(m);
    return (m, R) => {
      var G, Z, J, Q;
      const w = D("font-awesome-icon"), A = le("tippy");
      return e(), a("div", Me, [
        s("div", ze, [
          t.loading ? (e(), j(Y, {
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
          !t.loading && ((Q = t.data) != null && Q.length) ? (e(), a(p, { key: 2 }, [
            s("table", Ae, [
              s("thead", null, [
                s("tr", null, [
                  (e(!0), a(p, null, T(t.columns, (k, N) => (e(), a("th", {
                    key: `column-${N}`,
                    scope: "col"
                  }, [
                    s("a", {
                      onClick: (x) => h(N),
                      href: "javascript:",
                      class: "d-flex justify-content-between"
                    }, [
                      b(v(k) + " ", 1),
                      t.sort.index === N ? (e(), a("span", {
                        key: `icono-${k}`,
                        class: "d-flex ms-2 eit-color--text"
                      }, [
                        t.sort.asc ? c("", !0) : (e(), a("span", {
                          key: `down-${k}`
                        }, [
                          f(w, { icon: "fa-solid fa-sort-down align-baseline" })
                        ])),
                        t.sort.asc ? (e(), a("span", {
                          key: `up-${k}`
                        }, [
                          f(w, { icon: "fa-solid fa-sort-up align-baseline" })
                        ])) : c("", !0)
                      ])) : (e(), a("span", {
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
                (e(!0), a(p, null, T(t.data, (k, N) => (e(), a("tr", {
                  key: `row-${N}`,
                  class: $(k != null && k.status ? "" : "disabled")
                }, [
                  (e(!0), a(p, null, T(k, (x, M) => (e(), a("td", {
                    key: `value-${M}`
                  }, [
                    s("strong", Ve, v(t.columns[Object.keys(k).indexOf(M)]) + ":", 1),
                    Object.keys(k)[t.columnLink] === M ? (e(), a(p, { key: 0 }, [
                      t.viewRecord ? (e(), a("a", {
                        key: 0,
                        onClick: (V) => r(k),
                        href: "javascript:",
                        class: "eit-table__link"
                      }, v(x), 9, Fe)) : c("", !0),
                      t.viewRecord ? c("", !0) : (e(), a(p, { key: 1 }, [
                        b(v(x), 1)
                      ], 64))
                    ], 64)) : c("", !0),
                    Object.keys(k)[t.columnLink] !== M ? (e(), a(p, { key: 1 }, [
                      C(x) ? (e(), a("div", He, [
                        (e(!0), a(p, null, T(x, (V, se) => (e(), a("span", {
                          key: `value-array-${se}`,
                          class: "d-flex flex-wrap gap-1"
                        }, [
                          f(L, {
                            text: V.name,
                            className: V.className
                          }, null, 8, ["text", "className"])
                        ]))), 128))
                      ])) : c("", !0),
                      M === "status" ? (e(), a(p, { key: 1 }, [
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
                      y(x) ? (e(), j(L, {
                        key: 2,
                        text: x.name,
                        className: x.className
                      }, null, 8, ["text", "className"])) : c("", !0),
                      g(x) ? (e(), a("span", Ie, v(x), 1)) : c("", !0)
                    ], 64)) : c("", !0)
                  ]))), 128)),
                  s("td", Ke, [
                    s("div", Ue, [
                      s("a", Ye, [
                        f(w, { icon: "fa-solid fa-ellipsis" })
                      ]),
                      s("ul", Ge, [
                        t.viewRecord ? (e(), a("li", Ze, [
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
                        t.editRecord ? (e(), a("li", Qe, [
                          s("a", {
                            onClick: (x) => n(k),
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
                        t.downloadRecord ? (e(), a("li", Xe, [
                          s("a", {
                            onClick: (x) => u(k),
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
                        t.deleteRecord || t.enabledDisabledRecord ? (e(), a("li", tt, st)) : c("", !0),
                        t.enabledDisabledRecord ? (e(), a("li", nt, [
                          s("a", {
                            onClick: (x) => _(k),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            k.status ? c("", !0) : (e(), a(p, { key: 0 }, [
                              f(w, {
                                icon: "fa-regular fa-circle-check",
                                class: "eit-color--green"
                              }),
                              b(" Habilitar ")
                            ], 64)),
                            k.status ? (e(), a(p, { key: 1 }, [
                              f(w, {
                                icon: "fa-solid fa-ban",
                                class: "eit-color--red"
                              }),
                              b(" Deshabilitar ")
                            ], 64)) : c("", !0)
                          ], 8, at)
                        ])) : c("", !0),
                        t.deleteRecord ? (e(), a("li", lt, [
                          s("a", {
                            onClick: (x) => d(N),
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
                        t.viewRecord ? (e(), a("a", {
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
                        t.editRecord ? (e(), a("a", {
                          key: 1,
                          onClick: (x) => n(k),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          f(w, {
                            icon: "fa-solid fa-square-pen",
                            class: "eit-color--yellow"
                          })
                        ], 8, ft)) : c("", !0),
                        t.downloadRecord ? (e(), a("a", {
                          key: 2,
                          onClick: (x) => u(k),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          f(w, {
                            icon: "fa-solid fa-download",
                            class: "eit-color--blue"
                          })
                        ], 8, pt)) : c("", !0),
                        t.enabledDisabledRecord ? (e(), a(p, { key: 3 }, [
                          k.status ? c("", !0) : z((e(), a("a", {
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
                            [A, { content: "Habilitar", theme: "main" }]
                          ]),
                          k.status ? z((e(), a("a", {
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
                            [A, { content: "Deshabilitar", theme: "main" }]
                          ]) : c("", !0)
                        ], 64)) : c("", !0),
                        t.deleteRecord ? (e(), a("a", {
                          key: 4,
                          onClick: (x) => d(N),
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
            q(m.$slots, "paginator")
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
    const l = t, o = i, r = P(l.data.currentPage), n = () => r.value++, d = () => r.value--, u = () => {
      r.value <= 0 && (r.value = 1), r.value > l.data.finalPage && (r.value = l.data.finalPage);
    }, h = (_) => {
      _.target.select();
    };
    return B(r, () => {
      r.value > 0 && r.value <= l.data.finalPage && o("updatePaginator", r.value);
    }), E(() => {
      l.data && (r.value = l.data.currentPage);
    }), (_, g) => {
      const y = D("font-awesome-icon");
      return e(), a("div", gt, [
        s("button", {
          onClick: d,
          disabled: t.data.currentPage === 1,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          f(y, { icon: "fa-solid fa-chevron-left" })
        ], 8, vt),
        z(s("input", {
          type: "number",
          "onUpdate:modelValue": g[0] || (g[0] = (C) => r.value = C),
          onInput: u,
          onKeyup: U(u, ["enter"]),
          onBlur: u,
          onFocus: h,
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
          t.data.finalPage === 1 ? (e(), a(p, { key: 0 }, [
            b(" página ")
          ], 64)) : c("", !0),
          t.data.finalPage > 1 ? (e(), a(p, { key: 1 }, [
            b(" páginas ")
          ], 64)) : c("", !0)
        ]),
        s("button", {
          onClick: n,
          disabled: t.data.currentPage === t.data.finalPage,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          f(y, { icon: "fa-solid fa-chevron-right" })
        ], 8, kt)
      ]);
    };
  }
}, $t = { class: "row" }, wt = { class: "col-12" }, Ct = { class: "d-flex" }, St = { class: "flex-shrink-0" }, Rt = { class: "flex-grow-1" }, jt = { class: "d-flex" }, qt = { class: "flex-grow-1 d-flex flex-column ms-3" }, Pt = { class: "eit-font--primary mb-0" }, Dt = { class: "eit-color--text mb-0" }, Tt = { class: "flex-shrink-0" }, Nt = {
  key: 0,
  class: "dropdown eit-dropdown d-none d-lg-block"
}, Bt = {
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
    const l = t, o = i, r = () => {
      o("emitslide");
    }, n = () => {
      o("enabledDisabledRecord", l.record);
    }, d = () => {
      o("editRecord", l.record);
    }, u = () => {
      o("deleteRecord", l.record);
    }, h = () => {
      o("downloadRecord", l.record);
    };
    return (_, g) => {
      const y = D("font-awesome-icon");
      return e(), a("section", {
        class: $(["eit-slide d-flex flex-column", [t.slide && "eit-slide--right", t.slideSmall && "eit-slide--small"]])
      }, [
        l.loading ? (e(), j(Y, {
          key: 0,
          type: "detail"
        })) : c("", !0),
        l.loading ? c("", !0) : (e(), a(p, { key: 1 }, [
          s("div", $t, [
            s("div", wt, [
              s("div", Ct, [
                s("div", St, [
                  s("button", {
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
                s("div", Rt, [
                  s("div", jt, [
                    s("div", qt, [
                      s("h4", Pt, [
                        s("strong", null, [
                          q(_.$slots, "title")
                        ])
                      ]),
                      s("p", Dt, [
                        q(_.$slots, "subtitle")
                      ])
                    ]),
                    s("div", Tt, [
                      l.dropdown ? (e(), a("div", Nt, [
                        s("a", Bt, [
                          f(y, { icon: "fa-solid fa-ellipsis" })
                        ]),
                        s("ul", Lt, [
                          l.editRecord ? (e(), a("li", Mt, [
                            s("a", {
                              onClick: d,
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              f(y, {
                                icon: "fa-solid fa-square-pen",
                                class: "eit-color--yellow"
                              }),
                              b(" " + v(t.editRecord), 1)
                            ])
                          ])) : c("", !0),
                          l.downloadRecord ? (e(), a("li", zt, [
                            s("a", {
                              onClick: h,
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              f(y, {
                                icon: "fa-solid fa-download",
                                class: "eit-color--blue"
                              }),
                              b(" " + v(l.downloadRecord), 1)
                            ])
                          ])) : c("", !0),
                          t.deleteRecord || t.enabledDisabledRecord ? (e(), a("li", At, Et)) : c("", !0),
                          l.enabledDisabledRecord ? (e(), a("li", Vt, [
                            s("a", {
                              onClick: n,
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              l.record.status ? c("", !0) : (e(), a(p, { key: 0 }, [
                                f(y, {
                                  icon: "fa-regular fa-circle-check",
                                  class: "eit-color--green"
                                }),
                                b(" Habilitar ")
                              ], 64)),
                              l.record.status ? (e(), a(p, { key: 1 }, [
                                f(y, {
                                  icon: "fa-solid fa-ban",
                                  class: "eit-color--red"
                                }),
                                b(" Deshabilitar ")
                              ], 64)) : c("", !0)
                            ])
                          ])) : c("", !0),
                          l.deleteRecord ? (e(), a("li", Ft, [
                            s("a", {
                              onClick: u,
                              class: "dropdown-item dropdown-custom-menu-item eit-color--red",
                              href: "javascript:"
                            }, [
                              f(y, {
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
          s("div", Ht, [
            s("div", It, [
              s("div", Kt, [
                q(_.$slots, "component")
              ])
            ])
          ]),
          q(_.$slots, "footer")
        ], 64))
      ], 2);
    };
  }
}, Yt = { class: "d-flex justify-content-between align-items-center" }, Gt = ["onClick"], Zt = {
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
    const i = t, l = (n) => n < 99 ? n : "+99", o = P(0), r = (n) => {
      o.value = n;
    };
    return (n, d) => (e(), a(p, null, [
      s("div", Yt, [
        s("ul", {
          class: $(`eit-tabs ${i.className}`)
        }, [
          (e(!0), a(p, null, T(t.data, (u, h) => (e(), a("li", {
            key: h,
            class: "eit-tabs__item"
          }, [
            s("a", {
              href: "javascript:",
              onClick: (_) => r(h),
              class: $(["eit-tabs__item__link", o.value === h ? "active" : ""])
            }, [
              b(v(u.name) + " ", 1),
              u.number ? (e(), a("span", Zt, v(l(u.number)), 1)) : c("", !0)
            ], 10, Gt)
          ]))), 128))
        ], 2),
        q(n.$slots, "dropdown")
      ]),
      s("div", Jt, [
        q(n.$slots, `tab-${o.value}`)
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
    const i = t, l = P("");
    return (async () => {
      const r = `${i.code}`;
      l.value = await ce(r, {
        lang: i.lang,
        theme: i.theme
      });
    })(), (r, n) => (e(), a("div", { innerHTML: l.value }, null, 8, Wt));
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
  setup(t, { expose: i, emit: l }) {
    const o = t, r = l, n = P(null), d = () => {
      n.value.showModal(), n.value.classList.add("show");
    }, u = () => {
      n.value.close(), n.value.classList.remove("show"), r("emitCloseDialog");
    }, h = (g) => {
      g.key === "Escape" && u();
    }, _ = () => {
      r("emitSubmit");
    };
    return ie(() => {
      document.addEventListener("keyup", h);
    }), i({ showDialog: d, closeDialog: u }), (g, y) => {
      const C = D("font-awesome-icon");
      return e(), a("dialog", {
        ref_key: "dialog",
        ref: n,
        class: $(["eit-dialog", o.className]),
        onKeyup: U(u, ["esc"])
      }, [
        s("div", eo, [
          t.loading ? (e(), j(F(oe), {
            key: 0,
            size: "70"
          })) : c("", !0),
          t.loading ? c("", !0) : (e(), a(p, { key: 1 }, [
            s("div", to, [
              q(g.$slots, "head"),
              s("button", {
                onClick: u,
                class: "eit-dialog__close"
              }, [
                f(C, { icon: ["fas", "xmark"] })
              ])
            ]),
            s("div", {
              class: $(`eit-dialog__body ${t.scrollable ? "eit-dialog__body--scroll" : ""}`)
            }, [
              q(g.$slots, "content")
            ], 2),
            s("div", oo, [
              f(F(K), {
                onClick: u,
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
    return (l, o) => (e(), a("div", no, [
      s("div", ao, [
        lo,
        s("div", io, [
          s("table", ro, [
            co,
            s("tbody", null, [
              (e(!0), a(p, null, T(i.data, (r) => (e(), a("tr", {
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
    const i = t, l = S(() => parseFloat(i.percentage)), o = S(() => l.value === 0 ? 0 : 100 - l.value);
    return (r, n) => (e(), a("div", fo, [
      s("div", {
        class: $(["eit-progress__bar", `eit-progress__bar--${i.type}`]),
        style: I(`width: ${i.percentage}%`)
      }, [
        l.value !== 0 ? (e(), a(p, { key: 0 }, [
          i.percentage > 5 ? (e(), a(p, { key: 0 }, [
            b(v(i.percentage) + "% ", 1)
          ], 64)) : c("", !0)
        ], 64)) : c("", !0)
      ], 6),
      s("div", {
        class: "eit-progress__bar eit-progress__bar--transparent",
        style: I(`width: ${o.value === 0 ? 100 : o.value}%`)
      }, [
        i.loading ? c("", !0) : (e(), a(p, { key: 0 }, [
          o.value === 0 || o.value > 5 ? (e(), a(p, { key: 0 }, [
            b(v(o.value) + "% ", 1)
          ], 64)) : c("", !0)
        ], 64)),
        i.loading ? (e(), a("span", po, [
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
    const l = t, o = P(!1), r = P("hidden"), n = P(""), d = S(() => ({
      show: o.value,
      hide: !o.value,
      [l.position]: l.position,
      hidden: r.value
    })), u = () => {
      clearTimeout(n.value), o.value = !0, r.value = "", n.value = setTimeout(() => {
        o.value = !1, setTimeout(() => r.value = "hidden", "300");
      }, l.visible);
    }, h = () => {
      o.value = !1, setTimeout(() => r.value = "hidden", "300"), clearTimeout(n.value);
    };
    return i({ handleShowToast: u, handleCloseToast: h }), (_, g) => {
      const y = D("font-awesome-icon");
      return e(), a("div", {
        class: $(["eit-toast__container", d.value])
      }, [
        s("div", {
          class: $(["eit-toast box-shadow", `eit-toast--${l.data.type}`])
        }, [
          s("div", ho, [
            s("div", yo, [
              l.type === "success" ? (e(), a("span", go, [
                f(y, { icon: "fa-solid fa-circle-check" })
              ])) : c("", !0),
              l.type === "error" ? (e(), a("span", vo, [
                f(y, { icon: "fa-solid fa-circle-xmark" })
              ])) : c("", !0),
              l.type === "warning" ? (e(), a("span", bo, [
                f(y, { icon: "fa-solid fa-triangle-exclamation" })
              ])) : c("", !0),
              l.type === "info" ? (e(), a("span", ko, [
                f(y, { icon: "fa-solid fa-circle-info" })
              ])) : c("", !0)
            ]),
            s("div", xo, [
              s("div", $o, [
                s("div", wo, [
                  s("p", Co, [
                    l.data.code ? (e(), a(p, { key: 0 }, [
                      b(v(l.data.code), 1)
                    ], 64)) : c("", !0),
                    b(" " + v(l.data.title), 1)
                  ]),
                  s("p", So, v(l.data.message), 1)
                ]),
                s("div", Ro, [
                  s("a", {
                    onClick: g[0] || (g[0] = (C) => h()),
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
}, qo = { class: "d-flex" }, Po = { class: "flex-shrink-0 eit-popover__left" }, Do = {
  key: "success",
  class: "eit-popover__icon eit-font__size--x7"
}, To = {
  key: "error",
  class: "eit-popover__icon eit-font__size--x7"
}, No = {
  key: "warning",
  class: "eit-popover__icon eit-font__size--x7"
}, Bo = {
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
    const l = t, o = P(null), r = S(() => ({
      [l.position]: l.position
    })), n = () => {
      o.value.showPopover();
    }, d = () => {
      o.value.hidePopover();
    };
    return i({ handleShowPopover: n, handleClosePopover: d }), (u, h) => {
      const _ = D("font-awesome-icon");
      return e(), a("div", {
        ref_key: "popover",
        ref: o,
        class: $(["eit-popover__container", r.value]),
        popover: "manual"
      }, [
        s("div", {
          class: $(["eit-popover box-shadow", `eit-popover--${l.data.type}`])
        }, [
          s("div", qo, [
            s("div", Po, [
              l.type === "success" ? (e(), a("span", Do, [
                f(_, { icon: "fa-solid fa-circle-check" })
              ])) : c("", !0),
              l.type === "error" ? (e(), a("span", To, [
                f(_, { icon: "fa-solid fa-circle-xmark" })
              ])) : c("", !0),
              l.type === "warning" ? (e(), a("span", No, [
                f(_, { icon: "fa-solid fa-triangle-exclamation" })
              ])) : c("", !0),
              l.type === "info" ? (e(), a("span", Bo, [
                f(_, { icon: "fa-solid fa-circle-info" })
              ])) : c("", !0)
            ]),
            s("div", Lo, [
              s("div", Mo, [
                s("div", zo, [
                  s("p", Ao, [
                    l.data.code ? (e(), a(p, { key: 0 }, [
                      b(v(l.data.code), 1)
                    ], 64)) : c("", !0),
                    b(" " + v(l.data.title), 1)
                  ]),
                  s("p", Oo, v(l.data.message), 1)
                ]),
                s("div", Eo, [
                  s("a", {
                    onClick: h[0] || (h[0] = (g) => d()),
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
  setup(t, { expose: i, emit: l }) {
    const o = t, r = l, n = P(""), d = S(
      () => o.validation ? o.validation(n.value) : !0
    ), u = S(() => !d.value && o.requiredField && o.error ? "is-invalid" : ""), h = S(() => o.floatLabel ? "" : o.placeHolder), _ = S(() => [
      o.floatLabel || o.floatLeft || o.floatRight ? "eit-input__display" : "",
      o.floatLeft ? "eit-input__display__float-left" : "",
      o.floatRight ? "eit-input__display__float-right" : ""
    ]), g = () => {
      r("emitPressEnter");
    }, y = () => {
      n.value = "";
    };
    return B(() => o.input, (C) => {
      C && (n.value = C);
    }), B(n, () => {
      r("emitValue", d.value ? n.value : "");
    }), E(() => {
      o.inputMask && (n.value = o.inputMask(n.value)), o.submitted && y();
    }), i({ clean: y }), (C, m) => (e(), a("div", {
      class: $(_.value)
    }, [
      z(s("input", {
        autocomplete: "off",
        class: $(["form-control eit-input", u.value]),
        type: o.inputType,
        "onUpdate:modelValue": m[0] || (m[0] = (R) => n.value = R),
        maxlength: o.maxLength,
        onKeypress: m[1] || (m[1] = (R) => o.keyPress && o.keyPress(R)),
        placeholder: h.value,
        onKeyup: U(g, ["enter"]),
        disabled: o.isDisabled
      }, null, 42, Fo), [
        [
          re,
          n.value,
          void 0,
          { trim: !0 }
        ]
      ]),
      o.floatLabel ? (e(), a("label", Ho, v(o.floatLabel), 1)) : c("", !0),
      o.floatLeft ? (e(), a("span", Io, [
        q(C.$slots, "float-left")
      ])) : c("", !0),
      o.floatRight ? (e(), a("span", Ko, [
        q(C.$slots, "float-right")
      ])) : c("", !0)
    ], 2));
  }
}, Yo = {
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
  setup(t, { expose: i, emit: l }) {
    const o = t, r = l, n = P(null), d = S(
      () => o.validation ? o.validation(n.value) : !0
    ), u = S(() => !d.value && o.requiredField && o.error ? "is-invalid" : ""), h = () => Array.isArray(n.value) ? o.data.filter((m) => !n.value.some((R) => R.id === m.id)) : o.data, _ = () => n.value ? o.data.filter((m) => m.id !== n.value.id) : o.data, g = S(() => o.multiple ? h() : _()), y = (m) => o.selectable ? o.selectable(m) : (R) => R.includes(R);
    B(
      () => o.selected,
      (m) => {
        m && (n.value = m);
      },
      { immediate: !0 }
    ), B(n, () => {
      r("emitValue", d.value ? n.value : null);
    }), E(() => {
      o.submitted && C();
    });
    const C = () => {
      n.value = o.multiple ? [] : null;
    };
    return i({ clean: C }), (m, R) => {
      const w = D("v-select");
      return e(), j(w, {
        options: g.value,
        modelValue: n.value,
        "onUpdate:modelValue": R[0] || (R[0] = (A) => n.value = A),
        label: t.labelCustom,
        multiple: t.multiple,
        placeholder: t.placeHolder,
        class: $(["eit-select-component", u.value]),
        clearable: t.clearable,
        disabled: o.isDisabled,
        selectable: y
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
  setup(t, { expose: i, emit: l }) {
    const o = t, r = l, n = P(null), d = P(""), u = S(() => o.validation && o.validation(d.value)), h = S(() => !u.value && o.requiredField && o.error ? "is-invalid" : ""), _ = () => {
      d.value = "";
    };
    return B(
      () => o.input,
      (g) => {
        g && (d.value = g);
      }
    ), B(d, () => {
      n.value.style.height = "50px", n.value.style.height = `${n.value.scrollHeight}px`, r("emitValue", u.value ? d.value : "");
    }), E(() => {
      o.submitted && _();
    }), i({ clean: _ }), (g, y) => z((e(), a("textarea", {
      ref_key: "textarea",
      ref: n,
      "onUpdate:modelValue": y[0] || (y[0] = (C) => d.value = C),
      maxlength: t.maxLength,
      autocomplete: "off",
      class: $(["form-control eit-textarea eit-textarea-resize", h.value]),
      placeholder: t.placeHolder
    }, null, 10, Go)), [
      [
        X,
        d.value,
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
    return (l, o) => (e(), a("div", Qo, [
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
  DetailComponent: Ut,
  DialogComponent: so,
  HighlightComponent: Xt,
  InputComponent: Uo,
  LoadingComponent: oe,
  PaginationComponent: xt,
  PopoverComponent: Vo,
  ProgressBarComponent: _o,
  PropsComponent: uo,
  SelectComponent: Yo,
  SkeletonComponent: Y,
  TabComponent: Qt,
  TableComponent: yt,
  TextareaResizeComponent: Zo,
  ToastComponent: jo
}, Symbol.toStringTag, { value: "Module" }));
function Wo(t, i) {
  const l = ee(), o = S(() => l.meta.requiresAuth ? t.config.darkTheme ? i.logotipo.logo_dark : i.logotipo.logo_light : i.platformDarkTheme ? i.logotipo.logo_dark : i.logotipo.logo_light), r = S(() => t.config.darkTheme ? i.logotipo.isotipo_dark : i.logotipo.isotipo_light);
  return { logotipo: o, isotipo: r };
}
const us = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useLogos: Wo
}, Symbol.toStringTag, { value: "Module" }));
function Xo() {
  function t(n) {
    return !(n == null || typeof n == "string" && n.trim() === "" || typeof n == "object" && Object.keys(n).length === 0 || Array.isArray(n) && n.length === 0);
  }
  function i(n) {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(n);
  }
  function l(n) {
    if (n.length >= 11 && n.length <= 12 && /[.-]/.test(n)) return !0;
    if (n.length < 11) return !1;
  }
  function o(n) {
    const d = n.length >= 8, u = /[A-Z]/.test(n), h = /[a-z]/.test(n), _ = /[0-9]/.test(n), g = /[!@#$%^&*(),.?":{}|<>]/.test(n);
    return d && u && h && _ && g;
  }
  function r(n) {
    return /^\+\d{3} \d{4}-\d{4}$/.test(n);
  }
  return {
    validateDefault: t,
    validateEmail: i,
    validateRut: l,
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
  function l(r) {
    return r.replace(/\D/g, "").replace(/^(\d{3})(\d{4})(\d{4})$/, "+$1 $2-$3");
  }
  function o(r) {
    return r.replace(/[^a-zA-Z\s]/g, "");
  }
  return { inputMaskRut: t, inputMaskCurrency: i, inputMaskPhone: l, inputOnlyLetters: o };
}
function ts() {
  function t(i) {
    let l = String.fromCharCode(i.keyCode);
    if (/^[0-9Kk.-]/.test(l)) return !0;
    i.preventDefault();
  }
  return { keyPressRut: t };
}
function os() {
  function t(i) {
    const { sort: l, data: o } = i, { keys: r, index: n, asc: d } = l, u = r[n];
    return o.sort((h, _) => {
      let g = h[u], y = _[u];
      return typeof g == "object" && g !== null && (g = g.name, y = y.name), g === y ? 0 : (g > y ? 1 : -1) * (d ? 1 : -1);
    }), o;
  }
  return { sortTable: t };
}
O.extend(de);
O.locale("es");
function ss() {
  function t(n) {
    return O(n).format("DD/MM/YYYY");
  }
  function i(n) {
    return O(n).fromNow();
  }
  function l(n) {
    let d = n.replace(/[^0-9kK]/g, ""), u = d.slice(0, -1).replace(/\B(?=(\d{3})+(?!\d))/g, "."), h = d.slice(-1).toUpperCase();
    return `${u}-${h}`;
  }
  function o(n) {
    return n === null ? "" : n.charAt(0).toUpperCase() + n.slice(1).toLowerCase();
  }
  function r(n) {
    return new Intl.NumberFormat("es-CL").format(n);
  }
  return { formatDate: t, formatDateAgo: i, formatRut: l, formatCapitalize: o, formatCurrency: r };
}
function ns() {
  function t(i, l) {
    return l ? {
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
