"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.template = exports.scriptLink = exports.cssLink = exports.title = exports.viewport = exports.charset = exports.doctype = void 0;
exports.doctype = '<!DOCTYPE Html>';
exports.charset = '<meta charset="utf-8">';
exports.viewport = '<meta name="viewport" content="width=device-width,initial-scale=1">';
function title(title) {
    return "<title>".concat(title, "</title>");
}
exports.title = title;
function cssLink(href) {
    return "<link rel=\"stylesheet\" href=\"".concat(href, "\">");
}
exports.cssLink = cssLink;
function scriptLink(src) {
    return "<script src=\"".concat(src, "\"></script>");
}
exports.scriptLink = scriptLink;
function template(configuration) {
    var _a;
    return '' +
        exports.doctype + '\n' +
        "<html lang=\"".concat(configuration.language || 'en', "\">") +
        '<head>' +
        exports.charset +
        exports.viewport +
        title((_a = configuration.title) !== null && _a !== void 0 ? _a : 'Untitled') +
        (configuration.head || '') +
        '</head>' +
        '<body>' +
        (configuration.body || '') +
        '</body>' +
        '</html>';
}
exports.template = template;
