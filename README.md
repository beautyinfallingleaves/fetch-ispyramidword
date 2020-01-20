# is-pyramid-word

This simple Node/Express server was written in response to a coding challenge. It provides a single endpoint that will simply evaluate whether or not a supplied word is a pyramid word.

A word is a ‘pyramid’ word if you can arrange the letters in increasing frequency, starting with 1 and continuing without gaps and without duplicates.

## Installation

1. Clone the project to your local machine.
2. Install modules and dependencies:
```bash
npm install
```
3. Start the server to begin listening for requests:
```bash
npm start
```
4. Make an HTTP GET request (you can mock requests using an app like [Postman](https://www.getpostman.com/)) to the below endpoint, with the word to check supplied as a parameter:
```bash
http://localhost:8080/api/is-pyramid-word/<word to check>
```
5. In the body of the response, you'll receive 'true' or 'false' depending on whether the requested word is a pyramid word or not.
