// 去除banner图
// var full_page = document.getElementsByClassName('full_page')
// if (full_page.length != 0) {
//   full_page[0].style.background = 'transparent'
// }

// 设置页脚博主会动的心
$(document).ready(function (e) {
  $('.copyright').html(
    '©2017-2020 <i style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;" class="fa fa-heartbeat"></i> 泰戈尔'
  )
})

// 移除页脚样式
var app = document.getElementById('footer')
app.removeAttribute('id')

// 评论
var appID = 'hMdK94wfdatcFkq33PWNPD1F-MdYXbMMI'
var appKEY = 'XVv6zo3h2lE63SVBDCwpuVSP'
var placeholder1 = 'tiger 页密码：123456'
var per = 2
var lazy = 1
var slanguage = 'zh'
var bgimg = 'https://cdn.jsdelivr.net/gh/drew233/cdn/20200409110727.webp'
var atemoji_array = {
  huaji:
    'https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/smilies/icon_huaji.gif',
  baiyan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baiyan.png',
  bishi: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bishi.png',
  bizui: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bizui.png',
  chan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/chan.png',
}
var repo_pt_img = '/Artitalk/Artitalk-img/'
var repo_pt_mp3 = '/Artitalk/Artitalk-mp3/'
var repo_pt_mp4 = '/Artitalk/Artitalk-mp4/'
