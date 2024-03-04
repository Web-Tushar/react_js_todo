import { useState } from "react";

function App() {
  let [name,setName] = useState("");
  let [caption,setCaption] = useState("");
  let [show,setShow] = useState(false);
  let [index,setIndex] = useState("");


  let [arr,setArr] = useState([]);

  let  handleBtn=() =>{
        let arr2=[...arr]
        arr2.push({
          name:name,
          caption:caption
        })
        setArr(arr2)
         setName("")
         setCaption("")

  }
  let handleDelete = (index) =>{
     let arr2=[...arr]
     arr2.splice(index,1)
     setArr(arr2)

  }
  let handleEdit =(item,index) =>{
    setName(item.name)
    setCaption(item.caption)
    setShow(true)
    setIndex(index)

  }

  let handleUpdate = ()=>{
   let arr2=[...arr]
  arr2[index]=({
  name:name,
  caption:caption,
})
   setArr(arr2)
   setShow(false)
   setName("")
   setCaption("")
}

  return (
    <>
      <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="name" /><br /><br />
      <input value={caption} onChange={(e)=>setCaption(e.target.value)} type="text" placeholder="caption" /><br /><br />
      {
        show?
        <button onClick={handleUpdate}>update</button>

        :
        <button onClick={handleBtn}>Add Todo</button>

      }
      {
        arr.map((item,index)=>(
          <div>
            <li>{item.name}</li>
            <li>{item.caption}</li>
            <button onClick={()=>handleEdit(item,index)}>edit</button>
            <button onClick={()=>handleDelete(index)}>delete</button>
          </div>
        ))
      }
    </>
  )
}

export default App

    





