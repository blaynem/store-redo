This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Creating a Shop-App
Creating a shop similar to the shop-poymer-project app, but with React. Using it's details/pictures/layout, but coding it on my own.

# Try it out
You can give it a try [here](blaynestoretest.surge.sh).

## Tools Used
- React
- React-Router v4
- Redux
- Mock API data

## Todo
- Add notification popup when adding thing to cart
- Actual styling outside of bootstrap layout
- Loading transitions
- If you add an item of same size/type, it should be added to quantity, not another row itself.
- Potentially add storing your cart for later?
- Add a fake checkout thing
	- How far down this rabbit hole I should do, I'm not sure? Maybe just some form validation.
- ~~Add "your cart is empty" notice~~
- ~~# of items in cart should should actually quantity of items, not just how many rows there are~~
	- I actually think it's fine this way after viewing some more stuff.
- ~~Back button to work~~
- ~~Need to calculate total~~

## Learned/Problems
Couldn't get redux working, ended up being that I was not mapping state to my props correctly. When I added a new action, I also forgot to add it into the connect function.. So that took a bit to figure out.

Had a mapping issue where if you deleted an item in your cart, it would delete every item below it as well. Ended up switching the reducer to a filter and it worked correctly. Wasn't able to identify what the real issue was.

Learned a bit more on how to structure data, though I should ultimately refactor it/rename some things. 
