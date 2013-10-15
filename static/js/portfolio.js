 var count=1;
 function rotate() {    

        // timeout increase degrees:
        timer = setTimeout(function() {
              //alert('kk');
            if(count<=8){
            	$('.m'+count).css('-webkit-transform','scale(1)');
            	count= count+1;
            	rotate();
            }
            else{
            	return false;
            }
             // loop it
        },50);
    }
