Vue Select provides two `{Function}` props that can be used when implementing custom filtering 
algorithms:

- filter
- filterBy

By default, the component will perform a very basic check to see if an options label includes
the current search text. 

#### Use Cases

If you're using scoped slots, maybe you have information within the
option templates that should be searchable. The built-in search is really basic string checking,
so maybe you need more a advanced search algorithm that can handle fuzzy matching, like Fuse.js. 


## Fuzzy Search with Fuse.js

<FuseFilter />

<Prop 
name="filter" 
type="Function"
return-type="Array" 
description="Callback to filter results when search text is provided. Default implementation loops 
each option, and returns the result of this.filterBy."
:parameters="[{name: 'options', type: 'Array'}]" 
/>


 


