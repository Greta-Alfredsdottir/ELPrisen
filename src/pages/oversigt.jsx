import { useEffect, useState } from "react"

export function Oversigt() {
    const [oversigt, setOversigt] = useState()
    const url = ("https://www.elprisenligenu.dk/api/v1/prices/[ÅR]/[MÅNED]-[DAG]_[PRISKLASSE].json ")
        useEffect(() => {
            async function oversigt() {
                const res =await fetch(url)
                const data = await res.json()
                setOversigt(data)
            }
            oversigt
        }, [])
    

    return(
        <section>
            <h1>Oversigt</h1>
            <div>{oversigt}</div>

        </section>

    )
}