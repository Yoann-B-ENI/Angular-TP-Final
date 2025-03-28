# Angular Project - Local API + Art Institute of Chicago API

Angular v19 project featuring: 
- Working navigation
- FormGroup, FormControl for login and registration forms, validator errors
- Registering auto-logs you
- Signal in the header component (to listen to whether we're logged in)
- Auth token stored in session storage, cleared when logging out
- Authentication calls a local API for login and registration
- Artists, Artworks pages call the Art Institute of Chicago API, big, real-world requests and responses (it's the API they use for their own sites). 
- Tried both having the observable of an API request in the service (for all auth calls) and in the components (for all art API calls)
- 

TODO: 
- add links, credits to readme
- custom text splice pipe to add a '...' after a description cut-short
- custom validator for email, password
- 