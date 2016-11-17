var pa= 0
var pq= 0
var combi= ""
var pc =  0
var htr = 0
var htr2 = 0
var result={}
var HT= 0
var coul=[]
var val=[]
var pp= 0

var RESJ=[]
var ca=[]
var htrm1=false
var htrm2=false
var result={}
var KI=0
var KI2=0
var KIm2=false
var lhtr=[]
var lhtr2=[]
var lki=[]
var lki2=[]
var Mki
var Mki2
var htrc=0
var htr2c=0
var RESLT
var SCOR=[]
var GGA=[]
var gagnants

function gop(){

		RESJ=[] 
		ca=[]
		pa= 0
		 pq= 0
		combi= ""
		pc =  0
		htr = 0
		htr2 = 0
		htrm1=false
		result={}
		HT= 0
		pp= 0
		coul=[]
		val=[]
		htrc=0
		htr2c=0
	/*
	joueur=[]
	flop=[]
	flop[0]=new Array
	flop[1]=new Array
	flop[2]=new Array
	turn=[]
	river=[]
	turn[0]=new Array
	river[0]=new Array
	joueur[0]=new Array
	joueur[1]=new Array
	joueur[2]=new Array
	joueur[3]=new Array


	*/

	for (x=0;x<=joueur.length-1;x++){
		if(mises[x][1]==true||mises[x][2]==true||mises[x][3]==true){}else{
		ca=[]
		pa= 0
		 pq= 0
		combi= ""
		pc =  0
		htr = 0
		htr2 = 0
		htrc=0
		htr2c=0
		result={}
		HT= 0
		pp= 0
		coul=[]
		val=[]
	///TESTTTTTTTTTTTTTTTTTTTTTTTT
		ca=joueur[x]
		
			if (flop.length>=1){
					ca[2]=(flop[0][0])
					ca[3]=(flop[0][1])
					ca[4]=(flop[0][2])
			}
			if (turn.length>=1){
					ca[5]=(turn[0][0])
			}
			if (river.length>=1){
					ca[6]=(river[0][0])
			}
			ca.ide={}
			ca.ide=x
		
		RESJ.push(gopp(ca))
	}
	}


 // NBde rslt par combi -------------------------------------------
 	var combis=[]
 	var MC=0
 	for (jou=0;jou<=9;jou++){
 		combis.push(0)
 		}
 	for (iou=0;iou<=RESJ.length-1;iou++){
 		combis[RESJ[iou].combi.niveau]++
 	}
	//Meilleur combi 	
 	for (jou=combis.length-1;jou>=0	;jou--){
 			if (combis[jou]>=1){
 					MC=jou
 				break}
 	}
	//___________________________________________________________________________
		gagnant=NaN
 		gagnants=[]
 		
 		for (jou=0;jou<=RESJ.length-1;jou++){
	 		RESJ[jou].combi.niveau==MC
			if(RESJ[jou].combi.niveau==MC){
				gagnants.push(RESJ[jou])
			}
 		}

 		//console.clear();
 		console.log("Cartes tirées:");
 		console.log(cpavi)
 		console.log("Resultats de chaque joueur:");
		console.log(RESJ)
		//console.log(gagnants)
			//GAGNANTS MEME COMBI ON LES DEPARTAGE________________________
	///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
			GGA=[]
		switch (MC){
					case 0:{ 

							GG=[]
						GGA=COMPAR(gagnants,"kicker-1","kicker2-1")
								switch (GGA.aaff){
									case 0:{ 
											for (i=0;i<=GGA.gagnants.length-1;i++){
												GG.push(GGA.gagnants[i].ide)
											}
											RESLT=("Kicker Egalité "+GG) 
										}
									break;
									case 1:RESLT=("GAGNANT JOUEUR "+GGA.gagnants[0].ide + " avec le kicker "+id1v(GGA.gagnants[0].kicker))
									break;
									case 2:RESLT=("GAGNANT JOUEUR "+ GGA.gagnants[0].ide + " avec les kickers "+id1v(GGA.gagnants[0].kicker)+" et "+id1v(GGA.gagnants[0].kicker2))
									break;
								}	
					}
					break;
					case 1:{///CAS DES 1 PAIRE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
						if(gagnants.length==1){GGA.gagnants=gagnants
							RESLT=("GAGNANT JOUEUR "+ GGA.gagnants[0].ide + " PAIRE")}else{
						GG=[]
						GGA=COMPAR(gagnants,"combi.hauteur-1","kicker-1","kicker2-1")
							switch (GGA.aaff){
									case 0:{ 
											for (i=0;i<=GGA.gagnants.length-1;i++){
												GG.push(GGA.gagnants[i].ide)
											}
											RESLT=("PAIRE Egalité "+GG) 
										}
									break;
									case 1:RESLT=("GAGNANT JOUEUR "+ GGA.gagnants[0].ide + " PAIRE de " +id1v(GGA.gagnants[0].combi.hauteur))
									break;
									case 2:RESLT=("GAGNANT JOUEUR "+ GGA.gagnants[0].ide + " PAIRE de " +id1v(GGA.gagnants[0].combi.hauteur)+ " avec le kicker "+id1v(GGA.gagnants[0].kicker))
									break;
									case 3:RESLT=("GAGNANT JOUEUR "+ GGA.gagnants[0].ide + " PAIRE de " +id1v(GGA.gagnants[0].combi.hauteur)+" avec les kickers "+id1v(GGA.gagnants[0].kicker)+" et "+id1v(GGA.gagnants[0].kicker2))
									break;
								}
						}	
					}
					break;
					case 2:{///CAS DES DOUBLE PAIRE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
						if(gagnants.length==1){GGA.gagnants=gagnants
							RESLT=("GAGNANT JOUEUR "+ GGA.gagnants[0].ide + " DOUBLE PAIRE")}else{
						GG=[]
						GGA=COMPAR(gagnants,"combi.hauteur-1","combi.hauteur2-1","kicker-1")
							switch (GGA.aaff){
									case 0:{ 
											for (i=0;i<=GGA.gagnants.length-1;i++){
												GG.push(GGA.gagnants[i].ide)
											}
									RESLT=("DOUBLE PAIRE Egalité "+GG) 
										}
									break
									case 1:RESLT=("GAGNANT JOUEUR "+ GGA.gagnants[0].ide + " DOUBLE PAIRE de " + id1v(GGA.gagnants[0].combi.hauteur) + " et de "+ id1v(GGA.gagnants[0].combi.hauteur2))
									break;
									case 2:RESLT=("GAGNANT JOUEUR "+ GGA.gagnants[0].ide + " DOUBLE PAIRE de " + id1v(GGA.gagnants[0].combi.hauteur) + " et de "+ id1v(GGA.gagnants[0].combi.hauteur2))
									break;
									case 3:RESLT=("GAGNANT JOUEUR "+ GGA.gagnants[0].ide + " DOUBLE PAIRE de " + id1v(GGA.gagnants[0].combi.hauteur) + " et de "+ id1v(GGA.gagnants[0].combi.hauteur2) + " Kicker "+ id1v(GGA.gagnants[0].kicker))
									break;
								}
						}
						
					}
					break;
					case 3:{///CAS UN BRELAN~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
						if(gagnants.length==1){GGA.gagnants=gagnants
							RESLT=("GAGNANT JOUEUR "+ GGA.gagnants[0].ide + " BRELAN")}else{
						GG=[]
						GGA=COMPAR(gagnants,"combi.hauteur-1","kicker-1","kicker2-1")
								switch (GGA.aaff){
									case 0:{ 
											for (i=0;i<=GGA.gagnants.length-1;i++){
												GG.push(GGA.gagnants[i].ide)
											}
									RESLT=("BRELAN EGALITé entre "+GG)
										}
									break;
									case 1:RESLT=("GAGNANT JOUEUR "+ GGA.gagnants[0].ide + " BRELAN de " + id1v(GGA.gagnants[0].combi.hauteur))
									break;
									case 2:RESLT=("GAGNANT JOUEUR "+ GGA.gagnants[0].ide + " BRELAN de " + id1v(GGA.gagnants[0].combi.hauteur) + " Kicker "+ id1v(GGA.gagnants[0].kicker))
									break;
									case 3:RESLT=("GAGNANT JOUEUR "+ GGA.gagnants[0].ide + " BRELAN de " + id1v(GGA.gagnants[0].combi.hauteur) + " Kicker "+ id1v(GGA.gagnants[0].kicker) + " Kicker2 "+ id1v(GGA.gagnants[0].kicker2))
									break;
								}
						}

					}
					break;
					case 4:{///CAS DES  QUINTES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
						if(gagnants.length==1){GGA.gagnants=gagnants
							RESLT=("GAGNANT JOUEUR "+ GGA.gagnants[0].ide + " QUINTE")}else{
							GG=[]
						GGA=COMPAR(gagnants,"combi.hauteur-1")
								switch (GGA.aaff){
									case 0:{ 
											for (i=0;i<=GGA.gagnants.length-1;i++){
												GG.push(GGA.gagnants[i].ide)
											}
											RESLT=("QUINTE EGALITé entre "+GG) 
										}
									break
									case 1:RESLT=("GAGNANT JOUEUR "+ GGA.gagnants[0].ide + " QUINTE Hauteur " + id1v(GGA.gagnants[0].combi.hauteur))
									break;
								}
						}
					}	
					break;
					case 5:{///CAS DES  Couleurs~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
						if(gagnants.length==1){GGA.gagnants=gagnants
							RESLT=("GAGNANT JOUEUR "+ GGA.gagnants[0].ide + " COULEUR à "+id1c(GGA.gagnants[0].combi.coul.lacou))}else{
						GG=[]
						GGA=COMPAR(gagnants,"combi.coul.htrc-1","combi.coul.htr2c-1")
								switch (GGA.aaff){
									case 0:{ 
											for (i=0;i<=GGA.gagnants.length-1;i++){
												GG.push(GGA.gagnants[i].ide)
											}
									RESLT=("COULEUR EGALITé entre "+GG) 
										}
									break;
									case 1:RESLT=("GAGNANT JOUEUR "+ GGA.gagnants[0].ide + " COULEUR à " +id1c(GGA.gagnants[0].combi.coul.lacou)+" Hauteur " +id1v(GGA.gagnants[0].combi.coul.htrc))
									break;
									case 2:RESLT=("GAGNANT JOUEUR "+ GGA.gagnants[0].ide + " COULEUR à " +id1c(GGA.gagnants[0].combi.coul.lacou)+" Hauteur " +id1v(GGA.gagnants[0].combi.coul.htrc)+" et "+ id1v(GGA.gagnants[0].combi.coul.htr2c))
								break;
								}
						}
					}			
					break;	
					case 6:{///CAS UNE FOULS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
						if(gagnants.length==1){GGA.gagnants=gagnants
							RESLT=("GAGNANT JOUEUR "+ GGA.gagnants[0].ide + " FOUL")}else{
					GG=[]
						GGA=COMPAR(gagnants,"combi.hauteur-1","combi.hauteur2-1")
								switch (GGA.aaff){
									case 0:{ 
											for (i=0;i<=GGA.gagnants.length-1;i++){
												GG.push(GGA.gagnants[i].ide)
											}
									RESLT=("FOUL EGALITé entre "+GG) 
										}
									break
									case 1:RESLT=("GAGNANT JOUEUR "+ GGA.gagnants[0].ide + " FOUL des " + id1v(GGA.gagnants[0].combi.hauteur) + " par les "+ id1v(GGA.gagnants[0].combi.hauteur2))
									break;
									case 2:RESLT=("GAGNANT JOUEUR "+ GGA.gagnants[0].ide + " FOUL des " + id1v(GGA.gagnants[0].combi.hauteur) + " par les "+ id1v(GGA.gagnants[0].combi.hauteur2))
									break;
								}
						}	
					}
					break;
					case 7:{///CAS UNE CARRES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
						if(gagnants.length==1){GGA.gagnants=gagnants
							RESLT=("GAGNANT JOUEUR "+ GGA.gagnants[0].ide + " CARRE")}else{
						GG=[]
							GGA=COMPAR(gagnants,"combi.hauteur-1")

									switch (GGA.aaff){
										case 0:{ 
												for (i=0;i<=GGA.gagnants.length-1;i++){
													GG.push(GGA.gagnants[i].ide)
												}
											}
										break;
										case 1:RESLT=("GAGNANT JOUEUR "+ GGA.gagnants[0].ide + " CARRE de " + id1v(GGA.gagnants[0].combi.hauteur))
										break;
									}
						}
					}		
					break;
					case 8:{///CAS UNE QUINTE FLUSH~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
					if(gagnants.length==1){GGA.gagnants=gagnants
						RESLT=("GAGNANT JOUEUR "+ GGA.gagnants[0].ide + " QUINTE FLUSH")}else{
					GG=[]
					
						GGA=COMPAR(gagnants,"combi.hauteur-1")
								switch (GGA.aaff){
									case 0:{ 
											for (i=0;i<=GGA.gagnants.length-1;i++){
												GG.push(GGA.gagnants[i].ide)
											}
											if(GGA.gagnants[0].combi.hauteur-1==0){
											RESLT=("QUINTE FLUSH Royale EGALITé entre "+GG)

											}else{
											RESLT=("QUINTE FLUSH EGALITé entre "+GG)} 
											}
									break;
									case 1:{
											
												if(GGA.gagnants[0].combi.hauteur-1==0){
													RESLT=("GAGNANT JOUEUR "+ GGA.gagnants[0].ide + " QUINTE FLUSH de " + id1c(GGA.gagnants[0].combi.coul.lacou) + " HAUTEUR " + GGA.gagnants[0].combi.hauteur)
												}else{RESLT=("GAGNANT JOUEUR "+ GGA.gagnants[0].ide + " QUINTE FLUSH Royale de ") + id1c(GGA.gagnants[0].combi.coul.lacou)
												}
											}
									break;
								}
							}
						}
					break;
	    }
	///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	console.log("RESULTAT:")
	console.log(RESLT)
	//console.log(GGA.aaff)
	//console.log(mises)
	//console.log(SCOR)
	for (je=0;je<=SCOR.length-1;je++){
		can=("J"+(je+1)+"j")
		jeton(SCOR[je],can)
	}
		
}

function gopp(ca){
		val=[]
		coul=[]
		result={}
		//COULEURS

	for (i=0;i<=ca.length-1;i++){
			coul.push(ca[i][0])
	 	}
	//VALEURS
	for (i=0;i<=ca.length-1;i++){
	 		val.push(ca[i][1])
	 		 	}

	nbv=nbpv(val,13)
	cbdpp(nbv,val)
	q(nbv,val)
	nbc=nbpv(coul,4)
	coule(nbc,coul,val)
    kick(nbv,val,htr,htr2,pa)
    
	if (pq==4){pa=4}
	if (pc==5){pa=5}
    if (pc==8){pa=8}
	if (KI>=0){KI=KI+1}
	result.ide=ca.ide
	result.kicker=KI

	if (KI2>=0){KI2=KI2+1}
	result.kicker2=KI2

	result.couleur=coul

	result.valeur=val
	result.nombreparval=nbv
	result.nombreparcoul=nbc
	result.combi={}
	result.combi.niveau=pa
	htr=htr+1
	result.combi.hauteur=htr
	htr2=htr2+1
	result.combi.hauteur2=htr2
	result.combi.coul={}
	htrc=htrc+1
	htr2c=htr2c+1
	result.combi.coul.htrc=htrc
	result.combi.coul.htr2c=htr2c
	result.combi.coul.lacou=lacou

	return result
}

function redef(J,Mpara){
	gagnants=[]

	//REDEFINI TABLEAU GAGNANT
	for (im=0;im<=Mpara.length-1;im++){
	for (i=0;i<=J.length-1;i++){

		if(J[i].ide==Mpara[im]){
			gagnants.push(J[i])}
		}
	}
	
	return gagnants
}
function COMPAR(gagnants,par1,par2,par3){
	
	GNTS=[]
	GGA={}
	GGA.gagnants={}
					M1=NaN
					M2=NaN
					M3=NaN
					aaff=NaN
				if (par1){
					aaff=1
					M1=comp1para(gagnants,par1)
					gagnants=redef(gagnants,M1.ide)
					
					if(M1.ide.length>=2){
						if (par2){
							aaff=2
								M2=comp1para(gagnants,par2)
								gagnants=redef(gagnants,M2.ide)
								
							if(M2.ide.length>=2){
								if (par3){
									aaff=3
									M3=comp1para(gagnants,par3)
									gagnants=redef(gagnants,M3.ide)
									
								if(M3.ide.length>=2){aaff=0}
							
							}else{aaff=0}
					 	}
					}else{aaff=0}
				}
			}
					GGA.aaff=aaff
					GGA.gagnants=gagnants
			return GGA
}

function comp1para(J,para){
	TAB=[]
	TABB=[]
	M={}
	
		for (i=0;i<=J.length-1;i++){
		TABB.push(eval("J["+i+"]."+para))
		}			
		TAB=nbpv(TABB,13)
z=1
M.ide=[]
		for (i=1;i<=13;i++){
			if(i==13){z=0}
			if(TAB[i*z]>=1){
				M.val=i*z
			}
		}
			for (i=0;i<=J.length-1;i++){
				if(eval("J["+i+"]."+para)==M.val){
					M.ide.push(eval("J["+i+"].ide"))
				}
			}	
return M 
}



function nbpv(valo,poss){
	jt=[]
 	for (j=0;j<=poss-1;j++){
 		jt.push(0)
 	}

 	for (i=0;i<=valo.length-1;i++){
 	jt[valo[i]]++
 	 	}
 	return jt
}

function cbdpp(nbv,val){
	htr=NaN
	htr2=NaN
	htrm1=false
	htrm2=false
	z=1

	for (j=1;j<=13;j++){
		if (j==13){z=0}
	//toutes sauf As==============================================================
		valo=j*z
		nbvj=nbv[valo]
		switch (nbvj){
			case 0:
			break;	
			case 1: if(pa<=0){//combi="kicker " + valo
		}
			break;		
			case 2: {
					if(pa==6){
					if (j>htr2){
					htr2=valo
					}
					}
					if(pa==3){
						//combi="full des " +(pp+1)+ " par les " + valo
						pa=6
						htr2=valo
					}

					if((pa == 1||pa == 2)) {
						//combi="double paire de "+valo +" et de " + (pp+1)
						pa=2
						if (j>htr){
							htr2=htr
							htr=valo
						}
						if (j<htr&&j>htr2){
							htr2=valo
						}
					}
					if(pa<=0){
						//combi="paire de "+valo
						pa=1
						htr=valo
						if(pp==0){pp=valo}
						}
				}
			break;
			case 3:{
				//combi="brelent de "+j*z
				if(pa==6){
					if (j>htr){
						htr=valo
					}
				}
				if(pa==3){
					if (j>htr){
					htr2=htr
					htr=valo
						pa=6
					}else{
					htr2=valo
					pa=6
					}
				}
				if(pa==1||pa==2){
					htr2=htr
					htr=valo
						pa=6	
							//combi="full des "+ valo +" par les " + (pp+1)
						}
				if(pa==0){
					htr=valo
					pa=3
							//combi="brelent de "+valo
				}	
			}
			break;
			case 4://combi="carré de "+valo 
						pa=7
						htr=valo
			break;
		}
	//=============================================================================
	}
}
function q(nbv,val){
	pq=0
	qu=1
	z=1
		for (j=0;j<=13;j++){
			if (j==13){z=0}
				valo=j*z
				if(nbv[j-1]>=1&&nbv[valo]>=1){
				qu++
				if (qu>=5){
					htr=valo
					//combi="quinte hauteur" + htr
					pq=4
				}
				}else{qu=1}
		}
	return pq	
}


function coule(nbc,coul,val){
	lacou=99
	 for (ju=0;ju<=3;ju++){

		if (nbc[ju]>=5){
			lacou=ju
    		 //combi="couleur"+lacou
    		 pc=5
		}
	}
	if (pc==5){
		htr=0
		vlc=[]
		vlcc=[]
		for (ji=0;ji<=coul.length-1;ji++){
			if (coul[ji]==lacou){
				vlc.push(val[ji])
				}}
		nvlc=nbpv(vlc,13)
		za=1
		for (ji=1;ji<=13;ji++){
			if (ji==13){za=0}
			if (nvlc[ji*za]>=1){		
				htr2=htr
				htr=ji
			}
		}
		pq=q(nvlc,vlc)
		if(pq==4){pc=8}
			htr2c=htrc=NaN
		for (ji=0;ji<=1;ji++){
			if (coul[ji]==lacou){
				vlcc.push(val[ji])
			}
		}
		nvlcc=nbpv(vlcc,13)
		za=1
		for (ji=1;ji<=13;ji++){

			if (ji==13){za=0}
			if (nvlcc[ji*za]>=1){		
				htr2c=htrc
				htrc=ji*za

			}
		}
	}
}

function kick(nbv,val,htr,htr2,pa){
	z=1
	for (j=1;j<=13;j++){
		if (j==13){z=0}
			nbvj=nbv[j*z]
			if (pa>=1){
			if (nbvj>=1&&htr!=(j*z)&&htr2!=(j*z)){
				KI2=KI
				KI=j*z
			}
		}else{
				if (nbvj>=1){
				KI2=KI
				KI=j*z
			}
		}
	}
}


function edm(valoo,val){
	htrm=false
	if (val[0]==valoo||val[1]==valoo){

		htrm=true
	}
		return htrm
}
