const toggleLinks = () => {
    const links = document.querySelector(".links");
    links.classList.toggle("active");
  };
 
document.addEventListener('DOMContentLoaded', () => {
    // Select all menu items
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Add hover effect
    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
            item.style.transform = 'scale(1.05)';
        });
        item.addEventListener('mouseout', () => {
            item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            item.style.transform = 'scale(1)';
        });
    });
    
    // Handle button click
    const orderButtons = document.querySelectorAll('.order-btn');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const menuItem = event.target.closest('.menu-item');
            if (menuItem) {
                const itemTitle = menuItem.querySelector('.menu-title').textContent;
                button.textContent = 'Added to Cart';
                button.style.backgroundColor = '#28a745'; // Change to green to indicate added to cart
                button.disabled = true; // Disable button to prevent multiple clicks
                
                // Optionally show an alert with the item name
                setTimeout(() => {
                    alert(`${itemTitle} has been added to your cart.`);
                }, 300);
            }
        });
    });
    
});
document.addEventListener('DOMContentLoaded', () => {
    // Select all menu items
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Function to apply the sliding effect
    const applySlidingEffect = () => {
        menuItems.forEach((item, index) => {
            // Add a delay to each item for a staggered effect
            item.style.animation = `slideIn 0.5s forwards ${index * 0.2}s`;
        });
    };

    // Trigger the sliding effect when the page loads
    applySlidingEffect();

    // Add hover effect
    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
            item.style.transform = 'scale(1.05)';
        });
        item.addEventListener('mouseout', () => {
            item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            item.style.transform = 'scale(1)';
        });
    });
    
    // Handle button click
    const orderButtons = document.querySelectorAll('.order-btn');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const menuItem = event.target.closest('.menu-item');
            if (menuItem) {
                const itemTitle = menuItem.querySelector('.menu-title').textContent;
                button.textContent = 'Added to Cart';
                button.style.backgroundColor = '#28a745'; // Change to green to indicate added to cart
                button.disabled = true; // Disable button to prevent multiple clicks
                
                // Optionally show an alert with the item name
                setTimeout(() => {
                    alert(`${itemTitle} has been added to your cart.`);
                }, 300);
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Select all menu items
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Function to apply the sliding effect
    const applySlidingEffect = () => {
        menuItems.forEach((item, index) => {
            // Add a delay to each item for a staggered effect
            item.style.animation = `slideIn 0.5s forwards ${index * 0.2}s`;
        });
    };

    // Trigger the sliding effect when the page loads
    applySlidingEffect();

    // Add hover effect
    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
            item.style.transform = 'scale(1.05)';
        });
        item.addEventListener('mouseout', () => {
            item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            item.style.transform = 'scale(1)';
        });
    });
    
    // Handle button click
    const orderButtons = document.querySelectorAll('.order-btn');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const menuItem = event.target.closest('.menu-item');
            if (menuItem) {
                const itemTitle = menuItem.querySelector('.menu-title').textContent;
                button.textContent = 'Added to Cart';
                button.style.backgroundColor = '#28a745'; // Change to green to indicate added to cart
                button.disabled = true; // Disable button to prevent multiple clicks
                
                // Optionally show an alert with the item name
                setTimeout(() => {
                    alert(`${itemTitle} has been added to your cart.`);
                }, 300);
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Select all menu items
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Function to apply the sliding effect
    const applySlidingEffect = () => {
        menuItems.forEach((item, index) => {
            // Add a delay to each item for a staggered effect
            item.style.animation = `slideIn 0.5s forwards ${index * 0.2}s`;
        });
    };

    // Trigger the sliding effect when the page loads
    applySlidingEffect();

    // Add hover effect
    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
            item.style.transform = 'scale(1.05)';
        });
        item.addEventListener('mouseout', () => {
            item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            item.style.transform = 'scale(1)';
        });
    });
    
    // Handle button click
    const orderButtons = document.querySelectorAll('.order-btn');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const menuItem = event.target.closest('.menu-item');
            if (menuItem) {
                const itemTitle = menuItem.querySelector('.menu-title').textContent;
                button.textContent = 'Added to Cart';
                button.style.backgroundColor = '#28a745'; // Change to green to indicate added to cart
                button.disabled = true; // Disable button to prevent multiple clicks
                
                // Optionally show an alert with the item name
                setTimeout(() => {
                    alert(`${itemTitle} has been added to your cart.`);
                }, 300);
            }
        });
    });
});
