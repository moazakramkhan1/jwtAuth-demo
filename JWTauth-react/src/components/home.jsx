import { useEffect,useState } from "react";

export const Home = ()=>{
    const [name,setName] = useState('')
    useEffect(() => {
     (
     async () => {
       const response = await fetch('http://localhost:8000/api/user', {
         headers: { 'Content-Type': 'application/json' },
         credentials: 'include',
       });
       if(response.status === 401){
            setName("")
       }
       else{
       const content = await response.json();
           setName(content.name)
       }
     }
     )();
   });
   let menu

   if(name === ""){
      menu = (
        <div>You are not LoggedIn</div>
      )
   }
   else{
    menu = (
        <div>hi {name}</div>
    )
   }
   return (
      <div>{menu}</div>
   )
}