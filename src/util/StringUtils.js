class StringUtils {

    constructor(){
        this.desc = "StringUtils";
    }

    static isEmpty(str) { 
        return (str === null || str === undefined || str === '' ) ? true : false;
    }  

    static isNotEmpty(str) {
        return !this.isEmpty(str);
    }

    // static isBlank(str) {  
    //     return (str === null || str === undefined) && (str.length !==0)? true : false;
    // }
}


export default StringUtils;