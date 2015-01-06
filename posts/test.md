---
layout: post
title: "FubuMVC.ServerSentEvents OOTB Support"
date: 2012-10-26 14:36
comments: true
categories: [FubuMVC, Server Sent Events (SSE), C#]
---

FubuMVC now has support for [Server Sent Events](http://en.wikipedia.org/wiki/Server-sent_events) (SSE)!  I have recently used it for our internal call center dashboard here at [Extend Health](https://www.extendhealth.com). Since it's inception we are now seeing data on the dashboard within seconds of it happening, as opposed to the previous 5 second ajax refresh interval we were doing before.

Out of the box (OOTB) the FubuMVC.ServerSentEvents bottle already does just about everything you need on the server. The only thing you need to implement is a topic for which your events will be coordinated against. A topic is created by inheriting the `FubuMVC.ServerSentEvents.Topic` class. The topic will be used to coordinate how events are stored and pushed to the connected clients.  This is accomplished by overriding the `bool Eqauls(object item)` and `int GetHashCode()` methods. See an example below:

`{ it works class }`

``` csharp
using System;
using FubuMVC.ServerSentEvents;

namespace SomeNamespace
{
}
```

``` html
<div class="test-class">
  <div class="inner-test-class"></div>
</div>
```
