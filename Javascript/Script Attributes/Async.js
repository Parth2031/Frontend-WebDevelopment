// TODO:: Understanding Async in Script Tag of HTML :-

/*

? For classic scripts, if the async attribute is present, then the classic script will be fetched in parallel to parsing and evaluated 
? as soon as it is available.

! For module scripts, if the async attribute is present then the scripts and all their dependencies will be executed in the defer queue, 
! therefore they will get fetched in parallel to parsing and evaluated as soon as they are available.

? This attribute allows the elimination of parser - blocking JavaScript where the browser would have to load and evaluate scripts 
? before continuing to parse.defer has a similar effect in this case.

* This is a boolean attribute: the presence of a boolean attribute on an element represents the true value, 
* and the absence of the attribute represents the false value.

*/

// TODO:: Note :-
// ! Performance and then Recording Developer Tools helps to understand the graph that shows, we pause the script when html and css are loading.
// ! It is only loaded only when they are loaded so to avoid this delay, we use Async in Script tag. 
// ? Async is different from Defer as it not only load's early but executes early.