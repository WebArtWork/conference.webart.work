import{Bn as kI,Br as yI,Bt as Yp,D as Ih,Dn as gC,En as g,G as O,Gn as mI,Gr as zL,Hr as yr,Ht as ZL,K as OE,Kt as Zp,Lt as Yi,Ot as Wv,Pn as ih,Pt as YE,R as Li,T as Hp,Wr as zI,bn as ew,bt as Up,er as oh,h as Ef,ir as ou,jn as hI,jr as vI,lr as qp,nn as b,nt as QE,on as cC,or as pI,pn as dI,pr as sC,qt as _E,xt as Uw}from"./chunk-BGIC4sMI.js";import{G as Bt,K as Dn,Y as H,ft as Wi,it as Pn,q as Ds}from"./main-6Q42W4VE.js";var U=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`;var Y=[`icon`];var Z=[`*`];function ee(e,s){if(e&1&&Yp(0,`span`,3),e&2){let t=dI(2);kI(t.cx(`icon`)),Zp(`ngClass`,t.icon())(`pBind`,t.ptm(`icon`))}}function te(e,s){if(e&1&&YE(0,ee,1,4,`span`,2),e&2)QE(dI().icon()?0:-1)}function ne(e,s){}function oe(e,s){e&1&&Up(0,ne,0,0,`ng-template`)}function ie(e,s){if(e&1&&(Li(0,`span`,4),Up(1,oe,1,0,null,5),ou()),e&2){let t=dI();kI(t.cx(`icon`)),Zp(`pBind`,t.ptm(`icon`)),Wv(),Zp(`ngTemplateOutlet`,t.iconTemplate||t._iconTemplate)}}var ae={root:({instance:e})=>[`p-tag p-component`,{"p-tag-info":e.severity===`info`,"p-tag-success":e.severity===`success`,"p-tag-warn":e.severity===`warn`,"p-tag-danger":e.severity===`danger`,"p-tag-secondary":e.severity===`secondary`,"p-tag-contrast":e.severity===`contrast`,"p-tag-rounded":e.rounded}],icon:`p-tag-icon`,label:`p-tag-label`};var W=(()=>{class e extends H{name=`tag`;style=U;classes=ae;static ɵfac=(()=>{let t;return function(n){return(t||(t=Ef(e)))(n||e)}})();static ɵprov=O({token:e,factory:e.ɵfac})}return e})();var X=new b(`TAG_INSTANCE`);var re=(()=>{class e extends Bt{componentName=`Tag`;$pcTag=g(X,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Ds,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass=zL();severity=zL();value=zL();icon=zL();rounded=zL(!1,{transform:Uw});iconTemplate;templates=ZL(Dn);_iconTemplate;_componentStyle=g(W);onAfterContentInit(){this.templates()?.forEach(t=>{t.getType()===`icon`&&(this._iconTemplate=t.template)})}get dataP(){return this.cn({rounded:this.rounded(),[this.severity()]:this.severity()})}static ɵfac=(()=>{let t;return function(n){return(t||(t=Ef(e)))(n||e)}})();static ɵcmp=_E({type:e,selectors:[[`p-tag`]],contentQueries:function(o,n,C){if(o&1&&(ih(C,n.templates,Dn,4),oh(C,Y,4)),o&2){vI();let _;mI(_=yI())&&(n.iconTemplate=_.first)}},hostVars:3,hostBindings:function(o,n){o&2&&(qp(`data-p`,n.dataP),kI(n.cn(n.cx(`root`),n.styleClass())))},inputs:{styleClass:[1,`styleClass`],severity:[1,`severity`],value:[1,`value`],icon:[1,`icon`],rounded:[1,`rounded`]},features:[ew([W,{provide:X,useExisting:e},{provide:Wi,useExisting:e}]),OE([Ds]),Hp],ngContentSelectors:Z,decls:5,vars:6,consts:[[`aria-hidden`,`true`,3,`class`,`pBind`],[3,`pBind`],[`aria-hidden`,`true`,3,`class`,`ngClass`,`pBind`],[`aria-hidden`,`true`,3,`ngClass`,`pBind`],[`aria-hidden`,`true`,3,`pBind`],[4,`ngTemplateOutlet`]],template:function(o,n){o&1&&(pI(),hI(0),YE(1,te,1,1),YE(2,ie,2,4,`span`,0),Li(3,`span`,1),zI(4),ou()),o&2&&(Wv(),QE(!n.iconTemplate&&!n._iconTemplate?1:-1),Wv(),QE(n.iconTemplate||n._iconTemplate?2:-1),Wv(),kI(n.cx(`label`)),Zp(`pBind`,n.ptm(`label`)),Wv(),Ih(n.value()))},dependencies:[gC,sC,cC,Pn,Ds],encapsulation:2})}return e})();var ke=(()=>{class e{static ɵfac=function(o){return new(o||e)};static ɵmod=Yi({type:e});static ɵinj=yr({imports:[re,Pn,Pn]})}return e})();export{re as n,ke as t};