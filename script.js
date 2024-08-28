//your JS code here. If required.
//your JS code here. If required.

document.addEventListener('DOMContentLoaded',()=>{

	function setCookies(name, value){
		const d = new Date();
		d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
		const expires = "expires=" + d.toUTCString();

		document.cookie = name+"="+value+";"+expires;
	}

	function getCookies(name){
		const nameEQ = name + "=";
		const ca = document.cookie.split(';');
		for(let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) === ' ') c = c.substring(1);
			if(c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
	}

	function applySavedPreference(){
		const fSize = getCookies('fontsize');
		const fColor = getCookies('fontcolor');

		if(fSize){
			document.documentElement.style.setProperty('--fontsize',fSize+"px");
			document.getElementById("fontsize").value=fSize;
		}

		if(fColor){
			document.documentElement.style.setProperty('--fontcolor',fColor);
			document.getElementById("fontcolor").value=fColor;
		}

		
		
	}
 

	document.querySelector("form").addEventListener('submit',(event)=>{
		event.preventDefault();
		let fontSize = document.getElementById("fontsize").value;
		let fontColor = document.getElementById("fontcolor").value;
		setCookies('fontsize',fontSize);
		setCookies('fontcolor',fontColor);
		applySavedPreference()
		
	})
	applySavedPreference()
})