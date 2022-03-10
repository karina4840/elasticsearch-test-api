// ============== importing necessary modules==============

import React from "react";
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import {
    PagingInfo,
    ResultsPerPage,
    Paging,
    SearchProvider,
    Results,
    SearchBox
} from "@elastic/react-search-ui";
import {Layout} from "@elastic/react-search-ui-views";
import "@elastic/react-search-ui-views/lib/styles/styles.css";


// ============== retrieving credentials from my account ==============
const connector = new AppSearchAPIConnector({
  searchKey: "search-j2upnixcxa1k28efrs8sugrv", 
  engineName: "play-search", 
  endpointBase: "https://play-search.ent.us-central1.gcp.cloud.es.io", 
  cacheResponses: false});


// ============== setting configurations for connection and searches ==============

const config = {
    apiConnector: connector,

    searchQuery: {
      
        //Results display: name of the play, its speaker, and text entry.
        result_fields: {
            play_name: {
              // A snippet means that matching search terms will be highlighted via <em> tags.
                snippet: {
                    size: 35, // 35 characters highlighted max.
                    fallback: true // Fallback to a "raw" result.
                }
            },
            speaker: {
                snippet: {
                    size: 50, 
                    fallback: true 
                }
            },
            text_entry:{
              snippet: {
                size: 50, 
                fallback: true 
            }
            }
        }
    }
};

function App() {
    return (
      <React.StrictMode>
        <SearchProvider config={config}>
            <div className="App">
              <h1 className="heading">Shakespeare Work Library</h1>
                <Layout 
                  header={
                  <SearchBox 
                  inputProps={{
                    placeholder: "Search for characters or plays"
                  }}
                   
                    />}
                  bodyContent={<Results titleField = "play_name"/>}
                  bodyHeader={
                    <> 
                      <PagingInfo/> 
                      <ResultsPerPage options = {[5, 10, 20]}/> 
                    </>
                  }
                  bodyFooter={< Paging />}
                />
            </div>
        </SearchProvider>
      </React.StrictMode>
    );
}
export default App; 
