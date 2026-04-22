import { useEffect, useState } from "react"

export function History() {
    const [history, setHistory] = useState();
    const url = "https://www.elprisenligenu.dk/api/v1/prices/[ÅR]/[MÅNED]-[DAG]_[PRISKLASSE].json "

    useEffect(()=> {
        async function history(){
            const res = await fetch(url)
            if(!res.ok){
                    throw new Error('Failed to fetch')}
            const data = await res.json()
            setData(data)
        }
        history()
    },[])

    return(
        <>
            <h1>History</h1>
           
        </>
        
    )
}