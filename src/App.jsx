// import { useEffect, useState } from 'react'
// import Navbar from './components/Navbar.jsx'
// import { nanoid } from 'nanoid';
// import swal from 'sweetalert';


// function App() {

//     const [item, setItem] = useState("")
//     const [items, setItems] = useState([])
//     const [editId, setEditId] = useState(null)

//     const handleSubmit = (e) => {
//         e.preventDefault()

//         if (item.trim().length === 0) {
//             return
//         }
//         const newItem = {
//             id: nanoid(),
//             text: item,
//             done: false
//         }

//         let newTasks = []

//         if (editId) {
//             items?.forEach((value, index) => {
//                 if (index == editId) {
//                     newTasks = items
//                     newTasks[index] = newItem
//                     setItems(newTasks)
//                     setEditId(null)
//                 }
//             })
//         } else {
//             console.log("running..")
//             console.log(items)
//             setItems((prev) => ([...prev, newItem]))
//         }

//         console.log(items)
//         setItem("")

//     }

//     const handleDelete = (id) => {
//         console.log(id)

//         swal({
//             title: "Are you sure?",
//             text: "Are you sure that you want to Delete task",
//             icon: "warning",
//             dangerMode: true,
//         })
//             .then(willDelete => {
//                 if (willDelete) {
//                     swal("Deleted!", "Your task has been deleted!", "success");
//                     console.log(item.length)
//                     if(items.length === 1){
//                         console.log(item.length)
                        
//                         localStorage.setItem("tasks", [])
//                     }
//                     setItems(items.filter(item => item.id !== id))
//                 }
//             });

//     }

//     const handleEdit = (id) => {

//         const selected = items.find(item => item.id === id);
//         if (!selected.done) {
//             setItem(selected.text);
//         }


//         const index = items.findIndex(item => item.id === id)
//         setEditId(index)



//         // handleDelete(id)  
//     };



//     const handlecChecked = (id) => {

//         setItems(items?.map(item =>
//             item.id === id ? { ...item, done: !item.done } : item
//         ))

//     }


//     // data save on localStorage

//     useEffect(() => {
//         if (items?.length > 0) {
//             let tasks = JSON.stringify(items)
//             localStorage.setItem("tasks", tasks)
//         }
//     }, [items])

//     useEffect(() => {
//         let tasks = localStorage.getItem("tasks")
//         tasks = JSON.parse(tasks)
//         if (tasks) {
//             setItems(tasks)
//         } else {
//             tasks = []
//             setItems(tasks)
//         }
//     }, [])

//     return (
//         <>
//             {/* <Navbar /> */}
//             <form onSubmit={handleSubmit} className="  min-h-screen  px-5 p-0 pt-40 sm:p-30 md:p-30  mx-auto rounded-lg  w-full   bg-gradient-to-br from-[#dfe6ff] to-[#eadcff]
// ">

//                 <div className='text-center font-bold py-5 w-[94%] sm:w-[94%] md:w-[80%] lg:w-[80%] mx-auto  flex-wrap p-4 
//                 bg-white/60 backdrop-blur-xl rounded-3xl shadow-lg border border-white/30
// '>
//                     <h1 className='text-2xl class="text-gray-900" font-bold'>TODO LIST</h1>
//                     <p className='text-sm class="text-gray-500" my-2'>Manage Your  todos at one on place</p>
//                     <h2 className=' font-bold text-start mx-3'> Add Todo</h2>
//                     <div className='mt-5  flex justify-between gap-3'>
//                         <input onChange={(e) => setItem(e.target.value)}
//                             type='text' name='task' value={item}
//                             className='border border-gray-100 
//                              bg-white rounded-2xl shadow-md p-1  w-3/4 flex h-10  text-sm justify-self-start'
//                             placeholder='Add a new task'
//                         />
//                         <div className='me-2'>
//                             <button className='bg-blue-600 hover:bg-blue-700 text-white text-[0.7rem] sm:text-[0.9rem] md:text-[1rem]  py-[0.6rem] px-[0.5rem]
//                              sm:py-[0.6rem] sm:px-[0.9rem] rounded-xl sm:rounded-xl  md:rounded-lg ' type='Submit'>
//                                 Add Task
//                             </button>

//                         </div>
//                     </div>
//                     <div className='mt-10 text-start'>
//                         <ul className='flex-wrap justify-between  p-2  rounded-lg'>
//                             {items?.map((item) => (
//                                 <li key={item.id} className='flex w-full justify-between gap-10 p-2 rounded-lg'>

//                                     <div className='flex'>
//                                         <input type='checkbox'
//                                             checked={item.done}
//                                             onChange={() => handlecChecked(item.id)}
//                                             className='mr-2  accent-blue-600'></input>

//                                         <p className='text-gray-900' style={{ textDecoration: item.done ? "line-through" : "none" }}>{item.text}</p>
//                                     </div>


//                                     <div className='flex gap-4'>

//                                         <button onClick={() => handleDelete(item.id)}
//                                             className='bg-red-500 hover:bg-red-600 text-white text-sm flex justify-self-end p-4 py-2  rounded '>
//                                             Delete
//                                         </button>

//                                         <button type='button' onClick={() => handleEdit(item.id)}
//                                             className='bg-blue-500 hover:bg-blue-600 text-white text-sm flex justify-self-end p-4 py-2 px-4  rounded '>
//                                             Edit
//                                         </button>

//                                     </div>



//                                 </li>


//                             ))}

//                         </ul>
//                     </div>

//                 </div>
//             </form>
//         </>
//     )
// }

// export default App


import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import { nanoid } from 'nanoid';
import swal from 'sweetalert';
import { FaPlus, FaEdit, FaTrash, FaCheck, FaRegCircle, FaRegCheckCircle } from 'react-icons/fa';

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
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-4 md:p-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-10 pt-10">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Todo List
                        </h1>
                        <p className="text-gray-600 mt-3 text-lg">
                            Organize your tasks and boost your productivity
                        </p>
                    </div>

                    {/* Main Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 backdrop-blur-lg border border-gray-100">
                        {/* Add Task Section */}
                        <div className="mb-10">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                <FaPlus className="text-indigo-500" />
                                {editId ? 'Edit Task' : 'Add New Task'}
                            </h2>
                            <form onSubmit={handleSubmit} className="flex gap-3">
                                <div className="flex-1">
                                    <input 
                                        onChange={(e) => setItem(e.target.value)}
                                        type="text" 
                                        name="task" 
                                        value={item}
                                        className="w-full px-6 py-4 rounded-xl border border-gray-200 
                                                 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                                                 transition-all duration-200 outline-none text-gray-800
                                                 placeholder:text-gray-400 bg-gray-50"
                                        placeholder="What needs to be done?"
                                        autoFocus
                                    />
                                </div>
                                <button 
                                    className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 
                                             hover:to-purple-600 text-white font-medium px-8 rounded-xl
                                             transition-all duration-200 transform hover:-translate-y-0.5 
                                             shadow-lg hover:shadow-xl flex items-center gap-2 whitespace-nowrap"
                                    type="Submit"
                                >
                                    <FaPlus />
                                    {editId ? 'Update Task' : 'Add Task'}
                                </button>
                            </form>
                        </div>

                        {/* Task List Section */}
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    Your Tasks ({items.length})
                                </h2>
                                <div className="text-sm text-gray-500">
                                    {items.filter(item => item.done).length} completed • {items.filter(item => !item.done).length} pending
                                </div>
                            </div>

                            {items.length === 0 ? (
                                <div className="text-center py-16">
                                    <div className="text-gray-300 mb-4">
                                        <FaRegCircle className="text-6xl mx-auto opacity-20" />
                                    </div>
                                    <h3 className="text-xl font-medium text-gray-400 mb-2">
                                        No tasks yet
                                    </h3>
                                    <p className="text-gray-400">
                                        Add your first task above to get started!
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {items?.map((item) => (
                                        <div 
                                            key={item.id} 
                                            className={`group flex items-center justify-between p-5 rounded-xl border
                                                      transition-all duration-200 hover:shadow-md
                                                      ${item.done 
                                                        ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-100' 
                                                        : 'bg-gray-50 border-gray-100 hover:border-indigo-100'
                                                      }`}
                                        >
                                            <div className="flex items-center gap-4 flex-1">
                                                <button
                                                    onClick={() => handlecChecked(item.id)}
                                                    className={`w-8 h-8 rounded-full flex items-center justify-center
                                                             transition-all duration-200 transform hover:scale-110
                                                             ${item.done 
                                                                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                                                                : 'border-2 border-gray-300 hover:border-indigo-400'
                                                             }`}
                                                >
                                                    {item.done ? <FaCheck size={14} /> : <FaRegCircle size={14} />}
                                                </button>
                                                
                                                <div className="flex-1">
                                                    <p 
                                                        className={`text-lg font-medium transition-all duration-200
                                                                ${item.done 
                                                                    ? 'text-gray-500 line-through' 
                                                                    : 'text-gray-800'
                                                                }`}
                                                    >
                                                        {item.text}
                                                    </p>
                                                    <div className="flex items-center gap-3 mt-1">
                                                        <span className={`text-xs px-3 py-1 rounded-full ${item.done 
                                                            ? 'bg-green-100 text-green-700' 
                                                            : 'bg-indigo-100 text-indigo-700'
                                                        }`}>
                                                            {item.done ? 'Completed' : 'Pending'}
                                                        </span>
                                                        <span className="text-xs text-gray-500">
                                                            {new Date().toLocaleDateString()}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 
                                                          transition-all duration-200">
                                                {!item.done && (
                                                    <button 
                                                        type="button" 
                                                        onClick={() => handleEdit(item.id)}
                                                        className="p-3 rounded-lg bg-blue-50 text-blue-600 
                                                                 hover:bg-blue-100 transition-colors duration-200
                                                                 transform hover:scale-105"
                                                        title="Edit task"
                                                    >
                                                        <FaEdit />
                                                    </button>
                                                )}
                                                
                                                <button 
                                                    onClick={() => handleDelete(item.id)}
                                                    className="p-3 rounded-lg bg-red-50 text-red-600 
                                                             hover:bg-red-100 transition-colors duration-200
                                                             transform hover:scale-105"
                                                    title="Delete task"
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Stats Footer */}
                            {items.length > 0 && (
                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <div className="flex flex-wrap items-center justify-between gap-4">
                                        <div className="text-sm text-gray-500">
                                            Tip: Click the circle to mark tasks as complete
                                        </div>
                                        <div className="flex gap-4">
                                            <button 
                                                onClick={() => {
                                                    const allCompleted = items.every(item => item.done);
                                                    setItems(items.map(item => ({ ...item, done: !allCompleted })));
                                                }}
                                                className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                                            >
                                                {items.every(item => item.done) ? 'Unmark all' : 'Mark all complete'}
                                            </button>
                                            {items.some(item => item.done) && (
                                                <button 
                                                    onClick={() => {
                                                        swal({
                                                            title: "Clear completed?",
                                                            text: "This will remove all completed tasks",
                                                            icon: "warning",
                                                            dangerMode: true,
                                                        }).then(willDelete => {
                                                            if (willDelete) {
                                                                setItems(items.filter(item => !item.done));
                                                                swal("Cleared!", "Completed tasks removed!", "success");
                                                            }
                                                        });
                                                    }}
                                                    className="text-sm text-red-600 hover:text-red-700 font-medium"
                                                >
                                                    Clear completed
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Footer Note */}
                    <div className="text-center mt-8 text-gray-500 text-sm">
                        <p>Your tasks are automatically saved to your browser's local storage</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App