Draw.loadPlugin(function (e) {
  var t = document.createElement("div");
  (t.id = "ontopanel-app"),
    (t.style = "height: 450px; width: 380px; font-size: 15px; padding: 5px; "),
    t.addEventListener("contextmenu", (e) => e.preventDefault()),
    (t.innerHTML =
      '\n<div id="ontopanel-container" style="display:flex; height: 25px; justify-content: space-between; margin-bottom:10px;">\n    \n    <div style="display:flex;">\n        <button id="ontopanel-signup-btn" style="cursor: pointer;">SignUp</button>\n        <button id="ontopanel-login-btn" style=" cursor: pointer;">Login</button>\n        <button id="ontopanel-logout-btn" style=" display:none;cursor: pointer;">Logout</button>\n    </div>\n    <div id="ontopanel-sign-info"">Please log in.</div>\n    \n</div>\n\n\n<div id="ontopanel-sign-box"\n  style="display: none; position: absolute; z-index: 5; left: 0; top: 0; width: 100%;  height: 100%; background-color: rgba(0,0,0,0.4); ">\n  <div style="background-color: #fefefe; margin: 10% auto; padding: 15px; border: 1px solid #888; width: 60%;">\n    <span id = "ontopanel-sign-box-close" style="color: #aaa;float: right;font-size: 28px; font-weight: bold; cursor: pointer">&times;</span>\n    <p style="font-weight: bold;" id="ontopanel-sign-login-error"></p>\n    <form id="ontopanel-signup-form">\n      <h3>Sign Up</h3>\n      <div style="margin-bottom: 1rem;">\n        <input\n          style="padding: 0.5rem; width: 90%;background: #eeeeee; border: 1px solid #dddddd; outline: none; border-radius:0.2em;"\n          type="text" name="signEmail"  placeholder="Email Address" required>\n      </div>\n\n      <div style="margin-bottom: 1rem;">\n        <input\n          style="padding: 0.5rem; width: 90%;background: #eeeeee; border: 1px solid #dddddd; outline: none;border-radius:0.2em;"\n          type="password" name="signPsw"  placeholder="Password" pattern="[A-Za-z0-9]+" required\n          title="Only number or letter are accepted">\n      </div>\n\n      <div style="margin-bottom: 1rem;">\n        <input\n          style="padding: 0.5rem; width: 90%;background: #eeeeee; border: 1px solid #dddddd; outline: none;border-radius:0.2em;"\n          type="password" name="signPsw-repeat"  placeholder="Confirm password" pattern="[A-Za-z0-9]+"\n          required title="Only number or letter are accepted">\n      </div>\n\n      <button style=" width: 100%;\n          padding: 0.5rem;\n          font-weight: bold;\n          color: #ffffff;\n          border: none;\n          outline: none;\n          cursor: pointer;\n          border-radius:0.2em;\n          background: green;" type="submit">Sign Up</button>\n      <p style="text-align: center">\n        <a style=" color:steelblue;\n            text-decoration: none;\n            cursor: pointer;" id="ontopanel-link-login">Already have an account? Sign in</a>\n      </p>\n\n    </form>\n    <form id="ontopanel-login-form">\n      <h3>Login</h3>\n      <div style="margin-bottom: 1rem;">\n        <input\n          style="padding: 0.5rem; width: 90%;background: #eeeeee; border: 1px solid #dddddd; outline: none; border-radius:0.2em;"\n          type="text" placeholder="Email Address"  name="loginEmail" required>\n      </div>\n\n      <div style="margin-bottom: 1rem;">\n        <input\n          style="padding: 0.5rem; width: 90%;background: #eeeeee; border: 1px solid #dddddd; outline: none; border-radius:0.2em;"\n          type="password" placeholder="Password"  name="loginPsw" required>\n      </div>\n\n\n      <button style=" width: 100%;\n          padding: 0.5rem;\n          font-weight: bold;\n          color: #ffffff;\n          border: none;\n          outline: none;\n          cursor: pointer;\n          border-radius:0.2em;\n          background: green;" type="submit">Login</button>\n      <p style="text-align: center">\n        <a style=" color:steelblue;\n          text-decoration: none;\n          cursor: pointer; " id="ontopanel-reset-password">Forgot your password?</a>\n      </p>\n\n      <p style="text-align: center">\n        <a style=" color:steelblue;\n          text-decoration: none;\n          cursor: pointer;" id="ontopanel-link-signup">Don\'t have an account? Create account</a>\n      </p>\n    </form>\n  </div>\n</div>\n<div id="ontopanel-reset-password-box"\n  style="display: none; position: absolute; z-index: 5; left: 0; top: 0; width: 100%;  height: 100%; background-color: rgba(0,0,0,0.4); ">\n  <div style="background-color: #fefefe; margin: 5% auto; padding: 20px; border: 1px solid #888; width: 60%; height:75%;">\n    <span id="ontopanel-reset-password-closebox"\n      style="color: #aaa;float: right; font-size: 28px; font-weight: bold; cursor: pointer">&times;</span>\n    <div>\n      <form id="ontopanel-reset-password-form">\n        <h3 style="margin:0px;">Send email</h3>\n        <h5 style="margin-top:2px;">Send email first to get secret key.</h5>\n        <p id="ontopanel-reset-password-info"></p>\n        <div style="margin-bottom: 1rem;">\n          <input\n            style="padding: 0.5rem; width: 90%;background: #eeeeee; border: 1px solid #dddddd; outline: none; border-radius:0.2em;"\n            type="text" placeholder="Email Address"  name="resetEmail" required>\n        </div>\n\n        <button style=" width: 100%;\n          padding: 0.5rem;\n          font-weight: bold;\n          color: #ffffff;\n          border: none;\n          outline: none;\n          cursor: pointer;\n          border-radius:0.2em;\n          background: green;" type="submit">Send email</button>\n      </form>\n      <br/>\n\n      <form id="ontopanel-reset-password-confirm-form">\n        <h3 style="margin-bottom:0px;">Reset password confirm</h3>\n        <h5 style="margin-top:2px;">Enter secret key below to reset your password.</h5>\n\n        <p id="ontopanel-reset-password-confirm-info"></p>\n        <div style="margin-bottom: 1rem;">\n          <input\n            style="padding: 0.5rem; width: 90%;background: #eeeeee; border: 1px solid #dddddd; outline: none; border-radius:0.2em;"\n            type="text" placeholder="Secrect key"  name="secretKey" required>\n        </div>\n        <div style="margin-bottom: 1rem;">\n          <input\n            style="padding: 0.5rem; width: 90%;background: #eeeeee; border: 1px solid #dddddd; outline: none; border-radius:0.2em;"\n            type="password" placeholder="New password"  name="resetPsw" required>\n        </div>\n        <div style="margin-bottom: 1rem;">\n          <input\n            style="padding: 0.5rem; width: 90%;background: #eeeeee; border: 1px solid #dddddd; outline: none; border-radius:0.2em;"\n            type="password" placeholder="Confirm new password"  name="resetPsw-con" required>\n        </div>\n\n        <button style=" width: 100%;\n          padding: 0.5rem;\n          font-weight: bold;\n          color: #ffffff;\n          border: none;\n          outline: none;\n          cursor: pointer;\n          border-radius:0.2em;\n          background: green;" type="submit">Confirm</button>\n      </form>\n\n    </div>\n\n  </div>\n</div>\n\n\n<div id="ontopanel-onto-btngroup" style="display:flex; height: 40px;">\n  <div style="\n        display: flex;\n        height: 30px;" id="ontopanel-onto-extra-btn">\n  </div>\n  <div style="\n        display: flex;\n        height: 30px;">\n    <button id="ontopanel-onto-extra-btn-MSEO" style="cursor: pointer;">MSEO</button>\n    <button id="ontopanel-onto-add-btn" style="cursor: pointer;">+</button>\n    <p id="ontopanel-tree-title" style="margin: 5px 0px 0px 30px; font-size: 16px;"> selected: none </p>\n    <button id="ontopanel-namespace-btn" style="border:1px soild black; margin: 5px 0px 0px 5px;; cursor: pointer; height:20px ">⇱ prefix</button>\n  </div>\n\n\n  <div id="ontopanel-onto-menu"\n    style="display: none; position: relative; z-index: 3;background-color: #fefefe; width:80px; top:5px">\n    <div id="ontopanel-onto-info" style="cursor: pointer;padding: 8px 10px;"\n      onmouseover="this.style.backgroundColor=\'lightgrey\'" onmouseout="this.style.backgroundColor=\'\'">Info</div>\n    <div id="ontopanel-onto-update" style="cursor: pointer;padding: 8px 10px;"\n      onmouseover="this.style.backgroundColor=\'lightgrey\'" onmouseout="this.style.backgroundColor=\'\'">Update</div>\n    <div id="ontopanel-onto-delete" style="cursor: pointer;padding: 8px 10px;"\n      onmouseover="this.style.backgroundColor=\'lightgrey\'" onmouseout="this.style.backgroundColor=\'\'">Delete</div>\n  </div>\n</div>\n<div id="ontopanel-onto-menu-info" style="display: none;"></div>\n\n<div id="ontopanel-onto-info-box"\n  style="display: none; position: absolute; z-index: 6; left: 0; top: 0; width: 100%; height: 100%;background-color: rgba(0,0,0,0.4); ">\n  <div style="background-color: #fefefe; margin: 15% auto; padding: 20px; border: 1px solid #888; width: 80%;">\n    <span style="color: #aaa;float: right;font-size: 28px; font-weight: bold; cursor: pointer">&times;</span>\n    <div id="ontopanel-onto-info-details" style="overflow:auto; font-size: 16px;"></div>\n  </div>\n</div>\n\n\n<div id="ontopanel-onto-add-box"\n  style="display: none; position: absolute; z-index: 7; left: 0; top: 0; width: 100%; height: 100%;background-color: rgba(0,0,0,0.4); ">\n  <div style="background-color: #fefefe; margin: 15% auto; padding: 20px; border: 1px solid #888; width: 80%;">\n    <span id="ontopanel-onto-add-closebox" style="color: #aaa;float: right;font-size: 28px; font-weight: bold; cursor: pointer">&times;</span>\n    <form id="ontopanel-onto-add-form" enctype="multipart/form-data">\n      <div style="margin-bottom:5px">\n        Please upload a file\n      </div>\n      <div>\n        <input type="file" name="formFile" />\n      </div>\n\n      <div style="margin-bottom:5px">\n        Or </br>\n        Enter URL of raw data\n      </div>\n\n      <div style="margin-bottom:5px">\n        <input type="url" name="formURL" placeholder="https://example.com" />\n      </div>\n      <div style="margin-bottom:5px">\n        And enter the ontology name\n      </div>\n      <div>\n        <input id="ontopanel-onto-tag" type="text" name="formName" placeholder="mseo" style="width:80px" maxlength="5"\n          required=\'true\'>\n        <button type="submit" id="ontopanel-form-add-btn">Submit</button>\n        <button type="submit" id="ontopanel-form-update-btn" style="display: none;">Update</button>\n        <span id="ontopanel-onto-add-error" style="display: none"></span>\n      </div>\n    </form>\n  </div>\n\n</div>\n\n\n<div id="ontopanel-tree-container" style="height: 300px; border-radius: 5px;">\n  <div style="display: flex;height: 30px;">\n    <button id="ontopanel-tree-class-btn" style="cursor: pointer;">Class</button>\n    <button id="ontopanel-tree-op-btn" style="cursor: pointer;">OP</button>\n    <button id="ontopanel-tree-dp-btn" style="cursor: pointer;">DP</button>\n    <button id="ontopanel-tree-ind-btn" style="cursor: pointer;">Ind</button>\n    <button id="ontopanel-tree-ap-btn" style="cursor: pointer;">AP</button>\n    <button id="ontopanel-tree-dt-btn" style="cursor: pointer;">DT</button>\n    <input id="ontopanel-search-term" style="margin-left: 50px;" placeholder="search entity" />\n\n  </div>\n  <div id="ontopanel-tree">\n    <div id="ontopanel-tree-content">\n    New feature: <br>\n    1. you can signup and login, data will be saved in databank. <br>\n    2. tree structure of ontology. Demo please check the github repo. <br>\n    <br>\n    Issues:<br>\n    Due to the server it might show problem if you upload large ontology file. It could be solved when the new server is ready.<br> \n    </div>\n    <div id="ontopanel-tree-entity-detail-box"\n      style="display:none; white-space:normal;word-break: break-all; position: relative; z-index: 10; border: 2px solid #888; width: 330px;  max-height: 220px; overflow: auto;padding: 0.5rem;">\n      <div style="background-color: lightgrey;">RDF label:</div>\n      <div id=\'ontopanel-tree-entity-label\' style="font-size: 14px;  margin-top: 3px;">\n      </div>\n      <hr style="margin-top: 4px; border: 1px solid #333">\n      <div style="background-color: lightgrey;">Annotations:</div>\n      <div id=\'ontopanel-tree-entity-annos\' style="font-size: 14px;  margin-top: 3px;">\n      </div>\n      <hr style="margin-top: 4px; border: 1px solid #333">\n      <div style="background-color: lightgrey;">SpecialInfo:</div>\n\n      <div id=\'ontopanel-tree-entity-special\' style="font-size: 14px;  margin-top: 3px;">\n      </div>\n      <hr style="margin-top: 4px; border: 1px solid #333">\n      <div style="background-color: lightgrey;">Color:\n      </div>\n      <div id=\'ontopanel-tree-entity-color\' style=" font-size: 14px; margin-top: 3px;">\n      </div>\n\n    </div>\n\n  </div>'),
    mxUtils.br(t),
    mxResources.parse("ontopanel=Ontopanel");
  var n = new mxWindow(
    mxResources.get("ontopanel"),
    t,
    document.body.offsetWidth - 480,
    140,
    390,
    480,
    !0,
    !0
  );
  (n.destroyOnClose = !1),
    n.setMaximizable(!1),
    n.setResizable(!1),
    n.setClosable(!0),
    n.setVisible(!1),
    e.actions.addAction("ontopanel", function () {
      n.setVisible(!n.isVisible());
    });
  var o = e.menus.get("extras"),
    l = o.funct;
  (o.funct = function (t, n) {
    l.apply(this, arguments), e.menus.addMenuItems(t, ["ontopanel"], n);
  }),
    fetch("https://ontopanel.herokuapp.com/api/v1/ontos/lists/", {
      method: "GET",
    }),
    setInterval(function () {
      fetch("https://ontopanel.herokuapp.com/api/v1/ontos/lists/", {
        method: "GET",
      });
    }, 12e5);
  const r = [
    "base:https://purl.matolab.org/mseo/methods/example/",
    "mid:https://purl.matolab.org/mseo/mid/",
    "cco:http://www.ontologyrepository.com/CommonCoreOntologies/",
    "obo:http://purl.obolibrary.org/obo/",
    "pt:http://www.daml.org/2003/01/periodictable/PeriodicTable#",
    "geo:http://www.opengis.net/ont/geosparql#",
  ];
  var i = { "ontopanel-onto-extra-btn-MSEO": {} },
    a = {
      title: "table",
      categories: {
        Class: { name: "Class", content: null },
        OP: { name: "ObjectProperty", content: null },
        DP: { name: "DatatypeProperty", content: null },
        Individual: { name: "Individual", content: null },
        AP: { name: "AnnotationProperty", content: null },
        Datatype: { name: "Datatype", content: null },
      },
    };
  function d(e, t) {
    switch (t) {
      case "reset":
        i = { "ontopanel-onto-extra-btn-MSEO": {} };
        break;
      case "add":
        i[e[0]] = e[1];
        break;
      case "delete":
        delete i[e[0]];
    }
  }
  function s(e, t, n) {
    switch (n) {
      case "reset":
        a = {
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
        (a.title = e),
          Object.keys(a.categories).forEach((e) => {
            a.categories[e].content = t[e];
          });
    }
  }
  var p = t.querySelector("#ontopanel-onto-add-btn"),
    c = t.querySelector("#ontopanel-onto-add-box"),
    u = t.querySelector("#ontopanel-onto-add-closebox"),
    m = t.querySelector("#ontopanel-onto-add-form"),
    y = t.querySelector("#ontopanel-form-add-btn"),
    g = t.querySelector("#ontopanel-form-update-btn"),
    b = t.querySelector("#ontopanel-onto-add-error"),
    h = t.querySelector("#ontopanel-onto-menu-info"),
    f = t.querySelector("#ontopanel-onto-tag");
  p.addEventListener("click", () => {
    v("add"), m.reset(), (c.style.display = "block");
  }),
    u.addEventListener("click", () => {
      (b.innerText = ""), m.reset(), (c.style.display = "none");
    }),
    y.addEventListener("click", (e) => {
      e.preventDefault(), m.checkValidity() ? x(m) : m.reportValidity();
    });
  const v = (e) => {
      (y.style.display = "add" === e ? "block" : "none"),
        (g.style.display = "add" === e ? "none" : "block");
    },
    x = (e) => {
      let t = new FormData(e),
        n = t.get("formName").trim(),
        o = t.get("formFile"),
        l = t.get("formURL").trim();
      if (o.size || l)
        if (Object.keys(i).includes("ontopanel-onto-extra-btn-" + n))
          q(b, "this name is taken, use another one!", "red");
        else {
          (b.innerText = "In process, please wait."),
            (b.style.color = "green"),
            (b.style.display = "block");
          let e = localStorage.getItem("loginUser");
          e ? k(t, e) : w(t);
        }
      else q(b, "Please enter File or URL!", "red");
    },
    w = (e, t = null, n = "add") => {
      fetch("https://ontopanel.herokuapp.com/api/v1/ontos/owltable/", {
        method: "POST",
        body: e,
      })
        .then((e) => {
          e.ok
            ? e.json().then((e) => {
                switch (n) {
                  case "add":
                    E(e), q(b, "Succssfully added locally!", "green");
                    break;
                  case "update":
                    T(e, t), q(b, "Succssfully updated locally!", "green");
                }
                m.reset();
              })
            : e.json().then((e) => {
                let t = Object.keys(e)[0];
                q(b, e[t], "red");
              });
        })
        .catch((e) => {
          q(b, e, "red");
        });
    },
    k = (e, t) => {
      (t = JSON.parse(t)),
        fetch("https://ontopanel.herokuapp.com/api/v1/ontos/lists/", {
          method: "POST",
          body: e,
          headers: new Headers({ Authorization: `Token ${t.token}` }),
        })
          .then((e) => {
            e.ok
              ? e.json().then((e) => {
                  E(e),
                    q(b, "Succssfully added to your database!", "green"),
                    m.reset();
                })
              : e.json().then((e) => {
                  let t = Object.keys(e)[0];
                  q(b, e[t], "red");
                });
          })
          .catch((e) => {
            q(b, e, "red");
          });
    };
  function E(e) {
    let n = t.querySelector("#ontopanel-onto-menu").cloneNode(!0),
      o = document.createElement("button"),
      l = n.querySelector("#ontopanel-onto-menu >#ontopanel-onto-update"),
      r = n.querySelector("#ontopanel-onto-menu >#ontopanel-onto-info"),
      a = n.querySelector("#ontopanel-onto-menu >#ontopanel-onto-delete"),
      s = e.title;
    (o.innerText = s), (o.style.cursor = "pointer");
    const p = "ontopanel-onto-extra-btn-" + s;
    (o.id = p),
      d([p, e], "add"),
      o.addEventListener("click", (e) => {
        e.preventDefault();
        let t = e.target.id;
        se(i[t]);
      }),
      o.addEventListener("contextmenu", (e) => {
        e.preventDefault(), o.appendChild(n), (n.style.display = "block");
        let t = e.target.id;
        (l.onclick = (e) => {
          e.preventDefault(),
            e.stopPropagation(),
            (n.style.display = "none"),
            S(t);
        }),
          (r.onclick = (e) => {
            e.preventDefault(),
              e.stopPropagation(),
              (n.style.display = "none"),
              P(t);
          }),
          (a.onclick = (e) => {
            e.preventDefault(),
              e.stopPropagation(),
              (n.style.display = "none"),
              L(t);
          });
      }),
      o.addEventListener("mouseleave", (e) => {
        e.preventDefault(), (n.style.display = "none");
      }),
      t.querySelector("#ontopanel-onto-extra-btn").prepend(o);
  }
  const S = (e) => {
      v("update"),
        (c.style.display = "block"),
        (f.value = i[e].title),
        (g.onclick = (t) => {
          t.preventDefault(), m.checkValidity() ? C(m, e) : m.reportValidity();
        });
    },
    C = (e, t) => {
      let n = new FormData(e),
        o = n.get("formName").trim(),
        l = n.get("formFile"),
        r = n.get("formURL").trim();
      if (l.size || r)
        if (
          Object.keys(i)
            .filter((e) => e !== t)
            .includes("ontopanel-onto-extra-btn-" + o)
        )
          q(b, "this name is taken, use another one!", "red");
        else {
          (b.innerText = "In process, please wait."),
            (b.style = "color: green; display:block;");
          let e = localStorage.getItem("loginUser");
          e ? D(n, t, e) : w(n, t, "update");
        }
      else q(b, "Please enter File or URL!", "red");
    },
    T = (e, n) => {
      let o = t.querySelector("#" + n),
        l = e.title;
      o.innerText = l;
      const r = "ontopanel-onto-extra-btn-" + l;
      (o.id = r), d([n, null], "delete"), d([r, e], "add"), se(e);
    },
    D = (e, t, n) => {
      n = JSON.parse(n);
      let o = i[t].id;
      fetch("https://ontopanel.herokuapp.com/api/v1/ontos/change/" + o, {
        method: "PUT",
        body: e,
        headers: new Headers({ Authorization: `Token ${n.token}` }),
      })
        .then((e) => {
          e.ok
            ? e.json().then((e) => {
                T(e, t),
                  q(b, "Succssfully updated in your databank!", "green"),
                  m.reset();
              })
            : e.json().then((e) => {
                let t = Object.keys(e)[0];
                q(b, e[t], "red");
              });
        })
        .catch((e) => {
          q(b, e, "red");
        });
    },
    P = (e) => {
      let n = i[e].title,
        o = i[e].onto_source,
        l = i[e].date_created,
        r = t.querySelector("#ontopanel-onto-info-box"),
        a = t.querySelector("#ontopanel-onto-info-details");
      (r.getElementsByTagName("span")[0].onclick = () => {
        r.style.display = "none";
      }),
        (a.innerHTML = `\n    <h4>Info about this ontology:</h4>\n    <ul style="padding-left:20px">\n      <li><b>title</b>: ${n}</li>\n      <li><b>source</b>: ${o}</li>\n      <li><b>updated date</b>: ${l}</li>\n    </ul>\n    `),
        (r.style.display = "block");
    },
    L = (e) => {
      let n = localStorage.getItem("loginUser"),
        o = i[e].id;
      n
        ? ((n = JSON.parse(n)),
          fetch("https://ontopanel.herokuapp.com/api/v1/ontos/change/" + o, {
            method: "DELETE",
            headers: new Headers({ Authorization: `Token ${n.token}` }),
          })
            .then((n) => {
              n.ok
                ? (i[e].title == a.title && se(null, "reset"),
                  d([e, null], "delete"),
                  t.querySelector("#" + e).remove(),
                  q(h, "Deleted in your databank!", "green"),
                  console.log(a))
                : n.json().then((e) => {
                    let t = Object.keys(e)[0];
                    q(h, e[t], "red");
                  });
            })
            .catch((e) => {
              q(h, e, "red");
            }))
        : (i[e].title == a.title && se(null, "reset"),
          d([e, null], "delete"),
          t.querySelector("#" + e).remove(),
          q(h, "Deleted locally", "green"));
    },
    q = (e, t, n) => {
      (e.innerText = t),
        (e.style.color = n),
        (e.style.display = "block"),
        setTimeout(() => {
          e.style.display = "none";
        }, 8e3);
    };
  var O = t.querySelector("#ontopanel-sign-box"),
    j = t.querySelector("#ontopanel-signup-btn"),
    I = t.querySelector("#ontopanel-login-btn"),
    z = t.querySelector("#ontopanel-logout-btn"),
    A = t.querySelector("#ontopanel-signup-form"),
    N = t.querySelector("#ontopanel-login-form"),
    U = t.querySelector("#ontopanel-link-login"),
    F = t.querySelector("#ontopanel-link-signup"),
    B = t.querySelector("#ontopanel-sign-box-close"),
    H = t.querySelector("#ontopanel-reset-password"),
    M = t.querySelector("#ontopanel-reset-password-box"),
    R = t.querySelector("#ontopanel-reset-password-closebox"),
    J = t.querySelector("#ontopanel-reset-password-form"),
    _ = t.querySelector("#ontopanel-reset-password-confirm-form"),
    $ = t.querySelector("#ontopanel-reset-password-info"),
    V = t.querySelector("#ontopanel-reset-password-confirm-info"),
    G = t.querySelector("#ontopanel-sign-info"),
    X = t.querySelector("#ontopanel-sign-login-error");
  const Y = (e) => {
      let t = e.get("signEmail").trim(),
        n = e.get("signPsw").trim();
      if (e.get("signPsw-repeat").trim() !== n)
        W(X, "Passwords are not equal.");
      else {
        let e = { email: t, password: n };
        fetch("https://ontopanel.herokuapp.com/api/v1/user/register/", {
          method: "POST",
          body: JSON.stringify(e),
          headers: new Headers({ "Content-Type": "application/json" }),
        })
          .then((e) => {
            e.ok
              ? (Z(), A.reset())
              : e.json().then((e) => {
                  let t = Object.keys(e)[0];
                  W(X, e[t]);
                });
          })
          .catch((e) => {
            W(X, e);
          });
      }
    },
    K = (e) => {
      let t = {
        username: e.get("loginEmail").trim(),
        password: e.get("loginPsw").trim(),
      };
      fetch("https://ontopanel.herokuapp.com/api/v1/user/login/", {
        method: "POST",
        body: JSON.stringify(t),
        headers: new Headers({ "Content-Type": "application/json" }),
      })
        .then((e) => {
          e.ok
            ? e.json().then((e) => {
                localStorage.setItem("loginUser", JSON.stringify(e)),
                  le(),
                  ee(!0),
                  Q(e.token, e.email),
                  W(X, "Login successfully.", "green"),
                  N.reset(),
                  (O.style.display = "none");
              })
            : e.json().then((e) => {
                let t = Object.keys(e)[0];
                W(X, e[t]);
              });
        })
        .catch((e) => {
          W(X, e);
        });
    },
    W = (e, t, n = "red") => {
      (e.style.color = n),
        (e.textContent = t),
        setTimeout(() => {
          e.textContent = "";
        }, 8e3);
    },
    Z = () => {
      (X.style.color = "green"),
        (X.textContent = "Sign Up successfully. Please login in."),
        (A.style.display = "none"),
        (N.style.display = "block"),
        setTimeout(() => {
          X.textContent = "";
        }, 2e3);
    },
    Q = (e, t) => {
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
                  E(e);
                }),
                  (G.innerText = `Current user: ${t}`),
                  ee(!0);
              })
            : e.json().then((e) => {
                (G.innerText = "Please login again"), ee(!1);
              });
        })
        .catch((e) => {
          (G.innerText = "Please login again"), ee(!1);
        });
    },
    ee = (e) => {
      (z.style.display = e ? "block" : "none"),
        (I.style.display = e ? "none" : "block");
    },
    te = (e) => {
      (O.style.display = "block"),
        (A.style.display = e ? "block" : "none"),
        (N.style.display = e ? "none" : "block");
    },
    ne = (e) => {
      let t = e.get("resetEmail").trim();
      fetch("https://ontopanel.herokuapp.com/api/v1/user/reset_password/", {
        method: "POST",
        body: JSON.stringify({ email: t }),
        headers: new Headers({ "Content-Type": "application/json" }),
      })
        .then((e) => {
          e.ok
            ? e.json().then((e) => {
                let t = Object.keys(e)[0];
                W($, e[t], "green");
              })
            : e.json().then((e) => {
                console.log(e);
                let t = Object.keys(e)[0];
                W($, e[t]);
              });
        })
        .catch((e) => {
          W($, e);
        });
    },
    oe = (e) => {
      let t = e.get("secretKey").trim(),
        n = e.get("resetPsw").trim();
      n !== e.get("resetPsw-con").trim()
        ? W(V, "Passwords are not equal!")
        : fetch(
            "https://ontopanel.herokuapp.com/api/v1/user/reset_password_confirm/",
            {
              method: "PATCH",
              body: JSON.stringify({ secret_key: t, password: n }),
              headers: new Headers({ "Content-Type": "application/json" }),
            }
          )
            .then((e) => {
              e.ok
                ? e.json().then((e) => {
                    let t = Object.keys(e)[0];
                    (V.style.color = "green"),
                      (V.textContent = e[t]),
                      setTimeout(() => {
                        (V.textContent = ""),
                          (M.style.display = "none"),
                          te(!1);
                      }, 3e3);
                  })
                : e.json().then((e) => {
                    let t = Object.keys(e)[0];
                    W(V, e[t]);
                  });
            })
            .catch((e) => {
              W(V, e);
            });
    },
    le = () => {
      (t.querySelector("#ontopanel-onto-extra-btn").innerText = ""),
        (G.innerText = ""),
        d([], "reset"),
        se(null, "reset");
    };
  !(function () {
    B.addEventListener("click", () => {
      (X.textContent = ""), (O.style.display = "none"), N.reset(), A.reset();
    }),
      R.addEventListener("click", () => {
        M.style.display = "none";
      });
    let e = localStorage.getItem("loginUser");
    e && ((e = JSON.parse(e)), Q(e.token, e.email)),
      j.addEventListener("click", (e) => {
        e.preventDefault(), te(!0);
      }),
      I.addEventListener("click", (e) => {
        e.preventDefault(), te(!1);
      }),
      z.addEventListener("click", (e) => {
        if (localStorage.getItem("loginUser")) {
          let n = JSON.parse(localStorage.getItem("loginUser")).token;
          e.preventDefault(),
            fetch("https://ontopanel.herokuapp.com/api/v1/user/logout/", {
              method: "GET",
              headers: new Headers({
                "Content-Type": "application/json",
                Authorization: `Token ${n}`,
              }),
            })
              .then((e) => {
                localStorage.removeItem("loginUser"), t();
              })
              .catch(() => {
                t();
              });
        } else t();
      });
    const t = () => {
      ee(!1), le();
    };
    U.addEventListener("click", (e) => {
      e.preventDefault(),
        (A.style.display = "none"),
        (N.style.display = "block");
    }),
      F.addEventListener("click", (e) => {
        e.preventDefault(),
          (A.style.display = "block"),
          (N.style.display = "none");
      }),
      H.addEventListener("click", (e) => {
        e.preventDefault(), (M.style.display = "block");
      }),
      A.addEventListener("submit", (e) => {
        e.preventDefault();
        let t = new FormData(e.target);
        Y(t);
      }),
      N.addEventListener("submit", (e) => {
        e.preventDefault();
        let t = new FormData(e.target);
        K(t);
      }),
      J.addEventListener("submit", (e) => {
        e.preventDefault();
        let t = new FormData(e.target);
        ne(t);
      }),
      _.addEventListener("submit", (e) => {
        e.preventDefault();
        let t = new FormData(e.target);
        oe(t);
      });
  })();
  var re = t.querySelector("#ontopanel-onto-extra-btn-MSEO"),
    ie = t.querySelector("#ontopanel-search-term"),
    ae = t.querySelector("#ontopanel-tree-title"),
    de = t.querySelector("#ontopanel-tree-content");
  function se(e, t = "selected") {
    switch (t) {
      case "selected":
        let n = e.onto_table.tree;
        s(e.title, n, t);
        break;
      case "reset":
        s(null, null, t);
    }
    (ae.innerHTML = `selected: ${a.title}`),
      document.getElementById("ontopanel-tree-class-btn").click();
  }
  !(function () {
    const e = {
      "ontopanel-tree-class-btn": "Class",
      "ontopanel-tree-op-btn": "OP",
      "ontopanel-tree-dp-btn": "DP",
      "ontopanel-tree-ind-btn": "Individual",
      "ontopanel-tree-ap-btn": "AP",
      "ontopanel-tree-dt-btn": "Datatype",
    };
    let t;
    Object.keys(e).forEach((t) => {
      document.getElementById(t).addEventListener("click", (t) => {
        let n = a.categories[e[t.target.id]];
        n.content
          ? ((de.innerHTML = pe(n.content, n.name).innerHTML), ue())
          : (de.innerHTML = "");
      });
    }),
      re.addEventListener("click", (e) => {
        e.preventDefault(),
          fetch("plugins/ontoData/mseo_ontopanel.json")
            .then((e) => e.json())
            .then((e) => {
              (e.onto_table.namespace = r),
                (i["ontopanel-onto-extra-btn-MSEO"] = e),
                se(e);
            });
      }),
      ie.addEventListener("keyup", (e) => {
        e.preventDefault(), clearTimeout(t), (t = setTimeout(ye, 500));
      });
  })();
  const pe = (e, t) => {
      let n = document.createElement("div"),
        o = document.createElement("div");
      o.style = "display:flex; margin:8px 0px 0px 10px;font-size:17px;";
      let l = document.createElement("div");
      l.innerText = t;
      let r =
          "color:lightgrey; border: none; padding:0; cursor: pointer;  margin-left:5px;",
        i = document.createElement("div");
      (i.innerText = "⊕"),
        (i.style = r),
        (i.style.marginLeft = "10px"),
        i.setAttribute("id", "tree-expandall-btn");
      let a = document.createElement("div");
      (a.innerText = "⊖"),
        (a.style = r),
        a.setAttribute("id", "tree-foldall-btn"),
        o.append(l, i, a);
      let d = document.createElement("hr");
      d.style = "width:95%; border-top:2px solid black;";
      let s = document.createElement("div");
      s.setAttribute("id", "tree-content-div");
      let p = ce(e);
      return (
        (p.style = "list-style:none; padding-left:5px; margin-top:0px;"),
        s.appendChild(p),
        (s.style = "height:300px; overflow:auto;"),
        n.append(o, d, s),
        n
      );
    },
    ce = (e) => {
      let t = document.createElement("ul");
      return (
        (t.style = "list-style:none; padding-left:18px;"),
        e.forEach((e) => {
          let n = document.createElement("li");
          n.style = "margin:3px;";
          let o = document.createElement("div");
          n.appendChild(o),
            (o.style = "display:flex; white-space: nowrap; font-size:14px;");
          let l = document.createElement("div");
          (l.innerHTML = e[0]), l.setAttribute("name", "li-term-details");
          let r = "color:lightgrey; border: none; padding:0; cursor: pointer; ",
            i = document.createElement("div");
          (i.innerText = "▲"),
            (i.style = r),
            (i.style.marginLeft = "5px"),
            i.setAttribute("name", "li-output-btn");
          let a = document.createElement("div");
          if (
            ((a.innerText = "R"),
            (a.style = r),
            a.setAttribute("name", "li-replace-btn"),
            o.append(l, i, a),
            t.appendChild(n),
            e[1].length)
          ) {
            let t = document.createElement("div");
            (t.innerText = "⊖"),
              (t.style = "cursor:pointer; margin-right:1px;"),
              t.setAttribute("name", "li-collapse-btn"),
              o.prepend(t);
            let l = ce(e[1]);
            n.appendChild(l);
          } else {
            let e = document.createElement("div");
            (e.innerHTML = "--"),
              (e.style = "color:grey;margin-right:1px;"),
              o.prepend(e);
          }
        }),
        t
      );
    },
    ue = () => {
      let t = document.getElementsByName("li-collapse-btn");
      for (let e = 0; e < t.length; e++)
        t[e].addEventListener("click", (e) => {
          let t = e.target,
            n = e.target.parentElement.nextSibling;
          "⊖" === e.target.innerText
            ? ((n.style.display = "none"), (t.innerText = "⊕"))
            : ((n.style.display = "block"), (t.innerText = "⊖"));
        });
      let o = document
          .getElementById("ontopanel-tree-entity-detail-box")
          .cloneNode(!0),
        l = document.getElementsByName("li-term-details");
      for (let e = 0; e < l.length; e++)
        l[e].addEventListener("click", (t) => {
          t.preventDefault();
          let n = l[e],
            r = n.firstChild.textContent,
            d = "ontopanel-onto-extra-btn-" + a.title,
            s = JSON.parse(i[d].onto_table.table)[r];
          n.appendChild(o),
            (o.onclick = (e) => {
              e.stopPropagation();
            }),
            (o.style.display = "block"),
            (document.getElementById("ontopanel-tree-entity-color").innerText =
              s.Color),
            (document.getElementById("ontopanel-tree-entity-label").innerText =
              s.RDFLabel),
            (document.getElementById("ontopanel-tree-entity-annos").innerHTML =
              me(s.Annotations).innerHTML),
            (document.getElementById(
              "ontopanel-tree-entity-special"
            ).innerHTML = me(s.SpecialInfo).innerHTML),
            l[e].scrollIntoView({ block: "nearest", inline: "nearest" });
        }),
          l[e].addEventListener("mouseleave", (t) => {
            t.preventDefault(),
              (o.style.display = "none"),
              l[e].contains(o) && o.remove();
          });
      let r = document.getElementById("tree-expandall-btn"),
        d = document.getElementById("tree-foldall-btn");
      r.addEventListener("mouseover", (e) => {
        e.preventDefault(), (r.style.color = "steelblue");
      }),
        r.addEventListener("mouseleave", (e) => {
          e.preventDefault(), (r.style.color = "lightgrey");
        }),
        r.addEventListener("click", (e) => {
          e.preventDefault();
          let t = document.getElementById("tree-content-div"),
            n = [...t.querySelectorAll('[name="li-collapse-btn"]')],
            o = [...t.getElementsByTagName("ul")];
          n.forEach((e) => {
            e.innerText = "⊖";
          }),
            o.forEach((e) => (e.style.display = ""));
        }),
        d.addEventListener("mouseover", (e) => {
          e.preventDefault(), (d.style.color = "steelblue");
        }),
        d.addEventListener("mouseleave", (e) => {
          e.preventDefault(), (d.style.color = "lightgrey");
        }),
        d.addEventListener("click", (e) => {
          e.preventDefault();
          let t = document.querySelectorAll("#tree-content-div >ul >li");
          [...document.querySelectorAll('[name="li-collapse-btn"]')].forEach(
            (e) => {
              e.innerText = "⊕";
            }
          ),
            t.forEach((e) => {
              [...e.getElementsByTagName("ul")].forEach((e) => {
                e.style.display = "none";
              });
            });
        });
      let s = document.getElementsByName("li-output-btn"),
        p = document.getElementsByName("li-replace-btn"),
        c = document.getElementById("ontopanel-namespace-btn");
      for (let t = 0; t < s.length; t++)
        s[t].addEventListener("mouseover", (e) => {
          e.preventDefault(), (s[t].style.color = "steelblue");
        }),
          s[t].addEventListener("mouseleave", (e) => {
            e.preventDefault(), (s[t].style.color = "lightgrey");
          }),
          s[t].addEventListener("click", (t) => {
            t.preventDefault();
            let o,
              l,
              r,
              d = 0;
            r = t.target.previousElementSibling.innerText;
            let s = i["ontopanel-onto-extra-btn-" + a.title],
              p = JSON.parse(s.onto_table.table)[r];
            switch (((o = p.BelongsTo), (l = p.Color), o)) {
              case "Class":
                let t;
                t =
                  "none" === l
                    ? "rounded=0;whiteSpace=wrap;html=1;"
                    : `rounded=0;whiteSpace=wrap;html=1;fillColor=${l};`;
                var c = new mxCell(r, new mxGeometry(0, 0, 90, 26), t),
                  u = r.length,
                  m = e.editor.graph.getPreferredSizeForCell(c);
                (c.geometry.width = m.width + u),
                  (c.vertex = !0),
                  (d = m.width + u + 30);
                break;
              case "OP":
                (c = new mxCell(
                  r,
                  new mxGeometry(0, 0, 90, 26),
                  "endArrow=classic;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;endSize=8;arcSize=0;"
                )),
                  (u = r.length);
                c.geometry.setTerminalPoint(new mxPoint(0, 0), !0),
                  c.geometry.setTerminalPoint(new mxPoint(8 * u + 20, 0), !1),
                  (c.edge = !0),
                  (d = 8 * u + 20 + 30);
                break;
              case "DP":
                (c = new mxCell(
                  r,
                  new mxGeometry(0, 0, 0, 0),
                  "edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;fontSize=12;"
                )),
                  (u = r.length);
                c.geometry.setTerminalPoint(new mxPoint(0, 0), !0),
                  c.geometry.setTerminalPoint(new mxPoint(8 * u + 20, 0), !1),
                  (c.edge = !0),
                  (d = 8 * u + 20 + 30);
                break;
              case "Individual":
                (c = new mxCell(
                  "<u>" + r + "</u>",
                  new mxGeometry(0, 0, 90, 26),
                  "rounded=0;whiteSpace=wrap;html=1;"
                )),
                  (u = r.length),
                  (m = e.editor.graph.getPreferredSizeForCell(c));
                (c.geometry.width = m.width + u),
                  (c.vertex = !0),
                  (d = m.width + u + 30);
                break;
              case "Datatype":
                (c = new mxCell(
                  r,
                  new mxGeometry(0, 0, 90, 26),
                  "rounded=0;whiteSpace=wrap;html=1;fillColor=#FF8C00;"
                )),
                  (u = r.length),
                  (m = e.editor.graph.getPreferredSizeForCell(c));
                (c.geometry.width = m.width + u),
                  (c.vertex = !0),
                  (d = m.width + u + 30);
            }
            let y = e.editor.graph,
              g = mxUtils.convertPoint(y.container, n.getX(), n.getY()),
              b = mxUtils.convertPoint(
                y.container,
                mxEvent.getClientX(t),
                mxEvent.getClientY(t)
              ),
              h = y.view.translate,
              f = y.view.scale,
              v = g.x / f - h.x - d,
              x = b.y / f - h.y;
            const w = [c];
            y.importCells(w, v, x);
          });
      for (let t = 0; t < p.length; t++)
        p[t].addEventListener("mouseover", (e) => {
          e.preventDefault(), (p[t].style.color = "steelblue");
        }),
          p[t].addEventListener("mouseleave", (e) => {
            e.preventDefault(), (p[t].style.color = "lightgrey");
          }),
          p[t].addEventListener("click", (t) => {
            let n, o, l;
            t.preventDefault(),
              (l =
                t.target.previousElementSibling.previousElementSibling
                  .innerText);
            let r = i["ontopanel-onto-extra-btn-" + a.title],
              d = JSON.parse(r.onto_table.table)[l];
            (n = d.BelongsTo), (o = d.Color);
            var s = e.editor.graph.getSelectionCells();
            s &&
              s.forEach((t) => {
                let r;
                switch (n) {
                  case "Individual":
                    e.editor.graph.model.setValue(t, "<u>" + l + "</u>");
                    break;
                  case "Class":
                    e.editor.graph.model.setValue(t, l),
                      "none" !== o
                        ? ((r = `rounded=0;whiteSpace=wrap;html=1;fillColor=${o};`),
                          e.editor.graph.model.setStyle(t, r))
                        : ((r = "rounded=0;whiteSpace=wrap;html=1;"),
                          e.editor.graph.model.setStyle(t, r));
                    break;
                  case "Datatype":
                    (r = "rounded=0;whiteSpace=wrap;html=1;fillColor=#FF8C00;"),
                      e.editor.graph.model.setStyle(t, r);
                  default:
                    e.editor.graph.model.setValue(t, l);
                }
              });
          });
      c.onclick = (t) => {
        if ((t.preventDefault(), "none" !== a.title)) {
          let r =
            i["ontopanel-onto-extra-btn-" + a.title].onto_table.namespaces.join(
              "<br/>"
            );
          var o = new mxCell(
              r + "<br/>",
              new mxGeometry(0, 0, 90, 26),
              "shape=note;whiteSpace=wrap;html=1;backgroundOutline=1;darkOpacity=0.05;"
            ),
            l = e.editor.graph.getPreferredSizeForCell(o);
          (o.geometry.width = l.width + 30), (o.vertex = !0);
          let d = l.width + 30,
            s = e.editor.graph,
            p = mxUtils.convertPoint(s.container, n.getX(), n.getY()),
            c = mxUtils.convertPoint(
              s.container,
              mxEvent.getClientX(t),
              mxEvent.getClientY(t)
            ),
            u = e.editor.graph.view.translate,
            m = e.editor.graph.view.scale,
            y = p.x / m - u.x - d,
            g = c.y / m - u.y;
          const b = [o];
          e.editor.graph.importCells(b, y, g);
        }
      };
    },
    me = (e) => {
      let t = document.createElement("div");
      return (
        e &&
          Object.keys(e).forEach((n) => {
            if (e[n].length) {
              let o = document.createElement("div"),
                l = document.createElement("div"),
                r = document.createElement("hr");
              (l.innerText = n),
                (l.style.color = "steelblue"),
                (l.style.marginBottom = "3px");
              let i = document.createElement("div");
              (i.innerText = e[n].join("\n")),
                (r.style.borderTop = "1px dotted #333"),
                (r.style.margin = "5px 0px 5px 0px"),
                o.append(l, i, r),
                t.appendChild(o);
            }
          }),
        t
      );
    },
    ye = () => {
      let e = ie.value.trim().toUpperCase(),
        t = document.getElementsByName("li-term-details");
      if (t.length) {
        document.getElementById("tree-expandall-btn").click();
        var n = "ontopanel-onto-extra-btn-" + a.title,
          o = JSON.parse(i[n].onto_table.table);
        for (let n = 0; n < t.length; n++) {
          let l = t[n].parentNode.parentNode,
            r = t[n].firstChild.textContent,
            i = o[r].RDFLabel,
            a = [...l.querySelectorAll('[name="li-term-details"]')],
            d = a.map((e) => e.firstChild.textContent).join("\n"),
            s = a.map((e) => o[e.firstChild.textContent].RDFLabel).join("\n");
          (d || s) &&
            (s.toUpperCase().indexOf(e) > -1 || d.toUpperCase().indexOf(e) > -1
              ? ((l.style.display = ""),
                i.toUpperCase().indexOf(e) > -1 ||
                r.toUpperCase().indexOf(e) > -1
                  ? (t[n].style.backgroundColor = e ? "#fddde6" : "transparent")
                  : (t[n].style.background = "transparent"))
              : ((l.style.display = "none"),
                (t[n].style.background = "transparent")));
        }
      }
    };
});
