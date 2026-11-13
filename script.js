const messages = [
  ["Happy Birthday 🎂", "Happy Birthday to the person who has been a beautiful part of my life for the last 7 years. 🥹❤️🎂 Seven years… honestly, when I think about it, it feels unbelievable how someone who was once just a person I knew became someone whose presence became such an important part of my life. 🫂💗 We have literally grown together through these years — we've laughed until our stomachs hurt, shared things we probably wouldn't tell anyone else, had stupid arguments, misunderstood each other, made up, supported each other, and created so many memories that I could never replace. 🥺✨ There were days when I didn't even have the words to explain what I was feeling, but somehow having you around made things feel a little easier. And maybe you don't realize it, but your presence has mattered to me more than you know. 🤍"],
  ["Seven years, still here 🫶🏻", "Seven years of friendship means you've seen so many versions of me — the happy me, the annoying me, the emotional me, the confused me, and even the version of me that didn't know what she was doing with life 😭😂❤️ — and somehow, you stayed. That is something I will always be grateful for. 🥹🫶🏻 People come and go, friendships change, and life takes everyone in different directions, but there is something so special about knowing that after all these years, I can still look at you and think, “Yes, this is my person.” 🫂💞 I don't know what the future holds or where life will take us, but I genuinely hope that no matter how much we grow or how much life changes, there will always be a little piece of these seven years between us that never changes. ♾️❤️"],
  ["You deserve everything 🌷", "I hope you know that you deserve every beautiful thing life has to offer. 🌷🤍 I hope you achieve the dreams you sometimes keep to yourself, I hope you find happiness in places you never expected, and I hope you always have people around you who love and appreciate you for exactly who you are. 🤲🏻🥹 And whenever life feels difficult, I hope you remember that you have someone who will always be grateful for your existence and for every memory we have shared. 🫂💗"],
  ["Thank you for the little things 🥺", "Thank you for all the little things you probably don't even remember — every conversation, every laugh, every piece of advice, every time you listened, every random moment that somehow became a memory. 🥺❤️ Thank you for being part of my life for seven beautiful years. I honestly wouldn't trade our friendship for anything. You are not just my best friend; you are a part of my story, a part of some of my happiest memories, and someone I will always have a special place for in my heart. 🥹💗"],
  ["So, so grateful 🥳", "So on your birthday, I just want to say: I'm so, so grateful for you. ❤️ Happy Birthday, my best friend. 🎂🥳 May this year bring you the kind of happiness that stays, the kind of peace that feels like home, and the kind of love and success you truly deserve. 🌸✨ I hope we're still laughing about the same stupid things many, many years from now. 😂😭❤️ Seven years have already passed, and I hope this is only the beginning of a lifetime of memories, inside jokes, late-night talks, arguments, forgiveness, laughter, and being there for each other through everything. 🫂♾️ No matter how old we get, a part of me will always be thankful that out of all the people in this world, I got to meet you and call you my best friend. 🥹❤️ Happy Birthday, my girl. I love you more than words can ever properly explain. 🎂💗🫶🏻✨"],
  ["Your smile 😊🌸", "Your smile has a strange power. It can fix a bad day without you even trying. 🥹💗 If I ever forget how to be happy, I will just remember the way you laugh when something is really, really funny — the kind of laugh you can't control. 😭😂 Please never stop smiling like that. The world looks softer when you do. 🌷✨"],
  ["Our inside jokes 😂🤭", "Half of our conversations would make zero sense to anyone else, and that's exactly why I love them. 😭💞 One look, one word, and we both start laughing. Nobody else will ever understand our language, and honestly, we don't need them to. 🤭🫶🏻 Inside jokes are just love wearing a funny costume. 🎭❤️"],
  ["The kind of person you are 🤍", "You are kind in a quiet way, and strong in a way you don't even notice. 🌙🤍 You care deeply, you forgive easily, and you make people feel like they matter. I hope you can see yourself the way I see you — beautiful from the inside, and from the outside too. 🥹✨ Never let anyone make you feel small, because you are anything but that. 👑💗"],
  ["Thank you for staying 🫂", "Thank you for the days you stayed when I was difficult. Thank you for the nights you listened when I was overthinking. 🥺🌙 Thank you for not giving up on me, even when I probably gave you a hundred reasons to. 😭❤️ Not everyone gets a friend like that. I know how lucky I am. 🍀💞"],
  ["My dua for you 🤲🏻", "May Allah fill your life with barakah, peace, and happiness that never runs out. 🤲🏻🌷 May He make every difficult road easy for you, give you success in everything you dream about, and protect you from all sadness. ✨ Whatever you are praying for in your heart right now, may it come to you at the perfect time. 🥹💗 Ameen. 🤍"],
  ["Things I will never forget 🎞️", "The random laughs. The silly photos. The late chats. The plans we made and the ones we never finished. 📸😂 The way our school days now feel like a beautiful movie we get to replay in our minds. 🎒🥹 I will keep every single one of these moments safe in my heart forever. 💗🔐"],
  ["My wishes for your new year 🎆", "I wish that this year gives you more smiles than tears, more good news than worries, and more reasons to say “Alhamdulillah.” 🌸 I wish for you a heart that stays light, dreams that come true, and a life full of colours. 🌈🥰 And I wish that I get to be right next to you, clapping the loudest, when you achieve all of it. 👏🥹✨"],
  ["A promise 🤝💞", "I promise to keep being your biggest supporter, your free therapist, your photographer who takes 50 pictures just to get one good one, and the friend who will always pick up your call. 📞😂 Bad days, good days, boring days — I'm in all of them with you. 🫂❤️ That's a promise, no expiry date. ♾️"],
  ["P.S. 💌", "P.S. Don't you dare cry reading this… okay fine, cry a little, I did too while writing it. 😭🤍 You are loved, you are valued, and you are so, so special. Today is your day, so eat the cake, take a thousand pictures, and be happy. 🎂📸🎀 I love you, Munaza. Happy Birthday once again! 🥳💗🎉"]
];

const cardsEl = document.getElementById('cards');
messages.forEach(([title, text], i) => {
  const c = document.createElement('div');
  c.className = 'card';
  c.innerHTML = `<button><span class="num">${i + 1}</span><span class="title">${title}</span><span class="arrow">▾</span></button><div class="body"><p>${text}</p></div>`;
  const body = c.querySelector('.body');
  c.querySelector('button').addEventListener('click', () => {
    const open = c.classList.toggle('open');
    body.style.maxHeight = open ? body.scrollHeight + 'px' : 0;
    if (open) burst(6);
  });
  cardsEl.appendChild(c);
});

document.getElementById('openBtn').addEventListener('click', () => {
  document.getElementById('gate').classList.add('hidden');
  document.getElementById('site').classList.remove('hidden');
  window.scrollTo(0, 0);
  shoot(160);
  const a = document.getElementById('bgm');
  a.play().catch(() => {});
});

const bgm = document.getElementById('bgm');
document.getElementById('musicBtn').addEventListener('click', e => {
  if (bgm.paused) { bgm.play().catch(() => {}); e.target.textContent = '🎵'; }
  else { bgm.pause(); e.target.textContent = '🔇'; }
});

function nextBirthday() {
  const now = new Date();
  let t = new Date(now.getFullYear(), 11, 25, 0, 0, 0);
  const endOfDay = new Date(now.getFullYear(), 11, 25, 23, 59, 59);
  if (now > endOfDay) t = new Date(now.getFullYear() + 1, 11, 25, 0, 0, 0);
  return t;
}
let celebrated = false;
function tick() {
  const now = new Date();
  const isToday = now.getMonth() === 11 && now.getDate() === 25;
  const box = document.getElementById('count');
  if (isToday) {
    document.getElementById('cdTitle').textContent = "It's TODAY! 🥳🎂";
    document.getElementById('cdNote').textContent = 'Happy Birthday Munaza 💗';
    box.className = 'count today';
    box.innerHTML = '<p>Today is your day, birthday girl! 🎉👑</p>';
    if (!celebrated) { celebrated = true; shoot(200); }
    return;
  }
  const diff = nextBirthday() - now;
  const s = Math.floor(diff / 1000);
  document.getElementById('d').textContent = Math.floor(s / 86400);
  document.getElementById('h').textContent = Math.floor(s % 86400 / 3600);
  document.getElementById('m').textContent = Math.floor(s % 3600 / 60);
  document.getElementById('s').textContent = s % 60;
}
tick(); setInterval(tick, 1000);

const lb = document.getElementById('lightbox');
document.getElementById('gallery').addEventListener('click', e => {
  const img = e.target.closest('figure')?.querySelector('img');
  if (!img) return;
  lb.querySelector('img').src = img.src;
  lb.classList.remove('hidden');
});
lb.addEventListener('click', () => lb.classList.add('hidden'));

const wishes = ['Your wish is already on its way ✨🥹', 'Allah kare tumhari har dua qabool ho 🤲🏻💗', 'Whatever you wished for, you deserve it 🌷🎀'];
document.getElementById('cake').addEventListener('click', () => {
  const f = document.getElementById('flame');
  f.classList.add('off');
  document.getElementById('wishText').textContent = wishes[Math.floor(Math.random() * wishes.length)];
  shoot(120);
  setTimeout(() => f.classList.remove('off'), 4000);
});

document.getElementById('confettiBtn').addEventListener('click', () => { shoot(260); burst(25); });

const fall = document.getElementById('fall');
const icons = ['💗', '🌸', '✨', '❄️', '🤍', '💖'];
function drop() {
  const el = document.createElement('span');
  el.textContent = icons[Math.floor(Math.random() * icons.length)];
  el.style.left = Math.random() * 100 + 'vw';
  el.style.fontSize = 12 + Math.random() * 16 + 'px';
  el.style.animationDuration = 7 + Math.random() * 7 + 's';
  fall.appendChild(el);
  setTimeout(() => el.remove(), 15000);
}
setInterval(drop, 700);
function burst(n) { for (let i = 0; i < n; i++) setTimeout(drop, i * 60); }

const cv = document.getElementById('confetti'), ctx = cv.getContext('2d');
let parts = [], running = false;
function size() { cv.width = innerWidth; cv.height = innerHeight; }
size(); addEventListener('resize', size);
function shoot(n) {
  const cols = ['#e8577d', '#ff9bb5', '#c9974a', '#ffd6e0', '#8e2a4d', '#fff'];
  for (let i = 0; i < n; i++) parts.push({
    x: innerWidth / 2, y: innerHeight * 0.4,
    vx: (Math.random() - .5) * 16, vy: Math.random() * -14 - 3,
    r: 4 + Math.random() * 5, c: cols[Math.floor(Math.random() * cols.length)], life: 140 + Math.random() * 60
  });
  if (!running) { running = true; loop(); }
}
function loop() {
  ctx.clearRect(0, 0, cv.width, cv.height);
  parts.forEach(p => {
    p.x += p.vx; p.y += p.vy; p.vy += .3; p.life--;
    ctx.fillStyle = p.c; ctx.fillRect(p.x, p.y, p.r, p.r * 1.6);
  });
  parts = parts.filter(p => p.life > 0 && p.y < cv.height + 20);
  if (parts.length) requestAnimationFrame(loop); else { running = false; ctx.clearRect(0, 0, cv.width, cv.height); }
                   }
