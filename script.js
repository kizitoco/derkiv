document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Portfolio filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentTestimonial = index;
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showTestimonial(index);
        });
    });
    
    prevBtn.addEventListener('click', function() {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    });
    
    nextBtn.addEventListener('click', function() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    });
    
    // Auto-advance testimonials
    setInterval(function() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
    
    // Budget range slider
    const budgetSlider = document.getElementById('budget');
    const budgetValue = document.getElementById('budgetValue');
    
    budgetSlider.addEventListener('input', function() {
        budgetValue.textContent = this.value;
    });
    
    // Project modal
    const portfolioItemsArray = document.querySelectorAll('.portfolio-item');
    const projectModal = document.getElementById('projectModal');
    const modalContent = document.querySelector('.modal-project-content');
    const closeModal = document.querySelector('.close-modal');
    
    // Sample project data (in a real scenario, this would come from a database)
    const projects = [
        {
            title: "Deki Visuals Brand Identity",
            category: "Branding",
            description: "Complete brand identity design for Deki Visuals, including logo, color palette, typography, and brand guidelines. The design reflects the premium quality and artisanal approach of the Graphics Agency.",
            image: "Profile.jpg",
            client: "Deki Visuals",
            date: "June 2023"
        },
        {
            title: "Organic Farm Product Packaging",
            category: "Print",
            description: "Eco-friendly packaging design for Organic Farm's product line. The design emphasizes sustainability and natural ingredients while standing out on retail shelves.",
            image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
            client: "Organic Farm",
            date: "March 2023"
        },
        {
            title: "Tech Startup Social Media Campaign",
            category: "Digital",
            description: "Social media graphics and campaign design for a tech startup launching their new app. The visuals communicate innovation and user-friendly design.",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
            client: "TechStart",
            date: "January 2023"
        },
        {
            title: "Luxe Apparel Visual Identity",
            category: "Branding",
            description: "Luxury fashion brand identity including logo design, patterns, and visual elements that convey elegance and exclusivity.",
            image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            client: "Luxe Apparel",
            date: "November 2022"
        },
        {
            title: "Financial Firm Corporate Stationery",
            category: "Print",
            description: "Professional corporate stationery design for a financial services firm, including business cards, letterheads, and presentation folders.",
            image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            client: "Summit Financial",
            date: "September 2022"
        },
        {
            title: "Fitness App Website Graphics",
            category: "Digital",
            description: "Website graphics and UI elements for a fitness tracking app, creating an energetic and motivational visual experience.",
            image: "https://images.unsplash.com/photo-1611162617213-6d7f0ccf67b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
            client: "FitTrack",
            date: "July 2022"
        }
    ];
    
    portfolioItemsArray.forEach((item, index) => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the project data based on index
            const project = projects[index];
            
            // Populate the modal with project data
            modalContent.innerHTML = `
                <div class="modal-project-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="modal-project-details">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="modal-project-meta">
                        <div>
                            <h4>Client</h4>
                            <p>${project.client}</p>
                        </div>
                        <div>
                            <h4>Category</h4>
                            <p>${project.category}</p>
                        </div>
                        <div>
                            <h4>Date</h4>
                            <p>${project.date}</p>
                        </div>
                    </div>
                </div>
            `;
            
            // Show the modal
            projectModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal when clicking the X button
    closeModal.addEventListener('click', function() {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Form submission
    const projectForm = document.getElementById('projectForm');
    const successModal = document.getElementById('successModal');
    const closeSuccess = document.querySelector('.close-success');
    
    projectForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real application, you would send the form data to a server here
        // For this demo, we'll just show the success modal
        
        // Reset form
        this.reset();
        budgetValue.textContent = '3000';
        budgetSlider.value = '3000';
        
        // Hide project modal if open
        projectModal.style.display = 'none';
        
        // Show success modal
        successModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    // Close success modal
    closeSuccess.addEventListener('click', function() {
        successModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real application, you would send the email to a newsletter service
        // For this demo, we'll just show an alert
        
        const emailInput = this.querySelector('input[type="email"]');
        alert(`Thank you for subscribing with ${emailInput.value}!`);
        emailInput.value = '';
    });
    
    // Initialize the first testimonial
    showTestimonial(0);
});