import { withRouter } from 'next/router'
import Markdown from 'react-markdown'
import fetch from 'isomorphic-unfetch'
const remarkParse = require('remark-parse')

import Layout from '../components/Layout.js'
import Page from '../components/Page.js'
import apiURL from '../utils/api-url.js'


class Post extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      content: undefined,
      postName: undefined,
      title: '',
      author: '',
      date: '',
      description: '',
      published: false
    }
  }

  componentDidMount(){
    console.log('post.js props:', this.props)
    if (this.props 
        && this.props.router 
        && this.props.router.query
        && this.props.router.query.id) {
      const postContent = this.getPostContent(this.props.router.query.id);
    }
  }

  async getPostContent(fileName) {
    const res = await fetch(`${apiURL}/post/${fileName}`)
    const json = await res.json()
    console.log(json);
    this.setState({
      content:json.content,
      title: json.data.title,
      author: json.data.author,
      date: json.data.date,
      description: json.data.description,
      published: json.data.published
    })
  }

  render() {
    return (
      <Layout>
        <Page>
            <div>
              
              <div className="markdown">
                <div className="postIntro">
                  <h1>{this.state.title}</h1>
                  <p className="description">{this.state.description}</p>
                  <p className="postInfo">
                    {this.state.author} <br/>
                    {this.state.date}
                  </p>
                </div>
                <hr/>
                <Markdown 
                  source={this.state.content} 
                  escapeHtml={false}
                  plugins={[remarkParse, {footnotes:true}]}
                />
              </div>
            </div>
          <style jsx global>{`

            .postIntro h1 {
              margin:0;
              font-family: medium-content-title-font,Georgia,Cambria,"Times New Roman",Times,serif;
              font-weight: 400;
              font-style: normal;
              font-weight: 400;
              line-height: 1.25;
              letter-spacing: 0;
              text-align:left;
            }

            .markdown img{
              max-width: 100%;
            }


            .markdown {
              max-width:740px;
              margin:0px auto;
              text-align:left;
              color:rgba(0,0,0,.84);
              background:#fff;
              border-radius:1em;
              font-family: 'medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif';
            }

            .markdown p, .postIntro p, li {
              --x-height-multiplier: 0.375;
              --baseline-multiplier: 0.17;
              font-family: medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif;
              letter-spacing: .01rem;
              font-weight: 400;
              font-style: normal;
              font-size: 21px;
              line-height: 1.58;
              letter-spacing: -.003em;
              text-rendering: optimizeLegibility;
              -webkit-font-smoothing: antialiased;
            }

            .postIntro p {
              font-weight: bold;
              font-size: 17px;
            }

            .markdown blockquote {
              border-left: 3px solid rgba(0,0,0,.84);
              margin-left: 0px;
              letter-spacing: .01rem;
              font-style: italic;
              padding: 0 1em;
            }

            .markdown blockquote p {
              font-style: italic;
            }


            .markdown h1 {
              margin: .25em 0;  
            }

            .markdown h2 {
              --x-height-multiplier: 0.342;
              --baseline-multiplier: 0.22;
              font-family: medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif;
              letter-spacing: -.02em;
              font-weight: 700;
              font-style: normal;
              letter-spacing: 0;
              font-size: 34px;
              line-height: 1.15;
              letter-spacing: -.015em;
            }

            .markdown h3 {
              font-size: 1.5em;
            }

            .markdown h2,h3,h4,h5 {

            }

            .postIntro .description {
              --x-height-multiplier: 0.342;
              --baseline-multiplier: 0.22;
              font-family: 'helvetica';
              letter-spacing: -.02em;
              font-weight: 300;
              font-style: normal;
              letter-spacing: 0;
              line-height: 1.22;
              letter-spacing: -.012em;
              color: rgba(0,0,0,.54);
              margin: .5em 0;
              font-size: 24px;
            }

            .postInfo{
              font-size
            }

          `}</style>

          <style jsx global>{`
            footer {
              bottom: inherit !important;
            }
          `}</style>
        </Page>
      </Layout>
    )
  }

}

export default withRouter(Post)