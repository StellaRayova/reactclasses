function Prac8(){
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
{fun.menu.popup.menuitem[0].value}<br/>
{fun.menu.popup.menuitem[0].onclick}<br/>
{fun.menu.popup.menuitem[1].value}<br/>
{fun.menu.popup.menuitem[1].onclick}


</>
   )
}
export default Prac8;