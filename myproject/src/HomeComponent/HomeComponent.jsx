import React from 'react'
import hero from "../assets/hero.png";
import Card from "../Card/Card";

export const HomeComponent = () => {
  return (
        // fragment / wrapper <></>

    <>
      <h1>Hello, React!!!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto natus corporis, obcaecati omnis quis voluptatibus debitis maiores, earum, sint magni saepe suscipit cupiditate impedit asperiores ea ratione unde. Corporis odio quae, qui neque aspernatur error animi consequatur sapiente sint nihil architecto ipsum dolor provident tempore nisi alias sed? Commodi labore ullam, asperiores deserunt aspernatur saepe, hic sed rerum non praesentium consequatur perspiciatis expedita totam consectetur ea aperiam. Enim, reprehenderit quis deserunt dolores praesentium nobis nisi, beatae doloribus neque accusamus deleniti. Optio, quibusdam debitis. Molestiae, corporis vel,
        nulla eius dicta quas ad suscipit alias fugit quia qui architecto nesciunt provident accusamus.</p>
      <img src={hero} width={100} height={100}/>
      <div style={{"display":"flex", "justifyContent":"space-evenly"}}>
        <Card title="First Card" backTile = "1" Fcontent="First Card FrontSide" Bcontent="First Card Back Content"/>
        <Card title="Second Card" backTile = "1" Fcontent="Second Card FrontSide" Bcontent="Second Card Back Content"/>
        <Card title="Third Card" backTile = "1" Fcontent="Third Card FrontSide" Bcontent="Third Card Back Content"/>
       
      </div>
     
    </>
  )
}
