import React from 'react'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import TopBar from './components/Topbar'
import All from './components/All'
import Datascience from "./components/DataScience"
import Cybersecurity from './components/Cybersecurity'
import Career from './components/Career'
import Fsd from './components/Fsd'

let all=[
  {
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
    title:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024", 
    course:"Data Science"
   },
   {
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1.webp",
    title:"Impact of Certification Programs on Hiring Data Scientists",
    course:"Data Science"
   },
   {
    img:"https://www.hurix.com/wp-content/uploads/2022/01/Cyber-security.jpg",
    title:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    course:"Cyber"
   },
   {
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
    title:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
    course:"Cyber"
   },
   {
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
    title:"What Is Hacking? Types of Hacking & More",
    course:"Cyber"
   },
   {
    img:"https://img.freepik.com/free-vector/professional-career-elements-design_1200-212.jpg",
    title:"UI/UX Designer Job Description and Roles & Responsibilities",
    course:"career"
   },
   {
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
    title:"Top 5 IT Jobs for Economics Students",
    course:"career"
   },
   {
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
    title:"Top IT Jobs for Commerce Students: A Lucrative Career Path",
    course:"career"
   },



   {
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
    title:"Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
    course:"FSD"
   },
   {img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
   title:"Horizontal vs Vertical Scaling for Efficient System Design",
   course:"FSD"

   },{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp ",
    title:"Top Differences: Full Stack Developer vs Software Engineer 2024",
    course:"FSD"
   }
   
   

  
  ]

function App() {
  return <BrowserRouter  >
  <TopBar />
  <Routes>

        <Route path='/' element={
        
        <All datas={all}/>
       
        }/>
    
    <Route path='/dataScience' element={<Datascience datas={all} />}/>
    <Route path='/cyberSecurity' element={<Cybersecurity datas={all} />}/>
    <Route path='/career' element={<Career datas={all} />}/>
    <Route path='/FSD' element={<Fsd datas={all} />}/>
  </Routes>
  </BrowserRouter> 


  
}

export default App