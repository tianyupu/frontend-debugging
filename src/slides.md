# Front-End Debugging Tips
## Tian Pu

<!-- .slide: data-slide-type="header" -->

---
# Agenda

 * Chrome dev tools
 * Charles proxy
 * AJS
 * Front-end and JIRA
 * Misc

---
# Chrome dev tools

To bring up the dev tools in Chrome, type `Cmd + Alt + I`.

--
# Chrome dev tools
## Console

Use the console to interact with everything that is loaded onto the page by
entering arbitrary JavaScript.

--
# Chrome dev tools
## Element inspector

Inspection mode - click the magnifying class or hit `Cmd + Shift + C` to
automatically inspect elements as you hover over them.

Click on any element to view its location in the DOM hierarchy and view the
styles applied on it.

--
# Chrome dev tools
## Device & network emulator

Emulate various screen sizes and network speeds. No window resizing needed.

--
# Chrome dev tools
## Sources (debugger)

Set various types of breakpoints.

Evaluate expressions in the context
of the currently paused frame by bringing up the drawer console (press `Esc`
to toggle).

Hover over the source in the paused frame to view its values at that point in
time.

--
# Chrome dev tools
## Network

Inspect all requests that are occurring on the page, starting from when the
Network tab is opened.

---
# Charles proxy

[go/charles](http://go.atlassian.com/charles)

--
# Charles proxy

Capture and modify requests and responses just before they are sent or
received.

---
# AJS

You can use 
```javascript
AJS.version
```
in the console to get the current version of AUI that is running on the page.

<!-- .element: class="fragment" -->
Go to [docs.atlassian.com/aui/{VERSION}/](http://docs.atlassian.com/aui/) to
view the docs for that version.

--
# AJS

You can also use jQuery to play around with DOM elements on the page:
```javascript
AJS.$("div");
AJS.$(".some-class");
AJS.$("#element-id");
AJS.$("[attribute-name]");
```

---
# Front-end and JIRA
## Batched resources

In JIRA, all js and css resources are batched into huge files, typically
`batch.js` and `batch.css`.
To find where
the original files come from, scroll up in the sources until you find the
corresponding `module-key`.

--
# Front-end and JIRA
## Finding the `module-key`

![Finding a module-key](https://s3.amazonaws.com/uploads.hipchat.com/10804/1553882/rp3TJLIzV6P3IIn/module-key.png)

--
# Front-end and JIRA
## Minification/uglification

Often, js and css resources are minified/uglified, making them a real pain to
debug (or even look at).

<!-- .element: class="fragment" -->
![Pretty-formatting in Chrome](https://s3.amazonaws.com/uploads.hipchat.com/10804/1553882/sYEFQL2avYfKJLe/auto-format.png)

---
# Misc
## Dirty Markup

[http://www.dirtymarkup.com/](http://www.dirtymarkup.com/)

--
# Misc
## Online JSON editor

[https://www.jsoneditoronline.org/](https://www.jsoneditoronline.org/)

---
# 

---
# Thank you!
## Questions?
