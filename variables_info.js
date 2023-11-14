let variables_info
let building = ['Exemplars/building/aqueduct_exemplar1.jpg','Exemplars/building/arch_exemplar1.jpg', 'Exemplars/building/skyscraper_exemplar1.jpg',
    'Exemplars/building/barn_exemplar1.jpg','Exemplars/building/building_exemplar1.jpg','Exemplars/building/fire_station_exemplar1.jpg',
    'Exemplars/building/cabin_exemplar1.jpg','Exemplars/building/castle_exemplar1.jpg','Exemplars/building/church_exemplar1.jpg',
    'Exemplars/building/dome_exemplar1.jpg', 'Exemplars/building/house_exemplar1.jpg', 'Exemplars/building/hut_exemplar1.jpg',
    'Exemplars/building/mosque_exemplar1.jpg', 'Exemplars/building/office_building_exemplar1.jpg', 'Exemplars/building/pagoda_exemplar1.jpg',
    'Exemplars/building/windmill_exemplar1.jpg'];
let fruit = ['Exemplars/fruits/apple_exemplar1.jpg', 'Exemplars/fruits/banana_exemplar1.jpg', 'Exemplars/fruits/blueberry_exemplar1.jpg',
    'Exemplars/fruits/cantaloupe_exemplar1.jpg', 'Exemplars/fruits/cherry_exemplar1.jpg', 'Exemplars/fruits/cranberry_exemplar1.jpg',
    'Exemplars/fruits/grape_exemplar1.jpg', 'Exemplars/fruits/grapefruit_exemplar1.jpg', 'Exemplars/fruits/kiwi_exemplar1.jpg',
    'Exemplars/fruits/lemon_exemplar1.jpg','Exemplars/fruits/watermelon_exemplar1.jpg', 'Exemplars/fruits/strawberry_exemplar1.jpg',
    'Exemplars/fruits/pear_exemplar1.jpg', 'Exemplars/fruits/peach_exemplar1.jpg', 'Exemplars/fruits/orange_exemplar1.jpg',
    'Exemplars/fruits/mango_exemplar1.jpg'];
let mammal = [ 'Exemplars/mammal/antelope_exemplar1.jpg', 'Exemplars/mammal/baboon_exemplar1.jpg','Exemplars/mammal/basset_hound_exemplar1.jpg',
    'Exemplars/mammal/bloodhound_exemplar1.jpg','Exemplars/mammal/boar_exemplar1.jpg','Exemplars/mammal/buffalo_exemplar1.jpg',
    'Exemplars/mammal/bull_exemplar1.jpg','Exemplars/mammal/wolf_exemplar1.jpg','Exemplars/mammal/camel_exemplar1.jpg',
    'Exemplars/mammal/cheetah_exemplar1.jpg','Exemplars/mammal/chinchilla_exemplar1.jpg','Exemplars/mammal/cougar_exemplar1.jpg',
    'Exemplars/mammal/cow_exemplar1.jpg','Exemplars/mammal/dalmatian_exemplar1.jpg','Exemplars/mammal/deer_exemplar1.jpg',
    'Exemplars/mammal/elephant_exemplar1.jpg'];
let music = [ 'Exemplars/musical instruments/accordion_exemplar1.jpg', 'Exemplars/musical instruments/acoustic_guitar_exemplar1.jpg', 'Exemplars/musical instruments/banjo_exemplar1.jpg',
    'Exemplars/musical instruments/bassoon_exemplar1.jpg','Exemplars/musical instruments/cello_exemplar1.jpg','Exemplars/musical instruments/drum_exemplar1.jpg',
    'Exemplars/musical instruments/electric_guitar_exemplar1.jpg','Exemplars/musical instruments/harmonica_exemplar1.jpg','Exemplars/musical instruments/harp_exemplar1.jpg',
    'Exemplars/musical instruments/mandolin_exemplar1.jpg','Exemplars/musical instruments/musical_keyboard_exemplar1.jpg','Exemplars/musical instruments/piano_exemplar1.jpg',
    'Exemplars/musical instruments/saxophone_exemplar1.jpg','Exemplars/musical instruments/tambourine_exemplar1.jpg','Exemplars/musical instruments/violin_exemplar1.jpg',
    'Exemplars/musical instruments/drum_set_exemplar1.jpg'];
let sea = ['Exemplars/sea creatures/cinnamon_bun_exemplar1.jpg','Exemplars/sea creatures/clam_exemplar1.jpg','Exemplars/sea creatures/conch_exemplar1.jpg',
    'Exemplars/sea creatures/crab_exemplar1.jpg','Exemplars/sea creatures/crayfish_exemplar1.jpg','Exemplars/sea creatures/dolphin_exemplar1.jpg',
    'Exemplars/sea creatures/fish_exemplar1.jpg','Exemplars/sea creatures/horseshoe_crab_exemplar1.jpg','Exemplars/sea creatures/lobster_exemplar1.jpg',
    'Exemplars/sea creatures/octopus_exemplar1.jpg','Exemplars/sea creatures/oyster_exemplar1.jpg','Exemplars/sea creatures/salmon_exemplar1.jpg',
    'Exemplars/sea creatures/seahorse_exemplar1.jpg','Exemplars/sea creatures/seashell_exemplar1.jpg','Exemplars/sea creatures/shark_exemplar1.jpg',
    'Exemplars/sea creatures/starfish_exemplar1.jpg'];
let sport = ['Exemplars/Sports/badminton_racquet_exemplar1.jpg', 'Exemplars/Sports/baseball_bat_exemplar1.jpg', 'Exemplars/Sports/baseball_exemplar1.jpg',
    'Exemplars/Sports/basketball_exemplar1.jpg','Exemplars/Sports/boomerang_exemplar1.jpg','Exemplars/Sports/bowling_pins_exemplar1.jpg',
    'Exemplars/Sports/dumbbell_exemplar1.jpg', 'Exemplars/Sports/football_exemplar1.jpg','Exemplars/Sports/golf_ball_exemplar1.jpg',
    'Exemplars/Sports/pool_ball_exemplar1.jpg','Exemplars/Sports/rollerblade_exemplar1.jpg','Exemplars/Sports/shuttlecock_exemplar1.jpg',
    'Exemplars/Sports/ski_exemplar1.jpg','Exemplars/Sports/soccerball_exemplar1.jpg','Exemplars/Sports/surfboard_exemplar1.jpg','Exemplars/Sports/tennis_ball_exemplar1.jpg',
    'Exemplars/Sports/weight_bench_exemplar1.jpg'];
let vegetable = [ 'Exemplars/vegetables/asparagus_exemplar1.jpg', 'Exemplars/vegetables/broccoli_exemplar1.jpg', 'Exemplars/vegetables/carrot_exemplar1.jpg',
    'Exemplars/vegetables/cauliflower_exemplar1.jpg', 'Exemplars/vegetables/celery_exemplar1.jpg','Exemplars/vegetables/eggplant_exemplar1.jpg',
    'Exemplars/vegetables/lettuce_exemplar1.jpg', 'Exemplars/vegetables/okra_exemplar1.jpg', 'Exemplars/vegetables/onion_exemplar1.jpg',
    'Exemplars/vegetables/pea_exemplar1.jpg', 'Exemplars/vegetables/pumpkin_exemplar1.jpg','Exemplars/vegetables/snow_peas_exemplar1.jpg',
    'Exemplars/vegetables/spinach_exemplar1.jpg','Exemplars/vegetables/squash_exemplar1.jpg','Exemplars/vegetables/zucchini_exemplar1.jpg',
    'Exemplars/vegetables/leek_exemplar1.jpg'];
let vehicle = ['Exemplars/vehicles/ambulance_exemplar1.jpg','Exemplars/vehicles/armored_personnel_vehicle_exemplar1.jpg','Exemplars/vehicles/atv_exemplar1.jpg',
    'Exemplars/vehicles/car_exemplar1.jpg','Exemplars/vehicles/compact_car_exemplar1.jpg','Exemplars/vehicles/hearse_exemplar1.jpg',
    'Exemplars/vehicles/jeep_exemplar1.jpg','Exemplars/vehicles/minivan_exemplar1.jpg', 'Exemplars/vehicles/pickup_truck_exemplar1.jpg',
    'Exemplars/vehicles/police_car_exemplar1.jpg', 'Exemplars/vehicles/racecar_exemplar1.jpg','Exemplars/vehicles/schoolbus_exemplar1.jpg',
    'Exemplars/vehicles/sedan_exemplar1.jpg','Exemplars/vehicles/taxi_exemplar1.jpg','Exemplars/vehicles/truck_exemplar1.jpg',
    'Exemplars/vehicles/van_exemplar1.jpg'];
let furniture =['Exemplars/furniture/armchair_exemplar1.jpg','Exemplars/furniture/bookcase_exemplar1.jpg',
    'Exemplars/furniture/cabinet_exemplar1.jpg','Exemplars/furniture/chair_exemplar1.jpg'];
let hat =['Exemplars/hat/beanie_exemplar1.jpg','Exemplars/hat/beret_exemplar1.jpg','Exemplars/hat/tophat_exemplar1.jpg',
'Exemplars/hat/womens_hat_exemplar1.jpg'];
let holiday =['Exemplars/holiday/christmas_lightbulb_exemplar1.jpg','Exemplars/holiday/christmas_stocking_exemplar1.jpg','Exemplars/holiday/ornament_exemplar1.jpg',
'Exemplars/holiday/reindeer_toy_exemplar1.jpg'];
let toys =['Exemplars/toys/rockinghorse_exemplar1.jpg','Exemplars/toys/rubber_duck_exemplar1.jpg','Exemplars/toys/slinky_exemplar1.jpg',
'Exemplars/toys/teddybear_exemplar1.jpg'];
function pickObjects(array) {
    // Copy the original array to avoid mutating it
    let copyArray = [...array];

    // Randomly pick one object
    let firstPickIndex = Math.floor(Math.random() * copyArray.length);
    let p1 = copyArray[firstPickIndex];

    // Remove the first picked object from the array
    copyArray.splice(firstPickIndex, 1);

    // Randomly pick another 6 objects
    let p3 = [];
    for (let i = 0; i < 6; i++) {
        let pickIndex = Math.floor(Math.random() * copyArray.length);
        p3.push(copyArray[pickIndex]);
        copyArray.splice(pickIndex, 1);
    }

    // The rest of the objects left unpicked
    let p4 = copyArray;

    return { p1, p3, p4 };
}
function processNestedArray(nestedArray) {
    let result = [];
    for (let i = 0; i < nestedArray.length; i++) {
        let subArrayResult = pickObjects(nestedArray[i]);
        result.push(subArrayResult);
    }
    return result;
};
function shuffle(array) {
    //shuffle picture arrays//
    let currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}
let exp = [building,fruit,mammal, music, sea, sport,  vegetable, vehicle];
let mem =[furniture,hat,holiday,toys];
let names = ['building', 'fruit', 'mammal', 'music','sea', 'sport', 'vegetable', 'vehicle'];
result = processNestedArray(exp);
let inm = [0, 1, 2, 3, 4, 5, 6, 7];
let num = shuffle(inm);
//console.log(numbers);
//console.log(result);
//let arr = result[0];
//console.log(arr.p1);
let img = [];
let novel = [];
let test = [];
for (let i = 0; i < 8; ++i) {
    img[i] = result[num[i]].p1;
    novel[i] = result[i].p3;
    test[i] = result[i].p4;
}



 variables_info = [{
    image1: img[0] ,
    image2: img[1] ,
    combo: 'combo1',
     category1:names[num[0]] ,
     category2:names[num[1]] ,
     index1:num[0],
     index2:num[1],
}, {
    image1: img[2] ,
    image2: img[3] ,
    combo: 'combo2',
     category1:names[num[2]] ,
     category2:names[num[3]] ,
     index1:num[2],
     index2:num[3],

}, {
     image1: img[4] ,
     image2: img[5] ,
     combo:'combo3',
     category1:names[num[4]] ,
     category2:names[num[5]] ,
     index1:num[4],
     index2:num[5],


 }, {
     image1: img[6] ,
     image2: img[7] ,
     combo: 'combo4',
     category1:names[num[6]] ,
     category2:names[num[7]] ,
     index1:num[6],
     index2:num[7],

 }];