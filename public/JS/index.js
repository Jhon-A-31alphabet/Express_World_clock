function change_styles() {
  const body = document.body;
  const h1 = document.getElementById('Current');
  const timeHeading = document.getElementById('Time');
  const dateHeading = document.getElementById('Date');
  const colorButton = document.getElementById('l_d_button');
  const _navbar_ = document.getElementById('navbar_');
  const NAME_ = document.getElementById('NAME');

  const current_background = window.getComputedStyle(body).backgroundColor;
  let isDarkMode = (current_background !== 'rgb(255, 255, 255)' && current_background !== 'white');

  const styles = {
    backgroundColor: isDarkMode ? 'white' : 'black',
    textColor: isDarkMode ? 'black' : 'white',
    buttonText: isDarkMode ? 'Dark' : 'light',
    buttonClass: isDarkMode ? 'btn btn-dark' : 'btn btn-light',
    navbarBackgroundColor: isDarkMode ? 'white' : 'black',
  };

  body.style.backgroundColor = styles.backgroundColor;
  h1.style.color = styles.textColor;
  timeHeading.style.color = styles.textColor;
  dateHeading.style.color = styles.textColor;
  NAME_.style.color = styles.textColor;
  colorButton.textContent = styles.buttonText;
  colorButton.className = styles.buttonClass;
  _navbar_.style.backgroundColor = styles.navbarBackgroundColor;

  localStorage.setItem('themeStyles', JSON.stringify(styles));
}

function loadSavedStyles() {
  const savedStylesString = localStorage.getItem('themeStyles');
  if (savedStylesString) {
    const savedStyles = JSON.parse(savedStylesString);
    const body = document.body;
    const h1 = document.getElementById('Current');
    const timeHeading = document.getElementById('Time');
    const dateHeading = document.getElementById('Date');
    const colorButton = document.getElementById('l_d_button');
    const _navbar_ = document.getElementById('navbar_');
    const NAME_ = document.getElementById('NAME');

    body.style.backgroundColor = savedStyles.backgroundColor;
    h1.style.color = savedStyles.textColor;
    timeHeading.style.color = savedStyles.textColor;
    dateHeading.style.color = savedStyles.textColor;
    NAME_.style.color = savedStyles.textColor;
    colorButton.textContent = savedStyles.buttonText;
    colorButton.className = savedStyles.buttonClass;
    _navbar_.style.backgroundColor = savedStyles.navbarBackgroundColor;
  }
}

// Load saved styles when the page loads
window.onload = loadSavedStyles;