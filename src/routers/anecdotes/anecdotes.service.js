const anecdoteRepo = require('./anecdotes.controller');

const getAll = () => anecdoteRepo.getAll();
const getAnecdote = id => anecdoteRepo.getAnecdote(id);
const addAnecdote = data => anecdoteRepo.addAnecdote(data);
const editAnecdote = (id, data) => anecdoteRepo.updateAnecdote(id, data);
const deleteAnecdote = id => anecdoteRepo.deleteAnecdote(id);

module.exports = {
  getAll,
  getAnecdote,
  addAnecdote,
  editAnecdote,
  deleteAnecdote
};
