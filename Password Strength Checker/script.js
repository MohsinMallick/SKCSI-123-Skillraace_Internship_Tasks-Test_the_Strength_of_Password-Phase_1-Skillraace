const passwordInput = document.getElementById("password");
const strengthMeter = document.querySelector(".strength-meter");
const suggestions = document.querySelector(".suggestions");


function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const glow = document.querySelector('.glow');
    
    // Password strength criteria
    const strength = {
      lowerCase: /[a-z]/.test(password),
      upperCase: /[A-Z]/.test(password),
      numbers: /[0-9]/.test(password),
      length: password.length >= 8
    };
    
    // Calculate strength level
    let level = 0;
    Object.values(strength).forEach(met => {
      if (met) level++;
    });
    
    // Set glow width based on strength level
    glow.style.width = `${level * 25}%`;
  }
  
  document.getElementById('password').addEventListener('input', checkPasswordStrength);


  const swiper = new Swiper('.swiper-container', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
        delay: 3000,
      },
    loop: true,
    speed: 800
  });

passwordInput.addEventListener("input", () => {
	const password = passwordInput.value;
	const strength = checkPasswordStrength(password);
	const glows = document.querySelectorAll(".glow");

	glows.forEach((glow, index) => {
		if (index < strength) {
			glow.style.width = `${(index + 1) * 25}%`;
		} else {
			glow.style.width = "0%";
		}
	});

	if (strength === 0) {
		suggestions.textContent = "Very weak. Choose a longer password with a mix of letters, numbers, and special characters.";
	} else if (strength === 1) {
		suggestions.textContent = "Weak. Choose a longer password with a mix of letters, numbers, and special characters.";
	} else if (strength === 3) {
		suggestions.textContent = "Moderate. Consider adding more unique characters and avoiding common patterns.";
	} else if (strength === 4) {
		suggestions.textContent = "Strong. Good job! Your password is hard to guess.";
	} else if (strength === 5) {
		suggestions.textContent = "Very strong. Excellent choice! Your password is extremely hard to guess.";
	}
});

function checkPasswordStrength(password) {
	let strength = 0;

	if (password.length < 2) {
		return strength;
	}

	if (/[a-z]/.test(password)) {
		strength++;
	}

	if (/[A-Z]/.test(password)) {
		strength++;
	}

	if (/\d/.test(password)) {
		strength++;
	}

	if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
		strength++;
	}

	if (password.length > 12 && strength > 2) {
		strength++;
	}

	return strength;
}




