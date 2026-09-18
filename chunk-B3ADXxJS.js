import{Br as te,E as Ft,Et as Ss,F as I,Fn as g,Ft as WC,Jn as il,Lr as sr,Q as L,V as In,Vt as Y,ai as ws,c as Ae,en as Zn,in as _n,it as Mn,k as G_,m as Cn,on as _t}from"./chunk-D-AgZhTw.js";import{E as Y$1,a as Fi,h as Ns,n as $s,ot as y}from"./chunk-CFVWef1w.js";import{t as Dt}from"./chunk-CDXNQ_we.js";var S=(()=>{class t extends Ns{modelValue=te(void 0);$filled=In(()=>y(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static ɵfac=(()=>{let e;return function(o){return(e||(e=sr(t)))(o||t)}})();static ɵdir=Y({type:t,features:[Ae]})}return t})();var V=`
    
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }


    /* For ngx-prime */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`;var B={root:({instance:t})=>[`p-inputtext p-component`,{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize()===`small`,"p-inputtext-lg":t.pSize()===`large`,"p-invalid":t.invalid(),"p-variant-filled":t.$variant()===`filled`,"p-inputtext-fluid":t.hasFluid}]};var C=(()=>{class t extends Y$1{name=`inputtext`;style=V;classes=B;static ɵfac=(()=>{let e;return function(o){return(e||(e=sr(t)))(o||t)}})();static ɵprov=L({token:t,factory:t.ɵfac})}return t})();var E=new I(`INPUTTEXT_INSTANCE`);var et=(()=>{class t extends S{componentName=`InputText`;hostName=il(``);ptInputText=il();pInputTextPT=il();pInputTextUnstyled=il();bindDirectiveInstance=g($s,{self:!0});$pcInputText=g(E,{optional:!0,skipSelf:!0})??void 0;ngControl=g(Mn,{optional:!0,self:!0});pcFluid=g(Dt,{optional:!0,host:!0,skipSelf:!0});pSize=il();variant=il();fluid=il(void 0,{transform:Ss});invalid=il(void 0,{transform:Ss});$variant=In(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=g(C);constructor(){super(),Zn(()=>{let e=this.ptInputText()||this.pInputTextPT();e&&this.directivePT.set(e)}),Zn(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()===`filled`,[this.pSize()]:this.pSize()})}static ɵfac=function(i){return new(i||t)};static ɵdir=Y({type:t,selectors:[[``,`pInputText`,``]],hostVars:4,hostBindings:function(i,o){i&1&&Cn(`input`,function(){return o.onInput()}),i&2&&(ws(`data-p`,o.dataP)(`aria-invalid`,o.invalid()||null),WC(o.cx(`root`)))},inputs:{hostName:[1,`hostName`],ptInputText:[1,`ptInputText`],pInputTextPT:[1,`pInputTextPT`],pInputTextUnstyled:[1,`pInputTextUnstyled`],pSize:[1,`pSize`],variant:[1,`variant`],fluid:[1,`fluid`],invalid:[1,`invalid`]},features:[Ft([C,{provide:E,useExisting:t},{provide:Fi,useExisting:t}]),G_([$s]),Ae]})}return t})();var nt=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=_n({type:t});static ɵinj=_t({})}return t})();export{et as n,nt as r,S as t};