<h1>TravelTrucks Camper Rental Application</h1>

<h2>Project Overview</h2>

The goal of this project is to develop the frontend of the TravelTrucks web application, a platform for renting camper vans. The application allows users to browse available campers, filter based on specific criteria, view detailed camper information with reviews, and make a reservation.

This frontend application integrates with a backend API to retrieve and display camper data. The backend API is available at: [https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers]

<h3>Main API Endpoints:</h3>

GET /campers - Fetches all camper listings (filters must be applied on the backend).

GET /campers/:id - Fetches details of a specific camper by ID.


<h2>Project Requirements</h2>

<h3>Technologies and Libraries</h3>

* ***Framework:*** React with Vite bundler
* ***State Management:*** Redux
* ***Routing:*** React Router
* ***HTTP Requests:*** Axios
* ***CSS Library:*** Styled-components

<h3>Key Pages</h3>

1. ***Home Page:*** Features a banner with a primary call-to-action.

2. ***Catalog Page:*** Displays all available campers with filtering options such as location, vehicle type, air conditioning, kitchen, and more.

3. ***Camper Details Page:*** Shows in-depth information about a selected camper, including a photo gallery, user reviews, and a reservation form.

<h3>Routing</h3>

- / - Home Page

- /catalog - Catalog Page

- /catalog/:id - Camper Details Page

<h3>Application State</h3>

- Redux is used to manage global state.
- Global state includes camper listings, selected filters, and a favorites list.
- Upon submitting a new filter, previous search results are cleared to reflect the latest filtered data accurately.

<h2>Functional Requirements</h2>

1. ***Navigation:*** Users can navigate from the Home Page to the Catalog by clicking "View Now."
2. ***Filtering:*** Camper filtering options include location, body type, and various amenities (AC, kitchen, etc.). All filtering is handled on the backend.
3. ***Favorites:*** Users can add campers to a "favorites" list, which persists even upon page reload.
4. ***Camper Details Navigation:*** Users can click "Show more" on any camper card to open the detailed view of that camper in a new tab.
5. ***Load More:*** On the Catalog Page, users can click "Load More" to fetch additional camper listings.
6. ***Reviews:*** Camper details include user reviews with a five-star rating system.
7. ***Booking Form:*** Users can reserve a camper by filling out a booking form. Upon successful form submission, a success notification is displayed.

<h2>Design and Development Standards</h2>

-  Uses React components to ensure reusability
-  Deployment: The project is deployed on vercel.com 

<h3>Critical Evaluation Criteria</h3>

* Routing on live deployment.
* Includes functional pagination for camper listings.
* Integrates smoothly with the backend API.
* Displays loader during asynchronous requests.

<h2>Getting Started</h2>

<h3>Installation</h3>

Install dependencies:

```
npm install
```
Start the development server:

```
npm run dev
```


<h2>Author</h2>
Created by Olena Yarotska.
