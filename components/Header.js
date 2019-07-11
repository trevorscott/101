import Link from './ActiveLink'
import Hamburger from './Hamburger.js'
import Router from 'next/router'

const linkStyle = {
  marginRight: 15
}

const homeStyle = {
  marginRight: 15,
  marginLeft: 15
}

/*

<Link activeClassName="active" href="/music">
  <a style={linkStyle}>Music</a>
</Link>
<Link activeClassName="active" href="/art">
  <a style={linkStyle}>Art</a>
</Link>
<Link activeClassName="active" href="/photography">
  <a style={linkStyle}>Photography</a>
</Link>
<Link activeClassName="active" href="/blog">
  <a style={linkStyle}>Blog</a>
</Link>
<Link href="https://github.com/trevorscott">
  <a style={linkStyle} target="_blank">GitHub</a>
</Link>
<div id="Hamburger">
        <Hamburger/>  
      </div>

      <Link activeClassName="active" href="/index">
          <a style={linkStyle}></a>
        </Link>
        <Link activeClassName="active" href="/blog">
          <a style={linkStyle}>Blog</a>
        </Link>
*/

const Header = (props) => (
  <div id="Header">
      <div id="nav">
        <div id="navContainer">
        <Link activeClassName="active" href="/index">
          <a style={linkStyle}>101</a>
        </Link>
        </div>
      </div>
    <style jsx>{`

        #Hamburger{
          height: 70px;
          position: fixed;
          top: 0;
          left: 0;
        }

        #nav {
          background: #1d1919;
          padding:1em;
        }

        #navContainer{
          max-width:740px;
          margin:0px auto;
          text-align:left;
        }

        #nav h3 {
          color:white;
        }

        #nav h2 {
          margin: 0;
          text-align: left;
          color: white;
          font-size:2em;
        }

        #nav a {
          text-decoration: none;
          font-size:2em;
          color: white;
        }
      }`}</style>
  </div>
)

const currentPath = (originalUrl) => {
  if (typeof window === 'object') {
    return Router.asPath
  } else {
    return originalUrl
  }
}

Header.getInitialProps = function() {
  console.log(currentPath)
  console.log("Hello world")
}

export default Header