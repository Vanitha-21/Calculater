let outputscreen = document.getElementById("output-screen");

      function display(num){
        outputscreen.value += num;
      }
      function Calculator(){
        try{
          outputscreen.value = eval(outputscreen.value);
        }
        catch(err)
        {
          alert("Invalid")
        }
      }
      function ac(){
        outputscreen.value = " ";
        
      }
      function del(){
        outputscreen.value = outputscreen.value.slice(0,-1);
      }