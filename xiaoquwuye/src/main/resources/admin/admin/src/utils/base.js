const base = {
    get() {
        return {
            url : "http://localhost:8080/xiaoquwuye/",
            name: "xiaoquwuye",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xiaoquwuye/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "名城小区物业管理平台"
        } 
    }
}
export default base
