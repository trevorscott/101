import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'

const Hamburger = () => (
  <Menu >
    <Link href="/">
      <a className="menu-item">Home</a>
    </Link>
    <Link href="/music">
      <a className="menu-item">Music</a>
    </Link>
    <Link href="/art">
      <a className="menu-item">Art</a>
    </Link>
    <Link href="/photography">
      <a className="menu-item">Photography</a>
    </Link>
    <Link href="/blog">
      <a className="menu-item grow">Blog</a>
    </Link>
    <Link href="/about">
      <a className="menu-item ">About</a>
    </Link>
    <Link href="/contact">
      <a className="menu-item ">Contact</a>
    </Link>
    <Link href="https://github.com/trevorscott">
      <a className="menu-item ">GitHub</a>
    </Link>
    <style jsx>{`
      .grow {
        flex-grow:1;
      }

      a {
          text-decoration: none;
          color: #1d1919;
          font-size: 11px;
          line-height: 1.5em;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: .3em;
          font-weight: 300;
          font-style: normal;
          list-style-type: none;
      }
  `}</style>
    <style jsx global>{`
      /* Position and sizing of burger button */
      .bm-burger-button {
        position: fixed;
        width: 36px;
        height: 30px;
        left: 1.5em;
        top: 1.5em;
      }

      /* Color/shape of burger icon bars */
      .bm-burger-bars {
        background: #1d1919;
      }

      /* Color/shape of burger icon bars on hover*/
      .bm-burger-bars-hover {
        background: #a90000;
      }

      /* Position and sizing of clickable cross button */
      .bm-cross-button {
        height: 24px;
        width: 24px;
        left: 1.5em;
      }

      /* Color/shape of close button cross */
      .bm-cross {
        background: #bdc3c7;
      }

      /*
      Sidebar wrapper styles
      Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
      */
      .bm-menu-wrap {
        position: fixed;
        height: 100%;
        left: 0px;
        top: 0px;
      }

      /* General sidebar styles */
      .bm-menu {
        background: white;
        padding: 1.5em;
        font-size: 1.15em;
      }

      /* Morph shape necessary with bubble or elastic */
      .bm-morph-shape {
        fill: #373a47;
      }

      /* Wrapper for item list */
      .bm-item-list {
        color: #b8b7ad;
        text-align: left;
        display:flex;
        flex-direction: column;
      }

      /* Individual item */
      .bm-item {
        display: inline-block;
      }

      /* Individual item */
      .menu-item {
        display: block;
        margin-top:2em
      }

      /* Styling of overlay */
      .bm-overlay {
        background: rgba(0, 0, 0, 0.3);
      }
    `}</style>
  </Menu>
)

export default Hamburger