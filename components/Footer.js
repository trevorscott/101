import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Footer = () => (
  <footer>
    <h3>Created by </h3>
    <h2>@spencer.r.scott</h2>
    <style jsx global>{`
      footer {
        position:absolute;
        left:0;
        bottom:0;
        right:0;
        width:100%;  
        padding: 1em 0 1em 0;
        background: #1d1919;
      }  
    `}</style>
  </footer>
)

export default Footer