let i = 0;
        arraybom = [];
        sumBOOM=1;
        for (i; i < 100; i++) {
            var div = document.getElementById(i+"d");
            let button = document.createElement("input");
            button.setAttribute("type", "button");
            button.setAttribute("class","buttonn")
            button.setAttribute("id", ""+i);
            button.setAttribute("value", "");
            div.appendChild(button);

            button.addEventListener ("click", function() {
               var id = this.id;
               var integer = parseInt(id, 10);
               check(integer);
              });
            if(i == 99){
                puhMines();
              }
        }

        function puhMines(){
            var i = 0 ;
            while(i < 10){
                var randonNumber =  Math.floor(Math.random() * 99) + 1; 
                if(!arraybom.includes(randonNumber)) {              
                    arraybom[i] = randonNumber;
                    document.getElementById(randonNumber).value = "";
                    i++;
                }
            }
        }

        function check(clicked){
            var count = 0 ;
            for(var i = 0 ; i < 100 ; i++){
                var v = document.getElementById(i);
                if(v.style.background == "grey" || v.style.visibility =="hidden")
                    count = count + 1;
              //  console.log(count);
            }
            if(count == 90 || count == 89){
                Swal.fire({
                 icon: 'success',
                 title: 'Good Job',
                 text: 'You Win :) !',
                 confirmButtonColor: '#ffc107',
                }).then((result) => {
                  window.location.replace("try.html")
                  });
            }
            let bomButton = document.getElementById(clicked);
            if(arraybom.includes(clicked)){
              Swal.fire({
                 icon: 'error',
                 title: 'Sorry',
                 text: 'You Lost :( !',
                 confirmButtonColor: '#ffc107',
                }).then((result) => {
                  window.location.replace("try.html")
                  });
                document.getElementById('restart').style.color='red';
                for(var s=0; s<20; s++){
                    let show = document.getElementById(arraybom[s]);
                    show.style.background = 'red';
                    document.getElementById('numberMINE').innerHTML="Number of mines = 0"
                }
            }else {
                sumbom(clicked);
            }
        }

        function sumbom(c){
            var numberOfNeighbour = resultt(c)
            var clickcolor = color(numberOfNeighbour);
            if(numberOfNeighbour == 0){
                document.getElementById(c).style.visibility = 'hidden';
                var plus1 = resultt(c+1); var plus10=resultt(c+10); var plus11=resultt(c+11); var plus9=resultt(c+9);
                var m1=resultt(c-1); var m11=resultt(c-11); var m10=resultt(c-10); var m9=resultt(c-9);
                if((c+1)%10 !=0 ){
                    if(plus1==0){
                        document.getElementById(c+1).style.visibility = 'hidden';
                        document.getElementById(c+1).style.background = 'grey';
                    }
                    var bCOLOR = color(plus1);
                    document.getElementById(c+1).value = plus1;
                    document.getElementById(c+1).style.background = 'grey';
                    document.getElementById(c+1).style.color = bCOLOR;
                    
                }
                if((c-1)> 0 && (c-1)%10 !=0 &&(c-1)%10 !=9){
                    if(m1==0){
                        document.getElementById(c-1).style.visibility = 'hidden';
                        document.getElementById(c-1).style.background = 'grey';
                    }
                    var bCOLOR = color(m1);
                    document.getElementById(c-1).value = m1;
                    document.getElementById(c-1).style.background = 'grey';
                    document.getElementById(c-1).style.color = bCOLOR;
                }
                if((c+9) < 99 && (c+9)%10 !=0 && (c+9)%10 !=9){
                    if(plus9==0){
                        document.getElementById(c+9).style.visibility = 'hidden';
                        document.getElementById(c+9).style.background = 'grey';
                    }
                    var bCOLOR = color(plus9);
                    document.getElementById(c+9).value = plus9;
                    document.getElementById(c+9).style.background = 'grey';
                    document.getElementById(c+9).style.color = bCOLOR;
                }
                if((c+11) < 99 && (c+11)%10 != 0){
                    if(plus11==0){
                        document.getElementById(c+11).style.visibility = 'hidden';
                        document.getElementById(c+11).style.background = 'grey';
                    }
                    var bCOLOR = color(plus11);
                    document.getElementById(c+11).value = plus11;
                    document.getElementById(c+11).style.background = 'grey';
                    document.getElementById(c+11).style.color = bCOLOR;
                }
                if((c+10) < 99){
                    if(plus10==0){
                        document.getElementById(c+10).style.visibility = 'hidden';
                        document.getElementById(c+10).style.background = 'grey';
                    }
                    var bCOLOR = color(plus10);
                    document.getElementById(c+10).value = plus10;
                    document.getElementById(c+10).style.background = 'grey';
                     document.getElementById(c+10).style.color = bCOLOR;
                }
                if((c-10) > 0){
                    if(m10==0){
                        document.getElementById(c-10).style.visibility = 'hidden';
                        document.getElementById(c-10).style.background = 'grey';
                    }
                    var bCOLOR = color(m10);
                    document.getElementById(c-10).value = m10;
                    document.getElementById(c-10).style.background = 'grey';
                    document.getElementById(c-10).style.color = bCOLOR;
                }
                if((c-9) > 0 && (c-9)%10 !=0){
                    if(m9==0){
                        document.getElementById(c-9).style.visibility = 'hidden';
                        document.getElementById(c-9).style.background = 'grey';
                    }
                    var bCOLOR = color(m9);
                    document.getElementById(c-9).value = m9;
                    document.getElementById(c-9).style.background = 'grey';
                     document.getElementById(c-9).style.color = bCOLOR;
                }
                if((c-11) > 0 && (c-11)%10 != 0 && (c-11)%10 != 9){
                    if(m11==0){
                        document.getElementById(c-11).style.visibility = 'hidden';
                        document.getElementById(c-11).style.background = 'grey';
                    }
                    var bCOLOR = color(m11);
                    document.getElementById(c-11).value = m11;
                    document.getElementById(c-11).style.background = 'grey';
                    document.getElementById(c-11).style.color = bCOLOR;
                }
                if(m9==0 && (c-9) > 0 && (c-9)%10 !=0)
                    sumbom(c-9);
                if(plus11==0 && (c+11) < 99 && (c+11)%10 != 0)
                    sumbom((c+11));
                if(plus1==0 && (c+1)%10 !=0)
                    sumbom(c+1);
            }
            else {
                document.getElementById(c).value = numberOfNeighbour;
                document.getElementById(c).style.color = clickcolor;
                document.getElementById(c).style.background = 'grey';
            }
        }

        function resultt(s){
            if(s<10){
                var rresult = calculation(s+1) + calculation(s-1)+ calculation(s+10) + calculation(s+9)  + calculation(s+11);
            }else if(s%10 == 9){
                var rresult = calculation(s-1) + calculation(s-10) + calculation(s+10) + calculation(s+9) + calculation(s-11);
            }
            else if(s%10 == 0){
                var rresult = calculation(s+1) +  calculation(s-10) + calculation(s+10) + calculation(s-9) +  calculation(s+11);
            }
            else if(s>90){
                var rresult = calculation(s+1) + calculation(s-1) + calculation(s-10) + calculation(s-9) + calculation(s-11) ;
            }
            else {
                var rresult = calculation(s+1) + calculation(s-1) + calculation(s-10) + calculation(s+10) + calculation(s+9) + calculation(s-9) + calculation(s-11) + calculation(s+11);
           }
            return rresult;
        }

        function calculation(clickedId){
            if (arraybom.includes(clickedId)) {return 1;}return 0;
           
        }

        function color(buttoncolor){
            if(buttoncolor == 0){
                return 'red';
            }else if(buttoncolor==1){
                    return 'DarkKhaki';
            }else if(buttoncolor==2){
                    return 'blue';
            }else if(buttoncolor==3){
                    return 'Green';
            }else if(buttoncolor==4){
                    return 'Orange';
            }else if(buttoncolor==5){
                    return 'Gold';
            }else if(buttoncolor==6){
                    return 'LightGreen';
            }else if(buttoncolor==7){
                    return 'Pink';
            }else{
                    return 'white';
            }
        }
