'use strict';

var url = require('url');

var Note = require('./NoteService');

module.exports.addNote = function addNote (req, res, next) {
  Note.addNote(req.swagger.params, res, next);
};

module.exports.deleteNote = function deleteNote (req, res, next) {
  Note.deleteNote(req.swagger.params, res, next);
};

module.exports.findAllNotes = function findAllNotes (req, res, next) {
  Note.findAllNotes(req.swagger.params, res, next);
};

module.exports.getNoteById = function getNoteById (req, res, next) {
  Note.getNoteById(req.swagger.params, res, next);
};

module.exports.updateNote = function updateNote (req, res, next) {
  Note.updateNote(req.swagger.params, res, next);
};
