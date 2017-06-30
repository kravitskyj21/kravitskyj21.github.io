var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
            var drawing = false;
            var color = "black";
            var size = 10;
            var tool = "square";
            
            canvas.addEventListener("mousemove", mouseMove);
            canvas.addEventListener("mousedown", mouseDown);
            canvas.addEventListener("mouseup", mouseUp );
            
        function mouseMove(event){
              var x = event.pageX - canvas.offsetLeft;
              var y = event.pageY - canvas.offsetTop;
         
             
            
            
            if(drawing == true){
              if(tool == "square"){
                context.fillRect(x, y, size, size);
            } else if(tool == "circle"){
                context.strokeStyle = color;
               context.beginPath();
               context.arc(x, y, size, 0, 2 * Math.PI, false);
                context.fill();
                context.stroke();
            } else {
                        context.strokeStyle = "black";                        
                        context.beginPath();
                        context.arc(x, y, size, 0, 2 * Math.PI, false);
                        context.fill();
                        context.stroke();                    
                    }
        }
     }
        function mouseDown(event){
            drawing = true;
        }
            
        function mouseUp(event){
            drawing = false;
        }

        function changeColor(){
            color = document.getElementById("color").value;
            context.fillStyle = color;
        }

        function changeSize(){
           var newSize = prompt("Entera new brush size:"); 
            size = parseInt(newSize);
        }

      
              function changeTool(){
            tool = document.getElementById("tool").value;
              }
            
            function saveImage(){
                var image = canvas.toDataURL();
                window.location.href = image;
            }
      
        
        
        
        
        
        function  clearScreen(){
            context.clearRect(0, 0, canvas.width, canvas.height);
        }   