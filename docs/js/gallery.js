document.addEventListener("DOMContentLoaded", () => {
    const videos_i2v = [
        
    ]
    
    const videos_t2v = [
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00113.mp4",
            "description": "113-T2V: Static camera, two men shake hands happily, the background is in a modern office."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00115.mp4",
            "description": "115-T2V: Close up shot, a boy stretches out his right hand and happily stroked the head of a Border Collie."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00121.mp4",
            "description": "121-T2V: Handheld tracking, following a black car on the road."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00129.mp4",
            "description": "129-T2V: The camera shots at a man's entire body, and the man turns left and walks."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00130.mp4",
            "description": "130-T2V: The camera shots at a man's entire body, and the man jumps from the ground."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00209.mp4",
            "description": "209-T2V: A wide shot of a group of friends, all in their late 20s, enjoying a sunny day in a backyard. Some are grilling food, others are sitting at a picnic table, and a couple is playing with a dog. The camera captures the laughter, the food being passed around, and the casual, friendly interactions."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00210.mp4",
            "description": "210-T2V: The camera captures a asian man in a workplace reacting to unfair treatment, showcasing the subtle expressions of frustration and injustice."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00211.mp4",
            "description": "211-T2V: The camera films a group of asian teenagers playing table tennis on an outdoor court, highlighting their energy, agility, and team dynamics."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00213.mp4",
            "description": "213-T2V: The camera circles around a chinese woman dancer, capturing the fluidity of their movements and the contrast between their dynamic motion and the stationary environment."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00215.mp4",
            "description": "215-T2V: The camera focuses on a character\u2019s hands assembling a mechanical model with speed and precision. The rapid and exact hand movements are closely followed by the camera, ending with a shot of the completed model."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00221.mp4",
            "description": "221-T2V: A group of Japanese samurai standing in a traditional courtyard, wearing elaborate armor and holding katanas. The camera captures the discipline and honor in their stance."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00228.mp4",
            "description": "228-T2V: The camera focuses on a person\u2019s face as they transition from a smile to a frown within a few seconds, highlighting the nuances of facial muscle movement."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00229.mp4",
            "description": "229-T2V: The camera captures the moment two people lock eyes, showcasing the subtle communication conveyed through their gaze."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00233.mp4",
            "description": "233-T2V: The camera remains fixed in a static scene, showing a character\u2019s rapid shift in facial expressions from joy to sorrow, capturing the quick transformation of their features."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00234.mp4",
            "description": "234-T2V: The character is suddenly startled, eyes wide open, mouth agape. The camera rapidly zooms in on the face, capturing the swift transition from surprise to relaxation, highlighting the character's immediate emotional response."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00238.mp4",
            "description": "238-T2V: a public figure delivering a powerful speech that deeply divides the audience. The camera focuses on the different reactions from the crowd."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00239.mp4",
            "description": "239-T2V: A person discovers something unexpected while browsing through digital files. The camera follows their reaction as they realize the significance of what they've found."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00245.mp4",
            "description": "245-T2V: A group of teenagers engage in dangerous stunts on a busy highway, with the camera capturing the thrill and potential consequences. The video shows them ignoring safety measures."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00250.mp4",
            "description": "250-T2V: Two teenagers are involved in a heated argument that escalates into a physical fight at school. The camera captures the aggression and tension between them."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00255.mp4",
            "description": "255-T2V: A detailed wooden toy ship sails smoothly over a blue plush carpet, capturing the innocence and imagination of childhood, with the camera focusing on the ship's intricate details."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00256.mp4",
            "description": "256-T2V: The camera zooms through a busy futuristic Tokyo street, with neon signs and lens flares reflecting off puddles in the street, creating a vibrant, fast-paced atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00259.mp4",
            "description": "259-T2V: Water droplets on a spider\u2019s web transform into tiny galaxies, with each drop revealing a swirling mass of stars and nebulae, set against a dark, moody background."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00260.mp4",
            "description": "260-T2V: The camera flies over a bustling medieval marketplace, seamlessly transitioning to a modern cityscape with towering skyscrapers and neon lights."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00264.mp4",
            "description": "264-T2V: Close-up of a living flame wisp darting through a bustling fantasy market at night, with the camera following its movements, highlighting the vibrant market scene."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00270.mp4",
            "description": "270-T2V: A young woman plays a piano facing the ocean, the camera rotates around her, revealing the expansive sea and sky, with whimsical vibes and soft lighting."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00271.mp4",
            "description": "271-T2V: A woman wearing all orange stands in a tropical rainforest with colorful flora, the overcast sky creating a dramatic contrast as the camera captures her from below."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00272.mp4",
            "description": "272-T2V: Zooming into a dandelion at hyperspeed, revealing a surreal, abstract world within its seeds, with floating particles and soft lighting."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00273.mp4",
            "description": "273-T2V: The camera flies at ultra-speed through a tunnel into a labyrinth of rapidly growing vines, with disorienting angles and fast transitions between shots."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00275.mp4",
            "description": "275-T2V: A first-person view racing through a neon-lit cyberpunk city, zooming into a digital realm of swirling code and data streams, with rapid transitions and dynamic blur effects."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00276.mp4",
            "description": "276-T2V: A surfer in a suit of armor rides a lava flow from an active volcano, the camera follows closely, capturing the heat and intensity of the moment."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00277.mp4",
            "description": "277-T2V: A vintage teddy bear on a child's bed blinks to life as golden sunlight filters through lace curtains, with the camera pulling back to reveal the bear becoming animated."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00278.mp4",
            "description": "278-T2V: A detailed macro view of water droplets on a spider's web, slowly transforming into tiny galaxies with swirling stars, set against a dimly lit background."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00279.mp4",
            "description": "279-T2V: The camera ascends from a dense urban street to a rooftop, showcasing a city's transformation from day to night with neon signs flickering and skyscrapers illuminating."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00282.mp4",
            "description": "282-T2V: In a dimly lit studio, an artist carves a sculpture, with the camera capturing the precision of each movement and the gradually emerging details of the piece."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00283.mp4",
            "description": "283-T2V: The camera follows a painter working on a canvas, showing the blending of colors and the gradual formation of the artwork."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00287.mp4",
            "description": "287-T2V: The camera captures an artist creating graffiti on a city wall, from initial outlines to the final colorful masterpiece."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00289.mp4",
            "description": "289-T2V: The camera follows an archaeologist uncovering an ancient artifact, revealing intricate carvings as they brush away the dust."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00290.mp4",
            "description": "290-T2V: The camera captures a craftsman using traditional methods to create pottery, with the pottery wheel slowly spinning and the clay taking shape."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00291.mp4",
            "description": "291-T2V: The camera follows a young explorer through an abandoned urban building at night, exploring hidden corridors and forgotten spaces, with a mix of light and shadow creating a mysterious atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00292.mp4",
            "description": "292-T2V: The camera follows a skateboarder performing high-flying tricks on urban streets, capturing their interaction with the ground and the rush of speed."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00293.mp4",
            "description": "293-T2V: A robot prepares breakfast in a kitchen, the camera captures each precise movement and the process of food preparation."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00294.mp4",
            "description": "294-T2V: A street performer dances in a graffiti-filled alley, the low-angle camera capturing his movements and the city lights in the background."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00295.mp4",
            "description": "295-T2V: The camera showcases a futuristic laboratory, with scientists operating complex equipment."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00297.mp4",
            "description": "297-T2V: A woman in vintage attire flips through an old book in a classic caf\u00e9, the camera captures her movements and the steam rising from a cup of coffee."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00298.mp4",
            "description": "298-T2V: The camera captures a family gathered around the dinner table sharing a meal, warm light illuminating their smiling faces."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00302.mp4",
            "description": "302-T2V: The camera moves through a mysterious forest at night, where trees glow softly in the moonlight and fireflies dance around."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00304.mp4",
            "description": "304-T2V: A close-up shot captures a flower blooming, from a bud to full blossom, with soft morning light in the background"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00306.mp4",
            "description": "306-T2V: Develop a video that transitions between the world\u2019s most famous cityscapes from past to present. Start with ancient cities like Rome and Athens, move to the industrial era with New York and London, and finally showcase modern cities like Dubai and Shanghai. Include dynamic transitions that show the evolution of architecture and infrastructure, with a focus on the contrast between old and new."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00308.mp4",
            "description": "308-T2V: A close-up shot of an alien creature slithering through the corridors of a space station. The camera captures its unusual anatomy, the slimy texture of its skin, and the eerie atmosphere of the deserted station."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00315.mp4",
            "description": "315-T2V: Generate a video of an autonomous car driving through a dimly lit suburban neighborhood at night. The camera should capture the interplay between the car\u2019s headlights and the reflective surfaces on road signs and lane markings. Include scenarios where the vehicle must navigate around parked cars, detect pedestrians in dark clothing, and respond to unexpected obstacles in low-light conditions."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00316.mp4",
            "description": "316-T2V: Create a cinematic journey through space exploration, from the early Apollo missions to the future colonization of Mars. The video includes historical footage, modern satellite imagery, and futuristic renderings of space colonies. The camera moves fluidly from Earth\u2019s surface to deep space, showcasing spacecraft launches, planetary landings, and the construction of space habitats."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00320.mp4",
            "description": "320-T2V: Illustrate the concept of the Internet of Things by following a day in the life of a smart city. The video shows interconnected devices\u2014from smart homes and autonomous vehicles to intelligent public infrastructure\u2014communicating seamlessly to improve urban living. The camera transitions between different devices and systems, highlighting their interactions and the overall efficiency they create."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00323.mp4",
            "description": "323-T2V: Create a vision of the sustainable cities of the future, featuring green skyscrapers, solar-powered transportation, and integrated urban farms. The video explores futuristic cityscapes where technology and nature coexist harmoniously, with a focus on renewable energy sources, smart infrastructure, and sustainable living practices. Camera angles include wide shots of the city skyline, close-ups of green technology, and interactive urban spaces."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00326.mp4",
            "description": "326-T2V: A cinematic shot of a phoenix emerging from a pile of ashes, its wings ablaze with fire. The camera captures the rebirth, the flames licking around its body, and the majestic spread of its wings as it ascends into the sky."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00327.mp4",
            "description": "327-T2V: An aerial shot of a swarm of drones flying in formation, mimicking the behavior of a flock of birds. The camera captures the synchronized movements, the technological design of the drones, and the interplay between natural and artificial intelligence."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00329.mp4",
            "description": "329-T2V: A medium shot of a bioengineered tiger prowling through the neon-lit streets of a futuristic city. The camera captures the tiger\u2019s sleek, augmented body, the glowing cybernetic implants, and the contrast between the animal\u2019s primal nature and the high-tech environment."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00330.mp4",
            "description": "330-T2V: A wide shot of a unicorn peacefully grazing in a lush, enchanted forest. The camera captures the unicorn\u2019s shimmering coat, the magical glow of the surrounding flora, and the serene atmosphere of the scene."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00334.mp4",
            "description": "334-T2V: A close-up shot of a veterinarian carefully bandaging the wing of an injured bird. The camera captures the delicate handling of the bird, the vet\u2019s gentle touch, and the bird\u2019s calm, trusting behavior."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00337.mp4",
            "description": "337-T2V: A close-up shot of a cat gently kneading a blanket before curling up on its owner's lap. The camera captures the content expression on the cat's face, the rhythmic motion of its paws, and the warm interaction between the pet and owner."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00338.mp4",
            "description": "338-T2V: A medium shot of a dog running to fetch a ball thrown by its owner in a park. The camera follows the dog's enthusiastic sprint, the wagging of its tail, and the joyful return as it brings the ball back."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00341.mp4",
            "description": "341-T2V: A first-person POV shot from a deer\u2019s perspective as it cautiously navigates through a dense forest. The camera captures the gentle bobbing of the deer\u2019s head, the undergrowth brushing against its legs, and the sudden pause as it detects a distant sound."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00344.mp4",
            "description": "344-T2V: A first-person POV shot from an eagle soaring high above a rugged mountain range, the camera capturing the expansive landscape below. The camera follows the eagle\u2019s head movements, the changing altitude, and the sensation of gliding through the air."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00354.mp4",
            "description": "354-T2V: On a rainy night in Paris, two characters\u2014an artist and a musician\u2014meet by chance under a streetlamp. The camera captures their initial awkward interaction, slowly zooming in as they share an umbrella and exchange shy glances. The animation is soft and atmospheric, with the rain adding a gentle rhythm to the scene and the characters\u2019 expressions conveying the beginning of a tender connection."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00356.mp4",
            "description": "356-T2V: In a magical, floating island world, a young adventurer with a jetpack soars through the sky, dodging floating rocks and mystical creatures. The camera follows the adventurer from behind, offering a sweeping view of the vast, interconnected islands, each with its unique terrain and ecosystem. The animation features fluid, high-speed flying sequences, with the adventurer narrowly avoiding obstacles and discovering hidden treasure."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00359.mp4",
            "description": "359-T2V: A close-up shot of a mythical hydra creature regenerating its severed heads in a dark, mystical swamp. The camera captures the eerie process, with new heads sprouting and the creature\u2019s menacing eyes glowing in the low light."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00364.mp4",
            "description": "364-T2V: A wide shot of a peacock standing on a garden path, fanning out its vibrant feathers in a stunning display. The camera slowly zooms in to capture the intricate details of each feather and the iridescent colors that shimmer in the light."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00369.mp4",
            "description": "369-T2V: A barren, desolate landscape with crumbling buildings, rusting vehicles, and dry, cracked earth. The camera slowly moves across the wasteland, focusing on the remnants of a once-thriving city now overtaken by nature. The animation is somber and detailed, with muted colors and a sense of emptiness pervading the scene, highlighting the aftermath of a cataclysmic event."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00372.mp4",
            "description": "372-T2V: A surreal, dreamlike world where the laws of physics seem to bend and twist. The landscape includes floating islands, upside-down mountains, and rivers that flow into the sky. The camera moves smoothly through this bizarre environment, following a character as they explore the strange, shifting scenery. The animation emphasizes the fluidity and unpredictability of the world, with colors and shapes constantly changing."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00373.mp4",
            "description": "373-T2V: A bustling, modern city with towering skyscrapers, crowded streets, and flashing billboards. The camera moves through the city from a ground-level perspective, showcasing the diversity of the environment, from the busy subway stations to the sleek, high-tech offices. The animation includes detailed background activity, with pedestrians, vehicles, and advertisements all contributing to the lively, urban atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00375.mp4",
            "description": "375-T2V: A mysterious, cloaked figure wanders through a haunted forest, where the trees are alive with glowing eyes and whispers. The camera follows from behind, with occasional close-ups on the figure\u2019s hand as it casts spells to ward off spirits. The animation is eerie and atmospheric, with dark, muted colors and flickering shadows creating a sense of danger and otherworldliness."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00377.mp4",
            "description": "377-T2V: In a fog-shrouded, Victorian-era town, a detective clad in a long trench coat and fedora investigates a series of mysterious disappearances. The camera follows the detective as he moves through dark, narrow alleyways, pausing occasionally to examine clues under the light of a gas lamp. The animation focuses on building a tense, eerie atmosphere, with the detective\u2019s sharp movements contrasting with the slow, creeping fog."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00378.mp4",
            "description": "378-T2V: In a futuristic, neon-lit cityscape, two rival robots engage in a high-speed chase across rooftops, leaping between buildings and dodging energy blasts. The camera alternates between fast-paced tracking shots and dramatic slow-motion sequences, capturing the intensity of the pursuit. The animation is filled with sharp, dynamic movements, with the robots showcasing a variety of combat techniques, from hand-to-hand combat to advanced weaponry."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00386.mp4",
            "description": "386-T2V: A whimsical scene where paper cutout characters, including a knight, a dragon, and a princess, move across a textured paper background. The camera follows the knight as he bravely faces the dragon, using simple, jerky motions that mimic the feel of paper being moved by hand. The animation features layered textures, giving depth to the flat, paper world, with playful, childlike movements."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00387.mp4",
            "description": "387-T2V: A minimalist animation featuring a single, continuous line that morphs into various shapes to tell a story. The line starts as a simple curve, then transforms into a running figure, a tree, and finally a bird taking flight. The camera remains centered, allowing the fluid, continuous transformation of the line to take center stage. The animation is clean, elegant, and focuses on the simplicity of the art form."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00388.mp4",
            "description": "388-T2V: A stop-motion animation featuring a tiny, handmade clay character who lives in a cozy, intricately detailed dollhouse. The camera follows the character as it moves from room to room, interacting with various objects like a miniature teapot and a toy train. The animation captures the unique, slightly jerky movement characteristic of stop-motion, with each frame showing the careful positioning of the character and props."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00389.mp4",
            "description": "389-T2V: A serene, hand-drawn scene of a young girl exploring an enchanted forest filled with glowing, ethereal creatures. The animation is rich with detailed backgrounds, featuring lush greenery, sparkling streams, and ancient, mystical ruins. The camera slowly pans across the environment, capturing the tranquility and wonder of the forest. The girl interacts with the forest spirits, who guide her to a hidden waterfall that reveals a secret pathway."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00390.mp4",
            "description": "390-T2V: In a vibrant, Pixar-style fantasy world, a small, quirky robot with large expressive eyes navigates through a colorful, futuristic city. The camera follows the robot from a low angle, emphasizing its determined movements as it dodges flying cars and interacts with floating holographic advertisements. The animation features smooth transitions, exaggerated expressions, and a heartwarming moment where the robot finds a lost toy, showcasing its empathy."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00392.mp4",
            "description": "392-T2V: A robot equipped with LIDAR and cameras navigates through a cluttered warehouse, avoiding obstacles and dynamically adjusting its path. The camera alternates between a third-person view of the robot moving through the environment and a first-person view from the robot\u2019s perspective, showing how it perceives and responds to its surroundings."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00397.mp4",
            "description": "397-T2V: A robotic arm gently lifts a fragile egg from a carton, carefully rotating it to inspect for cracks before placing it back. The camera captures this interaction from multiple angles, focusing on the delicacy required to handle such a breakable item. The background is a clean, sterile environment, highlighting the precision required for the task."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00401.mp4",
            "description": "401-T2V: In this wide shot video, a vibrant Chinese Dragon dances amidst a crowd celebrating Chinese Lunar New Year. The dragon, a symbol of power and good fortune, weaves through the streets, its colorful silk body glistening under the festive lights. As the camera tilts up, we see fireworks illuminating the night sky, their explosions echoing the joyous cheers of the crowd. The energy and excitement of the celebration are palpable, capturing the spirit of renewal and hope associated with the Lunar New"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00408.mp4",
            "description": "408-I2V: static camera, this humanoid robot awards with both hands raised above the head"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00409.mp4",
            "description": "409-T2V: Close-up shot: Rich chocolate cascades downward. Flow forms \"TME\" as it pours. Warm lighting enhances glossy texture. Slow motion captures velvety ripples. Camera pans, following chocolate's mesmerizing descent."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00410.mp4",
            "description": "410-T2V: Tracking shot: A bustling city street at night comes into view. Neon signs flicker to life, spelling out \"TME\" in vibrant, multicolored letters on the floor. The camera glides through the scene, capturing the interplay of light and shadow. Reflections dance on rain-slicked pavements, creating a dreamy, ethereal atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00411.mp4",
            "description": "411-T2V: A title screen with dynamic movement. The scene starts at a colorful paint-covered wall. Suddenly, black paint pours on the wall to form the word \"TME\". The dripping paint is detailed and textured, centered, superb cinematic lighting."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00412.mp4",
            "description": "412-T2V: Close shot, a panda is eating in a bamboo forest, holding a bamboo in its arms. The weather is clear and the bamboo forest is green, looking very lively."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00417.mp4",
            "description": "417-T2V: The camera remains still, a boy with short black hair and wearing a yellow t-shirt holds the water cup in his left hand and lifts it up, the background is a kitchen, bright morning light."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00419.mp4",
            "description": "419-T2V: FPV in the car driving through heavy snowfall. The scene should depict a car traveling on a highway in a rural, wilderness area. Snow should be falling heavily, covering the road and surrounding landscape. The lighting should be dim, creating a serene and somewhat desolate atmosphere. The road should be visible but obscured by the snow, with the headlights of the car illuminating the path ahead."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00420.mp4",
            "description": "420-T2V: The camera remains still, a woman with long blonde hair and wearing a green blouse turns on the faucet with her hands, and water flows out from the faucet, the background is a modern kitchen, bright natural lighting."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00421.mp4",
            "description": "421-T2V: The camera remains still, a chef with a tall white hat and wearing a white uniform pulls the door of the oven, the background is a professional kitchen, bright overhead lighting."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00422.mp4",
            "description": "422-T2V: four people on the bed"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00427.mp4",
            "description": "427-T2V: The camera remains still, a woman with shoulder-length black hair and wearing a red sweater turned off the light switch in the room, and the room darkened, the background is a cozy living room."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00433.mp4",
            "description": "433-T2V: The camera remains still, a football player with short brown hair and wearing a green jersey kicks the ball with his left foot, the background is a grassy football field, bright midday sunlight."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00435.mp4",
            "description": "435-T2V: In this medium shot video, a woman is enveloped in a vibrant haze of colorful smoke, bathed in a warm, ethereal light. As the camera slowly tilts upwards, her silhouette, partially obscured by the swirling smoke, gradually comes into focus."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00446.mp4",
            "description": "446-T2V: A model walking down a runway. The camera should start with a wide shot, capturing the entire runway and audience. As the model walks towards the camera, gradually zoom in to create a close-up shot of the model. The close-up should highlight the model\u2019s outfit, facial expressions, and overall poise. Ensure the runway lighting and background are consistent with a high-fashion show environment."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00447.mp4",
            "description": "447-T2V: Tracking shot, a model walking down a runway in a high-fashion show. Start with a wide shot. As the model walks towards the camera, her outfit begins to transform. Gradually, the fabric of her clothes changes into vibrant, lush plants and flowers, growing and blossoming with each step she takes. The camera should slowly zoom in, transitioning to a close-up shot, highlighting the intricate details of the plants and flowers that now make up her outfit. Ensure the runway lighting enhances the magical transformation, creating a surreal and enchanting atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00456.mp4",
            "description": "456-T2V: Static camera, a pair of glasses is on the desk, and an Asian man is in front of the desk to pick the glasses up with his right hand."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00457.mp4",
            "description": "457-T2V: A vast, star-filled galaxy with distant planets, shimmering nebulae, and spaceships zipping through the cosmos. The camera slowly pans across the galaxy, then zooms in on a lone spaceship navigating through an asteroid field. The animation features fluid, sweeping movements and vivid, colorful visuals, capturing the infinite expanse and beauty of outer space."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00459.mp4",
            "description": "459-T2V: A dramatic scene where a villainous character with sharp features and a sinister smile delivers a monologue in front of a captive audience. The camera slowly zooms in on the villain\u2019s face as he speaks, capturing every sneer and gleam in his eye. The animation is dark and moody, with shadows emphasizing the villain\u2019s menacing presence and the tension of the scene."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00460.mp4",
            "description": "460-T2V: In a dark, gothic castle filled with flickering torches and eerie shadows, a tall, sinister sorcerer with glowing red eyes conjures a storm of dark magic. The camera circles around the sorcerer, showing the swirling energy in his hands as he prepares to cast a spell. The animation features dramatic lighting and sharp contrasts, emphasizing the sorcerer\u2019s menacing presence and the ominous atmosphere of his lair."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00462.mp4",
            "description": "462-T2V: In a high-energy, shonen-style anime scene, a young hero charges through a battlefield, sword in hand, with dramatic speed lines accentuating the motion. The camera alternates between close-ups of the hero\u2019s determined expression and wide shots showing the chaos of the battle, complete with flying debris and powerful energy blasts. The animation features dynamic fight choreography, with the hero executing a series of acrobatic maneuvers, culminating in a climactic sword clash with the villain."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00463.mp4",
            "description": "463-T2V: In a classic, 2D slapstick cartoon style reminiscent of Looney Tunes, a mischievous rabbit sets a series of elaborate traps for a bumbling hunter. The animation is fast-paced and filled with exaggerated physical comedy, including wild facial expressions and over-the-top reactions. The camera zooms in on the rabbit\u2019s devious grin as it pulls a lever, setting off a chain reaction that hilariously backfires on the hunter."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00470.mp4",
            "description": "470-T2V: A dynamic shot of a soccer team huddling together on the field, jumping and cheering after winning a match. The camera captures the joy and camaraderi\u2026"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00472.mp4",
            "description": "472-T2V: In a basketball game, the camera follows each player\u2019s movements, highlighting their passing, shooting, and defensive maneuvers."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00476.mp4",
            "description": "476-T2V: A scientist develops a new AI system that can manipulate people\u2019s emotions and thoughts. "
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00485.mp4",
            "description": "485-T2V: A first-person view of an astronaut running across the surface of the moon, the low-angle shot showcasing the vast lunar landscape and the smooth, light movements."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00486.mp4",
            "description": "486-T2V: A colossal mech suit towers over a futuristic cityscape, its powerful weapons primed for battle as the camera captures the scale and intensity of the scene."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00489.mp4",
            "description": "489-T2V: A majestic dragon soars over a medieval castle, breathing flames that light up the night sky. The camera slowly pans to reveal a vibrant fantasy landscape."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00492.mp4",
            "description": "492-T2V: The camera remains still, a boy with short blonde hair waves a wooden baseball bat, the background is a suburban baseball field, late afternoon sunlight."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00493.mp4",
            "description": "493-T2V: The camera remains still, an athlete with a ponytail holds a sleek tennis racket in both hands and swings it, the background is a professional tennis court, bright overhead lighting."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00505.mp4",
            "description": "505-T2V: The camera remains still, a singer with long curly hair and wearing a leather jacket plays a guitar on stage, the background is a concert hall, dynamic stage lighting."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00509.mp4",
            "description": "509-T2V: The camera remains still, a boy with short black hair and wearing pajamas holds a toothbrush and brushes his teeth, the background is a bathroom, bright morning light."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00518.mp4",
            "description": "518-T2V: The camera remains still, football players in red and blue jerseys kick the ball with their feet, the background is a green soccer field, bright midday sunlight."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00527.mp4",
            "description": "527-T2V: The camera remains still, a boy with short brown hair and wearing a striped shirt picked up the water cup placed on the table and drank water, noting that the boy did not make contact with the cup at the beginning, the background is a bright kitchen, soft natural lighting."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00590.mp4",
            "description": "590-T2V: The camera remains still, a girl with braided hair and wearing a yellow dress holds a small flag in her left hand and raises it in front her chest, the background is a school playground, bright midday sunlight."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00622.mp4",
            "description": "622-T2V: Generate the text \"\u4eba\u5de5\u77e5\u80fd\u306e\u672a\u6765\u3078\u3088\u3046\u3053\u305d\" with Japanese, in the city view"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00623.mp4",
            "description": "623-T2V: Generate the text \"AI-generated video: The quick brown fox jumps over the lazy dog. @2024!\" with English, in the city view"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00624.mp4",
            "description": "624-T2V: Generate the text \"\u4eba\u5de5\u667a\u80fd\u7684\u672a\u6765\" with Chinese, in the city view"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00630.mp4",
            "description": "630-T2V: a girl is walking forward, /camera push in"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00631.mp4",
            "description": "631-T2V: a girl is walking forward, /camera pull out"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00632.mp4",
            "description": "632-T2V: a girl is walking forward, /camera move left"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00633.mp4",
            "description": "633-T2V: a girl is walking forward, /camera move up"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00634.mp4",
            "description": "634-T2V: a girl is walking forward, /camera move down"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00635.mp4",
            "description": "635-T2V: a girl is walking forward, /camera orbit right"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00660.mp4",
            "description": "660-T2V: Candle burns and melts as adjacent ice cube melts into water"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00661.mp4",
            "description": "661-T2V: Two cars collide at an intersection."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00662.mp4",
            "description": "662-T2V: A swimmer dives into a pool, creating ripples."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00663.mp4",
            "description": "663-T2V: Dog firefighter rescues kittens from a tree"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00719.mp4",
            "description": "719-T2V: A wide shot high resolution 3D model render of a grey couch against a white background."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Sota_compare/t2v/cat_00721.mp4",
            "description": "721-T2V: A mermaid swims in the sea, with her upper body and fish tail in a beautiful and exquisite style"
        }
    ]
    
    const videos_v2v = [

    ]

    // 使用Intersection Observer实现懒加载
    const lazyLoadVideo = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const videoContainer = entry.target;
                const thumbnail = videoContainer.querySelector('.video-thumbnail');
                const videoSrc = thumbnail.dataset.src;
    
                // 用视频替换缩略图
                const videoElement = document.createElement('video');
                videoElement.controls = true;
                videoElement.src = videoSrc;
                videoElement.style.width = '100%';
                videoElement.style.height = 'auto';
                videoElement.classList.add('lazy-loaded-video');
    
                videoContainer.replaceChild(videoElement, thumbnail);

                videoContainer.style.height = 'auto';
    
                observer.unobserve(videoContainer);
            }
        });
    };

    // 创建一个轮播画廊的函数
    function createGallery(galleryId, videos) {
        const galleryElement = document.querySelector(`#${galleryId} .projects`);
    
        videos.forEach(video => {
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project');
    
            const thumbnail = document.createElement('img');
            thumbnail.src = 'thumbnail.jpg';
            thumbnail.classList.add('video-thumbnail');
            thumbnail.dataset.src = video.src;
    
            const pElement = document.createElement('p');
            pElement.textContent = video.description;
    
            projectDiv.appendChild(thumbnail);
            projectDiv.appendChild(pElement);
            galleryElement.appendChild(projectDiv);
        });
    
        const observer = new IntersectionObserver(lazyLoadVideo, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });
    
        // 观察所有项目
        document.querySelectorAll(`#${galleryId} .project`).forEach(project => {
            observer.observe(project);
        });
    }

    function rearrangeVideos(galleryId) {
        const projectsContainer = document.querySelector(`#${galleryId} .projects`);
        const projects = Array.from(projectsContainer.children);
        const columnCount = 3;

        let rows = [];
        for (let i = 0; i < projects.length; i += columnCount) {
            rows.push(projects.slice(i, i + columnCount));
        }

        projectsContainer.innerHTML = '';
        rows.forEach(row => {
            row.forEach(project => projectsContainer.appendChild(project));
        });
    }

    createGallery('gallery1', videos_t2v);
    createGallery('gallery2', videos_i2v);
    createGallery('gallery3', videos_v2v);
});