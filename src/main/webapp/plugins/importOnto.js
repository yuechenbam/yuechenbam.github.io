Draw.loadPlugin(function (ui) {
  const container = document.createElement("div");
  container.style.border = "1px solid black";
  container.style.height = "400px";
  container.style.width = "400px";
  container.style.padding = "5px";
  container.style.fontSize = "14px";

  container.innerHTML = `
  
    <div  style="height: 50px;">
        <div id="chooseOnto" style="display: flex; height: 30px;">
            <button id="mesoBtn" style="cursor: pointer;">MSEO</button>
            <button id="otherBtn" style="cursor: pointer;">+</button>
            <p id="tableTitle" style="margin: 5px 0px 0px 30px;"> selected: table title</p>
            <button id="namespaceBtn" style="border:1px soild black; margin: 5px 0px 0px 5px;; cursor: pointer; height:20px ">⇱ prefix</button>
        </div>
    </div>
    <div id="modalbox" style="display: none; position: absolute; z-index: 5; left: 0; top: 0; width: 100%;  height: 100%;  overflow: auto; background-color: rgba(0,0,0,0.4); ">
        <div style = "background-color: #fefefe; margin: 15% auto; padding: 20px; border: 1px solid #888; width: 80%;">
          <span id="closebox" style="color: #aaa;float: right;font-size: 28px; font-weight: bold; cursor: pointer">&times;</span>
          <form id="owlUploader" enctype="multipart/form-data">
            <div style="margin-bottom:5px">
              Please upload a file 
            </div>
            <div>
              <input  type="file" name="formFile" />
            </div>
            
            <div style="margin-bottom:5px">
            Or </br>
            Enter URL of raw data, such as github
            </div>

            <div style="margin-bottom:5px">
              <input type="url" name="formURL" placeholder="https://example.com" />
            </div>
            <div style="margin-bottom:5px">
              And enter the ontology name 
            </div>
            <div>
              <input type="text" name="formName" placeholder="meso" style="width:80px" maxlength="5" required='true'/>
              <button type="submit" >Submit</button>
              <span id="errorSpan" style="display: none"></span>
              
            </div>
          </form>
        </div>

      </div>


    <div id="showOnto" style="height: 350px; border-radius: 5px;">
            <div style="display: flex; height: 30px;">
                <button id="classBtn" style="cursor: pointer;">Class</button>
                <button id="opBtn" style="cursor: pointer;">OP</button>
                <button id="dpBtn" style="cursor: pointer;">DP</button>
                <button id="indBtn" style="cursor: pointer;">Individual</button>
                <button id="dtBtn" style="cursor: pointer;">DataValue</button>
                <input id="searchTerm" style="margin-left: 50px;" placeholder="search entity"/>
            </div>
            <div id="csvTable" style="height:310px; overflow: auto;">
              
                <table id="tableContent" style="table-layout: auto; borderCollapse:collapse">
                  <td style="font-size:16px">New version can be founded in another plugin ontopanel. This version will be removed later.</td>
                </table>

            </div>
    </div>
`;

  fetch("https://visiotoontology.herokuapp.com/owltable").then((response) => {
    console.log("active backend");
    console.log(response.text());
  });

  mxUtils.br(container);
  mxResources.parse("importOnto=import Ontology");

  var wnd = new mxWindow(
    mxResources.get("importOnto"),
    container,
    document.body.offsetWidth - 480,
    140,
    410,
    430,
    true,
    true
  );
  wnd.destroyOnClose = false;
  wnd.setMaximizable(false);
  wnd.setResizable(false);
  wnd.setClosable(true);
  wnd.setVisible(false);

  ui.actions.addAction("importOnto", function () {
    wnd.setVisible(!wnd.isVisible());
  });

  var menu = ui.menus.get("extras");
  var oldFunct = menu.funct;

  menu.funct = function (menu, parent) {
    oldFunct.apply(this, arguments);

    ui.menus.addMenuItems(menu, ["importOnto"], parent);
  };

  const csvTable = document.getElementById("csvTable");
  const tableTitle = document.getElementById("tableTitle");
  const tableHeader = document.getElementById("tableHeader");
  const tableContent = document.getElementById("tableContent");
  const searchTerm = document.getElementById("searchTerm");
  const owlUploader = document.getElementById("owlUploader");
  const errorSpan = document.getElementById("errorSpan");
  const chooseOnto = document.getElementById("chooseOnto");

  const mesoBtn = document.getElementById("mesoBtn");
  const addBtn = document.getElementById("otherBtn");
  const namespaceBtn = document.getElementById("namespaceBtn");
  const modal = document.getElementById("modalbox");
  const closeBtn = document.getElementById("closebox");

  addBtn.onclick = () => {
    modal.style.display = "block";
  };

  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  var categoriesContent = {
    Class: { name: "Class", content: null },
    OP: { name: "ObjectProperty", content: null },
    DP: { name: "DataProperty", content: null },
    Individual: { name: "Individual", content: null },
    DataType: {
      name: "DataType",
      content: [
        {
          EntityName: '"value"^^owl:rational',
          Color: "orange",
        },
        {
          EntityName: '"value"^^owl:real',
          Color: "orange",
        },
        {
          EntityName: '"value"^^rdf:PlainLiteral',
          Color: "orange",
        },
        {
          EntityName: '"value"^^rdf:XMLLiteral',
          Color: "orange",
        },
        {
          EntityName: '"value"^^rdfs:Literal',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:anyURI',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:base64Binary',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:boolean',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:byte',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:dateTime',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:dateTimeStamp',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:decimal',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:double',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:float',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:hexBinary',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:int',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:integer',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:language',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:long',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:Name',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:NCName',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:negativeInteger',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:NMTOKEN',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:nonNegativeInteger',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:nonPositiveInteger',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:normalizedString',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:positiveInteger',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:short',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:string',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:token',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:unsignedByte',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:unsignedInt',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:unsignedLong',
          Color: "orange",
        },
        {
          EntityName: '"value"^^xsd:unsignedShort',
          Color: "orange",
        },
      ],
    },
  };

  const colorHex = {
    green: "#1C9E71",
    grey: "#DADADA",
    blue: "#4682B4",
    orange: "#FF8C00",
    yellow: "#F0F000",
    none: "black",
  };

  const defaultNamespace =
    "rdf:http://www.w3.org/1999/02/22-rdf-syntax-ns# <br/> \
        rdfs:http://www.w3.org/2000/01/rdf-schema# <br/> \
        xsd:http://www.w3.org/2001/XMLSchema# <br/> \
        owl:http://www.w3.org/2002/07/owl#";

  const mesoNamespace = [
    "base:https://purl.matolab.org/mseo/methods/example/",
    "mid:https://purl.matolab.org/mseo/mid/",
    "cco:http://www.ontologyrepository.com/CommonCoreOntologies/",
    "obo:http://purl.obolibrary.org/obo/",
    "pt:http://www.daml.org/2003/01/periodictable/PeriodicTable#",
    "geo:http://www.opengis.net/ont/geosparql#",
  ];

  var ontoBank = { MSEOOntoBtn: { namespaces: mesoNamespace } };

  var currentOntoName = null;

  // add listern to prefix and searchTerm

  namespaceBtn.onclick = (evt) => {
    if (currentOntoName) {
      let currentNamespace = ontoBank[currentOntoName].namespaces.join("<br/>");

      let outputNamespace = currentNamespace + "<br/>" + defaultNamespace;

      var nameSpaceCell = new mxCell(
        outputNamespace,
        new mxGeometry(0, 0, 90, 26),
        "shape=note;whiteSpace=wrap;html=1;backgroundOutline=1;darkOpacity=0.05;"
      );

      var size = ui.editor.graph.getPreferredSizeForCell(nameSpaceCell);
      nameSpaceCell.geometry.width = size.width + 30;
      nameSpaceCell.vertex = true;
      let labelOffset = size.width + 30 + 350;

      var pt = mxUtils.convertPoint(
        ui.editor.graph.container,
        mxEvent.getClientX(evt),
        mxEvent.getClientY(evt)
      );
      var tr = ui.editor.graph.view.translate;
      var scale = ui.editor.graph.view.scale;
      var x = pt.x / scale - tr.x - labelOffset;
      var y = pt.y / scale - tr.y;

      const cellGround = [nameSpaceCell];
      ui.editor.graph.importCells(cellGround, x, y);
    }
  };

  searchTerm.onkeyup = (evt) => {
    var filter, tr, td, i, txtValue;
    filter = evt.target.value.toUpperCase();
    tr = tableContent.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      td_label = tr[i].getElementsByTagName("td")[2];
      if (td || td_label) {
        txtValue = td.textContent || td.innerText;
        txtValueLabel = td_label.textContent || td_label.innerText;
        if (
          txtValue.toUpperCase().indexOf(filter) > -1 ||
          txtValueLabel.toUpperCase().indexOf(filter) > -1
        ) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };

  const addCateListner = () => {
    const categoriesBtn = {
      classBtn: "Class",
      opBtn: "OP",
      dpBtn: "DP",
      indBtn: "Individual",
      dtBtn: "DataType",
    };
    Object.keys(categoriesBtn).forEach((btnName) => {
      const btn = document.getElementById(btnName);
      btn.addEventListener("click", (evt) => {
        const inputArray = categoriesContent[categoriesBtn[evt.target.id]];

        tableContent.innerHTML = buildHtmlTable(
          inputArray.content,
          inputArray.name
        ).innerHTML;
        rowBtnListner();
      });
    });
  };

  mesoBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    fetch("/src/main/webapp/plugins/ontoData/mseo_importOnto.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        tableTitle.innerHTML = "selected: MSEO ontology";
        Object.keys(categoriesContent)
          .filter((key) => key !== "DataType")
          .forEach((entity) => addContent(entity, data));

        tableContent.innerHTML = buildHtmlTable(
          categoriesContent.Class.content,
          categoriesContent.Class.name
        ).innerHTML;

        rowBtnListner();
        addCateListner();
        currentOntoName = "MSEOOntoBtn";
      });
  });

  owlUploader.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const tagName = formData.get("formName").trim();
    const formFile = formData.get("formFile");
    const formURL = formData.get("formURL");

    if (!(formFile.size || formURL)) {
      errorSpan.innerText = "Please enter File or URL!";
      errorSpan.style.color = "red";
      errorSpan.style.display = "block";
      setTimeout(() => {
        errorSpan.style.display = "none";
      }, 8000);
    } else if (Object.keys(ontoBank).includes(tagName + "OntoBtn")) {
      errorSpan.innerText = "this name is taken, use another one!";
      errorSpan.style.color = "red";
      errorSpan.style.display = "block";
      setTimeout(() => {
        errorSpan.style.display = "none";
      }, 8000);
    } else {
      errorSpan.innerText = "In process, please wait.";
      errorSpan.style.color = "green";
      errorSpan.style.display = "block";
      fetch("https://visiotoontology.herokuapp.com/owltable", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          var error = data.error;
          if (!error) {
            addOnto(data, tagName);
            errorSpan.innerText = "Succssfully added!";
            errorSpan.style.color = "green";
            errorSpan.style.display = "block";
            setTimeout(() => {
              errorSpan.style.display = "none";
            }, 8000);
            owlUploader.reset();
          } else {
            errorSpan.innerText = error;
            errorSpan.style.color = "red";
            errorSpan.style.display = "block";
            setTimeout(() => {
              errorSpan.style.display = "none";
            }, 8000);
          }
        })
        .catch((err) => {
          errorSpan.innerText = err;
          errorSpan.style.color = "red";
          errorSpan.style.display = "block";
          setTimeout(() => {
            errorSpan.style.display = "none";
          }, 8000);
        });
    }
  });

  const addOnto = (data, tagName) => {
    const newBtn = document.createElement("button");
    newBtn.innerText = tagName;
    newBtn.style.cursor = "pointer";
    const id = tagName + "OntoBtn";
    newBtn.id = id;
    ontoBank[id] = data;

    newBtn.addEventListener("click", (evt) => {
      loadTable(evt);
    });
    chooseOnto.prepend(newBtn);
  };

  const loadTable = (evt) => {
    const id = evt.target.id;
    const data = JSON.parse(ontoBank[id].table);
    currentOntoName = id;
    tableTitle.innerHTML = `selected: ${id.slice(0, -7)} ontology`;
    Object.keys(categoriesContent)
      .filter((key) => key !== "DataType")
      .forEach((entity) => addContent(entity, data));

    tableContent.innerHTML = buildHtmlTable(
      categoriesContent.Class.content,
      categoriesContent.Class.name
    ).innerHTML;
    rowBtnListner();
    addCateListner();
  };

  const addContent = (keyword, data) => {
    categoriesContent[keyword]["content"] = data.filter(
      (row) => row["BelongsTo"] === keyword
    );
    categoriesContent[keyword]["content"].forEach((row) => {
      delete row.BelongsTo;
    });
  };

  var _table_ = document.createElement("table"),
    _tr_ = document.createElement("tr"),
    _th_ = document.createElement("th"),
    _td_ = document.createElement("td");

  const buildHtmlTable = (arr, name) => {
    var table = _table_.cloneNode(false),
      columns = addAllColumnHeaders(arr, table, name);
    for (var i = 0, maxi = arr.length; i < maxi; ++i) {
      var tr = _tr_.cloneNode(false);
      var buttonTd = _td_.cloneNode(false);
      var btnDiv = document.createElement("div");
      let colorEntity = arr[i][columns[columns.length - 1]];

      var colorDiv = document.createElement("div");
      colorDiv.style.width = "6px";
      colorDiv.style.backgroundColor = colorHex[colorEntity];
      btnDiv.appendChild(colorDiv);

      var rBtn = document.createElement("button");

      rBtn.id = name + "__" + colorEntity + "__" + arr[i][columns[0]];
      rBtn.innerText = "◄";
      rBtn.name = "rowBtn";
      rBtn.style.padding = "0px";
      rBtn.style.marginLeft = "1px";
      rBtn.style.fontSize = "14px";
      rBtn.style.cursor = "pointer";
      rBtn.style.border = "1px solid black";

      btnDiv.appendChild(rBtn);

      var reBtn = document.createElement("button");
      reBtn.id = name + "__" + colorEntity + "__" + arr[i][columns[0]];

      reBtn.innerText = "R";
      reBtn.name = "replaceBtn";
      reBtn.style.padding = "0px";
      reBtn.style.marginLeft = "1px";
      reBtn.style.fontSize = "14px";
      reBtn.style.cursor = "pointer";
      reBtn.style.border = "1px solid black";

      btnDiv.appendChild(reBtn);

      buttonTd.appendChild(btnDiv);
      btnDiv.style.display = "flex";
      btnDiv.style.flexDirection = "row";

      buttonTd.style.whiteSpace = "nowrap";
      tr.appendChild(buttonTd);
      for (var j = 0, maxj = columns.length; j < maxj; ++j) {
        var td = _td_.cloneNode(false);
        cellValue = arr[i][columns[j]];
        td.appendChild(document.createTextNode(arr[i][columns[j]] || ""));
        td.style.border = "1px solid black";
        td.style.fontSize = "13px";
        tr.appendChild(td);
      }
      tr.style.border = "1px solid black";
      tr.style.whiteSpace = "nowrap";

      table.appendChild(tr);
    }

    return table;
  };

  const addAllColumnHeaders = (arr, table, name) => {
    var columnSet = [],
      tr = _tr_.cloneNode(false);
    var emptyTh = _th_.cloneNode(false);
    emptyTh.style.border = "1px solid black";
    emptyTh.style.position = "sticky";
    emptyTh.style.top = "0px";
    emptyTh.style.backgroundColor = "lightgrey";
    tr.appendChild(emptyTh);

    for (var i = 0, l = arr.length; i < l; i++) {
      for (var key in arr[i]) {
        if (arr[i].hasOwnProperty(key) && columnSet.indexOf(key) === -1) {
          columnSet.push(key);
          var th = _th_.cloneNode(false);
          var colGroup = document.createElement("div");
          colGroup.style.display = "inline";
          if (key === "EntityName") {
            key = key + "(" + name + ")";
          }
          colGroup.appendChild(document.createTextNode(key));
          th.appendChild(colGroup);
          th.style.border = "1px solid black";
          th.style.whiteSpace = "nowrap";
          th.style.position = "sticky";
          th.style.top = "0px";
          th.style.backgroundColor = "lightgrey";

          tr.appendChild(th);
        }
      }
    }
    tr.style.border = "1px solid black";
    table.appendChild(tr);
    return columnSet;
  };

  const rowBtnListner = () => {
    const btns = document.getElementsByName("rowBtn");
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", outPutCol);
    }
    const reBtns = document.getElementsByName("replaceBtn");
    for (let i = 0; i < reBtns.length; i++) {
      reBtns[i].addEventListener("click", replaceLabel);
    }
  };

  const outPutCol = (evt) => {
    var labelOffset = 0;
    var cate, color, label;
    [cate, color, label] = evt.target.id.split("__", 3);

    switch (cate) {
      case "Class":
        let styleString;
        if (color === "none") {
          styleString = "rounded=0;whiteSpace=wrap;html=1;";
        } else {
          var fillcolor = colorHex[color];
          styleString = `rounded=0;whiteSpace=wrap;html=1;fillColor=${fillcolor};`;
        }
        var colCell = new mxCell(
          label,
          new mxGeometry(0, 0, 90, 26),
          styleString
        );
        var maxNameLength = label.length;

        var size = ui.editor.graph.getPreferredSizeForCell(colCell);
        colCell.geometry.width = size.width + maxNameLength;
        colCell.vertex = true;
        labelOffset = size.width + maxNameLength + 30;

        break;
      case "ObjectProperty":
        var colCell = new mxCell(
          label,
          new mxGeometry(0, 0, 90, 26),
          "endArrow=classic;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;endSize=8;arcSize=0;"
        );
        var maxNameLength = label.length;
        colCell.geometry.setTerminalPoint(new mxPoint(0, 0), true);
        colCell.geometry.setTerminalPoint(
          new mxPoint(maxNameLength * 8 + 20, 0),
          false
        );

        colCell.edge = true;
        labelOffset = maxNameLength * 8 + 20 + 30;

        break;
      case "DataProperty":
        var colCell = new mxCell(
          label,
          new mxGeometry(0, 0, 0, 0),
          "edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;fontSize=12;"
        );
        var maxNameLength = label.length;

        colCell.geometry.setTerminalPoint(new mxPoint(0, 0), true);
        colCell.geometry.setTerminalPoint(
          new mxPoint(maxNameLength * 8 + 20, 0),
          false
        );
        colCell.edge = true;
        labelOffset = maxNameLength * 8 + 20 + 30;

        break;
      case "Individual":
        var colCell = new mxCell(
          "<u>" + label + "</u>",
          new mxGeometry(0, 0, 90, 26),
          "rounded=0;whiteSpace=wrap;html=1;"
        );
        var maxNameLength = label.length;

        var size = ui.editor.graph.getPreferredSizeForCell(colCell);
        colCell.geometry.width = size.width + maxNameLength;
        colCell.vertex = true;
        labelOffset = size.width + maxNameLength + 30;
        break;

      case "DataType":
        var colCell = new mxCell(
          label,
          new mxGeometry(0, 0, 90, 26),
          "rounded=0;whiteSpace=wrap;html=1;fillColor=#FF8C00;"
        );
        var maxNameLength = label.length;

        var size = ui.editor.graph.getPreferredSizeForCell(colCell);
        colCell.geometry.width = size.width + maxNameLength;
        colCell.vertex = true;
        labelOffset = size.width + maxNameLength + 30;
        break;
    }

    var graph = ui.editor.graph;

    var pt = mxUtils.convertPoint(
      graph.container,
      mxEvent.getClientX(evt),
      mxEvent.getClientY(evt)
    );
    var tr = graph.view.translate;
    var scale = graph.view.scale;
    var x = pt.x / scale - tr.x - labelOffset;
    var y = pt.y / scale - tr.y;

    const cellGround = [colCell];
    graph.importCells(cellGround, x, y);
  };

  const replaceLabel = (evt) => {
    var cate, color, label;
    [cate, color, label] = evt.target.id.split("__", 3);
    var cells = ui.editor.graph.getSelectionCells();
    if (cells) {
      cells.forEach((cell) => {
        let styleString;
        switch (cate) {
          case "Individual":
            ui.editor.graph.model.setValue(cell, "<u>" + label + "</u>");
            break;
          case "Class":
            ui.editor.graph.model.setValue(cell, label);

            if (color !== "none") {
              var fillcolor = colorHex[color];
              styleString = `rounded=0;whiteSpace=wrap;html=1;fillColor=${fillcolor};`;
              ui.editor.graph.model.setStyle(cell, styleString);
            } else {
              styleString = `rounded=0;whiteSpace=wrap;html=1;`;
              ui.editor.graph.model.setStyle(cell, styleString);
            }

            break;
          case "DataType":
            styleString = "rounded=0;whiteSpace=wrap;html=1;fillColor=#FF8C00;";
            ui.editor.graph.model.setStyle(cell, styleString);

          default:
            ui.editor.graph.model.setValue(cell, label);
        }
      });
    }
  };
});
