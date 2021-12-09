/**
 * skylark-domx-plugins-ranges - The skylark ranges plugins library for dom api extension
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-domx-plugins/skylark-domx-plugins-ranges/
 * @license MIT
 */
define(["skylark-langx","skylark-domx-styler","skylark-domx-noder","skylark-domx-eventer","skylark-domx-query","skylark-domx-plugins-base","./ranges"],function(s,t,e,r,o,i,a){"use strict";var n=i.Plugin.inherit({klassName:"Progress",pluginName:"domx.ranges.progressl",options:{selectors:{progressBar:".progress-bar",seek:".seek",seekTooltip:".seek-tooltip"}},_construct:function(s,t){i.Plugin.prototype._construct.call(this,s,t);let e=this.$(),r=this.options.selectors;this.$progressBar=e.find(r.progressBar),this.$seek=e.find(r.seek),this.$seekTooltip=e.find(r.seekTooltip),this.listenTo(this.$seek,"mousemove",this.updateSeekTooltip),this.listenTo(this.$seek,"input",this.skipAhead)},formatTime:function(s){const t=new Date(1e3*s).toISOString().substr(11,8);return{minutes:t.substr(3,2),seconds:t.substr(6,2)}},updateDuration:function(){var s=this._media;const t=Math.round(s.duration());this.$seek.attr("max",t),this.$progressBar.attr("max",t)},updateProgress:function(s){this.$seek.val(s),this.$progressBar.val(s)},updateSeekTooltip:function(s){const t=Math.round(s.offsetX/s.target.clientWidth*parseInt(s.target.getAttribute("max"),10));this.$seek.attr("seek",t);const e=this.formatTime(t);this.$seekTooltip.text(`${e.minutes}:${e.seconds}`)},skipAhead:function(s){const t=s.target.dataset.seek?s.target.dataset.seek:s.target.value;this.$progressBar.val(t),this.$seek.val(t)}});return i.register(n),a.Progress=n});
//# sourceMappingURL=sourcemaps/progress.js.map
