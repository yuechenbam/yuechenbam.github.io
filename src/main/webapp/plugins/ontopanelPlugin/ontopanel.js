(() => {
  "use strict";
  var e = {
      398: (e, t, o) => {
        o.d(t, { Z: () => a });
        var n = o(81),
          r = o.n(n),
          l = o(645),
          i = o.n(l)()(r());
        i.push([
          e.id,
          ".error-list{margin-top:5px;overflow:auto;padding:5px}.error-list .error-type{font-size:15px;background-color:#d3d3d3;font-weight:bold}.error-list ul{padding-left:12px}.error-list ul li{margin:10px;cursor:pointer}.error-list hr{border-top:2px solid #000;margin-bottom:5px}.mapping-tool form{display:flex}.mapping-tool form select{border:none;border-radius:2px}.mapping-tool form input{border:none;border-radius:2px;font-size:12px;cursor:pointer;color:#000;background-color:#d3d3d3}.mapping-tool form input:hover{background-color:gray}.convertor-container{width:100%}.convertor-container .convertor-bar{height:30px;min-width:150px;margin-bottom:15px;display:flex}.convertor-container .convertor-bar select{border:none;border-radius:2px}.convertor-container .convertor-bar input{padding:5px;border:none;border-radius:2px;font-size:16px;cursor:pointer;color:#fff;background-color:#4682b4}.convertor-container .convertor-bar input:hover{background-color:#00008b}.convertor-container .transformer{font-size:12px;display:flex;margin-bottom:8px}.convertor-container .transformer input{margin-left:5px;padding:2px;border:none;border-radius:2px;cursor:pointer;color:#fff;background-color:#4682b4}.convertor-container .transformer input:hover{background-color:#00008b}.convertor-container .convertor-show{border:1px solid #000;height:300px}.convertor-container .convertor-show .convertor-btn-group{display:flex;width:100%}.convertor-container .convertor-show .convertor-btn-group input{width:100%;padding:5px;border:none;border-radius:2px;font-size:16px;cursor:pointer;color:#fff;background-color:#4682b4}.convertor-container .convertor-show .convertor-btn-group input:hover{background-color:#00008b}.convertor-container .convertor-show .convertor-content{font-size:14px;height:280px;overflow:auto}",
          "",
        ]);
        const a = i;
      },
      119: (e, t, o) => {
        o.d(t, { Z: () => a });
        var n = o(81),
          r = o.n(n),
          l = o(645),
          i = o.n(l)()(r());
        i.push([
          e.id,
          ".ontopanel-tree{height:400px;border-radius:5px}.ontopanel-tree button{cursor:pointer}.ontopanel-tree hr{margin-top:4px;border:1px solid #333}.ontopanel-tree .tree-box-title{background-color:#d3d3d3}.ontopanel-tree .tree-box-content{font-size:14px;margin-top:3px}.ontopanel-tree .tree-content ul{list-style:none;padding-left:12px}.ontopanel-tree .tree-content li{margin:3px}.ontopanel-tree .tree-content hr{width:95%;border-top:2px solid #000;margin-bottom:0px}.ontopanel-tree .tree-content .ontoterm-btn{color:#d3d3d3;border:none;padding:0;cursor:pointer}.ontopanel-tree .tree-content .ontoterm-btn:hover{color:#4682b4}.ontopanel-tree .tree-content .collapse-btn{color:#d3d3d3;border:none;padding:0;cursor:pointer;margin-left:5px}.ontopanel-tree .tree-content .collapse-btn:hover{color:#4682b4}.ontopanel-tree .tree-content .tree-entity-box{display:none;white-space:normal;word-break:break-all;position:relative;z-index:10;border:1px solid #888;width:280px;max-height:200px;overflow:auto;padding:.5rem}.ontopanel-tree .tree-content .li-com{display:flex;white-space:nowrap;font-size:14px}.ontopanel-app{border:1px solid #000;height:500px;width:500px;background-color:#4682b4;font-size:16px;padding:5px;position:absolute}.ontopanel-sign{display:flex;height:40px;justify-content:space-between}.ontopanel-sign button{cursor:pointer;height:20px}.onto-button{cursor:pointer}.onto-button .ontopanel-menu{display:none;position:relative;z-index:3;background-color:#fefefe;width:80px;top:5px}.onto-button .ontopanel-menu .menu-tag{cursor:pointer;padding:8px 10px}.onto-button .ontopanel-menu .menu-tag:hover{background-color:gray}.ontopanel-box{position:absolute;z-index:5;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.4)}.ontopanel-box .box-inner{background-color:#fefefe;margin:10% auto;padding:15px;border:1px solid #888;width:60%}.ontopanel-box .box-inner .box-close-span{color:#aaa;float:right;font-size:28px;font-weight:bold;cursor:pointer}.ontopanel-box .box-inner .box-close-span:hover{color:#000}.ontopanel-box .box-inner .ontopanel-form{height:100%}.ontopanel-box .box-inner .ontopanel-form h3{margin:0px}.ontopanel-box .box-inner .ontopanel-form .box-info{font-weight:bold}.ontopanel-box .box-inner .ontopanel-form div{margin-bottom:.5rem}.ontopanel-box .box-inner .ontopanel-form input{padding:.5rem;width:90%;background:#eee;border:1px solid #ddd;outline:none;border-radius:.2em}.ontopanel-box .box-inner .ontopanel-form button{font-size:15px;width:100%;height:30px;margin-bottom:.5rem;font-weight:bold;color:#fff;border:none;outline:none;cursor:pointer;border-radius:.2em;background:green}.ontopanel-box .box-inner .ontopanel-form a{font-size:13px;color:#4682b4;text-decoration:none;cursor:pointer}.ontopanel-box .box-inner .ontopanel-form p{margin:5px}",
          "",
        ]);
        const a = i;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var o = "",
                  n = void 0 !== t[5];
                return (
                  t[4] && (o += "@supports (".concat(t[4], ") {")),
                  t[2] && (o += "@media ".concat(t[2], " {")),
                  n &&
                    (o += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (o += e(t)),
                  n && (o += "}"),
                  t[2] && (o += "}"),
                  t[4] && (o += "}"),
                  o
                );
              }).join("");
            }),
            (t.i = function (e, o, n, r, l) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (n)
                for (var a = 0; a < this.length; a++) {
                  var s = this[a][0];
                  null != s && (i[s] = !0);
                }
              for (var d = 0; d < e.length; d++) {
                var p = [].concat(e[d]);
                (n && i[p[0]]) ||
                  (void 0 !== l &&
                    (void 0 === p[5] ||
                      (p[1] = "@layer"
                        .concat(p[5].length > 0 ? " ".concat(p[5]) : "", " {")
                        .concat(p[1], "}")),
                    (p[5] = l)),
                  o &&
                    (p[2]
                      ? ((p[1] = "@media "
                          .concat(p[2], " {")
                          .concat(p[1], "}")),
                        (p[2] = o))
                      : (p[2] = o)),
                  r &&
                    (p[4]
                      ? ((p[1] = "@supports ("
                          .concat(p[4], ") {")
                          .concat(p[1], "}")),
                        (p[4] = r))
                      : (p[4] = "".concat(r))),
                  t.push(p));
              }
            }),
            t
          );
        };
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        var t = [];
        function o(e) {
          for (var o = -1, n = 0; n < t.length; n++)
            if (t[n].identifier === e) {
              o = n;
              break;
            }
          return o;
        }
        function n(e, n) {
          for (var l = {}, i = [], a = 0; a < e.length; a++) {
            var s = e[a],
              d = n.base ? s[0] + n.base : s[0],
              p = l[d] || 0,
              c = "".concat(d, " ").concat(p);
            l[d] = p + 1;
            var u = o(c),
              h = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== u) t[u].references++, t[u].updater(h);
            else {
              var m = r(h, n);
              (n.byIndex = a),
                t.splice(a, 0, { identifier: c, updater: m, references: 1 });
            }
            i.push(c);
          }
          return i;
        }
        function r(e, t) {
          var o = t.domAPI(t);
          return (
            o.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                o.update((e = t));
              } else o.remove();
            }
          );
        }
        e.exports = function (e, r) {
          var l = n((e = e || []), (r = r || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < l.length; i++) {
              var a = o(l[i]);
              t[a].references--;
            }
            for (var s = n(e, r), d = 0; d < l.length; d++) {
              var p = o(l[d]);
              0 === t[p].references && (t[p].updater(), t.splice(p, 1));
            }
            l = s;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, o) {
          var n = (function (e) {
            if (void 0 === t[e]) {
              var o = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                o instanceof window.HTMLIFrameElement
              )
                try {
                  o = o.contentDocument.head;
                } catch (e) {
                  o = null;
                }
              t[e] = o;
            }
            return t[e];
          })(e);
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          n.appendChild(o);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, o) => {
        e.exports = function (e) {
          var t = o.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (o) {
              !(function (e, t, o) {
                var n = "";
                o.supports && (n += "@supports (".concat(o.supports, ") {")),
                  o.media && (n += "@media ".concat(o.media, " {"));
                var r = void 0 !== o.layer;
                r &&
                  (n += "@layer".concat(
                    o.layer.length > 0 ? " ".concat(o.layer) : "",
                    " {"
                  )),
                  (n += o.css),
                  r && (n += "}"),
                  o.media && (n += "}"),
                  o.supports && (n += "}");
                var l = o.sourceMap;
                l &&
                  "undefined" != typeof btoa &&
                  (n +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(l)))),
                      " */"
                    )),
                  t.styleTagTransform(n, e, t.options);
              })(t, e, o);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    t = {};
  function o(n) {
    var r = t[n];
    if (void 0 !== r) return r.exports;
    var l = (t[n] = { id: n, exports: {} });
    return e[n](l, l.exports, o), l.exports;
  }
  (o.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return o.d(t, { a: t }), t;
  }),
    (o.d = (e, t) => {
      for (var n in t)
        o.o(t, n) &&
          !o.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      let e = new (class {
        constructor() {
          (this.mesoNamespace = [
            "base:https://purl.matolab.org/mseo/methods/example/",
            "mid:https://purl.matolab.org/mseo/mid/",
            "cco:http://www.ontologyrepository.com/CommonCoreOntologies/",
            "obo:http://purl.obolibrary.org/obo/",
            "pt:http://www.daml.org/2003/01/periodictable/PeriodicTable#",
            "geo:http://www.opengis.net/ont/geosparql#",
          ]),
            (this.ontoBank = { "ontopanel-onto-extra-btn-MSEO": {} }),
            (this.currentCategoriesContent = {
              title: null,
              categories: {
                Class: { name: "Class", content: null },
                OP: { name: "ObjectProperty", content: null },
                DP: { name: "DatatypeProperty", content: null },
                Individual: { name: "Individual", content: null },
                AP: { name: "AnnotationProperty", content: null },
                Datatype: { name: "Datatype", content: null },
              },
            });
        }
        modifyOntoBank = (e, t) => {
          switch (t) {
            case "reset":
              this.ontoBank = { "ontopanel-onto-extra-btn-MSEO": {} };
              break;
            case "add":
              this.ontoBank[e[0]] = e[1];
              break;
            case "delete":
              delete this.ontoBank[e[0]];
          }
        };
        modifyCurrentCategoriesContent = (e, t, o) => {
          switch (o) {
            case "reset":
              this.currentCategoriesContent = {
                title: "none",
                categories: {
                  Class: { name: "Class", content: null },
                  OP: { name: "ObjectProperty", content: null },
                  DP: { name: "DatatypeProperty", content: null },
                  Individual: { name: "Individual", content: null },
                  AP: { name: "AnnotationProperty", content: null },
                  Datatype: { name: "Datatype", content: null },
                },
              };
              break;
            case "selected":
              (this.currentCategoriesContent.title = e),
                Object.keys(this.currentCategoriesContent.categories).forEach(
                  (e) => {
                    this.currentCategoriesContent.categories[e].content = t[e];
                  }
                );
          }
        };
        loadCurrentTable = (e, t = "selected") => {
          switch (t) {
            case "selected":
              let o = e.onto_table.tree;
              this.modifyCurrentCategoriesContent(e.title, o, t);
              break;
            case "reset":
              this.modifyCurrentCategoriesContent(null, null, t);
          }
          (document.getElementById(
            "ontopanel-tree-title"
          ).innerHTML = `selected: ${this.currentCategoriesContent.title}`),
            console.log("load data"),
            document.getElementById("ontopanel-tree-class-btn").click();
        };
      })();
      const t = class {
          constructor(e, t) {
            (this.app = e), (this.data = t), this.init();
          }
          init() {
            (this.btn = document.createElement("button")),
              (this.btn.innerHTML =
                '<div class="onto-button"> <div name="button-name" style="border:none">buttonname</div> <div class="ontopanel-menu" style="display:none"> <div class="menu-tag">Info</div> <div class="menu-tag">Update</div> <div class="menu-tag">Delete</div> </div> <div class="ontopanel-box" style="display:none"> <div class="box-inner"> <span class="box-close-span">&times;</span> <div name="info-detail" style="overflow:auto;font-size:15px;text-align:left;white-space:nowrap"></div> </div> </div> </div> ');
            let t = this.data.title;
            this.btn.querySelector('div[name="button-name"]').textContent = t;
            const o = "ontopanel-onto-extra-btn-" + t;
            (this.btn.id = o),
              e.modifyOntoBank([o, this.data], "add"),
              (this.btn.onclick = (t) => {
                t.preventDefault();
                let o = this.btn.id,
                  n = e.ontoBank[o];
                e.loadCurrentTable(n);
              }),
              this.btn.addEventListener("contextmenu", (e) => {
                e.preventDefault(), this.triggerMenu();
              }),
              (this.btn.onmouseleave = (e) => {
                e.preventDefault(),
                  (this.btn.querySelector(".ontopanel-menu").style.display =
                    "none");
              });
          }
          triggerMenu = () => {
            let e = this.btn.querySelector(".ontopanel-menu"),
              t = e.children[0],
              o = e.children[1],
              r = e.children[2];
            (e.style.display = "block"),
              (o.onclick = (t) => {
                t.preventDefault(),
                  t.stopPropagation(),
                  (e.style.display = "none");
                let o = new n(this.app);
                o.updateTigger(this.btn.id),
                  (o.ontoForm.querySelector('input[name="formName"]').value =
                    this.data.title);
              }),
              (t.onclick = (t) => {
                t.preventDefault(),
                  t.stopPropagation(),
                  (e.style.display = "none"),
                  this.showOntoInfo();
              }),
              (r.onclick = (t) => {
                t.preventDefault(),
                  t.stopPropagation(),
                  (e.style.display = "none"),
                  this.deleteOnto();
              });
          };
          showOntoInfo = () => {
            let t = this.btn.id,
              o = e.ontoBank[t].title,
              n = e.ontoBank[t].onto_source,
              r = e.ontoBank[t].date_created,
              l = this.btn.querySelector(".ontopanel-box");
            l.onclick = (e) => {
              e.stopPropagation();
            };
            let i = this.btn.querySelector('div[name="info-detail"]');
            (this.btn.querySelector(".box-close-span").onclick = () => {
              l.style.display = "none";
            }),
              (i.innerHTML = `\n      <h4>Info about this ontology:</h4>\n      <ul style="padding-left:20px">\n        <li><b>title</b>: ${o}</li>\n        <li><b>source</b>: ${n}</li>\n        <li><b>updated date</b>: ${r}</li>\n      </ul>\n      `),
              (l.style.display = "block");
          };
          deleteOnto = () => {
            let t = this.btn.id,
              o = localStorage.getItem("loginUser"),
              n = e.ontoBank[t].id;
            o
              ? ((o = JSON.parse(o)),
                fetch(
                  "https://ontopanel.herokuapp.com/api/v1/ontos/change/" + n,
                  {
                    method: "DELETE",
                    headers: new Headers({ Authorization: `Token ${o.token}` }),
                  }
                )
                  .then((o) => {
                    o.ok
                      ? (e.ontoBank[t].title ==
                          e.currentCategoriesContent.title &&
                          e.loadCurrentTable(null, "reset"),
                        e.modifyOntoBank([t, null], "delete"),
                        this.btn.remove(),
                        this.handleInfoToggle(
                          "Deleted in your databank!",
                          "green"
                        ))
                      : o.json().then((e) => {
                          let t = Object.keys(e)[0];
                          this.handleInfoToggle(e[t], "red");
                        });
                  })
                  .catch((e) => {
                    this.handleInfoToggle(e, "red");
                  }))
              : (e.ontoBank[t].title == e.currentCategoriesContent.title &&
                  e.loadCurrentTable(null, "reset"),
                e.modifyOntoBank([t, null], "delete"),
                this.btn.remove(),
                this.handleInfoToggle("Deleted locally", "green"));
          };
          handleInfoToggle = (e, t) => {
            let o = this.app.querySelector("#ontopanel-onto-menu-info");
            (o.innerText = e),
              (o.style.color = t),
              (o.style.display = "block"),
              setTimeout(() => {
                o.style.display = "none";
              }, 8e3);
          };
        },
        n = class {
          constructor(e) {
            (this.app = e), this.init();
          }
          init() {
            (this.uploaderBox = document.createElement("div")),
              (this.uploaderBox.innerHTML =
                '<div class="ontopanel-box"> <div class="box-inner"> <span class="box-close-span">&times;</span> <form enctype="multipart/form-data" class="ontopanel-form"> <h3 style="margin:0">Uploader</h3> <br/> <div> <p>Please upload a file</p> <input type="file" name="formFile"/> </div> <div> <p>Or <br>Enter URL of raw data</p> <input type="url" name="formURL" placeholder="https://example.com"/> </div> <div> <p>And enter the ontology name</p> <input type="text" name="formName" placeholder="mseo" style="width:80px" maxlength="5" required="true"> </div> <div> <button type="submit" name="upload">Submit</button> <button type="submit" name="update" style="display:none">Update</button> <span name="form-info" style="display:none"></span> </div> </form> </div> </div>'),
              (this.uploaderBox.style.display = "none"),
              this.app.appendChild(this.uploaderBox);
            let e = this.uploaderBox.querySelector(".box-close-span"),
              t = this.uploaderBox.querySelector("form");
            (this.ontoForm = t),
              (e.onclick = () => {
                this.ontoForm.reset(),
                  (this.uploaderBox.style.display = "none");
              });
          }
          addTrigger = () => {
            (this.uploaderBox.style.display = "block"),
              console.log(this.uploaderBox);
            let e = this.ontoForm.querySelector('button[name="upload"]');
            this.updateOrAddBtn("add"),
              (e.onclick = (e) => {
                e.preventDefault(),
                  this.ontoForm.checkValidity()
                    ? this.ontoAddFormToggle(this.ontoForm)
                    : this.ontoForm.reportValidity();
              });
          };
          updateTigger = (e) => {
            this.uploaderBox.style.display = "block";
            let t = this.ontoForm.querySelector('button[name="update"]');
            this.updateOrAddBtn("update"),
              (t.onclick = (t) => {
                t.preventDefault(),
                  this.ontoForm.checkValidity()
                    ? this.ontoUpdateFormToggle(this.ontoForm, e)
                    : this.ontoForm.reportValidity();
              });
          };
          updateOrAddBtn = (e) => {
            let t = this.ontoForm.querySelector('button[name="upload"]'),
              o = this.ontoForm.querySelector('button[name="update"]');
            (t.style.display = "add" === e ? "block" : "none"),
              (o.style.display = "add" === e ? "none" : "block");
          };
          ontoAddFormToggle = (t) => {
            let o = new FormData(t),
              n = o.get("formName").trim(),
              r = o.get("formFile"),
              l = o.get("formURL").trim(),
              i = this.ontoForm.querySelector('span[name="form-info"]');
            if (r.size || l)
              if (
                Object.keys(e.ontoBank).includes(
                  "ontopanel-onto-extra-btn-" + n
                )
              )
                this.handleInfoToggle(
                  "this name is taken, use another one!",
                  "red"
                );
              else {
                (i.innerText = "In process, please wait."),
                  (i.style.color = "green"),
                  (i.style.display = "block");
                let e = localStorage.getItem("loginUser");
                e ? this.ontoAddDB(o, e) : this.ontoAddUpdateLocal(o);
              }
            else this.handleInfoToggle("Please enter File or URL!", "red");
          };
          ontoAddUpdateLocal = (e, o = null, n = "add") => {
            fetch("https://ontopanel.herokuapp.com/api/v1/ontos/owltable/", {
              method: "POST",
              body: e,
            })
              .then((e) => {
                e.ok
                  ? e.json().then((e) => {
                      switch (n) {
                        case "add":
                          let n = new t(this.app, e);
                          this.app
                            .querySelector("#ontopanel-onto-extra-btn")
                            .prepend(n.btn),
                            this.handleInfoToggle(
                              "Succssfully added locally!",
                              "green"
                            );
                          break;
                        case "update":
                          this.updateOntoBtn(e, o),
                            this.handleInfoToggle(
                              "Succssfully updated locally!",
                              "green"
                            );
                      }
                      this.ontoForm.reset();
                    })
                  : e.json().then((e) => {
                      let t = Object.keys(e)[0];
                      this.handleInfoToggle(e[t], "red");
                    });
              })
              .catch((e) => {
                this.handleInfoToggle(e, "red");
              });
          };
          ontoAddDB = (e, o) => {
            (o = JSON.parse(o)),
              fetch("https://ontopanel.herokuapp.com/api/v1/ontos/lists/", {
                method: "POST",
                body: e,
                headers: new Headers({ Authorization: `Token ${o.token}` }),
              })
                .then((e) => {
                  e.ok
                    ? e.json().then((e) => {
                        let o = new t(this.app, e);
                        this.app
                          .querySelector("#ontopanel-onto-extra-btn")
                          .prepend(o.btn),
                          this.handleInfoToggle(
                            "Succssfully added to your database!",
                            "green"
                          ),
                          this.ontoForm.reset();
                      })
                    : e.json().then((e) => {
                        let t = Object.keys(e)[0];
                        this.handleInfoToggle(e[t], "red");
                      });
                })
                .catch((e) => {
                  this.handleInfoToggle(e, "red");
                });
          };
          ontoUpdateFormToggle = (t, o) => {
            let n = this.ontoForm.querySelector('span[name="form-info"]'),
              r = new FormData(t),
              l = r.get("formName").trim(),
              i = r.get("formFile"),
              a = r.get("formURL").trim();
            if (i.size || a)
              if (
                Object.keys(e.ontoBank)
                  .filter((e) => e !== o)
                  .includes("ontopanel-onto-extra-btn-" + l)
              )
                this.handleInfoToggle(
                  "this name is taken, use another one!",
                  "red"
                );
              else {
                (n.innerText = "In process, please wait."),
                  (n.style = "color: green; display:block;");
                let e = localStorage.getItem("loginUser");
                e
                  ? this.ontoUpdateDB(r, o, e)
                  : this.ontoAddUpdateLocal(r, o, "update");
              }
            else this.handleInfoToggle("Please enter File or URL!", "red");
          };
          updateOntoBtn = (t, o) => {
            let n = this.app.querySelector("#" + o),
              r = t.title;
            n.innerText = r;
            const l = "ontopanel-onto-extra-btn-" + r;
            (n.id = l),
              e.modifyOntoBank([o, null], "delete"),
              e.modifyOntoBank([l, t], "add"),
              e.loadCurrentTable(t);
          };
          ontoUpdateDB = (t, o, n) => {
            n = JSON.parse(n);
            let r = e.ontoBank[o].id;
            fetch("https://ontopanel.herokuapp.com/api/v1/ontos/change/" + r, {
              method: "PUT",
              body: t,
              headers: new Headers({ Authorization: `Token ${n.token}` }),
            })
              .then((e) => {
                e.ok
                  ? e.json().then((e) => {
                      this.updateOntoBtn(e, o),
                        this.handleInfoToggle(
                          "Succssfully updated in your databank!",
                          "green"
                        ),
                        this.ontoForm.reset();
                    })
                  : e.json().then((e) => {
                      let t = Object.keys(e)[0];
                      this.handleInfoToggle(e[t], "red");
                    });
              })
              .catch((e) => {
                this.handleInfoToggle(e, "red");
              });
          };
          handleInfoToggle = (e, t) => {
            let o = this.uploaderBox.querySelector('span[name="form-info"]');
            (o.innerText = e),
              (o.style.color = t),
              (o.style.display = "block"),
              setTimeout(() => {
                o.style.display = "none";
              }, 8e3);
          };
        },
        r = (e, t, o, n) => {
          let s = document.createElement("ul");
          return (
            t.forEach((t) => {
              let d = o.cloneNode(!0),
                p = d.firstElementChild,
                c = p.children[0],
                u = p.children[1],
                h = p.children[2],
                m = p.children[3],
                g = u.children[0];
              g.innerHTML = t[0];
              let y = "li-term-" + g.innerText;
              if (
                ((g.id = y),
                (g.onclick = (e) => {
                  e.preventDefault();
                  let t = u.children[1],
                    o = l(y, t);
                  t.replaceWith(o),
                    (t.style.display = "block"),
                    t.scrollIntoView({ block: "nearest", inline: "center" });
                }),
                (h.onclick = (t) => {
                  i(y, e, n, t);
                }),
                (m.onclick = (t) => {
                  a(y, e);
                }),
                s.appendChild(d),
                t[1].length)
              ) {
                (c.innerText = "⊖"),
                  (c.style = "cursor:pointer; margin-right:1px;"),
                  c.setAttribute("name", "li-collapse-btn");
                let l = r(e, t[1], o, n);
                d.appendChild(l),
                  (c.onclick = (e) => {
                    let t = e.target,
                      o = e.target.parentElement.nextElementSibling;
                    "⊖" === e.target.innerText
                      ? ((o.style.display = "none"), (t.innerText = "⊕"))
                      : ((o.style.display = "block"), (t.innerText = "⊖"));
                  });
              } else
                (c.innerHTML = "--"),
                  (c.style = "color:grey;margin-right:1px;"),
                  p.prepend(c);
            }),
            s
          );
        },
        l = (t, o) => {
          let n = t.replace("li-term-", ""),
            r = "ontopanel-onto-extra-btn-" + e.currentCategoriesContent.title,
            l = JSON.parse(e.ontoBank[r].onto_table.table)[n];
          return (
            (o.querySelector('div[name="entity-label"]').innerText =
              l.RDFLabel),
            (o.querySelector('div[name="entity-color"]').innerText = l.Color),
            (o.querySelector('div[name="entity-annos"]').innerHTML = s(
              l.Annotations
            ).innerHTML),
            (o.querySelector('div[name="entity-special"]').innerHTML = s(
              l.SpecialInfo
            ).innerHTML),
            (o.onclick = (e) => {
              e.stopPropagation();
            }),
            (o.onmouseleave = (e) => {
              e.preventDefault(), (o.style.display = "none");
            }),
            o
          );
        },
        i = (t, o, n, r) => {
          let l = t.replace("li-term-", ""),
            i = 0,
            a =
              e.ontoBank[
                "ontopanel-onto-extra-btn-" + e.currentCategoriesContent.title
              ],
            s = JSON.parse(a.onto_table.table)[l],
            d = s.BelongsTo,
            p = s.Color,
            c = l;
          switch (d) {
            case "Class":
              let e;
              e =
                "none" === p
                  ? "rounded=0;whiteSpace=wrap;html=1;"
                  : `rounded=0;whiteSpace=wrap;html=1;fillColor=${p};`;
              var u = new mxCell(c, new mxGeometry(0, 0, 90, 26), e),
                h = c.length,
                m = o.editor.graph.getPreferredSizeForCell(u);
              (u.geometry.width = m.width + h),
                (u.vertex = !0),
                (i = m.width + h + 30);
              break;
            case "OP":
              (u = new mxCell(
                c,
                new mxGeometry(0, 0, 90, 26),
                "endArrow=classic;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;endSize=8;arcSize=0;"
              )),
                (h = c.length),
                u.geometry.setTerminalPoint(new mxPoint(0, 0), !0),
                u.geometry.setTerminalPoint(new mxPoint(8 * h + 20, 0), !1),
                (u.edge = !0),
                (i = 8 * h + 20 + 30);
              break;
            case "DP":
            case "AP":
              (u = new mxCell(
                c,
                new mxGeometry(0, 0, 0, 0),
                "edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;fontSize=12;"
              )),
                (h = c.length),
                u.geometry.setTerminalPoint(new mxPoint(0, 0), !0),
                u.geometry.setTerminalPoint(new mxPoint(8 * h + 20, 0), !1),
                (u.edge = !0),
                (i = 8 * h + 20 + 30);
              break;
            case "Individual":
              (u = new mxCell(
                "<u>" + c + "</u>",
                new mxGeometry(0, 0, 90, 26),
                "rounded=0;whiteSpace=wrap;html=1;"
              )),
                (h = c.length),
                (m = o.editor.graph.getPreferredSizeForCell(u)),
                (u.geometry.width = m.width + h),
                (u.vertex = !0),
                (i = m.width + h + 30);
              break;
            case "Datatype":
              (u = new mxCell(
                c,
                new mxGeometry(0, 0, 90, 26),
                "rounded=0;whiteSpace=wrap;html=1;fillColor=#FF8C00;"
              )),
                (h = c.length),
                (m = o.editor.graph.getPreferredSizeForCell(u)),
                (u.geometry.width = m.width + h),
                (u.vertex = !0),
                (i = m.width + h + 30);
          }
          let g = o.editor.graph,
            y = mxUtils.convertPoint(g.container, n.getX(), n.getY()),
            b = mxUtils.convertPoint(
              g.container,
              mxEvent.getClientX(r),
              mxEvent.getClientY(r)
            ),
            f = g.view.translate,
            v = g.view.scale,
            x = y.x / v - f.x - i,
            w = b.y / v - f.y;
          const k = [u];
          g.importCells(k, x, w);
        },
        a = (t, o) => {
          let n = t.replace("li-term-", ""),
            r =
              e.ontoBank[
                "ontopanel-onto-extra-btn-" + e.currentCategoriesContent.title
              ],
            l = JSON.parse(r.onto_table.table)[n],
            i = l.BelongsTo,
            a = l.Color,
            s = n;
          var d = o.editor.graph.getSelectionCells();
          d &&
            d.forEach((e) => {
              let t;
              switch (i) {
                case "Individual":
                  o.editor.graph.model.setValue(e, "<u>" + s + "</u>");
                  break;
                case "Class":
                  o.editor.graph.model.setValue(e, s),
                    "none" !== a
                      ? ((t = `rounded=0;whiteSpace=wrap;html=1;fillColor=${a};`),
                        o.editor.graph.model.setStyle(e, t))
                      : ((t = "rounded=0;whiteSpace=wrap;html=1;"),
                        o.editor.graph.model.setStyle(e, t));
                  break;
                case "Datatype":
                  (t = "rounded=0;whiteSpace=wrap;html=1;fillColor=#FF8C00;"),
                    o.editor.graph.model.setStyle(e, t);
                default:
                  o.editor.graph.model.setValue(e, s);
              }
            });
        },
        s = (e) => {
          let t = document.createElement("div");
          return (
            e &&
              Object.keys(e).forEach((o) => {
                if (e[o].length) {
                  let n = document.createElement("div"),
                    r = document.createElement("div"),
                    l = document.createElement("hr");
                  (r.innerText = o),
                    (r.style.color = "steelblue"),
                    (r.style.marginBottom = "3px");
                  let i = document.createElement("div");
                  (i.innerText = e[o].join("\n")),
                    (l.style.borderTop = "1px dotted #333"),
                    (l.style.margin = "5px 0px 5px 0px"),
                    n.append(r, i, l),
                    t.appendChild(n);
                }
              }),
            t
          );
        };
      var d = o(379),
        p = o.n(d),
        c = o(795),
        u = o.n(c),
        h = o(569),
        m = o.n(h),
        g = o(565),
        y = o.n(g),
        b = o(216),
        f = o.n(b),
        v = o(589),
        x = o.n(v),
        w = o(119),
        k = {};
      (k.styleTagTransform = x()),
        (k.setAttributes = y()),
        (k.insert = m().bind(null, "head")),
        (k.domAPI = u()),
        (k.insertStyleElement = f()),
        p()(w.Z, k),
        w.Z && w.Z.locals && w.Z.locals;
      var S = o(398),
        C = {};
      (C.styleTagTransform = x()),
        (C.setAttributes = y()),
        (C.insert = m().bind(null, "head")),
        (C.domAPI = u()),
        (C.insertStyleElement = f()),
        p()(S.Z, C),
        S.Z && S.Z.locals && S.Z.locals;
      let T = new (class {
        constructor() {
          (this.errors = null), (this.result = null), (this.mappingData = null);
        }
        modifyData = (e) => {
          (this.errors = e.errors), (this.result = e.result);
        };
        resetData = () => {
          (this.errors = null), (this.result = null), (this.mappingData = null);
        };
        uploadMappingData = (e) => {
          this.mappingData = e;
        };
      })();
      const O = (e, t, o) => {
          let n = document.createElement("li");
          return (
            (n.id = e),
            (n.innerHTML = `\n    <div><b>ID: </b>${e}</div> \n    <div><b>Error: </b>${t}</div>\n    `),
            (n.onclick = (t) => {
              t.preventDefault();
              let n = o.editor.graph,
                r = n.getModel().getCell(e);
              n.clearSelection(),
                n.setSelectionCell(r),
                n.scrollCellToVisible(r, !0);
            }),
            n
          );
        },
        q = (e) => {
          let t = mxUtils.createXmlDocument().createElement("object");
          for (let [o, n] of Object.entries(e)) t.setAttribute(o, n);
          return t;
        },
        D = (e) => {
          let t = e.value;
          if (!t) {
            let o = e.children;
            if (o)
              for (let e = 0; e < o.length; e++) {
                let n = o[e];
                if (
                  (n.style.includes("text") || n.style.includes("edgeLabel")) &&
                  n.value
                ) {
                  t = "string" == typeof n.value ? n.value : "";
                  break;
                }
              }
          }
          return t;
        },
        E = (e) => {
          var t = document.createElement("div");
          (t.id = "convertor-app"),
            (t.style =
              "height: 400px; width: 380px; font-size: 15px; padding: 5px; "),
            (t.innerHTML =
              '<div class="convertor-container"> <div class="transformer"> <div>If you used the chowlk libary, please transform first.</div> <input type="button" name="transform" value="transform"/> </div> <div class="convertor-bar"> <select name="rdf-format"> <option value="application/rdf+xml">rdf/xml</option> <option value="turtle">turtle</option> </select> <input type="button" name="convert" value="Convert"/> </div> <div class="convertor-show"> <div class="convertor-btn-group"> <input type="button" name="mapping" value="Mapping"/> <input type="button" name="result" value="Result"/> <input type="button" name="show-error" value="ShowError"/> <input type="button" value="&#x2193;" style="width:30px;background-color:#dc143c" name="download"/> </div> <div class="convertor-content"> <div></div> </div> </div> </div> '),
            t.addEventListener("contextmenu", (e) => e.preventDefault()),
            mxUtils.br(t),
            mxResources.parse("convertor=Ontopanel-convertor");
          var o = new mxWindow(
            mxResources.get("convertor"),
            t,
            document.body.offsetWidth - 420,
            140,
            390,
            420,
            !0,
            !0
          );
          (o.destroyOnClose = !1),
            o.setMaximizable(!1),
            o.setResizable(!1),
            o.setClosable(!0),
            o.setVisible(!1);
          let n = t.querySelector('input[name="convert"]'),
            r = t.querySelector('input[name="transform"]'),
            l = t.querySelector('input[name="mapping"]'),
            i = t.querySelector('input[name="result"]'),
            a = t.querySelector('input[name="show-error"]'),
            s = t.querySelector(".convertor-content"),
            d = t.querySelector('input[name="download"]');
          return (
            (l.onclick = (e) => {
              let t = (() => {
                let e = document.createElement("div");
                return (
                  (e.innerHTML =
                    '<div class="mapping-tool"> <form action="multipart/form-data"> <input type="file" id="myfile" name="myFile" required style="max-width:190px"/> <select name="filetype"> <option value="csv">csv</option> <option value="excel">excel</option> <option value="json">json</option> </select> <select name="decimal"> <option value=",">,</option> <option value=";">.</option> </select> <select name="csv-seperator"> <option value=",">,</option> <option value=";">;</option> </select> <input type="submit" name="submit"/> </form> <div>under development</div> </div> '),
                  e
                );
              })();
              s.firstElementChild.replaceWith(t);
            }),
            (i.onclick = (e) => {
              let t = document.createElement("pre");
              (t.textContent = T.result), s.firstElementChild.replaceWith(t);
            }),
            (a.onclick = (t) => {
              if (T.errors) {
                let t = ((e, t) => {
                  let o = e.other_errors,
                    n = e.edge_errors,
                    r = e.node_errors,
                    l = e.relation_errors,
                    i = document.createElement("div");
                  if (
                    ((i.innerHTML =
                      '<div class="error-list"> <div name="other" style="display:none"> <div class="error-type">General Errors</div> <ul></ul> <hr/> </div> <div name="node" style="display:none"> <div class="error-type">Node Errors</div> <ul></ul> <hr/> </div> <div name="edge" style="display:none"> <div class="error-type">Edge Errors</div> <ul></ul> <hr/> </div> <div name="relation" style="display:none"> <div class="error-type">Relation Errors</div> <ul></ul> <hr/> </div> </div> '),
                    o.length)
                  ) {
                    let e = i.querySelector('div[name="other"]'),
                      n = e.querySelector("ul");
                    o.forEach((e) => {
                      let o = e.id,
                        r = e.message,
                        l = O(o, r, t);
                      n.appendChild(l);
                    }),
                      (e.style.display = "block");
                  }
                  if (n.length) {
                    let e = i.querySelector('div[name="edge"]'),
                      o = e.querySelector("ul");
                    n.forEach((e) => {
                      let n = e.id,
                        r = e.message,
                        l = O(n, r, t);
                      o.appendChild(l);
                    }),
                      (e.style.display = "block");
                  }
                  if (r.length) {
                    let e = i.querySelector('div[name="node"]'),
                      o = e.querySelector("ul");
                    r.forEach((e) => {
                      let n = e.id,
                        r = e.message,
                        l = O(n, r, t);
                      o.appendChild(l);
                    }),
                      (e.style.display = "block");
                  }
                  if (l.length) {
                    let e = i.querySelector('div[name="relation"]'),
                      o = e.querySelector("ul");
                    l.forEach((e) => {
                      let n = ((e, t, o) => {
                        let n = document.createElement("li"),
                          r = "[" + e.join(",") + "]";
                        return (
                          (n.innerHTML = `\n    <div><b>ID List: </b>${r}</div> \n    <div><b>Error: </b>${t}</div>\n    `),
                          (n.onclick = (t) => {
                            t.preventDefault();
                            let n = o.editor.graph,
                              r = n.getModel(),
                              l = e.map((e) => r.getCell(e));
                            n.clearSelection(),
                              n.setSelectionCells(l),
                              n.scrollCellToVisible(l[1], !0);
                          }),
                          n
                        );
                      })(e.id_list, e.message, t);
                      o.appendChild(n);
                    }),
                      (e.style.display = "block");
                  }
                  return i;
                })(T.errors, e);
                s.firstElementChild.replaceWith(t);
              }
            }),
            (d.onclick = (e) => {
              if (T.result) {
                let e = document.createElement("a");
                e.setAttribute(
                  "href",
                  "data:application/xml;charset=utf-8," +
                    encodeURIComponent(T.result)
                ),
                  e.setAttribute("download", "file.xml"),
                  t.appendChild(e),
                  e.click(),
                  t.removeChild(e);
              }
            }),
            (r.onclick = (t) => {
              ((e, t) => {
                let o = e.editor.graph,
                  n = o.getDefaultParent(),
                  r = o.getGraphBounds(),
                  l = o.getCells(
                    r.x,
                    r.y,
                    r.width,
                    r.height,
                    n,
                    null,
                    null,
                    null,
                    !0
                  ),
                  i = {},
                  a = l.filter((e) => e.isVertex()),
                  s = {
                    node_errors: [],
                    edge_errors: [],
                    other_errors: [],
                    relation_errors: [],
                  };
                a.forEach((e) => {
                  if ("object" == typeof e.value);
                  else {
                    let t = {},
                      [n, r] = ((e) => {
                        let t = e.style,
                          o = D(e),
                          n = null,
                          r = document.createElement("div");
                        r.innerHTML = o;
                        let l = r.innerText,
                          i = {
                            "⨅": "IntersectionOf",
                            intersectionOf: "IntersectionOf",
                            "⨆": "UnionOf",
                            unionOf: "UnionOf",
                            "≡": "EquivalentClass",
                            "⊥": "DisjointClass",
                          };
                        return (
                          t.includes("shape=note")
                            ? (n = "Namespace")
                            : t.includes("shape=document")
                            ? (n = "Metadata")
                            : t.includes("shape=parallelogram")
                            ? (n = "CustomDatatype")
                            : t.includes("shape=hexagon")
                            ? l.includes("AllDifferent") && (n = "AllDifferent")
                            : t.includes("ellipse")
                            ? Object.keys(i).forEach((e) => {
                                l.includes(e) && (n = i[e]);
                              })
                            : t.includes("rhombus")
                            ? l.includes("owl:ObjectProperty")
                              ? (n = "ObjectProperty")
                              : l.includes("owl:DatatypeProperty") &&
                                (n = "DatatypeProperty")
                            : t.includes("edgeLabel") || t.includes("text")
                            ? (n = "pass")
                            : t.includes("rounded=0") &&
                              (o.includes("</u>") || t.includes("fontStyle=4")
                                ? (n = "Individual")
                                : l.includes("^^") || l.includes("@")
                                ? (n = "DataValue")
                                : t.includes("dashed=1") || (n = "Class")),
                          [n, o]
                        );
                      })(e);
                    if (n && "pass" !== n) {
                      t = { label: r, Type: n };
                      let l = q(t);
                      o.model.setValue(e, l), (i[e.id] = n);
                    } else
                      "pass" !== n &&
                        s.node_errors.push({
                          id: e.id,
                          message:
                            "not recongized, please use the ontopanel libary to repalce it.",
                        });
                  }
                  let n = {
                    result:
                      "Transformer can wrongly convert the following:\nnodes: nodes in rectangle shapes, \nedges: edges without labels.\n\nYou cant click ShowError to check the errors, but maybe not all the errors are catched.\nPlease use the ontopanel-libary shapes to replace the errors.\nHowever, it usually will not be a problem if you could not correct all the errors, because convertor will check the errors again.",
                    errors: s,
                  };
                  T.modifyData(n), t.click();
                }),
                  l
                    .filter((e) => e.isEdge())
                    .forEach((e) => {
                      if ("object" == typeof e.value);
                      else {
                        let t = {},
                          [n, r] = ((e, t) => {
                            let o = e.style,
                              n = e.target,
                              r = e.source,
                              l = D(e),
                              i = null,
                              a = document.createElement("div");
                            a.innerHTML = l;
                            let s = a.innerText,
                              d = {
                                "rdfs:subClassOf": "SubClassOf",
                                "rdf:type": "RDFType",
                                "owl:equivalentClass": "EquivalentClass",
                                "owl:disjointWith": "DisjointClass",
                                "owl:complementOf": "ComplementOf",
                                "rdfs:subPropertyOf": "SubPropertyOf",
                                "owl:equivalentProperty": "EquivalentProperty",
                                "owl:inverseOf": "InverseOf",
                                "rdfs:domain": "Domain",
                                "rdfs:range": "Range",
                                "owl:sameAs": "SameAs",
                                "owl:differentFrom": "DifferentFrom",
                              };
                            return (
                              (l && 0 !== l.length) ||
                                ((l = ""),
                                o.includes("endArrow=block") ||
                                o.includes("startArrow=block")
                                  ? (i = "SubClassOf")
                                  : (o.includes("endArrow=open") ||
                                      o.includes("startArrow=open")) &&
                                    ((i = "Connector"), r && r.id in t) &&
                                    "Individual" === t[r.id] &&
                                    (i = "RDFType")),
                              Object.keys(d).forEach((e) => {
                                s.includes(e) && (i = d[e]);
                              }),
                              !i &&
                                ((i = "ObjectProperty"), n && n.id in t) &&
                                "DataValue" === t[n.id] &&
                                (i = "DatatypeProperty"),
                              [i, l]
                            );
                          })(e, i);
                        if (n && "pass" !== n) {
                          t = { label: r, Type: n };
                          let l = q(t);
                          o.model.setValue(e, l);
                        }
                      }
                    });
              })(e, i);
            }),
            (n.onclick = (o) => {
              o.preventDefault(), T.resetData();
              let n = ((e) => {
                  let t = e.editor.graph,
                    o = t.getDefaultParent(),
                    n = t.getGraphBounds(),
                    r = t.getCells(
                      n.x,
                      n.y,
                      n.width,
                      n.height,
                      o,
                      null,
                      null,
                      null,
                      !0
                    ),
                    l = {},
                    i = {},
                    a = {
                      node_errors: [],
                      edge_errors: [],
                      relation_errors: [],
                      other_errors: [],
                    };
                  return (
                    r.forEach((e) => {
                      let t = e.style;
                      if ("object" == typeof e.value) {
                        let o = e.getAttribute("Type", null);
                        if (o) {
                          let n = e.id,
                            r = e.source ? e.source.id : "none",
                            a = e.target ? e.target.id : "none",
                            s = e.geometry ? { ...e.geometry } : "none",
                            d = e.value.attributes,
                            p = d.label.value.trim(),
                            c = {};
                          for (let e = 0; e < d.length; e++) {
                            let t = d[e],
                              o = t.name.trim();
                            "label" !== o &&
                              "Type" !== o &&
                              (c[o] = t.value.trim());
                          }
                          let u = Object.keys(c).length ? c : "none";
                          if (e.isEdge()) {
                            if (!p) {
                              let t = e.children;
                              if (t)
                                for (let e = 0; e < t.length; e++) {
                                  let o = t[e];
                                  if (
                                    (o.style.includes("text") ||
                                      o.style.includes("edgeLabel")) &&
                                    o.value
                                  ) {
                                    p =
                                      "string" == typeof o.value ? o.value : "";
                                    break;
                                  }
                                }
                            }
                            i[n] = {
                              type: o,
                              style: t,
                              label: p,
                              source: r,
                              target: a,
                              objectData: u,
                            };
                          } else
                            l[n] = {
                              type: o,
                              style: t,
                              label: p,
                              geometry: s,
                              objectData: u,
                            };
                        } else {
                          let t = {
                            id: e.id,
                            message:
                              "this shape is not from ontopanel-libary, please use libary or transform.",
                          };
                          a.other_errors.push(t);
                        }
                      } else if (t.includes("text") || t.includes("edgeLabel"));
                      else {
                        let t = {
                          id: e.id,
                          message:
                            "this shape is not from ontopanel-libary, please use libary or transform.",
                        };
                        a.other_errors.push(t);
                      }
                    }),
                    JSON.stringify({ nodes: l, edges: i, errors: a }),
                    { nodes: l, edges: i, errors: a }
                  );
                })(e),
                r = { format: t.querySelector("select").value, data: n };
              fetch("https://ontopanel.herokuapp.com/api/v1/convertor/", {
                method: "POST",
                body: JSON.stringify(r),
                headers: new Headers({ "Content-Type": "application/json" }),
              })
                .then((e) => {
                  e.ok
                    ? e.json().then((e) => {
                        T.modifyData(e), i.click();
                      })
                    : e.json().then((e) => {
                        let t = { result: e, errors: null };
                        T.modifyData(t), i.click();
                      });
                })
                .catch((e) => {
                  let t = { result: text, errors: null };
                  T.modifyData(t), i.click();
                });
            }),
            o
          );
        };
      Draw.loadPlugin(function (o) {
        let l = ((o) => {
          var l = document.createElement("div");
          (l.id = "ontopanel-app"),
            (l.style =
              "height: 450px; width: 380px; font-size: 15px; padding: 5px; "),
            (l.innerHTML =
              '<div id="ontopanel-container" class="ontopanel-sign"> <div id="ontopanel-sign-info">Current user:</div> <div style="display:flex"> <button id="ontopanel-signup-btn">SignUp</button> <button id="ontopanel-login-btn">Login</button> <button id="ontopanel-logout-btn" style="display:none">Logout</button> </div> </div> <div id="ontopanel-onto-btngroup" style="display:flex;height:40px"> <div style="display:flex;height:30px" id="ontopanel-onto-extra-btn"></div> <div style="display:flex;height:30px"> <button id="ontopanel-onto-extra-btn-MSEO" style="cursor:pointer"> MSEO </button> <button id="ontopanel-onto-add-btn" style="cursor:pointer">+</button> <p id="ontopanel-tree-title" style="margin:5px 0 0 30px;font-size:18px;font-weight:700"> selected: none </p> <button id="ontopanel-namespace-btn" style="border:1px soild #000;margin:5px 0 0 5px;cursor:pointer;height:20px"> ⇱ prefix </button> </div> </div> <div id="ontopanel-onto-menu-info" style="display:none"></div> <div id="ontopanel-tree-container" class="ontopanel-tree"> <div style="display:flex;height:30px"> <button id="ontopanel-tree-class-btn">Class</button> <button id="ontopanel-tree-op-btn">OP</button> <button id="ontopanel-tree-dp-btn">DP</button> <button id="ontopanel-tree-ind-btn">Ind</button> <button id="ontopanel-tree-ap-btn">AP</button> <button id="ontopanel-tree-dt-btn">DT</button> <input id="ontopanel-search-term" style="margin-left:50px" placeholder="search entity"/> </div> <div id="onto-tree-content"> <div>New feature: <br \\> 1. this version is old, and will be removed(maybe). New version will be released soon.<br \\> <br \\> Issues:<br \\> Due to the server it might show problem if you upload large ontology file. It could be solved when the new server is ready.<br \\> </div> </div> </div> '),
            l.addEventListener("contextmenu", (e) => e.preventDefault()),
            mxUtils.br(l),
            mxResources.parse("entityfinder=Ontopanel-entityFinder");
          var i = new mxWindow(
            mxResources.get("entityfinder"),
            l,
            document.body.offsetWidth - 480,
            140,
            390,
            480,
            !0,
            !0
          );
          (i.destroyOnClose = !1),
            i.setMaximizable(!1),
            i.setResizable(!1),
            i.setClosable(!0),
            i.setVisible(!1);
          let a = l.querySelector("#ontopanel-onto-add-btn"),
            s = new n(l);
          a.onclick = (e) => {
            e.preventDefault(), s.addTrigger();
          };
          let d = new (class {
            constructor(e) {
              (this.app = e), this.init();
            }
            init = () => {
              let e = document.createElement("div");
              (e.innerHTML =
                '<div id="ontopanel-sign-box" class="ontopanel-box"> <div class="box-inner"> <span class="box-close-span">&times;</span> <form id="ontopanel-signup-form" class="ontopanel-form"> <h3>Sign Up</h3> <p class="box-info"></p> <div> <input type="text" name="signEmail" autofocus placeholder="Email Address" required/> </div> <div> <input type="password" name="signPsw" autofocus placeholder="Password" pattern="[A-Za-z0-9]+" required title="Only number or letter are accepted"/> </div> <div> <input type="password" name="signPsw-repeat" autofocus placeholder="Confirm password" pattern="[A-Za-z0-9]+" required title="Only number or letter are accepted"/> </div> <button type="submit">Sign Up</button> <p style="text-align:center"> <a>Already have an account? Sign in</a> </p> </form> <form id="ontopanel-login-form" class="ontopanel-form"> <h3>Login</h3> <p class="box-info"></p> <div> <input type="text" placeholder="Email Address" autofocus name="loginEmail" required/> </div> <div> <input type="password" placeholder="Password" autofocus name="loginPsw" required/> </div> <button type="submit">Login</button> <p style="text-align:center"> <a id="ontopanel-reset-password-link">Forgot your password?</a> <br/> <a id="ontopanel-sign-link">Don\'t have an account? Create account</a> </p> </form> </div> </div> <div id="ontopanel-reset-password-box" class="ontopanel-box"> <div class="box-inner"> <span class="box-close-span">&times;</span> <div> <form id="ontopanel-reset-password-form" class="ontopanel-form"> <h3>Send email</h3> <h5 style="margin:2px">Send email first to get secret key.</h5> <p class="box-info"></p> <div> <input type="text" placeholder="Email Address" autofocus name="resetEmail" required/> </div> <button type="submit">Send email</button> </form> <hr/> <form id="ontopanel-reset-password-confirm-form" class="ontopanel-form"> <h3>Reset password confirm</h3> <h5 style="margin:2px"> Enter secret key below to reset your password. </h5> <p class="box-info"></p> <div> <input type="text" placeholder="Secrect key" autofocus name="secretKey" required/> </div> <div> <input type="password" placeholder="New password" autofocus name="resetPsw" required/> </div> <div> <input type="password" placeholder="Confirm new password" autofocus name="resetPsw-con" required/> </div> <button type="submit">Confirm</button> </form> </div> </div> </div> '),
                this.app.appendChild(e),
                e.querySelectorAll(".box-close-span").forEach((e) => {
                  e.onclick = () => {
                    let t = e.parentNode.parentNode;
                    (t.style.display = "none"),
                      t.querySelectorAll("form").forEach((e) => {
                        (e.querySelector(".box-info").innerText = ""),
                          e.reset();
                      });
                  };
                }),
                (this.signLoginBox = e.querySelector("#ontopanel-sign-box")),
                (this.signLoginBox.style.display = "none"),
                (this.resetPasswordBox = e.querySelector(
                  "#ontopanel-reset-password-box"
                )),
                (this.resetPasswordBox.style.display = "none");
              let t = localStorage.getItem("loginUser");
              t && ((t = JSON.parse(t)), this.downloadOnto(t.token, t.email));
            };
            signUp = () => {
              this.signLoginBox.style.display = "block";
              let e = this.signLoginBox.querySelector("#ontopanel-signup-form"),
                t = this.signLoginBox.querySelector("#ontopanel-login-form");
              (e.style.display = "block"),
                (t.style.display = "none"),
                (e.querySelector(".box-info").innerText = ""),
                e.reset(),
                (e.onsubmit = (e) => {
                  e.preventDefault();
                  let t = new FormData(e.target);
                  this.validateSignUp(t);
                }),
                (e.querySelector("a").onclick = (e) => {
                  e.preventDefault(), this.login();
                });
            };
            login = () => {
              this.signLoginBox.style.display = "block";
              let e = this.signLoginBox.querySelector("#ontopanel-signup-form"),
                t = this.signLoginBox.querySelector("#ontopanel-login-form");
              (e.style.display = "none"),
                (t.style.display = "block"),
                (t.querySelector(".box-info").innerText = ""),
                t.reset(),
                (t.onsubmit = (e) => {
                  e.preventDefault();
                  let t = new FormData(e.target);
                  this.validateLogin(t);
                }),
                (t.querySelector("#ontopanel-sign-link").onclick = (e) => {
                  e.preventDefault(), this.signUp();
                }),
                (t.querySelector("#ontopanel-reset-password-link").onclick = (
                  e
                ) => {
                  e.preventDefault(),
                    (this.resetPasswordBox.style.display = "block"),
                    this.resetPassword();
                });
            };
            logout = () => {
              if ((this.handleLogout(), localStorage.getItem("loginUser"))) {
                let e = JSON.parse(localStorage.getItem("loginUser")).token;
                localStorage.removeItem("loginUser"),
                  fetch("https://ontopanel.herokuapp.com/api/v1/user/logout/", {
                    method: "GET",
                    headers: new Headers({
                      "Content-Type": "application/json",
                      Authorization: `Token ${e}`,
                    }),
                  });
              }
            };
            resetPassword = () => {
              this.resetPasswordBox.style.display = "block";
              let e = this.resetPasswordBox.querySelector(
                  "#ontopanel-reset-password-form"
                ),
                t = this.resetPasswordBox.querySelector(
                  "#ontopanel-reset-password-confirm-form"
                );
              (e.onsubmit = (e) => {
                e.preventDefault();
                let t = new FormData(e.target);
                this.resetPasswordToggle(t);
              }),
                (t.onsubmit = (e) => {
                  e.preventDefault();
                  let t = new FormData(e.target);
                  this.resetPasswordConfirmToggle(t);
                });
            };
            validateSignUp = (e) => {
              let t = e.get("signEmail").trim(),
                o = e.get("signPsw").trim(),
                n = e.get("signPsw-repeat").trim(),
                r = this.signLoginBox.querySelector("#ontopanel-signup-form"),
                l = r.querySelector(".box-info");
              if (n !== o) this.handleFormInfo(l, "Passwords are not equal.");
              else {
                let e = { email: t, password: o };
                fetch("https://ontopanel.herokuapp.com/api/v1/user/register/", {
                  method: "POST",
                  body: JSON.stringify(e),
                  headers: new Headers({ "Content-Type": "application/json" }),
                })
                  .then((e) => {
                    e.ok
                      ? (this.handleFormInfo(
                          l,
                          "Sign Up successfully. Please login in.",
                          "green"
                        ),
                        setTimeout(() => {
                          this.login(), r.reset();
                        }, 3e3))
                      : e.json().then((e) => {
                          let t = Object.keys(e)[0];
                          this.handleFormInfo(l, e[t]);
                        });
                  })
                  .catch((e) => {
                    this.handleFormInfo(l, e);
                  });
              }
            };
            validateLogin = (e) => {
              let t = this.signLoginBox.querySelector("#ontopanel-login-form"),
                o = t.querySelector(".box-info"),
                n = {
                  username: e.get("loginEmail").trim(),
                  password: e.get("loginPsw").trim(),
                };
              fetch("https://ontopanel.herokuapp.com/api/v1/user/login/", {
                method: "POST",
                body: JSON.stringify(n),
                headers: new Headers({ "Content-Type": "application/json" }),
              })
                .then((e) => {
                  e.ok
                    ? e.json().then((e) => {
                        localStorage.setItem("loginUser", JSON.stringify(e)),
                          this.resetAll(),
                          this.downloadOnto(e.token, e.email),
                          this.handleFormInfo(
                            o,
                            "Login successfully.",
                            "green"
                          ),
                          setTimeout(() => {
                            t.reset(),
                              (this.signLoginBox.style.display = "none");
                          }, 1e3);
                      })
                    : e.json().then((e) => {
                        let t = Object.keys(e)[0];
                        this.handleFormInfo(o, e[t]);
                      });
                })
                .catch((e) => {
                  this.handleFormInfo(o, e);
                });
            };
            downloadOnto = (e, o) => {
              let n = this.app.querySelector("#ontopanel-sign-info");
              fetch("https://ontopanel.herokuapp.com/api/v1/ontos/lists/", {
                method: "GET",
                headers: new Headers({
                  "Content-Type": "application/json",
                  Authorization: `Token ${e}`,
                }),
              })
                .then((e) => {
                  e.ok
                    ? e.json().then((e) => {
                        e.forEach((e) => {
                          let o = new t(this.app, e);
                          this.app
                            .querySelector("#ontopanel-onto-extra-btn")
                            .prepend(o.btn);
                        }),
                          (n.innerText = `Current user: ${o}`),
                          this.isLoggedIn(!0);
                      })
                    : e.json().then((e) => {
                        (n.innerText = "Please login again"),
                          this.isLoggedIn(!1);
                      });
                })
                .catch((e) => {
                  (n.innerText = "Please login again"), this.isLoggedIn(!1);
                });
            };
            resetPasswordToggle = (e) => {
              let t = e.get("resetEmail").trim();
              var o = this.resetPasswordBox.querySelector(
                "#ontopanel-reset-password-form .box-info"
              );
              fetch(
                "https://ontopanel.herokuapp.com/api/v1/user/reset_password/",
                {
                  method: "POST",
                  body: JSON.stringify({ email: t }),
                  headers: new Headers({ "Content-Type": "application/json" }),
                }
              )
                .then((e) => {
                  e.ok
                    ? e.json().then((e) => {
                        let t = Object.keys(e)[0];
                        this.handleFormInfo(o, e[t], "green");
                      })
                    : e.json().then((e) => {
                        let t = Object.keys(e)[0];
                        this.handleFormInfo(o, e[t]);
                      });
                })
                .catch((e) => {
                  this.handleFormInfo(o, e);
                });
            };
            resetPasswordConfirmToggle = (e) => {
              let t = e.get("secretKey").trim(),
                o = e.get("resetPsw").trim(),
                n = e.get("resetPsw-con").trim(),
                r = this.resetPasswordBox.querySelector(
                  "#ontopanel-reset-password-confirm-form .box-info"
                );
              o !== n
                ? this.handleFormInfo(r, "Passwords are not equal!")
                : fetch(
                    "https://ontopanel.herokuapp.com/api/v1/user/reset_password_confirm/",
                    {
                      method: "PATCH",
                      body: JSON.stringify({ secret_key: t, password: o }),
                      headers: new Headers({
                        "Content-Type": "application/json",
                      }),
                    }
                  )
                    .then((e) => {
                      e.ok
                        ? e.json().then((e) => {
                            let t = Object.keys(e)[0];
                            this.handleFormInfo(r, e[t], "green"),
                              setTimeout(() => {
                                this.login();
                              }, 3e3);
                          })
                        : e.json().then((e) => {
                            let t = Object.keys(e)[0];
                            this.handleFormInfo(r, e[t]);
                          });
                    })
                    .catch((e) => {
                      this.handleFormInfo(r, e);
                    });
            };
            resetAll = () => {
              (this.app.querySelector("#ontopanel-onto-extra-btn").innerText =
                ""),
                (this.app.querySelector("#ontopanel-sign-info").innerText = ""),
                e.modifyOntoBank([], "reset"),
                e.loadCurrentTable(null, "reset");
            };
            handleLogout = () => {
              this.isLoggedIn(!1), this.resetAll();
            };
            isLoggedIn = (e) => {
              let t = this.app.querySelector("#ontopanel-login-btn");
              (this.app.querySelector("#ontopanel-logout-btn").style.display = e
                ? "block"
                : "none"),
                (t.style.display = e ? "none" : "block");
            };
            handleFormInfo = (e, t, o = "red") => {
              (e.style.color = o), (e.textContent = t);
            };
          })(l);
          (l.querySelector("#ontopanel-signup-btn").onclick = (e) => {
            e.preventDefault(), d.signUp();
          }),
            (l.querySelector("#ontopanel-login-btn").onclick = (e) => {
              e.preventDefault(), d.login();
            }),
            (l.querySelector("#ontopanel-logout-btn").onclick = (e) => {
              e.preventDefault(), d.logout();
            });
          let p = l.querySelector("#onto-tree-content");
          const c = {
            "ontopanel-tree-class-btn": "Class",
            "ontopanel-tree-op-btn": "OP",
            "ontopanel-tree-dp-btn": "DP",
            "ontopanel-tree-ind-btn": "Individual",
            "ontopanel-tree-ap-btn": "AP",
            "ontopanel-tree-dt-btn": "Datatype",
          };
          return (
            Object.keys(c).forEach((t) => {
              l.querySelector("#" + t).onclick = (t) => {
                let n = e.currentCategoriesContent.categories[c[t.target.id]],
                  a = p.firstElementChild;
                if (n.content) {
                  let t = new (class {
                    constructor(e, t, o, n) {
                      (this.app = e),
                        (this.ui = t),
                        (this.wnd = o),
                        (this.data = n),
                        this.init();
                    }
                    init() {
                      let e = document.createElement("div");
                      (e.innerHTML =
                        '<div class="tree-content"> <div style="display:flex;margin:8px 0 0 10px;font-size:17px"> <div name="cate-name">entitycate</div> <div class="collapse-btn" style="margin-left:10px">&#8853;</div> <div class="collapse-btn">&#8854;</div> </div> <hr/> <div style="height:300px;overflow:auto"> <div id="ontopanel-tree-entity">tree entity</div> </div> </div> <li> <div class="li-com"> <div>--</div> <div> <div name="li-term-text">entityText</div> <div class="tree-entity-box"> <div class="tree-box-title">RDF label:</div> <div name="entity-label" class="tree-box-content"></div> <hr/> <div class="tree-box-title">Annotations:</div> <div name="entity-annos" class="tree-box-content"></div> <hr/> <div class="tree-box-title">SpecialInfo:</div> <div name="entity-special" class="tree-box-content"></div> <hr/> <div class="tree-box-title">Color:</div> <div name="entity-color" class="tree-box-content"></div> </div> </div> <div class="ontoterm-btn" style="margin-left:5px">▲</div> <div class="ontoterm-btn">R</div> </div> </li> '),
                        (this.treeContent = e.querySelector(".tree-content")),
                        (this.treeContent.querySelector(
                          'div[name="cate-name"]'
                        ).textContent = this.data.name);
                      let t =
                          this.treeContent.querySelectorAll(".collapse-btn")[0],
                        o =
                          this.treeContent.querySelectorAll(".collapse-btn")[1],
                        n = this.app.querySelector("#ontopanel-search-term");
                      (t.onclick = (e) => {
                        e.preventDefault(), this.collpaseAll();
                      }),
                        (o.onclick = (e) => {
                          e.preventDefault(), this.foldAll();
                        }),
                        (n.onkeyup = (e) => {
                          e.preventDefault();
                          let t = n.value.trim().toUpperCase();
                          this.search(t);
                        });
                      let l = e.querySelector("li"),
                        i = this.treeContent.querySelector(
                          "#ontopanel-tree-entity"
                        ),
                        a = this.data.content,
                        s = r(this.ui, a, l, this.wnd);
                      i.replaceWith(s);
                    }
                    foldAll = () => {
                      let e = this.treeContent.querySelectorAll("ul >li");
                      [
                        ...this.treeContent.querySelectorAll(
                          '[name="li-collapse-btn"]'
                        ),
                      ].forEach((e) => {
                        e.innerText = "⊕";
                      }),
                        e.forEach((e) => {
                          [...e.getElementsByTagName("ul")].forEach((e) => {
                            e.style.display = "none";
                          });
                        });
                    };
                    collpaseAll = () => {
                      let e = [
                          ...this.treeContent.querySelectorAll(
                            '[name="li-collapse-btn"]'
                          ),
                        ],
                        t = [...this.treeContent.getElementsByTagName("ul")];
                      e.forEach((e) => {
                        e.innerText = "⊖";
                      }),
                        t.forEach((e) => (e.style.display = ""));
                    };
                    search = (t) => {
                      let o = this.treeContent.querySelectorAll("li");
                      if (o.length) {
                        this.collpaseAll();
                        let n =
                            "ontopanel-onto-extra-btn-" +
                            e.currentCategoriesContent.title,
                          r = JSON.parse(e.ontoBank[n].onto_table.table);
                        for (let e = 0; e < o.length; e++) {
                          let n = o[e].querySelectorAll(
                              'div[name="li-term-text"]'
                            ),
                            l = n[0],
                            i = l.textContent,
                            a = r[i].RDFLabel,
                            s = [...n],
                            d = s
                              .map((e) => e.firstChild.textContent)
                              .join("\n"),
                            p = s
                              .map((e) => r[e.firstChild.textContent].RDFLabel)
                              .join("\n");
                          (d || p) &&
                            (p.toUpperCase().indexOf(t) > -1 ||
                            d.toUpperCase().indexOf(t) > -1
                              ? ((o[e].style.display = ""),
                                a.toUpperCase().indexOf(t) > -1 ||
                                i.toUpperCase().indexOf(t) > -1
                                  ? (l.style.backgroundColor = t
                                      ? "#fddde6"
                                      : "transparent")
                                  : (l.style.background = "transparent"))
                              : ((o[e].style.display = "none"),
                                (l.style.background = "transparent")));
                        }
                      }
                    };
                  })(l, o, i, n);
                  a.replaceWith(t.treeContent);
                } else a.innerHTML = "";
              };
            }),
            (l.querySelector("#ontopanel-onto-extra-btn-MSEO").onclick = (
              t
            ) => {
              t.preventDefault(),
                fetch("plugins/ontopanelPlugin/ontoData/mseo_ontopanel.json")
                  .then((e) => e.json())
                  .then((t) => {
                    (t.onto_table.namespaces = e.mesoNamespace),
                      e.modifyOntoBank(
                        ["ontopanel-onto-extra-btn-MSEO", t],
                        "add"
                      ),
                      e.loadCurrentTable(t);
                  });
            }),
            (l.querySelector("#ontopanel-namespace-btn").onclick = (t) => {
              if ((t.preventDefault(), e.currentCategoriesContent.title)) {
                let n =
                    e.ontoBank[
                      "ontopanel-onto-extra-btn-" +
                        e.currentCategoriesContent.title
                    ].onto_table.namespaces.join("<br/>"),
                  r = new mxCell(
                    n + "<br/>",
                    new mxGeometry(0, 0, 90, 26),
                    "shape=note;whiteSpace=wrap;html=1;backgroundOutline=1;darkOpacity=0.05;"
                  ),
                  l = o.editor.graph.getPreferredSizeForCell(r);
                (r.geometry.width = l.width + 30), (r.vertex = !0);
                let a = l.width + 30,
                  s = o.editor.graph,
                  d = mxUtils.convertPoint(s.container, i.getX(), i.getY()),
                  p = mxUtils.convertPoint(
                    s.container,
                    mxEvent.getClientX(t),
                    mxEvent.getClientY(t)
                  ),
                  c = o.editor.graph.view.translate,
                  u = o.editor.graph.view.scale,
                  h = d.x / u - c.x - a,
                  m = p.y / u - c.y;
                const g = [r];
                o.editor.graph.importCells(g, h, m);
              }
            }),
            i
          );
        })(o);
        o.actions.addAction("entityfinder", function () {
          l.setVisible(!l.isVisible());
        });
        let i = E(o);
        o.actions.addAction("convertor", function () {
          i.setVisible(!i.isVisible());
        });
        var a = o.menus.get("extras"),
          s = a.funct;
        (a.funct = function (e, t) {
          s.apply(this, arguments),
            o.menus.addMenuItems(e, ["convertor"], t),
            o.menus.addMenuItems(e, ["entityfinder"], t);
        }),
          fetch("https://ontopanel.herokuapp.com/api/v1/ontos/lists/", {
            method: "GET",
          }),
          setInterval(function () {
            fetch("https://ontopanel.herokuapp.com/api/v1/ontos/lists/", {
              method: "GET",
            });
          }, 12e5);
      });
    })();
})();
