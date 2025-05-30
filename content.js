let item,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  item11,
  item12,
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
  thumbnails,
  screening,
  sideContent;

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
  item12 = await chrome.storage.sync.get(["screening"]);
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
    sideContent = document.getElementById("contentContainer");
    homeFeed.style["display"] = "none";
    scrollContainer.style["display"] = "none";
    sideContent.style["display"] = "none";
  } else if (message === "showHomeFeed") {
    homeFeed = document.getElementById("contents");
    scrollContainer = document.getElementById("chips-wrapper");
    sideContent = document.getElementById("contentContainer");
    homeFeed.style["display"] = "";
    scrollContainer.style["display"] = "";
    sideContent.style["display"] = "";
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
    else if (message === "showScreening") {
        // hide the feed 
        homeFeed = document.getElementById("contents");
        scrollContainer = document.getElementById("chips-wrapper");
        homeFeed.style["display"] = "none";
        scrollContainer.style["display"] = "none";
    

      // quirky question bank
      const questions = [
        "Do you really need to watch YouTube while the kids miss you?",
        "Have you done your homework yet?",
        "Is this the best use of your time right now?",
        "Would your future self thank you for watching this?",
        "Could a quick break be better spent stretching?",
        "Is YouTube more important than your dinner plans?",
        "Are you avoiding something more urgent?",
        "Will this video help you learn or just distract you?",
        "Is there a book you could be reading instead?",
        "Are you watching for fun or out of habit?",
        "Could you answer one email instead?",
        "Might a walk outside clear your head better?",
        "Is it time for a power nap?",
        "Have you complimented someone today?",
        "Do you have a goal you’re delaying by watching?",
        "Is this video making you feel good or guilty?",
        "Could you spend five minutes meditating instead?",
        "Have you called your best friend lately?",
        "Is this video really adding value to your day?",
        "Would you rather be doing something creative?",
        "Are your plants thirsty for your attention more than you need YouTube?",
        "Will watching this video make you feel accomplished or just tired?",
        "Could you spend this time organizing your workspace instead?",
        "Are you learning something new or just scrolling aimlessly?",
        "Is your back asking for a break more than your brain craves YouTube?",
        "Would you rather be planning your tomorrow right now?",
        "Are you going to regret watching this when you look at the clock?",
        "Have you checked off today's to-do list yet?",
        "Is there a quick chore you can finish before diving in?",
        "Could you use this break to call a family member?",
        "Do you really want to learn more cat videos right now?",
        "Is your attention span happier with a book than clips?",
        "Would a cup of tea satisfy that YouTube craving?",
        "Is it time to stretch or time to stream?",
        "Have you smiled at yourself in the mirror today?",
        "Is this binge or bite going to leave you breathless?",
        "Could 5 minutes of journaling help more than 5 minutes of clips?",
        "Are you feeding your mind or just feeding the algorithm?",
        "Would your pet rather play with you than watch you watch videos?",
        "Is your phone in control of you or are you in control of your phone?",
        "Could you replace one video with one act of kindness?",
        "Is this video audio stimulating or mind-numbing?",
        "Have you taken a deep breath since you opened YouTube?",
        "Is your productivity high or is your cursor just spinning?",
        "Will this video bring you closer to a goal or farther from it?",
      ];

      // 3) decide how many confirms to show (1–50)
      const rounds = Math.floor(Math.random() * 50) + 1;
  
      // 4) run the cascade
      for (let i = 0; i < rounds; i++) {
        // pick a random question
        const q = questions[Math.floor(Math.random() * questions.length)];
        const cont = window.confirm(q);
        if (!cont) {
        // bail out early if they say “No”
        return window.location.href = "about:blank";
        }
      }

      // 5) if they clicked OK every time, restore the feed
      homeFeed.style.display       = "";
      scrollContainer.style.display = "";
  }
  else if (message === "hideScreening") {
        homeFeed = document.getElementById("contents");
        scrollContainer = document.getElementById("chips-wrapper");
        homeFeed.style["display"] = "";
        scrollContainer.style["display"] = "";
        screening = document.getElementById("screening");
        screening.style.display = ["none"];
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
    if (item12 && item12.screening) {
        // simply re-use our new showScreening behavior
        performAction("showScreening");
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
