'use strict';
var response = require('../dbbase/BaseResponse');

exports.addNote = function (args, res, next) {
  /**
   * Add a new note
   * 
   *
   * body Note Note object that needs to be added to the store
   * returns BaseResponse
   **/

  var newNote = args.body.value;
  var noteModel = global.dbHandle.getModel("note");
  
  noteModel.create(newNote, function (err) {
    if (err) {
      //return next(err);
      //res.end(JSON.stringify(response.createNew(err)));
      res.json(response.createNew(err));
    } else {
      console.log("笔记已经成功写入数据库啦！！！");

      noteModel.find({}, function (err, notes) {
        if (err) {
          console.log("咦？是怎么回事呢？");
          res.json(response.createNew(err));
        } else {
          res.json(response.createNew(null, notes));
        }
      });
    }
  });

  // var examples = {};
  // examples['application/json'] = {
  //   "resultType": "aeiou",
  //   "results": "{}",
  //   "resultMsg": "aeiou",
  //   "exceptionDetail": "{}"
  // };
  // if (Object.keys(examples).length > 0) {
  //   res.setHeader('Content-Type', 'application/json');
  //   res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  // } else {
  //   res.end();
  // }
}

exports.deleteNote = function (args, res, next) {
  /**
   * Deletes a note
   * 
   *
   * id String Pet id to note
   * returns BaseResponse
   **/
  var examples = {};
  examples['application/json'] = {
    "resultType": "aeiou",
    "results": "{}",
    "resultMsg": "aeiou",
    "exceptionDetail": "{}"
  };
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.findNotesByTags = function (args, res, next) {
  /**
   * Finds Pets by tags
   * Muliple tags can be provided with comma seperated strings. Use tag1, tag2, tag3 for testing.
   *
   * tags List Tags to filter by (optional)
   * returns BaseResponse
   **/
  res.setHeader('Content-Type', 'application/json');

  var noteModel=global.dbHandle.getModel("note");/*获取note数据库模型，模型能直接对数据库进行操作*/
	noteModel.find({},function(err,notes){
		if(err){
			//return next(err);
      res.end(response.createNew(err));
		}else{
			res.end(response.createNew(notes));
		}
	});
  // var examples = {};
  // examples['application/json'] = {
  //   "resultType": "aeiou",
  //   "results": "{}",
  //   "resultMsg": "aeiou",
  //   "exceptionDetail": "{}"
  // };
  // if (Object.keys(examples).length > 0) {
  //   res.setHeader('Content-Type', 'application/json');
  //   res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  // } else {
  //   res.end();
  // }
}

exports.getNoteById = function (args, res, next) {
  /**
   * Find note by ID
   * Returns a note
   *
   * id String ID of pet that needs to be fetched
   * returns BaseResponse
   **/
  res.setHeader('Content-Type', 'application/json');

  var noteModel=global.dbHandle.getModel("note");/*获取note数据库模型，模型能直接对数据库进行操作*/
	noteModel.find({},function(err,notes){
		if(err){
			//return next(err);
      res.end(response.createNew(err));
		}else{
			res.end(response.createNew(notes));
		}
	});
  // var examples = {};
  // examples['application/json'] = {
  //   "resultType": "aeiou",
  //   "results": "{}",
  //   "resultMsg": "aeiou",
  //   "exceptionDetail": "{}"
  // };
  // if (Object.keys(examples).length > 0) {
  //   res.setHeader('Content-Type', 'application/json');
  //   res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  // } else {
  //   res.end();
  // }
}

exports.updateNote = function (args, res, next) {
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
    "resultType": "aeiou",
    "results": "{}",
    "resultMsg": "aeiou",
    "exceptionDetail": "{}"
  };
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

