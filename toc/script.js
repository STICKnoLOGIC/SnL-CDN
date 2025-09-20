class TocItem {
  text = "";
  hLevel = 0;
  nesting = 0;
  element;
}

let tocItems = []; // array of TocItem objects
let myToc = null; // toc container
let scrollOffset= 16; // offset for the top of the page

function tocScrollTo(n) {
  let el = tocItems[n].element;
  let header = document.querySelector("header");
  let y = el.getBoundingClientRect().top + window.scrollY;
  let offY = header? header.offsetHeight : scrollOffset;
  y -= offY;
  window.scrollTo({
    top: y,
  });
}

function getAllHeaders() {
  return Array.from(
    document.querySelectorAll("h1, h2, h3, h4, h5, h6")
  );
}

function buildTocItems() {
  let allHdrs = getAllHeaders();
  let res = [];
  for (let el of allHdrs) {
    let text = el.innerText.trim();
    text = removeHash(text);
    text = text.trim();
    let hLevel = parseInt(el.tagName[1]);
    let h = new TocItem();
    h.text = text;
    h.hLevel = hLevel;
    h.nesting = 0;
    h.element = el;
    res.push(h);
  }
  return res;
}

function removeHash(str) {
  return str.replace(/#$/, "");
}

function genTocList(items) {
  let tmp = "";
  let t = `<h3 title="{title}" class="snl-toc-item snl-toc-trunc {ind}" onclick=tocScrollTo({n})>{text}</h3>`;
  let n = 0;
  for (let h of items) {
    let s = t;
    s = s.replace("{n}", n);
    let ind = "snl-toc-ind-" + h.nesting;
    s = s.replace("{ind}", ind);
    s = s.replace("{text}", h.text);
    s = s.replace("{title}", h.text);
    tmp += s;
    n++;
  }
  return `<div class="snl-toc-list">` + tmp + `</div>`;
}

function fixNesting(hdrs) {
  let n = hdrs.length;
  for (let i = 0; i < n; i++) {
    let h = hdrs[i];
    if (i == 0) {
      h.nesting = 0;
    } else {
      h.nesting = h.hLevel - 1;
    }
  }
}

function genToc() {
  tocItems = buildTocItems();
  fixNesting(tocItems);
  const title = document.createElement("h3");
  title.id = "snl-toc-title";
  title.innerHTML = "Table of Contents";
  let s2 = genTocList(tocItems);
  myToc.appendChild(title);
  myToc.innerHTML += s2;
}

function showSelectedTocItem(elIdx) {
  // make item highlight for closest element
  let els = document.querySelectorAll(".snl-toc-item");
  let cls = "snl-toc-active";
  for (let i = 0; i < els.length; i++) {
    let el = els[i];
    if (i == elIdx) {
      el.classList.add(cls);
    } else {
      el.classList.remove(cls);
    }
  }
}

function updateClosestToc() {
  let closestIdx = -1;
  let closestDistance = Infinity;

  for (let i = 0; i < tocItems.length; i++) {
    let tocItem = tocItems[i];
    const rect = tocItem.element.getBoundingClientRect();
    const distanceFromTop = Math.abs(rect.top);
    if (
      distanceFromTop < closestDistance &&
      rect.bottom > 0 &&
      rect.top < window.innerHeight
    ) {
      closestDistance = distanceFromTop;
      closestIdx = i;
    }
  }
  if (closestIdx >= 0) {
    showSelectedTocItem(closestIdx);
  }
}


document.addEventListener('DOMContentLoaded', function() {
	myToc = document.getElementById('snl-toc');
	if (myToc) {
		genToc();
		window.addEventListener("scroll", updateClosestToc);
   }
});