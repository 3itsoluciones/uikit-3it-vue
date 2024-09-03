import { computed as R, resolveComponent as D, openBlock as t, createElementBlock as l, normalizeClass as C, Fragment as h, createTextVNode as x, toDisplayString as v, createCommentVNode as c, createBlock as S, createElementVNode as o, createVNode as f, withCtx as O, renderList as P, renderSlot as j, mergeProps as se, createStaticVNode as ne, resolveDirective as le, withDirectives as E, ref as q, watch as T, watchEffect as V, withKeys as Q, vModelText as W, normalizeStyle as H, vModelDynamic as ae } from "vue";
import { useRoute as X } from "vue-router";
import { codeToHtml as ie } from "shiki";
import M from "dayjs";
import re from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";
const ce = ["disabled"], de = /* @__PURE__ */ o("div", { class: "spinner-border spinner-border-sm me-1" }, null, -1), F = {
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
  setup(e, { emit: a }) {
    const i = e, s = a, r = R(() => ["eit-btn", `${i.className}`]), n = () => {
      s("emitEvent");
    };
    return (d, u) => {
      const g = D("font-awesome-icon");
      return t(), l("button", {
        onClick: n,
        class: C([r.value, "d-flex align-items-center justify-content-center"]),
        disabled: i.isDisabled
      }, [
        i.loading ? (t(), l(h, { key: 0 }, [
          de,
          x(" " + v(i.loadingText), 1)
        ], 64)) : c("", !0),
        i.loading ? c("", !0) : (t(), l(h, { key: 1 }, [
          i.icon ? (t(), S(g, {
            key: 0,
            icon: i.icon,
            class: "me-1"
          }, null, 8, ["icon"])) : c("", !0),
          x(" " + v(e.text), 1)
        ], 64))
      ], 10, ce);
    };
  }
}, ue = { "aria-label": "breadcrumb" }, fe = { class: "eit-breadcrumb" }, me = /* @__PURE__ */ o("span", { class: "px-2 eit-color--text-soft" }, "/", -1), _e = {
  key: 1,
  class: "eit-color--text-soft"
}, pe = {
  __name: "BreadcrumbComponent",
  setup(e) {
    const a = X(), i = R(() => {
      let s = [], r = "";
      return a.matched.forEach((n, d) => {
        r += "/" + n.path.split("/")[d + 1], s.push({
          name: n.name,
          title: n.meta.title || "Sin título",
          path: r,
          last: d === a.matched.length - 1
        });
      }), s;
    });
    return (s, r) => {
      const n = D("font-awesome-icon"), d = D("router-link");
      return t(), l("nav", ue, [
        o("ul", fe, [
          o("li", null, [
            f(d, {
              to: "/",
              class: "eit-color--text-soft eit-color--text-soft--link"
            }, {
              default: O(() => [
                f(n, { icon: "fa-solid fa-house" })
              ]),
              _: 1
            }),
            me
          ]),
          (t(!0), l(h, null, P(i.value, (u, g) => (t(), l("li", {
            key: g,
            class: "eit-breadcrumb__item"
          }, [
            j(s.$slots, u.name, se({ ref_for: !0 }, u), () => [
              u.last ? (t(), l("span", _e, v(u.title), 1)) : (t(), S(d, {
                key: 0,
                to: u.path,
                class: "eit-color--text eit-color--text--link eit-color--underline"
              }, {
                default: O(() => [
                  x(v(u.title), 1)
                ]),
                _: 2
              }, 1032, ["to"]))
            ])
          ]))), 128))
        ])
      ]);
    };
  }
}, he = ["innerHTML"], L = {
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
    const a = e;
    return (i, s) => {
      const r = D("font-awesome-icon");
      return t(), l("span", {
        key: `badge-${a.text}`,
        class: C(`eit-badge ${a.className}`)
      }, [
        a.icon ? (t(), S(r, {
          key: 0,
          icon: a.icon,
          class: "me-1"
        }, null, 8, ["icon"])) : c("", !0),
        o("span", {
          innerHTML: a.text
        }, null, 8, he)
      ], 2);
    };
  }
}, ye = {
  key: 0,
  class: "table eit-table eit-table-responsive"
}, ge = {
  key: 0,
  class: "eit-skeleton__table-first-td"
}, ve = /* @__PURE__ */ o("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "80%" }
}, null, -1), be = [
  ve
], ke = { key: 1 }, $e = /* @__PURE__ */ o("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "60%" }
}, null, -1), xe = [
  $e
], we = {
  key: 0,
  class: "eit-skeleton__table-first-td"
}, Ce = /* @__PURE__ */ o("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), Re = [
  Ce
], Se = { key: 1 }, je = /* @__PURE__ */ o("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), qe = [
  je
], De = /* @__PURE__ */ ne('<div class="row"><div class="col-12"><div class="d-flex"><div class="flex-shrink-0"><div class="eit-skeleton eit-skeleton__btn-square"></div></div><div class="flex-grow-1 ms-3"><div class="d-flex"><div class="flex-grow-1 ms-3"><div class="eit-skeleton eit-skeleton__title my-2" style="width:40%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div></div><div class="flex-shrink-0"><div class="eit-skeleton eit-skeleton__text my-2" style="width:30px;"></div></div></div></div></div></div></div><div class="row flex-grow-1"><div class="col-12 d-flex flex-column flex-grow-1"><div class="eit-slide__content flex-grow-1"><div class="mt-5"><div class="col-12"><h5 class="mb-3"><div class="eit-skeleton eit-skeleton__title my-2" style="width:20%;"></div></h5><ul class="list-unstyled"><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:40%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:20%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:20%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li></ul></div></div></div></div></div>', 2), I = {
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
    const a = e;
    return (i, s) => (t(), l(h, null, [
      a.type === "table" ? (t(), l("table", ye, [
        o("thead", null, [
          o("tr", null, [
            (t(!0), l(h, null, P(a.table.column, (r) => (t(), l(h, { key: r }, [
              r === 1 ? (t(), l("th", ge, be)) : c("", !0),
              r > 1 ? (t(), l("th", ke, xe)) : c("", !0)
            ], 64))), 128))
          ])
        ]),
        o("tbody", null, [
          (t(!0), l(h, null, P(a.table.row, (r) => (t(), l("tr", { key: r }, [
            (t(!0), l(h, null, P(a.table.column, (n) => (t(), l(h, { key: n }, [
              n === 1 ? (t(), l("td", we, Re)) : c("", !0),
              n > 1 ? (t(), l("td", Se, qe)) : c("", !0)
            ], 64))), 128))
          ]))), 128))
        ])
      ])) : c("", !0),
      a.type === "detail" ? (t(), l(h, { key: 1 }, [
        De
      ], 64)) : c("", !0)
    ], 64));
  }
}, Pe = { class: "d-flex align-items-center" }, Be = { class: "flex-shrink-0 d-flex align-items-center eit-alert__icon me-2" }, Te = ["innerHTML"], ee = {
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
    const a = e;
    return (i, s) => {
      const r = D("font-awesome-icon");
      return t(), l("div", {
        class: C(`eit-alert eit-alert--${a.type} ${a.animation.active ? "eit-alert--animation" : "eit-alert--default"} ${a.animation.show ? "eit-alert--animation--show" : ""}`)
      }, [
        o("div", Pe, [
          o("div", Be, [
            f(r, {
              icon: a.icon,
              class: C(e.iconClass)
            }, null, 8, ["icon", "class"])
          ]),
          o("div", {
            class: "flex-grow-1 eit-alert__text",
            innerHTML: a.message
          }, null, 8, Te)
        ])
      ], 2);
    };
  }
}, Ne = { class: "row" }, Le = { class: "col-12" }, Ae = { class: "table eit-table eit-table-responsive" }, Ee = ["onClick"], Me = /* @__PURE__ */ o("th", {
  scope: "col",
  class: "text-center"
}, "Acciones", -1), Ve = { class: "pe-3 d-lg-none" }, ze = ["onClick"], Oe = {
  key: 0,
  class: "d-flex flex-wrap gap-1"
}, He = {
  key: 3,
  class: "eit-table__string"
}, Fe = { class: "text-center" }, Ie = { class: "dropdown eit-dropdown d-none d-lg-block" }, Ue = {
  href: "javascript:",
  class: "eit-btn-action",
  "data-bs-toggle": "dropdown"
}, Ke = { class: "dropdown-menu dropdown-custom-menu" }, Ye = {
  key: 0,
  class: "mx-2"
}, Ge = ["onClick"], Ze = {
  key: 1,
  class: "mx-2"
}, Je = ["onClick"], Qe = {
  key: 2,
  class: "mx-2"
}, We = ["onClick"], Xe = {
  key: 3,
  class: "m-2"
}, et = /* @__PURE__ */ o("div", { class: "eit-border--bottom eit-border--color" }, null, -1), tt = [
  et
], ot = {
  key: 4,
  class: "mx-2"
}, st = ["onClick"], nt = {
  key: 5,
  class: "mx-2"
}, lt = ["onClick"], at = { class: "d-flex w-100 justify-content-between align-items-center d-lg-none text-end" }, it = /* @__PURE__ */ o("strong", null, "Acciones:", -1), rt = { class: "d-flex flex-wrap gap-2 ms-3" }, ct = ["onClick"], dt = ["onClick"], ut = ["onClick"], ft = ["onClick"], mt = ["onClick"], _t = ["onClick"], pt = {
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
  setup(e, { emit: a }) {
    const i = e, s = a, r = (y) => {
      s("viewRecord", y);
    }, n = (y) => {
      s("editRecord", y);
    }, d = (y) => {
      s("deleteRecord", y);
    }, u = (y) => {
      s("downloadRecord", y);
    }, g = (y) => {
      s("updateSort", { index: y, asc: !i.sort.asc });
    }, m = (y) => {
      s("enabledDisabledRecord", y);
    }, p = (y) => typeof y == "string", _ = (y) => typeof y == "object" && !Array.isArray(y), b = (y) => Array.isArray(y);
    return (y, N) => {
      var K, Y, G, Z;
      const w = D("font-awesome-icon"), U = le("tippy");
      return t(), l("div", Ne, [
        o("div", Le, [
          e.loading ? (t(), S(I, {
            key: 0,
            type: "table",
            table: { row: (K = e.skeleton) == null ? void 0 : K.row, column: (Y = e.skeleton) == null ? void 0 : Y.column }
          }, null, 8, ["table"])) : c("", !0),
          !e.loading && !((G = e.data) != null && G.length) ? (t(), S(ee, {
            key: 1,
            ref: "alert",
            class: "mb-3",
            type: "info",
            icon: "fa-solid fa-info",
            message: "<strong>No hay resultados</strong> para tu búsqueda."
          }, null, 512)) : c("", !0),
          !e.loading && ((Z = e.data) != null && Z.length) ? (t(), l(h, { key: 2 }, [
            o("table", Ae, [
              o("thead", null, [
                o("tr", null, [
                  (t(!0), l(h, null, P(e.columns, (k, B) => (t(), l("th", {
                    key: `column-${B}`,
                    scope: "col"
                  }, [
                    o("a", {
                      onClick: ($) => g(B),
                      href: "javascript:",
                      class: "d-flex justify-content-between"
                    }, [
                      x(v(k) + " ", 1),
                      e.sort.index === B ? (t(), l("span", {
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
                (t(!0), l(h, null, P(e.data, (k, B) => (t(), l("tr", {
                  key: `row-${B}`
                }, [
                  (t(!0), l(h, null, P(k, ($, A) => (t(), l("td", {
                    key: `value-${A}`
                  }, [
                    o("strong", Ve, v(e.columns[Object.keys(k).indexOf(A)]) + ":", 1),
                    Object.keys(k)[e.columnLink] === A ? (t(), l(h, { key: 0 }, [
                      e.viewRecord ? (t(), l("a", {
                        key: 0,
                        onClick: (z) => r(k),
                        href: "javascript:",
                        class: "eit-table__link"
                      }, v($), 9, ze)) : c("", !0),
                      e.viewRecord ? c("", !0) : (t(), l(h, { key: 1 }, [
                        x(v($), 1)
                      ], 64))
                    ], 64)) : c("", !0),
                    Object.keys(k)[e.columnLink] !== A ? (t(), l(h, { key: 1 }, [
                      b($) ? (t(), l("div", Oe, [
                        (t(!0), l(h, null, P($, (z, oe) => (t(), l("span", {
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
                        $ ? (t(), S(L, {
                          key: 0,
                          text: "Activo",
                          className: "eit-badge__outline--secondary"
                        })) : c("", !0),
                        $ ? c("", !0) : (t(), S(L, {
                          key: 1,
                          text: "Inactivo",
                          className: "eit-badge__outline--gray"
                        }))
                      ], 64)) : c("", !0),
                      _($) ? (t(), S(L, {
                        key: 2,
                        text: $.name,
                        className: $.className
                      }, null, 8, ["text", "className"])) : c("", !0),
                      p($) ? (t(), l("span", He, v($), 1)) : c("", !0)
                    ], 64)) : c("", !0)
                  ]))), 128)),
                  o("td", Fe, [
                    o("div", Ie, [
                      o("a", Ue, [
                        f(w, { icon: "fa-solid fa-ellipsis" })
                      ]),
                      o("ul", Ke, [
                        e.viewRecord ? (t(), l("li", Ye, [
                          o("a", {
                            onClick: ($) => r(k),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            f(w, {
                              icon: "fa-regular fa-eye",
                              class: "eit-color--blue"
                            }),
                            x(" " + v(e.viewRecord), 1)
                          ], 8, Ge)
                        ])) : c("", !0),
                        e.editRecord ? (t(), l("li", Ze, [
                          o("a", {
                            onClick: ($) => n(k),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            f(w, {
                              icon: "fa-solid fa-square-pen",
                              class: "eit-color--yellow"
                            }),
                            x(" " + v(e.editRecord), 1)
                          ], 8, Je)
                        ])) : c("", !0),
                        e.downloadRecord ? (t(), l("li", Qe, [
                          o("a", {
                            onClick: ($) => u(k),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            f(w, {
                              icon: "fa-solid fa-download",
                              class: "eit-color--blue"
                            }),
                            x(" " + v(e.downloadRecord), 1)
                          ], 8, We)
                        ])) : c("", !0),
                        e.deleteRecord || e.enabledDisabledRecord ? (t(), l("li", Xe, tt)) : c("", !0),
                        e.enabledDisabledRecord ? (t(), l("li", ot, [
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
                          ], 8, st)
                        ])) : c("", !0),
                        e.deleteRecord ? (t(), l("li", nt, [
                          o("a", {
                            onClick: ($) => d(B),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            f(w, {
                              icon: "fa-solid fa-trash",
                              class: "eit-color--red"
                            }),
                            x(" " + v(e.deleteRecord), 1)
                          ], 8, lt)
                        ])) : c("", !0)
                      ])
                    ]),
                    o("div", at, [
                      it,
                      o("div", rt, [
                        e.viewRecord ? (t(), l("a", {
                          key: 0,
                          onClick: ($) => r(k),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          f(w, {
                            icon: "fa-regular fa-eye",
                            class: "eit-color--blue"
                          })
                        ], 8, ct)) : c("", !0),
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
                        ], 8, dt)) : c("", !0),
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
                        ], 8, ut)) : c("", !0),
                        e.enabledDisabledRecord ? (t(), l(h, { key: 3 }, [
                          k.status ? c("", !0) : E((t(), l("a", {
                            key: 0,
                            onClick: ($) => m(k),
                            href: "javascript:",
                            class: "eit-btn eit-btn-outline--gray eit-btn--square"
                          }, [
                            f(w, {
                              icon: "fa-regular fa-circle-check",
                              class: "eit-color--green"
                            })
                          ], 8, ft)), [
                            [U, { content: "Habilitar", theme: "main" }]
                          ]),
                          k.status ? E((t(), l("a", {
                            key: 1,
                            onClick: ($) => m(k),
                            href: "javascript:",
                            class: "eit-btn eit-btn-outline--gray eit-btn--square"
                          }, [
                            f(w, {
                              icon: "fa-solid fa-ban",
                              class: "eit-color--red"
                            })
                          ], 8, mt)), [
                            [U, { content: "Deshabilitar", theme: "main" }]
                          ]) : c("", !0)
                        ], 64)) : c("", !0),
                        e.deleteRecord ? (t(), l("a", {
                          key: 4,
                          onClick: ($) => d(B),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          f(w, {
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
}, ht = { class: "eit-paginator gap-2" }, yt = ["disabled"], gt = { class: "eit-color--text eit-font__size--x1" }, vt = ["disabled"], bt = {
  __name: "PaginationComponent",
  props: {
    data: {
      type: Object,
      required: !0
    }
  },
  emits: ["updatePaginator"],
  setup(e, { emit: a }) {
    const i = e, s = a, r = q(i.data.currentPage), n = () => r.value++, d = () => r.value--, u = () => {
      r.value <= 0 && (r.value = 1), r.value > i.data.finalPage && (r.value = i.data.finalPage);
    }, g = (m) => {
      m.target.select();
    };
    return T(r, () => {
      r.value > 0 && r.value <= i.data.finalPage && s("updatePaginator", r.value);
    }), V(() => {
      i.data && (r.value = i.data.currentPage);
    }), (m, p) => {
      const _ = D("font-awesome-icon");
      return t(), l("div", ht, [
        o("button", {
          onClick: d,
          disabled: e.data.currentPage === 1,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          f(_, { icon: "fa-solid fa-chevron-left" })
        ], 8, yt),
        E(o("input", {
          type: "number",
          "onUpdate:modelValue": p[0] || (p[0] = (b) => r.value = b),
          onInput: u,
          onKeyup: Q(u, ["enter"]),
          onBlur: u,
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
        o("span", gt, [
          x(" de " + v(e.data.finalPage) + " ", 1),
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
        ], 8, vt)
      ]);
    };
  }
}, kt = { class: "row" }, $t = { class: "col-12" }, xt = { class: "d-flex" }, wt = { class: "flex-shrink-0" }, Ct = { class: "flex-grow-1" }, Rt = { class: "d-flex" }, St = { class: "flex-grow-1 d-flex flex-column ms-3" }, jt = { class: "eit-font--primary mb-0" }, qt = { class: "eit-color--text mb-0" }, Dt = { class: "flex-shrink-0" }, Pt = {
  key: 0,
  class: "dropdown eit-dropdown d-none d-lg-block"
}, Bt = {
  href: "javascript:",
  class: "eit-btn-action",
  "data-bs-toggle": "dropdown"
}, Tt = { class: "dropdown-menu dropdown-custom-menu" }, Nt = {
  key: 0,
  class: "mx-2"
}, Lt = {
  key: 1,
  class: "mx-2"
}, At = {
  key: 2,
  class: "m-2"
}, Et = /* @__PURE__ */ o("div", { class: "eit-border--bottom eit-border--color" }, null, -1), Mt = [
  Et
], Vt = {
  key: 3,
  class: "mx-2"
}, zt = {
  key: 4,
  class: "mx-2"
}, Ot = { class: "row flex-grow-1" }, Ht = { class: "col-12 d-flex flex-column flex-grow-1" }, Ft = { class: "eit-slide__content flex-grow-1" }, It = {
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
  setup(e, { emit: a }) {
    const i = e, s = a, r = () => {
      s("emitslide");
    }, n = (m) => {
      s("enabledDisabledRecord", m);
    }, d = (m) => {
      s("editRecord", m);
    }, u = (m) => {
      s("deleteRecord", m);
    }, g = (m) => {
      s("downloadRecord", m);
    };
    return (m, p) => {
      const _ = D("font-awesome-icon");
      return t(), l("section", {
        class: C(["eit-slide d-flex flex-column", [e.slide && "eit-slide--right", e.slideSmall && "eit-slide--small"]])
      }, [
        i.loading ? (t(), S(I, {
          key: 0,
          type: "detail"
        })) : c("", !0),
        i.loading ? c("", !0) : (t(), l(h, { key: 1 }, [
          o("div", kt, [
            o("div", $t, [
              o("div", xt, [
                o("div", wt, [
                  o("button", {
                    class: "eit-btn eit-btn--gray eit-btn--square",
                    onClick: r
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
                o("div", Ct, [
                  o("div", Rt, [
                    o("div", St, [
                      o("h4", jt, [
                        o("strong", null, [
                          j(m.$slots, "title")
                        ])
                      ]),
                      o("p", qt, [
                        j(m.$slots, "subtitle")
                      ])
                    ]),
                    o("div", Dt, [
                      i.dropdown ? (t(), l("div", Pt, [
                        o("a", Bt, [
                          f(_, { icon: "fa-solid fa-ellipsis" })
                        ]),
                        o("ul", Tt, [
                          i.editRecord ? (t(), l("li", Nt, [
                            o("a", {
                              onClick: p[0] || (p[0] = (b) => d(i.record)),
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              f(_, {
                                icon: "fa-solid fa-square-pen",
                                class: "eit-color--yellow"
                              }),
                              x(" " + v(e.editRecord), 1)
                            ])
                          ])) : c("", !0),
                          i.downloadRecord ? (t(), l("li", Lt, [
                            o("a", {
                              onClick: p[1] || (p[1] = (b) => g(i.record)),
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              f(_, {
                                icon: "fa-solid fa-download",
                                class: "eit-color--blue"
                              }),
                              x(" " + v(i.downloadRecord), 1)
                            ])
                          ])) : c("", !0),
                          e.deleteRecord || e.enabledDisabledRecord ? (t(), l("li", At, Mt)) : c("", !0),
                          i.enabledDisabledRecord ? (t(), l("li", Vt, [
                            o("a", {
                              onClick: p[2] || (p[2] = (b) => n(e.record)),
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              i.record.status ? c("", !0) : (t(), l(h, { key: 0 }, [
                                f(_, {
                                  icon: "fa-regular fa-circle-check",
                                  class: "eit-color--green"
                                }),
                                x(" Habilitar ")
                              ], 64)),
                              i.record.status ? (t(), l(h, { key: 1 }, [
                                f(_, {
                                  icon: "fa-solid fa-ban",
                                  class: "eit-color--red"
                                }),
                                x(" Deshabilitar ")
                              ], 64)) : c("", !0)
                            ])
                          ])) : c("", !0),
                          i.deleteRecord ? (t(), l("li", zt, [
                            o("a", {
                              onClick: p[3] || (p[3] = (b) => u(i.record)),
                              class: "dropdown-item dropdown-custom-menu-item eit-color--red",
                              href: "javascript:"
                            }, [
                              f(_, {
                                icon: "fa-solid fa-trash",
                                class: "eit-color--red"
                              }),
                              x(" " + v(i.deleteRecord), 1)
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
            o("div", Ht, [
              o("div", Ft, [
                j(m.$slots, "component")
              ])
            ])
          ]),
          j(m.$slots, "footer")
        ], 64))
      ], 2);
    };
  }
}, Ut = { class: "d-flex justify-content-between align-items-center" }, Kt = ["onClick"], Yt = {
  key: 0,
  class: "eit-tabs__badge"
}, Gt = { class: "row" }, Zt = { class: "col-12" }, Jt = {
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
    const a = e, i = (n) => n < 99 ? n : "+99", s = q(0), r = (n) => {
      s.value = n;
    };
    return (n, d) => (t(), l(h, null, [
      o("div", Ut, [
        o("ul", {
          class: C(`eit-tabs ${a.className}`)
        }, [
          (t(!0), l(h, null, P(e.data, (u, g) => (t(), l("li", {
            key: g,
            class: "eit-tabs__item"
          }, [
            o("a", {
              href: "javascript:",
              onClick: (m) => r(g),
              class: C(["eit-tabs__item__link", s.value === g ? "active" : ""])
            }, [
              x(v(u.name) + " ", 1),
              u.number ? (t(), l("span", Yt, v(i(u.number)), 1)) : c("", !0)
            ], 10, Kt)
          ]))), 128))
        ], 2),
        j(n.$slots, "dropdown")
      ]),
      o("div", Gt, [
        o("div", Zt, [
          j(n.$slots, `tab-${s.value}`)
        ])
      ])
    ], 64));
  }
}, Qt = ["innerHTML"], Wt = {
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
    const a = e, i = q("");
    return (async () => {
      const r = `${a.code}`;
      i.value = await ie(r, {
        lang: a.lang,
        theme: a.theme
      });
    })(), (r, n) => (t(), l("div", { innerHTML: i.value }, null, 8, Qt));
  }
}, Xt = "" + new URL("img/loading.svg", import.meta.url).href, eo = { class: "p-3 eit-loading" }, te = {
  __name: "LoadingComponent",
  props: {
    size: {
      type: String,
      required: !1,
      default: "100"
    }
  },
  setup(e) {
    const a = e;
    return (i, s) => (t(), l("div", eo, [
      o("img", {
        style: H(`width:${a.size}px`),
        src: Xt
      }, null, 4)
    ]));
  }
}, to = { class: "d-flex justify-content-between align-items-center" }, oo = { class: "eit-dialog__body" }, so = { class: "d-flex gap-2 justify-content-end mt-3" }, no = {
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
  setup(e, { expose: a, emit: i }) {
    const s = e, r = i, n = q(null), d = () => {
      n.value.showModal(), n.value.classList.add("show");
    }, u = () => {
      n.value.close(), n.value.classList.remove("show"), r("emitCloseDialog");
    }, g = () => {
      r("emitSubmit");
    };
    return a({ showDialog: d, closeDialog: u }), (m, p) => {
      const _ = D("font-awesome-icon");
      return t(), l("dialog", {
        ref_key: "dialog",
        ref: n,
        class: C(["eit-dialog", s.className])
      }, [
        e.loading ? (t(), S(te, {
          key: 0,
          size: "70"
        })) : c("", !0),
        e.loading ? c("", !0) : (t(), l(h, { key: 1 }, [
          o("div", to, [
            j(m.$slots, "head"),
            o("button", {
              onClick: u,
              class: "eit-dialog__close"
            }, [
              f(_, { icon: ["fas", "xmark"] })
            ])
          ]),
          o("div", oo, [
            j(m.$slots, "content")
          ]),
          o("div", so, [
            f(F, {
              onClick: u,
              className: "eit-btn-outline--gray",
              text: "Volver"
            }),
            s.btnSubmit ? (t(), S(F, {
              key: 0,
              className: "eit-btn--primary",
              text: "Guardar",
              loadingText: "Guardando...",
              loading: e.loadingSubmit,
              onEmitEvent: g,
              isDisabled: e.disabledSubmit
            }, null, 8, ["loading", "isDisabled"])) : c("", !0)
          ])
        ], 64))
      ], 2);
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
    const a = e;
    return (i, s) => (t(), l("div", lo, [
      o("div", ao, [
        io,
        o("div", ro, [
          o("table", co, [
            uo,
            o("tbody", null, [
              (t(!0), l(h, null, P(a.data, (r) => (t(), l("tr", {
                key: r.name
              }, [
                o("td", null, [
                  f(L, {
                    text: r.name,
                    className: "eit-badge__outline--gray"
                  }, null, 8, ["text"])
                ]),
                o("td", null, [
                  o("code", null, v(r.type), 1)
                ]),
                o("td", null, [
                  o("code", null, v(r.default), 1)
                ])
              ]))), 128))
            ])
          ])
        ])
      ])
    ]));
  }
}, mo = { class: "eit-progress eit-progress--30" }, _o = {
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
    const a = e;
    return (i, s) => (t(), l("div", mo, [
      o("div", {
        class: C(["eit-progress__bar", `eit-progress__bar--${a.type}`]),
        style: H(`width: ${a.percentage}%`)
      }, v(a.percentage) + "% ", 7),
      o("div", {
        class: "eit-progress__bar eit-progress__bar--transparent",
        style: H(`width: ${100 - a.percentage}%`)
      }, v(100 - a.percentage) + "% ", 5)
    ]));
  }
}, po = { class: "d-flex" }, ho = { class: "flex-shrink-0 eit-toast__left" }, yo = {
  key: "success",
  class: "eit-toast__icon eit-font__size--x7"
}, go = {
  key: "error",
  class: "eit-toast__icon eit-font__size--x7"
}, vo = {
  key: "warning",
  class: "eit-toast__icon eit-font__size--x7"
}, bo = {
  key: "info",
  class: "eit-toast__icon eit-font__size--x7"
}, ko = { class: "flex-grow-1 ms-3" }, $o = { class: "d-flex" }, xo = { class: "flex-grow-1 me-3" }, wo = { class: "eit-toast__title" }, Co = { class: "eit-toast__text" }, Ro = { class: "flex-shrink-0" }, So = {
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
  setup(e, { expose: a }) {
    const i = e, s = q(!1), r = q("hidden"), n = q(""), d = R(() => ({
      show: s.value,
      hide: !s.value,
      [i.position]: i.position,
      hidden: r.value
    })), u = () => {
      clearTimeout(n.value), s.value = !0, r.value = "", n.value = setTimeout(() => {
        s.value = !1, setTimeout(() => r.value = "hidden", "300");
      }, i.visible);
    }, g = () => {
      s.value = !1, setTimeout(() => r.value = "hidden", "300"), clearTimeout(n.value);
    };
    return a({ handleShowToast: u, handleCloseToast: g }), (m, p) => {
      const _ = D("font-awesome-icon");
      return t(), l("div", {
        class: C(["eit-toast__container", d.value])
      }, [
        o("div", {
          class: C(["eit-toast box-shadow", `eit-toast--${i.data.type}`])
        }, [
          o("div", po, [
            o("div", ho, [
              i.type === "success" ? (t(), l("span", yo, [
                f(_, { icon: "fa-solid fa-circle-check" })
              ])) : c("", !0),
              i.type === "error" ? (t(), l("span", go, [
                f(_, { icon: "fa-solid fa-circle-xmark" })
              ])) : c("", !0),
              i.type === "warning" ? (t(), l("span", vo, [
                f(_, { icon: "fa-solid fa-triangle-exclamation" })
              ])) : c("", !0),
              i.type === "info" ? (t(), l("span", bo, [
                f(_, { icon: "fa-solid fa-circle-info" })
              ])) : c("", !0)
            ]),
            o("div", ko, [
              o("div", $o, [
                o("div", xo, [
                  o("p", wo, [
                    i.data.code ? (t(), l(h, { key: 0 }, [
                      x(v(i.data.code), 1)
                    ], 64)) : c("", !0),
                    x(" " + v(i.data.title), 1)
                  ]),
                  o("p", Co, v(i.data.message), 1)
                ]),
                o("div", Ro, [
                  o("a", {
                    onClick: p[0] || (p[0] = (b) => g()),
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
}, jo = ["type", "maxlength", "placeholder"], qo = {
  key: 0,
  class: "eit-label-float"
}, Do = {
  key: 1,
  class: "eit-input__display__icon eit-input__display__float-left--icon"
}, Po = {
  key: 2,
  class: "eit-input__display__icon eit-input__display__float-right--icon"
}, Bo = {
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
  setup(e, { expose: a, emit: i }) {
    const s = e, r = i, n = q(""), d = R(
      () => s.validation ? s.validation(n.value) : !0
    ), u = R(() => !d.value && s.requiredField && s.error ? "is-invalid" : ""), g = R(() => s.floatLabel ? "" : s.placeHolder), m = R(() => [
      s.floatLabel || s.floatLeft || s.floatRight ? "eit-input__display" : "",
      s.floatLeft ? "eit-input__display__float-left" : "",
      s.floatRight ? "eit-input__display__float-right" : ""
    ]), p = () => {
      r("emitPressEnter");
    }, _ = () => {
      n.value = "";
    };
    return T(
      () => s.input,
      (b) => {
        b && (n.value = b);
      }
    ), T(n, () => {
      r("emitValue", d.value ? n.value : "");
    }), V(() => {
      s.inputMask && (n.value = s.inputMask(n.value)), s.submitted && _();
    }), a({ clean: _ }), (b, y) => (t(), l("div", {
      class: C(m.value)
    }, [
      E(o("input", {
        autocomplete: "off",
        class: C(["form-control eit-input", u.value]),
        type: e.inputType,
        "onUpdate:modelValue": y[0] || (y[0] = (N) => n.value = N),
        maxlength: s.maxLength,
        onKeypress: y[1] || (y[1] = (N) => s.keyPress && s.keyPress(N)),
        placeholder: g.value,
        onKeyup: Q(p, ["enter"])
      }, null, 42, jo), [
        [
          ae,
          n.value,
          void 0,
          { trim: !0 }
        ]
      ]),
      s.floatLabel ? (t(), l("label", qo, v(s.floatLabel), 1)) : c("", !0),
      s.floatLeft ? (t(), l("span", Do, [
        j(b.$slots, "float-left")
      ])) : c("", !0),
      s.floatRight ? (t(), l("span", Po, [
        j(b.$slots, "float-right")
      ])) : c("", !0)
    ], 2));
  }
}, To = {
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
  setup(e, { expose: a, emit: i }) {
    const s = e, r = i, n = q(null), d = R(
      () => s.validation ? s.validation(n.value) : !0
    ), u = R(() => !d.value && s.requiredField && s.error ? "is-invalid" : ""), g = () => Array.isArray(n.value) ? s.data.filter((b) => !n.value.some((y) => y.id === b.id)) : s.data, m = () => n.value ? s.data.filter((b) => b.id !== n.value.id) : s.data, p = R(() => s.multiple ? g() : m());
    T(
      () => s.selected,
      (b) => {
        b && (n.value = b);
      },
      { immediate: !0 }
    ), T(n, () => {
      r("emitValue", d.value ? n.value : "");
    }), V(() => {
      s.submitted && _();
    });
    const _ = () => {
      n.value = s.multiple ? [] : null;
    };
    return a({ clean: _ }), (b, y) => {
      const N = D("v-select");
      return t(), S(N, {
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
        "no-options": O(() => [
          x(" No hay más resultados. ")
        ]),
        _: 1
      }, 8, ["options", "modelValue", "label", "multiple", "placeholder", "class", "clearable", "disabled"]);
    };
  }
}, No = ["maxlength", "placeholder"], Lo = {
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
  setup(e, { expose: a, emit: i }) {
    const s = e, r = i, n = q(null), d = q(""), u = R(() => s.validation && s.validation(d.value)), g = R(() => !u.value && s.requiredField && s.error ? "is-invalid" : ""), m = () => {
      d.value = "";
    };
    return T(
      () => s.input,
      (p) => {
        p && (d.value = p);
      }
    ), T(d, () => {
      n.value.style.height = "50px", n.value.style.height = `${n.value.scrollHeight}px`, r("emitValue", u.value ? d.value : "");
    }), V(() => {
      s.submitted && m();
    }), a({ clean: m }), (p, _) => E((t(), l("textarea", {
      ref_key: "textarea",
      ref: n,
      "onUpdate:modelValue": _[0] || (_[0] = (b) => d.value = b),
      maxlength: e.maxLength,
      autocomplete: "off",
      class: C(["form-control eit-textarea eit-textarea-resize", g.value]),
      placeholder: e.placeHolder
    }, null, 10, No)), [
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
  AlertComponent: ee,
  BadgeComponent: L,
  BreadcrumbComponent: pe,
  ButtonComponent: F,
  DetailComponent: It,
  DialogComponent: no,
  HighlightComponent: Wt,
  InputComponent: Bo,
  LoadingComponent: te,
  PaginationComponent: bt,
  ProgressBarComponent: _o,
  PropsComponent: fo,
  SelectComponent: To,
  SkeletonComponent: I,
  TabComponent: Jt,
  TableComponent: pt,
  TextareaResizeComponent: Lo,
  ToastComponent: So
}, Symbol.toStringTag, { value: "Module" }));
function Ao(e, a) {
  const i = X(), s = R(() => i.path === "/login" ? a.platformDarkTheme ? a.logotipo.logo_dark : a.logotipo.logo_light : e.config.darkTheme ? a.logotipo.logo_dark : a.logotipo.logo_light), r = R(() => e.config.darkTheme ? a.logotipo.isotipo_dark : a.logotipo.isotipo_light);
  return { logotipo: s, isotipo: r };
}
const Eo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useLogos: Ao
}, Symbol.toStringTag, { value: "Module" }));
function Mo() {
  function e(n) {
    return !(n == null || typeof n == "string" && n.trim() === "" || typeof n == "object" && Object.keys(n).length === 0 || Array.isArray(n) && n.length === 0);
  }
  function a(n) {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(n);
  }
  function i(n) {
    if (n.length >= 11 && n.length <= 12 && /[.-]/.test(n)) return !0;
    if (n.length < 11) return !1;
  }
  function s(n) {
    const d = n.length >= 8, u = /[A-Z]/.test(n), g = /[a-z]/.test(n), m = /[0-9]/.test(n), p = /[!@#$%^&*(),.?":{}|<>]/.test(n);
    return d && u && g && m && p;
  }
  function r(n) {
    return /^\+\d{3} \d{4}-\d{4}$/.test(n);
  }
  return {
    validateDefault: e,
    validateEmail: a,
    validateRut: i,
    validatePassword: s,
    validatePhone: r
  };
}
function Vo() {
  function e(s) {
    return s.replace(/[.-]/g, "").replace(/^(\d{1,2})(\d{3})(\d{3})(\w{1})$/, "$1.$2.$3-$4");
  }
  function a(s) {
    return s.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  function i(s) {
    return s.replace(/\D/g, "").replace(/^(\d{3})(\d{4})(\d{4})$/, "+$1 $2-$3");
  }
  return { inputMaskRut: e, inputMaskCurrency: a, inputMaskPhone: i };
}
function zo() {
  function e(a) {
    let i = String.fromCharCode(a.keyCode);
    if (/^[0-9Kk.-]/.test(i)) return !0;
    a.preventDefault();
  }
  return { keyPressRut: e };
}
function Oo() {
  function e(a) {
    const { sort: i, data: s } = a, { keys: r, index: n, asc: d } = i, u = r[n];
    return s.sort((g, m) => {
      let p = g[u], _ = m[u];
      return typeof p == "object" && p !== null && (p = p.name, _ = _.name), p === _ ? 0 : (p > _ ? 1 : -1) * (d ? 1 : -1);
    }), s;
  }
  return { sortTable: e };
}
M.extend(re);
M.locale("es");
function Ho() {
  function e(r) {
    return M(r).format("DD/MM/YYYY");
  }
  function a(r) {
    return M(r).fromNow();
  }
  function i(r) {
    let n = r.replace(/[^0-9kK]/g, ""), d = n.slice(0, -1).replace(/\B(?=(\d{3})+(?!\d))/g, "."), u = n.slice(-1).toUpperCase();
    return `${d}-${u}`;
  }
  function s(r) {
    return r.charAt(0).toUpperCase() + r.slice(1).toLowerCase();
  }
  return { formatDate: e, formatDateAgo: a, formatRut: i, formatCapitalize: s };
}
function Fo() {
  function e(a, i) {
    return i ? {
      content: a,
      theme: "main",
      placement: "right",
      appendTo: "parent"
    } : { content: a, theme: "main", placement: "right" };
  }
  return { handleTooltip: e };
}
const Io = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useFormat: Ho,
  useInputMask: Vo,
  useKeypress: zo,
  useTable: Oo,
  useTooltip: Fo,
  useValidator: Mo
}, Symbol.toStringTag, { value: "Module" })), Qo = {
  install(e) {
    Object.keys(J).forEach((a) => {
      e.component(a, J[a]);
    });
  },
  Composables: Eo,
  Utils: Io
};
export {
  Qo as default
};
