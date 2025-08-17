const SUPABASE_URL = 'https://gaxggkvpecbpqzjrigsi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdheGdna3ZwZWNicHF6anJpZ3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0Mjg3OTgsImV4cCI6MjA3MTAwNDc5OH0.WJuDMt5oMdYwtkK8sRQF9aBTtT2N4C29PbgcCHsy068';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Point calculation constants
const POINTS = {
    GRADE: {
        'A+': 6, // 90-100%
        'A': 5,  // 70-89%
        'B': 3,  // 60-69%
        'C': 1   // 50-59%
    },
    INDIVIDUAL: {
        1: 5, // 1st place
        2: 3, // 2nd place
        3: 1  // 3rd place
    },
    GROUP: {
        2: { 1: 7, 2: 5, 3: 3 }, // 2 members
        3: { 1: 10, 2: 7, 3: 4 }, // 3 members
        4: { 1: 15, 2: 10, 3: 5 }, // 4-5 members
        5: { 1: 15, 2: 10, 3: 5 }
    }
};

// User roles
const ROLES = {
    ADMIN: 'admin',
    TEAM_LEADER: 'team_leader',
    INVIGILATOR: 'invigilator',
    JUDGE: 'judge',
    ANNOUNCER: 'announcer'
};

// Utility functions
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
};

const setCurrentUser = (user) => {
    localStorage.setItem('currentUser', JSON.stringify(user));
};

const logout = () => {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
};

const showNotification = (message, type = 'success') => {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg z-50 ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    } text-white`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        document.body.removeChild(notification);
    }, 3000);
};

const generateQRCode = (data) => {
    // Simple QR code generation using QR.js library
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(data)}`;
};

const generateCodeLetter = (index) => {
    return String.fromCharCode(65 + index); // A, B, C, etc.
};
