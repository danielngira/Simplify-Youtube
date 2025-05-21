let item,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  related,
  homeFeed,
  scrollContainer,
  homeFeedIronSelector,
  youtubeLogo,
  shorts,
  commentSection,
  liveChat,
  ad,
  videoDetails,
  searchBar,
  videoControls,
  limitInfiniteScroll,
  thumbnails;
async function doSomething() {
  item = await chrome.storage.sync.get(["homeFeed"]);
  item2 = await chrome.storage.sync.get(["recommendedVideos"]);
  item3 = await chrome.storage.sync.get(["shorts"]);
  item4 = await chrome.storage.sync.get(["commentSection"]);
  item5 = await chrome.storage.sync.get(["liveChat"]);
  item6 = await chrome.storage.sync.get(["ad"]);
  item7 = await chrome.storage.sync.get(["videoDetails"]);
  item8 = await chrome.storage.sync.get(["searchBar"]);
  item9 = await chrome.storage.sync.get(["videoControls"]);
  item10 = await chrome.storage.sync.get(["limitInfiniteScroll"]);
  item11 = await chrome.storage.sync.get(["thumbnails"]);
}
doSomething();

youtubeLogo = document.getElementById("logo-icon");
youtubeLogo.addEventListener("click", () => {
  window.location = "https://www.youtube.com/";
});

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  performAction(message.text);
}

async function performAction(message) {
  if (message === "hideRecommendedVideos") {
    related = document.getElementById("related");
    related.style["visibility"] = "hidden";
  } else if (message === "showRecommendedVideos") {
    related = document.getElementById("related");
    related.style["visibility"] = "visible";
  } else if (message === "hideHomeFeed") {
    homeFeed = document.getElementById("contents");
    scrollContainer = document.getElementById("chips-wrapper");
    homeFeed.style["display"] = "none";
    scrollContainer.style["display"] = "none";
  } else if (message === "showHomeFeed") {
    homeFeed = document.getElementById("contents");
    scrollContainer = document.getElementById("chips-wrapper");
    homeFeed.style["display"] = "";
    scrollContainer.style["display"] = "";
  } else if (message === "hideShorts") {
    shorts = document.querySelector("[title='Shorts']");
    shorts.style["display"] = "none";
  } else if (message === "showShorts") {
    shorts = document.querySelector("[title='Shorts']");
    shorts.style["display"] = "";
  } else if (message == "showCommentSection") {
    commentSection = document.getElementById("comments");
    commentSection.style["display"] = "";
  } else if (message == "hideCommentSection") {
    commentSection = document.getElementById("comments");
    commentSection.style["display"] = "none";
  } else if (message == "hideLiveChat") {
    liveChat = document.getElementById("chat");
    liveChat.style["display"] = "none";
  } else if (message == "showLiveChat") {
    liveChat = document.getElementById("chat");
    liveChat.style["display"] = "";
  } else if (message == "showAd") {
    ad = document.querySelectorAll("#masthead-ad");
    ad.forEach(function (ele) {
      ele.style["display"] = "";
    });
  } else if (message == "hideAd") {
    ad = document.querySelectorAll("#masthead-ad");
    ad.forEach(function (ele) {
      ele.style["display"] = "none";
    });
  }
    //Hide video details
    else if (message == "hideVideoDetails"){
      videoDetails = document.getElementById("above-the-fold");
      videoDetails.style["display"] = "none";
  }
    //Show video details
    else if (message == "showVideoDetails"){
      videoDetails = document.getElementById("above-the-fold");
      videoDetails.style["display"] = "";
  } 
    //Hide search bar
    else if (message == "hideSearchBar"){
      searchBar = document.getElementById("center");
      searchBar.style["display"] = "none";
  }
    //Show search bar
    else if (message == "showSearchBar"){
      searchBar = document.getElementById("center");
      searchBar.style["display"] = "";
  } 
    // Hide video controls
    else if (message == "hideVideoControls"){
      videoControls = document.querySelector(".ytp-chrome-bottom");
      videoControls.style["visibility"] = "hidden";
  }
    // Show video controls
    else if (message == "showVideoControls"){
      videoControls = document.querySelector(".ytp-chrome-bottom");
      videoControls.style["visibility"] = "visible";
  }

    // popup.js should send these when the user flips your new toggle
    else if (message === "hideInfiniteScroll") {
    chrome.storage.sync.set({ limitInfiniteScroll: true });
    limitHomeVideos(false);
  }
    else if (message === "showInfiniteScroll") {
    chrome.storage.sync.set({ limitInfiniteScroll: false });
    limitHomeVideos(true);
  }
    //hide thumbnails
    else if (message === "hideThumbnails") {
    thumbnails = document.querySelectorAll("#thumbnail");
    thumbnails.forEach(function (thumbnail){
      thumbnail.style["visibility"] = "hidden";
    });
  }
    //show thumbnails
    else if (message === "showThumbnails") {
    thumbnails = document.querySelectorAll("#thumbnail");
    thumbnails.forEach(function (thumbnail){
      thumbnail.style["visibility"] = "visible";
    });
  }

  else if (message === "hello") {
    await doSomething();
    // declaring variables to store each element
    related = document.getElementById("related");
    homeFeed = document.getElementById("contents");
    scrollContainer = document.getElementById("chips-wrapper");
    youtubeLogo = document.querySelector("#logo-icon");
    shorts = document.querySelector("[title='Shorts']");
    commentSection = document.getElementById("comments");
    liveChat = document.getElementById("chat");
    ad = document.querySelectorAll("#masthead-ad");
    videoDetails = document.getElementById("above-the-fold");
    searchBar = document.getElementById("center");
    videoControls = document.querySelector(".ytp-chrome-bottom");
    thumbnails = document.querySelectorAll("#thumbnail");

    // check if the page has a homefeed
    if (item && item.homeFeed && homeFeed !== null) {
      // set the visibility of home page to hidden
      homeFeed.style["display"] = "none";
      homeFeed = null;
    }

    if (item && item.homeFeed && scrollContainer !== null) {
      // set the display property of scroll container to none
      scrollContainer.style["display"] = "none";
      scrollContainer = null;
    }

    if (youtubeLogo !== null) {
      const newLogo = document.createElement('img');
      
      newLogo.src = chrome.runtime.getURL('assets/simpletube.svg');
      newLogo.width = 100;
      youtubeLogo.parentNode.replaceChild(newLogo, youtubeLogo);
    }

    // check if the page has a side bar
    if (item2 && item2.recommendedVideos && related !== null) {
      // set the visibility of side bar to hidden
      related.style["visibility"] = "hidden";
      related = null;
    }

    if (item4 && item4.commentSection && commentSection !== null) {
      commentSection.style["display"] = "none";
      commentSection = null;
    }

    if (item5 && item5.liveChat && liveChat !== null) {
      liveChat.style["display"] = "none";
      liveChat = null;
    }

    if (item6 && item6.ad && ad !== null) {
      ad = document.querySelectorAll("#masthead-ad");
      ad.forEach(function (ele) {
        ele.style["display"] = "none";
      });
    }

    if (item3 && item3.shorts && shorts !== null) {
      // set the visibility of side bar to hidden
      shorts.style["display"] = "none";
      shorts = null;
    }

    if (item7 && item7.videoDetails && videoDetails !== null) {
      //hide the video details
      videoDetails.style["display"] = "none";
      videoDetails = null;
    }
    if (item8 && item8.searchBar && searchBar !== null) {
      //hide the search bar
      searchBar.style["display"] = "none";
      searchBar = null;
    }
    if (item9 && item9.videoControls && videoControls !== null) {
      //hide the video controls
      videoControls.style["visibility"] = "hidden";
      videoControls = null;
    }
    if (item11 && item11.thumbnails && thumbnails !== null) {
      //hide the video controls
      thumbnails = document.querySelectorAll("#thumbnail");
      thumbnails.forEach(function (thumbnail) {
        thumbnail.style["visibility"] = "hidden";
      });
    }
  }
}

// only show up to N videos on the home feed
const MAX_HOME = 3;

function limitHomeVideos(showAll = false) {
  const container = document.getElementById("contents");
  if (!container) return;
  const videos = Array.from(
    container.querySelectorAll("#content")
  );
  videos.forEach((video, i) => {
    video.style.display = (i < MAX_HOME || showAll) ? "" : "none";
  });
}

// run once on load (and respect any stored toggle)
const observerTarget = document.getElementById("contents");
if (observerTarget) {
  // initial trim
  chrome.storage.sync.get(["limitInfiniteScroll"], ({ limitInfiniteScroll }) => {
    limitHomeVideos(!limitInfiniteScroll);
  });

  // watch for new videos being appended
  const observer = new MutationObserver((mutations) => {
    // bail if no nodes were added
    if (!mutations.some(m => m.addedNodes.length)) return;

    chrome.storage.sync.get(["limitInfiniteScroll"], ({ limitInfiniteScroll }) => {
      limitHomeVideos(!limitInfiniteScroll);
    });

    chrome.storage.sync.get(["thumbnails"], ({ thumbnails }) => {
      performAction(thumbnails ? "hideThumbnails" : "showThumbnails");
    });

  });
  observer.observe(observerTarget, { childList: true, subtree: true });
}


performAction("hello");
