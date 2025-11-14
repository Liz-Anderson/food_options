const app = Vue.createApp({
    data(){
        return{
            category: 'dinner',
            dinnerIn: [
                {name: 'Tacos', description: 'Our classic bean tacos with fresh veggies'},
                {name: 'Rice and Tofu', description: 'Rice bowl with baked garbonzo beans, pan fried tofu in sesame oil with braggs liquid aminos and nutritional yeast, and avocado'},
                {name: 'Pesto Pasta with a Green Salad', description: 'Pesto pasta sauce and a salad with spinach/lettuce, tomato, olives, green onions, croutons, and ranch or goddess dressing'},
                {name: 'Pumpkin Pasta with a Kale Salad', description: 'Pumpkin pasta sauce and a kale salad with nuts, dried cranberries, and poppyseed dressing'},
                {name: 'Fondue', description: 'Vegan fondue with bread, vegan sausages, potato, broccoli, and apple/pear for dipping'},
                {name: 'Breaded Tofu', description: 'Baked breaded tofu with mashed potatoes'},
                {name: 'Pot Pie with a Kale Salad', description: 'Seitan pot pie with potatoes, carrots, celery, and peas served with a kale salad with poppyseed dressing'}
            ],
            dinnerOut: {
                takeout: [
                    {name: 'Van Hanh', description: 'Vegan Chinese', link: 'https://veganpdx.us/'},
                    {name: 'Maruti', description: 'Vegan/vegetarian Indian', link: 'https://maruti-restaurant.com/'},
                    {name: 'Dove Vivi', description: 'Cornmeal crust pizza', link:'https://www.dovevivipizza.com/'},
                    {name: 'Rudy\'s', description: 'Regular pizza', link: 'http://rudyspizzapdx.com/'},
                    {name: 'Obon', description: 'Vegan Japanese (udon/onigiri)', link: 'https://www.obonpdx.com/'},
                ],
                eatIn: [
                    {name: 'Tusk', description: 'Mediterranean (falafel/hummus/tasty cocktails)', link: 'https://tuskpdx.com/'},
                    {name: 'Izakaya Kichinto', description: 'Japanese (ramen/udon/sushi)', link: 'https://izakayakichinto.com/'},
                    {name: 'Lilla', description: 'Vegan Italian', link: 'https://www.lillapdx.com/'},
                    {name: 'La Buca', description: 'Italian', link: 'https://labucaitaliancafe.com/'}
                ]
            },
            lunchIn: [
                {name: 'Chickpea Tuna Salad Sandwiches', description: 'Chickpea tuna salad made with vegenaise, mustard, celery, and other things'},
                {name: 'Burritos', description: 'Refried bean burritos with fresh veggies'},
                {name: 'Tofurky Sandwiches', description: 'Tofurky, cheese, fresh veggies'},
            ],
            lunchOut: [
                {name: 'MidCity SmashedBurger', description: 'Smash burger food cart', link: 'https://midcitysmashedburger.com/'},
                {name: 'Cultured Kindness', description: 'Vegan cheese shop with simple sandwiches', link: 'https://www.culturedkindness.com/'},
                {name: 'Ben and Esther\'s', description: 'Vegan Jewish deli', link: 'https://benandesthers.com/'},
                {name: 'Nacho\'s House', description: 'Mexican food cart', link: 'https://nachospdx.com/'},
                {name: 'Obon', description: 'Vegan Japanese (udon/onigiri)', link: 'https://www.obonpdx.com/'},
            ],
            breakfastIn: [
                {name: 'Oatmeal', description: 'Oatmeal with toppings'},
                {name: 'Cereal', description: 'Cereal/granola with milk'},
                {name: 'Toast', description: 'Avocado toast or other toast options'},
                {name: 'Pancake Breakfast', description: 'Pancakes, potatoes, and eggs'},
            ],
            breakfastOut: [
                {name: 'Epif', description: 'Vegan brunch', link: 'https://www.epifpdx.com/'},
                {name: 'City State', description: 'Diner brunch (benedicts/scrambles)', link: 'https://www.citystatediner.com/'},
                {name: 'Pie Spot', description: 'Breakfast sandwishes and quiches', link: 'https://www.pie-spot.com/'},
            ]
        }
    },
    methods: {
        addMeal(){

        },
    },

})

app.mount('#app')