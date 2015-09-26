function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (pageTitle) {
buf.push("<!DOCTYPE html><html lang=\"en\"><head><title>" + (jade.escape(null == (jade_interp = pageTitle) ? "" : jade_interp)) + "</title></head><body><h1>jade - Node template Engine</h1><div id=\"container\" class=\"col\"><p></p><Jade>is adsadpasldpasldpasldpladplaplbvpf</Jade><spdlfpsdlfpsdlfpsdlfps></spdlfpsdlfpsdlfpsdlfps><sdlf></sdlf></div></body></html>");}.call(this,"pageTitle" in locals_for_with?locals_for_with.pageTitle:typeof pageTitle!=="undefined"?pageTitle:undefined));;return buf.join("");
}