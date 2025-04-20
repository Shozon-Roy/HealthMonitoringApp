# Health Monitoring App - Developer Documentation

This document provides technical details about the Health Monitoring App implementation to help developers understand and extend the application.

## Architecture Overview

The Health Monitoring App follows a simple client-server architecture:

1. **Client-side**: HTML, CSS, and JavaScript for rendering the UI and handling user interactions
2. **Server-side**: Node.js/Express for serving static files and API endpoints

## File Structure

- `index.html` - Main HTML document
- `styles.css` - All styling for the application
- `app.js` - Client-side JavaScript for application logic and rendering
- `data.js` - Mock data models and sample data
- `server/index.ts` - Express server setup
- `server/routes.ts` - API route definitions
- `server/storage.ts` - Data storage interface
- `shared/schema.ts` - Data schema definitions

## Implementation Details

### Routing

The application implements client-side routing using vanilla JavaScript. The navigation logic in `app.js` handles different screens:

```javascript
// Navigation function
function navigateTo(screen) {
  currentScreen = screen;
  renderApp();
}
```

### Component Structure

Although using vanilla JS, the app follows a component-based pattern. Each screen is rendered by its own function:

- `renderHomeScreen()`
- `renderCovidScreen()`
- `renderHeartScreen()`
- `renderSleepScreen()`
- `renderDoctorsScreen()`
- `renderArticlesScreen()`
- `renderHealthScreen()`
- `renderProfileScreen()`

### State Management

Application state is managed through global variables:

```javascript
// Current screen state
let currentScreen = 'home';
let currentCovidTab = 'Case';
let currentHeartTab = 'Day';
let currentSleepTab = 'Day';
```

State changes trigger re-rendering of the corresponding components.

## Extending the Application

### Adding a New Screen

1. Create a new render function for your screen in `app.js`:

```javascript
function renderNewScreen() {
  return `
    <div class="app-container">
      <div class="header">
        <h1>New Screen</h1>
        <!-- Header content -->
      </div>
      
      <!-- Screen content -->
      
    </div>
  `;
}
```

2. Update the navigation logic in the `renderApp()` function:

```javascript
function renderApp() {
  let content = '';
  
  // Render status bar
  content += renderStatusBar();
  
  // Render content based on current screen
  if (currentScreen === 'home') {
    content += renderHomeScreen();
  } 
  // ...existing screens...
  else if (currentScreen === 'newscreen') {
    content += renderNewScreen();
    content += renderBottomNavigation();
  }
  
  // Update the DOM
  appContainer.innerHTML = `<div class="device-frame">${content}</div>`;
}
```

3. Add the navigation option to the bottom navigation:

```javascript
function renderBottomNavigation() {
  return `
    <div class="bottom-navigation">
      <!-- Existing navigation items -->
      <div class="nav-item ${currentScreen === 'newscreen' ? 'active' : ''}" onclick="navigateTo('newscreen')">
        <span class="material-icons-outlined nav-icon">new_icon</span>
        <span>New Screen</span>
      </div>
    </div>
  `;
}
```

### Adding New Data Models

1. Add your new data model to `data.js`:

```javascript
// New Data Model
const newData = {
  property1: 'value1',
  property2: 'value2',
  nestedProperty: {
    subProperty1: 'subValue1'
  }
};
```

2. Use the data in your screen rendering function:

```javascript
function renderNewScreen() {
  return `
    <div class="app-container">
      <div class="header">
        <h1>New Screen</h1>
      </div>
      
      <div class="card">
        <div class="card-content">
          <h3>${newData.property1}</h3>
          <p>${newData.property2}</p>
          <p>${newData.nestedProperty.subProperty1}</p>
        </div>
      </div>
    </div>
  `;
}
```

### Adding New API Endpoints

1. Update `server/routes.ts` to add a new API endpoint:

```typescript
// Add a new endpoint
app.get('/api/newdata', (_req, res) => {
  res.json({
    success: true,
    data: {
      // Your data here
    }
  });
});
```

2. Access the endpoint from the client-side:

```javascript
// Example of fetching data from API
fetch('/api/newdata')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Process the data
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
```

## Styling Guidelines

The application uses a consistent color scheme:

- Primary color: `#00c389` (Mint green)
- Background color: `#c1f1e0` (Light mint)
- Card background: `#ffffff` (White)
- Text colors: 
  - Primary text: `#333333` (Dark gray)
  - Secondary text: `#6b7280` (Medium gray)
  - Tertiary text: `#9ca3af` (Light gray)

To maintain styling consistency:

1. Use the existing CSS classes whenever possible
2. Follow the naming conventions (BEM-inspired)
3. Maintain the device frame layout for all screens
4. Use Material Icons for all iconography

## Performance Considerations

1. Minimize DOM manipulations by building complete HTML strings before insertion
2. Use efficient event delegation for handling clicks and other interactions
3. Avoid unnecessary re-renders by checking if state has actually changed
4. Optimize images and assets for web delivery

## Security Considerations

1. Sanitize user inputs to prevent XSS attacks
2. Implement proper API authentication for production use
3. Use HTTPS for all API communications
4. Implement proper data validation on both client and server