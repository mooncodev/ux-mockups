Thank you for your patience.
The following will detail a strategy for implementing our rep admin page.
3 targets are prioritized:

1) estimated total time to production-readiness (least possible)
2) initial simplicity from which systems (partial templating, SSR) may later be decided on/added.
3) desirable target state UX mechanics (aka "how the sidebar and responsive flow works")

some notes:
* I've chosen a framework-less route, and additional libraries (seen in the demo) will continue to be removed. Reasoning: Our requirements are very simple to start with, here, and we should KIS.

* We can always convert into a templating language like pug or handlebars.  We can always add build tools and anything else.  At the start, I have a feeling we're best off with the basics only.  This ensures a more linear path to production-ready, with less chance for surprise hurdles to overcome, and that this feature will be simple to add in to our existing repo.

* We save the most time at this stage by having a basic gathering of styles mapped out for us, because this also takes care of "how the design fits together and meshes, visually".


## Strategy Demo 
This demo covers the implementation and visual design strategy, but does not completely cover colors.

I have chosen OneAdmin as our starting point, and Huma template as a mechanism target.

In other words, OneAdmin has the most malleable codebase, and Huma has some features which I think we want.

All templates jumplist:  https://ux.moonco.io

## HUMA (to be used as example)

https://ux.moonco.io/huma/dist/index.html
a) Visit the huma link and use the settings gear on the right side to choose "Dark Mode".
b) Click "Dashboard" and "Messaging" on the left side to reveal flyout menus.  These top level links may also be wired to navigate without opening a flyout menu.
c) Resize the browser to see the mobile view, and note the placement and mechanics when using the hamburger icon with the sidebar visibility.  Also, clicking outside of the sidebar will close it.

## ONEADMIN (to be used as codebase starting point)

https://ux.moonco.io/oneadmin/
Important: Oneadmin is setup like an SPA (single page application).  Click the top level menu items in the sidebar and watch the URL - it does not change and a smooth transition occurs for the content view.  This design is a great way to provide a superior UX without SSR, and sets us up for SSR later if our initial page weight becomes too great (for quite some time, page weight will be tiny despite providing these SPA-like features).

Changes needed:
- remove more libraries/features (ETA 2 hours)
- remove unwanted CSS (ETA 2 hours)
- remove oneadmin's right-hand sidebar (ETA 1 hour)
- update oneadmin's sidebar to function more like huma's sidebar (ETA 16 hours)
  --- it must scroll independently of the content view so that it is always visible on the left
  --- in desktop view, it must not have the option to widen itself via the button at the top.  Instead this button will only be visible in mobile view to show and hide the nav menu.
  --- it must be extensible for subnav capability (2nd flyout as seen in huma) for future additions, while at first it will not have this feature.
  --- in mobile view, it must have more visible separation from other features (currently it blends too seamlessly with the content area beneath it)

- it must tastefully incorporate FTP's purple-based color scheme, whether through accents or primary/secondary.
  --- we can expect a demo showing different color strategies

Q: Why not just modify huma?
A: Huma is painted into a corner behind an incredibly large and opinionated tech stack and dependency tree, including dependencies to their in-house npm packages.  I can potentially work with it to splice it apart and dial it backward complexity-wise, but I estimate far more time expense up front.  I estimate it's best to just use it as an example.

## Honorable Mention: Dashtrans (could also be used as codebase starting point)
https://ux.moonco.io/dashtrans/
Dashtrans also has no frameworks or build tools - it is barebones and, much like oneadmin, is only needing a conversion to its sidebar.  I highly dislike the "hover to show" mechanism with sidebar menus.