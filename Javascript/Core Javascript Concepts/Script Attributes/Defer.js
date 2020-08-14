// TODO:: Understanding Defer in Script Tag of HTML :-

/*
^ This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, 
^ but before firing DOMContentLoaded.

~ Scripts with the defer attribute will prevent the DOMContentLoaded event from firing until the script has loaded and finished evaluating.

& This attribute must not be used if the src attribute is absent(i.e.for inline scripts), in this case it would have no effect.
& The defer attribute has no effect on module scripts — they defer by default.

* Scripts with the defer attribute will execute in the order in which they appear in the document.

? This attribute allows the elimination of parser - blocking JavaScript where the browser would have to load and evaluate scripts 
? before continuing to parse.async has a similar effect in this case.

*/

// ^ NOTE :-

// ! Performance and then Recording Developer Tools helps to understand the graph that shows, we pause the script when html and css are loading.
// ! It is only loaded only when they are loaded so to avoid this delay, we use Defer in Script tag. 

// ? Defer is different from Async as it only load's early so that DOM Events load early.

// * It is only used for external JS and it does load in order of derfined script tags.