---
layout: post
title: "Writing unit testable JavaScript"
date: 2012-04-18 16:57
comments: true
categories: [JavaScript, JavaScript Unit Testing, HTML, TDD]
---

What is testable?
-----------------

The first thing we can do that will render our JavaScript testable would be to **avoid inline JavaScript like the plague!** Now what do I mean by that? Well, simply don't write JavaScript inline with your html, like so:

``` html
<!-- THIS IS BAD -->
<button onclick="someFunction('some value')">Button Text!</button>

<!-- BUT THIS IS EVEN WORSE -->
<button onclick="$.ajax({url: 'http://someurl.com', success: function(){/* do something */}})">Button Text!</button>
```

I see a number of problems with this approach, that are not only related to testability. The first being that this is incredibly difficult to read. I didn't even include any inline CSS here, but can you imagine how bad this would look if I did! If you can't tell by now I'm a big fan of clean and elegant code. As far as testability goes, I would have to rely on a tool that can read the HTML and parse out the JavaScript I wish to test. Why go through all that work! We can clean this up a bit, to a better more elegant solution:

``` html
<!-- BETTER THAN PREVIOUS EXAMPLE
  - MORE ELEGANT
  - EASIER TO READ/MAINTAIN
  - BUT... STILL NOT TESTABLE) -->
<script type="text/JavaScript">
  function someFunction() {
    /* do something */
  };
</script>
<button onclick="someFunction()">Button Text!</button>
```

While this is a better approach to writing elegant JavaScript, it still doesn't provide for easy testing. This is because it is still embedded in our HTML, and we would require some kind of parser just to extract it. The good thing about this though is the single, and simple method call from the `onclick` event property. This is the testable example:

``` javascript
function someFunction() {
  /* do something */
};
```

``` html
<script type="text/javascript" src="/path/to/js/file"></script>
<button onclick="someFunction()">Button Text!</button>
```

The reason that I call this testable is because you can take this JavaScript and use it in nearly any medium completely separate from the view, ie. a test runner. The only drawback to the above example is that there is still a very small amount of JavaScript embedded in our HTML the `onlick="someFunction()"` a global method call. This pattern will quickly pollute the global namespace. The only way we can completely remove this, easily that is, is with the help of either a JavaScript library like JQuery, KnockoutJs, BackboneJs, etc.
