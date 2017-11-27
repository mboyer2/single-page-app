var myRouter = new VueRouter({
    routes: [
        {
            path: '/', 
            component: function(resolve, reject){
                $.get('partials/index.partial.html', function(htmlFromServer){
                    var newComponent = {
                        template: htmlFromServer,
                        created: function(){ console.log('created the illustration component')},
                        destroyed: function(){ console.log('destroyed the illustration component')}
                    }
                    resolve(newComponent)
                })
            }
        },
        
        {
            path: '/illustration', 
            component: function(resolve, reject){
                $.get('partials/illustration.partial.html', function(htmlFromServer){
                    var newComponent = {
                        template: htmlFromServer,
                        created: function(){ console.log('created the illustration component')},
                        destroyed: function(){ console.log('destroyed the illustration component')}
                    }
                    resolve(newComponent)
                })
            }
        },
        {
            path: '/about', 
            component: function(resolve, reject){
                $.get('partials/about.partial.html', function(htmlFromServer){
                    var newComponent = {
                        template: htmlFromServer,
                        created: function(){ console.log('created the about component')},
                        destroyed: function(){ console.log('destroyed the about component')}
                    }
                    resolve(newComponent)
                })
            }
        },
        {
            path: '/web', 
            component: function(resolve, reject){
                $.get('partials/web.partial.html', function(htmlFromServer){
                    var newComponent = {
                        template: htmlFromServer,
                        created: function(){ console.log('created the web component')},
                        destroyed: function(){ console.log('destroyed the web component')}
                    }
                    resolve(newComponent)
                })
            }
        },
    ]
})    



var mainVm = new Vue({
    el: '#app',
    router: myRouter,
    data: {

    }
})





