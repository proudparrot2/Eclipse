/*const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;


        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});
*/

var input = document.getElementById("pageInput")
var searchBtn = document.getElementById("submit")

searchBtn.addEventListener("click", function() {
	window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;


        
	    document.getElementById("frame").src = __uv$config.prefix + __uv$config.encodeUrl(url);
    });

})

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};

var mainInput = document.getElementById("mainInput")
var pageInput = document.getElementById("pageInput")

pageInput.addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
		document.getElementById("submit").click();
	}
});
/*
var searchBtn = document.getElementById("submit")

searchBtn.addEventListener("click", function() {
	let url = pageInput.value.trim();
	if (!isUrl(url)) url = 'https://www.bing.com/search?q=' + url;
	else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;

	document.getElementById("frame").src = url;
}) */

function isUrl(val) {
	if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
	return false;
};

// Home button

function home() {
  document.getElementById("main").style.display = "block"
  document.getElementById("onPage").style.display = "none"
  document.getElementById("games").style.display = "none"
}


// Games button

function games() {
  document.getElementById("main").style.display = "none"
  document.getElementById("games").style.display = "block"
  document.getElementById("onPage").style.display = "none"
}

function back() {
  document.getElementById("games").style.display = "none"
  document.getElementById("onPage").style.display = "block"
  document.getElementById("home").style.display = "none"
}

// Settings

function settings() {
  var settings = document.getElementById("settings")
  if (settings.style.display == "none") {
     settings.style.display = "block"
   } else {
     settings.style.display = "none"
   }
}


// Full screen (about:blank)

function blank(url) {
  var tab = window.open('about:blank', '_blank'); 
  var iframe = tab.document.createElement('iframe'); 
  var stl = iframe.style; 
  stl.border = stl.outline = 'none'; 
  stl.width = '100vw'; 
  stl.height = '100vh'; 
  stl.position = 'fixed'; 
  stl.left = stl.right = stl.top = stl.bottom = '0'; 
  iframe.src = url; 
  tab.document.body.appendChild(iframe); 
}

function toggleSettings() {
    if (settings.style.display == "none") {
       settings.style.display = "block"
     } else {
       settings.style.display = "none"
     }
  }

  mainInput.addEventListener("keydown", function(e) {
	if (e.key == "Enter") {
		var url = mainInput.value
		document.getElementById("main").style.display = "none"
		document.getElementById("onPage").style.display = "block"
		pageInput.value = url
		document.getElementById("submit").click();
  }
})

function updateTabNames() {
  const tabNameInput = document.getElementById("tabname")
  document.title = tabNameInput.value;
  tabNameInput.value = ''
  localStorage.setItem('tabname', tabNameInput.value)
}

function updateFavicon() {
  const faviconInput = document.getElementById("faviconInput")
  const favicon = document.getElementById("favicon");
  favicon.setAttribute("href", faviconInput.value);
  faviconInput.value = ''
  localStorage.setItem('tabicon', faviconInput.value)
         
}

document.getElementById("frame").height = screen.height;