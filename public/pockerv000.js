var temps=0
var cpav=[]
var cpavi=[]
var joueur=[]
var cej=0
var cbon=false
var cart=[]
var flop=[]
var turn=[]
var river=[]
var TEMP=0
var TOUR=0
var SCOR=[]
var mises=[]
var PERDU=[]
var STOP
var FIN=false
/////////////
var deal=9///
var nbj=10///
/////////////

function jeton(sc,can){

			jau=Math.floor(sc/1000)
							rou=Math.floor((sc-jau*1000)/500)
							ver=Math.floor((sc-jau*1000-rou*500)/100)
							ble=Math.floor((sc-jau*1000-rou*500-ver*100)/50)
							gri=Math.floor((sc-jau*1000-rou*500-ver*100-ble*50)/10)
						canj=document.getElementById(can)
							canj.getContext('2d').clearRect(0,0,canj.width,canj.height)
						for (ir=1; ir<=gri;ir++){
							canj.getContext('2d').drawImage(document.getElementById("gris"),canj.width*0.0,canj.height*(0.7-ir*0.05),canj.width*0.2,canj.height*0.2)	
						}
						for (ir=1; ir<=ble;ir++){
							canj.getContext('2d').drawImage(document.getElementById("bleu"),canj.width*0.2,canj.height*(0.7-ir*0.05),canj.width*0.2,canj.height*0.2)	
						}
						for (ir=1; ir<=ver;ir++){
							canj.getContext('2d').drawImage(document.getElementById("vert"),canj.width*0.4,canj.height*(0.7-ir*0.05),canj.width*0.2,canj.height*0.2)	
						}
						for (ir=1; ir<=rou;ir++){
							canj.getContext('2d').drawImage(document.getElementById("rouge"),canj.width*0.6,canj.height*(0.7-ir*0.05),canj.width*0.2,canj.height*0.2)	
						}
						for (ir=1; ir<=jau;ir++){
							canj.getContext('2d').drawImage(document.getElementById("jaune"),canj.width*0.8,canj.height*(0.7-ir*0.05),canj.width*0.2,canj.height*0.2)	
						}
	
}

function mise(jo,so){
	
	mises[jo][0]=mises[jo][0]+so
	mises[jo][1]=true
	can="J"+(jo+1)+"m"
	jeton(mises[jo][0],can)
	SCOR[jo]=SCOR[jo]-so
	can="J"+(jo+1)+"j"
	jeton(SCOR[jo],can)

	}

function effjet(nbj){

	for(i=0;i<=nbj-1;i++){
		can="J"+(i+1)+"m"
		canj=document.getElementById(can)
		canj.getContext('2d').clearRect(0,0,canj.width,canj.height)

	}
}

function init(){
	
	for (sc=0;sc<=nbj-1;sc++){
	SCOR[sc]={}
	 
	 SCOR[sc]=1000

	}
	//SCOR[5]=20
	//SCOR[7]=20
go()
}

function go(){
	nbdj=nbj
	document.getElementById("rouge").style.visibility="hidden"
	document.getElementById("vert").style.visibility="hidden"
	document.getElementById("gris").style.visibility="hidden"
	document.getElementById("jaune").style.visibility="hidden"
	document.getElementById("bleu").style.visibility="hidden"
	document.getElementById("coeur").style.visibility="hidden"
	document.getElementById("carreau").style.visibility="hidden"
	document.getElementById("pique").style.visibility="hidden"
	document.getElementById("trefle").style.visibility="hidden"
	document.getElementById("dos").style.visibility="hidden"
	document.getElementById("deal").style.visibility="hidden"
	document.getElementById("dial").style.visibility="hidden"
	dra()
	for(ip=0;ip<=nbj-1;ip++){
		cecan=document.getElementById("J"+(ip+1)+"ch")
		ctx=cecan.getContext('2d')
			ctx.font = "35px Comic Sans MS";
							 ctx.fillStyle = "black"
							  ctx.fillText(ip,cecan.width*.25,cecan.height*.73)
		mises[ip]=new Array(0,false,false,false)

		if (SCOR[ip]<=0){
			nbdj--
			mises[ip][2]=true
			mises[ip][3]=true
			can=document.getElementById("J"+(ip+1)+"ch")
			ctx=can.getContext('2d')
			ctx.clearRect(0,0,can.width,can.height)
		}else{

		document.getElementById("J"+(ip+1)+"ch").style.background="rgba(0, 255, 255, 1)"

		}
		
	}
	
TOUR=TOUR+1
	cacheboutton()
	
	
	dra()
	dradeal(deal)
	
		//distrib a tous les joueurs
	
	joueur=distrib("J",nbj,2,nbdj,deal)
//console.log(joueur)
//////////////////////////////////////////
/*
	joueur[0][0]=[0,6]
	joueur[0][1]=[0,0]
	joueur[1][0]=[0,12]
	joueur[1][1]=[0,11]	
*/
/////////////////////////////////////////
	//retourn joueur 1
	ret("J",cej,joueur)

		gop()
	FIN=false
	setTimeout(function(){
	jj=deal	
	jj=projou(jj)	
	mise(jj,10)
	mises[jj][1]=false
	jj=projou(jj)
	mise(jj,20)
	mises[jj][1]=false
	jj=projou(jj)
	jejou(jj)
	},TEMP*170)	

}

function projou(jji){
	jji++
if (jji>=nbj){jji=0}
if(mises[jji][2]==true){

jji=projou(jji)}	

return jji
}

function prejou(jjj){
	jjj--
	//alert(jji)
if (jjj<0){jjj=nbj-1}
if(mises[jjj][2]==true){
	
	jjj=prejou(jjj)}	

return jjj
}


function jojou(jj,pp){

	setTimeout(function(){
		put=eval(document.getElementById("tib").value)
	if (pp=="re"&&put){
		if(put>=SCOR[jj]){put=SCOR[jj]}
					document.getElementById("tib").value=Math.floor(put/10)*10
		relance(jj)
		jj=projou(jj)		
		jejou(jj)
	}
	if (pp=="ch"){
		check(jj)
		jj=projou(jj)
			jejou(jj)
	}
	if (pp=="co"){
		couche(jj)
		jj=projou(jj)
		jejou(jj)
	}
},200)

}

function miz(){
				for (i=0;i<=nbj-1;i++){
					mises[i][1]=false
				if (mises[i][2]!=true){
					
				document.getElementById("J"+(i+1)+"ch").style.background="rgba(0, 255, 255 ,1)"
				
				}
			}

}

function relance(jj){

			mimsme=eval(document.getElementById("tib").value);
			mise(jj,mimsme)
			miz()
	
}

function jejou(jj){
	if(testsicont()==true){
		
		miz()
		go2()
		
		jj=deal

		jj=projou(jj)
		if(FIN==false){setTimeout(function(){jejou(jj)},200)}
	}else{
		if(jj==0){montreboutton()}else{
			cacheboutton()
		
			setTimeout(function(){
				
				check(jj)
				montreboutton()
				temps=1
				TEMP=1
				jj=projou(jj)
				
				jejou(jj)
			},200)
		}
	}
}

function testsicont(){
		STOP=false
		n=0
		m=0
		nbjm=0
		for (i=0;i<=nbj-1;i++){
			if(mises[i][2]==false){nbjm++}
		}
		for (i=0;i<=nbj-1;i++){
			jjav=prejou(i)
				if(mises[i][0]==mises[jjav][0]&&mises[i][2]==false){n++}
				if(mises[i][1]==true&&mises[i][2]==false){m++}
		}
		if(n==nbjm&&m==nbjm){

		STOP=true
		}
		return STOP	
	

}


function check(jj){
	
					jav=prejou(jj)
			 		mise(jj,(mises[jav][0]-mises[jj][0]))
			 		mises[jj][1]=true
			 		document.getElementById("J"+(jj+1)+"ch").style.background="rgba(180, 210, 120, 1)"
}




function couche(jj){

			if(document.getElementById("J"+ (jj+1) +"c0a") ){
				ccc=document.getElementById("J"+ (jj+1) +"c0a")
				bbb=document.getElementById("J"+(jj+1)+"ch")
				bb=bbb.getContext('2d')
				cc=ccc.getContext('2d')
				cc.fillStyle = "rgba(23, 145, 167, 0.5)"
				cc.fillRect(0, 0, ccc.width, ccc.height);
				bbb.style.background="grey"
			}
			if(document.getElementById("J"+ (jj+1) +"c1a")){
				ccc=document.getElementById("J"+ (jj+1) +"c1a")
				bbb=document.getElementById("J"+(jj+1)+"ch")
				bb=bbb.getContext('2d')
				cc=ccc.getContext('2d')
				cc.fillStyle = "rgba(23, 145, 167, 0.5)"
				cc.fillRect(0, 0, ccc.width, ccc.height);
			bbb.style.background="grey"
			}
			if(document.getElementById("J"+ (jj+1) +"c0b")){
				ccc=document.getElementById("J"+ (jj+1) +"c0b")
				bbb=document.getElementById("J"+(jj+1)+"ch")
				bb=bbb.getContext('2d')
				cc=ccc.getContext('2d')
				cc.fillStyle = "rgba(23, 145, 167, 0.5)"
				cc.fillRect(0, 0, ccc.width, ccc.height);
				bbb.style.background="grey"
			}
			if(document.getElementById("J"+ (jj+1) +"c1b")){
				ccc=document.getElementById("J"+ (jj+1) +"c1b")
				bbb=document.getElementById("J"+(jj+1)+"ch")
				bb=bbb.getContext('2d')
				cc=ccc.getContext('2d')
				cc.fillStyle = "rgba(23, 145, 167, 0.5)"
				cc.fillRect(0, 0, ccc.width, ccc.height);
				bbb.style.background="grey"
			}
	
		mises[jj][2]=true
}


function go2(){

	cacheboutton()
	
	if(flop.length<=0){
		crame1=distrib("C",1,1,nbdj)
		flop=distrib("F",1,3,nbdj)
		console.log(flop)
		////////////////////////////////////////
/*
		flop[0][0]=[0,10]
		flop[0][1]=[0,9]
		flop[0][2]=[0,5]
*/
		//////////////////////////////////////
		
		ret("F",0,flop)
	
	}else if (turn.length<=0){
			
		document.getElementById("C1c1").id=("C1c1a")
		document.getElementById("C1c1a").getContext('2d').drawImage(document.getElementById("dos"), 0, 0,80,120)	

		document.getElementById("C1c0a").id=("C1c0")
		
		crame2=distrib("C",1,1,nbdj)	
		turn=distrib("T",1,1,nbdj)
		ret("T",0,turn)
	
	}else if (river.length<=0){

		document.getElementById("C1c0a").id=("C1c0");
	    crame3=distrib("C",1,1,nbdj)	;

	    river=distrib("R",1,1,nbdj);
	    ret("R",0,river);
		gop();

	}else if (river.length>0){fin()}
	gop()
}

function contab(){
		tami=0
		for (i=0;i<=mises.length-1;i++){
			tami=tami+mises[i][0]
			mises[i][0]=0
		}

		for (i=0;i<=GGA.gagnants.length-1;i++){	
			SCOR[GGA.gagnants[i].ide]=SCOR[GGA.gagnants[i].ide]+Math.floor(tami/GGA.gagnants.length)
			document.getElementById("J"+(eval(GGA.gagnants[i].ide)+1)+"ch").style.background="rgba(176, 0, 0, 1)"
		can=("J"+(GGA.gagnants[i].ide+1)+"j")
		jeton(SCOR[GGA.gagnants[i].ide],can)
		}


			
	return Math.floor(tami/GGA.gagnants.length)
}

function fin(){
	gop()
		tami=contab();
		retlcar();
FIN=true
effjet(nbj);
		dial=document.getElementById("dial")
		dial.getContext('2d').clearRect(0, 0, dial.width, dial.height);
		diial(RESLT,"Score",SCOR,"","","","","","Mise remportée :             "+tami);
		
		
        
        
			
		(function (sc,can){
							jau=Math.floor(sc/1000)
							rou=Math.floor((sc-jau*1000)/500)
							ver=Math.floor((sc-jau*1000-rou*500)/100)
							ble=Math.floor((sc-jau*1000-rou*500-ver*100)/50)
							gri=Math.floor((sc-jau*1000-rou*500-ver*100-ble*50)/10)
						canj=document.getElementById(can)
						for (ir=1; ir<=gri;ir++){
							canj.getContext('2d').drawImage(document.getElementById("gris"),canj.width*0.3,canj.height*(0.85-ir*0.02),canj.width*0.1,canj.height*0.1)	
						}
						for (ir=1; ir<=ble;ir++){
							canj.getContext('2d').drawImage(document.getElementById("bleu"),canj.width*0.4,canj.height*(0.85-ir*0.02),canj.width*0.1,canj.height*0.1)	
						}
						for (ir=1; ir<=ver;ir++){
							canj.getContext('2d').drawImage(document.getElementById("vert"),canj.width*0.5,canj.height*(0.85-ir*0.02),canj.width*0.1,canj.height*0.1)	
						}
						for (ir=1; ir<=rou;ir++){
							canj.getContext('2d').drawImage(document.getElementById("rouge"),canj.width*0.6,canj.height*(0.85-ir*0.02),canj.width*0.1,canj.height*0.1)	
						}
						for (ir=1; ir<=jau;ir++){
							canj.getContext('2d').drawImage(document.getElementById("jaune"),canj.width*0.7,canj.height*(0.85-ir*0.02),canj.width*0.1,canj.height*0.1)	
						}
			
		})(tami,"dial");
				setTimeout(function(){
		document.getElementById("buttonc").disabled = true
		document.getElementById("buttond").disabled = false
		document.getElementById("buttone").disabled = true
		document.getElementById("buttonf").disabled = true
		document.getElementById("buttong").disabled = true
		document.getElementById("buttonh").disabled = true},500)	
}




	 


function diial(mess1,mess2,mess3,mess4,mess5,mess6,mess7,mess8,mess9){
							
								dial=document.getElementById("dial")
 								//dial.getContext('2d').clearRect(0, 0, dial.wdith, dial.height);
							  	dial.getContext('2d').font = "35px Comic Sans MS";
							  		for(i=1;i<10;i++){
							  	if(eval("mess"+i)){dial.getContext('2d').fillText(eval("mess"+i),29, 40*i)}
							  	}
							  	dial.style.visibility="visible"
							  }


function go3(){
	
	for (i=0;i<=joueur.length-1;i++){
		if(mises[i][0]!=0){
			SCOR[i]=SCOR[i]+mises[i][0]
			mises[i][0]=0
			can="J"+(i+1)+"m"
			jeton(mises[i][0],can)
			can="J"+(i+1)+"j"
			jeton(SCOR[i],can)
		}

	}

	cpav=[]
	cpavi=[]
	joueur=[]
	cej=0
	cbon=false
	cart=[]
	flop=[]
	turn=[]
	river=[]
	TEMP=0
	temps=0
	document.getElementById("dial").style.visibility="hidden"
	
	for (i=1;i<=10;i++){
		for (j=0;j<=1;j++){	
			if(document.getElementById("J"+ i +"c"+ j +"a")!= null ){document.getElementById("J"+ i +"c"+ j +"a").id=("J"+ i +"c"+ j)}
			if(document.getElementById("J"+ i +"c"+ j +"b")!= null ){document.getElementById("J"+ i +"c"+ j +"b").id=("J"+ i +"c"+ j)}
		}
	}
	for (is=0;is<=2;is++){
		if(document.getElementById("F1c" + is + "a")!= null ){document.getElementById("F1c" + is + "a").id=("F1c" + is )}
		if(document.getElementById("F1c" + is + "b")!= null ){document.getElementById("F1c" + is + "b").id=("F1c" + is )}

		if(document.getElementById("C1c" + is + "a")!= null ){document.getElementById("C1c" + is + "a").id=("C1c" + is )}
		if(document.getElementById("C1c" + is + "b")!= null ){document.getElementById("C1c" + is + "b").id=("C1c" + is )}

	}
				
	if(document.getElementById("T" + 1 + "c" + 0 + "a")!= null ){document.getElementById("T" + 1 + "c" + 0 + "a").id=("T" + 1 + "c" + 0 )}
	if(document.getElementById("T" + 1 + "c" + 0 + "b")!= null ){document.getElementById("T" + 1 + "c" + 0 + "b").id=("T" + 1 + "c" + 0 )}

	if(document.getElementById("R"+ 1 +"c"+ 0 +"a")!= null ){document.getElementById("R"+ 1 +"c"+ 0 +"a").id=("R"+ 1 +"c"+ 0 )}
	if(document.getElementById("R"+ 1 +"c"+ 0 +"b")!= null ){document.getElementById("R"+ 1 +"c"+ 0 +"b").id=("R"+ 1 +"c"+ 0 )}

    if(document.getElementById("CD")!= null ){document.getElementById("CD").style.zIndex=0}
	deal=deal+1
	if (deal>=nbj){deal=0}
		go()
}


function dra(){
	cecann=document.getElementById("canv")
	fillRadrect (cecann,12.5,18,75,64,32,"white")
	cecann.getContext('2d').drawImage(document.getElementById("coeur"),cecann.width/2-(cecann.width*0.05)*1.7,cecann.height/2-(cecann.height*0.1)/2,cecann.width*0.05,cecann.height*0.1)	
	cecann.getContext('2d').drawImage(document.getElementById("carreau"),cecann.width/2-(cecann.width*0.05)*0.7,cecann.height/2-(cecann.height*0.1)/2,cecann.width*0.05,cecann.height*0.1)	
	cecann.getContext('2d').drawImage(document.getElementById("pique"),cecann.width/2+(cecann.width*0.05)*0.2,cecann.height/2-(cecann.height*0.1)/2,cecann.width*0.05,cecann.height*0.1)	
	cecann.getContext('2d').drawImage(document.getElementById("trefle"),cecann.width/2+(cecann.width*0.05)*1.2,cecann.height/2-(cecann.height*0.1)/2,cecann.width*0.05,cecann.height*0.1)	


}

function fillRadrect (cont,rX,rY,rW,rH,cR,col){

	rX=rX/100
	rY=rY/100
	rW=rW/100
	rH=rH/100
	cR=cR/100
		
	cont=cecann.getContext("2d")
	cw=cecann.width
	ch=cecann.height

      cont.beginPath();
      cont.moveTo((rX)*cw+cR*ch, rY*ch);
      cont.lineTo((rX + rW )*cw-cR*ch, rY*ch);
      cont.arcTo((rX + rW)*cw, rY*ch,(rX + rW)*cw, (rY + cR)*ch, cR*ch);
  	cont.lineTo((rX + rW)*cw,  (rY+rH-cR)*ch);
      cont.arcTo((rX + rW)*cw, (rY+rH)*ch, (rX + rW)*cw-cR*ch,(rY+rH)*ch, cR*ch);
	cont.lineTo((rX )*cw+cR*ch,  (rY+rH)*ch);
	  cont.arcTo(rX*cw,(rY+rH)*ch, rX*cw, (rY+ rH-cR)*ch, cR*ch);
	cont.lineTo(rX*cw ,  (rY+cR)*ch);
	  cont.arcTo(rX*cw, rY*ch, (rX)*cw+cR*ch, rY*ch, cR*ch);
      	cont.strokeStyle=col;
		cont.lineWidth = 4;
      cont.stroke();



}


function distrib(f,nbj,nbcarpj,nbdj,deall){
	var joueurs=[]
		tr=0
		nbdj=nbj
	
	deall=deal
	if(f!="J"){deall=NaN}
	    //prepare le tableau joueur
			    for (j=0;j<=nbj-1;j++){
			    	for (i=0;i<=nbcarpj-1;i++){
			        	joueurs[j]=new Array()
			    	}
			    }
		    //pioche les cartes
		cpav=piochecartes(nbdj*nbcarpj)
		    //Distribution joueurs
		        for (j=0;j<=nbcarpj-1;j++){
		        	ji=j
			    		for (u=0;u<=nbj-1;u++){
			    			
			    			if(f=="J"){
			    				i=u+deal
			        		if (u+deal>=nbj){i=u+deal-nbj}
			        			
							}else {
								i=u
								  }
							if(SCOR[i]<=0&&f=="J"){
							}else{

					        joueurs[i][j]=cpav[i-tr+nbj*j]
					        can=f+(i+1)+"c"+j
					        drawdos(can)
			   			 }
			   		}
				}

	return joueurs
};

function ident(ar){
	carti = [];
	coul=['coeur','carreau','pique','trefle'];
	val=['A',2,3,4,5,6,7,8,9,10,'V','D','R'];
	carti=([coul[ar[0]],val[ar[1]]]);
	return carti
}	 
function id1v(ar){
	ar--
	cart = "";
	val=['As',2,3,4,5,6,7,8,9,10,'Valet','Dame','Roi'];
	cart=(val[ar]);
	return cart
}	 
function id1c(ar){
	cart = "";
	coul=['coeur','carreau','pique','trefle'];
	cart=(coul[ar]);
	return cart
}	 

function piochecartes(nbc){
    var pio=0
    cp=[]
    cpav=[]
    while (pio<=nbc-1) {
    coul =  Math.floor(Math.random()*4);
    val =  Math.floor(Math.random()*13);
    cp = [coul,val]
    deja = expadeja(cp,cpavi);
    if ((deja===false) ){
     cpav.push(cp)
     cpavi.push(cp)
    	pio++}
    }
    return cpav
}

function expadeja(cp,cpavi){
	deja=false
	for (i=0;i<=cpavi.length-1;i++){
		if ((cp[0]===cpavi[i][0])&&(cp[1]===cpavi[i][1])) {
			deja=true
			break
		};
	}
	return deja	
}

function drawdos(can){
		temps++
		TEMP++
		C=""
		//-------------
		setTimeout(function(){
		var image = document.getElementById("dos");
	   cecan = document.getElementById(can);
	   	   	document.getElementById(can).id=(can+"a")
		ctx = cecan.getContext('2d');
	     ctx.drawImage(image, 0, 0,cecan.width,cecan.height);
	 },temps*100)
}

function retourn(can,cart){
	//-------------
	temps=temps+1
	TEMP=TEMP+1
	var caret=[]
	setTimeout(function(){
		caret=ident(cart)
	    var image = document.getElementById(caret[0]);
	   var nummm = caret[1];
	  	      if(document.getElementById(can+"a")==null){}else{
					  	      	document.getElementById(can+"a").id=(can+"b")

					  cecan = document.getElementById(can+"b");
					    ctx = cecan.getContext('2d');

					    setTimeout(function(){ 
							 ctx=document.getElementById(can+"b").getContext('2d')
						          ctx.clearRect(0, 0,cecan.width,cecan.height);
							 ctx.drawImage(image,cecan.width*.1, cecan.height*.35,cecan.width*.8,cecan.height*.6) 
							 ctx.font = "35px Comic Sans MS";
							 ctx.fillStyle = "black"
							  if(nummm!=10){ctx.fillText(nummm,cecan.width*.36,cecan.height*.35)}
							  if(nummm==10){ctx.fillText(nummm,cecan.width*.28,cecan.height*.35)}
						},250)
				 }
	},temps*130)

}

function ret(f,cej,joueu){
	for(i=0;i<=joueu[cej].length-1;i++){
			can=f+(cej+1)+"c"+i
				retourn(can,joueu[cej][i])}
}

function retlcar(){

for(w=1;w<=joueur.length-1;w++){
	temps=w
	
ret("J",w,joueur)
}

}

function cacheboutton(){
	document.getElementById("buttonc").disabled = true
	document.getElementById("buttond").disabled = true
	document.getElementById("buttone").disabled = true
	document.getElementById("buttonf").disabled = true
	document.getElementById("buttong").disabled = true
	document.getElementById("buttonh").disabled = true}

function montreboutton(){
	document.getElementById("buttonc").disabled = false
	document.getElementById("buttond").disabled = false
	document.getElementById("buttone").disabled = false
	document.getElementById("buttonf").disabled = false
	document.getElementById("buttong").disabled = false
	document.getElementById("buttonh").disabled = false}


function dradeal(){

	cd=document.getElementById("CD")
	cd.getContext('2d').drawImage(document.getElementById("deal"), 0, 0,cd.width,cd.height)
	document.getElementById("CD").style.zIndex=1
	switch (deal){
	case 0:{ 
	cd.style.top ="66.3%"
	cd.style.left ="12.9%"
	}
	break;
	case 1:{ 
	cd.style.top ="31.6%"
	cd.style.left ="12.9%"
	}
	break;
	case 2:{ 
	cd.style.top ="7.9%"
	cd.style.left ="12.9%"
	}
	break;
	case 3:{ 
	cd.style.top ="7.9%"
	cd.style.left ="23.9%"
	}
	break;
	case 4:{ 
	cd.style.top ="7.9%"
	cd.style.left ="50.9%"
	}
	break;
	case 5:{ 
	cd.style.top ="7.9%"
	cd.style.left ="84.3%"
	}
	break;
	case 6:{ 
	cd.style.top ="31.6%"
	cd.style.left ="84.3%"
	}
	break;
	case 7:{ 
	cd.style.top ="66.3%"
	cd.style.left ="84.3%"
	}
	break;
	case 8:{ 
	cd.style.top ="66.3%"
	cd.style.left ="50.9%"
	}
	break;
	case 9:{ 
	cd.style.top ="66.3%"
	cd.style.left ="24.3%"
	}
	break;
}

}
