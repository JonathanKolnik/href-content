'use strict';

var url = require('url'),
  getRemoteContent = require('remote-content');

module.exports = function (destHref, sourceHref, callback) {
  var resolvedUrl,
    parsedUrl,
    toUrl = destHref;

  if (url.parse(sourceHref).protocol === 'file:' && destHref[0] === '/') {
    toUrl = destHref.slice(1);
  }
  resolvedUrl = url.resolve(sourceHref, toUrl);
  parsedUrl = url.parse(resolvedUrl);
  getRemoteContent(resolvedUrl, callback);
};
