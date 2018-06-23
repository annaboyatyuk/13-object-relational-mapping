'use strict';

require('babel-register');
const superagent = require('superagent');
const app = require('../../../src/app.js');

describe('API', () => {

  const PORT = 8888;
  beforeAll( () => {
    app.start(PORT);
  });
  afterAll( () => {
    app.stop();
  });

  // const url = 'http://localhost:8888/api/v1/coffee';

  // it('GET - test 200, returns a resource with a valid body', () => {
  //   return superagent
  //     .get('http://localhost:8888/api/v1/coffee')
  //     .then(response => {
  //       expect(response.statusCode).toEqual(200);
  //     })
  //     .catch(console.err);
  // });



  it('gets a 200 response on a good model', () => {
    return superagent.get('http://localhost:8888/api/v1/foo')
      .then(response => {
        expect(response.statusCode).toEqual(200);
      })
      .catch(console.err);
  });

  it('gets a 500 response on an invalid model', () => {
    return superagent.get('http://localhost:8888/api/v1/foo')
      .then(console.log('hello'))
      .catch(response => {
        expect(response.status).toEqual(500);
      });
  });


  // const model = {'name': 'coffee', 'roast': 'coffee', 'coffee': 'coffee'};
  
  // it('GET - test 200, returns a resource with a valid body', () => {
  //   // const url = 'http://localhost:8888/api/v1/coffee';
  //   return superagent
  //     .get('http://localhost:8888/api/v1/coffee')
  //     .then(response => {
  //       expect(response.statusCode).toEqual(200);
  //     })
  //     .catch(console.err);
  // });

  // it('should return 400 bad request when no id was provided', () => {
  //   return superagent
  //     .get('http://localhost:8888/api/v1/coffee')
  //     .catch(err => {
  //       expect(err.response.text).toBe('Bad Request');
  //       expect(err.status).toBe(400);
  //     });
  // });



  // it('should return 200 and contain response body for request made with valid id', () => {
  //   let object = {'name':'sldkjfoei'};
  //   return superagent
  //     .post('http://localhost:8888/api/v1/coffee')
  //     .send(object)
  //     .then(data => {
  //       return superagent
  //         .get(`http://localhost:8888/api/v1/coffee/${data.body.id}`)
  //         .then(response => {
  //           expect(response.body.id).toBe(data.body.id);
  //         });
  //     });
  // });

  // it('should return 400 bad request when there is no body content or invalid body content', () => {
  //   return superagent
  //     .post('http://localhost:8888/api/v1/coffee')
  //     .catch(err => {
  //       expect(err.response.text).toBe('Bad Request');
  //       expect(err.status).toBe(400);
  //     });
  // });

  // it('should  respond with the body content', () => {
  //   let object = {'roast': 'one name', 'coffee': 'such content'};
  //   return superagent
  //     .post('http://localhost:8888/api/v1/coffee')
  //     .send(object)
  //     .then(data => {
  //       console.log(data.body);
  //       expect(data.body.coffee).toBe('such content');
  //     });
  // });



});
