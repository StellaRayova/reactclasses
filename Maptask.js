function Maptask() {
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

    const glossary = {
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


    const demo = {
        "problems": [{
            "Diabetes": [{
                "medications": [{
                    "medicationsClasses": [{
                        "className": [{
                            "associatedDrug": [{
                                "name": "asprin",
                                "dose": "",
                                "strength": "500 mg"
                            }],
                            "associatedDrug#2": [{
                                "name": "somethingElse",
                                "dose": "",
                                "strength": "500 mg"
                            }]
                        }],
                        "className2": [{
                            "associatedDrug": [{
                                "name": "asprin",
                                "dose": "",
                                "strength": "500 mg"
                            }],
                            "associatedDrug#2": [{
                                "name": "somethingElse",
                                "dose": "",
                                "strength": "500 mg"
                            }]
                        }]
                    }]
                }],
                "labs": [{
                    "missing_field": "missing_value"
                }]
            }],
            "Asthma": [{}]
        }]
    }

    const ex = [
        {
        order_id:1,
        status:1
        },
        {
        order_id:2,
        status:2
        }
        ]



    return (
        <>
{ex.map((e) => (
    <p>Status: {e.status === 1 ? 'Pending' : (e.status === 2 ? 'Completed' : 'Unknown')}</p>
    ))}

            {/* {example["web-app"].servlet.map((e) => (<>
                <p> name:{e['servlet-name']} </p>
                <p> class:{e['servlet-class']} </p>


            </>
            ))} */}
            {/* <>
                {fun.menu.popup.menuitem.map((e) => (
                    <>
                        <ul>
                            <li> value:{e.value} </li>
                            <li> onclick:{e.onclick} </li>
                        </ul>
                    </>
                )
                )}

            </>

            <>
                {fun.menu.popup.menuitem.forEach((e) => (
                    <>
                        <ul>
                            <li> value:{e.value} </li>
                            <li> onclick:{e.onclick} </li>
                        </ul>
                    </>
                )
                )}
            </>

            {glossary.GlossDiv.GlossList.GlossEntry.GlossDef.GlossSeeAlso.map((e) => (
                <>
                    <ul>
                        <li> {e} </li>
                    </ul>
                </>
            ))}

            {demo.problems.Diabetes.medications.medicationsClasses.className.map((e) => (
                <>
                    <ul>
                        <li>{e.associatedDrug}</li>
                    </ul>

                </>
            ))} */}

</>
            )
}
            export default Maptask;
