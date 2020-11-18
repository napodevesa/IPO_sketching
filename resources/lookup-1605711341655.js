(function(window, undefined) {
  var dictionary = {
    "86865e32-d3b9-4514-bedb-7127453a48f4": "Covid",
    "a38f2454-b95d-415b-9af8-0d4457e36843": "Mapa_COVID",
    "024a4b4d-f66b-4c05-8907-22e639985b2e": "Screen2",
    "3b185445-e49a-497b-b712-5881f8f3bb2f": "MAPA",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "1ce68cd4-28bd-43bf-8d10-fe3e9ebe511b": "Mes_economico",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);