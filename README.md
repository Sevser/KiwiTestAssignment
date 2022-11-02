# Test assignment 

# Description
Fullstack JS assignment for Kiwi Account tribe

Implement a number to word list converter consisting of a Node backend and React frontend. The backend should provide an endpoint that converts a given numeric string into a list of corresponding words in the style of T9 or Phonewords. For example, given the input “23” the output should be: ad, ae, af, bd, be, bf, cd, ce, cf.

The frontend should allow the user to enter a number, query the backend for the corresponding expansions, and display them.

The solution should include:

* Git repository with real history.
* Unit and/or integration tests.
* Working Frontend.
* Working Backend.
* README clearly explaining the steps to run the app.
* Typed JS code.
* Transpilation of ES6.
* React.js


Great to haves:

* Phone keyboard-like UI.
* Real-world deployment of the full-stack app or alternatively a docker/docker-compose setup to run it all.
* Use of NextJS or similar frameworks.
* Use of our Orbit design system (or any other UI lib).

# Development

Application are running on port 3000

Run manually:

* install packages with `yarn`
* run application with `yarn run`

Run with docker:

* `docker build -t kiwi-test .`
* `docker run -p 3000:3000 kiwi-test`


