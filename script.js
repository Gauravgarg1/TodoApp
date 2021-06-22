let ulist=document.querySelector("ul");
        let inp=document.querySelector("input")

        let btn=document.querySelector("button");
        btn.addEventListener("click",function(){
            let task=inp.value;
            if(task=="")
            return ;
            inp.value="";

            let li=document.createElement("li")
            li.innerText=task;
            ulist.append(li);
            li.addEventListener("dblclick",function(){
                li.remove();
            })



        })

        // Btn_List.addEventListener("keypress", function(e) {

        //     var key = e.keyCode();
        
        //     if (key === 13) {
        
        //         function OnKeyEnterPressDoThis() {
        //             Input_Tarea();
        //             showTheNmbrOfListElmts();
        //             orderAlphaFukkabossList();
        //         }
        
        //     }
        
        // });
        console.log("1")