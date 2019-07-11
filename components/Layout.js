import Header from './Header'
import Footer from './Footer'
import Head from 'next/head';

const Layout = props => (
  <div>
    <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-142999548-2"></script>
      <script dangerouslySetInnerHTML={{__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-142999548-2');`}}>
        
      </script>
      <title>101</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Sustainability in the apparel and fashion industries."/>
      <meta name="keywords" content="sustainable fashion 101, sustainable apparel 101, sustainable fashion and apparel 101, introduction to sustainable fashion, introduction to sustainable apparel, how can i be more sustainable, Sustainable Fashion, Sustainable Apparel Guide, Sustainability Guide, Sustainable Fashion Guide, Sustainable Fashion info, Sustainable Apparel info, how can i be sustainable, Sustainable, Sustainability, Fashion, Apparel"/>
      <meta name="author" content="Spence Scott"/>
      <link href="https://fonts.googleapis.com/css?family=Lato:100,300" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap" rel="stylesheet"/>
    </Head>
      <Header/>
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
          background:#white;
        }

        h1,h2,h3 {
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
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a:hover {
          opacity: 0.6;
        }
        

      `}</style>
  </div>
)

export default Layout