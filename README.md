# JMix Jobcoin Mixer: Disguising your Crypto Deposits

## OVERVIEW:
JMix is a simple mixer for imaginary virtual currency Jobcoin. Written with React, using NPM and Webpack.


## INSTALL AND START:
* `$ npm install`
* `$ npm start`
* navigate to [http://localhost:8080](http://localhost:8080)


## RESOURCES:
* [Jobcoin API Documentation](https://jobcoin.gemini.com/commode)
* [Official React Documentation on Forms](https://reactjs.org/docs/forms.html)
* [Basic Design in React](https://reactjs.org/docs/thinking-in-react.html)
* [React props vs state](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md)
* [var, let and const in ES6](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)
* [LESS Documentation](http://lesscss.org/usage/)
* [Dates and Times and Datetimes](https://docs.microsoft.com/en-us/scripting/javascript/date-and-time-strings-javascript)


## ENHANCEMENTS AND NEXT STEPS:
* Implementation of Mixer functionality:
    - when a user signs up, a deposit address is auto-generated for them into which their Jobcoin can be deposited and then distributed to their withdrawal accounts.
        * establish a relationship between:
            - the user's source address (where the funds come from)
            - the mixer's deposit account (where the user sends funds)
            - the user's withdrawal accounts (where the Jobcoin ends up)
        * which of these things are being used as login credentials?
    - from the dashboard, the user can send funds to their JMix address
    - those funds will then be processed and distributed amongst the user's withdrawal accounts
* Add persistence so that the user's deposit address can be associated with the withdrawal addresses they provided
* List of transactions should only include those for the user's account -- currently impeded by:
    - CORS issue when getting `http://jobcoin.gemini.com/commode/api/addresses/{address}`
        ```
        Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote
        resource at https://jobcoin.gemini.com/commode/api/addresses/{address}.
        (Reason: missing token ‘access-control-allow-headers’ in CORS header
        ‘Access-Control-Allow-Headers’ from CORS preflight channel).
        ```
* Add totals for the user's withdrawal accounts
* Find a more clever/random/secure way of generating a deposit address
* Send an email or a new page with `depositAddress` rather than just `alert`ing it
* Initially it made sense to put the 'Send' and 'Add' buttons on the bottom of the page, but now that there are more transactions, they're hard to get to. Adjust the UI to make them more accessible.    
* Further clean up CSS and make use of LESS variables/mixins
* Check addresses for characters that can't/shouldn't be sent via request
