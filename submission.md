# Submission Notes 

These notes will be read by HubSpot developers. Drop us a line!

## Given more time, what would you have done differently?

Not too much - I thought it turned out pretty well.  I probably could have made the animations a little nicer - they are somewhat choppy right now.

## Is there anything else you'd like to let us know?

- I didn't use Webpack for this project - I ended up using Parcel instead.  It's a zero-config bundler that I've used on other smaller projects, and it just has some cool things about it.  It will auto-rename your js and css file imports and add hashes to them and it's super quick, so I think it was a decent choice for a small project (also, I had 2 lines as my config :) ).
- I used Vue for the reactive part of the page.  I thought that went fairly well, as it was broken down well into components.  I controlled state through Vuex, which also worked out well.  Vue's model to state interactivity was really good for this particular use case.
- I used ES6 throughout the project (classes, arrow functions, etc.)
- Sometimes the devil is in the details.  I was proud of how I implemented the arrow on top of the filter dropdown menus (CSS triangles anyone?) and learned about the `localeCompare` function for alphabetizing media items which worked really well and was very clean to implement.  I was also happy with the user interaction for those filter dropdowns.  I set up a special listener on each of them to close that dropdown if they clicked outside the component, but keep it open if the click happens on the inside of the component.  This approach worked better than a couple others that I tried, namely having the dropdowns open on button hover and having to click the button to both open and close the dropdowns.
- I didn't like the DOM restriction where I couldn't modify how things were nested.  Although not completely necessary, I would have added a couple more container divs in the first 2 exercises if I were coding this from scratch.
- I didn't mind not being able to use a framework, but of course it takes longer to build everything out from scratch.  Using a framework would have sped up the process a bit.
