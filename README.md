### Flight Booking Service

## Description
The Flight Booking Service is a web application designed to facilitate the booking and management of flight tickets. It utilizes a robust backend built with Node.js and Sequelize to handle complex transactions and ensure data consistency.

## Features
- **Flight Search**: Users can search for flights based on their preferred dates, destinations, and number of passengers.
- **Seat Selection**: Allows passengers to choose their seats during the booking process.
- **Booking Management**: Users can view, modify, or cancel their bookings.
- **Real-time Updates**: Flight statuses and seat availability are updated in real-time.
- **Automated Notifications**: Automated notifications for flight changes and reminders through cron jobs.

## Technologies Used
- **Backend**: Node.js, Express
- **Database**: MySQL, Sequelize ORM
- **Scheduling**: node-cron for handling scheduled tasks like notifications and reminders.

### Prerequisites
- Node.js
- MySQL
- npm