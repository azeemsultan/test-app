Project 1
In this project, you have to create API’s for students and courses. A student can register for maximum 6 courses. Also make sure that no new
student can register for the course when the course student limit is reached. You only have to create the API, no front end it required.

Technologies:
Nest.js, PostgreSQL

Tools:
Use Postman to test your API’s

Research Tasks:
Find and use the best ORM to interact with Relational Database and a rich validation plugin.

Fields for Students:
First Name
Last Name
User name
Email
Password
Address
Phone Number
Image (Path or Image name as a string)

Fields for Courses:
Course Name
Students Limit (Numeric)

Rules:
Apply proper validations.
Sanitize all data.
Email, User name and Phone Number must be unique.
Address is optional.
Upload the image on server and only store image name or path in db.
Image file can be only jpg and png and upload size cannot exceed 2 MB.
Password should be at least 8 characters long and must contain at least one capital letter, one digit and special character.
Course Name must be unique.
Students can apply to maximum 6 unique courses.
Avoid Duplicate Course Registration, means no student can register twice for a course.
No new user can register for the course when the course student limit is reached

Student Routes:
POST: Create Student
PUT: Update Student
DELETE: Delete Student
GET: Select Student by Id, or Username, or Email

Course Routes:
POST: Create Course
PUT: Update Course
DELETE: Delete Course
GET: Select Course by Id, or Course Name

Register Student For Course Routes:
POST: Register Student for a specific course.
PUT: Update a specific course registration, make sure to avoid duplicate course registration.
Feel Free to add additional routes, if needed.
If there are any questions, please feel free to ask