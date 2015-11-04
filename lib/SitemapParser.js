'use strict';

class SitemapParser {
  constructor() {
    // nop
  }

  parseSitemap(sitemap, widgetType) {
    var widgets = [].concat(sitemap.homepage.widget);
    // if no widgets found, this might be OpenHab 2
    if (widgets.length == 1 && widgets[1] == undefined) {
      widgets = [].concat(sitemap.homepage.widgets);
    }
    var result = [];
    for (var i = 0; i < widgets.length; i++) {
      var widget = widgets[i];
      if (!widget.item) {
        // Don't log in tests.
        if (process.env.NODE_ENV != 'test') {
          console.log("WARN: The widget '" + widget.label + "' does not reference an item.");
        }
        continue;
      }
      if (!widgetType || widget.item.type == widgetType) {
        result.push(
          {
            type: widget.item.type,
            name: widget.label,
            link: widget.item.link,
            state: widget.item.state
          }
        );
      }
    }
    return result;
  }

};

export { SitemapParser };
