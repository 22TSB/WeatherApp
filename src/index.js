import './css/reset.css';
import './css/style.css';

const fetchApi = (name) => {
    const asyncFunction = async () => {
        try {
            const res = await fetch(
                `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${name}?unitGroup=us&key=DBQFMCKC6CCJUT55XEUUKXR2J&contentType=json`,
                { mode: 'cors' }
            );
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };
    asyncFunction();
};
// fetchApi("zalau");

// config
document.addEventListener('click', (e) => {
    const isDropDownButton = e.target.getAttribute("class");
    if (isDropDownButton === null || !isDropDownButton.includes("configdropdown")) {
        return;
    }
    
    let currentDropdown;
    
    if (isDropDownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
    }
    
    document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
        if (dropdown === currentDropdown) {
            return;
        }
        dropdown.classList.remove('active');
    });
});