The Shiny Instagram Thing
==================

Intent
------

[Litterati] (http://www.litterati.org/)

There's an ask for an app that tracks especially high king tides in Miami-Dade County. Rather than reinvent the wheel, let's try to tap the [Instagram API](https://instagram.com/developer/) and a mapping API (to be determined) to build it out.

#### MVP:

Use the Instagram API to track a single, probably hardcoded, hashtag and display those images on a map of Miami-Dade County. Roll it all into a site similar to Litterati.

#### Second:

Admin back-end that allows:
* login
* control over the tracked hashtag
* control over the map display area (for example, instead of #kingtide in Miami, #tarballs in Galveston, etc). 

Install
-------

We'll get back to you on this one....

1. Register with [Instagram](https://instagram.com/developer/)
2. Install [NPM](https://npmjs.org/), [Grunt](http://gruntjs.com/getting-started), [Assemble](http://assemble.io/docs/Installation.html)
3. Install dependencies (being super detailed because it'll have to be replicated): 
	npm install grunt-contrib-compass --save-dev 
	npm install grunt-contrib-watch --save-dev
	npm install grunt-contrib-clean --save-dev 
	npm install grunt-verb --save-dev 
	npm install grunt-newer --save-dev
	

Run
---

...and this one too.
