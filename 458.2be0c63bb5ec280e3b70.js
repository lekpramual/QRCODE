(self.webpackChunkadmin_lte_theme=self.webpackChunkadmin_lte_theme||[]).push([[458],{3458:(t,e,r)=>{"use strict";r.r(e),r.d(e,{AuthModule:()=>p});var i=r(1116),o=r(1203),s=r(3530),n=r(1462),a=r(306),u=r(2501),l=r.n(u),m=r(5614),c=r(4848);function g(t,e){1&t&&m._UZ(0,"i",20)}const d=[{path:"",component:(()=>{class t{constructor(t,e,r,i){this.formBuilder=t,this.route=e,this.router=r,this.authenticationService=i,this.authenticationService.currentUserValue&&this.router.navigate(["/"])}ngOnInit(){this.resetForm(),this.version=a.i8,this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"}get getControl(){return this.loginForm.controls}resetForm(){this.loading=!1,this.submitted=!1,this.loginForm=this.formBuilder.group({username:["",[n.kI.required]],password:["",[n.kI.required]]})}SimulateNetworkRequest(){return new Promise(t=>setTimeout(t,2e3))}onSubmit(){this.submitted=!0,this.loginForm.valid&&(this.loading=!0,this.authenticationService.login(this.getControl.username.value,this.getControl.password.value).pipe((0,s.P)()).subscribe(t=>{t.message?this.SimulateNetworkRequest().then(()=>{this.router.navigate([this.returnUrl])}).catch(t=>{this.router.navigate(["/"])}):this.SimulateNetworkRequest().then(()=>{this.resetForm(),l().fire({icon:"error",title:"\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14!",text:"\u0e0a\u0e37\u0e48\u0e2d\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19 \u0e2b\u0e23\u0e37\u0e2d \u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07",showConfirmButton:!1})}).catch(t=>{this.resetForm(),l().fire({icon:"error",title:"\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14!",text:"\u0e0a\u0e37\u0e48\u0e2d\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19 \u0e2b\u0e23\u0e37\u0e2d \u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07",showConfirmButton:!1})})},t=>{let e="";e=`Error Code: ${t.status}\n Message: ${t.message}`,this.SimulateNetworkRequest().then(()=>{this.resetForm(),l().fire({icon:"error",title:"\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14!",text:e,showConfirmButton:!1})}).catch(t=>{this.resetForm(),l().fire({icon:"error",title:"\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14!",text:e,showConfirmButton:!1})})}))}}return t.\u0275fac=function(e){return new(e||t)(m.Y36(n.qu),m.Y36(o.gz),m.Y36(o.F0),m.Y36(c.$))},t.\u0275cmp=m.Xpm({type:t,selectors:[["app-auth"]],decls:31,vars:6,consts:[[1,"card","card-outline","card-primary"],[1,"card-header","text-center"],["src","../../../assets/adminlte/dist/img/logo128.png",1,"mb-3"],["routerLink","/auth",1,"h1"],[1,"text-warning"],[1,"card-body"],[1,"login-box-msg"],[3,"formGroup","ngSubmit"],[1,"input-group","mb-3"],["type","email","placeholder","\u0e0a\u0e37\u0e48\u0e2d\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19","formControlName","username",3,"ngClass"],[1,"input-group-append"],[1,"input-group-text"],[1,"fas","fas","fa-user"],["type","password","placeholder","\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19","formControlName","password",3,"ngClass"],[1,"fas","fa-lock"],[1,"row"],[1,"col-12"],["type","submit",1,"btn","btn-primary","btn-block",3,"disabled"],["class","fas fa-sync-alt fa-spin",4,"ngIf"],[1,"login-box-msg","mt-3"],[1,"fas","fa-sync-alt","fa-spin"]],template:function(t,e){1&t&&(m.TgZ(0,"div",0),m.TgZ(1,"div",1),m._UZ(2,"img",2),m.TgZ(3,"p"),m.TgZ(4,"a",3),m.TgZ(5,"label",4),m._uU(6,"REH "),m.qZA(),m._uU(7,"Office "),m.qZA(),m.qZA(),m.qZA(),m.TgZ(8,"div",5),m.TgZ(9,"p",6),m._uU(10,"One User All Programs Login"),m.qZA(),m.TgZ(11,"form",7),m.NdJ("ngSubmit",function(){return e.onSubmit()}),m.TgZ(12,"div",8),m._UZ(13,"input",9),m.TgZ(14,"div",10),m.TgZ(15,"div",11),m._UZ(16,"span",12),m.qZA(),m.qZA(),m.qZA(),m.TgZ(17,"div",8),m._UZ(18,"input",13),m.TgZ(19,"div",10),m.TgZ(20,"div",11),m._UZ(21,"span",14),m.qZA(),m.qZA(),m.qZA(),m.TgZ(22,"div",15),m.TgZ(23,"div",16),m.TgZ(24,"button",17),m.YNc(25,g,1,0,"i",18),m._uU(26," \u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a "),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(27,"p",19),m.TgZ(28,"b"),m._uU(29,"Version"),m.qZA(),m._uU(30),m.qZA(),m.qZA(),m.qZA()),2&t&&(m.xp6(11),m.Q6J("formGroup",e.loginForm),m.xp6(2),m.Q6J("ngClass",(e.getControl.username.touched||e.submitted)&&e.getControl.username.invalid?"form-control is-invalid":"form-control"),m.xp6(5),m.Q6J("ngClass",(e.getControl.password.touched||e.submitted)&&e.getControl.password.invalid?"form-control is-invalid":"form-control"),m.xp6(6),m.Q6J("disabled",e.loading),m.xp6(1),m.Q6J("ngIf",e.loading),m.xp6(5),m.hij(" ",e.version,""))},directives:[o.yS,n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,i.mk,i.O5],styles:[""]}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[[o.Bz.forChild(d)],o.Bz]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[[i.ez,h,n.u5,n.UX]]}),t})()}}]);