import { computed as S, resolveComponent as D, openBlock as t, createElementBlock as l, normalizeClass as C, Fragment as h, createTextVNode as x, toDisplayString as v, createCommentVNode as c, createBlock as R, createElementVNode as s, createVNode as f, withCtx as O, renderList as P, renderSlot as j, mergeProps as se, createStaticVNode as ne, resolveDirective as le, withDirectives as M, ref as q, watch as T, watchEffect as z, withKeys as Q, vModelText as W, normalizeStyle as H, vModelDynamic as ae } from "vue";
import { useRoute as X } from "vue-router";
import { codeToHtml as ie } from "shiki";
import V from "dayjs";
import re from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";
const ce = ["disabled"], de = /* @__PURE__ */ s("div", { class: "spinner-border spinner-border-sm me-1" }, null, -1), F = {
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
    const a = e, o = i, r = S(() => ["eit-btn", `${a.className}`]), n = () => {
      o("emitEvent");
    };
    return (d, u) => {
      const g = D("font-awesome-icon");
      return t(), l("button", {
        onClick: n,
        class: C([r.value, "d-flex align-items-center justify-content-center"]),
        disabled: a.isDisabled
      }, [
        a.loading ? (t(), l(h, { key: 0 }, [
          de,
          x(" " + v(a.loadingText), 1)
        ], 64)) : c("", !0),
        a.loading ? c("", !0) : (t(), l(h, { key: 1 }, [
          a.icon ? (t(), R(g, {
            key: 0,
            icon: a.icon,
            class: "me-1"
          }, null, 8, ["icon"])) : c("", !0),
          x(" " + v(e.text), 1)
        ], 64))
      ], 10, ce);
    };
  }
}, ue = { "aria-label": "breadcrumb" }, fe = { class: "eit-breadcrumb" }, me = /* @__PURE__ */ s("span", { class: "px-2 eit-color--text-soft" }, "/", -1), _e = {
  key: 1,
  class: "eit-color--text-soft"
}, pe = {
  __name: "BreadcrumbComponent",
  setup(e) {
    const i = X(), a = S(() => {
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
      return t(), l("nav", ue, [
        s("ul", fe, [
          s("li", null, [
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
          (t(!0), l(h, null, P(a.value, (u, g) => (t(), l("li", {
            key: g,
            class: "eit-breadcrumb__item"
          }, [
            j(o.$slots, u.name, se({ ref_for: !0 }, u), () => [
              u.last ? (t(), l("span", _e, v(u.title), 1)) : (t(), R(d, {
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
    const i = e;
    return (a, o) => {
      const r = D("font-awesome-icon");
      return t(), l("span", {
        key: `badge-${i.text}`,
        class: C(`eit-badge ${i.className}`)
      }, [
        i.icon ? (t(), R(r, {
          key: 0,
          icon: i.icon,
          class: "me-1"
        }, null, 8, ["icon"])) : c("", !0),
        s("span", {
          innerHTML: i.text
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
}, ve = /* @__PURE__ */ s("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "80%" }
}, null, -1), be = [
  ve
], ke = { key: 1 }, $e = /* @__PURE__ */ s("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "60%" }
}, null, -1), xe = [
  $e
], we = {
  key: 0,
  class: "eit-skeleton__table-first-td"
}, Ce = /* @__PURE__ */ s("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), Se = [
  Ce
], Re = { key: 1 }, je = /* @__PURE__ */ s("div", {
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
    const i = e;
    return (a, o) => (t(), l(h, null, [
      i.type === "table" ? (t(), l("table", ye, [
        s("thead", null, [
          s("tr", null, [
            (t(!0), l(h, null, P(i.table.column, (r) => (t(), l(h, { key: r }, [
              r === 1 ? (t(), l("th", ge, be)) : c("", !0),
              r > 1 ? (t(), l("th", ke, xe)) : c("", !0)
            ], 64))), 128))
          ])
        ]),
        s("tbody", null, [
          (t(!0), l(h, null, P(i.table.row, (r) => (t(), l("tr", { key: r }, [
            (t(!0), l(h, null, P(i.table.column, (n) => (t(), l(h, { key: n }, [
              n === 1 ? (t(), l("td", we, Se)) : c("", !0),
              n > 1 ? (t(), l("td", Re, qe)) : c("", !0)
            ], 64))), 128))
          ]))), 128))
        ])
      ])) : c("", !0),
      i.type === "detail" ? (t(), l(h, { key: 1 }, [
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
      default: { active: !1, show: !1 }
    }
  },
  setup(e) {
    const i = e;
    return (a, o) => {
      const r = D("font-awesome-icon");
      return t(), l("div", {
        class: C(`eit-alert eit-alert--${i.type} ${i.animation.active ? "eit-alert--animation" : "eit-alert--default"} ${i.animation.show ? "eit-alert--animation--show" : ""}`)
      }, [
        s("div", Pe, [
          s("div", Be, [
            f(r, {
              icon: i.icon,
              class: C(e.iconClass)
            }, null, 8, ["icon", "class"])
          ]),
          s("div", {
            class: "flex-grow-1 eit-alert__text",
            innerHTML: i.message
          }, null, 8, Te)
        ])
      ], 2);
    };
  }
}, Ne = { class: "row" }, Le = { class: "col-12" }, Ae = { class: "table eit-table eit-table-responsive" }, Me = ["onClick"], Ve = /* @__PURE__ */ s("th", {
  scope: "col",
  class: "text-center"
}, "Acciones", -1), ze = { class: "pe-3 d-lg-none" }, Ee = ["onClick"], Oe = {
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
}, et = /* @__PURE__ */ s("div", { class: "eit-border--bottom eit-border--color" }, null, -1), tt = [
  et
], ot = {
  key: 4,
  class: "mx-2"
}, st = ["onClick"], nt = {
  key: 5,
  class: "mx-2"
}, lt = ["onClick"], at = { class: "d-flex w-100 justify-content-between align-items-center d-lg-none text-end" }, it = /* @__PURE__ */ s("strong", null, "Acciones:", -1), rt = { class: "d-flex flex-wrap gap-2 ms-3" }, ct = ["onClick"], dt = ["onClick"], ut = ["onClick"], ft = ["onClick"], mt = ["onClick"], _t = ["onClick"], pt = {
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
    }, n = (y) => {
      o("editRecord", y);
    }, d = (y) => {
      o("deleteRecord", y);
    }, u = (y) => {
      o("downloadRecord", y);
    }, g = (y) => {
      o("updateSort", { index: y, asc: !a.sort.asc });
    }, m = (y) => {
      o("enabledDisabledRecord", y);
    }, p = (y) => typeof y == "string", _ = (y) => typeof y == "object" && !Array.isArray(y), b = (y) => Array.isArray(y);
    return (y, N) => {
      var K, Y, G, Z;
      const w = D("font-awesome-icon"), U = le("tippy");
      return t(), l("div", Ne, [
        s("div", Le, [
          e.loading ? (t(), R(I, {
            key: 0,
            type: "table",
            table: { row: (K = e.skeleton) == null ? void 0 : K.row, column: (Y = e.skeleton) == null ? void 0 : Y.column }
          }, null, 8, ["table"])) : c("", !0),
          !e.loading && !((G = e.data) != null && G.length) ? (t(), R(ee, {
            key: 1,
            ref: "alert",
            class: "mb-3",
            type: "info",
            icon: "fa-solid fa-info",
            message: "<strong>No hay resultados</strong> para tu búsqueda."
          }, null, 512)) : c("", !0),
          !e.loading && ((Z = e.data) != null && Z.length) ? (t(), l(h, { key: 2 }, [
            s("table", Ae, [
              s("thead", null, [
                s("tr", null, [
                  (t(!0), l(h, null, P(e.columns, (k, B) => (t(), l("th", {
                    key: `column-${B}`,
                    scope: "col"
                  }, [
                    s("a", {
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
                    ], 8, Me)
                  ]))), 128)),
                  Ve
                ])
              ]),
              s("tbody", null, [
                (t(!0), l(h, null, P(e.data, (k, B) => (t(), l("tr", {
                  key: `row-${B}`
                }, [
                  (t(!0), l(h, null, P(k, ($, A) => (t(), l("td", {
                    key: `value-${A}`
                  }, [
                    s("strong", ze, v(e.columns[Object.keys(k).indexOf(A)]) + ":", 1),
                    Object.keys(k)[e.columnLink] === A ? (t(), l(h, { key: 0 }, [
                      e.viewRecord ? (t(), l("a", {
                        key: 0,
                        onClick: (E) => r(k),
                        href: "javascript:",
                        class: "eit-table__link"
                      }, v($), 9, Ee)) : c("", !0),
                      e.viewRecord ? c("", !0) : (t(), l(h, { key: 1 }, [
                        x(v($), 1)
                      ], 64))
                    ], 64)) : c("", !0),
                    Object.keys(k)[e.columnLink] !== A ? (t(), l(h, { key: 1 }, [
                      b($) ? (t(), l("div", Oe, [
                        (t(!0), l(h, null, P($, (E, oe) => (t(), l("span", {
                          key: `value-array-${oe}`,
                          class: "d-flex flex-wrap gap-1"
                        }, [
                          f(L, {
                            text: E.name,
                            className: E.className
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
                      p($) ? (t(), l("span", He, v($), 1)) : c("", !0)
                    ], 64)) : c("", !0)
                  ]))), 128)),
                  s("td", Fe, [
                    s("div", Ie, [
                      s("a", Ue, [
                        f(w, { icon: "fa-solid fa-ellipsis" })
                      ]),
                      s("ul", Ke, [
                        e.viewRecord ? (t(), l("li", Ye, [
                          s("a", {
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
                          s("a", {
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
                          s("a", {
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
                          s("a", {
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
                          s("a", {
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
                    s("div", at, [
                      it,
                      s("div", rt, [
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
                          k.status ? c("", !0) : M((t(), l("a", {
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
                          k.status ? M((t(), l("a", {
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
  setup(e, { emit: i }) {
    const a = e, o = i, r = q(a.data.currentPage), n = () => r.value++, d = () => r.value--, u = () => {
      r.value <= 0 && (r.value = 1), r.value > a.data.finalPage && (r.value = a.data.finalPage);
    }, g = (m) => {
      m.target.select();
    };
    return T(r, () => {
      r.value > 0 && r.value <= a.data.finalPage && o("updatePaginator", r.value);
    }), z(() => {
      a.data && (r.value = a.data.currentPage);
    }), (m, p) => {
      const _ = D("font-awesome-icon");
      return t(), l("div", ht, [
        s("button", {
          onClick: d,
          disabled: e.data.currentPage === 1,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          f(_, { icon: "fa-solid fa-chevron-left" })
        ], 8, yt),
        M(s("input", {
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
        s("span", gt, [
          x(" de " + v(e.data.finalPage) + " ", 1),
          e.data.finalPage === 1 ? (t(), l(h, { key: 0 }, [
            x(" página ")
          ], 64)) : c("", !0),
          e.data.finalPage > 1 ? (t(), l(h, { key: 1 }, [
            x(" páginas ")
          ], 64)) : c("", !0)
        ]),
        s("button", {
          onClick: n,
          disabled: e.data.currentPage === e.data.finalPage,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          f(_, { icon: "fa-solid fa-chevron-right" })
        ], 8, vt)
      ]);
    };
  }
}, kt = { class: "row" }, $t = { class: "col-12" }, xt = { class: "d-flex" }, wt = { class: "flex-shrink-0" }, Ct = { class: "flex-grow-1" }, St = { class: "d-flex" }, Rt = { class: "flex-grow-1 d-flex flex-column ms-3" }, jt = { class: "eit-font--primary mb-0" }, qt = { class: "eit-color--text mb-0" }, Dt = { class: "flex-shrink-0" }, Pt = {
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
}, Mt = /* @__PURE__ */ s("div", { class: "eit-border--bottom eit-border--color" }, null, -1), Vt = [
  Mt
], zt = {
  key: 3,
  class: "mx-2"
}, Et = {
  key: 4,
  class: "mx-2"
}, Ot = { class: "row flex-grow-1" }, Ht = { class: "col-12 d-flex flex-column flex-grow-1" }, Ft = { class: "eit-slide__content flex-grow-1" }, It = {
  __name: "DetailComponent",
  props: {
    //Data
    record: {
      type: Object,
      default: {}
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
    }, n = (m) => {
      o("enabledDisabledRecord", m);
    }, d = (m) => {
      o("editRecord", m);
    }, u = (m) => {
      o("deleteRecord", m);
    }, g = (m) => {
      o("downloadRecord", m);
    };
    return (m, p) => {
      const _ = D("font-awesome-icon");
      return t(), l("section", {
        class: C(["eit-slide d-flex flex-column", [e.slide && "eit-slide--right", e.slideSmall && "eit-slide--small"]])
      }, [
        a.loading ? (t(), R(I, {
          key: 0,
          type: "detail"
        })) : c("", !0),
        a.loading ? c("", !0) : (t(), l(h, { key: 1 }, [
          s("div", kt, [
            s("div", $t, [
              s("div", xt, [
                s("div", wt, [
                  s("button", {
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
                s("div", Ct, [
                  s("div", St, [
                    s("div", Rt, [
                      s("h4", jt, [
                        s("strong", null, [
                          j(m.$slots, "title")
                        ])
                      ]),
                      s("p", qt, [
                        j(m.$slots, "subtitle")
                      ])
                    ]),
                    s("div", Dt, [
                      a.dropdown ? (t(), l("div", Pt, [
                        s("a", Bt, [
                          f(_, { icon: "fa-solid fa-ellipsis" })
                        ]),
                        s("ul", Tt, [
                          a.editRecord ? (t(), l("li", Nt, [
                            s("a", {
                              onClick: p[0] || (p[0] = (b) => d(a.record)),
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
                          a.downloadRecord ? (t(), l("li", Lt, [
                            s("a", {
                              onClick: p[1] || (p[1] = (b) => g(a.record)),
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              f(_, {
                                icon: "fa-solid fa-download",
                                class: "eit-color--blue"
                              }),
                              x(" " + v(a.downloadRecord), 1)
                            ])
                          ])) : c("", !0),
                          e.deleteRecord || e.enabledDisabledRecord ? (t(), l("li", At, Vt)) : c("", !0),
                          a.enabledDisabledRecord ? (t(), l("li", zt, [
                            s("a", {
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
                          a.deleteRecord ? (t(), l("li", Et, [
                            s("a", {
                              onClick: p[3] || (p[3] = (b) => u(a.record)),
                              class: "dropdown-item dropdown-custom-menu-item eit-color--red",
                              href: "javascript:"
                            }, [
                              f(_, {
                                icon: "fa-solid fa-trash",
                                class: "eit-color--red"
                              }),
                              x(" " + v(a.deleteRecord), 1)
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
          s("div", Ot, [
            s("div", Ht, [
              s("div", Ft, [
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
    const i = e, a = (n) => n < 99 ? n : "+99", o = q(0), r = (n) => {
      o.value = n;
    };
    return (n, d) => (t(), l(h, null, [
      s("div", Ut, [
        s("ul", {
          class: C(`eit-tabs ${i.className}`)
        }, [
          (t(!0), l(h, null, P(e.data, (u, g) => (t(), l("li", {
            key: g,
            class: "eit-tabs__item"
          }, [
            s("a", {
              href: "javascript:",
              onClick: (m) => r(g),
              class: C(["eit-tabs__item__link", o.value === g ? "active" : ""])
            }, [
              x(v(u.name) + " ", 1),
              u.number ? (t(), l("span", Yt, v(a(u.number)), 1)) : c("", !0)
            ], 10, Kt)
          ]))), 128))
        ], 2),
        j(n.$slots, "dropdown")
      ]),
      s("div", Gt, [
        s("div", Zt, [
          j(n.$slots, `tab-${o.value}`)
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
    const i = e, a = q("");
    return (async () => {
      const r = `${i.code}`;
      a.value = await ie(r, {
        lang: i.lang,
        theme: i.theme
      });
    })(), (r, n) => (t(), l("div", { innerHTML: a.value }, null, 8, Qt));
  }
}, Xt = "/img/loading.svg", eo = { class: "p-3 eit-loading" }, te = {
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
    return (a, o) => (t(), l("div", eo, [
      s("img", {
        style: H(`width:${i.size}px`),
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
  emits: [
    "emitSubmit",
    "emitCloseDialog"
  ],
  setup(e, { expose: i, emit: a }) {
    const o = e, r = a, n = q(null), d = () => {
      n.value.showModal(), n.value.classList.add("show");
    }, u = () => {
      n.value.close(), n.value.classList.remove("show"), r("emitCloseDialog");
    }, g = () => {
      r("emitSubmit");
    };
    return i({ showDialog: d, closeDialog: u }), (m, p) => {
      const _ = D("font-awesome-icon");
      return t(), l("dialog", {
        ref_key: "dialog",
        ref: n,
        class: C(["eit-dialog", o.className])
      }, [
        e.loading ? (t(), R(te, {
          key: 0,
          size: "70"
        })) : c("", !0),
        e.loading ? c("", !0) : (t(), l(h, { key: 1 }, [
          s("div", to, [
            j(m.$slots, "head"),
            s("button", {
              onClick: u,
              class: "eit-dialog__close"
            }, [
              f(_, { icon: ["fas", "xmark"] })
            ])
          ]),
          s("div", oo, [
            j(m.$slots, "content")
          ]),
          s("div", so, [
            f(F, {
              onClick: u,
              className: "eit-btn-outline--gray",
              text: "Volver"
            }),
            o.btnSubmit ? (t(), R(F, {
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
}, lo = { class: "row" }, ao = { class: "col" }, io = /* @__PURE__ */ s("h2", { class: "eit-font__size--x4 eit-color--text eit-font__weight--300 eit-border--bottom eit-border--color mb-3" }, [
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
      default: "[]"
    }
  },
  setup(e) {
    return (i, a) => (t(), l("div", lo, [
      s("div", ao, [
        io,
        s("div", ro, [
          s("table", co, [
            uo,
            s("tbody", null, [
              (t(!0), l(h, null, P(e.data, (o) => (t(), l("tr", {
                key: o.name
              }, [
                s("td", null, [
                  f(L, {
                    text: o.name,
                    className: "eit-badge__outline--gray"
                  }, null, 8, ["text"])
                ]),
                s("td", null, [
                  s("code", null, v(o.type), 1)
                ]),
                s("td", null, [
                  s("code", null, v(o.default), 1)
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
    const i = e;
    return (a, o) => (t(), l("div", mo, [
      s("div", {
        class: C(["eit-progress__bar", `eit-progress__bar--${i.type}`]),
        style: H(`width: ${i.percentage}%`)
      }, v(i.percentage) + "% ", 7),
      s("div", {
        class: "eit-progress__bar eit-progress__bar--transparent",
        style: H(`width: ${100 - i.percentage}%`)
      }, v(100 - i.percentage) + "% ", 5)
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
}, ko = { class: "flex-grow-1 ms-3" }, $o = { class: "d-flex" }, xo = { class: "flex-grow-1 me-3" }, wo = { class: "eit-toast__title" }, Co = { class: "eit-toast__text" }, So = { class: "flex-shrink-0" }, Ro = {
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
    const a = e, o = q(!1), r = q("hidden"), n = q(""), d = S(() => ({
      show: o.value,
      hide: !o.value,
      [a.position]: a.position,
      hidden: r.value
    })), u = () => {
      clearTimeout(n.value), o.value = !0, r.value = "", n.value = setTimeout(() => {
        o.value = !1, setTimeout(() => r.value = "hidden", "300");
      }, a.visible);
    }, g = () => {
      o.value = !1, setTimeout(() => r.value = "hidden", "300"), clearTimeout(n.value);
    };
    return i({ handleShowToast: u, handleCloseToast: g }), (m, p) => {
      const _ = D("font-awesome-icon");
      return t(), l("div", {
        class: C(["eit-toast__container", d.value])
      }, [
        s("div", {
          class: C(["eit-toast box-shadow", `eit-toast--${a.data.type}`])
        }, [
          s("div", po, [
            s("div", ho, [
              a.type === "success" ? (t(), l("span", yo, [
                f(_, { icon: "fa-solid fa-circle-check" })
              ])) : c("", !0),
              a.type === "error" ? (t(), l("span", go, [
                f(_, { icon: "fa-solid fa-circle-xmark" })
              ])) : c("", !0),
              a.type === "warning" ? (t(), l("span", vo, [
                f(_, { icon: "fa-solid fa-triangle-exclamation" })
              ])) : c("", !0),
              a.type === "info" ? (t(), l("span", bo, [
                f(_, { icon: "fa-solid fa-circle-info" })
              ])) : c("", !0)
            ]),
            s("div", ko, [
              s("div", $o, [
                s("div", xo, [
                  s("p", wo, [
                    a.data.code ? (t(), l(h, { key: 0 }, [
                      x(v(a.data.code), 1)
                    ], 64)) : c("", !0),
                    x(" " + v(a.data.title), 1)
                  ]),
                  s("p", Co, v(a.data.message), 1)
                ]),
                s("div", So, [
                  s("a", {
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
  emits: [
    "emitValue",
    "emitPressEnter"
  ],
  setup(e, { expose: i, emit: a }) {
    const o = e, r = a, n = q(""), d = S(() => o.validation ? o.validation(n.value) : !0), u = S(() => !d.value && o.requiredField && o.error ? "is-invalid" : ""), g = S(() => o.floatLabel ? "" : o.placeHolder), m = S(() => [
      o.floatLabel || o.floatLeft || o.floatRight ? "eit-input__display" : "",
      o.floatLeft ? "eit-input__display__float-left" : "",
      o.floatRight ? "eit-input__display__float-right" : ""
    ]), p = () => {
      r("emitPressEnter");
    }, _ = () => {
      n.value = "";
    };
    return T(() => o.input, (b) => {
      b && (n.value = b);
    }), T(n, () => {
      r("emitValue", d.value ? n.value : "");
    }), z(() => {
      o.inputMask && (n.value = o.inputMask(n.value)), o.submitted && _();
    }), i({ clean: _ }), (b, y) => (t(), l("div", {
      class: C(m.value)
    }, [
      M(s("input", {
        autocomplete: "off",
        class: C(["form-control eit-input", u.value]),
        type: e.inputType,
        "onUpdate:modelValue": y[0] || (y[0] = (N) => n.value = N),
        maxlength: o.maxLength,
        onKeypress: y[1] || (y[1] = (N) => o.keyPress && o.keyPress(N)),
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
      o.floatLabel ? (t(), l("label", qo, v(o.floatLabel), 1)) : c("", !0),
      o.floatLeft ? (t(), l("span", Do, [
        j(b.$slots, "float-left")
      ])) : c("", !0),
      o.floatRight ? (t(), l("span", Po, [
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
  setup(e, { expose: i, emit: a }) {
    const o = e, r = a, n = q(null), d = S(() => o.validation ? o.validation(n.value) : !0), u = S(() => !d.value && o.requiredField && o.error ? "is-invalid" : ""), g = () => Array.isArray(n.value) ? o.data.filter((b) => !n.value.some((y) => y.id === b.id)) : o.data, m = () => n.value ? o.data.filter((b) => b.id !== n.value.id) : o.data, p = S(() => o.multiple ? g() : m());
    T(() => o.selected, (b) => {
      b && (n.value = b);
    }, { immediate: !0 }), T(n, () => {
      r("emitValue", d.value ? n.value : "");
    }), z(() => {
      o.submitted && _();
    });
    const _ = () => {
      n.value = o.multiple ? [] : null;
    };
    return i({ clean: _ }), (b, y) => {
      const N = D("v-select");
      return t(), R(N, {
        options: p.value,
        modelValue: n.value,
        "onUpdate:modelValue": y[0] || (y[0] = (w) => n.value = w),
        label: e.labelCustom,
        multiple: e.multiple,
        placeholder: e.placeHolder,
        class: C(["eit-select-component", u.value]),
        clearable: e.clearable,
        disabled: o.isDisabled
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
  setup(e, { expose: i, emit: a }) {
    const o = e, r = a, n = q(null), d = q(""), u = S(() => o.validation && o.validation(d.value)), g = S(() => !u.value && o.requiredField && o.error ? "is-invalid" : ""), m = () => {
      d.value = "";
    };
    return T(() => o.input, (p) => {
      p && (d.value = p);
    }), T(d, () => {
      n.value.style.height = "50px", n.value.style.height = `${n.value.scrollHeight}px`, r("emitValue", u.value ? d.value : "");
    }), z(() => {
      o.submitted && m();
    }), i({ clean: m }), (p, _) => M((t(), l("textarea", {
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
  ToastComponent: Ro
}, Symbol.toStringTag, { value: "Module" }));
function Ao(e, i) {
  const a = X(), o = S(() => a.path === "/login" ? i.platformDarkTheme ? i.logotipo.logo_dark : i.logotipo.logo_light : e.config.darkTheme ? i.logotipo.logo_dark : i.logotipo.logo_light), r = S(() => e.config.darkTheme ? i.logotipo.isotipo_dark : i.logotipo.isotipo_light);
  return { logotipo: o, isotipo: r };
}
const Mo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useLogos: Ao
}, Symbol.toStringTag, { value: "Module" }));
function Vo() {
  function e(n) {
    return !(n == null || typeof n == "string" && n.trim() === "" || typeof n == "object" && Object.keys(n).length === 0 || Array.isArray(n) && n.length === 0);
  }
  function i(n) {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(n);
  }
  function a(n) {
    if (n.length >= 11 && n.length <= 12 && /[.-]/.test(n)) return !0;
    if (n.length < 11) return !1;
  }
  function o(n) {
    const d = n.length >= 8, u = /[A-Z]/.test(n), g = /[a-z]/.test(n), m = /[0-9]/.test(n), p = /[!@#$%^&*(),.?":{}|<>]/.test(n);
    return d && u && g && m && p;
  }
  function r(n) {
    return /^\+\d{3} \d{4}-\d{4}$/.test(n);
  }
  return { validateDefault: e, validateEmail: i, validateRut: a, validatePassword: o, validatePhone: r };
}
function zo() {
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
function Eo() {
  function e(i) {
    let a = String.fromCharCode(i.keyCode);
    if (/^[0-9Kk.-]/.test(a)) return !0;
    i.preventDefault();
  }
  return { keyPressRut: e };
}
function Oo() {
  function e(i) {
    const { sort: a, data: o } = i, { keys: r, index: n, asc: d } = a, u = r[n];
    return o.sort((g, m) => {
      let p = g[u], _ = m[u];
      return typeof p == "object" && p !== null && (p = p.name, _ = _.name), p === _ ? 0 : (p > _ ? 1 : -1) * (d ? 1 : -1);
    }), o;
  }
  return { sortTable: e };
}
V.extend(re);
V.locale("es");
function Ho() {
  function e(r) {
    return V(r).format("DD/MM/YYYY");
  }
  function i(r) {
    return V(r).fromNow();
  }
  function a(r) {
    let n = r.replace(/[^0-9kK]/g, ""), d = n.slice(0, -1).replace(/\B(?=(\d{3})+(?!\d))/g, "."), u = n.slice(-1).toUpperCase();
    return `${d}-${u}`;
  }
  function o(r) {
    return r.charAt(0).toUpperCase() + r.slice(1).toLowerCase();
  }
  return { formatDate: e, formatDateAgo: i, formatRut: a, formatCapitalize: o };
}
function Fo() {
  function e(i, a) {
    return a ? { content: i, theme: "main", placement: "right", appendTo: "parent" } : { content: i, theme: "main", placement: "right" };
  }
  return { handleTooltip: e };
}
const Io = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useFormat: Ho,
  useInputMask: zo,
  useKeypress: Eo,
  useTable: Oo,
  useTooltip: Fo,
  useValidator: Vo
}, Symbol.toStringTag, { value: "Module" })), Qo = {
  install(e) {
    Object.keys(J).forEach((i) => {
      e.component(i, J[i]);
    });
  },
  Composables: Mo,
  Utils: Io
};
export {
  Qo as default
};
