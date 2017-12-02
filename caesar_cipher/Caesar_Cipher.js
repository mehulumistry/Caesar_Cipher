
let fs = require('fs');
let readline = require('readline');


let value = 0;
let count = 0;
let st = fs.readFileSync('message.txt','utf-8');
let str = 0;

let key = 5;
let d = 0;
let fin ='';
let message ='';

decrypt(st,key);




function decrypt(arre,key){
    //let arr = [];

    arre.toLowerCase();




    for(i in arre) {

        //console.log(arre.charCodeAt(s));
        //value = arre.charCodeAt(s);

        if(count === 3){
            key = key + 2;

            key = key%26;

            count = 0;
        }


        let c= arre.charAt(i);   // convert to character
        let value=c.charCodeAt(0) // retrieve character value


        if(value<97 || value > 122 ) {

            message = message + c ;
            count = count+1;
        }


        else {
            let str = value - 97;
            let d = str - key;

            if(d<0){
                d = d+ 26;
            }
            d = d+97;

            fin = String.fromCharCode(d);
            message = message+fin;

            count++;

        }



        //console.log(message);


        //string.fromCharCode(arr[s]);





    }
    console.log(message);


}
fs.writeFileSync('solution.txt',message);