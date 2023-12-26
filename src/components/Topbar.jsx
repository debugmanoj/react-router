import React from 'react'
import { Link } from 'react-router-dom'

function TopBar({allDatas}) {
  let all=[{
    img:"https://chatai.com/wp-content/uploads/2023/11/tr71123-ai-art.jpeg",
    title:"AI (Artificial Intelligence)",
  },
  {
    img:"https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg",
    title:"Data Science", 
   },
   {
    img:"https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg",
    title:"Data Science", 
   },
   {
    img:"https://media.licdn.com/dms/image/D5612AQE0r5WC8r0HQg/article-cover_image-shrink_720_1280/0/1657711469335?e=2147483647&v=beta&t=y46kqfqImgi-IbshBGRs3lMz1HCTBvL8RjFAILShitg",
    title:"Cyber Security"
   },
   {
    img:"https://media.licdn.com/dms/image/D5612AQE0r5WC8r0HQg/article-cover_image-shrink_720_1280/0/1657711469335?e=2147483647&v=beta&t=y46kqfqImgi-IbshBGRs3lMz1HCTBvL8RjFAILShitg",
    title:"Cyber Security",
   },
   {
    img:"https://media.licdn.com/dms/image/D5612AQE0r5WC8r0HQg/article-cover_image-shrink_720_1280/0/1657711469335?e=2147483647&v=beta&t=y46kqfqImgi-IbshBGRs3lMz1HCTBvL8RjFAILShitg",
    title:"Cyber Security"
   },
   {
    img:"https://img.freepik.com/premium-vector/career-website-banner-concept-with-thin-line-flat-design_56103-101.jpg",
    title:"Career"
   },
   {
    img:"https://img.freepik.com/premium-vector/career-website-banner-concept-with-thin-line-flat-design_56103-101.jpg",
    title:"Career"
   },
   {
    img:"https://img.freepik.com/premium-vector/career-website-banner-concept-with-thin-line-flat-design_56103-101.jpg",
    title:"Career"
   },
   {
    img:"https://chatai.com/wp-content/uploads/2023/11/tr71123-ai-art.jpeg",
    title:"AI (Artificial Intelligence)"
   },
   {
    img:"https://chatai.com/wp-content/uploads/2023/11/tr71123-ai-art.jpeg",
    title:"AI (Artificial Intelligence)"
   },
   {
    img:"https://chatai.com/wp-content/uploads/2023/11/tr71123-ai-art.jpeg",
    title:"AI (Artificial Intelligence)"
   },
   {
    img:"https://d2ms8rpfqc4h24.cloudfront.net/Guide_to_Full_Stack_Development_000eb0b2d0.jpg",
    title:"Full stack development"
   },
   {
    img:"https://chatai.com/wp-content/uploads/2023/11/tr71123-ai-art.jpeg",
    title:"Top Ways to Assess Soft Skills in Full Stack Developers in 2024"
   },
   {img:"https://chatai.com/wp-content/uploads/2023/11/tr71123-ai-art.jpeg",
   title:"Horizontal vs Vertical Scaling for Efficient System Design"

   },{
    img:"https://chatai.com/wp-content/uploads/2023/11/tr71123-ai-art.jpeg ",
    title:"Top Differences: Full Stack Developer vs Software Engineer 2024"
   }
   
   

  
  ]

  return <>
  <div className="container  colorchange ">
        <div className="d-flex justify-content-evenly align-items-center  ">
            <div className='sample'>
                <Link to='/'>
                    <a className='anchor text-center'>All</a>
                    </Link>
            </div>
            <div className='sample'>
                <Link to='/dataScience'><a className='anchor text-center'>Data Science</a></Link>
            </div>
            <div className='sample'>
                <Link to='/FSD'><a className='anchor text-center'>Full Stack Development</a></Link>
            </div>
            <div className='sample'>
                <Link to='/cyberSecurity'><a className='anchor text-center'>Cyber Security</a></Link>
            </div>
            <div className='sample'>
                <Link to='/career'><a className='anchor text-center'>Career</a></Link>
            </div>
        </div>
    </div>
    {/* <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
         {all.map((e,i)=>{  
          return <All datas={e} key={i}/>
         })}
          </div>
    </div> */}

  </>
}

export default TopBar