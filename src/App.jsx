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
    <section id="main">
        <div className="container">
            <div className="main_wrapper">
            
                <h2 className="heading">To-do-list</h2>
              
              <div className="main_item">
                    <input className="input" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="enter your to do" /><br /><br />
                    <input className="input" value={caption} onChange={(e)=>setCaption(e.target.value)} type="text" placeholder="caption" /><br /><br />
                    <div className="btn">
                    {
                      show?
                      <button className="update_edt" onClick={handleUpdate}>update</button>

                      :
                      <button className="update_edt" onClick={handleBtn}>Add Todo</button>

                    }

                    </div>
                    {
                      arr.map((item,index)=>(
                        <div>
                          <li className="todoShow">1: {item.name}</li>
                          <li className="todoShow">2: {item.caption}</li>

                          <div className="handle_btn">
                              <button onClick={()=>handleEdit(item,index)}>edit</button>
                              <button className="delete" onClick={()=>handleDelete(index)}>delete</button>
                            
                          </div>
                        </div>
                      ))
                    }

              </div>
            </div>
        </div>
    </section>
  
  )
}

export default App