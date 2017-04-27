'use strict';

var url = require('url');

var Note = require('./NoteService');

module.exports.addNote = function addNote (req, res, next) {
  Note.addNote(req.swagger.params, res, next);
};

module.exports.deleteNote = function deleteNote (req, res, next) {
  Note.deleteNote(req.swagger.params, res, next);
};

module.exports.findNotesByTags = function findNotesByTags (req, res, next) {
  Note.findNotesByTags(req.swagger.params, res, next);
};

module.exports.getNoteById = function getNoteById (req, res, next) {
  Note.getNoteById(req.swagger.params, res, next);
};

module.exports.updateNoteWithForm = function updateNoteWithForm (req, res, next) {
  Note.updateNoteWithForm(req.swagger.params, res, next);
};
