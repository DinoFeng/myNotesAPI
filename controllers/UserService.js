'use strict';

exports.createUser = function(args, res, next) {
  /**
   * Create user
   * This can only be done by the logged in user.
   *
   * body User Created user object (optional)
   * returns BaseResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "resultType" : "aeiou",
  "results" : "{}",
  "resultMsg" : "aeiou",
  "exceptionDetail" : "{}"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.createUsersWithArrayInput = function(args, res, next) {
  /**
   * Creates list of users with given input array
   * 
   *
   * body List List of user object (optional)
   * returns BaseResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "resultType" : "aeiou",
  "results" : "{}",
  "resultMsg" : "aeiou",
  "exceptionDetail" : "{}"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.deleteUser = function(args, res, next) {
  /**
   * Delete user
   * This can only be done by the logged in user.
   *
   * userId String The name that needs to be deleted
   * returns BaseResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "resultType" : "aeiou",
  "results" : "{}",
  "resultMsg" : "aeiou",
  "exceptionDetail" : "{}"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getUserByName = function(args, res, next) {
  /**
   * Get user by user name
   * 
   *
   * userId String The name that needs to be fetched. Use user1 for testing.
   * returns BaseResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "resultType" : "aeiou",
  "results" : "{}",
  "resultMsg" : "aeiou",
  "exceptionDetail" : "{}"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.loginUser = function(args, res, next) {
  /**
   * Logs user into the system
   * 
   *
   * username String The user name for login (optional)
   * password String The password for login in clear text (optional)
   * returns String
   **/
  var examples = {};
  examples['application/json'] = "aeiou";
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.logoutUser = function(args, res, next) {
  /**
   * Logs out current logged in user session
   * 
   *
   * no response value expected for this operation
   **/
  res.end();
}

exports.updateUser = function(args, res, next) {
  /**
   * Updated user
   * This can only be done by the logged in user.
   *
   * userId String name that need to be deleted
   * body User Updated user object (optional)
   * returns BaseResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "resultType" : "aeiou",
  "results" : "{}",
  "resultMsg" : "aeiou",
  "exceptionDetail" : "{}"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

