document.addEventListener('DOMContentLoaded', () => {

    const modeStyles = document.getElementById('mode');
    const switchMode = document.querySelector("input");

    switchMode.addEventListener('click', () => {
        if(modeStyles.href.includes('light')){
            modeStyles.href = 'dark-styles.css';
        } else {
            modeStyles.href = 'light-styles.css';

        }
    })
});