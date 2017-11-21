(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['user_current_playlist_template'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <img height=100 width=100 src=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.url : stack1), depth0))
    + "\"/>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return "    <a href=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.external_urls : depth0)) != null ? stack1.spotify : stack1), depth0))
    + "\" target=\"_blank\">"
    + alias1(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "  <div>Description: "
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["with"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.track : depth0),{"name":"with","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "  <div class=\"track-item\" data-id="
    + alias3(((helper = (helper = helpers.uri || (depth0 != null ? depth0.uri : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"uri","hash":{},"data":data}) : helper)))
    + ">\n    <div class=\"track-info\">\n      <span class=\"drag-handle\">☰</span>\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.album : depth0)) != null ? stack1.images : stack1),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      <div class=\"track-description-container\">\n        <div class=\"track-number-and-title\">\n          <div class=\"track-number\">"
    + alias3((helpers.sum || (depth0 && depth0.sum) || alias2).call(alias1,1,(data && data.index),{"name":"sum","hash":{},"data":data}))
    + ".</div>\n          <div class=\"track-name\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.external_urls : depth0)) != null ? stack1.spotify : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data})) != null ? stack1 : "")
    + "            </div>\n        </div>\n        <div class=\"track-artists-and-album\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.artists : depth0),{"name":"each","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          <div class=\"inline-divider\">•</div>\n          <div class=\"album-name\">"
    + alias3(container.lambda(((stack1 = (depth0 != null ? depth0.album : depth0)) != null ? stack1.name : stack1), depth0))
    + "</div>\n        </div>\n      </div>\n      <div class=\"remove-button\">✖</div>\n    </div>\n    <div class=\"track-preview\" title=\"Preview\">\n      <span>Preview:</span>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.preview_url : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.program(23, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\n  </div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.last),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      <img class=\"album-image\" src="
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data}) : helper)))
    + "> \n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return "            <a href=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.external_urls : depth0)) != null ? stack1.spotify : stack1), depth0))
    + "\" target=\"_blank\">"
    + alias1(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "          <div class=\"artist-name\">"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n"
    + ((stack1 = helpers.unless.call(alias1,(data && data.last),{"name":"unless","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    return "          <div class=\"inline-divider\">–</div>\n";
},"21":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <audio id=\"audio-control-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"audio-control\" src=\""
    + alias4(((helper = (helper = helpers.preview_url || (depth0 != null ? depth0.preview_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"preview_url","hash":{},"data":data}) : helper)))
    + "\" controls></audio>\n";
},"23":function(container,depth0,helpers,partials,data) {
    return "      N/A\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<hr/>\n<h2>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1["0"] : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <span>\n  Playlist \n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.external_urls : depth0)) != null ? stack1.spotify : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "  ("
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.tracks : depth0)) != null ? stack1.total : stack1), depth0))
    + " Tracks)\n </span>\n</h2>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div id=\"track-list\" class=\"track-list-group\">\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.tracks : depth0)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['user_playlist_template'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=helpers.helperMissing, alias4="function";

  return "<div class=\"user-playlist-container\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.url : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "  <div class=\"playlist-name\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.external_urls : depth0)) != null ? stack1.spotify : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "  </div>\n  <div class=\"playlist-tracks\">Tracks: "
    + alias2(container.lambda(((stack1 = (depth0 != null ? depth0.tracks : depth0)) != null ? stack1.total : stack1), depth0))
    + "</div>\n  <!--\n  <div class=\"playlist-type\">Type: "
    + alias2(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "</div>\n  -->\n  <button class=\"btn btn-default btn-load-tracks\" id=\"playlist-"
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-playlist-id=\""
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">Load Tracks</button>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <img class=\"playlist-image\" src=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.url : stack1), depth0))
    + "\"/>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "  <div class=\"playlist-image\"></div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return "    <a href=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.external_urls : depth0)) != null ? stack1.spotify : stack1), depth0))
    + "\" target=\"_blank\">"
    + alias1(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div><a href=\""
    + container.escapeExpression(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"href","hash":{},"data":data}) : helper)))
    + "\">Source</a></div>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['user_profile_template'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    "
    + container.escapeExpression(((helper = (helper = helpers.display_name || (depth0 != null ? depth0.display_name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"display_name","hash":{},"data":data}) : helper)))
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    "
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data}) : helper)))
    + "\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <div class=\"pull-left\">\n    <img class=\"media-object\" width=\"150\" src=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.url : stack1), depth0))
    + "\" />\n  </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      <dt>Display name</dt><dd class=\"clearfix\">"
    + container.escapeExpression(((helper = (helper = helpers.display_name || (depth0 != null ? depth0.display_name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"display_name","hash":{},"data":data}) : helper)))
    + "</dd>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "      <dt>Profile Image</dt><dd class=\"clearfix\"><a href=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.url : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.url : stack1), depth0))
    + "</a></dd>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing, alias5="function";

  return "<h3>Hi \n  <a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.external_urls : depth0)) != null ? stack1.spotify : stack1), depth0))
    + "\" target=\"_blank\">\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.display_name : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "  </a>\n</h3>\n<!--\n<div class=\"media\">\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.url : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <div id=\"user-info\" class=\"media-body\">\n    <dl class=\"dl-horizontal\">\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.display_name : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      <dt>Id</dt><dd>"
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"id","hash":{},"data":data}) : helper)))
    + "</dd>\n      <dt>Email</dt><dd>"
    + alias2(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"email","hash":{},"data":data}) : helper)))
    + "</dd>\n      <dt>Spotify URI</dt><dd><a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.external_urls : depth0)) != null ? stack1.spotify : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.external_urls : depth0)) != null ? stack1.spotify : stack1), depth0))
    + "</a></dd>\n      <dt>Link</dt><dd><a href=\""
    + alias2(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"href","hash":{},"data":data}) : helper)))
    + "\">"
    + alias2(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"href","hash":{},"data":data}) : helper)))
    + "</a></dd>\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.url : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      <dt>Country</dt><dd>"
    + alias2(((helper = (helper = helpers.country || (depth0 != null ? depth0.country : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"country","hash":{},"data":data}) : helper)))
    + "</dd>\n    </dl>\n  </div>\n</div>\n-->";
},"useData":true});
})();