/* ===== ADD A NEW CERTIFICATE: copy one block, paste it at the TOP of the list, edit it ===== */
/*
  title  : name of the course or certificate
  issuer : who gave it (Cisco Networking Academy, CompTIA, Google ...)
  date   : month and year you finished it
  file   : path to your certificate PDF/image inside the "certs" folder (optional)
  link   : online verification link, e.g. your Credly badge URL (optional)
*/
const certs = [
  /* Example (delete the slashes to use it):
  { title: "Packet Tracer: [course name]", issuer: "Cisco Networking Academy", date: "Oct 2026", file: "certs/packet-tracer.pdf", link: "" },
  */
  { title: "CompTIA Security+", issuer: "CompTIA", date: "2026", file: "", link: "" },
  { title: "Google Cybersecurity Professional Certificate", issuer: "Google", date: "2025", file: "", link: "" }
];

/* Your public Cisco badge page (Credly). Paste the link here to show a "View all badges" button. */
const BADGES_URL = "";