import{$ as PI,A as II,Bt as ah,Et as XE,Gn as mi,Hn as mI,Hr as we,Kr as yC,Mr as ts,Mt as Yv,N as JE,U as ME,W as Mf,Wt as b,_ as EI,_r as rh,bt as Tu,cr as ph,dn as g,en as du,jn as k,kr as tP,kt as Xp,m as Dr,nn as eP,on as fC,p as DI,pn as gh,pr as qI,qn as mu,qr as yI,r as $i,ut as Qp,v as FE,y as FI,yn as hI,yr as rw}from"./chunk-0nXeh1Xp.js";import{E as Y,H as ie$1,_ as Pn,a as Fi,at as xs,h as Ns,i as Dn,m as Mn,n as $s,t as $n}from"./chunk-CV2jbdjW.js";var ee=`
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
`;var ie=[`content`];var ae=[`header`];var oe=[`title`];var re=[`subtitle`];var le=[`footer`];var de=[`*`,[[`p-header`]],[[`p-footer`]]];var ce=[`*`,`p-header`,`p-footer`];function pe(t,r){t&1&&ah(0)}function se(t,r){if(t&1&&($i(0,`div`,1),yI(1,1),Xp(2,pe,1,0,`ng-container`,2),du()),t&2){let e=hI();PI(e.cx(`header`)),rh(`pBind`,e.ptm(`header`)),Yv(2),rh(`ngTemplateOutlet`,e.headerTemplate||e._headerTemplate)}}function me(t,r){if(t&1&&qI(0),t&2)mu(` `,hI(2).header(),` `)}function ue(t,r){t&1&&ah(0)}function fe(t,r){if(t&1&&($i(0,`div`,1),XE(1,me,1,1),Xp(2,ue,1,0,`ng-container`,2),du()),t&2){let e=hI();PI(e.cx(`title`)),rh(`pBind`,e.ptm(`title`)),Yv(),JE(e.header()&&!e._titleTemplate&&!e.titleTemplate?1:-1),Yv(),rh(`ngTemplateOutlet`,e.titleTemplate||e._titleTemplate)}}function _e(t,r){if(t&1&&qI(0),t&2)mu(` `,hI(2).subheader(),` `)}function he(t,r){t&1&&ah(0)}function ye(t,r){if(t&1&&($i(0,`div`,1),XE(1,_e,1,1),Xp(2,he,1,0,`ng-container`,2),du()),t&2){let e=hI();PI(e.cx(`subtitle`)),rh(`pBind`,e.ptm(`subtitle`)),Yv(),JE(e.subheader()&&!e._subtitleTemplate&&!e.subtitleTemplate?1:-1),Yv(),rh(`ngTemplateOutlet`,e.subtitleTemplate||e._subtitleTemplate)}}function Te(t,r){t&1&&ah(0)}function ge(t,r){t&1&&ah(0)}function be(t,r){if(t&1&&($i(0,`div`,1),yI(1,2),Xp(2,ge,1,0,`ng-container`,2),du()),t&2){let e=hI();PI(e.cx(`footer`)),rh(`pBind`,e.ptm(`footer`)),Yv(2),rh(`ngTemplateOutlet`,e.footerTemplate||e._footerTemplate)}}var ve=`
    ${ee}

    .p-card {
        display: block;
    }
`;var Ce={root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`};var te=(()=>{class t extends Y{name=`card`;style=ve;classes=Ce;static ɵfac=(()=>{let e;return function(n){return(e||(e=Mf(t)))(n||t)}})();static ɵprov=k({token:t,factory:t.ɵfac})}return t})();var ne=new b(`CARD_INSTANCE`);var Me=(()=>{class t extends Ns{componentName=`Card`;$pcCard=g(ne,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g($s,{self:!0});_componentStyle=g(te);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}header=Tu();subheader=Tu();style=Tu();styleClass=Tu();headerFacet=eP(Pn);footerFacet=eP(Dn);headerTemplate;titleTemplate;subtitleTemplate;contentTemplate=eP(`content`,{descendants:!1});footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=we(null);constructor(){super(),mi(()=>{let e=this.style();ie$1(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(i=>{this.el.nativeElement.style[i]=e[i]}))})}getBlockableElement(){return this.el.nativeElement}templates=tP(Mn);onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`header`:this._headerTemplate=e.template;break;case`title`:this._titleTemplate=e.template;break;case`subtitle`:this._subtitleTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static ɵfac=function(i){return new(i||t)};static ɵcmp=ME({type:t,selectors:[[`p-card`]],contentQueries:function(i,n,l){if(i&1&&(gh(l,n.headerFacet,Pn,5)(l,n.footerFacet,Dn,5)(l,n.contentTemplate,ie,4)(l,n.templates,Mn,4),ph(l,ae,4)(l,oe,4)(l,re,4)(l,le,4)),i&2){II(4);let d;DI(d=EI())&&(n.headerTemplate=d.first),DI(d=EI())&&(n.titleTemplate=d.first),DI(d=EI())&&(n.subtitleTemplate=d.first),DI(d=EI())&&(n.footerTemplate=d.first)}},hostVars:4,hostBindings:function(i,n){i&2&&(FI(n._style()),PI(n.cn(n.cx(`root`),n.styleClass())))},inputs:{header:[1,`header`],subheader:[1,`subheader`],style:[1,`style`],styleClass:[1,`styleClass`]},features:[rw([te,{provide:ne,useExisting:t},{provide:Fi,useExisting:t}]),FE([$s]),Qp],ngContentSelectors:ce,decls:8,vars:11,consts:[[3,`pBind`,`class`],[3,`pBind`],[4,`ngTemplateOutlet`]],template:function(i,n){i&1&&(mI(de),XE(0,se,3,4,`div`,0),$i(1,`div`,1),XE(2,fe,3,5,`div`,0),XE(3,ye,3,5,`div`,0),$i(4,`div`,1),yI(5),Xp(6,Te,1,0,`ng-container`,2),du(),XE(7,be,3,4,`div`,0),du()),i&2&&(JE(n.headerFacet()||n.headerTemplate||n._headerTemplate?0:-1),Yv(),PI(n.cx(`body`)),rh(`pBind`,n.ptm(`body`)),Yv(),JE(n.header()||n.titleTemplate||n._titleTemplate?2:-1),Yv(),JE(n.subheader()||n.subtitleTemplate||n._subtitleTemplate?3:-1),Yv(),PI(n.cx(`content`)),rh(`pBind`,n.ptm(`content`)),Yv(2),rh(`ngTemplateOutlet`,n.contentTemplate()||n._contentTemplate),Yv(),JE(n.footerFacet()||n.footerTemplate||n._footerTemplate?7:-1))},dependencies:[yC,fC,$n,xs,$s],encapsulation:2})}return t})();var Ve=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=ts({type:t});static ɵinj=Dr({imports:[Me,$n,xs,$n,xs]})}return t})();export{Ve as n,Me as t};