export interface CovidData {
  country: string;
  cases: number;
  flagUrl: string;
}

export interface NewsItem {
  title: string;
  date: string;
  imageUrl: string;
}

export const covidData: CovidData = {
  country: "United States",
  cases: 44199496,
  flagUrl: "/us-flag.svg"
};

export const newsItems: NewsItem[] = [
  {
    title: "WHO strengthens COVID-19 response by improving regional vac...",
    date: "7 September 2021",
    imageUrl: "/news1.jpg"
  },
  {
    title: "WHO's work towards vaccine equity continues in Africa and...",
    date: "5 September 2021",
    imageUrl: "/news2.jpg"
  }
];

export interface HeartData {
  heartRateVariability: number;
  averageHeartRate: number;
  pulseAtRest: number;
  pulse: number;
}

export const heartData: HeartData = {
  heartRateVariability: 98,
  averageHeartRate: 104,
  pulseAtRest: 99,
  pulse: 86
};

export interface SleepData {
  timeInBed: { hours: number; minutes: number };
  timeAsleep: { hours: number; minutes: number };
  dateRange: string;
  sleepSchedule: string;
}

export const sleepData: SleepData = {
  timeInBed: { hours: 8, minutes: 25 },
  timeAsleep: { hours: 8, minutes: 40 },
  dateRange: "Oct 04 - Oct 10, 2021",
  sleepSchedule: "23:30 - 07:30"
};

export interface DailySleep {
  day: string;
  sleepHours: number;
}

export const weeklySleepData: DailySleep[] = [
  { day: "Mon", sleepHours: 7.5 },
  { day: "Tue", sleepHours: 6.2 },
  { day: "Wed", sleepHours: 8.1 },
  { day: "Thu", sleepHours: 7.5 },
  { day: "Fri", sleepHours: 7.0 },
  { day: "Sat", sleepHours: 5.5 },
  { day: "Sun", sleepHours: 7.5 }
];

// Doctor Data
export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  imageUrl: string;
  availability: string;
}

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    rating: 4.8,
    reviews: 124,
    imageUrl: "/doctor1.jpg",
    availability: "Available today"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    rating: 4.9,
    reviews: 89,
    imageUrl: "/doctor2.jpg",
    availability: "Available tomorrow"
  },
  {
    id: 3,
    name: "Dr. Emily Roberts",
    specialty: "Pediatrician",
    rating: 4.7,
    reviews: 156,
    imageUrl: "/doctor3.jpg",
    availability: "Available today"
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Dermatologist",
    rating: 4.6,
    reviews: 102,
    imageUrl: "/doctor4.jpg",
    availability: "Available on Friday"
  }
];

// Article Data
export interface Article {
  id: number;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "How to maintain a healthy heart",
    summary: "Learn about essential habits for cardiovascular health",
    date: "April 15, 2025",
    readTime: "5 min read",
    category: "Heart Health",
    imageUrl: "/article1.jpg"
  },
  {
    id: 2,
    title: "The importance of quality sleep",
    summary: "Discover how sleep affects your overall health",
    date: "April 10, 2025",
    readTime: "4 min read",
    category: "Sleep",
    imageUrl: "/article2.jpg"
  },
  {
    id: 3,
    title: "COVID-19 vaccine updates",
    summary: "Latest developments in vaccination research",
    date: "April 5, 2025",
    readTime: "6 min read",
    category: "COVID-19",
    imageUrl: "/article3.jpg"
  },
  {
    id: 4,
    title: "Healthy eating habits to adopt now",
    summary: "Simple nutritional changes with big health benefits",
    date: "March 30, 2025",
    readTime: "7 min read",
    category: "Nutrition",
    imageUrl: "/article4.jpg"
  }
];

// Health Metrics
export interface HealthMetric {
  id: string;
  name: string;
  value: number | string;
  unit: string;
  icon: string;
  status: "normal" | "warning" | "critical";
  trend: "up" | "down" | "stable";
}

export const healthMetrics: HealthMetric[] = [
  {
    id: "steps",
    name: "Daily Steps",
    value: 8745,
    unit: "steps",
    icon: "directions_walk",
    status: "normal",
    trend: "up"
  },
  {
    id: "water",
    name: "Water Intake",
    value: "1.5",
    unit: "L",
    icon: "water_drop",
    status: "warning",
    trend: "down"
  },
  {
    id: "calories",
    name: "Calories Burned",
    value: 1850,
    unit: "cal",
    icon: "local_fire_department",
    status: "normal",
    trend: "stable"
  },
  {
    id: "weight",
    name: "Weight",
    value: 68.5,
    unit: "kg",
    icon: "monitor_weight",
    status: "normal",
    trend: "down"
  }
];

// User Profile
export interface UserProfile {
  name: string;
  email: string;
  dob: string;
  height: number;
  weight: number;
  bloodType: string;
  allergies: string[];
  medications: string[];
  profilePicture: string;
}

export const userProfile: UserProfile = {
  name: "Alex Morgan",
  email: "alex.morgan@example.com",
  dob: "15 May 1990",
  height: 175,
  weight: 68.5,
  bloodType: "O+",
  allergies: ["Peanuts", "Penicillin"],
  medications: ["Vitamin D", "Multivitamin"],
  profilePicture: "/profile.jpg"
};
