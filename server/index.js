const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

const fileUtils = require('./file-utils.js')

const BLOG_POST_PATH = '../blog/published/'


const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(ex => {
        console.error(ex.stack)
        next()
      });
  };


app
  .prepare()
  .then(() => {
    const server = express()

    if (process.env.NODE_ENV == 'production') {
      // Enforce SSL & HSTS in production
      server.use(function(req, res, next) {
        var proto = req.headers["x-forwarded-proto"];
        if (proto === "https") {
          res.set({
            'Strict-Transport-Security': 'max-age=31557600' // one-year
          });
          return next();
        }
        res.redirect("https://" + req.headers.host + req.url);
      });
    }

    server.get('/blog/published/:id', (req, res) => {
      const actualPage = '/post'
      const queryParams = { 
        id: req.params.id,
        title: req.params.title
      }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/p/:id', (req, res) => {
      const actualPage = '/post'
      const queryParams = { 
        id: req.params.id,
        title: req.params.title
      }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/post/:id', asyncMiddleware(async (req, res) => {
      const fileName = req.params.id
      res.setHeader('Content-Type', 'application/json')
      return res.send(await fileUtils.parseBlogPost(fileName, BLOG_POST_PATH))
    }))

    server.get('/blogposts', asyncMiddleware(async (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      return res.json(await fileUtils.listFiles(BLOG_POST_PATH))
    }))

    server.get('/blogpost-data', asyncMiddleware(async (req, res) => {
      const fileNameArray = await fileUtils.listFiles(BLOG_POST_PATH)
      const postData = await fileUtils.parseBlogPostList(fileNameArray, BLOG_POST_PATH)
      res.setHeader('Content-Type', 'application/json')
      return res.json(postData)
    }))

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(PORT, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${PORT}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })