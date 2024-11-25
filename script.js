// Variables to get the DOM elements
const goalInput = document.getElementById('goal-input');
const addButton = document.getElementById('add-button');
const goalsList = document.getElementById('goals-list');

// Add new goal
addButton.addEventListener('click', function() {
    const goalText = goalInput.value;
    if (goalText.trim() !== "") {
        const newGoal = document.createElement('li');
        newGoal.innerHTML = `${goalText} <button class="remove">Remove</button>`;
        
        // Remove goal functionality
        const removeButton = newGoal.querySelector('.remove');
        removeButton.addEventListener('click', function() {
            newGoal.remove();
        });

        goalsList.appendChild(newGoal);
        goalInput.value = ""; // Clear input after adding
    }
});

// Theme color buttons and theme data
const themes = {
    purple: {
        primaryColor: '#9b4f96',
        secondaryColor: '#d3a2ff',
        backgroundColor: '#1f1f1f',
        textColor: '#fff',
        buttonColor: '#d3a2ff',
    },
    green: {
        primaryColor: '#28a745',
        secondaryColor: '#d4edda',
        backgroundColor: '#f8f9fa',
        textColor: '#212529',
        buttonColor: '#6c757d',
    },
    blue: {
        primaryColor: '#007bff',
        secondaryColor: '#cce5ff',
        backgroundColor: '#e9ecef',
        textColor: '#212529',
        buttonColor: '#007bff',
    },
    orange: {
        primaryColor: '#ff5722',
        secondaryColor: '#ffe0b2',
        backgroundColor: '#fff3e0',
        textColor: '#212529',
        buttonColor: '#ff7043',
    }
};

// Function to switch theme colors
function switchTheme(theme) {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', theme.primaryColor);
    root.style.setProperty('--secondary-color', theme.secondaryColor);
    root.style.setProperty('--background-color', theme.backgroundColor);
    root.style.setProperty('--text-color', theme.textColor);
    root.style.setProperty('--button-color', theme.buttonColor);
}

// Add event listeners to color buttons
document.getElementById('purple').addEventListener('click', () => switchTheme(themes.purple));
document.getElementById('green').addEventListener('click', () => switchTheme(themes.green));
document.getElementById('blue').addEventListener('click', () => switchTheme(themes.blue));
document.getElementById('orange').addEventListener('click', () => switchTheme(themes.orange));