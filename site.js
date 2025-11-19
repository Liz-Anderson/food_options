const app = Vue.createApp({
    data(){
        return{
            category: 'dinner',
            section: 'home',
            dinnerIn: [
                {name: 'Tacos', description: 'Our classic bean tacos with fresh veggies', selected: false},
                {name: 'Rice and Tofu', description: 'Rice bowl with baked garbonzo beans, pan fried tofu in sesame oil with braggs liquid aminos and nutritional yeast, and avocado', selected: false},
                {name: 'Pesto Pasta with a Green Salad', description: 'Pesto pasta sauce and a salad with spinach/lettuce, tomato, olives, green onions, croutons, and ranch or goddess dressing', selected: false},
                {name: 'Pumpkin Pasta with a Kale Salad', description: 'Pumpkin pasta sauce and a kale salad with nuts, dried cranberries, and poppyseed dressing', selected: false},
                {name: 'Fondue', description: 'Vegan fondue with bread, vegan sausages, potato, broccoli, and apple/pear for dipping', selected: false},
                {name: 'Breaded Tofu', description: 'Baked breaded tofu with mashed potatoes', selected: false},
                {name: 'Pot Pie with a Kale Salad', description: 'Seitan pot pie with potatoes, carrots, celery, and peas served with a kale salad with poppyseed dressing', selected: false}
            ],
            dinnerOut: {
                takeout: [
                    {name: 'Van Hanh', description: 'Vegan Chinese', link: 'https://veganpdx.us/', selected: false},
                    {name: 'Maruti', description: 'Vegan/vegetarian Indian', link: 'https://maruti-restaurant.com/', selected: false},
                    {name: 'Dove Vivi', description: 'Cornmeal crust pizza', link:'https://www.dovevivipizza.com/', selected: false},
                    {name: 'Rudy\'s', description: 'Regular pizza', link: 'http://rudyspizzapdx.com/', selected: false},
                    {name: 'Obon', description: 'Vegan Japanese (udon/onigiri)', link: 'https://www.obonpdx.com/', selected: false},
                ],
                eatIn: [
                    {name: 'Tusk', description: 'Mediterranean (falafel/hummus/tasty cocktails)', link: 'https://tuskpdx.com/', selected: false},
                    {name: 'Izakaya Kichinto', description: 'Japanese (ramen/udon/sushi)', link: 'https://izakayakichinto.com/', selected: false},
                    {name: 'Lilla', description: 'Vegan Italian', link: 'https://www.lillapdx.com/', selected: false},
                    {name: 'La Buca', description: 'Italian', link: 'https://labucaitaliancafe.com/', selected: false}
                ]
            },
            lunchIn: [
                {name: 'Chickpea Tuna Salad Sandwiches', description: 'Chickpea tuna salad made with vegenaise, mustard, celery, and other things', selected: false},
                {name: 'Burritos', description: 'Refried bean burritos with fresh veggies', selected: false},
                {name: 'Tofurky Sandwiches', description: 'Tofurky, cheese, fresh veggies', selected: false},
            ],
            lunchOut: [
                {name: 'MidCity SmashedBurger', description: 'Smash burger food cart', link: 'https://midcitysmashedburger.com/', selected: false},
                {name: 'Cultured Kindness', description: 'Vegan cheese shop with simple sandwiches', link: 'https://www.culturedkindness.com/', selected: false},
                {name: 'Ben and Esther\'s', description: 'Vegan Jewish deli', link: 'https://benandesthers.com/', selected: false},
                {name: 'Nacho\'s House', description: 'Mexican food cart', link: 'https://nachospdx.com/', selected: false},
                {name: 'Obon', description: 'Vegan Japanese (udon/onigiri)', link: 'https://www.obonpdx.com/', selected: false},
            ],
            breakfastIn: [
                {name: 'Oatmeal', description: 'Oatmeal with toppings', selected: false},
                {name: 'Cereal', description: 'Cereal/granola with milk', selected: false},
                {name: 'Toast', description: 'Avocado toast or other toast options', selected: false},
                {name: 'Pancake Breakfast', description: 'Pancakes, potatoes, and eggs', selected: false},
            ],
            breakfastOut: [
                {name: 'Epif', description: 'Vegan brunch', link: 'https://www.epifpdx.com/', selected: false},
                {name: 'City State', description: 'Diner brunch (benedicts/scrambles)', link: 'https://www.citystatediner.com/', selected: false},
                {name: 'Pie Spot', description: 'Breakfast sandwishes and quiches', link: 'https://www.pie-spot.com/', selected: false},
            ]
        }
    },
    methods: {
        addMeal(){

        },
        selectMeal (meal){
            console.log("before: ", meal.selected)
            meal.selected = !meal.selected
            console.log("after: ", meal.selected)
        },
   
    },
    computed: {
        selected: function() {
            return this.breakfastOut.filter(function(item){
                return item.selected === true
            })
        }
    },

})

app.mount('#app')