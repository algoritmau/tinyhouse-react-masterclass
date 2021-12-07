# Listings

Listings is a full-stack, Airbnb-like web application to manage rental listings.

The backend is set up with [Apollo GraphQL](https://apollographql.com/), and the frontend is written in [React](https://reactjs.org/) with TypeScript.

## Routes

The app has ten routes:

- `/`: home page
- `/login`: login page
- `/listings`: listings page
- `/listing/:id`: single listing page
- `/listing/:id/edit`: edit listing page
- `/listings/:location?/`: listings page with location filter
- `/host`: host a listing
- `/user/:id`: user profile page
- `/stripe`: Stripe authentication page
- `/not-found`: 404 page

Routing is handled by [react-router](https://reacttraining.com/react-router/web/api/BrowserRouter).
