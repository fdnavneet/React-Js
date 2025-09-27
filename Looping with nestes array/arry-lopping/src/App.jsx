import College from "./college"



const App = () => {
  const collageData=[
    {
      name:"IET",
      city:"delhi",
      website:"www.iet.com",
      student:[
        {name:"navneet",
          age:'25',
          email:"nav@gmail.com"
        },
         {name:"nav",
          age:'25',
          email:"nav@gmail.com"
        },
         {name:"na",
          age:'25',
          email:"nav@gmail.com"
        },
      ]
    },
     {
      name:"DU",
      city:"delhi",
      website:"www.du.com",
       student:[
        {name:"navsameet",
          age:'25',
          email:"nav@gmail.com"
        },
         {name:"jam",
          age:'25',
          email:"nav@gmail.com"
        },
         {name:"navneet",
          age:'25',
          email:"nav@gmail.com"
        },
      ]
      
    },
     {
      name:"srm",
      city:"chennai",
      website:"www.srm.com",
       student:[
        {name:"navneet",
          age:'25',
          email:"nav@gmail.com"
        },
         {name:"tam",
          age:'25',
          email:"nav@gmail.com"
        },
         {name:"pam",
          age:'25',
          email:"nav@gmail.com"
        },
      ]
    },
  ]

  return (
  <>
    <h1>map method in array</h1>
    {collageData.map((college,index)=>(
      <div key={index}>
       
      <College college={college} />
      </div>
    ))}
   </>
  )
}

export default App