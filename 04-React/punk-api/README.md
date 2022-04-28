\*Task: <br/>
Build a website in React that uses the Punk API data.

User Story:
The app should fulfill the following stories:

- Display a range of beers
- Search for a specific beer using the search bar
- Use the checkboxes to filter by the following three conditions:
- High Alcohol content (ABV value greater than 6%)
- Classic Range (was first brewed before 2010)
- High Acidity (pH lower than 4)

Approach:

- Initially I started by breaking down the webpage, creating the components based on a component tree.

- I also tested out the data (to later be imported via an API request). I used Postman to understand which data structures had been used to store the beer information and how I can later access certain bits of information from the data.

- Display a range of beers
  I chose to display the range of beers using card components. Using the React hook useState, I set state to an onClick event on the card component. I was able to flip the cards, enabling the user to see more information for each beer on the front and back of each card.

- To make it clear for the user where to 'Filter' the beers, I added a button, which triggered a state change - toggling open/close the NavBar component.

- Housed within this was the Searchbar and checkbox filters.
  To add functionality to the Searchbar and allow the user to search for a specific beer I set the onChange event to state.(i.e. when an input is added to the Searchbar), capture the value inside of the input box and use that to filter the beers, re-rendering the card components on the page based on the search term.

- Filter Functionality
  To use the checkboxes to filter by the three conditions (highABV, Classic Range, pHLevel) I created three individual states. I added an onClick event to each checkbox that toggled each change in state, dependent on which box had been clicked.

According to the punk API docs, you can apply several filters using url parameters (passed in as a query string to the end of the root endpoint), so I could use the API's data to filter for both:
• High Alcohol content (ABV value greater than 6%)
• Classic Range (was first brewed before 2010)

Saving each unique end point in a variable, I could use a ternary operator to render the specific filtered beers based on whether the state for each was set to true. Either returning the unique end-points that would be added onto the end of the fetch request(for all beers) or returning a blank string (i.e. state set to false so rendering all beers (default state set in the useEffect)).

There was no predetermined filter for the pHLevel search condition, so I had to manually filter beers returning those that contained a pHLevel less than 4. I then conditionally rendered the beers based on whether the acidicBeer state was true (display only those beers that have a pHLevel < 4) or false (instead displaying all beers on the page).
Mapping over the data and rendering a card for each beer.

- Fetching from the API
- Using the Punk API data for the React app.
- useEffect - WHY AND HOW I'VE USED THIS
  default state for the API request was set to all beers from the Brewdog data.
- Built out a service to hold the fetch request - WHY?

- Testing:
- Unit tested the components using the enzyme testing library.
  I've tested for the following things:
- Basic rendering, including rendering nested child components.
- Testing state changes on components and the associated side effect/behaviours
- Testing props have been successfully passed down to components
- Using mock functions to test my functions.

######

[checking the api?]
[checking the filters?]

#####

Next Steps:

- To refactor my approach, relook at containers vs. components to try to split out the logic from the presentational components more clearly.
