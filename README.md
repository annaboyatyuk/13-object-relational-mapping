[![Build Status](https://travis-ci.com/annaboyatyuk/13-object-relational-mapping.svg?branch=master)](https://travis-ci.com/annaboyatyuk/13-object-relational-mapping)


![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 13: Single Resource Mongo and Express API
===


## Links
* PR https://github.com/annaboyatyuk/13-object-relational-mapping/pull/2
* Travis https://travis-ci.com/annaboyatyuk/13-object-relational-mapping/builds
* Heroku https://lab13orm401.herokuapp.com/

## Configure
test the GET POST PUT and DELETE in postman


## Server Endpoints
### `/api/v1/resource-name`
* `POST` request
  * should pass data as stringifed JSON in the body of a post request to create a new resource
### `api/v1/resource-name`
* `GET` request
* Fetch all resources
### `/api/v1/resource-name/:id`
* `GET` request
  * should pass the id of a resource through the url endpoint to get a resource
    * **this should use `req.params`, not querystring parameters**
* `PUT` request
  * should pass data as stringifed JSON in the body of a put request to overwrite a pre-existing resource
* `DELETE` request
  * should pass the id of a resource though the url endpoint to delete a resource
    * **this should use `req.params`**

### Tests
* create a test that will ensure that your API returns a status code of 404 for routes that have not been registered
* create a series of tests to ensure that your `/api/v1/resource-name` endpoint responds as described for each condition below:
  * `GET` - test 200, returns a resource with a valid body
 * `GET` - test 404, respond with 'not found' for valid requests made with an id that was not found
 * `PUT` - test 200, returns a resource with an updated body
 * `PUT` - test 400, responds with 'bad request' if no request body was provided
 * `PUT` - test 404, responds with 'not found' for valid requests made with an id that was not found
 * `POST` - test 400, responds with 'bad request' if no request body was provided
 * `POST` - test 200, returns a resource for requests made with a valid body
