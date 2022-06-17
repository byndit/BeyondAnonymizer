chrome.action.onClicked.addListener(async (tab) => {
  chrome.scripting.executeScript({
    target: {
      tabId: tab.id,
      allFrames: true,
    },
    files: ['beyondanonymize.js'],
  });
});