const pfpMapping = {
    'Framexy': 'Framexy.png',
    'KumongaStrikes': 'Kumonga.png',
    'JoshWithTheGlock': 'Josh.png',
    'Xylem': 'Xylem.png',
    'GeoVeximill': 'Alorua.png',
    'Kierababyy': 'Kiera.png',
    'PinkyHolmes92': 'Pinky.png',
    'AsaL': 'AsaL.png',
    '𝒜𝓁𝓁❀𝓊𝓇𝒶': 'Alorua.png',
    'Chillz': 'Chillz.png',
    'JosBot': 'Jos.png',
    'Xorfi': 'Xorfi.png',
    'Kelinda': 'Kelinda.png',
    'Redstone': 'Redstone.png',
    'Fizzzzyyyy': 'Fizzzzyyyy.png',
    'Toz': 'Toz.png',
    'Panda19': 'Panda19.png',
    '.kornel': 'kornel.png'
};

// this gets the path to the pfps
function getAvatarPath(name) {
    const filename = pfpMapping[name];
    return filename ? `/${filename}` : 'https://via.placeholder.com/50';
}

//reviews data
const allReviews = [
    {
        name: "Framexy",
        date: "",
        rating: "5.0",
        text: "Lucifier is a very fair guy with good management ideas as well as doing what he promises, he's trustworthy and a good person overall. If u want someone to manage your discord server it would be Lucifier. Prime example. +Rep from framexy"
    },
    {
        name: "KumongaStrikes",
        date: "",
        rating: "5.0",
        text: "Lucifer is very knowledgeable in his fields of interest and applies his skills well to keep people happy. His colleagues around him have a great time collaborating with him when working on setting up new things for my server. He will make a very good team player for you as well as a potential leader if need be."
    },
    {
        name: "JoshWithTheGlock",
        date: "",
        rating: "5.0",
        text: "Lucifier has been a huge help in managing my Discord server. They're reliable, organized, and always quick to handle issues or keep things running smoothly. Thanks to their support, the server feels more active and well-managed. Highly recommend their work!"
    },
    {
        name: "Xylem",
        date: "",
        rating: "5.0",
        text: "Lucifer is a great community and server manager. He is experienced in many realms and is always dedicated to his positions. He is always happy to help and has been a support in managing and moderating my Roblox discord server."
    },
    {
        name: "GeoVeximill",
        date: "",
        rating: "5.0",
        text: "Red, hes likely one of the few individuals that even with his schedule he always appears whenever ya need em. He's a great pc checker with and without his current tool hes using. Hes without a doubt the currently most experienced and qualified pc checker currently I know of."
    },
    {
        name: "Kierababyy",
        date: "",
        rating: "5.0",
        text: "At Performance, Lucifer has made a huge impact on our community. He educates up and coming PC checkers who are looking to join the community."
    },
    {
        name: "PinkyHolmes92",
        date: "",
        rating: "5.0",
        text: "Lucifier was commissioned to help build my business Discord. He did a wonderful job and was patient with myself and the other business owners."
    },
    {
        name: "AsaL",
        date: "",
        rating: "5.0",
        text: "Lucifer is an amazing community manager! He went above and beyond with setting up my server to look professional."
    },
    {
        name: "𝒜𝓁𝓁❀𝓊𝓇𝒶",
        date: "",
        rating: "5.0",
        text: "Lucifer is great with making servers. He is able to take your suggestions and make them reality or better."
    },
    {
        name: "Chillz",
        date: "",
        rating: "5.0",
        text: "Vouch for Luci! Excellent Manager and a great friend."
    },
    {
        name: "JosBot",
        date: "",
        rating: "5.0",
        text: "Luci is someone I've worked with for a long time. Great person to talk to overall <3 vouch!"
    },
    {
        name: "Xorfi",
        date: "",
        rating: "5.0",
        text: "Lucifier is one of the best community managers I've ever seen. Dedicated and professional all the time."
    },
    {
        name: "Kelinda",
        date: "",
        rating: "5.0",
        text: "I had the great pleasure to work with Lucy for not just one server, but in total 3 servers. He won't let you down."
    },
    {
        name: "Redstone",
        date: "",
        rating: "5.0",
        text: "Lucifier excels at what he does. He was the team member I could consistently rely on for exceptional performance."
    },
    {
        name: "Fizzzzyyyy",
        date: "",
        rating: "5.0",
        text: "Luci is a great guy, awesome manager and community manager. Always responsive and ready to work!"
    },
    {
        name: "Toz",
        date: "",
        rating: "5.0",
        text: "Luci is a nice person to work with and is very friendly. He also puts a lot of time and dedication into his projects."
    },
    {
        name: "Panda19",
        date: "",
        rating: "5.0",
        text: "Vouch for Luci! Great leader, manager and Owner. A great person to have as your friend."
    },
    {
        name: ".kornel",
        date: "",
        rating: "5.0",
        text: "good guy?"
    }
];

// current clients data
const peopleClients = [
    {
        name: "Name Name",
        role: "Role",
        description: "Description",
        avatar: ""
    },
    {
        name: "Name Name",
        role: "Role",
        description: "Description",
        avatar: ""
    },
    {
        name: "Name Name",
        role: "Role",
        description: "Description",
        avatar: ""
    }
];

//current servers data
const serverClients = [
    {
        name: "Server Name",
        role: "Role / Member Count",
        description: "Description",
        avatar: ""
    },
    {
        name: "Server Name",
        role: "Role / Member Count",
        description: "Description",
        avatar: ""
    },
    {
        name: "Server Name",
        role: "Role / Member Count",
        description: "Description",
        avatar: ""
    }
];

let currentPage = 1;
const reviewsPerPage = 3;
let currentPeopleIndex = 0;
let currentServerIndex = 0;

// Reviews Functions
function renderReviews(page) {
    const start = (page - 1) * reviewsPerPage;
    const end = start + reviewsPerPage;
    const pageReviews = allReviews.slice(start, end);
    
    const reviewsGrid = document.getElementById('reviewsGrid');
    reviewsGrid.innerHTML = '';
    
    pageReviews.forEach(review => {
        const card = document.createElement('div');
        card.className = 'review-card';
        const avatarPath = getAvatarPath(review.name);
        card.innerHTML = `
            <div class="review-header">
                <img class="review-avatar" src="${avatarPath}" alt="${review.name}">
                <div class="review-info">
                    <h4>${review.name}</h4>
                    ${review.date ? `<div class="review-date">Received: ${review.date}</div>` : ''}
                    <div class="review-rating">⭐⭐⭐⭐⭐ ${review.rating}</div>
                </div>
            </div>
            <p class="review-text">${review.text}</p>
        `;
        reviewsGrid.appendChild(card);
    });
}

function renderPagination() {
    const totalPages = Math.ceil(allReviews.length / reviewsPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    
    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderReviews(currentPage);
            renderPagination();
        }
    };
    pagination.appendChild(prevBtn);
    
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = 'page-btn';
        pageBtn.textContent = i;
        if (i === currentPage) {
            pageBtn.classList.add('active');
        }
        pageBtn.onclick = () => {
            currentPage = i;
            renderReviews(currentPage);
            renderPagination();
        };
        pagination.appendChild(pageBtn);
    }
    
    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderReviews(currentPage);
            renderPagination();
        }
    };
    pagination.appendChild(nextBtn);
}

// current clients
function renderPeopleClient(index) {
    const client = peopleClients[index];
    const card = document.getElementById('peopleCard');
    card.innerHTML = `
        <img class="client-avatar" src="${client.avatar}" alt="${client.name}">
        <h3 class="client-name">${client.name}</h3>
        <p class="client-role">${client.role}</p>
        <p class="client-description">${client.description}</p>
    `;
    
    document.getElementById('peoplePrev').disabled = index === 0;
    document.getElementById('peopleNext').disabled = index === peopleClients.length - 1;
    
    renderIndicators('peopleIndicator', peopleClients.length, index);
}

function renderServerClient(index) {
    const client = serverClients[index];
    const card = document.getElementById('serverCard');
    card.innerHTML = `
        <img class="client-avatar" src="${client.avatar}" alt="${client.name}">
        <h3 class="client-name">${client.name}</h3>
        <p class="client-role">${client.role}</p>
        <p class="client-description">${client.description}</p>
    `;
    
    document.getElementById('serverPrev').disabled = index === 0;
    document.getElementById('serverNext').disabled = index === serverClients.length - 1;
    
    renderIndicators('serverIndicator', serverClients.length, index);
}

function renderIndicators(containerId, total, activeIndex) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    for (let i = 0; i < total; i++) {
        const dot = document.createElement('div');
        dot.className = 'indicator-dot';
        if (i === activeIndex) {
            dot.classList.add('active');
        }
        dot.onclick = () => {
            if (containerId === 'peopleIndicator') {
                currentPeopleIndex = i;
                renderPeopleClient(i);
            } else {
                currentServerIndex = i;
                renderServerClient(i);
            }
        };
        container.appendChild(dot);
    }
}

// initialize
renderReviews(currentPage);
renderPagination();
renderPeopleClient(currentPeopleIndex);
renderServerClient(currentServerIndex);

// section Toggle
document.getElementById('reviewsToggle').addEventListener('click', () => {
    document.getElementById('reviewsSection').style.display = 'block';
    document.getElementById('currentClientsSection').style.display = 'none';
    document.getElementById('reviewsToggle').classList.add('active');
    document.getElementById('clientsToggle').classList.remove('active');
});

document.getElementById('clientsToggle').addEventListener('click', () => {
    document.getElementById('reviewsSection').style.display = 'none';
    document.getElementById('currentClientsSection').style.display = 'block';
    document.getElementById('reviewsToggle').classList.remove('active');
    document.getElementById('clientsToggle').classList.add('active');
});

// people nav
document.getElementById('peoplePrev').addEventListener('click', () => {
    if (currentPeopleIndex > 0) {
        currentPeopleIndex--;
        renderPeopleClient(currentPeopleIndex);
    }
});

document.getElementById('peopleNext').addEventListener('click', () => {
    if (currentPeopleIndex < peopleClients.length - 1) {
        currentPeopleIndex++;
        renderPeopleClient(currentPeopleIndex);
    }
});

// server nav
document.getElementById('serverPrev').addEventListener('click', () => {
    if (currentServerIndex > 0) {
        currentServerIndex--;
        renderServerClient(currentServerIndex);
    }
});

document.getElementById('serverNext').addEventListener('click', () => {
    if (currentServerIndex < serverClients.length - 1) {
        currentServerIndex++;
        renderServerClient(currentServerIndex);
    }
});

// yeah read like a good boyyyy //