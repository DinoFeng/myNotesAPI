'use strict';
var response = require('../dbbase/BaseResponse');
var extend = require('node.extend');

//var mongoose = require('mongoose');

var Schema = global.dbHandle.Schema;

const tagSchema = new Schema({
  name: { type: String, required: true },
});

const noteSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createTime: { type: String, required: true },
  createUser: { type: String, required: true },
  tags: [tagSchema],
});

exports.addNote = function (args, res, next) {
  /**
   * Add a new note
   * 
   *
   * body Note Note object that needs to be added to the store
   * returns BaseResponse
   **/

  var newNote = args.body.value;
  var noteModel = global.dbHandle.model('notes', noteSchema);
  //var models=require('./models.js');
  var note = new noteModel(extend(newNote, {
    createTime: new Date().toLocaleString(),
  }));

  note.save(function (err, data) {
    if (err) {
      //return next(err);
      //res.end(JSON.stringify(response.createNew(err)));
      console.error("出错了！", err);
      res.json(response.createNew(err));
    } else {
      console.log("笔记已经成功写入数据库啦！！！", data);
      res.json(response.createNew(null, data));
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
  var filter = { _id: args.Id.value };
  var noteModel = global.dbHandle.model("note", noteSchema);/*获取note数据库模型，模型能直接对数据库进行操作*/
  noteModel.findOneAndRemove(filter, function (err, notes) {
    if (err) {
      //return next(err);
      console.error("出错了！", err);
      res.json(response.createNew(err));
    } else {
      console.log("删除了这些数据：", notes);
      res.json(response.createNew(null, notes));
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

exports.findAllNotes = function (args, res, next) {
  /**
   * Finds Pets by tags
   * Muliple tags can be provided with comma seperated strings. Use tag1, tag2, tag3 for testing.
   *
   * tags List Tags to filter by (optional)
   * returns BaseResponse
   **/


  var noteModel = global.dbHandle.model('notes', noteSchema);/*获取note数据库模型，模型能直接对数据库进行操作*/
  noteModel.find({}, function (err, notes) {
    if (err) {
      //return next(err);
      console.error("出错了！", err);
      res.json(response.createNew(err));
    } else {
      console.log("找到这些数据：", notes);
      res.json(response.createNew(null, notes));
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
  var filter = { _id: args.Id.value };
  var noteModel = global.dbHandle.model("note", noteSchema);/*获取note数据库模型，模型能直接对数据库进行操作*/
  noteModel.find(filter, function (err, notes) {
    if (err) {
      //return next(err);
      console.error("出错了！", err);
      res.json(response.createNew(err));
    } else {
      console.log("根据条件:", filter, "\n", "找到这些数据：", notes);
      res.json(response.createNew(null, notes));
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
  var newNote = args.body.value;
  var id = args.Id.value;
  var noteModel = global.dbHandle.model('notes', noteSchema);

  noteModel.findById(id, function (err, oldNote) {
    if (err) {
      console.error("查找出错了！", err);
      res.json(response.createNew(err));
    } else {
      console.log("找到数据", oldNote);

      var note = extend(oldNote, newNote, {
        createTime: new Date().toLocaleString(),
      });

      note.save(function (s_err, data) {
        if (s_err) {
          console.error("保存出错了！", s_err);
          res.json(response.createNew(s_err));
        } else {
          console.log("保存数据", data);
          res.json(response.createNew(null, data));
        }
      });
      // res.json(response.createNew(null, note));
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

