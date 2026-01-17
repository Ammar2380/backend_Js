function getdata(dataid,getnextdata){
    setTimeout(() => {
        console.log("hello",dataid)
        if(getnextdata){

            getnextdata()
        }
    }, 3000);
}
getdata(1,()=>{
    getdata(2,()=>{
        getdata(3,()=>{
            getdata(4)
        })
    })
})
//  we need data1 after 2s then data2 so on...........
// also known as callback hell
