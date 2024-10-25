const speakers = [
    {
        name: "John Appleseed",
        role: "Senior iOS Developer at Apple",
        image: "images/speaker1.jpg",
        bio: "John has been developing iOS apps for over a decade and is passionate about sharing his knowledge with aspiring developers."
    },
    {
        name: "Sarah Swift",
        role: "Founder of SwiftUI Mastery",
        image: "images/speaker2.jpg",
        bio: "Sarah is a SwiftUI expert and has helped thousands of developers transition from UIKit to SwiftUI through her online courses and workshops."
    },
    {
        name: "Mike Xcode",
        role: "iOS Architect at Google",
        image: "images/speaker3.jpg",
        bio: "Mike specializes in building scalable iOS architectures and has worked on some of the most popular apps in the App Store."
    },
    {
        name: "Emily Framework",
        role: "iOS Instructor at Udacity",
        image: "images/speaker4.jpg",
        bio: "Emily has a passion for teaching and has helped hundreds of students launch their careers in iOS development through her online courses."
    }
];

function createSpeakerCard(speaker) {
    return `
        <div class="speaker-card">
            <img src="${speaker.image}" alt="${speaker.name}">
            <h3>${speaker.name}</h3>
            <p class="role">${speaker.role}</p>
            <p class="bio">${speaker.bio}</p>
        </div>
    `;
}

function loadSpeakers() {
    const speakersGrid = document.querySelector('.speakers-grid');
    speakers.forEach(speaker => {
        speakersGrid.innerHTML += createSpeakerCard(speaker);
    });
}

document.addEventListener('DOMContentLoaded', loadSpeakers);
