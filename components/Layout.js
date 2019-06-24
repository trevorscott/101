import Header from './Header'
import Footer from './Footer'
import Head from 'next/head';

const Layout = props => (
  <div>
    <Head>
      <title>101</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Lato:100,300" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap" rel="stylesheet"/>
    </Head>

      <div id="content">
        {props.children}
      </div>
    <style jsx global>{`

        @font-face {
          font-family: trevorsFont;
          src: url('/static/HelveticaNeue.ttc');
        }

        html, body {
           margin:0;
           padding:0;
           height:100%;
        }

        body { 
          font: 11px menlo;
          color: rgba(0,0,0,.9);
          text-align:center;
          width: 100%; 
          margin:0;
          padding:0;
          padding-bottom:60px;
          background:#e51696;
        }

        h1,h2,h3 {
          color:white;
          text-decoration:none;
        }

        h1 {
          font-size:20vw;
        }

        h2 {
          font-size:10vw;
        }

        h2 {
          font-size:7vw;
        }

        .title {
          font-family: lato;
          font-weight: 300;
          font-style: normal;
          text-transform: uppercase;
        }

        p{
          
        }

        #content {
          min-height:100%;
          position:relative;
          padding:7em 2em 2em 2em;
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        footer a, #nav a, #header a {
          text-decoration: none;
          font-size: 11px;
          line-height: 1.5em;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: .3em;
          font-weight: 300;
          font-style: normal;
          list-style-type: none;
        }

        a:hover {
          opacity: 0.6;
        }
        

      `}</style>
  </div>
)

export default Layout