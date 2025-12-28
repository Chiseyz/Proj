
   // PAGE NAVIGATION
    function showPage(pageId) {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => page.classList.remove('active'));

        const target = document.getElementById(pageId);
        if (target) {
            target.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // ACCORDION TOGGLE
    function toggleAccordion(header) {
        const content = header.nextElementSibling;
        content.classList.toggle('active');
    }

    // CHECKLIST TOGGLE
    function toggleCheck(item) {
        item.classList.toggle('checked');
    }

    // FACILITY SEARCH
    function searchFacilities() {
        const input = document.getElementById('facilitySearch').value.toLowerCase();
        const facilities = document.querySelectorAll('.facility-card');

        facilities.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(input) ? 'block' : 'none';
        });
    }

    // DYNAMIC WELCOME MESSAGE
    function setWelcomeMessage() {
        const msg = document.getElementById('welcomeMessage');
        const hour = new Date().getHours();

        if (hour < 12) msg.textContent = "Good morning, Warrior! Ready to conquer your classes?";
        else if (hour < 18) msg.textContent = "Good afternoon! Stay focused and keep pushing.";
        else msg.textContent = "Good evening! Review smart and rest well.";
    }

    setWelcomeMessage();
