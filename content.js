const preNodes = document.querySelectorAll('pre');

for (const pre of preNodes) {
  const urls = extractUrls(pre.innerText);
  const parentNode = pre.parentNode;

  const ul = document.createElement('ul');
  ul.classList.add('_anchor-bay-urls');

  for (const url of urls) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = url;
    a.innerText = url;
    a.target = '_blank';
    li.appendChild(a);
    ul.appendChild(li);
  }
  parentNode.appendChild(ul);
}

function extractUrls(text) {
  // Robust regular expression to handle various URL formats:
  const urlRegex = /\b((?<!["'<>])(?:https?|ftp):\/\/[-a-zA-Z0-9\.]+\.[a-zA-Z]{2,6}(?:[:\/][^\s\[\]`!()$*@,;:\+=?#]+)?)/g;

  // Extract matches and filter duplicates:
  const matches = text.match(urlRegex) || [];
  const uniqueUrls = [...new Set(matches)];

  return uniqueUrls;
}