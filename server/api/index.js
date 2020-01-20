const router = require('express').Router()
const {isPyramidWord} = require('../util')
module.exports = router

router.get('/is-pyramid-word/:word', (req, res, next) => {
  res.json(isPyramidWord(req.params.word))
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
