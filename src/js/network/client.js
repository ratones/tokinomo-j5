import * as $ from 'jquery';
export default class HttpClient{
    constructor(){
        this.baseUrl = 'http://www.tokinomo.com';
    }

    checkConnection(){
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:this.baseUrl,
                type:'GET',
                success:()=>{
                    resolve();
                },
                error:()=>{
                    reject();
                }
            });
        });
    }

    post(data){
        $.ajax({
            url: this.baseUrl,
            data: data,
            type: 'POST',
            contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
            processData: false, // NEEDED, DON'T OMIT THIS
            // ... Other options like success and etc
        });
    }
}