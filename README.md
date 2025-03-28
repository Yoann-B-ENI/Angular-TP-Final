# Angular Project - Local API + Art Institute of Chicago API

Angular v19 2-day project featuring: 
- Working navigation
- FormGroup, FormControl for login and registration forms, validator errors
- Registering auto-logs you
- Signal in the header component (to listen to whether we're logged in)
- Auth token stored in session storage, cleared when logging out
- Stay Logged in after a page refresh
- Authentication calls a local API for login and registration
- Artists, Artworks pages call the Art Institute of Chicago API, big, real-world requests and responses (it's the API they use for their own sites). 
- APIs called using HttpClient and Observables
- Tried both having the observable of an API request in the service (for all auth calls) and in the components (for all art API calls)
- Guards (some pages need to be logged in, some need to be logged out)
- 

TODO/to try to integrate for the exercise: 
- add links, credits to readme
- thumbnail images don't work properly (blurred), the way they use it on their website is a bit complicated (and a different endpoint)
- custom text splice pipe to add a '...' after a description cut-short
- custom validator for email, password
- Input/Output
- RxJS operators (pipe, takeuntil, of...)
- Subject, BehaviorSubject
- custom error handling
- 
