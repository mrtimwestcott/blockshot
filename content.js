$("head").append("<style>text { color:white; }</style>");
if ($("#darkenCanvas").length) {
  $("#darkenCanvas").remove()
} else {
  $("body").append("<div id=\"darkenCanvas\" style=\"background: rgba(0,0,0,0.5); position: absolute; width: 100%; height: 100%; z-index: 10000;\"></div>");
  var x = 100;
  var blocks = ["motion","looks","sound","event","control","sensing","operator","data","backdropnumbername","forever","wait","repeat","askandwait","answer","loudness","timer","current","of","hy-+pJ[=Odk~aLb5}v)#"];
  var i = 0;
  // TODO: Is there a nicer way to only select the block stacks we want?
  var nbps = new RegExp("&nbsp;", "g");
  var styles = "";
  $("style").each(function() {
    styles += $(this).html();
  });
  // For each block stack
  $("g.blocklyBlockCanvas > .blocklyDraggable").each(function(i, obj) {
    // TODO: get rid of variable blocks!
    if (!blocks.includes($(obj).attr("data-id").split("_")[0])) {
      $("#darkenCanvas").append("<canvas id=\"blockShotCanvas" + i + "\"></canvas>");
      script = 
        $(obj)
        .clone()
        .attr("transform","translate(50,50)")
        .wrap("<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:html=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" class=\"blocklySvg\" width=\"300px\" height=\"300px\"></svg>")
        //.prepend("<style>" + styles + "</style>")
        .prepend("<style>.blocklyEditableText > text { fill: #575e75; } text { fill: #fff; } blocklyDropdownText { fill: #fff !important; }</style>")
        //.prepend("<defs><filter id=\"blocklyStackGlowFilter19692196351750013\" height=\"160%\" width=\"180%\" y=\"-30%\" x=\"-40%\"><feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"4\"></feGaussianBlur><feComponentTransfer result=\"outBlur\"><feFuncA type=\"table\" tableValues=\"0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1\"></feFuncA></feComponentTransfer><feFlood flood-color=\"#FFF200\" flood-opacity=\"1\" result=\"outColor\"></feFlood><feComposite in=\"outColor\" in2=\"outBlur\" operator=\"in\" result=\"outGlow\"></feComposite><feComposite in=\"SourceGraphic\" in2=\"outGlow\" operator=\"over\"></feComposite></filter><filter id=\"blocklyReplacementGlowFilter19692196351750013\" height=\"160%\" width=\"180%\" y=\"-30%\" x=\"-40%\"><feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"2\"></feGaussianBlur><feComponentTransfer result=\"outBlur\"><feFuncA type=\"table\" tableValues=\"0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1\"></feFuncA></feComponentTransfer><feFlood flood-color=\"#FFFFFF\" flood-opacity=\"1\" result=\"outColor\"></feFlood><feComposite in=\"outColor\" in2=\"outBlur\" operator=\"in\" result=\"outGlow\"></feComposite><feComposite in=\"SourceGraphic\" in2=\"outGlow\" operator=\"over\"></feComposite></filter><pattern id=\"blocklyDisabledPattern19692196351750013\" patternUnits=\"userSpaceOnUse\" width=\"10\" height=\"10\"><rect width=\"10\" height=\"10\" fill=\"#aaa\"></rect><path d=\"M 0 0 L 10 10 M 10 0 L 0 10\" stroke=\"#cc0\"></path></pattern><pattern id=\"blocklyGridPattern19692196351750013\" patternUnits=\"userSpaceOnUse\" width=\"27\" height=\"27\" x=\"310\" y=\"2.5579538487363607e-13\"><line stroke=\"#ddd\" stroke-width=\"0.675\" x1=\"13.162500000000001\" y1=\"13.8375\" x2=\"14.512500000000001\" y2=\"13.8375\"></line><line stroke=\"#ddd\" stroke-width=\"0.675\" x1=\"13.8375\" y1=\"13.162500000000001\" x2=\"13.8375\" y2=\"14.512500000000001\"></line></pattern></defs>")
        .parent()
        .wrap("<a/>")
        .parent()
        .html();

      script = script.replace(nbps, " ");
      canvg(document.getElementById("blockShotCanvas" + i), script);
      $("#blockShotCanvas" + i).click(function() {
        // download image here
      });
      x += 250;
      i++;
    }
  });
  
}
