function Cls4task(){

    const json  ={
        "problems": [{
            "Diabetes":[{
                "medications":[{
                    "medicationsClasses":[{
                        "className":[{
                            "associatedDrug":[{
                                "name":"asprin",
                                "dose":"",
                                "strength":"500 mg"
                            }],
                            "associatedDrug#2":[{
                                "name":"somethingElse",
                                "dose":"",
                                "strength":"500 mg"
                            }]
                        }],
                        "className2":[{
                            "associatedDrug":[{
                                "name":"asprin",
                                "dose":"",
                                "strength":"500 mg"
                            }],
                            "associatedDrug#2":[{
                                "name":"somethingElse",
                                "dose":"",
                                "strength":"500 mg"
                            }]
                        }]
                    }]
                }],
                "labs":[{
                    "missing_field": "missing_value"
                }]
            }],
            "Asthma":[{}]
        }]}

    return(
        <>
                <>
                {json.problems.map((el)=>
                {
                    return(
                        <>
                        {el.Diabetes.map((item)=>{
                            return(
                                <>
                                {item.medications.map((hi)=>{
                                    return(
                                        <>
                                        {hi.medicationsClasses.map((hello)=>{
                                            return(
                                                <>
                                                {hello.className.map((ho)=>{
                                                    return(
                                                        <>
                                                        {ho.associatedDrug.map((e)=>{
                                                            return(
                                                                <>
                                                                {e.name}<br></br>
                                                                {e.strength}<br></br>
                                                                {ho["associatedDrug#2"].map((e)=>
                                                                {
                                                                    return(
                                                                        <>
                                                                        {e.name}<br></br>
                                                                        {e.strength}
                                                                        {hello.className2.map((g)=>{
                                                                            return(
                                                                                <>
                                                                                {g.associatedDrug.map((h)=>{
                                                                                    return(
                                                                                        <><br></br>
                                                                                        {h.name}<br></br>
                                                                                        {h.strength}
                                                                                        {g["associatedDrug#2"].map((i)=>
                                                                                        {
                                                                                            return(
                                                                                                <><br></br>
                                                                                                {i.name}<br></br>
                                                                                                {i.strength}
                                                                                                {item.labs.map((j)=>{
                                                                                                    return(
                                                                                                        <><br></br>
                                                                                                        {j.missing_field}
                                                                                                        {el.Asthma.map((k)=>{
                                                                                                            return(
                                                                                                                <><br></br>
                                                                                                                {k.Asthma}
                                                                                                                </>
                                                                                                            )
                                                                                                        })}
                                                                                                        </>
                                                                                                    )
                                                                                                })}
                                                                                                
                                                                                                </>
                                                                                            )
                                                                                        })}
                                                                                        </>
                                                                                    )
                                                                                }
                                                                                )}
                                                                                </>
                                                                            )
                                                                        })}
                                                                        </>
                                                                    )
                                                                })}
                                                                </>
                                                            )
                                                        })}
                                                        </>
                                                    )
                                                })}
                                                </>
                                            )
                                        })}
                                        </>
                                    )
                                })}
                                </>
                            )
                        })}
                        </>
                    )
                })}
                </>
            
        

        </>
    )
}
export default Cls4task;