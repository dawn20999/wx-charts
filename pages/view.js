var helloData = {
    name: 'WeChart'
}

Page({
    data: helloData,
    changeName: function(e) {
        this.setData ({
            name: 'MINA'
        })
    }
})