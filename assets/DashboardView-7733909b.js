import{_ as d,R as _,r as u,o as p,c as m,a as e,b as o,w as n,d as i,j as k,F as f}from"./index-00a4ed67.js";const{VITE_APP_URL:$}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"jenny7532",BASE_URL:"/vue-week6/",MODE:"production",DEV:!1,PROD:!0},g={data(){return{checkSuccess:!1}},components:{RouterView:_},methods:{checkLogin(){const s=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=s;const t=`${$}v2/api/user/check`;this.$http.post(t,s).then(c=>{c.data.success||(alert("您尚未登入!"),this.$router.push("/login"))}).catch(()=>{alert("您尚未登入!"),this.$router.push("/login")})},logout(){document.cookie=`hexToken=; expires=${new Date};`,this.$router.push("/login")}},mounted(){this.checkLogin()}},w=i("hr",null,null,-1);function x(s,t,c,V,P,a){const r=u("router-link"),l=u("router-view");return p(),m(f,null,[e(" 這是「管理者」使用的後台頁面 "),o(r,{to:"/admin/products"},{default:n(()=>[e("後台產品列表")]),_:1}),e(" | "),o(r,{to:"/admin/orders"},{default:n(()=>[e("後台訂單列表")]),_:1}),e(" | "),o(r,{to:"/"},{default:n(()=>[e("回前台")]),_:1}),e(" | "),i("a",{href:"#",onClick:t[0]||(t[0]=k((...h)=>a.logout&&a.logout(...h),["prevent"]))},"登出"),w,o(l)],64)}const E=d(g,[["render",x]]);export{E as default};
