// DOM Elements
const appContainer = document.getElementById('app');

// Current screen state
let currentScreen = 'home';
let currentCovidTab = 'Case';
let currentHeartTab = 'Day';
let currentSleepTab = 'Day';

// Helper function to get the current time
function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  
  // Format hours and minutes
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  
  return `${hours}:${minutes}`;
}

// Render the status bar
function renderStatusBar() {
  return `
    <div class="status-bar">
      <div class="status-bar-left">
        <span class="status-bar-time">${getCurrentTime()}</span>
      </div>
      <div class="status-bar-right">
        <span class="material-icons-outlined status-bar-icon">signal_cellular_alt</span>
        <span class="material-icons-outlined status-bar-icon">wifi</span>
        <span class="material-icons-outlined status-bar-icon">battery_std</span>
      </div>
    </div>
  `;
}

// Render the bottom navigation
function renderBottomNavigation() {
  return `
    <div class="bottom-navigation">
      <div class="nav-item ${currentScreen === 'covid' ? 'active' : ''}" onclick="navigateTo('covid')">
        <span class="material-icons-outlined nav-icon">coronavirus</span>
        <span>Covid-19</span>
      </div>
      <div class="nav-item ${currentScreen === 'doctors' ? 'active' : ''}" onclick="navigateTo('doctors')">
        <span class="material-icons-outlined nav-icon">medical_services</span>
        <span>Doctors</span>
      </div>
      <div class="nav-item ${currentScreen === 'articles' ? 'active' : ''}" onclick="navigateTo('articles')">
        <span class="material-icons-outlined nav-icon">article</span>
        <span>Articles</span>
      </div>
      <div class="nav-item ${currentScreen === 'health' ? 'active' : ''}" onclick="navigateTo('health')">
        <span class="material-icons-outlined nav-icon">favorite_border</span>
        <span>Health</span>
      </div>
      <div class="nav-item ${currentScreen === 'profile' ? 'active' : ''}" onclick="navigateTo('profile')">
        <span class="material-icons-outlined nav-icon">person_outline</span>
        <span>Profile</span>
      </div>
    </div>
  `;
}

// Render the home screen
function renderHomeScreen() {
  return `
    <div class="app-container">
      <div class="home-screen">
        <h1 class="home-title">Health Monitoring App</h1>
        
        <button class="menu-button" onclick="navigateTo('covid')">
          <span class="material-icons-outlined icon">coronavirus</span>
          COVID-19 Dashboard
        </button>
        
        <button class="menu-button" onclick="navigateTo('heart')">
          <span class="material-icons-outlined icon">favorite</span>
          Heart Monitoring
        </button>
        
        <button class="menu-button" onclick="navigateTo('sleep')">
          <span class="material-icons-outlined icon">bedtime</span>
          Sleep Analysis
        </button>
        
        <button class="menu-button" onclick="navigateTo('doctors')">
          <span class="material-icons-outlined icon">medical_services</span>
          Doctors
        </button>
        
        <button class="menu-button" onclick="navigateTo('articles')">
          <span class="material-icons-outlined icon">article</span>
          Articles
        </button>
        
        <button class="menu-button" onclick="navigateTo('health')">
          <span class="material-icons-outlined icon">favorite_border</span>
          Health
        </button>
        
        <button class="menu-button" onclick="navigateTo('profile')">
          <span class="material-icons-outlined icon">person_outline</span>
          Profile
        </button>
      </div>
    </div>
  `;
}

// Render the Covid screen
function renderCovidScreen() {
  return `
    <div class="app-container">
      <div class="header">
        <h1>COVID-19</h1>
        <div class="header-icons">
          <div class="icon-circle primary">
            <span class="material-icons-outlined" style="font-size: 0.875rem;">help_outline</span>
          </div>
          <div class="icon-circle">
            <span class="material-icons-outlined">more_horiz</span>
          </div>
        </div>
      </div>
      
      <div class="covid-tabs">
        <div class="tab-button ${currentCovidTab === 'Case' ? 'active' : ''}" onclick="switchCovidTab('Case')">Case</div>
        <div class="tab-button ${currentCovidTab === 'Vaccines' ? 'active' : ''}" onclick="switchCovidTab('Vaccines')">Vaccines</div>
        <div class="tab-button ${currentCovidTab === 'News' ? 'active' : ''}" onclick="switchCovidTab('News')">News</div>
      </div>
      
      ${renderCovidTabContent()}
    </div>
  `;
}

// Render the active Covid tab content
function renderCovidTabContent() {
  if (currentCovidTab === 'Case') {
    return `
      <div class="covid-card">
        <div class="covid-country">
          <h2>${covidData.country}</h2>
          <div style="width: 24px; height: 16px; background-color: #ffffff40; border-radius: 2px;"></div>
        </div>
        
        <div class="covid-stats">
          <div class="covid-stat-label">Covid-19 Cases</div>
          <div class="covid-stat-value">${covidData.cases.toLocaleString()}</div>
        </div>
      </div>
      
      <div class="search-bar">
        <span class="material-icons-outlined">search</span>
        <input type="text" placeholder="Search country..." />
      </div>
      
      <div style="padding: 1rem;">
        <div class="card">
          <div class="card-content">
            <h3 style="font-size: 0.875rem; margin-bottom: 0.5rem;">Top Countries</h3>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
              <span style="font-size: 0.875rem;">USA</span>
              <span style="font-size: 0.875rem; font-weight: 500;">44,199,496</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
              <span style="font-size: 0.875rem;">India</span>
              <span style="font-size: 0.875rem; font-weight: 500;">33,678,786</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
              <span style="font-size: 0.875rem;">Brazil</span>
              <span style="font-size: 0.875rem; font-weight: 500;">21,430,184</span>
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (currentCovidTab === 'Vaccines') {
    return `
      <div style="padding: 1rem;">
        <div class="card">
          <div class="card-content">
            <h3 style="font-size: 0.875rem; margin-bottom: 0.5rem;">Vaccination Statistics</h3>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
              <span style="font-size: 0.875rem;">Fully Vaccinated</span>
              <span style="font-size: 0.875rem; font-weight: 500;">56.2%</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
              <span style="font-size: 0.875rem;">At Least One Dose</span>
              <span style="font-size: 0.875rem; font-weight: 500;">65.8%</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
              <span style="font-size: 0.875rem;">Booster Shots</span>
              <span style="font-size: 0.875rem; font-weight: 500;">12.4%</span>
            </div>
          </div>
        </div>
      </div>
    `;
  } else {
    return `
      <div style="padding: 1rem;">
        ${newsItems.map(item => `
          <div class="card" style="margin-bottom: 0.75rem;">
            <div class="card-content">
              <div style="display: flex;">
                <div style="width: 4rem; height: 4rem; background-color: #f3f4f6; border-radius: 0.5rem; margin-right: 0.75rem;"></div>
                <div>
                  <h3 style="font-size: 0.875rem; margin-bottom: 0.25rem;">${item.title}</h3>
                  <p style="font-size: 0.75rem; color: #6b7280;">${item.date}</p>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
}

// Render the Heart screen
function renderHeartScreen() {
  return `
    <div class="app-container">
      <div class="header">
        <h1>Heart</h1>
        <div class="header-icons">
          <div class="icon-circle primary">
            <span class="material-icons-outlined" style="font-size: 0.875rem;">help_outline</span>
          </div>
          <div class="icon-circle">
            <span class="material-icons-outlined">more_horiz</span>
          </div>
        </div>
      </div>
      
      <div class="covid-tabs">
        <div class="tab-button ${currentHeartTab === 'Day' ? 'active' : ''}" onclick="switchHeartTab('Day')">Day</div>
        <div class="tab-button ${currentHeartTab === 'Week' ? 'active' : ''}" onclick="switchHeartTab('Week')">Week</div>
        <div class="tab-button ${currentHeartTab === 'Month' ? 'active' : ''}" onclick="switchHeartTab('Month')">Month</div>
      </div>
      
      <div class="heart-metrics">
        <div class="metric-card">
          <div class="icon-bubble primary">
            <span class="material-icons-outlined">favorite</span>
          </div>
          <div class="metric-value">${heartData.heartRateVariability}</div>
          <div class="metric-label">Heart Rate Variability</div>
        </div>
        
        <div class="metric-card">
          <div class="icon-bubble secondary">
            <span class="material-icons-outlined">favorite</span>
          </div>
          <div class="metric-value">${heartData.averageHeartRate}</div>
          <div class="metric-label">Average Heart Rate</div>
        </div>
        
        <div class="metric-card">
          <div class="icon-bubble primary">
            <span class="material-icons-outlined">favorite</span>
          </div>
          <div class="metric-value">${heartData.pulseAtRest}</div>
          <div class="metric-label">Pulse at Rest</div>
        </div>
        
        <div class="metric-card">
          <div class="icon-bubble green">
            <span class="material-icons-outlined">favorite</span>
          </div>
          <div class="metric-value">${heartData.pulse}</div>
          <div class="metric-label">Pulse</div>
        </div>
      </div>
      
      <div style="padding: 1rem;">
        <div class="card">
          <div class="card-content">
            <h3 style="font-size: 0.875rem; margin-bottom: 0.5rem;">Heart Rate</h3>
            <div style="height: 100px; background-color: #f3f4f6; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center;">
              <span class="material-icons-outlined" style="color: #9ca3af;">show_chart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Render the Sleep screen
function renderSleepScreen() {
  return `
    <div class="app-container">
      <div class="header">
        <h1>Sleep</h1>
        <div class="header-icons">
          <div class="icon-circle primary">
            <span class="material-icons-outlined" style="font-size: 0.875rem;">help_outline</span>
          </div>
          <div class="icon-circle">
            <span class="material-icons-outlined">more_horiz</span>
          </div>
        </div>
      </div>
      
      <div class="covid-tabs">
        <div class="tab-button ${currentSleepTab === 'Day' ? 'active' : ''}" onclick="switchSleepTab('Day')">Day</div>
        <div class="tab-button ${currentSleepTab === 'Week' ? 'active' : ''}" onclick="switchSleepTab('Week')">Week</div>
        <div class="tab-button ${currentSleepTab === 'Month' ? 'active' : ''}" onclick="switchSleepTab('Month')">Month</div>
      </div>
      
      <div style="padding: 1rem;">
        <div class="card">
          <div class="card-content">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
              <div>
                <p style="font-size: 0.75rem; color: #6b7280;">Time in Bed</p>
                <p style="font-weight: 500;">${sleepData.timeInBed.hours}h ${sleepData.timeInBed.minutes}m</p>
              </div>
              <div>
                <p style="font-size: 0.75rem; color: #6b7280;">Time Asleep</p>
                <p style="font-weight: 500;">${sleepData.timeAsleep.hours}h ${sleepData.timeAsleep.minutes}m</p>
              </div>
            </div>
            
            <div style="display: flex; justify-content: space-between; margin-top: 1rem;">
              <div>
                <p style="font-size: 0.75rem; color: #6b7280;">${sleepData.dateRange}</p>
              </div>
              <div>
                <p style="font-size: 0.75rem; color: #6b7280;">${sleepData.sleepSchedule}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div style="padding: 0 1rem;">
        <div class="card">
          <div class="card-content">
            <h3 style="font-size: 0.875rem; margin-bottom: 0.5rem;">Weekly Sleep</h3>
            <div class="sleep-chart">
              ${weeklySleepData.map(item => {
                const height = item.sleepHours * 10; // Scale the height
                return `
                  <div class="bar-container">
                    <div class="bar" style="height: ${height}px;"></div>
                    <div class="bar-label">${item.day}</div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Render the Doctors screen
function renderDoctorsScreen() {
  return `
    <div class="app-container">
      <div class="header">
        <h1>Doctors</h1>
        <div class="header-icons">
          <div class="icon-circle primary">
            <span class="material-icons-outlined" style="font-size: 0.875rem;">help_outline</span>
          </div>
          <div class="icon-circle">
            <span class="material-icons-outlined">more_horiz</span>
          </div>
        </div>
      </div>
      
      <div class="search-bar">
        <span class="material-icons-outlined">search</span>
        <input type="text" placeholder="Search doctors, specialties..." />
      </div>
      
      <div class="categories">
        <div class="category-badge active">All Doctors</div>
        <div class="category-badge">Cardiologist</div>
        <div class="category-badge">Neurologist</div>
        <div class="category-badge">Pediatrician</div>
        <div class="category-badge">Dermatologist</div>
      </div>
      
      <div style="padding: 1rem;">
        ${doctors.map(doctor => `
          <div class="doctor-card">
            <div class="doctor-image">
              <span class="material-icons-outlined" style="font-size: 1.5rem; color: #9ca3af;">person</span>
            </div>
            <div class="doctor-info">
              <div class="doctor-name">${doctor.name}</div>
              <div class="doctor-specialty">${doctor.specialty}</div>
              <div class="doctor-rating">
                <span class="material-icons-outlined star-icon" style="font-size: 0.75rem;">star</span>
                <span>${doctor.rating}</span>
                <span class="doctor-reviews">(${doctor.reviews} reviews)</span>
              </div>
              <div class="doctor-availability">${doctor.availability}</div>
            </div>
            <div class="arrow-button">
              <span class="material-icons-outlined" style="font-size: 0.75rem;">arrow_forward</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Render the Articles screen
function renderArticlesScreen() {
  return `
    <div class="app-container">
      <div class="header">
        <h1>Articles</h1>
        <div class="header-icons">
          <div class="icon-circle primary">
            <span class="material-icons-outlined" style="font-size: 0.875rem;">help_outline</span>
          </div>
          <div class="icon-circle">
            <span class="material-icons-outlined">more_horiz</span>
          </div>
        </div>
      </div>
      
      <div class="search-bar">
        <span class="material-icons-outlined">search</span>
        <input type="text" placeholder="Search articles..." />
      </div>
      
      <div class="article-section">
        <h2 class="section-title">Featured Article</h2>
        <div class="featured-article">
          <div class="article-image">
            <span class="material-icons-outlined" style="font-size: 2.5rem; color: #818cf8;">article</span>
            <div class="new-badge">New</div>
          </div>
          <div class="article-content">
            <div class="article-meta">
              <span>Health</span>
              <span class="article-separator">•</span>
              <span>April 15, 2025</span>
            </div>
            <h3 class="article-title">How to maintain healthy lifestyle during pandemic</h3>
            <p class="article-summary">Essential tips for staying healthy and active while maintaining social distancing measures...</p>
            <div class="article-footer">
              <div class="read-time">
                <div class="read-time-icon">
                  <span class="material-icons-outlined" style="font-size: 0.75rem; color: #6b7280;">timer</span>
                </div>
                <span>5 min read</span>
              </div>
              <span class="read-more">Read More</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="article-section">
        <h2 class="section-title">Recent Articles</h2>
        ${articles.map(article => `
          <div class="article-list-item">
            <div class="article-list-image">
              <span class="material-icons-outlined" style="color: #9ca3af;">article</span>
            </div>
            <div>
              <div class="article-meta">
                <span>${article.category}</span>
                <span class="article-separator">•</span>
                <span>${article.readTime}</span>
              </div>
              <h3 class="article-title">${article.title}</h3>
              <p class="article-summary">${article.summary}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Render the Health screen
function renderHealthScreen() {
  return `
    <div class="app-container">
      <div class="header">
        <h1>Health</h1>
        <div class="header-icons">
          <div class="icon-circle primary">
            <span class="material-icons-outlined" style="font-size: 0.875rem;">help_outline</span>
          </div>
          <div class="icon-circle">
            <span class="material-icons-outlined">more_horiz</span>
          </div>
        </div>
      </div>
      
      <div class="summary-card">
        <div class="summary-header">
          <div class="summary-title">Today's Summary</div>
          <div class="summary-date">April 20, 2025</div>
        </div>
        
        <div class="metrics-grid">
          <div class="metric-item">
            <div class="metric-icon">
              <span class="material-icons-outlined" style="font-size: 0.875rem;">favorite</span>
            </div>
            <div>
              <div style="font-size: 0.75rem; color: #6b7280;">Average BPM</div>
              <div style="font-weight: 700;">85 <span style="font-size: 0.75rem; font-weight: 400; color: #6b7280;">bpm</span></div>
            </div>
          </div>
          
          <div class="metric-item">
            <div class="metric-icon">
              <span class="material-icons-outlined" style="font-size: 0.875rem;">directions_walk</span>
            </div>
            <div>
              <div style="font-size: 0.75rem; color: #6b7280;">Steps</div>
              <div style="font-weight: 700;">8,745</div>
            </div>
          </div>
          
          <div class="metric-item">
            <div class="metric-icon">
              <span class="material-icons-outlined" style="font-size: 0.875rem;">local_fire_department</span>
            </div>
            <div>
              <div style="font-size: 0.75rem; color: #6b7280;">Calories</div>
              <div style="font-weight: 700;">1,850</div>
            </div>
          </div>
        </div>
        
        <div class="view-details">
          View Details
          <span class="material-icons-outlined" style="font-size: 0.75rem; margin-left: 0.25rem;">arrow_forward</span>
        </div>
      </div>
      
      <div style="padding: 0 1rem 1rem;">
        <h2 class="section-title">Health Metrics</h2>
        
        ${healthMetrics.map(metric => {
          // Calculate progress percentage based on the metric
          let progress = 0;
          if (metric.id === 'steps') {
            progress = Math.min(parseInt(metric.value) / 10000 * 100, 100);
          } else if (metric.id === 'water') {
            progress = Math.min(parseFloat(metric.value) / 2 * 100, 100);
          } else if (metric.id === 'calories') {
            progress = Math.min(parseInt(metric.value) / 2000 * 100, 100);
          } else {
            progress = 70; // Default
          }
          
          return `
            <div class="card health-metric-card">
              <div class="metric-header">
                <div class="metric-item">
                  <div class="metric-icon">
                    <span class="material-icons-outlined" style="font-size: 0.875rem;">${metric.icon}</span>
                  </div>
                  <div>
                    <div style="font-size: 0.75rem; color: #6b7280;">${metric.name}</div>
                    <div style="font-weight: 700;">${metric.value} <span style="font-size: 0.75rem; font-weight: 400; color: #6b7280;">${metric.unit}</span></div>
                  </div>
                </div>
                
                <span class="material-icons-outlined trend-icon ${
                  metric.trend === 'up' ? 'trend-up' : 
                  metric.trend === 'down' ? 'trend-down' : 
                  'trend-stable'
                }">
                  ${
                    metric.trend === 'up' ? 'trending_up' : 
                    metric.trend === 'down' ? 'trending_down' : 
                    'trending_flat'
                  }
                </span>
              </div>
              
              <div class="progress-bar">
                <div class="progress-fill" style="width: ${progress}%;"></div>
              </div>
              
              <div class="progress-labels">
                <span>Daily Target</span>
                <span>
                  ${metric.id === 'steps' ? '10,000' : 
                    metric.id === 'water' ? '2L' : 
                    metric.id === 'calories' ? '2,000 cal' : 
                    metric.id === 'weight' ? 'On track' : ''}
                </span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// Render the Profile screen
function renderProfileScreen() {
  return `
    <div class="app-container">
      <div class="header">
        <h1>Profile</h1>
        <div class="header-icons">
          <div class="icon-circle">
            <span class="material-icons-outlined">settings</span>
          </div>
        </div>
      </div>
      
      <div class="profile-card">
        <div class="profile-header">
          <div class="profile-image">
            <span class="material-icons-outlined" style="font-size: 1.5rem; color: #9ca3af;">person</span>
          </div>
          <div class="profile-info">
            <div class="profile-name">${userProfile.name}</div>
            <div class="profile-email">${userProfile.email}</div>
            <div class="edit-profile">
              Edit Profile
              <span class="material-icons-outlined" style="font-size: 0.75rem; margin-left: 0.25rem;">edit</span>
            </div>
          </div>
        </div>
      </div>
      
      <div style="padding: 0 1rem;">
        <h2 class="section-title">Personal Information</h2>
        <div class="card">
          <div class="section-content">
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Date of Birth</div>
                <div class="info-value">${userProfile.dob}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Blood Type</div>
                <div class="info-value">${userProfile.bloodType}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Height</div>
                <div class="info-value">${userProfile.height} cm</div>
              </div>
              <div class="info-item">
                <div class="info-label">Weight</div>
                <div class="info-value">${userProfile.weight} kg</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div style="padding: 1rem;">
        <h2 class="section-title">Medical Information</h2>
        <div class="card">
          <div class="section-content">
            <div style="margin-bottom: 0.75rem;">
              <div class="info-label">Allergies</div>
              <div class="tag-list">
                ${userProfile.allergies.map(allergy => `
                  <div class="tag red">${allergy}</div>
                `).join('')}
              </div>
            </div>
            
            <div class="separator"></div>
            
            <div>
              <div class="info-label">Medications</div>
              <div class="tag-list">
                ${userProfile.medications.map(medication => `
                  <div class="tag blue">${medication}</div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div style="padding: 0 1rem 1rem;">
        <h2 class="section-title">Quick Actions</h2>
        <div class="quick-actions">
          <div class="action-button">
            <div class="action-icon">
              <span class="material-icons-outlined" style="font-size: 0.875rem;">description</span>
            </div>
            <div class="action-text">Medical Records</div>
          </div>
          <div class="action-button">
            <div class="action-icon">
              <span class="material-icons-outlined" style="font-size: 0.875rem;">local_pharmacy</span>
            </div>
            <div class="action-text">Prescriptions</div>
          </div>
          <div class="action-button">
            <div class="action-icon">
              <span class="material-icons-outlined" style="font-size: 0.875rem;">calendar_today</span>
            </div>
            <div class="action-text">Appointments</div>
          </div>
          <div class="action-button">
            <div class="action-icon">
              <span class="material-icons-outlined" style="font-size: 0.875rem;">help_outline</span>
            </div>
            <div class="action-text">Help Center</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Navigation function
function navigateTo(screen) {
  currentScreen = screen;
  renderApp();
}

// Switch Covid Tab
function switchCovidTab(tab) {
  currentCovidTab = tab;
  renderApp();
}

// Switch Heart Tab
function switchHeartTab(tab) {
  currentHeartTab = tab;
  renderApp();
}

// Switch Sleep Tab
function switchSleepTab(tab) {
  currentSleepTab = tab;
  renderApp();
}

// Render the full application
function renderApp() {
  let content = '';
  
  // Render status bar
  content += renderStatusBar();
  
  // Render content based on current screen
  if (currentScreen === 'home') {
    content += renderHomeScreen();
  } else if (currentScreen === 'covid') {
    content += renderCovidScreen();
    content += renderBottomNavigation();
  } else if (currentScreen === 'heart') {
    content += renderHeartScreen();
    content += renderBottomNavigation();
  } else if (currentScreen === 'sleep') {
    content += renderSleepScreen();
    content += renderBottomNavigation();
  } else if (currentScreen === 'doctors') {
    content += renderDoctorsScreen();
    content += renderBottomNavigation();
  } else if (currentScreen === 'articles') {
    content += renderArticlesScreen();
    content += renderBottomNavigation();
  } else if (currentScreen === 'health') {
    content += renderHealthScreen();
    content += renderBottomNavigation();
  } else if (currentScreen === 'profile') {
    content += renderProfileScreen();
    content += renderBottomNavigation();
  }
  
  // Update the DOM
  appContainer.innerHTML = `<div class="device-frame">${content}</div>`;
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  // Update time every minute
  setInterval(() => {
    document.querySelector('.status-bar-time').textContent = getCurrentTime();
  }, 60000);
  
  // Initial render
  renderApp();
});

// Make navigation functions globally available
window.navigateTo = navigateTo;
window.switchCovidTab = switchCovidTab;
window.switchHeartTab = switchHeartTab;
window.switchSleepTab = switchSleepTab;