document.addEventListener("DOMContentLoaded", () => {
    const nVideosPerPage = 20;
    var page_id = 0
    
    const videos_i2v = [
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00003.mp4",
            "description": "3-I2V: The camera remains still, this person tightly holds a hammer, raises it above their shoulder, and forcefully smashes the laptop, scattering its keys and fragments."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00004.mp4",
            "description": "4-I2V: The camera remains still, this man grips the neck of the balloon, blows air into it steadily, and the balloon expands and stretches with each breath."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00005.mp4",
            "description": "5-I2V: The camera remains still as a hand grips the lampshade chain, pulls it downward, and the light dims and turns off."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00006.mp4",
            "description": "6-I2V: The camera remains still as the man raises the basketball, aligns his aim, and throws it in a high arc towards the hoop."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00007.mp4",
            "description": "7-I2V: The camera remains still as a hand carefully places a cup under the faucet, turns the handle, and water streams smoothly into the cup."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00008.mp4",
            "description": "8-I2V: The camera tilts downward slightly, tracking the cup as the woman throws it, and it spins mid-air before shattering on the ground."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00009.mp4",
            "description": "9-I2V: The camera remains still as the woman swings her tennis racket in a strong motion, hitting the ball, which travels over the net."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00010.mp4",
            "description": "10-I2V: The camera pans slightly to follow as the man walks toward the chair, pauses briefly, and lowers himself onto it with a steady motion."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00011.mp4",
            "description": "11-I2V: The camera remains still as the man approaches the chair, pauses briefly to adjust his position, and then lowers himself onto it with a steady motion."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00012.mp4",
            "description": "12-I2V: The camera remains still as the woman reaches out, grips the mug\u2019s handle, and lifts it from the table gracefully."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00013.mp4",
            "description": "13-I2V: The camera remains still as the man extends his hand, picks up his glasses from the table, and places them on his face with precision."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00016.mp4",
            "description": "16-I2V: The camera remains still, the man grips the handlebars tightly, pedals the bicycle rhythmically, and rides forward along the mountain road."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00018.mp4",
            "description": "18-I2V: The camera remains still, the man lifts the bowl steadily, tips it over the pot, and pours the soup in a controlled stream."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00019.mp4",
            "description": "19-I2V: The camera remains still, the woman holds the broom firmly, sweeps the ground in long strokes, and collects dust into a pile."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00020.mp4",
            "description": "20-I2V: The camera remains still, the woman dips the mop into a bucket, lifts it, and cleans the ground with smooth left-to-right movements."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00021.mp4",
            "description": "21-I2V: The camera remains still, the person picks up the fork, pierces a piece of lettuce, and lifts it to their mouth."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00022.mp4",
            "description": "22-I2V: The camera remains still, the woman skillfully picks up a piece of sushi with chopsticks, raises it, and eats it delicately."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00023.mp4",
            "description": "23-I2V: The camera remains still, the woman grips the knife carefully, slices through a tomato, and transfers the slices to a bowl."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00024.mp4",
            "description": "24-I2V: The camera remains still, the man grips the handlebars tightly, accelerates forward, and the motorcycle jumps over a mound, landing with a slight bounce."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00025.mp4",
            "description": "25-I2V: The camera remains still, the man holds a wrapped chair securely, ascends the stairs step by step, and adjusts his grip halfway up."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00027.mp4",
            "description": "27-I2V: The camera remains still, the man tilts a bucket carefully, pours liquid out in a controlled flow, and stops once it is empty."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00028.mp4",
            "description": "28-I2V: The camera remains still, the man holds a kettle firmly, pours hot water in a thin stream into the coffee dripper, and circles it evenly."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00029.mp4",
            "description": "29-I2V: The camera remains still, the person grips the handle of a stainless steel kettle, lifts the lid, and peers inside to check the contents."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00030.mp4",
            "description": "30-I2V: The camera remains still, the man carries a wooden bucket, walks toward the herd, and places the bucket near the grazing animals."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00031.mp4",
            "description": "31-I2V: The camera remains still, the man holds a knife, slices through a layered cake, and transfers the piece to a plate."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00032.mp4",
            "description": "32-I2V: The camera remains still, the woman tightly grips a large knife, raises it above her shoulder, and stabs into the cake with precision."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00033.mp4",
            "description": "33-I2V: The camera remains still, the man walks along the shore, holding his surfboard securely under one arm, and adjusts his grip as the waves lap his feet."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00034.mp4",
            "description": "34-I2V: The camera remains still, the man balances on a surfboard, shifts his weight forward, and carves through a rising wave with smooth movements."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00035.mp4",
            "description": "35-I2V: The camera remains still, the man balances a soccer ball on his forehead, tilts his head slightly, and keeps the ball steady as he stands still."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00036.mp4",
            "description": "36-I2V: The camera remains still, the man walks through a city park, his backpack swaying with each step, and adjusts the straps casually."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00037.mp4",
            "description": "37-I2V: The camera remains still, the cyclist pedals up the mountain road, leaning forward on the handlebars, and his legs pump rhythmically with each rotation."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00038.mp4",
            "description": "38-I2V: The camera remains still, the man listens to music with headphones, taps his fingers on his thigh, and shakes his head to the beat."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00039.mp4",
            "description": "39-I2V: The camera remains still, the woman spins a colorful hula hoop around her waist, shifts her hips rhythmically, and smiles as the hoop stays in motion."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00040.mp4",
            "description": "40-I2V: The camera tracks smoothly from the side as a man kicks a soccer ball, shifting weight onto his standing leg and swinging his striking foot in an arc to propel the ball forward."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00041.mp4",
            "description": "41-I2V: The camera pans slightly upward to follow a construction worker as he adjusts a ladder on his shoulder while walking steadily through a construction site."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00042.mp4",
            "description": "42-I2V: The camera follows in a dynamic side-tracking motion as motorcyclists lean into a sharp curve, their tires gripping the track as the engines roar and they accelerate out of the turn."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00043.mp4",
            "description": "43-I2V: The camera tracks from behind at a low angle as a skateboarder propels forward, leaning slightly to maintain balance while gliding down a paved street."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00044.mp4",
            "description": "44-I2V: The camera performs a sweeping low-angle shot as a surfer rides a wave, cutting through the water as the wave crests and crashes behind."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00046.mp4",
            "description": "46-I2V: The camera performs a steady tracking shot as a woman walks confidently, lifting her handbag in a smooth, deliberate motion while maintaining her stride."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00047.mp4",
            "description": "47-I2V: The camera captures a close-up tracking shot as a baseball player swings a bat, connecting with the ball in a forceful motion that sends it spinning into the air."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00048.mp4",
            "description": "48-I2V: The camera remains still as a woman holds a coffee cup, adjusts her grip, and walks forward steadily across a paved surface."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00049.mp4",
            "description": "49-I2V: The camera remains still as a woman lowers a bowl onto a table, aligning it precisely with her hands before releasing it gently."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00050.mp4",
            "description": "50-I2V: The camera remains still as a man grips a chair firmly with both hands, shifts its weight slightly, and carries it across the street while maintaining balance."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00051.mp4",
            "description": "51-I2V: The camera remains still as a man strums an acoustic guitar rhythmically, alternating between downward and upward motions while pressing chords on the fretboard."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00052.mp4",
            "description": "52-I2V: The camera remains still as a man raises a hammer and strikes a chisel with controlled force, splitting a wooden surface beneath."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00054.mp4",
            "description": "54-I2V: The camera remains still as a woman lifts a mug with her right hand, raises it to her lips, and takes a small sip before lowering it back down."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00055.mp4",
            "description": "55-I2V: The camera remains still as a woman grips the edges of a table with both hands, tilts it slightly upward, and moves it forward across a carpeted floor."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00056.mp4",
            "description": "56-I2V: The camera remains still as a woman brushes her teeth with a toothbrush, moving it rhythmically back and forth over her teeth."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00057.mp4",
            "description": "57-I2V: The camera remains still as a woman sweeps the floor with a broom, pushing dirt into a pile with steady strokes."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00059.mp4",
            "description": "59-I2V: The camera remains still as a woman mops the floor, gliding the mop back and forth with controlled movements."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00060.mp4",
            "description": "60-I2V: The camera remains still as a person holds a spoon in the right hand and scoops food from a bowl, lifting it toward the mouth."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00062.mp4",
            "description": "62-I2V: The camera remains still as a woman pulls a suitcase with one hand, walking down a cobblestone street."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00063.mp4",
            "description": "63-I2V: The camera remains still as a man prepares to hit a tennis ball with his racket, stepping forward and swinging the racket upward."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00065.mp4",
            "description": "65-I2V: The camera remains still as a woman opens a kitchen cabinet, slowly pulling the door outward."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00066.mp4",
            "description": "66-I2V: The camera remains still as a woman opens an oven door, bending slightly to pull it downward."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00067.mp4",
            "description": "67-I2V: The camera remains still as a person pulls the oven door with both hands, revealing the interior."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00068.mp4",
            "description": "68-I2V: The camera remains still as a person opens a microwave door, pulling it outward with one hand."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00069.mp4",
            "description": "69-I2V: The camera remains still as a man opens a storage cabinet, pulling its door outward slowly."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00073.mp4",
            "description": "73-I2V: The camera remains still as a person rolls up a yoga mat, tightening it into a compact cylinder."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00076.mp4",
            "description": "76-I2V: The camera remains still as a woman folds a pair of pants, aligning the legs and folding them in half."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00077.mp4",
            "description": "77-I2V: The camera remains still as a woman flips through a book, turning pages quickly with her fingers."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00078.mp4",
            "description": "78-I2V: The camera remains still as a person rows a kayak, moving the oar forcefully through the water."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00079.mp4",
            "description": "79-I2V: The camera remains still as a man swings a sword, slicing through the air in powerful arcs."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00080.mp4",
            "description": "80-I2V: The camera remains still as a human types on a keyboard, pressing keys rapidly and pausing briefly to review."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00081.mp4",
            "description": "81-I2V: The camera remains still as a human types on a keyboard while glancing at a monitor, adjusting posture occasionally."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00082.mp4",
            "description": "82-I2V: The camera remains still as a human types on a keyboard, focusing on a large screen with analytical data."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00083.mp4",
            "description": "83-I2V: The camera remains still as a human types on a keyboard, smiling while working on a document."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00084.mp4",
            "description": "84-I2V: The camera remains still as a human types on a keyboard, lit by natural light streaming through a window."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00085.mp4",
            "description": "85-I2V: The camera remains still as a human slices food with a knife, carefully cutting each piece into even sections."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00086.mp4",
            "description": "86-I2V: The camera remains still as a human slices food with a knife while preparing a meal on a cutting board."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00087.mp4",
            "description": "87-I2V: The camera remains still as a human slices food with a knife, swiftly preparing ingredients for cooking."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00088.mp4",
            "description": "88-I2V: The camera remains still as a human slices food with a knife, moving the blade carefully through each piece."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00089.mp4",
            "description": "89-I2V: The camera remains still as a human slices food with a knife on a cutting board, separating sections for cooking."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00090.mp4",
            "description": "90-I2V: The camera remains still as a human balances on a skateboard, shifting weight to maintain control while moving forward."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00092.mp4",
            "description": "92-I2V: The camera remains still as a human maneuvers a skateboard, turning smoothly to navigate the path ahead."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00093.mp4",
            "description": "93-I2V: The camera remains still as a human rides a skateboard, accelerating by pushing off with one foot repeatedly."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00095.mp4",
            "description": "95-I2V: The camera remains still as a human surfs on a wave, adjusting posture and balance to ride smoothly."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00096.mp4",
            "description": "96-I2V: The camera tracks dynamically along the surfer. A female surfer balances on her board as the wave builds, shifting her weight subtly. The board carves through the crest, leaving foam trails, and her arms adjust for balance, leaning slightly forward as the wave curves beneath her."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00097.mp4",
            "description": "97-I2V: The camera moves smoothly alongside the surfer. A male surfer twists his torso, arms extending outward to stabilize as his board carves sharply. Water sprays into an arc, following the sharp turn, and he regains balance by shifting his weight backward."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00098.mp4",
            "description": "98-I2V: The camera pans slightly as the surfer moves. A muscular surfer leans hard into a turn, his shortboard slicing the wave\u2019s surface. Spray shoots outward as he drives powerfully, adjusting his arm to control the board\u2019s angle through the turn."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00099.mp4",
            "description": "99-I2V: The camera maintains a steady angle. A man glides smoothly over a wave, shifting weight to slow down while his board leaves a frothy trail. As the wave collapses behind, his raised hand flows effortlessly to guide the motion."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00100.mp4",
            "description": "100-I2V: The camera holds a close-up. A hand rotates the faucet handle, releasing water that splashes over cupped palms. Fingers move slightly to redirect the stream, and droplets cascade down as the hands shift under the flow."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00101.mp4",
            "description": "101-I2V: The camera focuses on the lamp chain. A hand pulls the chain firmly, causing the bulb to flicker briefly before emitting a steady warm glow. Shadows shift slightly on the surrounding surface as the light stabilizes."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00106.mp4",
            "description": "106-I2V: The camera follows the movement of the hand. A woman tilts a water jug, pouring a stream into a glass. The water rises steadily, small ripples forming on the surface, until the glass nears full and she straightens the jug to stop the flow."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00107.mp4",
            "description": "107-I2V: The camera stabilizes on the kayaker. A paddler pushes the oar through the water forcefully, creating splashes that ripple outward. The kayak tilts slightly as the paddler leans into each stroke, propelling the vessel forward with each rhythmic motion."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00110.mp4",
            "description": "110-I2V: The camera is static. A person rolls the yoga mat tightly, pushing down with both hands. As the mat curls, one hand adjusts the edges to align them, and the roll becomes compact."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00117.mp4",
            "description": "117-I2V: The camera is static. A robotic arm grips the handle of a drawer, pulls it outward smoothly, and pauses as the drawer is fully extended."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00118.mp4",
            "description": "118-I2V: The camera is static. A humanoid robot\u2019s gripper closes around a walnut, lifts it steadily, and transfers it to a bowl nearby before releasing it gently."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00145.mp4",
            "description": "145-I2V: The camera is static. A woman with long black hair in a white dress sits at a table, speaking animatedly while gesturing with a chopstick. Her hand moves rhythmically as she emphasizes points, and the silver teapot on the table reflects the ambient light subtly."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00146.mp4",
            "description": "146-I2V: The camera is static. A young woman in a brown dress sits in a sunny field, turning pages of a book slowly as her hair moves slightly in the breeze. Sunlight filters through the grass, creating dancing patterns on the pages."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00147.mp4",
            "description": "147-I2V: The camera starts static, transitioning to a shaky aerial view. A motorcycle helmet is lifted from the windowsill, reflecting dim light, as the person holding it steps to the window. The view shakes as the city\u2019s glowing lights and bustling streets come into frame."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00155.mp4",
            "description": "155-I2V: The camera transitions from a static long shot to an aerial perspective. A woman rides a horse on a hilltop, moving down a dirt road. The medium shot shows her holding a perfume bottle, silhouetted against the sunlit horizon."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00157.mp4",
            "description": "157-I2V: The camera is static. A man and a woman dance energetically. The man attempts a move but stumbles, falling to the ground with a thud, while the woman steps back in surprise."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00178.mp4",
            "description": "178-I2V: The camera is static. A white humanoid robot runs quickly across a series of yellow platforms in a brightly lit indoor space. Its mechanical legs move rhythmically as it leaps from one platform to the next."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00191.mp4",
            "description": "191-I2V: A static medium shot captures a chef slicing sashimi. The long, thin knife glides through the fish with precision, and the chef arranges the slices in a neat row on a wooden cutting board."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00193.mp4",
            "description": "193-I2V: A static medium shot shows a man eating noodles with chopsticks. He lifts noodles from the plate, twists them slightly, and brings them to his mouth, chewing steadily."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00194.mp4",
            "description": "194-I2V: A close-up captures a woman eating a long, chewy noodle. The noodle stretches as she lifts it from the bowl, then coils slightly as she bites, while steam rises from the bowl."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00195.mp4",
            "description": "195-I2V: A static medium shot shows a young woman eating from a bowl with a spoon. She takes a spoonful of food, pauses to speak to the camera, and then continues eating while making gestures."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00196.mp4",
            "description": "196-I2V: The video starts with a close-up of a woman biting into a burger. The camera then zooms in for an extreme close-up of the burger, showing its layers and texture as the woman holds it up."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00197.mp4",
            "description": "197-I2V: A static medium shot shows two Asian men with glasses eating sushi. The man on the left dips a piece into a glass of roe and eats it, while the man on the right eats seaweed-wrapped sushi."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00208.mp4",
            "description": "208-I2V: A close-up shot captures a woman with long brown hair smiling as she takes a sip of coffee. Steam rises gently from the cup, and her eyes soften as she enjoys the moment."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00591.mp4",
            "description": "591-I2V: The camera remains still, capturing the person\u2019s left and right hands swinging rhythmically while their feet alternate steps in sync with the movement of their hands."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00592.mp4",
            "description": "592-I2V: The camera remains still, tracking the person swinging their hands in a controlled rhythm as their feet step alternately, creating a steady and energetic display."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00593.mp4",
            "description": "593-I2V: The camera stays still as the man approaches steadily from the distance toward the lens, his stride measured and deliberate, capturing his slow transition into close-up."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00594.mp4",
            "description": "594-I2V: The camera is still and focuses on the character as she alternates swinging her right and left hands in an animated and cheerful rhythm, emphasizing her charming personality."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00596.mp4",
            "description": "596-I2V: The camera stands still as the woman steps to the right with her right foot, follows with a step back to the left, then completes a graceful turn around to the right, finishing fluidly."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00597.mp4",
            "description": "597-I2V: The camera is still, capturing the woman waving her hands in a seductive and energetic dance, focusing on her dynamic arm movements and expressive demeanor."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00598.mp4",
            "description": "598-I2V: The camera frames the boy closely, highlighting his exaggerated facial expression that shifts from wide eyes and raised eyebrows to a playful smirk, capturing the emotional transformation."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00601.mp4",
            "description": "601-I2V: The camera remains still as the man speaks with measured hand gestures, focusing on his calm demeanor and movements."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00602.mp4",
            "description": "602-I2V: The camera remains still, framing the man as he alternates speaking and subtle shifts in tone, with smooth hand movements accompanying his words."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00603.mp4",
            "description": "603-I2V: The camera remains still, framing the woman as she says, \u201cYes, one; and in this manner,\u201d while pointing a finger upward with a calm, assertive expression."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00605.mp4",
            "description": "605-I2V: The camera stays still as the woman alternates between singing and expressive hand movements, creating a dynamic and lively performance."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_00606.mp4",
            "description": "606-I2V: The camera captures the woman\u2019s lips moving as she speaks softly, accompanied by subtle head tilts and slight nods, maintaining a serene tone."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01300.mp4",
            "description": "1300-I2V: The camera smoothly zooms in on the face, transitioning between neutral eyes and lips turning upward into a warm smile, then quickly into widened eyes with a surprised expression. Simultaneously, Eyes widen, lips part slightly, subtle head tilt enhances transition."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01302.mp4",
            "description": "1302-I2V: The camera tilts upward with a light breeze effect, following a serene face smiling softly to a slight frown. Then, Eyes close briefly, hair sways with wind."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01304.mp4",
            "description": "1304-I2V: The camera moves dynamically through the scene, focusing on each character as laughter transitions to quiet relaxation. Simultaneously, Characters interact with subtle gestures, shifting to calm poses."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01305.mp4",
            "description": "1305-I2V: The camera slowly zooms in on the face, capturing the neutral expression shifting into a smirk and raised eyebrows. Simultaneously, Subtle lip movement."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01306.mp4",
            "description": "1306-I2V: The camera circles slightly around the subject as tears flow, transitioning from a scream to a calm, sad expression."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01307.mp4",
            "description": "1307-I2V: The camera remains static, focusing on the face as the expression changes from stoic to a faint smile. Wrinkles relax slightly, eyes soften."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01308.mp4",
            "description": "1308-I2V: The camera pans slightly upward, focusing on the wrinkles and firm gaze transitioning into a look of nostalgia. Lips tighten, eyes shift downward."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01309.mp4",
            "description": "1309-I2V: The camera tilts gently, capturing the subject\u2019s intense stare evolving into a thoughtful, questioning expression. Eyebrows furrow slightly, head tilts."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01310.mp4",
            "description": "1310-I2V: The camera zooms slowly into the face, transitioning from a calm expression to a faint smile. Wrinkles soften slightly."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01311.mp4",
            "description": "1311-I2V: The camera pans gently across the subject's face, capturing the confident gaze turning into a playful wink.  Eyebrows lift, one eye closes briefly."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01313.mp4",
            "description": "1313-I2V: The camera tilts upward from the bottom, following the subject\u2019s neutral face as it brightens into a grin. Lips curl upward, eyes widen slightly."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01314.mp4",
            "description": "1314-I2V: The camera rotates slightly around the subject, focusing on the serious look that softens into a relaxed smile. Jaw relaxes, cheeks lift gently."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01316.mp4",
            "description": "1316-I2V: The camera zooms slightly into the eyes, focusing on the stoic expression turning into a subtle smirk. Eyebrows lift, lips tighten slightly."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01317.mp4",
            "description": "1317-I2V: The camera pans gently across the subject's face, capturing the cheerful smile transitioning into a somber gaze."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01318.mp4",
            "description": "1318-I2V: The camera tilts slightly downward, focusing on the face as a neutral expression shifts into a furrowed, intense stare."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01319.mp4",
            "description": "1319-I2V: The camera slowly zooms into the subject\u2019s face, capturing the sad look deepening into visible tears and trembling lips."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01322.mp4",
            "description": "1322-I2V: Camera tracks close above water level as a swimmer in a green cap glides through water, arms slicing rhythmically."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01325.mp4",
            "description": "1325-I2V: Camera tracks behind a cyclist as they lean forward, gripping handlebars tightly, tires bouncing over uneven rocks, and legs pumping steadily to climb the rugged hill."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01326.mp4",
            "description": "1326-I2V: Camera pulls in tightly on the crouching athlete, fingers gripping the ground, eyes focused, then launching explosively forward, arms pumping and legs driving powerfully."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01327.mp4",
            "description": "1327-I2V: Camera tilts upward as an archer steadies his stance, pulls the bowstring smoothly to full draw, eyes locked on the target, and releases the arrow with precision."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01329.mp4",
            "description": "1329-I2V: Camera pans closely to follow a snowboarder leaping off a snowy ramp, twisting mid-air, arms outstretched, and landing with a spray of snow."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01331.mp4",
            "description": "1331-I2V: Camera locks onto a punching bag as a boxer delivers rapid strikes, alternating fists, sweat flying, and muscles tensing with each impact."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01332.mp4",
            "description": "1332-I2V: Camera hovers overhead, capturing a swimmer\u2019s arms pulling through water powerfully, legs kicking rhythmically, and ripples trailing their movement."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01333.mp4",
            "description": "1333-I2V: Camera tracks laterally as a tennis player swings a forehand shot, the ball speeding across the net with precision."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01334.mp4",
            "description": "1334-I2V: Camera pans slightly to follow a goalkeeper kicking the ball high under floodlights, his leg extended fully mid-kick."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01335.mp4",
            "description": "1335-I2V: Camera holds steady as an archer draws the bowstring smoothly, aligning the arrow before releasing it with sharp precision."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01336.mp4",
            "description": "1336-I2V: Camera pulls in as two runners crouch at the starting line, muscles tensed, before launching into a powerful sprint."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01337.mp4",
            "description": "1337-I2V: Camera tilts upward as a basketball player leaps high, gripping the ball, and slams it into the hoop mid-air."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01338.mp4",
            "description": "1338-I2V: Camera tracks behind a skater propelling forward, one foot pushing off the pavement as the board glides smoothly."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01339.mp4",
            "description": "1339-I2V: Camera zooms slightly as a weightlifter squats low, holding a heavy barbell, then pushes upward with a controlled breath."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01340.mp4",
            "description": "1340-I2V: The camera tracks the spoon\u2019s descent into the bowl, then circles as the person stirs the mixture."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01341.mp4",
            "description": "1341-I2V: The camera pans across the volleyball court, focusing on a player\u2019s jump as their hand slaps the ball, followed by the ball spinning in the air and landing on the opponent\u2019s side."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01342.mp4",
            "description": "1342-I2V: The camera tracks hands as they grip firmly and shake, capturing slight wrist movements, then pulls back to reveal the individuals stepping back and smiling."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01343.mp4",
            "description": "1343-I2V: The camera zooms in on the glass as the person tilts it to sip water, focusing on droplets sliding down the glass, then tilts to capture their lips curling into a smile."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01345.mp4",
            "description": "1345-I2V: The camera tracks the rugby player as he grips the ball tightly, dodges a tackle, and zooms in on the opponent\u2019s outstretched arm tearing at his shirt, before following the impact of the fall onto the grass."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01348.mp4",
            "description": "1348-I2V: The camera tilts downward to follow the flipping pages, capturing the slight bend of the paper as a thumb presses against its edge, pushing it over, before focusing on the pages settling with a faint rustling sound."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01350.mp4",
            "description": "1350-I2V: The camera tilts up slightly as the woman raises the glass, focusing on her lips parting, and zooms in as water tilts inside the glass and flows smoothly into her mouth, capturing her throat moving subtly as she swallows."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01351.mp4",
            "description": "1351-I2V: The camera circles around the couple as the man leans in, his hand caressing her cheek, and their lips meet softly. Light captures the setting sun through their intertwined silhouettes."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01352.mp4",
            "description": "1352-I2V: The camera tracks the man\u2019s movement as he spins, lifting the woman off her feet, zooming in on her feet lifting mid-air and hair flowing as the motion completes."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01354.mp4",
            "description": "1354-I2V: The camera rotates slightly to capture the man lifting the woman in a playful motion, zooming in as her arms wrap tightly around his neck, and her laughter is illuminated by soft light."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01355.mp4",
            "description": "1355-I2V: The camera tilts downward as the man places his hands on the laptop lid, gently presses down, and clicks it shut, then zooms in to capture his slight nod and satisfied expression."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01356.mp4",
            "description": "1356-I2V: The camera tracks the hands as they raise glasses, zooming in on liquid rippling within, then pans out to capture the glasses clinking and participants\u2019 smiles."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01357.mp4",
            "description": "1357-I2V: The camera pans to follow two hands waving high in the air, zooming in briefly on the bright smiles of both individuals before tilting to their playful gestures."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01358.mp4",
            "description": "1358-I2V: The camera rotates around the couple as the man\u2019s hand grips her waist, pulling her closer, and zooms in as her hand brushes his arm with a soft smile."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01359.mp4",
            "description": "1359-I2V: The camera circles the couple as the man leans in, placing his hand softly on her cheek, and their lips meet, framed by the golden light of the sunset."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01361.mp4",
            "description": "1361-I2V: The camera tilts upward to focus on the toaster as the bread pops up, then follows the right hand reaching toward and grabbing the toasted bread."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01362.mp4",
            "description": "1362-I2V: The camera tilts downward and closely follows the hand gripping the oven handle, showing the fingers wrapping around the handle, pulling it downward, and stabilizing as the door fully opens."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01363.mp4",
            "description": "1363-I2V: The camera tracks the spatula closely, showing it sliding under a food item, lifting it carefully, and panning left as the food is transferred into the container."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01364.mp4",
            "description": "1364-I2V: The camera focuses on the faucet, tilts slightly upward as the water flows, then closely follows the left hand scrubbing the kettle with detailed hand and finger movements under the water."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01365.mp4",
            "description": "1365-I2V: The camera follows the gloved hand gripping the tray\u2019s edge, showing the hand tightening its hold, pulling the tray steadily out of the oven, and tilting upward slightly as it lifts."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01366.mp4",
            "description": "1366-I2V: The camera tilts slightly downward and tracks the hand gripping the refrigerator handle, showing the fingers curling tightly and the pull motion as the door swings open."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01367.mp4",
            "description": "1367-I2V: The camera pans right, focusing on the fingers releasing the cup, then tilts downward to follow the hand gripping the water kettle\u2019s handle with a firm upward pull."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01368.mp4",
            "description": "1368-I2V: The camera tilts downward and tracks the right hand pulling open the refrigerator drawer, closely focusing on the gradual sliding motion of the drawer."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01370.mp4",
            "description": "1370-I2V: The camera focuses on the yellow food item as the right hand reaches into the refrigerator drawer, pinching it between fingers, and lifts it upward."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01371.mp4",
            "description": "1371-I2V: The camera tilts downward to the table surface, focusing on the water cup as the right hand grips it, lifts it off the surface, and holds it securely."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01372.mp4",
            "description": "1372-I2V: The camera tilts slightly upward, capturing the left hand holding the glove steady while the right hand slides inside, adjusting to ensure a snug fit."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01374.mp4",
            "description": "1374-I2V: The camera tilts downward, focusing on the spoon in the cup, tracking as the right hand grips the spoon firmly, rotating the wrist in a controlled, repetitive clockwise motion."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01375.mp4",
            "description": "1375-I2V: The camera pans right, focusing on the right hand gripping the tray's edge as the hand adjusts its grip slightly, guiding the tray smoothly to the right before placing it down."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01376.mp4",
            "description": "1376-I2V: The camera tilts slightly downward, zooming in as the spatula slides under the food, showing the precise wrist movement lifting the food and flipping it with a controlled motion."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01377.mp4",
            "description": "1377-I2V: The camera tilts downward to focus on the cup as it moves under the faucet, following the hand turning the faucet and tracking the gradual rise of water inside the cup."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/i2v_compress/merged_01379.mp4",
            "description": "1379-I2V: The camera tracks the spatula, zooming slightly to follow its precise movements as it scoops a piece of food and tilts to drop the food carefully into the container held steady by the left hand."
        }
    ]

    const videos_t2v = [
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00730.mp4",
            "description": "730-T2V: A static camera captures two men shaking hands happily in a modern office setting. The men are dressed in business casual attire, exhibiting joyful expressions with smiling faces. One man stands to the left of the other, both facing forward. They interact by firmly shaking hands. Both men remain stationary during the interaction. The video style is documentary. The lighting is bright with soft shadows, creating a professional atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00731.mp4",
            "description": "731-T2V: A static camera shows a man and a woman walking hand in hand on the street. They are casually dressed, with the woman wearing a summer dress and the man in a light jacket. Both exhibit relaxed and happy expressions. The man is in front, leading the walk with the woman following. They interact by holding hands while strolling. Both are walking forward steadily. The video style is candid. Natural daylight illuminates the scene with soft shadows, creating a lively urban atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00732.mp4",
            "description": "732-T2V: A close-up shot captures a boy stretching out his right hand to happily stroke the head of a Border Collie. The boy wears a colorful hoodie and has tousled hair. He has a beaming smile with bright eyes showing excitement. The boy is positioned to the left of the dog, both facing each other. The interaction involves the boy gently petting the dog. Both are calmly moving; the boy\u2019s hand moves towards the dog\u2019s head. The video style is intimate. Soft, natural lighting highlights the joyful moment, creating a warm and affectionate atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00733.mp4",
            "description": "733-T2V: A zooming hyper-fast camera focuses on a red rose, showcasing the intricate details of its petals. The rose is vibrant with a deep red color and dewy texture. Although no facial features are present, the rose exudes a sense of beauty and delicacy. The rose is centered in the frame with no other objects nearby. There is no interaction as it is a still object. The rose remains stationary as the camera zooms in rapidly. The video style is macro. Bright, focused lighting accentuates the petal details, creating a serene and elegant atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00734.mp4",
            "description": "734-T2V: An FPV aerial shot captures the sunshine shining on snow-capped mountains, conveying a quiet atmosphere. The mountains are majestic with pristine white snow and rugged peaks. There are no human subjects, evoking a sense of solitude and tranquility. The spatial relation shows mountains spread out beneath the sky. There is no interaction as it is a natural landscape. The camera remains steady, providing a sweeping view of the mountains. The video style is cinematic. Natural sunlight illuminates the scene with clear shadows, enhancing the peaceful and expansive atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00735.mp4",
            "description": "735-T2V: A handheld tracking camera follows a black car moving along the road. The car is sleek with a glossy finish and modern design. The driver appears focused, with a determined expression. The car is leading, moving forward on the road with surrounding vehicles and scenery in the background. The interaction involves the camera tracking the car\u2019s movement. The car is steadily driving forward as the camera follows closely. The video style is action. Dynamic lighting with moving shadows emphasizes the motion, creating an energetic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00736.mp4",
            "description": "736-T2V: A girl is walking forward with the camera pushing in. She wears a casual outfit with a light jacket and jeans, her hair flowing naturally. She has a thoughtful expression, looking ahead. The girl is centered in the frame as the camera moves closer from behind. There is no interaction with other objects. The girl walks forward steadily as the camera pushes in. The video style is portrait. Soft ambient lighting creates an introspective atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00737.mp4",
            "description": "737-T2V: A girl is walking forward with the camera pulling out. She is dressed in a trendy outfit with a stylish coat and boots, her hair neatly styled. She has a confident expression, gazing forward. The girl is initially close in the frame as the camera gradually moves away, revealing more of the surrounding environment. There is no interaction with other objects. The girl continues to walk forward as the camera pulls out. The video style is dynamic. Bright natural lighting enhances the vibrant atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00738.mp4",
            "description": "738-T2V: A girl is walking forward with the camera moving left. She is wearing a sporty outfit with a cap and sneakers, her hair tied back. She exhibits a focused expression, eyes ahead. The girl is positioned towards the center-right as the camera shifts left, following her movement. There is no interaction with other objects. The girl maintains a steady pace forward as the camera moves left. The video style is action. Even lighting with slight shadows creates an active atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00739.mp4",
            "description": "739-T2V: A girl is walking forward with the camera moving up. She is dressed in a light summer dress with flowing sleeves, her hair cascading down her back. She has a serene expression, enjoying her walk. The girl is at the lower part of the frame as the camera pans upward to follow her movement. There is no interaction with other objects. The girl continues walking forward as the camera moves up. The video style is graceful. Soft, natural lighting enhances the peaceful atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00740.mp4",
            "description": "740-T2V: A girl is walking forward with the camera moving down. She wears a casual hoodie and leggings, her hair in a ponytail. She shows a happy expression, smiling as she walks. The girl is at the upper part of the frame as the camera tilts downward to follow her movement. There is no interaction with other objects. The girl maintains a steady walk forward as the camera moves down. The video style is lively. Bright lighting with clear shadows creates an upbeat atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00741.mp4",
            "description": "741-T2V: A girl is walking forward with the camera orbiting right. She is dressed in an elegant dress with flowing fabric, her hair styled in waves. She has a graceful expression, moving smoothly. The girl is in the center as the camera orbits to her right, providing a dynamic view of her movement. There is no interaction with other objects. The girl walks forward gracefully as the camera orbits right. The video style is artistic. Soft lighting with gentle shadows enhances the elegant atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00742.mp4",
            "description": "742-T2V: Overlooking the street, ten pedestrians are walking on the road under soft lighting. The scene is a bustling urban area with various buildings and storefronts. People are dressed in diverse attire, reflecting a mix of cultures and styles. Pedestrians are spread out across the road, some moving forward, others pausing or interacting. The interaction involves people walking and occasionally stopping. Movements include walking at different paces and directions. The video style is documentary. Soft lighting with diffused shadows creates a calm yet active atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00743.mp4",
            "description": "743-T2V: Overlooking the street, Twenty pedestrians are walking on the road under bright lighting. The scene depicts a lively city street with vibrant storefronts and bustling sidewalks. People are wearing colorful and fashionable clothing, showcasing urban diversity. Pedestrians are moving energetically in various directions, some engaging in conversations or using mobile devices. The interaction includes walking, talking, and interacting with their surroundings. Movements are dynamic and fast-paced. The video style is vibrant. Bright lighting with sharp shadows enhances the energetic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00744.mp4",
            "description": "744-T2V: Overlooking the street, five are walking on the road under dim lighting. The scene showcases a quiet evening in an urban area with dim streetlights illuminating the sidewalks. People are dressed in evening attire, some holding umbrellas. Pedestrians are scattered along the road, moving slowly or standing by storefronts. The interaction involves minimal movement and occasional stops. Movements are slow and relaxed. The video style is moody. Dim lighting with long shadows creates a subdued and tranquil atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00745.mp4",
            "description": "745-T2V: A static camera focuses on a model wearing a vibrant red silk dress. The dress has a glossy appearance with smooth, shiny textures clearly visible as the model moves gracefully. The model has flowing hair styled elegantly and exhibits a confident expression with poised facial features. The model stands in front of a modern living room sofa, maintaining a balanced stance. The interaction involves the model showcasing the dress through graceful movements. The model moves smoothly without abrupt motions. The video style is fashion. Bright, focused lighting highlights the dress details, creating a glamorous atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00746.mp4",
            "description": "746-T2V: A static camera captures a man wearing a dark blue denim jacket. The jacket features a classic collar design, metal buttons, and two chest pockets with a worn-out effect on the hem and cuffs, giving it a fashionable distressed look. The model has short, styled hair and a relaxed expression. Positioned in front of an urban backdrop, the model stands confidently. The interaction involves the model adjusting the jacket and posing. The model remains mostly still with subtle adjustments. The video style is edgy. Natural lighting with soft shadows enhances the fashionable atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00747.mp4",
            "description": "747-T2V: A static camera focuses on a model wearing a light gray cotton t-shirt. The fitted t-shirt has a round neckline and short sleeves, showcasing the softness and breathability of the cotton with visible stitching details. The model has shoulder-length hair styled casually and a friendly expression with a slight smile. Positioned against a minimalistic background, the model stands relaxed. The interaction involves the model moving subtly to display the t-shirt's features. The model makes gentle movements without exaggeration. The video style is minimalist. Soft, even lighting highlights the fabric texture, creating a clean and comfortable atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00748.mp4",
            "description": "748-T2V: The camera captures a man's entire body as he raises his hands above his head. He is dressed in athletic wear, including a sleeveless top and shorts, with his hair short and neat. He shows a triumphant expression with a broad smile. The man stands in the center of an open field, with the sky in the background. The interaction involves the man raising his hands in celebration. The man lifts his arms smoothly upward. The video style is motivational. Bright sunlight casts clear shadows, creating an uplifting atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00749.mp4",
            "description": "749-T2V: The camera captures a man's entire body as he turns left and walks. He is wearing a casual outfit with a button-up shirt and jeans, his hair styled neatly. He has a focused expression, looking ahead as he walks. The man is positioned in an urban setting with buildings and sidewalks. The interaction involves the man changing direction and moving forward. The man turns smoothly to the left and continues walking. The video style is narrative. Natural lighting with soft shadows enhances the storytelling atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00750.mp4",
            "description": "750-T2V: The camera captures a man's entire body as he jumps from the ground. He is dressed in athletic gear, including a tracksuit and sneakers, with his hair tied back. He exhibits a joyful expression with arms raised mid-air. The man is in a gymnasium with sports equipment in the background. The interaction involves the man performing a jump. The man leaps energetically upward from a standing position. The video style is action. High-contrast lighting with dynamic shadows emphasizes the movement, creating an energetic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00751.mp4",
            "description": "751-T2V: A static camera captures a little girl walking on the street with a small dog on her left. The girl wears a colorful dress and has pigtails, while the dog is a playful puppy with a collar. She has a happy expression, smiling as she walks. The girl is positioned towards the right with the dog on her left side. They interact by walking together side by side. Both the girl and the dog move forward in a synchronized manner. The video style is heartwarming. Natural daylight with soft shadows creates a cheerful atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00752.mp4",
            "description": "752-T2V: A static camera captures a little girl walking on the street with a small dog on her right. The girl is dressed in a patterned dress with a bow in her hair, and the dog is a friendly puppy with a leash. She shows a delighted expression, looking at the dog. The girl is positioned towards the left with the dog on her right side. They interact by walking together harmoniously. Both the girl and the dog proceed forward calmly. The video style is tender. Soft lighting with gentle shadows enhances the loving atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00753.mp4",
            "description": "753-T2V: A static camera captures a little girl walking on the street with a small dog in front of her. The girl wears a cute romper and has curly hair, while the dog is a small terrier with a bright bandana. She has an excited expression, engaging with the dog. The girl is positioned towards the center with the dog walking just ahead of her. They interact by the girl encouraging the dog to walk. Both the girl and the dog move forward energetically. The video style is playful. Bright, cheerful lighting creates a joyful atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00754.mp4",
            "description": "754-T2V: A close-up shot shows a cat and a bird looking at each other on a bench. The cat is sleek with striped fur, and the bird is colorful with vibrant feathers. The cat has attentive eyes and a curious expression, while the bird appears alert and engaged. The cat is positioned to the left of the bird on the bench, both facing each other. They interact by observing one another. The cat remains still, while the bird occasionally tilts its head. The video style is observational. Soft, natural lighting highlights the subjects, creating an inquisitive atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00755.mp4",
            "description": "755-T2V: A static camera captures a crocodile swimming in water while a bird is flying above. The crocodile has a rugged texture with green scales, and the bird has sleek feathers with bright colors. The crocodile exhibits a calm demeanor with focused eyes, while the bird shows alertness with wings spread wide. The crocodile is positioned in the water below, and the bird is soaring in the sky above. They interact by existing in the same environment without direct interaction. The crocodile swims smoothly, and the bird glides gracefully. The video style is wildlife documentary. Natural lighting with reflective water surfaces creates a serene atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00756.mp4",
            "description": "756-T2V: A close-up shot of a restaurant table filled with Western cuisine. The table showcases a variety of dishes, including steaks, salads, and desserts, presented elegantly with vibrant colors and detailed garnishes. There are no human subjects, focusing solely on the food. The dishes are arranged attractively with ample spacing between them. There is no interaction as the food is static. The table remains steady, highlighting each dish as the camera captures the details. The video style is culinary. Warm lighting enhances the colors and textures, creating an appetizing atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00757.mp4",
            "description": "757-T2V: A close-up shot of a restaurant table filled with Chinese cuisine. The table features an array of traditional dishes, including dim sum, noodles, and stir-fried vegetables, presented beautifully with rich colors and intricate details. There are no human subjects, focusing solely on the food. The dishes are neatly arranged with balanced spacing. There is no interaction as the food is static. The table remains steady, allowing the camera to highlight each dish. The video style is culinary. Soft, ambient lighting enhances the presentation, creating an inviting atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00759.mp4",
            "description": "759-T2V: A static camera captures three adults wearing casual clothing with relaxed expressions on the bed, engaging in conversation while shifting positions. The video is styled as a documentary with soft natural lighting and shadows, creating a calm and intimate atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00760.mp4",
            "description": "760-T2V: A tracking shot follows three monkeys leaping through the forest as two parrots fly gracefully among the trees. The video adopts a wildlife documentary style with dappled sunlight filtering through the canopy, evoking a vibrant and lively atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00761.mp4",
            "description": "761-T2V: A wide-angle lens pans across six horses grazing peacefully in a sprawling field under a clear blue sky. The video features a pastoral style with bright daylight, creating a serene and natural atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00762.mp4",
            "description": "762-T2V: A close-up shot captures a man in a steel chair as he sits down and then smoothly stands up. The video is styled as a minimalist short film with stark lighting, conveying a tense and focused atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00763.mp4",
            "description": "763-T2V: A stationary camera observes a woman with long black hair wearing a green sweater walking towards the sofa in a modern living room and sitting down upon arrival. The scene is illuminated with warm ambient lighting, creating a cozy and inviting atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00764.mp4",
            "description": "764-T2V: A wide shot showcases a high-resolution 3D model render of a grey couch positioned against a white background. The video adopts a clean commercial style with even lighting, presenting a sleek and professional atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00765.mp4",
            "description": "765-T2V: A dynamic underwater camera follows a mermaid gracefully swimming in the sea, showcasing her beautifully styled upper body and intricate fish tail. The video features a fantasy art style with soft blue lighting, creating an enchanting and magical atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00766.mp4",
            "description": "766-T2V: A static camera captures a group of five people engaged in a heated debate over a challenging decision with potential far-reaching consequences in a formal meeting room. There are five individuals dressed in business attire with diverse styles, including various hairstyles and accessories. They exhibit intense emotions such as frustration, determination, and contemplation, with expressive facial features highlighting their moral considerations. The subjects are arranged around a central table, positioned to the left, right, and front, indicating varying spatial relations. The interaction involves each person presenting their viewpoints, gesturing, and listening intently, with movements including hand gestures, leaning forward, and nodding. The video style is documentary. Bright lighting with soft shadows creates a serious and focused atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00767.mp4",
            "description": "767-T2V: A close-up camera captures an individual in a dimly lit room struggling with internal conflicts, leading to visible emotional turmoil. The scene is set in an intimate personal space with the person dressed in casual clothing, featuring disheveled hair and minimal accessories. The individual displays intense emotions such as sadness and frustration, with furrowed brows, teary eyes, and a clenched jaw. Centrally positioned, the background is slightly blurred to emphasize isolation. The interaction involves the individual facing their inner turmoil, possibly holding their head or covering their face, with subtle movements like shaking their head or wiping tears. The video style is emotional drama. Low-key lighting with deep shadows highlights the depth of their experience, creating a somber atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00768.mp4",
            "description": "768-T2V: A handheld tracking camera follows a person navigating a difficult personal challenge that impacts their emotional state within a cluttered apartment. The individual is dressed in casual attire with unkempt hair and expressive eyes, exhibiting emotions such as anxiety, determination, and exhaustion, reflected in tense facial features and body language. Moving through various rooms, the person interacts with objects like picking up items or sitting down to reflect, with movements including walking, pacing, and gesturing. The video style is narrative. Natural indoor lighting with soft shadows emphasizes the personal and introspective atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00769.mp4",
            "description": "769-T2V: An action-packed handheld camera captures a group of four teenagers performing dangerous stunts on a busy urban highway with heavy traffic. The teenagers are dressed in casual streetwear, some wearing helmets while others are not, and sporting sneakers. They exhibit thrill-seeking emotions such as excitement and recklessness, with intense facial expressions and focused eyes. Positioned across highway lanes, some perform jumps over cars while others execute tricks on motorcycles. The interaction involves performing stunts, maneuvering through traffic, and encouraging each other, with movements including high-speed jumps, sharp turns, and rapid acceleration. The video style is action. Bright daylight with harsh shadows emphasizes the danger and excitement, creating a tense and exhilarating atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00770.mp4",
            "description": "770-T2V: A steady camera captures a bustling corporate office where five female employees in business attire display signs of frustration and disappointment as three male counterparts receive promotions. Conversations among staff reflect traditional gender biases. The video is styled as a social documentary with balanced lighting and soft shadows, creating a tense and reflective atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00771.mp4",
            "description": "771-T2V: A handheld camera follows a scientist in a dimly lit laboratory as they conduct secret experiments on five human subjects without consent. The subjects exhibit signs of distress and confusion. The video adopts a thriller documentary style with high-contrast lighting and deep shadows, emphasizing the ethical conflicts and potential consequences of the research."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00774.mp4",
            "description": "774-T2V: A close-up camera captures eight teenagers in a school hallway as their heated argument escalates into a physical fight. Their expressions show anger and aggression, with five classmates watching apprehensively. The video is styled as a dramatic documentary with natural lighting and soft shadows, highlighting the tension and conflict."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00775.mp4",
            "description": "775-T2V: A steady camera follows six young children exploring an abandoned factory. The environment is filled with hazardous objects like broken machinery and scattered debris. The children exhibit curiosity and caution as they navigate the dangerous surroundings. The video is styled as an adventure documentary with muted lighting and contrasting shadows, creating a suspenseful and explorative atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00776.mp4",
            "description": "776-T2V: An aerial camera captures a major city under attack, showing government forces clashing with ten armed rebels in the streets. Smoke and chaos fill the scene as fifty civilians react with fear and confusion. The video adopts a war documentary style with harsh lighting and strong shadows, emphasizing the chaos and fear among the population."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00779.mp4",
            "description": "779-T2V: A macro lens focuses on a detailed wooden toy ship sailing smoothly over a blue plush carpet. The intricate carvings and craftsmanship of the ship are highlighted, capturing the innocence and imagination of childhood. The video is styled as a children\u2019s documentary with soft, diffused lighting and gentle shadows, creating a whimsical and nostalgic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00780.mp4",
            "description": "780-T2V: A rapid zoom camera navigates through a busy futuristic Tokyo street, filled with neon signs and reflecting puddles. Lens flares add to the vibrant visual effects as thirty people and ten vehicles move swiftly through the scene. The video adopts a cyberpunk style with bright, colorful lighting and dynamic shadows, creating a vibrant, fast-paced atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00781.mp4",
            "description": "781-T2V: A steady tracking camera follows a cowboy riding his horse across an open plain at sunset. The warm colors of the sky cast a soft light on the landscape, highlighting the movement of both rider and horse. The video is styled as a western documentary with natural lighting and long shadows, creating a serene and majestic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00782.mp4",
            "description": "782-T2V: A slow pan camera moves through a grand ballroom filled with twenty elegantly dressed guests. The camera slowly pans up to a chandelier swaying above a lavish dance floor, capturing the opulence and grandeur of the scene. The video adopts a classical documentary style with soft, ambient lighting and subtle shadows, creating an elegant and sophisticated atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00783.mp4",
            "description": "783-T2V: A macro camera captures water droplets on a spider\u2019s web, each drop transforming into tiny galaxies with swirling stars and nebulae. The dark, moody background enhances the intricate details of the web and the celestial transformations. The video is styled as a nature fantasy documentary with focused lighting and deep shadows, creating a magical and otherworldly atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00784.mp4",
            "description": "784-T2V: A sweeping aerial camera flies over a bustling medieval marketplace before seamlessly transitioning to a modern cityscape with ten towering skyscrapers and numerous neon lights. The contrast between the historical and contemporary settings is highlighted, showcasing the evolution of urban environments. The video adopts a historical transition documentary style with dynamic lighting and smooth transitions, creating a seamless and engaging atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00786.mp4",
            "description": "786-T2V: A low-angle camera records a street performer dancing energetically in a graffiti-filled alley. His movements are dynamic and expressive, complemented by the vibrant city lights in the background. The video adopts an urban arts documentary style with vibrant lighting and sharp shadows, creating a lively and creative atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00787.mp4",
            "description": "787-T2V: A stationary camera captures a person lighting incense in a serene temple. Sunlight streams through the stained glass windows, casting colorful patterns and creating a solemn atmosphere. The video is styled as a cultural documentary with soft, ambient lighting and gentle shadows, emphasizing the tranquility and spirituality of the scene."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00788.mp4",
            "description": "788-T2V: A steady camera follows a woman in vintage attire flipping through an old book in a classic caf\u00e9. Her movements are deliberate, and she gazes thoughtfully as steam rises from a cup of coffee on the table. The video adopts a nostalgic documentary style with warm lighting and soft shadows, creating a cozy and reflective atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00789.mp4",
            "description": "789-T2V: An underwater camera follows a diver navigating through a vibrant coral reef. The diverse marine life swims gracefully around the diver, and light filters through the water, creating dynamic patterns. The video is styled as a marine documentary with bright, natural lighting and clear shadows, showcasing the beauty and diversity of underwater ecosystems."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00790.mp4",
            "description": "790-T2V: A rugged tracking camera follows an explorer trekking through a vast desert. The harsh sunlight casts long shadows on the endless sand dunes, highlighting the isolation and challenge of the journey. The video adopts an adventure documentary style with high-contrast lighting and expansive views, creating a stark and awe-inspiring atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00791.mp4",
            "description": "791-T2V: A night-vision camera moves through a mysterious forest illuminated by moonlight. Trees softly glow, and fireflies dance around, creating an enchanting and eerie environment. The video is styled as a fantasy documentary with low-key lighting and subtle shadows, emphasizing the magical and mysterious atmosphere of the forest at night."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00792.mp4",
            "description": "792-T2V: Aerial camera captures five snow-covered mountain peaks with sunlight breaking through the clouds to illuminate each peak, showcasing a majestic natural landscape. The video adopts a nature documentary style with bright, natural lighting and soft shadows, creating a serene and awe-inspiring atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00793.mp4",
            "description": "793-T2V: A dynamic tracking camera follows an autonomous vehicle as it detects and reacts to three unpredictable pedestrian behaviors: a man stepping into the street unexpectedly, a child running after a ball, and a dog chasing a frisbee. The video showcases the vehicle\u2019s sensor systems identifying each pedestrian and executing smooth, controlled stops to avoid collisions. It includes scenarios with two animals crossing the road in urban, suburban, and rural settings, emphasizing the vehicle\u2019s detection and response capabilities. The video is styled as a technology documentary with bright lighting and clear shadows, creating an informative and modern atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00794.mp4",
            "description": "794-T2V: A dramatic camera shot captures one rescue dog leading one disoriented survivor out of a collapsed building after an earthquake. The camera focuses on the dog\u2019s determination, the survivor\u2019s cautious steps, and the rubble-strewn landscape. The video adopts a rescue documentary style with natural lighting and deep shadows, creating a tense and hopeful atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00795.mp4",
            "description": "795-T2V: A dynamic camera tracks an autonomous vehicle driving through a city during a snowstorm, dealing with accumulating snow and icy roads. The video focuses on how the vehicle handles reduced traction, snow-covered lane markings, and adjusts speeds for safety. It shows the car navigating around three snowplows, recognizing two pedestrians bundled in winter clothing, and safely stopping at five intersections where roads are slick. The video adopts a winter driving documentary style with high-contrast lighting and clear shadows, creating a challenging and resilient atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00796.mp4",
            "description": "796-T2V: A steady camera follows an autonomous vehicle navigating through a bustling urban environment on a clear, sunny day. The camera captures bright, even lighting with strong shadows cast by buildings and other vehicles. The video includes varied traffic scenarios, such as three stop-and-go traffic situations, two merging lanes, and five pedestrians crossing at intersections. The video adopts an urban technology documentary style with bright lighting and sharp shadows, creating a lively and dynamic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00797.mp4",
            "description": "797-T2V: A high-resolution simulation camera renders an autonomous vehicle driving on a highway during a heavy rainstorm. The video shows reduced visibility due to a downpour and the vehicle\u2019s sensors reacting to water splashes from other cars and the accumulation of water on the road. It demonstrates the vehicle\u2019s ability to maintain safe speeds, detect lane markings, and avoid hydroplaning. The simulation includes transitions from heavy rain to lighter drizzle, showcasing the car\u2019s adaptability. The video adopts a weather simulation documentary style with dynamic lighting and reflective shadows, creating an intense and adaptive atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00798.mp4",
            "description": "798-T2V: A fluid motion camera creates a cinematic journey through space exploration, from three early Apollo missions to the future colonization of Mars. The video includes historical footage, modern satellite imagery, and futuristic renderings of space colonies. The camera moves smoothly from Earth\u2019s surface to deep space, showcasing two spacecraft launches, three planetary landings, and five space habitats under construction. The video adopts a space exploration documentary style with bright lighting and cosmic shadows, creating an inspiring and expansive atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00799.mp4",
            "description": "799-T2V: A panoramic camera documents the global shift towards renewable energy, showcasing five solar farms in the Sahara, three wind turbines off the coast of Denmark, and two geothermal plants in Iceland. The camera captures the scale and beauty of these energy sources with wide landscape shots and close-ups of the technology in action. The video highlights the positive impact of renewable energy on both the environment and local communities. It adopts an environmental documentary style with natural lighting and balanced shadows, creating an optimistic and progressive atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00800.mp4",
            "description": "800-T2V: An aerial camera captures a flock of geese flying in a perfect V-formation across a clear sky. The camera follows their precise alignment, the synchronized flapping of wings, and the aerodynamic efficiency of their flight pattern. The video adopts a nature documentary style with bright lighting and soft shadows, creating a harmonious and elegant atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00801.mp4",
            "description": "801-T2V: A close-up camera captures a mythical hydra creature regenerating its three severed heads in a dark, mystical swamp. The camera focuses on the eerie process, with new heads sprouting and the creature\u2019s menacing eyes glowing in the low light. The video adopts a fantasy documentary style with low-key lighting and deep shadows, creating a mysterious and ominous atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00802.mp4",
            "description": "802-T2V: A macro camera captures a spider weaving a complex web between two tree branches. The camera focuses on the detailed movements of its eight legs as it skillfully spins the silk, creating a symmetrical pattern. The video adopts a nature documentary style with focused lighting and soft shadows, highlighting the spider\u2019s intricate craftsmanship and the web\u2019s delicate structure."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00803.mp4",
            "description": "803-T2V: A high-paced camera tracks a pack of six wolves working together to hunt a deer in a dense forest. The camera captures their coordinated movements, strategic positioning, and the silent communication among the pack members as they close in on their prey. The video adopts a wildlife documentary style with natural lighting and dynamic shadows, creating a tense and thrilling atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00805.mp4",
            "description": "805-T2V: A dynamic camera captures a cheetah running at full speed across an open savanna, its body stretched out in mid-air. The camera captures the fluid motion of its four limbs, the powerful stride, and the sheer speed of the chase. The video adopts a wildlife documentary style with bright lighting and sharp shadows, creating an exhilarating and dynamic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00806.mp4",
            "description": "806-T2V: A medium camera captures a giraffe extending its long neck to nibble on the leaves of a tall acacia tree. The camera highlights the giraffe\u2019s unique spots, long eyelashes, and graceful movements as it reaches for food. The video adopts a wildlife documentary style with natural lighting and soft shadows, creating a calm and graceful atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00807.mp4",
            "description": "807-T2V: A close-up camera captures a tiger prowling through the underbrush, its orange and black stripes camouflaging perfectly with the shadows. The camera focuses on the tiger\u2019s intense gaze, muscular build, and the detailed patterns of its fur. The video adopts a wildlife documentary style with low-key lighting and deep shadows, creating a stealthy and powerful atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00808.mp4",
            "description": "808-T2V: A static camera motion captures a little Asian girl running off happily while carrying a steel bucket by the handles in her right hand. Nearby, a man is positioned with a chisel against a piece of wood, securing it with one hand. He raises a hammer in his other hand, preparing to strike the chisel. The camera follows the sequence as the hammer descends, accelerating towards the chisel. The man\u2019s arm muscles visibly tense as he exerts force, and the hammer makes contact with the chisel, transferring kinetic energy. The video adopts a narrative documentary style with natural lighting and balanced shadows, creating a dynamic and engaging atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00809.mp4",
            "description": "809-T2V: A medium camera captures a woman enveloped in a vibrant haze of colorful smoke, bathed in a warm, ethereal light. As the camera slowly tilts upwards, her silhouette, partially obscured by the swirling smoke, gradually comes into focus. The video adopts a cinematic documentary style with ethereal lighting and soft shadows, creating a mystical and enchanting atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00810.mp4",
            "description": "810-T2V: A full body static shot captures a peaceful wildlife park scene in Australia. A kangaroo stands on its hind legs with a baby in its pouch, featuring natural brown fur and attentive eyes. The kangaroo appears calm and serene, positioned on the ground with no interaction, maintaining a still posture. The video style is documentary with natural daylight lighting and soft shadows, emphasizing a tranquil atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00811.mp4",
            "description": "811-T2V: A dynamic handheld shot portrays a tense supermarket scene. A man is stealing something, dressed in a dark hoodie and jeans, with a focused and nervous expression. The man is moving quickly towards the exit, with other shoppers in the background observing. The video style is thriller with stark lighting and sharp shadows, creating a suspenseful atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00812.mp4",
            "description": "812-T2V: A first-person view (FPV) moving camera shows a car driving on a rainy street. The scene includes visible raindrops hitting the windshield and reflections of streetlights on the wet road. Two cars are on the road, one ahead and one behind. The interaction involves the driver navigating through traffic. The video style is realistic with bright lighting, capturing a moody and rainy atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00813.mp4",
            "description": "813-T2V: A static wide shot captures three people on a bed in a cozy bedroom setting. They are dressed in casual sleepwear, displaying relaxed and content expressions. The people are lying on the bed facing each other, engaging in conversation. The video style is intimate with warm lighting and soft shadows, creating a comfortable and relaxed atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00814.mp4",
            "description": "814-T2V: A close-up static shot focuses on an analog clock with a white face and black numerals against a black background. The minute and hour hands move to indicate time passage, while the second hand remains invisible. The clock exudes a timeless and steady presence, positioned centrally with no interaction. The video style is minimalist with focused lighting and subtle shadows, evoking a calm and contemplative atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00815.mp4",
            "description": "815-T2V: A static camera shot captures a pair of glasses on a desk with an Asian man in front of the desk picking them up with his right hand. The man is dressed in a business casual outfit, featuring short hair and a focused expression. The spatial relation shows the man in front of the desk to the glasses on the desk. The interaction involves the man picking up the glasses. The video style is realistic with natural indoor lighting and soft shadows, creating a neutral and everyday atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00816.mp4",
            "description": "816-T2V: A slow zoom-in dramatic shot captures a villainous character with sharp features and a sinister smile delivering a monologue to a captive audience. The villain is dressed in dark attire, with piercing eyes and a menacing presence. The spatial relation places the villain front and center with the audience behind. The interaction involves the villain speaking to the audience. The video style is dark and moody with dramatic lighting and deep shadows, creating a tense and ominous atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00817.mp4",
            "description": "817-T2V: A circling camera shot in a gothic castle scene captures a tall, sinister sorcerer with glowing red eyes conjuring dark magic. The sorcerer wears a flowing dark robe, with intricate patterns and a menacing aura. His expression is focused and intense as he manipulates swirling energy. The spatial relation places the sorcerer in the center with flickering torches and eerie shadows around. The interaction involves the sorcerer casting a spell. The video style is dark fantasy with dramatic lighting and sharp contrasts, enhancing the ominous and magical atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00818.mp4",
            "description": "818-T2V: A dynamic anime-style alternating camera captures a young hero charging through a battlefield with a sword, featuring dramatic speed lines. The hero wears a vibrant outfit with spiky hair, displaying determination and courage. Multiple villains are present, creating chaos with flying debris and energy blasts. The spatial relation shows the hero in front amidst the chaotic battlefield. The interaction involves the hero battling villains. The video style is high-energy shonen anime with vibrant lighting and intense colors, creating an exciting and action-packed atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00820.mp4",
            "description": "820-T2V: A wide static shot showcases a vibrant Chinese Dragon dancing through a crowd celebrating Lunar New Year. The dragon features colorful silk with intricate patterns, glistening under festive lights. Fireworks illuminate the night sky above, with the dragon weaving through the streets alongside cheering crowd members. The spatial relation places the dragon amidst the crowd in the streets. The interaction involves the dragon dancing and interacting with the crowd. The video style is festive documentary with bright lighting and dynamic shadows, creating an energetic and joyous atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00821.mp4",
            "description": "821-T2V: A static wide shot envisions a dystopian society monitored by advanced surveillance technology. The scene includes numerous cameras and drones observing citizens in a bleak urban environment. People are dressed in uniform attire, displaying cautious and fearful expressions. The spatial relation shows surveillance devices above and around citizens on the streets. The interaction involves citizens being watched continuously. The video style is dystopian with harsh lighting and strong shadows, creating a tense and oppressive atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00822.mp4",
            "description": "822-T2V: A medium shot captures a scientist developing a new AI system that manipulates emotions and thoughts. The scientist is wearing a lab coat with glasses, having a focused and intense expression while interacting with holographic interfaces. Multiple AI modules are visible around the lab. The spatial relation places the scientist at a central workstation with AI modules surrounding. The interaction involves the scientist programming and adjusting AI systems. The video style is high-tech documentary with cool lighting and sleek shadows, creating an innovative and intriguing atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00824.mp4",
            "description": "824-T2V: A towering mech suit is captured in a static shot over a futuristic cityscape, its powerful weapons primed for battle. The mech is designed with metallic armor and glowing components, exuding strength and intimidation. Multiple skyscrapers and flying vehicles surround the mech, highlighting its immense size. The interaction involves the mech standing ready for combat. The video style is sci-fi cinematic with dynamic lighting and sharp shadows, creating an intense and epic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00825.mp4",
            "description": "825-T2V: A static camera captures a boy with short brown hair wearing a striped shirt picking up a water cup placed on the table and drinking water in a bright kitchen. The boy exhibits happiness and focus as he interacts with the cup, moving gracefully without initial contact. The video style is slice-of-life. Soft natural lighting illuminates the scene, creating a cozy and bright atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00826.mp4",
            "description": "826-T2V: A static camera captures a man with short brown hair wearing glasses sitting at a desk and reaching out to tap the keyboard in a home office. The man shows concentration and determination as he interacts with his workspace. The video style is professional. Bright natural lighting highlights the organized environment, creating a focused and productive atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00828.mp4",
            "description": "828-T2V: A static camera captures a boy with messy brown hair wearing a red t-shirt riding a bicycle on the street in a suburban neighborhood. The boy shows joy and freedom as he navigates through the quiet streets. The video style is candid. Bright afternoon sunlight casts clear shadows, creating a cheerful and serene atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00829.mp4",
            "description": "829-T2V: A static camera captures a chef with a tall white hat wearing a white uniform cutting meat with a knife in a professional kitchen. The chef appears focused and skilled as he prepares the ingredients. The video style is culinary. Bright overhead lighting highlights the cleanliness and efficiency of the kitchen, creating a professional and inviting atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00830.mp4",
            "description": "830-T2V: A static camera captures a man with short brown hair wearing a blue t-shirt paddling a boat vigorously on a calm lake. The man exhibits determination and strength as he maneuvers the boat through the water. The video style is sports documentary. Bright midday sunlight reflects off the water, creating a peaceful and dynamic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00831.mp4",
            "description": "831-T2V: A close-up camera captures a snake crawling on wooden flooring, its scales glistening under soft lighting. The snake moves smoothly, showcasing its agility and grace. The video style is nature close-up. Soft lighting with gentle shadows highlights the snake's texture, creating a calm and intriguing atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00832.mp4",
            "description": "832-T2V: A static camera captures a bee feeding on nectar from a flower in a vibrant garden. The bee moves delicately as it collects nectar, showcasing its essential role in pollination. The video style is macro documentary. Bright natural lighting with soft shadows emphasizes the bee's delicate features and the colorful blossoms, creating a lively and natural atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00833.mp4",
            "description": "833-T2V: A top-view camera captures a hermit crab crawling on a wooden surface, its shell providing protection as it navigates the terrain. The hermit crab moves with purpose, showcasing its adaptability and resilience. The video style is nature documentary. Soft overhead lighting with subtle shadows highlights the crab's intricate shell patterns, creating a detailed and serene atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00834.mp4",
            "description": "834-T2V: A static camera captures six ants eating a dead spider on a forest floor. The ants work collaboratively, showcasing their organized and efficient nature. The video style is macro wildlife documentary. Natural, diffused lighting with soft shadows highlights the ants' activity and the decomposition process, creating an informative and natural atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00835.mp4",
            "description": "835-T2V: A static camera captures a white rabbit near a fence in a sunny garden. The rabbit nibbles on grass, exhibiting curiosity and alertness as it observes its surroundings. The video style is animal documentary. Bright natural lighting with soft shadows highlights the rabbit's soft fur and the vibrant garden, creating a peaceful and charming atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00836.mp4",
            "description": "836-T2V: A static camera captures a lemur eating grass leaves in a tropical forest. The lemur moves gracefully as it selects and consumes the leaves, showcasing its adaptability and diet. The video style is wildlife documentary. Natural, dappled lighting with gentle shadows highlights the lemur's agile movements and the lush greenery, creating a vibrant and lively atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00837.mp4",
            "description": "837-T2V: A static camera captures a cute Pomeranian dog playing with a soccer ball in a backyard. The dog chases and kicks the ball energetically, showcasing its playful nature. The video style is pet documentary. Bright outdoor lighting with soft shadows emphasizes the dog's fluffy coat and the colorful soccer ball, creating a joyful and playful atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00838.mp4",
            "description": "838-T2V: A close-up camera captures ten fishes swimming in a net, their scales shimmering under soft lighting. The fish move gracefully within the confined space, showcasing their natural behavior even when trapped. The video style is underwater documentary. Soft lighting with gentle shadows highlights the fish's vibrant colors and fluid movements, creating a serene and captivating atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00839.mp4",
            "description": "839-T2V: A static camera captures a deer grazing peacefully in a lush field under the open sky. The deer moves slowly, nibbling on the grass and occasionally looking around with alertness. The video style is wildlife documentary. Bright natural lighting with soft shadows highlights the deer's graceful movements and the vibrant greenery, creating a tranquil and natural atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00840.mp4",
            "description": "840-T2V: A static camera captures a pig wallowing in mud in a farmyard. The pig splashes and rolls in the mud, showcasing its natural behavior for cooling and protection. The video style is farm documentary. Bright outdoor lighting with soft shadows highlights the pig's playful movements and the muddy environment, creating a lively and earthy atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00841.mp4",
            "description": "841-T2V: A close-up camera captures a lemur in its natural habitat, displaying its agile movements and expressive eyes as it navigates through the trees. The lemur moves swiftly, showcasing its dexterity and curiosity. The video style is wildlife documentary. Soft natural lighting with subtle shadows highlights the lemur's features and the lush environment, creating a lively and engaging atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00842.mp4",
            "description": "842-T2V: A static camera captures a person slicing a vegetable on a kitchen counter with a sharp knife. The person moves methodically, showcasing their culinary skills and precision. The video style is culinary documentary. Bright overhead lighting with soft shadows emphasizes the textures of the vegetable and the person's focused movements, creating a clean and professional atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00843.mp4",
            "description": "843-T2V: A static camera captures a jack-o'-lantern designed cookie placed on a festive table during Halloween. The cookie features intricate carvings and vibrant orange colors, showcasing creativity and seasonal themes. The video style is holiday documentary. Warm ambient lighting with soft shadows highlights the detailed design of the cookie, creating a spooky and festive atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00844.mp4",
            "description": "844-T2V: A static camera captures a person cooking mushrooms in a frying pan on a stove, stirring them with a spatula. The person shows concentration and care as they prepare the dish. The video style is culinary documentary. Bright kitchen lighting with soft shadows highlights the sizzling mushrooms and the person's focused movements, creating a warm and inviting atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00845.mp4",
            "description": "845-T2V: A static camera captures a person preparing a cocktail drink at a bar counter, mixing ingredients with a shaker. The person moves skillfully, showcasing bartending expertise. The video style is lifestyle documentary. Bright, ambient lighting with soft shadows emphasizes the vibrant colors of the cocktail and the person's smooth movements, creating a sophisticated and lively atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00846.mp4",
            "description": "846-T2V: A boy with short brown hair wearing a striped shirt picks up a water cup placed on the table and drinks water in a bright kitchen. The camera remains still, noting that the boy did not make contact with the cup at the beginning. Soft natural lighting illuminates the scene, creating a cozy and bright atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00847.mp4",
            "description": "847-T2V: A static camera captures a father and his children playing a Jenga game in a cozy family living room. The family consists of one father and three children, all dressed casually with varied hairstyles. They exhibit joy and concentration, with smiles and focused expressions as they take turns removing blocks from the tower. Positioned around a wooden Jenga table, the father sits at the center with children on his left and right. The interaction involves taking turns to remove and stack Jenga blocks, with movements including reaching, pulling, and placing blocks carefully. The video style is family documentary. Warm indoor lighting with soft shadows creates a cheerful and intimate atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00848.mp4",
            "description": "848-T2V: A static camera captures a man playing a video game in his modern gaming room. The man is in his mid-30s, wearing a graphic t-shirt and headphones, with short dark hair. He exhibits intense focus and excitement, his facial expressions reflecting his engagement with the game. Positioned in front of a large screen with gaming consoles and accessories arranged neatly around him. The interaction involves him manipulating game controllers, reacting to on-screen actions with swift hand movements and occasional gestures. The video style is gaming documentary. Bright LED lighting with dynamic shadows highlights the vibrant gaming setup, creating an energetic and immersive atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00849.mp4",
            "description": "849-T2V: A dynamic camera gracefully pans as a couple engages in a slow dance on a beach during sunset, with sun glare creating a romantic ambiance. The couple consists of a man in a white shirt and jeans and a woman in a flowing summer dress with loose hair. They exhibit love and tenderness, holding each other close with gentle smiles and soft gazes. Positioned on the sandy shore with the sun setting in the background, the man leads while the woman follows his movements. The interaction involves swaying to the music, spinning gently, and maintaining synchronized steps. The video style is romantic documentary. Warm golden-hour lighting with soft shadows enhances the romantic and serene atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00850.mp4",
            "description": "850-T2V: A static camera captures a mother and her two children engaged in a video call in their bright and modern living room. The mother is dressed in a casual blouse with her hair tied back, while the children wear colorful t-shirts and jeans. They exhibit happiness and attentiveness, smiling and reacting to the conversation on the screen. Positioned near a large window with natural light streaming in, the family sits around a sleek coffee table with a laptop open in front of them. The interaction involves speaking and gesturing animatedly, with occasional laughter and eye contact with the camera. The video style is family documentary. Bright natural lighting with soft shadows creates a warm and connected atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00851.mp4",
            "description": "851-T2V: A close-up camera captures a happy child playing the ukulele in a sunny backyard. The child is about 8 years old, with short curly hair and wearing a bright yellow t-shirt and denim shorts. They exhibit joy and enthusiasm, smiling broadly and strumming the ukulele with lively movements. Positioned on a wooden deck with green grass and blooming flowers in the background. The interaction involves the child plucking the strings and tapping the ukulele body rhythmically. The video style is musical documentary. Bright natural lighting with soft shadows highlights the child's cheerful demeanor and the vibrant setting, creating an uplifting and joyful atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00852.mp4",
            "description": "852-T2V: A static camera captures a girl applying sunblock to her brother in a sunny backyard. The girl is around 10 years old, wearing a pink tank top and shorts, with her hair tied back, while her brother is about 12, dressed in a blue t-shirt and cap. They exhibit care and focus, with the girl attentively spreading sunblock on her brother\u2019s arms and face. Positioned next to a picnic table under a large umbrella, with bright sunlight illuminating the scene. The interaction involves the girl carefully applying sunblock, using her hands to ensure even coverage, while the brother watches and smiles. The video style is family documentary. Bright outdoor lighting with soft shadows enhances the protective and nurturing atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00853.mp4",
            "description": "853-T2V: A static camera captures a teacher holding a marker while talking in a bright classroom. The teacher is in her early 30s, wearing a professional blouse and skirt, with neatly styled hair. She exhibits confidence and enthusiasm, gesturing with the marker as she explains the lesson. Positioned at the front of the classroom near a whiteboard filled with colorful diagrams and notes. The interaction involves the teacher pointing to the board, writing key points, and engaging with students through verbal and physical cues. The video style is educational documentary. Bright fluorescent lighting with minimal shadows highlights the classroom environment, creating a focused and informative atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00854.mp4",
            "description": "854-T2V: A static camera captures a male vendor selling fruits at a bustling outdoor market. The vendor is in his late 40s, wearing a white shirt and apron, with short graying hair. He exhibits friendliness and diligence, arranging fresh fruits in neat displays and interacting with customers with warm smiles. Positioned behind a vibrant fruit stall with a variety of colorful produce such as apples, oranges, and bananas. The interaction involves the vendor greeting customers, selecting and handing over fruits, and maintaining the display. The video style is market documentary. Bright natural lighting with soft shadows enhances the lively and inviting atmosphere of the market."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00855.mp4",
            "description": "855-T2V: A static camera captures a female patient talking to a psychiatrist in a cozy therapy office. The patient is in her late 20s, wearing a light sweater and jeans, with shoulder-length hair, while the psychiatrist is in his mid-40s, dressed in a button-down shirt and glasses. They exhibit empathy and attentiveness, with the patient expressing her thoughts and the psychiatrist listening actively, nodding and taking notes. Positioned across from each other at a small round table, with comfortable chairs and soothing decor in the background. The interaction involves the patient speaking about her feelings and the psychiatrist providing supportive responses. The video style is psychological documentary. Soft, warm lighting with gentle shadows creates a safe and calming atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00856.mp4",
            "description": "856-T2V: A steady static shot captures an interview setting. Two people are present: a male interviewer wearing a suit and a person dressed casually. The interviewer appears focused with a serious expression, positioned to the left of the person. The interviewer listens attentively while the person engages with expressive gestures. The interviewer nods occasionally as the person talks. The video adopts a documentary style with soft natural lighting and gentle shadows, creating a professional and attentive atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00857.mp4",
            "description": "857-T2V: A medium close-up shot with a slow pan captures an indoor floral arrangement. There is one man present, wearing casual attire and sporting short brown hair. He displays a calm and focused expression as he stands in front of a wooden box. The man is placing a flower into the box, with his hand reaching out gently. The video adopts a naturalistic style, utilizing bright indoor lighting and soft shadows, creating a serene and purposeful atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00858.mp4",
            "description": "858-T2V: A macro close-up shot with subtle zoom highlights the delicate dewdrops on a vibrant green leaf. No human subjects are present. The dewdrops glisten under the morning sunlight, reflecting intricate patterns. The scene conveys a sense of freshness and tranquility. The video style is minimalist, with soft natural lighting enhancing the detailed textures and creating a peaceful atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00860.mp4",
            "description": "860-T2V: A close-up tracking shot follows a woman in a mint garden. She is dressed in a casual outfit with her hair tied back. Her face shows concentration and satisfaction as she plucks fresh mint leaves. The woman is positioned in the center, surrounded by abundant mint plants. She interacts by gently pulling the leaves, moving rhythmically through the garden. The video style is vibrant with bright daylight illuminating the scene, fostering a fresh and lively atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00861.mp4",
            "description": "861-T2V: A panoramic shot with a slow tilt upward reveals a sprawling flower field adjacent to a majestic waterfall. The scene is devoid of human presence, focusing on the vibrant blooms and the cascading water. The flowers sway gently in the breeze, complementing the powerful movement of the waterfall. Spatially, the flower field lies in the foreground with the waterfall towering in the background. The video adopts a cinematic style with dynamic lighting that highlights the natural beauty, creating an awe-inspiring atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00862.mp4",
            "description": "862-T2V: A tracking shot following a truck moving through a forested area captures the vehicle carrying tree logs. The truck is a large, rugged model with visible wood stacks on its back. The driver, dressed in workwear with a cap, maintains focus on the road ahead. The truck is positioned to the left of the dense trees, navigating a narrow path. The movement is steady as the truck progresses forward. The video style is industrial with natural lighting casting defined shadows, creating a hardworking and robust atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00863.mp4",
            "description": "863-T2V: A time-lapse shot captures wind blowing through the autumn leaves of a solitary tree. The camera remains fixed as the leaves move gracefully in the breeze. The scene is set outdoors with vibrant fall colors dominating the foliage. The solitary tree stands in the center, with leaves swirling around it. There is no direct interaction, just the natural movement of the leaves. The video style is serene with soft natural lighting enhancing the autumn hues, creating a tranquil and reflective atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00864.mp4",
            "description": "864-T2V: A wide-angle shot with a slow zoom-in highlights dark clouds gathering above a fully visible full moon. The scene is set in an open night sky with no other celestial bodies in view. The clouds move steadily, partially obscuring the moon and casting deep shadows. The spatial relation places the moon at the center with clouds moving from the left. There is no interaction, only the natural movement of the clouds. The video style is dramatic with high contrast lighting, enhancing the mysterious and ominous atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00865.mp4",
            "description": "865-T2V: Aerial drone footage captures a vast river swamp nestled within a dense forest. The camera slowly pans across the expansive wetlands, highlighting the intricate waterways and lush greenery. The swamp is teeming with various plant species and occasional wildlife movements. Spatially, the river weaves through the forest, creating a complex network of water bodies. There is no direct interaction, focusing instead on the natural landscape. The video style is documentary with soft diffused lighting, fostering a calm and immersive atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00867.mp4",
            "description": "867-T2V: A smooth panning shot follows a boat gracefully sailing in the middle of the vast ocean. The camera maintains a mid-level perspective, capturing the endless water expanse and the boat's steady movement. The scene is set during daylight with clear skies. The boat is centrally positioned, navigating through calm waters with gentle waves. There is no interaction, focusing on the serene journey. The video style is tranquil with natural lighting enhancing the blue hues of the ocean, creating a peaceful and expansive atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00868.mp4",
            "description": "868-T2V: A freeze-frame shot showcases a frozen river under a clear winter sky. The camera holds steady, emphasizing the solid ice covering the water and the surrounding snowy banks. The scene is set in a cold, serene environment with no signs of movement. Spatially, the river stretches horizontally across the frame with snow-covered trees lining the banks. There is no interaction, highlighting the stillness of winter. The video style is minimalist with cool lighting enhancing the icy textures, creating a quiet and pristine atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00869.mp4",
            "description": "869-T2V: A serene wide-angle shot captures a beautiful coastal beach in spring, where gentle waves lap onto the soft sand. The camera slowly drifts along the shoreline, highlighting the rhythmic movement of the water and the pristine beachscape. The scene is in black and white, emphasizing textures and contrasts. Spatially, the waves approach from the bottom of the frame and recede towards the top. There are no human subjects, focusing solely on nature. The video style is tranquil with natural lighting casting soft reflections on the water, creating a calm and timeless atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00870.mp4",
            "description": "870-T2V: A dynamic drone shot navigates through The Bund in Shanghai, rendered in a cyberpunk style. The camera moves forward, capturing the vibrant neon lights and futuristic architecture that define the skyline. The bustling waterfront is filled with towering skyscrapers and illuminated signage. Spatially, The Bund stretches horizontally with buildings rising on both sides. There is no direct interaction, focusing on the lively urban environment. The video style is cyberpunk with vibrant, saturated lighting and sharp contrasts, creating a futuristic and energetic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00871.mp4",
            "description": "871-T2V: A slow-motion underwater shot captures a shark gracefully swimming in the ocean. The camera follows the shark's smooth movements as it glides through clear blue waters. The scene is in black and white, highlighting the textures and fluidity of the water. Spatially, the shark moves from the left to the right of the frame, surrounded by aquatic flora. There is no interaction, focusing solely on the shark's motion. The video style is dramatic with soft lighting enhancing the underwater ambiance, creating a sleek and mysterious atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00873.mp4",
            "description": "873-T2V: A playful tracking shot follows a cute happy Corgi as it plays in a park during sunset. The camera moves alongside the Corgi, capturing its energetic movements and joyful expressions. The scene is rendered in a surrealism style, blending vibrant colors with fantastical elements. Spatially, the Corgi moves from the foreground to the background, navigating through whimsical park features. The interaction involves the Corgi chasing a floating object. The video style is surrealistic with warm sunset lighting casting elongated shadows, creating a joyful and magical atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00874.mp4",
            "description": "874-T2V: A focused close-up shot captures Gwen Stacy reading a book in a surrealistic environment. The camera zooms in to highlight her concentrated expression and the intricate details of the book's pages. She is seated at a vintage desk with abstract elements surrounding her. Spatially, Gwen is centered with surreal objects floating around. There is no interaction, emphasizing her immersion in reading. The video style is surrealism with soft, diffused lighting enhancing the dreamlike quality, creating an introspective and imaginative atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00875.mp4",
            "description": "875-T2V: A leisurely boat shot sails along the Seine River with the Eiffel Tower in the background, depicted as a watercolor painting. The camera moves smoothly alongside the boat, capturing the iconic landmark and the reflective waters. The scene is stylized with watercolor textures blending colors softly. Spatially, the Eiffel Tower rises prominently in the background while the boat moves horizontally across the frame. There is no interaction, focusing on the scenic journey. The video style is artistic with gentle lighting enhancing the watercolor effect, creating a romantic and picturesque atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00876.mp4",
            "description": "876-T2V: A dramatic wide-angle shot captures a couple in formal evening wear caught in a heavy downpour with umbrellas, rendered in a surrealism style. The camera frames the couple from a distance, highlighting their elegant attire contrasted by the intense rain. Spatially, the couple stands in the center with umbrellas sheltering them from the storm. The interaction involves both holding umbrellas while moving towards shelter. The video style is surrealistic with high-contrast lighting and exaggerated rain effects, creating a dramatic and emotive atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00877.mp4",
            "description": "877-T2V: A dynamic space shot follows an astronaut flying in the vastness of space, depicted in a cyberpunk style. The camera tracks the astronaut's movement as they navigate through a field of neon-lit celestial objects. The astronaut is suited in a futuristic space suit with glowing accents. Spatially, the astronaut moves from the left to the right against a backdrop of vibrant space elements. There is no interaction, focusing on the solo journey. The video style is cyberpunk with vibrant neon lighting and high-tech visual effects, creating a futuristic and adventurous atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00878.mp4",
            "description": "878-T2V: A majestic wide-angle shot captures snow-covered rocky mountain peaks and deep canyons in black and white. The camera slowly pans across the rugged terrain, highlighting the snow-blanketed mountains and the intricate shadows within the canyons. Spatially, the canyons twist and bend through the high elevated peaks, creating a dramatic landscape. There are no human subjects, focusing solely on nature's grandeur. The video style is stark with high-contrast black and white lighting, enhancing the textures and creating a powerful and serene atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00879.mp4",
            "description": "879-T2V: A close-up shot captures a single individual tasting a beer in a bustling pub. The person is dressed in casual attire with short brown hair, showing a contemplative expression as they savor the drink. They are holding the glass in their right hand, while a lively crowd surrounds them. The interaction involves the person lifting the glass to their mouth. The person tilts the glass gently, tasting the beer slowly. The video has a cinematic style, with warm lighting casting soft shadows, creating a cozy and inviting atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00880.mp4",
            "description": "880-T2V: A medium shot captures a single individual sweeping the floor in a brightly lit, modern office space. The person is dressed in a clean uniform with neatly tied hair, exhibiting a focused demeanor as they methodically push the broom across the floor. They are positioned to the left of a large window, with office furniture and equipment in the background. The interaction involves the person swiping the broom back and forth. The sweeping motion is steady and rhythmic. The video has a documentary style, with natural lighting highlighting the clean environment and a calm, orderly atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00881.mp4",
            "description": "881-T2V: A wide shot showcases a lone musician playing the flute on a serene riverside during sunset. The individual is wearing a flowing white shirt and has long, wavy hair, portraying a serene and passionate expression as they perform. Positioned to the right of a gently flowing river, with lush greenery surrounding them, the musician interacts with the flute, moving their fingers gracefully. The flute's melodies seem to blend with the ambient sounds of nature. Both the musician and the flute movements are smooth and fluid. The video adopts an artistic style, with soft golden lighting casting gentle shadows, creating a tranquil and harmonious atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00882.mp4",
            "description": "882-T2V: An aerial shot follows multiple skydivers free-falling against a clear blue sky. The skydivers are equipped with colorful parachutes and wear standard jumpsuits, their hair and gear fluttering in the wind. They exhibit exhilarated and focused expressions as they navigate through the air. Positioned above a vast expanse of landscape below, the skydivers spread out horizontally, maintaining formation. The interaction involves coordinated movements as they steer and adjust their bodies. The skydivers' movements are dynamic and fluid, showcasing their agility and control. The video employs a high-energy style, with bright sunlight casting sharp shadows, creating an adventurous and thrilling atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00884.mp4",
            "description": "884-T2V: A dynamic shot follows a single individual flying a colorful kite on a windy beach. The person is dressed in a light summer outfit with messy hair, showing joy and excitement as they maneuver the kite against the gusty winds. Positioned on the left side of the frame with the expansive ocean in the background, the individual interacts by pulling the kite string to guide its flight. The kite dances and soars high, responding swiftly to the person's movements. Both the flyer and the kite exhibit lively and energetic motions. The video features a vibrant style, with natural sunlight creating sharp contrasts and a lively, free-spirited atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00885.mp4",
            "description": "885-T2V: A medium close-up captures a person meticulously sharpening knives in a well-lit kitchen. The individual is wearing an apron with short, neatly styled hair, displaying a focused and precise expression as they work. Positioned to the right of a stainless steel countertop, with various kitchen tools and ingredients in the background, the person interacts by moving the knife back and forth against the sharpening stone. The sharpening motions are deliberate and consistent, ensuring each blade is honed perfectly. The video adopts a documentary style, with balanced lighting highlighting the tools and creating a clean, professional atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00886.mp4",
            "description": "886-T2V: A steady shot captures an individual washing dishes in a cozy kitchen setting. The person is dressed in casual home attire with medium-length hair, showing a calm and content expression as they scrub plates and utensils. Positioned in front of a farmhouse sink with a window letting in soft natural light, the individual interacts by rinsing and stacking dishes methodically. The washing motions are smooth and repetitive, contributing to a soothing rhythm. The video features a warm, homely style, with soft lighting casting gentle shadows, fostering a relaxed and comfortable atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00887.mp4",
            "description": "887-T2V: A dynamic shot follows a person catching a baseball during a sunny afternoon in a spacious park. The individual is wearing athletic gear with short hair, displaying concentration and agility as they track the incoming ball. Positioned near the center of an open field with trees and spectators in the background, the person interacts by extending their glove to catch the ball. The catching motion is swift and precise, demonstrating skill and coordination. The video has a sporty style, with bright daylight creating clear shadows and an active, energetic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00888.mp4",
            "description": "888-T2V: A graceful shot captures a ballerina performing a dance routine in a dimly lit studio. The dancer is wearing a classic tutu with neatly pulled-back hair, showing elegance and concentration as they move through intricate ballet poses. Positioned in the center of a spacious, mirrored room, the ballerina interacts with the space by extending limbs and maintaining balance. The dance movements are fluid and precise, highlighting technique and artistry. The video employs an artistic style, with soft spotlighting creating dramatic shadows, evoking a serene and sophisticated atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00889.mp4",
            "description": "889-T2V: A front-facing shot captures a car positioned to the right of a motorcycle, both facing forward on an urban street. The car is a sleek, modern sedan with a metallic finish, while the motorcycle is a classic black model. Both vehicles are stationary, with the car slightly larger and more imposing. The interaction involves both vehicles occupying their respective lanes, maintaining clear spatial separation. The movements are minimal, with the camera holding steady to emphasize the front view. The video has an urban style, with ambient street lighting creating sharp reflections and a bustling city atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00890.mp4",
            "description": "890-T2V: A front-facing shot captures a traffic light positioned to the left of a fire hydrant on a quiet suburban sidewalk. The traffic light is illuminated, displaying a green signal, while the fire hydrant is bright red and slightly larger. Both objects are placed side by side, with the traffic light above the hydrant. The interaction involves the traffic light signaling movement while the hydrant remains a static safety feature. There are no movements, with both objects fixed in their positions. The video has a minimalist style, with even lighting ensuring clear visibility and a calm, orderly atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00891.mp4",
            "description": "891-T2V: A front-facing shot captures a bird perched to the left of a cat in a garden setting. The bird is a vibrant blue jay with detailed plumage, while the cat is a sleek grey feline with attentive eyes. The bird sits on a low branch, slightly elevated above the cat, which gazes curiously in the bird's direction. The interaction involves the bird remaining still as the cat watches intently. Both animals exhibit minimal movement, with the bird occasionally tilting its head and the cat maintaining a poised stance. The video has a natural style, with soft daylight filtering through foliage and a peaceful, harmonious atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00892.mp4",
            "description": "892-T2V: A front-facing shot captures a bear positioned to the right of a zebra in a grassy savannah. The bear is a large brown grizzly with thick fur, while the zebra is striped black and white. Both animals stand side by side, with the bear slightly behind the zebra. The interaction involves both animals coexisting in the same space without direct engagement. Their spatial relation emphasizes the diversity of wildlife in the savannah. Movements are minimal, with the bear occasionally shifting its weight and the zebra grazing calmly. The video adopts a wildlife documentary style, with natural sunlight casting defined shadows and a diverse, vibrant atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00893.mp4",
            "description": "893-T2V: A front-facing shot captures a fork positioned to the right of a knife on a clean dining table. The fork is a stainless steel utensil with intricate detailing, while the knife has a sleek, sharp blade. Both utensils are placed side by side, with the fork slightly elevated above the knife. The interaction involves the utensils arranged for use, indicating a prepared setting for a meal. Movements are absent, with both items stationary and neatly aligned. The video has a minimalist style, with soft overhead lighting highlighting the utensils and creating a refined, elegant atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00895.mp4",
            "description": "895-T2V: A front-facing shot captures a baseball bat positioned to the left of a baseball glove on a grassy field. The bat is made of polished wood with a worn grip, while the glove is leather with intricate stitching. Both items are placed side by side, with the bat leaning slightly against the glove. The interaction involves the equipment being ready for use in a game. Movements are minimal, with both items remaining in place. The video has a sporty style, with natural daylight casting clear shadows and a lively, active atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00896.mp4",
            "description": "896-T2V: A front-facing shot captures a chair positioned to the left of a couch in a modern living room. The chair is an ergonomic design with a sleek metal frame, while the couch is a plush, upholstered piece in a neutral color. Both furniture items are arranged side by side, with the chair slightly angled towards the couch. The interaction involves the seating arrangement providing a comfortable seating area. Movements are absent, with both pieces remaining stationary. The video adopts a contemporary style, with ambient lighting highlighting the furniture and creating a stylish, inviting atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00897.mp4",
            "description": "897-T2V: A front-facing shot captures a dining table positioned to the left of a chair in a spacious dining area. The table is made of dark wood with a smooth surface, while the chair is upholstered in a matching fabric. Both items are placed side by side, with the table slightly elevated. The interaction involves the furniture setting the stage for a meal. Movements are nonexistent, with both pieces remaining in place. The video features an elegant style, with soft overhead lighting casting subtle shadows and creating a sophisticated, welcoming atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00898.mp4",
            "description": "898-T2V: A front-facing shot captures a toaster positioned below a microwave on a sleek kitchen countertop. The toaster is stainless steel with a modern design, while the microwave is compact with a digital display. Both appliances are placed side by side, with the toaster slightly in front. The interaction involves the countertop setup ready for meal preparation. Movements are minimal, with both items remaining stationary. The video has a modern style, with bright kitchen lighting highlighting the appliances and creating a clean, efficient atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00899.mp4",
            "description": "899-T2V: A front-facing shot captures a banana positioned below an apple on a kitchen counter. The banana is ripe with a bright yellow peel, while the apple is glossy and red. Both fruits are arranged side by side, with the banana slightly lower than the apple. The interaction involves the fruits being prepared for a healthy meal or snack. Movements are absent, with both items remaining in place. The video adopts a fresh style, with natural light enhancing the vibrant colors and creating a bright, healthy atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00900.mp4",
            "description": "900-T2V: A front-facing shot captures a carrot positioned below a hot dog on a picnic table outdoors. The carrot is fresh and orange with green tops, while the hot dog is nestled in a bun with condiments. Both items are placed side by side, with the carrot slightly lower. The interaction involves the food items being ready for a meal. Movements are minimal, with both items remaining stationary. The video has a casual style, with outdoor lighting casting soft shadows and creating a relaxed, appetizing atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00901.mp4",
            "description": "901-T2V: A front-facing shot captures a snowboard positioned below a kite in an open field. The snowboard is brightly colored with a modern design, while the kite is large and patterned. Both items are arranged side by side, with the snowboard slightly lower. The interaction involves the sports equipment being ready for use. Movements are absent, with both items remaining in place. The video features an adventurous style, with natural daylight highlighting the equipment and creating an energetic, outdoor atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00902.mp4",
            "description": "902-T2V: A side shot captures a train crossing over a tall bridge against a clear sky. The train is a modern electric locomotive with sleek lines, moving steadily along the tracks. The bridge is an impressive steel structure with multiple arches supporting it. The interaction involves the train traversing the bridge, maintaining its course. The train's movement is smooth and consistent as it crosses. The video adopts an industrial style, with bright daylight casting defined shadows and creating a grand, infrastructural atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00903.mp4",
            "description": "903-T2V: A front-facing shot captures a truck slowing down to stop at a traffic light on a busy city street. The truck is a large commercial vehicle with reflective surfaces, while the traffic light displays a red signal. Both are positioned within the frame, with the truck approaching the light from the left. The interaction involves the truck responding to the traffic light by reducing speed and coming to a halt. The truck's movement is gradual as it decelerates. The video has an urban style, with dynamic lighting from surrounding buildings casting complex shadows and creating a bustling, active atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00904.mp4",
            "description": "904-T2V: A close-up shot captures a cat meticulously grooming itself with its tongue on a sunny windowsill. The cat is a sleek tabby with short fur, displaying focused and graceful movements as it licks its paw. Positioned to the left of a bright window, with sunlight streaming in and casting soft patterns, the cat interacts by maintaining its grooming routine. The grooming motions are deliberate and repetitive, ensuring cleanliness. The video adopts a natural style, with warm sunlight highlighting the cat's features and creating a serene, intimate atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00905.mp4",
            "description": "905-T2V: A dynamic shot follows a dog running happily through a vibrant park on a bright day. The dog is a lively golden retriever with a shiny coat, exhibiting joyful and energetic expressions as it bounds across the green grass. Positioned in the foreground with trees and playground equipment in the background, the dog interacts by chasing a frisbee thrown by its owner. The running motions are swift and playful, showcasing the dog's enthusiasm and agility. The video has a lively style, with bright daylight casting dynamic shadows and creating a cheerful, active atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00906.mp4",
            "description": "906-T2V: A dynamic tracking shot follows a sheep energetically running across a lush green pasture to join its herd. Multiple white, fluffy sheep are visible, with the foreground sheep moving towards the group in the background. The sheep exhibit lively and alert expressions as they navigate the open field. The movement is swift, emphasizing the sheep's eagerness to reunite. The video adopts a documentary style with natural daylight casting soft shadows, creating a peaceful and lively atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00907.mp4",
            "description": "907-T2V: A wide-angle shot captures a cow galloping swiftly across a sprawling meadow to reunite with its herd. Several brown and white cows graze in the background, while the foreground cow moves purposefully towards them. The cow displays determination with focused eyes and strong muscular movements. The camera follows the cow's graceful strides as it approaches the group. The video style is pastoral with warm sunlight illuminating the scene, casting gentle shadows and creating a harmonious and vibrant atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00908.mp4",
            "description": "908-T2V: A steady tracking shot follows an elephant majestically running through the savannah to rejoin its herd. Several elephants roam in the background, with the foreground elephant moving towards them. The elephant exhibits strength and grace with its powerful movements and calm demeanor. The camera captures the rhythmic gait of the elephant as it approaches the group. The video adopts a wildlife documentary style with golden hour lighting enhancing the natural textures, creating a serene and awe-inspiring atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00909.mp4",
            "description": "909-T2V: A close-up shot captures a bear sniffing the air intently for scents of food in a dense forest. The bear, with thick brown fur and keen eyes, stands amidst foliage, its nose twitching as it detects aromas. The spatial relation places the bear in the center with trees and underbrush surrounding it. The bear interacts with its environment by scenting the air, its movements subtle and deliberate. The video style is naturalistic with dappled sunlight filtering through the canopy, casting intricate shadows and creating a curious and attentive atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00911.mp4",
            "description": "911-T2V: A playful tracking shot follows a furry dog eagerly fetching a bright red rubber ball in a sunny park. The dog, with a shiny coat and wagging tail, moves energetically across the green grass towards the ball. The spatial relation places the dog in the foreground as it chases after the ball, with trees and park benches in the background. The interaction involves the dog retrieving the ball and bringing it back. The video style is vibrant with natural sunlight highlighting the dog's fur, casting lively shadows and creating a joyful and energetic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00912.mp4",
            "description": "912-T2V: A medium close-up shot captures a young boy tossing a leather baseball glove into the air on a sunny baseball field. The boy, wearing a casual outfit and a cap, exhibits concentration and excitement as he prepares to catch the glove. Spatially, the boy is centered with the glove ascending above him against the backdrop of the diamond and outfield. The interaction involves the boy throwing the glove upwards, anticipating its catch. The video style is candid with bright daylight illuminating the scene, casting clear shadows and creating an enthusiastic and sporty atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00913.mp4",
            "description": "913-T2V: A steady over-the-shoulder shot captures a boy in a blue shirt intensely playing chess with a bearded man in a cozy library. The boy, with short hair and focused eyes, sits across the chessboard from the elderly man, who sports a thick beard and glasses. The spatial relation places both players facing each other at the chessboard, surrounded by bookshelves. The interaction involves strategic moves and thoughtful expressions as they engage in the game. The video style is intimate with warm indoor lighting casting soft shadows, creating a contemplative and intellectual atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00914.mp4",
            "description": "914-T2V: A medium tracking shot follows a woman in a red dress painting alongside a man in a green shirt in a sunlit art studio. The woman, with flowing hair and vibrant attire, gracefully applies brushstrokes to a canvas, while the man assists by mixing colors. Spatially, both artists are positioned side by side with their easels facing each other. The interaction involves collaborative creativity as they work on their respective paintings. The video style is artistic with natural light streaming through large windows, casting dynamic shadows and creating an inspiring and harmonious atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00915.mp4",
            "description": "915-T2V: A close-up shot captures a woman with glasses reading a colorful storybook to a little girl in a cozy living room. The woman, wearing a casual outfit and gentle expression, turns the pages as the girl listens attentively with wide eyes. Spatially, the woman is seated on a comfortable chair with the girl sitting beside her on the floor. The interaction involves the woman narrating the story while the girl engages with the illustrations. The video style is warm with soft indoor lighting illuminating their faces, casting gentle shadows and creating a nurturing and intimate atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00916.mp4",
            "description": "916-T2V: A dynamic tracking shot follows a boy with a cap energetically playing soccer with a girl wearing a red shirt on a sunny playground. The boy, sporting a baseball cap and athletic gear, dribbles the ball towards the goal while the girl, dressed in vibrant red, chases to intercept. Spatially, both players move across the green field with playground equipment in the background. The interaction involves competitive yet playful movements as they strive to score. The video style is lively with bright daylight enhancing the colors, casting sharp shadows and creating an active and spirited atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00918.mp4",
            "description": "918-T2V: A steady medium shot captures a chef in a white apron meticulously slicing green cucumbers in a bright, professional kitchen. The chef, with short hair and focused expression, uses a sharp knife to create uniform slices on a cutting board. Spatially, the chef is centered with kitchen equipment and ingredients neatly arranged around. The interaction involves precise culinary techniques as the chef prepares the vegetables. The video style is clean and crisp with bright artificial lighting illuminating the workspace, casting clear shadows and creating a professional and efficient atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00919.mp4",
            "description": "919-T2V: A time-lapse shot captures a flower bud gradually blooming into a full, vibrant flower in a serene garden. The camera remains fixed on the bud as it opens, revealing colorful petals and expanding gradually over several seconds. Spatially, the flower is centered with surrounding greenery softly blurred. There is no direct interaction, focusing solely on the natural process of blooming. The video style is minimalist with natural lighting enhancing the flower's colors, creating a peaceful and awe-inspiring atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00920.mp4",
            "description": "920-T2V: A time-lapse shot captures a green banana turning yellow as it ripens on a kitchen counter. The camera focuses on the banana as its color transitions, showing gradual changes in hue and texture over time. Spatially, the banana is placed prominently with kitchen utensils and a fruit bowl in the background. There is no interaction, highlighting the natural ripening process. The video style is straightforward with soft indoor lighting emphasizing the color changes, creating a calm and natural atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00921.mp4",
            "description": "921-T2V: A smooth panning shot captures a frozen lake slowly thawing as temperatures rise during spring. The ice begins to melt, revealing patches of water and emerging plants around the edges. Spatially, the lake spans the width of the frame with trees and mountains in the background. There is no interaction, focusing on the gradual transformation of the frozen landscape. The video style is serene with natural lighting highlighting the melting ice, casting reflective shadows and creating a transitional and hopeful atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00922.mp4",
            "description": "922-T2V: A time-lapse shot captures a bright green leaf wilting to brown as a nearby flower blooms from bud to full red in a vibrant garden. The camera focuses on the contrasting transformations, highlighting the leaf's color change and the flower's growth simultaneously. Spatially, both the leaf and flower are in close proximity, showcasing their individual changes. There is no interaction, emphasizing the parallel natural processes. The video style is vibrant with natural lighting enhancing the color contrasts, creating a dynamic and visually engaging atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00923.mp4",
            "description": "923-T2V: A smooth transition shot captures a vibrant green leaf gradually transitioning to a soft shade of pink on a tree branch. The camera remains fixed as the leaf's color shifts, showcasing the subtle change over time. Spatially, the leaf is centered with other foliage softly blurred in the background. There is no interaction, focusing solely on the color transition. The video style is elegant with natural lighting highlighting the delicate color shift, creating a graceful and soothing atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00924.mp4",
            "description": "924-T2V: A gradual transformation shot captures a red brick wall slowly morphing into a spectrum of rainbow colors in an urban setting. The camera pans horizontally along the wall, showcasing the seamless color transition from red to vibrant rainbow hues. Spatially, the wall spans the frame with buildings and streets in the background. There is no interaction, focusing on the artistic transformation of the wall's appearance. The video style is artistic with high-saturation lighting enhancing the vivid colors, creating a striking and imaginative atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00925.mp4",
            "description": "925-T2V: A steady shot captures a toddler walking on the left side of a playful dog in a vibrant park. The toddler, dressed in colorful clothing and a hat, strolls alongside the energetic dog, who bounds happily beside them. Spatially, the toddler is positioned on the left with the dog on the right, both moving forward through the green landscape. The interaction involves the harmonious movement of child and pet enjoying the outdoors. The video style is cheerful with bright natural lighting illuminating the scene, casting soft shadows and creating a joyful and heartwarming atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00926.mp4",
            "description": "926-T2V: A steady medium shot captures a gorilla sitting on the left side of a vending machine in a dense forest. The gorilla, with thick black fur and intelligent eyes, observes the surroundings as it rests beside the machine. Spatially, the gorilla is positioned on the left with the vending machine directly to its right, amidst lush greenery. There is no interaction, focusing on the juxtaposition of the animal and the human-made object. The video style is surrealistic with filtered natural lighting casting deep shadows, creating an intriguing and contemplative atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00927.mp4",
            "description": "927-T2V: A dynamic tracking shot captures a dog running on the right of a bicycle in an urban park. The dog has a sleek brown coat and alert eyes, displaying an energetic expression. The bicycle is red with a metallic frame, moving smoothly alongside the dog. The dog sprints energetically while the bicycle pedals turn seamlessly. The video adopts an action documentary style, with bright daylight and natural shadows, creating a lively and energetic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00928.mp4",
            "description": "928-T2V: A wide-angle shot captures a sheep grazing on the right of a surfboard on a sandy beach. The sheep has a fluffy white coat and calm demeanor, while the surfboard is colorful with vibrant patterns. The sheep grazes peacefully as waves crash nearby. The sheep moves its head slowly while the surfboard remains stationary on the sand. The video adopts a nature documentary style, with soft natural lighting and gentle shadows, creating a serene and tranquil atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00929.mp4",
            "description": "929-T2V: A static shot captures a kite stuck in a tree above a boy in a park. The kite is bright with multiple colors and a long tail, while the boy wears a casual outfit with short hair, showing a frustrated expression. The kite is tangled in the branches as the boy looks up trying to retrieve it. The boy stretches his arm upwards while the kite sways gently in the breeze. The video adopts a documentary style, with natural daylight and soft shadows, creating a playful yet challenging atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00930.mp4",
            "description": "930-T2V: A close-up shot focuses on a frog perched on a refrigerator in a busy kitchen. The frog has green skin with speckles and attentive eyes, while the refrigerator is stainless steel with a sleek finish. The frog sits calmly as kitchen activity continues around it. The frog remains still, occasionally blinking as people move nearby. The video adopts a nature documentary style, with bright indoor lighting and dynamic shadows, creating a bustling yet serene atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00931.mp4",
            "description": "931-T2V: A macro lens shot captures a lizard basking on a solar panel on a hot day. The lizard has a scaly texture with earthy tones, and the solar panel is sleek with reflective surfaces. The lizard lounges comfortably, absorbing the heat from the sun. The lizard moves slightly to adjust its position as the solar panel remains fixed. The video adopts a nature documentary style, with bright sunlight and sharp shadows, creating a warm and focused atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00932.mp4",
            "description": "932-T2V: A panning shot follows a flower floating left to right by the flowing stream. The flower is vibrant with colorful petals and green stem, gently carried by the clear water. The flower drifts smoothly along the stream's current, reflecting light as it moves. The flower sways with the water flow while leaves float nearby. The video adopts a nature documentary style, with natural sunlight and soft shadows, creating a peaceful and picturesque atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00933.mp4",
            "description": "933-T2V: A tracking shot captures a football rolling from the left to the right on the grass. The football is classic brown leather with white laces, moving steadily across the green turf. The football glides smoothly as it gains momentum and slows down naturally. The football rolls in a straight path, occasionally bouncing over small grass tufts. The video adopts a sports documentary style, with natural lighting and defined shadows, creating an active and dynamic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00935.mp4",
            "description": "935-T2V: A macro shot captures a snowflake falling softly from the sky against a clear background. The snowflake is intricate with symmetrical patterns and delicate edges, drifting gently downward. The snowflake twinkles under the soft light as it descends, landing softly on the ground. The snowflake moves slowly, creating a serene and magical visual. The video adopts a nature documentary style, with soft lighting and subtle shadows, creating a calm and enchanting atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00936.mp4",
            "description": "936-T2V: A steady tracking shot captures a child climbing up the slide in a playground. The child wears a colorful outfit with a playful hat, showing determination with focused eyes. The child ascends the steps carefully, reaching the top of the slide. The child moves steadily upward, then prepares to slide down. The video adopts a family documentary style, with bright daylight and soft shadows, creating a joyful and energetic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00937.mp4",
            "description": "937-T2V: A vertical tracking shot follows a butterfly flying upwards towards a blue and bright sky in a garden. The butterfly has delicate wings with vibrant colors, fluttering gracefully as it ascends. The butterfly moves effortlessly, gaining altitude against the clear blue backdrop. The butterfly dances lightly in the air, navigating through flowers and sunlight. The video adopts a nature documentary style, with bright sunlight and soft shadows, creating a light and airy atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00938.mp4",
            "description": "938-T2V: A split-screen shot captures a fish swimming gracefully in a tank as a horse gallops outside in a pasture. The fish has shimmering scales with iridescent colors, moving smoothly through the water, while the horse has a strong build with a glossy coat, running swiftly across the green field. The fish glides effortlessly, and the horse moves powerfully with each stride. The video adopts a dual documentary style, with clear lighting and balanced shadows, creating a harmonious and dynamic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00939.mp4",
            "description": "939-T2V: A dual-action shot captures a chicken pecking at the ground while a bee flies overhead in a farmyard. The chicken has feathers in earthy tones with a sharp beak, and the bee is small with transparent wings and yellow stripes. The chicken pecks diligently at the soil, while the bee hovers above, occasionally landing on flowers. The chicken moves its head and scratches the ground, and the bee buzzes around playfully. The video adopts a farm documentary style, with natural sunlight and soft shadows, creating a lively and natural atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00940.mp4",
            "description": "940-T2V: A dynamic shot captures a frog jumping from lily to lily while a swan swims nearby in a pond. The frog has green skin with dark spots and agile limbs, and the swan has pristine white feathers with a graceful neck. The frog leaps energetically between lily pads, while the swan glides smoothly across the water. The frog moves swiftly, and the swan maintains a steady pace. The video adopts a nature documentary style, with bright sunlight and soft shadows, creating a peaceful and vibrant atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00941.mp4",
            "description": "941-T2V: A steady tracking shot captures a horse walking in the field while a rabbit nibbles on grass nearby. The horse has a muscular build with a shiny coat, and the rabbit is small with soft fur and alert ears. The horse moves gracefully through the tall grass, while the rabbit nibbles contentedly. The horse strides steadily, and the rabbit hops occasionally. The video adopts a wildlife documentary style, with natural sunlight and soft shadows, creating a calm and pastoral atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00942.mp4",
            "description": "942-T2V: A multi-angle shot captures a bee landing on a flower and a butterfly dancing around the petals in a garden. The bee has black and yellow stripes with delicate wings, and the butterfly has colorful wings with intricate patterns. The bee lands gently on a vibrant flower, while the butterfly flutters gracefully around the petals. The bee collects nectar, and the butterfly moves fluidly. The video adopts a nature documentary style, with bright sunlight and soft shadows, creating a lively and colorful atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00943.mp4",
            "description": "943-T2V: A split-screen shot captures a duck swimming in the pond while a frog hops onto a lily pad nearby. The duck has glossy feathers with green accents and smooth movements, and the frog has green skin with agile legs. The duck glides gracefully across the water, while the frog makes quick hops onto the lily pad. The duck paddles steadily, and the frog jumps swiftly. The video adopts a nature documentary style, with natural sunlight and soft shadows, creating a tranquil and lively atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00944.mp4",
            "description": "944-T2V: A split-screen shot captures a horse listening to music with headphones while a cow eats pizza in a barn. The horse has a shiny coat with attentive ears, wearing colorful headphones, and the cow has a robust build with spotted fur, holding a slice of pizza with its mouth. The horse nods its head to the rhythm, while the cow chews contentedly. The horse moves rhythmically, and the cow takes bites regularly. The video adopts a whimsical documentary style, with warm indoor lighting and soft shadows, creating a playful and humorous atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00945.mp4",
            "description": "945-T2V: A dual-action shot captures a wolf howling into a microphone while a fox plays the drums in a studio. The wolf has thick fur with piercing eyes, and the fox has reddish-orange fur with alert ears. The wolf lifts its head to howl into the microphone, while the fox beats rhythmically on the drum set. The wolf howls loudly, and the fox maintains a steady tempo. The video adopts a music documentary style, with studio lighting and clear shadows, creating a creative and dynamic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00946.mp4",
            "description": "946-T2V: A underwater tracking shot captures a dolphin painting underwater on canvas while a shark swims nearby in the ocean. The dolphin has smooth gray skin with playful eyes, and the shark has a sleek streamlined body with sharp fins. The dolphin uses its flippers to create colorful strokes on the submerged canvas, while the shark glides gracefully through the water. The dolphin moves fluidly, and the shark swims effortlessly alongside. The video adopts an underwater documentary style, with natural light filtering through water and dynamic shadows, creating a creative and lively atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00947.mp4",
            "description": "947-T2V: A dynamic shot captures a cat DJ at a party while a dog dances with glow sticks in a nightclub. The cat has sleek fur with stylish headphones and a turntable setup, and the dog has a fluffy coat with colorful glow sticks in its paws. The cat spins records energetically, while the dog moves rhythmically to the music, waving the glow sticks. The cat gestures with paws, and the dog jumps and twirls. The video adopts a party documentary style, with vibrant lighting and dynamic shadows, creating a festive and lively atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00948.mp4",
            "description": "948-T2V: A whimsical shot captures a squirrel cooking in a kitchen while a bat tastes the dishes nearby. The squirrel has a bushy tail with nimble paws, wearing a tiny chef hat, and the bat has dark wings with alert eyes, holding a spoon. The squirrel stirs a pot on the stove, while the bat samples the food, nodding approvingly. The squirrel moves quickly, and the bat sways gently. The video adopts a whimsical documentary style, with warm kitchen lighting and soft shadows, creating a playful and creative atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00949.mp4",
            "description": "949-T2V: A dynamic shot captures a parrot riding a skateboard while a duck takes a photo in a park. The parrot has colorful feathers with a playful expression, and the duck has glossy feathers with a curious gaze. The parrot maneuvers the skateboard skillfully through the path, while the duck holds a camera, snapping pictures. The parrot moves swiftly, and the duck remains steady. The video adopts a dynamic documentary style, with bright daylight and natural shadows, creating an energetic and playful atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00950.mp4",
            "description": "950-T2V: A dynamic tracking shot follows a man energetically jogging through a lush green park, while a dog eagerly fetches a stick nearby. The man, dressed in athletic wear with short hair, displays determination and focus on his face as he runs along the paved path. The dog, with a shiny coat and alert eyes, chases after the thrown stick, moving swiftly across the grassy area. The spatial relation places the man in the foreground running towards the park's path, and the dog chasing the stick in the midground. The interaction involves the man throwing the stick and the dog fetching it. Both subjects exhibit swift and purposeful movements. The video adopts a vibrant style with natural daylight illuminating the scene, casting dynamic shadows and creating an active and lively atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00951.mp4",
            "description": "951-T2V: A medium close-up shot captures a person painting on a canvas in an open studio, while an elephant waves its trunk nearby. The painter, dressed in casual attire with long hair tied back, shows concentration and creativity on their face as they apply brushstrokes to a vibrant artwork. The elephant, with large ears and grey skin, gracefully moves its trunk in a waving motion, displaying curiosity and gentleness. The spatial relation places the person centered at an easel, and the elephant positioned to the side, interacting in the shared space. The interaction involves the person painting and the elephant waving its trunk. Both subjects exhibit calm and deliberate movements. The video adopts an artistic style with soft indoor lighting casting subtle shadows, creating a harmonious and imaginative atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00953.mp4",
            "description": "953-T2V: A close-up tracking shot follows a woman carefully watering her indoor plants, while a snail slowly crawls along the edge of the pot. The woman, dressed in a casual outfit with her hair tied back, displays attentiveness and care as she pours water from a watering can. The snail, with its shiny shell and slimy trail, moves deliberately across the pot's surface, showing patience and persistence. The spatial relation places the woman on the left, watering plants on a table, and the snail on the right crawling along the pot. The interaction involves the woman watering the plants and the snail navigating the pot. Both subjects exhibit steady and purposeful movements. The video adopts a naturalistic style with soft indoor lighting casting gentle shadows, creating a calm and serene atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00954.mp4",
            "description": "954-T2V: A medium shot captures a child happily picking apples from an orchard, while a squirrel busily gathers nuts nearby. The child, wearing a colorful outfit and a hat, shows joy and concentration as they reach up to pluck ripe apples from the trees. The squirrel, with its bushy tail and agile movements, scampers across the ground collecting nuts into a small pile, displaying industriousness and curiosity. The spatial relation places the child in the foreground reaching for apples on the trees, and the squirrel in the midground gathering nuts on the ground. The interaction involves the child harvesting apples and the squirrel collecting nuts. Both subjects exhibit joyful and energetic movements. The video adopts a pastoral style with bright daylight illuminating the orchard, casting natural shadows and creating a lively and wholesome atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00955.mp4",
            "description": "955-T2V: A serene wide-angle shot captures a duck gracefully swimming in a tranquil pond, while a model ship floats gently nearby. The duck, with its glossy feathers and calm demeanor, glides smoothly across the water's surface, displaying elegance and peace. The model ship, intricately detailed and colorful, moves slowly with the water currents, showing stillness and charm. The spatial relation places the duck in the foreground swimming towards the center of the pond, and the model ship floating near the edge in the midground. The interaction involves the duck navigating the pond and the model ship drifting alongside. Both subjects exhibit smooth and gentle movements. The video adopts a tranquil style with soft natural lighting reflecting on the water, casting subtle shadows and creating a peaceful and picturesque atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00956.mp4",
            "description": "956-T2V: A dramatic wide-angle shot captures two cars colliding at a busy intersection. The scene is filled with motion as the cars crash into each other, resulting in sparks and debris flying into the air. Both cars, one red and one blue, display visible damage with shattered windows and dented bodies, showing the force of impact and chaos. The spatial relation places the two cars at the center of the frame at the point of collision, with surrounding buildings and traffic lights in the background. The interaction involves the two cars colliding head-on at the intersection. Both cars exhibit sudden and violent movements upon impact. The video adopts an action style with high-intensity lighting highlighting the collision, casting sharp shadows and creating a tense and chaotic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00958.mp4",
            "description": "958-T2V: A close-up macro shot captures the drum skin vibrating as it is struck by a drumstick during a musical performance. The drum, with its taut surface and intricate patterns, reacts dynamically to each hit, displaying ripples and oscillations. The drumstick, held by a musician with focused expression, connects with the drum skin with precision and force. The spatial relation places the drum in the center with the drumstick in motion above it. The interaction involves the drumstick striking the drum skin, causing vibrations and sound production. Both the drumstick and drum exhibit rapid and rhythmic movements. The video adopts a focused style with directional lighting highlighting the drum's texture, casting fine shadows and creating an energetic and rhythmic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00959.mp4",
            "description": "959-T2V: A steady medium shot captures a car braking abruptly to stop at a red traffic light at a busy urban intersection. The car, painted in sleek silver with visible brake lights, comes to a sudden halt, tires screeching against the asphalt, emitting sparks. The driver, wearing a casual outfit and focused expression, reacts quickly to the traffic signal change. The spatial relation places the car approaching the intersection from the left side of the frame, stopping centrally at the red light. The interaction involves the car decelerating rapidly in response to the traffic light. The subject exhibits sudden and forceful movement as the car halts. The video adopts a dramatic style with high contrast lighting highlighting the car and the red light, casting sharp shadows and creating a tense and immediate atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00960.mp4",
            "description": "960-T2V: A playful tracking shot follows a dog eagerly fetching a bright red rubber ball in a sunny park. The dog, with a shiny coat and wagging tail, moves energetically across the green grass towards the ball. The spatial relation places the dog in the foreground as it chases after the ball, with trees and park benches in the background. The interaction involves the dog retrieving the ball and bringing it back. The video adopts a vibrant style with natural sunlight highlighting the dog's fur, casting lively shadows and creating a joyful and energetic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00961.mp4",
            "description": "961-T2V: A close-up shot captures a dog's nose gently touching a reflective glass door, creating a mirrored image of its face. The dog, with a curious expression and moist nose, approaches the glass with cautious intent. The spatial relation places the dog centered with the reflective door directly in front, capturing both the dog and its reflection. The interaction involves the dog exploring its reflection by touching the glass. The subject exhibits tentative and inquisitive movements. The video adopts a subtle style with soft indoor lighting enhancing the reflection, casting gentle shadows and creating a thoughtful and introspective atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00962.mp4",
            "description": "962-T2V: A steady medium shot captures a chef in a white apron meticulously slicing green cucumbers in a bright, professional kitchen. The chef, with short hair and focused expression, uses a sharp knife to create uniform slices on a cutting board. Spatially, the chef is centered with kitchen equipment and ingredients neatly arranged around. The interaction involves precise culinary techniques as the chef prepares the vegetables. Both the knife and cucumber exhibit deliberate and steady movements. The video adopts a clean and crisp style with bright artificial lighting illuminating the workspace, casting clear shadows and creating a professional and efficient atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00963.mp4",
            "description": "963-T2V: A medium close-up shot captures a magician elegantly pulling a rabbit out of a top hat on a dimly lit stage. The magician, dressed in a classic tuxedo with a bow tie, displays a confident and enchanting expression as the rabbit emerges gracefully from the hat. The spatial relation places the magician centered with the hat positioned prominently in front, and the rabbit appearing in the midground. The interaction involves the magician performing the magic trick of pulling the rabbit out of the hat. Both the magician and rabbit exhibit smooth and graceful movements. The video adopts a magical style with spotlight lighting highlighting the performance, casting dramatic shadows and creating a mysterious and captivating atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00965.mp4",
            "description": "965-T2V: A graceful wide-angle shot captures a couple dancing elegantly under the soft glow of moonlight in a serene outdoor setting. The couple, dressed in formal evening wear, moves in perfect harmony to a romantic melody, displaying synchronization and fluidity in their dance. Spatially, the couple is centered with the moon illuminating their movements and the surrounding landscape subtly lit. The interaction involves the couple performing synchronized dance steps, creating a seamless flow of motion. Both subjects exhibit smooth and coordinated movements. The video adopts a romantic style with moonlight casting gentle shadows, creating an enchanting and intimate atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00966.mp4",
            "description": "966-T2V: A steady wide-angle shot captures four birds collaboratively building a nest in a large, sturdy tree. The birds, with vibrant plumage and agile movements, work together to gather twigs and weave them into the nest, displaying teamwork and diligence. Spatially, the birds are positioned on a prominent branch of the tree, with the nest taking shape in the center. The interaction involves the birds collecting materials and constructing the nest. All subjects exhibit coordinated and purposeful movements. The video adopts a naturalistic style with soft daylight illuminating the tree, casting intricate shadows and creating a harmonious and industrious atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00967.mp4",
            "description": "967-T2V: A dynamic wide-angle shot captures two horses racing energetically across a lush grassy field as the sun sets on the horizon. The horses, with flowing manes and powerful strides, compete fiercely, displaying speed and grace. Spatially, the horses are positioned side by side moving towards the sunset, with the golden sky and open field stretching behind them. The interaction involves the horses racing head-to-head, vying for victory. Both subjects exhibit strong and swift movements characteristic of a competitive race. The video adopts an action style with warm sunset lighting casting long shadows, creating a thrilling and majestic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00968.mp4",
            "description": "968-T2V: A vibrant medium shot captures five squirrels busily gathering nuts amidst a bustling forest environment. The squirrels, with bushy tails and agile movements, scurry across the forest floor, collecting and storing nuts in scattered piles, displaying industriousness and curiosity. Spatially, the squirrels are distributed across the frame, interacting with various trees and foliage. The interaction involves the squirrels collecting, transporting, and storing nuts efficiently. All subjects exhibit quick and coordinated movements. The video adopts a lively style with dappled sunlight filtering through the canopy, casting playful shadows and creating a bustling and energetic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00969.mp4",
            "description": "969-T2V: A dynamic tracking shot captures two monkeys swinging energetically from vines high in a dense jungle canopy. The monkeys, with agile limbs and playful expressions, leap from branch to branch, displaying vivacity and coordination. The parrots, with vivid plumage, navigate through the air with ease, showing grace and freedom. Spatially, the monkeys are positioned mid-swing between thick green vines and towering trees. The interaction involves the monkeys swinging from one vine to another, navigating the jungle with ease. Both subjects exhibit swift and graceful movements. The video adopts a lively style with filtered sunlight penetrating the dense canopy, casting dappled shadows and creating an adventurous and vibrant atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00970.mp4",
            "description": "970-T2V: A serene close-up shot captures three owls perched quietly on a branch under the glow of a full moon. The owls, with wide eyes and textured feathers, observe their surroundings with calm and attentive expressions. Spatially, the owls are aligned along the branch, silhouetted against the bright moonlit sky. The interaction involves the owls watching and listening intently, maintaining their poised positions. All subjects exhibit still and observant movements. The video adopts a tranquil style with moonlight casting soft, silvery shadows, creating a mysterious and peaceful atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00971.mp4",
            "description": "971-T2V: A lively wide-angle shot captures four children energetically playing tag in a sunny park. The children, dressed in colorful casual wear, run and chase each other around playground equipment and open grassy areas, displaying joy and enthusiasm. Spatially, the children are spread across the frame, interacting with swings, slides, and trees. The interaction involves the children tagging and dodging each other in a playful game of chase. All subjects exhibit swift and agile movements typical of active play. The video adopts a cheerful style with bright natural lighting illuminating the park, casting playful shadows and creating a fun and vibrant atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00972.mp4",
            "description": "972-T2V: A majestic medium shot captures two elephants playfully spraying water at each other in a serene river. The elephants, with large ears and expressive eyes, use their trunks to blast water, creating splashes and waves in the calm river. Spatially, the elephants are positioned side by side in the center of the frame, interacting within the flowing river. The interaction involves the elephants spraying water at one another in a playful manner. Both subjects exhibit powerful and playful movements. The video adopts a majestic style with natural sunlight reflecting on the water, casting dynamic shadows and creating a joyful and lively atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00974.mp4",
            "description": "974-T2V: A vibrant wide-angle shot captures three monkeys energetically jumping through the forest canopy, while two parrots gracefully fly among the trees. The monkeys, with agile limbs and playful expressions, leap from branch to branch, displaying vivacity and coordination. The parrots, with vivid plumage, navigate through the air with ease, showing grace and freedom. Spatially, the monkeys are active in the foreground, jumping between branches, while the parrots soar in the midground among the dense foliage. The interaction involves the monkeys engaging in playful jumps and the parrots flying overhead. All subjects exhibit lively and coordinated movements. The video adopts a lively style with dappled sunlight filtering through the trees, casting dynamic shadows and creating an energetic and vibrant atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00975.mp4",
            "description": "975-T2V: A creative medium close-up shot captures six children engaging in animated conversation around a table adorned with three crystal balls. The children, dressed in casual attire with varied hairstyles, display curiosity and excitement as they discuss and interact with the crystal balls. Spatially, the children are seated around the table with the crystal balls prominently placed at the center, surrounded by colorful decorations. The interaction involves the children talking and gesturing towards the crystal balls, sharing ideas and stories. All subjects exhibit expressive and engaged movements. The video adopts an imaginative style with soft indoor lighting highlighting the crystal balls, casting subtle reflections and creating a magical and intriguing atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00976.mp4",
            "description": "976-T2V: A dynamic wide-angle shot captures six children joyfully flying four colorful kites on a breezy hilltop. The children, dressed in light summer clothing, run energetically as they guide their kites into the sky, displaying excitement and coordination. Spatially, the children are spread across the hill with the kites soaring high above, against a backdrop of open sky and rolling hills. The interaction involves the children running and maneuvering their kites to catch the wind. All subjects exhibit swift and coordinated movements. The video adopts a vibrant style with bright daylight enhancing the kite colors, casting lively shadows and creating a joyful and uplifting atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00977.mp4",
            "description": "977-T2V: A wide-angle shot captures six children energetically flying four colorful kites on a windy hill. The children, dressed in vibrant summer clothes with varied hairstyles, display joyful expressions and wide smiles as they navigate their kites against the strong breeze. Positioned spread out across the hill, the kites soar high above, fluttering dynamically in the wind. The children interact by helping each other adjust the kite strings, running and laughing as their kites dance in the sky. The movements are lively and spontaneous, with kites moving unpredictably in the gusty environment. The video adopts a documentary style, illuminated by natural sunlight with soft shadows, creating a playful and lively atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00978.mp4",
            "description": "978-T2V: A steady pan showcases five owls perched in three nests within a large, old tree. The owls, with mottled feathers and keen eyes, exhibit calm and observant expressions as they survey their surroundings. The nests are intricately woven and situated at varying heights, creating a layered spatial arrangement. The owls interact by occasionally turning their heads and preening their feathers, maintaining their positions within the nests. Their movements are subtle and deliberate, emphasizing their graceful presence. The video style is nature documentary, with dappled lighting filtering through the dense foliage and soft shadows enhancing the serene and majestic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00979.mp4",
            "description": "979-T2V: A dynamic tracking shot follows two elephants playfully spraying water at each other in a vibrant river. The elephants, with wrinkled gray skin and long trunks, display joyful and mischievous expressions as they engage in the water fight. Positioned side by side in the river, their trunks reach out to splash water back and forth. The interaction is playful, with each elephant taking turns spraying water towards the other. Their movements are fluid and energetic, emphasizing their playful nature and the lively environment. The video adopts a wildlife documentary style, illuminated by bright natural light with reflective water surfaces and dynamic shadows, creating a joyful and spirited atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00980.mp4",
            "description": "980-T2V: A close-up shot captures seven bees buzzing around a blooming flower bed, their wings fluttering rapidly as they collect nectar. The bees, with striped bodies and delicate wings, exhibit focused and industrious expressions as they move from flower to flower. The spatial arrangement places the bees amidst a variety of colorful blossoms, creating a vibrant and dynamic environment. The bees interact by landing on flowers and transferring pollen, engaging in their natural foraging behavior. Their movements are swift and purposeful, highlighting their essential role in pollination. The video style is macro nature documentary, with bright, natural lighting and fine shadows, creating a lively and bustling atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00981.mp4",
            "description": "981-T2V: A steady dolly shot follows eight ants marching in a line towards a crumb on the ground in a lush garden. The ants, with segmented bodies and tiny legs, display determined and focused expressions as they navigate the terrain. The spatial arrangement shows the ants in a straight line, moving purposefully across the garden floor towards the small crumb. The ants interact by coordinating their movements and passing the crumb along the line, showcasing their teamwork. Their movements are steady and rhythmic, emphasizing their organized behavior. The video adopts a macro documentary style, illuminated by soft natural light with subtle shadows, creating a structured and industrious atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00982.mp4",
            "description": "982-T2V: A slow pan captures seven flamingos standing gracefully on one leg in a shallow lagoon. The flamingos, with their long necks and vibrant pink feathers, exhibit serene and elegant expressions as they balance effortlessly. The spatial arrangement places the flamingos scattered across the calm waters, creating a picturesque and harmonious scene. The flamingos interact by occasionally adjusting their standing position and preening their feathers, maintaining their balance. Their movements are minimal and fluid, emphasizing their grace and poise. The video style is wildlife documentary, with soft, natural lighting reflecting on the water and gentle shadows, creating a tranquil and graceful atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00983.mp4",
            "description": "983-T2V: A medium shot captures five bunnies nibbling on clover in a lush green meadow. The bunnies, with soft fur and floppy ears, display content and relaxed expressions as they graze peacefully. Positioned close together, the bunnies interact by gently grooming each other and sharing the clover patches. Their movements are slow and deliberate, highlighting their calm and peaceful nature. The video adopts a pastoral documentary style, illuminated by bright daylight with soft, natural shadows, creating a serene and idyllic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00984.mp4",
            "description": "984-T2V: A steady tracking shot follows a stylish woman walking down a vibrant Tokyo street filled with warm glowing neon lights and animated city signage. She wears a black leather jacket, a long red dress, black boots, sunglasses, and red lipstick, carrying a black purse. Her confident and casual stride reflects her self-assured demeanor as she navigates the damp, reflective street that mirrors the colorful lights. Pedestrians bustle around her, adding to the dynamic urban environment. The video style is fashion documentary, illuminated by neon lighting with reflective surfaces and soft shadows, creating a trendy and lively atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00985.mp4",
            "description": "985-T2V: A cinematic wide shot features a movie trailer showcasing the adventures of a 30-year-old spaceman wearing a red wool knitted motorcycle helmet, set against a backdrop of a blue sky and salt desert. The spaceman embarks on a daring journey, navigating the vast and barren landscape with determination. The scene is styled in a cinematic manner, shot on 35mm film with vivid colors that highlight the stark contrast between the vibrant sky and the desolate desert. The video employs dynamic camera movements, capturing sweeping vistas and intense action sequences, creating an epic and adventurous atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00986.mp4",
            "description": "986-T2V: A sepia-toned historical footage style captures California during the gold rush, showcasing bustling mining camps, horse-drawn wagons, and prospectors panning for gold. The scenes depict the rugged terrain and the industrious spirit of the settlers as they toil in search of fortune. The video adopts an archival documentary style, with grainy textures and monochromatic lighting, creating an authentic and nostalgic atmosphere that reflects the challenges and excitement of the era."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00987.mp4",
            "description": "987-T2V: An extreme close-up shot focuses on a 24-year-old woman\u2019s eye blinking in Marrakech during magic hour. The vivid colors and depth of field highlight the intricate details of her eye as the warm light casts soft shadows around her face. The cinematic film is shot in 70mm, emphasizing the rich textures and vibrant hues of the bustling Marrakech streets in the background. Her focused expression conveys a sense of anticipation and wonder. The video style is cinematic, with a shallow depth of field and vivid color grading, creating an immersive and captivating atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00988.mp4",
            "description": "988-T2V: A homemade-style video showcases the people of Lagos, Nigeria in the year 2056, filmed with a mobile phone camera. The footage highlights diverse individuals engaging in futuristic activities, vibrant cityscapes with advanced technology, and cultural expressions blending tradition with innovation. The video adopts a casual and intimate style, with natural lighting and handheld camera movements, creating an authentic and visionary atmosphere that reflects the dynamic future of Lagos."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00989.mp4",
            "description": "989-T2V: A medium shot captures a cat waking up its sleeping owner demanding breakfast. The cat, with sleek fur and alert eyes, displays persistent and insistent expressions as it meows loudly. The owner, lying in bed, attempts to ignore the cat but eventually pulls out a secret stash of treats from under the pillow. The spatial arrangement places the cat on the bed near the owner, creating an interactive dynamic. The movements are playful and determined, highlighting the cat\u2019s efforts to get attention. The video adopts a slice-of-life style, illuminated by soft morning light with gentle shadows, creating a cozy and humorous atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00990.mp4",
            "description": "990-T2V: A romantic wide shot shows a man and woman walking hand in hand under a starry sky, with a bucket placed in the background. The couple, dressed in casual evening attire, display content and affectionate expressions as they stroll along a quiet path. Positioned against the vast night sky, the bucket adds a subtle element of intrigue. Their interaction is intimate, with the couple maintaining a steady pace and occasionally exchanging smiles. Their movements are synchronized and relaxed, emphasizing their connection. The video style is romantic documentary, illuminated by soft starlight with subtle shadows, creating a serene and enchanting atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00991.mp4",
            "description": "991-T2V: A low-angle shot captures an astronaut running on the surface of the moon, with the vast lunar landscape stretching into the background. The astronaut, clad in a white space suit with reflective visor, exhibits determination and focus as they navigate the rocky terrain. Positioned against the expansive moon surface, the smooth and lightweight movement emphasizes the astronaut\u2019s agility and the surreal environment. The interaction involves the astronaut moving purposefully across the barren landscape, leaving footprints behind. The movements are smooth and fluid, highlighting the unique gravity and setting. The video adopts a sci-fi cinematic style, illuminated by harsh sunlight with stark shadows, creating a vast and otherworldly atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00992.mp4",
            "description": "992-T2V: A cinematic wide shot features a man riding a horse through the Gobi Desert with a beautiful sunset behind him. The man, dressed in rugged desert attire with a flowing cloak, displays a sense of adventure and freedom as he traverses the expansive dunes. Positioned against the vibrant hues of the setting sun, the horse and rider create a striking silhouette against the desert landscape. The interaction involves the man guiding the horse steadily through the sand, embodying harmony with nature. The movements are steady and graceful, emphasizing the serene yet majestic environment. The video adopts a movie-quality style, shot with high-definition cameras, illuminated by the warm glow of sunset with long shadows, creating a breathtaking and epic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00993.mp4",
            "description": "993-T2V: A close-up shot captures an older man playing the piano, lit from the side to highlight the texture of his hands and the keys. His focused and passionate expression conveys his deep connection to the music. Positioned in a dimly lit room, the side lighting casts dramatic shadows, emphasizing the intricate movements of his fingers. The interaction involves the man skillfully pressing the piano keys, creating a rich and emotive melody. His movements are deliberate and expressive, showcasing his expertise and dedication. The video style is intimate documentary, illuminated by side lighting with contrasting shadows, creating a heartfelt and evocative atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00994.mp4",
            "description": "994-T2V: A vibrant Japanese animated film scene shows a young woman standing on a ship, looking back at the camera with a contemplative expression. Her traditional attire blends seamlessly with the stylized elements of the ship, highlighting the fusion of modern and traditional aesthetics. Positioned against a dynamic ocean backdrop, the ship sails smoothly, creating a sense of movement and adventure. The interaction involves the woman gazing thoughtfully into the distance, reflecting on her journey. Her movements are minimal yet expressive, emphasizing her inner thoughts and emotions. The video style is anime, with vivid colors and fluid animation, creating a visually stunning and emotionally resonant atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00995.mp4",
            "description": "995-T2V: A tight close-up shot focuses on a young woman driving a car, looking thoughtful with a blurred green forest visible through the rainy window. Her expression conveys introspection and contemplation as raindrops streak the glass, adding a dynamic element to the scene. Positioned inside the car, the woman holds the steering wheel with a relaxed grip, her gaze directed towards the blurred scenery outside. The interaction involves the woman navigating the winding road, her thoughts reflected in her eyes. Her movements are subtle, with gentle steering and occasional glances. The video adopts a cinematic style, illuminated by soft interior lighting with diffused reflections, creating a reflective and moody atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00996.mp4",
            "description": "996-T2V: A dynamic wide shot captures a woman singing and standing on a concert stage with a bright light illuminating her from behind. Her expressive performance is highlighted by the vibrant stage setup and enthusiastic audience in the background. The woman, dressed in a stylish performance outfit, displays passionate and energetic expressions as she engages with the crowd. Positioned center stage, the bright light creates a striking silhouette, enhancing her presence. The interaction involves the woman belting out powerful vocals while moving gracefully across the stage. Her movements are fluid and confident, emphasizing her connection with the music and audience. The video style is concert documentary, illuminated by bright stage lighting with dramatic shadows, creating an electrifying and vibrant atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00997.mp4",
            "description": "997-T2V: An over-the-shoulder shot follows a woman running and watching a rocket in the distance, capturing her determined gaze and swift movements. The expansive landscape provides a dramatic backdrop as the rocket ascends into the sky. The woman, dressed in athletic gear, displays focused and excited expressions as she keeps her eyes on the rocket. Positioned ahead, the rocket stands out against the horizon, creating a sense of scale and ambition. The interaction involves the woman sprinting towards the rocket\u2019s launch site, embodying determination and enthusiasm. Her movements are rapid and purposeful, highlighting her commitment to reaching her goal. The video adopts a sports documentary style, illuminated by natural daylight with dynamic shadows, creating an inspiring and exhilarating atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_00999.mp4",
            "description": "999-T2V: A dramatic close-up shot captures a man on a boat fighting a large fish, his intense expression highlighting the struggle. The man, dressed in fishing gear with a rugged appearance, grips the fishing rod tightly as he battles the powerful fish beneath the water\u2019s surface. Positioned on the boat, the spatial relation shows the man on the deck while the fish pulls at the line below. The interaction is intense, with the man pulling against the fish\u2019s resistance, demonstrating strength and determination. His movements are forceful and deliberate, emphasizing the effort required to reel in the catch. The video style is action documentary, illuminated by natural daylight with reflective water surfaces and dynamic shadows, creating a tense and thrilling atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01000.mp4",
            "description": "1000-T2V: A serene medium shot captures a man at the beach throwing a stick for his cat to fetch, the gentle waves lapping at the shore in the background. The man, dressed in casual beachwear, displays a relaxed and affectionate expression as he engages with his playful cat. Positioned on the sandy beach, the spatial relation shows the man throwing the stick towards the water\u2019s edge while the cat prepares to chase. The interaction is playful, with the man tossing the stick and the cat eagerly sprinting after it. Their movements are smooth and coordinated, highlighting the bond between owner and pet. The video adopts a lifestyle documentary style, illuminated by soft natural lighting with gentle shadows, creating a peaceful and heartwarming atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01001.mp4",
            "description": "1001-T2V: A wide-angle shot captures a marathon runner crossing the finish line after a grueling race, sweat glistening on their face and arms raised in triumph. The runner, dressed in athletic gear with a determined expression, is surrounded by fellow competitors and cheering spectators. Positioned at the finish line, the spatial relation shows the runner ahead of others, symbolizing their victory. The interaction involves the runner pushing through the final stretch, embodying perseverance and achievement. Their movements are strong and resolute, highlighting their endurance and success. The video adopts a sports documentary style, illuminated by bright daylight with dynamic shadows, creating an inspiring and victorious atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01002.mp4",
            "description": "1002-T2V: A frantic tight shot captures a real girl running through a dense forest with bushes and trees on a rainy day, pursued by various animals. Her face shows fear and determination as she screams and shouts, navigating the challenging terrain. Positioned amidst thick foliage, the spatial relation highlights her movement through tight spaces while animals chase her from different directions. The interaction is intense, with the girl evading the animals while struggling against the rain and obstacles. Her movements are rapid and panicked, emphasizing the urgency of her escape. The video style is action thriller, illuminated by dim, overcast lighting with heavy shadows, creating a tense and chaotic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01003.mp4",
            "description": "1003-T2V: A medium close-up shot captures a golfer sinking a long putt on the green, the ball rolling smoothly into the hole as the golfer watches intently. The golfer, dressed in sporty attire with focused eyes, displays a mixture of concentration and satisfaction. Positioned on the green, the spatial relation shows the golfer aligned with the putt line towards the hole. The interaction involves the golfer making a precise stroke, controlling the putter with skill and accuracy. Their movements are deliberate and controlled, emphasizing technique and finesse. The video adopts a sports documentary style, illuminated by bright daylight with soft shadows, creating a calm and focused atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01005.mp4",
            "description": "1005-T2V: A creative medium shot captures a person opening a book and turning it upside-down, causing characters to fall out and come to life in a magical display. The book, richly illustrated with vibrant colors, releases animated figures that scatter around the room, interacting with their surroundings. Positioned on a table, the spatial relation shows the book at the center with characters emerging from its pages. The interaction involves the person manipulating the book, triggering the magical release of characters who then move freely within the space. The movements are whimsical and dynamic, highlighting the enchantment of the moment. The video adopts a fantasy animation style, illuminated by soft ambient lighting with colorful highlights and playful shadows, creating a magical and imaginative atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01006.mp4",
            "description": "1006-T2V: A surreal close-up shot captures a human being walking on water and interacting with wildlife animals below them, creating ripples and playful movements in the water. The person, dressed in flowing attire with a serene expression, navigates the water's surface with ease, while fish and other aquatic creatures swim around. Positioned above the water, the spatial relation shows the person balanced on the surface with animals beneath interacting playfully. The interaction involves the person gently touching the water, causing ripples that affect the nearby wildlife. Their movements are graceful and deliberate, emphasizing harmony with nature. The video adopts a surreal fantasy style, illuminated by soft, ethereal lighting with reflective water surfaces and gentle shadows, creating a magical and harmonious atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01007.mp4",
            "description": "1007-T2V: A dynamic close-up shot captures a martial artist delivering a powerful punch, shattering a wooden board with precision and strength. The martial artist, dressed in traditional training attire with a focused expression, exhibits intense determination as they execute the technique. Positioned in a dojo, the martial artist stands firm before the board, making direct contact with a swift, forceful movement. The video adopts an action documentary style, illuminated by strong directional lighting with sharp shadows, creating a tense and empowering atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01008.mp4",
            "description": "1008-T2V: A gentle medium shot captures a baby taking tentative steps as he learns to walk, supported by his attentive mother. The baby, wearing a soft onesie and having adorable curly hair, displays a mix of determination and uncertainty on his face. Positioned in a cozy living room, the baby holds onto his mother's hands, moving forward with cautious movements while the mother offers encouragement. Their spatial relation shows the baby in front, leaning slightly towards the mother. The interaction involves the baby attempting steps while the mother guides and supports. The video adopts a heartwarming documentary style, illuminated by soft natural lighting with gentle shadows, creating a loving and supportive atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01009.mp4",
            "description": "1009-T2V: A steady wide-angle shot captures a Chinese couple collaboratively making dumplings in a traditional kitchen. The couple, dressed in casual home attire with their hair tied back, exhibit cheerful and focused expressions as they work together. Positioned at a kitchen counter, the couple kneads dough and carefully folds dumplings, maintaining a harmonious spatial relation. They interact by passing ingredients and sharing utensils, demonstrating teamwork and cultural tradition. Their movements are synchronized and methodical, emphasizing their coordination and skill. The video adopts a cultural documentary style, illuminated by warm indoor lighting with soft shadows, creating an inviting and familial atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01010.mp4",
            "description": "1010-T2V: A vibrant medium close-up shot captures an Asian girl energetically performing Hip-Hop dance moves in an urban setting. She wears a bright yellow T-shirt and white pants, with her hair styled in a trendy fashion, and displays confident and expressive facial features as she dances. Positioned in a graffiti-covered alleyway, the girl moves dynamically with sharp and fluid motions, showcasing her skill and passion for dance. The interaction involves the girl executing intricate dance steps with precision and rhythm. Her movements are bold and rhythmic, emphasizing the lively and urban essence of Hip-Hop. The video adopts a dance documentary style, illuminated by colorful street lighting with dynamic shadows, creating an energetic and youthful atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01011.mp4",
            "description": "1011-T2V: A serene wide-angle shot captures a couple enjoying a peaceful lakeside picnic, sitting closely together on a blanket and occasionally reaching into a basket for food. The couple, dressed in casual summer attire with relaxed hairstyles, display content and affectionate expressions as they share the meal. Positioned beside the tranquil lake, the couple interacts harmoniously, with gentle ripples on the water reflecting the vibrant colors of the evening sky. Their spatial relation shows them seated side by side with the picnic basket between them. The interaction involves the couple serving themselves from the basket and enjoying each other's company. Their movements are gentle and natural, emphasizing the calm and romantic setting. The video adopts a lifestyle documentary style, illuminated by soft natural lighting with subtle shadows, creating a tranquil and romantic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01012.mp4",
            "description": "1012-T2V: A fast-paced wide-angle shot captures travelers hurrying through a bustling airport terminal, pulling suitcases and bags behind them as they navigate the crowded space. The travelers, dressed in various travel outfits with diverse hairstyles, display focused and hurried expressions as they move towards their gates. Positioned amidst the busy terminal, the flight information boards continuously update with the latest departures and arrivals, adding to the dynamic spatial arrangement. The travelers interact by maneuvering their luggage through the crowds and checking the flight boards for information. Their movements are swift and determined, emphasizing the urgency and energy of airport travel. The video adopts an urban documentary style, illuminated by bright artificial lighting with sharp shadows, creating a lively and hectic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01013.mp4",
            "description": "1013-T2V: A tranquil medium shot captures a woman practicing yoga in a peaceful park, gracefully transitioning through a series of poses that emphasize balance and flexibility. The woman, dressed in comfortable athletic wear with her hair tied back, exhibits calm and focused expressions as she engages in her routine. Positioned on a grassy area surrounded by trees, the woman maintains a balanced spatial relation, moving fluidly from one pose to another. The interaction involves the woman stretching, balancing, and holding each yoga pose with precision and mindfulness. Her movements are smooth and controlled, highlighting her dedication to physical and mental well-being. The video adopts a wellness documentary style, illuminated by soft natural lighting with gentle shadows, creating a serene and harmonious atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01015.mp4",
            "description": "1015-T2V: A surreal wide-angle shot captures a person juggling glowing planets in a cosmic circus setting, with each planet radiating bright, vivid colors against the dark expanse of space. The juggler, dressed in futuristic attire with sparkling accessories, exhibits concentration and skill as they maneuver the celestial bodies through intricate patterns. Positioned in a celestial arena, the person interacts with the floating planets, maintaining a precise spatial relation as they throw and catch each glowing orb. The interaction involves the juggler seamlessly controlling the planets, demonstrating mastery over their cosmic performance. Their movements are fluid and precise, highlighting the fantastical and otherworldly nature of the act. The video adopts a sci-fi fantasy style, illuminated by the luminous planets and ambient cosmic lighting with dynamic shadows, creating a mesmerizing and awe-inspiring atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01016.mp4",
            "description": "1016-T2V: A magical close-up shot captures a person playing a harp with rainbow-colored strings, producing harmonious melodies that seem to color the surrounding air. The musician, dressed in ethereal attire with flowing hair, displays a serene and joyful expression as they pluck the vibrant strings. Positioned on a whimsical stage, the person interacts with the harp, causing the rainbow strings to emit colorful musical notes that float and swirl around them. The spatial relation shows the musician centered with the harp in front, while the colorful notes expand outward. The interaction involves the person skillfully playing the harp, blending music and visual artistry seamlessly. Their movements are graceful and fluid, emphasizing the enchanting and creative fusion of sound and color. The video adopts a fantasy art style, illuminated by multicolored lighting with soft, diffused shadows, creating a magical and visually stunning atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01017.mp4",
            "description": "1017-T2V: A smooth tracking shot captures a single individual wearing a sleek, reflective suit with short hair as they dive downward into an underwater pool. The focused and determined expression on their face intensifies as they plunge into a pool of liquid crystal, creating mesmerizing ripples of light that spread outward. The scene is styled in a surreal manner, illuminated by bright, refracted lighting with soft shadows, enhancing an ethereal and captivating atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01018.mp4",
            "description": "1018-T2V: A steady close-up shot focuses on an individual elegantly sipping tea from an intricately designed ice cup that never melts. The person's serene demeanor and calm expression are highlighted as the ice maintains its form despite the warmth of the beverage. The video adopts an artistic style, with soft ambient lighting casting gentle shadows, creating a tranquil and magical atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01021.mp4",
            "description": "1021-T2V: A steady zoom captures an individual with furrowed eyebrows, deeply concentrated as they work on a complex puzzle in a quiet study room. The intense focus on their face highlights the challenge they are tackling. The scene is portrayed in a realistic style, with focused lighting and subtle shadows, creating a serious and contemplative atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01022.mp4",
            "description": "1022-T2V: A fast-paced zoom-in shot reveals a person's mouth dropping open in surprise as they watch a captivating magic trick on stage. The astonished expression underscores the unexpected nature of the performance. The video adopts a dramatic style, with spotlight lighting and sharp contrasts, enhancing a mysterious and awe-inspiring atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01023.mp4",
            "description": "1023-T2V: A medium shot captures a person whose cheeks flush with embarrassment as they tell a funny story at a social gathering. The slight redness and nervous smile convey their discomfort amidst the humor. The scene is depicted in a candid style, with soft, diffused lighting and gentle shadows, creating a relatable and lighthearted atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01025.mp4",
            "description": "1025-T2V: A wide-angle shot captures a person whose nose scrunches up in distaste as they taste something sour in a vibrant kitchen setting. The disgusted expression emphasizes the unpleasant flavor. The scene is styled in a realistic manner, with bright, natural lighting and defined shadows, creating a lively and authentic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01026.mp4",
            "description": "1026-T2V: A steady dolly shot follows a person whose forehead creases with worry as they listen to bad news in a quiet office. The concerned expression highlights their anxiety. The video adopts a serious style, with subdued lighting and soft shadows, creating a tense and somber atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01027.mp4",
            "description": "1027-T2V: A slow-motion close-up captures a person's chin quivering with emotion as they say goodbye to a loved one at a train station. The tearful expression underscores the sadness of the farewell. The scene is portrayed in a heartfelt style, with natural lighting and gentle shadows, creating a poignant and emotional atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01028.mp4",
            "description": "1028-T2V: A wide shot shows a person's whole face glowing with joy as they hug a dear friend in a sunny park. The radiant smile and sparkling eyes convey genuine happiness. The video style is uplifting, with bright, natural lighting and vibrant shadows, fostering a joyful and warm atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01029.mp4",
            "description": "1029-T2V: A medium shot captures a person's cheeks flushing with embarrassment as they trip in public, drawing attention from passersby. The awkward expression highlights their discomfort. The scene is styled in a candid manner, with natural lighting and soft shadows, creating a relatable and slightly humorous atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01031.mp4",
            "description": "1031-T2V: A close-up shot captures a person's nose wrinkling in distaste as they smell something unpleasant in a cluttered kitchen. The displeased expression highlights their aversion. The scene is depicted in a realistic style, with muted lighting and defined shadows, creating an authentic and slightly uncomfortable atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01032.mp4",
            "description": "1032-T2V: A close-up shot reveals a person's fear and desperation as they navigate a ship through a raging storm, with intense expressions highlighting the perilous situation. The video style is dramatic, with high-contrast lighting and dynamic shadows, creating a tense and thrilling atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01033.mp4",
            "description": "1033-T2V: A tracking shot follows one fashion influencer during a photo shoot scenario. She is dressed in a chic winter outfit with stylish clothing and a trendy hairstyle. Her confident expression and poised facial features are prominently displayed. The subject moves gracefully alongside the background objects. She poses confidently for the photo, maintaining a fluid movement. The video is in documentary style, with soft lighting and gentle shadows, creating an elegant and professional atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01034.mp4",
            "description": "1034-T2V: A dolly zoom captures one person waking up confused in an abandoned bedroom scenario. He has disheveled hair and casual clothing, showing signs of sleep. His facial features display confusion and disorientation. The subject is centered with empty space around him. He slowly sits up, looking around bewildered. The video adopts a realistic style with dim lighting and sharp shadows, evoking a somber and eerie atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01035.mp4",
            "description": "1035-T2V: A bird's-eye view captures one woman in a reunion scenario. She has a joyful expression with bright eyes and a genuine smile. The spatial relation places her next to a long-lost friend. They embrace warmly, showing tears of joy. Both remain relatively still, holding each other. The video is in warm color grading with soft lighting, creating a heartfelt and emotional atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01036.mp4",
            "description": "1036-T2V: A low-angle shot captures one man receiving a compliment in a cheerful scenario. He is dressed in casual attire with neatly styled hair. His face lights up with happiness, showing a broad smile and relaxed facial features. The subject is in the foreground with people in the background. He accepts the compliment graciously, nodding and smiling. The video features vibrant colors with balanced lighting, creating an uplifting and positive atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01037.mp4",
            "description": "1037-T2V: A panoramic shot captures one woman reading a farewell letter in a melancholic scenario. She wears a simple outfit with loose hair framing her face. Her lips tremble, and her eyes show sadness with subtle tears. The subject sits at a table with the letter in front of her. She slowly unfolds the letter, her hands shaking slightly. The video uses muted tones with soft shadows, creating a somber and reflective atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01038.mp4",
            "description": "1038-T2V: A high-angle shot captures one man witnessing injustice in a tense scenario. He is dressed in casual clothing with short hair. His fists are clenched, and his facial features show anger and determination. The subject is positioned to the left of other objects representing the injustice. He glares intensely at the scene unfolding before him. The video employs high contrast lighting with sharp shadows, creating a tense and confrontational atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01040.mp4",
            "description": "1040-T2V: A crane shot captures one woman watching her child perform on stage in a proud scenario. She is dressed in elegant clothing with neatly styled hair. Her face beams with pride, showing a broad smile and shining eyes. The subject is positioned behind the stage, observing her child in the foreground. She claps enthusiastically and cheers, visibly proud. The video features bright lighting with warm tones, creating a joyful and proud atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01041.mp4",
            "description": "1041-T2V: A zoom-in shot captures one man receiving good news from a doctor in a relieved scenario. He is dressed in casual clothing with short hair. His face shows a sigh of relief, relaxed facial features, and a slight smile. The subject sits across from the doctor, listening attentively. He takes a deep breath and relaxes his posture. The video utilizes natural lighting with soft shadows, creating a calm and reassuring atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01042.mp4",
            "description": "1042-T2V: A over-the-shoulder shot captures one girl feeling embarrassed in a public mistake scenario. She has shoulder-length hair and casual attire. Her face is flushed with embarrassment, eyes looking downward, and a slight frown. The subject is surrounded by onlookers in the background. She covers her face briefly, hiding her embarrassment. The video uses soft focus with diffused lighting, creating an awkward and uncomfortable atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01043.mp4",
            "description": "1043-T2V: A medium shot captures one man feeling shame when confronted with wrongdoing in a remorseful scenario. He is dressed in formal attire with neatly combed hair. His eyes look away, and his facial features show shame and regret. The subject stands facing away from the person confronting him. He lowers his head, avoiding eye contact. The video employs subdued lighting with soft shadows, creating a remorseful and tense atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01045.mp4",
            "description": "1045-T2V: A wide-angle shot captures one man completing a challenging task in a satisfied scenario. He is dressed in work attire with short hair. His face shows a grin of satisfaction, eyes focused and content. The subject stands beside the completed task, giving a thumbs-up. He wipes sweat from his brow, showing relief. The video uses sharp lighting with clear shadows, creating a triumphant and rewarding atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01047.mp4",
            "description": "1047-T2V: A pan shot captures one man chuckling at a funny story in an amused scenario. He is dressed in smart casual attire with short hair. His face shows amusement, with a broad smile and crinkled eyes. The subject is engaged in conversation with another person off-frame. He leans slightly forward, laughing heartily. The video features bright lighting with soft shadows, creating a lighthearted and cheerful atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01048.mp4",
            "description": "1048-T2V: A close-up shot captures a man looking bewildered as he can't find his keys in a cluttered hallway. The man, dressed in a casual outfit, has a puzzled expression with furrowed brows and a hand searching his pockets. Spatially, the man is centered with a background of scattered items and a locked door. The interaction involves the man's search for his keys, highlighting his confusion and frustration. The video adopts a humorous style with bright indoor lighting highlighting the chaos, casting clear shadows and creating a lighthearted and relatable atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01049.mp4",
            "description": "1049-T2V: A rapid tracking shot captures a person swiftly typing on a keyboard in a modern office environment. The person, wearing professional attire, moves their fingers quickly across the keys, displaying focus and efficiency. Spatially, the person is positioned at a desk with multiple monitors and office equipment around them. The interaction involves the person working diligently on their computer, highlighting their productivity and concentration. The video adopts a fast-paced style with bright artificial lighting illuminating the workspace, casting sharp shadows and creating a dynamic and efficient atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01050.mp4",
            "description": "1050-T2V: A close-up shot captures a hand elegantly writing a letter with a fountain pen on a piece of parchment in a softly lit study. The hand, adorned with a simple ring, moves gracefully across the paper, forming neat and deliberate letters. Spatially, the hand is centered with the parchment and pen in focus, while the background remains blurred. The interaction involves the act of writing, showcasing the elegance and precision of the movement. The video adopts an elegant style with soft ambient lighting highlighting the hand and paper, casting gentle shadows and creating a sophisticated and serene atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01051.mp4",
            "description": "1051-T2V: A medium shot captures an artist delicately applying paint to a canvas, creating a vibrant landscape with precise brushstrokes in a well-lit studio. The artist, wearing a paint-splattered apron, focuses intently on their work, blending colors seamlessly. Spatially, the artist is positioned at an easel with the canvas prominently displayed, surrounded by paint supplies and creative tools. The interaction involves the artist's creative process, highlighting their skill and attention to detail. The video adopts an artistic style with bright natural lighting illuminating the studio, casting clear shadows and creating an inspiring and creative atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01052.mp4",
            "description": "1052-T2V: A close-up shot captures a musician strumming the strings of an acoustic guitar, lost in the melody of their song in a warmly lit room. The musician, wearing a casual outfit, shows a serene expression as their fingers move deftly across the guitar strings. Spatially, the musician is centered with the guitar in focus, while the background features soft furnishings and musical instruments. The interaction involves the musician's engagement with the instrument, highlighting their passion and skill. The video adopts a melodic style with warm lighting emphasizing the musician and guitar, casting soft shadows and creating a harmonious and intimate atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01053.mp4",
            "description": "1053-T2V: A medium shot captures a gardener planting seeds in a garden bed, their hands gently pressing the soil over the seeds in a brightly lit backyard. The gardener, wearing a sun hat and gardening gloves, works methodically, displaying care and dedication to their plants. Spatially, the gardener is positioned at a raised garden bed with various plants and tools surrounding them. The interaction involves the act of planting, highlighting the gardener's nurturing nature and attention to detail. The video adopts a naturalistic style with bright sunlight illuminating the garden, casting clear shadows and creating a peaceful and productive atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01054.mp4",
            "description": "1054-T2V: A medium shot captures a pair of hands skillfully knitting a colorful scarf, the yarn winding through their fingers with each stitch in a cozy living room. The hands, adorned with simple rings, move deftly over the knitting needles, creating intricate patterns. Spatially, the hands are centered with the scarf in focus, while the background features comfortable furniture and soft lighting. The interaction involves the act of knitting, showcasing the hands' dexterity and the creation of the scarf. The video adopts a cozy style with warm indoor lighting highlighting the knitting process, casting soft shadows and creating a comforting and focused atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01055.mp4",
            "description": "1055-T2V: A close-up shot captures a person using a screwdriver to assemble a piece of furniture in a well-lit garage. The person, wearing work gloves and casual attire, carefully tightens each screw, ensuring the pieces fit together perfectly. Spatially, the person is centered with the furniture parts and tools clearly visible in the foreground, while the background remains slightly blurred. The interaction involves the precise act of assembling, highlighting the person's attention to detail and craftsmanship. The video adopts a practical style with bright artificial lighting illuminating the workspace, casting clear shadows and creating an organized and efficient atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01056.mp4",
            "description": "1056-T2V: A medium shot captures a man wiping down a kitchen counter with a cloth, ensuring every surface is spotless and clean in a brightly lit kitchen. The man, wearing casual clothing, moves methodically, displaying diligence and attention to detail. Spatially, the man is positioned at the center of the frame with various kitchen appliances and utensils around him. The interaction involves the act of cleaning, highlighting the man's commitment to maintaining a tidy environment. The video adopts a clean style with bright natural lighting illuminating the kitchen, casting soft shadows and creating a fresh and orderly atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01057.mp4",
            "description": "1057-T2V: A close-up shot captures a woman's face twisting in disgust as she searches her bag trying to find something in a softly lit room. The woman, wearing casual attire, shows frustration and irritation as she rummages through her belongings. Spatially, the woman is centered with her bag open in front of her, items scattered around. The interaction involves the act of searching, highlighting her annoyance and urgency. The video adopts a relatable style with soft indoor lighting highlighting the woman's expressions, casting gentle shadows and creating a tense and slightly humorous atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01058.mp4",
            "description": "1058-T2V: A close-up shot captures a chef chopping vegetables with speed in a professional kitchen, highlighted by bright overhead lighting. The chef, wearing a white apron and a focused expression, moves the knife rapidly through a variety of fresh vegetables, showcasing skill and efficiency. Spatially, the chef is centered with a cutting board and an array of vegetables in the foreground, while the background features kitchen appliances and utensils. The interaction involves the chef's rapid chopping, emphasizing their expertise and the dynamic environment of the kitchen. The video adopts a high-energy style with bright lighting enhancing the colors of the vegetables, casting sharp shadows and creating a vibrant and intense atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01059.mp4",
            "description": "1059-T2V: A wide-angle shot captures a couple walking along the beach as the sun sets over the ocean, their silhouettes outlined against the colorful sky. The couple, dressed in casual summer attire, stroll hand-in-hand, displaying relaxation and companionship. Spatially, the couple is positioned in the foreground with the expansive beach and setting sun stretching into the horizon. The interaction involves the couple enjoying a peaceful walk, highlighting their connection and the beauty of the natural setting. The video adopts a romantic style with warm sunset lighting casting long shadows and creating a serene and picturesque atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01060.mp4",
            "description": "1060-T2V: A high-speed video captures a crab scurrying into its burrow in a sandy shoreline, the motion blurred to emphasize speed against a clear background. The crab, with its sturdy legs and quick movements, darts rapidly across the sand, showcasing agility and survival instincts. Spatially, the crab is in the foreground with the burrow entrance visible nearby, while the background features the shoreline and gentle waves. The interaction involves the crab's swift movement to hide from potential threats, highlighting its adaptability and quick reflexes. The video adopts an action style with natural daylight illuminating the scene, casting dynamic shadows and creating a lively and engaging atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01061.mp4",
            "description": "1061-T2V: A wide-angle shot captures a crocodile sunbathing on a riverbank under a clear blue sky, its body partially submerged in the water. The crocodile, with its rugged skin and relaxed posture, basks in the sunlight, displaying a sense of calm and dominance in its natural habitat. Spatially, the crocodile is positioned in the center with the expansive river and surrounding vegetation filling the background. The interaction involves the crocodile's tranquil behavior in its environment, highlighting its adaptability and presence. The video adopts a naturalistic style with bright sunlight illuminating the riverbank, casting sharp shadows and creating a serene yet powerful atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01062.mp4",
            "description": "1062-T2V: A close-up shot captures a curious cat investigating a cardboard box in a softly lit room. The cat, with its inquisitive eyes and twitching whiskers, pokes its head into the box, exploring its new surroundings with interest and caution. Spatially, the cat is centered with the cardboard box in focus, while the background features a cozy room setup. The interaction involves the cat's exploration behavior, highlighting its curiosity and playful nature. The video adopts a playful style with soft indoor lighting highlighting the cat and box, casting gentle shadows and creating a lighthearted and engaging atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01063.mp4",
            "description": "1063-T2V: A medium shot captures a construction worker operating heavy machinery with precision, contributing to a larger project in a bright construction site. The worker, wearing safety gear and a hard hat, maneuvers the machinery skillfully, displaying expertise and focus. Spatially, the worker is centered with the heavy machinery in action, surrounded by other construction elements like scaffolding and materials. The interaction involves the worker's role in the construction process, highlighting their skill and the project's progress. The video adopts an industrious style with bright daylight illuminating the site, casting clear shadows and creating a busy and productive atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01064.mp4",
            "description": "1064-T2V: A camera tracking shot captures a man walking down a city street, holding a coffee cup in his hand. He is wearing a dark suit and red tie, displaying a neutral expression. The man is walking forward along the street while holding the coffee steady. The video has a documentary style with natural daylight and soft shadows, creating an urban atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01065.mp4",
            "description": "1065-T2V: A camera arc shot captures a dog barking at a squirrel in a park. The scene features a medium-sized brown dog and a small gray squirrel, with the dog displaying agitation and the squirrel appearing alert. The dog is positioned on the left while the squirrel is on the right. The dog barks at the squirrel, which is running away. The video adopts a documentary style with natural daylight and soft shadows, creating a lively atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01066.mp4",
            "description": "1066-T2V: A tilt-up shot from the base of a skyscraper moves upward to reveal its towering height against the sky. The scene features a modern glass skyscraper, showcasing its impressive structure as it rises against the clear daylight sky. The camera tilts upward, emphasizing the skyscraper's height. The video maintains a documentary style with natural lighting and soft shadows, creating a majestic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01067.mp4",
            "description": "1067-T2V: A close-up shot of a futuristic cybernetic German shepherd showcases its striking brown and black fur. Its chest and head feature robotic modifications, and its eye displays a striking black color with futuristic digital alterations. The dog's head is tilted slightly to the side, conveying a regal and majestic expression. Positioned in front of a blurred neon background, the dog\u2019s striking appearance is highlighted. The video adopts a sci-fi style with neon lighting and blurred shadows, creating a futuristic atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01068.mp4",
            "description": "1068-T2V: A static shot captures an alien blending in naturally with the bustling environment of New York City. The scene features a humanoid alien seamlessly interacting with city dwellers, displaying a nervous and paranoid expression. Positioned among the crowd, the alien walks alongside people without attracting attention. The video adopts a paranoia thriller style with 35mm film characteristics, featuring grainy lighting and high contrast shadows, creating a tense atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/Agent/t2v_compress/merged_01069.mp4",
            "description": "1069-T2V: A static shot features a coconut tree made of dollar bills at sunset, with bills gracefully falling off like leaves. The scene is set on a beach during the golden hour, highlighting the surreal appearance of the tree composed entirely of currency. As the sunset casts warm lighting and soft shadows, the dollar bills gently descend, mimicking the natural fall of leaves. The video adopts a surreal style with warm sunset lighting and soft shadows, creating a dreamy atmosphere."
        }
    ]
    const videos_v2v = []


    // 使用Intersection Observer实现懒加载
    

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
    function createGallery(videos) {
        const galleryElement = document.querySelector('#gallery1 .projects');
        
        const end = Math.min(page_id*nVideosPerPage+nVideosPerPage, videos.length);
        for(let i=page_id*nVideosPerPage; i<end; i++){
            const video = videos[i];
            console.log({video})
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
        }
    
        const observer = new IntersectionObserver(lazyLoadVideo, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });
    
        // 观察所有项目
        const galleryId = 'gallery1';
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
    var currentCategory = 'but-text-to-video'
    function clearStyle(){
        const buttons = document.querySelectorAll('.category-button');
        buttons.forEach(button => {
            button.style.backgroundColor = '';
            button.style.color = '';
        });
    }
    const buttons=['but-text-to-video', 'but-image-to-video', 'but-video-to-video'];
    const textListMap = {
        'but-text-to-video': videos_t2v,
        'but-image-to-video': videos_i2v,
        'but-video-to-video': videos_v2v
    }
    createGallery(textListMap[currentCategory]);
    function createPageLinks(pageCount){
        const pageLinks = document.getElementById('page-links');
        const pageLinks_bottom = document.getElementById('page-links-bottom');
        pageLinks.innerHTML = '';
        pageLinks_bottom.innerHTML = '';
        for(let i=0; i<pageCount; i++){
            var a = document.createElement('a');
            var ab = document.createElement('a');
            if(i==page_id){
                a.style="background-color: aqua; color:#000000"
                ab.style="background-color: aqua; color:#000000"
            }
            a.innerText = i+1;
            ab.innerText = i+1;
            pageLinks.appendChild(a).id = 'page-'+i;
            pageLinks_bottom.appendChild(ab).id = 'page-'+i;
            a.addEventListener('click', function() {
                page_id = i;
                createPageLinks(pageCount);
                document.querySelector('#gallery1 .projects').innerHTML = '';
                createGallery(textListMap[currentCategory]);  // 使用当前分类
            });
            ab.addEventListener('click', function() {
                page_id = i;
                createPageLinks(pageCount);
                document.querySelector('#gallery1 .projects').innerHTML = '';
                createGallery(textListMap[currentCategory]);  // 使用当前分类
            });
        }
    }
    buttons.forEach(button => {
        const but = document.getElementById(button)
        but.innerText = but.innerText+'('+textListMap[button].length+')'
        but.addEventListener('click', function() {
            clearStyle();
            currentCategory = button;  // 更新当前分类
            document.querySelector('#gallery1 .projects').innerHTML = '';
            page_id = 0;
            createGallery(textListMap[button]);
            const pageCount = Math.ceil(textListMap[button].length / nVideosPerPage);
            createPageLinks(pageCount);
            document.getElementById(button).style.backgroundColor = 'aquamarine';
            document.getElementById(button).style.color = '#000000';
        });
    });
    const pageCount = Math.ceil(textListMap[currentCategory].length / nVideosPerPage);
    createPageLinks(pageCount)

});
