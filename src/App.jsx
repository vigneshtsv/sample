import React from 'react'

function App() {
  let data =[{
    title: "project one",
    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error"
  },
{
  title: "project two",
  discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error"
},
{
  title: "project three",
  discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error"
},
{
  title: "project four",
  discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error"
},
{
  title: "project five",
  discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error"
},
{
  title: "project six",
  discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error"
},
]
  return<>
<div className="container">
  <h1 className="my-4">Page Heading
    <small>Secondary Text</small>
  </h1>

  <div className="row">
    {
      data.map((e,i)=>{
        return <div className="col-lg-4 col-sm-6 mb-4" key={i}>
      <div className="card h-100">
        <a href="#"><img className="card-img-top" src="https://via.placeholder.com/700x400" alt=""/></a>
        <div className="card-body">
          <h4 className="card-title">
            <a href="#">{e.title}</a>
          </h4>
          <p className="card-text">{e.description}</p>
        </div>
      </div>
    </div>
      })
    }
    </div>
    </div>
  </>
}

export default App