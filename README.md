# Apartment App Challenge
As a developer, I have been commissioned to create an application where a user can see apartments that are available for rent. As a user, I can see a list of apartments. I can click on an apartment listing and see more information about that apartment. As a user, I can create an account and log in to the application. If I am logged in, I can add an apartment to the list. As a logged in user, I can see a list of all the apartments as well as just the apartments I added. If my work is acceptable to my client, I may also be asked to add the ability to remove an apartment from the list as well as edit the apartment information.

### User Stories
**As an un-registered guest on the website, I can go to a web page and see a list of available apartments. Apartments have: a street designation, a city, state, a manager's name, manager's contact email, monthly rental price, bedrooms, bathrooms, and whether they allow pets**
- create rails app
- add devise installs
- add apartment resource
- define relationships between User and Apartment
- add seeds for User and Apartment
- install React component functionality
- install Reactstrap
- install React-router
- add components, pages, assets directories
- add mockApartments JS file
- set mock apartments in state
- add routes to App.js
- pass state data to ApartmentIndex
- map over data and display
- create link to ApartmentIndex
- added controller method for index
- added fetch request to index route

**As an un-registered guest on the website, I can click on an apartment to view its details**
- create ApartmentShow route
- find current apartment id by params and pass one apartment to ApartmentShow
- create link from ApartmentIndex to ApartmentShow
- display information for one apartment
- create routing to navigate back to ApartmentIndex or Home

**As an un-registered guest on the website, I can see a header element at the top of each page containing navigation to the other pages**
- create Header component
- add Reactstrap styling
- create NavLinks for Home and ApartmentIndex
- create anchor tags for Devise routes
- use conditional rendering to display sign_in_route or sign_out_route as appropriate

**As a un-registered guest, I can go to a registration page with a form and register as a new user**
- completed with Header element story

**As a registered user who has not logged in, I can go to a login page**
- completed with Header element story

**As a logged in user, I should be able to log out**
- completed with Header element story

**As a logged in user, I can go to a new apartment page with a form and create a new apartment**

**As a logged in user, I can edit the information for any apartment I have created, but I cannot edit the information for apartments that belong to someone else**
