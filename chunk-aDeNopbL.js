import{n as s,t as r}from"./chunk-Btz99zWn.js";import{An as gw,Bn as kI,Br as yI,Bt as Yp,Cn as fh,D as Ih,Dn as gC,Dr as uu,En as g,Fr as wh,Ft as YI,G as O,Gn as mI,Gr as zL,Hr as yr,Ht as ZL,K as OE,Kt as Zp,Lt as Yi,Mt as Xp,Or as uw,Ot as Wv,Pn as ih,Pt as YE,Qn as nw,R as Li,Rt as Yl,T as Hp,Tr as ui,Vt as ZI,Wn as lw,Wr as zI,Z as PD,_ as FD,_n as eP,bn as ew,br as th,bt as Up,cr as qL,er as oh,fr as rw,gn as eI,h as Ef,ht as Th,ir as ou,jr as vI,k as JE,lr as qp,mr as sI,nn as b,nt as QE,on as cC,ot as Ql,pn as dI,pt as Sh,qr as zw,qt as _E,rn as bh,sr as qI,vr as sw,vt as UL,xn as fC,xt as Uw,yt as Uo}from"./chunk-BGIC4sMI.js";import"./chunk-Cb8viEt-.js";import{c as ie}from"./chunk-D1HyGICr.js";import"./chunk-CgYOuAZt.js";import{f as hn,i as Se,m as ln$1,p as kt$1,r as Rt$1,v as te}from"./chunk-P-nRs11z.js";import{i as Z}from"./chunk-BMkbMgea.js";import{K as Dn,L as e,O as ze,Y as H,at as Ps,ft as Wi,gt as _t$1,it as Pn,q as Ds,rt as Ot$1,tt as Nn}from"./main-6Q42W4VE.js";import{n as re,t as ke}from"./chunk-D0Ib4r5n.js";import{t as D}from"./chunk-CuktrhQc.js";import{n as Ve,t as Me$1}from"./chunk-5dGle5P9.js";import{c as ho,l as le,s as fo}from"./chunk-BSSyUtgE.js";import{n as et,r as nt}from"./chunk-DPDscUmv.js";import{n as O$1,t as L}from"./chunk-CoZOSV16.js";import{t as c}from"./chunk-E-cqrGGm.js";import{i as V,n as N,o as k,r as Q,s as z,t as K}from"./chunk-D-mjXPXm.js";import{t as I}from"./chunk-BX9z_37S.js";import{n,r as o,t as e$1}from"./chunk-B3x-tnsx.js";var gt=`
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
`;var Tt=[`icon`];var Bt=[`content`];var ft=i=>({$implicit:i});function kt(i,c){i&1&&Xp(0)}function Nt(i,c){if(i&1&&Yp(0,`span`,0),i&2){let e=dI(3);kI(e.cn(e.cx(`icon`),e.checked?e.onIcon():e.offIcon(),e.iconPos()===`left`?e.cx(`iconLeft`):e.cx(`iconRight`))),Zp(`pBind`,e.ptm(`icon`))}}function Lt(i,c){if(i&1&&YE(0,Nt,1,3,`span`,2),i&2){let e=dI(2);QE(e.onIcon()||e.offIcon()?0:-1)}}function It(i,c){i&1&&Xp(0)}function Ot(i,c){if(i&1&&Up(0,It,1,0,`ng-container`,1),i&2){let e=dI(2);Zp(`ngTemplateOutlet`,e.iconTemplate()||e._iconTemplate)(`ngTemplateOutletContext`,nw(2,ft,e.checked))}}function Vt(i,c){if(i&1&&(YE(0,Lt,1,1)(1,Ot,1,4,`ng-container`),Li(2,`span`,0),zI(3),ou()),i&2){let e=dI();QE(e.iconTemplate()?1:0),Wv(2),kI(e.cx(`label`)),Zp(`pBind`,e.ptm(`label`)),Wv(),Ih(e.checked?e.hasOnLabel?e.onLabel():e.nbsp:e.hasOffLabel?e.offLabel():e.nbsp)}}var zt=`
    ${gt}

    /* For ngx-prime (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`;var Ft=i=>typeof i.checked==`function`?i.checked():i.checked;var At={root:({instance:i})=>[`p-togglebutton p-component`,{"p-togglebutton-checked":Ft(i),"p-invalid":i.invalid(),"p-disabled":i.$disabled(),"p-togglebutton-sm p-inputfield-sm":i.size()===`small`,"p-togglebutton-lg p-inputfield-lg":i.size()===`large`,"p-togglebutton-fluid":i.fluid()}],content:`p-togglebutton-content`,icon:`p-togglebutton-icon`,iconLeft:`p-togglebutton-icon-left`,iconRight:`p-togglebutton-icon-right`,label:`p-togglebutton-label`};var De=(()=>{class i extends H{name=`togglebutton`;style=zt;classes=At;static ɵfac=(()=>{let e;return function(n){return(e||(e=Ef(i)))(n||i)}})();static ɵprov=O({token:i,factory:i.ɵfac})}return i})();var mt=new b(`TOGGLEBUTTON_INSTANCE`);var Qt={provide:te,useExisting:Uo(()=>Me),multi:!0};var Me=(()=>{class i extends c{componentName=`ToggleButton`;nbsp=`\xA0`;$pcToggleButton=g(mt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Ds,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}constructor(){super(),eP()&&console.warn("`<p-togglebutton>` is deprecated and will be removed in a future major version. Use a native `<button pToggleButton>` instead.")}onKeyDown(e){switch(e.code){case`Enter`:this.toggle(e),e.preventDefault();break;case`Space`:this.toggle(e),e.preventDefault();break}}toggle(e){!this.$disabled()&&!(this.allowEmpty()===!1&&this.checked)&&(this.checked=!this.checked,this.writeModelValue(this.checked),this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onLabel=zL(`Yes`);offLabel=zL(`No`);onIcon=zL();offIcon=zL();ariaLabel=zL();ariaLabelledBy=zL();styleClass=zL();inputId=zL();tabindex=zL(0,{transform:zw});iconPos=zL(`left`);autofocus=zL(void 0,{transform:Uw});size=zL();allowEmpty=zL();fluid=zL(void 0,{transform:Uw});onChange=UL();iconTemplate=qL(`icon`,{descendants:!1});contentTemplate=qL(`content`,{descendants:!1});templates=ZL(Dn);checked=!1;onInit(){(this.checked===null||this.checked===void 0)&&(this.checked=!1)}_componentStyle=g(De);onBlur(){this.onModelTouched()}get hasOnLabel(){return this.onLabel()&&this.onLabel().length>0}get hasOffLabel(){return this.offLabel()&&this.offLabel().length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`icon`:this._iconTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}writeControlValue(e,t){this.checked=e,t(e),this.cd.markForCheck()}get dataP(){return this.cn({checked:this.active,invalid:this.invalid(),[this.size()]:this.size()})}static ɵfac=function(t){return new(t||i)};static ɵcmp=_E({type:i,selectors:[[`p-toggleButton`],[`p-togglebutton`],[`p-toggle-button`]],contentQueries:function(t,n,o){t&1&&ih(o,n.iconTemplate,Tt,4)(o,n.contentTemplate,Bt,4)(o,n.templates,Dn,4),t&2&&vI(3)},hostVars:13,hostBindings:function(t,n){t&1&&th(`keydown`,function(p){return n.onKeyDown(p)})(`click`,function(p){return n.toggle(p)}),t&2&&(qp(`aria-labelledby`,n.ariaLabelledBy())(`aria-label`,n.ariaLabel())(`aria-pressed`,n.checked?`true`:`false`)(`aria-disabled`,n.$disabled()||null)(`aria-invalid`,n.invalid()||null)(`role`,`button`)(`tabindex`,n.tabindex()!==void 0?n.tabindex():n.$disabled()?-1:0)(`data-pc-name`,`togglebutton`)(`data-p-checked`,n.active)(`data-p-disabled`,n.$disabled())(`data-p`,n.dataP),kI(n.cn(n.cx(`root`),n.styleClass())))},inputs:{onLabel:[1,`onLabel`],offLabel:[1,`offLabel`],onIcon:[1,`onIcon`],offIcon:[1,`offIcon`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],styleClass:[1,`styleClass`],inputId:[1,`inputId`],tabindex:[1,`tabindex`],iconPos:[1,`iconPos`],autofocus:[1,`autofocus`],size:[1,`size`],allowEmpty:[1,`allowEmpty`],fluid:[1,`fluid`]},outputs:{onChange:`onChange`},features:[ew([Qt,De,{provide:mt,useExisting:i},{provide:Wi,useExisting:i}]),OE([le,Ds]),Hp],decls:3,vars:9,consts:[[3,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`class`,`pBind`]],template:function(t,n){t&1&&(Li(0,`span`,0),Up(1,kt,1,0,`ng-container`,1),YE(2,Vt,4,5),ou()),t&2&&(kI(n.cx(`content`)),Zp(`pBind`,n.ptm(`content`)),qp(`data-p`,n.dataP),Wv(),Zp(`ngTemplateOutlet`,n.contentTemplate()||n._contentTemplate)(`ngTemplateOutletContext`,nw(7,ft,n.checked)),Wv(),QE(n.contentTemplate()?-1:2))},dependencies:[gC,cC,Pn,Ps,Ds],encapsulation:2})}return i})();var ht=`
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
`;var qt=[`item`];var $t=(i,c)=>({$implicit:i,index:c});function Ht(i,c){return this.getOptionLabel(c)}function Wt(i,c){i&1&&Xp(0)}function Rt(i,c){if(i&1&&Up(0,Wt,1,0,`ng-container`,3),i&2){let e=dI(2),t=e.$implicit,n=e.$index,o=dI();Zp(`ngTemplateOutlet`,o.itemTemplate||o._itemTemplate)(`ngTemplateOutletContext`,rw(2,$t,t,n))}}function jt(i,c){i&1&&Up(0,Rt,1,5,`ng-template`,null,0,lw)}function Kt(i,c){if(i&1){let e=sI();Li(0,`p-togglebutton`,2),th(`onChange`,function(n){let o=Yl(e),p=o.$implicit,y=o.$index;return Ql(dI().onOptionSelect(n,p,y))}),YE(1,jt,2,0),ou(),FD()}if(i&2){let e=c.$implicit,t=dI();Zp(`autofocus`,t.autofocus())(`styleClass`,t.styleClass())(`ngModel`,t.isSelected(e))(`onLabel`,t.getOptionLabel(e))(`offLabel`,t.getOptionLabel(e))(`disabled`,t.$disabled()||t.isOptionDisabled(e))(`allowEmpty`,t.getAllowEmpty())(`size`,t.size())(`fluid`,t.fluid())(`pt`,t.ptm(`pcToggleButton`))(`unstyled`,t.unstyled()),PD(),Wv(),QE(t.itemTemplate||t._itemTemplate?1:-1)}}var Ut=`
    ${ht}

    /* For ngx-prime */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`;var Gt={root:({instance:i})=>[`p-selectbutton p-component`,{"p-invalid":i.invalid(),"p-disabled":i.$disabled(),"p-selectbutton-fluid":i.fluid()}]};var vt=(()=>{class i extends H{name=`selectbutton`;style=Ut;classes=Gt;static ɵfac=(()=>{let e;return function(n){return(e||(e=Ef(i)))(n||i)}})();static ɵprov=O({token:i,factory:i.ɵfac})}return i})();var _t=new b(`SELECTBUTTON_INSTANCE`);var Jt={provide:te,useExisting:Uo(()=>be),multi:!0};var be=(()=>{class i extends c{componentName=`SelectButton`;constructor(){super(),eP()&&console.warn("`<p-selectbutton>` is deprecated and will be removed in a future major version. Use the native `pSelectButton`/`pSelectButtonOption` directives instead.")}options=zL();optionLabel=zL();optionValue=zL();optionDisabled=zL();unselectable=zL(!1,{transform:Uw});tabindex=zL(0,{transform:zw});multiple=zL(void 0,{transform:Uw});allowEmpty=zL(!0,{transform:Uw});styleClass=zL();ariaLabelledBy=zL();ariaLabel=zL();dataKey=zL();autofocus=zL(void 0,{transform:Uw});size=zL();fluid=zL(void 0,{transform:Uw});onOptionClick=UL();onChange=UL();itemTemplate;_itemTemplate;role=gw(()=>this.multiple()?`group`:`radiogroup`);get equalityKey(){return this.optionValue()?null:this.dataKey()}value;focusedIndex=0;_componentStyle=g(vt);$pcSelectButton=g(_t,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Ds,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}getAllowEmpty(){return this.unselectable()?!1:this.multiple()?this.allowEmpty()||this.value?.length!==1:this.allowEmpty()}getOptionLabel(e){let t=this.optionLabel();return t?Ot$1(e,t):e.label!=null?e.label:e}getOptionValue(e){let t=this.optionValue();return t?Ot$1(e,t):this.optionLabel()||e.value===void 0?e:e.value}isOptionDisabled(e){let t=this.optionDisabled();return t?Ot$1(e,t):e.disabled!==void 0?e.disabled:!1}onOptionSelect(e,t,n){if(this.$disabled()||this.isOptionDisabled(t))return;let o=this.isSelected(t);if(o&&this.unselectable())return;let p=this.getOptionValue(t),y;if(this.multiple())o?y=this.value.filter(he=>!_t$1(he,p,this.equalityKey||void 0)):y=this.value?[...this.value,p]:[p];else{if(o&&!this.allowEmpty())return;y=o?null:p}this.focusedIndex=n,this.value=y,this.writeModelValue(this.value),this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:t,index:n})}changeTabIndexes(e,t){let n,o;for(let p=0;p<=this.el.nativeElement.children.length-1;p++)this.el.nativeElement.children[p].getAttribute(`tabindex`)===`0`&&(n={elem:this.el.nativeElement.children[p],index:p});t===`prev`?n.index===0?o=this.el.nativeElement.children.length-1:o=n.index-1:n.index===this.el.nativeElement.children.length-1?o=0:o=n.index+1,this.focusedIndex=o,this.el.nativeElement.children[o].focus()}onFocus(e,t){this.focusedIndex=t}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(t=>!_t$1(t,this.getOptionValue(e),this.dataKey()))}isSelected(e){let t=!1,n=this.getOptionValue(e);if(this.multiple()){if(this.value&&Array.isArray(this.value)){for(let o of this.value)if(_t$1(o,n,this.dataKey())){t=!0;break}}}else t=_t$1(this.getOptionValue(e),this.value,this.equalityKey||void 0);return t}templates=ZL(Dn);onAfterContentInit(){this.templates().forEach(e=>{e.getType()===`item`&&(this._itemTemplate=e.template)})}writeControlValue(e,t){this.value=e,t(this.value),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid()})}static ɵfac=function(t){return new(t||i)};static ɵcmp=_E({type:i,selectors:[[`p-selectButton`],[`p-selectbutton`],[`p-select-button`]],contentQueries:function(t,n,o){if(t&1&&(ih(o,n.templates,Dn,4),oh(o,qt,4)),t&2){vI();let p;mI(p=yI())&&(n.itemTemplate=p.first)}},hostVars:6,hostBindings:function(t,n){t&2&&(qp(`role`,n.role())(`aria-label`,n.ariaLabel()||null)(`aria-labelledby`,n.ariaLabelledBy()||null)(`data-p`,n.dataP),kI(n.cx(`root`)))},inputs:{options:[1,`options`],optionLabel:[1,`optionLabel`],optionValue:[1,`optionValue`],optionDisabled:[1,`optionDisabled`],unselectable:[1,`unselectable`],tabindex:[1,`tabindex`],multiple:[1,`multiple`],allowEmpty:[1,`allowEmpty`],styleClass:[1,`styleClass`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaLabel:[1,`ariaLabel`],dataKey:[1,`dataKey`],autofocus:[1,`autofocus`],size:[1,`size`],fluid:[1,`fluid`]},outputs:{onOptionClick:`onOptionClick`,onChange:`onChange`},features:[ew([Jt,vt,{provide:_t,useExisting:i},{provide:Wi,useExisting:i}]),OE([Ds]),Hp],decls:2,vars:0,consts:[[`content`,``],[3,`autofocus`,`styleClass`,`ngModel`,`onLabel`,`offLabel`,`disabled`,`allowEmpty`,`size`,`fluid`,`pt`,`unstyled`],[3,`onChange`,`autofocus`,`styleClass`,`ngModel`,`onLabel`,`offLabel`,`disabled`,`allowEmpty`,`size`,`fluid`,`pt`,`unstyled`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(t,n){t&1&&JE(0,Kt,2,12,`p-togglebutton`,1,Ht,!0),t&2&&eI(n.options())},dependencies:[Me,hn,ln$1,Rt$1,gC,cC,Pn,Ps],encapsulation:2})}return i})();var Ct=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Yi({type:i});static ɵinj=yr({imports:[be,Pn,Pn]})}return i})();var fe=(i,c)=>c._id;var yt=(i,c)=>c.optionIndex;function Zt(i,c){i&1&&Yp(0,`p-tag`,26)}function Xt(i,c){if(i&1&&(zI(0,` (`),Li(1,`span`,9),zI(2,`avg`),ou(),zI(3),sw(4,`number`)),i&2){dI();let e=YI(16);Wv(3),uu(` `,uw(4,1,e.average,`1.1-1`),`) `)}}function en(i,c){if(i&1){let e=sI();Li(0,`div`,20)(1,`div`,2)(2,`div`,25)(3,`span`),zI(4),ou(),YE(5,Zt,1,0,`p-tag`,26),ou(),Li(6,`div`,27)(7,`button`,28),th(`click`,function(){let n=Yl(e).$implicit;return Ql(dI(3).moveChapter(n,-1))}),Yp(8,`i`,29),ou(),Li(9,`button`,28),th(`click`,function(){let n=Yl(e).$implicit;return Ql(dI(3).moveChapter(n,1))}),Yp(10,`i`,30),ou(),Li(11,`button`,28),th(`click`,function(){let n=Yl(e).$implicit;return Ql(dI(3).activateChapter(n))}),Li(12,`span`,9),zI(13,`Activate`),ou()(),Li(14,`button`,31),th(`click`,function(){let n=Yl(e).$implicit;return Ql(dI(3).deleteChapter(n))}),Yp(15,`i`,32),ou()()(),Sh(16),Li(17,`small`,33)(18,`span`,9),zI(19,`Reactions`),ou(),zI(20),YE(21,Xt,5,4),ou()()}if(i&2){let e=c.$implicit,t=c.$index,n=c.$count;Wv(4),Ih(e.title),Wv(),QE(e.isActive?5:-1),Wv(2),Zp(`text`,!0)(`disabled`,t===0),Wv(2),Zp(`text`,!0)(`disabled`,t===n-1),Wv(2),Zp(`text`,!0)(`disabled`,e.isActive),Wv(3),Zp(`text`,!0),Wv(2);let o=ZI(dI(3).chapterReactionSummary(e));Wv(4),uu(`: `,o.count,` `),Wv(),QE(o.count?21:-1)}}function tn(i,c){if(i&1){let e=sI();Li(0,`div`,22)(1,`div`,34)(2,`span`),zI(3),ou(),Li(4,`small`,35),zI(5),Li(6,`span`,9),zI(7,`likes`),ou()()(),Li(8,`button`,31),th(`click`,function(){let n=Yl(e).$implicit;return Ql(dI(3).deleteQuestion(n))}),Yp(9,`i`,32),ou()()}if(i&2){let e=c.$implicit;Wv(3),Ih(e.text),Wv(2),wh(``,e.authorName,` · `,e.likes,` `),Wv(3),Zp(`text`,!0)}}function nn(i,c){if(i&1&&(Li(0,`div`,38)(1,`span`),zI(2),ou(),Li(3,`span`),zI(4),ou()()),i&2){let e=c.$implicit,t=dI().$implicit;Wv(2),Ih(t.options[e.optionIndex]),Wv(2),Ih(e.votes)}}function on(i,c){if(i&1){let e=sI();Li(0,`div`,20)(1,`div`,2)(2,`span`,36),zI(3),ou(),Li(4,`button`,12),th(`click`,function(){let n=Yl(e).$implicit;return Ql(dI(3).togglePoll(n))}),Li(5,`span`),zI(6),ou()()(),Li(7,`div`,37),JE(8,nn,5,2,`div`,38,yt),ou()()}if(i&2){let e=c.$implicit,t=dI(3);Wv(3),Ih(e.question),Wv(),Zp(`text`,!0),Wv(2),Ih(e.active?`Deactivate`:`Activate`),Wv(2),eI(t.pollResults(e))}}function an(i,c){if(i&1&&(Li(0,`div`,38)(1,`span`),zI(2),ou(),Li(3,`span`),zI(4),ou()()),i&2){let e=c.$implicit,t=dI().$implicit;fh(`font-semibold`,e.isCorrect),Wv(2),Ih(t.options[e.optionIndex]),Wv(2),Ih(e.votes)}}function ln(i,c){if(i&1){let e=sI();Li(0,`div`,20)(1,`div`,2)(2,`span`,36),zI(3),ou(),Li(4,`button`,12),th(`click`,function(){let n=Yl(e).$implicit;return Ql(dI(3).toggleQuiz(n))}),Li(5,`span`),zI(6),ou()()(),Li(7,`div`,37),JE(8,an,5,4,`div`,39,yt),ou()()}if(i&2){let e=c.$implicit,t=dI(3);Wv(3),Ih(e.question),Wv(),Zp(`text`,!0),Wv(2),Ih(e.active?`Deactivate`:`Activate`),Wv(2),eI(t.quizResults(e))}}function rn(i,c){if(i&1){let e=sI();Li(0,`div`,1)(1,`p-card`)(2,`div`,2)(3,`h1`,3),zI(4,`Manage event`),ou(),Li(5,`p-selectButton`,4),th(`ngModelChange`,function(n){Yl(e);return Ql(dI(2).setEventState(n))}),ou(),FD(),ou(),Li(6,`div`,5)(7,`input`,6),Th(`ngModelChange`,function(n){Yl(e);let o=dI(2);return qI(o.eventTitleDraft,n)||(o.eventTitleDraft=n),Ql(n)}),ou(),FD(),Li(8,`input`,6),Th(`ngModelChange`,function(n){Yl(e);let o=dI(2);return qI(o.eventDescriptionDraft,n)||(o.eventDescriptionDraft=n),Ql(n)}),ou(),FD(),Li(9,`textarea`,7),Th(`ngModelChange`,function(n){Yl(e);let o=dI(2);return qI(o.eventDescriptionDraft,n)||(o.eventDescriptionDraft=n),Ql(n)}),ou(),FD(),Li(10,`button`,8),th(`click`,function(){Yl(e);return Ql(dI(2).saveEventInfo())}),Li(11,`span`,9),zI(12,`Save`),ou()()(),Li(13,`div`,10)(14,`span`,11),zI(15),ou(),Li(16,`button`,12),th(`click`,function(){Yl(e);return Ql(dI(2).copyJoinLink())}),Yp(17,`i`,13),Li(18,`span`,9),zI(19,`Copy link`),ou()()()(),Li(20,`p-card`)(21,`div`,14),zI(22,`Live audience stats`),ou(),Li(23,`div`,15)(24,`div`,16)(25,`div`,17),zI(26),ou(),Li(27,`small`,9),zI(28,`Questions`),ou()(),Li(29,`div`,16)(30,`div`,17),zI(31),ou(),Li(32,`small`,9),zI(33,`Question likes`),ou()(),Li(34,`div`,16)(35,`div`,17),zI(36),ou(),Li(37,`small`,9),zI(38,`Chapter reactions`),ou()(),Li(39,`div`,16)(40,`div`,17),zI(41),ou(),Li(42,`small`,9),zI(43,`Poll/quiz answers`),ou()()()(),Li(44,`p-card`)(45,`div`,14),zI(46,`Chapters`),ou(),Li(47,`div`,18)(48,`input`,19),Th(`ngModelChange`,function(n){Yl(e);let o=dI(2);return qI(o.newChapterTitle,n)||(o.newChapterTitle=n),Ql(n)}),ou(),FD(),Li(49,`button`,8),th(`click`,function(){Yl(e);return Ql(dI(2).createChapter())}),Li(50,`span`,9),zI(51,`Add`),ou()()(),Li(52,`div`,5),JE(53,en,22,12,`div`,20,fe),ou()(),Li(55,`p-card`)(56,`div`,14),zI(57,`Audience questions`),ou(),Li(58,`div`,21),JE(59,tn,10,4,`div`,22,fe),ou()(),Li(61,`p-card`)(62,`div`,14),zI(63,`Polls`),ou(),Li(64,`div`,21)(65,`input`,6),Th(`ngModelChange`,function(n){Yl(e);let o=dI(2);return qI(o.newPollQuestion,n)||(o.newPollQuestion=n),Ql(n)}),ou(),FD(),Li(66,`input`,6),Th(`ngModelChange`,function(n){Yl(e);let o=dI(2);return qI(o.newPollOptions,n)||(o.newPollOptions=n),Ql(n)}),ou(),FD(),Li(67,`button`,8),th(`click`,function(){Yl(e);return Ql(dI(2).createPoll())}),Li(68,`span`,9),zI(69,`Create poll`),ou()()(),Li(70,`div`,23),JE(71,on,10,3,`div`,20,fe),ou()(),Li(73,`p-card`)(74,`div`,14),zI(75,`Quizzes`),ou(),Li(76,`div`,21)(77,`input`,6),Th(`ngModelChange`,function(n){Yl(e);let o=dI(2);return qI(o.newQuizQuestion,n)||(o.newQuizQuestion=n),Ql(n)}),ou(),FD(),Li(78,`input`,6),Th(`ngModelChange`,function(n){Yl(e);let o=dI(2);return qI(o.newQuizOptions,n)||(o.newQuizOptions=n),Ql(n)}),ou(),FD(),Li(79,`input`,24),Th(`ngModelChange`,function(n){Yl(e);let o=dI(2);return qI(o.newQuizCorrectIndex,n)||(o.newQuizCorrectIndex=n),Ql(n)}),ou(),FD(),Li(80,`button`,8),th(`click`,function(){Yl(e);return Ql(dI(2).createQuiz())}),Li(81,`span`,9),zI(82,`Create quiz`),ou()()(),Li(83,`div`,23),JE(84,ln,10,3,`div`,20,fe),ou()()()}if(i&2){let e=dI(),t=dI();Wv(5),Zp(`options`,t.stateOptions)(`ngModel`,e.state),PD(),Wv(2),bh(`ngModel`,t.eventTitleDraft),Zp(`placeholder`,`Title`),PD(),Wv(),bh(`ngModel`,t.eventDescriptionDraft),Zp(`placeholder`,`Speaker`),PD(),Wv(),bh(`ngModel`,t.eventDescriptionDraft),Zp(`placeholder`,`Description`),PD(),Wv(6),Ih(t.joinUrl()),Wv(),Zp(`text`,!0),Wv(10),Ih(t.stats().questionCount),Wv(5),Ih(t.stats().totalLikes),Wv(5),Ih(t.stats().reactionCount),Wv(5),Ih(t.stats().pollAnswerCount+t.stats().quizAnswerCount),Wv(7),bh(`ngModel`,t.newChapterTitle),Zp(`placeholder`,`Chapter title`),PD(),Wv(5),eI(t.chapters()),Wv(6),eI(t.questions()),Wv(6),bh(`ngModel`,t.newPollQuestion),Zp(`placeholder`,`Poll question`),PD(),Wv(),bh(`ngModel`,t.newPollOptions),Zp(`placeholder`,`Options, comma separated`),PD(),Wv(5),eI(t.polls()),Wv(6),bh(`ngModel`,t.newQuizQuestion),Zp(`placeholder`,`Quiz question`),PD(),Wv(),bh(`ngModel`,t.newQuizOptions),Zp(`placeholder`,`Options, comma separated`),PD(),Wv(),bh(`ngModel`,t.newQuizCorrectIndex),Zp(`placeholder`,`Correct option index (0-based)`),PD(),Wv(5),eI(t.quizzes())}}function dn(i,c){i&1&&(Li(0,`div`,0),Yp(1,`i`,40),Li(2,`h1`,3),zI(3,`Not your event`),ou(),Li(4,`p`,41),zI(5,` You're signed in, but you're not the owner of this event. `),ou()())}function sn(i,c){if(i&1&&YE(0,rn,86,26,`div`,1)(1,dn,6,0,`div`,0),i&2)QE(dI().isOwner()?0:1)}function cn(i,c){i&1&&(Li(0,`div`,0),Yp(1,`i`,42),Li(2,`h1`,3),zI(3,`Event not found`),ou(),Li(4,`p`,41),zI(5,` We couldn't find an event for this link. `),ou()())}var wi=(()=>{class i{constructor(){this._router=g(ie),this._messageService=g(Nn),this._userService=g(ze),this._eventService=g(D),this._chapterService=g(N),this._chapterReactionService=g(k),this._questionService=g(I),this._pollService=g(V),this._pollAnswerService=g(z),this._quizService=g(K),this._quizAnswerService=g(Q),this.slug=zL.required(),this.event=gw(()=>this._eventService.bySlug(this.slug())??null),this.isOwner=gw(()=>{let t=this.event(),n=this._userService.user()?._id;return!!t&&!!n&&t.owner===n}),this.joinUrl=gw(()=>`${e.url}/event/${this.slug()}`),this.chapters=gw(()=>{let t=this.event();return t?this._chapterService.byEvent(t._id):[]}),this.questions=gw(()=>{let t=this.event();return t?this._questionService.byEvent(t._id):[]}),this.polls=gw(()=>{let t=this.event();return t?this._pollService.byEvent(t._id):[]}),this.quizzes=gw(()=>{let t=this.event();return t?this._quizService.byEvent(t._id):[]}),this.stats=gw(()=>{let t=new Set(this.chapters().map(o=>o._id)),n=this._chapterReactionService.all().filter(o=>t.has(o.chapterId)).length;return{questionCount:this.questions().length,totalLikes:this.questions().reduce((o,p)=>o+p.likes,0),reactionCount:n,pollAnswerCount:this.polls().reduce((o,p)=>o+this._pollAnswerService.all().filter(y=>y.pollId===p._id).length,0),quizAnswerCount:this.quizzes().reduce((o,p)=>o+this._quizAnswerService.all().filter(y=>y.quizId===p._id).length,0)}}),this.stateOptions=[{label:`draft`,value:`draft`},{label:`live`,value:`live`},{label:`ended`,value:`ended`}],this.eventTitleDraft=ui(``),this.eventDescriptionDraft=ui(``),this.newChapterTitle=ui(``),this.newPollQuestion=ui(``),this.newPollOptions=ui(``),this.newQuizQuestion=ui(``),this.newQuizOptions=ui(``),this.newQuizCorrectIndex=ui(0);let e$2=this.event();this.eventTitleDraft.set(e$2?.title??``),this.eventDescriptionDraft.set(e$2?.description??``),queueMicrotask(()=>{e$2&&!this.isOwner()&&this._router.navigateByUrl(`/dashboard`)})}copyJoinLink(){navigator.clipboard?.writeText(this.joinUrl()).then(()=>{this._messageService.add({severity:`success`,detail:`Join link copied`})})}saveEventInfo(){let e=this.event();e&&this._eventService.update(e._id,{title:this.eventTitleDraft().trim(),description:this.eventDescriptionDraft().trim()})}setEventState(e){let t=this.event();t&&this._eventService.update(t._id,{state:e})}createChapter(){let e=this.newChapterTitle().trim(),t=this.event();!e||!t||(this._chapterService.create(s(r({},e$1),{eventId:t._id,title:e,order:this.chapters().length})),this.newChapterTitle.set(``))}activateChapter(e){this._chapterService.activate(e)}moveChapter(e,t){let n=this.chapters(),o=n.findIndex(y=>y._id===e._id),p=n[o+t];o<0||!p||(this._chapterService.update(e._id,{order:p.order}),this._chapterService.update(p._id,{order:e.order}))}deleteChapter(e){this._chapterService.remove(e._id)}chapterReactionSummary(e){return this._chapterReactionService.summary(e._id)}deleteQuestion(e){this._questionService.removeQuestion(e)}createPoll(){let e=this.newPollQuestion().trim(),t=this._splitOptions(this.newPollOptions()),n=this.event();!e||t.length<2||!n||(this._pollService.create(s(r({},o),{eventId:n._id,question:e,options:t})),this.newPollQuestion.set(``),this.newPollOptions.set(``))}togglePoll(e){this._pollService.update(e._id,{active:!e.active})}pollResults(e){return this._pollAnswerService.results(e)}createQuiz(){let e=this.newQuizQuestion().trim(),t=this._splitOptions(this.newQuizOptions()),n$1=this.event();!e||t.length<2||!n$1||(this._quizService.create(s(r({},n),{eventId:n$1._id,question:e,options:t,correctOptionIndex:this.newQuizCorrectIndex()})),this.newQuizQuestion.set(``),this.newQuizOptions.set(``),this.newQuizCorrectIndex.set(0))}toggleQuiz(e){this._quizService.update(e._id,{active:!e.active})}quizResults(e){return this._quizAnswerService.results(e)}_splitOptions(e){return e.split(`,`).map(t=>t.trim()).filter(t=>t.length>0)}static{this.ɵfac=function(t){return new(t||i)}}static{this.ɵcmp=_E({type:i,selectors:[[`app-event-manage`]],inputs:{slug:[1,`slug`]},decls:2,vars:1,consts:[[1,`mx-auto`,`flex`,`w-full`,`max-w-[480px]`,`flex-col`,`items-center`,`gap-3`,`p-8`,`text-center`],[1,`mx-auto`,`flex`,`w-full`,`max-w-[960px]`,`flex-col`,`gap-4`,`p-4`],[1,`flex`,`items-center`,`justify-between`,`gap-3`],[`translate`,``,1,`m-0`,`text-xl`,`font-semibold`],[`optionLabel`,`label`,`optionValue`,`value`,3,`ngModelChange`,`options`,`ngModel`],[1,`mt-3`,`flex`,`flex-col`,`gap-2`],[`pInputText`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`pTextarea`,``,`rows`,`2`,3,`ngModelChange`,`ngModel`,`placeholder`],[`pButton`,``,`type`,`button`,3,`click`],[`translate`,``],[1,`mt-3`,`flex`,`items-center`,`gap-2`,`rounded-card`,`border`,`border-[var(--c-border)]`,`p-2`,`text-sm`],[1,`truncate`,`opacity-70`],[`pButton`,``,`type`,`button`,3,`click`,`text`],[1,`pi`,`pi-copy`],[`translate`,``,1,`text-sm`,`font-semibold`],[1,`mt-2`,`grid`,`grid-cols-2`,`gap-3`,`sm:grid-cols-4`],[1,`rounded-card`,`border`,`border-[var(--c-border)]`,`p-3`,`text-center`],[1,`text-lg`,`font-semibold`],[1,`mt-2`,`flex`,`gap-2`],[`pInputText`,``,1,`w-full`,3,`ngModelChange`,`ngModel`,`placeholder`],[1,`rounded-card`,`border`,`border-[var(--c-border)]`,`p-3`],[1,`mt-2`,`flex`,`flex-col`,`gap-2`],[1,`flex`,`items-center`,`justify-between`,`gap-3`,`rounded-card`,`border`,`border-[var(--c-border)]`,`px-3`,`py-2`,`text-sm`],[1,`mt-3`,`flex`,`flex-col`,`gap-3`],[`pInputText`,``,`type`,`number`,3,`ngModelChange`,`ngModel`,`placeholder`],[1,`flex`,`items-center`,`gap-2`],[`severity`,`success`,`value`,`Active`],[1,`flex`,`gap-1`],[`pButton`,``,`type`,`button`,3,`click`,`text`,`disabled`],[1,`pi`,`pi-arrow-up`],[1,`pi`,`pi-arrow-down`],[`pButton`,``,`type`,`button`,`severity`,`danger`,3,`click`,`text`],[1,`pi`,`pi-trash`],[1,`opacity-70`],[1,`flex`,`flex-col`],[1,`opacity-60`],[1,`font-semibold`],[1,`mt-2`,`flex`,`flex-col`,`gap-1`,`text-sm`],[1,`flex`,`justify-between`],[1,`flex`,`justify-between`,3,`font-semibold`],[1,`pi`,`pi-lock`,`text-3xl`,`opacity-60`],[`translate`,``,1,`m-0`,`text-sm`,`opacity-70`],[1,`pi`,`pi-search`,`text-3xl`,`opacity-60`]],template:function(t,n){if(t&1&&YE(0,sn,2,1)(1,cn,6,0,`div`,0),t&2){let o;QE((o=n.event())?0:1,o)}},dependencies:[fo,ho,Ve,Me$1,nt,et,Ct,be,ke,re,O$1,L,hn,Se,kt$1,ln$1,Rt$1,Z,fC],styles:[`[_nghost-%COMP%]{display:block}`]})}}return i})();export{wi as EventManageComponent};