var galleryPaths = {
    home: 'media/galleries/home',
    culture: 'media/galleries/culture',
    freetime: 'media/galleries/freetime',
    practice: 'media/galleries/practice',
};

var cultureSubGalleries = {
    berlin: `${galleryPaths.culture}/berlin`,
    leipzig: `${galleryPaths.culture}/leipzig`,
    schkeuditz: `${galleryPaths.culture}/schkeuditz`,
};

var practiceSubGalleries = {
    week_one: `${galleryPaths.practice}/week_one`,
    week_two: `${galleryPaths.practice}/week_two`,
};

var galleryImages = [
    { path: `${galleryPaths.culture}/leipzig/image1.jpeg`, description: "Engaging Tour: Discover Leipzig's vibrant history. 🏛️ Guided Experience: Learn about local traditions. 📜 Captivating Architecture: Admire stunning buildings. 🏙️" },
    { path: `${galleryPaths.culture}/leipzig/image2.jpeg`, description: "Historical Landmark: Visit St. Thomas Church, a symbol of Leipzig. ⛪ Musical Heritage: Experience the legacy of Bach. 🎶 Architectural Beauty: Marvel at its stunning Gothic design. 🏰" },
    { path: `${galleryPaths.culture}/leipzig/image3.jpeg`, description: "🗿 Iconic Representation: The statue captures the essence of Wolfgang, a symbol of artistic brilliance. 🎨 Artistic Details: Intricate carvings highlight the craftsmanship and dedication to the subject. 🌍 Cultural Significance: A landmark reflecting the rich cultural heritage and history associated with Wolfgang." },
    { path: `${galleryPaths.culture}/leipzig/image4.jpeg`, description: "🌆 Dynamic City: Leipzig boasts a vibrant cultural scene and rich history. 🎶 Musical Legacy: Home to Bach and Mendelssohn, the city celebrates its musical heritage. 🏛️ Architectural Blend: A mix of historic buildings and modern designs. 🌳 Green Spaces: Numerous parks provide a refreshing escape." },
    { path: `${galleryPaths.culture}/leipzig/image5.jpeg`, description: "Tenement 🏢: A multi-family dwelling common in Leipzig, characterized by its ornate facades and communal living spaces, often reflecting the city’s rich architectural history. Town House 🏠: A charming, single-family home typically found in Leipzig’s neighborhoods, known for their stylish designs and vibrant community atmosphere." },
    { path: `${galleryPaths.culture}/leipzig/image6.jpeg`, description: "Battle of Nations ⚔️: Major battle in 1813 against Napoleon. Bach's Home 🎶: Famous composer worked and is buried here. City of Books 📚: Hosts the world's largest book fair. Vibrant Arts 🎨: Thriving arts scene with galleries and theaters. Coffee Culture ☕: Rich history of traditional coffee houses." },
    { path: `${galleryPaths.culture}/leipzig/image7.jpeg`, description: "Historic Landmark 🏛️: Dating back to the 12th century, a key symbol of Leipzig. Bach's Influence 🎶: Home to the famous St. Thomas Boys Choir. Architectural Beauty 🏰: Stunning Gothic architecture with impressive interiors. Cultural Hub 🎭: Hosts concerts and cultural events regularly. Burial Site ⚰️: Final resting place of composer Johann Sebastian Bach." },
    { path: `${galleryPaths.culture}/leipzig/image8.jpeg`, description: "Tribute to a Legend 🎶: Honors composer Johann Sebastian Bach, a key figure in classical music. Cultural Significance 🏛️: Located near St. Thomas Church, where Bach worked. Artistic Detail 🎨: Crafted from bronze, showcasing Bach with a thoughtful expression. Historical Landmark ⏳: A must-see for music enthusiasts visiting Leipzig. Community Gathering Spot 🤝: Often a backdrop for events and celebrations." },
    { path: `${galleryPaths.culture}/leipzig/image9.jpeg`, description: "Modern Architecture 🏢: A striking blend of glass and steel, symbolizing financial innovation. Key Financial Hub 💼: Serves as a central branch in the heart of Leipzig. Sustainability Focus 🌱: Implements eco-friendly practices in banking operations." },
    { path: `${galleryPaths.culture}/leipzig/image10.jpeg`, description: "Eye-catching Artwork ✨: Stunning golden statues adorn the bank's facade, enhancing its visual appeal. Symbol of Prosperity 💰: Represents wealth and financial success in a modern banking context. Cultural Landmark 🏛️: A unique blend of art and architecture, making it a notable attraction in Leipzig." },
    { path: `${galleryPaths.culture}/leipzig/image11.jpeg`, description: "Monumental Tribute: Explore the Völkerschlachtdenkmal, a symbol of peace and unity. ⚔️ Historical Significance: Uncover the stories of the Battle of Nations. 🏰 Stunning Views: Enjoy panoramic vistas from the top of the monument. 🌅" },

    { path: `${galleryPaths.culture}/berlin/image1.jpeg`, description: "🌍 Futuristic Vision: At Futurium, we explore the future of IT, where innovation meets imagination. 💻 Cyberspace Showcase: The exhibit highlights groundbreaking technologies that redefine our world and digital landscape. 🚀 Inspiration: Engaging displays ignite curiosity, sparking discussions about the possibilities of tomorrow!" },
    { path: `${galleryPaths.culture}/berlin/image2.jpeg`, description: "🚀 Visionary Hub: Discover the cutting-edge of technology and innovation at Futurium. 🌐 Digital Frontier: Explore exhibits showcasing future possibilities in IT and beyond. 💡 Creative Inspiration: Dive into a world where imagination shapes tomorrow's solutions." },
    { path: `${galleryPaths.culture}/berlin/image3.jpeg`, description: "🌆 Architectural Marvel: Berlin Hauptbahnhof stands as Europe's largest train station, a stunning blend of glass and steel. 🚉 Central Hub: A bustling gateway connecting travelers from around the world. 🏙️ City Icon: Its modern design symbolizes Berlin's dynamic spirit and rich history. 🌿 Green Spaces: Surrounding gardens provide a refreshing contrast to the urban landscape." },
    { path: `${galleryPaths.culture}/berlin/image4.jpeg`, description: "🏡 Presidential Residence: A stately home representing the leadership of Germany. 🇩🇪 Official Residence: Where Chancellor Olaf Scholz resides, reflecting modern German politics. 🌳 Tranquil Setting: Surrounded by peaceful gardens, offering a blend of privacy and diplomacy." },
    { path: `${galleryPaths.culture}/berlin/image5.jpeg`, description: "🏛️ Iconic Landmark: The Reichstag, home to Germany's Parliament, symbolizes democracy and unity. 🇩🇪 Historical Significance: A building with a storied past, from its 19th-century origins to modern-day governance. 🌐 Architectural Marvel: Featuring a striking glass dome, it offers panoramic views of Berlin and represents transparency in government." },
    { path: `${galleryPaths.culture}/berlin/image6.jpeg`, description: "🧱 Historical Divider: The Berlin Wall, once separating East and West Berlin, symbolizes the Cold War era. 🇩🇪 Unity and Freedom: Its fall in 1989 marked the end of division and the reunification of Germany. 🎨 Street Art Canvas: Today, remnants of the wall are covered in vibrant murals, celebrating peace and freedom." },
    { path: `${galleryPaths.culture}/berlin/image7.jpeg`, description: "🇩🇪 Iconic Landmark: The Brandenburg Gate stands as a symbol of Berlin and Germany's unity. 🏛️ Neoclassical Architecture: Its grand design, with towering columns, represents peace and triumph. 🌍 Historical Significance: Once a divider during the Cold War, it now represents reunification and hope." },
    { path: `${galleryPaths.culture}/berlin/image8.jpeg`, description: "🕊️ Tragic Story: Chris Gueffroy, the last known victim of the East German regime, lost his life trying to escape across the Berlin Wall. 🚧 Desperate Escape: In 1989, his attempt for freedom ended in a tragic confrontation with border guards. 🗝️ Symbol of Resistance: His death became a poignant reminder of the human cost of division during the final months of the GDR." },
    { path: `${galleryPaths.culture}/berlin/image9.jpeg`, description: "🕊️ Solemn Memorial: The Memorial to the Murdered Jews of Europe honors the millions of Jewish victims of the Holocaust. 📜 Historical Reflection: A vast field of concrete stelae symbolizes the immense loss and suffering. 🌍 Global Significance: This powerful site invites contemplation and remembrance of one of history's darkest chapters, serving as a reminder to future generations." },
    { path: `${galleryPaths.culture}/berlin/image10.jpeg`, description: "🎓 Prestigious Institution: Humboldt University is one of Germany's oldest and most renowned universities. 📚 Intellectual Legacy: Home to many famous thinkers, including Albert Einstein and Karl Marx. 🏛️ Historic Architecture: The stunning campus blends tradition with modern academic excellence. 🌍 Global Impact: A center for groundbreaking research and academic innovation, shaping ideas worldwide." },
    { path: `${galleryPaths.culture}/berlin/image11.jpeg`, description: "⛪ Majestic Cathedral: The Berlin Cathedral (Berliner Dom) stands as a symbol of the city's rich history and grandeur. 🏛️ Architectural Masterpiece: This Baroque-style cathedral is known for its intricate design and impressive dome. 🎶 Cultural Significance: A venue for concerts and religious services, it also houses royal tombs. 🌅 Panoramic Views: Climb to the top of the dome for breathtaking views of Berlin's skyline." },
    { path: `${galleryPaths.culture}/berlin/image12.jpeg`, description: "🏛️ Architectural Gem: The Old Museum (Altes Museum) on Museum Island showcases neoclassical design, reflecting Berlin's cultural heritage. 🎨 Art and History: Home to a rich collection of ancient artifacts, including Greek and Roman masterpieces. 🖼️ Cultural Hub: It plays a vital role in Berlin's museum landscape, attracting art enthusiasts and history buffs alike. 🌿 Scenic Surroundings: Located amidst beautiful gardens, it offers a serene atmosphere for exploration." },
    { path: `${galleryPaths.culture}/berlin/image13.jpeg`, description: "📺 Iconic Landmark: The Berlin TV Tower (Fernsehturm) stands as a symbol of the city’s skyline, reaching 368 meters high. 🌆 Panoramic Views: Visitors can enjoy breathtaking 360-degree views of Berlin from its observation deck, making it a must-visit attraction. 🍽️ Dining Experience: The tower features a revolving restaurant, providing a unique dining experience against the backdrop of the city. 🌟 Cultural Significance: Originally built in the 1960s, it reflects Berlin's historical evolution and remains a favorite among locals and tourists." },
    { path: `${galleryPaths.culture}/berlin/image14.jpeg`, description: "🕰️ Global Timekeeper: The World Clock (Weltzeituhr) in Alexanderplatz displays the current time in cities around the world, symbolizing Berlin's connection to the globe. 🌍 Iconic Design: Designed by Erich John in 1969, its unique spherical structure and rotating discs make it a striking landmark. 📍 Popular Meeting Point: This vibrant clock is a favorite gathering spot for locals and tourists alike, often bustling with energy and activity. 🎉 Cultural Landmark: The World Clock is a significant part of Berlin’s cultural fabric, reflecting the city's history as a cosmopolitan hub." },


    { path: `${galleryPaths.practice}/week_one/image1.jpeg`, description: "📝 Introduction: We were introduced to the internship, covering essential rules and guidelines. 📚 Orientation: Discussions included expectations, responsibilities, and company culture. 🔍 Insights: We gained a clear understanding of the internship structure and support available." },
    { path: `${galleryPaths.practice}/week_one/image2.jpeg`, description: "📝 Overview: We were oriented about the internship, including important rules and regulations. 📚 Session Details: The introduction included an overview of our roles, expectations, and the work environment. 🔍 Understanding: We received valuable insights into the internship framework and available resources." },
    { path: `${galleryPaths.practice}/week_one/image3.jpeg`, description: "Course Title: HTML, CSS, and JavaScript: A Comprehensive Introduction 🌐 Join our group to master the essentials of web development! 🚀 Learn to create stunning websites using HTML for structure, CSS for styling, and JavaScript for interactivity through hands-on projects and collaborative learning. 💻" },
    { path: `${galleryPaths.practice}/week_one/image4.jpeg`, description: "💻 Web Development: We explored website development using TypeScript, CSS, and HTML with Node.js. 🌐 Frameworks & Tools: We examined various frameworks and tools to enhance our development process. 🚀 Hands-On Practice: We engaged in practical exercises to solidify our understanding of modern web technologies." },

    { path: `${galleryPaths.practice}/week_two/image1.jpeg`, description: "📱 Hands-On Learning: Apprentices collaborate to design an innovative smartphone system. 🔧 Teamwork: Each member contributes unique skills, enhancing our project through collaboration. 🚀 Excitement: The atmosphere is filled with enthusiasm as ideas come to life!" },
    { path: `${galleryPaths.practice}/week_two/image2.jpeg`, description: "🛠️ Development Stage: Our apprentices dive into coding, developing crucial features for the smartphone system. 💡 Problem-Solving: Challenges arise, but the team works together to find effective solutions. 🤝 Learning Together: Knowledge is shared, fostering growth and creativity!" },
    { path: `${galleryPaths.practice}/week_two/image3.jpeg`, description: "📊 Testing Phase: Apprentices rigorously test the smartphone system, ensuring functionality and user experience. 🔍 Attention to Detail: Each test reveals insights, driving improvements. 🎉 Progress: Celebrating milestones as the project nears completion, showcasing our hard work!" },
    { path: `${galleryPaths.practice}/week_two/image4.jpeg`, description: "🔧 Creative Tinkering: In our lively workshop, we dive into the world of electrical contacts, experimenting with various designs and configurations. 💡 Smart Home Innovations: Our projects focus on integrating cutting-edge technology, enhancing everyday life through automation and efficiency. 🤝 Collaborative Spirit: Working together fuels our passion for invention, turning ideas into reality as we explore the possibilities of modern living." },
    { path: `${galleryPaths.practice}/week_two/image5.jpeg`, description: "⚡ Hands-On Engineering: Surrounded by tools and components, we engage in the art of tinkering, crafting reliable electrical connections for our smart home projects. 🏠 Future-Ready Solutions: Our experiments aim to create intuitive devices that seamlessly blend into daily routines, making homes smarter and more connected. 💡 Inspiring Curiosity: Each session sparks new ideas, igniting our enthusiasm for technology and innovation in the realm of home automation." },

    { path: `${galleryPaths.home}/image1.jpeg`, description: "🏠 Our Home: We reside in a charming old brewery, now known as Gut Wehlitz. 🍺 Rich History: This unique building boasts a rich history, transforming from a bustling brewery into a cozy living space. 🌳 Tranquil Surroundings: Surrounded by serene landscapes, it offers a perfect blend of comfort and nature." },
    { path: `${galleryPaths.home}/image2.jpeg`, description: "☕️ Coffee Bliss: Savoring the rich aroma and warmth of a freshly brewed cup." },

    { path: `${galleryPaths.freetime}/image1.jpeg`, description: "Engaging Playtime: Enjoy a friendly pool match. 🎱 Competitive Spirit: Two friends test their skills. 🥇 Social Connection: Building memories over a game. 🤝" },
    { path: `${galleryPaths.freetime}/image2.jpeg`, description: "Strategic Moves: Each player plans their next step. ♟️ Tactical Mindset: A battle of wits unfolds. 🧠 Focused Competition: Silence fills the room as they play. 🤫" },
    { path: `${galleryPaths.freetime}/image3.jpeg`, description: "Joyful Gathering: Friends come together to share a meal. 🍽️ Laughter & Stories: Delicious food fuels great conversations. 😂 Memorable Moments: Building bonds over tasty bites. 🥳" },
    { path: `${galleryPaths.freetime}/image4.jpeg`, description: "Here’s our friend playing darts. 🎯 Focused and determined, he aims for the bullseye, showcasing skill and precision in every throw." },
    { path: `${galleryPaths.freetime}/image5.jpeg`, description: "Our teachers enjoying a game of pool. 🎱 Engaging in friendly competition, they showcase their strategic skills and teamwork while having a great time." },
    { path: `${galleryPaths.freetime}/image6.jpeg`, description: "Two friends intensely competing in FIFA on their console. 🎮 With controllers in hand, they strategize, celebrate goals, and enjoy the thrill of the game." },
    { path: `${galleryPaths.freetime}/image7.jpeg`, description: "Two friends engaged in a friendly game of ping pong. 🏓 Focused and competitive, they exchange fast-paced rallies, enjoying every moment of their spirited match." },
    { path: `${galleryPaths.freetime}/image8.jpeg`, description: "Meet our dedicated 'slave'—the only person who can mop the floor faster than a cheetah! 🧽🏃‍♂️ Watch him turn cleaning into an Olympic event, battling dirt like a superhero. If only we could bottle his enthusiasm and sell it! 😂" },
];

var choosedGallery;
var galleryPath;

var imagePaths = {}; // Change from array to dictionary
var currentImageIndex = 0;

const thumbnailsContainer = document.querySelector('.thumbnail-gallery');

function loadImages() {
    // Check if the chosen gallery and path are valid
    if (choosedGallery && galleryPath) {
        // Validate that the choosedGallery exists in galleryPaths
        if (!galleryPaths[choosedGallery]) {
            console.error(`Invalid gallery chosen: ${choosedGallery}`);
            return; // Exit the function if the gallery is invalid
        }

        // Reset imagePaths and currentImageIndex
        imagePaths = {};
        currentImageIndex = 0;

        // Clear any existing thumbnails
        thumbnailsContainer.innerHTML = '';

        document.getElementById('gallery-image').src = "./media/loading.gif"; // Replace with your loading image path
        document.getElementById('image_desc').innerText = "Loading...";

        // Create an array to hold the promises for loading images
        const loadPromises = [];
        const thumbnails = []; // Array to store the thumbnails

        // Load all images
        galleryImages.forEach(function (image) {
            const imgPath = image.path;
            const imgDescription = image.description;

            // Check if the imgPath starts with the current gallery path
            if (imgPath.startsWith(galleryPath)) {
                const imgPromise = new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = imgPath;

                    img.onload = function () {
                        // Extract the index from the image file name using regex
                        const match = imgPath.match(/image(\d+)\.jpeg/);
                        if (match) {
                            const index = parseInt(match[1], 10) - 1; // Convert to a zero-based index
                            imagePaths[index] = imgPath; // Assign the loaded image to the specified index
                            
                            const thumbnail = document.createElement('img');
                            thumbnail.src = imgPath; // Use the same image path for the thumbnail
                            thumbnail.alt = `Thumbnail ${index + 1}`; // Set a descriptive alt text
                            thumbnail.className = 'thumbnail'; // Apply thumbnail styling
                            thumbnail.dataset.index = index; // Store the index in a data attribute
                            thumbnail.onclick = function() {
                                displayImage(index);
                                currentImageIndex = index
                            };
                            
                            // Store the thumbnail in the array
                            thumbnails[index] = thumbnail;
                        }
                        resolve(); // Resolve the promise when the image is loaded
                    };
                    
                    img.onerror = function () {
                        console.log("Image not found: ".concat(imgPath));
                        reject(); // Reject the promise if there is an error
                    };
                });

                loadPromises.push(imgPromise); // Add the promise to the array
            }
        });

        // Wait for all images to load before displaying the first image
        Promise.all(loadPromises)
            .then(() => {
                // Sort the thumbnails array based on the index
                const sortedThumbnails = thumbnails.filter(Boolean).sort((a, b) => {
                    return parseInt(a.dataset.index) - parseInt(b.dataset.index);
                });

                if (imagePaths[0]) {
                    displayImage(currentImageIndex); // Show the first image immediately
                }

                // Append the sorted thumbnails to the container
                sortedThumbnails.forEach(thumbnail => {
                    thumbnailsContainer.appendChild(thumbnail);
                });

                // If the first image is loaded, display it
            })
            .catch(() => {
                console.error('One or more images failed to load.');

                document.getElementById('gallery-image').src = "./media/404.png"
                document.getElementById('image_desc').innerText = "No gallery found!";
            });
    } else {
        console.error('No gallery selected or gallery path is not set.');
    }
}


function loadImageDescription(index) {
    var descriptionElement = document.getElementById('image_desc');
    if (descriptionElement && Object.keys(imagePaths).length > 0) {
        var currentImage = galleryImages.find(image => image.path === imagePaths[index]);
        if (currentImage) {
            descriptionElement.innerText = currentImage.description;
        } else {
            descriptionElement.innerText = 'Description not available.';
        }
    }
}

let activeThumbnail = null;

function displayImage(index) {
    var imageElement = document.getElementById('gallery-image');
    if (imageElement && Object.keys(imagePaths).length > 0) {
        // Remove the fade class if it exists
        imageElement.classList.remove('fade');

        imageElement.addEventListener('click', () => {openLightbox(imageElement.src)})

        // Use a timeout to allow the class removal to take effect
        setTimeout(() => {
            imageElement.src = imagePaths[index]; // Use the dictionary to get the image path
            imageElement.classList.add('fade'); // Add the fade class for animation

            // Handle the active thumbnail overlay
            if (activeThumbnail) {
                activeThumbnail.classList.remove('active-thumbnail'); // Remove white overlay from the previous thumbnail
            }
            // Select the current thumbnail using the index and apply the active class
            const currentThumbnail = thumbnailsContainer.children[index];
            if (currentThumbnail) {
                currentThumbnail.classList.add('active-thumbnail'); // Apply white overlay
                activeThumbnail = currentThumbnail; // Update the active thumbnail reference
            }
            loadImageDescription(index)

        }, 50); // Small timeout to ensure class removal takes effect
    }
}

function updateGallery(newGallery, subGallery) {
    choosedGallery = newGallery;
    if (newGallery === 'culture' && subGallery) {
        galleryPath = cultureSubGalleries[subGallery];
    } else if (newGallery === 'practice' && subGallery) {
        galleryPath = practiceSubGalleries[subGallery];
    } else {
        if (newGallery.length > 0) {
            galleryPath = galleryPaths[newGallery];
        }
    }
    if (galleryPath) {
        loadImages();
    }
}

function navigateImages(direction) {
    if (Object.keys(imagePaths).length === 0) {
        return;
    }

    currentImageIndex = direction === 'next'
        ? (currentImageIndex + 1) % Object.keys(imagePaths).length
        : (currentImageIndex - 1 + Object.keys(imagePaths).length) % Object.keys(imagePaths).length;

    displayImage(currentImageIndex);
}

function handleButtonClick(event) {
    var galleryContainer = document.querySelector(".image-container");
    var thumbnail_gallery = document.getElementsByClassName("thumbnail-gallery")[0]
    var videoContainer = document.getElementById("video-container");

    var target = event.target;

    galleryContainer.style.display = "flex"; // Hide the gallery
    thumbnail_gallery.style.display = "block";
    videoContainer.style.display = "none"; // Show the video
    if (target instanceof HTMLButtonElement && !target.classList.contains('arrow-button')) {
        var galleryId = target.id.replace('-button', ''); // Remove the '-button' suffix
        updateGallery(galleryId);
    } else if (target instanceof HTMLSpanElement) {
        var subGallery = target.dataset.city || target.dataset.week;
        var galleryType = target.classList.contains('city') ? 'culture' : 'practice';
        updateGallery(galleryType, subGallery);
    } else if (target.classList.contains('arrow-button')) {
        var direction = target.dataset.direction;
        navigateImages(direction);
    }
}

function initializeButtons() {
    var smartHomeButton = document.getElementById("smart-home-button");
    var galleryContainer = document.querySelector(".image-container");
    var thumbnail_gallery = document.getElementsByClassName("thumbnail-gallery")[0]
    var galleryImage = document.getElementById("gallery-image");
    var imageDesc = document.getElementById("image_desc");
    var videoContainer = document.getElementById("video-container");

    var buttons = document.querySelectorAll('.navbar button');
    var spans = document.querySelectorAll('.dropdown-menu span');
    var arrows = document.querySelectorAll('.arrow-button');
    buttons.forEach(function (button) {
        button.addEventListener('click', handleButtonClick);
    });
    spans.forEach(function (span) {
        span.addEventListener('click', handleButtonClick);
    });
    arrows.forEach(function (arrow) {
        arrow.addEventListener('click', handleButtonClick);
    });

    smartHomeButton.addEventListener("click", function() {
        galleryContainer.style.display = "none"; // Hide the gallery
        thumbnail_gallery.style.display = "none";
        videoContainer.style.display = "flex"; // Show the video
        document.getElementById("smart-home-video").play(); // Play the video
    });


    // Hide the TOS popup when the close button is clicked
    document.getElementById('close-tos').addEventListener('click', function () {
        document.getElementById('tos-popup').style.display = 'none'; // Hide TOS popup
    });

    // Hide the TOS popup when the decline button is clicked
    document.getElementById('decline-tos').addEventListener('click', function () {
        document.getElementById('tos-popup').style.display = 'none'; // Hide TOS popup
    });

    // Optionally, you can implement what happens when the accept button is clicked
    document.getElementById('accept-tos').addEventListener('click', function () {
        // Logic to handle acceptance of TOS (e.g., storing acceptance in local storage)
        document.getElementById('tos-popup').style.display = 'none'; // Hide TOS popup
    });

    

}

function openLightbox(src, alt) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    
    lightboxImage.src = src; // Set the image source
    lightbox.style.display = 'flex'; // Show the lightbox
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Hide the lightbox
}

window.onload = function() {
    initializeButtons();
    updateGallery('home'); // Load home gallery by default
};
