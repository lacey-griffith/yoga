const { Pose } = require('../models')

const poseData = [
    {
        pose_name: 'Boat Pose',
        description: 'An ab and deep hip flexor strengthener, Boat Pose requires you to balance on the tripod of your sitting bones and tailbone to build mental and physical focus, inspiring a full-body awareness.',
        demo: '/images/boatpose.jpeg',
        difficulty: 'Beginner',
        target_group_id: [1]
    },
    {
        pose_name: 'Crow Pose',
        description: 'A compact arm balance, Crane Pose/Crow Pose encourages toning in the abs and the arms, strengthening in the core, and improves focus in the mind.',
        difficulty: 'Intermediate',
        demo: '/images/crowpose.jpeg',
        target_group_id: [1]
    },
    {
        pose_name: 'Triangle Pose',
        description: 'Extended Triangle Pose is the quintessential standing pose in many styles of yoga.',
        difficulty: 'Intermediate',
        demo: '/images/trianglepose.jpeg',
        target_group_id: [10]
    },
    {
        pose_name: 'King Pigeon Pose',
        description: 'Kapotasana invigorates your body and gives your spirits a lift. This extremely deep backbend is appropriate for advanced practitioners only.',
        difficulty: 'Advanced',
        demo: '/images/kingpigeonpose.jpeg',
        target_group_id: [4]
    },
    {
        pose_name: 'Half Frog Pose',
        description: 'Ease up into Half Frog Pose, called Ardha Bhekasana in Sanskrit. This pose strengthens the back while gently opening up the shoulders, chest, and thighs—a loving treat for the entire body.',
        difficulty: 'Advanced',
        demo: '/images/halffrogpose.jpeg',
        target_group_id: [10]
    },
    {
        pose_name: 'Chair Pose',
        description: 'Chair Pose clearly works the muscles of the arms and legs, but it also stimulates the diaphragm and heart.',
        difficulty: 'Beginner',
        demo: '/images/chairpose.jpeg',
        target_group_id: [2]
    },
    {
        pose_name: 'Child Pose',
        description: 'Take a break. Balasana is a restful pose that can be sequenced between more challenging asanas.',
        difficulty: 'Beginner',
        demo: '/images/childpose.jpeg',
        target_group_id: [3]
    },
    {
        pose_name: 'Heron Pose',
        difficulty: 'Beginner',
        demo: '/images/heronpose.jpeg',
        description: 'Virasana is a balm for tired legs at the end of the day, as well as an alternative to Lotus for seated meditation.',
        target_group_id: [2]
    },
    {
        pose_name: 'Garland Pose',
        description: 'An excellent facilitator of good pelvic floor health, Garland Pose, called Malasana in Sanskrit, stretches the ankles, groins, and back while stimulating proper digestion. No worries if your heels dont reach the floor—simply rest them on a folded blanket.',
        difficulty: 'Intermediate',
        demo: '/images/garlandpose.jpeg',
        target_group_id: [12]
    },
    {
        pose_name: 'One Legged king Pigeon',
        description: 'One-Legged King Pigeon Pose II allows you to stretch the entire front body and deep into the hip flexors to strengthen your back and improve posture.',
        difficulty: 'Advanced',
        demo: '/images/onelegkingpigeonpose.jpeg',
        target_group_id: [2]
    },
    {
        pose_name: 'Noose Pose',
        description: 'In the noose pose, the arms are wrapped around the squatting legs and the hands are clasped behind the back, forming a "noose."',
        difficulty: 'Intermediate',
        demo: '/images/noosepose.jpeg',
        target_group_id: [6]
    },
    {
        pose_name: 'Downward Facing Dog',
        description: 'One of yogas most widely recognized poses, Downward-Facing Dog Pose, called Adho Mukha Svanasana in Sanskrit, works to strengthen the core and improve circulation. This rejuvenating pose works to provide a delicious, full-body stretch.',
        difficulty: 'Beginner',
        demo: '/images/downwardfacingdog.jpeg',
        target_group_id: [15]
    },
    {
        pose_name: 'Dolphin Pose',
        description: 'Dolphin pose strengthens the core, arms, and legs, while also nicely opening the shoulders.',
        difficulty: 'Beginner',
        demo: '/images/dolphinpose.jpeg',
        target_group_id: [3]
    },
    {
        pose_name: 'Supported Headstand',
        description: 'Meet the king. Standing on your head in proper alignment not only strengthens the whole body but calms the brain.',
        difficulty: 'Intermediate',
        demo: '/images/supportedheadstand.jpeg',
        target_group_id: [3]
    },
    {
        pose_name: 'Side Crow Pose',
        description: 'The key to Parsva Bakasana is twisting enough to place the outer edge of one upper arm far around the outside of the opposite thigh.',
        difficulty: 'Advanced',
        demo: '/images/sidecrowpose.jpeg',
        target_group_id: [17]
    },
    {
        pose_name: 'Eight Angle Pose',
        description: 'Fire up your abs for this difficult asymmetrical arm balance, Eight-Angle Pose.',
        difficulty: 'Advanced',
        demo: '/images/eightanglepose.jpeg',
        target_group_id: [5]
    },
    {
        pose_name: 'Cat Pose',
        description: 'This pose provides a gentle massage to the spine and belly organs.',
        difficulty: 'Beginner',
        demo: '/images/catpose.jpeg',
        target_group_id: [4]
    },
    {
        pose_name: 'Cow Pose',
        description: 'Cow Pose is an easy, gentle way to warm up the spine.',
        difficulty: 'Beginner',
        demo: '/images/cowpose.jpeg',
        target_group_id: [4]
    },
    {
        pose_name: 'Bridge Pose',
        description: 'Bridge Pose can be whatever you need—energizing, rejuvenating, or luxuriously restorative.',
        difficulty: 'Beginner',
        demo: '/images/bridgepose.jpeg',
        target_group_id: [16]
    },
    {
        pose_name: 'Cobra Pose',
        description: 'By providing a conscious opening in the chest and stretch in the shoulders, Cobra Pose fights fatigue and relieves lower back pain, boosting both the energetic and the physical body.',
        difficulty: 'Intermediate',
        demo: '/images/cobrapose.jpeg',
        target_group_id: [8]
    },
    {
        pose_name: 'Half Lord Of The Fishes Pose',
        description: 'Half Lord of the Fishes Pose/Seated Twist Pose, called Ardha Matsyendrasana in Sanskrit, invites an energy in the spine that helps to stimulate proper digestion while improving postural and body awareness.',
        difficulty: 'Advanced',
        demo: '/images/halflordofthefishespose.jpeg',
        target_group_id: [11]
    },
    {
        pose_name: 'Easy Pose',
        description: 'Do not let the name fool you. If you are used to sitting in chairs, Easy Pose or Sukhasana can be quite challenging.',
        difficulty: 'Beginner',
        demo: '/images/easypose.jpeg',
        target_group_id: [2]
    },
    {
        pose_name: 'Eagle Pose',
        description: 'You need strength, flexibility, and endurance, and unwavering concentration for Eagle Pose.',
        difficulty: 'Intermediate',
        demo: '/images/eaglepose.jpeg',
        target_group_id: [2]
    },
    {
        pose_name: 'Locust Pose',
        description: 'Salabhasana or Locust Pose effectively preps beginners for deeper backbends, strengthening the back of the torso, legs, and arms.',
        difficulty: 'Beginner',
        demo: '/images/locustpose.jpeg',
        target_group_id: [7]
    },
    {
        pose_name: 'Marichis pose',
        description: 'Sometimes called the Sages Pose, Marichis Pose is a wise addition to any practice.',
        difficulty: 'Intermediate',
        demo: '/images/marichipose.jpeg',
        target_group_id: [4]
    },
    {
        pose_name: 'Bound Angle pose',
        description: 'Bound Angle Pose/Cobblers Pose works to open the deepest part of the hip muscles. It will gently stretch sore hips post-workout while improving postural and body awareness.',
        difficulty: 'Beginner',
        demo: '/images/boundanglepose.jpeg',
        target_group_id: [5]
    },
    {
        pose_name: 'Half Moon Pose',
        description: 'Say hello to leg and ankle strength as you seek stability and extend into this balancing pose, Half Moon Pose.',
        difficulty: 'Intermediate',
        demo: '/images/halfmoonpose.jpeg',
        target_group_id: [5]
    },
    {
        pose_name: 'Reclining Bound Angle Pose',
        description: 'A classic restorative posture, Supta Baddha Konasana or Reclining Bound Angle Pose can be modified for any level of hip and groin resistance.',
        difficulty: 'Intermediate',
        demo: '/images/recliningboundanglepose.jpeg',
        target_group_id: [6]
    },
    {
        pose_name: 'High Lunge',
        description: 'Counteract the effects of Modern-Day Sitting Syndrome by lengthening your hip flexors in High Lunge.',
        difficulty: 'Beginner',
        demo: '/images/highlunge.jpeg',
        target_group_id: [12]
    },
    {
        pose_name: 'Salutation Seal',
        description: 'Practicing Anjali Mudra is an excellent way to induce a meditative state of awareness.',
        difficulty: 'Beginner',
        demo: '/images/salutationseal.jpeg',
        target_group_id: [17]
    },
    {
        pose_name: 'Scale Pose',
        description: 'Strengthen your wrists, arms, and abs, hanging in the balance of Tolasana.',
        difficulty: 'Beginner',
        demo: '/images/scalepose.jpeg',
        target_group_id: [17]
    },
    {
        pose_name: 'Happy Baby',
        description: 'This pose gently brings a greater awareness to the hip joints.',
        difficulty: 'Beginner',
        demo: '/images/happybabypose.jpeg',
        target_group_id: [15]
    },
    {
        pose_name: 'Camel Pose',
        description: 'Bump up your energy by bending back into Camel Pose, called Urstrasana in Sanskrit. Urstrasana counteracts slouching and relieves lower back pain with a generous, heart-opening stretch while also helping to build confidence.',
        difficulty: 'Beginner',
        demo: '/images/camelpose.jpeg',
        target_group_id: [14]
    },
    {
        pose_name: 'Bow pose',
        description: 'Bend back into the shape of a bow to feel energetically locked, loaded, and ready to take aim.',
        difficulty: 'Intermediate',
        demo: '/images/bowpose.jpeg',
        target_group_id: [14]
    },
    {
        pose_name: 'Gate Pose',
        description: 'Extend some love to your often neglected side body in Parighasana or Gate Pose.',
        difficulty: 'Beginner',
        demo: '/images/gatepose.jpeg',
        target_group_id: [14]
    },
    {
        pose_name: 'Plow Pose',
        description: 'Plow Pose reduces backache and can help you get to sleep.',
        difficulty: 'Intermediate',
        demo: '/images/plowpose.jpeg',
        target_group_id: [13]
    },
    {
        pose_name: 'Fish Pose',
        description: 'Boost the bodys energy and fight fatigue with Fish Pose, or Matsyasana in Sanskrit, while building confidence with a loving stretch in the shoulders. It is said that if you perform Matsyasana in water, you will be able to float like a fish.',
        difficulty: 'Beginner',
        demo: '/images/fishpose.jpeg',
        target_group_id: [13]
    },
    {
        pose_name: 'Big Toe Pose',
        description: 'This pose gently lengthens and strengthens even stubbornly tight hamstrings.',
        difficulty: 'Beginner',
        demo: '/images/bigtoepose.jpeg',
        target_group_id: [9]
    },
    {
        pose_name: 'Sphinx Pose',
        description: 'Sphinx Pose is the infant of backbends. It can be practiced with either an active or passive approach.',
        difficulty: 'Beginner',
        demo: '/images/sphinxpose.jpeg',
        target_group_id: [9]
    },
    {
        pose_name: 'Staff Pose',
        description: 'It might look straightforward, but theres more to Staff Pose than meets the eye.',
        difficulty: 'Beginner',
        demo: '/images/staffpose.jpeg',
        target_group_id: [9]
    },
    {
        pose_name: 'Upward Facing Two-Foot Staff Pose',
        description: 'Can you practice Wheel with straight arms and Headstand without strain? Then, you are ready.',
        difficulty: 'Advanced',
        demo: '/images/upwardfacingtwofootstaffpose.jpeg',
        target_group_id: [9]
    }
]

const seedPoses = () => Pose.bulkCreate(poseData);

module.exports = seedPoses;