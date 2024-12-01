import { useEffect, useState } from "react";
import { PostComponent } from "./Post";
import { NotificationComponent } from "./Notification";
import { CardComponent } from "./Card";

function ReactBasics(){
  return <div>
    
  </div>
}


//%%%%%%%% List & keys case start
// function App(){
//   let ItemList = [{ key:1, ItemName: "Milk", Bought: false },
//     { key:2,ItemName: "Biscuit", Bought: true },
//     { key:3,ItemName: "Tea", Bought: true }
//   ]

//   let compList = ItemList.map(item => <Todo key={item.key} name={item.ItemName} bought={item.Bought}/>)
//   return (
//     <div>
//       {compList}
//     </div>
//   )
// }

// function Todo({name, bought}){
//   return <div>Item : { name } - {bought? "Available":"Not available"}</div>
// }
//%%%%%%%% List & keys case end



//%%%%%%%% children prop case start
// function App(){
//   return (
//     <div>
//       <CardComponent>
//         <h2>CardComponent Title</h2>
//         <p>This is some content inside the CardComponent.</p>
//       </CardComponent>
//       <CardComponent>
//         <h2>Another CardComponent</h2>
//         <p>This CardComponent has different content!</p>
//       </CardComponent>
//     </div>
//   )
// }
//%%%%%%%% children prop case end



//%%%%%%%% useEffect case starts
// function App() {

//   const [currentTab, setCurrentTab] = useState("1");
//   const [tabData, setTabData] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(function(){
//     setLoading(true);
//     //console.log("send request to backend from tab:" + currentTab);
//     fetch("https://jsonplaceholder.typicode.com/todos/"+currentTab)
//     .then(async (res)=>{
//       const json = await res.json();
//       setTabData(json);
//       setLoading(false);
//     })
//   },[currentTab])

//   return <div>
//     <button onClick={()=>setCurrentTab("1")} style={{color: currentTab=="1" ? "red" : "black"}}>Todos #1</button>
//     <button onClick={()=>setCurrentTab("2")} style={{color: currentTab=="2" ? "red" : "black"}}>Todos #2</button>
//     <button onClick={()=>setCurrentTab("3")} style={{color: currentTab=="3" ? "red" : "black"}}>Todos #3</button>
//     <button onClick={()=>setCurrentTab("4")} style={{color: currentTab=="4" ? "red" : "black"}}>Todos #4</button>
//     <br/>
    

//     <div> 
//       {loading ? "Loading...." : tabData.title}
//     </div>
//   </div>

// }

//%%%%%%%%useEffect case ends




  // const [posts, setPosts] = useState([]);
  //const [count, setCount] = useState(0);

  // const postcomponents = posts.map(post=>
  //   <PostComponent
  //     name = {post.name}
  //     subtitle = {post.subtitle}
  //     time = {post.time}
  //     image = {post.image}
  //     description = {post.description}
  //   />
  // )

  // function addPost(){
  //   setPosts([...posts,{
  //     name:"Jaya Prakash Aenugutala",
  //     subtitle : "500 followers",
  //     time : "20 min ago",
  //     image : "https://media.licdn.com/dms/image/v2/C5603AQGqU0TGXgSkWQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1615313555872?e=1735171200&v=beta&t=i6Ovthcy_eL042c8-xVuMugu1XxQ9UJf8YfO6YvrwRY",
  //     description : "Hi everyone, this is my post rendered using a react component"
  //   }]);
  // }

  // function addNotification(){
  //   setCount(currentValue => currentValue + 1);
  // }

  // useEffect(function(){
  //   console.log("above setInterval");
  //   setInterval( addNotification, 1000);
  // },[])

  //return (
    // <div style={{background: "#dfe6e9"}}>
    //   <button onClick={addPost} style={{height:"fit-content"}}>Add post</button>
    //   {/* <button onClick={addNotification} style={{height:"fit-content"}}>Add notification</button> */}
    //   <div style={{display:"flex",justifyContent:"center", gap: 50}}>
    //       <div >
    //         {postcomponents}
    //       </div>
          // <div>
          //   <NotificationComponent count={count}/>
          // </div>
    //   </div>
    // </div>
    
    
    // <div>
    //   <ToggleMessage/>
    //   <ToggleMessage/>
    //   <ToggleMessage/> 
    // </div>

    
    // <div style={{backgroundColor:"#dfe6e9", height: "100vh"}}>
    //   <div style={{display:"flex", justifyContent:"center"}}>
    //     <div>
    //       <div>
    //         <PostComponent 
    //           uname={"Jaya Prakash Aenugutala"} 
    //           subtitle={"20 followers"}
    //           time={"2 min"}
    //           content={"I am happy to share that I have obtained a new certification: Mendix Advanced Developer from Mendix!"}
    //         />
    //         <br/>
    //       </div>
    //       <div>
    //         <PostComponent 
    //         uname={"Jaya Prakash Aenugutala"}
    //         subtitle={"Promoted"}
    //         content={"I am happy to share that I have obtained a new certification: Mendix Advanced Developer from Mendix!"}
    //         />
    //         <br/>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  //)
//}

// const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor:"gray", borderWidth: 1, padding :10};

// function PostComponent({uname,subtitle,time,content}){
//   return ( <div style={style}>
//    <div style={{display: "flex"}}>
//       <img src={"https://media.licdn.com/dms/image/v2/C5603AQGqU0TGXgSkWQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1615313555872?e=1734566400&v=beta&t=1Jx8FAN6ARnw4yF7ntqnlgKCwo_CVvw9J8ST8b4aUV0"} 
//               style={{
//                 width:30,
//                 height:30,
//                 borderRadius: 20}} />
//       <div style={{fontSize:10, marginLeft:10}}>
//         <b>
//           {uname}
//         </b>
//         <div>{subtitle}</div>
//         {(time !== undefined) ? <div style={{display: "flex"}}>
//           {time}
//           <img src="data:image/png;base64,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" 
//           style={{width:10, height:10}}
//           />
//         </div>:null}
//       </div>
//     </div>
//     <div style={{fontSize: 12}}> 
//       {content}
//     </div>
//   </div>
//   )
// }

// function ProfileComponent(){
//   return (
//     <div>To be done</div>
//   )
// }

// const ToggleMessage = () => {
//   let [notificationCount, setNotificationCount ] = useState(0);

//   function increment(){
//     setNotificationCount(notificationCount+1) ;
//   }

//   return (
//       <div>
//           <button onClick={increment}>Toggle Message</button>
//           {notificationCount}
//       </div>
//   );
// };

export default ReactBasics
