# Email Service

## Installing

### Prerequisites

- Node
- Express
- NPM

### Via NPM

1. **Install via npm:**
  ```bash
  npm install
  ```

2. **Start the application:**
  ```bash
  npm start
  ```

3. **Open the application in your browser to initiate the service:**

  In your browser, navigate to `localhost:3000`

## Customize your email

Navigate to controllers/emailer.js. Starting on line 5 is an object which contains the information of the email. This data is the only thing you should have to edit in order to customize your email.

## Testing the backup service

The simplest way to test the backup service is to navigate to controllers/sendGrid.js. On line 13, set the parameter in the callback to false. This way the emailer controller will think the service failed and call the secondary service.

## Note

The secondary service may fail due to the fact that AWS may not have accepted my request to increase my sending limit. If that's the case, I'll need to verify the recipient email in order for it to go through.