const homeFeed = document.getElementById("homeFeed");
const recommendedVideos = document.getElementById("recommendedVideos");
const commentSection = document.getElementById("commentSection");
const liveChat = document.getElementById("liveChat");
const ad = document.getElementById("ad");
const videoDetails = document.getElementById("videoDetails");
const searchBar = document.getElementById("searchBar");
const videoControls = document.getElementById("videoControls");
const limitInfiniteScroll =  document.getElementById("limitInfiniteScroll");
const thumbnails = document.getElementById("thumbnails");

async function doSomething() {
  const item = await chrome.storage.sync.get(["homeFeed"]);
  const item2 = await chrome.storage.sync.get(["recommendedVideos"]);
  const item3 = await chrome.storage.sync.get(["shorts"]);
  const item4 = await chrome.storage.sync.get(["commentSection"]);
  const item5 = await chrome.storage.sync.get(["liveChat"]);
  const item6 = await chrome.storage.sync.get(["ad"]);
  const item7 = await chrome.storage.sync.get(["videoDetails"]);
  const item8 = await chrome.storage.sync.get(["searchBar"]);
  const item9 = await chrome.storage.sync.get(["videoControls"]);
  const item10 = await chrome.storage.sync.get(["limitInfiniteScroll"]);
  const item11 = await chrome.storage.sync.get(["thumbnails"]);
  document.getElementById("homeFeed").checked = item.homeFeed;
  document.getElementById("recommendedVideos").checked =
    item2.recommendedVideos;
  document.getElementById("shorts").checked = item3.shorts;
  document.getElementById("commentSection").checked = item4.commentSection;
  document.getElementById("liveChat").checked = item5.liveChat;
  document.getElementById("ad").checked = item6.ad;
  document.getElementById("videoDetails").checked = item7.videoDetails;
  document.getElementById("searchBar").checked = item8.searchBar;
  document.getElementById("videoControls").checked = item9.videoControls;
  document.getElementById("limitInfiniteScroll").checked = Boolean(item10.limitInfiniteScroll);
  document.getElementById("thumbnails").checked = item11.thumbnails;
}

homeFeed.addEventListener("change", function (event) {
  if (this.checked) {
    chrome.storage.sync.set({ homeFeed: true });

    // Syncing changes
    let my_tabid;

    chrome.tabs.query(
      { currentWindow: true, active: true },
      async function (tabs) {
        my_tabid = await tabs[0].id;
        if (
          !tabs[0].url.includes("youtube.com/watch") &&
          !tabs[0].url.includes("videos")
        ) {
          let message = {
            text: "hideHomeFeed",
          };
          await chrome.tabs.sendMessage(my_tabid, message);
        }
      }
    );
  } else {
    chrome.storage.sync.set({ homeFeed: false });

    // Syncing changes
    let my_tabid;

    chrome.tabs.query(
      { currentWindow: true, active: true },
      async function (tabs) {
        my_tabid = await tabs[0].id;
        if (
          !tabs[0].url.includes("youtube.com/watch") &&
          !tabs[0].url.includes("videos")
        ) {
          let message = {
            text: "showHomeFeed",
          };
          await chrome.tabs.sendMessage(my_tabid, message);
        }
      }
    );
  }
});

ad.addEventListener("change", function (event) {
  if (this.checked) {
    chrome.storage.sync.set({ ad: true });

    // Syncing changes
    let my_tabid;

    chrome.tabs.query(
      { currentWindow: true, active: true },
      async function (tabs) {
        my_tabid = await tabs[0].id;
        if (
          !tabs[0].url.includes("youtube.com/watch") &&
          !tabs[0].url.includes("videos")
        ) {
          let message = {
            text: "hideAd",
          };
          await chrome.tabs.sendMessage(my_tabid, message);
        }
      }
    );
  } else {
    chrome.storage.sync.set({ ad: false });

    // Syncing changes
    let my_tabid;

    chrome.tabs.query(
      { currentWindow: true, active: true },
      async function (tabs) {
        my_tabid = await tabs[0].id;
        if (
          !tabs[0].url.includes("youtube.com/watch") &&
          !tabs[0].url.includes("videos")
        ) {
          let message = {
            text: "showAd",
          };
          await chrome.tabs.sendMessage(my_tabid, message);
        }
      }
    );
  }
});

recommendedVideos.addEventListener("change", function (event) {
  if (this.checked) {
    chrome.storage.sync.set({ recommendedVideos: true });

    // Syncing changes
    let my_tabid;

    chrome.tabs.query(
      { currentWindow: true, active: true },
      async function (tabs) {
        my_tabid = await tabs[0].id;
        if (tabs[0].url.includes("youtube.com/watch")) {
          let message = {
            text: "hideRecommendedVideos",
          };
          await chrome.tabs.sendMessage(my_tabid, message);
        }
      }
    );
  } else {
    chrome.storage.sync.set({ recommendedVideos: false });

    // Syncing changes
    let my_tabid;

    chrome.tabs.query(
      { currentWindow: true, active: true },
      async function (tabs) {
        my_tabid = await tabs[0].id;
        if (tabs[0].url.includes("youtube.com/watch")) {
          let message = {
            text: "showRecommendedVideos",
          };
          await chrome.tabs.sendMessage(my_tabid, message);
        }
      }
    );
  }
});

commentSection.addEventListener("change", function (event) {
  if (this.checked) {
    chrome.storage.sync.set({ commentSection: true });

    // Syncing changes
    let my_tabid;

    chrome.tabs.query(
      { currentWindow: true, active: true },
      async function (tabs) {
        my_tabid = await tabs[0].id;
        if (tabs[0].url.includes("youtube.com/watch")) {
          let message = {
            text: "hideCommentSection",
          };
          await chrome.tabs.sendMessage(my_tabid, message);
        }
      }
    );
  } else {
    chrome.storage.sync.set({ commentSection: false });

    // Syncing changes
    let my_tabid;

    chrome.tabs.query(
      { currentWindow: true, active: true },
      async function (tabs) {
        my_tabid = await tabs[0].id;
        if (tabs[0].url.includes("youtube.com/watch")) {
          let message = {
            text: "showCommentSection",
          };
          await chrome.tabs.sendMessage(my_tabid, message);
        }
      }
    );
  }
});

liveChat.addEventListener("change", function (event) {
  if (this.checked) {
    chrome.storage.sync.set({ liveChat: true });

    // Syncing changes
    let my_tabid;

    chrome.tabs.query(
      { currentWindow: true, active: true },
      async function (tabs) {
        my_tabid = await tabs[0].id;
        if (tabs[0].url.includes("youtube.com/watch")) {
          let message = {
            text: "hideLiveChat",
          };
          await chrome.tabs.sendMessage(my_tabid, message);
        }
      }
    );
  } else {
    chrome.storage.sync.set({ liveChat: false });

    // Syncing changes
    let my_tabid;

    chrome.tabs.query(
      { currentWindow: true, active: true },
      async function (tabs) {
        my_tabid = await tabs[0].id;
        if (tabs[0].url.includes("youtube.com/watch")) {
          let message = {
            text: "showLiveChat",
          };
          await chrome.tabs.sendMessage(my_tabid, message);
        }
      }
    );
  }
});

shorts.addEventListener("change", function (event) {
  if (this.checked) {
    chrome.storage.sync.set({ shorts: true });

    // Syncing changes
    let my_tabid;

    chrome.tabs.query(
      { currentWindow: true, active: true },
      async function (tabs) {
        my_tabid = await tabs[0].id;
        if (!tabs[0].url.includes("youtube.com/watch")) {
          let message = {
            text: "hideShorts",
          };
          await chrome.tabs.sendMessage(my_tabid, message);
        }
      }
    );
  } else {
    chrome.storage.sync.set({ shorts: false });

    // Syncing changes
    let my_tabid;

    chrome.tabs.query(
      { currentWindow: true, active: true },
      async function (tabs) {
        my_tabid = await tabs[0].id;
        if (!tabs[0].url.includes("youtube.com/watch")) {
          let message = {
            text: "showShorts",
          };
          await chrome.tabs.sendMessage(my_tabid, message);
        }
      }
    );
  }
});

videoDetails.addEventListener("change", function (event) {
    if (this.checked) {
        chrome.storage.sync.set({ videoDetails: true });

        //sync changes
        let my_tabid;

        chrome.tabs.query(
            {currentWindow: true, active: true },
            async function (tabs) {
                my_tabid = await tabs[0].id;
                if (tabs[0].url.includes("youtube.com/watch")) {
                    let message = {
                        text: "hideVideoDetails",
                    };
                    await chrome.tabs.sendMessage(my_tabid, message);
                }
            }
        );
    }
    else {
        chrome.storage.sync.set({videoDetails: false})

        let my_tabid;

        chrome.tabs.query(
            {currentWindow: true, active: true },
            async function (tabs) {
                my_tabid = await tabs[0].id;
                if (tabs[0].url.includes("youtube.com/watch")) {
                    let message = {
                        text: "showVideoDetails",
                    };
                    await chrome.tabs.sendMessage(my_tabid, message);
                }
            }
        );
    }
  });

searchBar.addEventListener("change", function (event) {
    if (this.checked) {
        chrome.storage.sync.set({ searchBar: true });

        //sync changes
        let my_tabid;

        chrome.tabs.query(
            {currentWindow: true, active: true },
            async function (tabs) {
                my_tabid = await tabs[0].id;
                if (tabs[0].url.includes("youtube.com/watch")) {
                    let message = {
                        text: "hideSearchBar",
                    };
                    await chrome.tabs.sendMessage(my_tabid, message);
                }
            }
        );
    }
    else {
        chrome.storage.sync.set({ searchBar: false })

        let my_tabid;

        chrome.tabs.query(
            {currentWindow: true, active: true },
            async function (tabs) {
                my_tabid = await tabs[0].id;
                if (tabs[0].url.includes("youtube.com/watch")) {
                    let message = {
                        text: "showSearchBar",
                    };
                    await chrome.tabs.sendMessage(my_tabid, message);
                }
            }
        );
    }
  });


videoControls.addEventListener("change", function (event) {
    if (this.checked) {
        chrome.storage.sync.set({ videoControls: true });

        //sync changes
        let my_tabid;

        chrome.tabs.query(
            {currentWindow: true, active: true },
            async function (tabs) {
                my_tabid = await tabs[0].id;
                if (tabs[0].url.includes("youtube.com/watch")) {
                    let message = {
                        text: "hideVideoControls",
                    };
                    await chrome.tabs.sendMessage(my_tabid, message);
                }
            }
        );
    }
    else {
        chrome.storage.sync.set({ videoControls: false })

        let my_tabid;

        chrome.tabs.query(
            {currentWindow: true, active: true },
            async function (tabs) {
                my_tabid = await tabs[0].id;
                if (tabs[0].url.includes("youtube.com/watch")) {
                    let message = {
                        text: "showVideoControls",
                    };
                    await chrome.tabs.sendMessage(my_tabid, message);
                }
            }
        );
    }
  });

  limitInfiniteScroll.addEventListener("change", function (event) {
  const hideExtra = this.checked;                // true → hide beyond 3
  chrome.storage.sync.set({ limitInfiniteScroll: hideExtra });

  chrome.tabs.query({ currentWindow: true, active: true }, async (tabs) => {
    const tab = tabs[0];
    if (!tab.url.includes("youtube.com")) return;
    // tell content.js to hide or show the extra videos immediately
    await chrome.tabs.sendMessage(tab.id, {
      text: hideExtra ? "hideInfiniteScroll" : "showInfiniteScroll"
    });
  });
});

thumbnails.addEventListener("change", function (event) {
  action = this.checked;
  chrome.storage.sync.set({ thumbnails: action });

  chrome.tabs.query({ currentWindow: true, active: true }, async (tabs) => {
    const tab = tabs[0];
    if (!tab.url.includes("youtube.com")) return;

    await chrome.tabs.sendMessage(tab.id, {
      text: action ? "hideThumbnails" : "showThumbnails"
    });
  });
});

doSomething();
