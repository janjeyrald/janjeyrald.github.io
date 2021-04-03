function text(x){
    if (x==0){
        document.getElementById('pkg0').style.display = "block";
        document.getElementById('pkg1').style.display = "none";
        document.getElementById('pkg2').style.display = "none";
        document.getElementById('pkg3').style.display = "none";}
        else if(x==1){
            document.getElementById('pkg0').style.display = "none";
            document.getElementById('pkg1').style.display = "block";
            document.getElementById('pkg2').style.display = "none";
            document.getElementById('pkg3').style.display = "none";
            }
            else if(x==2){
                document.getElementById('pkg0').style.display = "none";
                document.getElementById('pkg1').style.display = "none";
                document.getElementById('pkg2').style.display = "block";
                document.getElementById('pkg3').style.display = "none";
            }
            else if(x==3){
                document.getElementById('pkg0').style.display = "none";
                document.getElementById('pkg1').style.display = "none";
                document.getElementById('pkg2').style.display = "none";
                document.getElementById('pkg3').style.display = "block";
            }
                else{
                document.getElementById('pkg0').style.display = "none";
                document.getElementById('pkg1').style.display = "none";
                document.getElementById('pkg2').style.display = "none";
                document.getElementById('pkg3').style.display = "none";
                }
            }
        
    
