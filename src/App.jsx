import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import { nanoid } from 'nanoid';
import swal from 'sweetalert';


function App() {

    const [item, setItem] = useState("")
    const [items, setItems] = useState([])
    const [editId, setEditId] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (item.trim().length === 0) {
            return
        }
        const newItem = {
            id: nanoid(),
            text: item,
            done: false
        }

        let newTasks = []

        if (editId) {
            items?.forEach((value, index) => {
                if (index == editId) {
                    newTasks = items
                    newTasks[index] = newItem
                    setItems(newTasks)
                    setEditId(null)
                }
            })
        } else {
            console.log("running..")
            console.log(items)
            setItems((prev) => ([...prev, newItem]))
        }

        console.log(items)
        setItem("")

    }

    const handleDelete = (id) => {
        console.log(id)

        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to Delete task",
            icon: "warning",
            dangerMode: true,
        })
            .then(willDelete => {
                if (willDelete) {
                    swal("Deleted!", "Your task has been deleted!", "success");
                    console.log(item.length)
                    if(items.length === 1){
                        console.log(item.length)
                        
                        localStorage.setItem("tasks", [])
                    }
                    setItems(items.filter(item => item.id !== id))
                }
            });

    }

    const handleEdit = (id) => {

        const selected = items.find(item => item.id === id);
        if (!selected.done) {
            setItem(selected.text);
        }


        const index = items.findIndex(item => item.id === id)
        setEditId(index)



        // handleDelete(id)  
    };



    const handlecChecked = (id) => {

        setItems(items?.map(item =>
            item.id === id ? { ...item, done: !item.done } : item
        ))

    }


    // data save on localStorage

    useEffect(() => {
        if (items?.length > 0) {
            let tasks = JSON.stringify(items)
            localStorage.setItem("tasks", tasks)
        }
    }, [items])

    useEffect(() => {
        let tasks = localStorage.getItem("tasks")
        tasks = JSON.parse(tasks)
        if (tasks) {
            setItems(tasks)
        } else {
            tasks = []
            setItems(tasks)
        }
    }, [])

    return (
        <>
            {/* <Navbar /> */}
            <form onSubmit={handleSubmit} className="  min-h-screen  px-5 p-0 pt-40 sm:p-30 md:p-30  mx-auto rounded-lg  w-full   bg-gradient-to-br from-[#dfe6ff] to-[#eadcff]
">

                <div className='text-center font-bold py-5 w-[94%] sm:w-[94%] md:w-[80%] lg:w-[80%] mx-auto  flex-wrap p-4 
                bg-white/60 backdrop-blur-xl rounded-3xl shadow-lg border border-white/30
'>
                    <h1 className='text-2xl class="text-gray-900" font-bold'>TODO LIST</h1>
                    <p className='text-sm class="text-gray-500" my-2'>Manage Your  todos at one on place</p>
                    <h2 className=' font-bold text-start mx-3'> Add Todo</h2>
                    <div className='mt-5  flex justify-between gap-3'>
                        <input onChange={(e) => setItem(e.target.value)}
                            type='text' name='task' value={item}
                            className='border border-gray-100 
                             bg-white rounded-2xl shadow-md p-1  w-3/4 flex h-10  text-sm justify-self-start'
                            placeholder='Add a new task'
                        />
                        <div className='me-2'>
                            <button className='bg-blue-600 hover:bg-blue-700 text-white text-[0.7rem] sm:text-[0.9rem] md:text-[1rem]  py-[0.6rem] px-[0.5rem]
                             sm:py-[0.6rem] sm:px-[0.9rem] rounded-xl sm:rounded-xl  md:rounded-lg ' type='Submit'>
                                Add Task
                            </button>

                        </div>
                    </div>
                    <div className='mt-10 text-start'>
                        <ul className='flex-wrap justify-between  p-2  rounded-lg'>
                            {items?.map((item) => (
                                <li key={item.id} className='flex w-full justify-between gap-10 p-2 rounded-lg'>

                                    <div className='flex'>
                                        <input type='checkbox'
                                            checked={item.done}
                                            onChange={() => handlecChecked(item.id)}
                                            className='mr-2  accent-blue-600'></input>

                                        <p className='text-gray-900' style={{ textDecoration: item.done ? "line-through" : "none" }}>{item.text}</p>
                                    </div>


                                    <div className='flex gap-4'>

                                        <button onClick={() => handleDelete(item.id)}
                                            className='bg-red-500 hover:bg-red-600 text-white text-sm flex justify-self-end p-4 py-2  rounded '>
                                            Delete
                                        </button>

                                        <button type='button' onClick={() => handleEdit(item.id)}
                                            className='bg-blue-500 hover:bg-blue-600 text-white text-sm flex justify-self-end p-4 py-2 px-4  rounded '>
                                            Edit
                                        </button>

                                    </div>



                                </li>


                            ))}

                        </ul>
                    </div>

                </div>
            </form>
        </>
    )
}

export default App
