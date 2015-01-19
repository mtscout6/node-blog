---
layout: post
title: "Using Multiple Versions of KnockoutJs Simultaneously copy"
date: 2013-02-14 11:42
comments: true
categories: [HTML, Javascript, KnockoutJs]
---
# Test

When new versions of Knockout are released that implement breaking changes, you may not have to time or resources to go back and update all of you legacy code base just to get the latest version. Using RequireJs you can adopt the latest changes without breaking old code. So let's look at an example of an old app using Knockout 1.2.1:

``` html
<html>
  <head>
    <script type="text/javascript" src="scripts/jquery-1.6.min.js"></script>
    <script type="text/javascript" src="scripts/knockout-1.2.1.js"></script>
    <script type="text/javascript" src="scripts/v1.2.1.js"></script>
  </head>
  <body>
    <div>
      Loaded with <span data-bind="text: loadedVersion"></span>
    </div>
  </body>
</html>
```

``` javascript
$(document).ready(function(){
  var appViewModel = function() {
    this.loadedVersion = ko.observable(!ko.computed ? 'Knockout v2.1.0' : 'Knockout v1.2.1');
  }

  ko.applyBindings(new appViewModel());
});
```

You you will notice that since `ko.computed` was introduced in v2.0.0 the loaded version that is displayed on the screen is "Knockout v1.2.1"

Now with the release of 2.1.0 which supports AMD loading, `ko` is not defined in global scope when knockout is loaded with an AMD loader such as RequireJs, CurlJs, etc. (We will use RequireJs for this demonstration, the AMD loader you wish to use is up to you. Each has it's own pros and cons which goes beyond the scope of this document.). This means that we will be able to use both versions of Knockout simultaneously, with minor tweeks to the legacy code which will be explained momentarily. First let's add our new features.

``` html
<html>
  <head>
    <script type="text/javascript" src="scripts/jquery-1.6.min.js"></script>
    <script type="text/javascript" src="scripts/knockout-1.2.1.js"></script>
    <script type="text/javascript" src="scripts/v1.2.1.js"></script>
    <script type="text/javascript" data-main="scripts/init.js" src="scripts/require.js"></script>
  </head>
  <body>
    <div id="v210">
      Loaded with <span data-bind="text: loadedVersion"></span>
    </div>
    <div id="v121">
      Loaded with <span data-bind="text: loadedVersion"></span>
    </div>
  </body>
</html>
```

``` javascript
...
  ko.applyBindings(new appViewModel(), $('#v121')[0]);
...
```

Notice the specific DOM element that applyBindings is being applied to! This is done so that the binding is not applied to the entire document, this is the gotcha. You cannot apply bindings to the same DOM tree with different versions of Knockout. Now onto the new stuff loaded through an AMD Loader.

``` javascript
require(['v2.1.0'], function() {});
```

``` javascript
define(['knockout-2.1.0'], function(ko){
  var appViewModel = function() {
    this.loadedVersion = ko.observable(ko.computed ? 'Knockout v2.1.0' : 'Knockout v1.2.1');
  }

  ko.applyBindings(new appViewModel(), $('#v210')[0]);
});
```

You can now go through as time permits and update your legacy features to utilize the newer Knockout libraries! Unfortunately you will not be able to use two versions together if they are both prior to v2.1.0, at least one must be this later version since all previous versions did not support AMD loading and `ko` was defined on the global variable.

