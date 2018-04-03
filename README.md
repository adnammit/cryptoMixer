# JMix Jobcoin Mixer: Disguising your Crypto Deposits

## OVERVIEW:
JMix is a simple mixer for the imaginary cryptocurrency Jobcoin. A coin mixer makes cryptocurrency transactions more anonymous and harder to track.

JMix works as follows:
* The user provides a primary address that JMix will withdraw funds from
* The users also provides several other accounts that they own that the mixed funds will be deposited into
* JMix automatically generates a house address where the coin to be mixed is sent
* Once logged in, the user sends funds from their primary address to their JMix house address
* Those funds are then divided up and distributed amongst the user's withdrawal accounts



## INSTALL AND START:
JMix is written with React, using NPM and Webpack.
* `$ npm install`
* `$ npm start`
* navigate to [http://localhost:8080](http://localhost:8080)


## RESOURCES:
* [Jobcoin API Documentation](https://jobcoin.gemini.com/commode/)
* [Official React Documentation on Forms](https://reactjs.org/docs/forms.html)
* [Basic Design in React](https://reactjs.org/docs/thinking-in-react.html)
* [React props vs state](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md)
* [var, let and const in ES6](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)
* [LESS Documentation](http://lesscss.org/usage/)
* [Dates and Times and Datetimes](https://docs.microsoft.com/en-us/scripting/javascript/date-and-time-strings-javascript)


## ENHANCEMENTS AND NEXT STEPS:
* JMix establishes the following. Can/should any of these things be used as login credentials?
    - the user's source address (where the funds come from)
    - the mixer's deposit account (where the user sends funds)
    - the user's withdrawal accounts (where the Jobcoin ends up)
* Add persistence so that the user's deposit address can be associated with the withdrawal addresses they provided
    - that way the user won't have to type all of their addresses in every time
    - currently providing the user with their JMix house address isn't necessary because they can't really do anything with it.
* Send an email or a new page with the JMix deposit address rather than just `alert`ing it
* List of transactions should only include those for the user's account -- currently impeded by CORS issue when getting `http://jobcoin.gemini.com/commode/api/addresses/{address}`
        Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote
        resource at https://jobcoin.gemini.com/commode/api/addresses/{address}.
        (Reason: missing token ‘access-control-allow-headers’ in CORS header
        ‘Access-Control-Allow-Headers’ from CORS preflight channel).
* Calculate totals for the user's accounts
* Find a more clever/random/secure way of generating a deposit address
* Collect the modulus of the division of funds as a fee
    - for fun -- savvy users would only transfer amounts that are easily divisible and we'd end up in the poor house
* Initially it made sense to put the 'Send' and 'Mix' buttons on the bottom of the page, but now that there are more transactions they're hard to get to. Adjust the UI to make them more accessible.    
* The 'Add' and 'Mix' forms are very self-similar -- combine them together
* Currently `onFocus`, `onBlur` etc. actually assign the default values to state -- find another way to do this.
* Further clean up CSS and make use of LESS variables/mixins
* Check addresses for characters that can't/shouldn't be sent via request
