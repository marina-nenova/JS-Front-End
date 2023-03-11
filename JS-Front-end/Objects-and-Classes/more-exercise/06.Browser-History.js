function browserHistory(browser, commands) {
  for (const info of commands) {
    if (info === "Clear History and Cache") {
      browser["Open Tabs"] = [];
      browser["Recently Closed"] = [];
      browser["Browser Logs"] = [];
    } else {
        
      let [command, site] = info.split(" ");

      if (command === "Open") {
        browser["Open Tabs"].push(site);
        browser["Browser Logs"].push(info);

      } else if (command === "Close") {
        if (browser["Open Tabs"].includes(site)) {
          let searched = browser["Open Tabs"].indexOf(site);
          browser["Open Tabs"].splice(searched, 1);
          browser["Recently Closed"].push(site);
          browser["Browser Logs"].push(info);
        }
      }
      
    }
  }

  for (const key in browser) {
    if (key === "Browser Name") {
      console.log(browser[key]);
    } else {
      console.log(`${key}: ${browser[key].join(", ")}`);
    }
  }
}

// browserHistory(
//   {
//     "Browser Name": "Google Chrome",
//     "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//     "Recently Closed": ["Yahoo", "Gmail"],
//     "Browser Logs": [
//       "Open YouTube",
//       "Open Yahoo",
//       "Open Google Translate",
//       "Close Yahoo",
//       "Open Gmail",
//       "Close Gmail",
//       "Open Facebook",
//     ],
//   },
//   ["Close Facebook", "Open StackOverFlow", "Open Google"]
// );

browserHistory(
  {
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": [
      "Open Gmail",
      "Close Gmail",
      "Open Dropbox",
      "Open YouTube",
      "Close Dropbox",
    ],
  },
  ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);
