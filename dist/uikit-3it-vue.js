import { computed as S, resolveComponent as j, openBlock as t, createElementBlock as l, normalizeClass as C, Fragment as h, createTextVNode as x, toDisplayString as g, createCommentVNode as c, createBlock as R, createElementVNode as o, createVNode as f, withCtx as H, renderList as B, renderSlot as q, mergeProps as se, createStaticVNode as ne, resolveDirective as le, withDirectives as V, ref as D, watch as T, watchEffect as M, withKeys as Q, vModelText as W, normalizeStyle as O, vModelDynamic as ae } from "vue";
import { useRoute as ie } from "vue-router";
import { codeToHtml as re } from "shiki";
import E from "dayjs";
import ce from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";
const de = ["disabled"], ue = /* @__PURE__ */ o("div", { class: "spinner-border spinner-border-sm me-1" }, null, -1), F = {
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
    const a = e, s = r, i = S(() => ["eit-btn", `${a.className}`]), n = () => {
      s("emitEvent");
    };
    return (d, u) => {
      const v = j("font-awesome-icon");
      return t(), l("button", {
        onClick: n,
        class: C([i.value, "d-flex align-items-center justify-content-center"]),
        disabled: a.isDisabled
      }, [
        a.loading ? (t(), l(h, { key: 0 }, [
          ue,
          x(" " + g(a.loadingText), 1)
        ], 64)) : c("", !0),
        a.loading ? c("", !0) : (t(), l(h, { key: 1 }, [
          a.icon ? (t(), R(v, {
            key: 0,
            icon: a.icon,
            class: "me-1"
          }, null, 8, ["icon"])) : c("", !0),
          x(" " + g(e.text), 1)
        ], 64))
      ], 10, de);
    };
  }
}, fe = { "aria-label": "breadcrumb" }, me = { class: "eit-breadcrumb" }, _e = /* @__PURE__ */ o("span", { class: "px-2 eit-color--text-soft" }, "/", -1), pe = {
  key: 1,
  class: "eit-color--text-soft"
}, he = {
  __name: "BreadcrumbComponent",
  setup(e) {
    const r = ie(), a = S(() => {
      let s = [], i = "";
      return r.matched.forEach((n, d) => {
        i += "/" + n.path.split("/")[d + 1], s.push({
          name: n.name,
          title: n.meta.title || "Sin título",
          path: i,
          last: d === r.matched.length - 1
        });
      }), s;
    });
    return (s, i) => {
      const n = j("font-awesome-icon"), d = j("router-link");
      return t(), l("nav", fe, [
        o("ul", me, [
          o("li", null, [
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
          (t(!0), l(h, null, B(a.value, (u, v) => (t(), l("li", {
            key: v,
            class: "eit-breadcrumb__item"
          }, [
            q(s.$slots, u.name, se({ ref_for: !0 }, u), () => [
              u.last ? (t(), l("span", pe, g(u.title), 1)) : (t(), R(d, {
                key: 0,
                to: u.path,
                class: "eit-color--text eit-color--text--link eit-color--underline"
              }, {
                default: H(() => [
                  x(g(u.title), 1)
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
  setup(e) {
    const r = e;
    return (a, s) => {
      const i = j("font-awesome-icon");
      return t(), l("span", {
        key: `badge-${r.text}`,
        class: C(`eit-badge ${r.className}`)
      }, [
        r.icon ? (t(), R(i, {
          key: 0,
          icon: r.icon,
          class: "me-1"
        }, null, 8, ["icon"])) : c("", !0),
        o("span", {
          innerHTML: r.text
        }, null, 8, ye)
      ], 2);
    };
  }
}, ve = {
  key: 0,
  class: "table eit-table eit-table-responsive"
}, ge = {
  key: 0,
  class: "eit-skeleton__table-first-td"
}, be = /* @__PURE__ */ o("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "80%" }
}, null, -1), ke = [
  be
], $e = { key: 1 }, xe = /* @__PURE__ */ o("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "60%" }
}, null, -1), we = [
  xe
], Ce = {
  key: 0,
  class: "eit-skeleton__table-first-td"
}, Re = /* @__PURE__ */ o("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), Se = [
  Re
], qe = { key: 1 }, De = /* @__PURE__ */ o("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), je = [
  De
], Be = /* @__PURE__ */ ne('<div class="row"><div class="col-12"><div class="d-flex"><div class="flex-shrink-0"><div class="eit-skeleton eit-skeleton__btn-square"></div></div><div class="flex-grow-1 ms-3"><div class="d-flex"><div class="flex-grow-1 ms-3"><div class="eit-skeleton eit-skeleton__title my-2" style="width:40%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div></div><div class="flex-shrink-0"><div class="eit-skeleton eit-skeleton__text my-2" style="width:30px;"></div></div></div></div></div></div></div><div class="row flex-grow-1"><div class="col-12 d-flex flex-column flex-grow-1"><div class="eit-slide__content flex-grow-1"><div class="mt-5"><div class="col-12"><h5 class="mb-3"><div class="eit-skeleton eit-skeleton__title my-2" style="width:20%;"></div></h5><ul class="list-unstyled"><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:40%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:20%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:20%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li></ul></div></div></div></div></div>', 2), I = {
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
    return (a, s) => (t(), l(h, null, [
      r.type === "table" ? (t(), l("table", ve, [
        o("thead", null, [
          o("tr", null, [
            (t(!0), l(h, null, B(r.table.column, (i) => (t(), l(h, { key: i }, [
              i === 1 ? (t(), l("th", ge, ke)) : c("", !0),
              i > 1 ? (t(), l("th", $e, we)) : c("", !0)
            ], 64))), 128))
          ])
        ]),
        o("tbody", null, [
          (t(!0), l(h, null, B(r.table.row, (i) => (t(), l("tr", { key: i }, [
            (t(!0), l(h, null, B(r.table.column, (n) => (t(), l(h, { key: n }, [
              n === 1 ? (t(), l("td", Ce, Se)) : c("", !0),
              n > 1 ? (t(), l("td", qe, je)) : c("", !0)
            ], 64))), 128))
          ]))), 128))
        ])
      ])) : c("", !0),
      r.type === "detail" ? (t(), l(h, { key: 1 }, [
        Be
      ], 64)) : c("", !0)
    ], 64));
  }
}, Pe = { class: "d-flex align-items-center" }, Te = { class: "flex-shrink-0 d-flex align-items-center eit-alert__icon me-2" }, Ne = ["innerHTML"], X = {
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
    return (a, s) => {
      const i = j("font-awesome-icon");
      return t(), l("div", {
        class: C(`eit-alert eit-alert--${r.type} ${r.animation.active ? "eit-alert--animation" : "eit-alert--default"} ${r.animation.show ? "eit-alert--animation--show" : ""}`)
      }, [
        o("div", Pe, [
          o("div", Te, [
            f(i, {
              icon: r.icon,
              class: C(e.iconClass)
            }, null, 8, ["icon", "class"])
          ]),
          o("div", {
            class: "flex-grow-1 eit-alert__text",
            innerHTML: r.message
          }, null, 8, Ne)
        ])
      ], 2);
    };
  }
}, Le = { class: "row" }, Ae = { class: "col-12" }, Ve = { class: "table eit-table eit-table-responsive" }, Ee = ["onClick"], Me = /* @__PURE__ */ o("th", {
  scope: "col",
  class: "text-center"
}, "Acciones", -1), ze = { class: "pe-3 d-lg-none" }, He = ["onClick"], Oe = {
  key: 0,
  class: "d-flex flex-wrap gap-1"
}, Fe = {
  key: 3,
  class: "eit-table__string"
}, Ie = { class: "text-center" }, Ue = { class: "dropdown eit-dropdown d-none d-lg-block" }, Ke = {
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
}, tt = /* @__PURE__ */ o("div", { class: "eit-border--bottom eit-border--color" }, null, -1), ot = [
  tt
], st = {
  key: 4,
  class: "mx-2"
}, nt = ["onClick"], lt = {
  key: 5,
  class: "mx-2"
}, at = ["onClick"], it = { class: "d-flex w-100 justify-content-between align-items-center d-lg-none text-end" }, rt = /* @__PURE__ */ o("strong", null, "Acciones:", -1), ct = { class: "d-flex flex-wrap gap-2 ms-3" }, dt = ["onClick"], ut = ["onClick"], ft = ["onClick"], mt = ["onClick"], _t = ["onClick"], pt = ["onClick"], ht = {
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
    const a = e, s = r, i = (y) => {
      s("viewRecord", y);
    }, n = (y) => {
      s("editRecord", y);
    }, d = (y) => {
      s("deleteRecord", y);
    }, u = (y) => {
      s("downloadRecord", y);
    }, v = (y) => {
      s("updateSort", { index: y, asc: !a.sort.asc });
    }, m = (y) => {
      s("enabledDisabledRecord", y);
    }, p = (y) => typeof y == "string", _ = (y) => typeof y == "object" && !Array.isArray(y), b = (y) => Array.isArray(y);
    return (y, N) => {
      var K, Y, G, Z;
      const w = j("font-awesome-icon"), U = le("tippy");
      return t(), l("div", Le, [
        o("div", Ae, [
          e.loading ? (t(), R(I, {
            key: 0,
            type: "table",
            table: { row: (K = e.skeleton) == null ? void 0 : K.row, column: (Y = e.skeleton) == null ? void 0 : Y.column }
          }, null, 8, ["table"])) : c("", !0),
          !e.loading && !((G = e.data) != null && G.length) ? (t(), R(X, {
            key: 1,
            ref: "alert",
            class: "mb-3",
            type: "info",
            icon: "fa-solid fa-info",
            message: "<strong>No hay resultados</strong> para tu búsqueda."
          }, null, 512)) : c("", !0),
          !e.loading && ((Z = e.data) != null && Z.length) ? (t(), l(h, { key: 2 }, [
            o("table", Ve, [
              o("thead", null, [
                o("tr", null, [
                  (t(!0), l(h, null, B(e.columns, (k, P) => (t(), l("th", {
                    key: `column-${P}`,
                    scope: "col"
                  }, [
                    o("a", {
                      onClick: ($) => v(P),
                      href: "javascript:",
                      class: "d-flex justify-content-between"
                    }, [
                      x(g(k) + " ", 1),
                      e.sort.index === P ? (t(), l("span", {
                        key: `icono-${k}`,
                        class: "d-flex ms-2 eit-color--text"
                      }, [
                        e.sort.asc ? c("", !0) : (t(), l("span", {
                          key: `down-${k}`
                        }, [
                          f(w, { icon: "fa-solid fa-sort-down align-baseline" })
                        ])),
                        e.sort.asc ? (t(), l("span", {
                          key: `up-${k}`
                        }, [
                          f(w, { icon: "fa-solid fa-sort-up align-baseline" })
                        ])) : c("", !0)
                      ])) : (t(), l("span", {
                        key: `key-${k}`
                      }, [
                        f(w, { icon: "fa-solid fa-sort" })
                      ]))
                    ], 8, Ee)
                  ]))), 128)),
                  Me
                ])
              ]),
              o("tbody", null, [
                (t(!0), l(h, null, B(e.data, (k, P) => (t(), l("tr", {
                  key: `row-${P}`
                }, [
                  (t(!0), l(h, null, B(k, ($, A) => (t(), l("td", {
                    key: `value-${A}`
                  }, [
                    o("strong", ze, g(e.columns[Object.keys(k).indexOf(A)]) + ":", 1),
                    Object.keys(k)[e.columnLink] === A ? (t(), l(h, { key: 0 }, [
                      e.viewRecord ? (t(), l("a", {
                        key: 0,
                        onClick: (z) => i(k),
                        href: "javascript:",
                        class: "eit-table__link"
                      }, g($), 9, He)) : c("", !0),
                      e.viewRecord ? c("", !0) : (t(), l(h, { key: 1 }, [
                        x(g($), 1)
                      ], 64))
                    ], 64)) : c("", !0),
                    Object.keys(k)[e.columnLink] !== A ? (t(), l(h, { key: 1 }, [
                      b($) ? (t(), l("div", Oe, [
                        (t(!0), l(h, null, B($, (z, oe) => (t(), l("span", {
                          key: `value-array-${oe}`,
                          class: "d-flex flex-wrap gap-1"
                        }, [
                          f(L, {
                            text: z.name,
                            className: z.className
                          }, null, 8, ["text", "className"])
                        ]))), 128))
                      ])) : c("", !0),
                      A === "status" ? (t(), l(h, { key: 1 }, [
                        $ ? (t(), R(L, {
                          key: 0,
                          text: "Activo",
                          className: "eit-badge__outline--secondary"
                        })) : c("", !0),
                        $ ? c("", !0) : (t(), R(L, {
                          key: 1,
                          text: "Inactivo",
                          className: "eit-badge__outline--gray"
                        }))
                      ], 64)) : c("", !0),
                      _($) ? (t(), R(L, {
                        key: 2,
                        text: $.name,
                        className: $.className
                      }, null, 8, ["text", "className"])) : c("", !0),
                      p($) ? (t(), l("span", Fe, g($), 1)) : c("", !0)
                    ], 64)) : c("", !0)
                  ]))), 128)),
                  o("td", Ie, [
                    o("div", Ue, [
                      o("a", Ke, [
                        f(w, { icon: "fa-solid fa-ellipsis" })
                      ]),
                      o("ul", Ye, [
                        e.viewRecord ? (t(), l("li", Ge, [
                          o("a", {
                            onClick: ($) => i(k),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            f(w, {
                              icon: "fa-regular fa-eye",
                              class: "eit-color--blue"
                            }),
                            x(" " + g(e.viewRecord), 1)
                          ], 8, Ze)
                        ])) : c("", !0),
                        e.editRecord ? (t(), l("li", Je, [
                          o("a", {
                            onClick: ($) => n(k),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            f(w, {
                              icon: "fa-solid fa-square-pen",
                              class: "eit-color--yellow"
                            }),
                            x(" " + g(e.editRecord), 1)
                          ], 8, Qe)
                        ])) : c("", !0),
                        e.downloadRecord ? (t(), l("li", We, [
                          o("a", {
                            onClick: ($) => u(k),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            f(w, {
                              icon: "fa-solid fa-download",
                              class: "eit-color--blue"
                            }),
                            x(" " + g(e.downloadRecord), 1)
                          ], 8, Xe)
                        ])) : c("", !0),
                        e.deleteRecord || e.enabledDisabledRecord ? (t(), l("li", et, ot)) : c("", !0),
                        e.enabledDisabledRecord ? (t(), l("li", st, [
                          o("a", {
                            onClick: ($) => m(k),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            k.status ? c("", !0) : (t(), l(h, { key: 0 }, [
                              f(w, {
                                icon: "fa-regular fa-circle-check",
                                class: "eit-color--green"
                              }),
                              x(" Habilitar ")
                            ], 64)),
                            k.status ? (t(), l(h, { key: 1 }, [
                              f(w, {
                                icon: "fa-solid fa-ban",
                                class: "eit-color--red"
                              }),
                              x(" Deshabilitar ")
                            ], 64)) : c("", !0)
                          ], 8, nt)
                        ])) : c("", !0),
                        e.deleteRecord ? (t(), l("li", lt, [
                          o("a", {
                            onClick: ($) => d(P),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            f(w, {
                              icon: "fa-solid fa-trash",
                              class: "eit-color--red"
                            }),
                            x(" " + g(e.deleteRecord), 1)
                          ], 8, at)
                        ])) : c("", !0)
                      ])
                    ]),
                    o("div", it, [
                      rt,
                      o("div", ct, [
                        e.viewRecord ? (t(), l("a", {
                          key: 0,
                          onClick: ($) => i(k),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          f(w, {
                            icon: "fa-regular fa-eye",
                            class: "eit-color--blue"
                          })
                        ], 8, dt)) : c("", !0),
                        e.editRecord ? (t(), l("a", {
                          key: 1,
                          onClick: ($) => n(k),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          f(w, {
                            icon: "fa-solid fa-square-pen",
                            class: "eit-color--yellow"
                          })
                        ], 8, ut)) : c("", !0),
                        e.downloadRecord ? (t(), l("a", {
                          key: 2,
                          onClick: ($) => u(k),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          f(w, {
                            icon: "fa-solid fa-download",
                            class: "eit-color--blue"
                          })
                        ], 8, ft)) : c("", !0),
                        e.enabledDisabledRecord ? (t(), l(h, { key: 3 }, [
                          k.status ? c("", !0) : V((t(), l("a", {
                            key: 0,
                            onClick: ($) => m(k),
                            href: "javascript:",
                            class: "eit-btn eit-btn-outline--gray eit-btn--square"
                          }, [
                            f(w, {
                              icon: "fa-regular fa-circle-check",
                              class: "eit-color--green"
                            })
                          ], 8, mt)), [
                            [U, { content: "Habilitar", theme: "main" }]
                          ]),
                          k.status ? V((t(), l("a", {
                            key: 1,
                            onClick: ($) => m(k),
                            href: "javascript:",
                            class: "eit-btn eit-btn-outline--gray eit-btn--square"
                          }, [
                            f(w, {
                              icon: "fa-solid fa-ban",
                              class: "eit-color--red"
                            })
                          ], 8, _t)), [
                            [U, { content: "Deshabilitar", theme: "main" }]
                          ]) : c("", !0)
                        ], 64)) : c("", !0),
                        e.deleteRecord ? (t(), l("a", {
                          key: 4,
                          onClick: ($) => d(P),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          f(w, {
                            icon: "fa-solid fa-trash",
                            class: "eit-color--red"
                          })
                        ], 8, pt)) : c("", !0)
                      ])
                    ])
                  ])
                ]))), 128))
              ])
            ]),
            q(y.$slots, "paginator")
          ], 64)) : c("", !0)
        ])
      ]);
    };
  }
}, yt = { class: "eit-paginator gap-2" }, vt = ["disabled"], gt = { class: "eit-color--text eit-font__size--x1" }, bt = ["disabled"], kt = {
  __name: "PaginationComponent",
  props: {
    data: {
      type: Object,
      required: !0
    }
  },
  emits: ["updatePaginator"],
  setup(e, { emit: r }) {
    const a = e, s = r, i = D(a.data.currentPage), n = () => i.value++, d = () => i.value--, u = () => {
      i.value <= 0 && (i.value = 1), i.value > a.data.finalPage && (i.value = a.data.finalPage);
    }, v = (m) => {
      m.target.select();
    };
    return T(i, () => {
      i.value > 0 && i.value <= a.data.finalPage && s("updatePaginator", i.value);
    }), M(() => {
      a.data && (i.value = a.data.currentPage);
    }), (m, p) => {
      const _ = j("font-awesome-icon");
      return t(), l("div", yt, [
        o("button", {
          onClick: d,
          disabled: e.data.currentPage === 1,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          f(_, { icon: "fa-solid fa-chevron-left" })
        ], 8, vt),
        V(o("input", {
          type: "number",
          "onUpdate:modelValue": p[0] || (p[0] = (b) => i.value = b),
          onInput: u,
          onKeyup: Q(u, ["enter"]),
          onBlur: u,
          onFocus: v,
          class: "eit-input eit-paginator__input eit-font__size--x1 text-center",
          "aria-label": "Número de página"
        }, null, 544), [
          [
            W,
            i.value,
            void 0,
            { number: !0 }
          ]
        ]),
        o("span", gt, [
          x(" de " + g(e.data.finalPage) + " ", 1),
          e.data.finalPage === 1 ? (t(), l(h, { key: 0 }, [
            x(" página ")
          ], 64)) : c("", !0),
          e.data.finalPage > 1 ? (t(), l(h, { key: 1 }, [
            x(" páginas ")
          ], 64)) : c("", !0)
        ]),
        o("button", {
          onClick: n,
          disabled: e.data.currentPage === e.data.finalPage,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          f(_, { icon: "fa-solid fa-chevron-right" })
        ], 8, bt)
      ]);
    };
  }
}, $t = { class: "row" }, xt = { class: "col-12" }, wt = { class: "d-flex" }, Ct = { class: "flex-shrink-0" }, Rt = { class: "flex-grow-1" }, St = { class: "d-flex" }, qt = { class: "flex-grow-1 d-flex flex-column ms-3" }, Dt = { class: "eit-font--primary mb-0" }, jt = { class: "eit-color--text mb-0" }, Bt = { class: "flex-shrink-0" }, Pt = {
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
}, Vt = {
  key: 2,
  class: "m-2"
}, Et = /* @__PURE__ */ o("div", { class: "eit-border--bottom eit-border--color" }, null, -1), Mt = [
  Et
], zt = {
  key: 3,
  class: "mx-2"
}, Ht = {
  key: 4,
  class: "mx-2"
}, Ot = { class: "row flex-grow-1" }, Ft = { class: "col-12 d-flex flex-column flex-grow-1" }, It = { class: "eit-slide__content flex-grow-1" }, Ut = {
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
    const a = e, s = r, i = () => {
      s("emitslide");
    }, n = (m) => {
      s("enabledDisabledRecord", m);
    }, d = (m) => {
      s("editRecord", m);
    }, u = (m) => {
      s("deleteRecord", m);
    }, v = (m) => {
      s("downloadRecord", m);
    };
    return (m, p) => {
      const _ = j("font-awesome-icon");
      return t(), l("section", {
        class: C(["eit-slide d-flex flex-column", [e.slide && "eit-slide--right", e.slideSmall && "eit-slide--small"]])
      }, [
        a.loading ? (t(), R(I, {
          key: 0,
          type: "detail"
        })) : c("", !0),
        a.loading ? c("", !0) : (t(), l(h, { key: 1 }, [
          o("div", $t, [
            o("div", xt, [
              o("div", wt, [
                o("div", Ct, [
                  o("button", {
                    class: "eit-btn eit-btn--gray eit-btn--square",
                    onClick: i
                  }, [
                    f(_, {
                      icon: "fa-solid fa-angle-right",
                      class: "eit-font__size--x5 d-none d-lg-block"
                    }),
                    f(_, {
                      icon: "fa-solid fa-angle-down",
                      class: "eit-font__size--x5 d-lg-none"
                    })
                  ])
                ]),
                o("div", Rt, [
                  o("div", St, [
                    o("div", qt, [
                      o("h4", Dt, [
                        o("strong", null, [
                          q(m.$slots, "title")
                        ])
                      ]),
                      o("p", jt, [
                        q(m.$slots, "subtitle")
                      ])
                    ]),
                    o("div", Bt, [
                      a.dropdown ? (t(), l("div", Pt, [
                        o("a", Tt, [
                          f(_, { icon: "fa-solid fa-ellipsis" })
                        ]),
                        o("ul", Nt, [
                          a.editRecord ? (t(), l("li", Lt, [
                            o("a", {
                              onClick: p[0] || (p[0] = (b) => d(a.record)),
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              f(_, {
                                icon: "fa-solid fa-square-pen",
                                class: "eit-color--yellow"
                              }),
                              x(" " + g(e.editRecord), 1)
                            ])
                          ])) : c("", !0),
                          a.downloadRecord ? (t(), l("li", At, [
                            o("a", {
                              onClick: p[1] || (p[1] = (b) => v(a.record)),
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              f(_, {
                                icon: "fa-solid fa-download",
                                class: "eit-color--blue"
                              }),
                              x(" " + g(a.downloadRecord), 1)
                            ])
                          ])) : c("", !0),
                          e.deleteRecord || e.enabledDisabledRecord ? (t(), l("li", Vt, Mt)) : c("", !0),
                          a.enabledDisabledRecord ? (t(), l("li", zt, [
                            o("a", {
                              onClick: p[2] || (p[2] = (b) => n(e.record)),
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              a.record.status ? c("", !0) : (t(), l(h, { key: 0 }, [
                                f(_, {
                                  icon: "fa-regular fa-circle-check",
                                  class: "eit-color--green"
                                }),
                                x(" Habilitar ")
                              ], 64)),
                              a.record.status ? (t(), l(h, { key: 1 }, [
                                f(_, {
                                  icon: "fa-solid fa-ban",
                                  class: "eit-color--red"
                                }),
                                x(" Deshabilitar ")
                              ], 64)) : c("", !0)
                            ])
                          ])) : c("", !0),
                          a.deleteRecord ? (t(), l("li", Ht, [
                            o("a", {
                              onClick: p[3] || (p[3] = (b) => u(a.record)),
                              class: "dropdown-item dropdown-custom-menu-item eit-color--red",
                              href: "javascript:"
                            }, [
                              f(_, {
                                icon: "fa-solid fa-trash",
                                class: "eit-color--red"
                              }),
                              x(" " + g(a.deleteRecord), 1)
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
          o("div", Ot, [
            o("div", Ft, [
              o("div", It, [
                q(m.$slots, "component")
              ])
            ])
          ]),
          q(m.$slots, "footer")
        ], 64))
      ], 2);
    };
  }
}, Kt = { class: "d-flex justify-content-between align-items-center" }, Yt = ["onClick"], Gt = {
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
  setup(e) {
    const r = e, a = (n) => n < 99 ? n : "+99", s = D(0), i = (n) => {
      s.value = n;
    };
    return (n, d) => (t(), l(h, null, [
      o("div", Kt, [
        o("ul", {
          class: C(`eit-tabs ${r.className}`)
        }, [
          (t(!0), l(h, null, B(e.data, (u, v) => (t(), l("li", {
            key: v,
            class: "eit-tabs__item"
          }, [
            o("a", {
              href: "javascript:",
              onClick: (m) => i(v),
              class: C(["eit-tabs__item__link", s.value === v ? "active" : ""])
            }, [
              x(g(u.name) + " ", 1),
              u.number ? (t(), l("span", Gt, g(a(u.number)), 1)) : c("", !0)
            ], 10, Yt)
          ]))), 128))
        ], 2),
        q(n.$slots, "dropdown")
      ]),
      o("div", Zt, [
        o("div", Jt, [
          q(n.$slots, `tab-${s.value}`)
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
  setup(e) {
    const r = e, a = D("");
    return (async () => {
      const i = `${r.code}`;
      a.value = await re(i, {
        lang: r.lang,
        theme: r.theme
      });
    })(), (i, n) => (t(), l("div", { innerHTML: a.value }, null, 8, Wt));
  }
}, eo = "" + new URL("img/loading.svg", import.meta.url).href, to = { class: "p-3 eit-loading" }, ee = {
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
    return (a, s) => (t(), l("div", to, [
      o("img", {
        style: O(`width:${r.size}px`),
        src: eo
      }, null, 4)
    ]));
  }
}, oo = { class: "d-flex justify-content-between align-items-center" }, so = { class: "eit-dialog__body" }, no = { class: "d-flex gap-2 justify-content-end mt-3" }, lo = {
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
  setup(e, { expose: r, emit: a }) {
    const s = e, i = a, n = D(null), d = () => {
      n.value.showModal(), n.value.classList.add("show");
    }, u = () => {
      n.value.close(), n.value.classList.remove("show"), i("emitCloseDialog");
    }, v = () => {
      i("emitSubmit");
    };
    return r({ showDialog: d, closeDialog: u }), (m, p) => {
      const _ = j("font-awesome-icon");
      return t(), l("dialog", {
        ref_key: "dialog",
        ref: n,
        class: C(["eit-dialog", s.className])
      }, [
        e.loading ? (t(), R(ee, {
          key: 0,
          size: "70"
        })) : c("", !0),
        e.loading ? c("", !0) : (t(), l(h, { key: 1 }, [
          o("div", oo, [
            q(m.$slots, "head"),
            o("button", {
              onClick: u,
              class: "eit-dialog__close"
            }, [
              f(_, { icon: ["fas", "xmark"] })
            ])
          ]),
          o("div", so, [
            q(m.$slots, "content")
          ]),
          o("div", no, [
            f(F, {
              onClick: u,
              className: "eit-btn-outline--gray",
              text: "Volver"
            }),
            s.btnSubmit ? (t(), R(F, {
              key: 0,
              className: "eit-btn--primary",
              text: "Guardar",
              loadingText: "Guardando...",
              loading: e.loadingSubmit,
              onEmitEvent: v,
              isDisabled: e.disabledSubmit
            }, null, 8, ["loading", "isDisabled"])) : c("", !0)
          ])
        ], 64))
      ], 2);
    };
  }
}, ao = { class: "row" }, io = { class: "col" }, ro = /* @__PURE__ */ o("h2", { class: "eit-font__size--x4 eit-color--text eit-font__weight--300 eit-border--bottom eit-border--color mb-3" }, [
  /* @__PURE__ */ o("strong", { class: "eit-font__weight--900" }, "Props")
], -1), co = { class: "eit-table--overflow" }, uo = { class: "table eit-table" }, fo = /* @__PURE__ */ o("thead", null, [
  /* @__PURE__ */ o("tr", null, [
    /* @__PURE__ */ o("th", null, "Name"),
    /* @__PURE__ */ o("th", null, "Type"),
    /* @__PURE__ */ o("th", null, "Default")
  ])
], -1), mo = {
  __name: "PropsComponent",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const r = e;
    return (a, s) => (t(), l("div", ao, [
      o("div", io, [
        ro,
        o("div", co, [
          o("table", uo, [
            fo,
            o("tbody", null, [
              (t(!0), l(h, null, B(r.data, (i) => (t(), l("tr", {
                key: i.name
              }, [
                o("td", null, [
                  f(L, {
                    text: i.name,
                    className: "eit-badge__outline--gray"
                  }, null, 8, ["text"])
                ]),
                o("td", null, [
                  o("code", null, g(i.type), 1)
                ]),
                o("td", null, [
                  o("code", null, g(i.default), 1)
                ])
              ]))), 128))
            ])
          ])
        ])
      ])
    ]));
  }
}, _o = { class: "eit-progress eit-progress--30" }, po = {
  __name: "ProgressBarComponent",
  props: {
    percentage: {
      type: Number,
      default: 50
    },
    type: {
      type: String,
      default: "primary"
    }
  },
  setup(e) {
    const r = e;
    return (a, s) => (t(), l("div", _o, [
      o("div", {
        class: C(["eit-progress__bar", `eit-progress__bar--${r.type}`]),
        style: O(`width: ${r.percentage}%`)
      }, g(r.percentage) + "% ", 7),
      o("div", {
        class: "eit-progress__bar eit-progress__bar--transparent",
        style: O(`width: ${100 - r.percentage}%`)
      }, g(100 - r.percentage) + "% ", 5)
    ]));
  }
}, ho = { class: "d-flex" }, yo = { class: "flex-shrink-0 eit-toast__left" }, vo = {
  key: "success",
  class: "eit-toast__icon eit-font__size--x7"
}, go = {
  key: "error",
  class: "eit-toast__icon eit-font__size--x7"
}, bo = {
  key: "warning",
  class: "eit-toast__icon eit-font__size--x7"
}, ko = {
  key: "info",
  class: "eit-toast__icon eit-font__size--x7"
}, $o = { class: "flex-grow-1 ms-3" }, xo = { class: "d-flex" }, wo = { class: "flex-grow-1 me-3" }, Co = { class: "eit-toast__title" }, Ro = { class: "eit-toast__text" }, So = { class: "flex-shrink-0" }, qo = {
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
    const a = e, s = D(!1), i = D("hidden"), n = D(""), d = S(() => ({
      show: s.value,
      hide: !s.value,
      [a.position]: a.position,
      hidden: i.value
    })), u = () => {
      clearTimeout(n.value), s.value = !0, i.value = "", n.value = setTimeout(() => {
        s.value = !1, setTimeout(() => i.value = "hidden", "300");
      }, a.visible);
    }, v = () => {
      s.value = !1, setTimeout(() => i.value = "hidden", "300"), clearTimeout(n.value);
    };
    return r({ handleShowToast: u, handleCloseToast: v }), (m, p) => {
      const _ = j("font-awesome-icon");
      return t(), l("div", {
        class: C(["eit-toast__container", d.value])
      }, [
        o("div", {
          class: C(["eit-toast box-shadow", `eit-toast--${a.data.type}`])
        }, [
          o("div", ho, [
            o("div", yo, [
              a.type === "success" ? (t(), l("span", vo, [
                f(_, { icon: "fa-solid fa-circle-check" })
              ])) : c("", !0),
              a.type === "error" ? (t(), l("span", go, [
                f(_, { icon: "fa-solid fa-circle-xmark" })
              ])) : c("", !0),
              a.type === "warning" ? (t(), l("span", bo, [
                f(_, { icon: "fa-solid fa-triangle-exclamation" })
              ])) : c("", !0),
              a.type === "info" ? (t(), l("span", ko, [
                f(_, { icon: "fa-solid fa-circle-info" })
              ])) : c("", !0)
            ]),
            o("div", $o, [
              o("div", xo, [
                o("div", wo, [
                  o("p", Co, [
                    a.data.code ? (t(), l(h, { key: 0 }, [
                      x(g(a.data.code), 1)
                    ], 64)) : c("", !0),
                    x(" " + g(a.data.title), 1)
                  ]),
                  o("p", Ro, g(a.data.message), 1)
                ]),
                o("div", So, [
                  o("a", {
                    onClick: p[0] || (p[0] = (b) => v()),
                    href: "javascript:",
                    class: "eit-toast__close"
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
}, Do = ["type", "maxlength", "placeholder"], jo = {
  key: 0,
  class: "eit-label-float"
}, Bo = {
  key: 1,
  class: "eit-input__display__icon eit-input__display__float-left--icon"
}, Po = {
  key: 2,
  class: "eit-input__display__icon eit-input__display__float-right--icon"
}, To = {
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
  setup(e, { expose: r, emit: a }) {
    const s = e, i = a, n = D(""), d = S(
      () => s.validation ? s.validation(n.value) : !0
    ), u = S(() => !d.value && s.requiredField && s.error ? "is-invalid" : ""), v = S(() => s.floatLabel ? "" : s.placeHolder), m = S(() => [
      s.floatLabel || s.floatLeft || s.floatRight ? "eit-input__display" : "",
      s.floatLeft ? "eit-input__display__float-left" : "",
      s.floatRight ? "eit-input__display__float-right" : ""
    ]), p = () => {
      i("emitPressEnter");
    }, _ = () => {
      n.value = "";
    };
    return T(
      () => s.input,
      (b) => {
        b && (n.value = b);
      }
    ), T(n, () => {
      i("emitValue", d.value ? n.value : "");
    }), M(() => {
      s.inputMask && (n.value = s.inputMask(n.value)), s.submitted && _();
    }), r({ clean: _ }), (b, y) => (t(), l("div", {
      class: C(m.value)
    }, [
      V(o("input", {
        autocomplete: "off",
        class: C(["form-control eit-input", u.value]),
        type: e.inputType,
        "onUpdate:modelValue": y[0] || (y[0] = (N) => n.value = N),
        maxlength: s.maxLength,
        onKeypress: y[1] || (y[1] = (N) => s.keyPress && s.keyPress(N)),
        placeholder: v.value,
        onKeyup: Q(p, ["enter"])
      }, null, 42, Do), [
        [
          ae,
          n.value,
          void 0,
          { trim: !0 }
        ]
      ]),
      s.floatLabel ? (t(), l("label", jo, g(s.floatLabel), 1)) : c("", !0),
      s.floatLeft ? (t(), l("span", Bo, [
        q(b.$slots, "float-left")
      ])) : c("", !0),
      s.floatRight ? (t(), l("span", Po, [
        q(b.$slots, "float-right")
      ])) : c("", !0)
    ], 2));
  }
}, No = {
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
  setup(e, { expose: r, emit: a }) {
    const s = e, i = a, n = D(null), d = S(
      () => s.validation ? s.validation(n.value) : !0
    ), u = S(() => !d.value && s.requiredField && s.error ? "is-invalid" : ""), v = () => Array.isArray(n.value) ? s.data.filter((b) => !n.value.some((y) => y.id === b.id)) : s.data, m = () => n.value ? s.data.filter((b) => b.id !== n.value.id) : s.data, p = S(() => s.multiple ? v() : m());
    T(
      () => s.selected,
      (b) => {
        b && (n.value = b);
      },
      { immediate: !0 }
    ), T(n, () => {
      i("emitValue", d.value ? n.value : "");
    }), M(() => {
      s.submitted && _();
    });
    const _ = () => {
      n.value = s.multiple ? [] : null;
    };
    return r({ clean: _ }), (b, y) => {
      const N = j("v-select");
      return t(), R(N, {
        options: p.value,
        modelValue: n.value,
        "onUpdate:modelValue": y[0] || (y[0] = (w) => n.value = w),
        label: e.labelCustom,
        multiple: e.multiple,
        placeholder: e.placeHolder,
        class: C(["eit-select-component", u.value]),
        clearable: e.clearable,
        disabled: s.isDisabled
      }, {
        "no-options": H(() => [
          x(" No hay más resultados. ")
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
  setup(e, { expose: r, emit: a }) {
    const s = e, i = a, n = D(null), d = D(""), u = S(() => s.validation && s.validation(d.value)), v = S(() => !u.value && s.requiredField && s.error ? "is-invalid" : ""), m = () => {
      d.value = "";
    };
    return T(
      () => s.input,
      (p) => {
        p && (d.value = p);
      }
    ), T(d, () => {
      n.value.style.height = "50px", n.value.style.height = `${n.value.scrollHeight}px`, i("emitValue", u.value ? d.value : "");
    }), M(() => {
      s.submitted && m();
    }), r({ clean: m }), (p, _) => V((t(), l("textarea", {
      ref_key: "textarea",
      ref: n,
      "onUpdate:modelValue": _[0] || (_[0] = (b) => d.value = b),
      maxlength: e.maxLength,
      autocomplete: "off",
      class: C(["form-control eit-textarea eit-textarea-resize", v.value]),
      placeholder: e.placeHolder
    }, null, 10, Lo)), [
      [
        W,
        d.value,
        void 0,
        { trim: !0 }
      ]
    ]);
  }
}, J = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlertComponent: X,
  BadgeComponent: L,
  BreadcrumbComponent: he,
  ButtonComponent: F,
  DetailComponent: Ut,
  DialogComponent: lo,
  HighlightComponent: Xt,
  InputComponent: To,
  LoadingComponent: ee,
  PaginationComponent: kt,
  ProgressBarComponent: po,
  PropsComponent: mo,
  SelectComponent: No,
  SkeletonComponent: I,
  TabComponent: Qt,
  TableComponent: ht,
  TextareaResizeComponent: Ao,
  ToastComponent: qo
}, Symbol.toStringTag, { value: "Module" }));
function Vo() {
  function e(n) {
    return !(n == null || typeof n == "string" && n.trim() === "" || typeof n == "object" && Object.keys(n).length === 0 || Array.isArray(n) && n.length === 0);
  }
  function r(n) {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(n);
  }
  function a(n) {
    if (n.length >= 11 && n.length <= 12 && /[.-]/.test(n)) return !0;
    if (n.length < 11) return !1;
  }
  function s(n) {
    const d = n.length >= 8, u = /[A-Z]/.test(n), v = /[a-z]/.test(n), m = /[0-9]/.test(n), p = /[!@#$%^&*(),.?":{}|<>]/.test(n);
    return d && u && v && m && p;
  }
  function i(n) {
    return /^\+\d{3} \d{4}-\d{4}$/.test(n);
  }
  return {
    validateDefault: e,
    validateEmail: r,
    validateRut: a,
    validatePassword: s,
    validatePhone: i
  };
}
function Eo() {
  function e(s) {
    return s.replace(/[.-]/g, "").replace(/^(\d{1,2})(\d{3})(\d{3})(\w{1})$/, "$1.$2.$3-$4");
  }
  function r(s) {
    return s.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  function a(s) {
    return s.replace(/\D/g, "").replace(/^(\d{3})(\d{4})(\d{4})$/, "+$1 $2-$3");
  }
  return { inputMaskRut: e, inputMaskCurrency: r, inputMaskPhone: a };
}
function Mo() {
  function e(r) {
    let a = String.fromCharCode(r.keyCode);
    if (/^[0-9Kk.-]/.test(a)) return !0;
    r.preventDefault();
  }
  return { keyPressRut: e };
}
function zo() {
  function e(r) {
    const { sort: a, data: s } = r, { keys: i, index: n, asc: d } = a, u = i[n];
    return s.sort((v, m) => {
      let p = v[u], _ = m[u];
      return typeof p == "object" && p !== null && (p = p.name, _ = _.name), p === _ ? 0 : (p > _ ? 1 : -1) * (d ? 1 : -1);
    }), s;
  }
  return { sortTable: e };
}
E.extend(ce);
E.locale("es");
function Ho() {
  function e(i) {
    return E(i).format("DD/MM/YYYY");
  }
  function r(i) {
    return E(i).fromNow();
  }
  function a(i) {
    let n = i.replace(/[^0-9kK]/g, ""), d = n.slice(0, -1).replace(/\B(?=(\d{3})+(?!\d))/g, "."), u = n.slice(-1).toUpperCase();
    return `${d}-${u}`;
  }
  function s(i) {
    return i.charAt(0).toUpperCase() + i.slice(1).toLowerCase();
  }
  return { formatDate: e, formatDateAgo: r, formatRut: a, formatCapitalize: s };
}
function te() {
  function e(r, a) {
    return a ? {
      content: r,
      theme: "main",
      placement: "right",
      appendTo: "parent"
    } : { content: r, theme: "main", placement: "right" };
  }
  return { handleTooltip: e };
}
const Oo = function(e) {
  return e.useTooltip = te, e;
}({}), Zo = {
  install(e) {
    Object.keys(J).forEach((r) => {
      e.component(r, J[r]);
    });
  },
  uikitVue: Oo,
  useValidator: Vo,
  useInputMask: Eo,
  useKeypress: Mo,
  useTable: zo,
  useFormat: Ho,
  useTooltip: te
};
export {
  Zo as default
};
