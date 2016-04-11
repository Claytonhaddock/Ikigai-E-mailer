window.addEventListener('load', function() {

	init();

	document.getElementById('download').addEventListener('click', function() {
	redraw();
	var canvas = document.getElementById('canvas');
	var picture = canvas.toDataURL();
    //downloadCanvas(this, 'canvas', 'Eekyguide.png');


	var data = {};
					data.title = $("#to").val();
					data.message = "Your Eeky-Guide";
					data.picture = picture;
					
					$.ajax({
						type: 'POST',
						url: "https://mysterious-shore-48796.herokuapp.com/send",
						data: JSON.stringify(data),
				        contentType: 'application/json',
                        						
                        success: function(data) {
                            console.log('success');
                            console.log(JSON.stringify(data));
                        }
                    });
	});	
})

function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}

function redraw(){

	var good = document.querySelector(".good");
	var love = document.querySelector(".love");
	var paid = document.querySelector(".paid");
	var need = document.querySelector(".need");

		ctx.font="12px Georgia";
		ctx.fillStyle = "#000000";
		ctx.fillText(good.value,130,200);
			
		ctx.font="12px Georgia";
		ctx.fillText(love.value,250,60);
		ctx.fillStyle = "#000000";

		ctx.font="12px Georgia";
		ctx.fillText(need.value,370,200);
		ctx.fillStyle = "#000000";

		ctx.font="12px Georgia";
		ctx.fillText(paid.value,250,340);
		ctx.fillStyle = "#000000";

		good.value = '';
		love.value = '';
		paid.value = '';
		need.value = '';
	}

	function init(){
		  c=document.querySelector('#canvas');
    	  ctx=c.getContext("2d");
		

		{
         var can = document.querySelector('canvas');
		h=parseInt(document.querySelector('canvas').getAttribute("height"));
		w=parseInt(document.querySelector('canvas').getAttribute("width"));

            // get it's context
            hdc = can.getContext('2d');

            hdc.strokeStyle = 'red';
            hdc.lineWidth = 2;

            // Fill the path
            hdc.fillStyle = "#ffffff";
            hdc.fillRect(0,0,w,h);
            //can.style.opacity = '0.2';

    }  
		ctx.beginPath();
		ctx.arc(250,120,100,0,2*Math.PI);
		ctx.fillStyle = "rgba(0, 255, 0, 0.2)";
		ctx.fill();
		//right
		ctx.beginPath();
		ctx.arc(330,200,100,0,2*Math.PI);
		ctx.fillStyle = "rgba(0, 255, 0, 0.2)";
		ctx.fill();
		//top
		ctx.beginPath();
		ctx.arc(170,200,100,0,2*Math.PI);
		ctx.fillStyle = "rgba(0, 255, 0, 0.2)";
		ctx.fill();
		//bottom
		ctx.beginPath();
		ctx.arc(250,280,100,0,2*Math.PI);
		ctx.fillStyle = "rgba(0, 255, 0, 0.2)";
		ctx.fill();
		//end of circles
		ctx.font="12px Georgia";
		ctx.fillStyle = "#000000";
		ctx.fillText("Passion",170,150);
			
		ctx.font="12px Georgia";
		ctx.fillText("Mission",280,150);
		ctx.fillStyle = "#000000";

		ctx.font="12px Georgia";
		ctx.fillText("Profession",170,260);
		ctx.fillStyle = "#000000";

		ctx.font="12px Georgia";
		ctx.fillText("Vocation",280,260);
		ctx.fillStyle = "#000000";
		//labels
		//left
		ctx.textAlign = "center";
		ctx.font="12px Georgia";
		ctx.fillStyle = "#000000";
		ctx.fillText("",130,200);

		//top
		ctx.textAlign = "center";	
		ctx.font="12px Georgia";
		ctx.fillText("",250,60);
		ctx.fillStyle = "#000000";

		//right
		ctx.textAlign = "center";
		ctx.font="12px Georgia";
		ctx.fillText("",370,200);
		ctx.fillStyle = "#000000";

		//bottom
		ctx.textAlign = "center";		
		ctx.font="12px Georgia";
		ctx.fillText("",250,340);
		ctx.fillStyle = "#000000";

		//top label
		ctx.textAlign = "center";		
		ctx.font="12px Georgia";
		ctx.fillText("That which you love",250,15);
		ctx.fillStyle = "#000000";

		//bottom label
		ctx.textAlign = "center";		
		ctx.font="12px Georgia";
		ctx.fillText("That which you can be paid for",250,395);
		ctx.fillStyle = "#000000";

		//left labels
		ctx.textAlign = "center";		
		ctx.font="12px Georgia";
		ctx.fillText("That",40,170);
		ctx.fillStyle = "#000000";

		ctx.textAlign = "center";		
		ctx.font="12px Georgia";
		ctx.fillText("which",40,185);
		ctx.fillStyle = "#000000";

		ctx.textAlign = "center";		
		ctx.font="12px Georgia";
		ctx.fillText("you are",40,200);
		ctx.fillStyle = "#000000";

		ctx.textAlign = "center";		
		ctx.font="12px Georgia";
		ctx.fillText("good",40,215);
		ctx.fillStyle = "#000000";

		ctx.textAlign = "center";		
		ctx.font="12px Georgia";
		ctx.fillText("at",40,230);
		ctx.fillStyle = "#000000";

		//right labels
		ctx.textAlign = "center";		
		ctx.font="12px Georgia";
		ctx.fillText("That",460,170);
		ctx.fillStyle = "#000000";

		ctx.textAlign = "center";		
		ctx.font="12px Georgia";
		ctx.fillText("which",460,185);
		ctx.fillStyle = "#000000";

		ctx.textAlign = "center";		
		ctx.font="12px Georgia";
		ctx.fillText("the",460,200);
		ctx.fillStyle = "#000000";

		ctx.textAlign = "center";		
		ctx.font="12px Georgia";
		ctx.fillText("world",460,215);
		ctx.fillStyle = "#000000";

		ctx.textAlign = "center";		
		ctx.font="12px Georgia";
		ctx.fillText("needs",460,230);
		ctx.fillStyle = "#000000";
	}

	

