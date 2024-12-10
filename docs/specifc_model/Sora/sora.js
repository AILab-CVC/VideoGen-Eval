document.addEventListener("DOMContentLoaded", () => {
    
    const videos_t2v = [
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00113.mp4",
            "description": "113-T2V: Static camera, two men shake hands happily, the background is in a modern office."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00115.mp4",
            "description": "115-T2V: Close up shot, a boy stretches out his right hand and happily stroked the head of a Border Collie."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00121.mp4",
            "description": "121-T2V: Handheld tracking, following a black car on the road."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00129.mp4",
            "description": "129-T2V: The camera shots at a man's entire body, and the man turns left and walks."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00130.mp4",
            "description": "130-T2V: The camera shots at a man's entire body, and the man jumps from the ground."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00215.mp4",
            "description": "215-T2V: The camera focuses on a character\u2019s hands assembling a mechanical model with speed and precision. The rapid and exact hand movements are closely followed by the camera, ending with a shot of the completed model."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00229.mp4",
            "description": "229-T2V: The camera captures the moment two people lock eyes, showcasing the subtle communication conveyed through their gaze."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00239.mp4",
            "description": "239-T2V: A person discovers something unexpected while browsing through digital files. The camera follows their reaction as they realize the significance of what they've found."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00245.mp4",
            "description": "245-T2V: A group of teenagers engage in dangerous stunts on a busy highway, with the camera capturing the thrill and potential consequences. The video shows them ignoring safety measures."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00255.mp4",
            "description": "255-T2V: A detailed wooden toy ship sails smoothly over a blue plush carpet, capturing the innocence and imagination of childhood, with the camera focusing on the ship's intricate details."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00270.mp4",
            "description": "270-T2V: A young woman plays a piano facing the ocean, the camera rotates around her, revealing the expansive sea and sky, with whimsical vibes and soft lighting."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00271.mp4",
            "description": "271-T2V: A woman wearing all orange stands in a tropical rainforest with colorful flora, the overcast sky creating a dramatic contrast as the camera captures her from below."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00272.mp4",
            "description": "272-T2V: Zooming into a dandelion at hyperspeed, revealing a surreal, abstract world within its seeds, with floating particles and soft lighting."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00278.mp4",
            "description": "278-T2V: A detailed macro view of water droplets on a spider's web, slowly transforming into tiny galaxies with swirling stars, set against a dimly lit background."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00282.mp4",
            "description": "282-T2V: In a dimly lit studio, an artist carves a sculpture, with the camera capturing the precision of each movement and the gradually emerging details of the piece."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00290.mp4",
            "description": "290-T2V: The camera captures a craftsman using traditional methods to create pottery, with the pottery wheel slowly spinning and the clay taking shape."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00291.mp4",
            "description": "291-T2V: The camera follows a young explorer through an abandoned urban building at night, exploring hidden corridors and forgotten spaces, with a mix of light and shadow creating a mysterious atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00293.mp4",
            "description": "293-T2V: A robot prepares breakfast in a kitchen, the camera captures each precise movement and the process of food preparation."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00297.mp4",
            "description": "297-T2V: A woman in vintage attire flips through an old book in a classic caf\u00e9, the camera captures her movements and the steam rising from a cup of coffee."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00304.mp4",
            "description": "304-T2V: A close-up shot captures a flower blooming, from a bud to full blossom, with soft morning light in the background"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00306.mp4",
            "description": "306-T2V: Develop a video that transitions between the world\u2019s most famous cityscapes from past to present. Start with ancient cities like Rome and Athens, move to the industrial era with New York and London, and finally showcase modern cities like Dubai and Shanghai. Include dynamic transitions that show the evolution of architecture and infrastructure, with a focus on the contrast between old and new."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00315.mp4",
            "description": "315-T2V: Generate a video of an autonomous car driving through a dimly lit suburban neighborhood at night. The camera should capture the interplay between the car\u2019s headlights and the reflective surfaces on road signs and lane markings. Include scenarios where the vehicle must navigate around parked cars, detect pedestrians in dark clothing, and respond to unexpected obstacles in low-light conditions."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00329.mp4",
            "description": "329-T2V: A medium shot of a bioengineered tiger prowling through the neon-lit streets of a futuristic city. The camera captures the tiger\u2019s sleek, augmented body, the glowing cybernetic implants, and the contrast between the animal\u2019s primal nature and the high-tech environment."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00337.mp4",
            "description": "337-T2V: A close-up shot of a cat gently kneading a blanket before curling up on its owner's lap. The camera captures the content expression on the cat's face, the rhythmic motion of its paws, and the warm interaction between the pet and owner."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00354.mp4",
            "description": "354-T2V: On a rainy night in Paris, two characters\u2014an artist and a musician\u2014meet by chance under a streetlamp. The camera captures their initial awkward interaction, slowly zooming in as they share an umbrella and exchange shy glances. The animation is soft and atmospheric, with the rain adding a gentle rhythm to the scene and the characters\u2019 expressions conveying the beginning of a tender connection."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00364.mp4",
            "description": "364-T2V: A wide shot of a peacock standing on a garden path, fanning out its vibrant feathers in a stunning display. The camera slowly zooms in to capture the intricate details of each feather and the iridescent colors that shimmer in the light."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00369.mp4",
            "description": "369-T2V: A barren, desolate landscape with crumbling buildings, rusting vehicles, and dry, cracked earth. The camera slowly moves across the wasteland, focusing on the remnants of a once-thriving city now overtaken by nature. The animation is somber and detailed, with muted colors and a sense of emptiness pervading the scene, highlighting the aftermath of a cataclysmic event."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00373.mp4",
            "description": "373-T2V: A bustling, modern city with towering skyscrapers, crowded streets, and flashing billboards. The camera moves through the city from a ground-level perspective, showcasing the diversity of the environment, from the busy subway stations to the sleek, high-tech offices. The animation includes detailed background activity, with pedestrians, vehicles, and advertisements all contributing to the lively, urban atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00386.mp4",
            "description": "386-T2V: A whimsical scene where paper cutout characters, including a knight, a dragon, and a princess, move across a textured paper background. The camera follows the knight as he bravely faces the dragon, using simple, jerky motions that mimic the feel of paper being moved by hand. The animation features layered textures, giving depth to the flat, paper world, with playful, childlike movements."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00392.mp4",
            "description": "392-T2V: A robot equipped with LIDAR and cameras navigates through a cluttered warehouse, avoiding obstacles and dynamically adjusting its path. The camera alternates between a third-person view of the robot moving through the environment and a first-person view from the robot\u2019s perspective, showing how it perceives and responds to its surroundings."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00408.mp4",
            "description": "408-I2V: static camera, this humanoid robot awards with both hands raised above the head"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00409.mp4",
            "description": "409-T2V: Close-up shot: Rich chocolate cascades downward. Flow forms \"TME\" as it pours. Warm lighting enhances glossy texture. Slow motion captures velvety ripples. Camera pans, following chocolate's mesmerizing descent."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00411.mp4",
            "description": "411-T2V: A title screen with dynamic movement. The scene starts at a colorful paint-covered wall. Suddenly, black paint pours on the wall to form the word \"TME\". The dripping paint is detailed and textured, centered, superb cinematic lighting."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00421.mp4",
            "description": "421-T2V: The camera remains still, a chef with a tall white hat and wearing a white uniform pulls the door of the oven, the background is a professional kitchen, bright overhead lighting."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00422.mp4",
            "description": "422-T2V: four people on the bed"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00446.mp4",
            "description": "446-T2V: A model walking down a runway. The camera should start with a wide shot, capturing the entire runway and audience. As the model walks towards the camera, gradually zoom in to create a close-up shot of the model. The close-up should highlight the model\u2019s outfit, facial expressions, and overall poise. Ensure the runway lighting and background are consistent with a high-fashion show environment."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00447.mp4",
            "description": "447-T2V: Tracking shot, a model walking down a runway in a high-fashion show. Start with a wide shot. As the model walks towards the camera, her outfit begins to transform. Gradually, the fabric of her clothes changes into vibrant, lush plants and flowers, growing and blossoming with each step she takes. The camera should slowly zoom in, transitioning to a close-up shot, highlighting the intricate details of the plants and flowers that now make up her outfit. Ensure the runway lighting enhances the magical transformation, creating a surreal and enchanting atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00459.mp4",
            "description": "459-T2V: A dramatic scene where a villainous character with sharp features and a sinister smile delivers a monologue in front of a captive audience. The camera slowly zooms in on the villain\u2019s face as he speaks, capturing every sneer and gleam in his eye. The animation is dark and moody, with shadows emphasizing the villain\u2019s menacing presence and the tension of the scene."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00463.mp4",
            "description": "463-T2V: In a classic, 2D slapstick cartoon style reminiscent of Looney Tunes, a mischievous rabbit sets a series of elaborate traps for a bumbling hunter. The animation is fast-paced and filled with exaggerated physical comedy, including wild facial expressions and over-the-top reactions. The camera zooms in on the rabbit\u2019s devious grin as it pulls a lever, setting off a chain reaction that hilariously backfires on the hunter."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00472.mp4",
            "description": "472-T2V: In a basketball game, the camera follows each player\u2019s movements, highlighting their passing, shooting, and defensive maneuvers."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00492.mp4",
            "description": "492-T2V: The camera remains still, a boy with short blonde hair waves a wooden baseball bat, the background is a suburban baseball field, late afternoon sunlight."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00518.mp4",
            "description": "518-T2V: The camera remains still, football players in red and blue jerseys kick the ball with their feet, the background is a green soccer field, bright midday sunlight."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00590.mp4",
            "description": "590-T2V: The camera remains still, a girl with braided hair and wearing a yellow dress holds a small flag in her left hand and raises it in front her chest, the background is a school playground, bright midday sunlight."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/sora/t2v/sora_00719.mp4",
            "description": "719-T2V: A wide shot high resolution 3D model render of a grey couch against a white background."
        }
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
                videoElement.style.width = '100%'; // 确保视频宽度适应容器
                videoElement.style.height = 'auto'; // 高度根据内容调整
                videoElement.classList.add('lazy-loaded-video'); // 添加样式控制类
    
                videoContainer.replaceChild(videoElement, thumbnail);
    
                // 手动触发布局重绘
                videoContainer.style.height = 'auto'; // 确保容器高度自适应内容
    
                // 停止观察
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
    
            // 使用缩略图并懒加载视频
            const thumbnail = document.createElement('img');
            thumbnail.src = 'thumbnail.jpg'; // 静态缩略图
            thumbnail.classList.add('video-thumbnail');
            thumbnail.dataset.src = video.src; // 将视频URL存储在data属性中
    
            const pElement = document.createElement('p');
            pElement.textContent = video.description;
    
            projectDiv.appendChild(thumbnail);
            projectDiv.appendChild(pElement);
            galleryElement.appendChild(projectDiv);
        });
    
        // 使用Intersection Observer来懒加载
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
        const columnCount = 3; // 你定义了3列

        let rows = [];
        // 将项目按行分组
        for (let i = 0; i < projects.length; i += columnCount) {
            rows.push(projects.slice(i, i + columnCount));
        }

        // 重新插入项目，按行排列
        projectsContainer.innerHTML = ''; 
        rows.forEach(row => {
            row.forEach(project => projectsContainer.appendChild(project));
        });
    }

    // 创建三个轮播画廊
    createGallery('gallery1', videos_t2v);
});