(function($){

  $.Templates = {

    /* Main menu
    ---------------------------------------------------------------------------- */
    mainMenu: {
      // template for rendering main menu at the top
      menuItems: Handlebars.compile([
        '<ul class="{{mainMenuCls}}">',
          '<li>',
            '<a href="javascript:;" class="bookmark-workspace" title="Bookmark Workspace">',
              '<span class="icon-bookmark-workspace"></span>Bookmark Workspace',
            '</a>',
          '</li>',
          '<li>',
            '<a href="javascript:;" class="load-window" title="Load Window">',
              '<span class="icon-load-window"></span>Load Window',
            '</a>',
          '</li>',
          '<li>',
            '<a href="javascript:;" class="window-options" title="Window Options">',
              '<span class="icon-window-options"></span>Window Options',
            '</a>',
          '</li>',
          '<li>',
            '<a href="javascript:;" class="clear-local-storage" title="Clear saved workspace and reload">',
              '<span class="icon-clear-local-storage"></span>',
            '</a>',
          '</li>',

        '</ul>'
      ].join('')),

      // template for rendering window options menu
      windowOptionsMenu: Handlebars.compile([
        '<ul class="{{windowOptionsMenuCls}}">',
          '<li><a class="cascade-all" href="javascript:;">Cascade All</a></li>',
          '<li><a class="tile-all-vertically" href="javascript:;">Tile All Vertically</li>',
          '<li><a class="tile-all-horizontally" href="javascript:;">Tile All Horizontally</a></li>',
          '<li><a class="stack-all-vertically-2-cols" href="javascript:;">Stack Vertically (2 columns)</a></li>',
          '<li><a class="stack-all-vertically-3-cols" href="javascript:;">Stack Vertically (3 columns)</a></li>',
          '<li class="ui-state-disabled"><a href="javascript:;">Open Recent</a></li>',
          '<li><a class="close-all" href="javascript:;">Close All</a></li>',
        '</ul>',
      ].join('')),

      // template for rendering load window's manuscripts' select box and images list
      loadWindowContent: Handlebars.compile([
        '<fieldset class="{{cssCls}}">',
          '<legend>Available/Loaded manuscripts</legend>',
          '<select>',
            '{{#collections}}',
              '<optgroup label="{{location}}">',
                '{{#list}}',
                  '<option value="select-{{manifestId}}">{{collectionTitle}}</option>',
                '{{/list}}',
              '</optgroup>',
            '{{/collections}}',
          '</select><br/>',
          '<a href="javascript:;" class="mirador-btn mirador-icon-thumbnails-view"></a>',
          '<a href="javascript:;" class="mirador-btn mirador-icon-scroll-view"></a>',
          '<a href="javascript:;" class="mirador-btn mirador-icon-metadata-view"></a>',
          '{{#collections}}',
            '{{#list}}',
              '<ul class="ul-{{manifestId}}">',
                '{{#imageTitles}}',
                  '<li><a href="javascript:;" class="image-{{../manifestId}}">{{trimTitlePrefix title}}</a></li>',
                '{{/imageTitles}}',
              '</ul>',
            '{{/list}}',
          '{{/collections}}',
        '</fieldset>'
      ].join('')),

      // template for rendering clear local storage dialog
      clearLocalStorage: Handlebars.compile([
        '<div class="{{cssCls}}">',
          '<p>Do you want to delete your saved workspace, and reload the viewer?</p>',
          '<p>',
            '<a class="btn-cancel" href="javascript: jQuery(\'{{selectorClearLocalStorage}}\').tooltipster(\'hide\');">Cancel</a>',
            '<a class="btn-clear" href="javascript: localStorage.clear(); location.reload();">Clear</a>',
          '</p>',
        '</div>'
      ].join(''))

    },

    /* Status bar
    ---------------------------------------------------------------------------- */
    statusBar: {
      textFrames: Handlebars.compile([
        '<div class="mirador-status-bar-msg-left"></div>',
        '<div class="mirador-status-bar-msg-right"></div>'
      ].join(''))
    },


    /* Widget
    ---------------------------------------------------------------------------- */
    widget: {
      // template for rendering widget with placeholders for toolbar and status bar
      initialLayout: Handlebars.compile([
        '<div class="{{widgetToolbarCls}}"></div>',
        '<div class="{{widgetContentCls}}">Loading...</div>',
        '<div class="{{widgetStatusBarCls}}"></div>'
      ].join(''))
    },


    /* Image view
    ---------------------------------------------------------------------------- */
    imageView: {
      // template for rendering tool bar with nav links
      navToolbar: Handlebars.compile([
        '<div class="{{navToolbarCls}}">',
          '<a href="javascript:;" class="mirador-btn mirador-icon-annotations"><i class="icon-comments"></i></a>',
          '<a href="javascript:;" class="mirador-btn mirador-icon-choices"></a>',
          '<a href="javascript:;" class="mirador-btn mirador-icon-metadata-view"></a>',
          '<a href="javascript:;" class="mirador-btn mirador-icon-scroll-view"></a>',
          '<a href="javascript:;" class="mirador-btn mirador-icon-thumbnails-view"></a>',
          '<a href="javascript:;" class="mirador-btn mirador-icon-previous"></a>',
          '<a href="javascript:;" class="mirador-btn mirador-icon-next"></a>',
        '</div>'
      ].join('')),

      statusbar: Handlebars.compile([
        '<div class="{{statusbarCls}}">',
          '<a href="javascript:;" class="mirador-btn mirador-icon-lock"></a>',
          '<div class="mirador-image-dimensions">',
            '<textarea rows="1" class="mirador-image-view-physical-dimensions x">400</textarea>',
            '<span>✕</span>',
            '<textarea rows="1" class="mirador-image-view-physical-dimensions y">500</textarea>',
            '<span class="units">mm',
              '<select class="unit-selector">',
                '<option value="mm">millimeters</option>',
                '<option value="cm">centimeters</option>',
                '<option value="m">meters</option>',
              '</select>',
            '</span>',
          '</div>',
        '</div>'
      ].join('')),
      annotationPanel: Handlebars.compile([
        '<div class="annotationListPanel">',
          '<h4>Annotation List (<span class="annotationsTotal">{{annotationCount}}</span>)</h4>',
          '<div class="annoSearch">',
              '<select id="annotationTypeSelector" name="annotationTypes">',
                '<option value="Image Annotations">Image Annotations (<span class="imageAnnotationCount">{{imageAnnotationCount}}</span>)</option>',
                '<option value="text annotations">text annotations (<span class="textAnnotationCount">{{textAnnotationCount}}</span>)</option>',
              '</select>',
          '</div>',
          '<ul class="annotationlist">',
              '<li class="annotationcard">',
                  '{{#if title}}',
                  '<h3>{{title}}</h3>',
                  '{{/if}}',
                  '<p>lskdjfl sldkfj slkdfj sdkfj lskdjf lsdf {{body}}</p>',
              '</li>',
              '<li class="annotationcard">',
                  '{{#if title}}',
                  '<h3>{{title}}</h3>',
                  '{{/if}}',
                  '<p>lskdjfl sldkfj slkdfj sdkfj lskdjf lsdf {{body}}</p>',
              '</li>',
              '<li class="annotationcard">',
                  '{{#if title}}',
                  '<h3>{{title}}</h3>',
                  '{{/if}}',
                  '<p>lskdjfl sldkfj slkdfj sdkfj lskdjf lsdf {{body}}</p>',
              '</li>',
              '<li class="annotationcard">',
                  '{{#if title}}',
                  '<h3>{{title}}</h3>',
                  '{{/if}}',
                  '<p>lskdjfl sldkfj slkdfj sdkfj lskdjf lsdf {{body}}</p>',
              '</li>',
              '<li class="annotationcard">',
                  '{{#if title}}',
                  '<h3>{{title}}</h3>',
                  '{{/if}}',
                  '<p>lskdjfl sldkfj slkdfj sdkfj lskdjf lsdf {{body}}</p>',
              '</li>',
              '<li class="annotationcard">',
                  '{{#if title}}',
                  '<h3>{{title}}</h3>',
                  '{{/if}}',
                  '<p>lskdjfl sldkfj slkdfj sdkfj lskdjf lsdf {{body}}</p>',
              '</li>',
              '<li class="annotationcard">',
                  '{{#if title}}',
                  '<h3>{{title}}</h3>',
                  '{{/if}}',
                  '<p>lskdjfl sldkfj slkdfj sdkfj lskdjf lsdf {{body}}</p>',
              '</li>',
              '<li class="annotationcard">',
                  '{{#if title}}',
                  '<h3>{{title}}</h3>',
                  '{{/if}}',
                  '<p>lskdjfl sldkfj slkdfj sdkfj lskdjf lsdf {{body}}</p>',
              '</li>',
              '<li class="annotationcard">',
                  '{{#if title}}',
                  '<h3>{{title}}</h3>',
                  '{{/if}}',
                  '<p>lskdjfl sldkfj slkdfj sdkfj lskdjf lsdf {{body}}</p>',
              '</li>',
          '</ul>',
        '</div>'
      ].join('')),

      annotationDetail: Handlebars.compile([
        '<div class="{{annotationDetailClass}}">',
          '<div class="annotationNumber">{{annotationNumber}}</div>',
          '<div class="annotationType Icon mirador-icon-{{annotationType}}-annotation">ψ</div>',
          '<div class="annotationDetailToggle mirador-btn mirador-icon-annotation-toggle">hide</div>',
          '<p>{{body}}</p>',
        '</div>'
      ].join('')),

      imageChoices: Handlebars.compile([
        '<ul class="mirador-image-view-choices">',
          '{{#choicesInfo}}',
            '<li><a href="javascript:;" class="mirador-image-view-choice" data-choice="{{label}}" data-image-url="{{imageUrl}}">{{label}}</a></li>',
          '{{/choicesInfo}}',
        '</ul>',
      ].join(''))

    },


    /* Scroll view
    ---------------------------------------------------------------------------- */
    scrollView: {
      // template for rendering frame for hosting images
      imagesFrame: Handlebars.compile([
        '<div class="{{frameCls}}"></div>'
      ].join('')),

      // template for rendering images in scroll view
      listImages: Handlebars.compile([
        '{{#images}}',
          '<div id="{{id}}" class="item">',
            '<div class="header" style="height: {{../toolbarHeight}}px">',
              '<div id="{{id}}-osd-toolbar" class="toolbar">',
                '<a href="javascript:;" class="enable-zoom">Enable zoom</a>',
              '</div>',
            '</div>',
            '<div id="{{id}}-osd" class="image-instance">',
              '<img class="static-thumb">',
            '</div>',
            '<div class="title">{{title}}</div>',
          '</div>',
        '{{/images}}'
      ].join('')),

      // template for rendering tool bar with nav links
      navToolbar: Handlebars.compile([
        '<div class="{{navToolbarCls}}">',
          '<a href="javascript:;" class="mirador-btn mirador-icon-metadata-view"></a>',
          '<a href="javascript:;" class="mirador-btn mirador-icon-thumbnails-view"></a>',
        '</div>'
      ].join(''))
    },


    /* Thumbnails view
    ---------------------------------------------------------------------------- */
    thumbnailsView: {
      // template for rendering images in thumbnails view
      listImages: Handlebars.compile([
        '<ul class="{{listingCssCls}} listing-thumbs">',
          '{{#thumbs}}',
            '<li>',
              '<a href="javascript:;">',
                '<img title="{{title}}" src="{{thumbUrl}}" height="{{../defaultHeight}}">',
                '<div class="thumb-label">{{title}}</div>',
              '</a>',
            '</li>',
          '{{/thumbs}}',
        '</ul>'
      ].join('')),

      // template for rendering tool bar with nav links
      navToolbar: Handlebars.compile([
        '<div class="{{navToolbarCls}}">',
          '<a href="javascript:;" class="mirador-btn mirador-icon-metadata-view"></a>',
          '<a href="javascript:;" class="mirador-btn mirador-icon-scroll-view"></a>',
        '</div>'
      ].join(''))
    },


    /* Metadata view
    ---------------------------------------------------------------------------- */
    metadataView: {
      // template for rendering basic metadata terms
      listTerms: Handlebars.compile([
        '<div class="sub-title">About (Metadata about this manuscript\'s manifest file):</div>',
        '<dl class="{{metadataListingCls}}">',
          '{{#each about}}',
            '<dt>{{label}}:</dt><dd>{{value}}</dd>',
          '{{/each}}',
        '</dl>',
        '<div class="sub-title">Details (Metadata about physical object/intellectual work):</div>',
        '<dl class="{{metadataListingCls}}">',
          '{{#each details}}',
            '<dt>{{label}}:</dt><dd>{{value}}</dd>',
          '{{/each}}',
        '</dl>',
        '<div class="sub-title">Rights Metadata:</div>',
        '<dl class="{{metadataListingCls}}">',
          '{{#each rights}}',
            '<dt>{{label}}:</dt><dd>{{value}}</dd>',
          '{{/each}}',
        '</dl>',
        '<div class="sub-title">Linking Metadata:</div>',
        '<dl class="{{metadataListingCls}}">',
          '{{#each links}}',
            '<dt>{{label}}:</dt><dd>{{value}}</dd>',
          '{{/each}}',
        '</dl>'
      ].join(''), { noEscape: true }),

      // template for rendering tool bar with nav links
      navToolbar: Handlebars.compile([
        '<div class="{{navToolbarCls}}">',
          '<a href="javascript:;" class="mirador-btn mirador-icon-scroll-view"></a>',
          '<a href="javascript:;" class="mirador-btn mirador-icon-thumbnails-view"></a>',
        '</div>'
      ].join(''))

    }
  };


  /* Helpers
  ---------------------------------------------------------------------------- */
  Handlebars.registerHelper('trimTitlePrefix', function(title) {
    title = title.replace(/^Beinecke MS \w+,? \[?/, '');
    title = title.replace(/\]$/, '');

    return title;
  });


}(Mirador));
