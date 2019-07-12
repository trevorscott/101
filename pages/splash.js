import Link from 'next/link'
import Layout from '../components/Layout.js'

class Index extends React.Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <Layout>
      <div className="title">
        <a href="./../static/Fashion_101.pdf">
          <h2>
            Sustainable 
          </h2>
          <h2>
            Fashion & Apparel
          </h2>
          <h1>
            101
          </h1>
          <h3>(click to download pdf)</h3>
        </a>
      
    <style jsx global>{`

      @font-face {
          font-family: trevorsFont;
          src: url('static/HelveticaNeue.ttc');
        }

      @font-face {
          font-family: consola;
          src: url('/static/CONSOLA.TTF');
        }

      h1,h2,h3 {
        text-decoration:none;
        color:white;
        margin:0;

        font-family: lato;
        font-weight: 300;
        font-style: normal;
        text-transform: uppercase;
      }

      h1 {
        font-family: consola;
      }

      .title {
        text-align:center;
      }

      a {
        text-decoration:none;
      }




    `}</style>

    <style jsx global>{`
      body {
        background:#e51696;
        color:white;
        text-align:center;
      }
    `}</style>
    </div>
    </Layout>
  )
}

}
export default Index