var myBar = new MWPjsbar('Add beautiful widgets to your website', 'Get widgets!', 'top'),
	btnTop = document.getElementById('top'),
	btnBottom = document.getElementById('bottom');




function posTop() {
	var navBar = document.querySelector('.bar'),
		btnTop = document.getElementById('top'),
		btnBottom = document.getElementById('bottom');
	navBar.classList.remove('pos-bottom')
	navBar.classList.add('pos-top');
	btnBottom.classList.remove('active')
	btnTop.classList.add('active');
	btnBottom.classList.add('in-active')
	btnTop.classList.remove('in-active');
};
function posBottom() {
	var navBar = document.querySelector('.bar'),
		btnTop = document.getElementById('top'),
		btnBottom = document.getElementById('bottom');
	navBar.classList.remove('pos-top');
	navBar.classList.add('pos-bottom');
	btnTop.classList.remove('active')
	btnBottom.classList.add('active');
	btnTop.classList.add('in-active')
	btnBottom.classList.remove('in-active');
};

// var myBar = new MWPjs.bar({
//    message: 'msg here - Beautiful and simple website widgets',
//    position: 'top' // bottom
// });


function MWPjsbar(_message ,_buttonText ,_position) {
    this.message = _message;
    this.position = _position;
    this.buttonText = _buttonText;
    this.close = function(){ alert('pushed x') };
   	this.clickOk = function(){ alert('pushed ok') };
}

function generateBar() {
	var bar = document.querySelector('.bar'),
		leftIcon = document.createElement('i'),
		exitIcon = document.createElement('i'),
		message = document.createElement('span'),
		button = document.createElement('button');



		leftIcon.classList.add('fa', 'fa-info');
		exitIcon.classList.add('fa', 'exit');
		message.classList.add('widget-info');
		message.innerText = myBar.message;
		button.classList.add('btn', 'btn-widget');
		button.innerText = myBar.buttonText;

		if(myBar.position === 'top') {
			bar.classList.add('pos-top');
		} else {
			bar.classList.add('pos-bottom');
		}


		message.appendChild(button);
		bar.appendChild(leftIcon);
		bar.appendChild(message);
		bar.appendChild(exitIcon);

		exitBtn = document.querySelector('.exit');
		okBtn = document.querySelector('.fa-info');
};
generateBar();

btnTop.addEventListener("click", posTop,false);
btnBottom.addEventListener("click", posBottom, false);
exitBtn.addEventListener("click", myBar.close, false);
okBtn.addEventListener("click", myBar.clickOk, false);


