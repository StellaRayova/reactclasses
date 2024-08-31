function Class4() {
    const values = {
        name: 'FirstName',
        last: 'Lastname',
        education: [
            {
                university: 'JNTU',
                Grade: 8.4,
                YearofPassing: 2021
            }
        ]
    }

    const glossary= {
        "title": "example glossary",
        "GlossDiv": {
            "title": "S",
            "GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
                    "SortAs": "SGML",
                    "GlossTerm": "Standard Generalized Markup Language",
                    "Acronym": "SGML",
                    "Abbrev": "ISO 8879:1986",
                    "GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
                        "GlossSeeAlso": ["GML", "XML"]
                    },
                    "GlossSee": "markup"
                }
            }
        }
    }

    const fun = {
        "menu": {
            "id": "file",
            "value": "File",
            "popup": {
                "menuitem": [
                    { "value": "New", "onclick": "CreateNewDoc()" },
                    { "value": "Open", "onclick": "OpenDoc()" },
                    { "value": "Close", "onclick": "CloseDoc()" }
                ]
            }
        }
    }


    const text = {
        "menu": {
            "header": "SVG Viewer",
            "items": [
                { "id": "Open" },
                { "id": "OpenNew", "label": "Open New" },
                { "id": "ZoomIn", "label": "Zoom In" },
                { "id": "ZoomOut", "label": "Zoom Out" },
                { "id": "OriginalView", "label": "Original View" },
                { "id": "Quality" },
                { "id": "Pause" },
                { "id": "Mute" },
                { "id": "Find", "label": "Find..." },
                { "id": "FindAgain", "label": "Find Again" },
                { "id": "Copy" }
            ]
        }
    }

    const example = {
        "web-app": {
            "servlet": [
                {
                    "servlet-name": "cofaxCDS",
                    "servlet-class": "org.cofax.cds.CDSServlet",
                    "init-param": {
                        "cachePagesDirtyRead": 10,
                        "searchEngineListTemplate": "forSearchEnginesList.htm",
                        "searchEngineFileTemplate": "forSearchEngines.htm",
                        "dataStoreInitConns": 10,
                        "dataStoreMaxConns": 100,
                        "dataStoreConnUsageLimit": 100,
                        "dataStoreLogLevel": "debug",
                        "maxUrlLength": 500
                    }
                },
                {
                    "servlet-name": "cofaxEmail",
                    "servlet-class": "org.cofax.cds.EmailServlet",
                    "init-param": {
                        "mailHost": "mail1",
                        "mailHostOverride": "mail2"
                    }
                },
                {
                    "servlet-name": "cofaxAdmin",
                    "servlet-class": "org.cofax.cds.AdminServlet"
                },
    
                {
                    "servlet-name": "fileServlet",
                    "servlet-class": "org.cofax.cds.FileServlet"
                },
                {
                    "servlet-name": "cofaxTools",
                    "servlet-class": "org.cofax.cms.CofaxToolsServlet",
                    "init-param": {
                        "log": 1,
                        "adminGroupID": 4,
                    }
                }],
            "servlet-mapping": {
                "cofaxCDS": "/",
                "cofaxEmail": "aemail",
                "cofaxAdmin": "/admin",
                "fileServlet": "static",
                "cofaxTools": "tools"
            },
    
            "taglib": {
                "taglib-uri": "cofax.tld",
                "taglib-location": "/WEB-INF/tlds/cofax.tld"
            }
        }
    }



    return (
        <>
            {values.name}
            {values.education[0].university} <br />
            {values.education[0].Grade}<br />
            {values.education[0].YearofPassing}<br />
            {glossary.GlossDiv.title}<br />
            {glossary.GlossDiv.GlossList.GlossEntry.ID}<br />
            {glossary.GlossDiv.GlossList.GlossEntry.SortAs}<br />
            {glossary.GlossDiv.GlossList.GlossEntry.GlossTerm}<br />
            {glossary.GlossDiv.GlossList.GlossEntry.Acronym}<br />
            {glossary.GlossDiv.GlossList.GlossEntry.Abbrev}<br />
            {glossary.GlossDiv.GlossList.GlossEntry.GlossDef.para}<br />
            {fun.menu.id}<br />
            {fun.menu.value}<br />
            {fun.menu.popup.menuitem[0].value}<br />
            {fun.menu.popup.menuitem[0].onclick}<br />
            {fun.menu.popup.menuitem[1].value}<br />
            {fun.menu.popup.menuitem[1].onclick}<br />
            {fun.menu.popup.menuitem[2].value}<br />
            {fun.menu.popup.menuitem[2].onclick}<br />
            {text.menu.header}<br/>
            {text.menu.items[0].id}<br/>
            {text.menu.items[1].label}<br/>
            {text.menu.items[1].id}<br/>
            {text.menu.items[2].label}<br/>
            {text.menu.items[2].id}<br/>
            {text.menu.items[3].label}<br/>
            {text.menu.items[3].id}<br/>
            {text.menu.items[4].label}<br/>
            {text.menu.items[4].id}<br/>
            {text.menu.items[5].id}<br/>
            {text.menu.items[6].id}<br/>
            {text.menu.items[7].id}<br/>
            {text.menu.items[8].id}<br/>
            {text.menu.items[8].label}<br/>
            {text.menu.items[9].id}<br/>
            {text.menu.items[9].label}<br/>
            {text.menu.items[10].id}<br/>



        </>

    )
}
export default Class4;



