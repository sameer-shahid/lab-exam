const speakersData = [
    {
        name: 'Yochai Benkler',
        title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        bio: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
        image: 'path/to/speaker1.jpg'
    },
    {
        name: 'Kilnam Chon',
        title: 'Internet Hall of Fame Inductee',
        bio: 'Kilnam Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the Internet Society\'s (ISOC) Internet Hall of Fame.',
        image: 'path/to/speaker2.jpg'
    },
    {
        name: 'SohYeong Noh',
        title: 'Director of Art Centre Nabi and a board member of CC Korea',
        bio: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration among science technology, humanities, and the arts.',
        image: 'path/to/speaker3.jpg'
    },
    {
        name: 'Julia Leda',
        title: 'President of Young Pirates of Europe',
        bio: 'European integration, political democracy and participation of youth through online as her major condern, Reda\'s report outlining potential changes to EU copyright law was approved by the Parliament in July.',
        image: 'path/to/speaker4.jpg'
    },
    {
        name: 'Lila Tretikov',
        title: 'Executive Director of the Wikimedia Foundation',
        bio: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',
        image: 'path/to/speaker5.jpg'
    },
    {
        name: 'Ryan Merkley',
        title: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
        bio: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.',
        image: 'path/to/speaker6.jpg'
    }
];

function createSpeakerElement(speaker) {
    return `
        <div class="speaker">
            <div class="speaker-image-container">
                <div class="checkerboard-bg"></div>
                <img src="${speaker.image}" alt="${speaker.name}">
            </div>
            <div class="speaker-info">
                <h3>${speaker.name}</h3>
                <p class="speaker-title">${speaker.title}</p>
                <div class="separator"></div>
                <p class="speaker-bio">${speaker.bio}</p>
            </div>
        </div>
    `;
}

function loadSpeakers(showAll = false) {
    const speakersGrid = document.querySelector('.speakers-grid');
    const speakersToShow = showAll ? speakersData : speakersData.slice(0, 2);
    
    speakersGrid.innerHTML = speakersToShow
        .map(speaker => createSpeakerElement(speaker))
        .join('');
        
    // Show/hide more button based on whether there are more speakers
    const moreButton = document.getElementById('moreSpeakersBtn');
    if (speakersData.length <= 2) {
        moreButton.style.display = 'none';
    }
}

function initializeSpeakers() {
    loadSpeakers(false); // Initially load only 2 speakers
    
    const moreButton = document.getElementById('moreSpeakersBtn');
    let expanded = false;
    
    moreButton.addEventListener('click', () => {
        expanded = !expanded;
        loadSpeakers(expanded);
        
        if (expanded) {
            moreButton.innerHTML = 'LESS <i class="fas fa-chevron-up"></i>';
            moreButton.classList.add('expanded');
        } else {
            moreButton.innerHTML = 'MORE <i class="fas fa-chevron-down"></i>';
            moreButton.classList.remove('expanded');
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeSpeakers);
