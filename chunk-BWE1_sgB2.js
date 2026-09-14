import{n as s,t as r}from"./chunk-Btz99zWn.js";import{$r as vg,Ar as rg,Br as te,Bt as Xp,C as Eg,Dr as r2,E as Ft,Et as Ss,F as I,Fn as g,Ft as WC,G as JB,Ht as Y1,I as IC,In as gI,It as Wp,J as K1,Jn as il,K as JI,Kt as Yp,Lr as sr,M as Hp,Mn as fI,Nt as V_,O as GC,Or as rV,Q as L,Qt as Zd,Rn as gw,Rt as Wu,Sn as dC,Sr as q1,T as Eo,Tr as qu,Un as iE,V as In$1,Wn as iI,Wr as uC,Wt as Yd,Xr as vC,Zr as vI,Zt as ZE,_t as QE,ai as ws,b as EI,bi as zp,bt as Qu,c as Ae$1,cn as aC,d as CI,dr as nI,en as Zn$1,et as Le,ft as OB,gr as pI,gt as Q1,h as Cw,hi as ym,hn as cC,ii as wo,in as _n$1,it as Mn$1,jn as fC,jt as Ub,k as G_,kn as eg,m as Cn$1,mi as yg,mr as ng,o as AC,on as _t,ot as NC,qt as Ys,rn as _g,rt as Mm,v as Dw,vi as yw,vn as cf,wn as ds,wr as qp,wt as SC,xi as zu,yi as zb,yt as Qp,zn as hI}from"./chunk-D-AgZhTw.js";import{E as Y,H as ie,L as fn$1,a as Fi,at as xs,m as Mn$2,n as $s,rt as wn$1,t as $n$1,y as Re}from"./chunk-CFVWef1w.js";import{t as F}from"./chunk-Doh1A8DX.js";import"./chunk-DrA2Kwlq.js";import{j as we,u as Me,y as _t$1}from"./chunk-CvgBiYLX.js";import{I as f,L as S,m as Ue}from"./main-RRQ6PDMQ.js";import{a as r$1,i as o,n as i,o as s$1,r as n,s as t,t as d}from"./chunk-P_hJ2dHI.js";import{c as fo,l as ho,u as le}from"./chunk-D7bbrxYg.js";import{n as et,r as nt}from"./chunk-Dk7aKnsB.js";import{t as c}from"./chunk-OXriLRR3.js";import"./chunk-KyVP9vMP.js";import{a as et$1,c as xe,i as ct,n as He,r as ce,s as st,t as Ae$2}from"./chunk-RPdLMd4P.js";import{t as j}from"./chunk-Cg4gFrYa.js";import{n as Ve,t as Me$1}from"./chunk-DEWCRv_X.js";import"./chunk-Dr5udsbX.js";import"./chunk-PNIwRyTG.js";import{n as O,t as L$1}from"./chunk-Cdje1pHD.js";import"./chunk-DRrjg3ry.js";import{n as Cs,r as Ho,t as Ci$1}from"./chunk-BFMTQepz2.js";import{t as F$1}from"./chunk-zSPZk_us2.js";var At=(()=>{class i extends S{static ɵfac=(()=>{let e;return function(t){return(e||(e=sr(i)))(t||i)}})();static ɵcmp=V_({type:i,selectors:[[``,`data-p-icon`,`minus`]],features:[Ae$1],decls:1,vars:0,consts:[[`d`,`M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z`,`fill`,`currentColor`]],template:function(n,t){n&1&&(cf(),qp(0,`path`,0))},encapsulation:2})}return i})();var qt=`
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
`;var dn=[`icon`];var sn=[`input`];var cn=(i,s,e)=>({checked:i,class:s,dataP:e});function un(i,s){if(i&1&&Wp(0,`span`,7),i&2){let e=IC(3);WC(e.cx(`icon`)),zp(`ngClass`,e.checkboxIcon())(`pBind`,e.ptm(`icon`)),ws(`data-p`,e.dataP)}}function pn(i,s){if(i&1&&(cf(),Wp(0,`svg`,8)),i&2){let e=IC(3);WC(e.cx(`icon`)),zp(`pBind`,e.ptm(`icon`)),ws(`data-p`,e.dataP)}}function _n(i,s){if(i&1&&(aC(0,un,1,5,`span`,5),aC(1,pn,1,4,`:svg:svg`,6)),i&2){let e=IC(2);cC(e.checkboxIcon()?0:-1),iE(),cC(e.checkboxIcon()?-1:1)}}function mn(i,s){if(i&1&&(cf(),Wp(0,`svg`,9)),i&2){let e=IC(2);WC(e.cx(`icon`)),zp(`pBind`,e.ptm(`icon`)),ws(`data-p`,e.dataP)}}function gn(i,s){if(i&1&&(aC(0,_n,2,2),aC(1,mn,1,4,`:svg:svg`,4)),i&2){let e=IC();cC(e.checked?0:-1),iE(),cC(e._indeterminate()?1:-1)}}function hn(i,s){}function bn(i,s){i&1&&Hp(0,hn,0,0,`ng-template`)}var fn=`
    ${qt}

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
`;var vn={root:({instance:i})=>[`p-checkbox p-component`,{"p-checkbox-checked p-highlight":i.checked,"p-disabled":i.$disabled(),"p-invalid":i.invalid(),"p-variant-filled":i.$variant()===`filled`,"p-checkbox-sm p-inputfield-sm":i.size()===`small`,"p-checkbox-lg p-inputfield-lg":i.size()===`large`}],box:`p-checkbox-box`,input:`p-checkbox-input`,icon:`p-checkbox-icon`};var $t=(()=>{class i extends Y{name=`checkbox`;style=fn;classes=vn;static ɵfac=(()=>{let e;return function(t){return(e||(e=sr(i)))(t||i)}})();static ɵprov=L({token:i,factory:i.ɵfac})}return i})();var Wt=new I(`CHECKBOX_INSTANCE`);var Cn={provide:Ys,useExisting:Le(()=>Te),multi:!0};var Te=(()=>{class i extends c{componentName=`Checkbox`;hostName=il(``);value=il();binary=il(void 0,{transform:Ss});ariaLabelledBy=il();ariaLabel=il();tabindex=il(void 0,{transform:JI});inputId=il();inputStyle=il();styleClass=il();inputClass=il();indeterminate=il(!1,{transform:Ss});formControl=il();checkboxIcon=il();readonly=il(void 0,{transform:Ss});autofocus=il(void 0,{transform:Ss});trueValue=il(!0);falseValue=il(!1);variant=il();size=il();onChange=q1();onFocus=q1();onBlur=q1();inputViewChild=Y1(`input`);get checked(){return this._indeterminate()?!1:this.binary()?this.modelValue()===this.trueValue():fn$1(this.value(),this.modelValue())}_indeterminate=te(void 0);checkboxIconTemplate=Q1(`icon`,{descendants:!1});templates=K1(Mn$2);_checkboxIconTemplate;focused=!1;_componentStyle=g($t);bindDirectiveInstance=g($s,{self:!0});$pcCheckbox=g(Wt,{optional:!0,skipSelf:!0})??void 0;$variant=In$1(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());constructor(){super(),rV()&&console.warn('`<p-checkbox>` is deprecated and will be removed in a future major version. Use a native `<input type="checkbox" pCheckbox>` instead.'),Zn$1(()=>{this._indeterminate.set(this.indeterminate())})}onAfterContentInit(){this.templates()?.forEach(e=>{switch(e.getType()){case`icon`:this._checkboxIconTemplate=e.template;break;case`checkboxicon`:this._checkboxIconTemplate=e.template;break}})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}updateModel(e){let n,t=this.injector.get(Mn$1,null,{optional:!0,self:!0}),o=this.formControl(),u=t&&!o?t.value:this.modelValue();this.binary()?(n=this._indeterminate()?this.trueValue():this.checked?this.falseValue():this.trueValue(),this.writeModelValue(n),this.onModelChange(n)):(this.checked||this._indeterminate()?n=u.filter(N=>!ie(N,this.value())):n=u?[...u,this.value()]:[this.value()],this.onModelChange(n),this.writeModelValue(n),o&&o.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:e})}handleChange(e){this.readonly()||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild()?.nativeElement.focus()}writeControlValue(e,n){n(e),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid(),checked:this.checked,disabled:this.$disabled(),filled:this.$variant()===`filled`,[this.size()]:this.size()})}static ɵfac=function(n){return new(n||i)};static ɵcmp=V_({type:i,selectors:[[`p-checkbox`],[`p-checkBox`],[`p-check-box`]],contentQueries:function(n,t,o){n&1&&ng(o,t.checkboxIconTemplate,dn,4)(o,t.templates,Mn$2,4),n&2&&AC(2)},viewQuery:function(n,t){n&1&&rg(t.inputViewChild,sn,5),n&2&&AC()},hostVars:6,hostBindings:function(n,t){n&2&&(ws(`data-p-highlight`,t.checked)(`data-p-checked`,t.checked)(`data-p-disabled`,t.$disabled())(`data-p`,t.dataP),WC(t.cn(t.cx(`root`),t.styleClass())))},inputs:{hostName:[1,`hostName`],value:[1,`value`],binary:[1,`binary`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaLabel:[1,`ariaLabel`],tabindex:[1,`tabindex`],inputId:[1,`inputId`],inputStyle:[1,`inputStyle`],styleClass:[1,`styleClass`],inputClass:[1,`inputClass`],indeterminate:[1,`indeterminate`],formControl:[1,`formControl`],checkboxIcon:[1,`checkboxIcon`],readonly:[1,`readonly`],autofocus:[1,`autofocus`],trueValue:[1,`trueValue`],falseValue:[1,`falseValue`],variant:[1,`variant`],size:[1,`size`]},outputs:{onChange:`onChange`,onFocus:`onFocus`,onBlur:`onBlur`},features:[Ft([Cn,$t,{provide:Wt,useExisting:i},{provide:Fi,useExisting:i}]),G_([$s]),Ae$1],decls:5,vars:27,consts:[[`input`,``],[`type`,`checkbox`,3,`focus`,`blur`,`change`,`checked`,`indeterminate`,`pBind`],[3,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`data-p-icon`,`minus`,3,`class`,`pBind`],[3,`class`,`ngClass`,`pBind`],[`data-p-icon`,`check`,3,`class`,`pBind`],[3,`ngClass`,`pBind`],[`data-p-icon`,`check`,3,`pBind`],[`data-p-icon`,`minus`,3,`pBind`]],template:function(n,t){n&1&&(ds(0,`input`,1,0),Cn$1(`focus`,function(u){return t.onInputFocus(u)})(`blur`,function(u){return t.onInputBlur(u)})(`change`,function(u){return t.handleChange(u)}),zu(),ds(2,`div`,2),aC(3,gn,2,2),Hp(4,bn,1,0,null,3),zu()),n&2&&(GC(t.inputStyle()),WC(t.cn(t.cx(`input`),t.inputClass())),zp(`checked`,t.checked)(`indeterminate`,!!t._indeterminate())(`pBind`,t.ptm(`input`)),ws(`id`,t.inputId())(`value`,t.value())(`name`,t.name())(`tabindex`,t.tabindex())(`required`,t.required()?``:void 0)(`readonly`,t.readonly()?``:void 0)(`disabled`,t.$disabled()?``:void 0)(`aria-labelledby`,t.ariaLabelledBy())(`aria-label`,t.ariaLabel()),iE(2),WC(t.cx(`box`)),zp(`pBind`,t.ptm(`box`)),ws(`data-p`,t.dataP),iE(),cC(!t.checkboxIconTemplate()&&!t._checkboxIconTemplate?3:-1),iE(),zp(`ngTemplateOutlet`,t.checkboxIconTemplate()||t._checkboxIconTemplate)(`ngTemplateOutletContext`,gI(23,cn,t.checked,t.cx(`icon`),t.dataP)))},dependencies:[Cw,gw,yw,$n$1,f,At,xs,$s],encapsulation:2})}return i})();var Kt=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=_n$1({type:i});static ɵinj=_t({imports:[Te,$n$1,$n$1]})}return i})();var Gt=`
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
`;var kn=[`icon`];var Mn=[`content`];var Yt=i=>({$implicit:i});function wn(i,s){i&1&&Yp(0)}function En(i,s){if(i&1&&Wp(0,`span`,0),i&2){let e=IC(3);WC(e.cn(e.cx(`icon`),e.checked?e.onIcon():e.offIcon(),e.iconPos()===`left`?e.cx(`iconLeft`):e.cx(`iconRight`))),zp(`pBind`,e.ptm(`icon`))}}function Dn(i,s){if(i&1&&aC(0,En,1,3,`span`,2),i&2){let e=IC(2);cC(e.onIcon()||e.offIcon()?0:-1)}}function Sn(i,s){i&1&&Yp(0)}function Tn(i,s){if(i&1&&Hp(0,Sn,1,0,`ng-container`,1),i&2){let e=IC(2);zp(`ngTemplateOutlet`,e.iconTemplate()||e._iconTemplate)(`ngTemplateOutletContext`,hI(2,Yt,e.checked))}}function Bn(i,s){if(i&1&&(aC(0,Dn,1,1)(1,Tn,1,4,`ng-container`),ds(2,`span`,0),nI(3),zu()),i&2){let e=IC();cC(e.iconTemplate()?1:0),iE(2),WC(e.cx(`label`)),zp(`pBind`,e.ptm(`label`)),iE(),yg(e.checked?e.hasOnLabel?e.onLabel():e.nbsp:e.hasOffLabel?e.offLabel():e.nbsp)}}var In=`
    ${Gt}

    /* For ngx-prime (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`;var Nn=i=>typeof i.checked==`function`?i.checked():i.checked;var Vn={root:({instance:i})=>[`p-togglebutton p-component`,{"p-togglebutton-checked":Nn(i),"p-invalid":i.invalid(),"p-disabled":i.$disabled(),"p-togglebutton-sm p-inputfield-sm":i.size()===`small`,"p-togglebutton-lg p-inputfield-lg":i.size()===`large`,"p-togglebutton-fluid":i.fluid()}],content:`p-togglebutton-content`,icon:`p-togglebutton-icon`,iconLeft:`p-togglebutton-icon-left`,iconRight:`p-togglebutton-icon-right`,label:`p-togglebutton-label`};var Pe=(()=>{class i extends Y{name=`togglebutton`;style=In;classes=Vn;static ɵfac=(()=>{let e;return function(t){return(e||(e=sr(i)))(t||i)}})();static ɵprov=L({token:i,factory:i.ɵfac})}return i})();var Zt=new I(`TOGGLEBUTTON_INSTANCE`);var zn={provide:Ys,useExisting:Le(()=>Ae),multi:!0};var Ae=(()=>{class i extends c{componentName=`ToggleButton`;nbsp=`\xA0`;$pcToggleButton=g(Zt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g($s,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}constructor(){super(),rV()&&console.warn("`<p-togglebutton>` is deprecated and will be removed in a future major version. Use a native `<button pToggleButton>` instead.")}onKeyDown(e){switch(e.code){case`Enter`:this.toggle(e),e.preventDefault();break;case`Space`:this.toggle(e),e.preventDefault();break}}toggle(e){!this.$disabled()&&!(this.allowEmpty()===!1&&this.checked)&&(this.checked=!this.checked,this.writeModelValue(this.checked),this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onLabel=il(`Yes`);offLabel=il(`No`);onIcon=il();offIcon=il();ariaLabel=il();ariaLabelledBy=il();styleClass=il();inputId=il();tabindex=il(0,{transform:JI});iconPos=il(`left`);autofocus=il(void 0,{transform:Ss});size=il();allowEmpty=il();fluid=il(void 0,{transform:Ss});onChange=q1();iconTemplate=Q1(`icon`,{descendants:!1});contentTemplate=Q1(`content`,{descendants:!1});templates=K1(Mn$2);checked=!1;onInit(){(this.checked===null||this.checked===void 0)&&(this.checked=!1)}_componentStyle=g(Pe);onBlur(){this.onModelTouched()}get hasOnLabel(){return this.onLabel()&&this.onLabel().length>0}get hasOffLabel(){return this.offLabel()&&this.offLabel().length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`icon`:this._iconTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}writeControlValue(e,n){this.checked=e,n(e),this.cd.markForCheck()}get dataP(){return this.cn({checked:this.active,invalid:this.invalid(),[this.size()]:this.size()})}static ɵfac=function(n){return new(n||i)};static ɵcmp=V_({type:i,selectors:[[`p-toggleButton`],[`p-togglebutton`],[`p-toggle-button`]],contentQueries:function(n,t,o){n&1&&ng(o,t.iconTemplate,kn,4)(o,t.contentTemplate,Mn,4)(o,t.templates,Mn$2,4),n&2&&AC(3)},hostVars:13,hostBindings:function(n,t){n&1&&Cn$1(`keydown`,function(u){return t.onKeyDown(u)})(`click`,function(u){return t.toggle(u)}),n&2&&(ws(`aria-labelledby`,t.ariaLabelledBy())(`aria-label`,t.ariaLabel())(`aria-pressed`,t.checked?`true`:`false`)(`aria-disabled`,t.$disabled()||null)(`aria-invalid`,t.invalid()||null)(`role`,`button`)(`tabindex`,t.tabindex()!==void 0?t.tabindex():t.$disabled()?-1:0)(`data-pc-name`,`togglebutton`)(`data-p-checked`,t.active)(`data-p-disabled`,t.$disabled())(`data-p`,t.dataP),WC(t.cn(t.cx(`root`),t.styleClass())))},inputs:{onLabel:[1,`onLabel`],offLabel:[1,`offLabel`],onIcon:[1,`onIcon`],offIcon:[1,`offIcon`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],styleClass:[1,`styleClass`],inputId:[1,`inputId`],tabindex:[1,`tabindex`],iconPos:[1,`iconPos`],autofocus:[1,`autofocus`],size:[1,`size`],allowEmpty:[1,`allowEmpty`],fluid:[1,`fluid`]},outputs:{onChange:`onChange`},features:[Ft([zn,Pe,{provide:Zt,useExisting:i},{provide:Fi,useExisting:i}]),G_([le,$s]),Ae$1],decls:3,vars:9,consts:[[3,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`class`,`pBind`]],template:function(n,t){n&1&&(ds(0,`span`,0),Hp(1,wn,1,0,`ng-container`,1),aC(2,Bn,4,5),zu()),n&2&&(WC(t.cx(`content`)),zp(`pBind`,t.ptm(`content`)),ws(`data-p`,t.dataP),iE(),zp(`ngTemplateOutlet`,t.contentTemplate()||t._contentTemplate)(`ngTemplateOutletContext`,hI(7,Yt,t.checked)),iE(),cC(t.contentTemplate()?-1:2))},dependencies:[Cw,yw,$n$1,xs,$s],encapsulation:2})}return i})();var Xt=`
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
`;var On=[`item`];var Qn=(i,s)=>({$implicit:i,index:s});function Fn(i,s){return this.getOptionLabel(s)}function Pn(i,s){i&1&&Yp(0)}function An(i,s){if(i&1&&Hp(0,Pn,1,0,`ng-container`,3),i&2){let e=IC(2),n=e.$implicit,t=e.$index,o=IC();zp(`ngTemplateOutlet`,o.itemTemplate||o._itemTemplate)(`ngTemplateOutletContext`,pI(2,Qn,n,t))}}function qn(i,s){i&1&&Hp(0,An,1,5,`ng-template`,null,0,CI)}function $n(i,s){if(i&1){let e=vC();ds(0,`p-togglebutton`,2),Cn$1(`onChange`,function(t){let o=Zd(e),u=o.$implicit,N=o.$index;return Yd(IC().onOptionSelect(t,u,N))}),aC(1,qn,2,0),zu(),ZE()}if(i&2){let e=s.$implicit,n=IC();zp(`autofocus`,n.autofocus())(`styleClass`,n.styleClass())(`ngModel`,n.isSelected(e))(`onLabel`,n.getOptionLabel(e))(`offLabel`,n.getOptionLabel(e))(`disabled`,n.$disabled()||n.isOptionDisabled(e))(`allowEmpty`,n.getAllowEmpty())(`size`,n.size())(`fluid`,n.fluid())(`pt`,n.ptm(`pcToggleButton`))(`unstyled`,n.unstyled()),QE(),iE(),cC(n.itemTemplate||n._itemTemplate?1:-1)}}var Wn=`
    ${Xt}

    /* For ngx-prime */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`;var Hn={root:({instance:i})=>[`p-selectbutton p-component`,{"p-invalid":i.invalid(),"p-disabled":i.$disabled(),"p-selectbutton-fluid":i.fluid()}]};var Jt=(()=>{class i extends Y{name=`selectbutton`;style=Wn;classes=Hn;static ɵfac=(()=>{let e;return function(t){return(e||(e=sr(i)))(t||i)}})();static ɵprov=L({token:i,factory:i.ɵfac})}return i})();var en=new I(`SELECTBUTTON_INSTANCE`);var Rn={provide:Ys,useExisting:Le(()=>Be),multi:!0};var Be=(()=>{class i extends c{componentName=`SelectButton`;constructor(){super(),rV()&&console.warn("`<p-selectbutton>` is deprecated and will be removed in a future major version. Use the native `pSelectButton`/`pSelectButtonOption` directives instead.")}options=il();optionLabel=il();optionValue=il();optionDisabled=il();unselectable=il(!1,{transform:Ss});tabindex=il(0,{transform:JI});multiple=il(void 0,{transform:Ss});allowEmpty=il(!0,{transform:Ss});styleClass=il();ariaLabelledBy=il();ariaLabel=il();dataKey=il();autofocus=il(void 0,{transform:Ss});size=il();fluid=il(void 0,{transform:Ss});onOptionClick=q1();onChange=q1();itemTemplate;_itemTemplate;role=In$1(()=>this.multiple()?`group`:`radiogroup`);get equalityKey(){return this.optionValue()?null:this.dataKey()}value;focusedIndex=0;_componentStyle=g(Jt);$pcSelectButton=g(en,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g($s,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}getAllowEmpty(){return this.unselectable()?!1:this.multiple()?this.allowEmpty()||this.value?.length!==1:this.allowEmpty()}getOptionLabel(e){let n=this.optionLabel();return n?Re(e,n):e.label!=null?e.label:e}getOptionValue(e){let n=this.optionValue();return n?Re(e,n):this.optionLabel()||e.value===void 0?e:e.value}isOptionDisabled(e){let n=this.optionDisabled();return n?Re(e,n):e.disabled!==void 0?e.disabled:!1}onOptionSelect(e,n,t){if(this.$disabled()||this.isOptionDisabled(n))return;let o=this.isSelected(n);if(o&&this.unselectable())return;let u=this.getOptionValue(n),N;if(this.multiple())o?N=this.value.filter(Ie=>!ie(Ie,u,this.equalityKey||void 0)):N=this.value?[...this.value,u]:[u];else{if(o&&!this.allowEmpty())return;N=o?null:u}this.focusedIndex=t,this.value=N,this.writeModelValue(this.value),this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:n,index:t})}changeTabIndexes(e,n){let t,o;for(let u=0;u<=this.el.nativeElement.children.length-1;u++)this.el.nativeElement.children[u].getAttribute(`tabindex`)===`0`&&(t={elem:this.el.nativeElement.children[u],index:u});n===`prev`?t.index===0?o=this.el.nativeElement.children.length-1:o=t.index-1:t.index===this.el.nativeElement.children.length-1?o=0:o=t.index+1,this.focusedIndex=o,this.el.nativeElement.children[o].focus()}onFocus(e,n){this.focusedIndex=n}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(n=>!ie(n,this.getOptionValue(e),this.dataKey()))}isSelected(e){let n=!1,t=this.getOptionValue(e);if(this.multiple()){if(this.value&&Array.isArray(this.value)){for(let o of this.value)if(ie(o,t,this.dataKey())){n=!0;break}}}else n=ie(this.getOptionValue(e),this.value,this.equalityKey||void 0);return n}templates=K1(Mn$2);onAfterContentInit(){this.templates().forEach(e=>{e.getType()===`item`&&(this._itemTemplate=e.template)})}writeControlValue(e,n){this.value=e,n(this.value),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid()})}static ɵfac=function(n){return new(n||i)};static ɵcmp=V_({type:i,selectors:[[`p-selectButton`],[`p-selectbutton`],[`p-select-button`]],contentQueries:function(n,t,o){if(n&1&&(ng(o,t.templates,Mn$2,4),eg(o,On,4)),n&2){AC();let u;SC(u=NC())&&(t.itemTemplate=u.first)}},hostVars:6,hostBindings:function(n,t){n&2&&(ws(`role`,t.role())(`aria-label`,t.ariaLabel()||null)(`aria-labelledby`,t.ariaLabelledBy()||null)(`data-p`,t.dataP),WC(t.cx(`root`)))},inputs:{options:[1,`options`],optionLabel:[1,`optionLabel`],optionValue:[1,`optionValue`],optionDisabled:[1,`optionDisabled`],unselectable:[1,`unselectable`],tabindex:[1,`tabindex`],multiple:[1,`multiple`],allowEmpty:[1,`allowEmpty`],styleClass:[1,`styleClass`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaLabel:[1,`ariaLabel`],dataKey:[1,`dataKey`],autofocus:[1,`autofocus`],size:[1,`size`],fluid:[1,`fluid`]},outputs:{onOptionClick:`onOptionClick`,onChange:`onChange`},features:[Ft([Rn,Jt,{provide:en,useExisting:i},{provide:Fi,useExisting:i}]),G_([$s]),Ae$1],decls:2,vars:0,consts:[[`content`,``],[3,`autofocus`,`styleClass`,`ngModel`,`onLabel`,`offLabel`,`disabled`,`allowEmpty`,`size`,`fluid`,`pt`,`unstyled`],[3,`onChange`,`autofocus`,`styleClass`,`ngModel`,`onLabel`,`offLabel`,`disabled`,`allowEmpty`,`size`,`fluid`,`pt`,`unstyled`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(n,t){n&1&&dC(0,$n,2,12,`p-togglebutton`,1,Fn,!0),n&2&&fC(t.options())},dependencies:[Ae,r2,JB,Ub,Cw,yw,$n$1,xs],encapsulation:2})}return i})();var tn=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=_n$1({type:i});static ɵinj=_t({imports:[Be,$n$1,$n$1]})}return i})();var nn={_id:``,eventId:``,question:``,options:[``,``],active:!1};var on={_id:``,eventId:``,question:``,options:[``,``],correctOptionIndex:0,revealAnswer:!1,active:!1};var an=(()=>{class i{constructor(){this.hours=te(null),this.minutes=te(null),this._onChange=()=>{},this._onTouched=()=>{},this.disabled=!1}writeValue(e){if(!e){this.hours.set(null),this.minutes.set(null);return}let[n,t]=e.split(`:`).map(Number);this.hours.set(Number.isFinite(n)?n:null),this.minutes.set(Number.isFinite(t)?t:null)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}onHourWheel(e){e.preventDefault(),this._shiftHour(e.deltaY<0?1:-1)}onMinuteWheel(e){e.preventDefault(),this._shiftMinute(e.deltaY<0?1:-1)}incrementHour(){this._shiftHour(1)}decrementHour(){this._shiftHour(-1)}incrementMinute(){this._shiftMinute(1)}decrementMinute(){this._shiftMinute(-1)}onHourInput(e){this.hours.set(this._parseDigits(e,23)),this._emit()}onMinuteInput(e){this.minutes.set(this._parseDigits(e,59)),this._emit()}_parseDigits(e,n){let t=e.target,o=t.value.replace(/\D/g,``).slice(0,2),u=o===``?null:Math.min(n,Number(o));return t.value=u!==null?String(u):``,u}_shiftHour(e){if(this.disabled)return;let n=this.hours()??0;this.hours.set((n+e+24)%24),this._emit()}_shiftMinute(e){if(this.disabled)return;let n=this.minutes()??0;this.minutes.set((n+e+60)%60),this._emit()}_emit(){let e=this.hours()??0,n=this.minutes()??0;this._onTouched(),this._onChange(`${String(e).padStart(2,`0`)}:${String(n).padStart(2,`0`)}`)}static{this.ɵfac=function(n){return new(n||i)}}static{this.ɵcmp=V_({type:i,selectors:[[`app-time-scroll-input`]],features:[Ft([{provide:Ys,useExisting:Le(()=>i),multi:!0}])],decls:17,vars:10,consts:[[1,`time-scroll`],[1,`time-scroll__segment`,3,`wheel`],[`type`,`button`,`tabindex`,`-1`,1,`time-scroll__btn`,3,`click`],[1,`pi`,`pi-chevron-up`],[`type`,`text`,`inputmode`,`numeric`,`placeholder`,`--`,`maxlength`,`2`,1,`time-scroll__value`,`time-scroll__input`,3,`input`,`value`],[1,`pi`,`pi-chevron-down`],[1,`time-scroll__sep`]],template:function(n,t){n&1&&(Wu(0,`div`,0)(1,`div`,1),Xp(`wheel`,function(u){return t.onHourWheel(u)}),Wu(2,`button`,2),Xp(`click`,function(){return t.incrementHour()}),qp(3,`i`,3),qu(),Wu(4,`input`,4),vI(5,`number`),Xp(`input`,function(u){return t.onHourInput(u)}),qu(),Wu(6,`button`,2),Xp(`click`,function(){return t.decrementHour()}),qp(7,`i`,5),qu()(),Wu(8,`span`,6),nI(9,`:`),qu(),Wu(10,`div`,1),Xp(`wheel`,function(u){return t.onMinuteWheel(u)}),Wu(11,`button`,2),Xp(`click`,function(){return t.incrementMinute()}),qp(12,`i`,3),qu(),Wu(13,`input`,4),vI(14,`number`),Xp(`input`,function(u){return t.onMinuteInput(u)}),qu(),Wu(15,`button`,2),Xp(`click`,function(){return t.decrementMinute()}),qp(16,`i`,5),qu()()()),n&2&&(Eo(`time-scroll--disabled`,t.disabled),iE(4),Qp(`value`,t.hours()!==null?EI(5,4,t.hours(),`2.0-0`):``),iE(9),Qp(`value`,t.minutes()!==null?EI(14,7,t.minutes(),`2.0-0`):``))},dependencies:[Dw],styles:[`[_nghost-%COMP%]{display:block}.time-scroll[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:var(--%NS%sp-2, 8px);padding:var(--%NS%sp-2, 8px) var(--%NS%sp-3, 12px);border:1px solid var(--%NS%c-border);border-radius:var(--%NS%radius, 6px);background:var(--%NS%c-bg-secondary);-webkit-user-select:none;user-select:none;width:100%;box-sizing:border-box;justify-content:center}.time-scroll--disabled[_ngcontent-%COMP%]{opacity:.5;pointer-events:none}.time-scroll__segment[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;cursor:ns-resize;touch-action:none}.time-scroll__value[_ngcontent-%COMP%]{font-variant-numeric:tabular-nums;font-size:1.1rem;line-height:1.2;color:var(--%NS%c-text-primary);min-width:2ch;text-align:center}.time-scroll__input[_ngcontent-%COMP%]{border:none;background:transparent;padding:0;width:2ch;cursor:text;font-family:inherit}.time-scroll__input[_ngcontent-%COMP%]:focus{outline:none}.time-scroll__sep[_ngcontent-%COMP%]{color:var(--%NS%c-text-primary);font-size:1.1rem}.time-scroll__btn[_ngcontent-%COMP%]{all:unset;display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--%NS%c-text-muted);font-size:.7rem;line-height:1;padding:2px}.time-scroll__btn[_ngcontent-%COMP%]:hover{color:var(--%NS%c-primary)}`]})}}return i})();var ln=()=>[`.`];var ke=(i,s)=>s._id;var rn=(i,s)=>s.optionIndex;function jn(i,s){if(i&1&&(ds(0,`div`,17)(1,`span`),nI(2),zu(),ds(3,`span`),nI(4),zu()()),i&2){let e=s.$implicit,n=IC().$implicit;iE(2),yg(n.options[e.optionIndex]),iE(2),yg(e.votes)}}function Kn(i,s){if(i&1&&(ds(0,`div`,14)(1,`span`,15),nI(2),zu(),ds(3,`div`,16),dC(4,jn,5,2,`div`,17,rn),zu()()),i&2){let e=s.$implicit,n=IC(5);iE(2),yg(e.question),iE(2),fC(n.pollResults(e))}}function Gn(i,s){if(i&1&&(ds(0,`p-card`)(1,`div`,7),nI(2,`Poll statistics`),zu(),ds(3,`div`,13),dC(4,Kn,6,1,`div`,14,ke),zu()()),i&2){let e=IC(4);iE(4),fC(e.polls())}}function Zn(i,s){i&1&&Wp(0,`i`,19)}function Yn(i,s){if(i&1&&(ds(0,`div`,17)(1,`span`),nI(2),aC(3,Zn,1,0,`i`,19),zu(),ds(4,`span`),nI(5),zu()()),i&2){let e=s.$implicit,n=IC().$implicit;Eo(`font-semibold`,e.isCorrect),iE(2),yg(n.options[e.optionIndex]),iE(),cC(e.isCorrect?3:-1),iE(2),yg(e.votes)}}function Xn(i,s){if(i&1&&(ds(0,`div`,14)(1,`span`,15),nI(2),zu(),ds(3,`div`,16),dC(4,Yn,6,5,`div`,18,rn),zu()()),i&2){let e=s.$implicit,n=IC(5);iE(2),yg(e.question),iE(2),fC(n.quizResults(e))}}function Jn(i,s){if(i&1&&(ds(0,`p-card`)(1,`div`,7),nI(2,`Quiz statistics`),zu(),ds(3,`div`,13),dC(4,Xn,6,1,`div`,14,ke),zu()()),i&2){let e=IC(4);iE(4),fC(e.quizzes())}}function ei(i,s){if(i&1){let e=vC();ds(0,`div`,12)(1,`div`,20)(2,`span`),nI(3),zu(),ds(4,`small`,21),nI(5),ds(6,`span`,6),nI(7,`likes`),zu()()(),ds(8,`button`,22),Cn$1(`click`,function(){let t=Zd(e).$implicit;return Yd(IC(4).deleteQuestion(t))}),Wp(9,`i`,23),zu()()}if(i&2){let e=s.$implicit;iE(3),yg(e.text),iE(2),vg(``,e.authorName,` · `,e.likes,` `),iE(3),zp(`text`,!0)}}function ti(i,s){if(i&1&&(ds(0,`div`,2)(1,`h1`,3),nI(2,`Audience Q&A`),zu(),ds(3,`a`,4),Wp(4,`i`,5),ds(5,`span`,6),nI(6,`Back to event`),zu()()(),ds(7,`p-card`)(8,`div`,7),nI(9,`Live audience stats`),zu(),ds(10,`div`,8)(11,`div`,9)(12,`div`,10),nI(13),zu(),ds(14,`small`,6),nI(15,`Questions`),zu()(),ds(16,`div`,9)(17,`div`,10),nI(18),zu(),ds(19,`small`,6),nI(20,`Question likes`),zu()(),ds(21,`div`,9)(22,`div`,10),nI(23),zu(),ds(24,`small`,6),nI(25,`Poll/quiz answers`),zu()()()(),aC(26,Gn,6,0,`p-card`),aC(27,Jn,6,0,`p-card`),ds(28,`p-card`)(29,`div`,7),nI(30,`Audience questions`),zu(),ds(31,`div`,11),dC(32,ei,10,4,`div`,12,ke),zu()()),i&2){let e=IC(3);iE(3),zp(`routerLink`,fI(6,ln)),iE(10),yg(e.stats().questionCount),iE(5),yg(e.stats().totalLikes),iE(5),yg(e.stats().pollAnswerCount+e.stats().quizAnswerCount),iE(3),cC(e.polls().length?26:-1),iE(),cC(e.quizzes().length?27:-1),iE(5),fC(e.questions())}}function ni(i,s){i&1&&(ds(0,`small`,35),nI(1,`Date and time are required.`),zu())}function ii(i,s){if(i&1){let e=vC();ds(0,`button`,44),Cn$1(`click`,function(){Zd(e);return Yd(IC(4).toggleAddLecture())}),Wp(1,`i`,45),ds(2,`span`,6),nI(3,`Add new lecture`),zu()()}i&2&&zp(`text`,!0)}function oi(i,s){if(i&1){let e=vC();ds(0,`div`,38)(1,`input`,53),_g(`ngModelChange`,function(t){Zd(e);let o=IC(4);return iI(o.newLectureTitle,t)||(o.newLectureTitle=t),Yd(t)}),zu(),ZE(),ds(2,`div`,54)(3,`button`,46),Cn$1(`click`,function(){Zd(e);return Yd(IC(4).createLecture())}),ds(4,`span`,6),nI(5,`Add`),zu()(),ds(6,`button`,55),Cn$1(`click`,function(){Zd(e);return Yd(IC(4).toggleAddLecture())}),ds(7,`span`,6),nI(8,`Cancel`),zu()()()()}if(i&2){let e=IC(4);iE(),Eg(`ngModel`,e.newLectureTitle),zp(`placeholder`,e.translateService.translate(`Lecture title`)()),QE(),iE(5),zp(`text`,!0)}}function ai(i,s){if(i&1){let e=vC();ds(0,`button`,55),Cn$1(`click`,function(){Zd(e);let t=IC().$index;return Yd(IC(4).removeNewPollOption(t))}),Wp(1,`i`,57),zu()}i&2&&zp(`text`,!0)}function li(i,s){if(i&1){let e=vC();ds(0,`div`,43)(1,`input`,53),Cn$1(`ngModelChange`,function(t){let o=Zd(e).$index;return Yd(IC(4).updateNewPollOption(o,t))}),zu(),ZE(),aC(2,ai,2,1,`button`,56),zu()}if(i&2){let e=s.$implicit,n=s.$index,t=IC(4);iE(),zp(`ngModel`,e)(`placeholder`,t.optionLabel()+` `+(n+1)),QE(),iE(),cC(t.newPollOptions().length>2?2:-1)}}function ri(i,s){if(i&1){let e=vC();ds(0,`button`,55),Cn$1(`click`,function(){Zd(e);let t=IC().$index;return Yd(IC(6).removeEditPollOption(t))}),Wp(1,`i`,57),zu()}i&2&&zp(`text`,!0)}function di(i,s){if(i&1){let e=vC();ds(0,`div`,43)(1,`input`,53),Cn$1(`ngModelChange`,function(t){let o=Zd(e).$index;return Yd(IC(6).updateEditPollOption(o,t))}),zu(),ZE(),aC(2,ri,2,1,`button`,56),zu()}if(i&2){let e=s.$implicit,n=s.$index,t=IC(6);iE(),zp(`ngModel`,e)(`placeholder`,t.optionLabel()+` `+(n+1)),QE(),iE(),cC(t.editPollOptions().length>2?2:-1)}}function si(i,s){if(i&1){let e=vC();ds(0,`div`,58)(1,`input`,40),_g(`ngModelChange`,function(t){Zd(e);let o=IC(5);return iI(o.editPollQuestion,t)||(o.editPollQuestion=t),Yd(t)}),zu(),ZE(),dC(2,di,3,3,`div`,43,uC),ds(4,`button`,44),Cn$1(`click`,function(){Zd(e);return Yd(IC(5).addEditPollOption())}),Wp(5,`i`,45),ds(6,`span`,6),nI(7,`Add option`),zu()(),ds(8,`div`,54)(9,`button`,46),Cn$1(`click`,function(){Zd(e);return Yd(IC(5).saveEditPoll())}),ds(10,`span`,6),nI(11,`Save`),zu()(),ds(12,`button`,55),Cn$1(`click`,function(){Zd(e);return Yd(IC(5).cancelEditPoll())}),ds(13,`span`,6),nI(14,`Cancel`),zu()()()()}if(i&2){let e=IC(5);iE(),Eg(`ngModel`,e.editPollQuestion),zp(`placeholder`,e.translateService.translate(`Poll question`)()),QE(),iE(),fC(e.editPollOptions()),iE(2),zp(`text`,!0),iE(8),zp(`text`,!0)}}function ci(i,s){if(i&1&&(ds(0,`li`),nI(1),zu()),i&2){let e=s.$implicit;iE(),yg(e)}}function ui(i,s){if(i&1){let e=vC();ds(0,`div`,59)(1,`div`)(2,`div`,15),nI(3),zu(),ds(4,`ul`,60),dC(5,ci,2,1,`li`,null,uC),zu()(),ds(7,`div`,61)(8,`button`,55),Cn$1(`click`,function(){Zd(e);let t=IC().$implicit;return Yd(IC(4).startEditPoll(t))}),Wp(9,`i`,62),zu(),ds(10,`button`,22),Cn$1(`click`,function(){Zd(e);let t=IC().$implicit;return Yd(IC(4).deletePoll(t))}),Wp(11,`i`,23),zu()()()}if(i&2){let e=IC().$implicit;iE(3),yg(e.question),iE(2),fC(e.options),iE(3),zp(`text`,!0),iE(2),zp(`text`,!0)}}function pi(i,s){if(i&1&&(ds(0,`div`,47),aC(1,si,15,4,`div`,58)(2,ui,12,3,`div`,59),zu()),i&2){let e=s.$implicit,n=IC(4);iE(),cC(n.editingPollId()===e._id?1:2)}}function _i(i,s){if(i&1){let e=vC();ds(0,`button`,63),Cn$1(`click`,function(){Zd(e);return Yd(IC(4).togglePollGroup())}),ds(1,`span`),nI(2),zu()()}if(i&2){let e=IC(4);iE(2),yg(e.allPollsActive()?e.translateService.translate(`Deactivate poll`)():e.translateService.translate(`Activate poll`)())}}function mi(i,s){if(i&1){let e=vC();ds(0,`button`,55),Cn$1(`click`,function(){Zd(e);let t=IC().$index;return Yd(IC(4).removeNewQuizOption(t))}),Wp(1,`i`,57),zu()}i&2&&zp(`text`,!0)}function gi(i,s){if(i&1){let e=vC();ds(0,`div`,43)(1,`input`,64),_g(`ngModelChange`,function(t){Zd(e);let o=IC(4);return iI(o.newQuizCorrectIndex,t)||(o.newQuizCorrectIndex=t),Yd(t)}),zu(),ZE(),ds(2,`input`,53),Cn$1(`ngModelChange`,function(t){let o=Zd(e).$index;return Yd(IC(4).updateNewQuizOption(o,t))}),zu(),ZE(),aC(3,mi,2,1,`button`,56),zu()}if(i&2){let e=s.$implicit,n=s.$index,t=IC(4);iE(),zp(`value`,n),Eg(`ngModel`,t.newQuizCorrectIndex),zp(`title`,t.translateService.translate(`Correct answer`)()),QE(),iE(),zp(`ngModel`,e)(`placeholder`,t.optionLabel()+` `+(n+1)),QE(),iE(),cC(t.newQuizOptions().length>2?3:-1)}}function hi(i,s){if(i&1){let e=vC();ds(0,`button`,55),Cn$1(`click`,function(){Zd(e);let t=IC().$index;return Yd(IC(6).removeEditQuizOption(t))}),Wp(1,`i`,57),zu()}i&2&&zp(`text`,!0)}function bi(i,s){if(i&1){let e=vC();ds(0,`div`,43)(1,`input`,65),_g(`ngModelChange`,function(t){Zd(e);let o=IC(6);return iI(o.editQuizCorrectIndex,t)||(o.editQuizCorrectIndex=t),Yd(t)}),zu(),ZE(),ds(2,`input`,53),Cn$1(`ngModelChange`,function(t){let o=Zd(e).$index;return Yd(IC(6).updateEditQuizOption(o,t))}),zu(),ZE(),aC(3,hi,2,1,`button`,56),zu()}if(i&2){let e=s.$implicit,n=s.$index,t=IC(6);iE(),zp(`value`,n),Eg(`ngModel`,t.editQuizCorrectIndex),zp(`title`,t.translateService.translate(`Correct answer`)()),QE(),iE(),zp(`ngModel`,e)(`placeholder`,t.optionLabel()+` `+(n+1)),QE(),iE(),cC(t.editQuizOptions().length>2?3:-1)}}function fi(i,s){if(i&1){let e=vC();ds(0,`div`,58)(1,`input`,40),_g(`ngModelChange`,function(t){Zd(e);let o=IC(5);return iI(o.editQuizQuestion,t)||(o.editQuizQuestion=t),Yd(t)}),zu(),ZE(),dC(2,bi,4,6,`div`,43,uC),ds(4,`button`,44),Cn$1(`click`,function(){Zd(e);return Yd(IC(5).addEditQuizOption())}),Wp(5,`i`,45),ds(6,`span`,6),nI(7,`Add option`),zu()(),ds(8,`label`,49)(9,`p-checkbox`,50),_g(`ngModelChange`,function(t){Zd(e);let o=IC(5);return iI(o.editQuizRevealAnswer,t)||(o.editQuizRevealAnswer=t),Yd(t)}),zu(),ZE(),ds(10,`span`,6),nI(11,`Show correct answer to participants`),zu()(),ds(12,`div`,54)(13,`button`,46),Cn$1(`click`,function(){Zd(e);return Yd(IC(5).saveEditQuiz())}),ds(14,`span`,6),nI(15,`Save`),zu()(),ds(16,`button`,55),Cn$1(`click`,function(){Zd(e);return Yd(IC(5).cancelEditQuiz())}),ds(17,`span`,6),nI(18,`Cancel`),zu()()()()}if(i&2){let e=IC(5);iE(),Eg(`ngModel`,e.editQuizQuestion),zp(`placeholder`,e.translateService.translate(`Quiz question`)()),QE(),iE(),fC(e.editQuizOptions()),iE(2),zp(`text`,!0),iE(5),zp(`binary`,!0),Eg(`ngModel`,e.editQuizRevealAnswer),QE(),iE(7),zp(`text`,!0)}}function vi(i,s){i&1&&Wp(0,`i`,19)}function Ci(i,s){if(i&1&&(ds(0,`li`),nI(1),aC(2,vi,1,0,`i`,19),zu()),i&2){let e=s.$implicit,n=s.$index,t=IC(2).$implicit;Eo(`font-semibold`,n===t.correctOptionIndex),iE(),Qu(` `,e),iE(),cC(n===t.correctOptionIndex?2:-1)}}function xi(i,s){if(i&1){let e=vC();ds(0,`div`,59)(1,`div`)(2,`span`,15),nI(3),zu(),ds(4,`ul`,60),dC(5,Ci,3,4,`li`,66,uC),zu()(),ds(7,`div`,61)(8,`button`,55),Cn$1(`click`,function(){Zd(e);let t=IC().$implicit;return Yd(IC(4).startEditQuiz(t))}),Wp(9,`i`,62),zu(),ds(10,`button`,22),Cn$1(`click`,function(){Zd(e);let t=IC().$implicit;return Yd(IC(4).deleteQuiz(t))}),Wp(11,`i`,23),zu()()()}if(i&2){let e=IC().$implicit;iE(3),yg(e.question),iE(2),fC(e.options),iE(3),zp(`text`,!0),iE(2),zp(`text`,!0)}}function yi(i,s){if(i&1&&(ds(0,`div`,47),aC(1,fi,19,6,`div`,58)(2,xi,12,3,`div`,59),zu()),i&2){let e=s.$implicit,n=IC(4);iE(),cC(n.editingQuizId()===e._id?1:2)}}function ki(i,s){if(i&1){let e=vC();ds(0,`button`,63),Cn$1(`click`,function(){Zd(e);return Yd(IC(4).toggleQuizGroup())}),ds(1,`span`),nI(2),zu()()}if(i&2){let e=IC(4);iE(2),yg(e.allQuizzesActive()?e.translateService.translate(`Deactivate quiz`)():e.translateService.translate(`Activate quiz`)())}}function Mi(i,s){if(i&1){let e=vC();ds(0,`div`,2)(1,`h1`,3),nI(2,`Manage event`),zu(),ds(3,`a`,24),Wp(4,`i`,25),ds(5,`span`,6),nI(6,`View statistics`),zu()()(),ds(7,`p-card`)(8,`div`,2)(9,`p-selectButton`,26),Cn$1(`ngModelChange`,function(t){Zd(e);return Yd(IC(3).setEventState(t))}),zu(),ZE(),zu(),ds(10,`div`,27),nI(11,`Lecture date and time`),zu(),ds(12,`div`,28)(13,`div`,29)(14,`small`,30)(15,`span`,6),nI(16,`Date`),zu(),nI(17,` *`),zu(),ds(18,`div`,31)(19,`input`,32),_g(`ngModelChange`,function(t){Zd(e);let o=IC(3);return iI(o.eventDateDraft,t)||(o.eventDateDraft=t),Yd(t)}),zu(),ZE(),zu()(),ds(20,`div`,33)(21,`small`,30)(22,`span`,6),nI(23,`Start`),zu(),nI(24,` *`),zu(),ds(25,`app-time-scroll-input`,34),_g(`ngModelChange`,function(t){Zd(e);let o=IC(3);return iI(o.eventStartTimeDraft,t)||(o.eventStartTimeDraft=t),Yd(t)}),zu(),ZE(),zu(),ds(26,`div`,33)(27,`small`,30)(28,`span`,6),nI(29,`End`),zu(),nI(30,` *`),zu(),ds(31,`app-time-scroll-input`,34),_g(`ngModelChange`,function(t){Zd(e);let o=IC(3);return iI(o.eventEndTimeDraft,t)||(o.eventEndTimeDraft=t),Yd(t)}),zu(),ZE(),zu()(),aC(32,ni,2,0,`small`,35),ds(33,`div`,27),nI(34,`Lecture`),zu(),ds(35,`div`,11)(36,`p-select`,36),_g(`ngModelChange`,function(t){Zd(e);let o=IC(3);return iI(o.eventLectureIdDraft,t)||(o.eventLectureIdDraft=t),Yd(t)}),zu(),ZE(),aC(37,ii,4,1,`button`,37)(38,oi,9,3,`div`,38),zu(),ds(39,`div`,39)(40,`input`,40),_g(`ngModelChange`,function(t){Zd(e);let o=IC(3);return iI(o.eventTitleDraft,t)||(o.eventTitleDraft=t),Yd(t)}),zu(),ZE(),ds(41,`input`,40),_g(`ngModelChange`,function(t){Zd(e);let o=IC(3);return iI(o.eventSlugDraft,t)||(o.eventSlugDraft=t),Yd(t)}),zu(),ZE(),ds(42,`input`,40),_g(`ngModelChange`,function(t){Zd(e);let o=IC(3);return iI(o.eventSpeakerDraft,t)||(o.eventSpeakerDraft=t),Yd(t)}),zu(),ZE(),ds(43,`textarea`,41),_g(`ngModelChange`,function(t){Zd(e);let o=IC(3);return iI(o.eventDescriptionDraft,t)||(o.eventDescriptionDraft=t),Yd(t)}),zu(),ZE(),ds(44,`button`,42),Cn$1(`click`,function(){Zd(e);return Yd(IC(3).saveEventInfo())}),ds(45,`span`,6),nI(46,`Save`),zu()()()(),ds(47,`p-card`)(48,`div`,7),nI(49,`Polls`),zu(),ds(50,`div`,11)(51,`input`,40),_g(`ngModelChange`,function(t){Zd(e);let o=IC(3);return iI(o.newPollQuestion,t)||(o.newPollQuestion=t),Yd(t)}),zu(),ZE(),dC(52,li,3,3,`div`,43,uC),ds(54,`button`,44),Cn$1(`click`,function(){Zd(e);return Yd(IC(3).addNewPollOption())}),Wp(55,`i`,45),ds(56,`span`,6),nI(57,`Add option`),zu()(),ds(58,`button`,46),Cn$1(`click`,function(){Zd(e);return Yd(IC(3).createPoll())}),ds(59,`span`,6),nI(60,`Add question`),zu()()(),ds(61,`div`,39),dC(62,pi,3,1,`div`,47,ke),zu(),aC(64,_i,3,1,`button`,48),zu(),ds(65,`p-card`)(66,`div`,7),nI(67,`Quizzes`),zu(),ds(68,`div`,11)(69,`input`,40),_g(`ngModelChange`,function(t){Zd(e);let o=IC(3);return iI(o.newQuizQuestion,t)||(o.newQuizQuestion=t),Yd(t)}),zu(),ZE(),dC(70,gi,4,6,`div`,43,uC),ds(72,`button`,44),Cn$1(`click`,function(){Zd(e);return Yd(IC(3).addNewQuizOption())}),Wp(73,`i`,45),ds(74,`span`,6),nI(75,`Add option`),zu()(),ds(76,`label`,49)(77,`p-checkbox`,50),_g(`ngModelChange`,function(t){Zd(e);let o=IC(3);return iI(o.newQuizRevealAnswer,t)||(o.newQuizRevealAnswer=t),Yd(t)}),zu(),ZE(),ds(78,`span`,6),nI(79,`Show correct answer to participants`),zu()(),ds(80,`button`,46),Cn$1(`click`,function(){Zd(e);return Yd(IC(3).createQuiz())}),ds(81,`span`,6),nI(82,`Add question`),zu()()(),ds(83,`div`,39),dC(84,yi,3,1,`div`,47,ke),zu(),aC(86,ki,3,1,`button`,48),zu(),ds(87,`button`,51),Cn$1(`click`,function(){Zd(e);return Yd(IC(3).startSession())}),Wp(88,`i`,52),ds(89,`span`,6),nI(90,`Done`),zu()()}if(i&2){let e=IC(2),n=IC();iE(3),zp(`routerLink`,fI(32,ln)),iE(6),zp(`options`,n.stateOptions)(`ngModel`,e.state),QE(),iE(10),Eg(`ngModel`,n.eventDateDraft),QE(),iE(6),Eg(`ngModel`,n.eventStartTimeDraft),QE(),iE(6),Eg(`ngModel`,n.eventEndTimeDraft),QE(),iE(),cC(n.scheduleValid()?-1:32),iE(4),zp(`options`,n.lectures()),Eg(`ngModel`,n.eventLectureIdDraft),zp(`placeholder`,n.translateService.translate(`Choose a lecture`)())(`showClear`,!0),QE(),iE(),cC(n.isAddingLecture()?38:37),iE(3),Eg(`ngModel`,n.eventTitleDraft),zp(`placeholder`,n.translateService.translate(`Title`)()),QE(),iE(),Eg(`ngModel`,n.eventSlugDraft),zp(`placeholder`,n.translateService.translate(`Public link (slug)`)()),QE(),iE(),Eg(`ngModel`,n.eventSpeakerDraft),zp(`placeholder`,n.translateService.translate(`Speaker`)()),QE(),iE(),Eg(`ngModel`,n.eventDescriptionDraft),zp(`placeholder`,n.translateService.translate(`Description`)()),QE(),iE(),zp(`disabled`,!n.scheduleValid()),iE(7),Eg(`ngModel`,n.newPollQuestion),zp(`placeholder`,n.translateService.translate(`Poll question`)()),QE(),iE(),fC(n.newPollOptions()),iE(2),zp(`text`,!0),iE(8),fC(n.polls()),iE(2),cC(n.polls().length?64:-1),iE(5),Eg(`ngModel`,n.newQuizQuestion),zp(`placeholder`,n.translateService.translate(`Quiz question`)()),QE(),iE(),fC(n.newQuizOptions()),iE(2),zp(`text`,!0),iE(5),zp(`binary`,!0),Eg(`ngModel`,n.newQuizRevealAnswer),QE(),iE(7),fC(n.quizzes()),iE(2),cC(n.quizzes().length?86:-1),iE(),zp(`disabled`,!n.scheduleValid())}}function wi(i,s){if(i&1&&(ds(0,`div`,1),aC(1,ti,34,7)(2,Mi,91,33),zu()),i&2){let e=IC(2);iE(),cC(e.fragment()===`questions`?1:2)}}function Ei(i,s){i&1&&(ds(0,`div`,0),Wp(1,`i`,67),ds(2,`h1`,3),nI(3,`Not your event`),zu(),ds(4,`p`,68),nI(5,` You're signed in, but you're not the owner of this event. `),zu()())}function Di(i,s){if(i&1&&aC(0,wi,3,1,`div`,1)(1,Ei,6,0,`div`,0),i&2)cC(IC().isOwner()?0:1)}function Si(i,s){i&1&&(ds(0,`div`,0),Wp(1,`i`,69),ds(2,`h1`,3),nI(3,`Event not found`),zu(),ds(4,`p`,68),nI(5,` We couldn't find an event for this link. `),zu()())}var ka=(()=>{class i$1{constructor(){this.translateService=g(ym),this._router=g(we),this._route=g(Me),this._messageService=g(wn$1),this._userService=g(Ue),this._eventService=g(j),this._lectureService=g(F$1),this._questionService=g(et$1),this._pollService=g(He),this._pollAnswerService=g(ce),this._quizService=g(st),this._quizAnswerService=g(ct),this._changeDetectorRef=g(wo),this.slug=il.required(),this.fragment=F(this._route.fragment,{initialValue:this._route.snapshot.fragment}),this.event=In$1(()=>this._eventService.bySlug(this.slug())??(this.slug()===`test-1`?o:null)),this.isOwner=In$1(()=>{let e=this.event();if(e?.slug===`test-1`)return!0;let n=this._userService.user()?._id;return!!e&&!!n&&e.owner===n}),this.lectures=this._lectureService.items,this.isDemoEvent=In$1(()=>this.event()?.slug===t),this.questions=In$1(()=>{let e=this.event();if(!e)return[];let n$1=this._questionService.byEvent(e.lectureId||e._id);return n$1.length||!this.isDemoEvent()?n$1:n.filter(t=>!this._removedDemoQuestionIds().has(t._id))}),this.polls=In$1(()=>{let e=this.event();if(!e)return[];let n=this._pollService.byEvent(e._id);return n.length||!this.isDemoEvent()?n:i}),this.quizzes=In$1(()=>{let e=this.event();if(!e)return[];let n=this._quizService.byEvent(e._id);return n.length||!this.isDemoEvent()?n:d}),this._removedDemoQuestionIds=te(new Set),this.stats=In$1(()=>{let e=this.isDemoEvent()&&this.polls()===i,n=this.isDemoEvent()&&this.quizzes()===d;return{questionCount:this.questions().length,totalLikes:this.questions().reduce((t,o)=>t+o.likes,0),pollAnswerCount:e?this.polls().reduce((t,o)=>t+this.pollResults(o).reduce((u,N)=>u+N.votes,0),0):this.polls().reduce((t,o)=>t+this._pollAnswerService.all().filter(u=>u.pollId===o._id).length,0),quizAnswerCount:n?this.quizzes().reduce((t,o)=>t+this.quizResults(o).reduce((u,N)=>u+N.votes,0),0):this.quizzes().reduce((t,o)=>t+this._quizAnswerService.all().filter(u=>u.quizId===o._id).length,0)}}),this.stateOptions=[{label:`draft`,value:`draft`},{label:`live`,value:`live`},{label:`ended`,value:`ended`}],this.eventTitleDraft=te(``),this.eventSlugDraft=te(``),this.eventSpeakerDraft=te(``),this.eventDescriptionDraft=te(``),this.eventDateDraft=te(``),this.eventStartTimeDraft=te(``),this.eventEndTimeDraft=te(``),this.eventLectureIdDraft=te(``),this.isAddingLecture=te(!1),this.newLectureTitle=te(``),this.scheduleValid=In$1(()=>!!this.eventDateDraft()&&!!this.eventStartTimeDraft()&&!!this.eventEndTimeDraft()),this.optionLabel=In$1(()=>this.translateService.translate(`Option`)()),this.newPollQuestion=te(``),this.newPollOptions=te([``,``]),this.newQuizQuestion=te(``),this.newQuizOptions=te([``,``]),this.newQuizCorrectIndex=te(0),this.newQuizRevealAnswer=te(!1),this.editingPollId=te(null),this.editPollQuestion=te(``),this.editPollOptions=te([]),this.editingQuizId=te(null),this.editQuizQuestion=te(``),this.editQuizOptions=te([]),this.editQuizCorrectIndex=te(0),this.editQuizRevealAnswer=te(!1),this.allPollsActive=In$1(()=>{let e=this.polls();return e.length>0&&e.every(n=>n.active)}),this.allQuizzesActive=In$1(()=>{let e=this.quizzes();return e.length>0&&e.every(n=>n.active)})}ngOnInit(){let e=this.event();this.eventTitleDraft.set(e?.title??``),this.eventSlugDraft.set(e?.slug??``),this.eventSpeakerDraft.set(this._userService.user()?.name||e?.speaker||``),this.eventDescriptionDraft.set(e?.description??``),this.eventDateDraft.set(e?.date??``),this.eventStartTimeDraft.set(e?.startTime??``),this.eventEndTimeDraft.set(e?.endTime??``),this.eventLectureIdDraft.set(e?.lectureId??``),e&&(this._questionService.loadEvent(e.lectureId||e._id),this._pollService.loadEvent(e._id),this._quizService.loadEvent(e._id),this._pollAnswerService.loadAll()),queueMicrotask(()=>{e&&!this.isOwner()&&this._router.navigateByUrl(`/profile`)})}toggleAddLecture(){this.isAddingLecture.update(e=>!e)}createLecture(){let e=this.newLectureTitle().trim();if(!e)return;let n=this._lectureService.create(s(r({},Ho),{title:e}));this.eventLectureIdDraft.set(n._id),this.newLectureTitle.set(``),this.isAddingLecture.set(!1)}saveEventInfo(){let e=this.event();if(!e)return;if(!this.scheduleValid()){this._messageService.add({severity:`error`,detail:this.translateService.translate(`Date and time are required.`)()});return}let n=this.eventSlugDraft().trim()||e.slug;this._eventService.update(e._id,{slug:n,title:this.eventTitleDraft().trim(),speaker:this.eventSpeakerDraft().trim(),description:this.eventDescriptionDraft().trim(),date:this.eventDateDraft(),startTime:this.eventStartTimeDraft(),endTime:this.eventEndTimeDraft(),lectureId:this.eventLectureIdDraft()}),n!==e.slug&&(this.eventSlugDraft.set(n),this._router.navigate([`/event`,n,`manage`],{fragment:this.fragment()??void 0}))}setEventState(e){let n=this.event();n&&this._eventService.update(n._id,{state:e})}startSession(){if(!this.scheduleValid()){this._messageService.add({severity:`error`,detail:this.translateService.translate(`Date and time are required.`)()});return}this.saveEventInfo(),this.event()?.state===`draft`&&this.setEventState(`live`),this._messageService.add({severity:`success`,detail:this.translateService.translate(`Saved`)()}),this._router.navigateByUrl(`/lectures-manage`)}deleteQuestion(e){if(e._id.startsWith(`demo-`)){this._removedDemoQuestionIds.update(n=>new Set(n).add(e._id));return}this._questionService.removeQuestion(e)}addNewPollOption(){this._addOption(this.newPollOptions)}removeNewPollOption(e){this._removeOption(this.newPollOptions,e)}updateNewPollOption(e,n){this._updateOption(this.newPollOptions,e,n)}createPoll(){let e=this.newPollQuestion().trim(),n=this._trimOptions(this.newPollOptions()),t=this.event();!e||n.length<2||!t||(this._pollService.create(s(r({},nn),{eventId:t._id,question:e,options:n})).subscribe(),this.newPollQuestion.set(``),this.newPollOptions.set([``,``]))}togglePollGroup(){let e=!this.allPollsActive();for(let n of this.polls())this._pollService.update(s(r({},n),{active:e})).subscribe();this._changeDetectorRef.markForCheck()}pollResults(e){return s$1[e._id]??this._pollAnswerService.results(e)}addEditPollOption(){this._addOption(this.editPollOptions)}removeEditPollOption(e){this._removeOption(this.editPollOptions,e)}updateEditPollOption(e,n){this._updateOption(this.editPollOptions,e,n)}startEditPoll(e){this.editingPollId.set(e._id),this.editPollQuestion.set(e.question),this.editPollOptions.set([...e.options])}saveEditPoll(){let e=this.editingPollId(),n=e?this._pollService.byId(e):void 0,t=this.editPollQuestion().trim(),o=this._trimOptions(this.editPollOptions());!n||!t||o.length<2||(this._pollService.update(s(r({},n),{question:t,options:o})).subscribe(),this.cancelEditPoll())}cancelEditPoll(){this.editingPollId.set(null),this.editPollQuestion.set(``),this.editPollOptions.set([])}deletePoll(e){this._pollService.delete(e).subscribe(),this.editingPollId()===e._id&&this.cancelEditPoll()}addNewQuizOption(){this._addOption(this.newQuizOptions)}removeNewQuizOption(e){this._removeOption(this.newQuizOptions,e)}updateNewQuizOption(e,n){this._updateOption(this.newQuizOptions,e,n)}createQuiz(){let e=this.newQuizQuestion().trim(),n=this._trimOptions(this.newQuizOptions()),t=this.event();!e||n.length<2||!t||(this._quizService.create(s(r({},on),{eventId:t._id,question:e,options:n,correctOptionIndex:Math.min(this.newQuizCorrectIndex(),n.length-1),revealAnswer:this.newQuizRevealAnswer()})).subscribe(),this.newQuizQuestion.set(``),this.newQuizOptions.set([``,``]),this.newQuizCorrectIndex.set(0),this.newQuizRevealAnswer.set(!1))}toggleQuizGroup(){let e=!this.allQuizzesActive();for(let n of this.quizzes())this._quizService.update(s(r({},n),{active:e})).subscribe();this._changeDetectorRef.markForCheck()}quizResults(e){return r$1[e._id]??this._quizAnswerService.results(e)}addEditQuizOption(){this._addOption(this.editQuizOptions)}removeEditQuizOption(e){this._removeOption(this.editQuizOptions,e)}updateEditQuizOption(e,n){this._updateOption(this.editQuizOptions,e,n)}startEditQuiz(e){this.editingQuizId.set(e._id),this.editQuizQuestion.set(e.question),this.editQuizOptions.set([...e.options]),this.editQuizCorrectIndex.set(e.correctOptionIndex),this.editQuizRevealAnswer.set(e.revealAnswer)}saveEditQuiz(){let e=this.editingQuizId(),n=e?this._quizService.byId(e):void 0,t=this.editQuizQuestion().trim(),o=this._trimOptions(this.editQuizOptions());!n||!t||o.length<2||(this._quizService.update(s(r({},n),{question:t,options:o,correctOptionIndex:Math.min(this.editQuizCorrectIndex(),o.length-1),revealAnswer:this.editQuizRevealAnswer()})).subscribe(),this.cancelEditQuiz())}cancelEditQuiz(){this.editingQuizId.set(null),this.editQuizQuestion.set(``),this.editQuizOptions.set([]),this.editQuizCorrectIndex.set(0),this.editQuizRevealAnswer.set(!1)}deleteQuiz(e){this._quizService.delete(e).subscribe(),this.editingQuizId()===e._id&&this.cancelEditQuiz()}_trimOptions(e){return e.map(n=>n.trim()).filter(n=>n.length>0)}_addOption(e){e.update(n=>[...n,``])}_removeOption(e,n){e.update(t=>t.length>2?t.filter((o,u)=>u!==n):t)}_updateOption(e,n,t){e.update(o=>o.map((u,N)=>N===n?t:u))}static{this.ɵfac=function(n){return new(n||i$1)}}static{this.ɵcmp=V_({type:i$1,selectors:[[`app-event-manage`]],inputs:{slug:[1,`slug`]},decls:2,vars:1,consts:[[1,`mx-auto`,`flex`,`w-full`,`max-w-[480px]`,`flex-col`,`items-center`,`gap-3`,`p-8`,`text-center`],[1,`mx-auto`,`flex`,`w-full`,`max-w-[960px]`,`flex-col`,`gap-4`,`p-4`],[1,`flex`,`items-center`,`justify-between`,`gap-3`],[`translate`,``,1,`m-0`,`text-xl`,`font-semibold`],[1,`flex`,`items-center`,`gap-2`,`text-sm`,`opacity-70`,`hover:opacity-100`,3,`routerLink`],[1,`pi`,`pi-arrow-left`],[`translate`,``],[`translate`,``,1,`text-sm`,`font-semibold`],[1,`mt-2`,`grid`,`grid-cols-3`,`gap-3`],[1,`rounded-card`,`border`,`border-[var(--c-border)]`,`p-3`,`text-center`],[1,`text-lg`,`font-semibold`],[1,`mt-2`,`flex`,`flex-col`,`gap-2`],[1,`flex`,`items-center`,`justify-between`,`gap-3`,`rounded-card`,`border`,`border-[var(--c-border)]`,`px-3`,`py-2`,`text-sm`],[1,`mt-2`,`flex`,`flex-col`,`gap-3`],[1,`rounded-card`,`border`,`border-[var(--c-border)]`,`p-3`],[1,`font-semibold`],[1,`mt-2`,`flex`,`flex-col`,`gap-1`,`text-sm`],[1,`flex`,`justify-between`],[1,`flex`,`justify-between`,3,`font-semibold`],[1,`pi`,`pi-check`,`text-xs`],[1,`flex`,`flex-col`],[1,`opacity-60`],[`pButton`,``,`type`,`button`,`severity`,`danger`,3,`click`,`text`],[1,`pi`,`pi-trash`],[`fragment`,`questions`,1,`flex`,`items-center`,`gap-2`,`text-sm`,`opacity-70`,`hover:opacity-100`,3,`routerLink`],[1,`pi`,`pi-chart-bar`],[`optionLabel`,`label`,`optionValue`,`value`,3,`ngModelChange`,`options`,`ngModel`],[`translate`,``,1,`mt-3`,`text-sm`,`font-semibold`],[1,`mt-2`,`grid`,`grid-cols-1`,`gap-3`,`sm:grid-cols-3`],[1,`flex`,`flex-1`,`flex-col`,`gap-1`],[1,`opacity-70`],[1,`flex`,`flex-1`],[`pInputText`,``,`type`,`date`,`lang`,`uk-UA`,1,`h-full`,`w-full`,3,`ngModelChange`,`ngModel`],[1,`flex`,`flex-col`,`gap-1`],[1,`w-full`,3,`ngModelChange`,`ngModel`],[`translate`,``,1,`mt-1`,`text-[var(--c-danger,#e11d48)]`],[`optionLabel`,`title`,`optionValue`,`_id`,1,`w-full`,3,`ngModelChange`,`options`,`ngModel`,`placeholder`,`showClear`],[`pButton`,``,`type`,`button`,1,`self-start`,3,`text`],[1,`flex`,`flex-col`,`gap-2`,`sm:flex-row`],[1,`mt-3`,`flex`,`flex-col`,`gap-2`],[`pInputText`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`pTextarea`,``,`rows`,`2`,3,`ngModelChange`,`ngModel`,`placeholder`],[`pButton`,``,`type`,`button`,3,`click`,`disabled`],[1,`flex`,`items-center`,`gap-2`],[`pButton`,``,`type`,`button`,1,`self-start`,3,`click`,`text`],[1,`pi`,`pi-plus`],[`pButton`,``,`type`,`button`,3,`click`],[1,`rounded-card`,`border`,`border-[var(--c-border)]`,`px-3`,`py-2`,`text-sm`],[`pButton`,``,`type`,`button`,1,`mt-3`,`w-full`],[1,`flex`,`items-center`,`gap-2`,`text-sm`],[3,`ngModelChange`,`binary`,`ngModel`],[`pButton`,``,`type`,`button`,1,`w-full`,3,`click`,`disabled`],[1,`pi`,`pi-check`],[`pInputText`,``,1,`w-full`,3,`ngModelChange`,`ngModel`,`placeholder`],[1,`flex`,`gap-2`],[`pButton`,``,`type`,`button`,3,`click`,`text`],[`pButton`,``,`type`,`button`,3,`text`],[1,`pi`,`pi-times`],[1,`flex`,`flex-col`,`gap-2`],[1,`flex`,`items-start`,`justify-between`,`gap-3`],[1,`m-0`,`mt-1`,`list-disc`,`pl-4`,`opacity-80`],[1,`flex`,`shrink-0`,`gap-1`],[1,`pi`,`pi-pencil`],[`pButton`,``,`type`,`button`,1,`mt-3`,`w-full`,3,`click`],[`type`,`radio`,`pRadioButton`,``,`name`,`new-quiz-correct`,3,`ngModelChange`,`value`,`ngModel`,`title`],[`type`,`radio`,`pRadioButton`,``,`name`,`edit-quiz-correct`,3,`ngModelChange`,`value`,`ngModel`,`title`],[3,`font-semibold`],[1,`pi`,`pi-lock`,`text-3xl`,`opacity-60`],[`translate`,``,1,`m-0`,`text-sm`,`opacity-70`],[1,`pi`,`pi-search`,`text-3xl`,`opacity-60`]],template:function(n,t){if(n&1&&aC(0,Di,2,1)(1,Si,6,0,`div`,0),n&2){let o;cC((o=t.event())?0:1,o)}},dependencies:[fo,ho,Ve,Me$1,Kt,Te,nt,et,xe,Ae$2,_t$1,Cs,Ci$1,tn,Be,O,L$1,an,r2,Mm,zb,JB,Ub,OB],styles:[`[_nghost-%COMP%]{display:block}`]})}}return i$1})();export{ka as EventManageComponent};