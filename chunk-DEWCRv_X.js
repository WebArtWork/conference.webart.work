import{Br as te$1,Dt as TC,E as Ft,F as I,Fn as g,Ft as WC,I as IC,J as K1,Jn as il,Kt as Yp,Lr as sr,M as Hp,Nt as V_,O as GC,Q as L,Un as iE,bi as zp,bt as Qu,c as Ae,cn as aC,dn as bC,dr as nI,en as Zn,gt as Q1,h as Cw,hn as cC,in as _n,k as G_,kn as eg,mr as ng,o as AC,on as _t,ot as NC,vi as yw,wn as ds,wt as SC,xi as zu}from"./chunk-D-AgZhTw.js";import{E as Y,H as ie$1,_ as Pn,a as Fi,at as xs,h as Ns,i as Dn,m as Mn,n as $s,t as $n}from"./chunk-CFVWef1w.js";var ee=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var ie=[`content`];var ae=[`header`];var oe=[`title`];var re=[`subtitle`];var le=[`footer`];var de=[`*`,[[`p-header`]],[[`p-footer`]]];var ce=[`*`,`p-header`,`p-footer`];function pe(t,r){t&1&&Yp(0)}function se(t,r){if(t&1&&(ds(0,`div`,1),TC(1,1),Hp(2,pe,1,0,`ng-container`,2),zu()),t&2){let e=IC();WC(e.cx(`header`)),zp(`pBind`,e.ptm(`header`)),iE(2),zp(`ngTemplateOutlet`,e.headerTemplate||e._headerTemplate)}}function me(t,r){if(t&1&&nI(0),t&2)Qu(` `,IC(2).header(),` `)}function ue(t,r){t&1&&Yp(0)}function fe(t,r){if(t&1&&(ds(0,`div`,1),aC(1,me,1,1),Hp(2,ue,1,0,`ng-container`,2),zu()),t&2){let e=IC();WC(e.cx(`title`)),zp(`pBind`,e.ptm(`title`)),iE(),cC(e.header()&&!e._titleTemplate&&!e.titleTemplate?1:-1),iE(),zp(`ngTemplateOutlet`,e.titleTemplate||e._titleTemplate)}}function _e(t,r){if(t&1&&nI(0),t&2)Qu(` `,IC(2).subheader(),` `)}function he(t,r){t&1&&Yp(0)}function ye(t,r){if(t&1&&(ds(0,`div`,1),aC(1,_e,1,1),Hp(2,he,1,0,`ng-container`,2),zu()),t&2){let e=IC();WC(e.cx(`subtitle`)),zp(`pBind`,e.ptm(`subtitle`)),iE(),cC(e.subheader()&&!e._subtitleTemplate&&!e.subtitleTemplate?1:-1),iE(),zp(`ngTemplateOutlet`,e.subtitleTemplate||e._subtitleTemplate)}}function Te(t,r){t&1&&Yp(0)}function ge(t,r){t&1&&Yp(0)}function be(t,r){if(t&1&&(ds(0,`div`,1),TC(1,2),Hp(2,ge,1,0,`ng-container`,2),zu()),t&2){let e=IC();WC(e.cx(`footer`)),zp(`pBind`,e.ptm(`footer`)),iE(2),zp(`ngTemplateOutlet`,e.footerTemplate||e._footerTemplate)}}var ve=`
    ${ee}

    .p-card {
        display: block;
    }
`;var Ce={root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`};var te=(()=>{class t extends Y{name=`card`;style=ve;classes=Ce;static ɵfac=(()=>{let e;return function(n){return(e||(e=sr(t)))(n||t)}})();static ɵprov=L({token:t,factory:t.ɵfac})}return t})();var ne=new I(`CARD_INSTANCE`);var Me=(()=>{class t extends Ns{componentName=`Card`;$pcCard=g(ne,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g($s,{self:!0});_componentStyle=g(te);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}header=il();subheader=il();style=il();styleClass=il();headerFacet=Q1(Pn);footerFacet=Q1(Dn);headerTemplate;titleTemplate;subtitleTemplate;contentTemplate=Q1(`content`,{descendants:!1});footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=te$1(null);constructor(){super(),Zn(()=>{let e=this.style();ie$1(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(i=>{this.el.nativeElement.style[i]=e[i]}))})}getBlockableElement(){return this.el.nativeElement}templates=K1(Mn);onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`header`:this._headerTemplate=e.template;break;case`title`:this._titleTemplate=e.template;break;case`subtitle`:this._subtitleTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static ɵfac=function(i){return new(i||t)};static ɵcmp=V_({type:t,selectors:[[`p-card`]],contentQueries:function(i,n,l){if(i&1&&(ng(l,n.headerFacet,Pn,5)(l,n.footerFacet,Dn,5)(l,n.contentTemplate,ie,4)(l,n.templates,Mn,4),eg(l,ae,4)(l,oe,4)(l,re,4)(l,le,4)),i&2){AC(4);let d;SC(d=NC())&&(n.headerTemplate=d.first),SC(d=NC())&&(n.titleTemplate=d.first),SC(d=NC())&&(n.subtitleTemplate=d.first),SC(d=NC())&&(n.footerTemplate=d.first)}},hostVars:4,hostBindings:function(i,n){i&2&&(GC(n._style()),WC(n.cn(n.cx(`root`),n.styleClass())))},inputs:{header:[1,`header`],subheader:[1,`subheader`],style:[1,`style`],styleClass:[1,`styleClass`]},features:[Ft([te,{provide:ne,useExisting:t},{provide:Fi,useExisting:t}]),G_([$s]),Ae],ngContentSelectors:ce,decls:8,vars:11,consts:[[3,`pBind`,`class`],[3,`pBind`],[4,`ngTemplateOutlet`]],template:function(i,n){i&1&&(bC(de),aC(0,se,3,4,`div`,0),ds(1,`div`,1),aC(2,fe,3,5,`div`,0),aC(3,ye,3,5,`div`,0),ds(4,`div`,1),TC(5),Hp(6,Te,1,0,`ng-container`,2),zu(),aC(7,be,3,4,`div`,0),zu()),i&2&&(cC(n.headerFacet()||n.headerTemplate||n._headerTemplate?0:-1),iE(),WC(n.cx(`body`)),zp(`pBind`,n.ptm(`body`)),iE(),cC(n.header()||n.titleTemplate||n._titleTemplate?2:-1),iE(),cC(n.subheader()||n.subtitleTemplate||n._subtitleTemplate?3:-1),iE(),WC(n.cx(`content`)),zp(`pBind`,n.ptm(`content`)),iE(2),zp(`ngTemplateOutlet`,n.contentTemplate()||n._contentTemplate),iE(),cC(n.footerFacet()||n.footerTemplate||n._footerTemplate?7:-1))},dependencies:[Cw,yw,$n,xs,$s],encapsulation:2})}return t})();var Ve=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=_n({type:t});static ɵinj=_t({imports:[Me,$n,xs,$n,xs]})}return t})();export{Ve as n,Me as t};