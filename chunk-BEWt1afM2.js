import{n as s,t as r}from"./chunk-Btz99zWn.js";import{$ as PI,A as II,An as jD,Bt as ah,Dn as id,Dr as sw,Et as XE,F as JL,Ft as Zw,Gn as mi$1,Hr as we,Jr as yd,Kr as yC,Ln as lC,Mr as ts,Mt as Yv,N as JE,Nn as kh,Nr as uI,On as ih,Pt as Zo,Qt as dh,Rt as aP,St as VD,Tn as hw,U as ME,Ur as wh,Ut as aw,Vn as lw,W as Mf,Wn as mh,Wt as b,Xn as ng,Yn as nI,Zn as nh,_ as EI,_r as rh,a as Ag,b as Fh,bt as Tu,cr as ph,dn as g,dr as pu,en as du,ft as Rh,h as Dw,hr as rI,jn as k,kn as iw,kr as tP,kt as Xp,ln as fu,m as Dr,mr as qw,nn as eP,nr as oh,o as Ah,on as fC,or as ow,p as DI,pn as gh,pr as qI,qn as mu,qt as ch,r as $i,rt as Pj,st as QI,tn as eI,tr as od,un as fw,ut as Qp,v as FE,vn as hC,y as FI,yn as hI,yr as rw,z as KL,zn as lh}from"./chunk-0nXeh1Xp.js";import{E as Y,H as ie,L as fn$1,a as Fi,at as xs,m as Mn$1,n as $s,rt as wn$1,t as $n$1,y as Re}from"./chunk-CV2jbdjW.js";import{t as F}from"./chunk-Zn_3EF92.js";import"./chunk-BtD8lkii.js";import{_ as pn$1,b as v,d as cn$1,h as jt$1,i as Oe$1,l as W,n as Bt}from"./chunk-CIZAzgMW.js";import"./chunk-DqTFtLyZ.js";import{c as Q,s as Pt,u as re}from"./chunk-BhmAWjDC.js";import"./chunk-DnoaJOMH.js";import{I as f,L as S,m as Ue}from"./main-23UBBIFN.js";import{c as fo,l as ho,u as le}from"./chunk-DFDUAXCf.js";import"./chunk-CZbw8RoN.js";import"./chunk-BVJwlDP8.js";import"./chunk-XycfmX70.js";import{n as et,r as nt}from"./chunk-D5z6xt5l.js";import{t as c}from"./chunk-DOpMadfV.js";import{n as Mt,t as Dt}from"./chunk-BD8Ld8O7.js";import{r as w,t as E}from"./chunk-ChZI13tN.js";import{t as y}from"./chunk-BFFneooC.js";import{n as y$1,t as C}from"./chunk-9TdSKn4f.js";import{t as C$1}from"./chunk-CUeQEywr.js";import{n as Ve,t as Me}from"./chunk-ykFSInSl.js";import"./chunk-BsGZhBb4.js";import"./chunk-Dos8d34g.js";import{n as O,t as L}from"./chunk-DSWgGfwq.js";import{n as Cs,r as Ho,t as Ci$1}from"./chunk-DUbFOxDC2.js";import{t as F$1}from"./chunk-VQuVZlt42.js";var Vt=(()=>{class i extends S{static ɵfac=(()=>{let e;return function(t){return(e||(e=Mf(i)))(t||i)}})();static ɵcmp=ME({type:i,selectors:[[``,`data-p-icon`,`minus`]],features:[Qp],decls:1,vars:0,consts:[[`d`,`M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z`,`fill`,`currentColor`]],template:function(n,t){n&1&&(yd(),ih(0,`path`,0))},encapsulation:2})}return i})();var zt=`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`;var en=[`icon`];var tn=[`input`];var nn=(i,s,e)=>({checked:i,class:s,dataP:e});function on(i,s){if(i&1&&oh(0,`span`,7),i&2){let e=hI(3);PI(e.cx(`icon`)),rh(`ngClass`,e.checkboxIcon())(`pBind`,e.ptm(`icon`)),nh(`data-p`,e.dataP)}}function an(i,s){if(i&1&&(yd(),oh(0,`svg`,8)),i&2){let e=hI(3);PI(e.cx(`icon`)),rh(`pBind`,e.ptm(`icon`)),nh(`data-p`,e.dataP)}}function ln(i,s){if(i&1&&(XE(0,on,1,5,`span`,5),XE(1,an,1,4,`:svg:svg`,6)),i&2){let e=hI(2);JE(e.checkboxIcon()?0:-1),Yv(),JE(e.checkboxIcon()?-1:1)}}function rn(i,s){if(i&1&&(yd(),oh(0,`svg`,9)),i&2){let e=hI(2);PI(e.cx(`icon`)),rh(`pBind`,e.ptm(`icon`)),nh(`data-p`,e.dataP)}}function dn(i,s){if(i&1&&(XE(0,ln,2,2),XE(1,rn,1,4,`:svg:svg`,4)),i&2){let e=hI();JE(e.checked?0:-1),Yv(),JE(e._indeterminate()?1:-1)}}function sn(i,s){}function cn(i,s){i&1&&Xp(0,sn,0,0,`ng-template`)}var un=`
    ${zt}

    /* Native checkbox directive: retain browser interaction and accessibility while using the active theme color. */
    input.p-checkbox.p-component {
        accent-color: dt('checkbox.checked.background');
        cursor: pointer;
    }

    input.p-checkbox.p-component.p-disabled,
    input.p-checkbox.p-component[readonly] {
        cursor: default;
    }

    .p-checkbox > .p-checkbox-native-icon:empty::before {
        content: '\xE2\u0153\u201C';
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        line-height: 1;
    }

    .p-checkbox-checked > .p-checkbox-native-icon:empty::before {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox.p-disabled > .p-checkbox-native-icon:empty::before {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox > .p-checkbox-native-icon > * {
        color: dt('checkbox.icon.color');
    }

    .p-checkbox-checked > .p-checkbox-native-icon > * {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox.p-disabled > .p-checkbox-native-icon > * {
        color: dt('checkbox.icon.disabled.color');
    }

    /* For ngx-prime */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`;var pn={root:({instance:i})=>[`p-checkbox p-component`,{"p-checkbox-checked p-highlight":i.checked,"p-disabled":i.$disabled(),"p-invalid":i.invalid(),"p-variant-filled":i.$variant()===`filled`,"p-checkbox-sm p-inputfield-sm":i.size()===`small`,"p-checkbox-lg p-inputfield-lg":i.size()===`large`}],box:`p-checkbox-box`,input:`p-checkbox-input`,icon:`p-checkbox-icon`};var Lt=(()=>{class i extends Y{name=`checkbox`;style=un;classes=pn;static ɵfac=(()=>{let e;return function(t){return(e||(e=Mf(i)))(t||i)}})();static ɵprov=k({token:i,factory:i.ɵfac})}return i})();var Ot=new b(`CHECKBOX_INSTANCE`);var _n={provide:W,useExisting:Zo(()=>Se),multi:!0};var Se=(()=>{class i extends c{componentName=`Checkbox`;hostName=Tu(``);value=Tu();binary=Tu(void 0,{transform:qw});ariaLabelledBy=Tu();ariaLabel=Tu();tabindex=Tu(void 0,{transform:Zw});inputId=Tu();inputStyle=Tu();styleClass=Tu();inputClass=Tu();indeterminate=Tu(!1,{transform:qw});formControl=Tu();checkboxIcon=Tu();readonly=Tu(void 0,{transform:qw});autofocus=Tu(void 0,{transform:qw});trueValue=Tu(!0);falseValue=Tu(!1);variant=Tu();size=Tu();onChange=KL();onFocus=KL();onBlur=KL();inputViewChild=JL(`input`);get checked(){return this._indeterminate()?!1:this.binary()?this.modelValue()===this.trueValue():fn$1(this.value(),this.modelValue())}_indeterminate=we(void 0);checkboxIconTemplate=eP(`icon`,{descendants:!1});templates=tP(Mn$1);_checkboxIconTemplate;focused=!1;_componentStyle=g(Lt);bindDirectiveInstance=g($s,{self:!0});$pcCheckbox=g(Ot,{optional:!0,skipSelf:!0})??void 0;$variant=Dw(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());constructor(){super(),aP()&&console.warn('`<p-checkbox>` is deprecated and will be removed in a future major version. Use a native `<input type="checkbox" pCheckbox>` instead.'),mi$1(()=>{this._indeterminate.set(this.indeterminate())})}onAfterContentInit(){this.templates()?.forEach(e=>{switch(e.getType()){case`icon`:this._checkboxIconTemplate=e.template;break;case`checkboxicon`:this._checkboxIconTemplate=e.template;break}})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}updateModel(e){let n,t=this.injector.get(v,null,{optional:!0,self:!0}),o=this.formControl(),p=t&&!o?t.value:this.modelValue();this.binary()?(n=this._indeterminate()?this.trueValue():this.checked?this.falseValue():this.trueValue(),this.writeModelValue(n),this.onModelChange(n)):(this.checked||this._indeterminate()?n=p.filter(F=>!ie(F,this.value())):n=p?[...p,this.value()]:[this.value()],this.onModelChange(n),this.writeModelValue(n),o&&o.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:e})}handleChange(e){this.readonly()||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild()?.nativeElement.focus()}writeControlValue(e,n){n(e),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid(),checked:this.checked,disabled:this.$disabled(),filled:this.$variant()===`filled`,[this.size()]:this.size()})}static ɵfac=function(n){return new(n||i)};static ɵcmp=ME({type:i,selectors:[[`p-checkbox`],[`p-checkBox`],[`p-check-box`]],contentQueries:function(n,t,o){n&1&&gh(o,t.checkboxIconTemplate,en,4)(o,t.templates,Mn$1,4),n&2&&II(2)},viewQuery:function(n,t){n&1&&mh(t.inputViewChild,tn,5),n&2&&II()},hostVars:6,hostBindings:function(n,t){n&2&&(nh(`data-p-highlight`,t.checked)(`data-p-checked`,t.checked)(`data-p-disabled`,t.$disabled())(`data-p`,t.dataP),PI(t.cn(t.cx(`root`),t.styleClass())))},inputs:{hostName:[1,`hostName`],value:[1,`value`],binary:[1,`binary`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaLabel:[1,`ariaLabel`],tabindex:[1,`tabindex`],inputId:[1,`inputId`],inputStyle:[1,`inputStyle`],styleClass:[1,`styleClass`],inputClass:[1,`inputClass`],indeterminate:[1,`indeterminate`],formControl:[1,`formControl`],checkboxIcon:[1,`checkboxIcon`],readonly:[1,`readonly`],autofocus:[1,`autofocus`],trueValue:[1,`trueValue`],falseValue:[1,`falseValue`],variant:[1,`variant`],size:[1,`size`]},outputs:{onChange:`onChange`,onFocus:`onFocus`,onBlur:`onBlur`},features:[rw([_n,Lt,{provide:Ot,useExisting:i},{provide:Fi,useExisting:i}]),FE([$s]),Qp],decls:5,vars:27,consts:[[`input`,``],[`type`,`checkbox`,3,`focus`,`blur`,`change`,`checked`,`indeterminate`,`pBind`],[3,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`data-p-icon`,`minus`,3,`class`,`pBind`],[3,`class`,`ngClass`,`pBind`],[`data-p-icon`,`check`,3,`class`,`pBind`],[3,`ngClass`,`pBind`],[`data-p-icon`,`check`,3,`pBind`],[`data-p-icon`,`minus`,3,`pBind`]],template:function(n,t){n&1&&($i(0,`input`,1,0),lh(`focus`,function(p){return t.onInputFocus(p)})(`blur`,function(p){return t.onInputBlur(p)})(`change`,function(p){return t.handleChange(p)}),du(),$i(2,`div`,2),XE(3,dn,2,2),Xp(4,cn,1,0,null,3),du()),n&2&&(FI(t.inputStyle()),PI(t.cn(t.cx(`input`),t.inputClass())),rh(`checked`,t.checked)(`indeterminate`,!!t._indeterminate())(`pBind`,t.ptm(`input`)),nh(`id`,t.inputId())(`value`,t.value())(`name`,t.name())(`tabindex`,t.tabindex())(`required`,t.required()?``:void 0)(`readonly`,t.readonly()?``:void 0)(`disabled`,t.$disabled()?``:void 0)(`aria-labelledby`,t.ariaLabelledBy())(`aria-label`,t.ariaLabel()),Yv(2),PI(t.cx(`box`)),rh(`pBind`,t.ptm(`box`)),nh(`data-p`,t.dataP),Yv(),JE(!t.checkboxIconTemplate()&&!t._checkboxIconTemplate?3:-1),Yv(),rh(`ngTemplateOutlet`,t.checkboxIconTemplate()||t._checkboxIconTemplate)(`ngTemplateOutletContext`,aw(23,nn,t.checked,t.cx(`icon`),t.dataP)))},dependencies:[yC,lC,fC,$n$1,f,Vt,xs,$s],encapsulation:2})}return i})();var qt=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=ts({type:i});static ɵinj=Dr({imports:[Se,$n$1,$n$1]})}return i})();var $t=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`;var hn=[`icon`];var bn=[`content`];var Wt=i=>({$implicit:i});function fn(i,s){i&1&&ah(0)}function vn(i,s){if(i&1&&oh(0,`span`,0),i&2){let e=hI(3);PI(e.cn(e.cx(`icon`),e.checked?e.onIcon():e.offIcon(),e.iconPos()===`left`?e.cx(`iconLeft`):e.cx(`iconRight`))),rh(`pBind`,e.ptm(`icon`))}}function Cn(i,s){if(i&1&&XE(0,vn,1,3,`span`,2),i&2){let e=hI(2);JE(e.onIcon()||e.offIcon()?0:-1)}}function xn(i,s){i&1&&ah(0)}function yn(i,s){if(i&1&&Xp(0,xn,1,0,`ng-container`,1),i&2){let e=hI(2);rh(`ngTemplateOutlet`,e.iconTemplate()||e._iconTemplate)(`ngTemplateOutletContext`,iw(2,Wt,e.checked))}}function kn(i,s){if(i&1&&(XE(0,Cn,1,1)(1,yn,1,4,`ng-container`),$i(2,`span`,0),qI(3),du()),i&2){let e=hI();JE(e.iconTemplate()?1:0),Yv(2),PI(e.cx(`label`)),rh(`pBind`,e.ptm(`label`)),Yv(),Ah(e.checked?e.hasOnLabel?e.onLabel():e.nbsp:e.hasOffLabel?e.offLabel():e.nbsp)}}var Mn=`
    ${$t}

    /* For ngx-prime (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`;var wn=i=>typeof i.checked==`function`?i.checked():i.checked;var En={root:({instance:i})=>[`p-togglebutton p-component`,{"p-togglebutton-checked":wn(i),"p-invalid":i.invalid(),"p-disabled":i.$disabled(),"p-togglebutton-sm p-inputfield-sm":i.size()===`small`,"p-togglebutton-lg p-inputfield-lg":i.size()===`large`,"p-togglebutton-fluid":i.fluid()}],content:`p-togglebutton-content`,icon:`p-togglebutton-icon`,iconLeft:`p-togglebutton-icon-left`,iconRight:`p-togglebutton-icon-right`,label:`p-togglebutton-label`};var Oe=(()=>{class i extends Y{name=`togglebutton`;style=Mn;classes=En;static ɵfac=(()=>{let e;return function(t){return(e||(e=Mf(i)))(t||i)}})();static ɵprov=k({token:i,factory:i.ɵfac})}return i})();var Ht=new b(`TOGGLEBUTTON_INSTANCE`);var Dn={provide:W,useExisting:Zo(()=>Fe),multi:!0};var Fe=(()=>{class i extends c{componentName=`ToggleButton`;nbsp=`\xA0`;$pcToggleButton=g(Ht,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g($s,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}constructor(){super(),aP()&&console.warn("`<p-togglebutton>` is deprecated and will be removed in a future major version. Use a native `<button pToggleButton>` instead.")}onKeyDown(e){switch(e.code){case`Enter`:this.toggle(e),e.preventDefault();break;case`Space`:this.toggle(e),e.preventDefault();break}}toggle(e){!this.$disabled()&&!(this.allowEmpty()===!1&&this.checked)&&(this.checked=!this.checked,this.writeModelValue(this.checked),this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onLabel=Tu(`Yes`);offLabel=Tu(`No`);onIcon=Tu();offIcon=Tu();ariaLabel=Tu();ariaLabelledBy=Tu();styleClass=Tu();inputId=Tu();tabindex=Tu(0,{transform:Zw});iconPos=Tu(`left`);autofocus=Tu(void 0,{transform:qw});size=Tu();allowEmpty=Tu();fluid=Tu(void 0,{transform:qw});onChange=KL();iconTemplate=eP(`icon`,{descendants:!1});contentTemplate=eP(`content`,{descendants:!1});templates=tP(Mn$1);checked=!1;onInit(){(this.checked===null||this.checked===void 0)&&(this.checked=!1)}_componentStyle=g(Oe);onBlur(){this.onModelTouched()}get hasOnLabel(){return this.onLabel()&&this.onLabel().length>0}get hasOffLabel(){return this.offLabel()&&this.offLabel().length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`icon`:this._iconTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}writeControlValue(e,n){this.checked=e,n(e),this.cd.markForCheck()}get dataP(){return this.cn({checked:this.active,invalid:this.invalid(),[this.size()]:this.size()})}static ɵfac=function(n){return new(n||i)};static ɵcmp=ME({type:i,selectors:[[`p-toggleButton`],[`p-togglebutton`],[`p-toggle-button`]],contentQueries:function(n,t,o){n&1&&gh(o,t.iconTemplate,hn,4)(o,t.contentTemplate,bn,4)(o,t.templates,Mn$1,4),n&2&&II(3)},hostVars:13,hostBindings:function(n,t){n&1&&lh(`keydown`,function(p){return t.onKeyDown(p)})(`click`,function(p){return t.toggle(p)}),n&2&&(nh(`aria-labelledby`,t.ariaLabelledBy())(`aria-label`,t.ariaLabel())(`aria-pressed`,t.checked?`true`:`false`)(`aria-disabled`,t.$disabled()||null)(`aria-invalid`,t.invalid()||null)(`role`,`button`)(`tabindex`,t.tabindex()!==void 0?t.tabindex():t.$disabled()?-1:0)(`data-pc-name`,`togglebutton`)(`data-p-checked`,t.active)(`data-p-disabled`,t.$disabled())(`data-p`,t.dataP),PI(t.cn(t.cx(`root`),t.styleClass())))},inputs:{onLabel:[1,`onLabel`],offLabel:[1,`offLabel`],onIcon:[1,`onIcon`],offIcon:[1,`offIcon`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],styleClass:[1,`styleClass`],inputId:[1,`inputId`],tabindex:[1,`tabindex`],iconPos:[1,`iconPos`],autofocus:[1,`autofocus`],size:[1,`size`],allowEmpty:[1,`allowEmpty`],fluid:[1,`fluid`]},outputs:{onChange:`onChange`},features:[rw([Dn,Oe,{provide:Ht,useExisting:i},{provide:Fi,useExisting:i}]),FE([le,$s]),Qp],decls:3,vars:9,consts:[[3,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`class`,`pBind`]],template:function(n,t){n&1&&($i(0,`span`,0),Xp(1,fn,1,0,`ng-container`,1),XE(2,kn,4,5),du()),n&2&&(PI(t.cx(`content`)),rh(`pBind`,t.ptm(`content`)),nh(`data-p`,t.dataP),Yv(),rh(`ngTemplateOutlet`,t.contentTemplate()||t._contentTemplate)(`ngTemplateOutletContext`,iw(7,Wt,t.checked)),Yv(),JE(t.contentTemplate()?-1:2))},dependencies:[yC,fC,$n$1,xs,$s],encapsulation:2})}return i})();var Rt=`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`;var Tn=[`item`];var Bn=(i,s)=>({$implicit:i,index:s});function In(i,s){return this.getOptionLabel(s)}function Nn(i,s){i&1&&ah(0)}function Vn(i,s){if(i&1&&Xp(0,Nn,1,0,`ng-container`,3),i&2){let e=hI(2),n=e.$implicit,t=e.$index,o=hI();rh(`ngTemplateOutlet`,o.itemTemplate||o._itemTemplate)(`ngTemplateOutletContext`,sw(2,Bn,n,t))}}function zn(i,s){i&1&&Xp(0,Vn,1,5,`ng-template`,null,0,hw)}function Ln(i,s){if(i&1){let e=uI();$i(0,`p-togglebutton`,2),lh(`onChange`,function(t){let o=od(e),p=o.$implicit,F=o.$index;return id(hI().onOptionSelect(t,p,F))}),XE(1,zn,2,0),du(),jD()}if(i&2){let e=s.$implicit,n=hI();rh(`autofocus`,n.autofocus())(`styleClass`,n.styleClass())(`ngModel`,n.isSelected(e))(`onLabel`,n.getOptionLabel(e))(`offLabel`,n.getOptionLabel(e))(`disabled`,n.$disabled()||n.isOptionDisabled(e))(`allowEmpty`,n.getAllowEmpty())(`size`,n.size())(`fluid`,n.fluid())(`pt`,n.ptm(`pcToggleButton`))(`unstyled`,n.unstyled()),VD(),Yv(),JE(n.itemTemplate||n._itemTemplate?1:-1)}}var On=`
    ${Rt}

    /* For ngx-prime */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`;var Fn={root:({instance:i})=>[`p-selectbutton p-component`,{"p-invalid":i.invalid(),"p-disabled":i.$disabled(),"p-selectbutton-fluid":i.fluid()}]};var jt=(()=>{class i extends Y{name=`selectbutton`;style=On;classes=Fn;static ɵfac=(()=>{let e;return function(t){return(e||(e=Mf(i)))(t||i)}})();static ɵprov=k({token:i,factory:i.ɵfac})}return i})();var Ut=new b(`SELECTBUTTON_INSTANCE`);var Qn={provide:W,useExisting:Zo(()=>Te),multi:!0};var Te=(()=>{class i extends c{componentName=`SelectButton`;constructor(){super(),aP()&&console.warn("`<p-selectbutton>` is deprecated and will be removed in a future major version. Use the native `pSelectButton`/`pSelectButtonOption` directives instead.")}options=Tu();optionLabel=Tu();optionValue=Tu();optionDisabled=Tu();unselectable=Tu(!1,{transform:qw});tabindex=Tu(0,{transform:Zw});multiple=Tu(void 0,{transform:qw});allowEmpty=Tu(!0,{transform:qw});styleClass=Tu();ariaLabelledBy=Tu();ariaLabel=Tu();dataKey=Tu();autofocus=Tu(void 0,{transform:qw});size=Tu();fluid=Tu(void 0,{transform:qw});onOptionClick=KL();onChange=KL();itemTemplate;_itemTemplate;role=Dw(()=>this.multiple()?`group`:`radiogroup`);get equalityKey(){return this.optionValue()?null:this.dataKey()}value;focusedIndex=0;_componentStyle=g(jt);$pcSelectButton=g(Ut,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g($s,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}getAllowEmpty(){return this.unselectable()?!1:this.multiple()?this.allowEmpty()||this.value?.length!==1:this.allowEmpty()}getOptionLabel(e){let n=this.optionLabel();return n?Re(e,n):e.label!=null?e.label:e}getOptionValue(e){let n=this.optionValue();return n?Re(e,n):this.optionLabel()||e.value===void 0?e:e.value}isOptionDisabled(e){let n=this.optionDisabled();return n?Re(e,n):e.disabled!==void 0?e.disabled:!1}onOptionSelect(e,n,t){if(this.$disabled()||this.isOptionDisabled(n))return;let o=this.isSelected(n);if(o&&this.unselectable())return;let p=this.getOptionValue(n),F;if(this.multiple())o?F=this.value.filter(Be=>!ie(Be,p,this.equalityKey||void 0)):F=this.value?[...this.value,p]:[p];else{if(o&&!this.allowEmpty())return;F=o?null:p}this.focusedIndex=t,this.value=F,this.writeModelValue(this.value),this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:n,index:t})}changeTabIndexes(e,n){let t,o;for(let p=0;p<=this.el.nativeElement.children.length-1;p++)this.el.nativeElement.children[p].getAttribute(`tabindex`)===`0`&&(t={elem:this.el.nativeElement.children[p],index:p});n===`prev`?t.index===0?o=this.el.nativeElement.children.length-1:o=t.index-1:t.index===this.el.nativeElement.children.length-1?o=0:o=t.index+1,this.focusedIndex=o,this.el.nativeElement.children[o].focus()}onFocus(e,n){this.focusedIndex=n}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(n=>!ie(n,this.getOptionValue(e),this.dataKey()))}isSelected(e){let n=!1,t=this.getOptionValue(e);if(this.multiple()){if(this.value&&Array.isArray(this.value)){for(let o of this.value)if(ie(o,t,this.dataKey())){n=!0;break}}}else n=ie(this.getOptionValue(e),this.value,this.equalityKey||void 0);return n}templates=tP(Mn$1);onAfterContentInit(){this.templates().forEach(e=>{e.getType()===`item`&&(this._itemTemplate=e.template)})}writeControlValue(e,n){this.value=e,n(this.value),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid()})}static ɵfac=function(n){return new(n||i)};static ɵcmp=ME({type:i,selectors:[[`p-selectButton`],[`p-selectbutton`],[`p-select-button`]],contentQueries:function(n,t,o){if(n&1&&(gh(o,t.templates,Mn$1,4),ph(o,Tn,4)),n&2){II();let p;DI(p=EI())&&(t.itemTemplate=p.first)}},hostVars:6,hostBindings:function(n,t){n&2&&(nh(`role`,t.role())(`aria-label`,t.ariaLabel()||null)(`aria-labelledby`,t.ariaLabelledBy()||null)(`data-p`,t.dataP),PI(t.cx(`root`)))},inputs:{options:[1,`options`],optionLabel:[1,`optionLabel`],optionValue:[1,`optionValue`],optionDisabled:[1,`optionDisabled`],unselectable:[1,`unselectable`],tabindex:[1,`tabindex`],multiple:[1,`multiple`],allowEmpty:[1,`allowEmpty`],styleClass:[1,`styleClass`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaLabel:[1,`ariaLabel`],dataKey:[1,`dataKey`],autofocus:[1,`autofocus`],size:[1,`size`],fluid:[1,`fluid`]},outputs:{onOptionClick:`onOptionClick`,onChange:`onChange`},features:[rw([Qn,jt,{provide:Ut,useExisting:i},{provide:Fi,useExisting:i}]),FE([$s]),Qp],decls:2,vars:0,consts:[[`content`,``],[3,`autofocus`,`styleClass`,`ngModel`,`onLabel`,`offLabel`,`disabled`,`allowEmpty`,`size`,`fluid`,`pt`,`unstyled`],[3,`onChange`,`autofocus`,`styleClass`,`ngModel`,`onLabel`,`offLabel`,`disabled`,`allowEmpty`,`size`,`fluid`,`pt`,`unstyled`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(n,t){n&1&&nI(0,Ln,2,12,`p-togglebutton`,1,In,!0),n&2&&rI(t.options())},dependencies:[Fe,pn$1,cn$1,jt$1,yC,fC,$n$1,xs],encapsulation:2})}return i})();var Kt=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=ts({type:i});static ɵinj=Dr({imports:[Te,$n$1,$n$1]})}return i})();var Gt={_id:``,eventId:``,question:``,options:[``,``],active:!1};var Yt={_id:``,eventId:``,question:``,options:[``,``],correctOptionIndex:0,revealAnswer:!1,active:!1};var Xt=(()=>{class i{constructor(){this.hours=we(null),this.minutes=we(null),this._onChange=()=>{},this._onTouched=()=>{},this.disabled=!1}writeValue(e){if(!e){this.hours.set(null),this.minutes.set(null);return}let[n,t]=e.split(`:`).map(Number);this.hours.set(Number.isFinite(n)?n:null),this.minutes.set(Number.isFinite(t)?t:null)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}onHourWheel(e){e.preventDefault(),this._shiftHour(e.deltaY<0?1:-1)}onMinuteWheel(e){e.preventDefault(),this._shiftMinute(e.deltaY<0?1:-1)}incrementHour(){this._shiftHour(1)}decrementHour(){this._shiftHour(-1)}incrementMinute(){this._shiftMinute(1)}decrementMinute(){this._shiftMinute(-1)}onHourInput(e){this.hours.set(this._parseDigits(e,23)),this._emit()}onMinuteInput(e){this.minutes.set(this._parseDigits(e,59)),this._emit()}_parseDigits(e,n){let t=e.target,o=t.value.replace(/\D/g,``).slice(0,2),p=o===``?null:Math.min(n,Number(o));return t.value=p!==null?String(p):``,p}_shiftHour(e){if(this.disabled)return;let n=this.hours()??0;this.hours.set((n+e+24)%24),this._emit()}_shiftMinute(e){if(this.disabled)return;let n=this.minutes()??0;this.minutes.set((n+e+60)%60),this._emit()}_emit(){let e=this.hours()??0,n=this.minutes()??0;this._onTouched(),this._onChange(`${String(e).padStart(2,`0`)}:${String(n).padStart(2,`0`)}`)}static{this.ɵfac=function(n){return new(n||i)}}static{this.ɵcmp=ME({type:i,selectors:[[`app-time-scroll-input`]],features:[rw([{provide:W,useExisting:Zo(()=>i),multi:!0}])],decls:17,vars:10,consts:[[1,`time-scroll`],[1,`time-scroll__segment`,3,`wheel`],[`type`,`button`,`tabindex`,`-1`,1,`time-scroll__btn`,3,`click`],[1,`pi`,`pi-chevron-up`],[`type`,`text`,`inputmode`,`numeric`,`placeholder`,`--`,`maxlength`,`2`,1,`time-scroll__value`,`time-scroll__input`,3,`input`,`value`],[1,`pi`,`pi-chevron-down`],[1,`time-scroll__sep`]],template:function(n,t){n&1&&(fu(0,`div`,0)(1,`div`,1),dh(`wheel`,function(p){return t.onHourWheel(p)}),fu(2,`button`,2),dh(`click`,function(){return t.incrementHour()}),ih(3,`i`,3),pu(),fu(4,`input`,4),lw(5,`number`),dh(`input`,function(p){return t.onHourInput(p)}),pu(),fu(6,`button`,2),dh(`click`,function(){return t.decrementHour()}),ih(7,`i`,5),pu()(),fu(8,`span`,6),qI(9,`:`),pu(),fu(10,`div`,1),dh(`wheel`,function(p){return t.onMinuteWheel(p)}),fu(11,`button`,2),dh(`click`,function(){return t.incrementMinute()}),ih(12,`i`,3),pu(),fu(13,`input`,4),lw(14,`number`),dh(`input`,function(p){return t.onMinuteInput(p)}),pu(),fu(15,`button`,2),dh(`click`,function(){return t.decrementMinute()}),ih(16,`i`,5),pu()()()),n&2&&(wh(`time-scroll--disabled`,t.disabled),Yv(4),ch(`value`,t.hours()!==null?fw(5,4,t.hours(),`2.0-0`):``),Yv(9),ch(`value`,t.minutes()!==null?fw(14,7,t.minutes(),`2.0-0`):``))},dependencies:[hC],styles:[`[_nghost-%COMP%]{display:block}.time-scroll[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:var(--%NS%sp-2, 8px);padding:var(--%NS%sp-2, 8px) var(--%NS%sp-3, 12px);border:1px solid var(--%NS%c-border);border-radius:var(--%NS%radius, 6px);background:var(--%NS%c-bg-secondary);-webkit-user-select:none;user-select:none;width:100%;box-sizing:border-box;justify-content:center}.time-scroll--disabled[_ngcontent-%COMP%]{opacity:.5;pointer-events:none}.time-scroll__segment[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;cursor:ns-resize;touch-action:none}.time-scroll__value[_ngcontent-%COMP%]{font-variant-numeric:tabular-nums;font-size:1.1rem;line-height:1.2;color:var(--%NS%c-text-primary);min-width:2ch;text-align:center}.time-scroll__input[_ngcontent-%COMP%]{border:none;background:transparent;padding:0;width:2ch;cursor:text;font-family:inherit}.time-scroll__input[_ngcontent-%COMP%]:focus{outline:none}.time-scroll__sep[_ngcontent-%COMP%]{color:var(--%NS%c-text-primary);font-size:1.1rem}.time-scroll__btn[_ngcontent-%COMP%]{all:unset;display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--%NS%c-text-muted);font-size:.7rem;line-height:1;padding:2px}.time-scroll__btn[_ngcontent-%COMP%]:hover{color:var(--%NS%c-primary)}`]})}}return i})();var Zt=()=>[`.`];var ke=(i,s)=>s._id;var Jt=(i,s)=>s.optionIndex;function An(i,s){if(i&1&&($i(0,`div`,17)(1,`span`),qI(2),du(),$i(3,`span`),qI(4),du()()),i&2){let e=s.$implicit,n=hI().$implicit;Yv(2),Ah(n.options[e.optionIndex]),Yv(2),Ah(e.votes)}}function qn(i,s){if(i&1&&($i(0,`div`,14)(1,`span`,15),qI(2),du(),$i(3,`div`,16),nI(4,An,5,2,`div`,17,Jt),du()()),i&2){let e=s.$implicit,n=hI(5);Yv(2),Ah(e.question),Yv(2),rI(n.pollResults(e))}}function $n(i,s){if(i&1&&($i(0,`p-card`)(1,`div`,7),qI(2,`Poll statistics`),du(),$i(3,`div`,13),nI(4,qn,6,1,`div`,14,ke),du()()),i&2){let e=hI(4);Yv(4),rI(e.polls())}}function Hn(i,s){i&1&&oh(0,`i`,19)}function Wn(i,s){if(i&1&&($i(0,`div`,17)(1,`span`),qI(2),XE(3,Hn,1,0,`i`,19),du(),$i(4,`span`),qI(5),du()()),i&2){let e=s.$implicit,n=hI().$implicit;wh(`font-semibold`,e.isCorrect),Yv(2),Ah(n.options[e.optionIndex]),Yv(),JE(e.isCorrect?3:-1),Yv(2),Ah(e.votes)}}function Rn(i,s){if(i&1&&($i(0,`div`,14)(1,`span`,15),qI(2),du(),$i(3,`div`,16),nI(4,Wn,6,5,`div`,18,Jt),du()()),i&2){let e=s.$implicit,n=hI(5);Yv(2),Ah(e.question),Yv(2),rI(n.quizResults(e))}}function jn(i,s){if(i&1&&($i(0,`p-card`)(1,`div`,7),qI(2,`Quiz statistics`),du(),$i(3,`div`,13),nI(4,Rn,6,1,`div`,14,ke),du()()),i&2){let e=hI(4);Yv(4),rI(e.quizzes())}}function Un(i,s){if(i&1){let e=uI();$i(0,`div`,12)(1,`div`,20)(2,`span`),qI(3),du(),$i(4,`small`,21),qI(5),$i(6,`span`,6),qI(7,`likes`),du()()(),$i(8,`button`,22),lh(`click`,function(){let t=od(e).$implicit;return id(hI(4).deleteQuestion(t))}),oh(9,`i`,23),du()()}if(i&2){let e=s.$implicit;Yv(3),Ah(e.text),Yv(2),Rh(``,e.authorName,` · `,e.likes,` `),Yv(3),rh(`text`,!0)}}function Kn(i,s){if(i&1&&($i(0,`div`,2)(1,`h1`,3),qI(2,`Audience Q&A`),du(),$i(3,`a`,4),oh(4,`i`,5),$i(5,`span`,6),qI(6,`Back to event`),du()()(),$i(7,`p-card`)(8,`div`,7),qI(9,`Live audience stats`),du(),$i(10,`div`,8)(11,`div`,9)(12,`div`,10),qI(13),du(),$i(14,`small`,6),qI(15,`Questions`),du()(),$i(16,`div`,9)(17,`div`,10),qI(18),du(),$i(19,`small`,6),qI(20,`Question likes`),du()(),$i(21,`div`,9)(22,`div`,10),qI(23),du(),$i(24,`small`,6),qI(25,`Poll/quiz answers`),du()()()(),XE(26,$n,6,0,`p-card`),XE(27,jn,6,0,`p-card`),$i(28,`p-card`)(29,`div`,7),qI(30,`Audience questions`),du(),$i(31,`div`,11),nI(32,Un,10,4,`div`,12,ke),du()()),i&2){let e=hI(3);Yv(3),rh(`routerLink`,ow(6,Zt)),Yv(10),Ah(e.stats().questionCount),Yv(5),Ah(e.stats().totalLikes),Yv(5),Ah(e.stats().pollAnswerCount+e.stats().quizAnswerCount),Yv(3),JE(e.polls().length?26:-1),Yv(),JE(e.quizzes().length?27:-1),Yv(5),rI(e.questions())}}function Gn(i,s){i&1&&($i(0,`small`,35),qI(1,`Date and time are required.`),du())}function Yn(i,s){if(i&1){let e=uI();$i(0,`button`,44),lh(`click`,function(){od(e);return id(hI(4).toggleAddLecture())}),oh(1,`i`,45),$i(2,`span`,6),qI(3,`Add new lecture`),du()()}i&2&&rh(`text`,!0)}function Xn(i,s){if(i&1){let e=uI();$i(0,`div`,38)(1,`input`,53),Fh(`ngModelChange`,function(t){od(e);let o=hI(4);return QI(o.newLectureTitle,t)||(o.newLectureTitle=t),id(t)}),du(),jD(),$i(2,`div`,54)(3,`button`,46),lh(`click`,function(){od(e);return id(hI(4).createLecture())}),$i(4,`span`,6),qI(5,`Add`),du()(),$i(6,`button`,55),lh(`click`,function(){od(e);return id(hI(4).toggleAddLecture())}),$i(7,`span`,6),qI(8,`Cancel`),du()()()()}if(i&2){let e=hI(4);Yv(),kh(`ngModel`,e.newLectureTitle),rh(`placeholder`,e.translateService.translate(`Lecture title`)()),VD(),Yv(5),rh(`text`,!0)}}function Zn(i,s){if(i&1){let e=uI();$i(0,`button`,55),lh(`click`,function(){od(e);let t=hI().$index;return id(hI(4).removeNewPollOption(t))}),oh(1,`i`,57),du()}i&2&&rh(`text`,!0)}function Jn(i,s){if(i&1){let e=uI();$i(0,`div`,43)(1,`input`,53),lh(`ngModelChange`,function(t){let o=od(e).$index;return id(hI(4).updateNewPollOption(o,t))}),du(),jD(),XE(2,Zn,2,1,`button`,56),du()}if(i&2){let e=s.$implicit,n=s.$index,t=hI(4);Yv(),rh(`ngModel`,e)(`placeholder`,t.optionLabel()+` `+(n+1)),VD(),Yv(),JE(t.newPollOptions().length>2?2:-1)}}function ei(i,s){if(i&1){let e=uI();$i(0,`button`,55),lh(`click`,function(){od(e);let t=hI().$index;return id(hI(6).removeEditPollOption(t))}),oh(1,`i`,57),du()}i&2&&rh(`text`,!0)}function ti(i,s){if(i&1){let e=uI();$i(0,`div`,43)(1,`input`,53),lh(`ngModelChange`,function(t){let o=od(e).$index;return id(hI(6).updateEditPollOption(o,t))}),du(),jD(),XE(2,ei,2,1,`button`,56),du()}if(i&2){let e=s.$implicit,n=s.$index,t=hI(6);Yv(),rh(`ngModel`,e)(`placeholder`,t.optionLabel()+` `+(n+1)),VD(),Yv(),JE(t.editPollOptions().length>2?2:-1)}}function ni(i,s){if(i&1){let e=uI();$i(0,`div`,58)(1,`input`,40),Fh(`ngModelChange`,function(t){od(e);let o=hI(5);return QI(o.editPollQuestion,t)||(o.editPollQuestion=t),id(t)}),du(),jD(),nI(2,ti,3,3,`div`,43,eI),$i(4,`button`,44),lh(`click`,function(){od(e);return id(hI(5).addEditPollOption())}),oh(5,`i`,45),$i(6,`span`,6),qI(7,`Add option`),du()(),$i(8,`div`,54)(9,`button`,46),lh(`click`,function(){od(e);return id(hI(5).saveEditPoll())}),$i(10,`span`,6),qI(11,`Save`),du()(),$i(12,`button`,55),lh(`click`,function(){od(e);return id(hI(5).cancelEditPoll())}),$i(13,`span`,6),qI(14,`Cancel`),du()()()()}if(i&2){let e=hI(5);Yv(),kh(`ngModel`,e.editPollQuestion),rh(`placeholder`,e.translateService.translate(`Poll question`)()),VD(),Yv(),rI(e.editPollOptions()),Yv(2),rh(`text`,!0),Yv(8),rh(`text`,!0)}}function ii(i,s){if(i&1&&($i(0,`li`),qI(1),du()),i&2){let e=s.$implicit;Yv(),Ah(e)}}function oi(i,s){if(i&1){let e=uI();$i(0,`div`,59)(1,`div`)(2,`div`,15),qI(3),du(),$i(4,`ul`,60),nI(5,ii,2,1,`li`,null,eI),du()(),$i(7,`div`,61)(8,`button`,55),lh(`click`,function(){od(e);let t=hI().$implicit;return id(hI(4).startEditPoll(t))}),oh(9,`i`,62),du(),$i(10,`button`,22),lh(`click`,function(){od(e);let t=hI().$implicit;return id(hI(4).deletePoll(t))}),oh(11,`i`,23),du()()()}if(i&2){let e=hI().$implicit;Yv(3),Ah(e.question),Yv(2),rI(e.options),Yv(3),rh(`text`,!0),Yv(2),rh(`text`,!0)}}function ai(i,s){if(i&1&&($i(0,`div`,47),XE(1,ni,15,4,`div`,58)(2,oi,12,3,`div`,59),du()),i&2){let e=s.$implicit,n=hI(4);Yv(),JE(n.editingPollId()===e._id?1:2)}}function li(i,s){if(i&1){let e=uI();$i(0,`button`,63),lh(`click`,function(){od(e);return id(hI(4).togglePollGroup())}),$i(1,`span`),qI(2),du()()}if(i&2){let e=hI(4);Yv(2),Ah(e.allPollsActive()?e.translateService.translate(`Deactivate poll`)():e.translateService.translate(`Activate poll`)())}}function ri(i,s){if(i&1){let e=uI();$i(0,`button`,55),lh(`click`,function(){od(e);let t=hI().$index;return id(hI(4).removeNewQuizOption(t))}),oh(1,`i`,57),du()}i&2&&rh(`text`,!0)}function di(i,s){if(i&1){let e=uI();$i(0,`div`,43)(1,`input`,64),Fh(`ngModelChange`,function(t){od(e);let o=hI(4);return QI(o.newQuizCorrectIndex,t)||(o.newQuizCorrectIndex=t),id(t)}),du(),jD(),$i(2,`input`,53),lh(`ngModelChange`,function(t){let o=od(e).$index;return id(hI(4).updateNewQuizOption(o,t))}),du(),jD(),XE(3,ri,2,1,`button`,56),du()}if(i&2){let e=s.$implicit,n=s.$index,t=hI(4);Yv(),rh(`value`,n),kh(`ngModel`,t.newQuizCorrectIndex),rh(`title`,t.translateService.translate(`Correct answer`)()),VD(),Yv(),rh(`ngModel`,e)(`placeholder`,t.optionLabel()+` `+(n+1)),VD(),Yv(),JE(t.newQuizOptions().length>2?3:-1)}}function si(i,s){if(i&1){let e=uI();$i(0,`button`,55),lh(`click`,function(){od(e);let t=hI().$index;return id(hI(6).removeEditQuizOption(t))}),oh(1,`i`,57),du()}i&2&&rh(`text`,!0)}function ci(i,s){if(i&1){let e=uI();$i(0,`div`,43)(1,`input`,65),Fh(`ngModelChange`,function(t){od(e);let o=hI(6);return QI(o.editQuizCorrectIndex,t)||(o.editQuizCorrectIndex=t),id(t)}),du(),jD(),$i(2,`input`,53),lh(`ngModelChange`,function(t){let o=od(e).$index;return id(hI(6).updateEditQuizOption(o,t))}),du(),jD(),XE(3,si,2,1,`button`,56),du()}if(i&2){let e=s.$implicit,n=s.$index,t=hI(6);Yv(),rh(`value`,n),kh(`ngModel`,t.editQuizCorrectIndex),rh(`title`,t.translateService.translate(`Correct answer`)()),VD(),Yv(),rh(`ngModel`,e)(`placeholder`,t.optionLabel()+` `+(n+1)),VD(),Yv(),JE(t.editQuizOptions().length>2?3:-1)}}function ui(i,s){if(i&1){let e=uI();$i(0,`div`,58)(1,`input`,40),Fh(`ngModelChange`,function(t){od(e);let o=hI(5);return QI(o.editQuizQuestion,t)||(o.editQuizQuestion=t),id(t)}),du(),jD(),nI(2,ci,4,6,`div`,43,eI),$i(4,`button`,44),lh(`click`,function(){od(e);return id(hI(5).addEditQuizOption())}),oh(5,`i`,45),$i(6,`span`,6),qI(7,`Add option`),du()(),$i(8,`label`,49)(9,`p-checkbox`,50),Fh(`ngModelChange`,function(t){od(e);let o=hI(5);return QI(o.editQuizRevealAnswer,t)||(o.editQuizRevealAnswer=t),id(t)}),du(),jD(),$i(10,`span`,6),qI(11,`Show correct answer to participants`),du()(),$i(12,`div`,54)(13,`button`,46),lh(`click`,function(){od(e);return id(hI(5).saveEditQuiz())}),$i(14,`span`,6),qI(15,`Save`),du()(),$i(16,`button`,55),lh(`click`,function(){od(e);return id(hI(5).cancelEditQuiz())}),$i(17,`span`,6),qI(18,`Cancel`),du()()()()}if(i&2){let e=hI(5);Yv(),kh(`ngModel`,e.editQuizQuestion),rh(`placeholder`,e.translateService.translate(`Quiz question`)()),VD(),Yv(),rI(e.editQuizOptions()),Yv(2),rh(`text`,!0),Yv(5),rh(`binary`,!0),kh(`ngModel`,e.editQuizRevealAnswer),VD(),Yv(7),rh(`text`,!0)}}function pi(i,s){i&1&&oh(0,`i`,19)}function _i(i,s){if(i&1&&($i(0,`li`),qI(1),XE(2,pi,1,0,`i`,19),du()),i&2){let e=s.$implicit,n=s.$index,t=hI(2).$implicit;wh(`font-semibold`,n===t.correctOptionIndex),Yv(),mu(` `,e),Yv(),JE(n===t.correctOptionIndex?2:-1)}}function mi(i,s){if(i&1){let e=uI();$i(0,`div`,59)(1,`div`)(2,`span`,15),qI(3),du(),$i(4,`ul`,60),nI(5,_i,3,4,`li`,66,eI),du()(),$i(7,`div`,61)(8,`button`,55),lh(`click`,function(){od(e);let t=hI().$implicit;return id(hI(4).startEditQuiz(t))}),oh(9,`i`,62),du(),$i(10,`button`,22),lh(`click`,function(){od(e);let t=hI().$implicit;return id(hI(4).deleteQuiz(t))}),oh(11,`i`,23),du()()()}if(i&2){let e=hI().$implicit;Yv(3),Ah(e.question),Yv(2),rI(e.options),Yv(3),rh(`text`,!0),Yv(2),rh(`text`,!0)}}function gi(i,s){if(i&1&&($i(0,`div`,47),XE(1,ui,19,6,`div`,58)(2,mi,12,3,`div`,59),du()),i&2){let e=s.$implicit,n=hI(4);Yv(),JE(n.editingQuizId()===e._id?1:2)}}function hi(i,s){if(i&1){let e=uI();$i(0,`button`,63),lh(`click`,function(){od(e);return id(hI(4).toggleQuizGroup())}),$i(1,`span`),qI(2),du()()}if(i&2){let e=hI(4);Yv(2),Ah(e.allQuizzesActive()?e.translateService.translate(`Deactivate quiz`)():e.translateService.translate(`Activate quiz`)())}}function bi(i,s){if(i&1){let e=uI();$i(0,`div`,2)(1,`h1`,3),qI(2,`Manage event`),du(),$i(3,`a`,24),oh(4,`i`,25),$i(5,`span`,6),qI(6,`View statistics`),du()()(),$i(7,`p-card`)(8,`div`,2)(9,`p-selectButton`,26),lh(`ngModelChange`,function(t){od(e);return id(hI(3).setEventState(t))}),du(),jD(),du(),$i(10,`div`,27),qI(11,`Lecture date and time`),du(),$i(12,`div`,28)(13,`div`,29)(14,`small`,30)(15,`span`,6),qI(16,`Date`),du(),qI(17,` *`),du(),$i(18,`div`,31)(19,`input`,32),Fh(`ngModelChange`,function(t){od(e);let o=hI(3);return QI(o.eventDateDraft,t)||(o.eventDateDraft=t),id(t)}),du(),jD(),du()(),$i(20,`div`,33)(21,`small`,30)(22,`span`,6),qI(23,`Start`),du(),qI(24,` *`),du(),$i(25,`app-time-scroll-input`,34),Fh(`ngModelChange`,function(t){od(e);let o=hI(3);return QI(o.eventStartTimeDraft,t)||(o.eventStartTimeDraft=t),id(t)}),du(),jD(),du(),$i(26,`div`,33)(27,`small`,30)(28,`span`,6),qI(29,`End`),du(),qI(30,` *`),du(),$i(31,`app-time-scroll-input`,34),Fh(`ngModelChange`,function(t){od(e);let o=hI(3);return QI(o.eventEndTimeDraft,t)||(o.eventEndTimeDraft=t),id(t)}),du(),jD(),du()(),XE(32,Gn,2,0,`small`,35),$i(33,`div`,27),qI(34,`Lecture`),du(),$i(35,`div`,11)(36,`p-select`,36),Fh(`ngModelChange`,function(t){od(e);let o=hI(3);return QI(o.eventLectureIdDraft,t)||(o.eventLectureIdDraft=t),id(t)}),du(),jD(),XE(37,Yn,4,1,`button`,37)(38,Xn,9,3,`div`,38),du(),$i(39,`div`,39)(40,`input`,40),Fh(`ngModelChange`,function(t){od(e);let o=hI(3);return QI(o.eventTitleDraft,t)||(o.eventTitleDraft=t),id(t)}),du(),jD(),$i(41,`input`,40),Fh(`ngModelChange`,function(t){od(e);let o=hI(3);return QI(o.eventSpeakerDraft,t)||(o.eventSpeakerDraft=t),id(t)}),du(),jD(),$i(42,`textarea`,41),Fh(`ngModelChange`,function(t){od(e);let o=hI(3);return QI(o.eventDescriptionDraft,t)||(o.eventDescriptionDraft=t),id(t)}),du(),jD(),$i(43,`button`,42),lh(`click`,function(){od(e);return id(hI(3).saveEventInfo())}),$i(44,`span`,6),qI(45,`Save`),du()()()(),$i(46,`p-card`)(47,`div`,7),qI(48,`Polls`),du(),$i(49,`div`,11)(50,`input`,40),Fh(`ngModelChange`,function(t){od(e);let o=hI(3);return QI(o.newPollQuestion,t)||(o.newPollQuestion=t),id(t)}),du(),jD(),nI(51,Jn,3,3,`div`,43,eI),$i(53,`button`,44),lh(`click`,function(){od(e);return id(hI(3).addNewPollOption())}),oh(54,`i`,45),$i(55,`span`,6),qI(56,`Add option`),du()(),$i(57,`button`,46),lh(`click`,function(){od(e);return id(hI(3).createPoll())}),$i(58,`span`,6),qI(59,`Add question`),du()()(),$i(60,`div`,39),nI(61,ai,3,1,`div`,47,ke),du(),XE(63,li,3,1,`button`,48),du(),$i(64,`p-card`)(65,`div`,7),qI(66,`Quizzes`),du(),$i(67,`div`,11)(68,`input`,40),Fh(`ngModelChange`,function(t){od(e);let o=hI(3);return QI(o.newQuizQuestion,t)||(o.newQuizQuestion=t),id(t)}),du(),jD(),nI(69,di,4,6,`div`,43,eI),$i(71,`button`,44),lh(`click`,function(){od(e);return id(hI(3).addNewQuizOption())}),oh(72,`i`,45),$i(73,`span`,6),qI(74,`Add option`),du()(),$i(75,`label`,49)(76,`p-checkbox`,50),Fh(`ngModelChange`,function(t){od(e);let o=hI(3);return QI(o.newQuizRevealAnswer,t)||(o.newQuizRevealAnswer=t),id(t)}),du(),jD(),$i(77,`span`,6),qI(78,`Show correct answer to participants`),du()(),$i(79,`button`,46),lh(`click`,function(){od(e);return id(hI(3).createQuiz())}),$i(80,`span`,6),qI(81,`Add question`),du()()(),$i(82,`div`,39),nI(83,gi,3,1,`div`,47,ke),du(),XE(85,hi,3,1,`button`,48),du(),$i(86,`button`,51),lh(`click`,function(){od(e);return id(hI(3).startSession())}),oh(87,`i`,52),$i(88,`span`,6),qI(89,`Done`),du()()}if(i&2){let e=hI(2),n=hI();Yv(3),rh(`routerLink`,ow(30,Zt)),Yv(6),rh(`options`,n.stateOptions)(`ngModel`,e.state),VD(),Yv(10),kh(`ngModel`,n.eventDateDraft),VD(),Yv(6),kh(`ngModel`,n.eventStartTimeDraft),VD(),Yv(6),kh(`ngModel`,n.eventEndTimeDraft),VD(),Yv(),JE(n.scheduleValid()?-1:32),Yv(4),rh(`options`,n.lectures()),kh(`ngModel`,n.eventLectureIdDraft),rh(`placeholder`,n.translateService.translate(`Choose a lecture`)())(`showClear`,!0),VD(),Yv(),JE(n.isAddingLecture()?38:37),Yv(3),kh(`ngModel`,n.eventTitleDraft),rh(`placeholder`,n.translateService.translate(`Title`)()),VD(),Yv(),kh(`ngModel`,n.eventSpeakerDraft),rh(`placeholder`,n.translateService.translate(`Speaker`)()),VD(),Yv(),kh(`ngModel`,n.eventDescriptionDraft),rh(`placeholder`,n.translateService.translate(`Description`)()),VD(),Yv(),rh(`disabled`,!n.scheduleValid()),Yv(7),kh(`ngModel`,n.newPollQuestion),rh(`placeholder`,n.translateService.translate(`Poll question`)()),VD(),Yv(),rI(n.newPollOptions()),Yv(2),rh(`text`,!0),Yv(8),rI(n.polls()),Yv(2),JE(n.polls().length?63:-1),Yv(5),kh(`ngModel`,n.newQuizQuestion),rh(`placeholder`,n.translateService.translate(`Quiz question`)()),VD(),Yv(),rI(n.newQuizOptions()),Yv(2),rh(`text`,!0),Yv(5),rh(`binary`,!0),kh(`ngModel`,n.newQuizRevealAnswer),VD(),Yv(7),rI(n.quizzes()),Yv(2),JE(n.quizzes().length?85:-1),Yv(),rh(`disabled`,!n.scheduleValid())}}function fi(i,s){if(i&1&&($i(0,`div`,1),XE(1,Kn,34,7)(2,bi,90,31),du()),i&2){let e=hI(2);Yv(),JE(e.fragment()===`questions`?1:2)}}function vi(i,s){i&1&&($i(0,`div`,0),oh(1,`i`,67),$i(2,`h1`,3),qI(3,`Not your event`),du(),$i(4,`p`,68),qI(5,` You're signed in, but you're not the owner of this event. `),du()())}function Ci(i,s){if(i&1&&XE(0,fi,3,1,`div`,1)(1,vi,6,0,`div`,0),i&2)JE(hI().isOwner()?0:1)}function xi(i,s){i&1&&($i(0,`div`,0),oh(1,`i`,69),$i(2,`h1`,3),qI(3,`Event not found`),du(),$i(4,`p`,68),qI(5,` We couldn't find an event for this link. `),du()())}var ga=(()=>{class i{constructor(){this.translateService=g(Ag),this._router=g(re),this._route=g(Q),this._messageService=g(wn$1),this._userService=g(Ue),this._eventService=g(C$1),this._lectureService=g(F$1),this._questionService=g(y),this._pollService=g(E),this._pollAnswerService=g(w),this._quizService=g(C),this._quizAnswerService=g(y$1),this._changeDetectorRef=g(ng),this.slug=Tu.required(),this.fragment=F(this._route.fragment,{initialValue:this._route.snapshot.fragment}),this.event=Dw(()=>this._eventService.bySlug(this.slug())??null),this.isOwner=Dw(()=>{let e=this.event(),n=this._userService.user()?._id;return!!e&&!!n&&e.owner===n}),this.lectures=this._lectureService.items,this.questions=Dw(()=>{let e=this.event();return e?this._questionService.byEvent(e.lectureId||e._id):[]}),this.polls=Dw(()=>{let e=this.event();return e?this._pollService.byEvent(e._id):[]}),this.quizzes=Dw(()=>{let e=this.event();return e?this._quizService.byEvent(e._id):[]}),this.stats=Dw(()=>({questionCount:this.questions().length,totalLikes:this.questions().reduce((e,n)=>e+n.likes,0),pollAnswerCount:this.polls().reduce((e,n)=>e+this._pollAnswerService.all().filter(t=>t.pollId===n._id).length,0),quizAnswerCount:this.quizzes().reduce((e,n)=>e+this._quizAnswerService.all().filter(t=>t.quizId===n._id).length,0)})),this.stateOptions=[{label:`draft`,value:`draft`},{label:`live`,value:`live`},{label:`ended`,value:`ended`}],this.eventTitleDraft=we(``),this.eventSpeakerDraft=we(``),this.eventDescriptionDraft=we(``),this.eventDateDraft=we(``),this.eventStartTimeDraft=we(``),this.eventEndTimeDraft=we(``),this.eventLectureIdDraft=we(``),this.isAddingLecture=we(!1),this.newLectureTitle=we(``),this.scheduleValid=Dw(()=>!!this.eventDateDraft()&&!!this.eventStartTimeDraft()&&!!this.eventEndTimeDraft()),this.optionLabel=Dw(()=>this.translateService.translate(`Option`)()),this.newPollQuestion=we(``),this.newPollOptions=we([``,``]),this.newQuizQuestion=we(``),this.newQuizOptions=we([``,``]),this.newQuizCorrectIndex=we(0),this.newQuizRevealAnswer=we(!1),this.editingPollId=we(null),this.editPollQuestion=we(``),this.editPollOptions=we([]),this.editingQuizId=we(null),this.editQuizQuestion=we(``),this.editQuizOptions=we([]),this.editQuizCorrectIndex=we(0),this.editQuizRevealAnswer=we(!1),this.allPollsActive=Dw(()=>{let e=this.polls();return e.length>0&&e.every(n=>n.active)}),this.allQuizzesActive=Dw(()=>{let e=this.quizzes();return e.length>0&&e.every(n=>n.active)})}ngOnInit(){let e=this.event();this.eventTitleDraft.set(e?.title??``),this.eventSpeakerDraft.set(this._userService.user()?.name||e?.speaker||``),this.eventDescriptionDraft.set(e?.description??``),this.eventDateDraft.set(e?.date??``),this.eventStartTimeDraft.set(e?.startTime??``),this.eventEndTimeDraft.set(e?.endTime??``),this.eventLectureIdDraft.set(e?.lectureId??``),e&&(this._questionService.loadEvent(e.lectureId||e._id),this._pollService.loadEvent(e._id),this._quizService.loadEvent(e._id),this._pollAnswerService.loadAll()),queueMicrotask(()=>{e&&!this.isOwner()&&this._router.navigateByUrl(`/profile`)})}toggleAddLecture(){this.isAddingLecture.update(e=>!e)}createLecture(){let e=this.newLectureTitle().trim();if(!e)return;let n=this._lectureService.create(s(r({},Ho),{title:e}));this.eventLectureIdDraft.set(n._id),this.newLectureTitle.set(``),this.isAddingLecture.set(!1)}saveEventInfo(){let e=this.event();if(e){if(!this.scheduleValid()){this._messageService.add({severity:`error`,detail:this.translateService.translate(`Date and time are required.`)()});return}this._eventService.update(e._id,{title:this.eventTitleDraft().trim(),speaker:this.eventSpeakerDraft().trim(),description:this.eventDescriptionDraft().trim(),date:this.eventDateDraft(),startTime:this.eventStartTimeDraft(),endTime:this.eventEndTimeDraft(),lectureId:this.eventLectureIdDraft()})}}setEventState(e){let n=this.event();n&&this._eventService.update(n._id,{state:e})}startSession(){if(!this.scheduleValid()){this._messageService.add({severity:`error`,detail:this.translateService.translate(`Date and time are required.`)()});return}this.saveEventInfo(),this.event()?.state===`draft`&&this.setEventState(`live`),this._messageService.add({severity:`success`,detail:this.translateService.translate(`Saved`)()}),this._router.navigateByUrl(`/lectures-manage`)}deleteQuestion(e){this._questionService.removeQuestion(e)}addNewPollOption(){this._addOption(this.newPollOptions)}removeNewPollOption(e){this._removeOption(this.newPollOptions,e)}updateNewPollOption(e,n){this._updateOption(this.newPollOptions,e,n)}createPoll(){let e=this.newPollQuestion().trim(),n=this._trimOptions(this.newPollOptions()),t=this.event();!e||n.length<2||!t||(this._pollService.create(s(r({},Gt),{eventId:t._id,question:e,options:n})).subscribe(),this.newPollQuestion.set(``),this.newPollOptions.set([``,``]))}togglePollGroup(){let e=!this.allPollsActive();for(let n of this.polls())this._pollService.update(s(r({},n),{active:e})).subscribe();this._changeDetectorRef.markForCheck()}pollResults(e){return this._pollAnswerService.results(e)}addEditPollOption(){this._addOption(this.editPollOptions)}removeEditPollOption(e){this._removeOption(this.editPollOptions,e)}updateEditPollOption(e,n){this._updateOption(this.editPollOptions,e,n)}startEditPoll(e){this.editingPollId.set(e._id),this.editPollQuestion.set(e.question),this.editPollOptions.set([...e.options])}saveEditPoll(){let e=this.editingPollId(),n=e?this._pollService.byId(e):void 0,t=this.editPollQuestion().trim(),o=this._trimOptions(this.editPollOptions());!n||!t||o.length<2||(this._pollService.update(s(r({},n),{question:t,options:o})).subscribe(),this.cancelEditPoll())}cancelEditPoll(){this.editingPollId.set(null),this.editPollQuestion.set(``),this.editPollOptions.set([])}deletePoll(e){this._pollService.delete(e).subscribe(),this.editingPollId()===e._id&&this.cancelEditPoll()}addNewQuizOption(){this._addOption(this.newQuizOptions)}removeNewQuizOption(e){this._removeOption(this.newQuizOptions,e)}updateNewQuizOption(e,n){this._updateOption(this.newQuizOptions,e,n)}createQuiz(){let e=this.newQuizQuestion().trim(),n=this._trimOptions(this.newQuizOptions()),t=this.event();!e||n.length<2||!t||(this._quizService.create(s(r({},Yt),{eventId:t._id,question:e,options:n,correctOptionIndex:Math.min(this.newQuizCorrectIndex(),n.length-1),revealAnswer:this.newQuizRevealAnswer()})).subscribe(),this.newQuizQuestion.set(``),this.newQuizOptions.set([``,``]),this.newQuizCorrectIndex.set(0),this.newQuizRevealAnswer.set(!1))}toggleQuizGroup(){let e=!this.allQuizzesActive();for(let n of this.quizzes())this._quizService.update(s(r({},n),{active:e})).subscribe();this._changeDetectorRef.markForCheck()}quizResults(e){return this._quizAnswerService.results(e)}addEditQuizOption(){this._addOption(this.editQuizOptions)}removeEditQuizOption(e){this._removeOption(this.editQuizOptions,e)}updateEditQuizOption(e,n){this._updateOption(this.editQuizOptions,e,n)}startEditQuiz(e){this.editingQuizId.set(e._id),this.editQuizQuestion.set(e.question),this.editQuizOptions.set([...e.options]),this.editQuizCorrectIndex.set(e.correctOptionIndex),this.editQuizRevealAnswer.set(e.revealAnswer)}saveEditQuiz(){let e=this.editingQuizId(),n=e?this._quizService.byId(e):void 0,t=this.editQuizQuestion().trim(),o=this._trimOptions(this.editQuizOptions());!n||!t||o.length<2||(this._quizService.update(s(r({},n),{question:t,options:o,correctOptionIndex:Math.min(this.editQuizCorrectIndex(),o.length-1),revealAnswer:this.editQuizRevealAnswer()})).subscribe(),this.cancelEditQuiz())}cancelEditQuiz(){this.editingQuizId.set(null),this.editQuizQuestion.set(``),this.editQuizOptions.set([]),this.editQuizCorrectIndex.set(0),this.editQuizRevealAnswer.set(!1)}deleteQuiz(e){this._quizService.delete(e).subscribe(),this.editingQuizId()===e._id&&this.cancelEditQuiz()}_trimOptions(e){return e.map(n=>n.trim()).filter(n=>n.length>0)}_addOption(e){e.update(n=>[...n,``])}_removeOption(e,n){e.update(t=>t.length>2?t.filter((o,p)=>p!==n):t)}_updateOption(e,n,t){e.update(o=>o.map((p,F)=>F===n?t:p))}static{this.ɵfac=function(n){return new(n||i)}}static{this.ɵcmp=ME({type:i,selectors:[[`app-event-manage`]],inputs:{slug:[1,`slug`]},decls:2,vars:1,consts:[[1,`mx-auto`,`flex`,`w-full`,`max-w-[480px]`,`flex-col`,`items-center`,`gap-3`,`p-8`,`text-center`],[1,`mx-auto`,`flex`,`w-full`,`max-w-[960px]`,`flex-col`,`gap-4`,`p-4`],[1,`flex`,`items-center`,`justify-between`,`gap-3`],[`translate`,``,1,`m-0`,`text-xl`,`font-semibold`],[1,`flex`,`items-center`,`gap-2`,`text-sm`,`opacity-70`,`hover:opacity-100`,3,`routerLink`],[1,`pi`,`pi-arrow-left`],[`translate`,``],[`translate`,``,1,`text-sm`,`font-semibold`],[1,`mt-2`,`grid`,`grid-cols-3`,`gap-3`],[1,`rounded-card`,`border`,`border-[var(--c-border)]`,`p-3`,`text-center`],[1,`text-lg`,`font-semibold`],[1,`mt-2`,`flex`,`flex-col`,`gap-2`],[1,`flex`,`items-center`,`justify-between`,`gap-3`,`rounded-card`,`border`,`border-[var(--c-border)]`,`px-3`,`py-2`,`text-sm`],[1,`mt-2`,`flex`,`flex-col`,`gap-3`],[1,`rounded-card`,`border`,`border-[var(--c-border)]`,`p-3`],[1,`font-semibold`],[1,`mt-2`,`flex`,`flex-col`,`gap-1`,`text-sm`],[1,`flex`,`justify-between`],[1,`flex`,`justify-between`,3,`font-semibold`],[1,`pi`,`pi-check`,`text-xs`],[1,`flex`,`flex-col`],[1,`opacity-60`],[`pButton`,``,`type`,`button`,`severity`,`danger`,3,`click`,`text`],[1,`pi`,`pi-trash`],[`fragment`,`questions`,1,`flex`,`items-center`,`gap-2`,`text-sm`,`opacity-70`,`hover:opacity-100`,3,`routerLink`],[1,`pi`,`pi-chart-bar`],[`optionLabel`,`label`,`optionValue`,`value`,3,`ngModelChange`,`options`,`ngModel`],[`translate`,``,1,`mt-3`,`text-sm`,`font-semibold`],[1,`mt-2`,`grid`,`grid-cols-1`,`gap-3`,`sm:grid-cols-3`],[1,`flex`,`flex-1`,`flex-col`,`gap-1`],[1,`opacity-70`],[1,`flex`,`flex-1`],[`pInputText`,``,`type`,`date`,`lang`,`uk-UA`,1,`h-full`,`w-full`,3,`ngModelChange`,`ngModel`],[1,`flex`,`flex-col`,`gap-1`],[1,`w-full`,3,`ngModelChange`,`ngModel`],[`translate`,``,1,`mt-1`,`text-[var(--c-danger,#e11d48)]`],[`optionLabel`,`title`,`optionValue`,`_id`,1,`w-full`,3,`ngModelChange`,`options`,`ngModel`,`placeholder`,`showClear`],[`pButton`,``,`type`,`button`,1,`self-start`,3,`text`],[1,`flex`,`flex-col`,`gap-2`,`sm:flex-row`],[1,`mt-3`,`flex`,`flex-col`,`gap-2`],[`pInputText`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`pTextarea`,``,`rows`,`2`,3,`ngModelChange`,`ngModel`,`placeholder`],[`pButton`,``,`type`,`button`,3,`click`,`disabled`],[1,`flex`,`items-center`,`gap-2`],[`pButton`,``,`type`,`button`,1,`self-start`,3,`click`,`text`],[1,`pi`,`pi-plus`],[`pButton`,``,`type`,`button`,3,`click`],[1,`rounded-card`,`border`,`border-[var(--c-border)]`,`px-3`,`py-2`,`text-sm`],[`pButton`,``,`type`,`button`,1,`mt-3`,`w-full`],[1,`flex`,`items-center`,`gap-2`,`text-sm`],[3,`ngModelChange`,`binary`,`ngModel`],[`pButton`,``,`type`,`button`,1,`w-full`,3,`click`,`disabled`],[1,`pi`,`pi-check`],[`pInputText`,``,1,`w-full`,3,`ngModelChange`,`ngModel`,`placeholder`],[1,`flex`,`gap-2`],[`pButton`,``,`type`,`button`,3,`click`,`text`],[`pButton`,``,`type`,`button`,3,`text`],[1,`pi`,`pi-times`],[1,`flex`,`flex-col`,`gap-2`],[1,`flex`,`items-start`,`justify-between`,`gap-3`],[1,`m-0`,`mt-1`,`list-disc`,`pl-4`,`opacity-80`],[1,`flex`,`shrink-0`,`gap-1`],[1,`pi`,`pi-pencil`],[`pButton`,``,`type`,`button`,1,`mt-3`,`w-full`,3,`click`],[`type`,`radio`,`pRadioButton`,``,`name`,`new-quiz-correct`,3,`ngModelChange`,`value`,`ngModel`,`title`],[`type`,`radio`,`pRadioButton`,``,`name`,`edit-quiz-correct`,3,`ngModelChange`,`value`,`ngModel`,`title`],[3,`font-semibold`],[1,`pi`,`pi-lock`,`text-3xl`,`opacity-60`],[`translate`,``,1,`m-0`,`text-sm`,`opacity-70`],[1,`pi`,`pi-search`,`text-3xl`,`opacity-60`]],template:function(n,t){if(n&1&&XE(0,Ci,2,1)(1,xi,6,0,`div`,0),n&2){let o;JE((o=t.event())?0:1,o)}},dependencies:[fo,ho,Ve,Me,qt,Se,nt,et,Mt,Dt,Pt,Cs,Ci$1,Kt,Te,O,L,Xt,pn$1,Oe$1,Bt,cn$1,jt$1,Pj],styles:[`[_nghost-%COMP%]{display:block}`]})}}return i})();export{ga as EventManageComponent};