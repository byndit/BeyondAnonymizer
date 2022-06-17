var id = "beyondanonymize";
if (!document.getElementById(id)) {
  const head = document.getElementsByTagName("head")[0];
  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = chrome.runtime.getURL("lib/beyondanonymize.css");
  link.media = "all";
  head.appendChild(link);
}

document.body.classList.toggle("beyondanonymize");
