(this["webpackJsonpcandymachine-v2-boiler-mint-site-noflp"]=this["webpackJsonpcandymachine-v2-boiler-mint-site-noflp"]||[]).push([[0],{110:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return v}));var r=n(12),i=n(4),a=n(1),c=n.n(a),s=n(24),o=n(38),u=n(5),l=n(187),d=n(42),b=new s.e.PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"),p=new s.e.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),m=function(){var e=Object(i.a)(c.a.mark((function e(t,n,r){var a,s,o,u,l=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.length>3&&void 0!==l[3]?l[3]:"recent",a=l.length>4&&void 0!==l[4]&&l[4],s=!1,o={slot:0,confirmations:0,err:null},u=0,e.next=7,new Promise(function(){var e=Object(i.a)(c.a.mark((function e(u,l){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),l({timeout:!0}))}),n);case 1:if(s||!a){e.next=7;break}return Object(i.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,o=n&&n.value[0],s||(o?o.err?(console.log("REST error for",t,o),s=!0,l(o.err)):o.confirmations?(console.log("REST confirmation for",t,o),s=!0,u(o)):console.log("REST no confirmations for",t,o):console.log("REST null result for",t,o)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=5,O(2e3);case 5:e.next=1;break;case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return o=e.sent,r._signatureSubscriptions[u]&&r.removeSignatureListener(u),s=!0,console.log("Returning status",o),e.abrupt("return",o);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),f=function(t,n,r,i){var a=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:i,isSigner:!1,isWritable:!1},{pubkey:s.e.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:o.b,isSigner:!1,isWritable:!1},{pubkey:s.e.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new s.e.TransactionInstruction({keys:a,programId:d.b,data:e.from([])})},j=function(){var e=Object(i.a)(c.a.mark((function e(t,n,r){var i,a,o,u,l,d,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new s.c(r,t,{preflightCommitment:"recent"}),e.next=3,s.b.fetchIdl(b,i);case 3:return a=e.sent,o=new s.b(a,b,i),e.next=7,o.account.candyMachine.fetch(n);case 7:return u=e.sent,l=u.data.itemsAvailable.toNumber(),d=u.itemsRedeemed.toNumber(),p=l-d,e.abrupt("return",{id:n,program:o,state:{itemsAvailable:l,itemsRedeemed:d,itemsRemaining:p,isSoldOut:0===p,isActive:u.data.goLiveDate.toNumber()<(new Date).getTime()/1e3&&(!u.endSettings||(u.endSettings.endSettingType.date?u.endSettings.number.toNumber()>(new Date).getTime()/1e3:d<u.endSettings.number.toNumber())),goLiveDate:u.data.goLiveDate,treasury:u.wallet,tokenMint:u.tokenMint,gatekeeper:u.data.gatekeeper,endSettings:u.data.endSettings,whitelistMintSettings:u.data.whitelistMintSettings,hiddenSettings:u.data.hiddenSettings,price:u.data.price}});case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),h=function(){var t=Object(i.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.PublicKey.findProgramAddress([e.from("metadata"),p.toBuffer(),n.toBuffer(),e.from("edition")],p);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=Object(i.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.PublicKey.findProgramAddress([e.from("metadata"),p.toBuffer(),n.toBuffer()],p);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(i.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.PublicKey.findProgramAddress([e.from("candy_machine"),n.toBuffer()],b);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(c.a.mark((function e(t,n){var i,a,b,m,j,v,O,k,y,w,S,T,P,N,M,C,A,E;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=s.e.Keypair.generate(),e.next=3,Object(d.c)(i.publicKey,n);case 3:if(a=e.sent[0],!t.state.tokenMint){e.next=10;break}return e.next=7,Object(d.c)(t.state.tokenMint,n);case 7:e.t0=e.sent[0],e.next=11;break;case 10:e.t0=n;case 11:return b=e.t0,m=t.id,j=[],v=[i],O=[],e.t1=s.e.SystemProgram,e.t2=n,e.t3=i.publicKey,e.t4=o.a.span,e.next=22,t.program.provider.connection.getMinimumBalanceForRentExemption(o.a.span);case 22:if(e.t5=e.sent,e.t6=o.b,e.t7={fromPubkey:e.t2,newAccountPubkey:e.t3,space:e.t4,lamports:e.t5,programId:e.t6},e.t8=e.t1.createAccount.call(e.t1,e.t7),e.t9=o.c.createInitMintInstruction(o.b,i.publicKey,0,n,n),e.t10=f(a,n,n,i.publicKey),e.t11=o.c.createMintToInstruction(o.b,i.publicKey,a,n,[],1),k=[e.t8,e.t9,e.t10,e.t11],!t.state.gatekeeper){e.next=45;break}return e.t12=j,e.next=34,Object(d.e)(n,t.state.gatekeeper.gatekeeperNetwork);case 34:if(e.t13=e.sent[0],e.t14={pubkey:e.t13,isWritable:!0,isSigner:!1},e.t12.push.call(e.t12,e.t14),!t.state.gatekeeper.expireOnUse){e.next=45;break}return j.push({pubkey:d.a,isWritable:!1,isSigner:!1}),e.t15=j,e.next=42,Object(d.d)(t.state.gatekeeper.gatekeeperNetwork);case 42:e.t16=e.sent[0],e.t17={pubkey:e.t16,isWritable:!1,isSigner:!1},e.t15.push.call(e.t15,e.t17);case 45:if(!t.state.whitelistMintSettings){e.next=60;break}return y=new s.e.PublicKey(t.state.whitelistMintSettings.mint),e.next=49,Object(d.c)(y,n);case 49:if(w=e.sent[0],j.push({pubkey:w,isWritable:!0,isSigner:!1}),!t.state.whitelistMintSettings.mode.burnEveryTime){e.next=60;break}return S=s.e.Keypair.generate(),j.push({pubkey:y,isWritable:!0,isSigner:!1}),j.push({pubkey:S.publicKey,isWritable:!1,isSigner:!0}),v.push(S),e.next=58,t.program.provider.connection.getAccountInfo(w);case 58:e.sent&&(k.push(o.c.createApproveInstruction(o.b,w,S.publicKey,n,[],1)),O.push(o.c.createRevokeInstruction(o.b,w,n,[])));case 60:return t.state.tokenMint&&(T=s.e.Keypair.generate(),v.push(T),j.push({pubkey:b,isWritable:!0,isSigner:!1}),j.push({pubkey:T.publicKey,isWritable:!1,isSigner:!0}),k.push(o.c.createApproveInstruction(o.b,b,T.publicKey,n,[],t.state.price.toNumber())),O.push(o.c.createRevokeInstruction(o.b,b,n,[]))),e.next=63,g(i.publicKey);case 63:return P=e.sent,e.next=66,h(i.publicKey);case 66:return N=e.sent,e.next=69,x(m);case 69:return M=e.sent,C=Object(r.a)(M,2),A=C[0],E=C[1],e.t18=k,e.next=76,t.program.instruction.mintNft(E,{accounts:{candyMachine:m,candyMachineCreator:A,payer:n,wallet:t.state.treasury,mint:i.publicKey,metadata:P,masterEdition:N,mintAuthority:n,updateAuthority:n,tokenMetadataProgram:p,tokenProgram:o.b,systemProgram:u.SystemProgram.programId,rent:s.e.SYSVAR_RENT_PUBKEY,clock:s.e.SYSVAR_CLOCK_PUBKEY,recentBlockhashes:s.e.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,instructionSysvarAccount:s.e.SYSVAR_INSTRUCTIONS_PUBKEY},remainingAccounts:j.length>0?j:void 0});case 76:return e.t19=e.sent,e.t18.push.call(e.t18,e.t19),e.prev=78,e.next=81,Object(l.a)(t.program.provider.connection,t.program.provider.wallet,[k,O],[v,[]]);case 81:return e.abrupt("return",e.sent.txs.map((function(e){return e.txid})));case 84:e.prev=84,e.t20=e.catch(78),console.log(e.t20);case 87:return e.abrupt("return",[]);case 88:case"end":return e.stop()}}),e,null,[[78,84]])})));return function(t,n){return e.apply(this,arguments)}}(),O=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(16).Buffer)},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r,i=n(19),a=n(4),c=n(1),s=n.n(c),o=n(5),u=n(101);!function(e){e[e.Sequential=0]="Sequential",e[e.Parallel=1]="Parallel",e[e.StopOnFailure=2]="StopOnFailure"}(r||(r={}));var l=function(){var e=Object(a.a)(s.a.mark((function e(t,n,a,c){var l,d,b,m,f,j,h,g,x,v,O,k,y,w,S=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=S.length>4&&void 0!==S[4]?S[4]:r.Parallel,d=S.length>5&&void 0!==S[5]?S[5]:"singleGossip",b=S.length>6&&void 0!==S[6]?S[6]:function(e,t){},m=S.length>7&&void 0!==S[7]?S[7]:function(e,t){return!1},f=S.length>8?S[8]:void 0,n.publicKey){e.next=7;break}throw new u.f;case 7:if(j=[],f){e.next=12;break}return e.next=11,t.getRecentBlockhash(d);case 11:f=e.sent;case 12:h=function(e){var t=a[e],r=c[e];if(0===t.length)return"continue";var s=new o.Transaction;t.forEach((function(e){return s.add(e)})),s.recentBlockhash=f.blockhash,s.setSigners.apply(s,[n.publicKey].concat(Object(i.a)(r.map((function(e){return e.publicKey}))))),r.length>0&&s.partialSign.apply(s,Object(i.a)(r)),j.push(s)},g=0;case 14:if(!(g<a.length)){e.next=21;break}if("continue"!==h(g)){e.next=18;break}return e.abrupt("continue",18);case 18:g++,e.next=14;break;case 21:return e.next=23,n.signAllTransactions(j);case 23:x=e.sent,v=[],O={breakEarly:!1,i:0},console.log("Signed txns length",x.length,"vs handed in length",a.length),k=s.a.mark((function e(n){var i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=p({connection:t,signedTransaction:x[n]})).then((function(e){var t=e.txid;e.slot;b(t,n)})).catch((function(e){m(x[n],n),l===r.StopOnFailure&&(O.breakEarly=!0,O.i=n)})),l===r.Parallel){e.next=21;break}return e.prev=3,e.next=6,i;case 6:e.next=19;break;case 8:if(e.prev=8,e.t0=e.catch(3),console.log("Caught failure",e.t0),!O.breakEarly){e.next=19;break}return console.log("Died on ",O.i),e.t1=O.i,e.next=16,Promise.all(v);case 16:return e.t2=e.sent,e.t3={number:e.t1,txs:e.t2},e.abrupt("return",{v:e.t3});case 19:e.next=22;break;case 21:v.push(i);case 22:case"end":return e.stop()}}),e,null,[[3,8]])})),y=0;case 29:if(!(y<x.length)){e.next=37;break}return e.delegateYield(k(y),"t0",31);case 31:if("object"!==typeof(w=e.t0)){e.next=34;break}return e.abrupt("return",w.v);case 34:y++,e.next=29;break;case 37:if(l===r.Parallel){e.next=40;break}return e.next=40,Promise.all(v);case 40:return e.t1=x.length,e.next=43,Promise.all(v);case 43:return e.t2=e.sent,e.abrupt("return",{number:e.t1,txs:e.t2});case 45:case"end":return e.stop()}}),e)})));return function(t,n,r,i){return e.apply(this,arguments)}}(),d=function(){return(new Date).getTime()/1e3},b=15e3;function p(e){return m.apply(this,arguments)}function m(){return(m=Object(a.a)(s.a.mark((function e(t){var n,r,i,c,o,u,l,p,m,j,g,v,O;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.signedTransaction,r=t.connection,i=t.timeout,c=void 0===i?b:i,o=n.serialize(),u=d(),l=0,e.next=6,r.sendRawTransaction(o,{skipPreflight:!0});case 6:return p=e.sent,console.log("Started awaiting confirmation for",p),m=!1,Object(a.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m||!(d()-u<c)){e.next=6;break}return r.sendRawTransaction(o,{skipPreflight:!0}),e.next=4,x(500);case 4:e.next=0;break;case 6:case"end":return e.stop()}}),e)})))(),e.prev=10,e.next=13,h(p,c,r,"recent",!0);case 13:if(j=e.sent){e.next=16;break}throw new Error("Timed out awaiting confirmation on transaction");case 16:if(!j.err){e.next=19;break}throw console.error(j.err),new Error("Transaction failed: Custom instruction error");case 19:l=(null===j||void 0===j?void 0:j.slot)||0,e.next=47;break;case 22:if(e.prev=22,e.t0=e.catch(10),console.error("Timeout Error caught",e.t0),!e.t0.timeout){e.next=27;break}throw new Error("Timed out awaiting confirmation on transaction");case 27:return g=null,e.prev=28,e.next=31,f(r,n,"single");case 31:g=e.sent.value,e.next=36;break;case 34:e.prev=34,e.t1=e.catch(28);case 36:if(!g||!g.err){e.next=47;break}if(!g.logs){e.next=46;break}v=g.logs.length-1;case 39:if(!(v>=0)){e.next=46;break}if(!(O=g.logs[v]).startsWith("Program log: ")){e.next=43;break}throw new Error("Transaction failed: "+O.slice("Program log: ".length));case 43:--v,e.next=39;break;case 46:throw new Error(JSON.stringify(g.err));case 47:return e.prev=47,m=!0,e.finish(47);case 50:return console.log("Latency",p,d()-u),e.abrupt("return",{txid:p,slot:l});case 52:case"end":return e.stop()}}),e,null,[[10,22,47,50],[28,34]])})))).apply(this,arguments)}function f(e,t,n){return j.apply(this,arguments)}function j(){return(j=Object(a.a)(s.a.mark((function e(t,n,r){var i,a,c,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._recentBlockhash(t._disableBlockhashCaching);case 2:return n.recentBlockhash=e.sent,i=n.serializeMessage(),a=n._serialize(i),c=a.toString("base64"),o=[c,{encoding:"base64",commitment:r}],e.next=10,t._rpcRequest("simulateTransaction",o);case 10:if(!(u=e.sent).error){e.next=13;break}throw new Error("failed to simulate transaction: "+u.error.message);case 13:return e.abrupt("return",u.result);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t,n){return g.apply(this,arguments)}function g(){return g=Object(a.a)(s.a.mark((function e(t,n,r){var i,c,o,u,l,d=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=d.length>3&&void 0!==d[3]?d[3]:"recent",c=d.length>4&&void 0!==d[4]&&d[4],o=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(a.a)(s.a.mark((function e(d,b){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),b({timeout:!0}))}),n);try{l=r.onSignature(t,(function(e,t){o=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),b(u)):(console.log("Resolved via websocket",e),d(u))}),i)}catch(p){o=!0,console.error("WS error in setup",t,p)}case 2:if(o||!c){e.next=8;break}return Object(a.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],o||(u?u.err?(console.log("REST error for",t,u),o=!0,b(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),o=!0,d(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,x(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[l]&&r.removeSignatureListener(l),o=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function x(e){return new Promise((function(t){return setTimeout(t,e)}))}},208:function(e,t,n){},209:function(e,t,n){},211:function(e,t){},214:function(e,t){},226:function(e,t){},237:function(e,t){},238:function(e,t){},259:function(e,t){},262:function(e,t){},268:function(e,t){},279:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(30),c=n.n(a),s=(n(208),n(209),n(21)),o=n(4),u=n(12),l=n(61),d=n(1),b=n.n(d),p=n(62),m=n(320),f=n(327),j=n(314),h=n(319),g=n(324),x=n(5),v=n(178),O=n(135),k=n(110),y=n(312),w=n(318),S=n(90),T=n(9),P=n(7),N=n(14),M=n(15),C=n(24),A=n(8);function E(e){return new C.a(new Date(e).getTime()/1e3)}var L,R,K=!1,W="Minting Paused",D="We have dectected and issue while minting. Standby for an update",_={title:"Welcome!",desc:"Connect your wallet and load in! Whitelist mint starts soon!",countdownEnable:!1,countdownTo:E("2 Jan 2022 00:00:00 GMT"),showPrice:!1,enableCustomHTML:!1},I=function(e){Object(N.a)(n,e);var t=Object(M.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(P.a)(n,[{key:"render",value:function(){return Object(A.jsx)("div",{className:"custom-mint-container",children:Object(A.jsx)("p",{children:"Test 1"})})}}]),n}(i.a.Component),B={enabled:!0,startDate:E("1 Jan 2022 00:00:00 GMT"),endDate:E("8 Jan 2022 00:00:00 GMT"),countdown:!0,title:"White List",desc:void 0,enableCustomHTML:!1},F=function(e){Object(N.a)(n,e);var t=Object(M.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(P.a)(n,[{key:"render",value:function(){return Object(A.jsx)("div",{className:"custom-mint-container",children:Object(A.jsx)("p",{children:"Test 2"})})}}]),n}(i.a.Component),q={startDate:E("7 Jan 2022 00:00:00 GMT"),endDate:void 0,countdown:!1,title:"Public Sale",desc:"Sale is now live. Mint your NFT below",enableCustomHTML:!1},H=function(e){Object(N.a)(n,e);var t=Object(M.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(P.a)(n,[{key:"render",value:function(){return Object(A.jsx)("div",{className:"custom-mint-container",children:Object(A.jsx)("p",{children:"Test 3"})})}}]),n}(i.a.Component),U=n(42),V=Object(p.a)(y.a)(L||(L=Object(l.a)(["\n  \n  width: 100%;\n  height: 60px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n"]))),G=function(e){var t,n,i,a,c=e.onMint,s=e.candyMachine,l=e.isMinting,d=Object(S.c)(),p=d.requestGatewayToken,m=d.gatewayStatus,f=Object(r.useState)(!1),j=Object(u.a)(f,2),h=j[0],g=j[1],x=null===(t=Object(U.f)(B.startDate))||void 0===t?void 0:t.getTime(),v=null===(n=Object(U.f)(B.endDate))||void 0===n?void 0:n.getTime(),O=null===(i=Object(U.f)(q.startDate))||void 0===i?void 0:i.getTime(),k=null===(a=Object(U.f)(q.endDate))||void 0===a?void 0:a.getTime();function y(){return!!(B.enabled&&x&&v&&Date.now()>x&&Date.now()<v)}var T=y();function P(){return O&&k?Date.now()>O&&Date.now()<k:O?Date.now()>O:void 0}console.log("is Whitelist Sale Active? "+y());var N=P();return console.log("is public sale live? "+P()),console.log(null===s||void 0===s?void 0:s.state.isSoldOut,l,T||N,!(null!==s&&void 0!==s&&s.state.isActive)),Object(r.useEffect)((function(){m===S.b.ACTIVE&&h&&(console.log("Minting"),c(),g(!1))}),[m,h,g,c]),Object(A.jsx)(V,{className:"minting-button",disabled:(null===s||void 0===s?void 0:s.state.isSoldOut)||l||K||!(T||N),onClick:Object(o.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g(!0),null===s||void 0===s||!s.state.isActive||null===s||void 0===s||!s.state.gatekeeper){e.next=15;break}if(console.log("gatekeeper active"),m!==S.b.ACTIVE){e.next=8;break}console.log(m+S.b.ACTIVE),g(!0),e.next=13;break;case 8:return console.log("requeting token"),e.next=11,p();case 11:t=e.sent,console.log(t);case 13:e.next=18;break;case 15:return e.next=17,c();case 17:g(!1);case 18:case"end":return e.stop()}}),e)}))),variant:"contained",children:Object(A.jsx)("div",{className:"mint-button-text",children:null!==s&&void 0!==s&&s.state.isSoldOut?"SOLD OUT":l?Object(A.jsx)(w.a,{}):K?"Mint Paused":"MINT"})})},Y=n(315),J=n(153),z=n(310),Z=n(332),Q=Object(z.a)((function(e){return Object(Z.a)({root:{display:"flex",padding:e.spacing(0),"& > *":{margin:e.spacing(.5),marginRight:0,width:e.spacing(6),height:e.spacing(6),display:"flex",flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",background:"#384457",color:"white",borderRadius:5,fontSize:10}},done:{display:"flex",margin:e.spacing(1),marginRight:0,padding:e.spacing(1),flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",background:"#384457",color:"white",borderRadius:5,fontWeight:"bold",fontSize:18},item:{fontWeight:"bold",fontSize:18}})})),X=function(e){var t=e.date,n=e.status,i=e.style,a=e.start,c=e.end,s=e.onComplete,o=Q(),l=Object(r.useState)(!!(a&&c&&t)&&a.getTime()-Date.now()<0),d=Object(u.a)(l,2),b=d[0],p=(d[1],function(e){var t=e.days,r=e.hours,a=e.minutes,c=e.seconds;return r+=24*t,e.completed?n?Object(A.jsx)("span",{className:o.done,children:n}):null:Object(A.jsxs)("div",{className:o.root,style:i,children:[b&&Object(A.jsx)(j.a,{elevation:0,children:Object(A.jsx)("span",{className:o.item,children:"+"})}),Object(A.jsxs)(j.a,{elevation:0,children:[Object(A.jsx)("span",{className:o.item,children:r<10?"0".concat(r):r}),Object(A.jsx)("span",{children:"hrs"})]}),Object(A.jsxs)(j.a,{elevation:0,children:[Object(A.jsx)("span",{className:o.item,children:a<10?"0".concat(a):a}),Object(A.jsx)("span",{children:"mins"})]}),Object(A.jsxs)(j.a,{elevation:0,children:[Object(A.jsx)("span",{className:o.item,children:c<10?"0".concat(c):c}),Object(A.jsx)("span",{children:"secs"})]})]})});return t&&a&&c&&b&&J.a,t?Object(A.jsx)(J.a,{date:t,onComplete:s,renderer:p}):null};!function(e){e[e.AnticipationPhase=0]="AnticipationPhase",e[e.SetPrice=1]="SetPrice",e[e.GracePeriod=2]="GracePeriod",e[e.Lottery=3]="Lottery",e[e.RaffleFinished=4]="RaffleFinished",e[e.WaitForCM=5]="WaitForCM",e[e.Phase4=6]="Phase4",e[e.MintOff=7]="MintOff",e[e.WhiteListMint=8]="WhiteListMint",e[e.PublicMint=9]="PublicMint",e[e.Welcome=10]="Welcome",e[e.Panic=11]="Panic"}(R||(R={}));var $,ee,te=function(e){var t=e.phaseName,n=e.desc,r=e.date,i=e.status,a=e.countdownEnable;return Object(A.jsxs)(A.Fragment,{children:[!0===a&&Object(A.jsx)(h.a,{container:!0,style:{position:"absolute",top:"-30px",left:"0px"},children:Object(A.jsx)(m.a,{style:{justifyContent:"center"},children:Object(A.jsx)(X,{date:Object(U.f)(r),style:{justifyContent:"center"},status:i||"COMPLETE"})})}),Object(A.jsx)(h.a,{container:!0,className:"mintHeader",alignItems:"center",children:Object(A.jsx)(h.a,{children:Object(A.jsx)(Y.a,{variant:"h5",style:{fontWeight:600,textAlign:"center"},className:"pb-2",children:t})})}),n&&Object(A.jsx)(Y.a,{className:"pb-2",variant:"body1",color:"textSecondary",children:n})]})},ne=function(e){var t=e.phase,n=e.candyMachine,r=Object(v.b)();return console.log("D",n),console.log("Wallet",r),Object(A.jsxs)(A.Fragment,{children:[t===R.Panic&&Object(A.jsx)(te,{phaseName:W,desc:D}),t===R.Welcome&&Object(A.jsx)(te,{phaseName:_.title,desc:_.desc,date:_.countdownTo,countdownEnable:_.countdownEnable}),t===R.WhiteListMint&&Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(te,{phaseName:B.title,desc:B.desc,date:B.endDate,countdownEnable:B.countdown,status:"WHITELIST LIVE"})}),t===R.PublicMint&&Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(te,{phaseName:q.title,desc:q.desc,date:q.endDate,countdownEnable:q.countdown,status:"LIVE"})})]})},re=Object(p.a)(O.a)($||($=Object(l.a)(["\n  position: absolute;\n  left: 0px;\n  bottom: -15px;\n  width: 100%;\n  height: 60px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n  transform: translate(0%, -50%);\n"]))),ie=p.a.div(ee||(ee=Object(l.a)(["\n  position: absolute;\n  width: 100%;\n  left: 0px;\n  bottom: 15px;\n"]))),ae=function(e){var t,n,i=e.rpcHost,a=Object(r.useState)(0),c=Object(u.a)(a,2),l=c[0],d=c[1],p=Object(r.useState)(!1),O=Object(u.a)(p,2),y=O[0],w=O[1],T=Object(r.useState)(null),P=Object(u.a)(T,2),N=P[0],M=P[1],C=Object(r.useState)(null),E=Object(u.a)(C,2),L=E[0],W=E[1],D=Object(r.useState)(),V=Object(u.a)(D,2),Y=V[0],J=V[1],z=Object(r.useState)(),Z=Object(u.a)(z,2),Q=Z[0],X=Z[1],$=Object(r.useState)(null),ee=Object(u.a)($,2),te=ee[0],ae=ee[1],ce=Object(v.b)(),se=Object(r.useMemo)((function(){if(ce&&ce.publicKey&&ce.signAllTransactions&&ce.signTransaction)return{publicKey:ce.publicKey,signAllTransactions:ce.signAllTransactions,signTransaction:ce.signTransaction}}),[ce]),oe=Object(r.useState)({open:!1,message:"",severity:void 0}),ue=Object(u.a)(oe,2),le=ue[0],de=ue[1],be=function(){var t=Object(o.a)(b.a.mark((function t(){var n,r,i,a,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,w(!0),null===(n=document.getElementById("#identity"))||void 0===n||n.click(),!(ce.connected&&null!==Q&&void 0!==Q&&Q.program&&ce.publicKey)){t.next=13;break}return t.next=6,Object(k.d)(Q,ce.publicKey);case 6:if(i=t.sent[0],a={err:!0},!i){t.next=12;break}return t.next=11,Object(k.b)(i,e.txTimeout,e.connection,"singleGossip",!0);case 11:a=t.sent;case 12:null!==(r=a)&&void 0!==r&&r.err?de({open:!0,message:"Mint failed! Please try again!",severity:"error"}):(de({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"}),M(N+1),l&&l>0&&d(l-1));case 13:t.next=20;break;case 15:t.prev=15,t.t0=t.catch(0),c=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(c="SOLD OUT!",window.location.reload()):312===t.t0.code&&(c="Minting period hasn't started yet."):t.t0.message?t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?c="SOLD OUT!":t.t0.message.indexOf("0x135")&&(c="Insufficient funds to mint. Please fund your wallet.")):c="Transaction Timeout! Please try again.",de({open:!0,message:c,severity:"error"});case 20:return t.prev=20,w(!1),t.finish(20);case 23:case"end":return t.stop()}}),t,null,[[0,15,20,23]])})));return function(){return t.apply(this,arguments)}}();Object(r.useEffect)((function(){Object(o.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(se){t.next=3;break}return console.log("anchor wallet not found"),t.abrupt("return");case 3:if(console.log("wallet connected"),se.publicKey&&J(se.publicKey),!e.candyMachineId){t.next=20;break}return t.prev=6,t.next=9,Object(k.c)(se,e.candyMachineId,e.connection);case 9:return n=t.sent,t.next=12,X(n);case 12:t.next=18;break;case 14:t.prev=14,t.t0=t.catch(6),console.log("Problem getting candy machine state"),console.log(t.t0);case 18:t.next=21;break;case 20:console.log("No candy machine detected in configuration.");case 21:case"end":return t.stop()}}),t,null,[[6,14]])})))()}),[se,e.candyMachineId,e.connection]),Object(r.useEffect)((function(){function t(){return(t=Object(o.a)(b.a.mark((function t(){var n,r,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!Y||null===Q||void 0===Q||null===(n=Q.state.whitelistMintSettings)||void 0===n||!n.mint){t.next=11;break}return t.prev=1,t.next=4,e.connection.getParsedTokenAccountsByOwner(Y,{mint:null===Q||void 0===Q||null===(r=Q.state.whitelistMintSettings)||void 0===r?void 0:r.mint});case 4:return i=t.sent,t.abrupt("return",i.value[0].account.data.parsed.info.tokenAmount.amount);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}(function(){return t.apply(this,arguments)})().then((function(e){var t,n;(d(e),null!==Q&&void 0!==Q&&null!==(t=Q.state.whitelistMintSettings)&&void 0!==t&&t.discountPrice&&e)?ae((null===Q||void 0===Q||null===(n=Q.state.whitelistMintSettings)||void 0===n?void 0:n.discountPrice.toNumber())/1e9):null!==Q&&void 0!==Q&&Q.state.price&&ae((null===Q||void 0===Q?void 0:Q.state.price.toNumber())/1e9)})),null!==Q&&void 0!==Q&&Q.state.itemsAvailable&&W(null===Q||void 0===Q?void 0:Q.state.itemsAvailable),null==(null===Q||void 0===Q?void 0:Q.state.itemsRedeemed)?M(0):M(null===Q||void 0===Q?void 0:Q.state.itemsRedeemed)}),[Q,Y,e.connection]);var pe=function(e){var t,n,r,i=(new Date).getTime(),a=null===(t=Object(U.f)(B.startDate))||void 0===t?void 0:t.getTime(),c=null===(n=Object(U.f)(B.endDate))||void 0===n?void 0:n.getTime(),s=null===(r=Object(U.f)(q.startDate))||void 0===r?void 0:r.getTime();return!0===K?R.Panic:s&&i>s?R.PublicMint:B.enabled&&a&&c&&i>a&&i<c?R.WhiteListMint:R.Welcome}();return Object(A.jsxs)(m.a,{children:[Object(A.jsx)(m.a,{maxWidth:"xs",style:{position:"relative"},children:Object(A.jsx)(j.a,{style:{padding:"34px 24px 90px 24px",display:"flex",borderRadius:6},className:"minting-box",children:Object(A.jsxs)(h.a,{container:!0,justifyContent:"space-between",direction:"column",children:[Object(A.jsx)(ne,{phase:pe,candyMachine:Q,rpcUrl:i}),Object(A.jsxs)("div",{children:[pe===R.Welcome&&_.enableCustomHTML&&Object(A.jsx)(I,{}),pe===R.WhiteListMint&&B.enableCustomHTML&&Object(A.jsx)(F,{}),pe===R.PublicMint&&q.enableCustomHTML&&Object(A.jsx)(H,{}),(pe===R.PublicMint||R.WhiteListMint)&&Object(A.jsxs)(A.Fragment,{children:[pe===R.WhiteListMint&&Object(A.jsxs)("div",{className:"card minting-info text-center",children:[l>=0?Object(A.jsx)("h1",{children:l}):Object(A.jsx)("div",{className:"loading"}),Object(A.jsx)("div",{children:Object(A.jsx)("p",{children:"Mints to Claim"})})]}),Object(A.jsxs)(h.a,{container:!0,justifyContent:"space-between",color:"textSecondary",children:[Object(A.jsx)("div",{className:"test-stat",children:(pe===R.WhiteListMint||pe===R.PublicMint)&&(null!==L&&null!==N?Object(A.jsx)("p",{children:N+" / "+L}):Object(A.jsx)("p",{className:"loading"}))}),Object(A.jsx)("div",{className:"text-end",children:pe===R.Welcome&&_.showPrice||pe===R.WhiteListMint||pe===R.PublicMint?Object(A.jsx)(A.Fragment,{children:te?Object(A.jsxs)("p",{children:[te," Sol"]}):Object(A.jsx)("p",{className:"loading"})}):""})]}),ce.connected?Object(A.jsx)(ie,{children:null!==Q&&void 0!==Q&&Q.state.isActive&&null!==Q&&void 0!==Q&&Q.state.gatekeeper&&ce.publicKey&&ce.signTransaction?Object(A.jsx)(S.a,{wallet:{publicKey:ce.publicKey||new x.PublicKey(k.a),signTransaction:ce.signTransaction},gatekeeperNetwork:null===Q||void 0===Q||null===(t=Q.state)||void 0===t||null===(n=t.gatekeeper)||void 0===n?void 0:n.gatekeeperNetwork,clusterUrl:i,options:{autoShowModal:!1},children:Object(A.jsx)(G,{candyMachine:Q,isMinting:y,onMint:be})}):Object(A.jsx)(G,{candyMachine:Q,isMinting:y,onMint:be})}):Object(A.jsxs)(re,{children:["Connect",""]})]})]})]})})}),Object(A.jsx)(f.a,{open:le.open,autoHideDuration:6e3,onClose:function(){return de(Object(s.a)(Object(s.a)({},le),{},{open:!1}))},children:Object(A.jsx)(g.a,{onClose:function(){return de(Object(s.a)(Object(s.a)({},le),{},{open:!1}))},severity:le.severity,children:le.message})})]})},ce=n(328),se=n(329),oe=n(325),ue=n(330),le=n(331),de=n(326),be=n(192),pe=n(323),me=Object(be.a)({palette:{type:"dark"}}),fe=new C.e.PublicKey("CuaN5JgGnsLcP3huvNcP4aZKtvyFF9kbxfFQgyvDJGv4"),je="https://api.devnet.solana.com",he=new C.e.Connection(je),ge=parseInt(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CANDY_MACHINE_ID:"CuaN5JgGnsLcP3huvNcP4aZKtvyFF9kbxfFQgyvDJGv4",REACT_APP_SOLANA_NETWORK:"devnet",REACT_APP_SOLANA_RPC_HOST:"https://api.devnet.solana.com"}).REACT_APP_CANDY_START_DATE,10),xe=function(){var e=Object(r.useMemo)((function(){return Object(x.clusterApiUrl)("devnet")}),[]),t=Object(r.useMemo)((function(){return[Object(ce.a)(),Object(se.a)(),Object(oe.a)(),Object(ue.a)()]}),[]);function n(){document.getElementById("mobileNavContainer").classList.toggle("open-menu"),console.log("pressed")}return Object(A.jsxs)("div",{children:[Object(A.jsxs)("div",{id:"mobileNavContainer",className:"mobile-nav",children:[Object(A.jsx)("div",{className:"mobile-nav-close-button",children:Object(A.jsx)("img",{src:"/icons/close.svg",alt:"",onClick:n})}),Object(A.jsxs)("ul",{children:[Object(A.jsx)("li",{children:Object(A.jsx)("img",{className:"mobile-nav-logo",src:"/img/logo.png",alt:""})}),Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"/#link1",onClick:n,children:"Link 1"})}),Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"/#link2",onClick:n,children:"Link 2"})}),Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"/#link3",onClick:n,children:"Link 3"})}),Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"/#link4",onClick:n,children:"Link 4"})}),Object(A.jsx)("li",{children:Object(A.jsxs)("div",{className:"social-icons",children:[Object(A.jsx)("a",{href:"https://twitter.com",target:"_blank",rel:"noreferrer",children:Object(A.jsx)("img",{className:"nav-social",src:"/icons/twitter.svg",alt:""})}),Object(A.jsx)("a",{href:"https://discord.com",target:"_blank",rel:"noreferrer",children:Object(A.jsx)("img",{className:"nav-social",src:"/icons/discord.svg",alt:""})})]})})]})]}),Object(A.jsx)("div",{className:"mobile-menu-button",onClick:n,children:Object(A.jsx)("img",{src:"/icons/menu.svg",alt:""})}),Object(A.jsx)("nav",{children:Object(A.jsxs)("div",{className:"nav-container",children:[Object(A.jsx)("img",{className:"nav-logo",src:"/img/logo.png",alt:""}),Object(A.jsx)("a",{className:"hide-800",href:"/#link1",children:"Link 1"}),Object(A.jsx)("a",{className:"hide-800",href:"/#link2",children:"Link 2"}),Object(A.jsx)("a",{className:"hide-800",href:"/#link3",children:"Link 3"}),Object(A.jsx)("a",{className:"hide-800",href:"/#link4",children:"Link 4"}),Object(A.jsxs)("div",{className:"social-icons hide-800",children:[Object(A.jsx)("a",{href:"https://twitter.com",target:"_blank",rel:"noreferrer",children:Object(A.jsx)("img",{className:"nav-social",src:"/icons/twitter.svg",alt:""})}),Object(A.jsx)("a",{href:"https://discord.com",target:"_blank",rel:"noreferrer",children:Object(A.jsx)("img",{className:"nav-social",src:"/icons/discord.svg",alt:""})})]})]})}),Object(A.jsxs)("div",{className:"content-wrapper",children:[Object(A.jsxs)("header",{className:"card",id:"link1",children:[Object(A.jsxs)("div",{style:{padding:"0 24px 0 24px 0"},children:[Object(A.jsx)("h3",{className:"text-secondary-color",children:"Welcome To"}),Object(A.jsx)("h1",{className:"pb-3",children:"The Boiler Plate"}),Object(A.jsx)("p",{className:"text-secondary-color",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque ipsum non est porta mollis. Donec sapien sapien, dictum eget enim sed, hendrerit semper orci. Donec ante magna, consequat at eros ac, eleifend dictum sem. Nam vitae condimentum lorem. Vestibulum molestie dui turpis, tincidunt porta sem congue nec."})]}),Object(A.jsx)("div",{children:Object(A.jsx)(pe.a,{theme:me,children:Object(A.jsx)(le.a,{endpoint:e,children:Object(A.jsx)(de.a,{wallets:t,autoConnect:!0,children:Object(A.jsx)(O.b,{children:Object(A.jsx)(ae,{candyMachineId:fe,connection:he,startDate:ge,txTimeout:3e4,rpcHost:je})})})})})})]}),Object(A.jsx)("div",{id:"link2",className:"container",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit aliquet, semper sapien sed, ornare augue. Phasellus sed velit interdum, sagittis metus quis, facilisis lectus. Cras sollicitudin purus at magna eleifend maximus. Nulla nec nulla in nunc maximus viverra in at mauris. Fusce sodales dolor nisi, et vehicula orci porta id. In placerat nunc sed erat lacinia tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum commodo eget metus vitae tempus. Aliquam pharetra mi at efficitur accumsan. Curabitur venenatis libero a ex porttitor, at auctor turpis hendrerit. Nam commodo, risus non consequat pretium, erat ante auctor purus, a cursus dolor erat at velit. Maecenas dignissim, dolor sed laoreet aliquam, tortor lacus faucibus urna, eget mattis massa sem ac dui. Nam semper hendrerit interdum. Etiam at dictum nisi."}),Object(A.jsx)("div",{id:"link3",className:"container card",children:Object(A.jsx)("h1",{className:"pb-3",children:"Lorem ipsum"})}),Object(A.jsxs)("div",{id:"link4",className:"container faq",children:[Object(A.jsx)("h1",{style:{padding:"0 0 24px 0"},children:"FAQ"}),Object(A.jsxs)("div",{children:[Object(A.jsx)("h4",{children:"Lorem ipsum?"}),Object(A.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id metus id mauris tincidunt posuere. Vivamus neque odio, imperdiet vitae."}),Object(A.jsx)("hr",{})]}),Object(A.jsxs)("div",{children:[Object(A.jsx)("h4",{children:"Lorem ipsum?"}),Object(A.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id metus id mauris tincidunt posuere. Vivamus neque odio, imperdiet vitae."}),Object(A.jsx)("hr",{})]}),Object(A.jsxs)("div",{children:[Object(A.jsx)("h4",{children:"Lorem ipsum?"}),Object(A.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id metus id mauris tincidunt posuere. Vivamus neque odio, imperdiet vitae."}),Object(A.jsx)("hr",{})]})]})]})]})},ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,333)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),a(e),c(e)}))};c.a.render(Object(A.jsx)(i.a.StrictMode,{children:Object(A.jsx)(xe,{})}),document.getElementById("root")),ve()},42:function(e,t,n){"use strict";(function(e){n.d(t,"f",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return p}));var r=n(4),i=n(1),a=n.n(i),c=n(24),s=n(38),o=(n(5),new c.e.PublicKey("faircnAB9k59Y4TXmLabBULeuTLgV7TkGMGNkjnA15j"),function(e){if(e)return new Date(1e3*e.toNumber())}),u=(new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2}),new c.e.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL")),l=new c.e.PublicKey("gatem74V238djXdzWnJf94Wo1DcnuGkfijbf3AuBhfs"),d=function(){var e=Object(r.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.e.PublicKey.findProgramAddress([n.toBuffer(),s.b.toBuffer(),t.toBuffer()],u);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var t=Object(r.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.e.PublicKey.findProgramAddress([n.toBuffer(),e.from("expire")],l);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(r.a)(a.a.mark((function t(n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.e.PublicKey.findProgramAddress([n.toBuffer(),e.from("gateway"),e.from([0,0,0,0,0,0,0,0]),r.toBuffer()],l);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}).call(this,n(16).Buffer)}},[[279,1,2]]]);
//# sourceMappingURL=main.2ce74881.chunk.js.map