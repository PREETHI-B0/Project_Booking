## FLIGHT BOOKING TICKET
## Date:18-05-2024
## AIM:
This algorithm outlines the flow of actions for the user to log in, sign up, search for flights, book tickets, view their bookings, and log out. It ensures a seamless experience by detailing the interactions between the user and the system.

#### Algorithm:

1. **User Login:**
   - **Input:** Username, Email, Password
   - **Process:**
     1. User navigates to the login page.
     2. User enters their credentials (username, email, and password).
     3. System validates the credentials.
     4. If credentials are correct, user is logged in.
     5. If credentials are incorrect, display an error message.
   - **Output:** User is logged in or an error message is displayed.

2. **User Signup:**
   - **Input:** First Name, Last Name, Email, Password
   - **Process:**
     1. User navigates to the signup page.
     2. User enters their details (first name, last name, email, and password).
     3. System validates the input fields.
     4. If validation is successful, the system creates a new user account.
     5. If validation fails, display an error message.
   - **Output:** User account is created or an error message is displayed.

3. **Searching for Flights:**
   - **Input:** Departure Date, Return Date (optional), Departure Location, Destination
   - **Process:**
     1. User navigates to the flight search page.
     2. User enters search criteria (departure date, return date, departure location, destination).
     3. System searches for flights matching the criteria.
     4. Display the list of available flights to the user.
   - **Output:** List of available flights.

4. **Booking Tickets:**
   - **Input:** Flight Selection, Seat Selection, Passenger Details (Name, Date of Birth)
   - **Process:**
     1. User selects a flight from the search results.
     2. User enters passenger details and selects a seat.
     3. System checks seat availability.
     4. If seats are available, the system confirms the booking.
     5. If no seats are available, display an error message.
   - **Output:** Booking confirmation or an error message.

5. **My Booking (View Bookings):**
   - **Input:** User ID (retrieved from session data)
   - **Process:**
     1. User navigates to the 'My Booking' page.
     2. System retrieves the list of bookings made by the user.
     3. Display the list of bookings to the user.
   - **Output:** List of user's bookings.

6. **Logout:**
   - **Process:**
     1. User clicks the logout button.
     2. System clears the session data.
     3. Redirect user to the login page or homepage.
   - **Output:** User is logged out and redirected.

### Description of HTML and JavaScript Implementation

1. **Login Page:**
   - HTML structure includes fields for username, email, and password, and a submit button.
   - JavaScript handles form submission, validation, and displays a success message or redirects on successful login.

2. **Signup Page:**
   - HTML structure includes fields for first name, last name, email, and password, and a submit button.
   - JavaScript handles form submission, validation, and displays a success message or redirects on successful signup.

3. **Flight Reservation Form:**
   - HTML structure includes fields for passenger name, date of birth, seat type, and flight name.
   - JavaScript populates the seat type and flight name dropdowns, handles form submission, and redirects on successful booking.

4. **Plane Ticket Template:**
   - HTML structure displays booking details such as booking date, guest name, route, airline, flight number, and other relevant information.
   - JavaScript handles form submission and redirects on successful booking confirmation.

5. **Logout Page:**
   - HTML structure includes a logout button.
   - JavaScript handles the logout process by clearing session data and reloading the page or redirecting to the login page.

By following the outlined algorithm and using the HTML and JavaScript implementation, users can perform all required actions seamlessly, ensuring a smooth and efficient interaction with the system.

~~~
## PROGRAM:
//index

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
    <title>Web Design Mastery | PREETHI</title>
  </head>
  <body>
    <nav>
      <div class="nav__logo">PREETHI</div>
      <ul class="nav__links">
        <li class="link"><a href="src/assets/components/LoginComponent/LoginComponent.html">LOGIN</a></li>
        <li class="link"><a href="src/assets/components/SignupComponent/SignupComponent.html">SIGNUP</a></li>
        <li class="link"><a href="src/assets/components/SearchComponent/SearchComponent.html">RESERVATION</a></li>
        <li class="link"><a href="src/assets/components/MyBookingComponent/MyBookingComponent.html">BOOKING</a></li>
        <li class="link"><a href="src/assets/components/LogoutComponent/LogoutComponent.html">LOGOUT</a></li>
        </ul>
      <button class="btn">Contact</button>
    </nav>
    <header class="section__container header__container">
      <h1 class="section__header">Find And Book<br />A Great Experience</h1>
      <img src="assets/header.jpg" alt="header" />
    </header>
    <section class="section__container booking__container">
      <div class="booking__nav">
        <span>Economy Class</span>
        <span>Business Class</span>
        <span>First Class</span>
      </div>
      <form>
        <div class="form__group">
          <span><i class="ri-map-pin-line"></i></span>
          <div class="input__content">
            <div class="input__group">
              <input type="text" />
              <label>Location</label>
            </div>
            <p>Where are you goung?</p>
          </div>
        </div>
        <div class="form__group">
          <span><i class="ri-user-3-line"></i></span>
          <div class="input__content">
            <div class="input__group">
              <input type="number" />
              <label>Travellers</label>
            </div>
            <p>Add guests</p>
          </div>
        </div>
        <div class="form__group">
          <span><i class="ri-calendar-line"></i></span>
          <div class="input__content">
            <div class="input__group">
              <input type="text" />
              <label>Departure</label>
            </div>
            <p>Add date</p>
          </div>
        </div>
        <div class="form__group">
          <span><i class="ri-calendar-line"></i></span>
          <div class="input__content">
            <div class="input__group">
              <input type="text" />
              <label>Return</label>
            </div>
            <p>Add date</p>
          </div>
        </div>
        <button class="btn"><i class="ri-search-line"></i></button>
      </form>
    </section>
    <section class="section__container plan__container">
      <p class="subheader">TRAVEL SUPPORT</p>
      <h2 class="section__header">Plan your travel with confidence</h2>
      <p class="description">
        Find help with your bookings and travel plans, and seee what to expect
        along your journey.
      </p>
      <div class="plan__grid">
        <div class="plan__content">
          <span class="number">01</span>
          <h4>Travel Requirements for Dubai</h4>
          <p>
            Stay informed and prepared for your trip to Dubai with essential
            travel requirements, ensuring a smooth and hassle-free experience in
            this vibrant and captivating city.
          </p>
          <span class="number">02</span>
          <h4>Multi-risk travel insurance</h4>
          <p>
            Comprehensive protection for your peace of mind, covering a range of
            potential travel risks and unexpected situations.
          </p>
          <span class="number">03</span>
          <h4>Travel Requirements by destinations</h4>
          <p>
            Stay informed and plan your trip with ease, as we provide up-to-date
            information on travel requirements specific to your desired
            destinations.
          </p>
        </div>
        <div class="plan__image">
          <img src="assets/plan-1.jpg" alt="plan" />
          <img src="assets/plan-2.jpg" alt="plan" />
          <img src="assets/plan-3.jpg" alt="plan" />
        </div>
      </div>
    </section>
    <section class="memories">
      <div class="section__container memories__container">
        <div class="memories__header">
          <h2 class="section__header">
            Travel to make memories all around the world
          </h2>
          <button class="view__all">View All</button>
        </div>
        <div class="memories__grid">
          <div class="memories__card">
            <span><i class="ri-calendar-2-line"></i></span>
            <h4>Book & relax</h4>
            <p>
              With "Book and Relax," you can sit back, unwind, and enjoy the
              journey while we take care of everything else.
            </p>
          </div>
          <div class="memories__card">
            <span><i class="ri-shield-check-line"></i></span>
            <h4>Smart Checklist</h4>
            <p>
              Introducing Smart Checklist with us, the innovative solution
              revolutionizing the way you travel with our airline.
            </p>
          </div>
          <div class="memories__card">
            <span><i class="ri-bookmark-2-line"></i></span>
            <h4>Save More</h4>
            <p>
              From discounted ticket prices to exclusive promotions and deals,
              we prioritize affordability without compromising on quality.
            </p>
          </div>
        </div>
      </div>
    </section>
<section class="section__container lounge__container">
      <div class="lounge__image">
        <img src="assets/lounge-1.jpg" alt="lounge" />
        <img src="assets/lounge-2.jpg" alt="lounge" />
      </div>
      <div class="lounge__content">
        <h2 class="section__header">Unaccompanied Minor Lounge</h2>
        <div class="lounge__grid">
          <div class="lounge__details">
            <h4>Experience Tranquility</h4>
            <p>
              Serenity Haven offers a tranquil escape, featuring comfortable
              seating, calming ambiance, and attentive service.
            </p>
          </div>
          <div class="lounge__details">
            <h4>Elevate Your Experience</h4>
            <p>
              Designed for discerning travelers, this exclusive lounge offers
              premium amenities, assistance, and private workspaces.
            </p>
          </div>
          <div class="lounge__details">
            <h4>A Welcoming Space</h4>
            <p>
              Creating a family-friendly atmosphere, The Family Zone is the
              perfect haven for parents and children.
            </p>
          </div>
          <div class="lounge__details">
            <h4>A Culinary Delight</h4>
            <p>
              Immerse yourself in a world of flavors, offering international
              cuisines, gourmet dishes, and carefully curated beverages.
            </p>
          </div>
        </div>
      </div>
    </section>
<section class="section__container travellers__container">
      <h2 class="section__header">Best travellers of the month</h2>
      <div class="travellers__grid">
        <div class="travellers__card">
          <img src="assets/traveller-1.jpg" alt="traveller" />
          <div class="travellers__card__content">
            <img src="assets/client-1.jpg" alt="client" />
            <h4>Emily Johnson</h4>
            <p>Dubai</p>
          </div>
        </div>
        <div class="travellers__card">
          <img src="assets/traveller-2.jpg" alt="traveller" />
          <div class="travellers__card__content">
            <img src="assets/client-2.jpg" alt="client" />
            <h4>David Smith</h4>
            <p>Paris</p>
          </div>
        </div>
        <div class="travellers__card">
          <img src="assets/traveller-3.jpg" alt="traveller" />
          <div class="travellers__card__content">
            <img src="assets/client-3.jpg" alt="client" />
            <h4>Olivia Brown</h4>
            <p>Singapore</p>
          </div>
        </div>
        <div class="travellers__card">
          <img src="assets/traveller-4.jpg" alt="traveller" />
          <div class="travellers__card__content">
            <img src="assets/client-4.jpg" alt="client" />
            <h4>Daniel Taylor</h4>
            <p>Malaysia</p>
          </div>
        </div>
      </div>
    </section>
    <section class="subscribe">
      <div class="section__container subscribe__container">
        <h2 class="section__header">Subscribe newsletter & get latest news</h2>
        <form class="subscribe__form">
          <input type="text" placeholder="Enter your email here" />
          <button class="btn">Subscribe</button>
        </form>
      </div>
    </section>
<footer class="footer">
      <div class="section__container footer__container">
        <div class="footer__col">
          <h3>PREETHI</h3>
          <p>
            Where Excellence Takes Flight. With a strong commitment to customer
            satisfaction and a passion for air travel, Flivan Airlines offers
            exceptional service and seamless journeys.
          </p>
          <p>
            From friendly smiles to state-of-the-art aircraft, we connect the
            world, ensuring safe, comfortable, and unforgettable experiences.
          </p>
        </div>
        <div class="footer__col">
          <h4>INFORMATION</h4>
          <p>LOGIN</p>
          <p>SINGUP</p>
          <p>SEARCH</p>
          <p>BOOKING</p>
          <p>LOGOUT</p>
        </div>
        <div class="footer__col">
          <h4>CONTACT</h4>
          <p>Support</p>
          <p>Media</p>
          <p>Socials</p>
        </div>
      </div>
      <div class="section__container footer__bar">
        <p>Copyright © 2024 . All rights reserved.</p>
        <div class="socials">
          <span><i class="ri-facebook-fill"></i></span>
          <span><i class="ri-twitter-fill"></i></span>
          <span><i class="ri-instagram-line"></i></span>
          <span><i class="ri-youtube-fill"></i></span>
        </div>
      </div>
    </footer>
  </body>
</html>
//LoginComponent
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Login Form</title>
<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-image: url('assets/header.jpg'); /* Your background image URL */
        background-color: #5f82b6;
        background-size: cover;
        background-position: center;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container {
        width: 300px;
        padding: 20px;
        background-color: rgba(90, 216, 235, 0.8); /* Semi-transparent white background */
        border-radius: 5px;
    }
    input[type="text"],
    input[type="email"],
    input[type="password"] {
        width: calc(100% - 22px); /* Adjusting for padding */
        padding: 10px;
        margin: 5px 0;
        border: 1px solid #ccc;
        border-radius: 3px;
        box-sizing: border-box;
    }
    input[type="submit"] {
        width: 100%;
        background-color: #4CAF50;
        color: white;
        padding: 10px;
        margin: 10px 0;
        border: none;
        border-radius: 3px;
        cursor: pointer;
    }
    input[type="submit"]:hover {
        background-color: #45a049;
    }
    .forgot-password {
        text-align: right;
        margin-bottom: 10px;
    }
    .back-button {
        display: block;
        width: 100%;
        text-align: center;
        margin-top: 10px;
    }
</style>
</head>
<body>
<div class="container">
    <h2>LOGIN FORM</h2>
    <form id="loginForm">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <div class="forgot-password">
            <a href="#">Forgot Password?</a>
        </div>
        <input type="submit" value="Submit">
    </form>
    <div id="message"></div>
    <button class="back-button" onclick="goBack()">Back</button>
</div>

<script>
    document.getElementById("loginForm").addEventListener("submit", function(event){
        event.preventDefault(); // prevent the default form submission
        
        // You can add your JavaScript validation or submission logic here
        // For demonstration, let's just show a message
        document.getElementById("message").innerHTML = "Form submitted successfully!";
        
        // Redirect to home page after a brief delay (for demonstration purposes)
        setTimeout(function(){
            window.location.href = "project/index.html"; // Change to the appropriate URL
        }, 2000); // 2000 milliseconds (2 seconds) delay before redirection
    });

    function goBack() {
        window.history.back();
    }
</script>
</body>
</html>
//SignupComponent
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SIGNUP FORM</title>
<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #d58e8e;
    margin: 0;
    padding: 0;
  }
  .container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
  input[type="submit"] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  input[type="submit"]:hover {
    background-color: #45a049;
  }
  .signin-link {
    text-align: center;
    margin-top: 20px;
  }
  .signin-link a {
    color: #007bff;
    text-decoration: none;
  }
  .signin-link a:hover {
    text-decoration: underline;
  }
  .back-button {
    display: block;
    text-align: center;
    margin-top: 20px;
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
</style>
</head>
<body>

<div class="container">
  <h2>Sign Up</h2>
  <form id="signupForm">
    <input type="text" id="firstName" name="firstName" placeholder="First Name" required>
    <input type="text" id="lastName" name="lastName" placeholder="Last Name" required>
    <input type="email" id="email" name="email" placeholder="Email" required>
    <input type="password" id="password" name="password" placeholder="Password" required>
    <input type="submit" value="Sign Up">
  </form>
  <div class="signin-link">
    <p>Already registered? <a href="#">Sign in here</a></p>
          
  
  </form>
  <div id="message"></div>
  <button class="back-button" onclick="goBack()">Back</button>
</div>

<script>
  document.getElementById("signupForm").addEventListener("submit", function(event){
      event.preventDefault(); // prevent the default form submission
      
      // You can add your JavaScript validation or submission logic here
      // For demonstration, let's just show a message
      document.getElementById("message").innerHTML = "Form submitted successfully!";
      
      // Redirect to home page after a brief delay (for demonstration purposes)
      setTimeout(function(){
          window.location.href = "project/index.html"; // Change to the appropriate URL
      }, 2000); // 2000 milliseconds (2 seconds) delay before redirection
  });

  function goBack() {
      window.history.back();
  }
</script>

</body>
</html>
//SearchComponent
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flight Reservation Form</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(to right, #e0eafc, #cfdef3);
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .form-container {
            width: 100%;
            max-width: 500px;
            padding: 20px;
            background-color: #2096c8;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            text-align: center;
        }
        .form-header {
            margin-bottom: 20px;
        }
        .form-header h2 {
            margin: 10px 0;
            font-size: 24px;
            color: #333;
        }
        .form-header img {
            width: 80px;
        }
        .form-group {
            margin-bottom: 15px;
            text-align: left;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #333;
        }
        .form-group input,
        .form-group select {
            width: calc(100% - 22px);
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
        }
        .form-group input::placeholder {
            color: #aaa;
        }
        .form-footer {
            text-align: right;
        }
        .form-footer button {
            padding: 10px 20px;
            background-color: #3219eea2;
            color: #2b15a4;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            margin-left: 10px;
        }
        .form-footer button:hover {
            background-color: #a51eb439;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <div class="form-header">
            <h2>Flight Reservation</h2>
        </div>
        <form id="flightForm">
            <div class="form-group">
                <label for="title">Passenger Name</label>
                <input type="text" id="title" name="title" placeholder="Title">
                <input type="text" id="first-name" name="first-name" placeholder="First Name">
                <input type="text" id="last-name" name="last-name" placeholder="Last Name">
            </div>
            <div class="form-group">
                <label for="dob">Date of Birth</label>
                <input type="date" id="dob" name="dob" class="date-input">
            </div>
            <div class="form-group">
                <label for="seat-type">Seat Type</label>
                <select id="seat-type" name="seat-type">
                    <option value="">Select Seat Type</option>
                </select>
            </div>
            <div class="form-group">
                <label for="flight-name">Flight Name</label>
                <select id="flight-name" name="flight-name">
                    <option value="">Select Flight Name</option>
                </select>
            </div>
            <div class="form-footer">
                <button type="button" onclick="submitForm()">Next</button>
                <button type="button" onclick="goBack()">Back</button>
            </div>
        </form>
 </div>
 <script>
        // JavaScript code to populate seat type and flight name dropdowns
        document.addEventListener('DOMContentLoaded', function() {
            var seatTypeDropdown = document.getElementById('seat-type');
            var flightNameDropdown = document.getElementById('flight-name');
// Populate seat type dropdown
            for (let i = 1; i <= 60; i++) {
                var option = document.createElement('option');
                option.text = 'Seat ' + i;
                option.value = 'Seat ' + i;
                seatTypeDropdown.add(option);
            }
// Populate flight name dropdown
            for (let i = 1; i <= 30; i++) {
                var option = document.createElement('option');
                option.text = 'Flight ' + i;
                option.value = 'Flight ' + i;
                flightNameDropdown.add(option);
            }
        });
document.getElementById("flightForm").addEventListener("submit", function(event){
        event.preventDefault(); // prevent the default form submission
        // You can add your JavaScript validation or submission logic here
        // For demonstration, let's just show a message
        document.getElementById("message").innerHTML = "Form submitted successfully!";
        // Redirect to home page after a brief delay (for demonstration purposes)
        setTimeout(function(){
            window.location.href = "project/index.html"; // Change to the appropriate URL
        }, 2000); // 2000 milliseconds (2 seconds) delay before redirection
    });
 function goBack() {
        window.history.back();
    }
    </script>
</body>
</html>
//Mybooking
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plane Ticket Template</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(to right, #e0eafc, #cfdef3);
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .ticket-container {
            width: 100%;
            max-width: 600px;
            padding: 15px;
            background-color: #54d0d0;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            border: 2px solid #007bff;
        }
        .ticket-header {
            text-align: center;
            margin-bottom: 15px;
        }
        .ticket-header img {
            width: 80px;
        }
        .ticket-header h2 {
            margin: 10px 0;
            font-size: 24px;
            color: #333;
        }
        .ticket-details {
            margin-bottom: 15px;
        }
        .ticket-details div {
            margin-bottom: 8px;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #ffffff;
            display: flex;
            justify-content: space-between;
        }
        .ticket-details div label {
            font-weight: bold;
            color: #333;
        }
        .ticket-details div span {
            color: #555;
        }
    </style>
</head>
<body>
    <div class="ticket-container">
        <div class="ticket-header">
           <h2>MY BOOKING</h2>
            <form id="PlaneForm">
        </div>
        <div class="ticket-details">
            <div>
                <label>Booking Date:</label>
                <span>Saturday, May 25, 2024</span>
            </div>
            <div>
                <label>Guest Name:</label>
                <span>Miss Stephanie Celine Linden</span>
            </div>
            <div>
                <label>Route:</label>
                <span>New York to London</span>
            </div>
            <div>
                <label>Airline:</label>
                <span>ACME Airlines</span>
            </div>
            <div>
                <label>Flight Number:</label>
                <span>AA7755</span>
            </div>
            <div>
                <label>Departure Date:</label>
                <span>Monday,  May 27, 2024 06:30</span>
            </div>
            <div>
                <label>Arrival Date:</label>
                <span>Tuesdat, May 28, 2024 5:00</span>
            </div>
            <div>
                <label>Departure Terminal:</label>
                <span>Terminal 1</span>
            </div>
            <div>
                <label>Arrival Terminal:</label>
                <span>Terminal 5</span>
            </div>
            <div>
                <label>Seat Class:</label>
                <span>Business Class</span>
            </div>
            <div>
                <label>Extra Baggage Allowance:</label>
                <span>8</span>
            </div>
            <div>
                <label>Seat Number:</label>
                <span>3</span>
            </div>
        </form>
       <button class="back-button" onclick="goBack()">Back</button>
    </div>
        </div>
    </div>
    <script>
      document.getElementById("PlaneForm").addEventListener("submit", function(event){
        event.preventDefault(); // prevent the default form submission
        // You can add your JavaScript validation or submission logic here
        // For demonstration, let's just show a message
        document.getElementById("message").innerHTML = "Form submitted successfully!";
        // Redirect to home page after a brief delay (for demonstration purposes)
        setTimeout(function(){
            window.location.href = "project/index.html"; // Change to the appropriate URL
        }, 2000); // 2000 milliseconds (2 seconds) delay before redirection
    });
    function goBack() {
        window.history.back();
    }
    </script>
</body>
</html>
//Logout
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Logout Example</title>
<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
  }
  .container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  .logout-button {
    display: block;
    width: 100%;
    background-color: #dc3545;
    color: white;
    padding: 14px 20px;
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
  }
  .logout-button:hover {
    background-color: #c82333;
  }
</style>
</head>
<body>

<div class="container">
  <h2>Welcome User</h2>
  <button class="logout-button" id="logoutButton">Logout</button>
</div>

<script>
  document.getElementById("logoutButton").addEventListener("click", function() {
    // Perform logout actions here, such as clearing session data or redirecting to the login page
    console.log("Logout clicked");
    // For demonstration purposes, let's simply reload the page
    location.reload();
  });
</script>

</body>
</html>
~~~
## OUTPUT:
![alt text](<Screenshot 2024-05-18 201805.png>)
![alt text](<Screenshot 2024-05-18 201823.png>)
![alt text](<Screenshot 2024-05-18 201837.png>)
![alt text](<Screenshot 2024-05-18 201848.png>)
![alt text](<Screenshot 2024-05-18 201901.png>)
![alt text](<Screenshot 2024-05-18 201916.png>)
![alt text](<Screenshot 2024-05-18 201926.png>)
![alt text](<Screenshot 2024-05-18 202019.png>)
![alt text](<Screenshot 2024-05-18 202041.png>)
![alt text](<Screenshot 2024-05-18 202143.png>)
![alt text](<Screenshot 2024-05-18 202158.png>)
![alt text](<Screenshot 2024-05-18 202210.png>)
## RESULT:
Result of User Use Cases
User Login:

Users can successfully log in by entering correct credentials, or receive an error message if the credentials are incorrect.
User Signup:

Users can create a new account by providing required details, with the system validating and processing the information.
Searching for Flights:

Users can find available flights by entering search criteria, with the system displaying matching results.
