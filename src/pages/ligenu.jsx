import { useEffect, useState } from "react"
import { findTimeWindow } from "../utils/findTimeWindow";
import { formatTime } from "../utils/formatTime";

export function LigeNu() {

    const [nowTime, setNowTime] = useState(undefined)

// Opret et JS data objeckt
    const date = new Date()
    const year = date.getFullYear()
//0-11
    let month = date.getMonth()+ 1 // month tæller fra null så altid + 1
    if (month < 10){
        month ="0"+ month
    }
// 1-31. Hvis dage er under 2 cifre skal der være 0 foran
    let day = date.getDate()
    if (day < 10){
        day ="0" + day
    }
//  Vi skal lave en function der kan finde et objekt som ligger
// inden for det tidspunkt vi har lige nu. 
// eks. er den 20.23 så finder den objektet mellem 20-21
    console.log(day);
    const priceClass ="DK1"

    useEffect(() => { //scope
        
        async function getData() {
            try {
                const res = await fetch (`https://www.elprisenligenu.dk/api/v1/prices/${year}/${month}-${day}_${priceClass}.json `)
                if(!res.ok){
                    throw new Error('Failed to fetch')}
                const data = await res.json()
                const nowData = data.filter((item) => findTimeWindow(item.time_start, item.time_end))
                if (nowData){
                    setNowTime(nowData[0])
                }
                console.log("Data:", data);
                console.log("Single data", nowData);
            }
            
            catch(err){

                console.log(err);
                
            }
        }
        getData()
    },[])
// vise tidspunkt lige nu
    return (
        <section>
        <h1>ELprisen Lige Nu </h1>
        <div>
            <h3>{nowTime?.DKK_per_kWh}kr pr. kwh</h3>
        </div>
        <h4>mellem {formatTime(nowTime?.time_start)}-{formatTime(nowTime?.time_end)}</h4>
        </section>
    )
}