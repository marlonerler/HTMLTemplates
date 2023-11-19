var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var HTMLTemplates_exports = {};
__export(HTMLTemplates_exports, {
  charset: () => charset,
  cssLink: () => cssLink,
  doctype: () => doctype,
  scriptLink: () => scriptLink,
  template: () => template,
  title: () => title,
  viewport: () => viewport
});
module.exports = __toCommonJS(HTMLTemplates_exports);
var doctype = "<!DOCTYPE Html>";
var charset = '<meta charset="utf-8">';
var viewport = '<meta name="viewport" content="width=device-width,initial-scale=1">';
function title(title2) {
  return `<title>${title2}</title>`;
}
function cssLink(href) {
  return `<link rel="stylesheet" href="${href}">`;
}
function scriptLink(src) {
  return `<script src="${src}"></script>`;
}
function template(configuration) {
  return "" + doctype + `
<html lang="${configuration.language ?? "en"}"><head>` + charset + viewport + title(configuration.title ?? "Untitled") + (configuration.head ?? "") + "</head><body>" + (configuration.body ?? "") + "</body></html>";
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  charset,
  cssLink,
  doctype,
  scriptLink,
  template,
  title,
  viewport
});
