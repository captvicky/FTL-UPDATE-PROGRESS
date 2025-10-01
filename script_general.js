(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer","this.SplitViewer_90B2ED7D_9EE4_71D4_41D9_A7A0630141DD"],"class":"Player","scrollBarMargin":2,"minHeight":0,"minWidth":0,"id":"rootPlayer","watermark":false,"start":"this.init()","data":{"history":{},"textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"volume":1,"stopBackgroundAudio":false,"rate":1,"speechOnTooltip":false},"locales":{"en":"locale/en.txt"},"displayTooltipInTouchScreens":true,"name":"Player798","defaultLocale":"en"},"backgroundColor":["#000000"],"hash": "6edb12ccac977cef8e7d374738f931879a823ca65234a9ec9123ba388683326c", "definitions": [{"progressBarBackgroundColor":["#3399FF"],"toolTipPaddingTop":4,"playbackBarHeadShadowOpacity":0.7,"subtitlesFontSize":"3vmin","vrPointerSelectionColor":"#FF6600","toolTipFontSize":"1.11vmin","progressBackgroundColor":["#000000"],"toolTipShadowColor":"#333138","playbackBarHeadHeight":15,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarLeft":0,"playbackBarBorderRadius":0,"progressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontColor":"#606060","right":0,"playbackBarProgressBorderColor":"#000000","playbackBarHeadBorderSize":0,"progressBottom":10,"playbackBarHeadShadowColor":"#000000","toolTipPaddingRight":6,"playbackBarHeadShadow":true,"toolTipPaddingLeft":6,"subtitlesTextShadowOpacity":1,"progressHeight":2,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadBorderRadius":0,"vrPointerSelectionTime":2000,"propagateClick":false,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesTextShadowVerticalLength":1,"progressBorderSize":0,"playbackBarBottom":5,"toolTipPaddingBottom":4,"subtitlesFontFamily":"Arial","subtitlesTop":0,"playbackBarHeadBorderColor":"#000000","data":{"name":"RightViewer"},"progressRight":"33%","playbackBarBorderSize":0,"progressBarBorderRadius":2,"toolTipBorderColor":"#767676","progressOpacity":0.7,"playbackBarBackgroundOpacity":1,"progressBarBackgroundColorDirection":"horizontal","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBorderSize":0,"class":"ViewerArea","progressBarBorderColor":"#000000","minHeight":50,"subtitlesBottom":50,"minWidth":100,"subtitlesBorderColor":"#FFFFFF","id":"ViewerAreaLabeled_90684203_9EE5_932C_41DB_6E36D80731E4","toolTipBackgroundColor":"#F6F6F6","playbackBarHeight":10,"toolTipFontFamily":"Arial","progressBarBackgroundColorRatios":[0],"playbackBarBackgroundColorDirection":"vertical","playbackBarHeadWidth":6,"subtitlesGap":0,"playbackBarRight":0,"vrPointerColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"progressBorderRadius":2,"subtitlesBackgroundColor":"#000000","playbackBarProgressBorderRadius":0,"progressLeft":"33%","playbackBarProgressBorderSize":0,"surfaceReticleColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","subtitlesFontColor":"#FFFFFF","playbackBarProgressBackgroundColor":["#3399FF"],"show":"this.setPanoramaCameraWithSpot(this.playList_8DC1F17A_9EFF_91DC_41E0_382D6C9EE948, this.PanoramaPlayListItem_8DC3F219_9EFF_935C_41E2_8E51AABE91DE, 166.12391930835733, -2.5190839694656613, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.ViewerAreaLabeled_90684203_9EE5_932C_41DB_6E36D80731E4.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_8DC1F17A_9EFF_91DC_41E0_382D6C9EE948.set('selectedIndex', -1); }, this);this.setPlayListSelectedIndex(this.playList_8DC1F17A_9EFF_91DC_41E0_382D6C9EE948, 0)","top":0,"surfaceReticleSelectionColor":"#FFFFFF","firstTransitionDuration":0,"progressBorderColor":"#000000","height":"100%","width":"100%","toolTipTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3},{"id":"mainPlayList","items":[{"camera":"this.panorama_B44E4360_B829_6840_41D6_EF2809F3FA18_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_B44E4360_B829_6840_41D6_EF2809F3FA18","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"camera":"this.panorama_9293A4E2_9EE4_90EF_41E1_498E5620A058_camera","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_9293A4E2_9EE4_90EF_41E1_498E5620A058","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)"}],"class":"PlayList"},{"class":"PanoramaPlayer","aaEnabled":true,"mouseControlMode":"drag_rotation","displayPlaybackBar":true,"viewerArea":"this.ViewerAreaLabeled_90684203_9EE5_932C_41DB_6E36D80731E4","id":"ViewerAreaLabeled_90684203_9EE5_932C_41DB_6E36D80731E4PanoramaPlayer","touchControlMode":"drag_rotation","arrowKeysAction":"translate","keepModel3DLoadedWithoutLocation":true},{"progressBarBackgroundColor":["#3399FF"],"toolTipPaddingTop":4,"playbackBarHeadShadowOpacity":0.7,"subtitlesFontSize":"3vmin","vrPointerSelectionColor":"#FF6600","toolTipFontSize":"1.11vmin","progressBackgroundColor":["#000000"],"toolTipShadowColor":"#333138","playbackBarHeadHeight":15,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarLeft":0,"playbackBarBorderRadius":0,"progressBackgroundColorRatios":[0],"left":0,"toolTipFontColor":"#606060","playbackBarProgressBorderColor":"#000000","playbackBarHeadBorderSize":0,"progressBottom":10,"playbackBarHeadShadow":true,"playbackBarHeadShadowColor":"#000000","toolTipPaddingRight":6,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipPaddingLeft":6,"subtitlesTextShadowOpacity":1,"progressHeight":2,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadBorderRadius":0,"vrPointerSelectionTime":2000,"propagateClick":false,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesTextShadowVerticalLength":1,"progressBorderSize":0,"playbackBarBottom":5,"subtitlesFontFamily":"Arial","subtitlesTop":0,"playbackBarHeadBorderColor":"#000000","data":{"name":"LeftViewer"},"progressRight":"33%","playbackBarBorderSize":0,"toolTipBorderColor":"#767676","progressBarBorderRadius":2,"toolTipPaddingBottom":4,"progressOpacity":0.7,"playbackBarBackgroundOpacity":1,"progressBarBackgroundColorDirection":"horizontal","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBorderSize":0,"class":"ViewerArea","progressBarBorderColor":"#000000","minHeight":50,"subtitlesBottom":50,"minWidth":100,"subtitlesBorderColor":"#FFFFFF","id":"ViewerAreaLabeled_906B7202_9EE5_932C_41D2_2A6A225D6A23","toolTipBackgroundColor":"#F6F6F6","playbackBarHeight":10,"toolTipFontFamily":"Arial","progressBarBackgroundColorRatios":[0],"playbackBarBackgroundColorDirection":"vertical","playbackBarHeadWidth":6,"subtitlesGap":0,"playbackBarRight":0,"vrPointerColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"progressBorderRadius":2,"subtitlesBackgroundColor":"#000000","playbackBarProgressBorderRadius":0,"progressLeft":"33%","playbackBarProgressBorderSize":0,"surfaceReticleColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","subtitlesFontColor":"#FFFFFF","playbackBarProgressBackgroundColor":["#3399FF"],"show":"this.setPanoramaCameraWithSpot(this.playList_8DDE017A_9EFF_91DC_41CF_D476CA8BE4E8, this.PanoramaPlayListItem_8DC03218_9EFF_935C_41DA_FFB13E4431FA, 5.969020172910668, -0.0327153762268229, 125 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.ViewerAreaLabeled_906B7202_9EE5_932C_41D2_2A6A225D6A23.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_8DDE017A_9EFF_91DC_41CF_D476CA8BE4E8.set('selectedIndex', -1); }, this);this.setPlayListSelectedIndex(this.playList_8DDE017A_9EFF_91DC_41CF_D476CA8BE4E8, 0)","top":0,"surfaceReticleSelectionColor":"#FFFFFF","firstTransitionDuration":0,"progressBorderColor":"#000000","height":"100%","width":"100%","toolTipTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3},{"class":"Panorama","thumbnailUrl":"media/panorama_9293A4E2_9EE4_90EF_41E1_498E5620A058_t.jpg","vfov":180,"frames":[{"cube":{"class":"ImageResource","levels":[{"height":2560,"url":"media/panorama_9293A4E2_9EE4_90EF_41E1_498E5620A058_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":30,"rowCount":5,"width":15360,"tags":"ondemand"},{"height":1536,"url":"media/panorama_9293A4E2_9EE4_90EF_41E1_498E5620A058_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":18,"rowCount":3,"width":9216,"tags":"ondemand"},{"height":1024,"url":"media/panorama_9293A4E2_9EE4_90EF_41E1_498E5620A058_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":12,"rowCount":2,"width":6144,"tags":"ondemand"},{"height":512,"url":"media/panorama_9293A4E2_9EE4_90EF_41E1_498E5620A058_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":6,"rowCount":1,"width":3072,"tags":["ondemand","preload"]}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_9293A4E2_9EE4_90EF_41E1_498E5620A058_t.jpg"}],"id":"panorama_9293A4E2_9EE4_90EF_41E1_498E5620A058","data":{"label":"5"},"hfovMax":130,"hfovMin":"135%","hfov":360,"label":trans('panorama_9293A4E2_9EE4_90EF_41E1_498E5620A058.label')},{"class":"PanoramaCamera","initialSequence":"this.sequence_926B8A54_9EE4_B32B_41DA_97F83B3835E9","id":"panorama_9293A4E2_9EE4_90EF_41E1_498E5620A058_camera","initialPosition":{"pitch":-2.51,"class":"PanoramaCameraPosition","yaw":166.12},"enterPointingToHorizon":true},{"id":"playList_8DDE017A_9EFF_91DC_41CF_D476CA8BE4E8","items":["this.PanoramaPlayListItem_8DC03218_9EFF_935C_41DA_FFB13E4431FA"],"class":"PlayList"},{"class":"Container","scrollBarMargin":2,"minHeight":0,"minWidth":2,"shadowBlurRadius":10,"id":"Container_9046A20F_9EE5_9334_41C5_C6A85A8BBA8A","shadowSpread":1,"shadow":true,"overflow":"scroll","data":{"name":"SeparatorVisible"},"backgroundColor":["#FFFFFF"],"shadowColor":"#000000","backgroundColorRatios":[0],"gap":10,"shadowVerticalLength":0,"scrollBarColor":"#000000","height":"100%","width":"8%","layout":"absolute","cursor":"hand","shadowOpacity":0.3,"maxWidth":6},{"progressBarBackgroundColor":["#3399FF"],"toolTipPaddingTop":4,"playbackBarHeadShadowOpacity":0.7,"subtitlesFontSize":"3vmin","vrPointerSelectionColor":"#FF6600","toolTipFontSize":"1.11vmin","progressBackgroundColor":["#000000"],"toolTipShadowColor":"#333138","playbackBarHeadHeight":15,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarLeft":0,"playbackBarBorderRadius":0,"progressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontColor":"#606060","playbackBarHeadShadow":true,"playbackBarProgressBorderColor":"#000000","playbackBarHeadBorderSize":0,"progressBottom":10,"playbackBarHeadShadowColor":"#000000","toolTipPaddingRight":6,"vrPointerSelectionTime":2000,"toolTipPaddingLeft":6,"subtitlesTextShadowOpacity":1,"progressHeight":2,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadBorderRadius":0,"data":{"name":"Main Viewer"},"propagateClick":false,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesTextShadowVerticalLength":1,"progressBorderSize":0,"playbackBarBottom":5,"playbackBarHeadBorderColor":"#000000","subtitlesFontFamily":"Arial","subtitlesTop":0,"progressRight":"33%","playbackBarBorderSize":0,"toolTipBorderColor":"#767676","progressBarBorderRadius":2,"toolTipPaddingBottom":4,"progressOpacity":0.7,"playbackBarBackgroundOpacity":1,"progressBarBackgroundColorDirection":"horizontal","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBorderSize":0,"class":"ViewerArea","progressBarBorderColor":"#000000","minHeight":50,"subtitlesBottom":50,"minWidth":100,"subtitlesBorderColor":"#FFFFFF","id":"MainViewer","toolTipBackgroundColor":"#F6F6F6","playbackBarHeight":10,"toolTipFontFamily":"Arial","progressBarBackgroundColorRatios":[0],"playbackBarBackgroundColorDirection":"vertical","playbackBarHeadWidth":6,"subtitlesGap":0,"playbackBarRight":0,"vrPointerColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"progressBorderRadius":2,"subtitlesBackgroundColor":"#000000","playbackBarProgressBorderRadius":0,"progressLeft":"33%","playbackBarProgressBorderSize":0,"surfaceReticleColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","subtitlesFontColor":"#FFFFFF","playbackBarProgressBackgroundColor":["#3399FF"],"surfaceReticleSelectionColor":"#FFFFFF","firstTransitionDuration":0,"progressBorderColor":"#000000","height":"100%","width":"100%","toolTipTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3},{"class":"Panorama","thumbnailUrl":"media/panorama_B44E4360_B829_6840_41D6_EF2809F3FA18_t.jpg","data":{"label":"R0011662"},"vfov":180,"frames":[{"cube":{"class":"ImageResource","levels":[{"height":2560,"url":"media/panorama_B44E4360_B829_6840_41D6_EF2809F3FA18_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":30,"rowCount":5,"width":15360,"tags":"ondemand"},{"height":1536,"url":"media/panorama_B44E4360_B829_6840_41D6_EF2809F3FA18_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":18,"rowCount":3,"width":9216,"tags":"ondemand"},{"height":1024,"url":"media/panorama_B44E4360_B829_6840_41D6_EF2809F3FA18_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":12,"rowCount":2,"width":6144,"tags":"ondemand"},{"height":512,"url":"media/panorama_B44E4360_B829_6840_41D6_EF2809F3FA18_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":6,"rowCount":1,"width":3072,"tags":["ondemand","preload"]}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_B44E4360_B829_6840_41D6_EF2809F3FA18_t.jpg"}],"id":"panorama_B44E4360_B829_6840_41D6_EF2809F3FA18","overlays":["this.panorama_B44E4360_B829_6840_41D6_EF2809F3FA18_tcap0"],"hfovMax":130,"hfovMin":"135%","hfov":360,"label":trans('panorama_B44E4360_B829_6840_41D6_EF2809F3FA18.label')},{"class":"HTMLText","backgroundOpacity":0.6,"scrollBarMargin":2,"minHeight":0,"minWidth":0,"id":"HTMLText_9069D204_9EE5_9334_41D0_333595E3C527","left":20,"backgroundColor":["#FFFFFF"],"paddingTop":10,"paddingBottom":10,"data":{"name":"LeftDescription"},"paddingLeft":10,"propagateClick":false,"paddingRight":10,"backgroundColorRatios":[0],"top":20,"width":191,"height":61,"scrollBarColor":"#000000","init":"try{eval('event.source.set(\\'width\\', undefined);event.source.set(\\'height\\', undefined);')}catch(e){console.log(e)}","html":trans('HTMLText_9069D204_9EE5_9334_41D0_333595E3C527.html')},{"children":["this.Container_9064C200_9EE5_932C_41D5_3DE231F5EC0E","this.Container_906B2201_9EE5_932C_41C0_0DEDB2ADA2B9","this.Container_9079620E_9EE5_9334_41B5_5D40C0075B40"],"class":"Container","scrollBarMargin":2,"minHeight":0,"minWidth":0,"id":"SplitViewer_90B2ED7D_9EE4_71D4_41D9_A7A0630141DD","left":"0%","backgroundColor":[],"data":{"name":"SplitViewer"},"propagateClick":false,"backgroundColorRatios":[],"gap":10,"top":"0%","init":"this._initSplitViewer(event.source)","scrollBarColor":"#000000","height":"100%","width":"100%","layout":"absolute","overflow":"scroll"},{"class":"HTMLText","backgroundOpacity":0.6,"scrollBarMargin":2,"minHeight":0,"minWidth":0,"id":"HTMLText_9079F20C_9EE5_9334_41A6_D2B41AD5ABF3","data":{"name":"RightDescription"},"backgroundColor":["#FFFFFF"],"paddingTop":10,"right":20,"paddingBottom":10,"paddingLeft":10,"propagateClick":false,"paddingRight":10,"top":20,"width":154,"height":47,"scrollBarColor":"#000000","backgroundColorRatios":[0],"init":"try{eval('event.source.set(\\'width\\', undefined);event.source.set(\\'height\\', undefined);')}catch(e){console.log(e)}","html":trans('HTMLText_9079F20C_9EE5_9334_41A6_D2B41AD5ABF3.html')},{"class":"PanoramaPlayer","aaEnabled":true,"mouseControlMode":"drag_rotation","displayPlaybackBar":true,"viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation","arrowKeysAction":"translate","keepModel3DLoadedWithoutLocation":true},{"class":"PanoramaCamera","initialSequence":"this.sequence_B337D613_B829_2BC0_41CF_E442958F5877","id":"panorama_B44E4360_B829_6840_41D6_EF2809F3FA18_camera","initialPosition":{"hfov":125,"pitch":-0.02,"class":"PanoramaCameraPosition","yaw":5.97},"enterPointingToHorizon":true},{"class":"Container","scrollBarMargin":2,"minHeight":0,"minWidth":0,"id":"Container_906B2201_9EE5_932C_41C0_0DEDB2ADA2B9","data":{"name":"RightContainer"},"right":0,"backgroundColor":[],"propagateClick":false,"bottom":0,"gap":10,"top":0,"scrollBarColor":"#000000","backgroundColorRatios":[],"width":"50%","children":["this.ViewerAreaLabeled_90684203_9EE5_932C_41DB_6E36D80731E4","this.HTMLText_9079F20C_9EE5_9334_41A6_D2B41AD5ABF3"],"layout":"absolute","overflow":"hidden"},{"class":"Container","scrollBarMargin":2,"minHeight":0,"minWidth":0,"id":"Container_9064C200_9EE5_932C_41D5_3DE231F5EC0E","left":0,"backgroundColor":[],"data":{"name":"LeftContainer"},"propagateClick":false,"backgroundColorRatios":[],"bottom":0,"gap":10,"top":0,"scrollBarColor":"#000000","width":"50%","children":["this.ViewerAreaLabeled_906B7202_9EE5_932C_41D2_2A6A225D6A23","this.HTMLText_9069D204_9EE5_9334_41D0_333595E3C527"],"layout":"absolute","overflow":"hidden"},{"class":"Container","scrollBarMargin":2,"minHeight":0,"minWidth":0,"id":"Container_9079620E_9EE5_9334_41B5_5D40C0075B40","contentOpaque":true,"overflow":"scroll","left":"47%","horizontalAlign":"center","backgroundColor":[],"data":{"name":"Separator"},"propagateClick":false,"backgroundColorRatios":[],"bottom":0,"gap":10,"top":0,"scrollBarColor":"#000000","width":"6%","children":["this.Container_9046A20F_9EE5_9334_41C5_C6A85A8BBA8A"],"layout":"horizontal","cursor":"hand"},{"id":"playList_8DC1F17A_9EFF_91DC_41E0_382D6C9EE948","items":["this.PanoramaPlayListItem_8DC3F219_9EFF_935C_41E2_8E51AABE91DE"],"class":"PlayList"},{"class":"PanoramaPlayer","aaEnabled":true,"mouseControlMode":"drag_rotation","displayPlaybackBar":true,"viewerArea":"this.ViewerAreaLabeled_906B7202_9EE5_932C_41D2_2A6A225D6A23","id":"ViewerAreaLabeled_906B7202_9EE5_932C_41D2_2A6A225D6A23PanoramaPlayer","touchControlMode":"drag_rotation","arrowKeysAction":"translate","keepModel3DLoadedWithoutLocation":true},{"movements":[{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_926B8A54_9EE4_B32B_41DA_97F83B3835E9"},{"id":"PanoramaPlayListItem_8DC03218_9EFF_935C_41DA_FFB13E4431FA","camera":"this.panorama_B44E4360_B829_6840_41D6_EF2809F3FA18_camera","class":"PanoramaPlayListItem","media":"this.panorama_B44E4360_B829_6840_41D6_EF2809F3FA18","player":"this.ViewerAreaLabeled_906B7202_9EE5_932C_41D2_2A6A225D6A23PanoramaPlayer"},{"id":"panorama_B44E4360_B829_6840_41D6_EF2809F3FA18_tcap0","distance":50,"class":"TripodCapPanoramaOverlay","hfov":49.5,"image":"this.res_AA25A475_B839_6840_41D1_4294A9B2E3C3"},{"movements":[{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_B337D613_B829_2BC0_41CF_E442958F5877"},{"id":"PanoramaPlayListItem_8DC3F219_9EFF_935C_41E2_8E51AABE91DE","camera":"this.panorama_9293A4E2_9EE4_90EF_41E1_498E5620A058_camera","class":"PanoramaPlayListItem","media":"this.panorama_9293A4E2_9EE4_90EF_41E1_498E5620A058","player":"this.ViewerAreaLabeled_90684203_9EE5_932C_41DB_6E36D80731E4PanoramaPlayer"},{"id":"res_AA25A475_B839_6840_41D1_4294A9B2E3C3","levels":[{"height":1024,"url":"media/res_AA25A475_B839_6840_41D1_4294A9B2E3C3_0.png","class":"ImageResourceLevel","width":1024}],"class":"ImageResource"}],"defaultMenu":["fullscreen","mute","rotation"],"scripts":{"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"clone":TDV.Tour.Script.clone,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"historyGoBack":TDV.Tour.Script.historyGoBack,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizFinish":TDV.Tour.Script.quizFinish,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"openLink":TDV.Tour.Script.openLink,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"executeJS":TDV.Tour.Script.executeJS,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"showPopupImage":TDV.Tour.Script.showPopupImage,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getComponentByName":TDV.Tour.Script.getComponentByName,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getPixels":TDV.Tour.Script.getPixels,"isPanorama":TDV.Tour.Script.isPanorama,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"textToSpeech":TDV.Tour.Script.textToSpeech,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"registerKey":TDV.Tour.Script.registerKey,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"playAudioList":TDV.Tour.Script.playAudioList,"startMeasurement":TDV.Tour.Script.startMeasurement,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getKey":TDV.Tour.Script.getKey,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"resumePlayers":TDV.Tour.Script.resumePlayers,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"init":TDV.Tour.Script.init,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"createTween":TDV.Tour.Script.createTween,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getOverlays":TDV.Tour.Script.getOverlays,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"mixObject":TDV.Tour.Script.mixObject,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getMainViewer":TDV.Tour.Script.getMainViewer,"initQuiz":TDV.Tour.Script.initQuiz,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"cloneBindings":TDV.Tour.Script.cloneBindings,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setMapLocation":TDV.Tour.Script.setMapLocation,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"toggleVR":TDV.Tour.Script.toggleVR,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizShowScore":TDV.Tour.Script.quizShowScore,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"disableVR":TDV.Tour.Script.disableVR,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"getMediaByName":TDV.Tour.Script.getMediaByName,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"shareSocial":TDV.Tour.Script.shareSocial,"historyGoForward":TDV.Tour.Script.historyGoForward,"quizStart":TDV.Tour.Script.quizStart,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"showWindow":TDV.Tour.Script.showWindow,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"existsKey":TDV.Tour.Script.existsKey,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"enableVR":TDV.Tour.Script.enableVR,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"downloadFile":TDV.Tour.Script.downloadFile,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setValue":TDV.Tour.Script.setValue,"setLocale":TDV.Tour.Script.setLocale,"unregisterKey":TDV.Tour.Script.unregisterKey,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"translate":TDV.Tour.Script.translate,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList},"propagateClick":false,"backgroundColorRatios":[0],"gap":10,"scrollBarColor":"#000000","height":"100%","width":"100%","layout":"absolute"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.38, Wed Oct 1 2025