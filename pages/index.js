import Layout from '../components/Layout.js'
import Link   from 'next/link'
import apiURL from '../utils/api-url.js'
import Page from '../components/Page.js'


class Blog extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      blogPostData: []
    }
  }

  componentDidMount(){

    this.getAllPosts()
  }



/*
[
  {
    "content":"#Hello world!",
    "data":{
      "title":"Hello",
      "slug":"home"
    },
    "isEmpty":false,
    "excerpt":"",
    "fileName":"test.md"
  },
  {
    "content":"#Hello World",
    "data":{
      "title": "Title of your blog post!",
      "description": "Description of your blog post!",
      "author": "Trevor Scott",
      "date": "Todays Date",
      "published": "false"
    },
    "isEmpty":false,
    "excerpt":""
  }
]
*/
  async getAllPosts() {
    const res = await fetch(`${apiURL}/blogpost-data`)
    const blogPostData = await res.json()
    console.log(blogPostData)
    this.setState({
      blogPostData:blogPostData
    }) 
  }

  renderGridItem(postData) {
    if (postData.data.pdf != undefined) {
      return (
        <a href={postData.data.pdf} style={{textDecoration:"none", color: "rgba(0,0,0,.84)"}}>
          <div className="gridItem">
            <img src={postData.data.image} style={{width:"100%"}}/>
            <h3>{postData.data.title}</h3>
            <p>{postData.data.description}</p>
          </div>
        </a>
      )
    } else {
      return (
        <div className="gridItem">
          <img src={postData.data.image} style={{width:"100%"}}/>
          <h3>{postData.data.title}</h3>
          <p>{postData.data.description}</p>
        </div>
      )
    }
  }

  render() { 
    return(
      <Layout>
        <Page>
          <ul>
            {this.state.blogPostData.map((postData)=>
              postData.data.published == true ?
              <li>
                {this.renderGridItem(postData)}
              </li>
              : null
            )}
          </ul>
          <style jsx>{`

            ul {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
              grid-gap: 1rem;
            }

            li{
              border-radius: .5rem;
              height: 100%;
            }

            @font-face {
              font-family: consola;
              src: url('/static/CONSOLA.TTF');
            }

            .title{
              font-family:consola;
            }
            
            h2 {
              line-height: 0;
              color:black;
            } 

            ul {
              text-align:left;
              display:grid;
              align-items: center;
              grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            }
          `}</style>
        </Page>
      </Layout>
    )
  }
}

export default Blog