class e{constructor(e){this.name=e.name,this.id=e.id,this.pkm_front=e.sprites.front_default,this.pkm_back=e.sprites.back_default,this.pkm_type=e.types}}var t=[];document.querySelector("button").addEventListener("click",()=>{document.querySelector("#button").style.visibility="hidden",document.querySelector("#pokedex").style.visibility="visible",i()});const i=async()=>{for(var i=1;i<=151;i++)await fetch("https://pokeapi.co/api/v2/pokemon/"+i+"/").then(function(e){return e.json()}).then(function(i){var n;n=new e(i),t.push(n)});await n()},n=async()=>{let e=document.getElementById("pokedex");for(var i=0;i<t.length;i++){for(var n=0;n!=t[i].pkm_type.length;){if(0==n)var s=t[i].pkm_type[n].type.name;if(1==n)var r=t[i].pkm_type[n].type.name;else r="";n++}e.innerHTML+=`<div class="card">
                                    <img src="${t[i].pkm_back}">
                                    <img class="front" src="${t[i].pkm_front}"><br>
                                    ${t[i].id}. ${t[i].name}<br>
                                    <div class="types">
                                        ${s} ${r}
                                    </div>
                                </div>`}};
//# sourceMappingURL=index.2902a4fd.js.map
