import{Bn as kI,Br as yI,Dn as gC,Dr as uu,En as g,G as O,Gn as mI,Gr as zL,Hr as yr,Ht as ZL,K as OE,Kt as Zp,Lt as Yi,Mr as vd,Mt as Xp,Ot as Wv,Pn as ih,Pt as YE,R as Li,T as Hp,Tr as ui,Wr as zI,bn as ew,bt as Up,cr as qL,er as oh,h as Ef,ir as ou,jn as hI,jr as vI,nn as b,nt as QE,on as cC,or as pI,pn as dI,qt as _E,ut as RI}from"./chunk-BGIC4sMI.js";import{Ft as wn,G as Bt,K as Dn,X as In,Y as H,at as Ps,ft as Wi,gt as _t,it as Pn,q as Ds}from"./main-6Q42W4VE.js";var ee=`
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
`;var ie=[`content`];var ae=[`header`];var oe=[`title`];var re=[`subtitle`];var le=[`footer`];var de=[`*`,[[`p-header`]],[[`p-footer`]]];var ce=[`*`,`p-header`,`p-footer`];function pe(t,r){t&1&&Xp(0)}function se(t,r){if(t&1&&(Li(0,`div`,1),hI(1,1),Up(2,pe,1,0,`ng-container`,2),ou()),t&2){let e=dI();kI(e.cx(`header`)),Zp(`pBind`,e.ptm(`header`)),Wv(2),Zp(`ngTemplateOutlet`,e.headerTemplate||e._headerTemplate)}}function me(t,r){if(t&1&&zI(0),t&2)uu(` `,dI(2).header(),` `)}function ue(t,r){t&1&&Xp(0)}function fe(t,r){if(t&1&&(Li(0,`div`,1),YE(1,me,1,1),Up(2,ue,1,0,`ng-container`,2),ou()),t&2){let e=dI();kI(e.cx(`title`)),Zp(`pBind`,e.ptm(`title`)),Wv(),QE(e.header()&&!e._titleTemplate&&!e.titleTemplate?1:-1),Wv(),Zp(`ngTemplateOutlet`,e.titleTemplate||e._titleTemplate)}}function _e(t,r){if(t&1&&zI(0),t&2)uu(` `,dI(2).subheader(),` `)}function he(t,r){t&1&&Xp(0)}function ye(t,r){if(t&1&&(Li(0,`div`,1),YE(1,_e,1,1),Up(2,he,1,0,`ng-container`,2),ou()),t&2){let e=dI();kI(e.cx(`subtitle`)),Zp(`pBind`,e.ptm(`subtitle`)),Wv(),QE(e.subheader()&&!e._subtitleTemplate&&!e.subtitleTemplate?1:-1),Wv(),Zp(`ngTemplateOutlet`,e.subtitleTemplate||e._subtitleTemplate)}}function Te(t,r){t&1&&Xp(0)}function ge(t,r){t&1&&Xp(0)}function be(t,r){if(t&1&&(Li(0,`div`,1),hI(1,2),Up(2,ge,1,0,`ng-container`,2),ou()),t&2){let e=dI();kI(e.cx(`footer`)),Zp(`pBind`,e.ptm(`footer`)),Wv(2),Zp(`ngTemplateOutlet`,e.footerTemplate||e._footerTemplate)}}var ve=`
    ${ee}

    .p-card {
        display: block;
    }
`;var Ce={root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`};var te=(()=>{class t extends H{name=`card`;style=ve;classes=Ce;static ɵfac=(()=>{let e;return function(n){return(e||(e=Ef(t)))(n||t)}})();static ɵprov=O({token:t,factory:t.ɵfac})}return t})();var ne=new b(`CARD_INSTANCE`);var Me=(()=>{class t extends Bt{componentName=`Card`;$pcCard=g(ne,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Ds,{self:!0});_componentStyle=g(te);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}header=zL();subheader=zL();style=zL();styleClass=zL();headerFacet=qL(wn);footerFacet=qL(In);headerTemplate;titleTemplate;subtitleTemplate;contentTemplate=qL(`content`,{descendants:!1});footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=ui(null);constructor(){super(),vd(()=>{let e=this.style();_t(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(i=>{this.el.nativeElement.style[i]=e[i]}))})}getBlockableElement(){return this.el.nativeElement}templates=ZL(Dn);onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`header`:this._headerTemplate=e.template;break;case`title`:this._titleTemplate=e.template;break;case`subtitle`:this._subtitleTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static ɵfac=function(i){return new(i||t)};static ɵcmp=_E({type:t,selectors:[[`p-card`]],contentQueries:function(i,n,l){if(i&1&&(ih(l,n.headerFacet,wn,5)(l,n.footerFacet,In,5)(l,n.contentTemplate,ie,4)(l,n.templates,Dn,4),oh(l,ae,4)(l,oe,4)(l,re,4)(l,le,4)),i&2){vI(4);let d;mI(d=yI())&&(n.headerTemplate=d.first),mI(d=yI())&&(n.titleTemplate=d.first),mI(d=yI())&&(n.subtitleTemplate=d.first),mI(d=yI())&&(n.footerTemplate=d.first)}},hostVars:4,hostBindings:function(i,n){i&2&&(RI(n._style()),kI(n.cn(n.cx(`root`),n.styleClass())))},inputs:{header:[1,`header`],subheader:[1,`subheader`],style:[1,`style`],styleClass:[1,`styleClass`]},features:[ew([te,{provide:ne,useExisting:t},{provide:Wi,useExisting:t}]),OE([Ds]),Hp],ngContentSelectors:ce,decls:8,vars:11,consts:[[3,`pBind`,`class`],[3,`pBind`],[4,`ngTemplateOutlet`]],template:function(i,n){i&1&&(pI(de),YE(0,se,3,4,`div`,0),Li(1,`div`,1),YE(2,fe,3,5,`div`,0),YE(3,ye,3,5,`div`,0),Li(4,`div`,1),hI(5),Up(6,Te,1,0,`ng-container`,2),ou(),YE(7,be,3,4,`div`,0),ou()),i&2&&(QE(n.headerFacet()||n.headerTemplate||n._headerTemplate?0:-1),Wv(),kI(n.cx(`body`)),Zp(`pBind`,n.ptm(`body`)),Wv(),QE(n.header()||n.titleTemplate||n._titleTemplate?2:-1),Wv(),QE(n.subheader()||n.subtitleTemplate||n._subtitleTemplate?3:-1),Wv(),kI(n.cx(`content`)),Zp(`pBind`,n.ptm(`content`)),Wv(2),Zp(`ngTemplateOutlet`,n.contentTemplate()||n._contentTemplate),Wv(),QE(n.footerFacet()||n.footerTemplate||n._footerTemplate?7:-1))},dependencies:[gC,cC,Pn,Ps,Ds],encapsulation:2})}return t})();var Ve=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Yi({type:t});static ɵinj=yr({imports:[Me,Pn,Ps,Pn,Ps]})}return t})();export{Ve as n,Me as t};