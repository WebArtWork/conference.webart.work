import{n as s,t as r}from"./chunk-Btz99zWn.js";import{Ar as rg,Br as te,E as Ft,Et as Ss,F as I,Fn as g,Ft as WC,Ht as Y1,It as Wp,Jn as il,K as JI,Lr as sr,Nt as V_,On as ee,Or as rV,Q as L,Sr as q1,Un as iE,V as In,Vt as Y,_r as pe$1,ai as ws,bi as zp,c as Ae$1,en as Zn,et as Le,in as _n,it as Mn,k as G_,m as Cn,o as AC,on as _t,qt as Ys,wn as ds,xi as zu,yt as Qp}from"./chunk-D-AgZhTw.js";import{E as Y$1,H as ie,a as Fi,at as xs,n as $s,t as $n}from"./chunk-CFVWef1w.js";import{E as W,T as A}from"./main-RRQ6PDMQ.js";import{n as Jt}from"./chunk-D7bbrxYg.js";import{t as c}from"./chunk-OXriLRR3.js";import{r as h,t as _}from"./chunk-KyVP9vMP.js";var re=`
    .p-radiobutton {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('radiobutton.width');
        height: dt('radiobutton.height');
    }

    .p-radiobutton-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: 50%;
    }

    .p-radiobutton-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 1px solid dt('radiobutton.border.color');
        background: dt('radiobutton.background');
        width: dt('radiobutton.width');
        height: dt('radiobutton.height');
        transition:
            background dt('radiobutton.transition.duration'),
            color dt('radiobutton.transition.duration'),
            border-color dt('radiobutton.transition.duration'),
            box-shadow dt('radiobutton.transition.duration'),
            outline-color dt('radiobutton.transition.duration');
        outline-color: transparent;
        box-shadow: dt('radiobutton.shadow');
    }

    .p-radiobutton-icon {
        transition-duration: dt('radiobutton.transition.duration');
        background: transparent;
        font-size: dt('radiobutton.icon.size');
        width: dt('radiobutton.icon.size');
        height: dt('radiobutton.icon.size');
        border-radius: 50%;
        backface-visibility: hidden;
        transform: translateZ(0) scale(0.1);
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
        border-color: dt('radiobutton.hover.border.color');
    }

    .p-radiobutton-checked .p-radiobutton-box {
        border-color: dt('radiobutton.checked.border.color');
        background: dt('radiobutton.checked.background');
    }

    .p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.checked.color');
        transform: translateZ(0) scale(1, 1);
        visibility: visible;
    }

    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
        border-color: dt('radiobutton.checked.hover.border.color');
        background: dt('radiobutton.checked.hover.background');
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.checked.hover.color');
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
        border-color: dt('radiobutton.focus.border.color');
        box-shadow: dt('radiobutton.focus.ring.shadow');
        outline: dt('radiobutton.focus.ring.width') dt('radiobutton.focus.ring.style') dt('radiobutton.focus.ring.color');
        outline-offset: dt('radiobutton.focus.ring.offset');
    }

    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
        border-color: dt('radiobutton.checked.focus.border.color');
    }

    .p-radiobutton.p-invalid > .p-radiobutton-box {
        border-color: dt('radiobutton.invalid.border.color');
    }

    .p-radiobutton.p-variant-filled .p-radiobutton-box {
        background: dt('radiobutton.filled.background');
    }

    .p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
        background: dt('radiobutton.checked.background');
    }

    .p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {
        background: dt('radiobutton.checked.hover.background');
    }

    .p-radiobutton.p-disabled {
        opacity: 1;
    }

    .p-radiobutton.p-disabled .p-radiobutton-box {
        background: dt('radiobutton.disabled.background');
        border-color: dt('radiobutton.checked.disabled.border.color');
    }

    .p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.disabled.color');
    }

    .p-radiobutton-sm,
    .p-radiobutton-sm .p-radiobutton-box {
        width: dt('radiobutton.sm.width');
        height: dt('radiobutton.sm.height');
    }

    .p-radiobutton-sm .p-radiobutton-icon {
        font-size: dt('radiobutton.icon.sm.size');
        width: dt('radiobutton.icon.sm.size');
        height: dt('radiobutton.icon.sm.size');
    }

    .p-radiobutton-lg,
    .p-radiobutton-lg .p-radiobutton-box {
        width: dt('radiobutton.lg.width');
        height: dt('radiobutton.lg.height');
    }

    .p-radiobutton-lg .p-radiobutton-icon {
        font-size: dt('radiobutton.icon.lg.size');
        width: dt('radiobutton.icon.lg.size');
        height: dt('radiobutton.icon.lg.size');
    }
`;var le=[`input`];var pe=`
    ${re}

    /* Native radio directive: preserve browser grouping and accessibility while using the active theme color. */
    input.p-radiobutton.p-component {
        accent-color: dt('radiobutton.checked.background');
        cursor: pointer;
    }

    input.p-radiobutton.p-component.p-disabled {
        cursor: default;
    }

    /* For ngx-prime */
    p-radioButton.ng-invalid.ng-dirty .p-radiobutton-box,
    p-radio-button.ng-invalid.ng-dirty .p-radiobutton-box,
    p-radiobutton.ng-invalid.ng-dirty .p-radiobutton-box {
        border-color: dt('radiobutton.invalid.border.color');
    }
`;var be={root:({instance:i})=>[`p-radiobutton p-component`,{"p-radiobutton-checked":i.checked,"p-disabled":i.$disabled(),"p-invalid":i.invalid(),"p-variant-filled":i.$variant()===`filled`,"p-radiobutton-sm p-inputfield-sm":i.size()===`small`,"p-radiobutton-lg p-inputfield-lg":i.size()===`large`}],box:`p-radiobutton-box`,input:`p-radiobutton-input`,icon:`p-radiobutton-icon`};var B=(()=>{class i extends Y$1{name=`radiobutton`;style=pe;classes=be;static ɵfac=(()=>{let e;return function(n){return(e||(e=sr(i)))(n||i)}})();static ɵprov=L({token:i,factory:i.ɵfac})}return i})();var Ae=(()=>{class i extends c{componentName=`RadioButton`;element=g(pe$1);_componentStyle=g(B);bindDirectiveInstance=g($s,{self:!0});styleClass=il();ptRadioButton=il();pRadioButtonPT=il();pRadioButtonUnstyled=il();value=il();binary=il(!1,{transform:Ss});ariaLabel=il();ariaLabelledBy=il();tabindex=il(void 0,{transform:JI});inputId=il();autofocus=il(!1,{transform:Ss});variant=il();size=il();$variant=In(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onClick=q1();onFocus=q1();onBlur=q1();touch=q1();onInputChange(e){if(e.target.checked&&!this.$disabled()){let n=this.binary()?!0:this.value();this.writeModelValue(n),this.onModelChange(n),this.onClick.emit({originalEvent:e,value:n})}}onInputFocus(e){this.onFocus.emit(e)}onInputBlur(e){this.onModelTouched(),this.touch.emit(),this.onBlur.emit(e)}get checked(){return this.binary()?!!this.modelValue():ie(this.modelValue(),this.value())}get dataP(){return this.cn({invalid:this.invalid(),checked:this.checked,disabled:this.$disabled(),filled:this.$variant()===`filled`,[this.size()]:this.size()})}constructor(){super(),Zn(()=>{let e=this.ptRadioButton()||this.pRadioButtonPT();e&&this.directivePT.set(e)}),Zn(()=>{this.pRadioButtonUnstyled()&&this.directiveUnstyled.set(!0)})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}focus(e){this.element.nativeElement.focus(e)}writeControlValue(e,t){t(e)}static ɵfac=function(t){return new(t||i)};static ɵdir=Y({type:i,selectors:[[`input`,`type`,`radio`,`pRadioButton`,``]],hostVars:18,hostBindings:function(t,n){t&1&&Cn(`change`,function(u){return n.onInputChange(u)})(`focus`,function(u){return n.onInputFocus(u)})(`blur`,function(u){return n.onInputBlur(u)}),t&2&&(Qp(`autofocus`,n.autofocus())(`disabled`,n.$disabled())(`required`,n.required())(`value`,n.value()??``)(`checked`,n.checked),ws(`data-pc-name`,`radiobutton`)(`data-pc-section`,`input`)(`data-p`,n.dataP)(`data-p-invalid`,n.invalid()||null)(`aria-label`,n.ariaLabel()||null)(`aria-labelledby`,n.ariaLabelledBy()||null)(`aria-required`,n.required()||null)(`tabindex`,n.tabindex()??null)(`id`,n.inputId()||null)(`name`,n.name()||null)(`aria-checked`,n.checked),WC(n.cn(n.cx(`root`),n.styleClass())))},inputs:{styleClass:[1,`styleClass`],ptRadioButton:[1,`ptRadioButton`],pRadioButtonPT:[1,`pRadioButtonPT`],pRadioButtonUnstyled:[1,`pRadioButtonUnstyled`],value:[1,`value`],binary:[1,`binary`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],tabindex:[1,`tabindex`],inputId:[1,`inputId`],autofocus:[1,`autofocus`],variant:[1,`variant`],size:[1,`size`]},outputs:{onClick:`onClick`,onFocus:`onFocus`,onBlur:`onBlur`,touch:`touch`},features:[Ft([B,{provide:Ys,useExisting:Le(()=>i),multi:!0}]),G_([$s]),Ae$1]})}return i})();var de=new I(`RADIOBUTTON_INSTANCE`);var he={provide:Ys,useExisting:Le(()=>ae),multi:!0};var fe=(()=>{class i{accessors=[];add(e,t){this.accessors.push([e,t])}remove(e){this.accessors=this.accessors.filter(t=>t[1]!==e)}select(e){this.accessors.forEach(t=>{this.isSameGroup(t,e)&&t[1]!==e&&t[1].writeValue(e.value())})}isSameGroup(e,t){return e[0].control?e[0].control.root===t.control.control.root&&e[1].name()===t.name():!1}static ɵfac=function(t){return new(t||i)};static ɵprov=L({token:i,factory:i.ɵfac,providedIn:`root`})}return i})();var ae=(()=>{class i extends c{componentName=`RadioButton`;$pcRadioButton=g(de,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g($s,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}constructor(){super(),rV()&&console.warn('`<p-radioButton>` is deprecated and will be removed in a future major version. Use a native `<input type="radio" pRadioButton>` instead.')}value=il();tabindex=il(void 0,{transform:JI});inputId=il();ariaLabelledBy=il();ariaLabel=il();styleClass=il();autofocus=il(void 0,{transform:Ss});binary=il(void 0,{transform:Ss});variant=il();size=il();onClick=q1();onFocus=q1();onBlur=q1();inputViewChild=Y1.required(`input`);$variant=In(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());checked;focused;control;_componentStyle=g(B);injector=g(ee);registry=g(fe);onInit(){this.control=this.injector.get(Mn),this.registry.add(this.control,this)}onChange(e){this.$disabled()||this.select(e)}select(e){this.$disabled()||(this.checked=!0,this.writeModelValue(this.checked),this.onModelChange(this.value()),this.registry.select(this),this.onClick.emit({originalEvent:e,value:this.value()}))}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onModelTouched(),this.onBlur.emit(e)}focus(){this.inputViewChild().nativeElement.focus()}writeControlValue(e,t){this.checked=this.binary()?!!e:e==this.value(),t(this.checked),this.cd.markForCheck()}onDestroy(){this.registry.remove(this)}get dataP(){return this.cn({invalid:this.invalid(),checked:this.checked,disabled:this.$disabled(),filled:this.$variant()===`filled`,[this.size()]:this.size()})}static ɵfac=function(t){return new(t||i)};static ɵcmp=V_({type:i,selectors:[[`p-radioButton`],[`p-radiobutton`],[`p-radio-button`]],viewQuery:function(t,n){t&1&&rg(n.inputViewChild,le,5),t&2&&AC()},hostVars:5,hostBindings:function(t,n){t&2&&(ws(`data-p-disabled`,n.$disabled())(`data-p-checked`,n.checked)(`data-p`,n.dataP),WC(n.cx(`root`)))},inputs:{value:[1,`value`],tabindex:[1,`tabindex`],inputId:[1,`inputId`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaLabel:[1,`ariaLabel`],styleClass:[1,`styleClass`],autofocus:[1,`autofocus`],binary:[1,`binary`],variant:[1,`variant`],size:[1,`size`]},outputs:{onClick:`onClick`,onFocus:`onFocus`,onBlur:`onBlur`},features:[Ft([he,B,{provide:de,useExisting:i},{provide:Fi,useExisting:i}]),G_([$s]),Ae$1],decls:4,vars:20,consts:[[`input`,``],[`type`,`radio`,3,`focus`,`blur`,`change`,`checked`,`pAutoFocus`,`pBind`],[3,`pBind`]],template:function(t,n){t&1&&(ds(0,`input`,1,0),Cn(`focus`,function(u){return n.onInputFocus(u)})(`blur`,function(u){return n.onInputBlur(u)})(`change`,function(u){return n.onChange(u)}),zu(),ds(2,`div`,2),Wp(3,`div`,2),zu()),t&2&&(WC(n.cx(`input`)),zp(`checked`,n.checked)(`pAutoFocus`,n.autofocus())(`pBind`,n.ptm(`input`)),ws(`id`,n.inputId())(`name`,n.name())(`required`,n.required()?``:void 0)(`disabled`,n.$disabled()?``:void 0)(`value`,n.modelValue())(`aria-labelledby`,n.ariaLabelledBy())(`aria-label`,n.ariaLabel())(`aria-checked`,n.checked)(`tabindex`,n.tabindex()),iE(2),WC(n.cx(`box`)),zp(`pBind`,n.ptm(`box`)),iE(),WC(n.cx(`icon`)),zp(`pBind`,n.ptm(`icon`)))},dependencies:[Jt,$n,xs,$s],encapsulation:2})}return i})();var xe=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=_n({type:i});static ɵinj=_t({imports:[ae,$n,$n]})}return i})();var ue=`conference-device-id`;var se=`conference-visitor-name`;var m=(()=>{class i{constructor(){this.deviceId=this._resolveDeviceId(),this.visitorName=te(this._readVisitorName())}setVisitorName(e){let t=e.trim();this.visitorName.set(t),typeof localStorage<`u`&&localStorage.setItem(se,t)}_resolveDeviceId(){if(typeof localStorage>`u`)return this._createId();let e=localStorage.getItem(ue);if(e)return e;let t=this._createId();return localStorage.setItem(ue,t),t}_readVisitorName(){return typeof localStorage>`u`?``:localStorage.getItem(se)??``}_createId(){return typeof crypto<`u`&&typeof crypto.randomUUID==`function`?crypto.randomUUID():`${Date.now()}-${Math.random().toString(16).slice(2)}`}static{this.ɵfac=function(t){return new(t||i)}}static{this.ɵprov=L({token:i,factory:i.ɵfac,providedIn:`root`})}}return i})();var He=(()=>{class i extends W{constructor(){super({name:`companyconferencepoll`})}beforeCreate(e,t){return super.beforeCreate(s(r({},e),{domain:h}),t)}loadEvent(e){this.get({query:_(`eventId=${encodeURIComponent(e)}`)}).subscribe()}byEvent(e){return this.documents().filter(t=>t.eventId===e)}byId(e){return this.documents().find(t=>t._id===e)}static{this.ɵfac=function(t){return new(t||i)}}static{this.ɵprov=L({token:i,factory:i.ɵfac,providedIn:`root`})}}return i})();var ce=(()=>{class i extends W{constructor(){super({name:`companyconferenceanswer`}),this._deviceIdService=g(m)}beforeCreate(e,t){return super.beforeCreate(s(r({},e),{domain:h}),t)}loadAll(){this.get({query:_()}).subscribe()}all(){return this.documents().filter(e=>e.kind===`poll`)}answer(e,t){this.hasAnswered(e)||this.create({_id:``,kind:`poll`,pollId:e._id,optionIndex:t,deviceId:this._deviceIdService.deviceId})}hasAnswered(e){let t=this._deviceIdService.deviceId;return this.documents().some(n=>n.kind===`poll`&&n.pollId===e._id&&n.deviceId===t)}results(e){return e.options.map((t,n)=>({optionIndex:n,votes:this.documents().filter(a=>a.kind===`poll`&&a.pollId===e._id&&a.optionIndex===n).length}))}static{this.ɵfac=function(t){return new(t||i)}}static{this.ɵprov=L({token:i,factory:i.ɵfac,providedIn:`root`})}}return i})();var et=(()=>{class i extends W{constructor(){super({name:`companyconferencequestion`}),this._deviceIdService=g(m),this._http=g(A)}beforeCreate(e,t){return super.beforeCreate(s(r({},e),{domain:h}),t)}loadEvent(e){this.get({query:_(`eventId=${encodeURIComponent(e)}`)}).subscribe()}byEvent(e){return this.documents().filter(t=>t.eventId===e).sort((t,n)=>n.likes-t.likes)}ask(e,t,n){this.create({_id:``,eventId:e,text:t,authorName:n,likes:0,likedBy:[],createdAt:new Date().toISOString()})}like(e){let t=this._deviceIdService.deviceId;e.likedBy.includes(t)||(this.addDoc(s(r({},e),{likes:e.likes+1,likedBy:[...e.likedBy,t]})),this._http.post(`/api/companyconferencequestion/like`,{_id:e._id,deviceId:t,domain:h}).subscribe())}removeQuestion(e){this.delete(e).subscribe()}static{this.ɵfac=function(t){return new(t||i)}}static{this.ɵprov=L({token:i,factory:i.ɵfac,providedIn:`root`})}}return i})();var st=(()=>{class i extends W{constructor(){super({name:`companyconferencequiz`})}beforeCreate(e,t){return super.beforeCreate(s(r({},e),{domain:h}),t)}loadEvent(e){this.get({query:_(`eventId=${encodeURIComponent(e)}`)}).subscribe()}byEvent(e){return this.documents().filter(t=>t.eventId===e)}byId(e){return this.documents().find(t=>t._id===e)}static{this.ɵfac=function(t){return new(t||i)}}static{this.ɵprov=L({token:i,factory:i.ɵfac,providedIn:`root`})}}return i})();var ct=(()=>{class i{constructor(){this._answers=g(ce),this._deviceIdService=g(m)}all(){return this._answers.documents().filter(e=>e.kind===`quiz`)}loadAll(){this._answers.loadAll()}answer(e,t){this.hasAnswered(e)||this._answers.create({_id:``,kind:`quiz`,quizId:e._id,optionIndex:t,deviceId:this._deviceIdService.deviceId})}hasAnswered(e){let t=this._deviceIdService.deviceId;return this.all().some(n=>n.quizId===e._id&&n.deviceId===t)}results(e){return e.options.map((t,n)=>({optionIndex:n,votes:this.all().filter(a=>a.quizId===e._id&&a.optionIndex===n).length,isCorrect:n===e.correctOptionIndex}))}static{this.ɵfac=function(t){return new(t||i)}}static{this.ɵprov=L({token:i,factory:i.ɵfac,providedIn:`root`})}}return i})();export{et as a,xe as c,ct as i,He as n,m as o,ce as r,st as s,Ae as t};