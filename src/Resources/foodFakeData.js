const foodFakeData = [
    {
      title:'Grill with Vez',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/c6Fvt4p/lunch1.png',
      catagories:'lunch',
      price:22.99,
      id:107
    },
    {
      title:'Fried Chicken Bento',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/hLnKMky/lunch2.png',
      catagories:'lunch',
      price:12.99,
      id:108
    },
    {
      title:'Italiano Salmon',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/vmt8QRG/lunch3.png',
      catagories:'lunch',
      price:23.99,
      id:109
    },
    {
      title:'Indian Thali',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/0hMMG1y/lunch4.png',
      catagories:'lunch',
      price:15.99,
      id:110
    },
    {
      title:'Beaf Quinoa',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/nrH2VYk/dinner4.png',
      catagories:'lunch',
      price:7.99,
      id:111
    },
    {
      title:'Honey Soy Salmon',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/RTLDSN2/lunch6.png',
      catagories:'lunch',
      price:19.99,
      id:112
    },
    {
      title:'Salmon with Grapefruits',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/8zmD2d0/dinner1.png',
      catagories:'dinner',
      price:9.99,
      id:113
    },
    {
      title:'Lemony Salmon',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/FJpCpYJ/dinner2.png',
      catagories:'dinner',
      price:12.99,
      id:114
    },
    {
      title:'Beef Tenderiain',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/fMfFkHG/dinner3.png',
      catagories:'dinner',
      price:23.99,
      id:115
    },
    {
      title:'Baked Chicken',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/fY32nx7/lunch5.png',
      catagories:'dinner',
      price:15.99,
      id:116
    },
    {
      title:'Curlic Butter baked salmon',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/BjTSh6V/dinner5.png',
      catagories:'dinner',
      price:7.99,
      id:117
    },
    {
      title:'French fries with cheese',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/jW7Z1Fb/dinner6.png',
      catagories:'dinner',
      price:19.99,
      id:118
    },
    {
      title:'Egg Omelettes',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/2hXJqPJ/breakfast1.png',
      catagories:'breakfast',
      price:9.99,
      id:101
    },
    {
      title:'Breakfast sandwich',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/fN7dG08/breakfast2.png',
      catagories:'breakfast',
      price:12.99,
      id:102
    },
    {
      title:'Baked Fish',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/09kZcsW/breakfast3.png',
      catagories:'breakfast',
      price:23.99,
      id:103
    },
    {
      title:'Eggs benedict',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/vYzpM9y/breakfast4.png',
      catagories:'breakfast',
      price:15.99,
      id:104
    },
    {
      title:'Toast fried Egg',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/5j4kgTN/breakfast5.png',
      catagories:'breakfast',
      price:7.99,
      id:105
    },
    {
      title:'Full breakfast egg toast',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/RStSC2n/breakfast6.png',
      catagories:'breakfast',
      price:19.99,
      id:106
    },
  ]
  
  export default foodFakeData;