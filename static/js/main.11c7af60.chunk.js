(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(s,t,e){s.exports=e(253)},22:function(s,t,e){},252:function(s,t,e){},253:function(s,t,e){"use strict";e.r(t);var g=e(0),n=e.n(g),v=e(10),a=e.n(v),i=(e(22),e(2)),r=e(3),o=e(5),c=e(4),l=e(1),u=e(6),p=e(11),m=e.n(p),y=e(15),h=e(13),f=e(7),d=e.n(f),b=function(s){function t(s){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(c.a)(t).call(this,s))).state={display:!0},e.animateCursor=e.animateCursor.bind(Object(l.a)(e)),e}return Object(u.a)(t,s),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.animateCursor()}},{key:"componentWillUnmount",value:function(){this._interval&&clearInterval(this._interval)}},{key:"animateCursor",value:function(){var s=this;this._interval=setInterval(function(){s.setState({display:!s.state.display})},500)}},{key:"render",value:function(){var s=this.props,t=s.cursorClassName,e=s.cursor,g=this.state.display;d()(t,"lfm__typing_effect_cursor");return n.a.createElement("span",{style:k(g)},e||"|")}}]),t}(g.Component),k=function(){return{MsTransition:"opacity 0.5s",WebkitTransition:"opacity 0.5s",MozTransition:"opacity 0.5s",transition:"opacity 0.5s",opacity:!(arguments.length>0&&void 0!==arguments[0])||arguments[0]?1:0}},j=function(s){function t(s){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(c.a)(t).call(this,s))).state={index:0,displayText:""},e.getRawText=e.getRawText.bind(Object(l.a)(e)),e.type=e.type.bind(Object(l.a)(e)),e.erase=e.erase.bind(Object(l.a)(e)),e.startTyping=e.startTyping.bind(Object(l.a)(e)),e}return Object(u.a)(t,s),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.startTyping()}},{key:"componentWillUnmount",value:function(){this._timeout&&clearTimeout(this._timeout)}},{key:"startTyping",value:function(){var s=this;this._timeout=setTimeout(function(){s.type()},this.props.typingDelay)}},{key:"getRawText",value:function(){var s=this.props.text;return"string"===typeof s?[s]:Object(h.a)(s)}},{key:"type",value:function(){var s=this,t=this.state,e=t.index,g=t.displayText,n=this.getRawText()[e];n.length>g.length?(g=n.substr(0,g.length+1),this.setState({displayText:g},function(){s._timeout=setTimeout(function(){s.type()},s.props.speed)})):this._timeout=setTimeout(function(){s.erase()},this.props.eraseDelay)}},{key:"erase",value:function(){var s=this,t=this.state,e=t.index,g=t.displayText;0===g.length?(e=e+1===this.getRawText().length?0:e+1,this.setState({index:e},function(){s.startTyping()})):(g=g.substr(-g.length,g.length-1),this.setState({displayText:g},function(){s._timeout=setTimeout(function(){s.erase(),s.props.resetTranscript()},s.props.speed)}))}},{key:"render",value:function(){var s=this.props,t=(s.speed,s.typingDelay,s.eraseDelay,s.staticText),e=(s.text,s.className),g=s.cursor,v=s.cursorClassName,a=(s.resetTranscript,s.startListening,Object(y.a)(s,["speed","typingDelay","eraseDelay","staticText","text","className","cursor","cursorClassName","resetTranscript","startListening"])),i=this.state.displayText,r=d()(e,"lfm__typing_effect");return n.a.createElement("div",Object.assign({},a,{className:r}),t?n.a.createElement("span",{className:"lfm__typing_effect_static_text"},t,"\xa0"):null,n.a.createElement("span",{className:"lfm__typing_effect_text"},i),n.a.createElement(b,{cursor:g,cursorClassName:v}))}}]),t}(g.Component);j.defaultProps={speed:200,eraseDelay:5e3,typingDelay:2500};var T=j,w=e(12),x=e.n(w),O=e(14),_=(e(251),e(252),function(s){function t(s){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(c.a)(t).call(this,s))).onSelectFlag=e.onSelectFlag.bind(Object(l.a)(e)),e.state={activeFontFamily:"Open Sans"},e}return Object(u.a)(t,s),Object(r.a)(t,[{key:"reset",value:function(){this.setState({transcript:void 0})}},{key:"onSelectFlag",value:function(s){"GB"===s?(console.log("Great Britian"),this.props.recognition.lang="en-GB"):"CN"===s?(console.log("China"),this.props.recognition.lang="zh-CN"):(console.log("USA"),this.props.recognition.lang="en-US")}},{key:"render",value:function(){var s=this,t=this.props,e=t.transcript,g=t.resetTranscript,v=t.startListening;if(!t.browserSupportsSpeechRecognition)return null;return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement(T,{text:e,speed:1,className:"apply-font apply-font-size",cursorClassName:"text",resetTranscript:g,startListening:v}),n.a.createElement(m.a,{apiKey:"AIzaSyCpdeRd7M5AIGLNx6TH1Dov4Fki8LQJzJc",activeFontFamily:this.state.activeFontFamily,onChange:function(t){return s.setState({activeFontFamily:t.family})}}),n.a.createElement(O.a,{countries:["US","GB","CN"],defaultCountry:"US",onSelect:this.onSelectFlag})))}}]),t}(g.Component)),C=x()({autoStart:!0,continuous:!0})(_);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(n.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(s){s.unregister()})},9:function(s,t,e){var g={"./ad.svg":29,"./ae.svg":30,"./af.svg":31,"./ag.svg":32,"./ai.svg":33,"./al.svg":34,"./am.svg":35,"./ao.svg":36,"./ar.svg":37,"./as.svg":38,"./at.svg":39,"./au.svg":40,"./aw.svg":41,"./az.svg":42,"./ba.svg":43,"./bb.svg":44,"./bd.svg":45,"./be.svg":46,"./bf.svg":47,"./bg.svg":48,"./bh.svg":49,"./bi.svg":50,"./bj.svg":51,"./bm.svg":52,"./bo.svg":53,"./br.svg":54,"./bs.svg":55,"./bt.svg":56,"./bw.svg":57,"./by.svg":58,"./bz.svg":59,"./ca.svg":60,"./cd.svg":61,"./cf.svg":62,"./cg.svg":63,"./ch.svg":64,"./ci.svg":65,"./ck.svg":66,"./cl.svg":67,"./cm.svg":68,"./cn.svg":69,"./co.svg":70,"./cr.svg":71,"./cu.svg":72,"./cv.svg":73,"./cw.svg":74,"./cy.svg":75,"./cz.svg":76,"./de.svg":77,"./dj.svg":78,"./dk.svg":79,"./dm.svg":80,"./do.svg":81,"./dz.svg":82,"./ec.svg":83,"./ee.svg":84,"./eg.svg":85,"./er.svg":86,"./es.svg":87,"./et.svg":88,"./fi.svg":89,"./fj.svg":90,"./fk.svg":91,"./fm.svg":92,"./fo.svg":93,"./fr.svg":94,"./ga.svg":95,"./gb.svg":96,"./gd.svg":97,"./ge.svg":98,"./gg.svg":99,"./gh.svg":100,"./gi.svg":101,"./gl.svg":102,"./gm.svg":103,"./gn.svg":104,"./gq.svg":105,"./gr.svg":106,"./gt.svg":107,"./gu.svg":108,"./gw.svg":109,"./hk.svg":110,"./hn.svg":111,"./hr.svg":112,"./ht.svg":113,"./hu.svg":114,"./id.svg":115,"./ie.svg":116,"./il.svg":117,"./im.svg":118,"./in.svg":119,"./io.svg":120,"./iq.svg":121,"./ir.svg":122,"./is.svg":123,"./it.svg":124,"./je.svg":125,"./jm.svg":126,"./jo.svg":127,"./jp.svg":128,"./ke.svg":129,"./kg.svg":130,"./kh.svg":131,"./ki.svg":132,"./km.svg":133,"./kn.svg":134,"./kp.svg":135,"./kr.svg":136,"./kw.svg":137,"./ky.svg":138,"./kz.svg":139,"./la.svg":140,"./lb.svg":141,"./li.svg":142,"./lk.svg":143,"./lr.svg":144,"./ls.svg":145,"./lt.svg":146,"./lu.svg":147,"./lv.svg":148,"./ly.svg":149,"./ma.svg":150,"./mc.svg":151,"./md.svg":152,"./me.svg":153,"./mg.svg":154,"./mh.svg":155,"./mk.svg":156,"./ml.svg":157,"./mm.svg":158,"./mn.svg":159,"./mo.svg":160,"./mp.svg":161,"./mq.svg":162,"./mr.svg":163,"./ms.svg":164,"./mt.svg":165,"./mu.svg":166,"./mv.svg":167,"./mw.svg":168,"./mx.svg":169,"./my.svg":170,"./mz.svg":171,"./na.svg":172,"./nato.svg":173,"./ne.svg":174,"./nf.svg":175,"./ng.svg":176,"./ni.svg":177,"./nl.svg":178,"./no.svg":179,"./np.svg":180,"./nr.svg":181,"./nu.svg":182,"./nz.svg":183,"./om.svg":184,"./pa.svg":185,"./pe.svg":186,"./pf.svg":187,"./pg.svg":188,"./ph.svg":189,"./pk.svg":190,"./pl.svg":191,"./pn.svg":192,"./pr.svg":193,"./ps.svg":194,"./pt.svg":195,"./pw.svg":196,"./py.svg":197,"./qa.svg":198,"./ro.svg":199,"./rs.svg":200,"./ru.svg":201,"./rw.svg":202,"./sa.svg":203,"./sb.svg":204,"./sc.svg":205,"./sd.svg":206,"./se.svg":207,"./sg.svg":208,"./si.svg":209,"./sk.svg":210,"./sl.svg":211,"./sm.svg":212,"./sn.svg":213,"./so.svg":214,"./sr.svg":215,"./ss.svg":216,"./st.svg":217,"./sv.svg":218,"./sx.svg":219,"./sy.svg":220,"./sz.svg":221,"./tc.svg":222,"./td.svg":223,"./tg.svg":224,"./th.svg":225,"./tibet.svg":226,"./tj.svg":227,"./tk.svg":228,"./tm.svg":229,"./tn.svg":230,"./to.svg":231,"./tr.svg":232,"./tt.svg":233,"./tv.svg":234,"./tw.svg":235,"./tz.svg":236,"./ua.svg":237,"./ug.svg":238,"./us.svg":239,"./uy.svg":240,"./uz.svg":241,"./ve.svg":242,"./vi.svg":243,"./vn.svg":244,"./vu.svg":245,"./ws.svg":246,"./ye.svg":247,"./za.svg":248,"./zm.svg":249,"./zw.svg":250};function n(s){var t=v(s);return e(t)}function v(s){var t=g[s];if(!(t+1)){var e=new Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e}return t}n.keys=function(){return Object.keys(g)},n.resolve=v,s.exports=n,n.id=9}},[[16,1,2]]]);
//# sourceMappingURL=main.11c7af60.chunk.js.map