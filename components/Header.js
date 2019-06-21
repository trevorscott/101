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
*/

const Header = (props) => (
  <div id="Header">
      <div id="Hamburger">
        <Hamburger/>  
      </div>
      <div id="nav">
        <h3>101</h3>
      </div>
    <style jsx>{`

        .active {
          background: rgba(255,255,255,.9);
          color: #1d1919 !important;
          padding: 5px 3px 3px 5px;
          border-radius: 2px;
        }

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

        #nav h3 {
          color:white;
        }

        #nav a {
          font-size: 11px;
          line-height: 1.5em;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: .3em;
          font-weight: 300;
          font-style: normal;
          list-style-type: none;
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