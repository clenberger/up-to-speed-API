// test/posts.js
const app = require("./../server");
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;

// Import the Fact model from our models folder so we
// we can use it in our tests.
const Fact = require('../models/facts');
const server = require('../server');
const User = require("../models/user");

chai.should();
chai.use(chaiHttp);

describe('Facts', function() {
    const agent = chai.request.agent(server);
    // Fact that we'll use for testing purposes
    const newFact = {
        text: 'post title',
    };
    const user = {
        username: 'poststest',
        password: 'testposts'
    };

    it('Should create with valid attributes at POST /add/fact', function(done) {
        // Checks how many posts there are now
        Fact.estimatedDocumentCount()
        .then(function (initialDocCount) {
            agent
                .post("/add/fact")
                // This line fakes a form post,
                // since we're not actually filling out a form
                .set("content-type", "application/x-www-form-urlencoded")
                // Make a request to create another
                .send(newFact)
                .then(function (res) {
                    console.log('howdy')
                    Fact.estimatedDocumentCount()
                        .then(function (newDocCount) {
                            // Check that the database has one more post in it
                            expect(res).to.have.status(200);
                            // Check that the database has one more post in it
                            expect(newDocCount).to.be.equal(initialDocCount + 1)
                            done();
                        })
                        .catch(function (err) {
                            done(err);
                        });
                })
                .catch(function (err) {
                    done(err);
                });
        })
        .catch(function (err) {
            done(err);
        });
    });
    after(function (done) {
        Fact.findOneAndDelete(newFact)
        .then(function (res) {
            agent.close()
      
            User.findOneAndDelete({
                username: user.username
            })
              .then(function (res) {
                  done()
              })
              .catch(function (err) {
                  done(err);
              });
        })
        .catch(function (err) {
            done(err);
        });
      });
});
console.log('Here')