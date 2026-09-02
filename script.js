document.getElementById('year').textContent = new Date().getFullYear();
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})
},{threshold:.12});
document.querySelectorAll('.reveal, .series-card, .story-card, .standards-panel, .collab-card').forEach((el)=>{
  if(!el.classList.contains('reveal')) el.classList.add('reveal');
  observer.observe(el);
});
