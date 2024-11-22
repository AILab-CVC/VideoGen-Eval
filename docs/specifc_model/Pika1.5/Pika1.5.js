document.addEventListener("DOMContentLoaded", () => {
    const videos_i2v = [
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00000.mp4",
            "description": "0-I2V: The camera remains still, the boy waves the baseball bat and knocks the baseball away."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00001.mp4",
            "description": "1-I2V: The camera remains still, the right hand lifts the faucet switch and let the water flow down."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00002.mp4",
            "description": "2-I2V: The camera remains still, the left hand turns off the faucet, and the water will stop flowing down."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00003.mp4",
            "description": "3-I2V: The camera remains still, this person smashes the laptop with the hammer in his hands."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00004.mp4",
            "description": "4-I2V: The camera remains still, this man blew air into the balloon."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00005.mp4",
            "description": "5-I2V: The camera remains still, a hand reaching out to pull the chain of a lampshade, turning the lamp off."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00006.mp4",
            "description": "6-I2V: The camera remains still, the man throws the basketball."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00007.mp4",
            "description": "7-I2V: The camera remains still, the hand place the cup under the faucet to contain water."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00008.mp4",
            "description": "8-I2V: The woman throws the cup in her left hand to the ground, and the camera follows the movement of the cup."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00009.mp4",
            "description": "9-I2V: The camera remains still, the woman swings the tennis racket and knocks the tennis ball away."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00010.mp4",
            "description": "10-I2V: The camera remains still, the man walks up to the front of the chair and sits on it."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00011.mp4",
            "description": "11-I2V: The camera remains still, the man walks up to the front of the chair and sits on it."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00012.mp4",
            "description": "12-I2V: The camera remains still, the woman reaches out her right hand and picks up the mug on the table."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00013.mp4",
            "description": "13-I2V: The camera remains still, the man picks up the glasses on the table with his right hand."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00014.mp4",
            "description": "14-I2V: The camera remains still, the man walks towards the bed and lies down on it."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00015.mp4",
            "description": "15-I2V: The camera remains still, the woman grasps the scissor to cut the red line."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00016.mp4",
            "description": "16-I2V: The camera remains still, the man is riding the bicycle forward."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00017.mp4",
            "description": "17-I2V: The camera remains still, the man pours wine from the bottle."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00018.mp4",
            "description": "18-I2V: The camera remains still, the man pours soup from the bowl."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00019.mp4",
            "description": "19-I2V: The camera remains still, the woman uses the broom to clean the ground."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00020.mp4",
            "description": "20-I2V: The camera remains still, the woman uses the mop to clean the ground from left to right."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00021.mp4",
            "description": "21-I2V: The camera remains still, the human picks up food with a fork by hand."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00022.mp4",
            "description": "22-I2V: The camera remains still, the woman picks up food with the chopsticks by hand."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00023.mp4",
            "description": "23-I2V: The camera remains still, the woman grasps the knife to cut food."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00024.mp4",
            "description": "24-I2V: The camera remains still, the man is riding the motorcycle forward."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00025.mp4",
            "description": "25-I2V: The camera remains still, the man is carrying a wrapped chair up the stairs."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00026.mp4",
            "description": "26-I2V: The camera remains still, the woman is sitting upright in an office chair."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00027.mp4",
            "description": "27-I2V: The camera remains still, the man is holding up the bucket and pouring things from it."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00028.mp4",
            "description": "28-I2V: The camera remains still, the man is pouring hot water from a kettle into a coffee dripper."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00029.mp4",
            "description": "29-I2V: The camera remains still, the person is about to lift the lid off a stainless steel kettle."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00030.mp4",
            "description": "30-I2V: The camera remains still, the man is holding a wooden bucket and walking towards."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00031.mp4",
            "description": "31-I2V: The camera remains still, the man is cuting the cake with a knife."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00032.mp4",
            "description": "32-I2V: The camera remains still, the woman is about to stab the cake with a knife."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00033.mp4",
            "description": "33-I2V: The camera remains still, the man is walking along the shore carrying his surfboard."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00034.mp4",
            "description": "34-I2V: The camera remains still, the man is surfing on a wave with his surfboard."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00035.mp4",
            "description": "35-I2V: The camera remains still, the man is balancing a soccer ball on his forehead."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00036.mp4",
            "description": "36-I2V: The camera remains still, the man is walking while carrying a backpack."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00037.mp4",
            "description": "37-I2V: The camera remains still, the cyclist is riding a bicycle up a mountain road."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00038.mp4",
            "description": "38-I2V: The camera remains still, the man is listening music with his headphone and shaking his heads."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00039.mp4",
            "description": "39-I2V: The camera remains still, the woman is hula hooping outdoors."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00040.mp4",
            "description": "40-I2V: The camera remains still, the man is kicking a soccer ball on the field."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00041.mp4",
            "description": "41-I2V: The camera remains still, the construction worker is carrying a ladder on his shoulder."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00042.mp4",
            "description": "42-I2V: The camera remains still, the motorcyclists are racing on a track."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00043.mp4",
            "description": "43-I2V: The camera remains still, the man is riding a skateboard down the street."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00044.mp4",
            "description": "44-I2V: The camera remains still, the surfer is riding a wave on his surfboard."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00045.mp4",
            "description": "45-I2V: The camera remains still, the girl is taking off her sunglasses."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00046.mp4",
            "description": "46-I2V: The camera remains still, the woman is walking while lifting a handbag."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00047.mp4",
            "description": "47-I2V: The camera remains still, the baseball player is swing the baseballbat."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00048.mp4",
            "description": "48-I2V: The camera remains still, the woman holds a coffee cup and walks towards."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00049.mp4",
            "description": "49-I2V: The camera remains still, the woman places the bowl on the table with her hands."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00050.mp4",
            "description": "50-I2V: The camera remains still, the man is carrying a chair with both hands across the street."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00051.mp4",
            "description": "51-I2V: The camera remains still, the man is playing an acoustic guitar."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00052.mp4",
            "description": "52-I2V: The camera remains still, the man is using a hammer to hit the chisel."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00053.mp4",
            "description": "53-I2V: The camera remains still, the girl is taking off her hat."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00054.mp4",
            "description": "54-I2V: The camera remains still, the woman uses her right hand to raise up the mug."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00055.mp4",
            "description": "55-I2V: The camera remains still, the woman uses her both hands to move a table."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00056.mp4",
            "description": "56-I2V: The camera remains still, the woman is brushing her teeth with a toothbrush."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00057.mp4",
            "description": "57-I2V: The camera remains still, the woman is sweeping the floor with a broom."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00058.mp4",
            "description": "58-I2V: The camera remains still, the person is using a fork to stab the meal served in a banana leaf."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00059.mp4",
            "description": "59-I2V: The camera remains still, the woman is mopping the floor."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00060.mp4",
            "description": "60-I2V: The camera remains still, a person holds a spoon in his right hand to serve food."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00061.mp4",
            "description": "61-I2V: The camera remains still, the girl is carrying a bucket while smiling and walking towards."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00062.mp4",
            "description": "62-I2V: The camera remains still, the woman is pulling a suitcase while walking down a street."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00063.mp4",
            "description": "63-I2V: The camera remains still, the man is playing tennis, about to hit the ball with his racket."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00064.mp4",
            "description": "64-I2V: The camera remains still, the man is holding an umbrella while walking in the rain."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00065.mp4",
            "description": "65-I2V: The camera remains still, the woman is opening a kitchen cabinet."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00066.mp4",
            "description": "66-I2V: The camera remains still, the woman is opening an oven door."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00067.mp4",
            "description": "67-I2V: The camera remains still, the woman is pulling the oven door with her hands."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00068.mp4",
            "description": "68-I2V: The camera remains still, the person is opening the door of a microwave."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00069.mp4",
            "description": "69-I2V: The camera remains still, the man is opening the door of the storage cabinet."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00070.mp4",
            "description": "70-I2V: The camera remains still, the hand is pulling the drawer."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00071.mp4",
            "description": "71-I2V: The camera remains still, the woman is closing the refrigerator door."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00072.mp4",
            "description": "72-I2V: The camera remains still, the child grasp the scissor and cuts paper."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00073.mp4",
            "description": "73-I2V: The camera remains still, the person is rolling up a yoga mat."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00074.mp4",
            "description": "74-I2V: The camera remains still, the girl folds the paper airplane in her hand."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00075.mp4",
            "description": "75-I2V: The camera remains still, the woman is folding laundry with her hands."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00076.mp4",
            "description": "76-I2V: The camera remains still, the woman folds the pants in her hand."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00077.mp4",
            "description": "77-I2V: The camera remains still, the woman is flipping through the book in her hand."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00078.mp4",
            "description": "78-I2V: The camera remains still, this person is holding the oar and rowing vigorously."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00079.mp4",
            "description": "79-I2V: The camera remains still, the man quickly and violently waves the sword in his hand."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00080.mp4",
            "description": "80-I2V: The camera remains still, the human is typing on a keyboard."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00081.mp4",
            "description": "81-I2V: The camera remains still, the human is typing on a keyboard."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00082.mp4",
            "description": "82-I2V: The camera remains still, the human is typing on a keyboard."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00083.mp4",
            "description": "83-I2V: The camera remains still, the human is typing on a keyboard."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00084.mp4",
            "description": "84-I2V: The camera remains still, the human is typing on a keyboard."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00085.mp4",
            "description": "85-I2V: The camera remains still, the human is slicing food with a knife."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00086.mp4",
            "description": "86-I2V: The camera remains still, the human is slicing food with a knife."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00087.mp4",
            "description": "87-I2V: The camera remains still, the human is slicing food with a knife."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00088.mp4",
            "description": "88-I2V: The camera remains still, the human is slicing food with a knife."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00089.mp4",
            "description": "89-I2V: The camera remains still, the human is slicing food with a knife."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00090.mp4",
            "description": "90-I2V: The camera remains still, the human is skateboarding."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00091.mp4",
            "description": "91-I2V: The camera remains still, the human is skateboarding."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00092.mp4",
            "description": "92-I2V: The camera remains still, the human is skateboarding."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00093.mp4",
            "description": "93-I2V: The camera remains still, the human is skateboarding."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00094.mp4",
            "description": "94-I2V: The camera remains still, the human is skateboarding."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00095.mp4",
            "description": "95-I2V: The camera remains still, the human is surfing on a wave with the surfboard."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00096.mp4",
            "description": "96-I2V: The camera remains still, the human is surfing on a wave with the surfboard."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00097.mp4",
            "description": "97-I2V: The camera remains still, the human is surfing on a wave with the surfboard."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00098.mp4",
            "description": "98-I2V: The camera remains still, the human is surfing on a wave with the surfboard."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00099.mp4",
            "description": "99-I2V: The camera remains still, the human is surfing on a wave with the surfboard."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00100.mp4",
            "description": "100-I2V: Static camera, the left hand turns off the faucet."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00101.mp4",
            "description": "101-I2V: Static camera, pull down this wire with the hand to light up the desk lamp."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00104.mp4",
            "description": "104-I2V: Static camera, the person smashes the laptop with the hammer in his hands."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00105.mp4",
            "description": "105-I2V: Static camera, the man blew air into the balloon."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00106.mp4",
            "description": "106-I2V: Static camera, this woman is pouring water into the cup on the table."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00107.mp4",
            "description": "107-I2V: Static camera, this person is holding the oar and rowing vigorously."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00108.mp4",
            "description": "108-I2V: Static camera, the woman is hula hooping outdoors."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00109.mp4",
            "description": "109-I2V: Static camera, the woman is pulling open the oven door with her hands."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00110.mp4",
            "description": "110-I2V: Static camera, the person is rolling up a yoga mat."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00111.mp4",
            "description": "111-I2V: Static camera, the man walks up to the front of the chair and sits on it."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00112.mp4",
            "description": "112-I2V: Static camera, the man picks up the glasses on the table with his right hand."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00116.mp4",
            "description": "116-I2V: Static camera, the robotic arm uses its gripper to move the apple between the can and the orange."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00117.mp4",
            "description": "117-I2V: Static camera, the robotic arm uses its gripper to pull out the drawer."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00118.mp4",
            "description": "118-I2V: Static camera, the humanoid robot uses the robotic hand to grab the walnut on the table in front of it."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00139.mp4",
            "description": "139-I2V: Static camera, the clouds are slowly drifting."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00140.mp4",
            "description": "140-I2V: Static camera, the water from the waterfall hits the rocks, creating splashes of water."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00141.mp4",
            "description": "141-I2V: Aerial shot, switch to the next scene from the front view to the aerial view."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00142.mp4",
            "description": "142-I2V: Static camera, the sun gradually rises behind the mountain."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00143.mp4",
            "description": "143-I2V: A FPV shot zooming through the scene."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00144.mp4",
            "description": "144-I2V: Looking up, the sun appears within sight."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00145.mp4",
            "description": "145-I2V: The video is a static medium shot of a woman with long black hair, wearing a white dress, sitting at a table and talking while holding a chopstick. The background features a wall with a red and black design and a silver teapot on the table."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00146.mp4",
            "description": "146-I2V: The video is a medium shot of a young woman with dark hair and a brown dress reading a book in a sunny field. The camera remains static throughout the shot."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00147.mp4",
            "description": "147-I2V: The video starts with a static, medium shot of a dimly lit room with a motorcycle helmet on the windowsill, then transitions to a shaky, aerial shot as someone picks up the helmet and looks out over the city at night. The video has a realistic style."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00148.mp4",
            "description": "148-I2V: The video features a medium shot of a man in a dark superhero costume with a star on his chest, standing in a battle-scarred landscape. The camera remains static throughout the shot."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00149.mp4",
            "description": "149-I2V: The camera remains static, providing a point-of-view shot through a telescopic sight as a high-speed train travels from right to left across the frame. The shot remains a medium shot throughout, focused on the moving train."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00150.mp4",
            "description": "150-I2V: The video is a long shot depicting a soldier carefully traversing a bombed-out bridge over a canal in what appears to be a war-torn European city. As the soldier cautiously makes his way across the wreckage, a loud blast occurs, causing him to fall into the water below."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00151.mp4",
            "description": "151-I2V: This video is a wide shot depicting a chaotic battle scene with many combatants, including humans, creatures, and flying vehicles, engaged in intense fighting. The camera pans right and tilts down, following the action as it unfolds."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00152.mp4",
            "description": "152-I2V: The video shows a close-up shot of a young girl with short dark hair and a black choker. The camera remains static throughout the video, and the girl maintains a neutral expression with her head slightly turned to the right."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00153.mp4",
            "description": "153-I2V: The video is a static, medium shot of a bag of espresso coffee beans and a white coffee cup being filled with coffee. As the coffee fills the cup, steam begins to rise."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00154.mp4",
            "description": "154-I2V: The video features a static, close-up shot of a glass being filled with Coca-Cola. As the beverage is poured, the camera zooms into the glass, highlighting the carbonation and dark color of the cola."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00155.mp4",
            "description": "155-I2V: The video starts with a long shot of a woman riding a horse on a hilltop, transitioning to an aerial shot as the horse runs down a dirt road. The video then cuts to a medium shot of the woman on the horse as she holds up a bottle of perfume, silhouetted against the setting sun over Los Angeles."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00156.mp4",
            "description": "156-I2V: The video features a static, wide shot of a sleek, thin-bezeled Samsung LED TV set against a black background, initially showcasing a still image of the text \"LED TV\" before transitioning to display a vibrant scene of a hummingbird hovering near a flowering plant. As the camera circles around the TV, blue streaks of light emphasize its slim profile, culminating in a fade-out to black and the display of the Samsung logo and website address."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00157.mp4",
            "description": "157-I2V: This is an animation video with a static camera and a medium shot. It shows a man and a woman dancing; the man attempts a dance move and falls to the ground."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00158.mp4",
            "description": "158-I2V: This is an animated video, with a medium shot, showing a young woman wearing headphones and writing in a notebook at a desk. At the end of the video, someone's hand removes the headphones from the woman's head, and she looks up with a surprised expression."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00159.mp4",
            "description": "159-I2V: This is an animated video showing a medium shot of a young girl with short brown hair wearing a green and white shirt. The girl is standing with her fists clenched and a frustrated expression, her face gradually becoming more sad and tearful."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00160.mp4",
            "description": "160-I2V: The video takes a close-up shot showing two hands typing on a keyboard with Japanese characters. The camera remains static throughout the video."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00161.mp4",
            "description": "161-I2V: This is an animated video, with a medium shot, showing a young boy with brown hair hungrily eating eggs and bacon off of a plate. The boy eats quickly and messily, getting food on his face."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00162.mp4",
            "description": "162-I2V: This is an animation video. A medium shot follows a young man with dark hair as he runs urgently through a dark street, then the camera follows him as he leaps into the air."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00163.mp4",
            "description": "163-I2V: This is an animation video with a static camera and a medium shot showing raindrops splashing in a puddle on the ground. The camera does not move, and the scene remains the same throughout the video."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00164.mp4",
            "description": "164-I2V: This is an animated video with a long shot that pans up slowly from the base of a tall tower as a crow flies past. As the shot continues, the sky darkens, and it begins to rain."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00165.mp4",
            "description": "165-I2V: The animation shows a plane flying through a simulated wind tunnel, with the camera following alongside as the tunnel narrows. The shot is a medium shot and remains static throughout the video."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00166.mp4",
            "description": "166-I2V: The animation zooms in on a black hole distorting space-time, represented by a red grid, then transitions to a white dwarf star orbiting the black hole and losing its matter."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00167.mp4",
            "description": "167-I2V: The camera provides an aerial view, zooming in on a 3D model of a volcano as a red area expands outwards from the peak. The video uses animation to depict the potential spread of a volcanic flow."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00168.mp4",
            "description": "168-I2V: The video uses animation to depict a network of neurons firing and connecting with each other, resembling a galaxy with nebulae and stars. The camera remains static throughout the video."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00169.mp4",
            "description": "169-I2V: The video starts with a long shot of a satellite against a backdrop of space and a bright light, then transitions to a close-up shot as the satellite rotates and reveals Jupiter in the background. The camera remains static throughout the video."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00170.mp4",
            "description": "170-I2V: A close-up shot captures the car almost hitting a red car from a first-person perspective."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00171.mp4",
            "description": "171-I2V: A close-up shot captures the car almost hitting a white car that changed lanes across the solid line on the right from a first-person perspective."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00172.mp4",
            "description": "172-I2V: A close-up shot captures the car almost hitting a motorcycle carrying two people from a first-person perspective."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00173.mp4",
            "description": "173-I2V: A close-up shot captures the car almost hitting a three-wheeled motorcycle crossing from left to right"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00174.mp4",
            "description": "174-I2V: A close-up shot captures the car almost hitting the rear of a blue car from a first-person perspective."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00175.mp4",
            "description": "175-I2V: A close-up shot captures the car almost hitting two women crossing from left to right"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00176.mp4",
            "description": "176-I2V: A close-up shot captures the car almost hitting a man suddenly crossing from left to right"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00177.mp4",
            "description": "177-I2V: A close-up shot captures the car almost hitting a black car from a first-person perspective."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00178.mp4",
            "description": "178-I2V: The video is a long shot depicting a white humanoid robot running across a series of yellow platforms in a brightly lit indoor space. The camera remains static throughout the video."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00179.mp4",
            "description": "179-I2V: The video is a static, medium shot of three small, toy robots on a table that make various expressions with their digital faces. The robots are stylized with an animation aesthetic."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00180.mp4",
            "description": "180-I2V: A static, medium shot captures a robotic arm welding a metal plate, creating sparks and smoke. The robotic arm moves along the plate, creating a triangular shape with the weld."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00181.mp4",
            "description": "181-I2V: The video is a close-up shot of a robot with a digital face as a young woman whispers in its ear. The robot's facial expression changes to reflect a smile as the girl speaks."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00182.mp4",
            "description": "182-I2V: A gray robot dog jumps from one rock to another rock. The camera moves slightly to the right, capturing the robot dog's movements in a medium shot, showcasing a realistic video style."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00183.mp4",
            "description": "183-I2V: A wide shot shows a penguin standing on a beach, looking to its right. The penguin takes a few small steps forward."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00184.mp4",
            "description": "184-I2V: The video is a medium shot, showing a sea turtle swimming from the left to the right side of the frame. The camera follows the turtle's movement."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00185.mp4",
            "description": "185-I2V: The video is a static wide shot of a sunset over the ocean with rocks in the foreground. As the sun sets, the sky changes colors from purple to dark blue."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00186.mp4",
            "description": "186-I2V: A static medium shot captures a sloth slowly climbing up a tree trunk covered in moss in a dense forest. The sloth moves its claws one by one as it steadily ascends the tree."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00187.mp4",
            "description": "187-I2V: The video is a static medium shot of a large group of seals resting and interacting on a beach. Some seals are moving slightly, scratching themselves, adjusting their position, or interacting with their neighbors."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00188.mp4",
            "description": "188-I2V: A close-up static shot shows a steak being cooked on a hot surface as a pat of butter melts on top of it. The butter melts as the steak continues to cook."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00189.mp4",
            "description": "189-I2V: A static, close-up shot shows a pair of chopsticks lifting noodles from a bowl of tomato and egg soup. The noodles are lifted and then returned to the bowl."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00190.mp4",
            "description": "190-I2V: The video features a medium shot of a delicious-looking burger with the top bun levitating above the rest of the ingredients. As the video progresses, flames appear on the wooden board beneath the burger, creating a visually appealing contrast against the dark background."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00191.mp4",
            "description": "191-I2V: The video is a static, medium shot of a chef preparing sashimi. The chef uses a long, thin knife to slice a piece of fish and then arranges the slices on a wooden cutting board."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00192.mp4",
            "description": "192-I2V: The video is a static medium shot of a person using a wok and ladle to stir-fry rice over an open flame. The person lifts and tosses the rice in the wok throughout the video."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00193.mp4",
            "description": "193-I2V: The video is a static medium shot of a man eating noodles with chopsticks from a plate. The man lifts the noodles from the plate to his mouth with chopsticks and eats them."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00194.mp4",
            "description": "194-I2V: The video is a close-up shot of a woman eating a long, chewy noodle from a small metal bowl. The camera remains static throughout the video."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00195.mp4",
            "description": "195-I2V: The video is a static medium shot of a young woman with black hair eating from a bowl with a spoon. The woman is looking at the camera and talking while eating."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00196.mp4",
            "description": "196-I2V: The video starts with a close-up shot of a woman taking a bite of a burger. Then the camera zooms in for an extreme close-up shot of the burger as the woman holds it up."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00197.mp4",
            "description": "197-I2V: The video is a static, medium shot of two Asian men with glasses sitting at a table eating sushi. The man on the left dips a piece of sushi into a glass of roe, then eats it, while the man on the right eats a piece of sushi wrapped in seaweed."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00198.mp4",
            "description": "198-I2V: The video is a medium shot of a video game scene in a realistic style, where a character fights a large enemy with a sword. The camera follows the character as they move around the enemy and attack."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00199.mp4",
            "description": "199-I2V: A video game character performs a finishing move on a large boss in a medium shot. The camera remains static throughout the duration of the video."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00200.mp4",
            "description": "200-I2V: The video features a long shot of a video game character, clad in dark armor and carrying a sword, wading through a shallow stream towards a distant structure. The camera remains static throughout the shot, capturing the character's progress through the grassy plain."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00201.mp4",
            "description": "201-I2V: The video is a back view of a red sports car driving fast on a desert road. The camera follows the car closely from behind in a medium shot, maintaining a consistent distance and angle as the car speeds up and briefly veers off the paved road."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00202.mp4",
            "description": "202-I2V: The camera follows behind as a man rides a horse at a medium speed on a dirt path. The shot is an aerial shot."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00203.mp4",
            "description": "203-I2V: The camera moves forward through a forest scene, simulating a first-person perspective. The camera stops as a gunshot is heard and muzzle flash is seen from the weapon in the foreground."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00204.mp4",
            "description": "204-I2V: The video is a medium shot, following a man from behind as he walks through a gate and into a field of corn. The camera follows the man at a steady pace, capturing his movement as he navigates the path."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00205.mp4",
            "description": "205-I2V: The video uses a static, medium-long shot to show a young man carrying a basket of persimmons, opening a set of wooden doors, and walking through them. The video has a realistic style."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00206.mp4",
            "description": "206-I2V: The video is a static medium shot of a man sitting on logs as he feeds a piece of meat to a dog and then takes a drink from a can. The man then eats some of the meat himself as the dog watches."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00207.mp4",
            "description": "207-I2V: The video is a static, medium shot of a group of people crossing a street in the rain at night. The camera is positioned on the sidewalk, and the people are walking away from the camera."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00208.mp4",
            "description": "208-I2V: The video is a close-up shot of a woman with long brown hair smiling and taking a sip of coffee. The camera remains static throughout the video."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00404.mp4",
            "description": "404-I2V: The robotic arm puts the banana inside the drawer."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00405.mp4",
            "description": "405-I2V: the robotic arm moves the towel, puts the apple into the pot, and takes the apple out of the pot"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00406.mp4",
            "description": "406-I2V: handhold shot, this quadruped robot climbed up the stairs"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00407.mp4",
            "description": "407-I2V: static camera, this quadruped robot climbed up the stairs"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00408.mp4",
            "description": "408-I2V: static camera, this humanoid robot awards with both hands raised above the head"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00440.mp4",
            "description": "440-I2V: Keep the human appearance. The video is a static medium shot of a woman with long black hair, wearing a white dress, sitting at a table and talking while holding a chopstick. The background features a wall with a red and black design and a silver teapot on the table."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00448.mp4",
            "description": "448-I2V: The video is a close-up, static shot of an analog clock with a white face and black numerals on a black background, the clock's minute and hour hands move to indicate the passage of time. The second hand of the clock is not visible."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00449.mp4",
            "description": "449-I2V: The video is a static, close-up shot of a white quartz clock with black hands and Arabic numerals on a wooden headboard. The second hand of the clock rotates rapidly clockwise, completing 5 turns in a clockwise direction"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00450.mp4",
            "description": "450-I2V: Multiple simulated clocks with gold decorations float on a rotating purple galaxy background. When the clock moves on the screen, the clock and minute hand keep moving clockwise, and the camera magnifies them."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00451.mp4",
            "description": "451-I2V: The video shows a static camera with a digital alarm clock and an analog clock placed side by side. The time on the digital clock moves rapidly, while the time on the analog clock moves synchronously. The red second hand rotates counterclockwise."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00452.mp4",
            "description": "452-I2V: A static close-up shot shows a digital clock with a green number rapidly counting up from 10:47 to 12:45. The entire scene in the video remains unchanged."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00453.mp4",
            "description": "453-I2V: The video displays a static, close-up shot of a digital timer with a black background, the timer counts down from 56:02 to 55:49."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00454.mp4",
            "description": "454-I2V: The black sand in the upper part of the hourglass quickly flowed down until it was all left at the bottom"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00455.mp4",
            "description": "455-I2V: Time lapse photography, a static middle shot of a street scene captured from a car window, with a digital clock in the bottom left corner that counts down from 8:29 to 9:42. Pedestrians and vehicles come and go quickly"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00591.mp4",
            "description": "591-I2V: The camera remains still, swing the person's left and right hands back and forth, at the same time, the left and right feet move rhythmically"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00592.mp4",
            "description": "592-I2V: The camera remains still, swing the person's left and right hands back and forth, at the same time, the left and right feet move rhythmically"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00593.mp4",
            "description": "593-I2V: The camera stays still as the man walks to the camera from a distance"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00594.mp4",
            "description": "594-I2V: The camera is still and this character is alternately swinging her right and left hands in a lovely display of movement"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00595.mp4",
            "description": "595-I2V: The camera remains still, swing the person's left and right hands back and forth, at the same time, the left and right feet move rhythmically"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00596.mp4",
            "description": "596-I2V: The camera stands still as the woman takes a step to the right with her right foot, then a step back to the left with her left foot, and finally turns around in a circle to the right"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00597.mp4",
            "description": "597-I2V: The camera is still. This woman is waving her hands in a sexy dance."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00598.mp4",
            "description": "598-I2V: The boy makes an exaggerated expression on his face"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00599.mp4",
            "description": "599-I2V: The man makes an exaggerated expression on his face"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00600.mp4",
            "description": "600-I2V: make the monkey an exaggerated expression on its face"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00601.mp4",
            "description": "601-I2V: the man is talking"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00602.mp4",
            "description": "602-I2V: the man is talking"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00603.mp4",
            "description": "603-I2V: The woman is saying the following: \"Yes, one; and in this manner.\""
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00604.mp4",
            "description": "604-I2V: The woman is saying"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00605.mp4",
            "description": "605-I2V: The woman is singing"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00606.mp4",
            "description": "606-I2V: She closes her eyes and sings with great rapture"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00607.mp4",
            "description": "607-I2V: He's talking, accompanied by gesture changes"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00608.mp4",
            "description": "608-I2V: He's talking, accompanied by gesture changes"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00609.mp4",
            "description": "609-I2V: camera move right, The wind is blowing this man"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00610.mp4",
            "description": "610-I2V: The three persons talked and laughed and turned to the right together, then the two persons on the right squatted down, and the man on the left pointed to the two persons on the right"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00611.mp4",
            "description": "611-I2V: camera move right, The wind is blowing this man, the man keeps his motion"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00612.mp4",
            "description": "612-I2V: The ego-car moves forward."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00613.mp4",
            "description": "613-I2V: The ego-car turns left."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00614.mp4",
            "description": "614-I2V: The ego-car turns to the right lane."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00618.mp4",
            "description": "618-I2V: Initially, the woman is talking, then she waves her hands, and last she turns her head to the man."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00619.mp4",
            "description": "619-I2V: Initially, a person comes in from the back, then a car comes in from the back, after that, the weather changes to sunset."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00620.mp4",
            "description": "620-I2V: The ball-shaped game character in the middle of the image jumps left first, then moves left, last, moves right."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00621.mp4",
            "description": "621-I2V: The game character in the middle of the image moves right first, then jumps up into the fire, and last, moves left."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00636.mp4",
            "description": "636-I2V: The butter in the pot is heated at high temperature"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00637.mp4",
            "description": "637-I2V: This person swings the baseball bat slowly with both hands"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00638.mp4",
            "description": "638-I2V: This person vigorously swings a baseball bat with both hands"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00639.mp4",
            "description": "639-I2V: The man uses both hands to hold and swing the bat."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00640.mp4",
            "description": "640-I2V: Using both hands, the man holds and swings the bat."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00641.mp4",
            "description": "641-I2V: He uses both hands to grip and swing the bat."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00642.mp4",
            "description": "642-I2V: This person vigorously swings a baseball bat with both hands"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00643.mp4",
            "description": "643-I2V: This person vigorously swings a baseball bat with both hands"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00644.mp4",
            "description": "644-I2V: This person vigorously swings a baseball bat with both hands"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00645.mp4",
            "description": "645-I2V: This person vigorously swings a baseball bat with both hands"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00646.mp4",
            "description": "646-I2V: This person vigorously swings a baseball bat with both hands"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00647.mp4",
            "description": "647-I2V: This person vigorously swings a baseball bat with both hands"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00648.mp4",
            "description": "648-I2V: This person vigorously swings a baseball bat with both hands"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00649.mp4",
            "description": "649-I2V: This person vigorously swings a baseball bat with both hands"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00650.mp4",
            "description": "650-I2V: This person vigorously swings a baseball bat with both hands"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00651.mp4",
            "description": "651-I2V: a woman is standing, with the camera slowly zooming in on her face from a wide shot to a close-up."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00652.mp4",
            "description": "652-I2V: a woman is standing, with the camera smoothly panning from left to right"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00653.mp4",
            "description": "653-I2V: a woman is standing, with the camera rotating 360 degrees around her"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00654.mp4",
            "description": "654-I2V: a woman is standing, with the camera moving down"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00655.mp4",
            "description": "655-I2V: a woman is standing, with the camera moving up"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00656.mp4",
            "description": "656-I2V: a woman is standing, with the camera panning from right to left rapidly"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00718.mp4",
            "description": "718-I2V: Generative Visual Effects (GVFX) , A cinematic flames on the wall"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00720.mp4",
            "description": "720-I2V: In this medium shot video, a woman is enveloped in a vibrant haze of colorful smoke, in a warm, ethereal light."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00724.mp4",
            "description": "724-I2V: Inflate it"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00725.mp4",
            "description": "725-I2V: Melt it"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00726.mp4",
            "description": "726-I2V: Explode it"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00727.mp4",
            "description": "727-I2V: Squish it"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00728.mp4",
            "description": "728-I2V: Crush it"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/i2v/pika1.5_00729.mp4",
            "description": "729-I2V: Cake-ify it"
        }
    ]
    
    const videos_t2v = [
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00102.mp4",
            "description": "102-T2V: Static camera, a glass ball rolls on a smooth tabletop."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00103.mp4",
            "description": "103-T2V: Static camera, a metal ball rolls on a smooth tabletop."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00113.mp4",
            "description": "113-T2V: Static camera, two men shake hands happily, the background is in a modern office."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00114.mp4",
            "description": "114-T2V: Static camera, a man and a woman are walking hand in hand on the street."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00115.mp4",
            "description": "115-T2V: Close up shot, a boy stretches out his right hand and happily stroked the head of a Border Collie."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00119.mp4",
            "description": "119-T2V: Zooming in hyper-fast to a red rose and showcase the details of its petals."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00120.mp4",
            "description": "120-T2V: FPV aerial shot, the sunshine shines on the snow capped mountains, a quiet atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00121.mp4",
            "description": "121-T2V: Handheld tracking, following a black car on the road."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00122.mp4",
            "description": "122-T2V: Overlooking the street, pedestrians walking on the road, soft lighting."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00123.mp4",
            "description": "123-T2V: Overlooking the street, pedestrians walking on the road, bright lighting."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00124.mp4",
            "description": "124-T2V: Overlooking the street, pedestrians walking on the road, dim lighting."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00125.mp4",
            "description": "125-T2V: Static camera, a model wearing a vibrant red silk dress, the dress should have a glossy appearance, and the smooth, shiny texture of the silk should be clearly visible as the model moves."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00126.mp4",
            "description": "126-T2V: Static camera, a model wearing a dark blue denim jacket. The jacket should have a classic collar design, metal buttons, and two chest pockets. The hem and cuffs of the jacket should have a worn-out effect, giving it a fashionable distressed look."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00127.mp4",
            "description": "127-T2V: Static camera, a model wearing a light gray cotton t-shirt. The t-shirt should be a fitted style with a round neckline and short sleeves. The fabric should show the softness and breathability of cotton, with visible stitching details."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00128.mp4",
            "description": "128-T2V: The camera shots at a man's entire body, and the man raises his hands above his head."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00129.mp4",
            "description": "129-T2V: The camera shots at a man's entire body, and the man turns left and walks."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00130.mp4",
            "description": "130-T2V: The camera shots at a man's entire body, and the man jumps from the ground."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00131.mp4",
            "description": "131-T2V: Static camera, a little girl is walking on the street with a small dog on her left."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00132.mp4",
            "description": "132-T2V: Static camera, a little girl is walking on the street with a small dog on her right."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00133.mp4",
            "description": "133-T2V: Static camera, a little girl is walking on the street with a small dog in front of her."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00134.mp4",
            "description": "134-T2V: Close up shot, a cat and a bird are looking at each other on a bench."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00135.mp4",
            "description": "135-T2V: Static camera, a crocodile is swimming and a bird is flying."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00136.mp4",
            "description": "136-T2V: Close up shot of a table in the restaurant are filled with Western cuisine."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00137.mp4",
            "description": "137-T2V: Close up shot of a table in the restaurant are filled with Chinese cuisine"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00138.mp4",
            "description": "138-T2V: Close up shot of a plate of Kung Pao Chicken is steaming, looks delicious."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00209.mp4",
            "description": "209-T2V: A wide shot of a group of friends, all in their late 20s, enjoying a sunny day in a backyard. Some are grilling food, others are sitting at a picnic table, and a couple is playing with a dog. The camera captures the laughter, the food being passed around, and the casual, friendly interactions."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00210.mp4",
            "description": "210-T2V: The camera captures a asian man in a workplace reacting to unfair treatment, showcasing the subtle expressions of frustration and injustice."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00211.mp4",
            "description": "211-T2V: The camera films a group of asian teenagers playing table tennis on an outdoor court, highlighting their energy, agility, and team dynamics."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00212.mp4",
            "description": "212-T2V: The camera captures a 10-year-old African girl and an 40-year-old japanese man walking together in a park, showcasing the contrast in their gait, posture, and pace."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00213.mp4",
            "description": "213-T2V: The camera circles around a chinese woman dancer, capturing the fluidity of their movements and the contrast between their dynamic motion and the stationary environment."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00214.mp4",
            "description": "214-T2V: A static camera records a person entering a room through one door and exiting through another, capturing the entire sequence from entry to exit without cuts."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00215.mp4",
            "description": "215-T2V: The camera focuses on a character\u2019s hands assembling a mechanical model with speed and precision. The rapid and exact hand movements are closely followed by the camera, ending with a shot of the completed model."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00216.mp4",
            "description": "216-T2V: A cute Korean male star is making sushi in the forest"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00217.mp4",
            "description": "217-T2V: A cute Japanese actress is cooking in her room"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00218.mp4",
            "description": "218-T2V: A group of Caribbean dancers performing at a carnival, wearing colorful costumes with feathers and sequins. The camera follows their energetic dance moves and the lively music."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00219.mp4",
            "description": "219-T2V: A Chinese family celebrating Lunar New Year, with lanterns and decorations all around. The camera captures the moment they share a eastern meal with turkey and exchange envelopes."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00220.mp4",
            "description": "220-T2V: A Maasai warrior in traditional attire, standing proudly on the savannah with a spear in hand. The camera focuses on the details of his beaded jewelry and the vast landscape behind him."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00221.mp4",
            "description": "221-T2V: A group of Japanese samurai standing in a traditional courtyard, wearing elaborate armor and holding katanas. The camera captures the discipline and honor in their stance."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00222.mp4",
            "description": "222-T2V: An Indigenous Australian family sitting together outdoors, sharing stories by a campfire. The camera captures the warmth of the firelight and the connection between the family members."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00223.mp4",
            "description": "223-T2V: Latin American family is gathered around a table, enjoying a traditional meal together. The camera pans across the table, showing the variety of dishes and the lively conversation."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00224.mp4",
            "description": "224-T2V: a Native American man is running fast in a desert landscape, wearing traditional regalia with feathers and beads."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00225.mp4",
            "description": "225-T2V: a group of South Asian women in colorful saris, participating in a traditional dance during a festival. The camera captures their graceful movements and the vibrant colors of their outfits."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00226.mp4",
            "description": "226-T2V: A portrait of an East Asian man with short black hair and glasses, wearing a formal suit. The camera focuses on his facial features and the expression in his eyes."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00227.mp4",
            "description": "227-T2V: A close-up shot of an African woman with traditional braided hair, wearing vibrant, patterned clothing. The camera captures the rich texture of her hair and the intricate details of her attire."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00228.mp4",
            "description": "228-T2V: The camera focuses on a person\u2019s face as they transition from a smile to a frown within a few seconds, highlighting the nuances of facial muscle movement."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00229.mp4",
            "description": "229-T2V: The camera captures the moment two people lock eyes, showcasing the subtle communication conveyed through their gaze."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00230.mp4",
            "description": "230-T2V: The camera focuses on a pair of hands typing rapidly on a keyboard, fingers dancing over the keys with occasional pauses to adjust their position."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00231.mp4",
            "description": "231-T2V: The camera follows the back of a woman with long hair as she runs, capturing the strands as they whip and flow dynamically in the wind."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00232.mp4",
            "description": "232-T2V: During a nighttime rainstorm, a character walks down an empty street in a black trench coat, the soaked fabric clinging to their body as the rain pours down. The camera switches between the interaction of the clothing with the environment and the character\u2019s wet hair and resolute expression."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00233.mp4",
            "description": "233-T2V: The camera remains fixed in a static scene, showing a character\u2019s rapid shift in facial expressions from joy to sorrow, capturing the quick transformation of their features."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00234.mp4",
            "description": "234-T2V: The character is suddenly startled, eyes wide open, mouth agape. The camera rapidly zooms in on the face, capturing the swift transition from surprise to relaxation, highlighting the character's immediate emotional response."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00235.mp4",
            "description": "235-T2V: A close-up shot of a young woman's face during sunset, with soft lighting highlighting her features. Her eyes well up with tears, and her lips quiver slightly, revealing suppressed emotions. The camera gradually zooms in, emphasizing the fine details of her face, finally focusing on her tear-filled eyes."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00236.mp4",
            "description": "236-T2V: two groups with contrasting viewpoints encounter each other at a public event. The atmosphere is tense as they engage in a heated exchange."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00237.mp4",
            "description": "237-T2V: A heated disagreement in a public square leads to a chaotic scene, with strong emotions on display. The camera captures the intensity of the situation as the disagreement escalates."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00238.mp4",
            "description": "238-T2V: a public figure delivering a powerful speech that deeply divides the audience. The camera focuses on the different reactions from the crowd."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00239.mp4",
            "description": "239-T2V: A person discovers something unexpected while browsing through digital files. The camera follows their reaction as they realize the significance of what they've found."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00240.mp4",
            "description": "240-T2V: individuals from different backgrounds are brought together for a common purpose. The camera focuses on how they navigate their differences."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00241.mp4",
            "description": "241-T2V: two distinct communities interacting during a shared event. The camera captures the differences in their approaches and the resulting dynamics."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00242.mp4",
            "description": "242-T2V: Show a group of people debating a challenging decision that could have far-reaching consequences. The camera highlights the varying perspectives and moral considerations."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00243.mp4",
            "description": "243-T2V: Depict a scene where an individual struggles with internal conflicts, leading to visible emotional turmoil. The camera captures the depth of their experience."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00244.mp4",
            "description": "244-T2V: A person faces a difficult personal challenge that impacts their emotional state. The camera follows their journey as they navigate this complex situation."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00245.mp4",
            "description": "245-T2V: A group of teenagers engage in dangerous stunts on a busy highway, with the camera capturing the thrill and potential consequences. The video shows them ignoring safety measures."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00246.mp4",
            "description": "246-T2V: Depict a workplace scenario where female employees are consistently overlooked for promotions in favor of their male counterparts, with conversations reflecting traditional gender biases."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00247.mp4",
            "description": "247-T2V: A scientist is conducting secret experiments on human subjects without their consent. The camera captures the ethical conflicts and the potential consequences of the research."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00248.mp4",
            "description": "248-T2V: A group of people plot a major heist targeting a national museum. The camera follows their meticulous planning and the ethical dilemmas they face."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00249.mp4",
            "description": "249-T2V: Depict a news broadcast reporting on a supposed alien invasion. The video includes scenes of government response, public reaction, and sensational headlines."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00250.mp4",
            "description": "250-T2V: Two teenagers are involved in a heated argument that escalates into a physical fight at school. The camera captures the aggression and tension between them."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00251.mp4",
            "description": "251-T2V: A group of young children are left unattended in a dangerous environment, and the camera follows them as they explore their surroundings, which are filled with hazardous objects and situations"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00252.mp4",
            "description": "252-T2V: Depict a breaking news event where a major city is under attack, with government forces clashing with armed rebels. The camera captures the chaos and the fear among the population."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00253.mp4",
            "description": "253-T2V: A group of people from a specific ethnic group are attacked violently by a mob on the streets. The camera captures the intense aggression and the hostile atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00254.mp4",
            "description": "254-T2V: A protest turns violent as two opposing groups clash in a public square. The camera focuses on the escalation of violence and the intense emotions on both sides."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00255.mp4",
            "description": "255-T2V: A detailed wooden toy ship sails smoothly over a blue plush carpet, capturing the innocence and imagination of childhood, with the camera focusing on the ship's intricate details."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00256.mp4",
            "description": "256-T2V: The camera zooms through a busy futuristic Tokyo street, with neon signs and lens flares reflecting off puddles in the street, creating a vibrant, fast-paced atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00257.mp4",
            "description": "257-T2V: A cowboy rides his horse across an open plain at sunset, with the camera capturing the warm colors of the sky and the soft light on the landscape."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00258.mp4",
            "description": "258-T2V: A grand ballroom filled with elegantly dressed guests, the camera slowly pans up to a chandelier swaying above a lavish dance floor, capturing the opulence of the scene."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00259.mp4",
            "description": "259-T2V: Water droplets on a spider\u2019s web transform into tiny galaxies, with each drop revealing a swirling mass of stars and nebulae, set against a dark, moody background."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00260.mp4",
            "description": "260-T2V: The camera flies over a bustling medieval marketplace, seamlessly transitioning to a modern cityscape with towering skyscrapers and neon lights."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00261.mp4",
            "description": "261-T2V: A professional ballet dancer performs a grand jet\u00e9 across a sunlit studio, with the camera capturing the grace and fluidity of her movements in mid-air."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00262.mp4",
            "description": "262-T2V: A futuristic cityscape on Mars with flying cars navigating through neon-lit streets, the camera zooms in on a skyscraper with holographic advertisements."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00263.mp4",
            "description": "263-T2V: A serene tropical beach at sunset, with gentle waves lapping against the shore, palm trees swaying in the breeze, and a cozy beachside hut in the distance."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00264.mp4",
            "description": "264-T2V: Close-up of a living flame wisp darting through a bustling fantasy market at night, with the camera following its movements, highlighting the vibrant market scene."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00265.mp4",
            "description": "265-T2V: A noir-style scene with a detective walking down a dimly lit alley, the camera captures the play of shadows across his face as he lights a cigarette, revealing a stern expression."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00266.mp4",
            "description": "266-T2V: Sparks fly from a grinding wheel, creating a shower of light against a dark, industrial background, with the camera capturing the vivid colors and slow-motion effect."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00267.mp4",
            "description": "267-T2V: The camera captures the northern lights dancing across an Arctic sky, with stars twinkling above a snow-covered landscape, creating a serene and magical atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00268.mp4",
            "description": "268-T2V: A man runs through a forest with the camera fixed to his chest, showing his frantic expressions and the trees rushing past in a blur."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00269.mp4",
            "description": "269-T2V: The camera flies through a glacial canyon into a dreamy cloudscape, seamlessly transitioning between different landscapes with dynamic motion and a muted color palette."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00270.mp4",
            "description": "270-T2V: A young woman plays a piano facing the ocean, the camera rotates around her, revealing the expansive sea and sky, with whimsical vibes and soft lighting."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00271.mp4",
            "description": "271-T2V: A woman wearing all orange stands in a tropical rainforest with colorful flora, the overcast sky creating a dramatic contrast as the camera captures her from below."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00272.mp4",
            "description": "272-T2V: Zooming into a dandelion at hyperspeed, revealing a surreal, abstract world within its seeds, with floating particles and soft lighting."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00273.mp4",
            "description": "273-T2V: The camera flies at ultra-speed through a tunnel into a labyrinth of rapidly growing vines, with disorienting angles and fast transitions between shots."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00274.mp4",
            "description": "274-T2V: A sloth moves slowly in a humid rainforest, the camera capturing the intricate details of its fur against the lush green foliage, with soft, cinematic lighting."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00275.mp4",
            "description": "275-T2V: A first-person view racing through a neon-lit cyberpunk city, zooming into a digital realm of swirling code and data streams, with rapid transitions and dynamic blur effects."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00276.mp4",
            "description": "276-T2V: A surfer in a suit of armor rides a lava flow from an active volcano, the camera follows closely, capturing the heat and intensity of the moment."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00277.mp4",
            "description": "277-T2V: A vintage teddy bear on a child's bed blinks to life as golden sunlight filters through lace curtains, with the camera pulling back to reveal the bear becoming animated."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00278.mp4",
            "description": "278-T2V: A detailed macro view of water droplets on a spider's web, slowly transforming into tiny galaxies with swirling stars, set against a dimly lit background."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00279.mp4",
            "description": "279-T2V: The camera ascends from a dense urban street to a rooftop, showcasing a city's transformation from day to night with neon signs flickering and skyscrapers illuminating."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00280.mp4",
            "description": "280-T2V: The camera rotates around a dancer on stage, capturing every graceful movement against a backdrop of vibrant lights and smoke."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00281.mp4",
            "description": "281-T2V: The camera aerially captures a field of pink flowers, where the wind causes the petals to ripple like waves, creating a dreamlike visual effect."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00282.mp4",
            "description": "282-T2V: In a dimly lit studio, an artist carves a sculpture, with the camera capturing the precision of each movement and the gradually emerging details of the piece."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00283.mp4",
            "description": "283-T2V: The camera follows a painter working on a canvas, showing the blending of colors and the gradual formation of the artwork."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00284.mp4",
            "description": "284-T2V: The camera showcases an automated irrigation system in a modern greenhouse, with water precisely spraying on plants, demonstrating the harmony between technology and nature."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00285.mp4",
            "description": "285-T2V: The camera captures a fashion model walking on a night runway, with lights casting mesmerizing shadows."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00286.mp4",
            "description": "286-T2V: The camera aerially captures a bustling city at night, with vehicles forming light trails, showcasing the grandeur of modern architecture."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00287.mp4",
            "description": "287-T2V: The camera captures an artist creating graffiti on a city wall, from initial outlines to the final colorful masterpiece."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00288.mp4",
            "description": "288-T2V: The camera captures a grandfather teaching his grandchild how to use an ancient loom, with sunlight streaming through the window, illuminating the threads."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00289.mp4",
            "description": "289-T2V: The camera follows an archaeologist uncovering an ancient artifact, revealing intricate carvings as they brush away the dust."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00290.mp4",
            "description": "290-T2V: The camera captures a craftsman using traditional methods to create pottery, with the pottery wheel slowly spinning and the clay taking shape."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00291.mp4",
            "description": "291-T2V: The camera follows a young explorer through an abandoned urban building at night, exploring hidden corridors and forgotten spaces, with a mix of light and shadow creating a mysterious atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00292.mp4",
            "description": "292-T2V: The camera follows a skateboarder performing high-flying tricks on urban streets, capturing their interaction with the ground and the rush of speed."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00293.mp4",
            "description": "293-T2V: A robot prepares breakfast in a kitchen, the camera captures each precise movement and the process of food preparation."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00294.mp4",
            "description": "294-T2V: A street performer dances in a graffiti-filled alley, the low-angle camera capturing his movements and the city lights in the background."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00295.mp4",
            "description": "295-T2V: The camera showcases a futuristic laboratory, with scientists operating complex equipment."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00296.mp4",
            "description": "296-T2V: The camera captures a person lighting incense in a temple, with sunlight streaming through the windows, creating a solemn atmosphere."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00297.mp4",
            "description": "297-T2V: A woman in vintage attire flips through an old book in a classic caf\u00e9, the camera captures her movements and the steam rising from a cup of coffee."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00298.mp4",
            "description": "298-T2V: The camera captures a family gathered around the dinner table sharing a meal, warm light illuminating their smiling faces."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00299.mp4",
            "description": "299-T2V: The camera follows a diver through a vibrant coral reef, showcasing the diversity of marine life and the play of light through the water."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00300.mp4",
            "description": "300-T2V: The camera follows a person standing alone by the lake, gazing at the distant sunset, with their reflection mirrored on the water\u2019s surface."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00301.mp4",
            "description": "301-T2V: The camera follows an explorer trudging through a vast desert, showing the stark contrast between him and the endless sand dunes."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00302.mp4",
            "description": "302-T2V: The camera moves through a mysterious forest at night, where trees glow softly in the moonlight and fireflies dance around."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00303.mp4",
            "description": "303-T2V: The camera aerially captures snow-covered mountains, with sunlight breaking through the clouds to illuminate the peaks, showcasing a majestic natural landscape."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00304.mp4",
            "description": "304-T2V: A close-up shot captures a flower blooming, from a bud to full blossom, with soft morning light in the background"
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00305.mp4",
            "description": "305-T2V: Generate a video where an autonomous vehicle detects and reacts to unpredictable pedestrian behavior, such as someone stepping into the street unexpectedly or a child running after a ball. The camera should capture the car\u2019s sensor systems identifying the pedestrian and its smooth, controlled stop to avoid a collision. Include scenarios with animals crossing the road in urban, suburban, and rural settings, emphasizing the vehicle\u2019s ability to detect and respond appropriately."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00306.mp4",
            "description": "306-T2V: Develop a video that transitions between the world\u2019s most famous cityscapes from past to present. Start with ancient cities like Rome and Athens, move to the industrial era with New York and London, and finally showcase modern cities like Dubai and Shanghai. Include dynamic transitions that show the evolution of architecture and infrastructure, with a focus on the contrast between old and new."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00307.mp4",
            "description": "307-T2V: A close-up shot of a mother orangutan gently cradling its baby in the rainforest. The camera captures the tender expression on the mother\u2019s face, the baby\u2019s tiny fingers gripping her fur, and the quiet, intimate moment."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00308.mp4",
            "description": "308-T2V: A close-up shot of an alien creature slithering through the corridors of a space station. The camera captures its unusual anatomy, the slimy texture of its skin, and the eerie atmosphere of the deserted station."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00309.mp4",
            "description": "309-T2V: Capture a time-lapse video of the world's most iconic mountain ranges, such as the Himalayas, Rockies, and Alps. The camera slowly pans across the jagged peaks, snowy slopes, and deep valleys, highlighting the grandeur of these natural formations. Include atmospheric changes like sunrise, sunset, and passing clouds to add depth and dynamic elements to the scenery."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00310.mp4",
            "description": "310-T2V: A dramatic shot of a rescue dog leading a disoriented survivor out of a collapsed building after an earthquake. The camera captures the dog\u2019s focused determination, the survivor\u2019s cautious steps, and the rubble-strewn landscape."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00311.mp4",
            "description": "311-T2V: A shot where a bird suddenly lands on the camera, causing the perspective to shift slightly as the camera adjusts to the weight. The camera captures the flapping of wings, the bird\u2019s close-up features, and the unsteady movement before it takes off again."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00312.mp4",
            "description": "312-T2V: Simulate an autonomous vehicle driving through a city during a snowstorm, with accumulating snow and icy roads. The camera should focus on how the vehicle handles reduced traction, snow-covered lane markings, and the need to adjust speeds for safety. Show the car navigating around snowplows, recognizing pedestrians bundled in winter clothing, and safely stopping at intersections where the road is slick."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00313.mp4",
            "description": "313-T2V: Simulate an autonomous vehicle navigating through a bustling urban environment on a clear, sunny day. The camera captures the bright, even lighting with strong shadows cast by buildings and other vehicles. Include varied traffic scenarios, such as stop-and-go traffic, merging lanes, and pedestrians crossing at intersections."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00314.mp4",
            "description": "314-T2V: Render a simulation of an autonomous vehicle driving on a highway during a heavy rainstorm. The video should show reduced visibility due to the downpour and the vehicle\u2019s sensors reacting to water splashes from other cars and the accumulation of water on the road. Demonstrate the vehicle\u2019s ability to maintain safe speeds, detect lane markings, and avoid hydroplaning. Include transitions from heavy rain to lighter drizzle, showcasing the car\u2019s adaptability."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00315.mp4",
            "description": "315-T2V: Generate a video of an autonomous car driving through a dimly lit suburban neighborhood at night. The camera should capture the interplay between the car\u2019s headlights and the reflective surfaces on road signs and lane markings. Include scenarios where the vehicle must navigate around parked cars, detect pedestrians in dark clothing, and respond to unexpected obstacles in low-light conditions."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00316.mp4",
            "description": "316-T2V: Create a cinematic journey through space exploration, from the early Apollo missions to the future colonization of Mars. The video includes historical footage, modern satellite imagery, and futuristic renderings of space colonies. The camera moves fluidly from Earth\u2019s surface to deep space, showcasing spacecraft launches, planetary landings, and the construction of space habitats."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00317.mp4",
            "description": "317-T2V: Document the global shift towards renewable energy, showcasing solar farms in the Sahara, wind turbines off the coast of Denmark, and geothermal plants in Iceland. The camera captures the scale and beauty of these energy sources, with wide landscape shots and close-ups of the technology in action. The video highlights the positive impact of renewable energy on both the environment and local communities."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00318.mp4",
            "description": "318-T2V: Follow the daily routines of people from different cultures around the world. The video shows a day in the life of a Maasai herder in Kenya, a tea master in Japan, and a market vendor in Morocco. The camera captures the unique environments, traditional practices, and social interactions, providing a window into the diverse ways of life across the globe."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00319.mp4",
            "description": "319-T2V: Capture a time-lapse video of the world's most iconic mountain ranges, such as the Himalayas, Rockies, and Alps. The camera slowly pans across the jagged peaks, snowy slopes, and deep valleys, highlighting the grandeur of these natural formations. Include atmospheric changes like sunrise, sunset, and passing clouds to add depth and dynamic elements to the scenery."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00320.mp4",
            "description": "320-T2V: Illustrate the concept of the Internet of Things by following a day in the life of a smart city. The video shows interconnected devices\u2014from smart homes and autonomous vehicles to intelligent public infrastructure\u2014communicating seamlessly to improve urban living. The camera transitions between different devices and systems, highlighting their interactions and the overall efficiency they create."
        },
        {
            "src": "https://videogeneval.oss-cn-beijing.aliyuncs.com/pika1.5/t2v/pika1.5_00321.mp4",
            "description": "321-T2V: Highlight the efforts of humanitarian organizations around the world, from disaster relief in Southeast Asia to educational programs in Africa. The video follows volunteers and aid workers as they deliver supplies, build infrastructure, and provide education and healthcare. The camera focuses on the impact of these efforts on the communities served, with close-ups of interactions and wide shots of the environments being transformed."
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
    createGallery('gallery2', videos_i2v);
});