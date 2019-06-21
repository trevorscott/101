const Page = props => (
  <div>
    <div id="Page">
      {props.children}
    </div>
    <style jsx global>{`
          #Page {
            max-width:740px;
            margin:0px auto;
            text-align:left;
            color:rgba(0,0,0,.84);
            background:#fff;
            border-radius:1em;
            padding-top:1em;
          }

          @media (max-width:415px) {
            #Page {
              padding:0;
            }
          }


    `}</style>
  </div>
)

export default Page