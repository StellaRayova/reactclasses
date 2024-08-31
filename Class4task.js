function Class4task() {
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
{example["web-app"].servlet[0]["servlet-name"]}<br/>
{example["web-app"].servlet[0]["servlet-class"]}<br/>
{example["web-app"].servlet[0]["init-param"]["cachePagesDirtyRead"]}<br/>
{example["web-app"].servlet[0]["init-param"]["searchEngineListTemplate"]}<br/>
{example["web-app"].servlet[0]["init-param"]["searchEngineFileTemplate"]}<br/>
{example["web-app"].servlet[0]["init-param"]["dataStoreInitConns"]}<br/>
{example["web-app"].servlet[0]["init-param"]["dataStoreMaxConns"]}<br/>
{example["web-app"].servlet[0]["init-param"]["dataStoreConnUsageLimit"]}<br/>
{example["web-app"].servlet[0]["init-param"]["dataStoreLogLevel"]}<br/>
{example["web-app"].servlet[0]["init-param"]["maxUrlLength"]}<br/>
{example["web-app"].servlet[1]["servlet-name"]}<br/>
{example["web-app"].servlet[1]["servlet-class"]}<br/>
{example["web-app"].servlet[1]["init-param"]["mailHost"]}<br/>
{example["web-app"].servlet[1]["init-param"]["mailHostOverride"]}<br/>
{example["web-app"].servlet[2]["servlet-name"]}<br/>
{example["web-app"].servlet[2]["servlet-class"]}<br/>
{example["web-app"].servlet[3]["servlet-name"]}<br/>
{example["web-app"].servlet[3]["servlet-class"]}<br/>
{example["web-app"].servlet[4]["servlet-name"]}<br/>
{example["web-app"].servlet[4]["servlet-class"]}<br/>
{example["web-app"].servlet[4]["init-param"]["log"]}<br/>
{example["web-app"].servlet[4]["init-param"]["adminGroupID"]}<br/>
{example["web-app"]["servlet-mapping"].cofaxAdmin}<br/>
{example["web-app"]["servlet-mapping"].cofaxEmail}<br/>
{example["web-app"]["servlet-mapping"].cofaxAdmin}<br/>
{example["web-app"]["servlet-mapping"].fileServlet}<br/>
{example["web-app"]["servlet-mapping"].cofaxTools}<br/>
{example["web-app"]["taglib"]["taglib-uri"]}<br/>
{example["web-app"]["taglib"]["taglib-location"]}










        </>


    )
}
export default Class4task;