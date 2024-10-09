/*
type GalleryPaths = Record<string, string>;

type SubGalleries<T extends string> = Record<T, string>;

type GalleryImage = {
    path: string;
    description: string;
};

type ImagePathsDictionary = Record<number, string>;

type GalleryState<T extends string> = {
    choosedGallery: T | null;
    galleryPath: string | null;
    imagePaths: ImagePathsDictionary;
    currentImageIndex: number;
    galleryImages: GalleryImage[];
};

const galleryPaths: GalleryPaths = {
    home: 'media/galleries/home',
    culture: 'media/galleries/culture',
    freetime: 'media/galleries/freetime',
    practice: 'media/galleries/practice',
};

const subGalleries: Record<keyof typeof galleryPaths, SubGalleries<string>> = {
    culture: {
        berlin: `${galleryPaths.culture}/berlin`,
        leipzig: `${galleryPaths.culture}/leipzig`,
    },
    practice: {
        week_one: `${galleryPaths.practice}/week_one`,
        week_two: `${galleryPaths.practice}/week_two`,
    },
    home: {},
    freetime: {},
};

const galleryImages: GalleryImage[] = [
    { path: ${galleryPaths.culture}/berlin/image1.jpeg, description: "Description for image 1 in Berlin" },
    { path: ${galleryPaths.culture}/berlin/image2.jpeg, description: "Description for image 2 in Berlin" },
    { path: ${galleryPaths.culture}/berlin/image3.jpeg, description: "Description for image 3 in Berlin" },
    { path: ${galleryPaths.culture}/leipzig/image1.jpeg, description: "Engaging Tour: Discover Leipzig's vibrant history. 🏛️ Guided Experience: Learn about local traditions. 📜 Captivating Architecture: Admire stunning buildings. 🏙️" },
    { path: ${galleryPaths.culture}/leipzig/image2.jpeg, description: "Historical Landmark: Visit St. Thomas Church, a symbol of Leipzig. ⛪ Musical Heritage: Experience the legacy of Bach. 🎶 Architectural Beauty: Marvel at its stunning Gothic design. 🏰" },
    { path: ${galleryPaths.culture}/leipzig/image3.jpeg, description: "🗿 Iconic Representation: The statue captures the essence of Wolfgang, a symbol of artistic brilliance. 🎨 Artistic Details: Intricate carvings highlight the craftsmanship and dedication to the subject. 🌍 Cultural Significance: A landmark reflecting the rich cultural heritage and history associated with Wolfgang." },
    { path: ${galleryPaths.culture}/leipzig/image4.jpeg, description: "🌆 Dynamic City: Leipzig boasts a vibrant cultural scene and rich history. 🎶 Musical Legacy: Home to Bach and Mendelssohn, the city celebrates its musical heritage. 🏛️ Architectural Blend: A mix of historic buildings and modern designs. 🌳 Green Spaces: Numerous parks provide a refreshing escape." },
    { path: ${galleryPaths.culture}/leipzig/image5.jpeg, description: "Tenement 🏢: A multi-family dwelling common in Leipzig, characterized by its ornate facades and communal living spaces, often reflecting the city’s rich architectural history. Town House 🏠: A charming, single-family home typically found in Leipzig’s neighborhoods, known for their stylish designs and vibrant community atmosphere." },
    { path: ${galleryPaths.culture}/leipzig/image6.jpeg, description: "Battle of Nations ⚔️: Major battle in 1813 against Napoleon. Bach's Home 🎶: Famous composer worked and is buried here. City of Books 📚: Hosts the world's largest book fair. Vibrant Arts 🎨: Thriving arts scene with galleries and theaters. Coffee Culture ☕: Rich history of traditional coffee houses." },
    { path: ${galleryPaths.culture}/leipzig/image7.jpeg, description: "Historic Landmark 🏛️: Dating back to the 12th century, a key symbol of Leipzig. Bach's Influence 🎶: Home to the famous St. Thomas Boys Choir. Architectural Beauty 🏰: Stunning Gothic architecture with impressive interiors. Cultural Hub 🎭: Hosts concerts and cultural events regularly. Burial Site ⚰️: Final resting place of composer Johann Sebastian Bach." },
    { path: ${galleryPaths.culture}/leipzig/image8.jpeg, description: "Tribute to a Legend 🎶: Honors composer Johann Sebastian Bach, a key figure in classical music. Cultural Significance 🏛️: Located near St. Thomas Church, where Bach worked. Artistic Detail 🎨: Crafted from bronze, showcasing Bach with a thoughtful expression. Historical Landmark ⏳: A must-see for music enthusiasts visiting Leipzig. Community Gathering Spot 🤝: Often a backdrop for events and celebrations." },
    { path: ${galleryPaths.culture}/leipzig/image9.jpeg, description: "Modern Architecture 🏢: A striking blend of glass and steel, symbolizing financial innovation. Key Financial Hub 💼: Serves as a central branch in the heart of Leipzig. Sustainability Focus 🌱: Implements eco-friendly practices in banking operations." },
    { path: ${galleryPaths.culture}/leipzig/image10.jpeg, description: "Eye-catching Artwork ✨: Stunning golden statues adorn the bank's facade, enhancing its visual appeal. Symbol of Prosperity 💰: Represents wealth and financial success in a modern banking context. Cultural Landmark 🏛️: A unique blend of art and architecture, making it a notable attraction in Leipzig." },
    { path: ${galleryPaths.practice}/week_one/image1.jpeg, description: "📝 Introduction: We were introduced to the internship, covering essential rules and guidelines. 📚 Orientation: Discussions included expectations, responsibilities, and company culture. 🔍 Insights: We gained a clear understanding of the internship structure and support available." },
    { path: ${galleryPaths.practice}/week_one/image2.jpeg, description: "📝 Overview: We were oriented about the internship, including important rules and regulations. 📚 Session Details: The introduction included an overview of our roles, expectations, and the work environment. 🔍 Understanding: We received valuable insights into the internship framework and available resources." },
    { path: ${galleryPaths.practice}/week_one/image3.jpeg, description: "Course Title: HTML, CSS, and JavaScript: A Comprehensive Introduction 🌐 Join our group to master the essentials of web development! 🚀 Learn to create stunning websites using HTML for structure, CSS for styling, and JavaScript for interactivity through hands-on projects and collaborative learning. 💻" },
    { path: ${galleryPaths.practice}/week_one/image4.jpeg, description: "💻 Web Development: We explored website development using TypeScript, CSS, and HTML with Node.js. 🌐 Frameworks & Tools: We examined various frameworks and tools to enhance our development process. 🚀 Hands-On Practice: We engaged in practical exercises to solidify our understanding of modern web technologies." },
    { path: ${galleryPaths.home}/image1.jpeg, description: "🏠 Our Home: We reside in a charming old brewery, now known as Gut Wehlitz. 🍺 Rich History: This unique building boasts a rich history, transforming from a bustling brewery into a cozy living space. 🌳 Tranquil Surroundings: Surrounded by serene landscapes, it offers a perfect blend of comfort and nature." },
    { path: ${galleryPaths.home}/image2.jpeg, description: "☕️ Coffee Bliss: Savoring the rich aroma and warmth of a freshly brewed cup." },
    { path: ${galleryPaths.freetime}/image1.jpeg, description: "Engaging Playtime: Enjoy a friendly pool match. 🎱 Competitive Spirit: Two friends test their skills. 🥇 Social Connection: Building memories over a game. 🤝" },
    { path: ${galleryPaths.freetime}/image2.jpeg, description: "Strategic Moves: Each player plans their next step. ♟️ Tactical Mindset: A battle of wits unfolds. 🧠 Focused Competition: Silence fills the room as they play. 🤫" },
    { path: ${galleryPaths.freetime}/image3.jpeg, description: "Joyful Gathering: Friends come together to share a meal. 🍽️ Laughter & Stories: Delicious food fuels great conversations. 😂 Memorable Moments: Building bonds over tasty bites. 🥳" },
    { path: ${galleryPaths.freetime}/image4.jpeg, description: "Here’s our friend playing darts. 🎯 Focused and determined, he aims for the bullseye, showcasing skill and precision in every throw." },
    { path: ${galleryPaths.freetime}/image5.jpeg, description: "Our teachers enjoying a game of pool. 🎱 Engaging in friendly competition, they showcase their strategic skills and teamwork while having a great time." },
    { path: ${galleryPaths.freetime}/image6.jpeg, description: "Two friends intensely competing in FIFA on their console. 🎮 With controllers in hand, they strategize, celebrate goals, and enjoy the thrill of the game." },
    { path: ${galleryPaths.freetime}/image7.jpeg, description: "Two friends engaged in a friendly game of ping pong. 🏓 Focused and competitive, they exchange fast-paced rallies, enjoying every moment of their spirited match." },
    { path: ${galleryPaths.freetime}/image8.jpeg, description: "A friendly chess match unfolds, showcasing strategic thinking and concentration. ♟️ Each player carefully considers their moves in this classic game of intellect." },
    { path: ${galleryPaths.freetime}/image9.jpeg, description: "Our friend playing darts 🎯, aiming for the bullseye. Skillful throws and excitement fill the air!" },
    { path: ${galleryPaths.freetime}/image10.jpeg, description: "A thrilling FIFA match 🎮 between two friends, showcasing their gaming skills and passion for competition." },
];

let choosedGallery: keyof typeof galleryPaths | null = null;
let galleryPath: string | null = null;
let imagePaths: string[] = [];
let currentImageIndex: number = 0;

function loadImages(): void {
    if (!choosedGallery || !galleryPath) return;

    imagePaths = galleryImages
        .filter(image => image.path.startsWith(galleryPath!))
        .map(image => image.path);

    if (imagePaths.length > 0) {
        displayImage(currentImageIndex);
    }
}

function displayImage(index: number): void {
    const imageElement = document.getElementById('gallery-image') as HTMLImageElement | null;
    const descriptionElement = document.getElementById('image_desc') as HTMLElement | null;
    
    if (imageElement && descriptionElement && imagePaths.length > 0) {
        const selectedImage = galleryImages.find(image => image.path === imagePaths[index]);
        if (selectedImage) {
            imageElement.src = selectedImage.path;
            descriptionElement.textContent = selectedImage.description || 'Description not available.';
        }
    }
}

function updateGallery<T extends keyof typeof galleryPaths>(newGallery: T, subGallery?: string): void {
    choosedGallery = newGallery;
    galleryPath = subGalleries[newGallery]?.[subGallery as keyof typeof subGalleries[T]] ?? galleryPaths[newGallery];
    loadImages();
}

function navigateImages(direction: 'next' | 'prev'): void {
    if (imagePaths.length === 0) return;
    currentImageIndex = (currentImageIndex + (direction === 'next' ? 1 : -1) + imagePaths.length) % imagePaths.length;
    displayImage(currentImageIndex);
}

function handleButtonClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (target instanceof HTMLButtonElement) {
        updateGallery(target.id as keyof typeof galleryPaths);
    } else if (target.dataset.subgallery) {
        const galleryType = target.classList.contains('city') ? 'culture' : 'practice';
        updateGallery(galleryType as keyof typeof galleryPaths, target.dataset.subgallery!);
    } else if (target.classList.contains('arrow-button')) {
        navigateImages(target.dataset.direction as 'next' | 'prev');
    }
}

function initializeButtons(): void {
    document.querySelectorAll('.navbar button, .dropdown-menu span, .arrow-button')
        .forEach(element => element.addEventListener('click', handleButtonClick));
}

window.onload = initializeButtons;
