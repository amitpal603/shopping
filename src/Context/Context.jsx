import React, { Children, createContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'




 export const Ecart = createContext() 

 export function Context({children}) {
    const [CartData,setData] = useState([])
    const [search,setSearch] = useState("")
    const [input,setInput] = useState("")
    const [cart,setCart] = useState([])
    const [qCount,setQcount] = useState(1)
    const [cartSearch,setCartSearch] = useState("")

    const Handle = (e) =>{
        e.preventDefault()
    }
    const url = "https://fakestoreapiserver.reactbd.org/api/products/"
    const ApiDataCart = async() =>{
        try {
            const res = await fetch(url)
            const apiData = await res.json()
            setData(apiData.data)
        } catch (error) {
            console.log(error); 
        }
    }

    useEffect(() => {
        ApiDataCart()
    },[])

    const HandleClick = () => {
        setSearch(input)
        setCartSearch(input)
        if(input === "")
        {
            alert("Enter the product name..")
        }
    }
    const filterData = CartData.filter((item) => {
        const searchTerm = search.toLowerCase()
        if(searchTerm === "") return true

        return (
            item.title.toLowerCase().includes(searchTerm) ||
            item.brand.toLowerCase().includes(searchTerm) 
        )
    })
    const Click = (id) =>{
        const update = filterData.find((value,index) => index === id)
        setCart((pre) => [...pre,update])
        toast.success("Add Cart")
        
    }


    const HandleDelete = (id) => {
        const del = cart.filter((value,index) => index !== id)
        setCart(del)
        toast.error("remove cart")
    }
    //increment fun to cart
    const HandleIncre = (index) => {
    
};

    // discrement fun. to cart
    const HandleDcre = (id) =>{

    }

    const cartData = cart.filter((item) => {
        const searchTerm = cartSearch.toLowerCase()
        if(searchTerm === "") return cart

        return (
            item.title.toLowerCase().includes(searchTerm) ||
            item.brand.toLowerCase().includes(searchTerm) 
        )
    })
    const value = {
       CartData,
       Handle,
       setSearch,
       input,
       setInput,
       HandleClick,
       filterData,
       Click,
       cart,
       HandleDelete,
       HandleIncre,
       qCount,
       cartData
    }

  return <Ecart.Provider value={value}>{children}</Ecart.Provider>
}

export default Context
