function Prac9(){
    const fun= {
        "menu": {
            "id": "file",
            "value": "File",
            "popup": {
              "menuitem": [
                {"value": "New", "onclick": "CreateNewDoc()"},
                {"value": "Open", "onclick": "OpenDoc()"},
                {"value": "Close", "onclick": "CloseDoc()"}
              ]
            }
          }}
   
    return(
        <>
        {fun.menu.popup.menuitem.map((e)=>(
            <>
                    {e.value}
                    {e.onclick}

        </>
        ))}
        
        </>
    )
}
export default Prac9;