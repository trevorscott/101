const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 3000
const app = next({ dev })
const handle = app.getRequestHandler()


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