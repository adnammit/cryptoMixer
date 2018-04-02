## OVERVIEW:

A simple mixer for imaginary virtual currency Jobcoin. Written with React, using NPM and Webpack.


### INSTALL AND START:
* `$ npm install`
* `$ npm start`
* navigate to [http://localhost:8080](http://localhost:8080)


### RESOURCES:
* [Official React Documentation on Forms](https://reactjs.org/docs/forms.html)
* [Basic Design in React](https://reactjs.org/docs/thinking-in-react.html)
* [React props vs state](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md)
* [Dates and Times and Datetimes](https://docs.microsoft.com/en-us/scripting/javascript/date-and-time-strings-javascript)
* [LESS Documentation](http://lesscss.org/usage/)


### ENHANCEMENTS AND NEXT STEPS:
* Add persistance so that `depositAddress` can be associated with the user's addresses
    - right now, there's not really such a thing as logging back in
* Find a more clever/random/secure way of generating an address
* Send an email with `depositAddress` rather than just `alert`ing it
* Clean up CSS and make use of LESS variables/mixins

* update the following:
`npm WARN deprecated babel-preset-es2015@6.24.1: 🙌  Thanks for using Babel: we recommend using babel-preset-env now: please read babeljs.io/env to update!`
* make css prettier
    - login inputs
* get rid of Transactions.jsx cos you're not using it
