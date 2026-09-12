import{$ as PI,A as II,Et as XE,Hn as mI,Kr as yC,Ln as lC,Mr as ts,Mt as Yv,N as JE,U as ME,W as Mf,Wt as b,Zn as nh,_ as EI,_r as rh,bt as Tu,cr as ph,dn as g,en as du,jn as k,kr as tP,kt as Xp,m as Dr,mr as qw,nr as oh,o as Ah,on as fC,p as DI,pn as gh,pr as qI,qr as yI,r as $i,ut as Qp,v as FE,yn as hI,yr as rw}from"./chunk-0nXeh1Xp.js";import{E as Y$1,a as Fi,h as Ns,m as Mn,n as $s,t as $n}from"./chunk-CV2jbdjW.js";var U=`
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
`;var Y=[`icon`];var Z=[`*`];function ee(e,s){if(e&1&&oh(0,`span`,3),e&2){let t=hI(2);PI(t.cx(`icon`)),rh(`ngClass`,t.icon())(`pBind`,t.ptm(`icon`))}}function te(e,s){if(e&1&&XE(0,ee,1,4,`span`,2),e&2)JE(hI().icon()?0:-1)}function ne(e,s){}function oe(e,s){e&1&&Xp(0,ne,0,0,`ng-template`)}function ie(e,s){if(e&1&&($i(0,`span`,4),Xp(1,oe,1,0,null,5),du()),e&2){let t=hI();PI(t.cx(`icon`)),rh(`pBind`,t.ptm(`icon`)),Yv(),rh(`ngTemplateOutlet`,t.iconTemplate||t._iconTemplate)}}var ae={root:({instance:e})=>[`p-tag p-component`,{"p-tag-info":e.severity===`info`,"p-tag-success":e.severity===`success`,"p-tag-warn":e.severity===`warn`,"p-tag-danger":e.severity===`danger`,"p-tag-secondary":e.severity===`secondary`,"p-tag-contrast":e.severity===`contrast`,"p-tag-rounded":e.rounded}],icon:`p-tag-icon`,label:`p-tag-label`};var W=(()=>{class e extends Y$1{name=`tag`;style=U;classes=ae;static ɵfac=(()=>{let t;return function(n){return(t||(t=Mf(e)))(n||e)}})();static ɵprov=k({token:e,factory:e.ɵfac})}return e})();var X=new b(`TAG_INSTANCE`);var re=(()=>{class e extends Ns{componentName=`Tag`;$pcTag=g(X,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g($s,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass=Tu();severity=Tu();value=Tu();icon=Tu();rounded=Tu(!1,{transform:qw});iconTemplate;templates=tP(Mn);_iconTemplate;_componentStyle=g(W);onAfterContentInit(){this.templates()?.forEach(t=>{t.getType()===`icon`&&(this._iconTemplate=t.template)})}get dataP(){return this.cn({rounded:this.rounded(),[this.severity()]:this.severity()})}static ɵfac=(()=>{let t;return function(n){return(t||(t=Mf(e)))(n||e)}})();static ɵcmp=ME({type:e,selectors:[[`p-tag`]],contentQueries:function(o,n,C){if(o&1&&(gh(C,n.templates,Mn,4),ph(C,Y,4)),o&2){II();let _;DI(_=EI())&&(n.iconTemplate=_.first)}},hostVars:3,hostBindings:function(o,n){o&2&&(nh(`data-p`,n.dataP),PI(n.cn(n.cx(`root`),n.styleClass())))},inputs:{styleClass:[1,`styleClass`],severity:[1,`severity`],value:[1,`value`],icon:[1,`icon`],rounded:[1,`rounded`]},features:[rw([W,{provide:X,useExisting:e},{provide:Fi,useExisting:e}]),FE([$s]),Qp],ngContentSelectors:Z,decls:5,vars:6,consts:[[`aria-hidden`,`true`,3,`class`,`pBind`],[3,`pBind`],[`aria-hidden`,`true`,3,`class`,`ngClass`,`pBind`],[`aria-hidden`,`true`,3,`ngClass`,`pBind`],[`aria-hidden`,`true`,3,`pBind`],[4,`ngTemplateOutlet`]],template:function(o,n){o&1&&(mI(),yI(0),XE(1,te,1,1),XE(2,ie,2,4,`span`,0),$i(3,`span`,1),qI(4),du()),o&2&&(Yv(),JE(!n.iconTemplate&&!n._iconTemplate?1:-1),Yv(),JE(n.iconTemplate||n._iconTemplate?2:-1),Yv(),PI(n.cx(`label`)),rh(`pBind`,n.ptm(`label`)),Yv(),Ah(n.value()))},dependencies:[yC,lC,fC,$n,$s],encapsulation:2})}return e})();var ke=(()=>{class e{static ɵfac=function(o){return new(o||e)};static ɵmod=ts({type:e});static ɵinj=Dr({imports:[re,$n,$n]})}return e})();export{re as n,ke as t};