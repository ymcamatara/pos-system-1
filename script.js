document.addEventListener('DOMContentLoaded', () => {
    // Function to format date and time 
    // Format: 10:40 PM - 3/10/2026
    const updateTime = () => {
        const now = new Date();
        
        let hours = now.getHours();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        
        const minutes = now.getMinutes().toString().padStart(2, '0');
        
        const month = now.getMonth() + 1; // Months are 0-based
        const date = now.getDate();
        const year = now.getFullYear();
        
        const timeString = `${hours}:${minutes} ${ampm} - ${month}/${date}/${year}`;
        
        const timeElement = document.getElementById('current-time');
        if (timeElement) {
            timeElement.textContent = timeString;
        }
    };

    // Update time immediately
    updateTime();
    
    // Update time every minute
    setInterval(updateTime, 60000);
});
