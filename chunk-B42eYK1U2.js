import{Dt as TC,E as Ft,Et as Ss,F as I,Fn as g,Ft as WC,I as IC,It as Wp,J as K1,Jn as il,Lr as sr,M as Hp,Nt as V_,Q as L,Rn as gw,Un as iE,ai as ws,bi as zp,c as Ae,cn as aC,dn as bC,dr as nI,h as Cw,hn as cC,in as _n,k as G_,kn as eg,mi as yg,mr as ng,o as AC,on as _t,ot as NC,vi as yw,wn as ds,wt as SC,xi as zu}from"./chunk-D-AgZhTw.js";import{E as Y$1,a as Fi,h as Ns,m as Mn,n as $s,t as $n}from"./chunk-CFVWef1w.js";var U=`
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
`;var Y=[`icon`];var Z=[`*`];function ee(e,s){if(e&1&&Wp(0,`span`,3),e&2){let t=IC(2);WC(t.cx(`icon`)),zp(`ngClass`,t.icon())(`pBind`,t.ptm(`icon`))}}function te(e,s){if(e&1&&aC(0,ee,1,4,`span`,2),e&2)cC(IC().icon()?0:-1)}function ne(e,s){}function oe(e,s){e&1&&Hp(0,ne,0,0,`ng-template`)}function ie(e,s){if(e&1&&(ds(0,`span`,4),Hp(1,oe,1,0,null,5),zu()),e&2){let t=IC();WC(t.cx(`icon`)),zp(`pBind`,t.ptm(`icon`)),iE(),zp(`ngTemplateOutlet`,t.iconTemplate||t._iconTemplate)}}var ae={root:({instance:e})=>[`p-tag p-component`,{"p-tag-info":e.severity===`info`,"p-tag-success":e.severity===`success`,"p-tag-warn":e.severity===`warn`,"p-tag-danger":e.severity===`danger`,"p-tag-secondary":e.severity===`secondary`,"p-tag-contrast":e.severity===`contrast`,"p-tag-rounded":e.rounded}],icon:`p-tag-icon`,label:`p-tag-label`};var W=(()=>{class e extends Y$1{name=`tag`;style=U;classes=ae;static ɵfac=(()=>{let t;return function(n){return(t||(t=sr(e)))(n||e)}})();static ɵprov=L({token:e,factory:e.ɵfac})}return e})();var X=new I(`TAG_INSTANCE`);var re=(()=>{class e extends Ns{componentName=`Tag`;$pcTag=g(X,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g($s,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass=il();severity=il();value=il();icon=il();rounded=il(!1,{transform:Ss});iconTemplate;templates=K1(Mn);_iconTemplate;_componentStyle=g(W);onAfterContentInit(){this.templates()?.forEach(t=>{t.getType()===`icon`&&(this._iconTemplate=t.template)})}get dataP(){return this.cn({rounded:this.rounded(),[this.severity()]:this.severity()})}static ɵfac=(()=>{let t;return function(n){return(t||(t=sr(e)))(n||e)}})();static ɵcmp=V_({type:e,selectors:[[`p-tag`]],contentQueries:function(o,n,C){if(o&1&&(ng(C,n.templates,Mn,4),eg(C,Y,4)),o&2){AC();let _;SC(_=NC())&&(n.iconTemplate=_.first)}},hostVars:3,hostBindings:function(o,n){o&2&&(ws(`data-p`,n.dataP),WC(n.cn(n.cx(`root`),n.styleClass())))},inputs:{styleClass:[1,`styleClass`],severity:[1,`severity`],value:[1,`value`],icon:[1,`icon`],rounded:[1,`rounded`]},features:[Ft([W,{provide:X,useExisting:e},{provide:Fi,useExisting:e}]),G_([$s]),Ae],ngContentSelectors:Z,decls:5,vars:6,consts:[[`aria-hidden`,`true`,3,`class`,`pBind`],[3,`pBind`],[`aria-hidden`,`true`,3,`class`,`ngClass`,`pBind`],[`aria-hidden`,`true`,3,`ngClass`,`pBind`],[`aria-hidden`,`true`,3,`pBind`],[4,`ngTemplateOutlet`]],template:function(o,n){o&1&&(bC(),TC(0),aC(1,te,1,1),aC(2,ie,2,4,`span`,0),ds(3,`span`,1),nI(4),zu()),o&2&&(iE(),cC(!n.iconTemplate&&!n._iconTemplate?1:-1),iE(),cC(n.iconTemplate||n._iconTemplate?2:-1),iE(),WC(n.cx(`label`)),zp(`pBind`,n.ptm(`label`)),iE(),yg(n.value()))},dependencies:[Cw,gw,yw,$n,$s],encapsulation:2})}return e})();var ke=(()=>{class e{static ɵfac=function(o){return new(o||e)};static ɵmod=_n({type:e});static ɵinj=_t({imports:[re,$n,$n]})}return e})();export{re as n,ke as t};