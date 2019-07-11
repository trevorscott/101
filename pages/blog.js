import Layout from '../components/Layout.js'
import Link   from 'next/link'
import apiURL from '../utils/api-url.js'
import Page from '../components/Page.js'

const PostLink = props => (
  <li>
    <Link as={`/blog/published/${props.id}`} href={`/post?id=${props.id}`}>
      <div>
        <a style={{cursor:"pointer"}}> 
          <h2 style={{color:"black",lineHeight:0,fontWeight: "bolder",fontFamily: "Lucida Grande"}}>{props.title}</h2>
          <p style={{
            color:"rgba(0,0,0,.54)",
            fill:"rgba(0,0,0,.54)",
            fontFamily: "Lucida Grande",
            padding:"0",
            margin:"0"}}>
            {props.description}
          </p>
          <p style={{
            padding:"0",
            marginTop:"10px",
            fontSize: ".85em"
          }}>
            {props.author} {props.date}
          </p>
        </a>
        <hr/>
      </div>
    </Link>
  </li>
)

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

  render() { 
    return(
      <Layout>
        <h1 className="title">Blog</h1>
        <Page>
          <ul>
            {this.state.blogPostData.map((postData)=>
              postData.data.published == true ?
               <PostLink id={postData.fileName} 
                        title={postData.data.title}
                        author={postData.data.author}
                        date={postData.data.date} 
                        description={postData.data.description}/> 
              : null
            )}
          </ul>
          <style jsx>{`
            
            h2 {
              line-height: 0;
              color:black;
            } 

            ul {
              text-align:left;
            }
          `}</style>
        </Page>
      </Layout>
    )
  }
}

export default Blog