import Layout from '../components/Layout.js'
import Page from '../components/Page.js'

export default function About() {
  return (
    <Layout>
      <Page>
        <div align="center" className="aboutWrapper">
			<img src="/static/About_portrait.png" alt="Spencer R. Scott"/>
			<p>
	          Coming Soon!
	        </p>
        </div>
      </Page>
      <style jsx global>{`

      	img {
      		max-width:400px;
      		margin:0 auto;
      	}


  	  `}</style>
    </Layout>
  )
}
