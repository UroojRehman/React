import React from 'react'
import './Courses.css'

export const Courses = () => {
  const Courses = [
    { _id: 1, title: "Web Designing", desc: "Web design is the art and process of planning, creating, and building the visual look, layout, and user experience of a website.", faculty: "Miss Shanza" },
    { _id: 2, title: "Web Development", desc: "Web development is the work needed to build and run sites on the internet.", faculty: "Miss Laiba" },
    { _id: 3, title: "Mobile App Development", desc: "Mobile app development is the process of building software applications that run on mobile devices like smartphones and tablets.", faculty: "Miss Urooj Rehman" },
    { _id: 4, title: "AI / ML", desc: "Artificial Intelligence (AI) is the broad science of making machines smart, while Machine Learning (ML) is a core part of AI .", faculty: "Miss Urooj Rehman" }
  ]
  return (
    <div>
      <h1>Our Courses</h1>
     <div style={{"display": "flex", "justifyContent":"space-evenly"}}>
       {Courses.map((c)=>(
   <div className="card" key={c._id}>
        <h3 className="card__title">{c.title}
        </h3>
        <p className="card__content">{c.desc}</p>
        <div className="card__date">
          {c.faculty}
        </div>
        <div className="card__arrow">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
            <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
          </svg>
        </div>
      </div>
      ))}
     </div>
   
    </div>
  )
}
