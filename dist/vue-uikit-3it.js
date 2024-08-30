import { computed as S, resolveComponent as B, openBlock as t, createElementBlock as s, normalizeClass as C, Fragment as f, createTextVNode as $, toDisplayString as y, createCommentVNode as i, createBlock as R, createElementVNode as o, createVNode as r, withCtx as z, renderList as D, renderSlot as q, mergeProps as ee, createStaticVNode as te, resolveDirective as oe, withDirectives as A, ref as j, watch as T, watchEffect as H, withKeys as Q, vModelText as W, normalizeStyle as F, vModelDynamic as se } from "vue";
import { useRoute as le } from "vue-router";
import { codeToHtml as ne } from "shiki";
const ae = ["disabled"], ie = /* @__PURE__ */ o("div", { class: "spinner-border spinner-border-sm me-1" }, null, -1), O = {
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
  setup(e, { emit: d }) {
    const n = e, l = d, c = S(() => ["eit-btn", `${n.className}`]), a = () => {
      l("emitEvent");
    };
    return (m, u) => {
      const b = B("font-awesome-icon");
      return t(), s("button", {
        onClick: a,
        class: C([c.value, "d-flex align-items-center justify-content-center"]),
        disabled: n.isDisabled
      }, [
        n.loading ? (t(), s(f, { key: 0 }, [
          ie,
          $(" " + y(n.loadingText), 1)
        ], 64)) : i("", !0),
        n.loading ? i("", !0) : (t(), s(f, { key: 1 }, [
          n.icon ? (t(), R(b, {
            key: 0,
            icon: n.icon,
            class: "me-1"
          }, null, 8, ["icon"])) : i("", !0),
          $(" " + y(e.text), 1)
        ], 64))
      ], 10, ae);
    };
  }
}, ce = { "aria-label": "breadcrumb" }, de = { class: "eit-breadcrumb" }, re = /* @__PURE__ */ o("span", { class: "px-2 eit-color--text-soft" }, "/", -1), ue = {
  key: 1,
  class: "eit-color--text-soft"
}, me = {
  __name: "BreadcrumbComponent",
  setup(e) {
    const d = le(), n = S(() => {
      let l = [], c = "";
      return d.matched.forEach((a, m) => {
        c += "/" + a.path.split("/")[m + 1], l.push({
          name: a.name,
          title: a.meta.title || "Sin título",
          path: c,
          last: m === d.matched.length - 1
        });
      }), l;
    });
    return (l, c) => {
      const a = B("font-awesome-icon"), m = B("router-link");
      return t(), s("nav", ce, [
        o("ul", de, [
          o("li", null, [
            r(m, {
              to: "/",
              class: "eit-color--text-soft eit-color--text-soft--link"
            }, {
              default: z(() => [
                r(a, { icon: "fa-solid fa-house" })
              ]),
              _: 1
            }),
            re
          ]),
          (t(!0), s(f, null, D(n.value, (u, b) => (t(), s("li", {
            key: b,
            class: "eit-breadcrumb__item"
          }, [
            q(l.$slots, u.name, ee({ ref_for: !0 }, u), () => [
              u.last ? (t(), s("span", ue, y(u.title), 1)) : (t(), R(m, {
                key: 0,
                to: u.path,
                class: "eit-color--text eit-color--text--link eit-color--underline"
              }, {
                default: z(() => [
                  $(y(u.title), 1)
                ]),
                _: 2
              }, 1032, ["to"]))
            ])
          ]))), 128))
        ])
      ]);
    };
  }
}, fe = ["innerHTML"], L = {
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
    const d = e;
    return (n, l) => {
      const c = B("font-awesome-icon");
      return t(), s("span", {
        key: `badge-${d.text}`,
        class: C(`eit-badge ${d.className}`)
      }, [
        d.icon ? (t(), R(c, {
          key: 0,
          icon: d.icon,
          class: "me-1"
        }, null, 8, ["icon"])) : i("", !0),
        o("span", {
          innerHTML: d.text
        }, null, 8, fe)
      ], 2);
    };
  }
}, _e = {
  key: 0,
  class: "table eit-table eit-table-responsive"
}, pe = {
  key: 0,
  class: "eit-skeleton__table-first-td"
}, he = /* @__PURE__ */ o("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "80%" }
}, null, -1), ye = [
  he
], ve = { key: 1 }, be = /* @__PURE__ */ o("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "60%" }
}, null, -1), ge = [
  be
], ke = {
  key: 0,
  class: "eit-skeleton__table-first-td"
}, xe = /* @__PURE__ */ o("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), $e = [
  xe
], we = { key: 1 }, Ce = /* @__PURE__ */ o("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), Re = [
  Ce
], Se = /* @__PURE__ */ te('<div class="row"><div class="col-12"><div class="d-flex"><div class="flex-shrink-0"><div class="eit-skeleton eit-skeleton__btn-square"></div></div><div class="flex-grow-1 ms-3"><div class="d-flex"><div class="flex-grow-1 ms-3"><div class="eit-skeleton eit-skeleton__title my-2" style="width:40%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div></div><div class="flex-shrink-0"><div class="eit-skeleton eit-skeleton__text my-2" style="width:30px;"></div></div></div></div></div></div></div><div class="row flex-grow-1"><div class="col-12 d-flex flex-column flex-grow-1"><div class="eit-slide__content flex-grow-1"><div class="mt-5"><div class="col-12"><h5 class="mb-3"><div class="eit-skeleton eit-skeleton__title my-2" style="width:20%;"></div></h5><ul class="list-unstyled"><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:40%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:20%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:20%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li></ul></div></div></div></div></div>', 2), M = {
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
    const d = e;
    return (n, l) => (t(), s(f, null, [
      d.type === "table" ? (t(), s("table", _e, [
        o("thead", null, [
          o("tr", null, [
            (t(!0), s(f, null, D(d.table.column, (c) => (t(), s(f, { key: c }, [
              c === 1 ? (t(), s("th", pe, ye)) : i("", !0),
              c > 1 ? (t(), s("th", ve, ge)) : i("", !0)
            ], 64))), 128))
          ])
        ]),
        o("tbody", null, [
          (t(!0), s(f, null, D(d.table.row, (c) => (t(), s("tr", { key: c }, [
            (t(!0), s(f, null, D(d.table.column, (a) => (t(), s(f, { key: a }, [
              a === 1 ? (t(), s("td", ke, $e)) : i("", !0),
              a > 1 ? (t(), s("td", we, Re)) : i("", !0)
            ], 64))), 128))
          ]))), 128))
        ])
      ])) : i("", !0),
      d.type === "detail" ? (t(), s(f, { key: 1 }, [
        Se
      ], 64)) : i("", !0)
    ], 64));
  }
}, qe = { class: "d-flex align-items-center" }, je = { class: "flex-shrink-0 d-flex align-items-center eit-alert__icon me-2" }, Be = ["innerHTML"], X = {
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
    const d = e;
    return (n, l) => {
      const c = B("font-awesome-icon");
      return t(), s("div", {
        class: C(`eit-alert eit-alert--${d.type} ${d.animation.active ? "eit-alert--animation" : "eit-alert--default"} ${d.animation.show ? "eit-alert--animation--show" : ""}`)
      }, [
        o("div", qe, [
          o("div", je, [
            r(c, {
              icon: d.icon,
              class: C(e.iconClass)
            }, null, 8, ["icon", "class"])
          ]),
          o("div", {
            class: "flex-grow-1 eit-alert__text",
            innerHTML: d.message
          }, null, 8, Be)
        ])
      ], 2);
    };
  }
}, De = { class: "row" }, Ne = { class: "col-12" }, Te = { class: "table eit-table eit-table-responsive" }, Pe = ["onClick"], Le = /* @__PURE__ */ o("th", {
  scope: "col",
  class: "text-center"
}, "Acciones", -1), Ee = { class: "pe-3 d-lg-none" }, Ae = ["onClick"], He = {
  key: 0,
  class: "d-flex flex-wrap gap-1"
}, Ve = {
  key: 3,
  class: "eit-table__string"
}, ze = { class: "text-center" }, Fe = { class: "dropdown eit-dropdown d-none d-lg-block" }, Oe = {
  href: "javascript:",
  class: "eit-btn-action",
  "data-bs-toggle": "dropdown"
}, Me = { class: "dropdown-menu dropdown-custom-menu" }, Ie = {
  key: 0,
  class: "mx-2"
}, Ke = ["onClick"], Ue = {
  key: 1,
  class: "mx-2"
}, Ge = ["onClick"], Je = {
  key: 2,
  class: "mx-2"
}, Qe = ["onClick"], We = {
  key: 3,
  class: "m-2"
}, Xe = /* @__PURE__ */ o("div", { class: "eit-border--bottom eit-border--color" }, null, -1), Ye = [
  Xe
], Ze = {
  key: 4,
  class: "mx-2"
}, et = ["onClick"], tt = {
  key: 5,
  class: "mx-2"
}, ot = ["onClick"], st = { class: "d-flex w-100 justify-content-between align-items-center d-lg-none text-end" }, lt = /* @__PURE__ */ o("strong", null, "Acciones:", -1), nt = { class: "d-flex flex-wrap gap-2 ms-3" }, at = ["onClick"], it = ["onClick"], ct = ["onClick"], dt = ["onClick"], rt = ["onClick"], ut = ["onClick"], mt = {
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
  setup(e, { emit: d }) {
    const n = e, l = d, c = (h) => {
      l("viewRecord", h);
    }, a = (h) => {
      l("editRecord", h);
    }, m = (h) => {
      l("deleteRecord", h);
    }, u = (h) => {
      l("downloadRecord", h);
    }, b = (h) => {
      l("updateSort", { index: h, asc: !n.sort.asc });
    }, _ = (h) => {
      l("enabledDisabledRecord", h);
    }, v = (h) => typeof h == "string", p = (h) => typeof h == "object" && !Array.isArray(h), g = (h) => Array.isArray(h);
    return (h, P) => {
      var K, U, G, J;
      const w = B("font-awesome-icon"), I = oe("tippy");
      return t(), s("div", De, [
        o("div", Ne, [
          e.loading ? (t(), R(M, {
            key: 0,
            type: "table",
            table: { row: (K = e.skeleton) == null ? void 0 : K.row, column: (U = e.skeleton) == null ? void 0 : U.column }
          }, null, 8, ["table"])) : i("", !0),
          !e.loading && !((G = e.data) != null && G.length) ? (t(), R(X, {
            key: 1,
            ref: "alert",
            class: "mb-3",
            type: "info",
            icon: "fa-solid fa-info",
            message: "<strong>No hay resultados</strong> para tu búsqueda."
          }, null, 512)) : i("", !0),
          !e.loading && ((J = e.data) != null && J.length) ? (t(), s(f, { key: 2 }, [
            o("table", Te, [
              o("thead", null, [
                o("tr", null, [
                  (t(!0), s(f, null, D(e.columns, (k, N) => (t(), s("th", {
                    key: `column-${N}`,
                    scope: "col"
                  }, [
                    o("a", {
                      onClick: (x) => b(N),
                      href: "javascript:",
                      class: "d-flex justify-content-between"
                    }, [
                      $(y(k) + " ", 1),
                      e.sort.index === N ? (t(), s("span", {
                        key: `icono-${k}`,
                        class: "d-flex ms-2 eit-color--text"
                      }, [
                        e.sort.asc ? i("", !0) : (t(), s("span", {
                          key: `down-${k}`
                        }, [
                          r(w, { icon: "fa-solid fa-sort-down align-baseline" })
                        ])),
                        e.sort.asc ? (t(), s("span", {
                          key: `up-${k}`
                        }, [
                          r(w, { icon: "fa-solid fa-sort-up align-baseline" })
                        ])) : i("", !0)
                      ])) : (t(), s("span", {
                        key: `key-${k}`
                      }, [
                        r(w, { icon: "fa-solid fa-sort" })
                      ]))
                    ], 8, Pe)
                  ]))), 128)),
                  Le
                ])
              ]),
              o("tbody", null, [
                (t(!0), s(f, null, D(e.data, (k, N) => (t(), s("tr", {
                  key: `row-${N}`
                }, [
                  (t(!0), s(f, null, D(k, (x, E) => (t(), s("td", {
                    key: `value-${E}`
                  }, [
                    o("strong", Ee, y(e.columns[Object.keys(k).indexOf(E)]) + ":", 1),
                    Object.keys(k)[e.columnLink] === E ? (t(), s(f, { key: 0 }, [
                      e.viewRecord ? (t(), s("a", {
                        key: 0,
                        onClick: (V) => c(k),
                        href: "javascript:",
                        class: "eit-table__link"
                      }, y(x), 9, Ae)) : i("", !0),
                      e.viewRecord ? i("", !0) : (t(), s(f, { key: 1 }, [
                        $(y(x), 1)
                      ], 64))
                    ], 64)) : i("", !0),
                    Object.keys(k)[e.columnLink] !== E ? (t(), s(f, { key: 1 }, [
                      g(x) ? (t(), s("div", He, [
                        (t(!0), s(f, null, D(x, (V, Z) => (t(), s("span", {
                          key: `value-array-${Z}`,
                          class: "d-flex flex-wrap gap-1"
                        }, [
                          r(L, {
                            text: V.name,
                            className: V.className
                          }, null, 8, ["text", "className"])
                        ]))), 128))
                      ])) : i("", !0),
                      E === "status" ? (t(), s(f, { key: 1 }, [
                        x ? (t(), R(L, {
                          key: 0,
                          text: "Activo",
                          className: "eit-badge__outline--secondary"
                        })) : i("", !0),
                        x ? i("", !0) : (t(), R(L, {
                          key: 1,
                          text: "Inactivo",
                          className: "eit-badge__outline--gray"
                        }))
                      ], 64)) : i("", !0),
                      p(x) ? (t(), R(L, {
                        key: 2,
                        text: x.name,
                        className: x.className
                      }, null, 8, ["text", "className"])) : i("", !0),
                      v(x) ? (t(), s("span", Ve, y(x), 1)) : i("", !0)
                    ], 64)) : i("", !0)
                  ]))), 128)),
                  o("td", ze, [
                    o("div", Fe, [
                      o("a", Oe, [
                        r(w, { icon: "fa-solid fa-ellipsis" })
                      ]),
                      o("ul", Me, [
                        e.viewRecord ? (t(), s("li", Ie, [
                          o("a", {
                            onClick: (x) => c(k),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            r(w, {
                              icon: "fa-regular fa-eye",
                              class: "eit-color--blue"
                            }),
                            $(" " + y(e.viewRecord), 1)
                          ], 8, Ke)
                        ])) : i("", !0),
                        e.editRecord ? (t(), s("li", Ue, [
                          o("a", {
                            onClick: (x) => a(k),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            r(w, {
                              icon: "fa-solid fa-square-pen",
                              class: "eit-color--yellow"
                            }),
                            $(" " + y(e.editRecord), 1)
                          ], 8, Ge)
                        ])) : i("", !0),
                        e.downloadRecord ? (t(), s("li", Je, [
                          o("a", {
                            onClick: (x) => u(k),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            r(w, {
                              icon: "fa-solid fa-download",
                              class: "eit-color--blue"
                            }),
                            $(" " + y(e.downloadRecord), 1)
                          ], 8, Qe)
                        ])) : i("", !0),
                        e.deleteRecord || e.enabledDisabledRecord ? (t(), s("li", We, Ye)) : i("", !0),
                        e.enabledDisabledRecord ? (t(), s("li", Ze, [
                          o("a", {
                            onClick: (x) => _(k),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            k.status ? i("", !0) : (t(), s(f, { key: 0 }, [
                              r(w, {
                                icon: "fa-regular fa-circle-check",
                                class: "eit-color--green"
                              }),
                              $(" Habilitar ")
                            ], 64)),
                            k.status ? (t(), s(f, { key: 1 }, [
                              r(w, {
                                icon: "fa-solid fa-ban",
                                class: "eit-color--red"
                              }),
                              $(" Deshabilitar ")
                            ], 64)) : i("", !0)
                          ], 8, et)
                        ])) : i("", !0),
                        e.deleteRecord ? (t(), s("li", tt, [
                          o("a", {
                            onClick: (x) => m(N),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            r(w, {
                              icon: "fa-solid fa-trash",
                              class: "eit-color--red"
                            }),
                            $(" " + y(e.deleteRecord), 1)
                          ], 8, ot)
                        ])) : i("", !0)
                      ])
                    ]),
                    o("div", st, [
                      lt,
                      o("div", nt, [
                        e.viewRecord ? (t(), s("a", {
                          key: 0,
                          onClick: (x) => c(k),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          r(w, {
                            icon: "fa-regular fa-eye",
                            class: "eit-color--blue"
                          })
                        ], 8, at)) : i("", !0),
                        e.editRecord ? (t(), s("a", {
                          key: 1,
                          onClick: (x) => a(k),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          r(w, {
                            icon: "fa-solid fa-square-pen",
                            class: "eit-color--yellow"
                          })
                        ], 8, it)) : i("", !0),
                        e.downloadRecord ? (t(), s("a", {
                          key: 2,
                          onClick: (x) => u(k),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          r(w, {
                            icon: "fa-solid fa-download",
                            class: "eit-color--blue"
                          })
                        ], 8, ct)) : i("", !0),
                        e.enabledDisabledRecord ? (t(), s(f, { key: 3 }, [
                          k.status ? i("", !0) : A((t(), s("a", {
                            key: 0,
                            onClick: (x) => _(k),
                            href: "javascript:",
                            class: "eit-btn eit-btn-outline--gray eit-btn--square"
                          }, [
                            r(w, {
                              icon: "fa-regular fa-circle-check",
                              class: "eit-color--green"
                            })
                          ], 8, dt)), [
                            [I, { content: "Habilitar", theme: "main" }]
                          ]),
                          k.status ? A((t(), s("a", {
                            key: 1,
                            onClick: (x) => _(k),
                            href: "javascript:",
                            class: "eit-btn eit-btn-outline--gray eit-btn--square"
                          }, [
                            r(w, {
                              icon: "fa-solid fa-ban",
                              class: "eit-color--red"
                            })
                          ], 8, rt)), [
                            [I, { content: "Deshabilitar", theme: "main" }]
                          ]) : i("", !0)
                        ], 64)) : i("", !0),
                        e.deleteRecord ? (t(), s("a", {
                          key: 4,
                          onClick: (x) => m(N),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          r(w, {
                            icon: "fa-solid fa-trash",
                            class: "eit-color--red"
                          })
                        ], 8, ut)) : i("", !0)
                      ])
                    ])
                  ])
                ]))), 128))
              ])
            ]),
            q(h.$slots, "paginator")
          ], 64)) : i("", !0)
        ])
      ]);
    };
  }
}, ft = { class: "eit-paginator gap-2" }, _t = ["disabled"], pt = { class: "eit-color--text eit-font__size--x1" }, ht = ["disabled"], yt = {
  __name: "PaginationComponent",
  props: {
    data: {
      type: Object,
      required: !0
    }
  },
  emits: ["updatePaginator"],
  setup(e, { emit: d }) {
    const n = e, l = d, c = j(n.data.currentPage), a = () => c.value++, m = () => c.value--, u = () => {
      c.value <= 0 && (c.value = 1), c.value > n.data.finalPage && (c.value = n.data.finalPage);
    }, b = (_) => {
      _.target.select();
    };
    return T(c, () => {
      c.value > 0 && c.value <= n.data.finalPage && l("updatePaginator", c.value);
    }), H(() => {
      n.data && (c.value = n.data.currentPage);
    }), (_, v) => {
      const p = B("font-awesome-icon");
      return t(), s("div", ft, [
        o("button", {
          onClick: m,
          disabled: e.data.currentPage === 1,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          r(p, { icon: "fa-solid fa-chevron-left" })
        ], 8, _t),
        A(o("input", {
          type: "number",
          "onUpdate:modelValue": v[0] || (v[0] = (g) => c.value = g),
          onInput: u,
          onKeyup: Q(u, ["enter"]),
          onBlur: u,
          onFocus: b,
          class: "eit-input eit-paginator__input eit-font__size--x1 text-center",
          "aria-label": "Número de página"
        }, null, 544), [
          [
            W,
            c.value,
            void 0,
            { number: !0 }
          ]
        ]),
        o("span", pt, [
          $(" de " + y(e.data.finalPage) + " ", 1),
          e.data.finalPage === 1 ? (t(), s(f, { key: 0 }, [
            $(" página ")
          ], 64)) : i("", !0),
          e.data.finalPage > 1 ? (t(), s(f, { key: 1 }, [
            $(" páginas ")
          ], 64)) : i("", !0)
        ]),
        o("button", {
          onClick: a,
          disabled: e.data.currentPage === e.data.finalPage,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          r(p, { icon: "fa-solid fa-chevron-right" })
        ], 8, ht)
      ]);
    };
  }
}, vt = { class: "row" }, bt = { class: "col-12" }, gt = { class: "d-flex" }, kt = { class: "flex-shrink-0" }, xt = { class: "flex-grow-1" }, $t = { class: "d-flex" }, wt = { class: "flex-grow-1 d-flex flex-column ms-3" }, Ct = { class: "eit-font--primary mb-0" }, Rt = { class: "eit-color--text mb-0" }, St = { class: "flex-shrink-0" }, qt = {
  key: 0,
  class: "dropdown eit-dropdown d-none d-lg-block"
}, jt = {
  href: "javascript:",
  class: "eit-btn-action",
  "data-bs-toggle": "dropdown"
}, Bt = { class: "dropdown-menu dropdown-custom-menu" }, Dt = {
  key: 0,
  class: "mx-2"
}, Nt = {
  key: 1,
  class: "mx-2"
}, Tt = {
  key: 2,
  class: "m-2"
}, Pt = /* @__PURE__ */ o("div", { class: "eit-border--bottom eit-border--color" }, null, -1), Lt = [
  Pt
], Et = {
  key: 3,
  class: "mx-2"
}, At = {
  key: 4,
  class: "mx-2"
}, Ht = { class: "row flex-grow-1" }, Vt = { class: "col-12 d-flex flex-column flex-grow-1" }, zt = { class: "eit-slide__content flex-grow-1" }, Ft = {
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
  setup(e, { emit: d }) {
    const n = e, l = d, c = () => {
      l("emitslide");
    }, a = (_) => {
      l("enabledDisabledRecord", _);
    }, m = (_) => {
      l("editRecord", _);
    }, u = (_) => {
      l("deleteRecord", _);
    }, b = (_) => {
      l("downloadRecord", _);
    };
    return (_, v) => {
      const p = B("font-awesome-icon");
      return t(), s("section", {
        class: C(["eit-slide d-flex flex-column", [e.slide && "eit-slide--right", e.slideSmall && "eit-slide--small"]])
      }, [
        n.loading ? (t(), R(M, {
          key: 0,
          type: "detail"
        })) : i("", !0),
        n.loading ? i("", !0) : (t(), s(f, { key: 1 }, [
          o("div", vt, [
            o("div", bt, [
              o("div", gt, [
                o("div", kt, [
                  o("button", {
                    class: "eit-btn eit-btn--gray eit-btn--square",
                    onClick: c
                  }, [
                    r(p, {
                      icon: "fa-solid fa-angle-right",
                      class: "eit-font__size--x5 d-none d-lg-block"
                    }),
                    r(p, {
                      icon: "fa-solid fa-angle-down",
                      class: "eit-font__size--x5 d-lg-none"
                    })
                  ])
                ]),
                o("div", xt, [
                  o("div", $t, [
                    o("div", wt, [
                      o("h4", Ct, [
                        o("strong", null, [
                          q(_.$slots, "title")
                        ])
                      ]),
                      o("p", Rt, [
                        q(_.$slots, "subtitle")
                      ])
                    ]),
                    o("div", St, [
                      n.dropdown ? (t(), s("div", qt, [
                        o("a", jt, [
                          r(p, { icon: "fa-solid fa-ellipsis" })
                        ]),
                        o("ul", Bt, [
                          n.editRecord ? (t(), s("li", Dt, [
                            o("a", {
                              onClick: v[0] || (v[0] = (g) => m(n.record)),
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              r(p, {
                                icon: "fa-solid fa-square-pen",
                                class: "eit-color--yellow"
                              }),
                              $(" " + y(e.editRecord), 1)
                            ])
                          ])) : i("", !0),
                          n.downloadRecord ? (t(), s("li", Nt, [
                            o("a", {
                              onClick: v[1] || (v[1] = (g) => b(n.record)),
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              r(p, {
                                icon: "fa-solid fa-download",
                                class: "eit-color--blue"
                              }),
                              $(" " + y(n.downloadRecord), 1)
                            ])
                          ])) : i("", !0),
                          e.deleteRecord || e.enabledDisabledRecord ? (t(), s("li", Tt, Lt)) : i("", !0),
                          n.enabledDisabledRecord ? (t(), s("li", Et, [
                            o("a", {
                              onClick: v[2] || (v[2] = (g) => a(e.record)),
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              n.record.status ? i("", !0) : (t(), s(f, { key: 0 }, [
                                r(p, {
                                  icon: "fa-regular fa-circle-check",
                                  class: "eit-color--green"
                                }),
                                $(" Habilitar ")
                              ], 64)),
                              n.record.status ? (t(), s(f, { key: 1 }, [
                                r(p, {
                                  icon: "fa-solid fa-ban",
                                  class: "eit-color--red"
                                }),
                                $(" Deshabilitar ")
                              ], 64)) : i("", !0)
                            ])
                          ])) : i("", !0),
                          n.deleteRecord ? (t(), s("li", At, [
                            o("a", {
                              onClick: v[3] || (v[3] = (g) => u(n.record)),
                              class: "dropdown-item dropdown-custom-menu-item eit-color--red",
                              href: "javascript:"
                            }, [
                              r(p, {
                                icon: "fa-solid fa-trash",
                                class: "eit-color--red"
                              }),
                              $(" " + y(n.deleteRecord), 1)
                            ])
                          ])) : i("", !0)
                        ])
                      ])) : i("", !0)
                    ])
                  ])
                ])
              ])
            ])
          ]),
          o("div", Ht, [
            o("div", Vt, [
              o("div", zt, [
                q(_.$slots, "component")
              ])
            ])
          ]),
          q(_.$slots, "footer")
        ], 64))
      ], 2);
    };
  }
}, Ot = { class: "d-flex justify-content-between align-items-center" }, Mt = ["onClick"], It = {
  key: 0,
  class: "eit-tabs__badge"
}, Kt = { class: "row" }, Ut = { class: "col-12" }, Gt = {
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
    const d = e, n = (a) => a < 99 ? a : "+99", l = j(0), c = (a) => {
      l.value = a;
    };
    return (a, m) => (t(), s(f, null, [
      o("div", Ot, [
        o("ul", {
          class: C(`eit-tabs ${d.className}`)
        }, [
          (t(!0), s(f, null, D(e.data, (u, b) => (t(), s("li", {
            key: b,
            class: "eit-tabs__item"
          }, [
            o("a", {
              href: "javascript:",
              onClick: (_) => c(b),
              class: C(["eit-tabs__item__link", l.value === b ? "active" : ""])
            }, [
              $(y(u.name) + " ", 1),
              u.number ? (t(), s("span", It, y(n(u.number)), 1)) : i("", !0)
            ], 10, Mt)
          ]))), 128))
        ], 2),
        q(a.$slots, "dropdown")
      ]),
      o("div", Kt, [
        o("div", Ut, [
          q(a.$slots, `tab-${l.value}`)
        ])
      ])
    ], 64));
  }
}, Jt = ["innerHTML"], Qt = {
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
    const d = e, n = j("");
    return (async () => {
      const c = `${d.code}`;
      n.value = await ne(c, {
        lang: d.lang,
        theme: d.theme
      });
    })(), (c, a) => (t(), s("div", { innerHTML: n.value }, null, 8, Jt));
  }
}, Wt = "/img/loading.svg", Xt = { class: "p-3 eit-loading" }, Y = {
  __name: "LoadingComponent",
  props: {
    size: {
      type: String,
      required: !1,
      default: "100"
    }
  },
  setup(e) {
    const d = e;
    return (n, l) => (t(), s("div", Xt, [
      o("img", {
        style: F(`width:${d.size}px`),
        src: Wt
      }, null, 4)
    ]));
  }
}, Yt = { class: "d-flex justify-content-between align-items-center" }, Zt = { class: "eit-dialog__body" }, eo = { class: "d-flex gap-2 justify-content-end mt-3" }, to = {
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
  setup(e, { expose: d, emit: n }) {
    const l = e, c = n, a = j(null), m = () => {
      a.value.showModal(), a.value.classList.add("show");
    }, u = () => {
      a.value.close(), a.value.classList.remove("show"), c("emitCloseDialog");
    }, b = () => {
      c("emitSubmit");
    };
    return d({ showDialog: m, closeDialog: u }), (_, v) => {
      const p = B("font-awesome-icon");
      return t(), s("dialog", {
        ref_key: "dialog",
        ref: a,
        class: C(["eit-dialog", l.className])
      }, [
        e.loading ? (t(), R(Y, {
          key: 0,
          size: "70"
        })) : i("", !0),
        e.loading ? i("", !0) : (t(), s(f, { key: 1 }, [
          o("div", Yt, [
            q(_.$slots, "head"),
            o("button", {
              onClick: u,
              class: "eit-dialog__close"
            }, [
              r(p, { icon: ["fas", "xmark"] })
            ])
          ]),
          o("div", Zt, [
            q(_.$slots, "content")
          ]),
          o("div", eo, [
            r(O, {
              onClick: u,
              className: "eit-btn-outline--gray",
              text: "Volver"
            }),
            l.btnSubmit ? (t(), R(O, {
              key: 0,
              className: "eit-btn--primary",
              text: "Guardar",
              loadingText: "Guardando...",
              loading: e.loadingSubmit,
              onEmitEvent: b,
              isDisabled: e.disabledSubmit
            }, null, 8, ["loading", "isDisabled"])) : i("", !0)
          ])
        ], 64))
      ], 2);
    };
  }
}, oo = { class: "row" }, so = { class: "col" }, lo = /* @__PURE__ */ o("h2", { class: "eit-font__size--x4 eit-color--text eit-font__weight--300 eit-border--bottom eit-border--color mb-3" }, [
  /* @__PURE__ */ o("strong", { class: "eit-font__weight--900" }, "Props")
], -1), no = { class: "eit-table--overflow" }, ao = { class: "table eit-table" }, io = /* @__PURE__ */ o("thead", null, [
  /* @__PURE__ */ o("tr", null, [
    /* @__PURE__ */ o("th", null, "Name"),
    /* @__PURE__ */ o("th", null, "Type"),
    /* @__PURE__ */ o("th", null, "Default")
  ])
], -1), co = {
  __name: "PropsComponent",
  props: {
    data: {
      type: Array,
      default: "[]"
    }
  },
  setup(e) {
    return (d, n) => (t(), s("div", oo, [
      o("div", so, [
        lo,
        o("div", no, [
          o("table", ao, [
            io,
            o("tbody", null, [
              (t(!0), s(f, null, D(e.data, (l) => (t(), s("tr", {
                key: l.name
              }, [
                o("td", null, [
                  r(L, {
                    text: l.name,
                    className: "eit-badge__outline--gray"
                  }, null, 8, ["text"])
                ]),
                o("td", null, [
                  o("code", null, y(l.type), 1)
                ]),
                o("td", null, [
                  o("code", null, y(l.default), 1)
                ])
              ]))), 128))
            ])
          ])
        ])
      ])
    ]));
  }
}, ro = { class: "eit-progress eit-progress--30" }, uo = {
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
    const d = e;
    return (n, l) => (t(), s("div", ro, [
      o("div", {
        class: C(["eit-progress__bar", `eit-progress__bar--${d.type}`]),
        style: F(`width: ${d.percentage}%`)
      }, y(d.percentage) + "% ", 7),
      o("div", {
        class: "eit-progress__bar eit-progress__bar--transparent",
        style: F(`width: ${100 - d.percentage}%`)
      }, y(100 - d.percentage) + "% ", 5)
    ]));
  }
}, mo = { class: "d-flex" }, fo = { class: "flex-shrink-0 eit-toast__left" }, _o = {
  key: "success",
  class: "eit-toast__icon eit-font__size--x7"
}, po = {
  key: "error",
  class: "eit-toast__icon eit-font__size--x7"
}, ho = {
  key: "warning",
  class: "eit-toast__icon eit-font__size--x7"
}, yo = {
  key: "info",
  class: "eit-toast__icon eit-font__size--x7"
}, vo = { class: "flex-grow-1 ms-3" }, bo = { class: "d-flex" }, go = { class: "flex-grow-1 me-3" }, ko = { class: "eit-toast__title" }, xo = { class: "eit-toast__text" }, $o = { class: "flex-shrink-0" }, wo = {
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
  setup(e, { expose: d }) {
    const n = e, l = j(!1), c = j("hidden"), a = j(""), m = S(() => ({
      show: l.value,
      hide: !l.value,
      [n.position]: n.position,
      hidden: c.value
    })), u = () => {
      clearTimeout(a.value), l.value = !0, c.value = "", a.value = setTimeout(() => {
        l.value = !1, setTimeout(() => c.value = "hidden", "300");
      }, n.visible);
    }, b = () => {
      l.value = !1, setTimeout(() => c.value = "hidden", "300"), clearTimeout(a.value);
    };
    return d({ handleShowToast: u, handleCloseToast: b }), (_, v) => {
      const p = B("font-awesome-icon");
      return t(), s("div", {
        class: C(["eit-toast__container", m.value])
      }, [
        o("div", {
          class: C(["eit-toast box-shadow", `eit-toast--${n.data.type}`])
        }, [
          o("div", mo, [
            o("div", fo, [
              n.type === "success" ? (t(), s("span", _o, [
                r(p, { icon: "fa-solid fa-circle-check" })
              ])) : i("", !0),
              n.type === "error" ? (t(), s("span", po, [
                r(p, { icon: "fa-solid fa-circle-xmark" })
              ])) : i("", !0),
              n.type === "warning" ? (t(), s("span", ho, [
                r(p, { icon: "fa-solid fa-triangle-exclamation" })
              ])) : i("", !0),
              n.type === "info" ? (t(), s("span", yo, [
                r(p, { icon: "fa-solid fa-circle-info" })
              ])) : i("", !0)
            ]),
            o("div", vo, [
              o("div", bo, [
                o("div", go, [
                  o("p", ko, [
                    n.data.code ? (t(), s(f, { key: 0 }, [
                      $(y(n.data.code), 1)
                    ], 64)) : i("", !0),
                    $(" " + y(n.data.title), 1)
                  ]),
                  o("p", xo, y(n.data.message), 1)
                ]),
                o("div", $o, [
                  o("a", {
                    onClick: v[0] || (v[0] = (g) => b()),
                    href: "javascript:",
                    class: "eit-toast__close"
                  }, [
                    r(p, { icon: "fa-solid fa-xmark" })
                  ])
                ])
              ])
            ])
          ])
        ], 2)
      ], 2);
    };
  }
}, Co = ["type", "maxlength", "placeholder"], Ro = {
  key: 0,
  class: "eit-label-float"
}, So = {
  key: 1,
  class: "eit-input__display__icon eit-input__display__float-left--icon"
}, qo = {
  key: 2,
  class: "eit-input__display__icon eit-input__display__float-right--icon"
}, jo = {
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
  setup(e, { expose: d, emit: n }) {
    const l = e, c = n, a = j(""), m = S(() => l.validation ? l.validation(a.value) : !0), u = S(() => !m.value && l.requiredField && l.error ? "is-invalid" : ""), b = S(() => l.floatLabel ? "" : l.placeHolder), _ = S(() => [
      l.floatLabel || l.floatLeft || l.floatRight ? "eit-input__display" : "",
      l.floatLeft ? "eit-input__display__float-left" : "",
      l.floatRight ? "eit-input__display__float-right" : ""
    ]), v = () => {
      c("emitPressEnter");
    }, p = () => {
      a.value = "";
    };
    return T(() => l.input, (g) => {
      g && (a.value = g);
    }), T(a, () => {
      c("emitValue", m.value ? a.value : "");
    }), H(() => {
      l.inputMask && (a.value = l.inputMask(a.value)), l.submitted && p();
    }), d({ clean: p }), (g, h) => (t(), s("div", {
      class: C(_.value)
    }, [
      A(o("input", {
        autocomplete: "off",
        class: C(["form-control eit-input", u.value]),
        type: e.inputType,
        "onUpdate:modelValue": h[0] || (h[0] = (P) => a.value = P),
        maxlength: l.maxLength,
        onKeypress: h[1] || (h[1] = (P) => l.keyPress && l.keyPress(P)),
        placeholder: b.value,
        onKeyup: Q(v, ["enter"])
      }, null, 42, Co), [
        [
          se,
          a.value,
          void 0,
          { trim: !0 }
        ]
      ]),
      l.floatLabel ? (t(), s("label", Ro, y(l.floatLabel), 1)) : i("", !0),
      l.floatLeft ? (t(), s("span", So, [
        q(g.$slots, "float-left")
      ])) : i("", !0),
      l.floatRight ? (t(), s("span", qo, [
        q(g.$slots, "float-right")
      ])) : i("", !0)
    ], 2));
  }
}, Bo = {
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
  setup(e, { expose: d, emit: n }) {
    const l = e, c = n, a = j(null), m = S(() => l.validation ? l.validation(a.value) : !0), u = S(() => !m.value && l.requiredField && l.error ? "is-invalid" : ""), b = () => Array.isArray(a.value) ? l.data.filter((g) => !a.value.some((h) => h.id === g.id)) : l.data, _ = () => a.value ? l.data.filter((g) => g.id !== a.value.id) : l.data, v = S(() => l.multiple ? b() : _());
    T(() => l.selected, (g) => {
      g && (a.value = g);
    }, { immediate: !0 }), T(a, () => {
      c("emitValue", m.value ? a.value : "");
    }), H(() => {
      l.submitted && p();
    });
    const p = () => {
      a.value = l.multiple ? [] : null;
    };
    return d({ clean: p }), (g, h) => {
      const P = B("v-select");
      return t(), R(P, {
        options: v.value,
        modelValue: a.value,
        "onUpdate:modelValue": h[0] || (h[0] = (w) => a.value = w),
        label: e.labelCustom,
        multiple: e.multiple,
        placeholder: e.placeHolder,
        class: C(["eit-select-component", u.value]),
        clearable: e.clearable,
        disabled: l.isDisabled
      }, {
        "no-options": z(() => [
          $(" No hay más resultados. ")
        ]),
        _: 1
      }, 8, ["options", "modelValue", "label", "multiple", "placeholder", "class", "clearable", "disabled"]);
    };
  }
}, Do = ["maxlength", "placeholder"], No = {
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
  setup(e, { expose: d, emit: n }) {
    const l = e, c = n, a = j(null), m = j(""), u = S(() => l.validation && l.validation(m.value)), b = S(() => !u.value && l.requiredField && l.error ? "is-invalid" : ""), _ = () => {
      m.value = "";
    };
    return T(() => l.input, (v) => {
      v && (m.value = v);
    }), T(m, () => {
      a.value.style.height = "50px", a.value.style.height = `${a.value.scrollHeight}px`, c("emitValue", u.value ? m.value : "");
    }), H(() => {
      l.submitted && _();
    }), d({ clean: _ }), (v, p) => A((t(), s("textarea", {
      ref_key: "textarea",
      ref: a,
      "onUpdate:modelValue": p[0] || (p[0] = (g) => m.value = g),
      maxlength: e.maxLength,
      autocomplete: "off",
      class: C(["form-control eit-textarea eit-textarea-resize", b.value]),
      placeholder: e.placeHolder
    }, null, 10, Do)), [
      [
        W,
        m.value,
        void 0,
        { trim: !0 }
      ]
    ]);
  }
}, Eo = {
  install(e) {
    e.component("ButtonComponent", O), e.component("BreadcrumbComponent", me), e.component("BadgeComponent", L), e.component("TableComponent", mt), e.component("PaginationComponent", yt), e.component("DetailComponent", Ft), e.component("TabComponent", Gt), e.component("HighlightComponent", Qt), e.component("DialogComponent", to), e.component("PropsComponent", co), e.component("ProgressBarComponent", uo), e.component("AlertComponent", X), e.component("ToastComponent", wo), e.component("InputComponent", jo), e.component("SelectComponent", Bo), e.component("TextareaResizeComponent", No), e.component("LoadingComponent", Y), e.component("SkeletonComponent", M);
  }
};
export {
  Eo as default
};
