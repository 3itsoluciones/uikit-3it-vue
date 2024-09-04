import { computed as S, resolveComponent as B, openBlock as e, createElementBlock as s, normalizeClass as C, Fragment as f, createTextVNode as $, toDisplayString as y, createCommentVNode as i, createBlock as R, createElementVNode as t, createVNode as r, withCtx as z, renderList as D, renderSlot as q, mergeProps as oe, createStaticVNode as se, resolveDirective as le, withDirectives as A, ref as j, watch as N, watchEffect as H, withKeys as W, vModelText as X, normalizeStyle as O, vModelDynamic as ne } from "vue";
import { useRoute as ae } from "vue-router";
import { codeToHtml as ie } from "shiki";
import Y from "dayjs";
import ce from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";
const de = ["disabled"], re = /* @__PURE__ */ t("div", { class: "spinner-border spinner-border-sm me-1" }, null, -1), F = {
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
  setup(o, { emit: d }) {
    const n = o, l = d, c = S(() => ["eit-btn", `${n.className}`]), a = () => {
      l("emitEvent");
    };
    return (m, u) => {
      const b = B("font-awesome-icon");
      return e(), s("button", {
        onClick: a,
        class: C([c.value, "d-flex align-items-center justify-content-center"]),
        disabled: n.isDisabled
      }, [
        n.loading ? (e(), s(f, { key: 0 }, [
          re,
          $(" " + y(n.loadingText), 1)
        ], 64)) : i("", !0),
        n.loading ? i("", !0) : (e(), s(f, { key: 1 }, [
          n.icon ? (e(), R(b, {
            key: 0,
            icon: n.icon,
            class: "me-1"
          }, null, 8, ["icon"])) : i("", !0),
          $(" " + y(o.text), 1)
        ], 64))
      ], 10, de);
    };
  }
}, ue = { "aria-label": "breadcrumb" }, me = { class: "eit-breadcrumb" }, fe = /* @__PURE__ */ t("span", { class: "px-2 eit-color--text-soft" }, "/", -1), _e = {
  key: 1,
  class: "eit-color--text-soft"
}, pe = {
  __name: "BreadcrumbComponent",
  setup(o) {
    const d = ae(), n = S(() => {
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
      return e(), s("nav", ue, [
        t("ul", me, [
          t("li", null, [
            r(m, {
              to: "/",
              class: "eit-color--text-soft eit-color--text-soft--link"
            }, {
              default: z(() => [
                r(a, { icon: "fa-solid fa-house" })
              ]),
              _: 1
            }),
            fe
          ]),
          (e(!0), s(f, null, D(n.value, (u, b) => (e(), s("li", {
            key: b,
            class: "eit-breadcrumb__item"
          }, [
            q(l.$slots, u.name, oe({ ref_for: !0 }, u), () => [
              u.last ? (e(), s("span", _e, y(u.title), 1)) : (e(), R(m, {
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
  setup(o) {
    const d = o;
    return (n, l) => {
      const c = B("font-awesome-icon");
      return e(), s("span", {
        key: `badge-${d.text}`,
        class: C(`eit-badge ${d.className}`)
      }, [
        d.icon ? (e(), R(c, {
          key: 0,
          icon: d.icon,
          class: "me-1"
        }, null, 8, ["icon"])) : i("", !0),
        t("span", {
          innerHTML: d.text
        }, null, 8, he)
      ], 2);
    };
  }
}, ye = {
  key: 0,
  class: "table eit-table eit-table-responsive"
}, ve = {
  key: 0,
  class: "eit-skeleton__table-first-td"
}, be = /* @__PURE__ */ t("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "80%" }
}, null, -1), ge = [
  be
], ke = { key: 1 }, xe = /* @__PURE__ */ t("div", {
  class: "eit-skeleton eit-skeleton__title",
  style: { width: "60%" }
}, null, -1), $e = [
  xe
], we = {
  key: 0,
  class: "eit-skeleton__table-first-td"
}, Ce = /* @__PURE__ */ t("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), Re = [
  Ce
], Se = { key: 1 }, qe = /* @__PURE__ */ t("div", {
  class: "eit-skeleton eit-skeleton__text my-2",
  style: { width: "80%" }
}, null, -1), je = [
  qe
], Be = /* @__PURE__ */ se('<div class="row"><div class="col-12"><div class="d-flex"><div class="flex-shrink-0"><div class="eit-skeleton eit-skeleton__btn-square"></div></div><div class="flex-grow-1 ms-3"><div class="d-flex"><div class="flex-grow-1 ms-3"><div class="eit-skeleton eit-skeleton__title my-2" style="width:40%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div></div><div class="flex-shrink-0"><div class="eit-skeleton eit-skeleton__text my-2" style="width:30px;"></div></div></div></div></div></div></div><div class="row flex-grow-1"><div class="col-12 d-flex flex-column flex-grow-1"><div class="eit-slide__content flex-grow-1"><div class="mt-5"><div class="col-12"><h5 class="mb-3"><div class="eit-skeleton eit-skeleton__title my-2" style="width:20%;"></div></h5><ul class="list-unstyled"><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:40%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:20%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:30%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:20%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li><li class="mb-4"><div class="eit-skeleton eit-skeleton__text my-2" style="width:25%;"></div><div class="eit-skeleton eit-skeleton__text my-2" style="width:35%;"></div></li></ul></div></div></div></div></div>', 2), M = {
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
    const d = o;
    return (n, l) => (e(), s(f, null, [
      d.type === "table" ? (e(), s("table", ye, [
        t("thead", null, [
          t("tr", null, [
            (e(!0), s(f, null, D(d.table.column, (c) => (e(), s(f, { key: c }, [
              c === 1 ? (e(), s("th", ve, ge)) : i("", !0),
              c > 1 ? (e(), s("th", ke, $e)) : i("", !0)
            ], 64))), 128))
          ])
        ]),
        t("tbody", null, [
          (e(!0), s(f, null, D(d.table.row, (c) => (e(), s("tr", { key: c }, [
            (e(!0), s(f, null, D(d.table.column, (a) => (e(), s(f, { key: a }, [
              a === 1 ? (e(), s("td", we, Re)) : i("", !0),
              a > 1 ? (e(), s("td", Se, je)) : i("", !0)
            ], 64))), 128))
          ]))), 128))
        ])
      ])) : i("", !0),
      d.type === "detail" ? (e(), s(f, { key: 1 }, [
        Be
      ], 64)) : i("", !0)
    ], 64));
  }
}, De = { class: "d-flex align-items-center" }, Te = { class: "flex-shrink-0 d-flex align-items-center eit-alert__icon me-2" }, Ne = ["innerHTML"], Z = {
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
    const d = o;
    return (n, l) => {
      const c = B("font-awesome-icon");
      return e(), s("div", {
        class: C(`eit-alert eit-alert--${d.type} ${d.animation.active ? "eit-alert--animation" : "eit-alert--default"} ${d.animation.show ? "eit-alert--animation--show" : ""}`)
      }, [
        t("div", De, [
          t("div", Te, [
            r(c, {
              icon: d.icon,
              class: C(o.iconClass)
            }, null, 8, ["icon", "class"])
          ]),
          t("div", {
            class: "flex-grow-1 eit-alert__text",
            innerHTML: d.message
          }, null, 8, Ne)
        ])
      ], 2);
    };
  }
}, Pe = { class: "row" }, Le = { class: "col-12" }, Ee = { class: "table eit-table eit-table-responsive" }, Ae = ["onClick"], He = /* @__PURE__ */ t("th", {
  scope: "col",
  class: "text-center"
}, "Acciones", -1), Ve = { class: "pe-3 d-lg-none" }, ze = ["onClick"], Oe = {
  key: 0,
  class: "d-flex flex-wrap gap-1"
}, Fe = {
  key: 3,
  class: "eit-table__string"
}, Me = { class: "text-center" }, Ie = { class: "dropdown eit-dropdown d-none d-lg-block" }, Ue = {
  href: "javascript:",
  class: "eit-btn-action",
  "data-bs-toggle": "dropdown"
}, Ke = { class: "dropdown-menu dropdown-custom-menu" }, Ge = {
  key: 0,
  class: "mx-2"
}, Je = ["onClick"], Qe = {
  key: 1,
  class: "mx-2"
}, We = ["onClick"], Xe = {
  key: 2,
  class: "mx-2"
}, Ye = ["onClick"], Ze = {
  key: 3,
  class: "m-2"
}, et = /* @__PURE__ */ t("div", { class: "eit-border--bottom eit-border--color" }, null, -1), tt = [
  et
], ot = {
  key: 4,
  class: "mx-2"
}, st = ["onClick"], lt = {
  key: 5,
  class: "mx-2"
}, nt = ["onClick"], at = { class: "d-flex w-100 justify-content-between align-items-center d-lg-none text-end" }, it = /* @__PURE__ */ t("strong", null, "Acciones:", -1), ct = { class: "d-flex flex-wrap gap-2 ms-3" }, dt = ["onClick"], rt = ["onClick"], ut = ["onClick"], mt = ["onClick"], ft = ["onClick"], _t = ["onClick"], pt = {
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
  setup(o, { emit: d }) {
    const n = o, l = d, c = (h) => {
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
      var U, K, G, J;
      const w = B("font-awesome-icon"), I = le("tippy");
      return e(), s("div", Pe, [
        t("div", Le, [
          o.loading ? (e(), R(M, {
            key: 0,
            type: "table",
            table: { row: (U = o.skeleton) == null ? void 0 : U.row, column: (K = o.skeleton) == null ? void 0 : K.column }
          }, null, 8, ["table"])) : i("", !0),
          !o.loading && !((G = o.data) != null && G.length) ? (e(), R(Z, {
            key: 1,
            ref: "alert",
            class: "mb-3",
            type: "info",
            icon: "fa-solid fa-info",
            message: "<strong>No hay resultados</strong> para tu búsqueda."
          }, null, 512)) : i("", !0),
          !o.loading && ((J = o.data) != null && J.length) ? (e(), s(f, { key: 2 }, [
            t("table", Ee, [
              t("thead", null, [
                t("tr", null, [
                  (e(!0), s(f, null, D(o.columns, (k, T) => (e(), s("th", {
                    key: `column-${T}`,
                    scope: "col"
                  }, [
                    t("a", {
                      onClick: (x) => b(T),
                      href: "javascript:",
                      class: "d-flex justify-content-between"
                    }, [
                      $(y(k) + " ", 1),
                      o.sort.index === T ? (e(), s("span", {
                        key: `icono-${k}`,
                        class: "d-flex ms-2 eit-color--text"
                      }, [
                        o.sort.asc ? i("", !0) : (e(), s("span", {
                          key: `down-${k}`
                        }, [
                          r(w, { icon: "fa-solid fa-sort-down align-baseline" })
                        ])),
                        o.sort.asc ? (e(), s("span", {
                          key: `up-${k}`
                        }, [
                          r(w, { icon: "fa-solid fa-sort-up align-baseline" })
                        ])) : i("", !0)
                      ])) : (e(), s("span", {
                        key: `key-${k}`
                      }, [
                        r(w, { icon: "fa-solid fa-sort" })
                      ]))
                    ], 8, Ae)
                  ]))), 128)),
                  He
                ])
              ]),
              t("tbody", null, [
                (e(!0), s(f, null, D(o.data, (k, T) => (e(), s("tr", {
                  key: `row-${T}`
                }, [
                  (e(!0), s(f, null, D(k, (x, E) => (e(), s("td", {
                    key: `value-${E}`
                  }, [
                    t("strong", Ve, y(o.columns[Object.keys(k).indexOf(E)]) + ":", 1),
                    Object.keys(k)[o.columnLink] === E ? (e(), s(f, { key: 0 }, [
                      o.viewRecord ? (e(), s("a", {
                        key: 0,
                        onClick: (V) => c(k),
                        href: "javascript:",
                        class: "eit-table__link"
                      }, y(x), 9, ze)) : i("", !0),
                      o.viewRecord ? i("", !0) : (e(), s(f, { key: 1 }, [
                        $(y(x), 1)
                      ], 64))
                    ], 64)) : i("", !0),
                    Object.keys(k)[o.columnLink] !== E ? (e(), s(f, { key: 1 }, [
                      g(x) ? (e(), s("div", Oe, [
                        (e(!0), s(f, null, D(x, (V, te) => (e(), s("span", {
                          key: `value-array-${te}`,
                          class: "d-flex flex-wrap gap-1"
                        }, [
                          r(L, {
                            text: V.name,
                            className: V.className
                          }, null, 8, ["text", "className"])
                        ]))), 128))
                      ])) : i("", !0),
                      E === "status" ? (e(), s(f, { key: 1 }, [
                        x ? (e(), R(L, {
                          key: 0,
                          text: "Activo",
                          className: "eit-badge__outline--secondary"
                        })) : i("", !0),
                        x ? i("", !0) : (e(), R(L, {
                          key: 1,
                          text: "Inactivo",
                          className: "eit-badge__outline--gray"
                        }))
                      ], 64)) : i("", !0),
                      p(x) ? (e(), R(L, {
                        key: 2,
                        text: x.name,
                        className: x.className
                      }, null, 8, ["text", "className"])) : i("", !0),
                      v(x) ? (e(), s("span", Fe, y(x), 1)) : i("", !0)
                    ], 64)) : i("", !0)
                  ]))), 128)),
                  t("td", Me, [
                    t("div", Ie, [
                      t("a", Ue, [
                        r(w, { icon: "fa-solid fa-ellipsis" })
                      ]),
                      t("ul", Ke, [
                        o.viewRecord ? (e(), s("li", Ge, [
                          t("a", {
                            onClick: (x) => c(k),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            r(w, {
                              icon: "fa-regular fa-eye",
                              class: "eit-color--blue"
                            }),
                            $(" " + y(o.viewRecord), 1)
                          ], 8, Je)
                        ])) : i("", !0),
                        o.editRecord ? (e(), s("li", Qe, [
                          t("a", {
                            onClick: (x) => a(k),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            r(w, {
                              icon: "fa-solid fa-square-pen",
                              class: "eit-color--yellow"
                            }),
                            $(" " + y(o.editRecord), 1)
                          ], 8, We)
                        ])) : i("", !0),
                        o.downloadRecord ? (e(), s("li", Xe, [
                          t("a", {
                            onClick: (x) => u(k),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            r(w, {
                              icon: "fa-solid fa-download",
                              class: "eit-color--blue"
                            }),
                            $(" " + y(o.downloadRecord), 1)
                          ], 8, Ye)
                        ])) : i("", !0),
                        o.deleteRecord || o.enabledDisabledRecord ? (e(), s("li", Ze, tt)) : i("", !0),
                        o.enabledDisabledRecord ? (e(), s("li", ot, [
                          t("a", {
                            onClick: (x) => _(k),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            k.status ? i("", !0) : (e(), s(f, { key: 0 }, [
                              r(w, {
                                icon: "fa-regular fa-circle-check",
                                class: "eit-color--green"
                              }),
                              $(" Habilitar ")
                            ], 64)),
                            k.status ? (e(), s(f, { key: 1 }, [
                              r(w, {
                                icon: "fa-solid fa-ban",
                                class: "eit-color--red"
                              }),
                              $(" Deshabilitar ")
                            ], 64)) : i("", !0)
                          ], 8, st)
                        ])) : i("", !0),
                        o.deleteRecord ? (e(), s("li", lt, [
                          t("a", {
                            onClick: (x) => m(T),
                            class: "dropdown-item dropdown-custom-menu-item",
                            href: "javascript:"
                          }, [
                            r(w, {
                              icon: "fa-solid fa-trash",
                              class: "eit-color--red"
                            }),
                            $(" " + y(o.deleteRecord), 1)
                          ], 8, nt)
                        ])) : i("", !0)
                      ])
                    ]),
                    t("div", at, [
                      it,
                      t("div", ct, [
                        o.viewRecord ? (e(), s("a", {
                          key: 0,
                          onClick: (x) => c(k),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          r(w, {
                            icon: "fa-regular fa-eye",
                            class: "eit-color--blue"
                          })
                        ], 8, dt)) : i("", !0),
                        o.editRecord ? (e(), s("a", {
                          key: 1,
                          onClick: (x) => a(k),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          r(w, {
                            icon: "fa-solid fa-square-pen",
                            class: "eit-color--yellow"
                          })
                        ], 8, rt)) : i("", !0),
                        o.downloadRecord ? (e(), s("a", {
                          key: 2,
                          onClick: (x) => u(k),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          r(w, {
                            icon: "fa-solid fa-download",
                            class: "eit-color--blue"
                          })
                        ], 8, ut)) : i("", !0),
                        o.enabledDisabledRecord ? (e(), s(f, { key: 3 }, [
                          k.status ? i("", !0) : A((e(), s("a", {
                            key: 0,
                            onClick: (x) => _(k),
                            href: "javascript:",
                            class: "eit-btn eit-btn-outline--gray eit-btn--square"
                          }, [
                            r(w, {
                              icon: "fa-regular fa-circle-check",
                              class: "eit-color--green"
                            })
                          ], 8, mt)), [
                            [I, { content: "Habilitar", theme: "main" }]
                          ]),
                          k.status ? A((e(), s("a", {
                            key: 1,
                            onClick: (x) => _(k),
                            href: "javascript:",
                            class: "eit-btn eit-btn-outline--gray eit-btn--square"
                          }, [
                            r(w, {
                              icon: "fa-solid fa-ban",
                              class: "eit-color--red"
                            })
                          ], 8, ft)), [
                            [I, { content: "Deshabilitar", theme: "main" }]
                          ]) : i("", !0)
                        ], 64)) : i("", !0),
                        o.deleteRecord ? (e(), s("a", {
                          key: 4,
                          onClick: (x) => m(T),
                          href: "javascript:",
                          class: "eit-btn eit-btn-outline--gray eit-btn--square"
                        }, [
                          r(w, {
                            icon: "fa-solid fa-trash",
                            class: "eit-color--red"
                          })
                        ], 8, _t)) : i("", !0)
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
}, ht = { class: "eit-paginator gap-2" }, yt = ["disabled"], vt = { class: "eit-color--text eit-font__size--x1" }, bt = ["disabled"], gt = {
  __name: "PaginationComponent",
  props: {
    data: {
      type: Object,
      required: !0
    }
  },
  emits: ["updatePaginator"],
  setup(o, { emit: d }) {
    const n = o, l = d, c = j(n.data.currentPage), a = () => c.value++, m = () => c.value--, u = () => {
      c.value <= 0 && (c.value = 1), c.value > n.data.finalPage && (c.value = n.data.finalPage);
    }, b = (_) => {
      _.target.select();
    };
    return N(c, () => {
      c.value > 0 && c.value <= n.data.finalPage && l("updatePaginator", c.value);
    }), H(() => {
      n.data && (c.value = n.data.currentPage);
    }), (_, v) => {
      const p = B("font-awesome-icon");
      return e(), s("div", ht, [
        t("button", {
          onClick: m,
          disabled: o.data.currentPage === 1,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          r(p, { icon: "fa-solid fa-chevron-left" })
        ], 8, yt),
        A(t("input", {
          type: "number",
          "onUpdate:modelValue": v[0] || (v[0] = (g) => c.value = g),
          onInput: u,
          onKeyup: W(u, ["enter"]),
          onBlur: u,
          onFocus: b,
          class: "eit-input eit-paginator__input eit-font__size--x1 text-center",
          "aria-label": "Número de página"
        }, null, 544), [
          [
            X,
            c.value,
            void 0,
            { number: !0 }
          ]
        ]),
        t("span", vt, [
          $(" de " + y(o.data.finalPage) + " ", 1),
          o.data.finalPage === 1 ? (e(), s(f, { key: 0 }, [
            $(" página ")
          ], 64)) : i("", !0),
          o.data.finalPage > 1 ? (e(), s(f, { key: 1 }, [
            $(" páginas ")
          ], 64)) : i("", !0)
        ]),
        t("button", {
          onClick: a,
          disabled: o.data.currentPage === o.data.finalPage,
          class: "eit-btn eit-btn--square eit-btn-outline--gray"
        }, [
          r(p, { icon: "fa-solid fa-chevron-right" })
        ], 8, bt)
      ]);
    };
  }
}, kt = { class: "row" }, xt = { class: "col-12" }, $t = { class: "d-flex" }, wt = { class: "flex-shrink-0" }, Ct = { class: "flex-grow-1" }, Rt = { class: "d-flex" }, St = { class: "flex-grow-1 d-flex flex-column ms-3" }, qt = { class: "eit-font--primary mb-0" }, jt = { class: "eit-color--text mb-0" }, Bt = { class: "flex-shrink-0" }, Dt = {
  key: 0,
  class: "dropdown eit-dropdown d-none d-lg-block"
}, Tt = {
  href: "javascript:",
  class: "eit-btn-action",
  "data-bs-toggle": "dropdown"
}, Nt = { class: "dropdown-menu dropdown-custom-menu" }, Pt = {
  key: 0,
  class: "mx-2"
}, Lt = {
  key: 1,
  class: "mx-2"
}, Et = {
  key: 2,
  class: "m-2"
}, At = /* @__PURE__ */ t("div", { class: "eit-border--bottom eit-border--color" }, null, -1), Ht = [
  At
], Vt = {
  key: 3,
  class: "mx-2"
}, zt = {
  key: 4,
  class: "mx-2"
}, Ot = { class: "row flex-grow-1" }, Ft = { class: "col-12 d-flex flex-column flex-grow-1" }, Mt = { class: "eit-slide__content flex-grow-1" }, It = {
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
  setup(o, { emit: d }) {
    const n = o, l = d, c = () => {
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
      return e(), s("section", {
        class: C(["eit-slide d-flex flex-column", [o.slide && "eit-slide--right", o.slideSmall && "eit-slide--small"]])
      }, [
        n.loading ? (e(), R(M, {
          key: 0,
          type: "detail"
        })) : i("", !0),
        n.loading ? i("", !0) : (e(), s(f, { key: 1 }, [
          t("div", kt, [
            t("div", xt, [
              t("div", $t, [
                t("div", wt, [
                  t("button", {
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
                t("div", Ct, [
                  t("div", Rt, [
                    t("div", St, [
                      t("h4", qt, [
                        t("strong", null, [
                          q(_.$slots, "title")
                        ])
                      ]),
                      t("p", jt, [
                        q(_.$slots, "subtitle")
                      ])
                    ]),
                    t("div", Bt, [
                      n.dropdown ? (e(), s("div", Dt, [
                        t("a", Tt, [
                          r(p, { icon: "fa-solid fa-ellipsis" })
                        ]),
                        t("ul", Nt, [
                          n.editRecord ? (e(), s("li", Pt, [
                            t("a", {
                              onClick: v[0] || (v[0] = (g) => m(n.record)),
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              r(p, {
                                icon: "fa-solid fa-square-pen",
                                class: "eit-color--yellow"
                              }),
                              $(" " + y(o.editRecord), 1)
                            ])
                          ])) : i("", !0),
                          n.downloadRecord ? (e(), s("li", Lt, [
                            t("a", {
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
                          o.deleteRecord || o.enabledDisabledRecord ? (e(), s("li", Et, Ht)) : i("", !0),
                          n.enabledDisabledRecord ? (e(), s("li", Vt, [
                            t("a", {
                              onClick: v[2] || (v[2] = (g) => a(o.record)),
                              class: "dropdown-item dropdown-custom-menu-item",
                              href: "javascript:"
                            }, [
                              n.record.status ? i("", !0) : (e(), s(f, { key: 0 }, [
                                r(p, {
                                  icon: "fa-regular fa-circle-check",
                                  class: "eit-color--green"
                                }),
                                $(" Habilitar ")
                              ], 64)),
                              n.record.status ? (e(), s(f, { key: 1 }, [
                                r(p, {
                                  icon: "fa-solid fa-ban",
                                  class: "eit-color--red"
                                }),
                                $(" Deshabilitar ")
                              ], 64)) : i("", !0)
                            ])
                          ])) : i("", !0),
                          n.deleteRecord ? (e(), s("li", zt, [
                            t("a", {
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
          t("div", Ot, [
            t("div", Ft, [
              t("div", Mt, [
                q(_.$slots, "component")
              ])
            ])
          ]),
          q(_.$slots, "footer")
        ], 64))
      ], 2);
    };
  }
}, Ut = { class: "d-flex justify-content-between align-items-center" }, Kt = ["onClick"], Gt = {
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
    const d = o, n = (a) => a < 99 ? a : "+99", l = j(0), c = (a) => {
      l.value = a;
    };
    return (a, m) => (e(), s(f, null, [
      t("div", Ut, [
        t("ul", {
          class: C(`eit-tabs ${d.className}`)
        }, [
          (e(!0), s(f, null, D(o.data, (u, b) => (e(), s("li", {
            key: b,
            class: "eit-tabs__item"
          }, [
            t("a", {
              href: "javascript:",
              onClick: (_) => c(b),
              class: C(["eit-tabs__item__link", l.value === b ? "active" : ""])
            }, [
              $(y(u.name) + " ", 1),
              u.number ? (e(), s("span", Gt, y(n(u.number)), 1)) : i("", !0)
            ], 10, Kt)
          ]))), 128))
        ], 2),
        q(a.$slots, "dropdown")
      ]),
      t("div", Jt, [
        t("div", Qt, [
          q(a.$slots, `tab-${l.value}`)
        ])
      ])
    ], 64));
  }
}, Xt = ["innerHTML"], Yt = {
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
    const d = o, n = j("");
    return (async () => {
      const c = `${d.code}`;
      n.value = await ie(c, {
        lang: d.lang,
        theme: d.theme
      });
    })(), (c, a) => (e(), s("div", { innerHTML: n.value }, null, 8, Xt));
  }
}, Zt = "" + new URL("img/loading.svg", import.meta.url).href, eo = { class: "p-3 eit-loading" }, ee = {
  __name: "LoadingComponent",
  props: {
    size: {
      type: String,
      required: !1,
      default: "100"
    }
  },
  setup(o) {
    const d = o;
    return (n, l) => (e(), s("div", eo, [
      t("img", {
        style: O(`width:${d.size}px`),
        src: Zt
      }, null, 4)
    ]));
  }
}, to = { class: "d-flex justify-content-between align-items-center" }, oo = { class: "eit-dialog__body" }, so = { class: "d-flex gap-2 justify-content-end mt-3" }, lo = {
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
  setup(o, { expose: d, emit: n }) {
    const l = o, c = n, a = j(null), m = () => {
      a.value.showModal(), a.value.classList.add("show");
    }, u = () => {
      a.value.close(), a.value.classList.remove("show"), c("emitCloseDialog");
    }, b = () => {
      c("emitSubmit");
    };
    return d({ showDialog: m, closeDialog: u }), (_, v) => {
      const p = B("font-awesome-icon");
      return e(), s("dialog", {
        ref_key: "dialog",
        ref: a,
        class: C(["eit-dialog", l.className])
      }, [
        o.loading ? (e(), R(ee, {
          key: 0,
          size: "70"
        })) : i("", !0),
        o.loading ? i("", !0) : (e(), s(f, { key: 1 }, [
          t("div", to, [
            q(_.$slots, "head"),
            t("button", {
              onClick: u,
              class: "eit-dialog__close"
            }, [
              r(p, { icon: ["fas", "xmark"] })
            ])
          ]),
          t("div", oo, [
            q(_.$slots, "content")
          ]),
          t("div", so, [
            r(F, {
              onClick: u,
              className: "eit-btn-outline--gray",
              text: "Volver"
            }),
            l.btnSubmit ? (e(), R(F, {
              key: 0,
              className: "eit-btn--primary",
              text: "Guardar",
              loadingText: "Guardando...",
              loading: o.loadingSubmit,
              onEmitEvent: b,
              isDisabled: o.disabledSubmit
            }, null, 8, ["loading", "isDisabled"])) : i("", !0)
          ])
        ], 64))
      ], 2);
    };
  }
}, no = { class: "row" }, ao = { class: "col" }, io = /* @__PURE__ */ t("h2", { class: "eit-font__size--x4 eit-color--text eit-font__weight--300 eit-border--bottom eit-border--color mb-3" }, [
  /* @__PURE__ */ t("strong", { class: "eit-font__weight--900" }, "Props")
], -1), co = { class: "eit-table--overflow" }, ro = { class: "table eit-table" }, uo = /* @__PURE__ */ t("thead", null, [
  /* @__PURE__ */ t("tr", null, [
    /* @__PURE__ */ t("th", null, "Name"),
    /* @__PURE__ */ t("th", null, "Type"),
    /* @__PURE__ */ t("th", null, "Default")
  ])
], -1), mo = {
  __name: "PropsComponent",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(o) {
    const d = o;
    return (n, l) => (e(), s("div", no, [
      t("div", ao, [
        io,
        t("div", co, [
          t("table", ro, [
            uo,
            t("tbody", null, [
              (e(!0), s(f, null, D(d.data, (c) => (e(), s("tr", {
                key: c.name
              }, [
                t("td", null, [
                  r(L, {
                    text: c.name,
                    className: "eit-badge__outline--gray"
                  }, null, 8, ["text"])
                ]),
                t("td", null, [
                  t("code", null, y(c.type), 1)
                ]),
                t("td", null, [
                  t("code", null, y(c.default), 1)
                ])
              ]))), 128))
            ])
          ])
        ])
      ])
    ]));
  }
}, fo = { class: "eit-progress eit-progress--30" }, _o = {
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
  setup(o) {
    const d = o;
    return (n, l) => (e(), s("div", fo, [
      t("div", {
        class: C(["eit-progress__bar", `eit-progress__bar--${d.type}`]),
        style: O(`width: ${d.percentage}%`)
      }, y(d.percentage) + "% ", 7),
      t("div", {
        class: "eit-progress__bar eit-progress__bar--transparent",
        style: O(`width: ${100 - d.percentage}%`)
      }, y(100 - d.percentage) + "% ", 5)
    ]));
  }
}, po = { class: "d-flex" }, ho = { class: "flex-shrink-0 eit-toast__left" }, yo = {
  key: "success",
  class: "eit-toast__icon eit-font__size--x7"
}, vo = {
  key: "error",
  class: "eit-toast__icon eit-font__size--x7"
}, bo = {
  key: "warning",
  class: "eit-toast__icon eit-font__size--x7"
}, go = {
  key: "info",
  class: "eit-toast__icon eit-font__size--x7"
}, ko = { class: "flex-grow-1 ms-3" }, xo = { class: "d-flex" }, $o = { class: "flex-grow-1 me-3" }, wo = { class: "eit-toast__title" }, Co = { class: "eit-toast__text" }, Ro = { class: "flex-shrink-0" }, So = {
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
  setup(o, { expose: d }) {
    const n = o, l = j(!1), c = j("hidden"), a = j(""), m = S(() => ({
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
      return e(), s("div", {
        class: C(["eit-toast__container", m.value])
      }, [
        t("div", {
          class: C(["eit-toast box-shadow", `eit-toast--${n.data.type}`])
        }, [
          t("div", po, [
            t("div", ho, [
              n.type === "success" ? (e(), s("span", yo, [
                r(p, { icon: "fa-solid fa-circle-check" })
              ])) : i("", !0),
              n.type === "error" ? (e(), s("span", vo, [
                r(p, { icon: "fa-solid fa-circle-xmark" })
              ])) : i("", !0),
              n.type === "warning" ? (e(), s("span", bo, [
                r(p, { icon: "fa-solid fa-triangle-exclamation" })
              ])) : i("", !0),
              n.type === "info" ? (e(), s("span", go, [
                r(p, { icon: "fa-solid fa-circle-info" })
              ])) : i("", !0)
            ]),
            t("div", ko, [
              t("div", xo, [
                t("div", $o, [
                  t("p", wo, [
                    n.data.code ? (e(), s(f, { key: 0 }, [
                      $(y(n.data.code), 1)
                    ], 64)) : i("", !0),
                    $(" " + y(n.data.title), 1)
                  ]),
                  t("p", Co, y(n.data.message), 1)
                ]),
                t("div", Ro, [
                  t("a", {
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
}, qo = ["type", "maxlength", "placeholder"], jo = {
  key: 0,
  class: "eit-label-float"
}, Bo = {
  key: 1,
  class: "eit-input__display__icon eit-input__display__float-left--icon"
}, Do = {
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
  setup(o, { expose: d, emit: n }) {
    const l = o, c = n, a = j(""), m = S(
      () => l.validation ? l.validation(a.value) : !0
    ), u = S(() => !m.value && l.requiredField && l.error ? "is-invalid" : ""), b = S(() => l.floatLabel ? "" : l.placeHolder), _ = S(() => [
      l.floatLabel || l.floatLeft || l.floatRight ? "eit-input__display" : "",
      l.floatLeft ? "eit-input__display__float-left" : "",
      l.floatRight ? "eit-input__display__float-right" : ""
    ]), v = () => {
      c("emitPressEnter");
    }, p = () => {
      a.value = "";
    };
    return N(
      () => l.input,
      (g) => {
        g && (a.value = g);
      }
    ), N(a, () => {
      c("emitValue", m.value ? a.value : "");
    }), H(() => {
      l.inputMask && (a.value = l.inputMask(a.value)), l.submitted && p();
    }), d({ clean: p }), (g, h) => (e(), s("div", {
      class: C(_.value)
    }, [
      A(t("input", {
        autocomplete: "off",
        class: C(["form-control eit-input", u.value]),
        type: o.inputType,
        "onUpdate:modelValue": h[0] || (h[0] = (P) => a.value = P),
        maxlength: l.maxLength,
        onKeypress: h[1] || (h[1] = (P) => l.keyPress && l.keyPress(P)),
        placeholder: b.value,
        onKeyup: W(v, ["enter"])
      }, null, 42, qo), [
        [
          ne,
          a.value,
          void 0,
          { trim: !0 }
        ]
      ]),
      l.floatLabel ? (e(), s("label", jo, y(l.floatLabel), 1)) : i("", !0),
      l.floatLeft ? (e(), s("span", Bo, [
        q(g.$slots, "float-left")
      ])) : i("", !0),
      l.floatRight ? (e(), s("span", Do, [
        q(g.$slots, "float-right")
      ])) : i("", !0)
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
  setup(o, { expose: d, emit: n }) {
    const l = o, c = n, a = j(null), m = S(
      () => l.validation ? l.validation(a.value) : !0
    ), u = S(() => !m.value && l.requiredField && l.error ? "is-invalid" : ""), b = () => Array.isArray(a.value) ? l.data.filter((g) => !a.value.some((h) => h.id === g.id)) : l.data, _ = () => a.value ? l.data.filter((g) => g.id !== a.value.id) : l.data, v = S(() => l.multiple ? b() : _());
    N(
      () => l.selected,
      (g) => {
        g && (a.value = g);
      },
      { immediate: !0 }
    ), N(a, () => {
      c("emitValue", m.value ? a.value : "");
    }), H(() => {
      l.submitted && p();
    });
    const p = () => {
      a.value = l.multiple ? [] : null;
    };
    return d({ clean: p }), (g, h) => {
      const P = B("v-select");
      return e(), R(P, {
        options: v.value,
        modelValue: a.value,
        "onUpdate:modelValue": h[0] || (h[0] = (w) => a.value = w),
        label: o.labelCustom,
        multiple: o.multiple,
        placeholder: o.placeHolder,
        class: C(["eit-select-component", u.value]),
        clearable: o.clearable,
        disabled: l.isDisabled
      }, {
        "no-options": z(() => [
          $(" No hay más resultados. ")
        ]),
        _: 1
      }, 8, ["options", "modelValue", "label", "multiple", "placeholder", "class", "clearable", "disabled"]);
    };
  }
}, Po = ["maxlength", "placeholder"], Lo = {
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
  setup(o, { expose: d, emit: n }) {
    const l = o, c = n, a = j(null), m = j(""), u = S(() => l.validation && l.validation(m.value)), b = S(() => !u.value && l.requiredField && l.error ? "is-invalid" : ""), _ = () => {
      m.value = "";
    };
    return N(
      () => l.input,
      (v) => {
        v && (m.value = v);
      }
    ), N(m, () => {
      a.value.style.height = "50px", a.value.style.height = `${a.value.scrollHeight}px`, c("emitValue", u.value ? m.value : "");
    }), H(() => {
      l.submitted && _();
    }), d({ clean: _ }), (v, p) => A((e(), s("textarea", {
      ref_key: "textarea",
      ref: a,
      "onUpdate:modelValue": p[0] || (p[0] = (g) => m.value = g),
      maxlength: o.maxLength,
      autocomplete: "off",
      class: C(["form-control eit-textarea eit-textarea-resize", b.value]),
      placeholder: o.placeHolder
    }, null, 10, Po)), [
      [
        X,
        m.value,
        void 0,
        { trim: !0 }
      ]
    ]);
  }
}, Q = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlertComponent: Z,
  BadgeComponent: L,
  BreadcrumbComponent: pe,
  ButtonComponent: F,
  DetailComponent: It,
  DialogComponent: lo,
  HighlightComponent: Yt,
  InputComponent: To,
  LoadingComponent: ee,
  PaginationComponent: gt,
  ProgressBarComponent: _o,
  PropsComponent: mo,
  SelectComponent: No,
  SkeletonComponent: M,
  TabComponent: Wt,
  TableComponent: pt,
  TextareaResizeComponent: Lo,
  ToastComponent: So
}, Symbol.toStringTag, { value: "Module" }));
Y.extend(ce);
Y.locale("es");
const Fo = {
  install(o) {
    Object.keys(Q).forEach((d) => {
      o.component(d, Q[d]);
    });
  }
};
export {
  Fo as default
};
