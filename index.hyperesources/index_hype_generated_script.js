//	HYPE.documents["index"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="index.hyperesources",f="index",g="index_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/index_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_720F||null!=window.HYPE_dtl_720F)||true==!0||null!=c&&10>c;a=!0==d?"HYPE-720.full.min.js":"HYPE-720.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_720"+c,"HYPE_dtl_720"+c,a,d),false==!0&&(a=a||k("HYPE_w_720","HYPE_wdtl_720","HYPE-720.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_720","HYPE-720.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_720"+c](f,g,{"3":{p:2,n:"C%20Ganze.mp3",g:"93",t:"audio/mpeg"},"-2":{n:"blank.gif"},"4":{p:2,n:"F%20halbe.mp3",g:"96",t:"audio/mpeg"},"0":{p:2,n:"C%27%27%204tel.mp3",g:"89",t:"audio/mpeg"},"5":{p:1,n:"multitouchkev-1.jpg",g:"111",o:true,t:"@1x"},"1":{p:2,n:"A%20halbe.mp3",g:"90",t:"audio/mpeg"},"-1":{n:"PIE.htc"},"2":{p:2,n:"A%208tel.mp3",g:"91",t:"audio/mpeg"}},l,[],e,[{n:"Einf\u00fchrung",o:"1",X:[0]}],
[{o:"3",p:"600px",a:100,Y:1920,Z:1080,b:100,cA:false,c:"#FFF",L:[],bY:1,d:1920,U:{},T:{kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30,b:[]}},bZ:180,O:["116","117"],n:"Unbenanntes Layout","_":0,v:{"116":{h:"111",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:2,k:"div",b:0,d:1080,c:1920},"117":{c:233,d:100,I:"Solid",J:"Solid",K:"Solid",L:"Solid",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",aA:{a:[{p:5,j:"https://johaensaen.github.io/Rhythmus/",k:false}]},O:0,C:"#D8DDE4",z:4,dB:"button",D:"#D8DDE4",P:0,k:"div",a:1578,b:862}}}],{},h,{},
(function (shouldShow, mainContentContainer) {
	var loadingPageID = mainContentContainer.id + "_loading";
	var loadingDiv = document.getElementById(loadingPageID);

	if(shouldShow == true) {
		if(loadingDiv == null) {	
			loadingDiv = document.createElement("div");
			loadingDiv.id = loadingPageID;
			loadingDiv.style.cssText = "overflow:hidden;position:absolute;width:150px;top:40%;left:0;right:0;margin:auto;padding:2px;border:3px solid #BBB;background-color:#EEE;border-radius:10px;text-align:center;font-family:Helvetica,Sans-Serif;font-size:13px;font-weight:700;color:#AAA;z-index:100000;";
			loadingDiv.innerHTML = "Laden";
			mainContentContainer.appendChild(loadingDiv);
		}
 
		loadingDiv.style.display = "block";
		loadingDiv.removeAttribute("aria-hidden");
		mainContentContainer.setAttribute("aria-busy", true);
	} else {
		loadingDiv.style.display = "none";
		loadingDiv.setAttribute("aria-hidden", true);
		mainContentContainer.removeAttribute("aria-busy");
	}
})

,false,true,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
