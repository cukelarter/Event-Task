/****************** 
 * Eventtask Test *
 ******************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'EventTask';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(standardizingRTsRoutineBegin());
flowScheduler.add(standardizingRTsRoutineEachFrame());
flowScheduler.add(standardizingRTsRoutineEnd());
const stdRT_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(stdRT_trialsLoopBegin, stdRT_trialsLoopScheduler);
flowScheduler.add(stdRT_trialsLoopScheduler);
flowScheduler.add(stdRT_trialsLoopEnd);
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
flowScheduler.add(header_practiceRoutineBegin());
flowScheduler.add(header_practiceRoutineEachFrame());
flowScheduler.add(header_practiceRoutineEnd());
const practice_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_trialsLoopBegin, practice_trialsLoopScheduler);
flowScheduler.add(practice_trialsLoopScheduler);
flowScheduler.add(practice_trialsLoopEnd);
flowScheduler.add(header_experimentRoutineBegin());
flowScheduler.add(header_experimentRoutineEachFrame());
flowScheduler.add(header_experimentRoutineEnd());
const experiment_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(experiment_trialsLoopBegin, experiment_trialsLoopScheduler);
flowScheduler.add(experiment_trialsLoopScheduler);
flowScheduler.add(experiment_trialsLoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'images/man_high jump.jpg', 'path': 'images/man_high jump.jpg'},
    {'name': 'images/office presentation in desert.jpg', 'path': 'images/office presentation in desert.jpg'},
    {'name': 'images/man catching grenade.jpg', 'path': 'images/man catching grenade.jpg'},
    {'name': 'images/woman_sewing machine.jpg', 'path': 'images/woman_sewing machine.jpg'},
    {'name': 'images/office men boxing.jpg', 'path': 'images/office men boxing.jpg'},
    {'name': 'images/man_home office.jpg', 'path': 'images/man_home office.jpg'},
    {'name': 'images/man on laptop in middle of road.jpg', 'path': 'images/man on laptop in middle of road.jpg'},
    {'name': 'images/cabbage headphones.jpg', 'path': 'images/cabbage headphones.jpg'},
    {'name': 'images/business man with inline skates.jpg', 'path': 'images/business man with inline skates.jpg'},
    {'name': 'images/man and woman_dancing on beach.jpg', 'path': 'images/man and woman_dancing on beach.jpg'},
    {'name': 'images/man_crossing urban street.jpg', 'path': 'images/man_crossing urban street.jpg'},
    {'name': 'images/woman_reading in bed.jpg', 'path': 'images/woman_reading in bed.jpg'},
    {'name': 'images/woman_office.jpg', 'path': 'images/woman_office.jpg'},
    {'name': 'images/sawing loaf of bread.jpg', 'path': 'images/sawing loaf of bread.jpg'},
    {'name': 'images/woman_packing unpacking.jpg', 'path': 'images/woman_packing unpacking.jpg'},
    {'name': 'images/breakfast in field.jpg', 'path': 'images/breakfast in field.jpg'},
    {'name': 'images/two women_hiking.jpg', 'path': 'images/two women_hiking.jpg'},
    {'name': 'images/business man long jump over binders.jpg', 'path': 'images/business man long jump over binders.jpg'},
    {'name': 'images/man_mask in office.jpg', 'path': 'images/man_mask in office.jpg'},
    {'name': 'images/canoe on land.jpg', 'path': 'images/canoe on land.jpg'},
    {'name': 'images/meeting with naked woman.jpg', 'path': 'images/meeting with naked woman.jpg'},
    {'name': 'images/man_roller skating.jpg', 'path': 'images/man_roller skating.jpg'},
    {'name': 'images/woman_pregnant at sink.jpg', 'path': 'images/woman_pregnant at sink.jpg'},
    {'name': 'images/business man skiing down hill.jpg', 'path': 'images/business man skiing down hill.jpg'},
    {'name': 'images/construction worker_on site.jpg', 'path': 'images/construction worker_on site.jpg'},
    {'name': 'practice_images/giant coffee.jpg', 'path': 'practice_images/giant coffee.jpg'},
    {'name': 'images/two girls_laptop and cell phone.jpg', 'path': 'images/two girls_laptop and cell phone.jpg'},
    {'name': 'images/scuba diver on mtn.jpg', 'path': 'images/scuba diver on mtn.jpg'},
    {'name': 'images/woman_net catching papers.jpg', 'path': 'images/woman_net catching papers.jpg'},
    {'name': 'images/driving car through water.jpg', 'path': 'images/driving car through water.jpg'},
    {'name': 'images/cutting jewelry on plate.jpg', 'path': 'images/cutting jewelry on plate.jpg'},
    {'name': 'images/track meet_office building.jpg', 'path': 'images/track meet_office building.jpg'},
    {'name': 'images/fish as gun.jpg', 'path': 'images/fish as gun.jpg'},
    {'name': 'images/watering can on feet.jpg', 'path': 'images/watering can on feet.jpg'},
    {'name': 'images/standing behind painting on wall.jpg', 'path': 'images/standing behind painting on wall.jpg'},
    {'name': 'images/man and woman_jumping into water.jpg', 'path': 'images/man and woman_jumping into water.jpg'},
    {'name': 'practice_images/man with paper in mouth.jpg', 'path': 'practice_images/man with paper in mouth.jpg'},
    {'name': 'images/using pump to inflate foot.jpg', 'path': 'images/using pump to inflate foot.jpg'},
    {'name': 'images/boys at ATM.jpg', 'path': 'images/boys at ATM.jpg'},
    {'name': 'images/wedding kiss.jpg', 'path': 'images/wedding kiss.jpg'},
    {'name': 'images/woman_eating salad.jpg', 'path': 'images/woman_eating salad.jpg'},
    {'name': 'images/fish speaking into phone.jpg', 'path': 'images/fish speaking into phone.jpg'},
    {'name': 'images/man_painting interior walls.jpg', 'path': 'images/man_painting interior walls.jpg'},
    {'name': 'images/welder.jpg', 'path': 'images/welder.jpg'},
    {'name': 'images/eating strawberry snack roll.jpg', 'path': 'images/eating strawberry snack roll.jpg'},
    {'name': 'images/business men_kick boxing.jpg', 'path': 'images/business men_kick boxing.jpg'},
    {'name': 'images/man_playing chess.jpg', 'path': 'images/man_playing chess.jpg'},
    {'name': 'images/office desk in forest.jpg', 'path': 'images/office desk in forest.jpg'},
    {'name': 'practice_images/family cooking.jpg', 'path': 'practice_images/family cooking.jpg'},
    {'name': 'images/USB plugged into hair.jpg', 'path': 'images/USB plugged into hair.jpg'},
    {'name': 'images/man_head in washer.jpg', 'path': 'images/man_head in washer.jpg'},
    {'name': 'images/cutting hair w hedge trimmer.jpg', 'path': 'images/cutting hair w hedge trimmer.jpg'},
    {'name': 'images/kid_fishing.jpg', 'path': 'images/kid_fishing.jpg'},
    {'name': 'images/man using ax to cut vegetables.jpg', 'path': 'images/man using ax to cut vegetables.jpg'},
    {'name': 'images/woman_ice skating.jpg', 'path': 'images/woman_ice skating.jpg'},
    {'name': 'images/business man with fish in mouth.jpg', 'path': 'images/business man with fish in mouth.jpg'},
    {'name': 'images/woman_smiling at phone.jpg', 'path': 'images/woman_smiling at phone.jpg'},
    {'name': 'images/woman_architecture.jpg', 'path': 'images/woman_architecture.jpg'},
    {'name': 'images/women walking prehistoric insects.jpg', 'path': 'images/women walking prehistoric insects.jpg'},
    {'name': 'images/lamp on head.jpg', 'path': 'images/lamp on head.jpg'},
    {'name': 'practice_images/throwing noodles.jpg', 'path': 'practice_images/throwing noodles.jpg'},
    {'name': 'images/business woman treadmill.jpg', 'path': 'images/business woman treadmill.jpg'},
    {'name': 'images/woman_ironing.jpg', 'path': 'images/woman_ironing.jpg'},
    {'name': 'practice_images/man running.jpg', 'path': 'practice_images/man running.jpg'},
    {'name': 'images/girl_hugging dog.jpg', 'path': 'images/girl_hugging dog.jpg'},
    {'name': 'practice_images/boxer training.jpg', 'path': 'practice_images/boxer training.jpg'},
    {'name': 'images/girl_playing flute.jpg', 'path': 'images/girl_playing flute.jpg'},
    {'name': 'images/boy diving into bucket.jpg', 'path': 'images/boy diving into bucket.jpg'},
    {'name': 'images/woman_pulling plant.jpg', 'path': 'images/woman_pulling plant.jpg'},
    {'name': 'images/boy_kite.jpg', 'path': 'images/boy_kite.jpg'},
    {'name': 'images/ping pong at breakfast table.jpg', 'path': 'images/ping pong at breakfast table.jpg'},
    {'name': 'images/man_sawing log.jpg', 'path': 'images/man_sawing log.jpg'},
    {'name': 'images/man washing face with stones.jpg', 'path': 'images/man washing face with stones.jpg'},
    {'name': 'practice.csv', 'path': 'practice.csv'},
    {'name': 'images/man holding up toilet.jpg', 'path': 'images/man holding up toilet.jpg'},
    {'name': 'practice_images/underwater skateboard.jpg', 'path': 'practice_images/underwater skateboard.jpg'},
    {'name': 'images/man_fishing.jpg', 'path': 'images/man_fishing.jpg'},
    {'name': 'images/woman_shoe shopping.jpg', 'path': 'images/woman_shoe shopping.jpg'},
    {'name': 'images/office woman_plastic wrap on face and hands.jpg', 'path': 'images/office woman_plastic wrap on face and hands.jpg'},
    {'name': 'images/maid_sweeping closet.jpg', 'path': 'images/maid_sweeping closet.jpg'},
    {'name': 'images/kneading dough.jpg', 'path': 'images/kneading dough.jpg'},
    {'name': 'images/woman_fingers crossed.jpg', 'path': 'images/woman_fingers crossed.jpg'},
    {'name': 'images/woman_mtn climb.jpg', 'path': 'images/woman_mtn climb.jpg'},
    {'name': 'images/woman_singing on stage.jpg', 'path': 'images/woman_singing on stage.jpg'},
    {'name': 'images/lifeguard at beach.jpg', 'path': 'images/lifeguard at beach.jpg'},
    {'name': 'images/woman_driving.jpg', 'path': 'images/woman_driving.jpg'},
    {'name': 'images/man_snowkiting.jpg', 'path': 'images/man_snowkiting.jpg'},
    {'name': 'images/sports man hitting pink puff.jpg', 'path': 'images/sports man hitting pink puff.jpg'},
    {'name': 'images/soup can phone_man on iceberg.jpg', 'path': 'images/soup can phone_man on iceberg.jpg'},
    {'name': 'images/woman_grapes off vine.jpg', 'path': 'images/woman_grapes off vine.jpg'},
    {'name': 'images/man blowing on strings.jpg', 'path': 'images/man blowing on strings.jpg'},
    {'name': 'images/British guards_track meet.jpg', 'path': 'images/British guards_track meet.jpg'},
    {'name': 'images/boy with computer dog.jpg', 'path': 'images/boy with computer dog.jpg'},
    {'name': 'images/business man in cape.jpg', 'path': 'images/business man in cape.jpg'},
    {'name': 'images/office men climbing lightpole.jpg', 'path': 'images/office men climbing lightpole.jpg'},
    {'name': 'images/woman_reading w multiple glasses.jpg', 'path': 'images/woman_reading w multiple glasses.jpg'},
    {'name': 'images/boy_holding dog.jpg', 'path': 'images/boy_holding dog.jpg'},
    {'name': 'images/office people with drums.jpg', 'path': 'images/office people with drums.jpg'},
    {'name': 'images/woman_spaghetti.jpg', 'path': 'images/woman_spaghetti.jpg'},
    {'name': 'images/woman_smelling flower.jpg', 'path': 'images/woman_smelling flower.jpg'},
    {'name': 'images/construction work_hammering.jpg', 'path': 'images/construction work_hammering.jpg'},
    {'name': 'images/man_winter running outside.jpg', 'path': 'images/man_winter running outside.jpg'},
    {'name': 'images/man_office file cabinets.jpg', 'path': 'images/man_office file cabinets.jpg'},
    {'name': 'images/men standing on doors.jpg', 'path': 'images/men standing on doors.jpg'},
    {'name': 'images/man_golfing mtn.jpg', 'path': 'images/man_golfing mtn.jpg'},
    {'name': 'images/woman_ball and chain in desert.jpg', 'path': 'images/woman_ball and chain in desert.jpg'},
    {'name': 'images/man_BMX bike.jpg', 'path': 'images/man_BMX bike.jpg'},
    {'name': 'images/two girls_picture.jpg', 'path': 'images/two girls_picture.jpg'},
    {'name': 'images/romantic dinner_table in water.jpg', 'path': 'images/romantic dinner_table in water.jpg'},
    {'name': 'practice_images/woman vacuuming grass.jpg', 'path': 'practice_images/woman vacuuming grass.jpg'},
    {'name': 'images/woman dancing w skeleton.jpg', 'path': 'images/woman dancing w skeleton.jpg'},
    {'name': 'images/man swinging on street pole.jpg', 'path': 'images/man swinging on street pole.jpg'},
    {'name': 'images/man_skateboard in city.jpg', 'path': 'images/man_skateboard in city.jpg'},
    {'name': 'images/man_golfing.jpg', 'path': 'images/man_golfing.jpg'},
    {'name': 'images/business man jumping off bridge.jpg', 'path': 'images/business man jumping off bridge.jpg'},
    {'name': 'images/woman_laundry.jpg', 'path': 'images/woman_laundry.jpg'},
    {'name': 'images/cracking nut.jpg', 'path': 'images/cracking nut.jpg'},
    {'name': 'images/woman_kitchen frisbee.jpg', 'path': 'images/woman_kitchen frisbee.jpg'},
    {'name': 'images/man playing instrument w ax.jpg', 'path': 'images/man playing instrument w ax.jpg'},
    {'name': 'images/man_courthouse steps.jpg', 'path': 'images/man_courthouse steps.jpg'},
    {'name': 'images/business man pole vaulting.jpg', 'path': 'images/business man pole vaulting.jpg'},
    {'name': 'practice_images/balancing on umbrella.jpg', 'path': 'practice_images/balancing on umbrella.jpg'},
    {'name': 'images/salting turf.jpg', 'path': 'images/salting turf.jpg'},
    {'name': 'images/office worker_ballet in desert.jpg', 'path': 'images/office worker_ballet in desert.jpg'},
    {'name': 'images/man at bar.jpg', 'path': 'images/man at bar.jpg'},
    {'name': 'images/robot on couch_maid cleaning floor.jpg', 'path': 'images/robot on couch_maid cleaning floor.jpg'},
    {'name': 'practice_images/looking at xray.jpg', 'path': 'practice_images/looking at xray.jpg'},
    {'name': 'images/man_hammer to crack egg.jpg', 'path': 'images/man_hammer to crack egg.jpg'},
    {'name': 'images/people standing alone with clocks.jpg', 'path': 'images/people standing alone with clocks.jpg'},
    {'name': 'practice_images/parking lot.jpg', 'path': 'practice_images/parking lot.jpg'},
    {'name': 'images/man_making pottery.jpg', 'path': 'images/man_making pottery.jpg'},
    {'name': 'images/girl eating fish head.jpg', 'path': 'images/girl eating fish head.jpg'},
    {'name': 'images/boy fishing in train terminal.jpg', 'path': 'images/boy fishing in train terminal.jpg'},
    {'name': 'images/boy_walking dog.jpg', 'path': 'images/boy_walking dog.jpg'},
    {'name': 'images/office waiting area_woman in pajamas.jpg', 'path': 'images/office waiting area_woman in pajamas.jpg'},
    {'name': 'images/woman_clothesline.jpg', 'path': 'images/woman_clothesline.jpg'},
    {'name': 'images/woman_surfing.jpg', 'path': 'images/woman_surfing.jpg'},
    {'name': 'images/underwater jump rope.jpg', 'path': 'images/underwater jump rope.jpg'},
    {'name': 'images/eating cords w chopsticks.jpg', 'path': 'images/eating cords w chopsticks.jpg'},
    {'name': 'images/pope drilling.jpg', 'path': 'images/pope drilling.jpg'},
    {'name': 'practice_images/mowing the lawn.jpg', 'path': 'practice_images/mowing the lawn.jpg'},
    {'name': 'images/hospital patient.jpg', 'path': 'images/hospital patient.jpg'},
    {'name': 'images/man and woman_toasting champagne.jpg', 'path': 'images/man and woman_toasting champagne.jpg'},
    {'name': 'images/woman_sipping lemonade.jpg', 'path': 'images/woman_sipping lemonade.jpg'},
    {'name': 'images/eating raw fish.jpg', 'path': 'images/eating raw fish.jpg'},
    {'name': 'practice_images/buisness man working.jpg', 'path': 'practice_images/buisness man working.jpg'},
    {'name': 'images/cheese grater on rock.jpg', 'path': 'images/cheese grater on rock.jpg'},
    {'name': 'images/man eating shredded paper.jpg', 'path': 'images/man eating shredded paper.jpg'},
    {'name': 'images/smoking cigar.jpg', 'path': 'images/smoking cigar.jpg'},
    {'name': 'images/man_exercise gym.jpg', 'path': 'images/man_exercise gym.jpg'},
    {'name': 'images/man in bathrobe on bridge.jpg', 'path': 'images/man in bathrobe on bridge.jpg'},
    {'name': 'images/boxing in the clouds.jpg', 'path': 'images/boxing in the clouds.jpg'},
    {'name': 'images/woman_headphones.jpg', 'path': 'images/woman_headphones.jpg'},
    {'name': 'images/man sleeping while standing.jpg', 'path': 'images/man sleeping while standing.jpg'},
    {'name': 'images/woman_running w surfboard.jpg', 'path': 'images/woman_running w surfboard.jpg'},
    {'name': 'images/woman_high jump.jpg', 'path': 'images/woman_high jump.jpg'},
    {'name': 'images/man balancing books on foot.jpg', 'path': 'images/man balancing books on foot.jpg'},
    {'name': 'images/lifeguard in empty pool.jpg', 'path': 'images/lifeguard in empty pool.jpg'},
    {'name': 'images/office meeting.jpg', 'path': 'images/office meeting.jpg'},
    {'name': 'images/waiting in terminal.jpg', 'path': 'images/waiting in terminal.jpg'},
    {'name': 'practice_images/sawing apple.jpg', 'path': 'practice_images/sawing apple.jpg'},
    {'name': 'images/divers in empty pool.jpg', 'path': 'images/divers in empty pool.jpg'},
    {'name': 'images/ballerina mechanic.jpg', 'path': 'images/ballerina mechanic.jpg'},
    {'name': 'images/man in doghouse.jpg', 'path': 'images/man in doghouse.jpg'},
    {'name': 'images/stethoscope to egg.jpg', 'path': 'images/stethoscope to egg.jpg'},
    {'name': 'images/xray consultation.jpg', 'path': 'images/xray consultation.jpg'},
    {'name': 'images/kids_presents.jpg', 'path': 'images/kids_presents.jpg'},
    {'name': 'images/swimmers starting dive.jpg', 'path': 'images/swimmers starting dive.jpg'},
    {'name': 'images/robot vacuuming.jpg', 'path': 'images/robot vacuuming.jpg'},
    {'name': 'images/office woman path of chips.jpg', 'path': 'images/office woman path of chips.jpg'},
    {'name': 'images/pregnant woman forest.jpg', 'path': 'images/pregnant woman forest.jpg'},
    {'name': 'images/man fishing in road puddle.jpg', 'path': 'images/man fishing in road puddle.jpg'},
    {'name': 'images/pen on paper.jpg', 'path': 'images/pen on paper.jpg'},
    {'name': 'images/woman_climbing on cabinets.jpg', 'path': 'images/woman_climbing on cabinets.jpg'},
    {'name': 'images/office on phone.jpg', 'path': 'images/office on phone.jpg'},
    {'name': 'images/man_drinking water.jpg', 'path': 'images/man_drinking water.jpg'},
    {'name': 'images/leg coming out of river.jpg', 'path': 'images/leg coming out of river.jpg'},
    {'name': 'images/man_football practice.jpg', 'path': 'images/man_football practice.jpg'},
    {'name': 'images/woman_shoveling snow.jpg', 'path': 'images/woman_shoveling snow.jpg'},
    {'name': 'images/windsurfing on tubes.jpg', 'path': 'images/windsurfing on tubes.jpg'},
    {'name': 'images/woman_kicking garment bag.jpg', 'path': 'images/woman_kicking garment bag.jpg'},
    {'name': 'images/woman_plucking eyebrow.jpg', 'path': 'images/woman_plucking eyebrow.jpg'},
    {'name': 'images/woman_looking at map.jpg', 'path': 'images/woman_looking at map.jpg'},
    {'name': 'images/woman drinking car engine oil.jpg', 'path': 'images/woman drinking car engine oil.jpg'},
    {'name': 'images/woman_watering.jpg', 'path': 'images/woman_watering.jpg'},
    {'name': 'images/man hitting water with baseball bat.jpg', 'path': 'images/man hitting water with baseball bat.jpg'},
    {'name': 'experiment.csv', 'path': 'experiment.csv'},
    {'name': 'images/woman_mowing lawn.jpg', 'path': 'images/woman_mowing lawn.jpg'},
    {'name': 'images/woman_drilling.jpg', 'path': 'images/woman_drilling.jpg'},
    {'name': 'images/man_inflating air mattress.jpg', 'path': 'images/man_inflating air mattress.jpg'},
    {'name': 'images/man_cracking coconut island.jpg', 'path': 'images/man_cracking coconut island.jpg'},
    {'name': 'images/office men_hula hoop.jpg', 'path': 'images/office men_hula hoop.jpg'},
    {'name': 'images/man_praying.jpg', 'path': 'images/man_praying.jpg'},
    {'name': 'images/kicking soccer ball.jpg', 'path': 'images/kicking soccer ball.jpg'},
    {'name': 'images/man feeding paper into shredder w mouth.jpg', 'path': 'images/man feeding paper into shredder w mouth.jpg'},
    {'name': 'images/scientist_measuring.jpg', 'path': 'images/scientist_measuring.jpg'},
    {'name': 'images/man_playing violin under water.jpg', 'path': 'images/man_playing violin under water.jpg'},
    {'name': 'images/office woman_head in bag.jpg', 'path': 'images/office woman_head in bag.jpg'},
    {'name': 'images/woman_pills with fork.jpg', 'path': 'images/woman_pills with fork.jpg'},
    {'name': 'images/man_jumping into water.jpg', 'path': 'images/man_jumping into water.jpg'},
    {'name': 'images/girl_jumping broken bridge.jpg', 'path': 'images/girl_jumping broken bridge.jpg'},
    {'name': 'images/punching milk.jpg', 'path': 'images/punching milk.jpg'},
    {'name': 'practice_images/dog pilot.jpg', 'path': 'practice_images/dog pilot.jpg'},
    {'name': 'images/woman_rock climbing.jpg', 'path': 'images/woman_rock climbing.jpg'},
    {'name': 'images/man_playing violin.jpg', 'path': 'images/man_playing violin.jpg'},
    {'name': 'images/man at desk sitting in hole.jpg', 'path': 'images/man at desk sitting in hole.jpg'},
    {'name': 'breakfile.jpg', 'path': 'breakfile.jpg'},
    {'name': 'practice_images/dog playing.jpg', 'path': 'practice_images/dog playing.jpg'},
    {'name': 'images/woman golfing off mans face.jpg', 'path': 'images/woman golfing off mans face.jpg'},
    {'name': 'images/outrigger canoe.jpg', 'path': 'images/outrigger canoe.jpg'},
    {'name': 'images/man_hurdle.jpg', 'path': 'images/man_hurdle.jpg'},
    {'name': 'images/man_running on bleachers.jpg', 'path': 'images/man_running on bleachers.jpg'},
    {'name': 'images/woman_hanging from door reading.jpg', 'path': 'images/woman_hanging from door reading.jpg'},
    {'name': 'images/man and woman_dinner table.jpg', 'path': 'images/man and woman_dinner table.jpg'},
    {'name': 'images/woman singing into sunflower.jpg', 'path': 'images/woman singing into sunflower.jpg'},
    {'name': 'images/man_rock climbing.jpg', 'path': 'images/man_rock climbing.jpg'},
    {'name': 'images/business man jumping over briefcase.jpg', 'path': 'images/business man jumping over briefcase.jpg'},
    {'name': 'images/man skateboarding in bathtub.jpg', 'path': 'images/man skateboarding in bathtub.jpg'},
    {'name': 'images/girl_ballet barre.jpg', 'path': 'images/girl_ballet barre.jpg'},
    {'name': 'images/woman_bubble bath.jpg', 'path': 'images/woman_bubble bath.jpg'},
    {'name': 'images/man wearing jacket on coat rack.jpg', 'path': 'images/man wearing jacket on coat rack.jpg'},
    {'name': 'images/man_mtn biking.jpg', 'path': 'images/man_mtn biking.jpg'},
    {'name': 'images/doctor_surgery on book.jpg', 'path': 'images/doctor_surgery on book.jpg'},
    {'name': 'images/man_office cabinet in water.jpg', 'path': 'images/man_office cabinet in water.jpg'},
    {'name': 'images/man_fishing boat.jpg', 'path': 'images/man_fishing boat.jpg'},
    {'name': 'images/band in the street.jpg', 'path': 'images/band in the street.jpg'},
    {'name': 'images/girl_spaghetti.jpg', 'path': 'images/girl_spaghetti.jpg'},
    {'name': 'images/pointe shoes.jpg', 'path': 'images/pointe shoes.jpg'},
    {'name': 'images/man_playing guitar.jpg', 'path': 'images/man_playing guitar.jpg'},
    {'name': 'images/track meet.jpg', 'path': 'images/track meet.jpg'},
    {'name': 'images/person walking on car.jpg', 'path': 'images/person walking on car.jpg'},
    {'name': 'images/woman sewing hair.jpg', 'path': 'images/woman sewing hair.jpg'},
    {'name': 'images/kicking soccer ball underwater.jpg', 'path': 'images/kicking soccer ball underwater.jpg'},
    {'name': 'images/man_office couch.jpg', 'path': 'images/man_office couch.jpg'},
    {'name': 'images/desert bath tub.jpg', 'path': 'images/desert bath tub.jpg'},
    {'name': 'images/doubles tennis.jpg', 'path': 'images/doubles tennis.jpg'},
    {'name': 'practice_images/bikini woman gun.jpg', 'path': 'practice_images/bikini woman gun.jpg'},
    {'name': 'images/man cleaning_boxing match asst.jpg', 'path': 'images/man cleaning_boxing match asst.jpg'},
    {'name': 'images/man at daytime drive in movie.jpg', 'path': 'images/man at daytime drive in movie.jpg'},
    {'name': 'images/man breakdancing in kitchen.jpg', 'path': 'images/man breakdancing in kitchen.jpg'},
    {'name': 'images/man_eating pizza.jpg', 'path': 'images/man_eating pizza.jpg'},
    {'name': 'images/baby crib in desk drawer.jpg', 'path': 'images/baby crib in desk drawer.jpg'},
    {'name': 'practice_images/boss baby.jpg', 'path': 'practice_images/boss baby.jpg'},
    {'name': 'images/woman_exercise.jpg', 'path': 'images/woman_exercise.jpg'},
    {'name': 'images/woman in desert with satellite.jpg', 'path': 'images/woman in desert with satellite.jpg'},
    {'name': 'images/woman_grocery store.jpg', 'path': 'images/woman_grocery store.jpg'},
    {'name': 'images/woman_bikini grocery store.jpg', 'path': 'images/woman_bikini grocery store.jpg'},
    {'name': 'images/man_making small boats.jpg', 'path': 'images/man_making small boats.jpg'},
    {'name': 'images/man drinking water with goldfish.jpg', 'path': 'images/man drinking water with goldfish.jpg'},
    {'name': 'images/man_hotel bed.jpg', 'path': 'images/man_hotel bed.jpg'},
    {'name': 'images/doubles figure skating.jpg', 'path': 'images/doubles figure skating.jpg'},
    {'name': 'images/man_wind instrument in water.jpg', 'path': 'images/man_wind instrument in water.jpg'},
    {'name': 'images/woman_dancing ballet.jpg', 'path': 'images/woman_dancing ballet.jpg'},
    {'name': 'practice_images/kids playing.jpg', 'path': 'practice_images/kids playing.jpg'},
    {'name': 'images/man_office war sandbags.jpg', 'path': 'images/man_office war sandbags.jpg'},
    {'name': 'images/business man breakdancing outside.jpg', 'path': 'images/business man breakdancing outside.jpg'},
    {'name': 'images/woman_throwing frisbee.jpg', 'path': 'images/woman_throwing frisbee.jpg'},
    {'name': 'images/man praying to soccer ball in tv.jpg', 'path': 'images/man praying to soccer ball in tv.jpg'},
    {'name': 'images/boy lifting truck.jpg', 'path': 'images/boy lifting truck.jpg'},
    {'name': 'images/man_waiting for train.jpg', 'path': 'images/man_waiting for train.jpg'},
    {'name': 'images/man_waxing boat.jpg', 'path': 'images/man_waxing boat.jpg'},
    {'name': 'images/man_wind instrument on bench.jpg', 'path': 'images/man_wind instrument on bench.jpg'},
    {'name': 'images/walking wooden bridge.jpg', 'path': 'images/walking wooden bridge.jpg'},
    {'name': 'images/boy and man_raking leaves.jpg', 'path': 'images/boy and man_raking leaves.jpg'},
    {'name': 'images/romantic beach dinner.jpg', 'path': 'images/romantic beach dinner.jpg'},
    {'name': 'images/track meet in slippers.jpg', 'path': 'images/track meet in slippers.jpg'},
    {'name': 'images/chefs_menu.jpg', 'path': 'images/chefs_menu.jpg'},
    {'name': 'images/woman_runner.jpg', 'path': 'images/woman_runner.jpg'},
    {'name': 'images/woman_face in pie.jpg', 'path': 'images/woman_face in pie.jpg'},
    {'name': 'practice_images/girl and woman_patio.jpg', 'path': 'practice_images/girl and woman_patio.jpg'},
    {'name': 'images/man_water skiing.jpg', 'path': 'images/man_water skiing.jpg'},
    {'name': 'images/woman_watering outdoor plant indoors.jpg', 'path': 'images/woman_watering outdoor plant indoors.jpg'},
    {'name': 'images/woman_washing hands.jpg', 'path': 'images/woman_washing hands.jpg'},
    {'name': 'images/man_tennis court.jpg', 'path': 'images/man_tennis court.jpg'},
    {'name': 'images/tying shoelace.jpg', 'path': 'images/tying shoelace.jpg'},
    {'name': 'images/sick kid_thermometer.jpg', 'path': 'images/sick kid_thermometer.jpg'},
    {'name': 'standardizingRTs.csv', 'path': 'standardizingRTs.csv'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.1.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var standardizingRTsClock;
var std_instructions;
var continue1;
var stdRT_loopClock;
var key_resp_stdRT;
var text;
var instructionsClock;
var task_instructions;
var continue2;
var header_practiceClock;
var practice_block;
var practiceClock;
var trial_instructions_practice;
var key_resp_practice;
var image_practice;
var icorr;
var breakloop_practice;
var header_experimentClock;
var experiment_block;
var continue4;
var experimentClock;
var trial_instructions;
var key_resp;
var image;
var breaktime;
var breakblockClock;
var breakimage;
var continutebreak;
var endClock;
var end_text;
var continue5;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "standardizingRTs"
  standardizingRTsClock = new util.Clock();
  std_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'std_instructions',
    text: 'For the next task, you will press:\n“C” for YES\n“N” for NO\n\nWe will practice this a few times before continuing.\n\nPress the space bar when you are ready.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  continue1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "stdRT_loop"
  stdRT_loopClock = new util.Clock();
  key_resp_stdRT = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  task_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'task_instructions',
    text: 'Welcome to the Event Task!\n\nYou will see a series of pictures. For each picture, you will answer the question: \nIs this something that might normally happen?\n\nUse your keyboard to respond. \nHit ‘C’ if the answer is YES.\nHit ‘N’ if the answer is NO.\n\nWe will start with a series of practice items. \n\nPress the space bar when you are ready.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  continue2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "header_practice"
  header_practiceClock = new util.Clock();
  practice_block = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice_block',
    text: 'Practice Block',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "practice"
  practiceClock = new util.Clock();
  trial_instructions_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_instructions_practice',
    text: 'C = “YES”             N = “NO”',
    font: 'Open Sans',
    units: 'pix', 
    pos: [0, (- 300)], height: 30.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_practice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_practice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_practice', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  icorr = 0;
  breakloop_practice = 0;
  
  // Initialize components for Routine "header_experiment"
  header_experimentClock = new util.Clock();
  experiment_block = new visual.TextStim({
    win: psychoJS.window,
    name: 'experiment_block',
    text: 'Experiment Block\n\nYou will see a series of pictures. For each picture, you will answer the question: \nIs this something that might normally happen?\n\nUse your keyboard to respond. \nHit ‘C’ if the answer is YES.\nHit ‘N’ if the answer is NO.\n\nPress the space bar when you are ready.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  continue4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "experiment"
  experimentClock = new util.Clock();
  trial_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_instructions',
    text: 'C = “YES”             N = “NO”',
    font: 'Open Sans',
    units: 'pix', 
    pos: [0, (- 300)], height: 30.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  breaktime = 0;
  
  // Initialize components for Routine "breakblock"
  breakblockClock = new util.Clock();
  breakimage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'breakimage', units : undefined, 
    image : 'breakfile.jpg', mask : undefined,
    ori : 0.0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  continutebreak = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: 'This is the end of the Event Task.\n\nThank you!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  continue5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _continue1_allKeys;
var standardizingRTsComponents;
function standardizingRTsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'standardizingRTs'-------
    t = 0;
    standardizingRTsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    continue1.keys = undefined;
    continue1.rt = undefined;
    _continue1_allKeys = [];
    // keep track of which components have finished
    standardizingRTsComponents = [];
    standardizingRTsComponents.push(std_instructions);
    standardizingRTsComponents.push(continue1);
    
    standardizingRTsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function standardizingRTsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'standardizingRTs'-------
    // get current time
    t = standardizingRTsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *std_instructions* updates
    if (t >= 0.0 && std_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      std_instructions.tStart = t;  // (not accounting for frame time here)
      std_instructions.frameNStart = frameN;  // exact frame index
      
      std_instructions.setAutoDraw(true);
    }

    
    // *continue1* updates
    if (t >= 0.0 && continue1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue1.tStart = t;  // (not accounting for frame time here)
      continue1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { continue1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { continue1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { continue1.clearEvents(); });
    }

    if (continue1.status === PsychoJS.Status.STARTED) {
      let theseKeys = continue1.getKeys({keyList: ['space'], waitRelease: false});
      _continue1_allKeys = _continue1_allKeys.concat(theseKeys);
      if (_continue1_allKeys.length > 0) {
        continue1.keys = _continue1_allKeys[_continue1_allKeys.length - 1].name;  // just the last key pressed
        continue1.rt = _continue1_allKeys[_continue1_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    standardizingRTsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function standardizingRTsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'standardizingRTs'-------
    standardizingRTsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('continue1.keys', continue1.keys);
    if (typeof continue1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('continue1.rt', continue1.rt);
        routineTimer.reset();
        }
    
    continue1.stop();
    // the Routine "standardizingRTs" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var stdRT_trials;
var currentLoop;
function stdRT_trialsLoopBegin(stdRT_trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  stdRT_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 10, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'standardizingRTs.csv',
    seed: undefined, name: 'stdRT_trials'
  });
  psychoJS.experiment.addLoop(stdRT_trials); // add the loop to the experiment
  currentLoop = stdRT_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  stdRT_trials.forEach(function() {
    const snapshot = stdRT_trials.getSnapshot();

    stdRT_trialsLoopScheduler.add(importConditions(snapshot));
    stdRT_trialsLoopScheduler.add(stdRT_loopRoutineBegin(snapshot));
    stdRT_trialsLoopScheduler.add(stdRT_loopRoutineEachFrame(snapshot));
    stdRT_trialsLoopScheduler.add(stdRT_loopRoutineEnd(snapshot));
    stdRT_trialsLoopScheduler.add(endLoopIteration(stdRT_trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function stdRT_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(stdRT_trials);

  return Scheduler.Event.NEXT;
}


var practice_trials;
function practice_trialsLoopBegin(practice_trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  practice_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'practice.csv',
    seed: undefined, name: 'practice_trials'
  });
  psychoJS.experiment.addLoop(practice_trials); // add the loop to the experiment
  currentLoop = practice_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  practice_trials.forEach(function() {
    const snapshot = practice_trials.getSnapshot();

    practice_trialsLoopScheduler.add(importConditions(snapshot));
    practice_trialsLoopScheduler.add(practiceRoutineBegin(snapshot));
    practice_trialsLoopScheduler.add(practiceRoutineEachFrame(snapshot));
    practice_trialsLoopScheduler.add(practiceRoutineEnd(snapshot));
    practice_trialsLoopScheduler.add(endLoopIteration(practice_trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function practice_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(practice_trials);

  return Scheduler.Event.NEXT;
}


var experiment_trials;
function experiment_trialsLoopBegin(experiment_trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  experiment_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'experiment.csv',
    seed: undefined, name: 'experiment_trials'
  });
  psychoJS.experiment.addLoop(experiment_trials); // add the loop to the experiment
  currentLoop = experiment_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  experiment_trials.forEach(function() {
    const snapshot = experiment_trials.getSnapshot();

    experiment_trialsLoopScheduler.add(importConditions(snapshot));
    experiment_trialsLoopScheduler.add(experimentRoutineBegin(snapshot));
    experiment_trialsLoopScheduler.add(experimentRoutineEachFrame(snapshot));
    experiment_trialsLoopScheduler.add(experimentRoutineEnd(snapshot));
    const breakloopLoopScheduler = new Scheduler(psychoJS);
    experiment_trialsLoopScheduler.add(breakloopLoopBegin, breakloopLoopScheduler);
    experiment_trialsLoopScheduler.add(breakloopLoopScheduler);
    experiment_trialsLoopScheduler.add(breakloopLoopEnd);
    experiment_trialsLoopScheduler.add(endLoopIteration(experiment_trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var breakloop;
function breakloopLoopBegin(breakloopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  breakloop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: breaktime, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'breakloop'
  });
  psychoJS.experiment.addLoop(breakloop); // add the loop to the experiment
  currentLoop = breakloop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  breakloop.forEach(function() {
    const snapshot = breakloop.getSnapshot();

    breakloopLoopScheduler.add(importConditions(snapshot));
    breakloopLoopScheduler.add(breakblockRoutineBegin(snapshot));
    breakloopLoopScheduler.add(breakblockRoutineEachFrame(snapshot));
    breakloopLoopScheduler.add(breakblockRoutineEnd(snapshot));
    breakloopLoopScheduler.add(endLoopIteration(breakloopLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function breakloopLoopEnd() {
  psychoJS.experiment.removeLoop(breakloop);

  return Scheduler.Event.NEXT;
}


function experiment_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(experiment_trials);

  return Scheduler.Event.NEXT;
}


var _key_resp_stdRT_allKeys;
var stdRT_loopComponents;
function stdRT_loopRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'stdRT_loop'-------
    t = 0;
    stdRT_loopClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_stdRT.keys = undefined;
    key_resp_stdRT.rt = undefined;
    _key_resp_stdRT_allKeys = [];
    text.setText(stimulus);
    // keep track of which components have finished
    stdRT_loopComponents = [];
    stdRT_loopComponents.push(key_resp_stdRT);
    stdRT_loopComponents.push(text);
    
    stdRT_loopComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function stdRT_loopRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'stdRT_loop'-------
    // get current time
    t = stdRT_loopClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_stdRT* updates
    if (t >= 0.0 && key_resp_stdRT.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_stdRT.tStart = t;  // (not accounting for frame time here)
      key_resp_stdRT.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_stdRT.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_stdRT.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_stdRT.clearEvents(); });
    }

    if (key_resp_stdRT.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_stdRT.getKeys({keyList: ['c', 'n'], waitRelease: false});
      _key_resp_stdRT_allKeys = _key_resp_stdRT_allKeys.concat(theseKeys);
      if (_key_resp_stdRT_allKeys.length > 0) {
        key_resp_stdRT.keys = _key_resp_stdRT_allKeys[_key_resp_stdRT_allKeys.length - 1].name;  // just the last key pressed
        key_resp_stdRT.rt = _key_resp_stdRT_allKeys[_key_resp_stdRT_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    stdRT_loopComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stdRT_loopRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'stdRT_loop'-------
    stdRT_loopComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_stdRT.keys', key_resp_stdRT.keys);
    if (typeof key_resp_stdRT.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_stdRT.rt', key_resp_stdRT.rt);
        routineTimer.reset();
        }
    
    key_resp_stdRT.stop();
    // the Routine "stdRT_loop" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _continue2_allKeys;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    continue2.keys = undefined;
    continue2.rt = undefined;
    _continue2_allKeys = [];
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(task_instructions);
    instructionsComponents.push(continue2);
    
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instructions'-------
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *task_instructions* updates
    if (t >= 0.0 && task_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_instructions.tStart = t;  // (not accounting for frame time here)
      task_instructions.frameNStart = frameN;  // exact frame index
      
      task_instructions.setAutoDraw(true);
    }

    
    // *continue2* updates
    if (t >= 2.0 && continue2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue2.tStart = t;  // (not accounting for frame time here)
      continue2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { continue2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { continue2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { continue2.clearEvents(); });
    }

    if (continue2.status === PsychoJS.Status.STARTED) {
      let theseKeys = continue2.getKeys({keyList: ['space'], waitRelease: false});
      _continue2_allKeys = _continue2_allKeys.concat(theseKeys);
      if (_continue2_allKeys.length > 0) {
        continue2.keys = _continue2_allKeys[_continue2_allKeys.length - 1].name;  // just the last key pressed
        continue2.rt = _continue2_allKeys[_continue2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instructions'-------
    instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('continue2.keys', continue2.keys);
    if (typeof continue2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('continue2.rt', continue2.rt);
        routineTimer.reset();
        }
    
    continue2.stop();
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var header_practiceComponents;
function header_practiceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'header_practice'-------
    t = 0;
    header_practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    header_practiceComponents = [];
    header_practiceComponents.push(practice_block);
    
    header_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function header_practiceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'header_practice'-------
    // get current time
    t = header_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practice_block* updates
    if (t >= 0.0 && practice_block.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_block.tStart = t;  // (not accounting for frame time here)
      practice_block.frameNStart = frameN;  // exact frame index
      
      practice_block.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (practice_block.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      practice_block.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    header_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function header_practiceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'header_practice'-------
    header_practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_practice_allKeys;
var practiceComponents;
function practiceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'practice'-------
    t = 0;
    practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_practice.keys = undefined;
    key_resp_practice.rt = undefined;
    _key_resp_practice_allKeys = [];
    image_practice.setImage(file);
    // keep track of which components have finished
    practiceComponents = [];
    practiceComponents.push(trial_instructions_practice);
    practiceComponents.push(key_resp_practice);
    practiceComponents.push(image_practice);
    
    practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practiceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'practice'-------
    // get current time
    t = practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *trial_instructions_practice* updates
    if (t >= 0.0 && trial_instructions_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_instructions_practice.tStart = t;  // (not accounting for frame time here)
      trial_instructions_practice.frameNStart = frameN;  // exact frame index
      
      trial_instructions_practice.setAutoDraw(true);
    }

    
    // *key_resp_practice* updates
    if (t >= 0.0 && key_resp_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_practice.tStart = t;  // (not accounting for frame time here)
      key_resp_practice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_practice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_practice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_practice.clearEvents(); });
    }

    if (key_resp_practice.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_practice.getKeys({keyList: ['c', 'n'], waitRelease: false});
      _key_resp_practice_allKeys = _key_resp_practice_allKeys.concat(theseKeys);
      if (_key_resp_practice_allKeys.length > 0) {
        key_resp_practice.keys = _key_resp_practice_allKeys[_key_resp_practice_allKeys.length - 1].name;  // just the last key pressed
        key_resp_practice.rt = _key_resp_practice_allKeys[_key_resp_practice_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_practice.keys == corrAns) {
            key_resp_practice.corr = 1;
        } else {
            key_resp_practice.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_practice* updates
    if (t >= 0.0 && image_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_practice.tStart = t;  // (not accounting for frame time here)
      image_practice.frameNStart = frameN;  // exact frame index
      
      image_practice.setAutoDraw(true);
    }

    if ((breakloop_practice === 1)) {
        continueRoutine = false;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practiceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'practice'-------
    practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_practice.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         key_resp_practice.corr = 1;  // correct non-response
      } else {
         key_resp_practice.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_practice.keys', key_resp_practice.keys);
    psychoJS.experiment.addData('key_resp_practice.corr', key_resp_practice.corr);
    if (typeof key_resp_practice.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_practice.rt', key_resp_practice.rt);
        routineTimer.reset();
        }
    
    key_resp_practice.stop();
    if ((key_resp_practice.corr === 1)) {
        icorr += 1;
        if ((icorr > 4)) {
            breakloop_practice = 1;
        }
    } else {
        icorr = 0;
    }
    
    // the Routine "practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _continue4_allKeys;
var header_experimentComponents;
function header_experimentRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'header_experiment'-------
    t = 0;
    header_experimentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    continue4.keys = undefined;
    continue4.rt = undefined;
    _continue4_allKeys = [];
    // keep track of which components have finished
    header_experimentComponents = [];
    header_experimentComponents.push(experiment_block);
    header_experimentComponents.push(continue4);
    
    header_experimentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function header_experimentRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'header_experiment'-------
    // get current time
    t = header_experimentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *experiment_block* updates
    if (t >= 0.0 && experiment_block.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      experiment_block.tStart = t;  // (not accounting for frame time here)
      experiment_block.frameNStart = frameN;  // exact frame index
      
      experiment_block.setAutoDraw(true);
    }

    
    // *continue4* updates
    if (t >= 2.0 && continue4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue4.tStart = t;  // (not accounting for frame time here)
      continue4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { continue4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { continue4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { continue4.clearEvents(); });
    }

    if (continue4.status === PsychoJS.Status.STARTED) {
      let theseKeys = continue4.getKeys({keyList: ['space'], waitRelease: false});
      _continue4_allKeys = _continue4_allKeys.concat(theseKeys);
      if (_continue4_allKeys.length > 0) {
        continue4.keys = _continue4_allKeys[_continue4_allKeys.length - 1].name;  // just the last key pressed
        continue4.rt = _continue4_allKeys[_continue4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    header_experimentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function header_experimentRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'header_experiment'-------
    header_experimentComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('continue4.keys', continue4.keys);
    if (typeof continue4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('continue4.rt', continue4.rt);
        routineTimer.reset();
        }
    
    continue4.stop();
    // the Routine "header_experiment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var experimentComponents;
function experimentRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'experiment'-------
    t = 0;
    experimentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    image.setImage(file);
    if ((((experiment_trials.thisTrialN + 1) % 64) === 0)) {
        breaktime = 1;
    }
    
    // keep track of which components have finished
    experimentComponents = [];
    experimentComponents.push(trial_instructions);
    experimentComponents.push(key_resp);
    experimentComponents.push(image);
    
    experimentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function experimentRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'experiment'-------
    // get current time
    t = experimentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *trial_instructions* updates
    if (t >= 0.0 && trial_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_instructions.tStart = t;  // (not accounting for frame time here)
      trial_instructions.frameNStart = frameN;  // exact frame index
      
      trial_instructions.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['c', 'n'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp.keys == corrAns) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    experimentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function experimentRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'experiment'-------
    experimentComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "experiment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _continutebreak_allKeys;
var breakblockComponents;
function breakblockRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'breakblock'-------
    t = 0;
    breakblockClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    continutebreak.keys = undefined;
    continutebreak.rt = undefined;
    _continutebreak_allKeys = [];
    // keep track of which components have finished
    breakblockComponents = [];
    breakblockComponents.push(breakimage);
    breakblockComponents.push(continutebreak);
    
    breakblockComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function breakblockRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'breakblock'-------
    // get current time
    t = breakblockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *breakimage* updates
    if (t >= 0.0 && breakimage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      breakimage.tStart = t;  // (not accounting for frame time here)
      breakimage.frameNStart = frameN;  // exact frame index
      
      breakimage.setAutoDraw(true);
    }

    
    // *continutebreak* updates
    if (t >= 2.0 && continutebreak.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continutebreak.tStart = t;  // (not accounting for frame time here)
      continutebreak.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { continutebreak.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { continutebreak.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { continutebreak.clearEvents(); });
    }

    if (continutebreak.status === PsychoJS.Status.STARTED) {
      let theseKeys = continutebreak.getKeys({keyList: ['space'], waitRelease: false});
      _continutebreak_allKeys = _continutebreak_allKeys.concat(theseKeys);
      if (_continutebreak_allKeys.length > 0) {
        continutebreak.keys = _continutebreak_allKeys[_continutebreak_allKeys.length - 1].name;  // just the last key pressed
        continutebreak.rt = _continutebreak_allKeys[_continutebreak_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    breakblockComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function breakblockRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'breakblock'-------
    breakblockComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('continutebreak.keys', continutebreak.keys);
    if (typeof continutebreak.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('continutebreak.rt', continutebreak.rt);
        routineTimer.reset();
        }
    
    continutebreak.stop();
    breaktime = 0;
    
    // the Routine "breakblock" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _continue5_allKeys;
var endComponents;
function endRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'end'-------
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    continue5.keys = undefined;
    continue5.rt = undefined;
    _continue5_allKeys = [];
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_text);
    endComponents.push(continue5);
    
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'end'-------
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_text* updates
    if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (end_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      end_text.setAutoDraw(false);
    }
    
    // *continue5* updates
    if (t >= 0.0 && continue5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue5.tStart = t;  // (not accounting for frame time here)
      continue5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { continue5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { continue5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { continue5.clearEvents(); });
    }

    if (continue5.status === PsychoJS.Status.STARTED) {
      let theseKeys = continue5.getKeys({keyList: ['space'], waitRelease: false});
      _continue5_allKeys = _continue5_allKeys.concat(theseKeys);
      if (_continue5_allKeys.length > 0) {
        continue5.keys = _continue5_allKeys[_continue5_allKeys.length - 1].name;  // just the last key pressed
        continue5.rt = _continue5_allKeys[_continue5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'end'-------
    endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('continue5.keys', continue5.keys);
    if (typeof continue5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('continue5.rt', continue5.rt);
        routineTimer.reset();
        }
    
    continue5.stop();
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
