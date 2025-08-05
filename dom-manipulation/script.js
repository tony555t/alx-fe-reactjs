// Quote Manager - Advanced DOM Manipulation
// Array to store quote objects
let quotes = [
    { text: "The only way to do great work is to love what you do.", category: "motivation" },
    { text: "Life is what happens to you while you're busy making other plans.", category: "life" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", category: "dreams" },
    { text: "It is during our darkest moments that we must focus to see the light.", category: "inspiration" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", category: "success" },
    { text: "The only impossible journey is the one you never begin.", category: "motivation" },
    { text: "In the middle of difficulty lies opportunity.", category: "opportunity" },
    { text: "Believe you can and you're halfway there.", category: "confidence" }
];

// DOM Elements (will be initialized when DOM loads)
let quoteDisplay = null;
let categoryDisplay = null;
let newQuoteText = null;
let newQuoteCategory = null;

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

/**
 * Initialize the application and set up DOM references
 */
function initializeApp() {
    // Get DOM elements
    quoteDisplay = document.getElementById('quoteDisplay');
    categoryDisplay = document.getElementById('categoryDisplay');
    newQuoteText = document.getElementById('newQuoteText');
    newQuoteCategory = document.getElementById('newQuoteCategory');
    
    // Create quote display area if it doesn't exist
    if (!quoteDisplay) {
        createQuoteDisplayArea();
    }
    
    // Create add quote form if it doesn't exist
    if (!newQuoteText || !newQuoteCategory) {
        createAddQuoteForm();
    }
    
    // Display initial random quote
    showRandomQuote();
    
    // Set up event listeners
    setupEventListeners();
}

/**
 * Create the quote display area dynamically
 */
function createQuoteDisplayArea() {
    const container = document.body;
    
    // Create main quote container
    const quoteContainer = document.createElement('div');
    quoteContainer.id = 'quoteContainer';
    quoteContainer.style.cssText = `
        max-width: 600px;
        margin: 20px auto;
        padding: 30px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 15px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        text-align: center;
        color: white;
        font-family: 'Arial', sans-serif;
    `;
    
    // Create quote display element
    quoteDisplay = document.createElement('div');
    quoteDisplay.id = 'quoteDisplay';
    quoteDisplay.style.cssText = `
        font-size: 1.4em;
        line-height: 1.6;
        margin-bottom: 15px;
        font-style: italic;
        min-height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    // Create category display element
    categoryDisplay = document.createElement('div');
    categoryDisplay.id = 'categoryDisplay';
    categoryDisplay.style.cssText = `
        font-size: 0.9em;
        text-transform: uppercase;
        letter-spacing: 1px;
        opacity: 0.8;
        margin-bottom: 20px;
    `;
    
    // Create new quote button
    const newQuoteBtn = document.createElement('button');
    newQuoteBtn.textContent = 'New Quote';
    newQuoteBtn.onclick = showRandomQuote;
    newQuoteBtn.style.cssText = `
        background: rgba(255,255,255,0.2);
        border: 2px solid rgba(255,255,255,0.3);
        color: white;
        padding: 12px 25px;
        border-radius: 25px;
        cursor: pointer;
        font-size: 1em;
        transition: all 0.3s ease;
        margin: 0 10px;
    `;
    
    // Add hover effect
    newQuoteBtn.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(255,255,255,0.3)';
        this.style.transform = 'translateY(-2px)';
    });
    
    newQuoteBtn.addEventListener('mouseleave', function() {
        this.style.background = 'rgba(255,255,255,0.2)';
        this.style.transform = 'translateY(0)';
    });
    
    // Assemble the quote container
    quoteContainer.appendChild(quoteDisplay);
    quoteContainer.appendChild(categoryDisplay);
    quoteContainer.appendChild(newQuoteBtn);
    
    container.appendChild(quoteContainer);
}

/**
 * Create the add quote form dynamically
 */
function createAddQuoteForm() {
    const container = document.body;
    
    // Create form container
    const formContainer = document.createElement('div');
    formContainer.id = 'addQuoteContainer';
    formContainer.style.cssText = `
        max-width: 600px;
        margin: 20px auto;
        padding: 25px;
        background: white;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        border: 1px solid #e0e0e0;
    `;
    
    // Create form title
    const formTitle = document.createElement('h3');
    formTitle.textContent = 'Add Your Own Quote';
    formTitle.style.cssText = `
        text-align: center;
        color: #333;
        margin-bottom: 20px;
        font-family: 'Arial', sans-serif;
    `;
    
    // Create input for quote text
    newQuoteText = document.createElement('input');
    newQuoteText.id = 'newQuoteText';
    newQuoteText.type = 'text';
    newQuoteText.placeholder = 'Enter a new quote';
    newQuoteText.style.cssText = `
        width: 100%;
        padding: 12px;
        margin-bottom: 15px;
        border: 2px solid #ddd;
        border-radius: 8px;
        font-size: 1em;
        box-sizing: border-box;
        transition: border-color 0.3s ease;
    `;
    
    // Create input for category
    newQuoteCategory = document.createElement('input');
    newQuoteCategory.id = 'newQuoteCategory';
    newQuoteCategory.type = 'text';
    newQuoteCategory.placeholder = 'Enter quote category';
    newQuoteCategory.style.cssText = `
        width: 100%;
        padding: 12px;
        margin-bottom: 20px;
        border: 2px solid #ddd;
        border-radius: 8px;
        font-size: 1em;
        box-sizing: border-box;
        transition: border-color 0.3s ease;
    `;
    
    // Create add button
    const addButton = document.createElement('button');
    addButton.textContent = 'Add Quote';
    addButton.onclick = addQuote;
    addButton.style.cssText = `
        width: 100%;
        padding: 12px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1.1em;
        cursor: pointer;
        transition: all 0.3s ease;
    `;
    
    // Add focus effects to inputs
    [newQuoteText, newQuoteCategory].forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#667eea';
            this.style.outline = 'none';
        });
        
        input.addEventListener('blur', function() {
            this.style.borderColor = '#ddd';
        });
    });
    
    // Add hover effect to button
    addButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.4)';
    });
    
    addButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
    
    // Assemble the form
    formContainer.appendChild(formTitle);
    formContainer.appendChild(newQuoteText);
    formContainer.appendChild(newQuoteCategory);
    formContainer.appendChild(addButton);
    
    container.appendChild(formContainer);
}

/**
 * Display a random quote from the quotes array
 */
function showRandomQuote() {
    if (quotes.length === 0) {
        quoteDisplay.textContent = "No quotes available. Add some quotes to get started!";
        categoryDisplay.textContent = "";
        return;
    }
    
    // Get random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    // Add animation effect
    quoteDisplay.style.opacity = '0';
    categoryDisplay.style.opacity = '0';
    
    setTimeout(() => {
        quoteDisplay.textContent = `"${randomQuote.text}"`;
        categoryDisplay.textContent = `Category: ${randomQuote.category}`;
        
        quoteDisplay.style.opacity = '1';
        categoryDisplay.style.opacity = '1';
    }, 200);
}

/**
 * Add a new quote to the quotes array and update the DOM
 */
function addQuote() {
    const quoteText = newQuoteText.value.trim();
    const quoteCategory = newQuoteCategory.value.trim();
    
    // Validate input
    if (!quoteText || !quoteCategory) {
        showNotification('Please fill in both quote text and category!', 'error');
        return;
    }
    
    // Check for duplicate quotes
    const isDuplicate = quotes.some(quote => 
        quote.text.toLowerCase() === quoteText.toLowerCase()
    );
    
    if (isDuplicate) {
        showNotification('This quote already exists!', 'warning');
        return;
    }
    
    // Create new quote object
    const newQuote = {
        text: quoteText,
        category: quoteCategory.toLowerCase()
    };
    
    // Add to quotes array
    quotes.push(newQuote);
    
    // Clear input fields with animation
    newQuoteText.style.transform = 'scale(0.95)';
    newQuoteCategory.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        newQuoteText.value = '';
        newQuoteCategory.value = '';
        newQuoteText.style.transform = 'scale(1)';
        newQuoteCategory.style.transform = 'scale(1)';
    }, 150);
    
    // Show success notification
    showNotification(`Quote added successfully! Total quotes: ${quotes.length}`, 'success');
    
    // Display the newly added quote
    setTimeout(() => {
        const newQuoteIndex = quotes.length - 1;
        displaySpecificQuote(newQuoteIndex);
    }, 1000);
}

/**
 * Display a specific quote by index
 */
function displaySpecificQuote(index) {
    if (index >= 0 && index < quotes.length) {
        const quote = quotes[index];
        
        quoteDisplay.style.opacity = '0';
        categoryDisplay.style.opacity = '0';
        
        setTimeout(() => {
            quoteDisplay.textContent = `"${quote.text}"`;
            categoryDisplay.textContent = `Category: ${quote.category}`;
            
            quoteDisplay.style.opacity = '1';
            categoryDisplay.style.opacity = '1';
        }, 200);
    }
}

/**
 * Show notification messages to the user
 */
function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existingNotification = document.getElementById('notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.id = 'notification';
    notification.textContent = message;
    
    // Set styles based on type
    const colors = {
        success: { bg: '#d4edda', border: '#c3e6cb', text: '#155724' },
        error: { bg: '#f8d7da', border: '#f5c6cb', text: '#721c24' },
        warning: { bg: '#fff3cd', border: '#ffeaa7', text: '#856404' },
        info: { bg: '#d1ecf1', border: '#bee5eb', text: '#0c5460' }
    };
    
    const color = colors[type] || colors.info;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${color.bg};
        color: ${color.text};
        border: 1px solid ${color.border};
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        font-family: 'Arial', sans-serif;
        max-width: 300px;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

/**
 * Set up additional event listeners
 */
function setupEventListeners() {
    // Allow Enter key to add quote
    if (newQuoteText && newQuoteCategory) {
        [newQuoteText, newQuoteCategory].forEach(input => {
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    addQuote();
                }
            });
        });
    }
    
    // Keyboard shortcut for new quote (Space bar)
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space' && !e.target.matches('input')) {
            e.preventDefault();
            showRandomQuote();
        }
    });
}

/**
 * Get quotes by category (utility function)
 */
function getQuotesByCategory(category) {
    return quotes.filter(quote => 
        quote.category.toLowerCase() === category.toLowerCase()
    );
}

/**
 * Get all unique categories (utility function)
 */
function getAllCategories() {
    return [...new Set(quotes.map(quote => quote.category))];
}

/**
 * Export quotes data (utility function)
 */
function exportQuotes() {
    return JSON.stringify(quotes, null, 2);
}

/**
 * Import quotes data (utility function)
 */
function importQuotes(jsonData) {
    try {
        const importedQuotes = JSON.parse(jsonData);
        if (Array.isArray(importedQuotes)) {
            quotes = importedQuotes;
            showNotification(`Successfully imported ${quotes.length} quotes!`, 'success');
            showRandomQuote();
        } else {
            throw new Error('Invalid format');
        }
    } catch (e) {
        showNotification('Invalid JSON format for quotes import!', 'error');
    }
}