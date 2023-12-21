import React from 'react'
import Card from './components/Card'

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
        return <Card cardData={e} key={i}/>
      })
    }
    </div>
    </div>
  </>
}

export default App