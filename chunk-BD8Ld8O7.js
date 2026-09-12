import{$ as PI,A as II,F as JL,Ft as Zw,Gn as mi,Mr as ts,Mt as Yv,Pt as Zo,Rt as aP,U as ME,W as Mf,Wn as mh,Wt as b,Y as Oe,Zn as nh,_r as rh,bt as Tu,dn as g,en as du,h as Dw,jn as k,m as Dr,mr as qw,nr as oh,qt as ch,r as $i,ur as pn,ut as Qp,v as FE,yr as rw,z as KL,zn as lh,zt as ae}from"./chunk-0nXeh1Xp.js";import{E as Y$1,H as ie,a as Fi,at as xs,n as $s,t as $n}from"./chunk-CV2jbdjW.js";import{b as v,l as W$1}from"./chunk-CIZAzgMW.js";import{n as Jt}from"./chunk-DFDUAXCf.js";import{t as c}from"./chunk-DOpMadfV.js";var K=`
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
`;var Y=[`input`];var tt=`
    ${K}

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
`;var nt={root:({instance:e})=>[`p-radiobutton p-component`,{"p-radiobutton-checked":e.checked,"p-disabled":e.$disabled(),"p-invalid":e.invalid(),"p-variant-filled":e.$variant()===`filled`,"p-radiobutton-sm p-inputfield-sm":e.size()===`small`,"p-radiobutton-lg p-inputfield-lg":e.size()===`large`}],box:`p-radiobutton-box`,input:`p-radiobutton-input`,icon:`p-radiobutton-icon`};var f=(()=>{class e extends Y$1{name=`radiobutton`;style=tt;classes=nt;static ɵfac=(()=>{let n;return function(t){return(n||(n=Mf(e)))(t||e)}})();static ɵprov=k({token:e,factory:e.ɵfac})}return e})();var Dt=(()=>{class e extends c{componentName=`RadioButton`;element=g(Oe);_componentStyle=g(f);bindDirectiveInstance=g($s,{self:!0});styleClass=Tu();ptRadioButton=Tu();pRadioButtonPT=Tu();pRadioButtonUnstyled=Tu();value=Tu();binary=Tu(!1,{transform:qw});ariaLabel=Tu();ariaLabelledBy=Tu();tabindex=Tu(void 0,{transform:Zw});inputId=Tu();autofocus=Tu(!1,{transform:qw});variant=Tu();size=Tu();$variant=Dw(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onClick=KL();onFocus=KL();onBlur=KL();touch=KL();onInputChange(n){if(n.target.checked&&!this.$disabled()){let t=this.binary()?!0:this.value();this.writeModelValue(t),this.onModelChange(t),this.onClick.emit({originalEvent:n,value:t})}}onInputFocus(n){this.onFocus.emit(n)}onInputBlur(n){this.onModelTouched(),this.touch.emit(),this.onBlur.emit(n)}get checked(){return this.binary()?!!this.modelValue():ie(this.modelValue(),this.value())}get dataP(){return this.cn({invalid:this.invalid(),checked:this.checked,disabled:this.$disabled(),filled:this.$variant()===`filled`,[this.size()]:this.size()})}constructor(){super(),mi(()=>{let n=this.ptRadioButton()||this.pRadioButtonPT();n&&this.directivePT.set(n)}),mi(()=>{this.pRadioButtonUnstyled()&&this.directiveUnstyled.set(!0)})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}focus(n){this.element.nativeElement.focus(n)}writeControlValue(n,o){o(n)}static ɵfac=function(o){return new(o||e)};static ɵdir=pn({type:e,selectors:[[`input`,`type`,`radio`,`pRadioButton`,``]],hostVars:18,hostBindings:function(o,t){o&1&&lh(`change`,function(d){return t.onInputChange(d)})(`focus`,function(d){return t.onInputFocus(d)})(`blur`,function(d){return t.onInputBlur(d)}),o&2&&(ch(`autofocus`,t.autofocus())(`disabled`,t.$disabled())(`required`,t.required())(`value`,t.value()??``)(`checked`,t.checked),nh(`data-pc-name`,`radiobutton`)(`data-pc-section`,`input`)(`data-p`,t.dataP)(`data-p-invalid`,t.invalid()||null)(`aria-label`,t.ariaLabel()||null)(`aria-labelledby`,t.ariaLabelledBy()||null)(`aria-required`,t.required()||null)(`tabindex`,t.tabindex()??null)(`id`,t.inputId()||null)(`name`,t.name()||null)(`aria-checked`,t.checked),PI(t.cn(t.cx(`root`),t.styleClass())))},inputs:{styleClass:[1,`styleClass`],ptRadioButton:[1,`ptRadioButton`],pRadioButtonPT:[1,`pRadioButtonPT`],pRadioButtonUnstyled:[1,`pRadioButtonUnstyled`],value:[1,`value`],binary:[1,`binary`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],tabindex:[1,`tabindex`],inputId:[1,`inputId`],autofocus:[1,`autofocus`],variant:[1,`variant`],size:[1,`size`]},outputs:{onClick:`onClick`,onFocus:`onFocus`,onBlur:`onBlur`,touch:`touch`},features:[rw([f,{provide:W$1,useExisting:Zo(()=>e),multi:!0}]),FE([$s]),Qp]})}return e})();var W=new b(`RADIOBUTTON_INSTANCE`);var et={provide:W$1,useExisting:Zo(()=>X),multi:!0};var ot=(()=>{class e{accessors=[];add(n,o){this.accessors.push([n,o])}remove(n){this.accessors=this.accessors.filter(o=>o[1]!==n)}select(n){this.accessors.forEach(o=>{this.isSameGroup(o,n)&&o[1]!==n&&o[1].writeValue(n.value())})}isSameGroup(n,o){return n[0].control?n[0].control.root===o.control.control.root&&n[1].name()===o.name():!1}static ɵfac=function(o){return new(o||e)};static ɵprov=k({token:e,factory:e.ɵfac,providedIn:`root`})}return e})();var X=(()=>{class e extends c{componentName=`RadioButton`;$pcRadioButton=g(W,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g($s,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}constructor(){super(),aP()&&console.warn('`<p-radioButton>` is deprecated and will be removed in a future major version. Use a native `<input type="radio" pRadioButton>` instead.')}value=Tu();tabindex=Tu(void 0,{transform:Zw});inputId=Tu();ariaLabelledBy=Tu();ariaLabel=Tu();styleClass=Tu();autofocus=Tu(void 0,{transform:qw});binary=Tu(void 0,{transform:qw});variant=Tu();size=Tu();onClick=KL();onFocus=KL();onBlur=KL();inputViewChild=JL.required(`input`);$variant=Dw(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());checked;focused;control;_componentStyle=g(f);injector=g(ae);registry=g(ot);onInit(){this.control=this.injector.get(v),this.registry.add(this.control,this)}onChange(n){this.$disabled()||this.select(n)}select(n){this.$disabled()||(this.checked=!0,this.writeModelValue(this.checked),this.onModelChange(this.value()),this.registry.select(this),this.onClick.emit({originalEvent:n,value:this.value()}))}onInputFocus(n){this.focused=!0,this.onFocus.emit(n)}onInputBlur(n){this.focused=!1,this.onModelTouched(),this.onBlur.emit(n)}focus(){this.inputViewChild().nativeElement.focus()}writeControlValue(n,o){this.checked=this.binary()?!!n:n==this.value(),o(this.checked),this.cd.markForCheck()}onDestroy(){this.registry.remove(this)}get dataP(){return this.cn({invalid:this.invalid(),checked:this.checked,disabled:this.$disabled(),filled:this.$variant()===`filled`,[this.size()]:this.size()})}static ɵfac=function(o){return new(o||e)};static ɵcmp=ME({type:e,selectors:[[`p-radioButton`],[`p-radiobutton`],[`p-radio-button`]],viewQuery:function(o,t){o&1&&mh(t.inputViewChild,Y,5),o&2&&II()},hostVars:5,hostBindings:function(o,t){o&2&&(nh(`data-p-disabled`,t.$disabled())(`data-p-checked`,t.checked)(`data-p`,t.dataP),PI(t.cx(`root`)))},inputs:{value:[1,`value`],tabindex:[1,`tabindex`],inputId:[1,`inputId`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaLabel:[1,`ariaLabel`],styleClass:[1,`styleClass`],autofocus:[1,`autofocus`],binary:[1,`binary`],variant:[1,`variant`],size:[1,`size`]},outputs:{onClick:`onClick`,onFocus:`onFocus`,onBlur:`onBlur`},features:[rw([et,f,{provide:W,useExisting:e},{provide:Fi,useExisting:e}]),FE([$s]),Qp],decls:4,vars:20,consts:[[`input`,``],[`type`,`radio`,3,`focus`,`blur`,`change`,`checked`,`pAutoFocus`,`pBind`],[3,`pBind`]],template:function(o,t){o&1&&($i(0,`input`,1,0),lh(`focus`,function(d){return t.onInputFocus(d)})(`blur`,function(d){return t.onInputBlur(d)})(`change`,function(d){return t.onChange(d)}),du(),$i(2,`div`,2),oh(3,`div`,2),du()),o&2&&(PI(t.cx(`input`)),rh(`checked`,t.checked)(`pAutoFocus`,t.autofocus())(`pBind`,t.ptm(`input`)),nh(`id`,t.inputId())(`name`,t.name())(`required`,t.required()?``:void 0)(`disabled`,t.$disabled()?``:void 0)(`value`,t.modelValue())(`aria-labelledby`,t.ariaLabelledBy())(`aria-label`,t.ariaLabel())(`aria-checked`,t.checked)(`tabindex`,t.tabindex()),Yv(2),PI(t.cx(`box`)),rh(`pBind`,t.ptm(`box`)),Yv(),PI(t.cx(`icon`)),rh(`pBind`,t.ptm(`icon`)))},dependencies:[Jt,$n,xs,$s],encapsulation:2})}return e})();var Mt=(()=>{class e{static ɵfac=function(o){return new(o||e)};static ɵmod=ts({type:e});static ɵinj=Dr({imports:[X,$n,$n]})}return e})();export{Mt as n,Dt as t};