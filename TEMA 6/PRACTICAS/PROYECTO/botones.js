document.addEventListener('DOMContentLoaded', iniciar, false);

const botons = { num: window.prompt('introduce un numero de botones') };
function iniciar() {
    //
    const main=new_element('div','',document.body);
    const output=new_element('div','',main);
    const output1=new_element('div','',main);
    const output2=new_element('div','',main);
    const output3=new_element('div','',main);
    const btn_tot=new_element('button','Totales',output3);
    btn_tot.onclick=() => {
        output2.innerHTML="";
        let ul= new_element('ul',"",output2);
        let botons= document.querySelectorAll('.btn');
        /** for (let i = 0; i < botons.length; i++) {
           let li=  new_element('ul',`${botons[i].textContent}= ${botons[i].total}`,ul);
           li.style.backgroundColor=botons[i].style.backgroundColor;
           li.style.color=white;
        }
    }*/
    
    botons.forEach ((ele,index)=>{
      const li= new_element('li',`${ele.textContent}= ${ele.total}`,ul);
      li.style.backgroundColor=ele.style.backgroundColor;
      li.style.color="white";
      }) 

    }
    for (let i = 0; i < botons.num; i++) {
      const btn =new_element('button',`Bot&oacuten#${i+1}`,output1);
      btn.style.backgroundColor="#"+ Math.random().toString(16).slice(2,8);
      btn.style.color='white';
      btn.total=0;
      btn.onclick=mostrar;
      btn.classList.add("btn");
    }
function mostrar(e) {
    output.style.backgroundColor=this.style.backgroundColor;
    this.total++;
    output.innerHTML= `${this.textContent}: (${this.total})`;
}

}
function new_element(nombre, contenido, padre) {
    const elemento = document.createElement(nombre);
    elemento.innerHTML = contenido;
    return padre.appendChild(elemento);
}
