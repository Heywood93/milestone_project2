{"changed":true,"filter":false,"title":"game.js","tooltip":"/javascript/game.js","value":"\nvar shapes = [\"circle\",\"diamond\",\"star\",\"heart\",\"four_point\",\"triangle\"];\nvar list1 = new Array();\nvar n = 0;\n\nlist1[n] = shapes[Math.floor(Math.random() * 6)];\n\nn += 1;\nlist1[n] = shapes[Math.floor(Math.random() * 6)];\nn += 1;\nlist1[n] = shapes[Math.floor(Math.random() * 6)];\n\nfor(i=0; i < list1.length; i++) {\n\n    var shape = list1[i];\n    \n    console.log(shape);\n    \n    if (shape == \"circle\") {\n        var el = document.getElementById(\"circle\");\n    } else if (shape == \"diamond\") {\n        var el = document.getElementById(\"diamond\");\n    } else if (shape == \"star\") {\n        var el = document.getElementById(\"star\");\n    } else if (shape == \"heart\") {\n        var el = document.getElementById(\"heart\");\n    } else if (shape == \"four_point\") {\n        var el = document.getElementById(\"four_point\");\n    } else if (shape == \"triangle\") {\n        var el = document.getElementById(\"triangle\");\n    }\n    console.log(el);\n    el.classList.remove(\"off\");\n};","undoManager":{"mark":89,"position":100,"stack":[[{"start":{"row":17,"column":12},"end":{"row":17,"column":13},"action":"insert","lines":["e"],"id":625},{"start":{"row":17,"column":13},"end":{"row":17,"column":14},"action":"insert","lines":["l"]}],[{"start":{"row":17,"column":14},"end":{"row":17,"column":15},"action":"insert","lines":[" "],"id":626}],[{"start":{"row":17,"column":15},"end":{"row":17,"column":38},"action":"insert","lines":["document.getElementById"],"id":627}],[{"start":{"row":17,"column":38},"end":{"row":17,"column":40},"action":"insert","lines":["()"],"id":628}],[{"start":{"row":17,"column":39},"end":{"row":17,"column":41},"action":"insert","lines":["\"\""],"id":629}],[{"start":{"row":17,"column":40},"end":{"row":17,"column":41},"action":"insert","lines":["c"],"id":630},{"start":{"row":17,"column":41},"end":{"row":17,"column":42},"action":"insert","lines":["i"]},{"start":{"row":17,"column":42},"end":{"row":17,"column":43},"action":"insert","lines":["r"]},{"start":{"row":17,"column":43},"end":{"row":17,"column":44},"action":"insert","lines":["c"]},{"start":{"row":17,"column":44},"end":{"row":17,"column":45},"action":"insert","lines":["l"]},{"start":{"row":17,"column":45},"end":{"row":17,"column":46},"action":"insert","lines":["e"]}],[{"start":{"row":17,"column":48},"end":{"row":17,"column":49},"action":"insert","lines":[";"],"id":631}],[{"start":{"row":17,"column":49},"end":{"row":18,"column":0},"action":"insert","lines":["",""],"id":632},{"start":{"row":18,"column":0},"end":{"row":18,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":18,"column":8},"end":{"row":18,"column":9},"action":"insert","lines":["e"],"id":633},{"start":{"row":18,"column":9},"end":{"row":18,"column":10},"action":"insert","lines":["l"]}],[{"start":{"row":18,"column":10},"end":{"row":18,"column":11},"action":"insert","lines":["."],"id":634},{"start":{"row":18,"column":11},"end":{"row":18,"column":12},"action":"insert","lines":["c"]}],[{"start":{"row":18,"column":12},"end":{"row":18,"column":13},"action":"insert","lines":["l"],"id":635},{"start":{"row":18,"column":13},"end":{"row":18,"column":14},"action":"insert","lines":["a"]},{"start":{"row":18,"column":14},"end":{"row":18,"column":15},"action":"insert","lines":["s"]}],[{"start":{"row":18,"column":11},"end":{"row":18,"column":15},"action":"remove","lines":["clas"],"id":636},{"start":{"row":18,"column":11},"end":{"row":18,"column":20},"action":"insert","lines":["classList"]}],[{"start":{"row":18,"column":20},"end":{"row":18,"column":21},"action":"insert","lines":["."],"id":637},{"start":{"row":18,"column":21},"end":{"row":18,"column":22},"action":"insert","lines":["r"]},{"start":{"row":18,"column":22},"end":{"row":18,"column":23},"action":"insert","lines":["e"]},{"start":{"row":18,"column":23},"end":{"row":18,"column":24},"action":"insert","lines":["m"]},{"start":{"row":18,"column":24},"end":{"row":18,"column":25},"action":"insert","lines":["o"]}],[{"start":{"row":18,"column":25},"end":{"row":18,"column":26},"action":"insert","lines":["v"],"id":638},{"start":{"row":18,"column":26},"end":{"row":18,"column":27},"action":"insert","lines":["e"]}],[{"start":{"row":18,"column":27},"end":{"row":18,"column":29},"action":"insert","lines":["()"],"id":639}],[{"start":{"row":18,"column":28},"end":{"row":18,"column":29},"action":"insert","lines":["2"],"id":640}],[{"start":{"row":18,"column":28},"end":{"row":18,"column":29},"action":"remove","lines":["2"],"id":641}],[{"start":{"row":18,"column":28},"end":{"row":18,"column":30},"action":"insert","lines":["\"\""],"id":642}],[{"start":{"row":18,"column":29},"end":{"row":18,"column":30},"action":"insert","lines":["o"],"id":643},{"start":{"row":18,"column":30},"end":{"row":18,"column":31},"action":"insert","lines":["f"]},{"start":{"row":18,"column":31},"end":{"row":18,"column":32},"action":"insert","lines":["f"]}],[{"start":{"row":18,"column":34},"end":{"row":18,"column":35},"action":"insert","lines":[";"],"id":644}],[{"start":{"row":19,"column":5},"end":{"row":19,"column":6},"action":"insert","lines":[" "],"id":645},{"start":{"row":19,"column":6},"end":{"row":19,"column":7},"action":"insert","lines":["e"]},{"start":{"row":19,"column":7},"end":{"row":19,"column":8},"action":"insert","lines":["l"]}],[{"start":{"row":19,"column":8},"end":{"row":19,"column":9},"action":"insert","lines":["s"],"id":646},{"start":{"row":19,"column":9},"end":{"row":19,"column":10},"action":"insert","lines":["e"]}],[{"start":{"row":17,"column":15},"end":{"row":17,"column":16},"action":"insert","lines":["="],"id":647}],[{"start":{"row":17,"column":16},"end":{"row":17,"column":17},"action":"insert","lines":[" "],"id":648}],[{"start":{"row":18,"column":8},"end":{"row":18,"column":35},"action":"remove","lines":["el.classList.remove(\"off\");"],"id":649}],[{"start":{"row":18,"column":4},"end":{"row":18,"column":8},"action":"remove","lines":["    "],"id":650},{"start":{"row":18,"column":0},"end":{"row":18,"column":4},"action":"remove","lines":["    "]},{"start":{"row":17,"column":51},"end":{"row":18,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":18,"column":10},"end":{"row":18,"column":11},"action":"insert","lines":["m"],"id":651}],[{"start":{"row":18,"column":10},"end":{"row":18,"column":11},"action":"remove","lines":["m"],"id":652}],[{"start":{"row":18,"column":10},"end":{"row":18,"column":11},"action":"insert","lines":[" "],"id":653},{"start":{"row":18,"column":11},"end":{"row":18,"column":12},"action":"insert","lines":["i"]},{"start":{"row":18,"column":12},"end":{"row":18,"column":13},"action":"insert","lines":["f"]}],[{"start":{"row":19,"column":4},"end":{"row":21,"column":33},"action":"remove","lines":["el = document.getElementById(console.log(shape));","    console.log(el);","    /*.classList.remove(\"off\");*/"],"id":654},{"start":{"row":19,"column":4},"end":{"row":19,"column":31},"action":"insert","lines":["el.classList.remove(\"off\");"]}],[{"start":{"row":18,"column":13},"end":{"row":18,"column":14},"action":"insert","lines":[" "],"id":655}],[{"start":{"row":18,"column":14},"end":{"row":18,"column":16},"action":"insert","lines":["()"],"id":656}],[{"start":{"row":18,"column":14},"end":{"row":18,"column":16},"action":"remove","lines":["()"],"id":657},{"start":{"row":18,"column":14},"end":{"row":20,"column":5},"action":"insert","lines":["(shape = \"circle\") {","        var el = document.getElementById(\"circle\");","    }"]}],[{"start":{"row":18,"column":23},"end":{"row":18,"column":31},"action":"remove","lines":["\"circle\""],"id":658},{"start":{"row":18,"column":23},"end":{"row":18,"column":32},"action":"insert","lines":["\"diamond\""]}],[{"start":{"row":19,"column":41},"end":{"row":19,"column":49},"action":"remove","lines":["\"circle\""],"id":659},{"start":{"row":19,"column":41},"end":{"row":19,"column":50},"action":"insert","lines":["\"diamond\""]}],[{"start":{"row":20,"column":5},"end":{"row":22,"column":5},"action":"insert","lines":[" else if (shape = \"diamond\") {","        var el = document.getElementById(\"diamond\");","    }"],"id":660}],[{"start":{"row":22,"column":5},"end":{"row":24,"column":5},"action":"insert","lines":[" else if (shape = \"diamond\") {","        var el = document.getElementById(\"diamond\");","    }"],"id":661}],[{"start":{"row":24,"column":5},"end":{"row":26,"column":5},"action":"insert","lines":[" else if (shape = \"diamond\") {","        var el = document.getElementById(\"diamond\");","    }"],"id":662}],[{"start":{"row":26,"column":5},"end":{"row":28,"column":5},"action":"insert","lines":[" else if (shape = \"diamond\") {","        var el = document.getElementById(\"diamond\");","    }"],"id":663}],[{"start":{"row":20,"column":24},"end":{"row":20,"column":31},"action":"remove","lines":["diamond"],"id":664},{"start":{"row":20,"column":24},"end":{"row":20,"column":25},"action":"insert","lines":["s"]},{"start":{"row":20,"column":25},"end":{"row":20,"column":26},"action":"insert","lines":["t"]},{"start":{"row":20,"column":26},"end":{"row":20,"column":27},"action":"insert","lines":["a"]},{"start":{"row":20,"column":27},"end":{"row":20,"column":28},"action":"insert","lines":["r"]}],[{"start":{"row":21,"column":42},"end":{"row":21,"column":49},"action":"remove","lines":["diamond"],"id":665},{"start":{"row":21,"column":42},"end":{"row":21,"column":43},"action":"insert","lines":["s"]},{"start":{"row":21,"column":43},"end":{"row":21,"column":44},"action":"insert","lines":["t"]},{"start":{"row":21,"column":44},"end":{"row":21,"column":45},"action":"insert","lines":["a"]},{"start":{"row":21,"column":45},"end":{"row":21,"column":46},"action":"insert","lines":["r"]}],[{"start":{"row":22,"column":24},"end":{"row":22,"column":31},"action":"remove","lines":["diamond"],"id":666},{"start":{"row":22,"column":24},"end":{"row":22,"column":25},"action":"insert","lines":["h"]},{"start":{"row":22,"column":25},"end":{"row":22,"column":26},"action":"insert","lines":["e"]},{"start":{"row":22,"column":26},"end":{"row":22,"column":27},"action":"insert","lines":["a"]},{"start":{"row":22,"column":27},"end":{"row":22,"column":28},"action":"insert","lines":["r"]},{"start":{"row":22,"column":28},"end":{"row":22,"column":29},"action":"insert","lines":["t"]}],[{"start":{"row":23,"column":42},"end":{"row":23,"column":49},"action":"remove","lines":["diamond"],"id":667},{"start":{"row":23,"column":42},"end":{"row":23,"column":43},"action":"insert","lines":["h"]},{"start":{"row":23,"column":43},"end":{"row":23,"column":44},"action":"insert","lines":["e"]},{"start":{"row":23,"column":44},"end":{"row":23,"column":45},"action":"insert","lines":["a"]},{"start":{"row":23,"column":45},"end":{"row":23,"column":46},"action":"insert","lines":["r"]},{"start":{"row":23,"column":46},"end":{"row":23,"column":47},"action":"insert","lines":["t"]}],[{"start":{"row":24,"column":24},"end":{"row":24,"column":31},"action":"remove","lines":["diamond"],"id":668},{"start":{"row":24,"column":24},"end":{"row":24,"column":25},"action":"insert","lines":["f"]},{"start":{"row":24,"column":25},"end":{"row":24,"column":26},"action":"insert","lines":["o"]},{"start":{"row":24,"column":26},"end":{"row":24,"column":27},"action":"insert","lines":["u"]},{"start":{"row":24,"column":27},"end":{"row":24,"column":28},"action":"insert","lines":["r"]},{"start":{"row":24,"column":28},"end":{"row":24,"column":29},"action":"insert","lines":["_"]},{"start":{"row":24,"column":29},"end":{"row":24,"column":30},"action":"insert","lines":["p"]}],[{"start":{"row":24,"column":30},"end":{"row":24,"column":31},"action":"insert","lines":["o"],"id":669},{"start":{"row":24,"column":31},"end":{"row":24,"column":32},"action":"insert","lines":["i"]},{"start":{"row":24,"column":32},"end":{"row":24,"column":33},"action":"insert","lines":["n"]},{"start":{"row":24,"column":33},"end":{"row":24,"column":34},"action":"insert","lines":["t"]}],[{"start":{"row":25,"column":42},"end":{"row":25,"column":49},"action":"remove","lines":["diamond"],"id":670},{"start":{"row":25,"column":42},"end":{"row":25,"column":43},"action":"insert","lines":["f"]},{"start":{"row":25,"column":43},"end":{"row":25,"column":44},"action":"insert","lines":["o"]},{"start":{"row":25,"column":44},"end":{"row":25,"column":45},"action":"insert","lines":["u"]},{"start":{"row":25,"column":45},"end":{"row":25,"column":46},"action":"insert","lines":["r"]},{"start":{"row":25,"column":46},"end":{"row":25,"column":47},"action":"insert","lines":["_"]},{"start":{"row":25,"column":47},"end":{"row":25,"column":48},"action":"insert","lines":["p"]},{"start":{"row":25,"column":48},"end":{"row":25,"column":49},"action":"insert","lines":["o"]}],[{"start":{"row":25,"column":49},"end":{"row":25,"column":50},"action":"insert","lines":["i"],"id":671},{"start":{"row":25,"column":50},"end":{"row":25,"column":51},"action":"insert","lines":["n"]},{"start":{"row":25,"column":51},"end":{"row":25,"column":52},"action":"insert","lines":["t"]}],[{"start":{"row":26,"column":24},"end":{"row":26,"column":31},"action":"remove","lines":["diamond"],"id":672},{"start":{"row":26,"column":24},"end":{"row":26,"column":25},"action":"insert","lines":["t"]},{"start":{"row":26,"column":25},"end":{"row":26,"column":26},"action":"insert","lines":["r"]},{"start":{"row":26,"column":26},"end":{"row":26,"column":27},"action":"insert","lines":["i"]},{"start":{"row":26,"column":27},"end":{"row":26,"column":28},"action":"insert","lines":["a"]},{"start":{"row":26,"column":28},"end":{"row":26,"column":29},"action":"insert","lines":["n"]},{"start":{"row":26,"column":29},"end":{"row":26,"column":30},"action":"insert","lines":["g"]},{"start":{"row":26,"column":30},"end":{"row":26,"column":31},"action":"insert","lines":["l"]},{"start":{"row":26,"column":31},"end":{"row":26,"column":32},"action":"insert","lines":["e"]}],[{"start":{"row":27,"column":42},"end":{"row":27,"column":49},"action":"remove","lines":["diamond"],"id":673},{"start":{"row":27,"column":42},"end":{"row":27,"column":43},"action":"insert","lines":["t"]},{"start":{"row":27,"column":43},"end":{"row":27,"column":44},"action":"insert","lines":["r"]},{"start":{"row":27,"column":44},"end":{"row":27,"column":45},"action":"insert","lines":["i"]},{"start":{"row":27,"column":45},"end":{"row":27,"column":46},"action":"insert","lines":["a"]},{"start":{"row":27,"column":46},"end":{"row":27,"column":47},"action":"insert","lines":["n"]},{"start":{"row":27,"column":47},"end":{"row":27,"column":48},"action":"insert","lines":["g"]},{"start":{"row":27,"column":48},"end":{"row":27,"column":49},"action":"insert","lines":["l"]},{"start":{"row":27,"column":49},"end":{"row":27,"column":50},"action":"insert","lines":["e"]}],[{"start":{"row":29,"column":6},"end":{"row":29,"column":30},"action":"remove","lines":[".classList.remove(\"off\")"],"id":674},{"start":{"row":29,"column":5},"end":{"row":29,"column":6},"action":"remove","lines":["l"]},{"start":{"row":29,"column":4},"end":{"row":29,"column":5},"action":"remove","lines":["e"]}],[{"start":{"row":29,"column":4},"end":{"row":29,"column":5},"action":"insert","lines":["c"],"id":675},{"start":{"row":29,"column":5},"end":{"row":29,"column":6},"action":"insert","lines":["o"]},{"start":{"row":29,"column":6},"end":{"row":29,"column":7},"action":"insert","lines":["n"]},{"start":{"row":29,"column":7},"end":{"row":29,"column":8},"action":"insert","lines":["s"]},{"start":{"row":29,"column":8},"end":{"row":29,"column":9},"action":"insert","lines":["o"]},{"start":{"row":29,"column":9},"end":{"row":29,"column":10},"action":"insert","lines":["l"]},{"start":{"row":29,"column":10},"end":{"row":29,"column":11},"action":"insert","lines":["e"]}],[{"start":{"row":29,"column":11},"end":{"row":29,"column":12},"action":"insert","lines":["."],"id":676},{"start":{"row":29,"column":12},"end":{"row":29,"column":13},"action":"insert","lines":["l"]},{"start":{"row":29,"column":13},"end":{"row":29,"column":14},"action":"insert","lines":["o"]},{"start":{"row":29,"column":14},"end":{"row":29,"column":15},"action":"insert","lines":["g"]}],[{"start":{"row":29,"column":15},"end":{"row":29,"column":17},"action":"insert","lines":["()"],"id":677}],[{"start":{"row":29,"column":16},"end":{"row":29,"column":17},"action":"insert","lines":["e"],"id":678},{"start":{"row":29,"column":17},"end":{"row":29,"column":18},"action":"insert","lines":["l"]}],[{"start":{"row":16,"column":4},"end":{"row":16,"column":5},"action":"insert","lines":["/"],"id":679},{"start":{"row":16,"column":5},"end":{"row":16,"column":6},"action":"insert","lines":["*"]}],[{"start":{"row":28,"column":5},"end":{"row":28,"column":6},"action":"insert","lines":["*"],"id":680},{"start":{"row":28,"column":6},"end":{"row":28,"column":7},"action":"insert","lines":["/"]}],[{"start":{"row":15,"column":23},"end":{"row":16,"column":0},"action":"insert","lines":["",""],"id":681},{"start":{"row":16,"column":0},"end":{"row":16,"column":4},"action":"insert","lines":["    "]},{"start":{"row":16,"column":4},"end":{"row":17,"column":0},"action":"insert","lines":["",""]},{"start":{"row":17,"column":0},"end":{"row":17,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":17,"column":4},"end":{"row":17,"column":5},"action":"insert","lines":["d"],"id":682},{"start":{"row":17,"column":5},"end":{"row":17,"column":6},"action":"insert","lines":["o"]}],[{"start":{"row":17,"column":4},"end":{"row":17,"column":6},"action":"remove","lines":["do"],"id":683},{"start":{"row":17,"column":4},"end":{"row":17,"column":12},"action":"insert","lines":["document"]}],[{"start":{"row":17,"column":12},"end":{"row":17,"column":13},"action":"insert","lines":["."],"id":684},{"start":{"row":17,"column":13},"end":{"row":17,"column":14},"action":"insert","lines":["g"]},{"start":{"row":17,"column":14},"end":{"row":17,"column":15},"action":"insert","lines":["e"]},{"start":{"row":17,"column":15},"end":{"row":17,"column":16},"action":"insert","lines":["t"]}],[{"start":{"row":17,"column":13},"end":{"row":17,"column":16},"action":"remove","lines":["get"],"id":685},{"start":{"row":17,"column":13},"end":{"row":17,"column":29},"action":"insert","lines":["getElementById()"]}],[{"start":{"row":17,"column":28},"end":{"row":17,"column":30},"action":"insert","lines":["\"\""],"id":686}],[{"start":{"row":17,"column":29},"end":{"row":17,"column":30},"action":"insert","lines":["c"],"id":687},{"start":{"row":17,"column":30},"end":{"row":17,"column":31},"action":"insert","lines":["i"]},{"start":{"row":17,"column":31},"end":{"row":17,"column":32},"action":"insert","lines":["r"]},{"start":{"row":17,"column":32},"end":{"row":17,"column":33},"action":"insert","lines":["c"]},{"start":{"row":17,"column":33},"end":{"row":17,"column":34},"action":"insert","lines":["l"]},{"start":{"row":17,"column":34},"end":{"row":17,"column":35},"action":"insert","lines":["e"]}],[{"start":{"row":17,"column":4},"end":{"row":17,"column":5},"action":"insert","lines":["c"],"id":688},{"start":{"row":17,"column":5},"end":{"row":17,"column":6},"action":"insert","lines":["o"]},{"start":{"row":17,"column":6},"end":{"row":17,"column":7},"action":"insert","lines":["n"]}],[{"start":{"row":17,"column":4},"end":{"row":17,"column":7},"action":"remove","lines":["con"],"id":689},{"start":{"row":17,"column":4},"end":{"row":17,"column":11},"action":"insert","lines":["console"]}],[{"start":{"row":17,"column":11},"end":{"row":17,"column":12},"action":"insert","lines":["."],"id":690},{"start":{"row":17,"column":12},"end":{"row":17,"column":13},"action":"insert","lines":["l"]},{"start":{"row":17,"column":13},"end":{"row":17,"column":14},"action":"insert","lines":["o"]}],[{"start":{"row":17,"column":14},"end":{"row":17,"column":15},"action":"insert","lines":["g"],"id":691},{"start":{"row":17,"column":15},"end":{"row":17,"column":16},"action":"insert","lines":["("]}],[{"start":{"row":17,"column":49},"end":{"row":17,"column":50},"action":"insert","lines":[")"],"id":692}],[{"start":{"row":30,"column":6},"end":{"row":30,"column":7},"action":"remove","lines":["/"],"id":693},{"start":{"row":30,"column":5},"end":{"row":30,"column":6},"action":"remove","lines":["*"]}],[{"start":{"row":31,"column":19},"end":{"row":31,"column":20},"action":"insert","lines":["*"],"id":694},{"start":{"row":31,"column":20},"end":{"row":31,"column":21},"action":"insert","lines":["/"]}],[{"start":{"row":17,"column":14},"end":{"row":17,"column":15},"action":"remove","lines":["g"],"id":695},{"start":{"row":17,"column":13},"end":{"row":17,"column":14},"action":"remove","lines":["o"]},{"start":{"row":17,"column":12},"end":{"row":17,"column":13},"action":"remove","lines":["l"]},{"start":{"row":17,"column":11},"end":{"row":17,"column":12},"action":"remove","lines":["."]},{"start":{"row":17,"column":10},"end":{"row":17,"column":11},"action":"remove","lines":["e"]},{"start":{"row":17,"column":9},"end":{"row":17,"column":10},"action":"remove","lines":["l"]},{"start":{"row":17,"column":8},"end":{"row":17,"column":9},"action":"remove","lines":["o"]},{"start":{"row":17,"column":7},"end":{"row":17,"column":8},"action":"remove","lines":["s"]},{"start":{"row":17,"column":6},"end":{"row":17,"column":7},"action":"remove","lines":["n"]},{"start":{"row":17,"column":5},"end":{"row":17,"column":6},"action":"remove","lines":["o"]},{"start":{"row":17,"column":4},"end":{"row":17,"column":5},"action":"remove","lines":["c"]}],[{"start":{"row":17,"column":4},"end":{"row":17,"column":5},"action":"insert","lines":["e"],"id":696},{"start":{"row":17,"column":5},"end":{"row":17,"column":6},"action":"insert","lines":["l"]}],[{"start":{"row":17,"column":6},"end":{"row":17,"column":7},"action":"insert","lines":[" "],"id":697},{"start":{"row":17,"column":7},"end":{"row":17,"column":8},"action":"insert","lines":["="]}],[{"start":{"row":17,"column":8},"end":{"row":17,"column":9},"action":"insert","lines":[" "],"id":698}],[{"start":{"row":17,"column":4},"end":{"row":17,"column":5},"action":"insert","lines":["v"],"id":699},{"start":{"row":17,"column":5},"end":{"row":17,"column":6},"action":"insert","lines":["a"]},{"start":{"row":17,"column":6},"end":{"row":17,"column":7},"action":"insert","lines":["r"]}],[{"start":{"row":17,"column":7},"end":{"row":17,"column":8},"action":"insert","lines":[" "],"id":700}],[{"start":{"row":31,"column":20},"end":{"row":31,"column":21},"action":"remove","lines":["/"],"id":701},{"start":{"row":31,"column":19},"end":{"row":31,"column":20},"action":"remove","lines":["*"]}],[{"start":{"row":30,"column":5},"end":{"row":30,"column":6},"action":"insert","lines":["*"],"id":702},{"start":{"row":30,"column":6},"end":{"row":30,"column":7},"action":"insert","lines":["/"]}],[{"start":{"row":17,"column":38},"end":{"row":17,"column":39},"action":"insert","lines":["'"],"id":703}],[{"start":{"row":17,"column":47},"end":{"row":17,"column":48},"action":"insert","lines":["'"],"id":704}],[{"start":{"row":18,"column":17},"end":{"row":18,"column":18},"action":"insert","lines":["="],"id":705}],[{"start":{"row":20,"column":22},"end":{"row":20,"column":23},"action":"insert","lines":["="],"id":706}],[{"start":{"row":22,"column":22},"end":{"row":22,"column":23},"action":"insert","lines":["="],"id":707}],[{"start":{"row":24,"column":22},"end":{"row":24,"column":23},"action":"insert","lines":["="],"id":708}],[{"start":{"row":26,"column":22},"end":{"row":26,"column":23},"action":"insert","lines":["="],"id":709}],[{"start":{"row":28,"column":22},"end":{"row":28,"column":23},"action":"insert","lines":["="],"id":710}],[{"start":{"row":30,"column":6},"end":{"row":30,"column":7},"action":"remove","lines":["/"],"id":711},{"start":{"row":30,"column":5},"end":{"row":30,"column":6},"action":"remove","lines":["*"]}],[{"start":{"row":16,"column":4},"end":{"row":18,"column":6},"action":"remove","lines":["","    var el = (document.getElementById('\"circle\"'))","    /*"],"id":712}],[{"start":{"row":16,"column":4},"end":{"row":17,"column":0},"action":"insert","lines":["",""],"id":713},{"start":{"row":17,"column":0},"end":{"row":17,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":14,"column":25},"end":{"row":15,"column":0},"action":"insert","lines":["",""],"id":714},{"start":{"row":15,"column":0},"end":{"row":15,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":31,"column":19},"end":{"row":32,"column":0},"action":"insert","lines":["",""],"id":719},{"start":{"row":32,"column":0},"end":{"row":32,"column":4},"action":"insert","lines":["    "]},{"start":{"row":32,"column":4},"end":{"row":33,"column":0},"action":"insert","lines":["",""]},{"start":{"row":33,"column":0},"end":{"row":33,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":33,"column":0},"end":{"row":33,"column":4},"action":"remove","lines":["    "],"id":720},{"start":{"row":32,"column":4},"end":{"row":33,"column":0},"action":"remove","lines":["",""]},{"start":{"row":32,"column":0},"end":{"row":32,"column":4},"action":"remove","lines":["    "]},{"start":{"row":31,"column":19},"end":{"row":32,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":31,"column":20},"end":{"row":32,"column":0},"action":"insert","lines":["",""],"id":721},{"start":{"row":32,"column":0},"end":{"row":32,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":32,"column":4},"end":{"row":32,"column":5},"action":"insert","lines":["e"],"id":722},{"start":{"row":32,"column":5},"end":{"row":32,"column":6},"action":"insert","lines":["l"]},{"start":{"row":32,"column":6},"end":{"row":32,"column":7},"action":"insert","lines":["."]}],[{"start":{"row":32,"column":7},"end":{"row":32,"column":8},"action":"insert","lines":["c"],"id":723},{"start":{"row":32,"column":8},"end":{"row":32,"column":9},"action":"insert","lines":["l"]}],[{"start":{"row":32,"column":7},"end":{"row":32,"column":9},"action":"remove","lines":["cl"],"id":724},{"start":{"row":32,"column":7},"end":{"row":32,"column":16},"action":"insert","lines":["classList"]}],[{"start":{"row":32,"column":16},"end":{"row":32,"column":17},"action":"insert","lines":["."],"id":725},{"start":{"row":32,"column":17},"end":{"row":32,"column":18},"action":"insert","lines":["r"]},{"start":{"row":32,"column":18},"end":{"row":32,"column":19},"action":"insert","lines":["e"]},{"start":{"row":32,"column":19},"end":{"row":32,"column":20},"action":"insert","lines":["m"]},{"start":{"row":32,"column":20},"end":{"row":32,"column":21},"action":"insert","lines":["o"]},{"start":{"row":32,"column":21},"end":{"row":32,"column":22},"action":"insert","lines":["v"]},{"start":{"row":32,"column":22},"end":{"row":32,"column":23},"action":"insert","lines":["e"]}],[{"start":{"row":32,"column":23},"end":{"row":32,"column":25},"action":"insert","lines":["()"],"id":726}],[{"start":{"row":32,"column":24},"end":{"row":32,"column":26},"action":"insert","lines":["\"\""],"id":727}],[{"start":{"row":32,"column":25},"end":{"row":32,"column":26},"action":"insert","lines":["o"],"id":728},{"start":{"row":32,"column":26},"end":{"row":32,"column":27},"action":"insert","lines":["f"]},{"start":{"row":32,"column":27},"end":{"row":32,"column":28},"action":"insert","lines":["f"]}],[{"start":{"row":32,"column":30},"end":{"row":32,"column":31},"action":"insert","lines":[";"],"id":729}]]},"ace":{"folds":[],"scrolltop":176.5,"scrollleft":0,"selection":{"start":{"row":32,"column":31},"end":{"row":32,"column":31},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":11,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1565368218603}