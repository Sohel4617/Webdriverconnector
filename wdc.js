(function () {
  var myConnector = tableau.makeConnector();

  myConnector.getSchema = function (schemaCallback) {
    var cols = [
      { id: "id", alias: "ID", dataType: tableau.dataTypeEnum.int },
      { id: "name", alias: "Name", dataType: tableau.dataTypeEnum.string },
    ];

    var tableInfo = {
      id: "simpleTable",
      alias: "Simple Table",
      columns: cols,
    };

    schemaCallback([tableInfo]);
  };

  myConnector.getData = function (table, doneCallback) {
    var data = [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
      { id: 3, name: "Item 3" },
    ];

    table.appendRows(data);
    doneCallback();
  };

  tableau.registerConnector(myConnector);

  // Create tableau visualization
  function createViz() {
    var placeholderDiv = document.getElementById("tableauViz");
    var url = "index.html";
    var options = {
      hideTabs: true,
      hideToolbar: true,
      onFirstInteractive: function () {
        document.getElementById("tableauViz").style.display = "block";
      },
    };

    var viz = new tableau.Viz(placeholderDiv, url, options);
  }

  createViz();
})();
