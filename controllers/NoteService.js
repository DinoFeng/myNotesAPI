'use strict';

exports.addNote = function(args, res, next) {
  /**
   * Add a new note
   * 
   *
   * body Note Note object that needs to be added to the store
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

exports.deleteNote = function(args, res, next) {
  /**
   * Deletes a note
   * 
   *
   * id String Pet id to note
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

exports.findNotesByTags = function(args, res, next) {
  /**
   * Finds Pets by tags
   * Muliple tags can be provided with comma seperated strings. Use tag1, tag2, tag3 for testing.
   *
   * tags List Tags to filter by (optional)
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

exports.getNoteById = function(args, res, next) {
  /**
   * Find note by ID
   * Returns a note
   *
   * id String ID of pet that needs to be fetched
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

exports.updateNoteWithForm = function(args, res, next) {
  /**
   * Updates a note in the store with form data
   * 
   *
   * id String ID of pet that needs to be updated
   * name Note Updated name of the pet
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

