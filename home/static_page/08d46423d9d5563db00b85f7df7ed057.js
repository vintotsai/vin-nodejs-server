require = (function(r, e, n) {
  function t(n, o) {
    function i(r) {
      return t(i.resolve(r))
    }
    function f(e) {
      return r[n][1][e] || e
    }
    if (!e[n]) {
      if (!r[n]) {
        var c = 'function' == typeof require && require
        if (!o && c) return c(n, !0)
        if (u) return u(n, !0)
        var l = new Error("Cannot find module '" + n + "'")
        throw ((l.code = 'MODULE_NOT_FOUND'), l)
      }
      i.resolve = f
      var s = (e[n] = new t.Module(n))
      r[n][0].call(s.exports, i, s, s.exports)
    }
    return e[n].exports
  }
  function o(r) {
    ;(this.id = r), (this.bundle = t), (this.exports = {})
  }
  var u = 'function' == typeof require && require
  ;(t.isParcelRequire = !0),
    (t.Module = o),
    (t.modules = r),
    (t.cache = e),
    (t.parent = u)
  for (var i = 0; i < n.length; i++) t(n[i])
  return t
})(
  {
    6: [function(require, module, exports) {}, {}],
    4: [
      function(require, module, exports) {
        'use strict'
        require('../style/index.less')
        var t =
          'https://img.suibianbuy.cn/user_icon_avator_result.png?imageView2/1/w/60/h/60'
        function o() {
          $('.tishi,.bottom').css('display', 'block')
        }
        function e() {
          var t = p('type'),
            o = decodeURIComponent(p('share_url'))
          if (!window.location.search)
            return (
              $('body')
                .text(window.location.href + '  试着给链接配些参数')
                .css('fontSize', '14px'),
              !1
            )
          switch ((console.log('shareUrl', o), console.log('type', t), t)) {
            case 'goods':
              i()
              break
            case 'shop_invite':
              s()
              break
            case 'shop':
              c()
              break
            case 'brand':
              n()
              break
            case 'activity':
              a()
              break
            case 'topic':
              r()
          }
          window.navigator.userAgent.toLowerCase().match(/micromessenger/i) ||
            d(o)
        }
        function i() {
          var t = decodeURIComponent(p('title')),
            e = p('price'),
            i = 0
          try {
            i = Math.round(100 * decodeURIComponent(p('price'))) / 100
          } catch (t) {
            i = e
          }
          var n = p('photo')
          $('#goods-title').text(t),
            $('#goods-price').text('￥' + i),
            $('#goods-img').attr('src', n),
            setTimeout(function() {
              $('#goods').css('display', 'block'), o()
            }, 20)
        }
        function n() {
          var t = decodeURIComponent(p('title')),
            e = decodeURIComponent(p('photo'))
          $('#brand-title').text(t),
            $('#brand-bg').attr('src', e),
            setTimeout(function() {
              $('#brand').css('display', 'block'), o()
            }, 20)
        }
        function c() {
          var e = decodeURIComponent(p('name')),
            i = decodeURIComponent(p('photo'))
          $('#shop-bg').attr(
            'src',
            'https://img.suibianbuy.cn/7mall_shop_bg.jpg'
          ),
            $('#shop-img').attr('src', i ? i + '?imageView2/1/w/60/h/60' : t),
            $('#shop-name').text('欢迎来到' + e + '的店铺'),
            setTimeout(function() {
              $('#shop').css('display', 'block'), o()
            }, 20)
        }
        function s() {
          var e = decodeURIComponent(p('name')),
            i = decodeURIComponent(p('photo'))
          $('#invite-name').text(e + '邀请您加入Ola商城'),
            $('#invite-img').attr('src', i ? i + '?imageView2/1/w/60/h/60' : t),
            $('#invite-bg').attr(
              'src',
              'https://img.suibianbuy.cn/7mall_shop_bg.jpg'
            ),
            setTimeout(function() {
              $('#invite').css('display', 'block'), o()
            }, 20)
        }
        function a() {
          var t = decodeURIComponent(p('photo'))
          $('#activity-img').attr('src', t + '?imageslim'),
            setTimeout(function() {
              $('#activity').css('display', 'block'), o()
            }, 20)
        }
        function r() {
          var t = decodeURIComponent(p('photo')),
            e = decodeURIComponent(p('title'))
          $('#topic-img').attr('src', t + '?imageslim'),
            $('#topic-title').text(e),
            setTimeout(function() {
              $('#topic').css('display', 'block'), o()
            }, 20)
        }
        function d(t) {
          console.log('jump'), (window.location.href = t)
        }
        function p(t) {
          var o = document.location.search
          if (null != o) {
            var e = t + '=',
              i = o.indexOf(e)
            if (-1 != i) {
              var n = o.substring(i + e.length),
                c = n.indexOf('&')
              return -1 != c ? n.substring(0, c) : n
            }
            return null
          }
          return null
        }
        $(document).ready(function() {
          e(),
            $('#shop-img,#invite-img').on('error', function() {
              $(this).attr('src', t)
            })
        })
      },
      { '../style/index.less': 6 }
    ]
  },
  {},
  [4]
)
