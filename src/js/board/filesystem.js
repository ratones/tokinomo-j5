const fs = nw.require('fs');
import DeviceSettins from './settings';
class FileSystem{
    constructor(){}    
    writeActivation(){
        let activations = DeviceSettins.persistKey('activations');
        if(!activations) activations = 0;
        activations++;
        let dt = new Date();
        let date = dt.getDate()+'.'+(dt.getMonth()+1)+'.'+dt.getFullYear();
        let time = dt.getHours()+':'+dt.getMinutes()+':'+dt.getSeconds();
        fs.appendFileSync('C:/Device/activations.txt',`\r\n${activations}\t${date}\t${time}`);
        DeviceSettins.persistKey('activations',activations);
    }
}
export default new FileSystem();