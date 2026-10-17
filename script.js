/* ===== EDIT YOUR DETAILS HERE ===== */
const EMAIL = "infosec.moli@gmail.com";           // TODO
const LINKEDIN = "https://www.linkedin.com/in/mokili-cyber/";   // TODO
const GITHUB = "https://github.com/mokili-saravanan";
const THM = "https://tryhackme.com/p/your-username";            // TODO
const HTB = "https://app.hackthebox.com/profile/your-id";       // TODO
const NETACAD = "https://www.netacad.com/";                      // TODO: your badges link

const projects = [
  {t:"SOC alert triage lab", d:"Investigated simulated alerts in a SIEM, separated true from false positives and wrote an incident report for each. [Add result, for example number of alerts or time saved.]", tags:["SIEM","Log analysis","MITRE ATT&CK"], link:GITHUB},
  {t:"Home lab: detection and monitoring", d:"Built a small virtual network, generated attack traffic and created detection rules to catch it. [Add what you detected.]", tags:["Virtualisation","Wireshark","Detection rules"], link:GITHUB},
  {t:"[Dissertation or capstone title]", d:"[One or two sentences: the problem, your method, and what you found.]", tags:["[Tool]","[Topic]"], link:GITHUB}
];
const skills = [
  ["Log analysis and alert triage",4],["SIEM monitoring",3],["Incident response",3],
  ["Network security and traffic analysis",3],["Windows and Linux fundamentals",3],
  ["Threat hunting",2],["Python scripting",3],["Teamwork and communication",5]
];
const tools = ["Splunk","Wireshark","Nmap","Kali Linux","Microsoft Sentinel","Elastic (ELK)","Burp Suite","VirusTotal","CyberChef","MITRE ATT&CK Navigator"];
const profiles = [
  ["TryHackMe","Rooms and learning paths",THM],["Hack The Box","Labs and challenges",HTB],
  ["Cisco NetAcad","Courses and badges",NETACAD],["LinkedIn","Work and network",LINKEDIN],["GitHub","Code and write-ups",GITHUB]
];
/* ===== END EDIT ===== */

const $ = id => document.getElementById(id);
const esc = s => s.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

$("projectCards").innerHTML = projects.map(p => `
  <article class="card"><h3>${esc(p.t)}</h3><p>${esc(p.d)}</p>
  <ul class="tags">${p.tags.map(t=>`<li>${esc(t)}</li>`).join("")}</ul>
  <p style="margin:14px 0 0"><a class="more" href="${p.link}" target="_blank" rel="noopener">View on GitHub</a></p></article>`).join("");

$("certCards").innerHTML = certs.map(c => {
  const href = c.link || c.file;
  return `<article class="card cert"><div class="badge" aria-hidden="true">🏅</div>
  <div><h3>${esc(c.title)}</h3><p>${esc(c.issuer)} · ${esc(c.date)}</p>
  ${href ? `<a class="more" href="${href}" target="_blank" rel="noopener">View certificate</a>` : ""}</div></article>`;
}).join("");
if (typeof BADGES_URL !== "undefined" && BADGES_URL) {
  $("badgesBtn").href = BADGES_URL; $("badgesBtn").hidden = false;
}

$("skillList").innerHTML = skills.map(([n,r]) => `
  <div class="skill"><span>${esc(n)}</span>
  <span class="stars" role="img" aria-label="${r} out of 5">${"<span class='on'>★</span>".repeat(r)}${"<span class='off'>★</span>".repeat(5-r)}</span></div>`).join("");

$("toolList").innerHTML = tools.map(t => `<span class="tool">${esc(t)}</span>`).join("");

$("profileList").innerHTML = profiles.map(([n,s,u]) => `
  <a class="profile" href="${u}" target="_blank" rel="noopener"><b>${esc(n)}</b><span>${esc(s)}</span></a>`).join("");

$("contactList").innerHTML = [["Email",EMAIL,"mailto:"+EMAIL],["LinkedIn",LINKEDIN,LINKEDIN],["GitHub",GITHUB,GITHUB]]
  .map(([l,v,h]) => `<li><span>${l}</span><a href="${h}" target="_blank" rel="noopener">${esc(v)}</a></li>`).join("");
$("mailBtn").href = "mailto:" + EMAIL;
$("yr").textContent = new Date().getFullYear();