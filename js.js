let exampleOut = `
const #nameObj = {
  /**
   * get value by key
   * @param {*} keyObj: key data
   * @param {*} data: obj
   * @param {*} defaultValue: value when empty
   */
  valueByKey: function(keyObj, data, defaultValue = '') {
    if (data[keyObj]) {
      return data[keyObj];
    } else {
      return defaultValue;
    }
  },
  keyObj: {
#key
  },
}; 
export default #nameObj;
`;

function getData(){
	let inputText = document.getElementById("inputJson").value;
	let NameObj = document.getElementById("objName").value;
		// 
	consoleJson(NameObj,inputText)
}
/**
 * print in consonle obj
 * @param {*} nameObj 
 * @param {*} dataIn 
 */
function consoleJson(nameObj,dataIn){
	try 
	{
		let inputJson = JSON.parse(dataIn)
		//get key
		var keys = [];
		for(var k in inputJson) keys.push(k);
		if (keys.length == 0) {
			return
		}
		// out put param
		let outKey = "";
		keys.forEach(item => {
			outKey = outKey + "    " + item + ": '"+ item + "',\n";
			
			if (isArray(inputJson[item])){
				//data la mang
				console.log("arr" + "" + inputJson[item][0]);
				consoleJson(item,"" + inputJson[item][0]);
			}
			else
			{
				//
        consoleJson(item,inputJson[item]);
			}
		});
		//fill data to example
		let jsonOut = exampleOut
		jsonOut = jsonOut.replace("#nameObj",nameObj)
		jsonOut = jsonOut.replace("#nameObj",nameObj)
		jsonOut = jsonOut.replace("#key",outKey)
		// log result
		console.log("name obj:" + nameObj + ".js")
		console.log(jsonOut);
	}
	catch (err) 
	{
		console.log(err);
	}
}

function isArray(what) {
	return Object.prototype.toString.call(what) === '[object Array]';
}